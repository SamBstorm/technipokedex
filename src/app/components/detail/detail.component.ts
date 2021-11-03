import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/poke.model';
import { PokeService } from 'src/app/services/poke.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {


  @Input() set url(u : string) {
    this.resultUrl = u;
    this._pokeService.getOne(u).subscribe((data : Pokemon) => {
      this.pokemon = data;
    })
  }

  public resultUrl! : string;
  pokemon! : Pokemon

  constructor(
    private _pokeService : PokeService
  ) { 
  }
  

  ngOnInit(): void {
  }

}
