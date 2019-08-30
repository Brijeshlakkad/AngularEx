import { Component, OnInit } from '@angular/core';
declare var RGraph;

@Component({
  selector: 'app-rgraph1',
  templateUrl: './rgraph1.component.html',
  styleUrls: ['./rgraph1.component.css']
})
export class Rgraph1Component implements OnInit {
  line: any;
  bar: any;
  combo: any;

  constructor() { }

  ngOnInit() {
    this.bar = new RGraph.Bar({
      id: 'cvs',
      data: [81000, 90000, 75000, 85000, 90000, 78000, 61000],
      options: {
        yaxisScaleMax: 100000,
        backgroundGridVlines: false,
        xaxisLabels: ['USA', 'Astralia', 'India', 'China', 'Japan', 'Canada', 'Russia'],
        marginInner: 20,
        marginLeft: 55,
        marginRight: 55,
        marginBottom: 45,
        colors: ['Gradient(#A18AC0:#D1AAF5)'],
        textSize: 10
      }
    });



    this.line = new RGraph.Line({
      id: 'cvs',
      data: [45000, 56500, 50000, 30000, 60800, 32200, 23100],
      options: {
        yaxisScaleMax: 60000,
        axes: false,
        backgroundGrid: false,
        linewidth: 4,
        colors: ['#DA0'],
        yaxisPosition: 'right',
        marginLeft: 45,
        marginRight: 45,
        tickmarksStyle: null,
        spline: true,
        combinedEffect: 'trace',
        textSize: 10
      }
    });

    this.combo = new RGraph.CombinedChart([this.bar, this.line])
      .draw();

    this.line.set({
      yaxisLabels: true
    });

    RGraph.redraw();
  }

}
