import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestProjectsComponent } from './best-projects.component';

describe('BestProjectsComponent', () => {
  let component: BestProjectsComponent;
  let fixture: ComponentFixture<BestProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BestProjectsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
