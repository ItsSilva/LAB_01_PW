import './Header.css';
import ButtonHeader from '../ButtonHeader/ButtonHeader';

import HeaderData from '../../data/HeaderData';

const Header = () => {
  return (
    <header className='custom-header'>
      {HeaderData.map(data => (
        <div key={data.id} className="header-item">
         <img 
        src={data.image} 
        alt={data.title} 
        className="header-background"
      />
      
      <div className="header-content">
        <div className="game-info">
          <img 
            src={data.icon} 
            alt={data.title} 
            className='game-logo' 
          />
          <h1 className="game-title">{data.title}</h1>
        </div>

        <h1 className="main-title">
          {data.description}
        </h1>
        <div className="cta-section">
          <ButtonHeader />
        </div>
      </div>
        </div>
      ))}

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