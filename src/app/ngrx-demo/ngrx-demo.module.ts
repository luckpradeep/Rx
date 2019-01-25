import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { DemoUserComponent } from './demo-user/demo-user.component';
import { reducer } from './users.reducer';
import { EffectsModule } from '@ngrx/effects';

import { UsersEffects } from './users.effects';


@NgModule({
  declarations: [DemoUserComponent],
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forFeature('demoUser', reducer),
    EffectsModule.forFeature([UsersEffects]),
  ]
})
export class NgrxDemoModule { }
