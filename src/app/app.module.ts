import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ApiService } from '@app/services/api.service';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@app/components/shared/shared.module';
import { TvShowsApiService } from '@app/services/api/tv-shows.api.service';
import { TvShowsModule } from './components/tv-shows/tv-shows.module';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'tv-shows',
        pathMatch: 'full'
    }
];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        SharedModule,
        RouterModule.forRoot(routes),
        TvShowsModule,
    ],
    providers: [
        ApiService,
        TvShowsApiService
    ],
    exports: [RouterModule],
    bootstrap: [AppComponent]
})
export class AppModule { }
