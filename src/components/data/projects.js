import byfimage  from "../../assets/img/byfimg.jpg"
import gym from "../../assets/img/gym.jpg"
import ecom from "../../assets/img/ecom.jpg"
export const projects = [
{
    id: 1,
    img: byfimage,
    title: "BYF Finance",
    description: "Designed and developed a production-ready mortgage brokerage website for an Australian-based company using React, Vite and Tailwind CSS, delivering a responsive, accessible and performance-optimized user experience. ",
    tech: ["React-vite", "Tailwind CSS", "Git", "Github", "Netlify" ],
    live: "https://www.byffinance.com.au",
},

{
    id:2,
    img:gym,
    title: "High Street gym",
    description: "Developed a full-stack gym management system with React.js, Node.js, and MySQL.Implemented authentication, session booking, and RESTful APIs.Focused on modular, reusable components and responsive UI",
    tech: ["Node.js", "express.js", "mysql", "React","JavaScript",  "Rest API", "XML"],
    live: "https://github.com/UtkarshaGN/High-Street"
    
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
    live:"https://shop-easy-1fxtwd2cb-utkarshagns-projects.vercel.app/ "
}
]