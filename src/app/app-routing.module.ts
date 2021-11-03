import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './components/detail/detail.component';
import { ListeComponent } from './components/liste/liste.component';

const routes: Routes = [
  { path : '', component : ListeComponent, pathMatch : 'full' },
  {path : 'details/:id', component : DetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
