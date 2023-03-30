import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  
  {
    path: 'ana',
    loadComponent: () => import('./ana/ana.page').then( m => m.AnaPage)
  },  {
    path: 'ariane',
    loadComponent: () => import('./ariane/ariane.page').then( m => m.ArianePage)
  },
  {
    path: 'duda',
    loadComponent: () => import('./duda/duda.page').then( m => m.DudaPage)
  },
  {
    path: 'gabi',
    loadComponent: () => import('./gabi/gabi.page').then( m => m.GabiPage)
  },
  {
    path: 'mari',
    loadComponent: () => import('./mari/mari.page').then( m => m.MariPage)
  },


];
