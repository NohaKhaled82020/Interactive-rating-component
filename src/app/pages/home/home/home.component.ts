import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  value: number = 0;
  show: boolean = false;
  ratingList = [
    {
      text: '1',
      value: 1,
    },
    {
      text: '2',
      value: 2,
    },
    {
      text: '3',
      value: 3,
    },
    {
      text: '4',
      value: 4,
    },
    {
      text: '5',
      value: 5,
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  selectedValue(val: number): void {
    this.value = val;
  }

  send(): void {
    this.show = this.value ? true : false;
  }
}
