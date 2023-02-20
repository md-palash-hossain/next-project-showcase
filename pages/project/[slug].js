import React from 'react';
import {gitLink} from '@/components/tools';
import projectData from '@/data';
import Link from 'next/link';
// import Image from 'next/image';
import Image from '@/components/Image';
import Iframe from '@/components/Iframe';

export async function getStaticProps({params}){
    const project = projectData.find((p)=>p.name === params.slug.replace('.html',''))

    return {
        props : {
            project
        }
    }
}

export async function getStaticPaths() {
    const renderPaths = projectData.map((project)=>({ params: {slug: project.name}}))
    return {
        paths:renderPaths,
        fallback : false
    }
}

function ProjectModal({project}) {
  const name = project.name.replaceAll('-',' ').toUpperCase();
  const image = gitLink(project.name,'project.png')
 

  return (
   
      <div className=" mt-10 mx-auto  p-4 bg-white rounded-lg " >
        <Link href='/' className="fixed top-0 right-0 mt-2 mr-2">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>

        </Link>
       
        <div className="flex flex-col min-h-80">
          <div className="flex-1 p-4 border-2">
            {/* <Image src={'/demo.png'} alt={project.name} width={500} height={300} /> */}
            <Iframe src={project.homepage}/>
            
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

            <a href={project.html_url} target="_blank" rel="noreferrer" className="inline-block px-4 py-2 my-2 bg-slate-900 text-gray-50 mr-5 rounded-md">
              View on GitHub
            </a>
            <a href={project.homepage} target="_blank" rel="noreferrer" className="inline-block px-4 py-2 my-2 bg-slate-900 text-gray-50 mx-5 rounded-md">
              Live preview
            </a>

            </div>
          </div>
        </div>
        <div className="min-h-60 p-4">
          <h3 className="font-medium">Project Description :</h3>
          <p className="text-sm pb-10">{project.description}</p>
        </div>
      </div>
    
  );
}

export default ProjectModal;
