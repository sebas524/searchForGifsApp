import {inject, Injectable, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {GiphyItem, GiphyResponse} from '../interfaces/giphy.interfaces';
import {Gif} from '../interfaces/gif.interface';
import {map, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private http = inject(HttpClient)
  trendingGifs = signal<Gif[]>([])
  trendingGifsLoading = signal(true)

  constructor() {
    this.loadTrendingGifs()
    console.log("service created")
  }


  private mapGiphyResponse(resp: GiphyResponse): Gif[] {
    return resp.data.map(giphyItem => ({
      id: giphyItem.id,
      title: giphyItem.title,
      url: giphyItem.images.original.url
    }));
  }

  loadTrendingGifs() {
    this.http.get<GiphyResponse>(`${environment.giphyUrl}/gifs/trending`, {
      params: {
        api_key: environment.apiKeyGIPHY,
        limit: 20
      }
    }).pipe(
      map((resp) => this.mapGiphyResponse(resp))
    ).subscribe(
      (gifs: Gif[]) => {
        this.trendingGifs.set(gifs);
        this.trendingGifsLoading.set(false);
        console.log({trending: gifs});
      }
    )
  }

  searchForGifs(query: string): Observable<Gif[]> {
    return this.http.get<GiphyResponse>(`${environment.giphyUrl}/gifs/search`, {
      params: {
        api_key: environment.apiKeyGIPHY,
        limit: 20,
        q: query
      }
    }).pipe(map((resp) => this.mapGiphyResponse(resp))
    )


  }
}
