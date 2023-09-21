import {Routes, Route} from 'react-router-dom'

import IndexPage from '../../pages/IndexPage/IndexPage'
import ErrorPage from '../../pages/ErrorPage/ErrorPage'
import AuthPage from '../../pages/AuthPage/AuthPage'
import "./Main.css"


export default function Main({user, setUser}){


    return(
        <main className="main">
        { user ? 
        <>
          <Routes>
            <Route path="/" element={<IndexPage />} /> 
            <Route path="/*" element={<ErrorPage />} />   
          </Routes>
        </>
          :
    
          <AuthPage setUser={setUser} />
      }
        </main>
    )
}

