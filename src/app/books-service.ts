import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  books = signal<any[]>([]);
  favorites = signal<any[]>(JSON.parse(localStorage.getItem('favorites') || '[]') || [])
  loading = signal<boolean>(false)

  setBooks(data: any[]) {
    this.books.set(data);
  }

  setFavorite(book: any) {
    this.favorites().push(book)
    this.persistFavorites()
  }

  setFavorites(books: any[]) {
    this.favorites.set(books)
    this.persistFavorites()
  }

  removeFavorite(key: any) {
    this.setFavorites(this.favorites().filter(book => book.key != key))
  }

  persistFavorites() {
    localStorage.setItem('favorites', JSON.stringify(this.favorites()))
  }

  isFavorite(key: string) {
    return this.favorites().find(book => book.key == key) !== undefined
  }

  setLoading(v: boolean) {
    this.loading.set(v)
  }
}
