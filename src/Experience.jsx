import React from 'react';

import tools from './assets/toolbox-solid.svg';
import learning from './assets/graduation-cap-solid.svg';

const experiences = [
  {
    title: 'Full-Stack Software Developer',
    company: '036 Group',
    dates: 'November 2024 - Present',
    responsibilities: [
      'Used Voiceflow and OpenAI to automate repetitive customer service tasks, freeing up agents for things that humans do best',
      'Automated collection of balance payments and delivery details to support ambitious sales targets',
      'Improved validation on shipping to speed up fulfilment and prevent expensive errors '
    ],
    tools: 'React, Next.js, Tailwind',
    learning: 'AI, Automation, Javascript ecosystem'
  },
  {
    title: 'Software Developer',
    company: 'Mayden House Limited',
    dates: 'March 2023 - November 2024',
    responsibilities: [
      'Built a multi-factor authentication service, providing additional protection to NHS patient data',
      'Provided support (including emergency first responder) for software that is business critical to front-line healthcare providers',
      'Led carbon emissions measurement and developed the company’s first Carbon Reduction Plan'
    ],
    tools: 'PHP, Laravel, React',
    learning: 'Privacy and data security, Sustainability, Accessibility'
  },
  {
    title: 'Webmaster',
    company: 'Rayleigh Fruit n Veg',
    dates: 'August 2017 - March 2023',
    responsibilities: [
      'Set up a brand new MVC e-commerce app, facilitating the transformation from high street greengrocer to online retailer',
      'Created a bespoke subscriptions feature responsible for over £250,000 of sales per year',
      'Used technical innovation to create dramatic increases in turnover whilst protecting buyers, pickers and packers from additional burden'
    ],
    tools: 'Ruby, Ruby on Rails, PostgreSQL',
    learning: 'Payments (including recurring), Performance, Support'
  },
  {
    title: 'Head of Product / Web Developer',
    company: 'Atlas Computer Systems',
    dates: 'March 2018 - March 2020',
    responsibilities: [
      'Instigated and oversaw the graceful implementation of the product’s first price rise since its launch 7 years earlier, growing the 6-figure annual turnover',
      'Leveraged analytics and A/B testing to improve experience and provide clearer pathways for my product\'s 350,000 annual users',
      'Worked closely with a specialist designer to overhaul the marketing site for a mature SaaS human resources product'
    ],
    tools: 'Visual Studio, C#, .NET',
    learning: 'Product management, User experience, Dev team management'
  },
  {
    title: 'Webmaster',
    company: 'Refugee Children’s Centres',
    dates: 'April 2017 - November 2019',
    responsibilities: [
      'Used Internet technology to tie different strands of a diverse and decentralised organisation together',
      'Facilitated the delivery of educational and play provision for children in refugee camps',
      'Worked with the founder and the marketing manager to analyse website use, synchronise social media and web content, and curate mailing lists'
    ],
    tools: 'Slack, Mailchimp, Netlify',
    learning: 'Remote working, Volunteer management, Non-profit sector'
  },
  {
    title: 'Director / Developer & designer',
    company: 'Web Workshop',
    dates: 'January 2016 - March 2018',
    responsibilities: [
      'Worked alongside clients to identify requirements and goals, drafting wireframes to establish structure and creating prototypes using image editing software',
      'Hand-spun bespoke websites and web apps, integrating content management systems and deploying static and dynamic content using Netlify and Heroku',
      'Managed domains and set up associated email using Hover and Amazon Web Services'
    ],
    tools: 'AWS, Sass, Vanilla Javascript',
    learning: 'DNS, Client management, Design'
  }
];

function Experience() {
  return (
    <div>
      {experiences.map((job, index) => (
        <div key={index} className="mt-8 relative pt-2">
          <div className="absolute top-0 left-0 w-48 h-24 border-t-2 border-l-2 border-cyan-600"></div>
          <div className="pl-3">
            <h3 className="text-2xl text-gray-800">{job.title}</h3>
            <p className="text-lg text-gray-600">{job.company}</p>
            <p className="text-lg text-gray-600">{job.dates}</p>
          </div>
          <ul className="mt-2 text-gray-700">
            {job.responsibilities.map((resp, i) => (
              <li key={i}>-> {resp}</li>
            ))}
          </ul>
          <p className="mt-2 text-gray-700">
            <span className="w-6 inline-block pl-[1px]">
              <img src={tools} alt="Primary technologies" className="inline-block h-4 opacity-65" />
            </span>
            {job.tools}
          </p>
          <p className="text-gray-700">
            <span className="w-6 inline-block">
              <img src={learning} alt="Key areas of learning" className="inline-block h-4 opacity-65" />
            </span>
            {job.learning}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Experience;