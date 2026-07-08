import byfimage  from "../../assets/img/byfimg.jpg"
import gym from "../../assets/img/gym.jpg"
import imdb from "../../assets/img/imdb_movie.jpg"
export const projects = [
{
    id: 1,
    img: byfimage,
    title: "BYF Finance",
    description: "Designed and developed a production-ready mortgage brokerage website for an Australian-based company using React, Vite and Tailwind CSS, delivering a responsive, accessible and performance-optimized user experience. ",
    tech: ["React-vite", "Tailwind", "Git", "Github", "Netlify" ],
    live: "https://www.byffinance.com.au",
},

{
    id:2,
    img:gym,
    title: "High Street gym",
    description: "Developed a full-stack gym management system with React.js, Node.js, and MySQL.Implemented authentication, session booking, and RESTful APIs.Focused on modular, reusable components and responsive UI",
    tech: ["Node.js", "express.js", "mysql", "React","JavaScript",  "Rest API"],
    live: "https://github.com/UtkarshaGN/High-Street"
    
},
{
    id:3,
    img:imdb,
    title: "IMDB Movie",
    description: "Built a movie discovery app using React.js and API-based data rendering.Implemented dynamic pages, carousel UI, and loading skeletons. API integration using real-time movie data",
    tech: ["React", "vite", "Tailwind css", "API", "Netlify"],
    live:"https://imdbwebsite.netlify.app/ "
}
]