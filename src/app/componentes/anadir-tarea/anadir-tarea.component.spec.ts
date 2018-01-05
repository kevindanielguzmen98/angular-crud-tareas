import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnadirTareaComponent } from './anadir-tarea.component';

describe('AnadirTareaComponent', () => {
  let component: AnadirTareaComponent;
  let fixture: ComponentFixture<AnadirTareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnadirTareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnadirTareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
