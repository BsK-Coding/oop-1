/*
Créer un object literal alice qui contiendra les informations suivantes:

firstName: 'Alice'
lastName : 'Liddell'
age: 28
Dans le même fichier créer object literal bob qui contiendra les informations suivantes:

firstName: 'Bob'
lastName: 'Lemon'
age: 30
Dans le même fichier créer object literal charlie qui contiendra les informations suivantes:

firstName: 'Charlie'
lastName: 'Charlot'
age: 8

Améliorer le programme précédent en ajoutant les fonctionnalités ci dessous.
Faites preuve d'imagination et ajouter à chacun des objets une propriété language
qui sera un tableau de string qui contiendra la liste de tous les langages de programmation que Alice,
Bob et Charlie connaissent.
*/

/* OBJECT LITERAL */

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


/*
Améliorer le programme précédent en ajoutant les fonctionnalités ci dessous.Créer une fonction printInfo
qui prendra un objet en paramètre et qui affichera sur la console les informations concernant alice, bob ou charlie
*/

/* FONCTION PRINTINFO */

const printInfo = (person) => {
  console.log(`first name: ${person.firstName}`)
  console.log(`last name: ${person.lastName}`)
  console.log(`age: ${person.age}`)
}

printInfo(alice)
printInfo(bob)
printInfo(charlie)


/*
Améliorer le programme précédent en ajoutant les fonctionnalités ci dessous. Créer une fonction canVote
qui prendra un objet en paramètre et qui retourne true si la personne peut voter ou false sinon.
Par exemple canVote(alice) retournera true et canVote(charlie) retournera false.
La majorité est à 18 ans.
*/

/* FONCTION CANVOTE */

const canVote = (person) => {
  return person.age > 18 ? true : false
}

console.log(canVote(alice))
console.log(canVote(bob))
console.log(canVote(charlie))


/*
Améliorer le programme précédent en ajoutant les fonctionnalités ci dessous. Ecrivez une fonction mostSkilledDev
qui prendra comme paramètre 2 objets, parmi alice, bob et charlie et qui retournera le firstName de la personne 
qui connait le plus de langages de programmation.
En cas d'égalité draw sera retourné.
*/

/* FONCTION MOSTKILLEDDEV */

const mostSkilledDev = (person1, person2) => {
  if (person1.language.length > person2.language.length) {
    return `${person1.firstName} à ${person1.language.length - person2.language.length} langage de plus que ${person2.firstName}`
  }
  else if (person1.language.length < person2.language.length) {
    return `${person2.firstName} à ${person2.language.length - person1.language.length} langage de plus que ${person1.firstName}`
  }
  else {
    return `draw: ${person1.firstName} connait le même nombre de langages que ${person2.firstName}`
  }
}

console.log(mostSkilledDev(alice, bob))
console.log(mostSkilledDev(alice, charlie))
console.log(mostSkilledDev(bob, charlie))
console.log(mostSkilledDev(bob, alice))
console.log(mostSkilledDev(charlie, alice))
console.log(mostSkilledDev(charlie, bob))