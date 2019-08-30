import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service'
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-highchart',
  templateUrl: './highchart.component.html',
  styleUrls: ['./highchart.component.css']
})
export class HighchartComponent implements OnInit {
  chart: any;
  dataArray: any = [];
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
      },
    },
    legend: {
      align: 'right',
      x: -30,
      verticalAlign: 'top',
      y: 25,
      floating: true,
      backgroundColor:
        Highcharts.defaultOptions.legend.backgroundColor || 'white',
      borderColor: '#CCC',
      borderWidth: 1,
      shadow: false
    },
    tooltip: {
      headerFormat: '<b>{point.x}</b><br/>',
      pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
    },
    plotOptions: {
      column: {
        stacking: 'normal',
        dataLabels: {
          enabled: true
        }
      }
    },
    series: []

  }
  constructor(private userService: UserService) {
  }
  data: any;
  xAxisData: any = [];
  i: number = 0;
  ngOnInit() {
    this.chart = Highcharts.chart('chart-container', this.options);
    this.userService.getdata().subscribe((data) => {
      this.data = data;
      for (let d of this.data) {
        this.chart.addSeries({
          name: d.name,
          data: d.marks,
          color: d.color
        });
      }
      console.log(this.xAxisData);

      console.log("Data Array: " + this.dataArray);
    }, (error) => {
      console.log(error);
    });

  }
}


