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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtcGFnaW5hdGlvbi5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24vZGF0YS1zb3VyY2VzL3NtYXJ0LXBhZ2luYXRpb24uZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRS9DO0lBQXVDLDZDQUFVO0lBQWpEO1FBQUEscUVBb0lDO1FBbEdTLHVCQUFpQjs7Ozs7Ozs7O1FBQUcsVUFBQyxFQUFFLEVBQUUsRUFBVSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUU7O2dCQUNwRCxNQUFNLEdBQUcsRUFBRTs7Ozs7Ozs7OztnQkFTYixLQUFLLEdBQUcsRUFBRTtZQUNkLElBQUksRUFBRSxJQUFJLEtBQUssRUFBRTtnQkFDZixLQUFLLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQzthQUNoQjtZQUNELElBQUksS0FBSyxFQUFFOztvQkFFUCxFQUFFLFNBQVE7OztvQkFDUixFQUFFLFNBQVE7Z0JBQ2QsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUU7b0JBQzlCLElBQUksRUFBRSxLQUFLLENBQUMsRUFBRTt3QkFDWixFQUFFLEdBQUcsRUFBRSxDQUFDO3dCQUNSLEVBQUUsR0FBRyxDQUFDLENBQUM7d0JBQ1AsdUNBQXVDO3dCQUN2Qyw0Q0FBNEM7cUJBQzdDO3lCQUFNLElBQUksRUFBRSxHQUFHLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUU7d0JBQzVDLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO3dCQUNwQyxFQUFFLEdBQUcsRUFBRSxH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JztcclxuXHJcbmV4cG9ydCBjbGFzcyBTbWFydFBhZ2luYXRpb25EUyBleHRlbmRzIERhdGFTb3VyY2Uge1xyXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSkge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICB0b3RhbFBhZ2VzLCBjdXJyZW50UGFnZSwgcGFnZUxpbWl0LCBzaXplcyxcclxuICAgIH0gPSBkYXRhO1xyXG4gICAgY29uc3QgeyBtb2RlLCBocmVmLCBxdWVyeVBhcmFtcyB9ID0gdGhpcy5vcHRpb25zO1xyXG4gICAgLy8gPT09PT0gV0FSTklOR1MgPT09PT1cclxuICAgIGlmICghWydocmVmJywgJ3BheWxvYWQnXS5pbmNsdWRlcyhtb2RlKSkge1xyXG4gICAgICBjb25zb2xlLndhcm4oJyhzbWFydC1wYWdpbmF0aW9uKSBUaGUgXCJtb2RlXCIgb3B0aW9uIGlzIGluY29ycmVjdC4gUGxlYXNlIHNwZWNpZnkgXCJocmVmXCIgb3IgXCJwYXlsb2FkXCIgYXMgdGhlIG1vZGUgb3B0aW9uLicpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHtcclxuICAgICAgbGlua3MsIGZpcnN0LCBwcmV2LCBuZXh0LCBsYXN0LFxyXG4gICAgfSA9IHRoaXMucGFnaW5hdGlvbkJ1aWxkZXIoXHJcbiAgICAgIHRvdGFsUGFnZXMsICtjdXJyZW50UGFnZSwgcGFnZUxpbWl0LFxyXG4gICAgICBtb2RlLCBocmVmLCBxdWVyeVBhcmFtcyxcclxuICAgICk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBmaXJzdCxcclxuICAgICAgcHJldixcclxuICAgICAgbmV4dCxcclxuICAgICAgbGFzdCxcclxuICAgICAgbGlua3MsXHJcbiAgICAgIHNlbGVjdDogc2l6ZXMgPyB7XHJcbiAgICAgICAgbGFiZWw6ICdOdW1lcm8gZGkgcmlzdWx0YXRpJyxcclxuICAgICAgICBvcHRpb25zOiBzaXplcy5saXN0Lm1hcCgocykgPT4gKHtcclxuICAgICAgICAgIHRleHQ6IHMsXHJcbiAgICAgICAgICBzZWxlY3RlZDogcyA9PT0gc2l6ZXMuYWN0aXZlLFxyXG4gICAgICAgIH0pKSxcclxuICAgICAgICBwYXlsb2FkOiAnc2VsZWN0LXNpemUnLFxyXG4gICAgICB9IDogbnVsbCxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHBhZ2luYXRpb25CdWlsZGVyID0gKHRwLCBjcDogbnVtYmVyLCBwbCwgbSwgaHJlZiwgcXApID0+IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xyXG4gICAgLypcclxuICAgICAgdHAgLSB0b3RhbCBwYWdlc1xyXG4gICAgICBjcCAtIGN1cnJlbnQgcGFnZVxyXG4gICAgICBwbCAtIHBhZ2UgbGltaXRcclxuICAgICAgbSAtIHBhZ2luYXRpb24gbW9kZSAoaHJlZiBvciBwYXlsb2FkcylcclxuICAgICAgaHJlZiAtIGhyZWYgZm9yIGFuY2hvciB3cmFwcGVyXHJcbiAgICAgIHFwIC0gcXVlcnkgcGFyYW1zIGZvciBwYWdpbmF0aW9uXHJcbiAgICAqL1xyXG4gICAgbGV0IGxpbWl0ID0gcGw7XHJcbiAgICBpZiAodHAgPD0gbGltaXQpIHtcclxuICAgICAgbGltaXQgPSB0cCAtIDE7XHJcbiAgICB9XHJcbiAgICBpZiAobGltaXQpIHtcclxuICAgICAgbGV0XHJcbiAgICAgICAgbHA6IG51bWJlcjsgLy8gbGFzdCBwYWdlXHJcbiAgICAgIGxldCBmcDogbnVtYmVyOyAvLyBmaXJzdCBwYWdlXHJcbiAgICAgIGlmIChjcCA+IE1hdGguZmxvb3IobGltaXQgLyAyKSkge1xyXG4gICAgICAgIGlmICh0cCA9PT0gMikge1xyXG4gICAgICAgICAgbHAgPSB0cDtcclxuICAgICAgICAgIGZwID0gMTtcclxuICAgICAgICAgIC8vIHdoZW4gY3VycmVudFBhZ2UgaXMgYWZ0ZXIgaGFsZi1wb2ludFxyXG4gICAgICAgICAgLy8gKGV4YW1wbGU6IFsgMTQgXVsgMTUgXVshMTYhXVsgMTcgXVsgMTggXSlcclxuICAgICAgICB9IGVsc2UgaWYgKGNwIDwgKHRwIC0gTWF0aC5mbG9vcihsaW1pdCAvIDIpKSkge1xyXG4gICAgICAgICAgbHAgPSBjcCAvIDEgKyBNYXRoLmZsb29yKGxpbWl0IC8gMik7XHJcbiAgICAgICAgICBmcCA9IGNwIC8gMSAtIE1hdGguZmxvb3IobGltaXQgLyAyKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbHAgPSB0cDtcclxuICAgICAgICAgIGZwID0gY3AgLSBsaW1pdCArICh0cCAtIGNwKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gd2hlbiBjdXJyZW50UGFnZSBpcyBiZWZvcmUgaGFsZi1wb2ludFxyXG4gICAgICAgIC8vIChleGFtcGxlOiBbIDEgXVshMiFdWyAzIF1bIDQgXVsgNSBdKVxyXG4gICAgICAgIGxwID0gbGltaXQgKyAxO1xyXG4gICAgICAgIGZwID0gMTtcclxuICAgICAgfVxyXG4gICAgICBmb3IgKGxldCBpID0gZnA7IGkgPD0gbHA7IGkgKz0gMSkge1xyXG4gICAgICAgIHJlc3VsdC5wdXNoKHtcclxuICAgICAgICAgIHRleHQ6IFN0cmluZyhpKSxcclxuICAgICAgICAgIGNsYXNzZXM6IGNwID09PSBpID8gJ2lzLWFjdGl2ZScgOiAnJyxcclxuICAgICAgICAgIGFuY2hvcjogY3AgIT09IGkgPyB0aGlzLl9nZXRQYWdpbmF0aW9uQW5jaG9yKGksIG0sIGhyZWYsIHFwKSA6IG51bGwsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJlc3VsdC5wdXNoKHtcclxuICAgICAgICB0ZXh0OiAnMScsXHJcbiAgICAgICAgY2xhc3NlczogY3AgPT09IDEgPyAnaXMtYWN0aXZlJyA6ICcnLFxyXG4gICAgICAgIGFuY2hvcjogY3AgIT09IDEgPyB0aGlzLl9nZXRQYWdpbmF0aW9uQW5jaG9yKDEsIG0sIGhyZWYsIHFwKSA6IG51bGwsXHJcbiAgICAgIH0pO1xyXG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHRwOyBpICs9IDEpIHtcclxuICAgICAgICByZXN1bHQucHVzaCh7XHJcbiAgICAgICAgICB0ZXh0OiBTdHJpbmcoaSArIDEpLFxyXG4gICAgICAgICAgY2xhc3NlczogY3AgPT09IGkgKyAxID8gJ2lzLWFjdGl2ZScgOiAnJyxcclxuICAgICAgICAgIGFuY2hvcjogY3AgIT09IGkgKyAxID8gdGhpcy5fZ2V0UGFnaW5hdGlvbkFuY2hvcihpICsgMSwgbSwgaHJlZiwgcXApIDogbnVsbCxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbGlua3M6IHJlc3VsdCxcclxuICAgICAgZmlyc3Q6IHtcclxuICAgICAgICBjbGFzc2VzOiBjcCA9PT0gMSA/ICdpcy1kaXNhYmxlZCcgOiAnJyxcclxuICAgICAgICBhbmNob3I6IGNwICE9PSAxID8gdGhpcy5fZ2V0UGFnaW5hdGlvbkFuY2hvcigxLCBtLCBocmVmLCBxcCkgOiBudWxsLFxyXG4gICAgICB9LFxyXG4gICAgICBwcmV2OiB7XHJcbiAgICAgICAgY2xhc3NlczogY3AgPT09IDEgPyAnaXMtZGlzYWJsZWQnIDogJycsXHJcbiAgICAgICAgYW5jaG9yOiBjcCAhPT0gMSA/IHRoaXMuX2dldFBhZ2luYXRpb25BbmNob3IoY3AgLyAxIC0gMSwgbSwgaHJlZiwgcXApIDogbnVsbCxcclxuICAgICAgfSxcclxuICAgICAgbmV4dDoge1xyXG4gICAgICAgIGNsYXNzZXM6IGNwID09PSB0cCA/ICdpcy1kaXNhYmxlZCcgOiAnJyxcclxuICAgICAgICBhbmNob3I6IGNwICE9PSB0cCA/IHRoaXMuX2dldFBhZ2luYXRpb25BbmNob3IoY3AgLyAxICsgMSwgbSwgaHJlZiwgcXApIDogbnVsbCxcclxuICAgICAgfSxcclxuICAgICAgbGFzdDoge1xyXG4gICAgICAgIGNsYXNzZXM6IGNwID09PSB0cCA/ICdpcy1kaXNhYmxlZCcgOiAnJyxcclxuICAgICAgICBhbmNob3I6IGNwICE9PSB0cCA/IHRoaXMuX2dldFBhZ2luYXRpb25BbmNob3IodHAsIG0sIGhyZWYsIHFwKSA6IG51bGwsXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfZ2V0UGFnaW5hdGlvbkFuY2hvcihwYWdlLCBtb2RlLCBocmVmLCBxdWVyeVBhcmFtcykge1xyXG4gICAgc3dpdGNoIChtb2RlKSB7XHJcbiAgICAgIGNhc2UgJ3BheWxvYWQnOlxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBwYXlsb2FkOiB7IHNvdXJjZTogJ3BhZ2luYXRpb24nLCBwYWdlIH0sXHJcbiAgICAgICAgfTtcclxuICAgICAgY2FzZSAnaHJlZic6XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIGhyZWY6IHF1ZXJ5UGFyYW1zID8gaHJlZiA6IGhyZWYgKyBwYWdlLFxyXG4gICAgICAgICAgcXVlcnlQYXJhbXM6IHF1ZXJ5UGFyYW1zID8ge1xyXG4gICAgICAgICAgICAuLi5xdWVyeVBhcmFtcyxcclxuICAgICAgICAgICAgcGFnZSxcclxuICAgICAgICAgIH0gOiBudWxsLFxyXG4gICAgICAgIH07XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge307XHJcbiAgfVxyXG59XHJcbiJdfQ==