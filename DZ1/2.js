"use strict";

/*
###Задание 2
Вы управляете рестораном, в котором работают разные повара, специализирующиеся 
на определенных блюдах. Клиенты приходят и делают заказы на разные блюда.
Необходимо реализовать функцию newOrder. Создавать вспомогательные функции, 
коллекции, не запрещается. Старайтесь использовать коллекции Map/Set, где это 
актуально. Представленный ниже код должен работать.

Повара и их специализации:
Олег - специализация: Пицца.
Андрей - специализация: Суши.
Анна - специализация: Десерты.

Блюда, которые могут заказать посетители:
Пицца "Маргарита"
Пицца "Пепперони"
Пицца "Три сыра"
Суши "Филадельфия"
Суши "Калифорния"
Суши "Чизмаки"
Суши "Сеякемаки"
Десерт Тирамису
Десерт Чизкейк
*/

// Посетитель ресторана.
class Client {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
}

function UserException(message) {
  {
    this.message = message;
    this.name = "Исключение";
  }
}

// Вам необходимо реализовать класс, который управляет заказами и поварами.
class Manager {
  orders = new Map();
  constructor(dishes, specialists) {
    this.dishes = dishes;
    this.specialists = specialists;
  }

  newOrder(person, ...order) {
    let temp = new Set();
    if (this.orders.has(person)) {
      for (const iterEl of this.orders.get(person)) {
        order.forEach((el) => {
          if (this.dishes.has(el.name)) {
            temp.clear();
            if (el.name === iterEl.name) {
              iterEl.quantity += el.quantity;
            } else {
              temp.add(el);
            }
          } else {
            throw new UserException(
              `${el.type} "${el.name}" - Такого блюда не существует!`
            );
          }
        });
      }
      for (let value of temp) {
        this.orders.get(person).push(value);
      }
    } else {
      this.orders.set(person, order);
    }
    this.print(person);
  }

  print(person) {
    console.log(`Клиент ${person.firstname} заказал: `);
    this.orders.get(person).forEach((el) => {
      console.log(
        `${el.type} "${el.name}" - ${
          el.quantity
        }; готовит повар ${this.specialists.get(el.type)}`
      );
    });
    console.log("............................................................");
  }
}

const dishes = new Map();
dishes.set("Маргарита", "Пицца");
dishes.set("Пепперони", "Пицца");
dishes.set("Три сыра", "Пицца");
dishes.set("Филадельфия", "Суши");
dishes.set("Калифорния", "Суши");
dishes.set("Чизмаки", "Суши");
dishes.set("Сеякемаки", "Суши");
dishes.set("Тирамису", "Десерт");
dishes.set("Чизкейк", "Десерт");

const specialists = new Map();
specialists.set("Пицца", "Олег");
specialists.set("Суши", "Анрей");
specialists.set("Десерт", "Анна");

// Можно передать внутрь конструктора что-либо, если необходимо.
const manager = new Manager(dishes, specialists);

// Вызовы ниже должны работать верно, менять их нельзя, удалять тоже.
manager.newOrder(
  new Client("Иван", "Иванов"),
  { name: "Маргарита", quantity: 1, type: "Пицца" },
  { name: "Пепперони", quantity: 2, type: "Пицца" },
  { name: "Чизкейк", quantity: 1, type: "Десерт" }
);
// Вывод:
// Клиент Иван заказал:
// Пицца "Маргарита" - 1; готовит повар Олег
// Пицца "Пепперони" - 2; готовит повар Олег
// Десерт "Чизкейк" - 1; готовит повар Анна

// ---

const clientPavel = new Client("Павел", "Павлов");
manager.newOrder(
  clientPavel,
  { name: "Филадельфия", quantity: 5, type: "Суши" },
  { name: "Калифорния", quantity: 3, type: "Суши" }
);
// Вывод:
// Клиент Павел заказал:
// Суши "Филадельфия" - 5; готовит повар Андрей
// Суши "Калифорния" - 3; готовит повар Андрей

manager.newOrder(
  clientPavel,
  { name: "Калифорния", quantity: 1, type: "Суши" },
  { name: "Тирамису", quantity: 2, type: "Десерт" }
);
// Вывод:
// Клиент Павел заказал:
// Суши "Филадельфия" - 5; готовит повар Андрей
// Суши "Калифорния" - 4; готовит повар Андрей
// Десерт "Тирамису" - 2; готовит повар Анна

manager.newOrder(
  clientPavel,
  { name: "Филадельфия", quantity: 1, type: "Суши" },
  { name: "Трубочка с вареной сгущенкой", quantity: 1, type: "Десерт" }
);
// Ничего не должно быть добавлено, должна быть выброшена ошибка:
// Десерт "Трубочка с вареной сгущенкой" - такого блюда не существует.
