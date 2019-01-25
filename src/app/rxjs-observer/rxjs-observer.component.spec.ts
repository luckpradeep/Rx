import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsObserverComponent } from './rxjs-observer.component';

describe('RxjsObserverComponent', () => {
  let component: RxjsObserverComponent;
  let fixture: ComponentFixture<RxjsObserverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsObserverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsObserverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
