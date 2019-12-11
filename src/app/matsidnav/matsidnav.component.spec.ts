import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatsidnavComponent } from './matsidnav.component';

describe('MatsidnavComponent', () => {
  let component: MatsidnavComponent;
  let fixture: ComponentFixture<MatsidnavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatsidnavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatsidnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
