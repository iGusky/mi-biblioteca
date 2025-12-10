import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-book-card',
  imports: [],
  templateUrl: './book-card.html',
  styleUrl: './book-card.css',
})
export class BookCard {
  @Input() book!: {
    title: string;
    author_name: string[];
    cover_edition_key: string;
  };

  // Combina autores en una sola cadena
  get authorsText() {
    return this.book?.author_name[0] || '';
  }

  // URL de imagen desde otra API
  get imageUrl() {
    return `https://covers.openlibrary.org/b/olid/${this.book?.cover_edition_key}.jpg`; // reemplaza base
  }
}
