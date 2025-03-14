import React, { useState } from 'react';

const tabs = [
  { name: 'Design', content: 'Sketch, Figma, Wireframes' },
  { name: 'Frontend', content: 'React, Vue, Angular' },
  { name: 'Backend', content: 'Node.js, Express, MongoDB' },
  { name: 'DevOps', content: 'Docker, Kubernetes, CI/CD' },
];

function Tabs() {
  const [activeTab, setActiveTab] = useState(tabs[0].name);

  return (
    <div>
      <div className="flex border-b border-gray-300" role="tablist">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            className={`p-2 cursor-pointer border-b-2 ${activeTab === tab.name ? 'border-emerald-600 text-emerald-600' : 'border-transparent text-gray-600 hover:text-emerald-600'}`}
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
