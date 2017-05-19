import { arrayify } from 'tslint/lib/utils';
import { BaseChartDirective } from 'ng2-charts/charts/charts';
import { Colors } from 'ng2-charts/charts/charts';
import { Component } from '@angular/core';
import Chart from 'chart.js';

@Component({
  selector: 'pie-chart',
  templateUrl: './pie-chart.html'
})
export class PieChart {
  // Pie
  public pieChartLabels:string[] = ['Download Sales', 't1','t2','t3','t4','s1','s2', 'In-Store Sales', 'Mail Sales'];
  public pieChartData:number[] = [300, 500,50,60,70,120,200,150,100];
  public pieChartType:string = 'pie';
  public pieChartColors: Colors;
  //public basechart : BaseChartDirective;
  
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }
}