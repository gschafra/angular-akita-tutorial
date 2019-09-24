import { Injectable } from '@angular/core';

@Injectable()
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