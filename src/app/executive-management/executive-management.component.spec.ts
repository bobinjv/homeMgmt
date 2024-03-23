import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutiveManagementComponent } from './executive-management.component';

describe('ExecutiveManagementComponent', () => {
  let component: ExecutiveManagementComponent;
  let fixture: ComponentFixture<ExecutiveManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExecutiveManagementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExecutiveManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
