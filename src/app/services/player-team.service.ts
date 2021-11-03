import { Injectable } from '@angular/core';
import { PlayersTeam, Result } from '../models/poke.model';
import { LocalstorageManagerService } from './localstorage-manager.service';

@Injectable({
  providedIn: 'root'
})
export class PlayerTeamService {

  private _playerTeam : PlayersTeam;

  public get playerTeam(){
    return this._playerTeam;
  }

  constructor(private _local : LocalstorageManagerService) { 
    this._playerTeam = {name : "Team1", pokemons : []}
    try {
      this._playerTeam = this._local.get(this._playerTeam.name)
    } catch (error) {
      console.warn("Attention pas encore d'équipe, on l'initialise.");
      this._local.create(this._playerTeam.name, this._playerTeam)
    }
  }

  addPokemon(result : Result){
    if(this._playerTeam.pokemons.length >= 6) throw new Error("Too many pokémons in your team");
    this._playerTeam.pokemons.push(result);
    this._local.update(this._playerTeam.name, this._playerTeam);
  }

  removePokemon(result : Result){
    if(this._playerTeam.pokemons.length <= 0) throw new Error("There's no pokémon in your team");
    if(!this._playerTeam.pokemons.map(p => p.name).includes(result.name)) throw new Error(`There's not Pokémon with the name ${result.name}`);
    let i = "";
    for (let index in this._playerTeam.pokemons) {
      if(this._playerTeam.pokemons[index].name == result.name) i = index;
    }
    this._playerTeam.pokemons.splice(parseInt(i), 1);
    this._local.update(this._playerTeam.name, this._playerTeam);
  }
}
