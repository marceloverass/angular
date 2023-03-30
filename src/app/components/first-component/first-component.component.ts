import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  name: string = 'Marcelo';
  age: number = 30;
  job = 'Programmer';
  hobbies = ['Correr', 'Treinar', 'Jogar'];
  car = {
    name: "i30",
    year: 2019,
  }

  constructor() {}

  ngOnInit(): void {
  }
}
