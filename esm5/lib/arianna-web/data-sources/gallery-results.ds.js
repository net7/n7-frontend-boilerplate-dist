/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DataSource } from '@n7-frontend/core';
var AwGalleryResultsDS = /** @class */ (function (_super) {
    tslib_1.__extends(AwGalleryResultsDS, _super);
    function AwGalleryResultsDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.GALLERY_RESULTS_MOCK = new Array(100);
        _this.addPagination = (/**
         * @param {?} page
         * @param {?} totalPages
         * @param {?} size
         * @return {?}
         */
        function (page, totalPages, size) {
            /** @type {?} */
            var sizeOptions = [12, 24, 48];
            _this.pagination = {
                first: { payload: "goto-" + 1, classes: page === 1 ? 'is-disabled' : '' },
                prev: { payload: "goto-" + (page / 1 - 1), classes: page === 1 ? 'is-disabled' : '' },
                next: { payload: "goto-" + (page / 1 + 1), classes: page === totalPages ? 'is-disabled' : '' },
                last: { payload: "goto-" + totalPages, classes: page === totalPages ? 'is-disabled' : '' },
                links: _this.makePagination(totalPages, page),
                select: {
                    label: 'Numero di risultati',
                    options: sizeOptions.map((/**
                     * @param {?} o
                     * @return {?}
                     */
                    function (o) {
                        return {
                            text: o,
                            selected: o === size,
                        };
                    })),
                    payload: 'select-size'
                },
            };
        });
        _this.makePagination = (/**
         * @param {?} totalPages
         * @param {?} currentPage
         * @return {?}
         */
        function (totalPages, currentPage) {
            /*
                  Called by this.unpackData() when this.options.page is defined.
                  Returns the data for <n7-pagination> component.
                */
            /** @type {?} */
            var result = [];
            /** @type {?} */
            var limit = 5 - 1;
            if (totalPages <= limit) {
                limit = totalPages - 1;
            }
            // always push the first page
            if (limit) {
                /** @type {?} */
                var lastPage = void 0;
                /** @type {?} */
                var firstPage = void 0;
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
                for (var i = firstPage; i <= lastPage; i++) {
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
                for (var i = 1; i < totalPages; i++) {
                    result.push({ text: String(i + 1), payload: 'page-' + String(i + 1), classes: currentPage === i + 1 ? 'is-active' : '' });
                }
            }
            return result;
        });
        return _this;
    }
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    AwGalleryResultsDS.prototype.transform = /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    function (data) {
        data = this.GALLERY_RESULTS_MOCK;
        var _a = this.options, pageSize = _a.pageSize, currentPage = _a.currentPage;
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
    };
    /**
     * @param {?} a
     * @param {?} size
     * @return {?}
     */
    AwGalleryResultsDS.prototype.chunks = /**
     * @param {?} a
     * @param {?} size
     * @return {?}
     */
    function (a, size) {
        /** @type {?} */
        var results = [];
        while (a.length) {
            results.push(a.splice(0, size));
        }
        return results;
    };
    return AwGalleryResultsDS;
}(DataSource));
export { AwGalleryResultsDS };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS1yZXN1bHRzLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2RhdGEtc291cmNlcy9nYWxsZXJ5LXJlc3VsdHMuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFL0M7SUFBd0MsOENBQVU7SUFBbEQ7UUFBQSxxRUFpSEM7UUFoSFMsMEJBQW9CLEdBQUcsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7UUFxQ3RDLG1CQUFhOzs7Ozs7UUFBRyxVQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsSUFBSTs7Z0JBQ3RDLFdBQVcsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1lBQ2hDLEtBQUksQ0FBQyxVQUFVLEdBQUc7Z0JBQ2hCLEtBQUssRUFBRSxFQUFFLE9BQU8sRUFBRSxVQUFRLENBQUcsRUFBRSxPQUFPLEVBQUUsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3pFLElBQUksRUFBRSxFQUFFLE9BQU8sRUFBRSxXQUFRLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO2dCQUNuRixJQUFJLEVBQUUsRUFBRSxPQUFPLEVBQUUsV0FBUSxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtnQkFDNUYsSUFBSSxFQUFFLEVBQUUsT0FBTyxFQUFFLFVBQVEsVUFBWSxFQUFFLE9BQU8sRUFBRSxJ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LENBQUE7SUFDSCxDQUFDOzs7Ozs7SUFFTSxtQ0FBTTs7Ozs7SUFBYixVQUFjLENBQUMsRUFBRSxJQUFJOztZQUNmLE9BQU8sR0FBRyxFQUFFO1FBQ2hCLE9BQU8sQ0FBQyxDQUFDLE1BQU0sRUFBRTtZQUNmLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztTQUNqQztRQUNELE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7SUE2RUgseUJBQUM7QUFBRCxDQUFDLEFBakhELENBQXdDLFVBQVUsR0FpSGpEOzs7Ozs7O0lBaEhDLGtEQUE2Qzs7Ozs7SUFDN0Msd0NBQXVCOztJQW9DdkIsMkNBbUJDOztJQUVELDRDQXFEQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBBd0dhbGxlcnlSZXN1bHRzRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgcHJpdmF0ZSBHQUxMRVJZX1JFU1VMVFNfTU9DSyA9IG5ldyBBcnJheSgxMDApXG4gIHByaXZhdGUgcGFnaW5hdGlvbjogYW55XG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKSB7XG4gICAgZGF0YSA9IHRoaXMuR0FMTEVSWV9SRVNVTFRTX01PQ0tcbiAgICBjb25zdCB7IHBhZ2VTaXplLCBjdXJyZW50UGFnZSB9ID0gdGhpcy5vcHRpb25zXG4gICAgdGhpcy5HQUxMRVJZX1JFU1VMVFNfTU9DSy5maWxsKFxuICAgICAge1xuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vaS5pbWd1ci5jb20vMnhZMERXUi5wbmcnLFxuICAgICAgICB0aXRsZTogJ0Nvc3RhIGRpIFNvcnJlbnRvJyxcbiAgICAgICAgY2xhc3NlczogJ2lzLXZlcnRpY2FsJyxcbiAgICAgICAgbWV0YWRhdGE6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICB7bGFiZWw6ICdBcnRpc3RhJywgdmFsdWU6ICdKb2huIERhdmllcyd9LFxuICAgICAgICAgICAgICB7dmFsdWU6ICdGb3RvZ3JhZmlhJ31cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICApXG4gICAgLy8gaWYgdGhlIGRhdGEgZG9lc24ndCBmaXQgb24gb25lIHBhZ2UsIHJlbmRlciB0aGUgcGFnaW5hdGlvbiBjb21wb25lbnRcbiAgICBpZiAoZGF0YS5sZW5ndGggPiBwYWdlU2l6ZSkgeyB0aGlzLmFkZFBhZ2luYXRpb24oY3VycmVudFBhZ2UsIE1hdGguY2VpbChkYXRhLmxlbmd0aCAvIHBhZ2VTaXplKSwgcGFnZVNpemUpIH1cbiAgICByZXR1cm4ge1xuICAgICAgcmVzOiB0aGlzLkdBTExFUllfUkVTVUxUU19NT0NLLnNsaWNlKDAsIHBhZ2VTaXplKSxcbiAgICAgIHBhZ2luYXRpb246IHRoaXMucGFnaW5hdGlvblxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBjaHVua3MoYSwgc2l6ZSkge1xuICAgIHZhciByZXN1bHRzID0gW107XG4gICAgd2hpbGUgKGEubGVuZ3RoKSB7XG4gICAgICByZXN1bHRzLnB1c2goYS5zcGxpY2UoMCwgc2l6ZSkpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfVxuXG4gIHB1YmxpYyBhZGRQYWdpbmF0aW9uID0gKHBhZ2UsIHRvdGFsUGFnZXMsIHNpemUpID0+IHtcbiAgICBjb25zdCBzaXplT3B0aW9ucyA9IFsxMiwgMjQsIDQ4XTtcbiAgICB0aGlzLnBhZ2luYXRpb24gPSB7XG4gICAgICBmaXJzdDogeyBwYXlsb2FkOiBgZ290by0kezF9YCwgY2xhc3NlczogcGFnZSA9PT0gMSA/ICdpcy1kaXNhYmxlZCcgOiAnJyB9LFxuICAgICAgcHJldjogeyBwYXlsb2FkOiBgZ290by0ke3BhZ2UgLyAxIC0gMX1gLCBjbGFzc2VzOiBwYWdlID09PSAxID8gJ2lzLWRpc2FibGVkJyA6ICcnIH0sXG4gICAgICBuZXh0OiB7IHBheWxvYWQ6IGBnb3RvLSR7cGFnZSAvIDEgKyAxfWAsIGNsYXNzZXM6IHBhZ2UgPT09IHRvdGFsUGFnZXMgPyAnaXMtZGlzYWJsZWQnIDogJycgfSxcbiAgICAgIGxhc3Q6IHsgcGF5bG9hZDogYGdvdG8tJHt0b3RhbFBhZ2VzfWAsIGNsYXNzZXM6IHBhZ2UgPT09IHRvdGFsUGFnZXMgPyAnaXMtZGlzYWJsZWQnIDogJycgfSxcbiAgICAgIGxpbmtzOiB0aGlzLm1ha2VQYWdpbmF0aW9uKHRvdGFsUGFnZXMsIHBhZ2UpLFxuICAgICAgc2VsZWN0OiB7XG4gICAgICAgIGxhYmVsOiAnTnVtZXJvIGRpIHJpc3VsdGF0aScsXG4gICAgICAgIG9wdGlvbnM6IHNpemVPcHRpb25zLm1hcChvID0+IHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdGV4dDogbyxcbiAgICAgICAgICAgIHNlbGVjdGVkOiBvID09PSBzaXplLFxuICAgICAgICAgIH07XG4gICAgICAgIH0pLFxuICAgICAgICBwYXlsb2FkOiAnc2VsZWN0LXNpemUnXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBwdWJsaWMgbWFrZVBhZ2luYXRpb24gPSAodG90YWxQYWdlcywgY3VycmVudFBhZ2UpID0+IHtcbiAgICAvKlxuICAgICAgQ2FsbGVkIGJ5IHRoaXMudW5wYWNrRGF0YSgpIHdoZW4gdGhpcy5vcHRpb25zLnBhZ2UgaXMgZGVmaW5lZC5cbiAgICAgIFJldHVybnMgdGhlIGRhdGEgZm9yIDxuNy1wYWdpbmF0aW9uPiBjb21wb25lbnQuXG4gICAgKi9cbiAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICBsZXQgbGltaXQgPSA1IC0gMTtcblxuICAgIGlmICh0b3RhbFBhZ2VzIDw9IGxpbWl0KSB7XG4gICAgICBsaW1pdCA9IHRvdGFsUGFnZXMgLSAxO1xuICAgIH1cblxuICAgIC8vIGFsd2F5cyBwdXNoIHRoZSBmaXJzdCBwYWdlXG4gICAgaWYgKGxpbWl0KSB7XG4gICAgICBsZXQgbGFzdFBhZ2U6IG51bWJlciwgZmlyc3RQYWdlOiBudW1iZXI7XG4gICAgICBpZiAoY3VycmVudFBhZ2UgPiBNYXRoLmZsb29yKGxpbWl0IC8gMikpIHtcbiAgICAgICAgaWYgKHRvdGFsUGFnZXMgPT09IDIpIHtcbiAgICAgICAgICBsYXN0UGFnZSA9IHRvdGFsUGFnZXM7XG4gICAgICAgICAgZmlyc3RQYWdlID0gMTtcbiAgICAgICAgICAvLyB3aGVuIGN1cnJlbnRQYWdlIGlzIGFmdGVyIGhhbGYtcG9pbnRcbiAgICAgICAgICAvLyAoZXhhbXBsZTogWyAxNCBdWyAxNSBdWyExNiFdWyAxNyBdWyAxOCBdKVxuICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnRQYWdlIDwgKHRvdGFsUGFnZXMgLSBNYXRoLmZsb29yKGxpbWl0IC8gMikpKSB7XG4gICAgICAgICAgbGFzdFBhZ2UgPSBjdXJyZW50UGFnZSAvIDEgKyBNYXRoLmZsb29yKGxpbWl0IC8gMik7XG4gICAgICAgICAgZmlyc3RQYWdlID0gY3VycmVudFBhZ2UgLyAxIC0gTWF0aC5mbG9vcihsaW1pdCAvIDIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxhc3RQYWdlID0gdG90YWxQYWdlcztcbiAgICAgICAgICBmaXJzdFBhZ2UgPSBjdXJyZW50UGFnZSAtIGxpbWl0ICsgKHRvdGFsUGFnZXMgLSBjdXJyZW50UGFnZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHdoZW4gY3VycmVudFBhZ2UgaXMgYmVmb3JlIGhhbGYtcG9pbnRcbiAgICAgICAgLy8gKGV4YW1wbGU6IFsgMSBdWyEyIV1bIDMgXVsgNCBdWyA1IF0pXG4gICAgICAgIGxhc3RQYWdlID0gbGltaXQgKyAxO1xuICAgICAgICBmaXJzdFBhZ2UgPSAxO1xuICAgICAgfVxuXG4gICAgICBmb3IgKGxldCBpID0gZmlyc3RQYWdlOyBpIDw9IGxhc3RQYWdlOyBpKyspIHtcbiAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgIHRleHQ6IFN0cmluZyhpKSxcbiAgICAgICAgICBwYXlsb2FkOiAncGFnZS0nICsgU3RyaW5nKGkpLFxuICAgICAgICAgIGNsYXNzZXM6IGN1cnJlbnRQYWdlID09PSBpID8gJ2lzLWFjdGl2ZScgOiAnJ1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICB0ZXh0OiAnMScsXG4gICAgICAgIHBheWxvYWQ6ICdwYWdlLTEnLFxuICAgICAgICBjbGFzc2VzOiBjdXJyZW50UGFnZSA9PT0gMSA/ICdpcy1hY3RpdmUnIDogJydcbiAgICAgIH0pO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCB0b3RhbFBhZ2VzOyBpKyspIHtcbiAgICAgICAgcmVzdWx0LnB1c2goeyB0ZXh0OiBTdHJpbmcoaSArIDEpLCBwYXlsb2FkOiAncGFnZS0nICsgU3RyaW5nKGkgKyAxKSwgY2xhc3NlczogY3VycmVudFBhZ2UgPT09IGkgKyAxID8gJ2lzLWFjdGl2ZScgOiAnJyB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufSJdfQ==