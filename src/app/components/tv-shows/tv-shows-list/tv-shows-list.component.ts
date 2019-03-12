import { TvShow } from '@app/model/api.model';
import { Component, OnInit } from '@angular/core';
import { TvShowsApiService } from '@app/services/api/tv-shows.api.service';
import { TvShowsDataService } from '../tv-shows-data.service';
import { BaseTable } from '@app/components/shared/base-table/base-table.component';

@Component({
    selector: 'tv-shows-list',
    templateUrl: 'tv-shows-list.component.html'
})

export class TvShowsListComponent extends BaseTable implements OnInit {

    constructor(
        private tvShowsApiService: TvShowsApiService,
        private tvShowsDataService: TvShowsDataService
    ) {
        super();
     }

    tvShowList: TvShow[];

    searchTerm = "";

    async ngOnInit() {
        await this.search();
        this.defaultSort();
    }

    defaultSort() {
        this.sortTable('show.name');
    }

    async search() {
        this.tvShowList = await this.tvShowsApiService.search(this.searchTerm);
        this.tvShowList = this.tvShowsDataService.filter(this.tvShowList);
    }
}
