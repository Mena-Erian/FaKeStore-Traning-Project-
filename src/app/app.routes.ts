import { Routes } from '@angular/router';
import { MainLayout } from './layout/main-layout/main-layout';
import { AuthLayout } from './layout/auth-layout/auth-layout';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'main/home',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    component: AuthLayout,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
      {
        path: 'login',
        loadComponent: () => import('./pages/login/login').then((c) => c.Login),
      },
      {
        path: 'logout',
        loadComponent: () =>
          import('./pages/logout/logout').then((c) => c.Logout),
      },
    ],
  },
  {
    path: 'main',
    component: MainLayout,
    children: [
      {
        path: 'home',
        loadComponent: () => import('./pages/home/home').then((c) => c.Home),
        title: 'Home',
      },
      {
        path: 'products',
        loadComponent: () =>
          import('./pages/products/products').then((c) => c.Products),
        title: 'Products',
      },
      {
        path: 'cart',
        loadComponent: () => import('./pages/cart/cart').then((c) => c.Cart),
        title: 'Cart',
      },
      {
        path: '**',
        loadComponent: () =>
          import('./pages/not-found/not-found').then((c) => c.NotFound),
      },
    ],
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/not-found/not-found').then((c) => c.NotFound),
  },
];
