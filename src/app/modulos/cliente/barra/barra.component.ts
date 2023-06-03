import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styleUrls: ['./barra.component.sass']
})
export class BarraComponent {
  
  @Output() ListarEvent = new EventEmitter<boolean>();  
  

  titulo = "Project-Zero";

  listarProject(){
    this.ListarEvent.emit(true)
  }

}


