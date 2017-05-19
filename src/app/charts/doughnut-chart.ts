import { Component } from '@angular/core';
import 'chart.js';

@Component({
  selector: 'doughnut-chart',
  templateUrl: './doughnut-chart.html'
})

export class DoughnutChart {
  // Doughnut
  public doughnutChartLabels:string[] = ['Download Sales','tets', 'entity', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData:number[] = [350, 200,500, 450, 100];
  public doughnutChartType:string = 'doughnut';

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }
}