import { SortOrder } from '@app/enums/enums';

export class SortData {
    sortColumn = "";
    sortOrder: SortOrder = SortOrder.ASC;

    isReversed() {
        return this.sortOrder == SortOrder.DESC;
    }

    toggleSort() {
        this.sortOrder = this.sortOrder == SortOrder.ASC ? SortOrder.DESC : SortOrder.ASC;
    }
}
