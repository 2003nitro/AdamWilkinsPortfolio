import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectTempComponent } from './project-temp.component';

describe('ProjectTempComponent', () => {
  let component: ProjectTempComponent;
  let fixture: ComponentFixture<ProjectTempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectTempComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
