/*
Améliorer la classe Point du cours en ajoutant une méthode distance pour calculer et retourner la distance entre 2 points.
La distance entre deux points peut se calculer en consultant: https://fr.wikipedia.org/wiki/Distance_entre_deux_points_sur_le_plan_cart%C3%A9sien
Pour calculer la racine carrée d'un nombre on utilise directement la méthode Math.sqrt:

Math.sqrt(9) // retourne 3

Pour mettre au carré une nombre on le multiplie par lui même ou sinon on utilise la méthode Math.pow:

Math.pow(3, 2) // retourne 9, c'est a dire 3 au carré
*/

/*
Formule mathématique:
AB = Racine carré de ((xb - xa)² + (yb - ya)²)
Racine carré d'un nombre "n"  => Math.sqrt(n)
Carré d'un nombre "n" => Math.pow(n, 2)
*/

// Définit d'une classe Point
class Point {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
  show() {
    console.log(`(${this.x}, ${this.y})`)
  }
  isEqual(point) {
    return this.x === point.x && this.y === point.y ? true : false
  }
  distance(end) {
    console.log(Math.sqrt(Math.pow((this.x - end.x), 2) + Math.pow((this.y - end.y), 2)))
  }
}

exports.Point = Point