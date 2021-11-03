import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Result } from '../models/poke.model';
import { LocalstorageManagerService } from './localstorage-manager.service';
const KEY : string = 'Favorite'

@Injectable({
  providedIn: 'root'
})
/**Ce service permet de manipuler une liste de favoris.
 * On l'initialise avec le LocalStorageService, on y envois les nouvelles valeurs, et supprime les anciennes valeurs.
 * Attention : il s'agit d'une liste d'object, donc c'est des informations référentiels:
 * les includes() et opérateurs d'égalités ne fonctionne pas, se baser sur une valeur servant d'identifiant.
 * 2 actions possibles : Ajouter et supprimer.
 * 1 function de controle : permet de savoir si l'élément est oui ou non dans la liste
 * 1 BehaviorSubject : Permet de signaler, d'émettre une information lors de modification de la liste
 */
export class FavoriteService {

  private _favorites : Result[] = [];
  public AsChanged : BehaviorSubject<null> = new BehaviorSubject(null);

  constructor(private _local : LocalstorageManagerService) { 
    try {
      this._favorites = this._local.get(KEY)
    } catch (error) {
      console.warn(error);
      console.log("You're favorite will be initialized to 0");
      //this._favorites = [];
    }
  }

  addFavorite(result : Result){
    if(this._favorites.map(r=>r.name).includes(result.name)) throw new Error(`${result.name} is already in favorite`);
    else this._favorites.push(result);
    console.log(this._favorites);
    if(this._favorites.length == 1) this._local.create(KEY, this._favorites)
    else this._local.update(KEY, this._favorites);
    this.AsChanged.next(null);
  }
  
  removeFavorite(result : Result){    
    if(!this._favorites.map(r=>r.name).includes(result.name)) throw new Error(`${result.name} is not in favorite`);
    else this._favorites = this._favorites.filter(r => r.name != result.name);
    console.log(this._favorites);
    if(this._favorites.length == 0) this._local.delete(KEY);
    else this._local.update(KEY, this._favorites);
    this.AsChanged.next(null);
  }

  isFavorite(result : Result){
    return this._favorites.map(r=>r.name).includes(result.name);
  }

  callNext(){
    this.AsChanged.next(null);
  }
}
