import React, { useState } from 'react';

const tabs = [
  { name: 'Frontend', content: 'React, Vue, Angular, jQuery, Ajax, Webpack, Vanilla JavaScript, HTML (WCAG), CSS (Sass, LESS, Bootstrap), Responsive & Mobile-first design' },
  { name: 'Backend', content: 'Node.js, Express, MongoDB, Ruby on Rails (Active Record, Devise, Delayed Job), PHP (Laravel, Eloquent, Slim, PHPUnit, WordPress), SQL (PostgreSQL, MySQL, SQL Server, Migrations)' },
  { name: 'DevOps', content: 'Docker, Kubernetes, CI/CD (Travis, Pipelines, Trunk-based development), AWS, Heroku, GitHub, Bitbucket, Dependency management (Snyk), Debugging & Support (Instana, Sentry)' },
  { name: 'Project Management', content: 'Agile (Scrum, Estimation, Retrospectives, Scrum mastering), Azure DevOps, Jira, Trello, Slack, Google Workspace, Requirements gathering, User stories, Backlog curation' },
  { name: 'UX & Design', content: 'Sketch, Wireframes, Google Analytics, User advocacy, Diagramming (Miro)' },
  { name: 'Sustainability', content: 'Carbon footprint assessments (Scope 1-3), Carbon reduction strategies, GHG Protocol, Sustainability project management, Environmental impact analysis, Renewable energy transitions, Stakeholder engagement in sustainability' },
  { name: 'Languages', content: 'Italian (strong conversational), French (basic conversational), Spanish (basic conversational)' }
];

function Tabs() {
  const [activeTab, setActiveTab] = useState(tabs[0].name);

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="tablist">
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
