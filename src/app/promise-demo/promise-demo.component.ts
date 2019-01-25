import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise-demo',
  templateUrl: './promise-demo.component.html',
  styleUrls: ['./promise-demo.component.css']
})
export class PromiseDemoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // this.getData();
    // this.validate('20x').then(res => {
    //   console.log(res);
    // }, err => {
    //   console.log(err);
    // })
  }

  getData() {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
  }

  validate(n: any) {
    return new Promise((resolve, reject) => {
      if (isNaN(n)) {
        reject('Not an number')
      } else {
        resolve('Number')
      }
    })
  }

}
