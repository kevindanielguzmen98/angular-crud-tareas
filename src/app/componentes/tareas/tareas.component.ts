import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tarea } from '../../modelos/tarea';
import { TareaService } from '../../servicios/tarea.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

	@Input() tareas: Tarea[];
  @Output() cargarTareas = new EventEmitter();
  @Output() eliminarTarea = new EventEmitter();
  @Output() actualizarTarea = new EventEmitter();
  mostrarEdicion: boolean = false;
  tareaTemporal: Tarea;
  idTemporal: number;

  constructor(public tareaService: TareaService) { }

  ngOnInit() {
    this.cargarTareas.emit();
  }

  editar(indiceTarea: number, tarea: Tarea) {
    this.idTemporal = indiceTarea;
    this.tareaTemporal = tarea;
    this.mostrarEdicion = true;
  }

  cancelarEdicion() {
    this.mostrarEdicion = false;
  }

  actualizar(formulario) {
    this.tareaTemporal.titulo = formulario.value.titulo;
    this.tareaTemporal.descripcion = formulario.value.descripcion;
    this.actualizarTarea.emit({ indiceTarea: this.idTemporal, tarea: this.tareaTemporal });
    this.mostrarEdicion = false;
  }

  eliminar(indiceTarea: number, tarea: Tarea) {
    if(confirm('¿Esta seguro de eliminar esta tarea?')) {
      this.eliminarTarea.emit({indiceTarea: indiceTarea, tarea: tarea});
    }
  }

}
