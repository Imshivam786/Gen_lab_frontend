import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatsappComponent } from './watsapp.component';

describe('WatsappComponent', () => {
  let component: WatsappComponent;
  let fixture: ComponentFixture<WatsappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WatsappComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WatsappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
