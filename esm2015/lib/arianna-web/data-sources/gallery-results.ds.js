/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataSource } from '@n7-frontend/core';
export class AwGalleryResultsDS extends DataSource {
    constructor() {
        super(...arguments);
        this.GALLERY_RESULTS_MOCK = new Array(100);
        this.addPagination = (/**
         * @param {?} page
         * @param {?} totalPages
         * @param {?} size
         * @return {?}
         */
        (page, totalPages, size) => {
            /** @type {?} */
            const sizeOptions = [12, 24, 48];
            this.pagination = {
                first: { payload: `goto-${1}`, classes: page === 1 ? 'is-disabled' : '' },
                prev: { payload: `goto-${page / 1 - 1}`, classes: page === 1 ? 'is-disabled' : '' },
                next: { payload: `goto-${page / 1 + 1}`, classes: page === totalPages ? 'is-disabled' : '' },
                last: { payload: `goto-${totalPages}`, classes: page === totalPages ? 'is-disabled' : '' },
                links: this.makePagination(totalPages, page),
                select: {
                    label: 'Numero di risultati',
                    options: sizeOptions.map((/**
                     * @param {?} o
                     * @return {?}
                     */
                    o => {
                        return {
                            text: o,
                            selected: o === size,
                        };
                    })),
                    payload: 'select-size'
                },
            };
        });
        this.makePagination = (/**
         * @param {?} totalPages
         * @param {?} currentPage
         * @return {?}
         */
        (totalPages, currentPage) => {
            /*
                  Called by this.unpackData() when this.options.page is defined.
                  Returns the data for <n7-pagination> component.
                */
            /** @type {?} */
            const result = [];
            /** @type {?} */
            let limit = 5 - 1;
            if (totalPages <= limit) {
                limit = totalPages - 1;
            }
            // always push the first page
            if (limit) {
                /** @type {?} */
                let lastPage;
                /** @type {?} */
                let firstPage;
                if (currentPage > Math.floor(limit / 2)) {
                    if (totalPages === 2) {
                        lastPage = totalPages;
                        firstPage = 1;
                        // when currentPage is after half-point
                        // (example: [ 14 ][ 15 ][!16!][ 17 ][ 18 ])
                    }
                    else if (currentPage < (totalPages - Math.floor(limit / 2))) {
                        lastPage = currentPage / 1 + Math.floor(limit / 2);
                        firstPage = currentPage / 1 - Math.floor(limit / 2);
                    }
                    else {
                        lastPage = totalPages;
                        firstPage = currentPage - limit + (totalPages - currentPage);
                    }
                }
                else {
                    // when currentPage is before half-point
                    // (example: [ 1 ][!2!][ 3 ][ 4 ][ 5 ])
                    lastPage = limit + 1;
                    firstPage = 1;
                }
                for (let i = firstPage; i <= lastPage; i++) {
                    result.push({
                        text: String(i),
                        payload: 'page-' + String(i),
                        classes: currentPage === i ? 'is-active' : ''
                    });
                }
            }
            else {
                result.push({
                    text: '1',
                    payload: 'page-1',
                    classes: currentPage === 1 ? 'is-active' : ''
                });
                for (let i = 1; i < totalPages; i++) {
                    result.push({ text: String(i + 1), payload: 'page-' + String(i + 1), classes: currentPage === i + 1 ? 'is-active' : '' });
                }
            }
            return result;
        });
    }
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    transform(data) {
        data = this.GALLERY_RESULTS_MOCK;
        const { pageSize, currentPage } = this.options;
        this.GALLERY_RESULTS_MOCK.fill({
            image: 'https://i.imgur.com/2xY0DWR.png',
            title: 'Costa di Sorrento',
            classes: 'is-vertical',
            metadata: [
                {
                    items: [
                        { label: 'Artista', value: 'John Davies' },
                        { value: 'Fotografia' }
                    ]
                }
            ]
        });
        // if the data doesn't fit on one page, render the pagination component
        if (data.length > pageSize) {
            this.addPagination(currentPage, Math.ceil(data.length / pageSize), pageSize);
        }
        return {
            res: this.GALLERY_RESULTS_MOCK.slice(0, pageSize),
            pagination: this.pagination
        };
    }
    /**
     * @param {?} a
     * @param {?} size
     * @return {?}
     */
    chunks(a, size) {
        /** @type {?} */
        var results = [];
        while (a.length) {
            results.push(a.splice(0, size));
        }
        return results;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    AwGalleryResultsDS.prototype.GALLERY_RESULTS_MOCK;
    /**
     * @type {?}
     * @private
     */
    AwGalleryResultsDS.prototype.pagination;
    /** @type {?} */
    AwGalleryResultsDS.prototype.addPagination;
    /** @type {?} */
    AwGalleryResultsDS.prototype.makePagination;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS1yZXN1bHRzLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2RhdGEtc291cmNlcy9nYWxsZXJ5LXJlc3VsdHMuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUUvQyxNQUFNLE9BQU8sa0JBQW1CLFNBQVEsVUFBVTtJQUFsRDs7UUFDVSx5QkFBb0IsR0FBRyxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQXFDdEMsa0JBQWE7Ozs7OztRQUFHLENBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsRUFBRTs7a0JBQzFDLFdBQVcsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1lBQ2hDLElBQUksQ0FBQyxVQUFVLEdBQUc7Z0JBQ2hCLEtBQUssRUFBRSxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUMsRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtnQkFDekUsSUFBSSxFQUFFLEVBQUUsT0FBTyxFQUFFLFFBQVEsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7Z0JBQ25GLElBQUksRUFBRSxFQUFFLE9BQU8sRUFBRSxRQUFRLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO2dCQUM1RixJQUFJLEVBQUUsRUFBRSxPQUFPLEVBQUUsUUFBUSxVQUFV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RUFBRSxJQUFJLENBQUMsVUFBVTtTQUM1QixDQUFBO0lBQ0gsQ0FBQzs7Ozs7O0lBRU0sTUFBTSxDQUFDLENBQUMsRUFBRSxJQUFJOztZQUNmLE9BQU8sR0FBRyxFQUFFO1FBQ2hCLE9BQU8sQ0FBQyxDQUFDLE1BQU0sRUFBRTtZQUNmLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztTQUNqQztRQUNELE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7Q0E2RUY7Ozs7OztJQWhIQyxrREFBNkM7Ozs7O0lBQzdDLHdDQUF1Qjs7SUFvQ3ZCLDJDQW1CQzs7SUFFRCw0Q0FxREMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgQXdHYWxsZXJ5UmVzdWx0c0RTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG4gIHByaXZhdGUgR0FMTEVSWV9SRVNVTFRTX01PQ0sgPSBuZXcgQXJyYXkoMTAwKVxuICBwcml2YXRlIHBhZ2luYXRpb246IGFueVxuXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSkge1xuICAgIGRhdGEgPSB0aGlzLkdBTExFUllfUkVTVUxUU19NT0NLXG4gICAgY29uc3QgeyBwYWdlU2l6ZSwgY3VycmVudFBhZ2UgfSA9IHRoaXMub3B0aW9uc1xuICAgIHRoaXMuR0FMTEVSWV9SRVNVTFRTX01PQ0suZmlsbChcbiAgICAgIHtcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2kuaW1ndXIuY29tLzJ4WTBEV1IucG5nJyxcbiAgICAgICAgdGl0bGU6ICdDb3N0YSBkaSBTb3JyZW50bycsXG4gICAgICAgIGNsYXNzZXM6ICdpcy12ZXJ0aWNhbCcsXG4gICAgICAgIG1ldGFkYXRhOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAge2xhYmVsOiAnQXJ0aXN0YScsIHZhbHVlOiAnSm9obiBEYXZpZXMnfSxcbiAgICAgICAgICAgICAge3ZhbHVlOiAnRm90b2dyYWZpYSd9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgKVxuICAgIC8vIGlmIHRoZSBkYXRhIGRvZXNuJ3QgZml0IG9uIG9uZSBwYWdlLCByZW5kZXIgdGhlIHBhZ2luYXRpb24gY29tcG9uZW50XG4gICAgaWYgKGRhdGEubGVuZ3RoID4gcGFnZVNpemUpIHsgdGhpcy5hZGRQYWdpbmF0aW9uKGN1cnJlbnRQYWdlLCBNYXRoLmNlaWwoZGF0YS5sZW5ndGggLyBwYWdlU2l6ZSksIHBhZ2VTaXplKSB9XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlczogdGhpcy5HQUxMRVJZX1JFU1VMVFNfTU9DSy5zbGljZSgwLCBwYWdlU2l6ZSksXG4gICAgICBwYWdpbmF0aW9uOiB0aGlzLnBhZ2luYXRpb25cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgY2h1bmtzKGEsIHNpemUpIHtcbiAgICB2YXIgcmVzdWx0cyA9IFtdO1xuICAgIHdoaWxlIChhLmxlbmd0aCkge1xuICAgICAgcmVzdWx0cy5wdXNoKGEuc3BsaWNlKDAsIHNpemUpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH1cblxuICBwdWJsaWMgYWRkUGFnaW5hdGlvbiA9IChwYWdlLCB0b3RhbFBhZ2VzLCBzaXplKSA9PiB7XG4gICAgY29uc3Qgc2l6ZU9wdGlvbnMgPSBbMTIsIDI0LCA0OF07XG4gICAgdGhpcy5wYWdpbmF0aW9uID0ge1xuICAgICAgZmlyc3Q6IHsgcGF5bG9hZDogYGdvdG8tJHsxfWAsIGNsYXNzZXM6IHBhZ2UgPT09IDEgPyAnaXMtZGlzYWJsZWQnIDogJycgfSxcbiAgICAgIHByZXY6IHsgcGF5bG9hZDogYGdvdG8tJHtwYWdlIC8gMSAtIDF9YCwgY2xhc3NlczogcGFnZSA9PT0gMSA/ICdpcy1kaXNhYmxlZCcgOiAnJyB9LFxuICAgICAgbmV4dDogeyBwYXlsb2FkOiBgZ290by0ke3BhZ2UgLyAxICsgMX1gLCBjbGFzc2VzOiBwYWdlID09PSB0b3RhbFBhZ2VzID8gJ2lzLWRpc2FibGVkJyA6ICcnIH0sXG4gICAgICBsYXN0OiB7IHBheWxvYWQ6IGBnb3RvLSR7dG90YWxQYWdlc31gLCBjbGFzc2VzOiBwYWdlID09PSB0b3RhbFBhZ2VzID8gJ2lzLWRpc2FibGVkJyA6ICcnIH0sXG4gICAgICBsaW5rczogdGhpcy5tYWtlUGFnaW5hdGlvbih0b3RhbFBhZ2VzLCBwYWdlKSxcbiAgICAgIHNlbGVjdDoge1xuICAgICAgICBsYWJlbDogJ051bWVybyBkaSByaXN1bHRhdGknLFxuICAgICAgICBvcHRpb25zOiBzaXplT3B0aW9ucy5tYXAobyA9PiB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRleHQ6IG8sXG4gICAgICAgICAgICBzZWxlY3RlZDogbyA9PT0gc2l6ZSxcbiAgICAgICAgICB9O1xuICAgICAgICB9KSxcbiAgICAgICAgcGF5bG9hZDogJ3NlbGVjdC1zaXplJ1xuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgcHVibGljIG1ha2VQYWdpbmF0aW9uID0gKHRvdGFsUGFnZXMsIGN1cnJlbnRQYWdlKSA9PiB7XG4gICAgLypcbiAgICAgIENhbGxlZCBieSB0aGlzLnVucGFja0RhdGEoKSB3aGVuIHRoaXMub3B0aW9ucy5wYWdlIGlzIGRlZmluZWQuXG4gICAgICBSZXR1cm5zIHRoZSBkYXRhIGZvciA8bjctcGFnaW5hdGlvbj4gY29tcG9uZW50LlxuICAgICovXG4gICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgbGV0IGxpbWl0ID0gNSAtIDE7XG5cbiAgICBpZiAodG90YWxQYWdlcyA8PSBsaW1pdCkge1xuICAgICAgbGltaXQgPSB0b3RhbFBhZ2VzIC0gMTtcbiAgICB9XG5cbiAgICAvLyBhbHdheXMgcHVzaCB0aGUgZmlyc3QgcGFnZVxuICAgIGlmIChsaW1pdCkge1xuICAgICAgbGV0IGxhc3RQYWdlOiBudW1iZXIsIGZpcnN0UGFnZTogbnVtYmVyO1xuICAgICAgaWYgKGN1cnJlbnRQYWdlID4gTWF0aC5mbG9vcihsaW1pdCAvIDIpKSB7XG4gICAgICAgIGlmICh0b3RhbFBhZ2VzID09PSAyKSB7XG4gICAgICAgICAgbGFzdFBhZ2UgPSB0b3RhbFBhZ2VzO1xuICAgICAgICAgIGZpcnN0UGFnZSA9IDE7XG4gICAgICAgICAgLy8gd2hlbiBjdXJyZW50UGFnZSBpcyBhZnRlciBoYWxmLXBvaW50XG4gICAgICAgICAgLy8gKGV4YW1wbGU6IFsgMTQgXVsgMTUgXVshMTYhXVsgMTcgXVsgMTggXSlcbiAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50UGFnZSA8ICh0b3RhbFBhZ2VzIC0gTWF0aC5mbG9vcihsaW1pdCAvIDIpKSkge1xuICAgICAgICAgIGxhc3RQYWdlID0gY3VycmVudFBhZ2UgLyAxICsgTWF0aC5mbG9vcihsaW1pdCAvIDIpO1xuICAgICAgICAgIGZpcnN0UGFnZSA9IGN1cnJlbnRQYWdlIC8gMSAtIE1hdGguZmxvb3IobGltaXQgLyAyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsYXN0UGFnZSA9IHRvdGFsUGFnZXM7XG4gICAgICAgICAgZmlyc3RQYWdlID0gY3VycmVudFBhZ2UgLSBsaW1pdCArICh0b3RhbFBhZ2VzIC0gY3VycmVudFBhZ2UpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyB3aGVuIGN1cnJlbnRQYWdlIGlzIGJlZm9yZSBoYWxmLXBvaW50XG4gICAgICAgIC8vIChleGFtcGxlOiBbIDEgXVshMiFdWyAzIF1bIDQgXVsgNSBdKVxuICAgICAgICBsYXN0UGFnZSA9IGxpbWl0ICsgMTtcbiAgICAgICAgZmlyc3RQYWdlID0gMTtcbiAgICAgIH1cblxuICAgICAgZm9yIChsZXQgaSA9IGZpcnN0UGFnZTsgaSA8PSBsYXN0UGFnZTsgaSsrKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICB0ZXh0OiBTdHJpbmcoaSksXG4gICAgICAgICAgcGF5bG9hZDogJ3BhZ2UtJyArIFN0cmluZyhpKSxcbiAgICAgICAgICBjbGFzc2VzOiBjdXJyZW50UGFnZSA9PT0gaSA/ICdpcy1hY3RpdmUnIDogJydcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgdGV4dDogJzEnLFxuICAgICAgICBwYXlsb2FkOiAncGFnZS0xJyxcbiAgICAgICAgY2xhc3NlczogY3VycmVudFBhZ2UgPT09IDEgPyAnaXMtYWN0aXZlJyA6ICcnXG4gICAgICB9KTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgdG90YWxQYWdlczsgaSsrKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKHsgdGV4dDogU3RyaW5nKGkgKyAxKSwgcGF5bG9hZDogJ3BhZ2UtJyArIFN0cmluZyhpICsgMSksIGNsYXNzZXM6IGN1cnJlbnRQYWdlID09PSBpICsgMSA/ICdpcy1hY3RpdmUnIDogJycgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn0iXX0=