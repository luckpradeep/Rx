import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { PromiseDemoComponent } from './promise-demo/promise-demo.component';
import { RxjsCreateObservableComponent } from './rxjs-create-observable/rxjs-create-observable.component';
import { RxjsObserverComponent } from './rxjs-observer/rxjs-observer.component';
import { RxjsOperatorsComponent } from './rxjs-operators/rxjs-operators.component';
import { RxjsSubjectsComponent } from './rxjs-subjects/rxjs-subjects.component';
import { NgrxDemoModule } from './ngrx-demo/ngrx-demo.module';
import { DemoUserComponent } from './ngrx-demo/demo-user/demo-user.component';

const routes: Routes = [
  { path: 'promise-demo', component: PromiseDemoComponent },
  { path: 'rxjs-create-observable', component: RxjsCreateObservableComponent },
  { path: 'rxjs-observer', component: RxjsObserverComponent },
  { path: 'rxjs-operators', component: RxjsOperatorsComponent },
  { path: 'rxjs-subjects', component: RxjsSubjectsComponent },
  { path: 'ngrx-demo', component: DemoUserComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    PromiseDemoComponent,
    RxjsCreateObservableComponent,
    RxjsObserverComponent,
    RxjsOperatorsComponent,
    RxjsSubjectsComponent,
  ],
  imports: [
    BrowserModule,
    NgrxDemoModule,
    RouterModule.forRoot(routes, { useHash: true }),
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      name: 'Rx',
      maxAge: 25,
      logOnly: false,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
