import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokedex, Pokemon } from '../models/poke.model';
@Injectable({
  providedIn: 'root'
})
export class PokeService {

  constructor(
    private _httpClient : HttpClient
  ) { }

  getAll(url : string) : Observable<Pokedex> {
    return this._httpClient.get<Pokedex>(url)
  }

  getOne(url : string) : Observable<Pokemon> {
    return this._httpClient.get<Pokemon>(url)
  }
}
