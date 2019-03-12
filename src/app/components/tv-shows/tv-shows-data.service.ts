import { Injectable } from '@angular/core';
import { TvShow, Show } from '@app/model/api.model';
import { TvShowsApiService } from '@app/services/api/tv-shows.api.service';

@Injectable()
export class TvShowsDataService {

    constructor(
        public tvShowsApiService: TvShowsApiService
    ) { }

    editedShows: Show[] = [];

    /**
     * Saving edited data here because we dont have API for edit
     * @param show
     */
    updateShow(edited: Show) {
        const existing = this.editedShows.find(e => e.id == edited.id);

        if (existing) {
            this.copyShow(existing, edited);
        } else {
            this.editedShows.push(edited);
        }
    }

    private copyShow(existing: Show, edited: Show) {
        existing.name = edited.name;
        existing.rating.average = edited.rating.average;
        existing.summary = edited.summary;
    }

    /**
     * Simulates API that would return updated elements
     * @param showList
     */
    filter(showList: TvShow[]) {
        this.editedShows.forEach(editedElem => {
            const show = showList.find(elem => elem.show.id == editedElem.id);
            if (show) {
                show.show = editedElem;
            }
        });

        return showList;
    }
}
