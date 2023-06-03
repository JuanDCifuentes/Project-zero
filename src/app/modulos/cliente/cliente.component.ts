import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectsModel } from 'src/app/models/projects.model';
import { ProjectService } from 'src/app/service/projectService/project.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.sass']
})
export class ClienteComponent {

  constructor() {
     
  }

  visualizar:boolean = true;
  project: ProjectsModel = new ProjectsModel();

  VerProjects(valor: boolean){
    this.visualizar = valor;
  }

  wievEditarProyecto(value: boolean){
    this.visualizar = value;
  }

  edicionProject(project: ProjectsModel){
    console.log({editProject: project})
    this.project = project;
    this.visualizar = false;
    
  }


}
