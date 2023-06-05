import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProjectsModel } from 'src/app/models/projects.model';
import { UserModel} from 'src/app/models/user.model';
import { ProjectService } from 'src/app/service/projectService/project.service';
import { UserService } from 'src/app/service/userService/user.service';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-visualizar-projects',
  templateUrl: './visualizar-projects.component.html',
  styleUrls: ['./visualizar-projects.component.sass']
})
export class VisualizarProjectsComponent implements OnInit {

  constructor(
    private projectService: ProjectService,
     private userService: UserService,
     private activeRoute: ActivatedRoute
     ){  }

  ngOnInit(): void {

    this.activeRoute.params.subscribe(params =>{
      this.idU = params['id'];
    })

    this.Servicios();
  }

  @Output() viewMPEvent = new EventEmitter<boolean>();
  @Output() projectM = new EventEmitter<ProjectsModel>();

  proyectos: ProjectsModel [] = [];
  newPorject: ProjectsModel= new ProjectsModel();
  user: UserModel = new UserModel();
  titulo: string = "";
  descrip: string = " ";
  private idU!: string


  guardar(){

    console.log({guardar: this.user})

    this.newPorject.setValueOne(this.titulo, this.descrip);
    this.newPorject.items = [{
      id: Math.round((Math.random() * 1000000)),
      nameItem: "Titulo del proyecto",
      body: this.titulo
    }
    ]

    this.newPorject.infoProject = {
      authors:[{
        studentName: this.user.UserName,
        idUser: this.user._id,
        
      }],
      comments: [{
        userName: "",
        bodyComment: ""
      }],
      state: "borrador",
    
    }

    this.projectService.guardarProject(this.newPorject).subscribe(Response=>{
    
      let temp = Response._id + "";
      this.user.linkendProjects.push({ idProject: temp})
      this.userService.actualizarUser(this.user)
    },
    Err => {console.error(Err);}
    
    );
    this.projectM.emit(this.newPorject);
    this.viewMPEvent.emit(false);
  }

  Servicios(){
    // if (this.projectService.getUserProject()) {
    //   this.user = this.projectService.getUserProject();
    // } else {

      this.user = this.userService.getUserId(this.idU);
      
    // }
  
    if(this.user){
      for (let i = 0; i < this.user.linkendProjects.length; i++) {
        let project = new ProjectsModel;
        const elem = this.user.linkendProjects[i].idProject ;
        project = this.projectService.getProjectId(elem) 
        this.proyectos.push(project)
      }
    }
  }

  EditarProyecto(index: number){
    this.projectM.emit(this.proyectos[index]);
  }


}
