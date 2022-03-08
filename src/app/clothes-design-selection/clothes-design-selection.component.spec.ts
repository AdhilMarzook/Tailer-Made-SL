import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothesDesignSelectionComponent } from './clothes-design-selection.component';

describe('ClothesDesignSelectionComponent', () => {
  let component: ClothesDesignSelectionComponent;
  let fixture: ComponentFixture<ClothesDesignSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClothesDesignSelectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClothesDesignSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
