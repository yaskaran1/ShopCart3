import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserDataService } from 'src/app/service/user-data.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  userForm=new FormGroup({
    firstName: new FormControl(null,[Validators.required,Validators.minLength(2)]),
    lastName: new FormControl(null,[Validators.required, Validators.minLength(2)]),
    email: new FormControl(null,[Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
    password: new FormControl(null,[Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]),
  })

  user={};
  constructor(private formBuilder: FormBuilder,private userService:UserDataService) { }

  ngOnInit(): void {
  }

  OnSubmit(){
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.userForm.value));
    this.user=Object.assign(this.user,this.userForm.value)
    this.userService.addUsers(this.user);
    this.userForm.reset();
  }
  
  get firstName(){
    return this.userForm.get('firstName');
  }
  get lastName(){
    return this.userForm.get('lastName');
  }
  get email(){
    return this.userForm.get('email');
  }
  get password(){
    return this.userForm.get('password');
  }

}
