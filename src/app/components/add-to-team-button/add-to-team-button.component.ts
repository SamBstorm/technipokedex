import { Component, Input, OnInit } from '@angular/core';
import { Result } from 'src/app/models/poke.model';
import { PlayerTeamService } from 'src/app/services/player-team.service';

@Component({
  selector: 'app-add-to-team-button',
  templateUrl: './add-to-team-button.component.html',
  styleUrls: ['./add-to-team-button.component.scss']
})
export class AddToTeamButtonComponent implements OnInit {

  @Input() result! : Result;

  constructor(private _teamServ : PlayerTeamService) { }

  ngOnInit(): void {
  }

  onClick(){
    this._teamServ.addPokemon(this.result);
  }

}
