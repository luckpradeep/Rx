import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-rxjs-observer',
  templateUrl: './rxjs-observer.component.html',
  styleUrls: ['./rxjs-observer.component.css']
})
export class RxjsObserverComponent implements OnInit, OnDestroy {
  componentIsLive = true;
  mySubscription: Subscription = new Subscription();

  constructor() { }

  ngOnInit() {
    // this.observerInterface();
    // this.observerFunction();
    // this.multipleObservers();
    // this.cancelSubscription();
  }

  observerInterface() {
    const observable$ = Observable.create((subscriber) => {
      subscriber.next(1)
      // subscriber.error('Error');
      subscriber.complete();
    });

    const observer = {
      next: val => { console.log(val) },
      error: err => { console.log(err) },
      complete: () => { console.log('complete') }
    }

    observable$.subscribe(observer);
  }

  observerFunction() {
    const observable$ = Observable.create((subscriber) => {
      subscriber.next(1)
      // subscriber.error('Error');
      subscriber.complete();
    });

    observable$.subscribe(
      val => { console.log(val) },
      null,
      () => { console.log('complete') }
    )
  }

  multipleObservers() {
    const currentTime$ = Observable.create((subscriber => {
      const timeString = new Date().toLocaleString();
      subscriber.next(timeString);
      subscriber.complete();
    }));

    currentTime$.subscribe(value => { console.log(value) });

    setTimeout(() => {
      currentTime$.subscribe(value => { console.log(value) });
    }, 1000);

    setTimeout(() => {
      currentTime$.subscribe(value => { console.log(value) });
    }, 2000);
  }

  cancelSubscription() {
    const observable$ = interval(1000);

    const mySubscription = observable$.subscribe(value => { console.log(value) });
    
    setTimeout(() => {
      mySubscription.unsubscribe();
    }, 4000);
    
  }

  ngOnDestroy() {
  }

}
