import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListeComponent } from './components/liste/liste.component';
import { DetailComponent } from './components/detail/detail.component';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card'; 
import {MatGridListModule} from '@angular/material/grid-list'; 
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {HttpClientModule} from '@angular/common/http';
import { MatDividerModule } from '@angular/material/divider';
import { FavoriteButtonComponent } from './components/favorite-button/favorite-button.component';


@NgModule({
  declarations: [
    AppComponent,
    ListeComponent,
    DetailComponent,
    FavoriteButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
    HttpClientModule,
    MatDividerModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
