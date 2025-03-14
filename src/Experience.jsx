import React from 'react';

const experiences = [
  {
    title: 'Full-Stack Software Developer',
    company: '036 Group',
    dates: 'November 2024 - Present',
    responsibilities: [
      'Developing and maintaining software applications',
      'Collaborating with teams to implement new features',
      'Ensuring high-quality code through best practices'
    ]
  },
  {
    title: 'Software Developer',
    company: 'Mayden House Limited',
    dates: 'March 2023 - November 2024',
    responsibilities: [
      'Led carbon emissions measurement and developed the company’s first Carbon Reduction Plan',
      'Conducted comprehensive Scope 1-3 emissions assessments and provided sustainability recommendations',
      'Implemented carbon reduction projects including green energy transitions and LED lighting upgrades'
    ]
  },
  {
    title: 'Webmaster',
    company: 'Rayleigh Fruit n Veg',
    dates: 'August 2017 - March 2023',
    responsibilities: [
      'Built and maintained an e-commerce platform for online retail',
      'Developed innovative features that increased sales and customer engagement',
      'Supported local community initiatives, including homeless and food bank support'
    ]
  },
  {
    title: 'Head of Product / Web Developer',
    company: 'Atlas Computer Systems',
    dates: 'March 2018 - March 2020',
    responsibilities: [
      'Managed the product roadmap and backlog',
      'Designed and implemented new customer features',
      'Oversaw a pricing strategy update and business growth initiatives'
    ]
  },
  {
    title: 'Webmaster',
    company: 'Refugee Children’s Centres',
    dates: 'April 2017 - November 2019',
    responsibilities: [
      'Developed digital tools to support volunteer coordination',
      'Integrated website, social media, and mailing lists for better outreach',
      'Collaborated with the organisation’s founder on strategic tech initiatives'
    ]
  }
];

function Experience() {
  return (
    <div>
      {experiences.map((job, index) => (
        <div key={index} className="mt-4">
          <h3 className="text-2xl text-gray-800">{job.title}</h3>
          <p className="text-lg text-gray-600">{job.company}</p>
          <p className="text-lg text-gray-600">{job.dates}</p>
          <ul className="list-disc list-inside mt-2 text-gray-700">
            {job.responsibilities.map((resp, i) => (
              <li key={i}>{resp}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Experience;