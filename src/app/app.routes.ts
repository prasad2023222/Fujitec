import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'quick-access',
    component: HomeComponent
  },
  {
    path: 'news',
    component: HomeComponent
  },
  {
    path: 'events',
    component: HomeComponent
  },
  {
    path: 'it-awareness',
    component: HomeComponent
  },
  {
    path: 'organization',
    component: HomeComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];