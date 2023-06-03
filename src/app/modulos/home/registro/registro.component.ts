import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/user.model';
import { UserService } from 'src/app/service/userService/user.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.sass']
})
export class RegistroComponent {

  constructor(private userService: UserService, private route: Router) {
  
  }

  title = "JOTA-PROTECT"

  UserName: string = "";
  email: string = "";
  password: string="";

  registrar(){

    let newUser = new UserModel;
    newUser.setvaluePrimary(this.UserName,this.email,this.password);
    this.userService.registrarUser(newUser);
    this.route.navigate(['/login']);

  }



}
