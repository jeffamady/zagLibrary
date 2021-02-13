import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenderListComponent } from './gender-list.component';

describe('GenderListComponent', () => {
  let component: GenderListComponent;
  let fixture: ComponentFixture<GenderListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenderListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
