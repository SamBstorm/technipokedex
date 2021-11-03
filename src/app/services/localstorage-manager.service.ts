import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
/** Service permettant de manipuler le LocalStorage de votre navigateur de manière propre.
 * Quand on ajoute une valeur, on vérifie si celle-ci n'est pas déjà présente
 * Quand on recherche, met à jour ou supprime une valeur, on vérifie que celle-ci est présente
*/
export class LocalstorageManagerService {

  constructor() { }

  create(key : string, value: object){
    if(localStorage.getItem(key)) throw new Error(`There's already an object on key : ${key}`);
    localStorage.setItem(key,JSON.stringify(value));
  }

  get(key : string){
    let value = localStorage.getItem(key);
    if(!value) throw new Error(`There's no object on key : ${key}`);
    else return JSON.parse(value);
  }

  update(key : string, value: object){
    let oldvalue = localStorage.getItem(key);
    if(!oldvalue) throw new Error(`There's no object on key : ${key}`);
    else localStorage.setItem(key, JSON.stringify(value));
  }
  
  delete(key : string){
    let oldvalue = localStorage.getItem(key);
    if(!oldvalue) throw new Error(`There's no object on key : ${key}`);
    else localStorage.removeItem(key);
  }
}
