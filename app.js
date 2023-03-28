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
        
        this.wallet[munth] = sum;
        return this.wallet
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
console.log(backendDeveloper)

//Завдання 3

function User (name , age ){
    this.name = name;
    this.age = age
}
 
let user_1 = new User ('Mike', 18)
let user_2 = {
    name:'Bob',
    age : 23,
    __proto__: user_1
}
console.log(user_2);

//Завдання 4

function UserType(name){
    for(let i=0; i< name.length; ++i){
        this[i] = name[i];
        if(i + 1 == name.length){
            Object.defineProperty(this, 'length',{
                enumerable: true ,
                writable: false,
                configurable: true ,
                value: i + 1
            })
        }
    }
    
}

let admins = new UserType (['Mike','Bob','Nikola']);
admins.join = Array.prototype.join
console.log(admins.join('; '));