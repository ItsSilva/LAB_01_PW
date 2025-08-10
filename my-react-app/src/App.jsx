import './App.css'
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import LatestUpdates from './components/LatestUpdates/LatestUpdates';
import OurProducts from './components/OurProducts/OurProducts';
import { useState } from 'react'

function App() {
  const [activeTab, setActiveTab] = useState('Home');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    console.log(`${tabName} clicked`);
  };

  return (
    <>
      <nav className='custom-navbar'>
        <Navbar activeTab={activeTab} onTabClick={handleTabClick} />
      </nav>
      <main>
        <section className='Header'>
          <Header />
        </section>
        <section>
          <LatestUpdates />
        </section>
        <section className='back-image'>
          <img src='../src/assets/BackImage/backimage.png' alt='Background' />
        </section>
        <section className='our-products'>
          <OurProducts />
        </section>
      </main>
    </>
  )
}

export default App