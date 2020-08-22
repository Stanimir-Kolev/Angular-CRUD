import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/index';
import { ApiResponse } from '../models/api-response.model';
import { Book } from '../models/book.model';

@Injectable()
export class ServerCommunicationService {

  constructor(private http: HttpClient) { }
  baseUrl = 'http://localhost:4200/assets/api.json';

  getBooks(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl);
  }

  getBookById(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + id);
  }

  createBook(book: Book): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl, book);
  }

  updateBook(book: Book): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.baseUrl + book.id, book);
  }

  deleteBook(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseUrl + id);
  }
}

