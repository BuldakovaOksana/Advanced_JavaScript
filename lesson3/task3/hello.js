 import { getAuthedLogin, logout } from "./storage.js";

const authedUser =  getAuthedLogin()
const helloEl = document.querySelector('.hello');
const logoutBtnEl = document.querySelector('.logout__btn');

if (!authedUser) {
    alert("You are not logged in")
    location.href = "login.html"
}

helloEl.textContent = `Hello, ${authedUser}`

logoutBtnEl.addEventListener('click', () => {
    logout()
    location.href = "login.html"
})