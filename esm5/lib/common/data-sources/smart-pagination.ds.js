import { __assign, __extends } from "tslib";
import { DataSource } from '@n7-frontend/core';
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
                label: sizes.label || 'Numero di risultati',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtcGFnaW5hdGlvbi5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24vZGF0YS1zb3VyY2VzL3NtYXJ0LXBhZ2luYXRpb24uZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUUvQztJQUF1QyxxQ0FBVTtJQUFqRDtRQUFBLHFFQW9JQztRQWxHUyx1QkFBaUIsR0FBRyxVQUFDLEVBQUUsRUFBRSxFQUFVLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRTtZQUMxRCxJQUFNLE1BQU0sR0FBRyxFQUFFLENBQUM7WUFDbEI7Ozs7Ozs7Y0FPRTtZQUNGLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQztZQUNmLElBQUksRUFBRSxJQUFJLEtBQUssRUFBRTtnQkFDZixLQUFLLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQzthQUNoQjtZQUNELElBQUksS0FBSyxFQUFFO2dCQUNULElBQ0UsRUFBRSxTQUFRLENBQUMsQ0FBQyxZQUFZO2dCQUMxQixJQUFJLEVBQUUsU0FBUSxDQUFDLENBQUMsYUFBYTtnQkFDN0IsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUU7b0JBQzlCLElBQUksRUFBRSxLQUFLLENBQUMsRUFBRTt3QkFDWixFQUFFLEdBQUcsRUFBRSxDQUFDO3dCQUNSLEVBQUUsR0FBRyxDQUFDLENBQUM7d0JBQ1AsdUNBQXVDO3dCQUN2Qyw0Q0FBNEM7cUJBQzdDO3lCQUFNLElBQUksRUFBRSxHQUFHLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUU7d0JBQzVDLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENB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IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTbWFydFBhZ2luYXRpb25EUyBleHRlbmRzIERhdGFTb3VyY2Uge1xyXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSkge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICB0b3RhbFBhZ2VzLCBjdXJyZW50UGFnZSwgcGFnZUxpbWl0LCBzaXplc1xyXG4gICAgfSA9IGRhdGE7XHJcbiAgICBjb25zdCB7IG1vZGUsIGhyZWYsIHF1ZXJ5UGFyYW1zIH0gPSB0aGlzLm9wdGlvbnM7XHJcbiAgICAvLyA9PT09PSBXQVJOSU5HUyA9PT09PVxyXG4gICAgaWYgKCFbJ2hyZWYnLCAncGF5bG9hZCddLmluY2x1ZGVzKG1vZGUpKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybignKHNtYXJ0LXBhZ2luYXRpb24pIFRoZSBcIm1vZGVcIiBvcHRpb24gaXMgaW5jb3JyZWN0LiBQbGVhc2Ugc3BlY2lmeSBcImhyZWZcIiBvciBcInBheWxvYWRcIiBhcyB0aGUgbW9kZSBvcHRpb24uJyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qge1xyXG4gICAgICBsaW5rcywgZmlyc3QsIHByZXYsIG5leHQsIGxhc3QsXHJcbiAgICB9ID0gdGhpcy5wYWdpbmF0aW9uQnVpbGRlcihcclxuICAgICAgdG90YWxQYWdlcywgK2N1cnJlbnRQYWdlLCBwYWdlTGltaXQsXHJcbiAgICAgIG1vZGUsIGhyZWYsIHF1ZXJ5UGFyYW1zLFxyXG4gICAgKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGZpcnN0LFxyXG4gICAgICBwcmV2LFxyXG4gICAgICBuZXh0LFxyXG4gICAgICBsYXN0LFxyXG4gICAgICBsaW5rcyxcclxuICAgICAgc2VsZWN0OiBzaXplcyA/IHtcclxuICAgICAgICBsYWJlbDogc2l6ZXMubGFiZWwgfHwgJ051bWVybyBkaSByaXN1bHRhdGknLFxyXG4gICAgICAgIG9wdGlvbnM6IHNpemVzLmxpc3QubWFwKChzKSA9PiAoe1xyXG4gICAgICAgICAgdGV4dDogcyxcclxuICAgICAgICAgIHNlbGVjdGVkOiBzID09PSBzaXplcy5hY3RpdmUsXHJcbiAgICAgICAgfSkpLFxyXG4gICAgICAgIHBheWxvYWQ6ICdzZWxlY3Qtc2l6ZScsXHJcbiAgICAgIH0gOiBudWxsLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcGFnaW5hdGlvbkJ1aWxkZXIgPSAodHAsIGNwOiBudW1iZXIsIHBsLCBtLCBocmVmLCBxcCkgPT4ge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gW107XHJcbiAgICAvKlxyXG4gICAgICB0cCAtIHRvdGFsIHBhZ2VzXHJcbiAgICAgIGNwIC0gY3VycmVudCBwYWdlXHJcbiAgICAgIHBsIC0gcGFnZSBsaW1pdFxyXG4gICAgICBtIC0gcGFnaW5hdGlvbiBtb2RlIChocmVmIG9yIHBheWxvYWRzKVxyXG4gICAgICBocmVmIC0gaHJlZiBmb3IgYW5jaG9yIHdyYXBwZXJcclxuICAgICAgcXAgLSBxdWVyeSBwYXJhbXMgZm9yIHBhZ2luYXRpb25cclxuICAgICovXHJcbiAgICBsZXQgbGltaXQgPSBwbDtcclxuICAgIGlmICh0cCA8PSBsaW1pdCkge1xyXG4gICAgICBsaW1pdCA9IHRwIC0gMTtcclxuICAgIH1cclxuICAgIGlmIChsaW1pdCkge1xyXG4gICAgICBsZXRcclxuICAgICAgICBscDogbnVtYmVyOyAvLyBsYXN0IHBhZ2VcclxuICAgICAgbGV0IGZwOiBudW1iZXI7IC8vIGZpcnN0IHBhZ2VcclxuICAgICAgaWYgKGNwID4gTWF0aC5mbG9vcihsaW1pdCAvIDIpKSB7XHJcbiAgICAgICAgaWYgKHRwID09PSAyKSB7XHJcbiAgICAgICAgICBscCA9IHRwO1xyXG4gICAgICAgICAgZnAgPSAxO1xyXG4gICAgICAgICAgLy8gd2hlbiBjdXJyZW50UGFnZSBpcyBhZnRlciBoYWxmLXBvaW50XHJcbiAgICAgICAgICAvLyAoZXhhbXBsZTogWyAxNCBdWyAxNSBdWyExNiFdWyAxNyBdWyAxOCBdKVxyXG4gICAgICAgIH0gZWxzZSBpZiAoY3AgPCAodHAgLSBNYXRoLmZsb29yKGxpbWl0IC8gMikpKSB7XHJcbiAgICAgICAgICBscCA9IGNwIC8gMSArIE1hdGguZmxvb3IobGltaXQgLyAyKTtcclxuICAgICAgICAgIGZwID0gY3AgLyAxIC0gTWF0aC5mbG9vcihsaW1pdCAvIDIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBscCA9IHRwO1xyXG4gICAgICAgICAgZnAgPSBjcCAtIGxpbWl0ICsgKHRwIC0gY3ApO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyB3aGVuIGN1cnJlbnRQYWdlIGlzIGJlZm9yZSBoYWxmLXBvaW50XHJcbiAgICAgICAgLy8gKGV4YW1wbGU6IFsgMSBdWyEyIV1bIDMgXVsgNCBdWyA1IF0pXHJcbiAgICAgICAgbHAgPSBsaW1pdCArIDE7XHJcbiAgICAgICAgZnAgPSAxO1xyXG4gICAgICB9XHJcbiAgICAgIGZvciAobGV0IGkgPSBmcDsgaSA8PSBscDsgaSArPSAxKSB7XHJcbiAgICAgICAgcmVzdWx0LnB1c2goe1xyXG4gICAgICAgICAgdGV4dDogU3RyaW5nKGkpLFxyXG4gICAgICAgICAgY2xhc3NlczogY3AgPT09IGkgPyAnaXMtYWN0aXZlJyA6ICcnLFxyXG4gICAgICAgICAgYW5jaG9yOiBjcCAhPT0gaSA/IHRoaXMuX2dldFBhZ2luYXRpb25BbmNob3IoaSwgbSwgaHJlZiwgcXApIDogbnVsbCxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVzdWx0LnB1c2goe1xyXG4gICAgICAgIHRleHQ6ICcxJyxcclxuICAgICAgICBjbGFzc2VzOiBjcCA9PT0gMSA/ICdpcy1hY3RpdmUnIDogJycsXHJcbiAgICAgICAgYW5jaG9yOiBjcCAhPT0gMSA/IHRoaXMuX2dldFBhZ2luYXRpb25BbmNob3IoMSwgbSwgaHJlZiwgcXApIDogbnVsbCxcclxuICAgICAgfSk7XHJcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgdHA7IGkgKz0gMSkge1xyXG4gICAgICAgIHJlc3VsdC5wdXNoKHtcclxuICAgICAgICAgIHRleHQ6IFN0cmluZyhpICsgMSksXHJcbiAgICAgICAgICBjbGFzc2VzOiBjcCA9PT0gaSArIDEgPyAnaXMtYWN0aXZlJyA6ICcnLFxyXG4gICAgICAgICAgYW5jaG9yOiBjcCAhPT0gaSArIDEgPyB0aGlzLl9nZXRQYWdpbmF0aW9uQW5jaG9yKGkgKyAxLCBtLCBocmVmLCBxcCkgOiBudWxsLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBsaW5rczogcmVzdWx0LFxyXG4gICAgICBmaXJzdDoge1xyXG4gICAgICAgIGNsYXNzZXM6IGNwID09PSAxID8gJ2lzLWRpc2FibGVkJyA6ICcnLFxyXG4gICAgICAgIGFuY2hvcjogY3AgIT09IDEgPyB0aGlzLl9nZXRQYWdpbmF0aW9uQW5jaG9yKDEsIG0sIGhyZWYsIHFwKSA6IG51bGwsXHJcbiAgICAgIH0sXHJcbiAgICAgIHByZXY6IHtcclxuICAgICAgICBjbGFzc2VzOiBjcCA9PT0gMSA/ICdpcy1kaXNhYmxlZCcgOiAnJyxcclxuICAgICAgICBhbmNob3I6IGNwICE9PSAxID8gdGhpcy5fZ2V0UGFnaW5hdGlvbkFuY2hvcihjcCAvIDEgLSAxLCBtLCBocmVmLCBxcCkgOiBudWxsLFxyXG4gICAgICB9LFxyXG4gICAgICBuZXh0OiB7XHJcbiAgICAgICAgY2xhc3NlczogY3AgPT09IHRwID8gJ2lzLWRpc2FibGVkJyA6ICcnLFxyXG4gICAgICAgIGFuY2hvcjogY3AgIT09IHRwID8gdGhpcy5fZ2V0UGFnaW5hdGlvbkFuY2hvcihjcCAvIDEgKyAxLCBtLCBocmVmLCBxcCkgOiBudWxsLFxyXG4gICAgICB9LFxyXG4gICAgICBsYXN0OiB7XHJcbiAgICAgICAgY2xhc3NlczogY3AgPT09IHRwID8gJ2lzLWRpc2FibGVkJyA6ICcnLFxyXG4gICAgICAgIGFuY2hvcjogY3AgIT09IHRwID8gdGhpcy5fZ2V0UGFnaW5hdGlvbkFuY2hvcih0cCwgbSwgaHJlZiwgcXApIDogbnVsbCxcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9nZXRQYWdpbmF0aW9uQW5jaG9yKHBhZ2UsIG1vZGUsIGhyZWYsIHF1ZXJ5UGFyYW1zKSB7XHJcbiAgICBzd2l0Y2ggKG1vZGUpIHtcclxuICAgICAgY2FzZSAncGF5bG9hZCc6XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHBheWxvYWQ6IHsgc291cmNlOiAncGFnaW5hdGlvbicsIHBhZ2UgfSxcclxuICAgICAgICB9O1xyXG4gICAgICBjYXNlICdocmVmJzpcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgaHJlZjogcXVlcnlQYXJhbXMgPyBocmVmIDogaHJlZiArIHBhZ2UsXHJcbiAgICAgICAgICBxdWVyeVBhcmFtczogcXVlcnlQYXJhbXMgPyB7XHJcbiAgICAgICAgICAgIC4uLnF1ZXJ5UGFyYW1zLFxyXG4gICAgICAgICAgICBwYWdlLFxyXG4gICAgICAgICAgfSA6IG51bGwsXHJcbiAgICAgICAgfTtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIHJldHVybiB7fTtcclxuICB9XHJcbn1cclxuIl19