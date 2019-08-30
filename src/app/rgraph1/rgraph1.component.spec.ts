import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Rgraph1Component } from './rgraph1.component';

describe('Rgraph1Component', () => {
  let component: Rgraph1Component;
  let fixture: ComponentFixture<Rgraph1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rgraph1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Rgraph1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
