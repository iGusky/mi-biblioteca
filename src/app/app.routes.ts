import { Routes } from '@angular/router';
import { Favorites } from './favorites/favorites';
import { Home } from './home/home';

export const routes: Routes = [
  { path: 'favoritos', component: Favorites },
  { path: '', component: Home},
];
