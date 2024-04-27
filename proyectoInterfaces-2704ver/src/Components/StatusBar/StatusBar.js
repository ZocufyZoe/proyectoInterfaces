import React from 'react';
import './StatusBar.css';

function StatusBar({ value, max, color }) {
  const percentage = value

  return (
    <div className="status-bar-background">
      <div className="status-bar-fill" style={{ width: `${percentage}%`, backgroundColor: `${color}`}}></div>
    </div>
  );
}

export default StatusBar;
