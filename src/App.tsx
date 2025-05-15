import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginScreen from './features/auth/LoginScreen'
import ChatScreen from './features/chat/ChatScreen'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/chat" element={<ChatScreen />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
