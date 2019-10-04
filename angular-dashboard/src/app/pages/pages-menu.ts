import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Check',
    icon: 'shuffle-2-outline',
    children: [
      {
        title: 'Catalogue',
        link: '/pages/check/catalogue'
      },
      {
        title: 'Inventory',
        link: '/pages/check/inventory'
      }
    ]
  }
];
