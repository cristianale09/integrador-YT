import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LofoAPComponent } from './lofo-ap.component';

describe('LofoAPComponent', () => {
  let component: LofoAPComponent;
  let fixture: ComponentFixture<LofoAPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LofoAPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LofoAPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
