import { Link } from "react-router-dom";


export default function NavBar ({ user }) {

    return (

        <nav>
            <Link to="/">Home</Link>
            <Link to="/:userid">Profile</Link>
            <span>Welcome, {user.name}</span>

            NavBar
            
            </nav>
    );
}