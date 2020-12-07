import { Component, OnInit } from '@angular/core';
import {timeout} from 'rxjs/operators';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.page.html',
  styleUrls: ['./scroll.page.scss'],
})
export class ScrollPage implements OnInit {
  datos: any[] = Array(90);
  constructor() { }

  ngOnInit() {
  }
  loadData( event ){
    console.log(event);
    setTimeout(() => {
      event.target.complete();
      event.target.disabled = true;
    }, 1500);
  }
}
