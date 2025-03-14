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
      <div className="flex">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            className={`p-2 ${activeTab === tab.name ? 'border-b-2 border-blue-500' : ''}`}
            onClick={() => setActiveTab(tab.name)}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className="mt-4">
        {tabs.map((tab) => (
          <div key={tab.name} className={`${activeTab === tab.name ? 'block' : 'hidden'}`}>
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tabs;
