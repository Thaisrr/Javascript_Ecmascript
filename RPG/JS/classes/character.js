class Character {
    name;
    classe;
    pv;
    xp = 0;
    strength;
    defense;

    constructor( name, classe , pv = 20) {
        this.name = name;
        this.classe = classe;
        this.pv = pv;
        this.strength = pv / 4;
        this.defense = pv / 4;
    }
}

