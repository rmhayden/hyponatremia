import './App.css';

import { useState } from 'react'

import { getUser } from '../utilities/users-service';
import Main from '../components/Main/Main';
import Footer from '../components/Footer/Footer';
import NavBar from "../components/NavBar/NavBar"


export default function App() {

const [user, setUser] = useState(getUser())

  return (
    <div className="App">
      <NavBar user={user} setUser={setUser} />
      <Main user={user} setUser={setUser}/>
      <Footer />
    </div>
  );
}
