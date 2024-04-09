/*
Задание 4:
Пользователи вашего сайта могут добавлять элементы в список. Но есть условие: 
введенное значение должно содержать от 3 до 10 символов.
 
Создайте HTML-структуру:
 
```
<input type="text" class="user-input">
<button class="add-button">Добавить</button>
<ul class="item-list"></ul>
<div class="error-message"></div>
```
 
Необходимо обрабатывать событие добавления элемента в список. Функция, 
обрабатывающая событие, должна выбрасывать исключение, если длина введенного 
значения не соответствует требованиям.
Если исключение было выброшено, необходимо добавить сообщение об ошибке в div.
Не важно, была ошибка или нет, после того как мы совершим попытку добавления 
данных, необходимо вывести в консоль "Попытка добавления элемента завершена."
*/

const userInput = document.querySelector('.user-input');
const addButton = document.querySelector('.add-button');
const itemList = document.querySelector('.item-list');
const errorMessage = document.querySelector('.error-message');

// addButton.addEventListener('click', (e) => {
    
//     const inputValue = userInput.value;
//     if (inputValue.length < 3 || inputValue.length > 10) {
//         errorMessage.textContent = 'Длина введенного значения должна быть от 3 до 10 символов';
//     } else {
//         errorMessage.textContent = '';
//         const li = document.createElement('li');
//         li.textContent = inputValue;
//         itemList.append(li);
//         userInput.value = '';
        
//     }
//     console.log('Попытка добавления элемента завершена.');
// });

addButton.addEventListener('click', () => {
    const inputValue = userInput.value;
    try {
        if (inputValue.length < 3 || inputValue.length > 10) {
            throw new Error('Длина введенного значения должна быть от 3 до 10 символов');
        } else {
            errorMessage.textContent = '';
            const li = document.createElement('li');
            li.textContent = inputValue;
            itemList.append(li);
            userInput.value = '';
        }
    } catch (error) {
        errorMessage.textContent = 'Длина введенного значения должна быть от 3 до 10 символов';
    } finally {
    console.log('Попытка добавления элемента завершена.');
    }
});