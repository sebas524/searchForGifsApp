import {Component, computed, inject} from '@angular/core';
import {GridListComponent} from '../../components/grid-list/grid-list.component';
import {GifsService} from '../../services/gifs.service';


@Component({
  selector: 'app-trending-page',
  imports: [GridListComponent],
  templateUrl: './trending-page.component.html',
  styleUrl: './trending-page.component.css'
})
export class TrendingPageComponent {


  gifsService = inject(GifsService)





}
