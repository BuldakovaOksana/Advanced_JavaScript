/*
Задание 2: 
Создайте обычный объект library. Необходимо реализовать Symbol.iterator, у 
которого каждая итерация будет возвращать следующую книгу из библиотеки.
Продемонстрируйте работу Symbol.iterator у нашего объекта.
*/
// Список книг:
const books = [
  { title: "1984", author: "George Orwell" },
  { title: "Brave New World", author: "Aldous Huxley" },
  { title: "Fahrenheit 451", author: "Ray Bradbury" },
];

// const library = {
//     books,
//     *[Symbol.iterator]() {
//         for (const book of this.books) {
//             yield book
//         }
//     }
// }

// for (const book of library) {
//     console.log(book);
// }

const library = {
  books,
  [Symbol.iterator]() {
    let index = 0;
    return {
      next: () => {
        if (index < this.books.length) {
          return { value: this.books[index++], done: false };
        } else {
          return { value: undefined, done: true };
        }
      },
    };
  },
};

for (const book of library) {
  console.log(book);
}
