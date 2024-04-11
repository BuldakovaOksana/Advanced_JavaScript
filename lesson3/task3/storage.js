// Задание 3:
// Создать интерактивную веб-страницу, которая позволяет пользователям
// регистрироваться и входить в систему, используя данные, сохраненные данные
// в LocalStorage.

// Приложение будет состоять из трёх основных страниц:

// 1.Страница регистрации:
//   a. Предлагает пользователю ввести логин и пароль.
//   b. После ввода данных, они сохраняются в LocalStorage.
//   c. Пользователь перенаправляется на страницу входа.
// 2. Страница входа:
//   a. Предлагает пользователю ввести логин и пароль.
//   b. Если введенные данные совпадают с данными из LocalStorage, пользователь
//     перенаправляется на страницу приветствия.
//   c.Если данные не совпадают, выводится сообщение об ошибке.
// 3. Страница приветствия:
//   a. Простое приветственное сообщение для авторизованного пользователя.
//   b. Кнопка "Выйти", при нажатии на которую пользователь возвращается на
//     страницу входа.

const lsUsersKey = "users";
const lsLoginKey = "login";

function getUsers() {
  const users = localStorage.getItem(lsUsersKey);
  if (!users) {
    return [];
  }
  return JSON.parse(users);
}

function registerUser(login, password) {
  const users = getUsers();
  users.push({ login, password });
  localStorage.setItem(lsUsersKey, JSON.stringify(users));
}

function loginUser(login, password) {
  const users = getUsers();
  if (!users.some(users => users.login === login)) {
    throw new Error("User not found");
  }
  localStorage.setItem(lsUsersKey, login);
}

function getAuthedLogin() {
  return localStorage.getItem(lsUsersKey)
}

function logout() {
  localStorage.removeItem(lsUsersKey);
}

export  { getUsers, registerUser, loginUser, getAuthedLogin, logout };
