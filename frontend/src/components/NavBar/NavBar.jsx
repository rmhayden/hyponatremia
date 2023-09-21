import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service"
import "./NavBar.css"


export default function NavBar ({ user, setUser }) {
    function handleLogOut() {
        userService.logOut()
        setUser(null)
    }

    return (

        <nav>
             <Link className="link" to="/">
                <button className="nav-link"><h4>HOME</h4></button>
            </Link>
            { user !== null ? 
                <>
                    <Link className="link" to="/user">
                        <button className="nav-link profile-button"><span><h4>PROFILE: </h4><p> {user?.name}</p></span></button>
                    </Link>
                    {/* <span><strong>Welcome, {user?.name}</strong> </span> */}
                    <Link className="link logout" to="/aki" onClick={handleLogOut}>
                        <button className="nav-link"><h4>LOG OUT</h4></button>
                    </Link>
                </>
                :
                null 
            }

        </nav>
    );
}

