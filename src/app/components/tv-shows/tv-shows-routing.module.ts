import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TvShowsComponent } from './tv-shows-component';
import { TvShowsListComponent } from './tv-shows-list/tv-shows-list.component';
import { TvShowsFormComponent } from './tv-shows-form/tv-shows-form.component';

const routes: Routes = [
    {
        path: 'tv-shows',
        component: TvShowsComponent,
        children: [
            {
                path: '',
                component: TvShowsListComponent,
            },
            {
                path: 'form/:showId',
                component: TvShowsFormComponent,
            },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class TvShowsRoutingModule { }
