import React from 'react'

const skills = [ 'Next.js','React.js', 'JavaScript', 'Tailwind CSS','CSS3', 'HTML5', 'MySql','Express.js', 'Node.js', 'Mongodb', 'AWS', 'Git', 'Github', 'Figma']

export default function Skills() {
  return (
    <section id='skills' className='scroll-mt-24 bg-white py-20'>
      <div className='mx-auto max-w-6xl px-6 lg:px-8'>
        <div className='mb-10 text-center'>
          <p className='text-sm font-semibold uppercase tracking-[0.25em] text-cyan-600'>Skills</p>
          <h2 className='mt-2 text-3xl font-bold text-slate-800 md:text-4xl'>Core technologies I use</h2>
        </div>

        <div className='flex flex-wrap justify-center gap-4'>
          {skills.map((skill, index) => (
            <div
              key={skill}
              className='rounded-full border border-amber-400 bg-cyan-200 px-5 py-3 text-lg font-semibold text-slate-700 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:bg-cyan-50 hover:text-cyan-700'
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

