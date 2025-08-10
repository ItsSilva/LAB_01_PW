import './App.css'
import NavbarButton from './components/NavbarButton/NavbarButton.jsx'
function App() {

  return (
    <>
      <nav className='custom-navbar'>
        <div className='navbar-logo'>
          <a href="#">
            <img src="../src/assets/logo.png" alt="Logo" />
          </a>
        </div>
        <div className='navbar-links'>
          <NavbarButton label="Home" onClick={() => console.log('Home clicked')} />
          <NavbarButton label="News" onClick={() => console.log('News clicked')} />
          <NavbarButton label="About Us" onClick={() => console.log('About Us clicked')} />
          <NavbarButton label="Careers" onClick={() => console.log('Careers clicked')} />
          <NavbarButton label="Help Center" onClick={() => console.log('Help Center clicked')} />
        </div>
      </nav>
    </>
  )
}

export default App
