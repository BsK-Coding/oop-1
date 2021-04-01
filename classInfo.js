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

