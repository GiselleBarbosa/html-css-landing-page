import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTextoComponent } from './main-texto.component';

describe('MainTextoComponent', () => {
  let component: MainTextoComponent;
  let fixture: ComponentFixture<MainTextoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainTextoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainTextoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
