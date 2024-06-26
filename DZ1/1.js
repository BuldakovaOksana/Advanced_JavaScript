"use strict";

/*
###Задание 1
Создайте обычный объект "Музыкальная коллекция", который можно итерировать. 
Каждая итерация должна возвращать следующий альбом из коллекции. Коллекция 
альбомов - это массив внутри нашего объекта (создать несколько альбомов самому).
Каждый альбом имеет следующую структуру:
{
  title: "Название альбома",
  artist: "Исполнитель",
  year: "Год выпуска"
}
Используйте цикл for...of для перебора альбомов в музыкальной коллекции и 
вывода их в консоль в формате:
"Название альбома - Исполнитель (Год выпуска)"
*/

const albums = [
  {
    title: "Прощай оружие",
    artist: "Дельфин",
    year: "2023",
  },
  {
    title: "Раздвоение личности",
    artist: "Сплин",
    year: "2018",
  },
  {
    title: "Би-2",
    artist: "Би-2",
    year: "2019",
  },
];

albums.push({ title: "Просвистела", artist: "ДДТ", year: "1999" });

const musicCollection = {
  albums,
  *[Symbol.iterator]() {
    for (const album of this.albums) {
      yield album;
    }
  },
};
for (const iterator of albums) {
  console.log(`${iterator.title} - ${iterator.artist} (${iterator.year})`);
}
