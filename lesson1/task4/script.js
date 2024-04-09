/*
Задание 4.
Представьте себе ситуацию: у нас есть группа студентов, и мы хотим отследить, 
кто из них посетил какие уроки и кто из преподавателей вёл данные уроки. 
 
Необходимо: 
1. Создать Map объект, который будет использоваться для хранения соответствия 
между уроком и преподавателем, урок => преподаватель.
2. Необходимо создать Map объект, ключами которого будут объекты студентов,
а значениями будут Set объекты, которые будут хранить уроки, посещенные 
студентом.
*/
 
const lessonsTeacher = new Map();
const studentLessons = new Map();
 
const ivan = {
    name: "Иван",

};
const Petr = {
    name: "Петр",
};

const teacherMathematics = {
    name: "Dina",
};
const teacherHistory = {
    name: "Vova",
}

const lessonMathematics = "mathematics";

const lessonHistory = "history";

lessonsTeacher.set(lessonMathematics, teacherMathematics)
.set(lessonHistory, teacherHistory)
studentLessons.set(ivan, new Set([lessonMathematics, lessonHistory]))
studentLessons.set(Petr, new Set([lessonHistory]))

// Преподаватель по Математике: Смирнов.
console.log(`Преподаватель по математике: ${lessonsTeacher.get(lessonMathematics).name}`);
// Уроки Ивана: Математика, История.
console.log(`Уроки Ивана: ${[...studentLessons.get(ivan)].join(', ')}`);
console.log(`Уроки Ивана: ${[...studentLessons.get(Petr)]}`);