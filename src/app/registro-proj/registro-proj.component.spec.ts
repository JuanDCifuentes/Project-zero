import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroProjComponent } from './registro-proj.component';

describe('RegistroProjComponent', () => {
  let component: RegistroProjComponent;
  let fixture: ComponentFixture<RegistroProjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroProjComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroProjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
