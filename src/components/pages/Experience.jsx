import React, { useState } from 'react'
import experiences from '../data/experienceData'

export default function Experience() {
  const [selectedExperience, setSelectedExperience] = useState(experiences[0])

  const descriptionPoints = Array.isArray(selectedExperience.description)
    ? selectedExperience.description
    : selectedExperience.description
        .split('•')
        .map((item) => item.trim())
        .filter(Boolean)

  return (
    <section id='experience' className='py-20 bg-slate-50'>
      <div className='max-w-6xl mx-auto px-6 lg:px-8'>
        <div className='text-center mb-12'>
          <p className='text-cyan-600 font-semibold uppercase tracking-[0.2em] text-sm'>Experience</p>
          <h2 className='text-3xl md:text-4xl font-bold text-slate-800 mt-2'>Where I’ve worked</h2>
        </div>

        <div className='grid md:grid-cols-[0.9fr_1.1fr] gap-8 items-start'>
          <div className='space-y-4'>
            {experiences.map((item) => {
              const isActive = selectedExperience.id === item.id

              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedExperience(item)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                    isActive ? 'bg-cyan-500 text-white border-cyan-500 shadow-lg' : 'bg-white text-slate-700 border-slate-200 hover:border-cyan-300'
                  }`}
                >
                  <h3 className='text-lg font-semibold'>{item.company}</h3>
                  <p className={`text-sm mt-1 ${isActive ? 'text-cyan-50' : 'text-slate-500'}`}>{item.duration}</p>
                </button>
              )
            })}
          </div>

          <div className='bg-white rounded-3xl p-8 shadow-xl border border-slate-200 animate-[fadeInRight_0.6s_ease-out]'>
            <div className='inline-block px-3 py-1 rounded-full bg-cyan-100 text-cyan-700 text-sm font-medium mb-4'>
              {selectedExperience.role}
            </div>
            <h3 className='text-2xl font-bold text-slate-800'>{selectedExperience.company}</h3>
            <ul className='mt-4 space-y-3'>
              {descriptionPoints.map((point, index) => (
                <li key={`${selectedExperience.id}-${index}`} className='flex gap-3 text-slate-600 leading-7'>
                  <span className='mt-2 h-2.5 w-2.5 rounded-full bg-cyan-500 shrink-0'></span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}