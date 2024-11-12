let car = {
    mark: "BMW",
    model: "e36",
    year: 2000
};

console.log("Car Mark: " + car.mark + " /// " + "Car Model: " + car.model);
console.log("Car Mark: " + car["mark"] + " /// " + "Car Model: " + car["model"]);

// console.log(car);
// console.log(car.mark);

// let prop = 'mark'; 
// console.log(car[prop]);