import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { GifService } from 'src/app/gifs/services/gifs.services';

interface MenuOption{
  label: string;
  subLabel: string;
  router: string;
  icon: string;
};


@Component({
  selector: 'gifs-side-menu-options',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-menu-options.component.html',
})
export class SideMenuOptionsComponent {

  gifService = inject(GifService);

  menuOptions: MenuOption[] = [
    {
      label: 'Trending',
      subLabel: 'Gifs Populares',
      router: '/dashboard/trending',
      icon: 'fa-solid fa-chart-line'

    },

    {
      label: 'Buscador',
      subLabel: 'Buscar gifs',
      router: '/dashboard/search',
      icon: 'fa-solid fa-magnifying-glass'

    },


  ];

}
