
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import { useState } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";

export default function AuthPage ({ setUser }) {
    const [showSignUp, setShowSignUp] = useState(false)
    
    function handleAuthClick() {
        showSignUp ? setShowSignUp(false) : setShowSignUp(true)
    }

return (

    <main>
        <h1>AuthPage</h1>
        <button onClick={handleAuthClick}>{ showSignUp ? "Alread a user?" : "Sign Up" }</button>
        {showSignUp ?
        <SignUpForm setUser={setUser} />
        :
        <LoginForm setUser={setUser} />
        }
    </main>

);
}