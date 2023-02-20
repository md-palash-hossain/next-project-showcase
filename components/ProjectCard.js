import { gitLink } from "./tools";
// import Image from "./Image";
import Link from "next/link";
import Image from "next/image";

function ProjectCard({ project,setProject }) {
  const image = gitLink(project.name,'project.png')

  const name = project.name.replaceAll('-',' ').toUpperCase();
    return (
    <div className="bg-white shadow-md rounded p-2 grid grid-cols-[max-content,1fr,70px] ">
        <Image src={'/demo.png'} alt={project.name} width={100} height={50} />
      <div className="px-1">

        <h3 className="text-sm mr-1 mt-3 font-medium">{name}</h3>
        <ul className=" flex flex-wrap" >
          {project.language.map(language => (
            <li key={language.name} className="text-xs text-gray-600 bg-slate-100 p-1 m-1 rounded" >
              {`${language.name}`}
            </li>
          ))}
        </ul>
      </div>
        
        <Link href={`project/${project.name}`} className="my-auto inline-block bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-1 text-center rounded ">
        Details
        </Link>
      </div>
    );
  }
  export default ProjectCard;