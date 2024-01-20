import { Routes } from '@angular/router';
import { CrudComponent } from './crud/crud.component';

export const routes: Routes = [
  { path: '', redirectTo: 'crud', pathMatch: 'full' },
  { path: 'crud', component: CrudComponent },
];


