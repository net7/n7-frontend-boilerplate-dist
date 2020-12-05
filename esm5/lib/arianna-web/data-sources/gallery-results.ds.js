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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS1yZXN1bHRzLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2RhdGEtc291cmNlcy9nYWxsZXJ5LXJlc3VsdHMuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUUvQztJQUF3QyxzQ0FBVTtJQUFsRDtRQUFBLHFFQW9HQztRQTVFUSxtQkFBYSxHQUFHLFVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxJQUFJO1lBQzVDLElBQU0sV0FBVyxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNqQyxLQUFJLENBQUMsVUFBVSxHQUFHO2dCQUNoQixLQUFLLEVBQUUsRUFBRSxPQUFPLEVBQUUsVUFBUSxDQUFHLEVBQUUsT0FBTyxFQUFFLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO2dCQUN6RSxJQUFJLEVBQUUsRUFBRSxPQUFPLEVBQUUsV0FBUSxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtnQkFDbkYsSUFBSSxFQUFFLEVBQUUsT0FBTyxFQUFFLFdBQVEsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxLQUFLLFVBQVUsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7Z0JBQzVGLElBQUksRUFBRSxFQUFFLE9BQU8sRUFBRSxVQUFRLFVBQVksRUFBRSxPQUFPLEVBQUUsSUFBSSxLQUFLLFVBQVUsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxF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QUFVLEdBb0dqRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgQXdHYWxsZXJ5UmVzdWx0c0RTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XHJcbiAgcHJpdmF0ZSBwYWdpbmF0aW9uOiBhbnlcclxuXHJcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKSB7XHJcbiAgICBpZiAoIWRhdGEpIHJldHVybiBudWxsO1xyXG4gICAgY29uc3QgeyBwYWdlU2l6ZSwgY3VycmVudFBhZ2UgfSA9IHRoaXMub3B0aW9ucztcclxuICAgIC8vIGlmIHRoZSBkYXRhIGRvZXNuJ3QgZml0IG9uIG9uZSBwYWdlLCByZW5kZXIgdGhlIHBhZ2luYXRpb24gY29tcG9uZW50XHJcbiAgICBpZiAoZGF0YS5sZW5ndGggPiBwYWdlU2l6ZSkge1xyXG4gICAgICB0aGlzLmFkZFBhZ2luYXRpb24oY3VycmVudFBhZ2UsIE1hdGguY2VpbChkYXRhLmxlbmd0aCAvIHBhZ2VTaXplKSwgcGFnZVNpemUpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcmVzOiBkYXRhLnNsaWNlKDAsIHBhZ2VTaXplKSxcclxuICAgICAgcGFnaW5hdGlvbjogdGhpcy5wYWdpbmF0aW9uXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNodW5rcyhhLCBzaXplKSB7XHJcbiAgICBjb25zdCByZXN1bHRzID0gW107XHJcbiAgICB3aGlsZSAoYS5sZW5ndGgpIHtcclxuICAgICAgcmVzdWx0cy5wdXNoKGEuc3BsaWNlKDAsIHNpemUpKTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHRzO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFkZFBhZ2luYXRpb24gPSAocGFnZSwgdG90YWxQYWdlcywgc2l6ZSkgPT4ge1xyXG4gICAgY29uc3Qgc2l6ZU9wdGlvbnMgPSBbMTIsIDI0LCA0OF07XHJcbiAgICB0aGlzLnBhZ2luYXRpb24gPSB7XHJcbiAgICAgIGZpcnN0OiB7IHBheWxvYWQ6IGBnb3RvLSR7MX1gLCBjbGFzc2VzOiBwYWdlID09PSAxID8gJ2lzLWRpc2FibGVkJyA6ICcnIH0sXHJcbiAgICAgIHByZXY6IHsgcGF5bG9hZDogYGdvdG8tJHtwYWdlIC8gMSAtIDF9YCwgY2xhc3NlczogcGFnZSA9PT0gMSA/ICdpcy1kaXNhYmxlZCcgOiAnJyB9LFxyXG4gICAgICBuZXh0OiB7IHBheWxvYWQ6IGBnb3RvLSR7cGFnZSAvIDEgKyAxfWAsIGNsYXNzZXM6IHBhZ2UgPT09IHRvdGFsUGFnZXMgPyAnaXMtZGlzYWJsZWQnIDogJycgfSxcclxuICAgICAgbGFzdDogeyBwYXlsb2FkOiBgZ290by0ke3RvdGFsUGFnZXN9YCwgY2xhc3NlczogcGFnZSA9PT0gdG90YWxQYWdlcyA/ICdpcy1kaXNhYmxlZCcgOiAnJyB9LFxyXG4gICAgICBsaW5rczogdGhpcy5tYWtlUGFnaW5hdGlvbih0b3RhbFBhZ2VzLCBwYWdlKSxcclxuICAgICAgc2VsZWN0OiB7XHJcbiAgICAgICAgbGFiZWw6ICdOdW1lcm8gZGkgcmlzdWx0YXRpJyxcclxuICAgICAgICBvcHRpb25zOiBzaXplT3B0aW9ucy5tYXAoKG8pID0+ICh7XHJcbiAgICAgICAgICB0ZXh0OiBvLFxyXG4gICAgICAgICAgc2VsZWN0ZWQ6IG8gPT09IHNpemUsXHJcbiAgICAgICAgfSkpLFxyXG4gICAgICAgIHBheWxvYWQ6ICdzZWxlY3Qtc2l6ZSdcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbWFrZVBhZ2luYXRpb24gPSAodG90YWxQYWdlcywgY3VycmVudFBhZ2UpID0+IHtcclxuICAgIC8qXHJcbiAgICAgIENhbGxlZCBieSB0aGlzLnVucGFja0RhdGEoKSB3aGVuIHRoaXMub3B0aW9ucy5wYWdlIGlzIGRlZmluZWQuXHJcbiAgICAgIFJldHVybnMgdGhlIGRhdGEgZm9yIDxuNy1wYWdpbmF0aW9uPiBjb21wb25lbnQuXHJcbiAgICAqL1xyXG4gICAgY29uc3QgcmVzdWx0ID0gW107XHJcbiAgICBsZXQgbGltaXQgPSA1IC0gMTtcclxuXHJcbiAgICBpZiAodG90YWxQYWdlcyA8PSBsaW1pdCkge1xyXG4gICAgICBsaW1pdCA9IHRvdGFsUGFnZXMgLSAxO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGFsd2F5cyBwdXNoIHRoZSBmaXJzdCBwYWdlXHJcbiAgICBpZiAobGltaXQpIHtcclxuICAgICAgbGV0IGxhc3RQYWdlOiBudW1iZXI7IGxldFxyXG4gICAgICAgIGZpcnN0UGFnZTogbnVtYmVyO1xyXG4gICAgICBpZiAoY3VycmVudFBhZ2UgPiBNYXRoLmZsb29yKGxpbWl0IC8gMikpIHtcclxuICAgICAgICBpZiAodG90YWxQYWdlcyA9PT0gMikge1xyXG4gICAgICAgICAgbGFzdFBhZ2UgPSB0b3RhbFBhZ2VzO1xyXG4gICAgICAgICAgZmlyc3RQYWdlID0gMTtcclxuICAgICAgICAgIC8vIHdoZW4gY3VycmVudFBhZ2UgaXMgYWZ0ZXIgaGFsZi1wb2ludFxyXG4gICAgICAgICAgLy8gKGV4YW1wbGU6IFsgMTQgXVsgMTUgXVshMTYhXVsgMTcgXVsgMTggXSlcclxuICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnRQYWdlIDwgKHRvdGFsUGFnZXMgLSBNYXRoLmZsb29yKGxpbWl0IC8gMikpKSB7XHJcbiAgICAgICAgICBsYXN0UGFnZSA9IGN1cnJlbnRQYWdlIC8gMSArIE1hdGguZmxvb3IobGltaXQgLyAyKTtcclxuICAgICAgICAgIGZpcnN0UGFnZSA9IGN1cnJlbnRQYWdlIC8gMSAtIE1hdGguZmxvb3IobGltaXQgLyAyKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbGFzdFBhZ2UgPSB0b3RhbFBhZ2VzO1xyXG4gICAgICAgICAgZmlyc3RQYWdlID0gY3VycmVudFBhZ2UgLSBsaW1pdCArICh0b3RhbFBhZ2VzIC0gY3VycmVudFBhZ2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyB3aGVuIGN1cnJlbnRQYWdlIGlzIGJlZm9yZSBoYWxmLXBvaW50XHJcbiAgICAgICAgLy8gKGV4YW1wbGU6IFsgMSBdWyEyIV1bIDMgXVsgNCBdWyA1IF0pXHJcbiAgICAgICAgbGFzdFBhZ2UgPSBsaW1pdCArIDE7XHJcbiAgICAgICAgZmlyc3RQYWdlID0gMTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBsdXNwbHVzXHJcbiAgICAgIGZvciAobGV0IGkgPSBmaXJzdFBhZ2U7IGkgPD0gbGFzdFBhZ2U7IGkrKykge1xyXG4gICAgICAgIHJlc3VsdC5wdXNoKHtcclxuICAgICAgICAgIHRleHQ6IFN0cmluZyhpKSxcclxuICAgICAgICAgIHBheWxvYWQ6IGBwYWdlLSR7U3RyaW5nKGkpfWAsXHJcbiAgICAgICAgICBjbGFzc2VzOiBjdXJyZW50UGFnZSA9PT0gaSA/ICdpcy1hY3RpdmUnIDogJydcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVzdWx0LnB1c2goe1xyXG4gICAgICAgIHRleHQ6ICcxJyxcclxuICAgICAgICBwYXlsb2FkOiAncGFnZS0xJyxcclxuICAgICAgICBjbGFzc2VzOiBjdXJyZW50UGFnZSA9PT0gMSA/ICdpcy1hY3RpdmUnIDogJydcclxuICAgICAgfSk7XHJcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wbHVzcGx1c1xyXG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHRvdGFsUGFnZXM7IGkrKykge1xyXG4gICAgICAgIHJlc3VsdC5wdXNoKHsgdGV4dDogU3RyaW5nKGkgKyAxKSwgcGF5bG9hZDogYHBhZ2UtJHtTdHJpbmcoaSArIDEpfWAsIGNsYXNzZXM6IGN1cnJlbnRQYWdlID09PSBpICsgMSA/ICdpcy1hY3RpdmUnIDogJycgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG59XHJcbiJdfQ==