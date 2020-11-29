import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss'],
})
export class CheckPage implements OnInit {
  check = false;
  constructor() { }

  ngOnInit() {
  }

  updateCucumber() {
    this.check = !this.check;
    console.log(this.check);
  }
}
