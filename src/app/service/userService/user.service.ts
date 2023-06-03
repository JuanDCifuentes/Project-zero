import { Injectable } from '@angular/core';
import { Observable, of, Subject  } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map, catchError } from 'rxjs';
import { UserModel } from 'src/app/models/user.model';

// import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  // public $user = new Subject<UserModel>();
  // public $users = new Subject<UserModel[]>();

  private user = new UserModel();
  private users : UserModel[] =[]
  public userP = new UserModel();


  
  httpOptions = {
    Header: new HttpHeaders({'content-Type': 'application/json'})
  };

  url = "http://localhost:3000/api/users";

  constructor( private http: HttpClient) {
      this.cargarUser();
   }

  // all$(): Observable<UserModel[]>{
  //   return this.$users.asObservable();
  // }

  // all(): Observable<any>{
  //   this.users = [];
  //   return this.http.get<UserModel[]>(this.url)
  //     .pipe(
  //       map((res: any) =>{
  //           res.forEach( (item: any) => {
  //               this.user = new UserModel();
  //               this.user.setvalue(item.UserName, item.email, item.password, item._id);
  //               this.users.push(this.user);

  //           });
  //           this.$users.next(this.users);
  //       }),
  //       catchError((err) => of(err))
  //     )
  // }

  private cargarUser(){
    return  this.http.get<UserModel[]>(this.url).subscribe(Users =>{
      this.users = Object.values(Users);
      console.log({cargarUser: this.users})
    })
  }

  public getUser(email: string, contra: string){
    
    this.userP._id = "";

    this.users.forEach((user: UserModel)=>{
      if (user.email.toLowerCase() == email.toLowerCase() && user.password.toLowerCase() == contra.toLowerCase()) {
        this.user = new UserModel();
        this.user.setvalue(user);
        this.userP = this.user;
    
        
      }
      })
     return this.userP;
  }

  public retornarUser(): UserModel{
    return this.userP;
  }

  public actualizarUser(user: UserModel){

    this.http.patch(this.url + "/" + user._id, user).subscribe(
      Response => console.log({messegae: Response}),
      Err => console.log(Err)
    )
  }

  public getUserId(id: string){

    this.http.get<UserModel>(this.url + `/${id}`).subscribe(
      res => {
        
        let user = new UserModel();
        user.setvalue(res);
        console.log({todoVaBien: user})
        return user;
      },
      err => console.error(err)
      
    );

    return this.user

  }

  public registrarUser(user: UserModel){
    this.http.post(this.url, user).subscribe(
      res => console.log(res),
      err => console.error(err)
      
    )
  }


}
