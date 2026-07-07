import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className='bg-cyan-400  py-10'>
      <div className='max-w-6xl mx-auto px-2'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div>
            <h3 className='text-xl font-semibold mb-3'>Developer</h3>
            <p className='text-sm'>Building modern web experiences with React, Vite, and Tailwind CSS.</p>
          </div>

          <div>
            <h3 className='text-xl font-semibold mb-3'>Quick Links</h3>
            <ul className='space-y-2 text-sm'>
              <li><a href="#home" className='hover:underline'>Home</a></li>
              <li><a href="#experience" className='hover:underline'>Experience</a></li>
              <li><a href="#project" className='hover:underline'>Project</a></li>
              <li><a href="#skills" className='hover:underline'>Skills</a></li>
            </ul>
          </div>

          <div>
            <h3 className='text-xl font-semibold mb-3'>Contact</h3>
            <ul className='space-y-2 text-sm'>
              <li>Email: utkarsha.gajanan@gmail.com</li>
              <li>Phone: 0469706075</li>
              <li>Location:  Brisbane, Australia</li>
            </ul>
          </div>
        </div>

        <div className='mt-8 flex flex-col md:flex-row items-center justify-between border-t border-black pt-6 text-sm'>
          <p>Made with <span className='text-red-500'>❤</span> by Utkarsha</p>
          <div className='flex gap-4 mt-3 md:mt-0'>
            <a href='https://github.com/UtkarshaGN' target='_blank' rel='noreferrer' aria-label='GitHub' className='hover:text-gray-600'>
              <FaGithub size={20} />
            </a>
            <a href='https://www.linkedin.com/in/utkarsha-naik-074881275/' target='_blank' rel='noreferrer' aria-label='LinkedIn' className='hover:text-gray-600'>
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
