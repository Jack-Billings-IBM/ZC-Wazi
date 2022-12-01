import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsHomeComponent } from './details-home.component';

describe('DetailsHomeComponent', () => {
  let component: DetailsHomeComponent;
  let fixture: ComponentFixture<DetailsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
