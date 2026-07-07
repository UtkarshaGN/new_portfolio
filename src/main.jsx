import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './components/pages/Home.jsx'
import Header from './components/pages/Header.jsx'
import Footer from './components/pages/Footer.jsx'
import Projects from './components/pages/Projects.jsx'
import Experience from './components/pages/Experience.jsx'
import Skills from './components/pages/Skills.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <Home />
    <Experience/>
    <Projects/>
    <Skills/>
    <Footer/>
  </StrictMode>,
)
