import { Component, OnInit } from '@angular/core';
import { User } from 'user';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  user: User = {
    name: '',
    password: '',
    email: ''
  };

  constructor(private auth: AuthService, private fb: FormBuilder) {

  }

  createForm() {

  }
  public onSubmit(): void {
    this.user.name = this.registerForm.get('registerUsername').value;
    this.user.password = this.registerForm.get('registerPassword').value;
    this.user.email = this.registerForm.get('registerEmail').value;
    if (this.registerForm.valid) {
      this.auth.login(this.user).subscribe(res => {
        if (res.status === 'ok') {
          if (res.token) {
            localStorage.setItem('token', res.token);
            window.location.href = '/';
            // this.onSuccess();
          }
      } else {
      //  this.onError(res.message);
      }
      });
    }
  }
  ngOnInit() {
  }

}
