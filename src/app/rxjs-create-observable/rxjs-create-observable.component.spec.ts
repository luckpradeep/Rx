import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsCreateObservableComponent } from './rxjs-create-observable.component';

describe('RxjsCreateObservableComponent', () => {
  let component: RxjsCreateObservableComponent;
  let fixture: ComponentFixture<RxjsCreateObservableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsCreateObservableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsCreateObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
