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

/* EXPORT DE NOTRE CLASS */
//Le 1er therme .Human aurrait pu prendre un autres nom plus parlant de la fonction comme "infos"
//et le second therme après = est le nom de notre Class

exports.Human = Human