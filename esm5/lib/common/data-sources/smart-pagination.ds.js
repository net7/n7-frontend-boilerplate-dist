/**
 * @fileoverview added by tsickle
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtcGFnaW5hdGlvbi5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24vZGF0YS1zb3VyY2VzL3NtYXJ0LXBhZ2luYXRpb24uZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFL0M7SUFBdUMsNkNBQVU7SUFBakQ7UUFBQSxxRUFvSUM7UUFsR1MsdUJBQWlCOzs7Ozs7Ozs7UUFBRyxVQUFDLEVBQUUsRUFBRSxFQUFVLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRTs7Z0JBQ3BELE1BQU0sR0FBRyxFQUFFOzs7Ozs7Ozs7O2dCQVNiLEtBQUssR0FBRyxFQUFFO1lBQ2QsSUFBSSxFQUFFLElBQUksS0FBSyxFQUFFO2dCQUNmLEtBQUssR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2FBQ2hCO1lBQ0QsSUFBSSxLQUFLLEVBQUU7O29CQUVQLEVBQUUsU0FBUTs7O29CQUNSLEVBQUUsU0FBUTtnQkFDZCxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRTtvQkFDOUIsSUFBSSxFQUFFLEtBQUssQ0FBQyxFQUFFO3dCQUNaLEVBQUUsR0FBRyxFQUFFLENBQUM7d0JBQ1IsRUFBRSxHQUFHLENBQUMsQ0FBQzt3QkFDUCx1Q0FBdUM7d0JBQ3ZDLDRDQUE0QztxQkFDN0M7eUJBQU0sSUFBSSxFQUFFLEdBQUcsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRTt3QkFDNUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7d0JBQ3BDLEVBQUUsR0FBRyxFQUFFLEdB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QUFBO1lBQ0osSUFBSSxNQUFBO1lBQ0osSUFBSSxNQUFBO1lBQ0osS0FBSyxPQUFBO1lBQ0wsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ2QsS0FBSyxFQUFFLHFCQUFxQjtnQkFDNUIsT0FBTyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRzs7OztnQkFBQyxVQUFDLENBQUMsSUFBSyxPQUFBLENBQUM7b0JBQzlCLElBQUksRUFBRSxDQUFDO29CQUNQLFFBQVEsRUFBRSxDQUFDLEtBQUssS0FBSyxDQUFDLE1BQU07aUJBQzdCLENBQUMsRUFINkIsQ0FHN0IsRUFBQztnQkFDSCxPQUFPLEVBQUUsYUFBYTthQUN2QixDQUFDLENBQUMsQ0FBQyxJQUFJO1NBQ1QsQ0FBQztJQUNKLENBQUM7Ozs7Ozs7OztJQWlGTyxnREFBb0I7Ozs7Ozs7O0lBQTVCLFVBQTZCLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFdBQVc7UUFDeEQsUUFBUSxJQUFJLEVBQUU7WUFDWixLQUFLLFNBQVM7Z0JBQ1osT0FBTztvQkFDTCxPQUFPLEVBQUUsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLElBQUksTUFBQSxFQUFFO2lCQUN4QyxDQUFDO1lBQ0osS0FBSyxNQUFNO2dCQUNULE9BQU87b0JBQ0wsSUFBSSxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSTtvQkFDdEMsV0FBVyxFQUFFLFdBQVcsQ0FBQyxDQUFDLHNCQUNyQixXQUFXLElBQ2QsSUFBSSxNQUFBLElBQ0osQ0FBQyxDQUFDLElBQUk7aUJBQ1QsQ0FBQztZQUNKO2dCQUNFLE1BQU07U0FDVDtRQUNELE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUNILHdCQUFDO0FBQUQsQ0FBQyxBQXBJRCxDQUF1QyxVQUFVLEdBb0loRDs7Ozs7OztJQWxHQyw4Q0E2RUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgU21hcnRQYWdpbmF0aW9uRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKSB7XG4gICAgY29uc3Qge1xuICAgICAgdG90YWxQYWdlcywgY3VycmVudFBhZ2UsIHBhZ2VMaW1pdCwgc2l6ZXMsXG4gICAgfSA9IGRhdGE7XG4gICAgY29uc3QgeyBtb2RlLCBocmVmLCBxdWVyeVBhcmFtcyB9ID0gdGhpcy5vcHRpb25zO1xuICAgIC8vID09PT09IFdBUk5JTkdTID09PT09XG4gICAgaWYgKCFbJ2hyZWYnLCAncGF5bG9hZCddLmluY2x1ZGVzKG1vZGUpKSB7XG4gICAgICBjb25zb2xlLndhcm4oJyhzbWFydC1wYWdpbmF0aW9uKSBUaGUgXCJtb2RlXCIgb3B0aW9uIGlzIGluY29ycmVjdC4gUGxlYXNlIHNwZWNpZnkgXCJocmVmXCIgb3IgXCJwYXlsb2FkXCIgYXMgdGhlIG1vZGUgb3B0aW9uLicpO1xuICAgIH1cblxuICAgIGNvbnN0IHtcbiAgICAgIGxpbmtzLCBmaXJzdCwgcHJldiwgbmV4dCwgbGFzdCxcbiAgICB9ID0gdGhpcy5wYWdpbmF0aW9uQnVpbGRlcihcbiAgICAgIHRvdGFsUGFnZXMsICtjdXJyZW50UGFnZSwgcGFnZUxpbWl0LFxuICAgICAgbW9kZSwgaHJlZiwgcXVlcnlQYXJhbXMsXG4gICAgKTtcbiAgICByZXR1cm4ge1xuICAgICAgZmlyc3QsXG4gICAgICBwcmV2LFxuICAgICAgbmV4dCxcbiAgICAgIGxhc3QsXG4gICAgICBsaW5rcyxcbiAgICAgIHNlbGVjdDogc2l6ZXMgPyB7XG4gICAgICAgIGxhYmVsOiAnTnVtZXJvIGRpIHJpc3VsdGF0aScsXG4gICAgICAgIG9wdGlvbnM6IHNpemVzLmxpc3QubWFwKChzKSA9PiAoe1xuICAgICAgICAgIHRleHQ6IHMsXG4gICAgICAgICAgc2VsZWN0ZWQ6IHMgPT09IHNpemVzLmFjdGl2ZSxcbiAgICAgICAgfSkpLFxuICAgICAgICBwYXlsb2FkOiAnc2VsZWN0LXNpemUnLFxuICAgICAgfSA6IG51bGwsXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgcGFnaW5hdGlvbkJ1aWxkZXIgPSAodHAsIGNwOiBudW1iZXIsIHBsLCBtLCBocmVmLCBxcCkgPT4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgIC8qXG4gICAgICB0cCAtIHRvdGFsIHBhZ2VzXG4gICAgICBjcCAtIGN1cnJlbnQgcGFnZVxuICAgICAgcGwgLSBwYWdlIGxpbWl0XG4gICAgICBtIC0gcGFnaW5hdGlvbiBtb2RlIChocmVmIG9yIHBheWxvYWRzKVxuICAgICAgaHJlZiAtIGhyZWYgZm9yIGFuY2hvciB3cmFwcGVyXG4gICAgICBxcCAtIHF1ZXJ5IHBhcmFtcyBmb3IgcGFnaW5hdGlvblxuICAgICovXG4gICAgbGV0IGxpbWl0ID0gcGw7XG4gICAgaWYgKHRwIDw9IGxpbWl0KSB7XG4gICAgICBsaW1pdCA9IHRwIC0gMTtcbiAgICB9XG4gICAgaWYgKGxpbWl0KSB7XG4gICAgICBsZXRcbiAgICAgICAgbHA6IG51bWJlcjsgLy8gbGFzdCBwYWdlXG4gICAgICBsZXQgZnA6IG51bWJlcjsgLy8gZmlyc3QgcGFnZVxuICAgICAgaWYgKGNwID4gTWF0aC5mbG9vcihsaW1pdCAvIDIpKSB7XG4gICAgICAgIGlmICh0cCA9PT0gMikge1xuICAgICAgICAgIGxwID0gdHA7XG4gICAgICAgICAgZnAgPSAxO1xuICAgICAgICAgIC8vIHdoZW4gY3VycmVudFBhZ2UgaXMgYWZ0ZXIgaGFsZi1wb2ludFxuICAgICAgICAgIC8vIChleGFtcGxlOiBbIDE0IF1bIDE1IF1bITE2IV1bIDE3IF1bIDE4IF0pXG4gICAgICAgIH0gZWxzZSBpZiAoY3AgPCAodHAgLSBNYXRoLmZsb29yKGxpbWl0IC8gMikpKSB7XG4gICAgICAgICAgbHAgPSBjcCAvIDEgKyBNYXRoLmZsb29yKGxpbWl0IC8gMik7XG4gICAgICAgICAgZnAgPSBjcCAvIDEgLSBNYXRoLmZsb29yKGxpbWl0IC8gMik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbHAgPSB0cDtcbiAgICAgICAgICBmcCA9IGNwIC0gbGltaXQgKyAodHAgLSBjcCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHdoZW4gY3VycmVudFBhZ2UgaXMgYmVmb3JlIGhhbGYtcG9pbnRcbiAgICAgICAgLy8gKGV4YW1wbGU6IFsgMSBdWyEyIV1bIDMgXVsgNCBdWyA1IF0pXG4gICAgICAgIGxwID0gbGltaXQgKyAxO1xuICAgICAgICBmcCA9IDE7XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBpID0gZnA7IGkgPD0gbHA7IGkgKz0gMSkge1xuICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgdGV4dDogU3RyaW5nKGkpLFxuICAgICAgICAgIGNsYXNzZXM6IGNwID09PSBpID8gJ2lzLWFjdGl2ZScgOiAnJyxcbiAgICAgICAgICBhbmNob3I6IGNwICE9PSBpID8gdGhpcy5fZ2V0UGFnaW5hdGlvbkFuY2hvcihpLCBtLCBocmVmLCBxcCkgOiBudWxsLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICB0ZXh0OiAnMScsXG4gICAgICAgIGNsYXNzZXM6IGNwID09PSAxID8gJ2lzLWFjdGl2ZScgOiAnJyxcbiAgICAgICAgYW5jaG9yOiBjcCAhPT0gMSA/IHRoaXMuX2dldFBhZ2luYXRpb25BbmNob3IoMSwgbSwgaHJlZiwgcXApIDogbnVsbCxcbiAgICAgIH0pO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCB0cDsgaSArPSAxKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICB0ZXh0OiBTdHJpbmcoaSArIDEpLFxuICAgICAgICAgIGNsYXNzZXM6IGNwID09PSBpICsgMSA/ICdpcy1hY3RpdmUnIDogJycsXG4gICAgICAgICAgYW5jaG9yOiBjcCAhPT0gaSArIDEgPyB0aGlzLl9nZXRQYWdpbmF0aW9uQW5jaG9yKGkgKyAxLCBtLCBocmVmLCBxcCkgOiBudWxsLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIGxpbmtzOiByZXN1bHQsXG4gICAgICBmaXJzdDoge1xuICAgICAgICBjbGFzc2VzOiBjcCA9PT0gMSA/ICdpcy1kaXNhYmxlZCcgOiAnJyxcbiAgICAgICAgYW5jaG9yOiBjcCAhPT0gMSA/IHRoaXMuX2dldFBhZ2luYXRpb25BbmNob3IoMSwgbSwgaHJlZiwgcXApIDogbnVsbCxcbiAgICAgIH0sXG4gICAgICBwcmV2OiB7XG4gICAgICAgIGNsYXNzZXM6IGNwID09PSAxID8gJ2lzLWRpc2FibGVkJyA6ICcnLFxuICAgICAgICBhbmNob3I6IGNwICE9PSAxID8gdGhpcy5fZ2V0UGFnaW5hdGlvbkFuY2hvcihjcCAvIDEgLSAxLCBtLCBocmVmLCBxcCkgOiBudWxsLFxuICAgICAgfSxcbiAgICAgIG5leHQ6IHtcbiAgICAgICAgY2xhc3NlczogY3AgPT09IHRwID8gJ2lzLWRpc2FibGVkJyA6ICcnLFxuICAgICAgICBhbmNob3I6IGNwICE9PSB0cCA/IHRoaXMuX2dldFBhZ2luYXRpb25BbmNob3IoY3AgLyAxICsgMSwgbSwgaHJlZiwgcXApIDogbnVsbCxcbiAgICAgIH0sXG4gICAgICBsYXN0OiB7XG4gICAgICAgIGNsYXNzZXM6IGNwID09PSB0cCA/ICdpcy1kaXNhYmxlZCcgOiAnJyxcbiAgICAgICAgYW5jaG9yOiBjcCAhPT0gdHAgPyB0aGlzLl9nZXRQYWdpbmF0aW9uQW5jaG9yKHRwLCBtLCBocmVmLCBxcCkgOiBudWxsLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0UGFnaW5hdGlvbkFuY2hvcihwYWdlLCBtb2RlLCBocmVmLCBxdWVyeVBhcmFtcykge1xuICAgIHN3aXRjaCAobW9kZSkge1xuICAgICAgY2FzZSAncGF5bG9hZCc6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcGF5bG9hZDogeyBzb3VyY2U6ICdwYWdpbmF0aW9uJywgcGFnZSB9LFxuICAgICAgICB9O1xuICAgICAgY2FzZSAnaHJlZic6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaHJlZjogcXVlcnlQYXJhbXMgPyBocmVmIDogaHJlZiArIHBhZ2UsXG4gICAgICAgICAgcXVlcnlQYXJhbXM6IHF1ZXJ5UGFyYW1zID8ge1xuICAgICAgICAgICAgLi4ucXVlcnlQYXJhbXMsXG4gICAgICAgICAgICBwYWdlLFxuICAgICAgICAgIH0gOiBudWxsLFxuICAgICAgICB9O1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiB7fTtcbiAgfVxufVxuIl19