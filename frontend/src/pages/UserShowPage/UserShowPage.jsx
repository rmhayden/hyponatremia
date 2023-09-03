import { checkToken } from "../../utilities/users-service";

export default function UserShowPage () {
    async function handleCheckToken() {
        const expDate = await checkToken()
    }

    return (
    <>
        <h1>User Show Page</h1>
        <button onClick={handleCheckToken}> Check when my login expires</button>
    </>
    );
    
    }