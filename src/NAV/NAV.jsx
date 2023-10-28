import React from 'react';
import './NAV.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const NAV= () => {
  return (
    <div className='box'>
      <div className="navbar">
        <h4 className='heading'>Step 2 : Get Hosting & Domain</h4>
        <div className='icons'>
          <FontAwesomeIcon icon={faAngleDown} className='arrow-down-icon' />
       </div> 
      </div>
      <br />
      <div className='navbar'>
        <h4 className='heading'>Step 3: Keywords Tools</h4>
        <div className='icons'>
          <FontAwesomeIcon icon={faAngleDown} className='arrow-down-icon' />
        </div>
      </div>
    </div>
  );
}

export default NAV;
