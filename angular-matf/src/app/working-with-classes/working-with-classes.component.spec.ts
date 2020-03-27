import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingWithClassesComponent } from './working-with-classes.component';

describe('WorkingWithClassesComponent', () => {
  let component: WorkingWithClassesComponent;
  let fixture: ComponentFixture<WorkingWithClassesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkingWithClassesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkingWithClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
