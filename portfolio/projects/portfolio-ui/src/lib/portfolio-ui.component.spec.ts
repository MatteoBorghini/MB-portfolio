import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioUiComponent } from './portfolio-ui.component';

describe('PortfolioUiComponent', () => {
  let component: PortfolioUiComponent;
  let fixture: ComponentFixture<PortfolioUiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortfolioUiComponent]
    });
    fixture = TestBed.createComponent(PortfolioUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
