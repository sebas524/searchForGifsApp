import {Component, input} from '@angular/core';

@Component({
  selector: 'app-grid-list-item',
  imports: [],
  templateUrl: './grid-list-item.component.html',
  styleUrl: './grid-list-item.component.css'
})
export class GridListItemComponent {


  imageUrlGridListItem = input.required<string>()



}
