import { Component, OnInit } from '@angular/core';
import { PlayersTeam } from 'src/app/models/poke.model';
import { PlayerTeamService } from 'src/app/services/player-team.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss']
})
export class TeamListComponent implements OnInit {

  public myTeams! : PlayersTeam
  public toUrl! : string

  constructor(private _teamServ : PlayerTeamService) { }

  ngOnInit(): void {
    this.myTeams = this._teamServ.playerTeam;
  }

  onClick(url : string) {
    this.toUrl = url;
  }

}
