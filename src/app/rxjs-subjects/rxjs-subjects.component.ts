import { Component, OnInit } from '@angular/core';
import { interval, Subject } from 'rxjs';
import { take, multicast, refCount } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-subjects',
  templateUrl: './rxjs-subjects.component.html',
  styleUrls: ['./rxjs-subjects.component.css']
})
export class RxjsSubjectsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // this.basicSubject();
    // this.multicasting();
    // this.multicastingUsingSubject()
    // this.multicastingOperator();
  }

  basicSubject() {
    const subject = new Subject();
    subject.subscribe(val => {
      console.log('Observer 1 ' + val);
    });
    subject.subscribe(val => {
      console.log('Observer 2 ' + val);
    });
    subject.next('Subject');
  }

  multicasting() {
    const observable$ = interval(1000).pipe(
      take(4)
    )
    observable$.subscribe(val => console.log('Observable 1 - ' + val));
    setTimeout(() => { observable$.subscribe(val => console.log('Observable 2 - ' + val)) }, 1000);
    setTimeout(() => { observable$.subscribe(val => console.log('Observable 3 - ' + val)) }, 2000);
  }

  multicastingUsingSubject() {
    const observable$ = interval(1000).pipe(
      take(4)
    );
    const subject$ = new Subject();
    observable$.subscribe((val) => { subject$.next(val) });
    subject$.subscribe(val => console.log('Observable 1 - ' + val));
    setTimeout(() => { subject$.subscribe(val => console.log('Observable 2 - ' + val)) }, 1000);
    setTimeout(() => { subject$.subscribe(val => console.log('Observable 3 - ' + val)) }, 2000);
  }

  multicastingOperator() {
    const observable$ = interval(1000).pipe(
      take(4),
      multicast(new Subject()),
      refCount(),
    )
    observable$.subscribe(val => console.log('Observable 1 - ' + val));
    setTimeout(() => { observable$.subscribe(val => console.log('Observable 2 - ' + val)) }, 1000);
    setTimeout(() => { observable$.subscribe(val => console.log('Observable 3 - ' + val)) }, 2000);
  }

}
