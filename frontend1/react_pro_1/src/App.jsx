 import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="App">
      
      {/* Header Section */}
      <header className="header">
        <img src={reactLogo} className="logo" alt="React logo" />
        <h1>My Personal Portfolio</h1>
        <p>Welcome to my personal portfolio website. </p>
      </header>

      {/* About Me Section */}
      <section className="about-me">
        <h2>About Me</h2>
        <p>
          Hi, I'm KAYATHIRI N,pursuing BE.ECE in SKCET and a passionate web developer focused on creating beautiful and functional web applications. 
          I specialize in front-end development using React, and I'm constantly learning and improving my skills.
        </p>
      </section>

      {/* Skills Section */}
      <section className="skills">
        <h2>Skills</h2>
        <ul>
          <li>JavaScript</li>
          <li>C++</li>
          <li>Java</li>
          <li>HTML & CSS</li>
          <li>Node.js</li>
          <li>Git & GitHub</li>
        </ul>
      </section>

      {/* Projects Section */}
      <section className="projects">
      <h2>Certifications:</h2>
      <ul>
       <h3>Introduction to HTML</h3>
       <h3>Certified on AI generative course</h3>
       <h3>Infosys springboard on C++,java,DSA</h3>
       <h3>Softskill and Ethics in Engineering(NPTEL)</h3>
      </ul>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <h2>Contact:</h2>
        <p>Email: kayathiri121@gmail.com</p>
        <p>6383398857</p>
      </section>

      </div>
       
    </>
  )
}

export default App
    
    