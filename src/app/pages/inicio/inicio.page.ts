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
    },
    {
      icon: 'calendar-outline',
      name: 'DateTime',
      redirectTo: '/date-time'
    },
    {
      icon: 'caret-forward-circle-outline',
      name: 'Fab',
      redirectTo: '/fab'
    },
    {
      icon: 'grid-outline',
      name: 'Grid',
      redirectTo: '/grid'
    },
    {
      icon: 'arrow-down-outline',
      name: 'Scroll',
      redirectTo: '/scroll'
    },
    {
      icon: 'document-text-outline',
      name: 'Input',
      redirectTo: '/input'
    },
    {
      icon: 'contract-outline',
      name: 'List',
      redirectTo: '/list'
    },
    {
      icon: 'reorder-three-outline',
      name: 'List Reoder',
      redirectTo: '/list-reorder'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
