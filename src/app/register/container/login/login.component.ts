import { Component,OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit{

  login!:FormGroup

  constructor(private fb:FormBuilder) {}

  ngOnInit(): void {
    this.login = this.fb.group({
      email:["",[Validators.required,Validators.email,Validators.maxLength(50)]],
      password:["",[Validators.required,Validators.maxLength(20)]]
    })
  }

  taked(controlName:string){
    return this.login.get(controlName)
  }

  doingLogin(){
    console.log('jeifhuwfheuf')
  }
}
