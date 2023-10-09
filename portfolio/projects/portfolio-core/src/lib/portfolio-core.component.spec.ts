import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioCoreComponent } from './portfolio-core.component';

describe('PortfolioCoreComponent', () => {
  let component: PortfolioCoreComponent;
  let fixture: ComponentFixture<PortfolioCoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortfolioCoreComponent]
    });
    fixture = TestBed.createComponent(PortfolioCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
