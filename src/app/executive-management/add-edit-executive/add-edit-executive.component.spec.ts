import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditExecutiveComponent } from './add-edit-executive.component';

describe('AddEditExecutiveComponent', () => {
  let component: AddEditExecutiveComponent;
  let fixture: ComponentFixture<AddEditExecutiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEditExecutiveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddEditExecutiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
