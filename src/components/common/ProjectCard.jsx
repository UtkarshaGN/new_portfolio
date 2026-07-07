import React from 'react'

export default function ProjectCard({ project }) {
  const { img, title, description, tech, live } = project

  return (
    <div className='group bg-white p-6 text-left shadow-lg rounded-2xl border border-slate-200 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300'>
      <div className='w-full h-44 mb-4 overflow-hidden rounded-xl'>
        <img src={img} alt={title} className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105' />
      </div>

      <h2 className='text-xl font-semibold mb-2 text-slate-800'>{title}</h2>
      <p className='text-slate-600 mb-4 leading-6'>{description}</p>

      <div className='flex flex-wrap gap-2 mb-5'>
        {tech.map((item) => (
          <span key={item} className='px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium'>
            {item}
          </span>
        ))}
      </div>

      <a
        href={live}
        target='_blank'
        rel='noreferrer'
        className='inline-block px-4 py-2 rounded-full bg-amber-400 text-white font-medium shadow-md hover:bg-cyan-600 transition-all duration-300'
      >
        View Project
      </a>
    </div>
  )
}
