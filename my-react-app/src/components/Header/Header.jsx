import './Header.css';
import ButtonHeader from '../ButtonHeader/ButtonHeader';
import HeaderData from '../../data/HeaderData';
import { useState, useEffect } from 'react';

const Header = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HeaderData.length);
    }, 5000); // Cambia cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  // Handle thumbnail click
  const handleThumbnailClick = (index) => {
    setCurrentSlide(index);
  };

  const currentData = HeaderData[currentSlide];

  return (
    <header className='custom-header'>
      <img 
        src={currentData.image} 
        alt={currentData.title} 
        className="header-background"
      />
      
      <div className="header-content">
        <div className="game-info">
          <img 
            src={currentData.icon} 
            alt={currentData.title} 
            className='game-logo' 
          />
          <h1 className="game-title">{currentData.title}</h1>
        </div>

        <h1 className="main-title">
          {currentData.description}
        </h1>
        
        <div className="cta-section">
          <ButtonHeader />
        </div>
      </div>

      <div className="bottom-thumbnails">
        {HeaderData.map((data, index) => (
          <img 
            key={data.id}
            src={data.image} 
            alt={`Thumbnail ${index + 1}`} 
            className={`thumbnail ${index === currentSlide ? 'active' : ''}`}
            onClick={() => handleThumbnailClick(index)}
          />
        ))}
      </div>
    </header>
  );
};

export default Header;