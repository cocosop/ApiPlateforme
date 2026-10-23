import './index.css'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Chatbox from './components/chatbox/chatbox'
import AppRoutes from './components/content/AppRoutes'

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
      <Chatbox />
    </BrowserRouter>
  );
}

export default App
