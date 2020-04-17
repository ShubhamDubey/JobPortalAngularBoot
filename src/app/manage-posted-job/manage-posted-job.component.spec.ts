import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePostedJobComponent } from './manage-posted-job.component';

describe('ManagePostedJobComponent', () => {
  let component: ManagePostedJobComponent;
  let fixture: ComponentFixture<ManagePostedJobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagePostedJobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagePostedJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
