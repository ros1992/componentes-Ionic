import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {
  usuarios: any = ['aguaman', 'superman', 'spiderman', 'flash', 'robin', 'mujermaravilla'];
  constructor() { }

  ngOnInit() {
  }
  reorder(event) {
    console.log(event);
    event.detail.complete();
  }
}
