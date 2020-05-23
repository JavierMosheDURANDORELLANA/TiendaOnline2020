import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from '../servicios/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginForm = new FormGroup({
    email: new FormControl (''),
    password: new FormControl (''),
  });

  constructor(private authSvc: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  async onLogin(){
    const { email, password} = this.LoginForm.value;
    try{
      const user = await this.authSvc.login(email, password);
      if (user) {
      // Redireccionar a tienda.
      this.router.navigate(['/tienda'])
      }
      }
      catch (error){console.log(error); }

  }

}
