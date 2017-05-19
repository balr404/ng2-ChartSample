import { RWChartModule } from './charts/rw-chart.module';
import { ViewComponent } from './dataview/view.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ChartsModule } from 'ng2-charts';
import { BarChart } from '../app/charts/bar-chart';
import { DoughnutChart } from '../app/charts/doughnut-chart';
import { PieChart } from '../app/charts/pie-chart';
import { AppRoutingModule } from '../app/app-routing.module';
import { PageNotFoundComponent } from '../app/navigation/page-not-found.component'
import { ContactModule } from '../app/contact/contact.module'
import { ViewModule } from '../app/DataView/view.module'

@NgModule({
  declarations: [
    AppComponent,
    BarChart,
    DoughnutChart,
    PieChart,
    ViewComponent,
    PageNotFoundComponent
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ChartsModule,
    ContactModule,
    RWChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
