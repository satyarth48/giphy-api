import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-gifs',
  templateUrl: './gifs.component.html',
  styleUrls: ['./gifs.component.scss']
})
export class GifsComponent implements OnInit, OnDestroy {

  gifs: any[] = [];
  subscription !: Subscription;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getTrendingGifs()
    this.subscription = this.dataService.getGifs()  
      .subscribe((response: any) =>{
         console.log('Data', response);
          this.gifs = response;
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
