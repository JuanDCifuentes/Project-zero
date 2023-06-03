import { Component, Input, OnInit, Output } from '@angular/core';
import { ProjectsModel } from 'src/app/models/projects.model';
import { ProjectService } from 'src/app/service/projectService/project.service';
import { UserService } from 'src/app/service/userService/user.service';

@Component({
  selector: 'app-sugerencias',
  templateUrl: './sugerecias.component.html',
  styleUrls: ['./sugerecias.component.sass']
})
export class SugereciasComponent implements OnInit {

  @Input() projectComent !: ProjectsModel

  userComment: string = "";
  comment: string = "";
  comentarios: any [] = [];

  constructor(
    private projectService: ProjectService,
    private userService: UserService
    ) {

      
    
  }
  ngOnInit(): void {
    this.comentarios = this.projectComent.infoProject.comments;
    this.userComment = this.userService.retornarUser().UserName;
  }

  guardarComentario(){
    this.comentarios.push({
      userName: this.userComment,
      bodyComment: this.comment
    })

    this.comentarios.forEach((elem)=>{
      if (!(this.projectComent.infoProject.comments.length >=  0) ) {
        this.projectComent.infoProject.comments.push(elem);
      }
      
    })
    this.comment =""

    this.projectService.updateProject(this.projectComent);
  }

}
