/* Import des class des autres fichiers */

const { Point } = require('./point')
const { Human } = require('./classInfo')

/* Informations du fichier point.js */

console.log(`La distance entre p1 et p2 est de :\n`)
const p1 = new Point(1, 2)        // const p1 = new Point(x, y) => Point de départ "this"
const p2 = new Point(10, 11)      // const p2 = new Point(x, y) => Point d'arriver "end"
//const p1 = new Point(10, 12)    //Si l'on remplace les valeurs de p1 par celle demandé en fin d'exercice le résultat nous retournant un NaN
p1.distance(p2)

/* Informations du fichier classinfo.js */

console.log(`\nInformations du fichier classinfo :`)
const alice = new Human('Alice', 'Liddell', 28, ['Html', 'Php'])
const bob = new Human('Bob', 'Lemon', 30, ['Perl', 'Python', 'Java'])
const charlie = new Human('Charlie', 'Charlot', 8, ['NodeJS', 'Javascript', 'Sql'])

console.log(alice.printInfo())
console.log(bob.printInfo())
console.log(charlie.printInfo())

console.log(`\nInformations sur les droits de vote :\n`)
console.log(alice.canVote())
console.log(bob.canVote())
console.log(charlie.canVote())

console.log(`\nRetour de la différence de langages de programmations d'une personne à l'autre :\n`)
console.log(bob.mostSkilledDev(alice))
console.log(bob.mostSkilledDev(charlie))
console.log(alice.mostSkilledDev(charlie))