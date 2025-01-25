import './index.css'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Content from './components/content/content'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import { useState } from 'react'
import Chatbot from './components/chatbox/chatbox'

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
        <Chatbot/>
        <Footer />
      </BrowserRouter >
    </>
  )
}

export default App
