import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TareasComponent } from './componentes/tareas/tareas.component';
import { AnadirTareaComponent } from './componentes/anadir-tarea/anadir-tarea.component';
import { TareaService } from './servicios/tarea.service';

@NgModule({
  declarations: [
    AppComponent,
    TareasComponent,
    AnadirTareaComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    TareaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
