import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SugereciasComponent } from './sugerecias.component';

describe('SugereciasComponent', () => {
  let component: SugereciasComponent;
  let fixture: ComponentFixture<SugereciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SugereciasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SugereciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
