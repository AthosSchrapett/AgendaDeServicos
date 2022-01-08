import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrosClientesComponent } from './cadastros-clientes.component';

describe('CadastrosComponent', () => {
  let component: CadastrosClientesComponent;
  let fixture: ComponentFixture<CadastrosClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrosClientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrosClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
