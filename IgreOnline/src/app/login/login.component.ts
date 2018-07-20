import { Component, OnInit } from '@angular/core';
import { User } from '../../../user';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  user: User = {
    name: '',
    password: ''
  };

  constructor(private auth: AuthService, private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      loginUsername: '',
      loginPassword: ''
    });
  }


  public onSubmit(): void {
    this.user.password = this.loginForm.get('loginPassword').value;
    this.user.name = this.loginForm.get('loginUsername').value;
    if (this.loginForm.valid) {
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
