import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {
  usuario = {
    email: '',
    password: ''
  };
  constructor() { }

  ngOnInit() {
  }
  onSubmin(item){
    console.log(item.value.email);
    console.log(item.value.password);
  }
}
