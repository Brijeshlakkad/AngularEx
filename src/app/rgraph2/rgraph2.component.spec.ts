import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Rgraph2Component } from './rgraph2.component';

describe('Rgraph2Component', () => {
  let component: Rgraph2Component;
  let fixture: ComponentFixture<Rgraph2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rgraph2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Rgraph2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
