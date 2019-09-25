import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-author-section',
  templateUrl: './author-section.component.html',
  styleUrls: ['./author-section.component.css']
})
export class AuthorSectionComponent implements OnInit {

  @Output()
  updateFilter = new EventEmitter();
  authors$: Observable<Author[]>;
  constructor(private authorService: AuthorService, private filterService: FilterService, private authorQuery: AuthorQuery) { }
 
  ngOnInit() {
    this.authorService.get().subscribe();
    this.authors$ = this.authorQuery.selectAll();
  }
 
  onSelectAuthor(author: string) {
    this.updateFilter.emit(author);
    this.filterService.updateFilter(author === 'All' ? 'All' : author);
  }
}