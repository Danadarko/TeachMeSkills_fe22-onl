interface User {
    name: string;
    phone: string;
    email: string;
    animals?: string[];
    cars?: string[];
    hasChildren: boolean;
    hasEducation: boolean;
}

class CarsExercise {
    users: User[] = [{
        name: "Harry Felton",
        phone: " (09) 897 33 33 ",
        email: "felton@gmail.com",
        animals: ["cat"],
        cars: ["bmw"],
        hasChildren: false,
        hasEducation: true,
    },
    {
        name: "May Sender",
        phone: " (09) 117 33 33 ",
        email: "sender22@gmail.com",
        hasChildren: true,
        hasEducation: true,
    },
    {
        name: "Henry Ford",
        phone: " (09) 999 93 23 ",
        email: "ford0@gmail.com",
        cars: ["bmw", "audi"],
        hasChildren: true,
        hasEducation: false,
    },    
];
// #1
getUsersName(): string {
    return this.users.map((obj) => obj.name).join(', ');     
}
// #2
getTotalAmountOfCars(): number {
    return this.users.reduce((res, currObj) => {
        if (!currObj.cars) {
            return res + 0;
        } else {
            return res + currObj.cars.length;
        }    
    }, 0);      
}

// #3
filterByEducation(): User[] {
    return this.users.filter((obj) => obj.hasEducation);    
}
// #4
filterByAnimals(): User[] {
    return this.users.filter((obj) => obj.animals);   
}

// #5
getCarsNames(): string {
    const carsBrands = this.users.flatMap(obj => obj.cars).filter(item => !!item);

    return [...new Set(carsBrands)].join(', ');

}

}

const newUser = new CarsExercise();
newUser.getTotalAmountOfCars();
newUser.getCarsNames();
newUser.getUsersName();
newUser.filterByEducation();
newUser.filterByAnimals();




