import { Component, Input, OnInit } from '@angular/core';
import * as _ from 'underscore';

@Component({
    selector: 'ref-contact',
    templateUrl: './contact.component.html',
})
export class ContactComponent implements OnInit {
    /* @Input('firstname') firstname: string;
     @Input('lastname') lastname: string;
     @Input('age') age: number; */

    @Input() firstname: string;
    @Input() lastname: string;
    @Input() age: number;
    @Input() data: any;

    constructor() {

    }
    ngOnInit() {
        this.firstname = this.firstname || '';
        this.lastname = this.lastname || '';
        this.age = this.age || 0;
        this.data = _.pluck(this.data, 'label')|| [];
    }
}