class Tasse {
    couleur;
    capacite;
    contenance = 0;
    isPropre;
    peutContenir;


    // Paramètre isclean : optionnel
    constructor(color, capacity, isClean = true) {
        this.couleur = color;
        this.capacite = capacity;
        this.isPropre = isClean;
    }

    casser() {
        console.log('Oups');
    }

    decrire() {
        console.log("J'ai une jolie tasse " + this.couleur);
    }

    remplir() {
        this.contenance = this.capacite;
    }
}

// La classe, c'est la carte d'identité / le squelette
// L'objet, c'est une instance d'une classe
const t1 = new Tasse('rouge', 300);
console.log(t1);

const t2 = new Tasse('dorée', 100, false);
console.log(t2);
t2.remplir(); // Best
t2.contenance = 100; // moins bien

/*
t1.capacite = 300;
t1.couleur = 'rouge';
t1.remplir();

t2.capacite = 100;
t2.couleur = "dorée";
t2.remplir();

console.log(t1);
console.log(t2);

const t3 = new Tasse();
t3.remplir();
t3.decrire();
console.log(t3);
*/

class Address {
    numero;
    street;
    zipcode;
    city;

    constructor(nb, st, zip, ct) {
        this.numero = nb;
        this.street = st;
        this.zipcode = zip;
        this.city = ct;
    }
}


class User {
    _id;
    _login;
    _email;
    _password;
    _role = "user";
    _favorites;
    _username;
    address;
    friends = [];

    constructor(login, email, password) {
        this._login = login;
        this._email = email;
        this._password = password;
        this._username = this._login + this._email;
        this._role = "USER";
    }

    //constructor() {}

    setRole(new_role) {
        // ne fonctionne que si je suis connectée en tant qu'Admin
        this._role = new_role;
    }

    sayHello(someone) {
        console.log(`${ this._login } dit bonjour à ${ someone._login} `);
        someone.friends.push(this);
    // this l'instance d'Utilisateur qui va faire le sayHello()
        //  x.sayHello(y)
        // x = this ( instance de l'objet )
        // y = paramètre ( someone )

    }
}

const u = new User('Toto', 'tt@mail.fr', 'supertoto');
const u2 = new User('Jean Micheline', 'jjdu62@mail.fr', '1234');
u.setRole('Admin');
u.id = 23;


const address = new Address(3, 'rue des Lilas', '59000', 'Lille');
u.address = address;
u.friends.push(u2);

const u3 = new User('Machin', 'truc@mail.fr', 'motdepasse');

u.friends.push(u3);
console.log(u);

// Afficher dans la console le login de tous les amis de u ?

u.friends.forEach( ami => console.log(ami._login) );

for(let ami of u.friends) {
    console.log(ami._login);
}

for(let i = 0; i < u.friends.length; i++) {
    console.log( u.friends[i]._login )
}

u.sayHello(u2);

console.log(u2)


/*
Dans un nouveau fichier :
    RPG : RolePlay Game

   Personnage :
        - nom
        - classe
        - pv ( points de vie )   => Points de vie 20 ( par défaut ) modifiable à la création
        - xp ( points d'expériences ) => zéro
        - force ( points de force ) => 1 tier des points de vie
        - defense ( points de defense ) => 1 tier des points de vie


        Créer les persos en dur dans le code
        Afficher les persos dans le console log

        Bonus
        ( Pour les plus motivés : créer les personnages via prompt )

*/




