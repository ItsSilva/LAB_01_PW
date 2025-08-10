import './App.css'
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
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
      </main>
    </>
  )
}

export default App