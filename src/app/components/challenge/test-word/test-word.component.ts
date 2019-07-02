import { Component, Input, OnChanges, OnInit, Renderer2 } from '@angular/core';
import { AlphabetModel } from '../../../models/alphabet/alphabet.model';

@Component({
  selector: 'app-test-word',
  templateUrl: './test-word.component.html',
  styleUrls: ['./test-word.component.sass']
})
export class TestWordComponent implements OnInit, OnChanges {
  @Input() model: AlphabetModel;
  viewWord: string[];
  visibleCorrectly = false;
  visibleWrong = false;
  correct = false;
  event: MouseEvent;

  constructor(
    private renderer: Renderer2
  ) { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.event && typeof this.event === 'object') {
      this.renderer.removeClass(this.event.target, 'letter-vowel');
      this.renderer.removeClass(this.event.target, 'letter-consonant');
      this.event = undefined;
    }
    this.init();
    this.visibleCorrectly = false;
    this.visibleWrong = false;
    this.correct = false;
  }

  init() {
    const word = this.model.words[Math.floor(Math.random() * this.model.words.length)];
    this.viewWord = word.split('');
  }

  onInspection(letter: string, event: MouseEvent): void {
    if (this.model.param === letter) {
      this.event = event;

      this.visibleCorrectly = true;
      this.correct = true;

      if (this.model.vowel) {
        this.renderer.addClass(event.target, 'letter-vowel');
      } else {
        this.renderer.addClass(event.target, 'letter-consonant');
      }
    } else {
      this.visibleWrong = true;
      this.correct = false;
      setTimeout(() => {
        this.visibleWrong = false;
      }, 3000);
    }
  }
}
