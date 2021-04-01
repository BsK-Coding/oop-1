//Import de la fonction Point

const { Point } = require('./point')
const { Human } = require('./classInfo')
const p1 = new Point(10, 12)

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