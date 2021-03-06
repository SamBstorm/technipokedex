export interface Pokedex {
    count : number;
    next? : string;
    previous? : string;
    results : Result[];
}

export interface Result {
    name : string;
    url : string;
}

export interface Pokemon {
    name : string;
    weight : number;
    height : number;
    sprites : Sprites;
}

export interface Sprites {
    back_default : string;
    front_default : string;
    other : Other;
}

export interface Other {
    'official-artwork' : OfficialNetwork
}

export interface OfficialNetwork {
    front_default : string;
}

export interface PlayersTeam{
    name : string;
    pokemons : Result[];
}