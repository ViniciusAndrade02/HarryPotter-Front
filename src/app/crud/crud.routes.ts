import { Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';

export const crudRouter: Routes = [
  { path: 'cadastro',title:'Cadastro', component: CadastroComponent },
  { path: 'login', component: LoginComponent },
];
