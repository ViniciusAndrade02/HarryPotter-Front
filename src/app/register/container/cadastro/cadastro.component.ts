import { Component,OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, } from '@angular/forms';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
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
  errorSamePassoword:boolean = false

  constructor(private fb:FormBuilder,private router:Router) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      name: ["",[Validators.required,Validators.maxLength(40)]],
      email: ["",[Validators.required,Validators.email,Validators.maxLength(50)]],
      password: ["",[Validators.required,Validators.maxLength(20)]],
      repetPassword: ["",[Validators.required,Validators.maxLength(20)]],
      house: ['',[Validators.required]]
    }) 
  }

  taked(controlName:string){
    return this.signupForm.get(controlName)
  }

  back(){
    this.router.navigate(['/main'])
  }

  onSubmit(){
    if(this.signupForm.value.password !== this.signupForm.value.repetPassword){
      return this.errorSamePassoword =true
    }
    
    return console.log(this.signupForm.value)
  }
}
