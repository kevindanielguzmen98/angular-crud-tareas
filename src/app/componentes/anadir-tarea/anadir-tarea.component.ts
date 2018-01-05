import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TareaService } from '../../servicios/tarea.service';
import { Tarea } from '../../modelos/tarea';

@Component({
  selector: 'app-anadir-tarea',
  templateUrl: './anadir-tarea.component.html',
  styleUrls: ['./anadir-tarea.component.css']
})
export class AnadirTareaComponent implements OnInit {

  @Output() agregarTarea = new EventEmitter();
  @Input() tareas: Tarea[];
 
  constructor(private tareaService: TareaService) { }

  ngOnInit() {
  }

  agregar(formulario: any): void {
    /* Enviamos los datos para crear la tarea */
    this.agregarTarea.emit(formulario.value);
  	formulario.reset();
  }

}
