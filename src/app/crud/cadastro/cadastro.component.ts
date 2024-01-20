import { Component,OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Form, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule,CommonModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent implements OnInit{

  signupForm!:FormGroup;

  constructor(private fb:FormBuilder) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      name: ["",[Validators.required,Validators.maxLength(20)]],
      email: ["",Validators.required,Validators.email,Validators.maxLength(50)],
      password: ["",Validators.required,Validators.maxLength(20)],
      repetPassword: ["",Validators.required,Validators.maxLength(20)],
      birthday: ['',Validators.required]
    }) 
  }

  taked(controlName:string){
    return this.signupForm.get(controlName)
  }


  onSubmit(){
    console.log('usdfusefhiudsv')
  }
}
