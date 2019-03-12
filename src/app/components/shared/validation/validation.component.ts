import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
    selector: 'validation',
    templateUrl: './validation.component.html',
    styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit {

    @Input()
    fieldName: any;

    constructor() { }

    ngOnInit() {
    }
}
