import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProjectsModel } from 'src/app/models/projects.model';
import { ProjectService } from 'src/app/service/projectService/project.service';

@Component({
  selector: 'app-registro-item',
  templateUrl: './registro-item.component.html',
  styleUrls: ['./registro-item.component.sass']
})
export class RegistroItemComponent implements OnInit{

  @Input() projectItems!: ProjectsModel
  @Output() wievProject = new EventEmitter<boolean>();

  items: any [] =[];
  tituloPP:string = "";
  seGuardo: boolean = false;

  itemForm !: FormGroup;

  constructor(
    private projectService: ProjectService,
    private readonly fb: FormBuilder
  ) {
    
  }

  ngOnInit(): void {
    this.items = this.projectItems.items;
    this.tituloPP = this.projectItems.title;
    this.itemForm = this.initForm();
    

  }

  // items = [{
  //   nameItem: "" ,
  //   body: ""
  // },
  // ]

  initForm() : FormGroup{
    return this.fb.group({
      nameItemB : ['', [Validators.required, Validators.minLength(4)]],
      bodyB: ['']
    })

  }

  public guardar(){

    this.projectItems.title = this.tituloPP;
    this.projectItems.items[0].body = this.tituloPP;
    this.items.forEach((elem, index)=>{
      if (!(this.projectItems.items.length >=  0) ) {
        this.projectItems.items.push(elem);
      }
      
    })
    this.projectService.updateProject(this.projectItems);
    this.seGuardo = true;

  }

  addItem(){

    this.items.push({
      nameItem: this.itemForm.get('nameItemB')?.value,
      body: this.itemForm.get('bodyB')?.value
    })
    this.itemForm.setValue({
      nameItemB:'',
      bodyB:''
    })
  

  }

  enviar(){

    this.projectItems.infoProject.state = "enviando";
    this.projectService.updateProject(this.projectItems);
    this.wievProject.emit(true);
    alert("el proyecto se a enviado con exito")
    
  }

  cambiarEstado(){
    this.seGuardo = false;
  }

}
