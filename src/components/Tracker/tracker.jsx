import React, { useEffect, useState } from 'react';

const Tracker = () => {
  const [usage, setUsage] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const activeTab = document.visibilityState === 'visible' ? document.title : 'Inactive';
      const currentTime = new Date().toLocaleTimeString();

      setUsage((prevUsage) => {
        const newUsage = { ...prevUsage };
        if (!newUsage[activeTab]) {
          newUsage[activeTab] = [];
        }
        newUsage[activeTab].push(currentTime);
        localStorage.setItem('usage', JSON.stringify(newUsage));
        return newUsage;
      });
    }, 60000); 

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const storedUsage = JSON.parse(localStorage.getItem('usage'));
    if (storedUsage) {
      setUsage(storedUsage);
    }
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl mb-4">App Usage</h2>
      <ul>
        {Object.entries(usage).map(([app, times], index) => (
          <li key={index} className="mb-2">
            <span className="font-bold">{app}</span>: {times.length} minutes
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tracker;
