import { ViewComponent } from './dataview/view.component';
import { componentFactoryName } from '@angular/compiler/compiler';
import { Component } from '@angular/core/core';
import { ModuleWithProviders }  from '@angular/core';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BarChart } from './charts/bar-chart';
import { DoughnutChart } from './charts/doughnut-chart';
import { PieChart } from './charts/pie-chart';
import { PageNotFoundComponent } from './navigation/page-not-found.component';

const appRoutes : Routes = [ 
    { 
        path: '',  
        component: DoughnutChart 
     },
     { 
        path: 'piechart',  
        component: PieChart 
     },
     { 
        path: 'barchart',  
        component: BarChart 
     },
     {
         path: 'viewcontact',
         component: ViewComponent
     },
     { 
        path: '**',  
        component: PageNotFoundComponent 
     }

]
@NgModule({
    imports: [ RouterModule.forRoot(appRoutes) ],
    exports: [RouterModule]
})

export class AppRoutingModule {}
