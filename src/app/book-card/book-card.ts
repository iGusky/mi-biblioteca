import { Component, Input } from '@angular/core';
import { BooksService } from '../books-service';

@Component({
  selector: 'app-book-card',
  imports: [],
  templateUrl: './book-card.html',
  styleUrl: './book-card.css',
})
export class BookCard {
  @Input() book!: {
    key: string;
    title: string;
    author_name: string[];
    cover_edition_key: string;
  };

  constructor(private booksService: BooksService) {

  }

  // Combina autores en una sola cadena
  get authorsText() {
    return this.book?.author_name?.length ? this.book?.author_name[0] : '-';
  }

  // URL de imagen desde otra API
  get imageUrl() {
    return `https://covers.openlibrary.org/b/olid/${this.book?.cover_edition_key}.jpg`; // reemplaza base
  }

  saveToFavorite(book:any) {
      this.booksService.setFavorite(book)
  }

  removeToFavorite(key:any) {
      this.booksService.removeFavorite(key)
  }

  isAddedToFavorite(key: string) {
    return this.booksService.isFavorite(key)
  }
}
