import React from 'react'

const projects = [
  {
    id: 1,
    name: "Netflix Clone",
    technologies: "HTML, CSS, JavaScript",
    image:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202012/Netflix-New-Feature-Audio-Only_1200x768.jpeg?size=690:388",
    github: "https://github.com/Anshkumar01/Website_Clones",
  },
  {
    id: 2,
    name: "Captcha Generator",
    technologies: "Html, CSS, JavaScript",
    image:"https://raw.githubusercontent.com/pulsejet/captcha-generator-alphanumeric/HEAD/sample.jpeg",
    github: "https://github.com/Anshkumar01/WebDevelopmentPW/tree/main/Captcha%20Generator",
  },
  {
    id: 3,
    name: "Password Generator",
    technologies: "Html, CSS, JavaScript",
    image:"https://cyberpedia.reasonlabs.com/IMG/password%20generator.jpg",
    github: "https://github.com/Anshkumar01/WebDevelopmentPW/tree/main/Password%20Generator",
  },
];

const Projects = () => {
  return (
     <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-800 p-6 rounded-lg hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-105">
              <img src={project.image} alt={project.name} className="rounded-lg mb-4 
              w-full h-48 object-cover" />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <a href={project.github} className="inline-block bg-gradient-to-r 
              from-green-400 to-blue-500 text-white px-4 py-2 rounded-full" target="_blank" 
              rel="noopener noreferrer">GitHub</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects