import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Login from './pages/Login/Login'
import { Routes, Route } from 'react-router-dom'
import Chat from './pages/chats/chat'
import Profile from './pages/PostUpdate/ProfileUpdate'




const App = () => {

  return (
    <BrowserRouter>
      <Routes >
        <Route path='/' element={<Login/>}/>
        <Route path='/chat' element={<Chat/>}/>
        <Route path='/profile' element={<Profile/>}/>
        
      </Routes>
    </BrowserRouter>
  )
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);

export default App
