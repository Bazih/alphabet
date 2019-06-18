import { AfterViewChecked, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlphabetService } from '../../services/alphabet/alphabet.service';
import { AlphabetModel } from '../../models/alphabet/alphabet.model';

@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.sass']
})
export class ChallengeComponent implements OnInit, AfterViewChecked {
  items: AlphabetModel[];
  currentLetter: AlphabetModel;
  anomalyLetter: string[] = ['м', 'ж', 'ф', 'ш', 'щ', 'ъ', 'ы', 'ю'];

  @ViewChild('colorElement') colorElement: ElementRef;
  @ViewChild('marginElement') marginElement: ElementRef;

  constructor(
    private alphabet: AlphabetService,
    private route: ActivatedRoute,
    private router: Router,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    this.alphabet.getItems().subscribe(res => {
      this.items = res;
    });

    this.route.paramMap.subscribe(params => {
      this.currentLetter = this.items.find(x => x.param === params.get('letter'));

      if (!this.currentLetter) {
        this.router.navigateByUrl('');
      }
    });
  }

  isColorElement(letter: string): boolean {
    return letter.toUpperCase() === this.currentLetter.param.toUpperCase();
  }

  isNotColorElement(letter: string): boolean {
    return letter.toUpperCase() !== this.currentLetter.param.toUpperCase();
  }

  ngAfterViewChecked(): void {
    if (this.anomalyLetter.includes(this.currentLetter.param)) {
      this.renderer.setStyle(this.marginElement.nativeElement, 'margin', '0.2em 0.08em 0 0');
    } else {
      this.renderer.setStyle(this.marginElement.nativeElement, 'margin', '0.2em 0.5em 0 0');
    }

    if (this.currentLetter && this.colorElement.nativeElement.text.toUpperCase() === this.currentLetter.param.toUpperCase()) {
      if (this.currentLetter.vowel) {
        this.renderer.addClass(this.colorElement.nativeElement, 'letter-vowel');
      } else {
        this.renderer.addClass(this.colorElement.nativeElement, 'letter-consonant');
      }
    }
  }
}
