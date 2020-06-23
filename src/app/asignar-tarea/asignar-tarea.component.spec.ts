import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarTAreaComponent } from './asignar-tarea.component';

describe('AsignarTAreaComponent', () => {
  let component: AsignarTAreaComponent;
  let fixture: ComponentFixture<AsignarTAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignarTAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignarTAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
