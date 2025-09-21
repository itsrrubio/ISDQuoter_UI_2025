import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface JobGraphicCreateDto {
  colorCount: number;
}

export interface JobQuoteCreateDto {
  garmentId: string;
  garmentQuantity: number;
  graphics: JobGraphicCreateDto[];
}

export interface JobGraphicDto {
  id: number;
  colorCount: number;
}

export interface JobQuoteDto {
  quoteId: number;
  garmentName: string;
  finalPiecePrice?: number;
  totalQuotePrice?: number;
  quantity: number;
  graphics: JobGraphicDto[];
}

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  private apiUrl = 'https://localhost:7015/api/quotes';  //'https://localhost:5001/api/quotes'; // adjust your API URL

  constructor(private http: HttpClient) { }

  getQuotes(): Observable<JobQuoteDto[]> {
    return this.http.get<JobQuoteDto[]>(this.apiUrl);
  }

  getQuoteById(id: number): Observable<JobQuoteDto> {
    return this.http.get<JobQuoteDto>(`${this.apiUrl}/${id}`);
  }

  createQuote(dto: JobQuoteCreateDto): Observable<JobQuoteDto> {
    return this.http.post<JobQuoteDto>(this.apiUrl, dto);
  }
}
