import { Component, computed, inject } from '@angular/core';
import { SearchInput } from '../search-input/search-input';
import { BookCard } from '../book-card/book-card';
import { BooksService } from '../books-service';

@Component({
  selector: 'app-home',
  imports: [ SearchInput, BookCard],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private booksService = inject(BooksService)
  books = computed(() => this.booksService.books());
}
