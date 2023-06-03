import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/user.model';
import { UserService } from 'src/app/service/userService/user.service'; 



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  title = "JOTA-PROTECT";
  contrasena: string = "";
  email: string = "";
  mesageError: string ="";
  private user = new UserModel();

  constructor(public userService: UserService, private router: Router){}

  ngOnInit(): void {
    // this.userService.all().subscribe()

    
    console.log("corriendo..")

  }

  iniciarSesion(){
    this.user = this.userService.getUser(this.email, this.contrasena);
    
    //if(this.user.email){
    if ( this.email != "" && this.contrasena != "" ) {
      
      if (this.user.email == this.email) {
        this.router.navigate(['/cliente', this.user._id]);
      } else {
        this.mesageError = "contra incorrecta"
      }
    } else {
      alert("rellena los campos primero")
    }
   //}
    
  }

}
