import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenderContainerComponent } from './gender-container.component';

describe('GenderContainerComponent', () => {
  let component: GenderContainerComponent;
  let fixture: ComponentFixture<GenderContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenderContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenderContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
