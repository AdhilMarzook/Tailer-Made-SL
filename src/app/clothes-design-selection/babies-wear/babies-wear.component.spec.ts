import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BabiesWearComponent } from './babies-wear.component';

describe('BabiesWearComponent', () => {
  let component: BabiesWearComponent;
  let fixture: ComponentFixture<BabiesWearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BabiesWearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BabiesWearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
