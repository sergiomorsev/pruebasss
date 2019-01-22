import { Component, OnInit } from '@angular/core';
import{ Login } from './Login';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  public login: Login;
  public logins: Array<Login>;
  constructor() {
    this.login  = new Login("","");
    this.logins=[
    ];
  }

  ngOnInit() {
  }
  onSubmit() {
    this.logins.push(this.login);
  }

}
