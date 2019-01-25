import { Component, OnInit } from '@angular/core';
import { of, interval } from 'rxjs';
import { map, filter, tap, mergeMap, switchMap, takeUntil, take, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-operators',
  templateUrl: './rxjs-operators.component.html',
  styleUrls: ['./rxjs-operators.component.css']
})
export class RxjsOperatorsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // this.operatorAsFunction();
    // this.operatorWithPipe();
    // this.operatorMergeMap();
    // this.operatorSwitchMap();
    // this.operatorControllingTake();
    // this.operatorControllingTakeWhile();
    // this.operatorControllingTakeUntil();
  }

  operatorAsFunction() {
    const observable$ = of(1, 2, 3, 4, 5);
    const mappedFunction = map((value: number) => value * 2);
    const mappedObservable$ = mappedFunction(observable$);

    mappedObservable$.subscribe(value => console.log(value));
  }

  operatorWithPipe() {
    const observable$ = of(1, 2, 3, 4, 5);
    const newObservable$ = observable$.pipe(
      map((value: any) => value * 2),
      filter(mappedValue => mappedValue > 5),
      tap(value => { console.log(value) }),
    );

    newObservable$.subscribe(value => console.log(value));
  }

  operatorMergeMap() {
    const observable$ = of(1, 2, 3, 4, 5);
    observable$.pipe(
      mergeMap(ob1 => {
        return of(ob1 + 10, ob1 + 20);
      })
    ).subscribe(val => console.log(val));
  }

  operatorSwitchMap() {
    const observable1$ = interval(5000);
    const observable2$ = interval(1000);
    observable1$.pipe(
      switchMap(ob1 => {
        return observable2$;
      })
    ).subscribe(val => console.log(val));
  }

  operatorControllingTake() {
    const observable$ = interval(1000);
    observable$.pipe(
      take(3)
    ).subscribe(val => console.log(val));

  }

  operatorControllingTakeWhile() {
    const observable$ = interval(1000);
    let keepAlive = true;

    observable$.pipe(
      takeWhile(val => keepAlive)
    ).subscribe(val => console.log(val));
    setTimeout(() => {
      keepAlive = false;
    }, 3000)
    
  }

  operatorControllingTakeUntil() {    
    const observable$ = interval(1000);
    observable$.pipe(
      takeUntil(interval(3000))
    ).subscribe(val => console.log(val));
  }

}
