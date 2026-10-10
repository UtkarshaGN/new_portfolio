import byfimage  from "../../assets/img/byfimg.jpg"
import gym from "../../assets/img/gym.jpg"
import ecom from "../../assets/img/ecom.jpg"
import  energy from '../../assets/img/energytracker.png'
import cargo from '../../assets/img/cargo.png'
export const projects = [
{
    id: 1,
    img: byfimage,
    title: "BYF Finance",
    description: "Designed and developed a production-ready mortgage brokerage website for an Australian-based company using React, Vite and Tailwind CSS, delivering a responsive, accessible and performance-optimized user experience. ",
    tech: ["React-vite", "Tailwind CSS", "JavaScript","Rensponsive design", "HTML", "Netlify" ],
    live: "https://www.byffinance.com.au",
},

{
    id:2,
    img:cargo,
    title: "CarGo",
    description: "Cargo is a full-stack car rental web application built using the MERN stack.It allows users to explore available cars, view car details, register and log in to their accounts, and make bookings through a responsive user interface.",
    tech: ["React.js", "Tailwind css", "Express.js", "Node.js", "MongoDB", "Postman"],
    live:"https://github.com/UtkarshaGN/Cargo"
},

// {
//     id:3,
//     img:imdb,
//     title: "IMDB Movie",
//     description: "Built a movie discovery app using React.js and API-based data rendering.Implemented dynamic pages, carousel UI, and loading skeletons. API integration using real-time movie data",
//     tech: ["React", "vite", "Tailwind css", "API", "Vercel"],
//     live:"https://imdbwebsite.netlify.app/ "
// },
{
    id:3,
    img:ecom,
    title: "ShopEase-E-commerce Web Application ",
    description: "Developed a responsive e-commerce web application using React.js and an external REST API.Implemented pagination The application allows users to browse products, filter products by brand and category, and sort products by name and price.",
    tech: ["React", "JavaScript (ES6+),", "Tailwind css", "Context API", "Rest api", "Axios"],
   // live:"https://shop-easy-1fxtwd2cb-utkarshagns-projects.vercel.app/ "
   live:"https://shop-easy-liart.vercel.app/"
},

{
    id:4,
    img:energy,
    title: "Energy Tracker App ",
    description: "Energy Tracker App is a full-stack web application that helps users monitor and analyze their energy consumption across different locations. The system allows users to manage locations, track appliance usage, and view energy statistics.",
    tech: ["JavaScript", "Tailwind css", "Express.js", "Node.js", "HTML", "CSS"],
    live:"https://energy-tracker-wbcd.onrender.com"
},


{
    id:5,
    img:gym,
    title: "High Street gym",
    description: "Developed a full-stack gym management system with React.js, Node.js, and MySQL.Implemented authentication, session booking, and RESTful APIs.Focused on modular, reusable components and responsive UI",
    tech: ["Node.js", "express.js", "mysql", "React","JavaScript",  "Rest API", "XML"],
    live: "https://github.com/UtkarshaGN/High-Street"
    
},

]