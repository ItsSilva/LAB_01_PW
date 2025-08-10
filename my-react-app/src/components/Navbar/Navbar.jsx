import './Navbar.css'
import NavbarButton from '../NavbarButton/NavbarButton.jsx'

function Navbar({ activeTab, onTabClick }) {
  return (
    <>
      <div className='navbar-logo'>
        <a href="#">
          <img src="../src/assets/logo.png" alt="HoYoverse Logo" />
        </a>
      </div>
      <div className='navbar-links'>
        <NavbarButton 
          label="Home" 
          onClick={() => onTabClick('Home')}
          isActive={activeTab === 'Home'}
        />
        <NavbarButton 
          label="News" 
          onClick={() => onTabClick('News')}
          isActive={activeTab === 'News'}
        />
        <NavbarButton 
          label="About Us" 
          onClick={() => onTabClick('About Us')}
          isActive={activeTab === 'About Us'}
        />
        <NavbarButton 
          label="Careers" 
          onClick={() => onTabClick('Careers')}
          isActive={activeTab === 'Careers'}
        />
        <NavbarButton 
          label="Help Center" 
          onClick={() => onTabClick('Help Center')}
          isActive={activeTab === 'Help Center'}
        />
      </div>
    </>
  )
}

export default Navbar;