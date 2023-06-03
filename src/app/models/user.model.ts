export class UserModel {

    public _id!: string;
    public UserName!: string;
    public email!: string;
    public password!: string;
    public name!: {
        firstName: string,
        lastName: string

    };
    public infoUser!: {
        profession: string,
        code: number,
        carrera: string

    };
    public linkendProjects !: [{
        idProject: string  
    }];

    setvaluePrimary( UserName: string, email: string, password: string){

        this.UserName = UserName;
        this.email = email;
        this.password = password;
        
    };
    setvalue( user: any){

        this._id = user._id;
        this.UserName = user.UserName;
        this.email = user.email;
        this.password = user.password;
        this.name = user.name;
        this.infoUser = user.infoUser;
        this.linkendProjects = user.linkendProjects;
        


    };


    

}
