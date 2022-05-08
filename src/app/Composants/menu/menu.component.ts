import { Component, OnInit } from '@angular/core';
import { menu } from './menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  public menuProperties: Array<menu> = [
    {
      id: '1',
      titre: 'Tableau de bord',
      icon: '',
      url: '',
      sousMenu: [
        {
          id: '11',
          titre: "vue d'ensemble",
          icon: '',
          url: '',
        },
        {
          id: '12',
          titre: 'Statistiques',
          icon: '',
          url: '',
        },
      ],
    },
    {
      id: '2',
      titre: 'Articles',
      icon: '',
      url: '',
      sousMenu: [
        {
          id: '21',
          titre: 'Articles',
          icon: '',
          url: '',
        },
        {
          id: '22',
          titre: 'Mouvement de stock',
          icon: '',
          url: '',
        },
      ],
    },
    {
      id: '3',
      titre: 'Clients',
      icon: '',
      url: '',
      sousMenu: [
        {
          id: '31',
          titre: 'Clients',
          icon: '',
          url: '',
        },
        {
          id: '32',
          titre: 'Commandes clients',
          icon: '',
          url: '',
        },
      ],
    },
    {
      id: '4',
      titre: 'Fournisseurs',
      icon: '',
      url: '',
      sousMenu: [
        {
          id: '41',
          titre: 'Fournisseurs',
          icon: '',
          url: '',
        },
        {
          id: '42',
          titre: 'Commandes fournisseurs',
          icon: '',
          url: '',
        },
      ],
    },
    {
      id: '5',
      titre: 'Paramètres',
      icon: '',
      url: '',
      sousMenu: [
        {
          id: '51',
          titre: 'Catégories',
          icon: '',
          url: '',
        },
        {
          id: '52',
          titre: 'Utilisateurs',
          icon: '',
          url: '',
        },
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
