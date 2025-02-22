import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  searchText = ''

  @Output()
  searchTextEmit = new EventEmitter()

  searchFruit() {
    this.searchTextEmit.emit(this.searchText)
  }

}
