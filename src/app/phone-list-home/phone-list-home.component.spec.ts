import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneListHomeComponent } from './phone-list-home.component';

describe('PhoneListHomeComponent', () => {
  let component: PhoneListHomeComponent;
  let fixture: ComponentFixture<PhoneListHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhoneListHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneListHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
