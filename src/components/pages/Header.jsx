import React from 'react'

export default function Header() {
  return (
    <header className='sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200'>
      <div className='max-w-7xl mx-auto px-6 py-4 flex items-center justify-between'>
        <a href='#home' className='flex items-center gap-3 group'>
          <div className='w-10 h-10 rounded-full bg-linear-to-br from-cyan-400 to-cyan-900 flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-105 transition-transform duration-300'>
            U
          </div>
          <div>
            <h2 className=' font-serif text-lg font-semibold text-slate-800'>Utkarsha</h2>
            
          </div>
        </a>

        <nav className='hidden md:flex items-center gap-6 text-sm font-medium text-slate-600'>
          <a href='#home' className='hover:text-cyan-600 transition'>Home</a>
          <a href='#experience' className='hover:text-cyan-600 transition'>Experience</a>
          <a href='#project' className='hover:text-cyan-600 transition'>Projects</a>
          <a href='#skills' className='hover:text-cyan-600 transition'>Skills</a>
         
        </nav>
      </div>
    </header>
  )
}
