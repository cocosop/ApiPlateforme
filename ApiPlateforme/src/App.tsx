import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Content from './components/content/content'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import { useState } from 'react'

function App() {

  const [selectedMenu, setSelectedMenu] = useState(null);

  const handleMenuClick = (menuName: any) => {
    setSelectedMenu(menuName);
  };

  return (
    <>
      <BrowserRouter>
        <Navbar onMenuClick={handleMenuClick} />
        <Content selectedMenu={selectedMenu} />
        <Footer />
      </BrowserRouter >
    </>
  )
}

export default App
