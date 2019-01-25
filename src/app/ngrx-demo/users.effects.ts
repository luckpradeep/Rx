import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from '@ngrx/effects';
import { mergeMap } from 'rxjs/operators';
import { from, of } from 'rxjs';

@Injectable()
export class UsersEffects {

    constructor(private actions$: Actions) { }

    @Effect()
    loadUser$ = this.actions$.pipe(
        ofType('LOAD_USERS'),
        mergeMap((action: any) => {
            if (action.payload.length) {
                return of({
                    type: 'LOAD_USERS_REDUCER',
                    payload: action.payload
                })
            } else {
                return from(fetch('https://jsonplaceholder.typicode.com/users')
                    .then(response => response.json())
                    .then(json => {
                        return {
                            type: 'LOAD_USERS_REDUCER',
                            payload: json
                        }
                    }))

            }

        })
    )
}