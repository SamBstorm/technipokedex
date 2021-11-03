import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Result } from 'src/app/models/poke.model';
import { FavoriteService } from 'src/app/services/favorite.service';

@Component({
  selector: 'app-favorite-button',
  templateUrl: './favorite-button.component.html',
  styleUrls: ['./favorite-button.component.scss']
})
/**Component permettant de faire le lien entre le service et l'interface utilisateur.
 * Si l'on clique dessus un comportement de changement de status : Il passe de favoris à non-favoris et vice-versa.
 * Si par contre, il devrait avoir un changement de contenu, on enclenche le service de favoris pour mettre à jour le status.
 */
export class FavoriteButtonComponent implements OnInit, OnDestroy {

  @Input() set currentResult(result : Result){
    this.result = result;    
    this._favServ.callNext();
  }
  
  public result! : Result;
  public isFavorite! : boolean;

  constructor(private _favServ : FavoriteService) { }

  ngOnDestroy(): void {
    console.log('Method not implemented.');
  }

  ngOnInit(): void {
    this.initIsFavorite();
    this._favServ.AsChanged.subscribe(()=>this.initIsFavorite());
  }
    
  toggleFavorite(){
    this.initIsFavorite();
    if(this.isFavorite) this._favServ.removeFavorite(this.result);
    else this._favServ.addFavorite(this.result);
    this.initIsFavorite();
  }

  private initIsFavorite(){
    this.isFavorite = this._favServ.isFavorite(this.result)
  }

}
