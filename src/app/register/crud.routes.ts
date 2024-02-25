import { Route, } from '@angular/router';
import { CadastroComponent } from './container/cadastro/cadastro.component';
import { LoginComponent } from './container/login/login.component';

export const loginRouter: Route[] = [
 { path: '', component: LoginComponent },
];

export const sighUp:Route[] = [
  {path:'',component: CadastroComponent},
]
