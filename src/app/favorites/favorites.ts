import { Component, computed, inject } from '@angular/core';
import { BookCard } from '../book-card/book-card';
import { BooksService } from '../books-service';

@Component({
  selector: 'app-favorites',
  imports: [BookCard],
  templateUrl: './favorites.html',
  styleUrl: './favorites.css',
})
export class Favorites {
  private booksService = inject(BooksService)
  books = computed(() => this.booksService.favorites());
}
