import './Header.css';
import ButtonHeader from '../ButtonHeader/ButtonHeader';

const Header = () => {
  return (
    <header className='custom-header'>
      <img 
        src="../../../src/assets/header.jpg" 
        alt="Honkai: Star Rail Background" 
        className="header-background"
      />
      
      <div className="header-content">
        <div className="game-info">
          <img 
            src='../../../src/assets/appicon.png' 
            alt='Honkai: Star Rail Logo' 
            className='game-logo' 
          />
          <h1 className="game-title">Honkai: Star Rail</h1>
        </div>

        <h1 className="main-title">
          Honkai: Star Rail V3.4<br />
          "For the Sun is Set to<br />
          Die" Is Now Online!
        </h1>
        <div className="cta-section">
          <ButtonHeader />
        </div>
      </div>

      <div className="bottom-thumbnails">
        <img 
          src="../../../src/assets/header.jpg" 
          alt="Thumbnail 1" 
          className="thumbnail active"
        />
        <img 
          src="../../../src/assets/header1.jpg" 
          alt="Thumbnail 2" 
          className="thumbnail"
        />
        <img 
          src="../../../src/assets/header2.jpg" 
          alt="Thumbnail 3" 
          className="thumbnail"
        />
      </div>
    </header>
  );
};

export default Header;