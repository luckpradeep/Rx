import { Component, OnInit } from '@angular/core';
import { Observable, of, from, concat, fromEvent, interval } from 'rxjs';

@Component({
  selector: 'app-rxjs-create-observable',
  templateUrl: './rxjs-create-observable.component.html',
  styleUrls: ['./rxjs-create-observable.component.css']
})
export class RxjsCreateObservableComponent implements OnInit {
  fromEvent: any = {res: []};

  constructor() { }

  ngOnInit() {
    // this.createObservableUsingConstructor();
    // this.createObservableUsingOf();
    // this.createObservableUsingInterval();
    // this.createObservableUsingFrom();
    // this.createObservableUsingConcat();
    // this.createObservableUsingFromEvent();
  }

  createObservableUsingConstructor() {
    const subscriber = (subscriber) => {
      let count = 0;
      const int = setInterval(() => {
        subscriber.next(new Date());
        // count++;
        // if (count === 3) {
        //   subscriber.error('Count is finished');
        //   clearInterval(int);
        // }
      }, 1000);
      return () => { console.log('Finished sending data') }
    };
    const bookListObservable$ = Observable.create(subscriber);
    bookListObservable$.subscribe(item => console.log(item), err => {console.log(err)});
  }

  createObservableUsingOf() {
    const source$ = of('hello', 10, [1, 2, 3], true);
    source$.subscribe(value => console.log(value));
  }

  createObservableUsingInterval() {
    const source$ = interval(1000);
    source$.subscribe(val => console.log(val));
  }

  createObservableUsingFrom() {
    const source1$ = of('hello', 10, [1, 2, 3], true);
    const source2$ = from(source1$);
    source2$.subscribe(value => console.log(value));
  }

  createObservableUsingConcat() {
    const source1$ = of('hello', 10, [1, 2, 3], true);
    const source2$ = of('a', 'b', 'c');
    const source3$ = concat(source1$, source2$);
    source3$.subscribe(value => console.log(value));
  }

  createObservableUsingFromEvent() {
    this.fromEvent.isFromEvent = true;
    const button = document.getElementById('showFromEventId');
    let num = 0;
    fromEvent(button, 'click')
      .subscribe(event => {
        this.fromEvent.res.push(num++)
      })
  }


}
