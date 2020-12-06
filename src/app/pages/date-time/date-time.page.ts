import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {
  fecha = new Date();
  customPickerOptions = {
    buttons: [{
      text: 'Save',
      handler: ( event ) => console.log(event)
    },
      {
        text: 'cancelar',
        handler: () => console.log('Clicked Cancelar!')
      }
      ]
  };

  constructor() { }
  ngOnInit() {
  }
  tiempo(event){
    console.log(event.detail.value);
    console.log(new Date(event.detail.value));
  }

}
