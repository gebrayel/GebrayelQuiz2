import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersDetailsComponent } from './pages/characters-details/characters-details.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PreviewPageComponent } from './pages/preview-page/preview-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'character-details/:id', component: CharactersDetailsComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
