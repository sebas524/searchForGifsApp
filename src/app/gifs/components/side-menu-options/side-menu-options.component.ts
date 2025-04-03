import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';


interface MenuOption {

  label: string;
  subLabel: string;
  route: string;
  icon: string;


}

@Component({
  selector: 'app-side-menu-options',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-menu-options.component.html',
  styleUrl: './side-menu-options.component.css'
})
export class SideMenuOptionsComponent {


  menuOptions: MenuOption[] = [
    {
      icon: 'fa-solid fa-chart-line',
      label: 'trending',
      subLabel: 'popular gifs',
      route: '/dashboard/trending',
    },
    {
      icon: 'fa-solid fa-magnifying-glass',
      label: 'search',
      subLabel: 'search for gifs',
      route: '/dashboard/search',
    },
  ]


}
