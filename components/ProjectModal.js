import React from 'react';
import { gitLink } from './tools';
import Image from './Image';

function ProjectModal({ project, setProject }) {
  const name = project.name.replaceAll('-',' ').toUpperCase();
  const image = gitLink(project.name,'project.png')


  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-75 z-50" onClick={()=>{setProject(null)}}>
      <div className="relative mt-10 mx-auto max-w-screen-xl p-4 bg-white rounded-lg overflow-y-auto" style={{ height: '90%', width: '90%' }}>
        <button onClick={()=>{setProject(null)}} className="absolute top-0 right-0 mt-2 mr-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <div className="flex flex-col min-h-80">
          <div className="flex-1 p-4">
            <Image src={'https://raw.githubusercontent.com/md-palash-hossain/quality-crete/main/image/buildings/2.jpg'} alt={project.name} />
            
          </div>
          <div className="flex-1 p-4">
            <h3 className="text-lg font-medium">{name}</h3>
            <ul className="language-list">
            {project.language.map(language => (
            <li key={language.name} className="text-sm text-gray-600">
              {`${language.name}: ${language.percentage}%`}
            </li>
          ))}
            </ul>
            <div className='mt-4'>

            <a href={project.html_url} target="_blank" rel="noreferrer" className="inline-block px-4 py-2 bg-slate-900 text-gray-50 mr-5 rounded-md">
              View on GitHub
            </a>
            <a href={project.homepage} target="_blank" rel="noreferrer" className="inline-block px-4 py-2 bg-slate-900 text-gray-50 mx-5 rounded-md">
              Live preview
            </a>

            </div>
          </div>
        </div>
        <div className="min-h-60 p-4 overflow-y-scroll">
          <p className="text-sm">{project.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
