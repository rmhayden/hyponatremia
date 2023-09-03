import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service"


export default function NavBar ({ user, setUser }) {
    function handleLogOut() {
        userService.logOut()
        setUser(null)
    }

    return (

        <nav>
            <Link to="/">Home</Link>
            <Link to="/:userid">Profile</Link>
            <span>Welcome, {user.name}</span>
            <Link to="" onClick={handleLogOut}>Log Out</Link>

        </nav>
    );
}