import { Routes } from '@angular/router';
import { CadastroComponent } from './register/container/cadastro/cadastro.component';
import { LoginComponent } from './register/container/login/login.component';
import { MainComponent } from './main/main.component';


export const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'cadastro', loadChildren: () => import('./register/crud.routes').then((m) => m.sighUp) },
  { path: 'login', loadChildren: () => import('./register/crud.routes').then((m) => m.loginRouter) },
];


