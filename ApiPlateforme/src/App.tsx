import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Content from './components/content/content'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Content />
        <Footer />
        
      </BrowserRouter >
    </>
  )
}

export default App
