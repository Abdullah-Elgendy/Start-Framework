import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Portfolio } from './components/portfolio/portfolio';
import { Contact } from './components/contact/contact';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home, pathMatch: 'full', title: 'Home' },
  { path: 'about', component: About, pathMatch: 'full', title: 'About' },
  { path: 'portfolio', component: Portfolio, pathMatch: 'full', title: 'portfolio' },
  { path: 'contact', component: Contact, pathMatch: 'full', title: 'Contact' },
];
