import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuoteService, JobQuoteDto } from '../../services/quote.service';
import { Observable } from 'rxjs';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-quote-list',
  standalone: true,
  imports: [
    CommonModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    RouterModule
  ],
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.scss']
})
export class QuoteListComponent implements OnInit {
  quotes$: Observable<JobQuoteDto[]> | null = null;

  constructor(private quoteService: QuoteService) {}

  ngOnInit(): void {
    this.quotes$ = this.quoteService.getQuotes();
  }
}