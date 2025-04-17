import './index.css'
import './App.css'
import { BrowserRouter, Routes } from 'react-router-dom'
import Chatbox from './components/chatbox/chatbox'
import PublicContent from './components/content/PublicContent'
import PrivateContent from './components/content/PrivateContent'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {PublicContent()}
          {PrivateContent()}
        </Routes>
        <Chatbox />
      </BrowserRouter >
    </>
  )
}

export default App
