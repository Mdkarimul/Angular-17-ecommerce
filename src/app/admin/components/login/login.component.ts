import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import ValidateForm from '../../helpers/form-field-validation';
import { AuthapiService } from '../../services/authapi.service';
import { LoginType } from '../../types/auth-type';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule,NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private fb:FormBuilder,private auth:AuthapiService){

  }


  loginForm = this.fb.group({
    email:new FormControl('',[Validators.required]),
    password:new FormControl('',Validators.required)
  })

  get email(){
    return this.loginForm.get('email');
  }
  get password(){
    return this.loginForm.get('password');
  }

  loginSubmit(){
    if(this.loginForm.valid){
       this.auth.login(this.loginForm.value as LoginType).subscribe({
        next:(data)=>{
        console.log(data)
        },
        error:(error)=>{
       console.log(error);
        }
       });
    }else{
      ValidateForm.ValidateAllFormField(this.loginForm);
    }
       
  }

}
