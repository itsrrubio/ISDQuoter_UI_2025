import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { QuoteService, JobQuoteCreateDto } from '../../services/quote.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-quote-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.scss']
})
export class QuoteFormComponent {
  quoteForm: FormGroup;
  result$: Observable<any> | null = null;

  constructor(private fb: FormBuilder, private quoteService: QuoteService) {
    this.quoteForm = this.fb.group({
      garmentId: ['', Validators.required],
      garmentQuantity: [1, [Validators.required, Validators.min(1)]],
      graphics: this.fb.array([])
    });
    this.addGraphic();
  }

  get graphics(): FormArray {
    return this.quoteForm.get('graphics') as FormArray;
  }

  addGraphic(): void {
    this.graphics.push(this.fb.group({ colorCount: [1, [Validators.required, Validators.min(1)]] }));
  }

  removeGraphic(index: number): void {
    this.graphics.removeAt(index);
  }

  submit(): void {
    if (this.quoteForm.invalid) return;
    const dto: JobQuoteCreateDto = this.quoteForm.value;
    this.result$ = this.quoteService.createQuote(dto);
  }
}