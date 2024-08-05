import React, { useState } from 'react';
import '../Toggleswitch.css'

function ToggleSwitch() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleNotificationsToggle = () => {
    setNotificationsEnabled(!notificationsEnabled);
  };

  return (
    <div className={isDarkMode ? 'app dark-mode' : 'app'}>
      <header className="header">
        
        <div className="toggle-switch">
          <label> Dark Mode
            <input type="checkbox" checked={isDarkMode} onChange={handleDarkModeToggle} />
            <span className="slider round"></span>
          </label>
        </div>
        <div className="toggle-switch">
          <label> Notifications
            <input
              type="checkbox"
              checked={notificationsEnabled}
              onChange={handleNotificationsToggle}
            />
            <span className="slider round"></span>
          </label>
        </div>
      </header>
      <main>
        <p>
          Dark mode is {isDarkMode ? 'enabled' : 'disabled'}.
        </p>
        <p>
          Notifications are {notificationsEnabled ? 'enabled' : 'disabled'}.
        </p>
      </main>
    </div>
  );
}

export default ToggleSwitch;
