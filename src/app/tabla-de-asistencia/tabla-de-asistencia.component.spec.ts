import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaDeAsistenciaComponent } from './tabla-de-asistencia.component';

describe('TablaDeAsistenciaComponent', () => {
  let component: TablaDeAsistenciaComponent;
  let fixture: ComponentFixture<TablaDeAsistenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaDeAsistenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaDeAsistenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
