import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-demo-user',
  templateUrl: './demo-user.component.html',
  styleUrls: ['./demo-user.component.css']
})
export class DemoUserComponent implements OnInit {

  users: any[] = [];
  selectedUser: any = {};
  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.store.select('demoUser').subscribe(
      state => {
        this.selectedUser = state.selectedUser || {};
        this.users = state.users || [];
      }
    )
    this.loadUsers();
  }

  loadUsers() {
    this.store.dispatch({
      type: 'LOAD_USERS',
      payload: this.users
    })
  }

  selectUser(id) {
    this.selectedUser = this.users.find(user => user.id === id);
    this.store.dispatch({
      type: 'SELECTED_USER',
      payload: this.selectedUser,
    })
  }

}
