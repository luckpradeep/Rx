import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsOperatorsComponent } from './rxjs-operators.component';

describe('RxjsOperatorsComponent', () => {
  let component: RxjsOperatorsComponent;
  let fixture: ComponentFixture<RxjsOperatorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsOperatorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsOperatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
