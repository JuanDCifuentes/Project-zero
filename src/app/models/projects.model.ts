
export class ProjectsModel {

    _id?: string;
    title!: string;
    descripcion!: string;
    items!: [{
        id?: number,
        nameItem: string,
        body: string
        }];
    infoProject!: {
            authors: [{
            studentName: string,
            idUser: string,
        }];
        teachersCharge?:[{
            teacherName: string,
            idUser: string
        }];
        comments:[{
            idComment?: number,
            userName: string,
            bodyComment: string
        }];
        state: "borrador" | "enviando" | "revisado" | "aprovado";
        review?: [{
            reviewed: boolean,
            idUser: string
        }];
    }
    public setValue(project: any){

        
        this._id = project._id;
        this.title = project.title;
        this.descripcion = project.descripcion;
        this.items = project.items;
        this.infoProject = project.infoProject;
    }

    public setValueOne(title: string, descripcion: string){

        this.title = title;
        this.descripcion = descripcion;
        
    }

    public setValueCuasi(){

    }
    

}
