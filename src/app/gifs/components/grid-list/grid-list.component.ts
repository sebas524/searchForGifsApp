import {Component, input} from '@angular/core';
import {GridListItemComponent} from '../grid-list-item/grid-list-item.component';
import {Gif} from '../../interfaces/gif.interface';

@Component({
  selector: 'app-grid-list',
  imports: [GridListItemComponent],
  templateUrl: './grid-list.component.html',
  styleUrl: './grid-list.component.css'
})
export class GridListComponent {


  imageUrlsGridList = input.required<Gif[]>()

}
