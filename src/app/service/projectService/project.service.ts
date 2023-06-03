import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { UserService } from '../userService/user.service';
import { ProjectsModel } from 'src/app/models/projects.model';
import { UserModel } from 'src/app/models/user.model';
import { ActivatedRoute } from '@angular/router';
import { __param } from 'tslib';



@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  httpOptions = {
    Header: new HttpHeaders({'content-Type': 'application/json'})
  };

  url = "http://localhost:3000/api/Project";
  project: ProjectsModel = new ProjectsModel();
  projects: ProjectsModel [] = [];
  user: UserModel = new UserModel();

  

  constructor(
    private userService: UserService,
    private http: HttpClient
    ) { 

      console.log("corriendo service..")
      this.traerUser();
      this.getProjects();
    }

  getProjects(){

    for (let i = 0; i < this.user.linkendProjects.length; i++) {
      const project = this.user.linkendProjects[i];

      this.http.get(this.url + "/" + project.idProject).subscribe(project =>{

        this.project = new ProjectsModel();
       
        this.project.setValue(project);
        this.projects.push(this.project)

      })      
    }

    return this.projects;
  
    
  }

  getProjectI(index: number){
    return this.projects[index]
  }

  getProjectId(Id: string){
    let pj = new ProjectsModel;

    this.http.get(this.url + "/" + Id).subscribe(
      res => {
        pj.setValue(res)
      }
    );

    return pj;
  }

  public guardarProject(project: ProjectsModel){
    return this.http.post<ProjectsModel>(this.url, project)
     //variable a retornar
  }

  private traerUser(){
    this.user = this.userService.retornarUser();
  }
  
  getUserProject(){
    return this.user;
  }

  setIdUserProject(id: string){
      this.user = this.userService.getUserId(id);
  }

  updateProject(updateProject: ProjectsModel){
    this.http.patch(this.url + "/" + updateProject._id, updateProject).subscribe(
      res => console.log({respuestaApi: res}),
      err => console.error(err)
      
    );
  }

}
