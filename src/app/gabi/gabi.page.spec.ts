import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GabiPage } from './gabi.page';

describe('GabiPage', () => {
  let component: GabiPage;
  let fixture: ComponentFixture<GabiPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GabiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
