// Завдання 1

let car = {
    type: 'electic',
    wheels: 4,
}

let sportCar ={
    doors: 2
}

Object.setPrototypeOf(sportCar, car);

let passengerCar = Object.create(car ,{
    doors : {
        value: 4
    }
})
console.log(passengerCar);

let toyCar = Object.create(sportCar , {
    type : {
        value:'toy'
    }
})
console.log(toyCar);

//Завдання 2


let employees = {
    wallet : {},
    pay(munth, sum){
        
        pay.wallet[munth] = sum;
    }
}

let frontendDeveloper = {
    name: 'Mike'
}
Object.setPrototypeOf(frontendDeveloper, employees);

let backendDeveloper = {
    name: 'Bob'
}

Object.setPrototypeOf(backendDeveloper,employees);
backendDeveloper.pay('june', 1500);
console.log(backendDeveloper.wallet.june);
console.log(frontendDeveloper.wallet.june);
