import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule
  ],
  template: `
    <mat-toolbar color="primary">
      <span>ISD Quoter</span>
      <span class="spacer"></span>
      <button mat-button routerLink="/quotes">Quotes</button>
      <button mat-button routerLink="/quotes/new">New Quote</button>
    </mat-toolbar>
    <router-outlet></router-outlet>
  `,
  styles: [`.spacer { flex: 1 1 auto; }`]
})
export class AppComponent {}
