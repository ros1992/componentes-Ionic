import { Component, OnInit } from '@angular/core';

// tslint:disable-next-line:no-empty-interface
interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  componentes: Componente[] = [
    {
      icon: 'american-football-outline',
      name: 'Action Sheet',
      redirectTo: '/action-sheet'
    },
    {
      icon: 'alert-circle-outline',
      name: 'Alert',
      redirectTo: '/alert'
    },
    {
      icon: 'image-outline',
      name: 'Avatar',
      redirectTo: '/avatar'
    },
    {
      icon: 'radio-button-on-outline',
      name: 'Boton',
      redirectTo: '/botones'
    },
    {
      icon: 'tablet-landscape-outline',
      name: 'Cards',
      redirectTo: '/cards'
    },
    {
      icon: 'checkbox-outline',
      name: 'Check',
      redirectTo: '/check'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
