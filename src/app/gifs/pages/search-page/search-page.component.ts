import {Component, inject, signal} from '@angular/core';
import {GridListComponent} from '../../components/grid-list/grid-list.component';
import {GifsService} from '../../services/gifs.service';
import {Gif} from '../../interfaces/gif.interface';

@Component({
  selector: 'app-search-page',
  imports: [GridListComponent],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.css'
})
export class SearchPageComponent {


  gifsService = inject(GifsService)

  searchedGifs = signal<Gif[]>([])


  onSearch(query: string) {
    this.gifsService.searchForGifs(query).subscribe((res) => {
        this.searchedGifs.set(res)
      console.log({searchedQuery:res});

      }
    )
  }


}
