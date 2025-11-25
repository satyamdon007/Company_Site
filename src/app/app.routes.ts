import { Routes } from '@angular/router';
import { HomePage } from './pages/home';
import { PlaceholderComponent } from './pages/placeholder';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'about', component: PlaceholderComponent },
  { path: 'contact', component: PlaceholderComponent },
  { path: 'careers', component: PlaceholderComponent },
  { path: 'mission', component: PlaceholderComponent },
  { path: 'impact', component: PlaceholderComponent },
  { path: 'zomato', component: PlaceholderComponent },
  { path: 'blinkit', component: PlaceholderComponent },
  { path: 'disti', component: PlaceholderComponent },
];
