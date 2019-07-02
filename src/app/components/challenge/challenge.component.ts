import { AfterViewInit, Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlphabetService } from '../../services/alphabet/alphabet.service';
import { AlphabetModel } from '../../models/alphabet/alphabet.model';

@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.sass']
})
export class ChallengeComponent implements OnInit, AfterViewInit {
  items: AlphabetModel[];
  currentLetter: AlphabetModel;

  @ViewChild('resize') resize: ElementRef;

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

  ngAfterViewInit(): void {
    this.styleToSize(window.innerWidth, window.innerHeight);
  }

  isColorElement(letter: string): boolean {
    return letter.toUpperCase() === this.currentLetter.param.toUpperCase();
  }

  isNotColorElement(letter: string): boolean {
    return letter.toUpperCase() !== this.currentLetter.param.toUpperCase();
  }

  @HostListener('window:resize', ['$event'])
  private onResize(event) {
    this.renderer.removeStyle(this.resize.nativeElement, 'font-size');
    this.styleToSize(window.innerWidth, window.innerHeight);
  }

  styleToSize(width, height) {
    if (width > height) {
      if (width < 1024) {
        this.renderer.setStyle(this.resize.nativeElement, 'font-size', '14px');
      }
      if (width < 600) {
        this.renderer.setStyle(this.resize.nativeElement, 'font-size', '12px');
      }
    }
  }
}
