import { Component, OnInit } from '@angular/core';
declare var RGraph;

@Component({
  selector: 'app-rgraph2',
  templateUrl: './rgraph2.component.html',
  styleUrls: ['./rgraph2.component.css']
})
export class Rgraph2Component implements OnInit {

  constructor() { }

  ngOnInit() {
    RGraph.HProgress({
      id: 'cvs',
      min: 0,
      max: 100,
      value: 78,
      options: {
        colors: ['red'],
        marginInner: 10
      }
    }).draw();
  }

}
