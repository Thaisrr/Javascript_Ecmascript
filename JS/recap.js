/*
Javascript -> norme ES6 ( 2015 )
 */

let variable_modifiable = "Coucou";
const constante = 'Je ne peux pas être modifiée';
let no_value; // undefined

/* Types de variables :
- boolean
- number ( integer + float + double .... )
- string
- Array ( tableaux )
- Object
 */

/*
Number : opérations :
* / + - %
++ incrémenter
-- décrémenter
....
classe Math -> opérations + complexes ( cf documentation du MDN )


Booleans : true / false
- condition ===  !== > < <= >=
- Cumuler des conditions : && ( et )  || ( ou )
- !mavariable => true si la variable est undefined
 */


/* Un fonction : défini une tâche à accomplir quand on appelle la fonction )
Ex : recette de cuisine :

fonction :
    - mélanger
    - cuire
    - incorporer

   paramètres : ingrédients, les ustensiles

   recette : script
 */

function sum(a, b) {
    return a + b; // retour : optionnel
}

const result = sum(23, 45);

const sum2 = (a, b) => a + b;


if(true){
    // instruction si condition est vraie
} else if (false) {
    // instruction si 2ème condition est vraie
} else {
    // instruction dans les autres cas
}

// Switch et les expressions ternaires

for (let i = 0; i < 5; i++) {
    // truc à faire en boucle un nombre connu de fois
}

const bool = false;
while(bool) {
    // truc à faire en boucle tant que condition est vraie
}

do {
    // Truc à faire 1 fois
    // Répéter si la condition est vrai
} while (bool);


/*
Les listes ( Array )
 */

const liste = ['coquelicots', 'paquerettes'];
// Si la liste est vide []

liste.push('pivoine'); // ajouter à la fin

liste.forEach( (fleur, index) => {
    // Faire qqch pour chacune des fleurs
});

let id = liste.indexOf('pivoine');
liste.splice(id, 1);
// Autres méthodes disponibles sur MDN
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array


/*
Les objets :

- Objets littéraux : définis à la création de la variable
- Les classes : squelette qui permettent de créer des objets avec des propriétés définies

- Objets description d'une entité :
        - attributs ( variables )
        - méthodes ( fonctions )

Attention : à l'intérieur d'un objet ( de sa description, dans ses méthodes )
    -> on utilise le mot clef "this" pour faire référence à l'objet

Ne pas confondre classe et objet :
    Une classe, c'est juste une description / un squelette
    Un objet, c'est une instance de classe ( c'est la variable créée à partir de la classe )

 */
/*
Javascript -> norme ES6 ( 2015 )
 */

let variable_modifiable = "Coucou";
const constante = 'Je ne peux pas être modifiée';
let no_value; // undefined

/* Types de variables :
- boolean
- number ( integer + float + double .... )
- string
- Array ( tableaux )
- Object
 */

/*
Number : opérations :
* / + - %
++ incrémenter
-- décrémenter
....
classe Math -> opérations + complexes ( cf documentation du MDN )


Booleans : true / false
- condition ===  !== > < <= >=
- Cumuler des conditions : && ( et )  || ( ou )
- !mavariable => true si la variable est undefined
 */


/* Un fonction : défini une tâche à accomplir quand on appelle la fonction )
Ex : recette de cuisine :

fonction :
    - mélanger
    - cuire
    - incorporer

   paramètres : ingrédients, les ustensiles

   recette : script
 */

function sum(a, b) {
    return a + b; // retour : optionnel
}

const result = sum(23, 45);

const sum2 = (a, b) => a + b;


if(true){
    // instruction si condition est vraie
} else if (false) {
    // instruction si 2ème condition est vraie
} else {
    // instruction dans les autres cas
}

// Switch et les expressions ternaires

for (let i = 0; i < 5; i++) {
    // truc à faire en boucle un nombre connu de fois
}

const bool = false;
while(bool) {
    // truc à faire en boucle tant que condition est vraie
}

do {
    // Truc à faire 1 fois
    // Répéter si la condition est vrai
} while (bool);


/*
Les listes ( Array )
 */

const liste = ['coquelicots', 'paquerettes'];
// Si la liste est vide []

liste.push('pivoine'); // ajouter à la fin

liste.forEach( (fleur, index) => {
    // Faire qqch pour chacune des fleurs
});

let id = liste.indexOf('pivoine');
liste.splice(id, 1);
// Autres méthodes disponibles sur MDN
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array


/*
Les objets :

- Objets littéraux : définis à la création de la variable
- Les classes : squelette qui permettent de créer des objets avec des propriétés définies

- Objets description d'une entité :
        - attributs ( variables )
        - méthodes ( fonctions )

Attention : à l'intérieur d'un objet ( de sa description, dans ses méthodes )
    -> on utilise le mot clef "this" pour faire référence à l'objet

Ne pas confondre classe et objet :
    Une classe, c'est juste une description / un squelette
    Un objet, c'est une instance de classe ( c'est la variable créée à partir de la classe )

 */
