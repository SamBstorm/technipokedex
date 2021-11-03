import { Component, OnInit } from '@angular/core';
import { Pokedex } from 'src/app/models/poke.model';
import { PokeService } from 'src/app/services/poke.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss']
})
export class ListeComponent implements OnInit {

  pokedex! : Pokedex
  toUrl : string = ""

  constructor(
    private _pokeService : PokeService
  ) { }

  ngOnInit(): void {
    this.loadItems("https://pokeapi.co/api/v2/pokemon/")
  }

  loadItems(url : string) {
    this._pokeService.getAll(url).subscribe(
      (pokedexFromService : Pokedex) => {
        this.pokedex = pokedexFromService
      }
    )
  }

  clickPrevious() {
    this.loadItems(this.pokedex.previous ?? "")
  }

  clickNext() {
    this.loadItems(this.pokedex.next ?? "")
  }

  onClick(url : string) {
    this.toUrl = url;
  }

}
