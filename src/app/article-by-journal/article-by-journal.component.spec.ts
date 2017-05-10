import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleByJournalComponent } from './article-by-journal.component';

describe('ArticleByJournalComponent', () => {
  let component: ArticleByJournalComponent;
  let fixture: ComponentFixture<ArticleByJournalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleByJournalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleByJournalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
