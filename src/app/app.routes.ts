import { RouterModule, Routes } from '@angular/router';
import { AboutComponent, PortafolioComponent, ItemComponent } from './components/index.pages';
const app_routes: Routes = [
  {path: 'home', component: PortafolioComponent},
  {path: 'about', component: AboutComponent},
  {path: 'producto', component: ItemComponent},
  {path: '**', pathMatch: 'full', redirectTo: ''}
];
export const app_routintg = RouterModule.forRoot(app_routes, {useHash: true});
