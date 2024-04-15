import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import ValidateForm from '../../helpers/form-field-validation';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule,NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private fb:FormBuilder){

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
       console.log(this.loginForm.value);
    }else{
      ValidateForm.ValidateAllFormField(this.loginForm);
    }
       
  }

}
