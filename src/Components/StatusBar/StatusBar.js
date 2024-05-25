import React from 'react';
import './StatusBar.css';

function StatusBar({ logo,value, max, color }) {
  const percentage = value

  return (
    <>
    <img src={logo} className='logo'></img>
    <div className="status-bar-background">
      <div className="status-bar-fill" style={{ width: `${percentage}%`, backgroundColor: `${color}`}}></div>
    </div>
    </>
  );
}

export default StatusBar;
