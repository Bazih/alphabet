import { Component, Input, OnChanges, OnInit, Renderer2 } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
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
  event: BehaviorSubject<MouseEvent> = new BehaviorSubject(null);

  constructor(
    private renderer: Renderer2
  ) { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (typeof this.event.getValue() === 'object' && this.event.getValue() !== null) {
      this.renderer.removeClass(this.event.getValue().target, 'letter-vowel');
      this.renderer.removeClass(this.event.getValue().target, 'letter-consonant');
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

  inspection(letter: string, event: MouseEvent): void {
    if (this.model.param === letter) {
      this.event.next(event);

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
