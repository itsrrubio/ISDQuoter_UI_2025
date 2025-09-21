import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { QuoteListComponent } from './app/quotes/quote-list/quote-list.component';
import { QuoteFormComponent } from './app/quotes/quote-form/quote-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'quotes', pathMatch: 'full' },
  { path: 'quotes', component: QuoteListComponent },
  { path: 'quotes/new', component: QuoteFormComponent },
  { path: '**', redirectTo: 'quotes', pathMatch: 'full' }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    importProvidersFrom(HttpClientModule)  // ✅ add this
  ]
}).catch(err => console.error(err));
