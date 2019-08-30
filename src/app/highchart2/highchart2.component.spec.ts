import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Highchart2Component } from './highchart2.component';

describe('Highchart2Component', () => {
  let component: Highchart2Component;
  let fixture: ComponentFixture<Highchart2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Highchart2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Highchart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
