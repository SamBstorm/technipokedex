import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './components/detail/detail.component';
import { ListeComponent } from './components/liste/liste.component';
import { TeamListComponent } from './components/team-list/team-list.component';

const routes: Routes = [
  { path : '', component : ListeComponent, pathMatch : 'full' },
  {path : 'details/:id', component : DetailComponent},
  {path : 'team', component:TeamListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
