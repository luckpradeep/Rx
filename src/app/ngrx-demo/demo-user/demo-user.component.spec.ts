import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoUserComponent } from './demo-user.component';

describe('DemoUserComponent', () => {
  let component: DemoUserComponent;
  let fixture: ComponentFixture<DemoUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
