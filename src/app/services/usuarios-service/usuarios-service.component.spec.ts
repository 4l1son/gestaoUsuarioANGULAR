import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosServiceComponent } from './usuarios-service.component';

describe('UsuariosServiceComponent', () => {
  let component: UsuariosServiceComponent;
  let fixture: ComponentFixture<UsuariosServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuariosServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuariosServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
