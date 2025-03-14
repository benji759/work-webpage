import React from 'react';
import Tabs from './Tabs';

function App() {
  return (
    <div className="container mx-auto p-4">
      <header className="flex justify-between items-center">
        <h1>Jane Doe</h1>
        <div>
          <a href="https://www.linkedin.com/in/janedoe" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:jane.doe@example.com" className="ml-4">Email</a>
        </div>
      </header>
      <p className="mt-4">An experienced software developer with experience in the health and sustainability sectors.</p>
      <p>Looking for purposeful work 3 or 4 days per week hybrid in London or South East Essex or remote.</p>
      <section className="mt-8">
        <h2>Skills</h2>
        <Tabs />
      </section>
      <section className="mt-8">
        <h2>Experience</h2>
        <div>
          <h3>Job Title</h3>
          <p>Company Name</p>
          <p>Dates Worked</p>
          <ul>
            <li>Responsibility 1</li>
            <li>Responsibility 2</li>
            <li>Responsibility 3</li>
          </ul>
        </div>
        {/* Add more job experiences as needed */}
      </section>
    </div>
  );
}

export default App;
