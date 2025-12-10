import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  books = signal<any[]>([]);

   setBooks(data: any[]) {
    this.books.set(data);
  }
}
