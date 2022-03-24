import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserOrderComponent } from './admin-user-order.component';

describe('AdminUserOrderComponent', () => {
  let component: AdminUserOrderComponent;
  let fixture: ComponentFixture<AdminUserOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminUserOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUserOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
