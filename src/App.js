import React from 'react'
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import SignUp from './components/SignUp';
import Login from './components/Login';
import { AuthProvider } from './contexts/AuthContext'

export default function App() {
  return(
    <AuthProvider>
    <div className='flex h-screen justify-center items-center  mx-auto'>
      <Router>
        <Routes>
          <Route exact path='/' element={<SignUp/>} />
          <Route path='/login' element={<Login />}/>
        </Routes>
      </Router>
      
    </div>
  </AuthProvider>
  ) 
}
