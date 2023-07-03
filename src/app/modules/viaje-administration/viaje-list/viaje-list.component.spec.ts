import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViajeListComponent } from './viaje-list.component';

describe('ViajeListComponent', () => {
  let component: ViajeListComponent;
  let fixture: ComponentFixture<ViajeListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViajeListComponent]
    });
    fixture = TestBed.createComponent(ViajeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
