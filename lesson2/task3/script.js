/*
Задание 3: 
Вы создаете интерфейс, где пользователь вводит число. Ваша задача — проверить, 
является ли введенное значение числом или нет, и дать соответствующий ответ.
1. Создайте HTML-структуру:
 
```
<input type="text" class="number-input" placeholder="Введите число">
<button class="check-button">Проверить</button>
<div class="message"></div>
```
 
Необходимо обрабатывать событие проверки числа пользователем, проверяющая 
функция должна использовать try и catch для проверки вводимого значения.
*/

const numberInput = document.querySelector('.number-input');

const checkButton = document.querySelector('.check-button');

const messageDiv = document.querySelector('.message');

// checkButton.addEventListener('click', () => {
//         const number = Number(numberInput.value);
//         if (Number.isFinite(number) && numberInput.value !== '') {
//             messageDiv.textContent = 'Введите число';
//         } else {
//             messageDiv.textContent = 'error';
//         }

// });

checkButton.addEventListener('click', () => {
    try {
        const number = Number(numberInput.value);
        if (Number.isFinite(number) && numberInput.value !== '') {
            messageDiv.textContent = 'Введите число';
        } else {
            messageDiv.textContent = 'error';
        }
    } catch (e) {
        messageDiv.textContent = 'error';
    }
});