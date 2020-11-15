import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewPageComponent } from './preview-page.component';

describe('PreviewPageComponent', () => {
  let component: PreviewPageComponent;
  let fixture: ComponentFixture<PreviewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviewPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
