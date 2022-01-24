import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  search(searchTerm: string) {
    if (searchTerm !== "") {
      this.dataService.searchGifs( searchTerm )
      //    .subscribe((response: any) => {
      //       console.log('Search Data', response);
      // });
    }
  }
  
}
