import React from 'react'
import ProjectCard from '../common/ProjectCard'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section id='project' className='py-20 bg-slate-50'>
      <div className='max-w-7xl mx-auto px-6 lg:px-20'>
         <div className='text-center mb-12'>
          <p className='text-cyan-600 font-semibold uppercase tracking-[0.2em] text-sm'>My Projects</p>
          <h2 className='text-3xl md:text-4xl font-bold text-slate-800 mt-2'>What can i make</h2>
        </div>
        
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
