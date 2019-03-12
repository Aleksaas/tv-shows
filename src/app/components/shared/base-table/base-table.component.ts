import { Component, OnInit } from '@angular/core';
import { SortData } from '@app/model/common.model';
import { SortOrder } from '@app/enums/enums';

export class BaseTable {

    constructor() { }

    currentSort: SortData = new SortData();

    shouldShowCaret(sortColumn: string) {
        return this.currentSort.sortColumn == sortColumn;
    }

    getCaretClass() {
        return this.currentSort.sortOrder == SortOrder.ASC ? "fa fa-caret-up" : "fa fa-caret-down";
    }

    sortTable(sortColumn: string) {

        if (this.currentSort.sortColumn == sortColumn) {
            this.currentSort.toggleSort();
        } else {
            this.currentSort.sortOrder = SortOrder.ASC;
        }

        this.currentSort.sortColumn = sortColumn;
    }

}
