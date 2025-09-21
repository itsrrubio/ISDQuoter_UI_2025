import { Routes } from '@angular/router';
import { QuoteListComponent } from './quotes/quote-list/quote-list.component';
import { QuoteFormComponent } from './quotes/quote-form/quote-form.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'quotes', pathMatch: 'full' },
  { path: 'quotes', component: QuoteListComponent },
  { path: 'quotes/new', component: QuoteFormComponent },
  { path: '**', redirectTo: 'quotes' } // fallback for unknown routes
];
