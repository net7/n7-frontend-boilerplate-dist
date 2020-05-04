/**
 * @fileoverview added by tsickle
 * Generated from: lib/common/data-sources/smart-pagination.ds.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DataSource } from '@n7-frontend/core';
var SmartPaginationDS = /** @class */ (function (_super) {
    tslib_1.__extends(SmartPaginationDS, _super);
    function SmartPaginationDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.paginationBuilder = (/**
         * @param {?} tp
         * @param {?} cp
         * @param {?} pl
         * @param {?} m
         * @param {?} href
         * @param {?} qp
         * @return {?}
         */
        function (tp, cp, pl, m, href, qp) {
            /** @type {?} */
            var result = [];
            /*
                  tp - total pages
                  cp - current page
                  pl - page limit
                  m - pagination mode (href or payloads)
                  href - href for anchor wrapper
                  qp - query params for pagination
                */
            /** @type {?} */
            var limit = pl;
            if (tp <= limit) {
                limit = tp - 1;
            }
            if (limit) {
                /** @type {?} */
                var lp = void 0;
                // last page
                /** @type {?} */
                var fp = void 0;
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
        });
        return _this;
    }
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    SmartPaginationDS.prototype.transform = /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    function (data) {
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
                label: 'Numero di risultati',
                options: sizes.list.map((/**
                 * @param {?} s
                 * @return {?}
                 */
                function (s) { return ({
                    text: s,
                    selected: s === sizes.active,
                }); })),
                payload: 'select-size',
            } : null,
        };
    };
    /**
     * @private
     * @param {?} page
     * @param {?} mode
     * @param {?} href
     * @param {?} queryParams
     * @return {?}
     */
    SmartPaginationDS.prototype._getPaginationAnchor = /**
     * @private
     * @param {?} page
     * @param {?} mode
     * @param {?} href
     * @param {?} queryParams
     * @return {?}
     */
    function (page, mode, href, queryParams) {
        switch (mode) {
            case 'payload':
                return {
                    payload: { source: 'pagination', page: page },
                };
            case 'href':
                return {
                    href: queryParams ? href : href + page,
                    queryParams: queryParams ? tslib_1.__assign({}, queryParams, { page: page }) : null,
                };
            default:
                break;
        }
        return {};
    };
    return SmartPaginationDS;
}(DataSource));
export { SmartPaginationDS };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SmartPaginationDS.prototype.paginationBuilder;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtcGFnaW5hdGlvbi5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24vZGF0YS1zb3VyY2VzL3NtYXJ0LXBhZ2luYXRpb24uZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRS9DO0lBQXVDLDZDQUFVO0lBQWpEO1FBQUEscUVBb0lDO1FBbEdTLHVCQUFpQjs7Ozs7Ozs7O1FBQUcsVUFBQyxFQUFFLEVBQUUsRUFBVSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUU7O2dCQUNwRCxNQUFNLEdBQUcsRUFBRTs7Ozs7Ozs7OztnQkFTYixLQUFLLEdBQUcsRUFBRTtZQUNkLElBQUksRUFBRSxJQUFJLEtBQUssRUFBRTtnQkFDZixLQUFLLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQzthQUNoQjtZQUNELElBQUksS0FBSyxFQUFFOztvQkFFUCxFQUFFLFNBQVE7OztvQkFDUixFQUFFLFNBQVE7Z0JBQ2QsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUU7b0JBQzlCLElBQUksRUFBRSxLQUFLLENBQUMsRUFBRTt3QkFDWixFQUFFLEdBQUcsRUFBRSxDQUFDO3dCQUNSLEVBQUUsR0FBRyxDQUFDLENBQUM7d0JBQ1AsdUNBQXVDO3dCQUN2Qyw0Q0FBNEM7cUJBQzdDO3lCQUFNLElBQUksRUFBRSxHQUFHLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUU7d0JBQzVDLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO3dCQUNwQyxFQUFFLEdBQUcsRUFBRSxH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JztcblxuZXhwb3J0IGNsYXNzIFNtYXJ0UGFnaW5hdGlvbkRTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSkge1xuICAgIGNvbnN0IHtcbiAgICAgIHRvdGFsUGFnZXMsIGN1cnJlbnRQYWdlLCBwYWdlTGltaXQsIHNpemVzLFxuICAgIH0gPSBkYXRhO1xuICAgIGNvbnN0IHsgbW9kZSwgaHJlZiwgcXVlcnlQYXJhbXMgfSA9IHRoaXMub3B0aW9ucztcbiAgICAvLyA9PT09PSBXQVJOSU5HUyA9PT09PVxuICAgIGlmICghWydocmVmJywgJ3BheWxvYWQnXS5pbmNsdWRlcyhtb2RlKSkge1xuICAgICAgY29uc29sZS53YXJuKCcoc21hcnQtcGFnaW5hdGlvbikgVGhlIFwibW9kZVwiIG9wdGlvbiBpcyBpbmNvcnJlY3QuIFBsZWFzZSBzcGVjaWZ5IFwiaHJlZlwiIG9yIFwicGF5bG9hZFwiIGFzIHRoZSBtb2RlIG9wdGlvbi4nKTtcbiAgICB9XG5cbiAgICBjb25zdCB7XG4gICAgICBsaW5rcywgZmlyc3QsIHByZXYsIG5leHQsIGxhc3QsXG4gICAgfSA9IHRoaXMucGFnaW5hdGlvbkJ1aWxkZXIoXG4gICAgICB0b3RhbFBhZ2VzLCArY3VycmVudFBhZ2UsIHBhZ2VMaW1pdCxcbiAgICAgIG1vZGUsIGhyZWYsIHF1ZXJ5UGFyYW1zLFxuICAgICk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZpcnN0LFxuICAgICAgcHJldixcbiAgICAgIG5leHQsXG4gICAgICBsYXN0LFxuICAgICAgbGlua3MsXG4gICAgICBzZWxlY3Q6IHNpemVzID8ge1xuICAgICAgICBsYWJlbDogJ051bWVybyBkaSByaXN1bHRhdGknLFxuICAgICAgICBvcHRpb25zOiBzaXplcy5saXN0Lm1hcCgocykgPT4gKHtcbiAgICAgICAgICB0ZXh0OiBzLFxuICAgICAgICAgIHNlbGVjdGVkOiBzID09PSBzaXplcy5hY3RpdmUsXG4gICAgICAgIH0pKSxcbiAgICAgICAgcGF5bG9hZDogJ3NlbGVjdC1zaXplJyxcbiAgICAgIH0gOiBudWxsLFxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIHBhZ2luYXRpb25CdWlsZGVyID0gKHRwLCBjcDogbnVtYmVyLCBwbCwgbSwgaHJlZiwgcXApID0+IHtcbiAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICAvKlxuICAgICAgdHAgLSB0b3RhbCBwYWdlc1xuICAgICAgY3AgLSBjdXJyZW50IHBhZ2VcbiAgICAgIHBsIC0gcGFnZSBsaW1pdFxuICAgICAgbSAtIHBhZ2luYXRpb24gbW9kZSAoaHJlZiBvciBwYXlsb2FkcylcbiAgICAgIGhyZWYgLSBocmVmIGZvciBhbmNob3Igd3JhcHBlclxuICAgICAgcXAgLSBxdWVyeSBwYXJhbXMgZm9yIHBhZ2luYXRpb25cbiAgICAqL1xuICAgIGxldCBsaW1pdCA9IHBsO1xuICAgIGlmICh0cCA8PSBsaW1pdCkge1xuICAgICAgbGltaXQgPSB0cCAtIDE7XG4gICAgfVxuICAgIGlmIChsaW1pdCkge1xuICAgICAgbGV0XG4gICAgICAgIGxwOiBudW1iZXI7IC8vIGxhc3QgcGFnZVxuICAgICAgbGV0IGZwOiBudW1iZXI7IC8vIGZpcnN0IHBhZ2VcbiAgICAgIGlmIChjcCA+IE1hdGguZmxvb3IobGltaXQgLyAyKSkge1xuICAgICAgICBpZiAodHAgPT09IDIpIHtcbiAgICAgICAgICBscCA9IHRwO1xuICAgICAgICAgIGZwID0gMTtcbiAgICAgICAgICAvLyB3aGVuIGN1cnJlbnRQYWdlIGlzIGFmdGVyIGhhbGYtcG9pbnRcbiAgICAgICAgICAvLyAoZXhhbXBsZTogWyAxNCBdWyAxNSBdWyExNiFdWyAxNyBdWyAxOCBdKVxuICAgICAgICB9IGVsc2UgaWYgKGNwIDwgKHRwIC0gTWF0aC5mbG9vcihsaW1pdCAvIDIpKSkge1xuICAgICAgICAgIGxwID0gY3AgLyAxICsgTWF0aC5mbG9vcihsaW1pdCAvIDIpO1xuICAgICAgICAgIGZwID0gY3AgLyAxIC0gTWF0aC5mbG9vcihsaW1pdCAvIDIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxwID0gdHA7XG4gICAgICAgICAgZnAgPSBjcCAtIGxpbWl0ICsgKHRwIC0gY3ApO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyB3aGVuIGN1cnJlbnRQYWdlIGlzIGJlZm9yZSBoYWxmLXBvaW50XG4gICAgICAgIC8vIChleGFtcGxlOiBbIDEgXVshMiFdWyAzIF1bIDQgXVsgNSBdKVxuICAgICAgICBscCA9IGxpbWl0ICsgMTtcbiAgICAgICAgZnAgPSAxO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IGZwOyBpIDw9IGxwOyBpICs9IDEpIHtcbiAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgIHRleHQ6IFN0cmluZyhpKSxcbiAgICAgICAgICBjbGFzc2VzOiBjcCA9PT0gaSA/ICdpcy1hY3RpdmUnIDogJycsXG4gICAgICAgICAgYW5jaG9yOiBjcCAhPT0gaSA/IHRoaXMuX2dldFBhZ2luYXRpb25BbmNob3IoaSwgbSwgaHJlZiwgcXApIDogbnVsbCxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgdGV4dDogJzEnLFxuICAgICAgICBjbGFzc2VzOiBjcCA9PT0gMSA/ICdpcy1hY3RpdmUnIDogJycsXG4gICAgICAgIGFuY2hvcjogY3AgIT09IDEgPyB0aGlzLl9nZXRQYWdpbmF0aW9uQW5jaG9yKDEsIG0sIGhyZWYsIHFwKSA6IG51bGwsXG4gICAgICB9KTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgdHA7IGkgKz0gMSkge1xuICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgdGV4dDogU3RyaW5nKGkgKyAxKSxcbiAgICAgICAgICBjbGFzc2VzOiBjcCA9PT0gaSArIDEgPyAnaXMtYWN0aXZlJyA6ICcnLFxuICAgICAgICAgIGFuY2hvcjogY3AgIT09IGkgKyAxID8gdGhpcy5fZ2V0UGFnaW5hdGlvbkFuY2hvcihpICsgMSwgbSwgaHJlZiwgcXApIDogbnVsbCxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBsaW5rczogcmVzdWx0LFxuICAgICAgZmlyc3Q6IHtcbiAgICAgICAgY2xhc3NlczogY3AgPT09IDEgPyAnaXMtZGlzYWJsZWQnIDogJycsXG4gICAgICAgIGFuY2hvcjogY3AgIT09IDEgPyB0aGlzLl9nZXRQYWdpbmF0aW9uQW5jaG9yKDEsIG0sIGhyZWYsIHFwKSA6IG51bGwsXG4gICAgICB9LFxuICAgICAgcHJldjoge1xuICAgICAgICBjbGFzc2VzOiBjcCA9PT0gMSA/ICdpcy1kaXNhYmxlZCcgOiAnJyxcbiAgICAgICAgYW5jaG9yOiBjcCAhPT0gMSA/IHRoaXMuX2dldFBhZ2luYXRpb25BbmNob3IoY3AgLyAxIC0gMSwgbSwgaHJlZiwgcXApIDogbnVsbCxcbiAgICAgIH0sXG4gICAgICBuZXh0OiB7XG4gICAgICAgIGNsYXNzZXM6IGNwID09PSB0cCA/ICdpcy1kaXNhYmxlZCcgOiAnJyxcbiAgICAgICAgYW5jaG9yOiBjcCAhPT0gdHAgPyB0aGlzLl9nZXRQYWdpbmF0aW9uQW5jaG9yKGNwIC8gMSArIDEsIG0sIGhyZWYsIHFwKSA6IG51bGwsXG4gICAgICB9LFxuICAgICAgbGFzdDoge1xuICAgICAgICBjbGFzc2VzOiBjcCA9PT0gdHAgPyAnaXMtZGlzYWJsZWQnIDogJycsXG4gICAgICAgIGFuY2hvcjogY3AgIT09IHRwID8gdGhpcy5fZ2V0UGFnaW5hdGlvbkFuY2hvcih0cCwgbSwgaHJlZiwgcXApIDogbnVsbCxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldFBhZ2luYXRpb25BbmNob3IocGFnZSwgbW9kZSwgaHJlZiwgcXVlcnlQYXJhbXMpIHtcbiAgICBzd2l0Y2ggKG1vZGUpIHtcbiAgICAgIGNhc2UgJ3BheWxvYWQnOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHBheWxvYWQ6IHsgc291cmNlOiAncGFnaW5hdGlvbicsIHBhZ2UgfSxcbiAgICAgICAgfTtcbiAgICAgIGNhc2UgJ2hyZWYnOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGhyZWY6IHF1ZXJ5UGFyYW1zID8gaHJlZiA6IGhyZWYgKyBwYWdlLFxuICAgICAgICAgIHF1ZXJ5UGFyYW1zOiBxdWVyeVBhcmFtcyA/IHtcbiAgICAgICAgICAgIC4uLnF1ZXJ5UGFyYW1zLFxuICAgICAgICAgICAgcGFnZSxcbiAgICAgICAgICB9IDogbnVsbCxcbiAgICAgICAgfTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4ge307XG4gIH1cbn1cbiJdfQ==