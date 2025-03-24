import React, { useState } from 'react';

const tabs = [
  { 
    name: 'Frontend', 
    content: (
      <>
        <div className="mb-4 max-w-4xl grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 text-5xl">
          <i className="devicon-css3-plain colored" title="CSS3"></i>
          <i className="devicon-html5-plain colored" title="HTML5"></i>
          <i className="devicon-javascript-plain colored" title="JavaScript"></i>
          <i className="devicon-jest-plain colored" title="Jest"></i>
          <i className="devicon-jquery-plain colored" title="jQuery"></i>
          <i className="devicon-less-plain-wordmark colored" title="LESS"></i>
          <i className="devicon-markdown-plain colored" title="Markdown"></i>
          <i className="devicon-react-original colored" title="React"></i>
          <i className="devicon-sass-original colored" title="Sass"></i>
          <i className="devicon-tailwindcss-plain colored" title="Tailwind"></i>
        </div>
        <ul className="list-disc list-inside">
          <li>Responsive & Mobile-first design</li>
        </ul>
      </>
    )
  },
  { 
    name: 'Backend', 
    content: (
      <>
        <div className="mb-4 max-w-4xl grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 text-5xl">
          <i className="devicon-json-plain colored" title="JSON"></i>
          <i className="devicon-laravel-plain colored" title="Laravel"></i>
          <i className="devicon-nextjs-plain colored" title="Next.js"></i>
          <i className="devicon-microsoftsqlserver-plain colored" title="Microsoft SQL Server"></i>
          <i className="devicon-mysql-plain colored" title="MySQL"></i>
          <i className="devicon-php-plain colored" title="PHP"></i>
          <i className="devicon-postgresql-plain colored" title="PostgreSQL"></i>
          <i className="devicon-postman-plain colored" title="Postman"></i>
          <i className="devicon-redis-plain colored" title="Redis"></i>
          <i className="devicon-ruby-plain colored" title="Ruby"></i>
          <i className="devicon-ruby-plain colored" title="Ruby on Rails"></i>
        </div>
        <ul className="list-disc list-inside">
          <li>Migrations</li>
          <li>PHPUnit</li>
        </ul>
      </>
    )
  },
  { 
    name: 'DevOps', 
    content: (
      <>
        <div className="mb-4 max-w-4xl grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 text-5xl">
          <i className="devicon-amazonwebservices-plain colored" title="AWS"></i>
          <i className="devicon-docker-plain colored" title="Docker"></i>
          <i className="devicon-git-plain colored" title="Git"></i>
          <i className="devicon-github-original colored" title="GitHub"></i>
          <i className="devicon-heroku-original colored" title="Heroku"></i>
          <i className="devicon-netlify-plain colored" title="Netlify"></i>
          <i className="devicon-npm-original-wordmark colored" title="NPM"></i>
          <i className="devicon-sentry-plain colored" title="Sentry"></i>
          <i className="devicon-travis-plain colored" title="Travis"></i>
          <i className="devicon-vercel-plain colored" title="Vercel"></i>
        </div>
        <ul className="list-disc list-inside">
          <li>CI/CD</li>
          <li>Dependency management</li>
          <li>Debugging & Support</li>
        </ul>
      </>
    )
  },
  { 
    name: 'Project Management', 
    content: (
      <>
        <div className="mb-4 max-w-4xl grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 text-5xl">
          <i className="devicon-atom-plain colored" title="Atom"></i>
          <i className="devicon-azure-plain colored" title="Azure"></i>
          <i className="devicon-confluence-plain colored" title="Confluence"></i>
          <i className="devicon-eslint-plain colored" title="ES Lint"></i>
          <i className="devicon-jira-plain colored" title="Jira"></i>
          <i className="devicon-phpstorm-plain colored" title="PHP Storm"></i>
          <i className="devicon-slack-plain colored" title="Slack"></i>
          <i className="devicon-trello-plain colored" title="Trello"></i>
          <i className="devicon-vim-plain colored" title="Vim"></i>
          <i className="devicon-vscode-plain colored" title="Visual Studio Code"></i>
        </div>
        <ul className="list-disc list-inside">
          <li>Agile (Scrum, Estimation, Retrospectives, Scrum mastering)</li>
          <li>Backlog curation</li>
          <li>Requirements gathering</li>
          <li>User stories</li>
        </ul>
      </>
    )
  },
  { 
    name: 'UX & Design', 
    content: (
      <>
        <div className="mb-4 max-w-4xl grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 text-5xl">
          <i className="devicon-figma-plain colored" title="Figma"></i>
          <i className="devicon-sketch-plain colored" title="Sketch"></i>
        </div>
        <ul className="list-disc list-inside">
          <li>Diagramming (Miro)</li>
          <li>Google Analytics</li>
          <li>User advocacy</li>
          <li>Wireframes</li>
        </ul>
      </>
    )
  },
  { 
    name: 'Sustainability', 
    content: (
      <ul className="list-disc list-inside">
        <li>Carbon footprint assessments (Scope 1-3)</li>
        <li>Carbon reduction strategies</li>
        <li>GHG Protocol</li>
        <li>Stakeholder engagement</li>
        <li>Sustainability project management</li>
      </ul>
    )
  },
  { 
    name: 'Languages', 
    content: (
      <ul className="list-disc list-inside">
        <li>
          <span className="font-bold text-red-600">English</span> - Native/Fluent
        </li>
        <li>
        <span className="font-bold text-emerald-600">Italian</span> - Strong conversational
        </li>
        <li>
        <span className="font-bold text-orange-600">Spanish</span> - Basic conversational
        </li>
        <li>
        <span className="font-bold text-cyan-600">French</span> - Basic conversational
        </li>
      </ul>
    )
  }
];

function Tabs() {
  const [activeTab, setActiveTab] = useState(tabs[0].name);

  return (
    <div>
      <div className="flex flex-wrap gap-2 mt-4" role="tablist">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            className={`p-2 cursor-pointer rounded-full ${activeTab === tab.name ? 'bg-emerald-600 text-white' : 'bg-gray-200 text-gray-600 hover:bg-emerald-600 hover:text-white'}`}
            onClick={() => setActiveTab(tab.name)}
            role="tab"
            aria-selected={activeTab === tab.name}
            aria-controls={`panel-${tab.name}`}
            id={`tab-${tab.name}`}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className="mt-4">
        {tabs.map((tab) => (
          activeTab === tab.name && (
            <div key={tab.name} role="tabpanel" id={`panel-${tab.name}`} aria-labelledby={`tab-${tab.name}`}>
              {tab.content}
            </div>
          )
        ))}
      </div>
    </div>
  );
}

export default Tabs;
