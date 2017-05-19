
import { arrayify } from 'tslint/lib/utils';
import { BaseChartDirective } from 'ng2-charts/charts/charts';
import { Colors } from 'ng2-charts/charts/charts';
import Chart from 'chart.js';
import * as _ from 'underscore';
import { Component, OnInit, EventEmitter, ElementRef, Input, Output } from '@angular/core';

@Component({
    selector: 'rw-chart',
    templateUrl: './rw-chart.component.html'
})

export class RWChartComponent implements  OnInit {
    // Pie
    @Input() data: any;
    //@Input() chartData: any;//[] = [];
    @Input() type: string = 'pie';
   
    private element:ElementRef;
    
    public ctx: any;
    public chart : any;
    
    public chartColors: Colors;
    public chartOptions: any;
    public chartLabels: string[] = ['AAA', 'BBB', 'CCC', 'DDD'];
    public customChartData: string[] = ['170', '200', '250', '260'];

    private baseChart: BaseChartDirective;
    public barChartOptions: any = {
        scaleShowVerticalLines: false,
        responsive: true
    };

    constructor(element:ElementRef) {
        this.element = element;
       
        // switch (this.chartType) {
        //     case 'pie':
        //         break;
        //     case 'doughnut':
        //         break;
        //     case 'bar':
        //         this.chartOptions = this.barChartOptions
        //         break;
        // }

    }

    ngOnInit() {
        this.ctx = this.element.nativeElement.getContext('2d');
        this.type = this.type || 'pie';
        let chartdata: string[] = (_.pluck(this.data, 'value'));
        this.customChartData = chartdata;
        this.chartLabels = _.pluck(this.data, 'label') || [];
        this.chart = this.baseChart.getChartBuilder(this.ctx/*, data, this.options*/);
    }


    public ngOnDestroy():any {
    if (this.chart) {
      this.chart.destroy();
      this.chart = void 0;
    }
  }

    // events
    public chartClicked(e: any): void {
        console.log(e);
    }

    public chartHovered(e: any): void {
        console.log(e);
    }
}