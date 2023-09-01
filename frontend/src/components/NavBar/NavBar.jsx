import { Link } from "react-router-dom";


export default function NavBar () {

    return (

        <nav>
            <Link to="/">Home</Link>
            <Link to="/:userid">Profile</Link>

            NavBar
            
            </nav>
    );
}