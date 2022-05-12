const users = [{
        name: "Harry Felton",
        phone: " (09) 897 33 33 ",
        email: "felton@gmail.com",
        animals: ["cat"],
        cars: ["bmw"],
        hasChildren: false,
        hasEducation: true

    },
    {
        name: "May Sender",
        phone: " (09) 117 33 33 ",
        email: "sender22@gmail.com",
        hasChildren: true,
        hasEducation: true
    },
    {
        name: "Henry Ford",
        phone: " (09) 999 93 23 ",
        email: "ford0@gmail.com",
        cars: ["bmw", "audi"],
        hasChildren: true,
        hasEducation: false
    }
]

// #1 
const userNames = users.reduce((result, currObj, index) => {
    if (index === (users.length - 1)) {
        return result + currObj.name;
    }
    return result + `${currObj.name}, `;
}, '');

// #2
const totalAmountOfCars = users.reduce((res, currObj) => {
    if (!Object.hasOwn(currObj, 'cars')) {
        return res + 0;
    } else {
        return res + currObj.cars.length;
    }
}, 0);

// #3
function filterByEducation(users) {
    const usersWithEducation = users.filter(obj => obj.hasEducation === true);
    return usersWithEducation;
}
filterByEducation(users);

// #4
function filterByAnimals(users) {
    const usersWithAnimals = users.filter(obj => obj.animals);
    return usersWithAnimals;
}
filterByAnimals(users);

// #5
function getCarsNames(users) {
    const carBrands = users.reduce((res, currObj, index) => {
        if (!Object.hasOwn(currObj, 'cars')) {
            return res;
        } else if (index === (users.length - 1)) {
            const carsString = currObj.cars.toString();
            return res + carsString;
        } else {
            const carsString = currObj.cars.toString();
            return res + `${carsString},`;
        }
    }, '');
    return carBrands;
}
getCarsNames(users);