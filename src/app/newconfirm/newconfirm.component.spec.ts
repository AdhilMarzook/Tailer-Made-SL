import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewconfirmComponent } from './newconfirm.component';

describe('NewconfirmComponent', () => {
  let component: NewconfirmComponent;
  let fixture: ComponentFixture<NewconfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewconfirmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewconfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
