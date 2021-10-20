/*
Qu'est-ce qu'un objet ?
- Tasse ->
      - couleur
      - contenance
      - matière
      - poids
      - a une anse?
      - est Cassée ?
      - est propre ?

      - Remplir
      - casser
      - vider
      - laver
      - ranger
  ....

  Objet :
    - Caractéristiques -> attributs
    - Actions -> méthodes

 */
// Objet littéral // se rapproche du JSON
const tasse = {
    couleur: 'bleue',
    capacite: 250,
    contenance: 0,
    isPropre: false,
    peutContenir: ['café', 'thé', 'tisane', 'chocolat chaud'],
    casser1: () => { // déconseillé en tant que méthode
        console.log('Oups ! fléchée');
        console.log(this);
    },
    casser2: function () {
        console.log("Oups - anonyme");
        console.log(this);
    },
    casser3() { console.log('Oups')},
    remplir() {
        console.log(this); // contexte
        if(this.contenance < this.capacite) {
            this.contenance = this.capacite
        }
    }
};

console.log(tasse);
console.log(`J'ai une tasse ${ tasse.couleur }, avec une capacité de ${tasse.capacite}ml`);
tasse.contenance = 200;
console.log(`Il y a actuellement ${tasse.capacite}ml de café dans ma tasse`);

tasse.peutContenir.push('eau');
tasse.peutContenir.forEach( el => console.log('ma tasse peut contenir : ', el));

tasse.casser1();
tasse.casser2();
tasse.casser3();
tasse.remplir();
console.log(tasse);
console.log('global : ');
console.log(this);

const article = {
    text : '',
    title : "",
    image: '',
    auteurice : '',

};
