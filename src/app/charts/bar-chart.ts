import { Component } from '@angular/core';
import 'chart.js';

@Component({
  selector: 'bar-chart',
  templateUrl: './bar-chart.html'
})
export class BarChart {
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  /* By Year */
 //public barChartLabels:string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  /* By Month */
  public barChartLabels:string[] = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL','AUG','SEP','OCT','NOV', 'DEC'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
 
  public barChartData:any[] = [
    {data: [65, 59, 80, 81, 56, 55, 80, 75, 59, 50, 86, 73], label: 'Test A'},
    // {data: [28, 48, 40, 19, 86, 27, 90], label: 'Test B'}
  ];
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
 
  public randomize():void {
    // Only Change 3 values
    let data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */
  }
}