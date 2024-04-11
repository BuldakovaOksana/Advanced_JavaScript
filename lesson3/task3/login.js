import { loginUser } from "./storage.js";
const loginEl = document.querySelector('.login');
const passwordEl = document.querySelector('.password');
const loginBtnEl = document.querySelector('.login__btn');

const lsUsersKey = 'users'
loginBtnEl.addEventListener('click', function (e) {
    const login = loginEl.value
    const password = passwordEl.value
    try {
        loginUser(login, password)
        location.href = "hello.html" 
        
    } catch (err) {
        alert(err.message)
    }

});