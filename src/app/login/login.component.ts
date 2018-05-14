import { Component, OnInit } from '@angular/core';
import { LoginService } from '../Service/login.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = '';
  motDePass = '';

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    motDePass: new FormControl('', Validators.required)
  });

  constructor(private loginservice: LoginService, private router: Router) { }

  ngOnInit() {
  }

  login(util) {
    this.loginservice.login(util.value).subscribe(res => {
      console.log(res.json());
      const token = res.json().token;
     if (res.status === 200) {
     this.loginservice.savetoken(token);
       this.router.navigateByUrl('/article');
    }
  });
}

  }
