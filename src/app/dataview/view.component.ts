import { Component } from '@angular/core';
import * as _ from 'underscore';

@Component({
    selector: 'ref-view',
    templateUrl: './view.component.html',
})
export class ViewComponent {
    public firstname: string;
    public lastname: string;
    public age: number;
    public data: any;
   
    public chartType: string= 'pie';
    
    constructor() {
        this.firstname = "joe";
        this.lastname = "jack";
        this.age = 30;
        this.data = [
            { label: 'Teenagers', value: '10123' },
            { label: 'Senior', value: '8910' },
            { label: 'Women', value: '7819' },
            { label: 'Men', value: '3720' }
        ];
    
    }
}
