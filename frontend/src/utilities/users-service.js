
import * as usersAPI from './users-api'


export async function signUp(userData) {
    const token = await usersAPI.signUp(userData);
    localStorage.setItem("token", token)
    return token;
}

export function getToken() {
    // getItem will return null if the key does not exist
    const token = localStorage.getItem("token")
    if (!token) return null
    const payload = JSON.parse(atob(token.split(".")[1]))
    if (payload.exp * 1000 > Date.now() ) {
        localStorage.removeItem("token")
        return null
    }
    return token
}

export function getUser() {
    const token = getToken()
    return token ? JSON.parse(atob(token.split(".")[1]).user) : null
}