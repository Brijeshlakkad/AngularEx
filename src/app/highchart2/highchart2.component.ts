import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-highchart2',
  templateUrl: './highchart2.component.html',
  styleUrls: ['./highchart2.component.css']
})
export class Highchart2Component implements OnInit {

  chart: any;
  series: any = [];
  data: any;
  options: any = {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Student Subjects and Marks'
    },
    xAxis: {
      categories: ["sub1", "sub2", "sub3"]
    },
    yAxis: {
      allowDecimals: false,
      min: 0,
      title: {
        text: 'Total Marks'
      },
      stackLabels: {
        enabled: true,
        style: {
          fontWeight: 'bold',
          color: ( // theme
            Highcharts.defaultOptions.title.style &&
            Highcharts.defaultOptions.title.style.color
          ) || 'gray'
        }
      }
    },
    legend: {
      align: 'right',
      x: -100,
      verticalAlign: 'top',
      y: 20,
      floating: true,
      backgroundColor:
        Highcharts.defaultOptions.legend.backgroundColor || 'white',
      borderColor: '#CCC',
      borderWidth: 1,
      shadow: false
    },
    tooltip: {
      formatter: function () {
        return '<b>' + this.x + '</b><br/>' + this.series.name + ': ' + this.y + '<br/>' + 'Total: ' + this.point.stackTotal;
      }
    },
    plotOptions: {
      column: {
        stacking: 'normal',
        dataLabels: {
          enabled: true,
          color:
            Highcharts.defaultOptions.legend.backgroundColor || 'white',
        }
      }
    },
    series: []
  };
  
  constructor(private userService: UserService) {
  }
  
  sum:number=0;
  count:number=0;
  avg:number;
  ngOnInit() {
    this.chart = Highcharts.chart('chart-container', this.options);
    this.userService.getdata().subscribe((data) => {
      this.data = data;
      for (let d of this.data) {
        this.sum+=d.marks;
        this.count++;
        this.chart.addSeries({
          name: d.name,
          data: d.marks,
          color: d.color
        });
      }
      this.avg = this.sum/this.count;
    }, (error) => {
      console.log(error);
    });

  }
}
