import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  gifs = new BehaviorSubject<any>([]);

  constructor(private http: HttpClient) {}

  getTrendingGifs() {
    return this.http.get(`https://api.giphy.com/v1/gifs/trending?api_key=${environment.giphyApiKey}&limit=10`)
        .subscribe((response: any) => {
          this.gifs.next(response.data);
  });

  }

  searchGifs(gifName: string) {
    return this.http.get(`https://api.giphy.com/v1/gifs/search?q=${gifName}&api_key=${environment.giphyApiKey}&limit=10`)
      .subscribe((response: any) => {
        this.gifs.next(response.data);
});
  }

  getGifs() {
    return this.gifs.asObservable();
}

// getTrendingGifs() {
    //     let url = "https://api.giphy.com/v1/gifs/trending?api_key=Dst7UyI10lCaZeA9seXlAWA2qaXf0uGY";
    //     console.log(url,"url");
    //     return this.http.get(url)
           
    // }

}
