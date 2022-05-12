const subjects = {
    mathematics: {
        students: 200,
        teachers: 6
    },
    biology: {
        students: 120,
        teachers: 6
    },
    geography: {
        students: 60,
        teachers: 2
    },
    chemistry: {
        students: 100,
        teachers: 3
    }
}

//#1
const subjectsArray = Object.keys(subjects);
console.log(subjectsArray);

//#2
const subjectsInfo = Object.entries(subjects);
let totalAmountOfStudents = 0;
let totalAmountOfTeachers = 0;
subjectsInfo.forEach(([key, value]) => {
    totalAmountOfStudents += value.students;
    totalAmountOfTeachers += value.teachers;
});
console.log(`Total amount of students: ${totalAmountOfStudents}`);
console.log(`Total amount of teachers: ${totalAmountOfTeachers}`);

//#3
let amountsOfStudentsInDifferentSubjects = [];
subjectsInfo.forEach(([key, value]) => {
    amountsOfStudentsInDifferentSubjects.push(value.students);
});
const averageAmountOfStudents = amountsOfStudentsInDifferentSubjects.reduce((result, currentAmount) => (result + currentAmount)) / amountsOfStudentsInDifferentSubjects.length;
console.log(`Average amount of students: ${averageAmountOfStudents}`);

//#4
const subjArr = Object.entries(subjects).map(([key, value]) => ({ subject: key, ...value }));
console.log(subjArr);

//#5
subjArr.sort((a, b) => b.teachers - a.teachers);