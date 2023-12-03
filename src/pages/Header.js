import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import icons from '../img/undraw_profile_2.svg';

const Header = () => {
  return (
    <header>
      <div>
        <h1 className='logoname'>FatStat.Football</h1>
      </div>
      <nav>
        <Link to="/">Summary</Link>
        <Link to="/Offensive">Offensive</Link>
        <Link to="/Defensive">Defensive</Link>
      </nav>
      <div>
        <img className="user-icon" src={icons} alt="User Icon" />
      </div>
    </header>
  );
};

export default Header;
