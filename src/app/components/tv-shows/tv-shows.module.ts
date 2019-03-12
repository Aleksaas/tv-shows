import { TvShowsListComponent } from './tv-shows-list/tv-shows-list.component';
import { SharedModule } from "../shared/shared.module";
import { NgModule } from "@angular/core";
import { TvShowsRoutingModule } from "./tv-shows-routing.module";
import { TvShowsComponent } from './tv-shows-component';
import { TvShowsFormComponent } from './tv-shows-form/tv-shows-form.component';
import { TvShowsDataService } from './tv-shows-data.service';
import { OrderModule } from 'ngx-order-pipe';

@NgModule({
    imports: [
        SharedModule,
        TvShowsRoutingModule,
        OrderModule
    ],
    exports: [
        TvShowsListComponent,
        TvShowsComponent,
    ],
    declarations: [
        TvShowsListComponent,
        TvShowsComponent,
        TvShowsFormComponent,
    ],
    providers: [
        TvShowsDataService
    ],
})
export class TvShowsModule { }
