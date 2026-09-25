import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-suggestion-box',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './suggestion-box.component.html',
  styleUrl: './suggestion-box.component.scss'
})
export class SuggestionBoxComponent {

  suggestionCategory = '';
  suggestionText = '';
  submitAnonymously = false;

  submitted = false;

  suggestionsSubmitted = 128;
  ideasUnderReview = 24;
  ideasImplemented = 17;


  submitSuggestion(): void {

    if (!this.suggestionCategory || !this.suggestionText.trim()) {
      return;
    }

    this.submitted = true;

    this.suggestionsSubmitted++;

    this.suggestionCategory = '';
    this.suggestionText = '';
    this.submitAnonymously = false;

  }


  writeAnotherSuggestion(): void {

    this.submitted = false;

  }

}