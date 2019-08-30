import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Highchart3Component } from './highchart3.component';

describe('Highchart3Component', () => {
  let component: Highchart3Component;
  let fixture: ComponentFixture<Highchart3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Highchart3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Highchart3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
