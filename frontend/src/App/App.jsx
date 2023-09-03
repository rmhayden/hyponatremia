import './App.css';

import { useState } from 'react'

import { Routes, Route } from 'react-router-dom'
import { getUser } from '../utilities/users-service';



import AuthPage from '../pages/AuthPage/AuthPage';
import IndexPage from '../pages/IndexPage/IndexPage';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import NavBar from '../components/NavBar/NavBar';
import UserShowPage from '../pages/UserShowPage/UserShowPage';


export default function App() {

const [user, setUser] = useState(getUser())

  return (
    <main className="App">
    
    { user ? 
    <>
      <NavBar user={user} setUser={setUser} />
    <Routes>
      <Route path="/" element={<IndexPage />} /> 
      <Route path="/:userid" element={<UserShowPage />} />   
      {/* TODO: need to prevent any user from going to usershow page when logged in */}
      {/* if user.id = useparams(id), then can see userShowPage... or something */}
      <Route path="/*" element={<ErrorPage />} />   
    </Routes>
    </>
      :

      <AuthPage setUser={setUser} />

  }



    </main>
  );
}
