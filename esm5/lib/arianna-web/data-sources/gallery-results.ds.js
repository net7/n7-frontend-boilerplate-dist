import { __extends } from "tslib";
import { DataSource } from '@n7-frontend/core';
var AwGalleryResultsDS = /** @class */ (function (_super) {
    __extends(AwGalleryResultsDS, _super);
    function AwGalleryResultsDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.addPagination = function (page, totalPages, size) {
            var sizeOptions = [12, 24, 48];
            _this.pagination = {
                first: { payload: "goto-" + 1, classes: page === 1 ? 'is-disabled' : '' },
                prev: { payload: "goto-" + (page / 1 - 1), classes: page === 1 ? 'is-disabled' : '' },
                next: { payload: "goto-" + (page / 1 + 1), classes: page === totalPages ? 'is-disabled' : '' },
                last: { payload: "goto-" + totalPages, classes: page === totalPages ? 'is-disabled' : '' },
                links: _this.makePagination(totalPages, page),
                select: {
                    label: 'Numero di risultati',
                    options: sizeOptions.map(function (o) { return ({
                        text: o,
                        selected: o === size,
                    }); }),
                    payload: 'select-size'
                },
            };
        };
        _this.makePagination = function (totalPages, currentPage) {
            /*
              Called by this.unpackData() when this.options.page is defined.
              Returns the data for <n7-pagination> component.
            */
            var result = [];
            var limit = 5 - 1;
            if (totalPages <= limit) {
                limit = totalPages - 1;
            }
            // always push the first page
            if (limit) {
                var lastPage = void 0;
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
                // eslint-disable-next-line no-plusplus
                for (var i = firstPage; i <= lastPage; i++) {
                    result.push({
                        text: String(i),
                        payload: "page-" + String(i),
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
                // eslint-disable-next-line no-plusplus
                for (var i = 1; i < totalPages; i++) {
                    result.push({ text: String(i + 1), payload: "page-" + String(i + 1), classes: currentPage === i + 1 ? 'is-active' : '' });
                }
            }
            return result;
        };
        return _this;
    }
    AwGalleryResultsDS.prototype.transform = function (data) {
        if (!data)
            return null;
        var _a = this.options, pageSize = _a.pageSize, currentPage = _a.currentPage;
        // if the data doesn't fit on one page, render the pagination component
        if (data.length > pageSize) {
            this.addPagination(currentPage, Math.ceil(data.length / pageSize), pageSize);
        }
        return {
            res: data.slice(0, pageSize),
            pagination: this.pagination
        };
    };
    AwGalleryResultsDS.prototype.chunks = function (a, size) {
        var results = [];
        while (a.length) {
            results.push(a.splice(0, size));
        }
        return results;
    };
    return AwGalleryResultsDS;
}(DataSource));
export { AwGalleryResultsDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS1yZXN1bHRzLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2RhdGEtc291cmNlcy9nYWxsZXJ5LXJlc3VsdHMuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUUvQztJQUF3QyxzQ0FBVTtJQUFsRDtRQUFBLHFFQW9HQztRQTVFUSxtQkFBYSxHQUFHLFVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxJQUFJO1lBQzVDLElBQU0sV0FBVyxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNqQyxLQUFJLENBQUMsVUFBVSxHQUFHO2dCQUNoQixLQUFLLEVBQUUsRUFBRSxPQUFPLEVBQUUsVUFBUSxDQUFHLEVBQUUsT0FBTyxFQUFFLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO2dCQUN6RSxJQUFJLEVBQUUsRUFBRSxPQUFPLEVBQUUsV0FBUSxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtnQkFDbkYsSUFBSSxFQUFFLEVBQUUsT0FBTyxFQUFFLFdBQVEsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxLQUFLLFVBQVUsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7Z0JBQzVGLElBQUksRUFBRSxFQUFFLE9BQU8sRUFBRSxVQUFRLFVBQVksRUFBRSxPQUFPLEVBQUUsSUFBSSxLQUFLLFVBQVUsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxF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QUFVLEdBb0dqRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBBd0dhbGxlcnlSZXN1bHRzRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgcHJpdmF0ZSBwYWdpbmF0aW9uOiBhbnlcblxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpIHtcbiAgICBpZiAoIWRhdGEpIHJldHVybiBudWxsO1xuICAgIGNvbnN0IHsgcGFnZVNpemUsIGN1cnJlbnRQYWdlIH0gPSB0aGlzLm9wdGlvbnM7XG4gICAgLy8gaWYgdGhlIGRhdGEgZG9lc24ndCBmaXQgb24gb25lIHBhZ2UsIHJlbmRlciB0aGUgcGFnaW5hdGlvbiBjb21wb25lbnRcbiAgICBpZiAoZGF0YS5sZW5ndGggPiBwYWdlU2l6ZSkge1xuICAgICAgdGhpcy5hZGRQYWdpbmF0aW9uKGN1cnJlbnRQYWdlLCBNYXRoLmNlaWwoZGF0YS5sZW5ndGggLyBwYWdlU2l6ZSksIHBhZ2VTaXplKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlczogZGF0YS5zbGljZSgwLCBwYWdlU2l6ZSksXG4gICAgICBwYWdpbmF0aW9uOiB0aGlzLnBhZ2luYXRpb25cbiAgICB9O1xuICB9XG5cbiAgcHVibGljIGNodW5rcyhhLCBzaXplKSB7XG4gICAgY29uc3QgcmVzdWx0cyA9IFtdO1xuICAgIHdoaWxlIChhLmxlbmd0aCkge1xuICAgICAgcmVzdWx0cy5wdXNoKGEuc3BsaWNlKDAsIHNpemUpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH1cblxuICBwdWJsaWMgYWRkUGFnaW5hdGlvbiA9IChwYWdlLCB0b3RhbFBhZ2VzLCBzaXplKSA9PiB7XG4gICAgY29uc3Qgc2l6ZU9wdGlvbnMgPSBbMTIsIDI0LCA0OF07XG4gICAgdGhpcy5wYWdpbmF0aW9uID0ge1xuICAgICAgZmlyc3Q6IHsgcGF5bG9hZDogYGdvdG8tJHsxfWAsIGNsYXNzZXM6IHBhZ2UgPT09IDEgPyAnaXMtZGlzYWJsZWQnIDogJycgfSxcbiAgICAgIHByZXY6IHsgcGF5bG9hZDogYGdvdG8tJHtwYWdlIC8gMSAtIDF9YCwgY2xhc3NlczogcGFnZSA9PT0gMSA/ICdpcy1kaXNhYmxlZCcgOiAnJyB9LFxuICAgICAgbmV4dDogeyBwYXlsb2FkOiBgZ290by0ke3BhZ2UgLyAxICsgMX1gLCBjbGFzc2VzOiBwYWdlID09PSB0b3RhbFBhZ2VzID8gJ2lzLWRpc2FibGVkJyA6ICcnIH0sXG4gICAgICBsYXN0OiB7IHBheWxvYWQ6IGBnb3RvLSR7dG90YWxQYWdlc31gLCBjbGFzc2VzOiBwYWdlID09PSB0b3RhbFBhZ2VzID8gJ2lzLWRpc2FibGVkJyA6ICcnIH0sXG4gICAgICBsaW5rczogdGhpcy5tYWtlUGFnaW5hdGlvbih0b3RhbFBhZ2VzLCBwYWdlKSxcbiAgICAgIHNlbGVjdDoge1xuICAgICAgICBsYWJlbDogJ051bWVybyBkaSByaXN1bHRhdGknLFxuICAgICAgICBvcHRpb25zOiBzaXplT3B0aW9ucy5tYXAoKG8pID0+ICh7XG4gICAgICAgICAgdGV4dDogbyxcbiAgICAgICAgICBzZWxlY3RlZDogbyA9PT0gc2l6ZSxcbiAgICAgICAgfSkpLFxuICAgICAgICBwYXlsb2FkOiAnc2VsZWN0LXNpemUnXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBwdWJsaWMgbWFrZVBhZ2luYXRpb24gPSAodG90YWxQYWdlcywgY3VycmVudFBhZ2UpID0+IHtcbiAgICAvKlxuICAgICAgQ2FsbGVkIGJ5IHRoaXMudW5wYWNrRGF0YSgpIHdoZW4gdGhpcy5vcHRpb25zLnBhZ2UgaXMgZGVmaW5lZC5cbiAgICAgIFJldHVybnMgdGhlIGRhdGEgZm9yIDxuNy1wYWdpbmF0aW9uPiBjb21wb25lbnQuXG4gICAgKi9cbiAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICBsZXQgbGltaXQgPSA1IC0gMTtcblxuICAgIGlmICh0b3RhbFBhZ2VzIDw9IGxpbWl0KSB7XG4gICAgICBsaW1pdCA9IHRvdGFsUGFnZXMgLSAxO1xuICAgIH1cblxuICAgIC8vIGFsd2F5cyBwdXNoIHRoZSBmaXJzdCBwYWdlXG4gICAgaWYgKGxpbWl0KSB7XG4gICAgICBsZXQgbGFzdFBhZ2U6IG51bWJlcjsgbGV0XG4gICAgICAgIGZpcnN0UGFnZTogbnVtYmVyO1xuICAgICAgaWYgKGN1cnJlbnRQYWdlID4gTWF0aC5mbG9vcihsaW1pdCAvIDIpKSB7XG4gICAgICAgIGlmICh0b3RhbFBhZ2VzID09PSAyKSB7XG4gICAgICAgICAgbGFzdFBhZ2UgPSB0b3RhbFBhZ2VzO1xuICAgICAgICAgIGZpcnN0UGFnZSA9IDE7XG4gICAgICAgICAgLy8gd2hlbiBjdXJyZW50UGFnZSBpcyBhZnRlciBoYWxmLXBvaW50XG4gICAgICAgICAgLy8gKGV4YW1wbGU6IFsgMTQgXVsgMTUgXVshMTYhXVsgMTcgXVsgMTggXSlcbiAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50UGFnZSA8ICh0b3RhbFBhZ2VzIC0gTWF0aC5mbG9vcihsaW1pdCAvIDIpKSkge1xuICAgICAgICAgIGxhc3RQYWdlID0gY3VycmVudFBhZ2UgLyAxICsgTWF0aC5mbG9vcihsaW1pdCAvIDIpO1xuICAgICAgICAgIGZpcnN0UGFnZSA9IGN1cnJlbnRQYWdlIC8gMSAtIE1hdGguZmxvb3IobGltaXQgLyAyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsYXN0UGFnZSA9IHRvdGFsUGFnZXM7XG4gICAgICAgICAgZmlyc3RQYWdlID0gY3VycmVudFBhZ2UgLSBsaW1pdCArICh0b3RhbFBhZ2VzIC0gY3VycmVudFBhZ2UpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyB3aGVuIGN1cnJlbnRQYWdlIGlzIGJlZm9yZSBoYWxmLXBvaW50XG4gICAgICAgIC8vIChleGFtcGxlOiBbIDEgXVshMiFdWyAzIF1bIDQgXVsgNSBdKVxuICAgICAgICBsYXN0UGFnZSA9IGxpbWl0ICsgMTtcbiAgICAgICAgZmlyc3RQYWdlID0gMTtcbiAgICAgIH1cblxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBsdXNwbHVzXG4gICAgICBmb3IgKGxldCBpID0gZmlyc3RQYWdlOyBpIDw9IGxhc3RQYWdlOyBpKyspIHtcbiAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgIHRleHQ6IFN0cmluZyhpKSxcbiAgICAgICAgICBwYXlsb2FkOiBgcGFnZS0ke1N0cmluZyhpKX1gLFxuICAgICAgICAgIGNsYXNzZXM6IGN1cnJlbnRQYWdlID09PSBpID8gJ2lzLWFjdGl2ZScgOiAnJ1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICB0ZXh0OiAnMScsXG4gICAgICAgIHBheWxvYWQ6ICdwYWdlLTEnLFxuICAgICAgICBjbGFzc2VzOiBjdXJyZW50UGFnZSA9PT0gMSA/ICdpcy1hY3RpdmUnIDogJydcbiAgICAgIH0pO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBsdXNwbHVzXG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHRvdGFsUGFnZXM7IGkrKykge1xuICAgICAgICByZXN1bHQucHVzaCh7IHRleHQ6IFN0cmluZyhpICsgMSksIHBheWxvYWQ6IGBwYWdlLSR7U3RyaW5nKGkgKyAxKX1gLCBjbGFzc2VzOiBjdXJyZW50UGFnZSA9PT0gaSArIDEgPyAnaXMtYWN0aXZlJyA6ICcnIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG4iXX0=