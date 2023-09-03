import sendRequest from "./send-request";
const BASE_URL = process.env.REACT_APP_BASE_URL;

export async function signUp(userData) {
 return sendRequest(`${BASE_URL}/users`, "POST", userData)
}

export async function login(credentials) {
    return sendRequest(`${BASE_URL}/users/login`, "POST", credentials)
}

export async function checkToken() {
    return sendRequest(`${BASE_URL}/users/check-token`)
}