import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

const ProjectList = ({ projects }) => {
  const [project,setProject]= useState(null);
  
  return (
    <>
    
    <ul className="grid mx-auto pb-16 mt-16 sm:mt-0">
      {projects.map((project) => (
        <li key={project.id} className="max-w-[800px] px-4 mb-8 place-content-center">
          <ProjectCard project={project}   />
        </li>
      ))}
    </ul>
    
    {
    project && <ProjectModal project={project} setProject={setProject}/>
   }
      </>
  );
};
export default ProjectList;
