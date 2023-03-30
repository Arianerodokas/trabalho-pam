import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArianePage } from './ariane.page';

describe('ArianePage', () => {
  let component: ArianePage;
  let fixture: ComponentFixture<ArianePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ArianePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
