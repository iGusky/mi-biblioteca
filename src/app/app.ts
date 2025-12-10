import { Component, computed, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchInput } from './search-input/search-input';
import { BookCard } from './book-card/book-card';
import { BooksService } from './books-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SearchInput, BookCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-library');

  private booksService = inject(BooksService)
  books = computed(() => this.booksService.books());
}
