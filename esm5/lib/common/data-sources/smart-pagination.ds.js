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
            var result = []
            /*
              tp - total pages
              cp - current page
              pl - page limit
              m - pagination mode (href or payloads)
              href - href for anchor wrapper
              qp - query params for pagination
            */
            ;
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
                /** @type {?} */
                var //last page
                fp = void 0 // first page
                ;
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
                    lp = limit++;
                    fp = 1;
                }
                for (var i = fp; i <= lp; i++) {
                    result.push({
                        text: String(i),
                        classes: cp == i ? 'is-active' : '',
                        anchor: cp != i ? _this._getPaginationAnchor(i, m, href, qp) : null
                    });
                }
            }
            else {
                result.push({
                    text: '1',
                    classes: cp == 1 ? 'is-active' : '',
                    anchor: cp !== 1 ? _this._getPaginationAnchor(1, m, href, qp) : null
                });
                for (var i = 1; i < tp; i++) {
                    result.push({
                        text: String(i + 1),
                        classes: cp == i + 1 ? 'is-active' : '',
                        anchor: cp !== i + 1 ? _this._getPaginationAnchor(i + 1, m, href, qp) : null
                    });
                }
            }
            return {
                links: result,
                first: {
                    classes: cp == 1 ? 'is-disabled' : '',
                    anchor: cp != 1 ? _this._getPaginationAnchor(1, m, href, qp) : null
                },
                prev: {
                    classes: cp == 1 ? 'is-disabled' : '',
                    anchor: cp != 1 ? _this._getPaginationAnchor(cp / 1 - 1, m, href, qp) : null
                },
                next: {
                    classes: cp == tp ? 'is-disabled' : '',
                    anchor: cp != tp ? _this._getPaginationAnchor(cp / 1 + 1, m, href, qp) : null
                },
                last: {
                    classes: cp == tp ? 'is-disabled' : '',
                    anchor: cp != tp ? _this._getPaginationAnchor(tp, m, href, qp) : null
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
        var _a = this.options
        // ===== WARNINGS =====
        , mode = _a.mode, href = _a.href, queryParams = _a.queryParams;
        // ===== WARNINGS =====
        if (!['href', 'payload'].includes(mode)) {
            console.warn('(smart-pagination) The "mode" option is incorrect. Please specify "href" or "payload" as the mode option.');
        }
        var _b = this.paginationBuilder(totalPages, currentPage, pageLimit, mode, href, queryParams), links = _b.links, first = _b.first, prev = _b.prev, next = _b.next, last = _b.last;
        return {
            first: first, prev: prev, next: next, last: last, links: links,
            select: sizes ? {
                label: 'Numero di risultati',
                options: sizes.list.map((/**
                 * @param {?} s
                 * @return {?}
                 */
                function (s) {
                    return {
                        text: s,
                        selected: s == sizes.active,
                    };
                })),
                payload: 'select-size'
            } : null
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
                    payload: { source: 'pagination', page: page }
                };
            case 'href':
                return {
                    href: queryParams ? href : href + page,
                    queryParams: queryParams ? tslib_1.__assign({}, queryParams, { page: page }) : null
                };
            default:
                break;
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtcGFnaW5hdGlvbi5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24vZGF0YS1zb3VyY2VzL3NtYXJ0LXBhZ2luYXRpb24uZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFL0M7SUFBdUMsNkNBQVU7SUFBakQ7UUFBQSxxRUE2SEM7UUFqR1MsdUJBQWlCOzs7Ozs7Ozs7UUFBRyxVQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRTs7Z0JBQzVDLE1BQU0sR0FBRyxFQUFFO1lBQ2pCOzs7Ozs7O2NBT0U7Ozs7Ozs7Ozs7O2dCQUNFLEtBQUssR0FBRyxFQUFFO1lBQ2QsSUFBSSxFQUFFLElBQUksS0FBSyxFQUFFO2dCQUNmLEtBQUssR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2FBQ2hCO1lBQ0QsSUFBSSxLQUFLLEVBQUU7O29CQUVQLEVBQUUsU0FBUTs7b0JBQUUsV0FBVztnQkFDdkIsRUFBRSxTQUFRLENBQUMsYUFBYTs7Z0JBQzFCLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFFO29CQUM5QixJQUFJLEVBQUUsS0FBSyxDQUFDLEVBQUU7d0JBQ1osRUFBRSxHQUFHLEVBQUUsQ0FBQzt3QkFDUixFQUFFLEdBQUcsQ0FBQyxDQUFDO3dCQUNQLHVDQUF1Qzt3QkFDdkMsNENBQTRDO3FCQUM3Qzt5QkFBTSxJQUFJLEVBQUUsR0FBRyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFO3dCQUM1QyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FB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ICdAbjctZnJvbnRlbmQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBTbWFydFBhZ2luYXRpb25EUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSkge1xuICAgIGNvbnN0IHsgdG90YWxQYWdlcywgY3VycmVudFBhZ2UsIHBhZ2VMaW1pdCwgc2l6ZXMgfSA9IGRhdGFcbiAgICBjb25zdCB7IG1vZGUsIGhyZWYsIHF1ZXJ5UGFyYW1zIH0gPSB0aGlzLm9wdGlvbnNcbiAgICAvLyA9PT09PSBXQVJOSU5HUyA9PT09PVxuICAgIGlmICghWydocmVmJywgJ3BheWxvYWQnXS5pbmNsdWRlcyhtb2RlKSkge1xuICAgICAgY29uc29sZS53YXJuKCcoc21hcnQtcGFnaW5hdGlvbikgVGhlIFwibW9kZVwiIG9wdGlvbiBpcyBpbmNvcnJlY3QuIFBsZWFzZSBzcGVjaWZ5IFwiaHJlZlwiIG9yIFwicGF5bG9hZFwiIGFzIHRoZSBtb2RlIG9wdGlvbi4nKVxuICAgIH1cblxuICAgIGNvbnN0IHsgbGlua3MsIGZpcnN0LCBwcmV2LCBuZXh0LCBsYXN0IH0gPSB0aGlzLnBhZ2luYXRpb25CdWlsZGVyKFxuICAgICAgdG90YWxQYWdlcywgY3VycmVudFBhZ2UsIHBhZ2VMaW1pdCxcbiAgICAgIG1vZGUsIGhyZWYsIHF1ZXJ5UGFyYW1zKVxuICAgIHJldHVybiB7XG4gICAgICBmaXJzdCwgcHJldiwgbmV4dCwgbGFzdCwgbGlua3MsXG4gICAgICBzZWxlY3Q6IHNpemVzID8ge1xuICAgICAgICBsYWJlbDogJ051bWVybyBkaSByaXN1bHRhdGknLFxuICAgICAgICBvcHRpb25zOiBzaXplcy5saXN0Lm1hcChzID0+IHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdGV4dDogcyxcbiAgICAgICAgICAgIHNlbGVjdGVkOiBzID09IHNpemVzLmFjdGl2ZSxcbiAgICAgICAgICB9O1xuICAgICAgICB9KSxcbiAgICAgICAgcGF5bG9hZDogJ3NlbGVjdC1zaXplJ1xuICAgICAgfSA6IG51bGxcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHBhZ2luYXRpb25CdWlsZGVyID0gKHRwLCBjcCwgcGwsIG0sIGhyZWYsIHFwKSA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gW11cbiAgICAvKlxuICAgICAgdHAgLSB0b3RhbCBwYWdlc1xuICAgICAgY3AgLSBjdXJyZW50IHBhZ2VcbiAgICAgIHBsIC0gcGFnZSBsaW1pdFxuICAgICAgbSAtIHBhZ2luYXRpb24gbW9kZSAoaHJlZiBvciBwYXlsb2FkcylcbiAgICAgIGhyZWYgLSBocmVmIGZvciBhbmNob3Igd3JhcHBlclxuICAgICAgcXAgLSBxdWVyeSBwYXJhbXMgZm9yIHBhZ2luYXRpb25cbiAgICAqL1xuICAgIGxldCBsaW1pdCA9IHBsO1xuICAgIGlmICh0cCA8PSBsaW1pdCkge1xuICAgICAgbGltaXQgPSB0cCAtIDE7XG4gICAgfVxuICAgIGlmIChsaW1pdCkge1xuICAgICAgbGV0XG4gICAgICAgIGxwOiBudW1iZXIsIC8vbGFzdCBwYWdlXG4gICAgICAgIGZwOiBudW1iZXIgLy8gZmlyc3QgcGFnZVxuICAgICAgaWYgKGNwID4gTWF0aC5mbG9vcihsaW1pdCAvIDIpKSB7XG4gICAgICAgIGlmICh0cCA9PT0gMikge1xuICAgICAgICAgIGxwID0gdHA7XG4gICAgICAgICAgZnAgPSAxO1xuICAgICAgICAgIC8vIHdoZW4gY3VycmVudFBhZ2UgaXMgYWZ0ZXIgaGFsZi1wb2ludFxuICAgICAgICAgIC8vIChleGFtcGxlOiBbIDE0IF1bIDE1IF1bITE2IV1bIDE3IF1bIDE4IF0pXG4gICAgICAgIH0gZWxzZSBpZiAoY3AgPCAodHAgLSBNYXRoLmZsb29yKGxpbWl0IC8gMikpKSB7XG4gICAgICAgICAgbHAgPSBjcCAvIDEgKyBNYXRoLmZsb29yKGxpbWl0IC8gMilcbiAgICAgICAgICBmcCA9IGNwIC8gMSAtIE1hdGguZmxvb3IobGltaXQgLyAyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBscCA9IHRwO1xuICAgICAgICAgIGZwID0gY3AgLSBsaW1pdCArICh0cCAtIGNwKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gd2hlbiBjdXJyZW50UGFnZSBpcyBiZWZvcmUgaGFsZi1wb2ludFxuICAgICAgICAvLyAoZXhhbXBsZTogWyAxIF1bITIhXVsgMyBdWyA0IF1bIDUgXSlcbiAgICAgICAgbHAgPSBsaW1pdCsrO1xuICAgICAgICBmcCA9IDE7XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBpID0gZnA7IGkgPD0gbHA7IGkrKykge1xuICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgdGV4dDogU3RyaW5nKGkpLFxuICAgICAgICAgIGNsYXNzZXM6IGNwID09IGkgPyAnaXMtYWN0aXZlJyA6ICcnLFxuICAgICAgICAgIGFuY2hvcjogY3AgIT0gaSA/IHRoaXMuX2dldFBhZ2luYXRpb25BbmNob3IoaSwgbSwgaHJlZiwgcXApIDogbnVsbFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICB0ZXh0OiAnMScsXG4gICAgICAgIGNsYXNzZXM6IGNwID09IDEgPyAnaXMtYWN0aXZlJyA6ICcnLFxuICAgICAgICBhbmNob3I6IGNwICE9PSAxID8gdGhpcy5fZ2V0UGFnaW5hdGlvbkFuY2hvcigxLCBtLCBocmVmLCBxcCkgOiBudWxsXG4gICAgICB9KTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgdHA7IGkrKykge1xuICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgdGV4dDogU3RyaW5nKGkgKyAxKSxcbiAgICAgICAgICBjbGFzc2VzOiBjcCA9PSBpICsgMSA/ICdpcy1hY3RpdmUnIDogJycsXG4gICAgICAgICAgYW5jaG9yOiBjcCAhPT0gaSArIDEgPyB0aGlzLl9nZXRQYWdpbmF0aW9uQW5jaG9yKGkgKyAxLCBtLCBocmVmLCBxcCkgOiBudWxsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgbGlua3M6IHJlc3VsdCxcbiAgICAgIGZpcnN0OiB7XG4gICAgICAgIGNsYXNzZXM6IGNwID09IDEgPyAnaXMtZGlzYWJsZWQnIDogJycsXG4gICAgICAgIGFuY2hvcjogY3AgIT0gMSA/IHRoaXMuX2dldFBhZ2luYXRpb25BbmNob3IoMSwgbSwgaHJlZiwgcXApIDogbnVsbFxuICAgICAgfSxcbiAgICAgIHByZXY6IHtcbiAgICAgICAgY2xhc3NlczogY3AgPT0gMSA/ICdpcy1kaXNhYmxlZCcgOiAnJyxcbiAgICAgICAgYW5jaG9yOiBjcCAhPSAxID8gdGhpcy5fZ2V0UGFnaW5hdGlvbkFuY2hvcihjcCAvIDEgLSAxLCBtLCBocmVmLCBxcCkgOiBudWxsXG4gICAgICB9LFxuICAgICAgbmV4dDoge1xuICAgICAgICBjbGFzc2VzOiBjcCA9PSB0cCA/ICdpcy1kaXNhYmxlZCcgOiAnJyxcbiAgICAgICAgYW5jaG9yOiBjcCAhPSB0cCA/IHRoaXMuX2dldFBhZ2luYXRpb25BbmNob3IoY3AgLyAxICsgMSwgbSwgaHJlZiwgcXApIDogbnVsbFxuICAgICAgfSxcbiAgICAgIGxhc3Q6IHtcbiAgICAgICAgY2xhc3NlczogY3AgPT0gdHAgPyAnaXMtZGlzYWJsZWQnIDogJycsXG4gICAgICAgIGFuY2hvcjogY3AgIT0gdHAgPyB0aGlzLl9nZXRQYWdpbmF0aW9uQW5jaG9yKHRwLCBtLCBocmVmLCBxcCkgOiBudWxsXG4gICAgICB9LFxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2dldFBhZ2luYXRpb25BbmNob3IocGFnZSwgbW9kZSwgaHJlZiwgcXVlcnlQYXJhbXMpIHtcbiAgICBzd2l0Y2ggKG1vZGUpIHtcbiAgICAgIGNhc2UgJ3BheWxvYWQnOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHBheWxvYWQ6IHsgc291cmNlOiAncGFnaW5hdGlvbicsIHBhZ2UgfVxuICAgICAgICB9XG4gICAgICBjYXNlICdocmVmJzpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBocmVmOiBxdWVyeVBhcmFtcyA/IGhyZWYgOiBocmVmICsgcGFnZSxcbiAgICAgICAgICBxdWVyeVBhcmFtczogcXVlcnlQYXJhbXMgPyB7XG4gICAgICAgICAgICAuLi5xdWVyeVBhcmFtcyxcbiAgICAgICAgICAgIHBhZ2U6IHBhZ2VcbiAgICAgICAgICB9IDogbnVsbFxuICAgICAgICB9XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbn0iXX0=