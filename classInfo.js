/*
Traduire votre script info.js pour utiliser une classe, et donc des instances de classes, au lieu object literals.

la classe devra se nommer Human
il faudra un constructeur qui initialisera donc firstName, lastName, age, et language
les fonctions printInfo, canVote, mostSkilledDev seront désormais des méthodes de cette classe
*/

/* CLASS */

class Human {
  constructor(firstname, lastname, age, languageProg) {
    this.firstName = firstname
    this.lastName = lastname
    this.age = age
    this.language = languageProg
  }
  printInfo() {
    return `first name: ${this.firstName}` + '\n' +
      `last name: ${this.lastName}` + '\n' +
      `age: ${this.age}`
  }
  canVote() {
    return this.age > 18 ? (`${this.firstName} à un droit de vote: true`) : (`${this.firstName} à un droit de vote: false`)
  }
  mostSkilledDev(person) {
    if (this.language.length > person.language.length) {
      return `${this.firstName} à ${this.language.length - person.language.length} langage de plus que ${person.firstName}`
    }
    else if (this.language.length < person.language.length) {
      return `${person.firstName} à ${person.language.length - this.language.length} langage de plus que ${this.firstName}`
    }
    else {
      return `draw: ${this.firstName} connait le même nombre de langages que ${person.firstName}`
    }
  }
}

const alice = new Human('Alice', 'Liddell', 28, ['Html', 'Php'])
const bob = new Human('Bob', 'Lemon', 30, ['Perl', 'Python', 'Java'])
const charlie = new Human('Charlie', 'Charlot', 8, ['NodeJS', 'Javascript', 'Sql'])

console.log(alice.printInfo())
console.log(bob.printInfo())
console.log(charlie.printInfo())
console.log(alice.canVote())
console.log(bob.canVote())
console.log(charlie.canVote())
console.log(bob.mostSkilledDev(alice))
console.log(bob.mostSkilledDev(charlie))
console.log(alice.mostSkilledDev(charlie))

/*

const alice = {
  firstName: 'Alice',
  lastName: 'Liddell',
  age: 28,
  language: ['Html', 'Php']
}

const bob = {
  firstName: 'Bob',
  lastName: 'Lemon',
  age: 30,
  language: ['Perl', 'Python', 'Java']
}

const charlie = {
  firstName: 'Charlie',
  lastName: 'Charlot',
  age: 8,
  language: ['NodeJS', 'Javascript', 'Sql']
}

/* FONCTION PRINTINFO

const printInfo = (person) => {
  console.log(`first name: ${person.firstName}`)
  console.log(`last name: ${person.lastName}`)
  console.log(`age: ${person.age}`)
}

printInfo(alice)
printInfo(bob)
printInfo(charlie)

/* FONCTION CANVOTE

const canVote = (person) => {
  person.age > 18 ? console.log(`true`) : console.log(`false`)
}

canVote(alice)
canVote(bob)
canVote(charlie)

/* FONCTION MOSTKILLEDDEV

const mostSkilledDev = (person1, person2) => {
  if (person1.language.length > person2.language.length) {
    return (`${person1.firstName} à ${person1.language.length - person2.language.length} langage de plus que ${person2.firstName}`)
  }
  else {
    return "draw"
  }

}

console.log(mostSkilledDev(bob, alice))
*/
