
import { NgModule } from '@angular/core';
import { RWChartComponent } from './rw-chart.component';
import { ChartsModule } from 'ng2-charts/ng2-charts'

@NgModule({
    declarations : [ RWChartComponent ],
    exports : [ RWChartComponent ],
})

export class RWChartModule { }