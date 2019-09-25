import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthorStore } from '../stores/author.store';
import { Author } from '../models/author';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthorService {
 
  constructor(private authorStore: AuthorStore,
              private http: HttpClient) {
  }
 
  get() {
    return this.http.get<Author[]>('http://localhost:3000/authors').pipe(tap(entities => {
      this.authorStore.set(entities);
    }));
  }
 
}