import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ValidationComponent } from './validation/validation.component';
import { RatingRangeValidatorDirective } from '@app/directives/validators/rating-range.directive';
import { OrderModule } from 'ngx-order-pipe';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        CommonModule,
        OrderModule,
        AngularFontAwesomeModule
    ],
    exports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        CommonModule,
        ValidationComponent,
        RatingRangeValidatorDirective
    ],
    declarations: [
        ValidationComponent,
        RatingRangeValidatorDirective
    ],
    providers: [],
})
export class SharedModule { }
