import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { debounceTime, Subject } from 'rxjs';
import { BooksService } from '../books-service';

@Component({
  selector: 'app-search-input',
  imports: [],
  templateUrl: './search-input.html',
  styleUrl: './search-input.css',
})
export class SearchInput implements OnInit {
  private input$ = new Subject<string>();

  constructor(private booksService: BooksService) {
    this.input$
      .pipe(debounceTime(300))
      .subscribe((value) => {
        this.makeRequest(value);
      });
  }

  onInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.input$.next(value);
  }

  ngOnInit() {
    this.searchTop100()
  }

  async searchTop100() {
    try {
      this.booksService.setLoading(true)
      const res = await axios.get('https://openlibrary.org/subjects/accessible_book.json', {
        params: {
          limit: 100
        }
      })
      this.booksService.setBooks(res.data.works)
    } catch (err) {

    } finally {
      this.booksService.setLoading(false)
    }

  }


  async makeRequest(query: string) {
    if (!query.trim()) return;
    try {
      this.booksService.setLoading(true)
      const res = await axios.get('https://openlibrary.org/search.json', {
        params: { q: query, fields: "key,title,author_name,cover_edition_key", limit: 12, page: 1 },
      });
      this.booksService.setBooks(res.data.docs)
      console.log('Respuesta:', res.data);
    } catch (err) {
      console.error('Error en la petición:', err);
    } finally {
       this.booksService.setLoading(false)
    }
  }
}
