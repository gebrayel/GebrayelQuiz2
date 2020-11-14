import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersDetailsComponent } from './pages/characters-details/characters-details.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'character-details/:id', component: CharactersDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
