import './Navbar.css'
import NavbarButton from '../NavbarButton/NavbarButton.jsx'
import { useState } from 'react'

function Navbar() {
  const [activeTab, setActiveTab] = useState('Home');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    console.log(`${tabName} clicked`);
  };

  return (
    <>
      <nav className='custom-navbar'>
        <div className='navbar-logo'>
          <a href="#">
            <img src="../src/assets/logo.png" alt="HoYoverse Logo" />
          </a>
        </div>
        <div className='navbar-links'>
          <NavbarButton 
            label="Home" 
            onClick={() => handleTabClick('Home')}
            isActive={activeTab === 'Home'}
          />
          <NavbarButton 
            label="News" 
            onClick={() => handleTabClick('News')}
            isActive={activeTab === 'News'}
          />
          <NavbarButton 
            label="About Us" 
            onClick={() => handleTabClick('About Us')}
            isActive={activeTab === 'About Us'}
          />
          <NavbarButton 
            label="Careers" 
            onClick={() => handleTabClick('Careers')}
            isActive={activeTab === 'Careers'}
          />
          <NavbarButton 
            label="Help Center" 
            onClick={() => handleTabClick('Help Center')}
            isActive={activeTab === 'Help Center'}
          />
        </div>
      </nav>
    </>
  )
}

export default Navbar;