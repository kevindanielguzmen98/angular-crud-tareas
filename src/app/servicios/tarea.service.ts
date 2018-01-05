import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';
import { Tarea } from '../modelos/tarea';
import { environment } from '../../environments/environment';

@Injectable()
export class TareaService {
	
  constructor(private http: Http) { }

  get(): Observable<Tarea[]> {
  	return this.http.get(environment.api.urlbase + 'tareas').map((response: Response) => response.json());
  }

  add(tarea: Tarea): Observable<Tarea> {
  	return this.http.post(environment.api.urlbase + 'tareas', tarea).map((response: Response) => response.json());
  }

  update(tarea: Tarea): Observable<Tarea> {
    return this.http.put(environment.api.urlbase + 'tareas/' + tarea.id, tarea).map((response: Response) => response.json());
  }

  delete(tarea: number): Observable<any> {
    return this.http.delete(environment.api.urlbase + 'tareas/' + tarea).map((response: Response) => response.json());
  }

}
