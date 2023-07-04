import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViajeDetailComponent } from './viaje-detail.component';

describe('ViajeDetailComponent', () => {
  let component: ViajeDetailComponent;
  let fixture: ComponentFixture<ViajeDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViajeDetailComponent]
    });
    fixture = TestBed.createComponent(ViajeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
