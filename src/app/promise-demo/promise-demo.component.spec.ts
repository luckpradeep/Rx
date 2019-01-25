import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromiseDemoComponent } from './promise-demo.component';

describe('PromiseDemoComponent', () => {
  let component: PromiseDemoComponent;
  let fixture: ComponentFixture<PromiseDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromiseDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromiseDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
