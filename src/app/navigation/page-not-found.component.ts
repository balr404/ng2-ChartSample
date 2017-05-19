import { Component } from '@angular/core';

@Component({
    template: `
    <p>
        <b>Page not found</b>. Click <a [routerLink]="['/']">here</a> to return to home page.
    </p>
    <br>
    <hr>
    <i><u>Note:</u> This is a temp page to check bad URLs not configured by router. It will be automatically redirected to home page</i>
    `
})
export class PageNotFoundComponent {}
