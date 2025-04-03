import {inject, Injectable, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {GiphyResponse} from '../interfaces/giphy.interfaces';
import {Gif} from '../interfaces/gif.interface';
import {GifMapper} from '../mapper/gif.mapper';
import {map} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private http = inject(HttpClient)
  trendingGifs = signal<Gif[]>([])

  constructor() {
    this.loadTrendingGifs()
  }

  loadTrendingGifs() {

    this.http.get<GiphyResponse>(`${environment.giphyUrl}/gifs/trending`, {
      params: {
        api_key: environment.apiKeyGIPHY,
        limit: 20
      }
    }).pipe(
      map((resp): Gif[] => {
        return resp.data.map(giphyItem => ({
          id: giphyItem.id,
          title: giphyItem.title,
          url: giphyItem.images.original.url
        }))
      })
    ).subscribe(
      (gifs: Gif[]) => {
        console.log({gifs});
      }
    )
  }

}
