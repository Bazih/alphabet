import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestWordComponent } from './test-word.component';

describe('TestWordComponent', () => {
  let component: TestWordComponent;
  let fixture: ComponentFixture<TestWordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestWordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
