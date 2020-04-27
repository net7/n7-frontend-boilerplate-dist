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
                    (o) => ({
                        text: o,
                        selected: o === size,
                    }))),
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
                for (let i = firstPage; i <= lastPage; i += 1) {
                    result.push({
                        text: String(i),
                        payload: `page-${String(i)}`,
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
                for (let i = 1; i < totalPages; i += 1) {
                    result.push({ text: String(i + 1), payload: `page-${String(i + 1)}`, classes: currentPage === i + 1 ? 'is-active' : '' });
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
        // eslint-disable-next-line no-param-reassign
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
        const results = [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS1yZXN1bHRzLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2RhdGEtc291cmNlcy9nYWxsZXJ5LXJlc3VsdHMuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUUvQyxNQUFNLE9BQU8sa0JBQW1CLFNBQVEsVUFBVTtJQUFsRDs7UUFDVSx5QkFBb0IsR0FBRyxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQXlDdEMsa0JBQWE7Ozs7OztRQUFHLENBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsRUFBRTs7a0JBQzFDLFdBQVcsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1lBQ2hDLElBQUksQ0FBQyxVQUFVLEdBQUc7Z0JBQ2hCLEtBQUssRUFBRSxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUMsRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtnQkFDekUsSUFBSSxFQUFFLEVBQUUsT0FBTyxFQUFFLFFBQVEsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7Z0JBQ25GLElBQUksRUFBRSxFQUFFLE9BQU8sRUFBRSxRQUFRLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO2dCQUM1RixJQUFJLEVBQUUsRUFBRSxPQUFPLEVBQUUsUUFBUSxVQUFV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USxDQUFDO1lBQ2pELFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtTQUM1QixDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBRU0sTUFBTSxDQUFDLENBQUMsRUFBRSxJQUFJOztjQUNiLE9BQU8sR0FBRyxFQUFFO1FBQ2xCLE9BQU8sQ0FBQyxDQUFDLE1BQU0sRUFBRTtZQUNmLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztTQUNqQztRQUNELE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7Q0E0RUY7Ozs7OztJQW5IQyxrREFBNkM7Ozs7O0lBRTdDLHdDQUF1Qjs7SUF1Q3ZCLDJDQWlCQzs7SUFFRCw0Q0FzREMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgQXdHYWxsZXJ5UmVzdWx0c0RTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG4gIHByaXZhdGUgR0FMTEVSWV9SRVNVTFRTX01PQ0sgPSBuZXcgQXJyYXkoMTAwKVxuXG4gIHByaXZhdGUgcGFnaW5hdGlvbjogYW55XG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgZGF0YSA9IHRoaXMuR0FMTEVSWV9SRVNVTFRTX01PQ0s7XG4gICAgY29uc3QgeyBwYWdlU2l6ZSwgY3VycmVudFBhZ2UgfSA9IHRoaXMub3B0aW9ucztcbiAgICB0aGlzLkdBTExFUllfUkVTVUxUU19NT0NLLmZpbGwoXG4gICAgICB7XG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9pLmltZ3VyLmNvbS8yeFkwRFdSLnBuZycsXG4gICAgICAgIHRpdGxlOiAnQ29zdGEgZGkgU29ycmVudG8nLFxuICAgICAgICBjbGFzc2VzOiAnaXMtdmVydGljYWwnLFxuICAgICAgICBtZXRhZGF0YTogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgIHsgbGFiZWw6ICdBcnRpc3RhJywgdmFsdWU6ICdKb2huIERhdmllcycgfSxcbiAgICAgICAgICAgICAgeyB2YWx1ZTogJ0ZvdG9ncmFmaWEnIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICApO1xuICAgIC8vIGlmIHRoZSBkYXRhIGRvZXNuJ3QgZml0IG9uIG9uZSBwYWdlLCByZW5kZXIgdGhlIHBhZ2luYXRpb24gY29tcG9uZW50XG4gICAgaWYgKGRhdGEubGVuZ3RoID4gcGFnZVNpemUpIHtcbiAgICAgIHRoaXMuYWRkUGFnaW5hdGlvbihjdXJyZW50UGFnZSwgTWF0aC5jZWlsKGRhdGEubGVuZ3RoIC8gcGFnZVNpemUpLCBwYWdlU2l6ZSk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICByZXM6IHRoaXMuR0FMTEVSWV9SRVNVTFRTX01PQ0suc2xpY2UoMCwgcGFnZVNpemUpLFxuICAgICAgcGFnaW5hdGlvbjogdGhpcy5wYWdpbmF0aW9uXG4gICAgfTtcbiAgfVxuXG4gIHB1YmxpYyBjaHVua3MoYSwgc2l6ZSkge1xuICAgIGNvbnN0IHJlc3VsdHMgPSBbXTtcbiAgICB3aGlsZSAoYS5sZW5ndGgpIHtcbiAgICAgIHJlc3VsdHMucHVzaChhLnNwbGljZSgwLCBzaXplKSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRzO1xuICB9XG5cbiAgcHVibGljIGFkZFBhZ2luYXRpb24gPSAocGFnZSwgdG90YWxQYWdlcywgc2l6ZSkgPT4ge1xuICAgIGNvbnN0IHNpemVPcHRpb25zID0gWzEyLCAyNCwgNDhdO1xuICAgIHRoaXMucGFnaW5hdGlvbiA9IHtcbiAgICAgIGZpcnN0OiB7IHBheWxvYWQ6IGBnb3RvLSR7MX1gLCBjbGFzc2VzOiBwYWdlID09PSAxID8gJ2lzLWRpc2FibGVkJyA6ICcnIH0sXG4gICAgICBwcmV2OiB7IHBheWxvYWQ6IGBnb3RvLSR7cGFnZSAvIDEgLSAxfWAsIGNsYXNzZXM6IHBhZ2UgPT09IDEgPyAnaXMtZGlzYWJsZWQnIDogJycgfSxcbiAgICAgIG5leHQ6IHsgcGF5bG9hZDogYGdvdG8tJHtwYWdlIC8gMSArIDF9YCwgY2xhc3NlczogcGFnZSA9PT0gdG90YWxQYWdlcyA/ICdpcy1kaXNhYmxlZCcgOiAnJyB9LFxuICAgICAgbGFzdDogeyBwYXlsb2FkOiBgZ290by0ke3RvdGFsUGFnZXN9YCwgY2xhc3NlczogcGFnZSA9PT0gdG90YWxQYWdlcyA/ICdpcy1kaXNhYmxlZCcgOiAnJyB9LFxuICAgICAgbGlua3M6IHRoaXMubWFrZVBhZ2luYXRpb24odG90YWxQYWdlcywgcGFnZSksXG4gICAgICBzZWxlY3Q6IHtcbiAgICAgICAgbGFiZWw6ICdOdW1lcm8gZGkgcmlzdWx0YXRpJyxcbiAgICAgICAgb3B0aW9uczogc2l6ZU9wdGlvbnMubWFwKChvKSA9PiAoe1xuICAgICAgICAgIHRleHQ6IG8sXG4gICAgICAgICAgc2VsZWN0ZWQ6IG8gPT09IHNpemUsXG4gICAgICAgIH0pKSxcbiAgICAgICAgcGF5bG9hZDogJ3NlbGVjdC1zaXplJ1xuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgcHVibGljIG1ha2VQYWdpbmF0aW9uID0gKHRvdGFsUGFnZXMsIGN1cnJlbnRQYWdlKSA9PiB7XG4gICAgLypcbiAgICAgIENhbGxlZCBieSB0aGlzLnVucGFja0RhdGEoKSB3aGVuIHRoaXMub3B0aW9ucy5wYWdlIGlzIGRlZmluZWQuXG4gICAgICBSZXR1cm5zIHRoZSBkYXRhIGZvciA8bjctcGFnaW5hdGlvbj4gY29tcG9uZW50LlxuICAgICovXG4gICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgbGV0IGxpbWl0ID0gNSAtIDE7XG5cbiAgICBpZiAodG90YWxQYWdlcyA8PSBsaW1pdCkge1xuICAgICAgbGltaXQgPSB0b3RhbFBhZ2VzIC0gMTtcbiAgICB9XG5cbiAgICAvLyBhbHdheXMgcHVzaCB0aGUgZmlyc3QgcGFnZVxuICAgIGlmIChsaW1pdCkge1xuICAgICAgbGV0IGxhc3RQYWdlOiBudW1iZXI7IGxldFxuICAgICAgICBmaXJzdFBhZ2U6IG51bWJlcjtcbiAgICAgIGlmIChjdXJyZW50UGFnZSA+IE1hdGguZmxvb3IobGltaXQgLyAyKSkge1xuICAgICAgICBpZiAodG90YWxQYWdlcyA9PT0gMikge1xuICAgICAgICAgIGxhc3RQYWdlID0gdG90YWxQYWdlcztcbiAgICAgICAgICBmaXJzdFBhZ2UgPSAxO1xuICAgICAgICAgIC8vIHdoZW4gY3VycmVudFBhZ2UgaXMgYWZ0ZXIgaGFsZi1wb2ludFxuICAgICAgICAgIC8vIChleGFtcGxlOiBbIDE0IF1bIDE1IF1bITE2IV1bIDE3IF1bIDE4IF0pXG4gICAgICAgIH0gZWxzZSBpZiAoY3VycmVudFBhZ2UgPCAodG90YWxQYWdlcyAtIE1hdGguZmxvb3IobGltaXQgLyAyKSkpIHtcbiAgICAgICAgICBsYXN0UGFnZSA9IGN1cnJlbnRQYWdlIC8gMSArIE1hdGguZmxvb3IobGltaXQgLyAyKTtcbiAgICAgICAgICBmaXJzdFBhZ2UgPSBjdXJyZW50UGFnZSAvIDEgLSBNYXRoLmZsb29yKGxpbWl0IC8gMik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGFzdFBhZ2UgPSB0b3RhbFBhZ2VzO1xuICAgICAgICAgIGZpcnN0UGFnZSA9IGN1cnJlbnRQYWdlIC0gbGltaXQgKyAodG90YWxQYWdlcyAtIGN1cnJlbnRQYWdlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gd2hlbiBjdXJyZW50UGFnZSBpcyBiZWZvcmUgaGFsZi1wb2ludFxuICAgICAgICAvLyAoZXhhbXBsZTogWyAxIF1bITIhXVsgMyBdWyA0IF1bIDUgXSlcbiAgICAgICAgbGFzdFBhZ2UgPSBsaW1pdCArIDE7XG4gICAgICAgIGZpcnN0UGFnZSA9IDE7XG4gICAgICB9XG5cbiAgICAgIGZvciAobGV0IGkgPSBmaXJzdFBhZ2U7IGkgPD0gbGFzdFBhZ2U7IGkgKz0gMSkge1xuICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgdGV4dDogU3RyaW5nKGkpLFxuICAgICAgICAgIHBheWxvYWQ6IGBwYWdlLSR7U3RyaW5nKGkpfWAsXG4gICAgICAgICAgY2xhc3NlczogY3VycmVudFBhZ2UgPT09IGkgPyAnaXMtYWN0aXZlJyA6ICcnXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgIHRleHQ6ICcxJyxcbiAgICAgICAgcGF5bG9hZDogJ3BhZ2UtMScsXG4gICAgICAgIGNsYXNzZXM6IGN1cnJlbnRQYWdlID09PSAxID8gJ2lzLWFjdGl2ZScgOiAnJ1xuICAgICAgfSk7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHRvdGFsUGFnZXM7IGkgKz0gMSkge1xuICAgICAgICByZXN1bHQucHVzaCh7IHRleHQ6IFN0cmluZyhpICsgMSksIHBheWxvYWQ6IGBwYWdlLSR7U3RyaW5nKGkgKyAxKX1gLCBjbGFzc2VzOiBjdXJyZW50UGFnZSA9PT0gaSArIDEgPyAnaXMtYWN0aXZlJyA6ICcnIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG4iXX0=