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

