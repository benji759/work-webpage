import React from 'react';
import Tabs from './Tabs';

function App() {
  return (
    <div className="container mx-auto p-4">
      <header className="flex justify-between items-center">
        <h1 className="text-5xl text-emerald-600">Benji H</h1>
        <div>
          <a href="https://www.linkedin.com/in/janedoe" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:text-cyan-800">LinkedIn</a>
          <a href="mailto:jane.doe@example.com" className="ml-4 text-cyan-600 hover:text-cyan-800">Email</a>
        </div>
      </header>
      <p className="mt-4 text-xl text-gray-700">An experienced software developer with experience in the health and sustainability sectors.</p>
      <section className="mt-8">
        <h2 className="text-3xl text-emerald-600">Skills</h2>
        <Tabs />
      </section>
      <section className="mt-8">
        <h2 className="text-3xl text-emerald-600">Experience</h2>
        <div className="mt-4">
          <h3 className="text-2xl text-gray-800">Job Title</h3>
          <p className="text-lg text-gray-600">Company Name</p>
          <p className="text-lg text-gray-600">Dates Worked</p>
          <ul className="list-disc list-inside mt-2 text-gray-700">
            <li>Responsibility 1</li>
            <li>Responsibility 2</li>
            <li>Responsibility 3</li>
          </ul>
        </div>
        {/* Add more job experiences as needed */}
      </section>
      <footer className="mt-8 text-center text-gray-600">
        <p>This page is written in JavaScript, React, and Tailwind CSS.</p>
        <p>Source code is available on <a href="https://github.com/your-repo-url" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:text-cyan-800">GitHub</a>.</p>
      </footer>
    </div>
  );
}

export default App;
