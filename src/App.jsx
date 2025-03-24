import React from 'react';
import headshot from './assets/headshot.png';
import Tabs from './Tabs';
import Experience from './Experience';

function App() {
  return (
    <div className="container mx-auto p-4">
      <header className="flex justify-between items-center" role="banner">
        <h1 className="text-5xl text-emerald-600">Benji H</h1>
        <div>
          <a href="https://www.linkedin.com/in/benji-holland-dev" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:text-cyan-800" aria-label="LinkedIn Profile">LinkedIn</a>
          <a href="mailto:benjiholland@protonmail.com" className="ml-4 text-cyan-600 hover:text-cyan-800" aria-label="Send Email">Email</a>
        </div>
      </header>
      <div className="inline-block w-full">
        <img src={headshot} alt="Picture of Benji" className="w-72 h-72 rounded-full shadow shadow-gray-400 shadow-lg mx-auto mt-4 lg:mx-0 lg:float-left lg:mr-8" />
      </div>
      <p className="mt-4 text-xl text-gray-700">A full stack software developer experienced in health tech and sustainability</p>
      <section className="mt-8" aria-labelledby="skills-heading">
        <h2 id="skills-heading" className="text-3xl text-emerald-600">Skills</h2>
        <Tabs />
      </section>
      <section className="mt-8" aria-labelledby="experience-heading">
        <h2 id="experience-heading" className="text-3xl text-emerald-600">Experience</h2>
        <Experience />
      </section>
      <footer className="mt-8 text-center text-gray-600" role="contentinfo">
        <p>This page is written in JavaScript, React, and Tailwind CSS.</p>
        <p>Source code is available on <a href="https://github.com/benji759/work-webpage" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:text-cyan-800" aria-label="GitHub Repository">GitHub</a>.</p>
      </footer>
    </div>
  );
}

export default App;
