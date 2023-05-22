import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarProjectsComponent } from './visualizar-projects.component';

describe('VisualizarProjectsComponent', () => {
  let component: VisualizarProjectsComponent;
  let fixture: ComponentFixture<VisualizarProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizarProjectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualizarProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
