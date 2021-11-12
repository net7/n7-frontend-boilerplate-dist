import { __assign, __extends } from "tslib";
import { DataSource, _t } from '@n7-frontend/core';
var SmartPaginationDS = /** @class */ (function (_super) {
    __extends(SmartPaginationDS, _super);
    function SmartPaginationDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.paginationBuilder = function (tp, cp, pl, m, href, qp) {
            var result = [];
            /*
              tp - total pages
              cp - current page
              pl - page limit
              m - pagination mode (href or payloads)
              href - href for anchor wrapper
              qp - query params for pagination
            */
            var limit = pl;
            if (tp <= limit) {
                limit = tp - 1;
            }
            if (limit) {
                var lp = void 0; // last page
                var fp = void 0; // first page
                if (cp > Math.floor(limit / 2)) {
                    if (tp === 2) {
                        lp = tp;
                        fp = 1;
                        // when currentPage is after half-point
                        // (example: [ 14 ][ 15 ][!16!][ 17 ][ 18 ])
                    }
                    else if (cp < (tp - Math.floor(limit / 2))) {
                        lp = cp / 1 + Math.floor(limit / 2);
                        fp = cp / 1 - Math.floor(limit / 2);
                    }
                    else {
                        lp = tp;
                        fp = cp - limit + (tp - cp);
                    }
                }
                else {
                    // when currentPage is before half-point
                    // (example: [ 1 ][!2!][ 3 ][ 4 ][ 5 ])
                    lp = limit + 1;
                    fp = 1;
                }
                for (var i = fp; i <= lp; i += 1) {
                    result.push({
                        text: String(i),
                        classes: cp === i ? 'is-active' : '',
                        anchor: cp !== i ? _this._getPaginationAnchor(i, m, href, qp) : null,
                    });
                }
            }
            else {
                result.push({
                    text: '1',
                    classes: cp === 1 ? 'is-active' : '',
                    anchor: cp !== 1 ? _this._getPaginationAnchor(1, m, href, qp) : null,
                });
                for (var i = 1; i < tp; i += 1) {
                    result.push({
                        text: String(i + 1),
                        classes: cp === i + 1 ? 'is-active' : '',
                        anchor: cp !== i + 1 ? _this._getPaginationAnchor(i + 1, m, href, qp) : null,
                    });
                }
            }
            return {
                links: result,
                first: {
                    classes: cp === 1 ? 'is-disabled' : '',
                    anchor: cp !== 1 ? _this._getPaginationAnchor(1, m, href, qp) : null,
                },
                prev: {
                    classes: cp === 1 ? 'is-disabled' : '',
                    anchor: cp !== 1 ? _this._getPaginationAnchor(cp / 1 - 1, m, href, qp) : null,
                },
                next: {
                    classes: cp === tp ? 'is-disabled' : '',
                    anchor: cp !== tp ? _this._getPaginationAnchor(cp / 1 + 1, m, href, qp) : null,
                },
                last: {
                    classes: cp === tp ? 'is-disabled' : '',
                    anchor: cp !== tp ? _this._getPaginationAnchor(tp, m, href, qp) : null,
                },
            };
        };
        return _this;
    }
    SmartPaginationDS.prototype.transform = function (data) {
        var totalPages = data.totalPages, currentPage = data.currentPage, pageLimit = data.pageLimit, sizes = data.sizes;
        var _a = this.options, mode = _a.mode, href = _a.href, queryParams = _a.queryParams;
        // ===== WARNINGS =====
        if (!['href', 'payload'].includes(mode)) {
            console.warn('(smart-pagination) The "mode" option is incorrect. Please specify "href" or "payload" as the mode option.');
        }
        var _b = this.paginationBuilder(totalPages, +currentPage, pageLimit, mode, href, queryParams), links = _b.links, first = _b.first, prev = _b.prev, next = _b.next, last = _b.last;
        return {
            first: first,
            prev: prev,
            next: next,
            last: last,
            links: links,
            select: sizes ? {
                label: sizes.label || _t('search#resultsamount'),
                options: sizes.list.map(function (s) { return ({
                    text: s,
                    selected: s === sizes.active,
                }); }),
                payload: 'select-size',
            } : null,
        };
    };
    SmartPaginationDS.prototype._getPaginationAnchor = function (page, mode, href, queryParams) {
        switch (mode) {
            case 'payload':
                return {
                    payload: { source: 'pagination', page: page },
                };
            case 'href':
                return {
                    href: queryParams ? href : href + page,
                    queryParams: queryParams ? __assign(__assign({}, queryParams), { page: page }) : null,
                };
            default:
                break;
        }
        return {};
    };
    return SmartPaginationDS;
}(DataSource));
export { SmartPaginationDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtcGFnaW5hdGlvbi5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24vZGF0YS1zb3VyY2VzL3NtYXJ0LXBhZ2luYXRpb24uZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFbkQ7SUFBdUMscUNBQVU7SUFBakQ7UUFBQSxxRUFvSUM7UUFsR1MsdUJBQWlCLEdBQUcsVUFBQyxFQUFFLEVBQUUsRUFBVSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUU7WUFDMUQsSUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDO1lBQ2xCOzs7Ozs7O2NBT0U7WUFDRixJQUFJLEtBQUssR0FBRyxFQUFFLENBQUM7WUFDZixJQUFJLEVBQUUsSUFBSSxLQUFLLEVBQUU7Z0JBQ2YsS0FBSyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7YUFDaEI7WUFDRCxJQUFJLEtBQUssRUFBRTtnQkFDVCxJQUNFLEVBQUUsU0FBUSxDQUFDLENBQUMsWUFBWTtnQkFDMUIsSUFBSSxFQUFFLFNBQVEsQ0FBQyxDQUFDLGFBQWE7Z0JBQzdCLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFFO29CQUM5QixJQUFJLEVBQUUsS0FBSyxDQUFDLEVBQUU7d0JBQ1osRUFBRSxHQUFHLEVBQUUsQ0FBQzt3QkFDUixFQUFFLEdBQUcsQ0FBQyxDQUFDO3dCQUNQLHVDQUF1Qzt3QkFDdkMsNENBQTRDO3FCQUM3Qzt5QkFBTSxJQUFJLEVBQUUsR0FBRyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFO3dCQUM1QyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxJQUFJLENB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InNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UsIF90IH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNtYXJ0UGFnaW5hdGlvbkRTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XHJcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKSB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIHRvdGFsUGFnZXMsIGN1cnJlbnRQYWdlLCBwYWdlTGltaXQsIHNpemVzXHJcbiAgICB9ID0gZGF0YTtcclxuICAgIGNvbnN0IHsgbW9kZSwgaHJlZiwgcXVlcnlQYXJhbXMgfSA9IHRoaXMub3B0aW9ucztcclxuICAgIC8vID09PT09IFdBUk5JTkdTID09PT09XHJcbiAgICBpZiAoIVsnaHJlZicsICdwYXlsb2FkJ10uaW5jbHVkZXMobW9kZSkpIHtcclxuICAgICAgY29uc29sZS53YXJuKCcoc21hcnQtcGFnaW5hdGlvbikgVGhlIFwibW9kZVwiIG9wdGlvbiBpcyBpbmNvcnJlY3QuIFBsZWFzZSBzcGVjaWZ5IFwiaHJlZlwiIG9yIFwicGF5bG9hZFwiIGFzIHRoZSBtb2RlIG9wdGlvbi4nKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7XHJcbiAgICAgIGxpbmtzLCBmaXJzdCwgcHJldiwgbmV4dCwgbGFzdCxcclxuICAgIH0gPSB0aGlzLnBhZ2luYXRpb25CdWlsZGVyKFxyXG4gICAgICB0b3RhbFBhZ2VzLCArY3VycmVudFBhZ2UsIHBhZ2VMaW1pdCxcclxuICAgICAgbW9kZSwgaHJlZiwgcXVlcnlQYXJhbXMsXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZmlyc3QsXHJcbiAgICAgIHByZXYsXHJcbiAgICAgIG5leHQsXHJcbiAgICAgIGxhc3QsXHJcbiAgICAgIGxpbmtzLFxyXG4gICAgICBzZWxlY3Q6IHNpemVzID8ge1xyXG4gICAgICAgIGxhYmVsOiBzaXplcy5sYWJlbCB8fCBfdCgnc2VhcmNoI3Jlc3VsdHNhbW91bnQnKSxcclxuICAgICAgICBvcHRpb25zOiBzaXplcy5saXN0Lm1hcCgocykgPT4gKHtcclxuICAgICAgICAgIHRleHQ6IHMsXHJcbiAgICAgICAgICBzZWxlY3RlZDogcyA9PT0gc2l6ZXMuYWN0aXZlLFxyXG4gICAgICAgIH0pKSxcclxuICAgICAgICBwYXlsb2FkOiAnc2VsZWN0LXNpemUnLFxyXG4gICAgICB9IDogbnVsbCxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHBhZ2luYXRpb25CdWlsZGVyID0gKHRwLCBjcDogbnVtYmVyLCBwbCwgbSwgaHJlZiwgcXApID0+IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xyXG4gICAgLypcclxuICAgICAgdHAgLSB0b3RhbCBwYWdlc1xyXG4gICAgICBjcCAtIGN1cnJlbnQgcGFnZVxyXG4gICAgICBwbCAtIHBhZ2UgbGltaXRcclxuICAgICAgbSAtIHBhZ2luYXRpb24gbW9kZSAoaHJlZiBvciBwYXlsb2FkcylcclxuICAgICAgaHJlZiAtIGhyZWYgZm9yIGFuY2hvciB3cmFwcGVyXHJcbiAgICAgIHFwIC0gcXVlcnkgcGFyYW1zIGZvciBwYWdpbmF0aW9uXHJcbiAgICAqL1xyXG4gICAgbGV0IGxpbWl0ID0gcGw7XHJcbiAgICBpZiAodHAgPD0gbGltaXQpIHtcclxuICAgICAgbGltaXQgPSB0cCAtIDE7XHJcbiAgICB9XHJcbiAgICBpZiAobGltaXQpIHtcclxuICAgICAgbGV0XHJcbiAgICAgICAgbHA6IG51bWJlcjsgLy8gbGFzdCBwYWdlXHJcbiAgICAgIGxldCBmcDogbnVtYmVyOyAvLyBmaXJzdCBwYWdlXHJcbiAgICAgIGlmIChjcCA+IE1hdGguZmxvb3IobGltaXQgLyAyKSkge1xyXG4gICAgICAgIGlmICh0cCA9PT0gMikge1xyXG4gICAgICAgICAgbHAgPSB0cDtcclxuICAgICAgICAgIGZwID0gMTtcclxuICAgICAgICAgIC8vIHdoZW4gY3VycmVudFBhZ2UgaXMgYWZ0ZXIgaGFsZi1wb2ludFxyXG4gICAgICAgICAgLy8gKGV4YW1wbGU6IFsgMTQgXVsgMTUgXVshMTYhXVsgMTcgXVsgMTggXSlcclxuICAgICAgICB9IGVsc2UgaWYgKGNwIDwgKHRwIC0gTWF0aC5mbG9vcihsaW1pdCAvIDIpKSkge1xyXG4gICAgICAgICAgbHAgPSBjcCAvIDEgKyBNYXRoLmZsb29yKGxpbWl0IC8gMik7XHJcbiAgICAgICAgICBmcCA9IGNwIC8gMSAtIE1hdGguZmxvb3IobGltaXQgLyAyKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbHAgPSB0cDtcclxuICAgICAgICAgIGZwID0gY3AgLSBsaW1pdCArICh0cCAtIGNwKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gd2hlbiBjdXJyZW50UGFnZSBpcyBiZWZvcmUgaGFsZi1wb2ludFxyXG4gICAgICAgIC8vIChleGFtcGxlOiBbIDEgXVshMiFdWyAzIF1bIDQgXVsgNSBdKVxyXG4gICAgICAgIGxwID0gbGltaXQgKyAxO1xyXG4gICAgICAgIGZwID0gMTtcclxuICAgICAgfVxyXG4gICAgICBmb3IgKGxldCBpID0gZnA7IGkgPD0gbHA7IGkgKz0gMSkge1xyXG4gICAgICAgIHJlc3VsdC5wdXNoKHtcclxuICAgICAgICAgIHRleHQ6IFN0cmluZyhpKSxcclxuICAgICAgICAgIGNsYXNzZXM6IGNwID09PSBpID8gJ2lzLWFjdGl2ZScgOiAnJyxcclxuICAgICAgICAgIGFuY2hvcjogY3AgIT09IGkgPyB0aGlzLl9nZXRQYWdpbmF0aW9uQW5jaG9yKGksIG0sIGhyZWYsIHFwKSA6IG51bGwsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJlc3VsdC5wdXNoKHtcclxuICAgICAgICB0ZXh0OiAnMScsXHJcbiAgICAgICAgY2xhc3NlczogY3AgPT09IDEgPyAnaXMtYWN0aXZlJyA6ICcnLFxyXG4gICAgICAgIGFuY2hvcjogY3AgIT09IDEgPyB0aGlzLl9nZXRQYWdpbmF0aW9uQW5jaG9yKDEsIG0sIGhyZWYsIHFwKSA6IG51bGwsXHJcbiAgICAgIH0pO1xyXG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHRwOyBpICs9IDEpIHtcclxuICAgICAgICByZXN1bHQucHVzaCh7XHJcbiAgICAgICAgICB0ZXh0OiBTdHJpbmcoaSArIDEpLFxyXG4gICAgICAgICAgY2xhc3NlczogY3AgPT09IGkgKyAxID8gJ2lzLWFjdGl2ZScgOiAnJyxcclxuICAgICAgICAgIGFuY2hvcjogY3AgIT09IGkgKyAxID8gdGhpcy5fZ2V0UGFnaW5hdGlvbkFuY2hvcihpICsgMSwgbSwgaHJlZiwgcXApIDogbnVsbCxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbGlua3M6IHJlc3VsdCxcclxuICAgICAgZmlyc3Q6IHtcclxuICAgICAgICBjbGFzc2VzOiBjcCA9PT0gMSA/ICdpcy1kaXNhYmxlZCcgOiAnJyxcclxuICAgICAgICBhbmNob3I6IGNwICE9PSAxID8gdGhpcy5fZ2V0UGFnaW5hdGlvbkFuY2hvcigxLCBtLCBocmVmLCBxcCkgOiBudWxsLFxyXG4gICAgICB9LFxyXG4gICAgICBwcmV2OiB7XHJcbiAgICAgICAgY2xhc3NlczogY3AgPT09IDEgPyAnaXMtZGlzYWJsZWQnIDogJycsXHJcbiAgICAgICAgYW5jaG9yOiBjcCAhPT0gMSA/IHRoaXMuX2dldFBhZ2luYXRpb25BbmNob3IoY3AgLyAxIC0gMSwgbSwgaHJlZiwgcXApIDogbnVsbCxcclxuICAgICAgfSxcclxuICAgICAgbmV4dDoge1xyXG4gICAgICAgIGNsYXNzZXM6IGNwID09PSB0cCA/ICdpcy1kaXNhYmxlZCcgOiAnJyxcclxuICAgICAgICBhbmNob3I6IGNwICE9PSB0cCA/IHRoaXMuX2dldFBhZ2luYXRpb25BbmNob3IoY3AgLyAxICsgMSwgbSwgaHJlZiwgcXApIDogbnVsbCxcclxuICAgICAgfSxcclxuICAgICAgbGFzdDoge1xyXG4gICAgICAgIGNsYXNzZXM6IGNwID09PSB0cCA/ICdpcy1kaXNhYmxlZCcgOiAnJyxcclxuICAgICAgICBhbmNob3I6IGNwICE9PSB0cCA/IHRoaXMuX2dldFBhZ2luYXRpb25BbmNob3IodHAsIG0sIGhyZWYsIHFwKSA6IG51bGwsXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfZ2V0UGFnaW5hdGlvbkFuY2hvcihwYWdlLCBtb2RlLCBocmVmLCBxdWVyeVBhcmFtcykge1xyXG4gICAgc3dpdGNoIChtb2RlKSB7XHJcbiAgICAgIGNhc2UgJ3BheWxvYWQnOlxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBwYXlsb2FkOiB7IHNvdXJjZTogJ3BhZ2luYXRpb24nLCBwYWdlIH0sXHJcbiAgICAgICAgfTtcclxuICAgICAgY2FzZSAnaHJlZic6XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIGhyZWY6IHF1ZXJ5UGFyYW1zID8gaHJlZiA6IGhyZWYgKyBwYWdlLFxyXG4gICAgICAgICAgcXVlcnlQYXJhbXM6IHF1ZXJ5UGFyYW1zID8ge1xyXG4gICAgICAgICAgICAuLi5xdWVyeVBhcmFtcyxcclxuICAgICAgICAgICAgcGFnZSxcclxuICAgICAgICAgIH0gOiBudWxsLFxyXG4gICAgICAgIH07XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge307XHJcbiAgfVxyXG59XHJcbiJdfQ==