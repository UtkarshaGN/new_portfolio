import React from 'react'
import profile from '../../assets/img/profile.jpg'

export default function Home() {
  return (
    <section className='py-20 bg-linear-to-br from-slate-50 via-white to-cyan-50 overflow-hidden'>
      <div className='max-w-7xl mx-auto px-6 lg:px-8'>
        <div className='flex flex-col gap-10 md:flex-row items-center'>
          <div className='flex-1 animate-[fadeInLeft_0.8s_ease-out]'>
            <div className='inline-block px-3 py-1 rounded-full bg-cyan-100 text-cyan-700 text-sm font-medium mb-4'>
              Frontend-Focused Full Stack Developer
            </div>
            <h1 className='font-bold text-4xl md:text-5xl leading-tight text-slate-800'>Hi, I’m <span className='text-cyan-600'>Utkarsha</span></h1>
            <p className='mt-4 text-lg text-slate-600'>I build modern, responsive, and user-friendly web experiences with React, Tailwind CSS, and JavaScript.</p>
            <p className='mt-6 text-slate-600 leading-7'>Passionate about turning ideas into polished digital products, I enjoy crafting intuitive interfaces and continuously growing my skills in full-stack development with Next.js, Node.js, Express.js, MongoDB, and AWS.</p>
            <div className='mt-8 flex flex-wrap gap-4'>
              <a href='#project' className='px-5 py-3 bg-amber-400 text-white rounded-full shadow-md hover:bg-cyan-600 transition-transform duration-300 hover:-translate-y-1'>View Projects</a>
              <a href='#contact' className='px-5 py-3 border border-slate-300 rounded-full hover:bg-slate-100 transition-transform duration-300 hover:-translate-y-1'>Contact Me</a>
            </div>
          </div>

          <div className='flex-1 flex justify-center animate-[fadeInRight_0.8s_ease-out]'>
            <div className='p-3 rounded-3xl bg-white shadow-2xl hover:scale-105 transition-transform duration-300'>
              <img src={profile} alt='Utkarsha' className='w-full max-w-md rounded-2xl object-cover' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
