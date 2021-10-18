/*
Une fonction, c'est quoi ?
    Un block d'instructions qu'on doit appeler pour qu'il s'éxécute.
    Il réutilisable

    camelCase
    snake_case
    kebab-case
 */

console.log("Coucou");
console.log(":) :)");

/**
 * mot clef "function"
 * nom de fonction ( sans espace, 1ère lettre en minuscule )
 * parenthèses
 * entre accolades : block d'instructions
 */
function sayHello() {
    console.log("Hello from my first function ! :)");
}

sayHello();
sayHello();

// On peut passer un paramètre à une fonction
// A l'intérieur de la fonction, ce paramètre se comporte comme une variable
function greatings(name) {
    const toto = "toto";
    console.log("Hello " + name); // Hello valeur originale de name
    name = "Kilian";
    console.log("Hello aussi " + name); // Hello aussi Kilian
}

greatings('Samy');
const nom = "Maxime";
greatings(nom);
console.log(nom); // Maxime

let var1 = "Toto";
let var2 = var1;
console.log(var1, var2); //"Toto, Toto";
var2 = "Titi";
console.log(var1); // Toto

// console.log(toto); // error : toto n'est pas défini

// On peut mettre plusieus paramètres, ils seront alors séparés par des virgules.
function sum(a, b) {
    const result = a + b;
    console.log(`${a} + ${b} = ${result}`);
    return result;
}

const result1 = sum(567, 90890);
const result2 = sum(897898956785, 98789);

console.log(result1 / result2);

console.log( sum(result1, result2) );




