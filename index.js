const playerOne = {
    name: "tim",
    marker: "X"
}

const playerTwo = {
    name: "jenn",
    marker: "O"
}

function printName(player) {
    console.log(player.name)
}

function Player(name, marker) {
    this.name = name 
    this.marker = marker
    this.sayName = function() {
        console.log(name)
    }
}

//const player = new Player('steve', 'X')
//console.log(player.name)

const player1 = new Player('steve', 'X')
const player2 = new Player('also steve', 'O')
//player1.sayName()
//player2.sayName()


Object.getPrototypeOf(player1) === Player.prototype //returns true
Object.getPrototypeOf(player2) === Player.prototype // returns true


Player.prototype.sayHello = function() {
    console.log("Hello, I'm a player! ;p");
}

//player1.sayHello() //logs "Hello, I'm a player"
//player2.sayHello() // logs "Hello, I'm a player"

//Player.prototype
Object.getPrototypeOf(Player.prototype) === Object.prototype //true

player1.valueOf() //output: Object {name: "steve, marker: x, sayName: sayName()"}

player1.hasOwnProperty('valueOf'); //false
Object.prototype.hasOwnProperty('valueOf'); //true

Object.prototype.hasOwnProperty('hasOwnProperty'); //true

//new example
function Person(name) {
    this.name = name 
}

Person.prototype.sayName = function() {
    console.log(`Hello, I'm ${this.name}!!`)
}

function Player(name, marker) {
    this.name = name 
    this.marker = marker 
}

Player.prototype.getMarker = function() {
    console.log(`My marker is '${this.marker}'`)
}

// Object.getPrototypeOf(Player.prototype) should
// return the value of "Person.prototype" instead
// of "Object.prototype"

Object.getPrototypeOf(Player.prototype) // retyurns object.prototype

//makes Player objects inherit from Person
Object.setPrototypeOf(Player.prototype, Person.prototype)
Object.getPrototypeOf(Player.prototype) //returns Person.prototype

//Don't need to be declared again, but done for example:
//const player1 = new Player('steve', 'X')
//const player2 = new Player('also Steve', 'O')

player1.sayName() //Hello, I'm Steve!
player2.sayName() //Hello, I'm also steve!

player1.getMarker() // My marker is 'x'
player2.getMarker() // My marker is 'O'
