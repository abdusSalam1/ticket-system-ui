import { LoginService } from 'src/app/service/login.service';
import {Component, EventEmitter,OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private loginService: LoginService, private router: Router){}

  ngOnInit(): void {
  
  }

  submit() {
    if (this.form.valid) {
      this.loginService.login(this.form.value)
      .subscribe(user => {
        console.log(user);
        this.router.navigate(['/tickets']);
      }, (err: any) => {
        console.log("Unable to login");
      });
    }
  }

}
