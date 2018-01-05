import { Component } from '@angular/core';
import { Tarea } from './modelos/tarea';
import { TareaService } from './servicios/tarea.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	tareas: Tarea[];

	constructor(private servicioTarea: TareaService) {
		this.tareas = [];
	}
	
	cargarTareas() {
		this.servicioTarea.get().subscribe(tareas => {
			this.tareas = tareas;
		});
	}

	agregarTarea(tarea: Tarea) {
		this.servicioTarea.add(tarea).subscribe(tarea => {
			this.tareas.push(tarea);
		});
	}

	actualizarTarea(objActualizar) {
		this.servicioTarea.update(objActualizar.tarea).subscribe(tarea => {
			this.tareas[objActualizar.indiceTarea] = tarea;
		});
	}

	eliminarTarea(objEliminacion) {
		this.servicioTarea.delete(objEliminacion.tarea.id).subscribe(mensaje => {
    	this.tareas.splice(objEliminacion.indiceTarea, 1);
    });
	}
}
