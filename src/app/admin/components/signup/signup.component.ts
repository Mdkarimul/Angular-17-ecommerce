import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthapiService } from '../../services/authapi.service';
import { ReactiveFormsModule ,FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { NgIf } from '@angular/common';
import ValidateForm from '../../helpers/form-field-validation';
import { UserType } from '../../types/auth-type';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule,NgIf],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {


  constructor(private auth:AuthapiService,private fb:FormBuilder){
  }


  signupForm =  this.fb.group({
    full_name: new FormControl('',[Validators.required,Validators.minLength(5)]),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required]),
    role:new FormControl('',[Validators.required])
  })

  get full_name() {
    return this.signupForm.get('full_name');
  }
  get email() {
    return this.signupForm.get('email');
  }
  get password() {
    return this.signupForm.get('password');
  }
  get role() {
    return this.signupForm.get('role');
  }


  
  submitForm(){
    if(this.signupForm.valid){
      this.auth.post(this.signupForm.value as UserType);
    }else{
      
      ValidateForm.ValidateAllFormField(this.signupForm);
    }

  }


}
