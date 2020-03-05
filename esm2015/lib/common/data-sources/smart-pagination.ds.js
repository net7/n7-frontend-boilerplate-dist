/**
 * @fileoverview added by tsickle
 * Generated from: lib/common/data-sources/smart-pagination.ds.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataSource } from '@n7-frontend/core';
export class SmartPaginationDS extends DataSource {
    constructor() {
        super(...arguments);
        this.paginationBuilder = (/**
         * @param {?} tp
         * @param {?} cp
         * @param {?} pl
         * @param {?} m
         * @param {?} href
         * @param {?} qp
         * @return {?}
         */
        (tp, cp, pl, m, href, qp) => {
            /** @type {?} */
            const result = [];
            /*
                  tp - total pages
                  cp - current page
                  pl - page limit
                  m - pagination mode (href or payloads)
                  href - href for anchor wrapper
                  qp - query params for pagination
                */
            /** @type {?} */
            let limit = pl;
            if (tp <= limit) {
                limit = tp - 1;
            }
            if (limit) {
                /** @type {?} */
                let lp;
                // last page
                /** @type {?} */
                let fp;
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
                for (let i = fp; i <= lp; i += 1) {
                    result.push({
                        text: String(i),
                        classes: cp === i ? 'is-active' : '',
                        anchor: cp !== i ? this._getPaginationAnchor(i, m, href, qp) : null,
                    });
                }
            }
            else {
                result.push({
                    text: '1',
                    classes: cp === 1 ? 'is-active' : '',
                    anchor: cp !== 1 ? this._getPaginationAnchor(1, m, href, qp) : null,
                });
                for (let i = 1; i < tp; i += 1) {
                    result.push({
                        text: String(i + 1),
                        classes: cp === i + 1 ? 'is-active' : '',
                        anchor: cp !== i + 1 ? this._getPaginationAnchor(i + 1, m, href, qp) : null,
                    });
                }
            }
            return {
                links: result,
                first: {
                    classes: cp === 1 ? 'is-disabled' : '',
                    anchor: cp !== 1 ? this._getPaginationAnchor(1, m, href, qp) : null,
                },
                prev: {
                    classes: cp === 1 ? 'is-disabled' : '',
                    anchor: cp !== 1 ? this._getPaginationAnchor(cp / 1 - 1, m, href, qp) : null,
                },
                next: {
                    classes: cp === tp ? 'is-disabled' : '',
                    anchor: cp !== tp ? this._getPaginationAnchor(cp / 1 + 1, m, href, qp) : null,
                },
                last: {
                    classes: cp === tp ? 'is-disabled' : '',
                    anchor: cp !== tp ? this._getPaginationAnchor(tp, m, href, qp) : null,
                },
            };
        });
    }
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    transform(data) {
        const { totalPages, currentPage, pageLimit, sizes, } = data;
        const { mode, href, queryParams } = this.options;
        // ===== WARNINGS =====
        if (!['href', 'payload'].includes(mode)) {
            console.warn('(smart-pagination) The "mode" option is incorrect. Please specify "href" or "payload" as the mode option.');
        }
        const { links, first, prev, next, last, } = this.paginationBuilder(totalPages, +currentPage, pageLimit, mode, href, queryParams);
        return {
            first,
            prev,
            next,
            last,
            links,
            select: sizes ? {
                label: 'Numero di risultati',
                options: sizes.list.map((/**
                 * @param {?} s
                 * @return {?}
                 */
                (s) => ({
                    text: s,
                    selected: s === sizes.active,
                }))),
                payload: 'select-size',
            } : null,
        };
    }
    /**
     * @private
     * @param {?} page
     * @param {?} mode
     * @param {?} href
     * @param {?} queryParams
     * @return {?}
     */
    _getPaginationAnchor(page, mode, href, queryParams) {
        switch (mode) {
            case 'payload':
                return {
                    payload: { source: 'pagination', page },
                };
            case 'href':
                return {
                    href: queryParams ? href : href + page,
                    queryParams: queryParams ? Object.assign({}, queryParams, { page }) : null,
                };
            default:
                break;
        }
        return {};
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    SmartPaginationDS.prototype.paginationBuilder;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtcGFnaW5hdGlvbi5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24vZGF0YS1zb3VyY2VzL3NtYXJ0LXBhZ2luYXRpb24uZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFL0MsTUFBTSxPQUFPLGlCQUFrQixTQUFRLFVBQVU7SUFBakQ7O1FBa0NVLHNCQUFpQjs7Ozs7Ozs7O1FBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBVSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFOztrQkFDeEQsTUFBTSxHQUFHLEVBQUU7Ozs7Ozs7Ozs7Z0JBU2IsS0FBSyxHQUFHLEVBQUU7WUFDZCxJQUFJLEVBQUUsSUFBSSxLQUFLLEVBQUU7Z0JBQ2YsS0FBSyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7YUFDaEI7WUFDRCxJQUFJLEtBQUssRUFBRTs7b0JBRVAsRUFBVTs7O29CQUNSLEVBQVU7Z0JBQ2QsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUU7b0JBQzlCLElBQUksRUFBRSxLQUFLLENBQUMsRUFBRTt3QkFDWixFQUFFLEdBQUcsRUFBRSxDQUFDO3dCQUNSLEVBQUUsR0FBRyxDQUFDLENBQUM7d0JBQ1AsdUNBQXVDO3dCQUN2Qyw0Q0FBNEM7cUJBQzdDO3lCQUFNLElBQUksRUFBRSxHQUFHLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUU7d0JBQzVDLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO3dCQUNwQyxFQUFFLEdBQUcsRUFB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ZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgU21hcnRQYWdpbmF0aW9uRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcclxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpIHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgdG90YWxQYWdlcywgY3VycmVudFBhZ2UsIHBhZ2VMaW1pdCwgc2l6ZXMsXHJcbiAgICB9ID0gZGF0YTtcclxuICAgIGNvbnN0IHsgbW9kZSwgaHJlZiwgcXVlcnlQYXJhbXMgfSA9IHRoaXMub3B0aW9ucztcclxuICAgIC8vID09PT09IFdBUk5JTkdTID09PT09XHJcbiAgICBpZiAoIVsnaHJlZicsICdwYXlsb2FkJ10uaW5jbHVkZXMobW9kZSkpIHtcclxuICAgICAgY29uc29sZS53YXJuKCcoc21hcnQtcGFnaW5hdGlvbikgVGhlIFwibW9kZVwiIG9wdGlvbiBpcyBpbmNvcnJlY3QuIFBsZWFzZSBzcGVjaWZ5IFwiaHJlZlwiIG9yIFwicGF5bG9hZFwiIGFzIHRoZSBtb2RlIG9wdGlvbi4nKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7XHJcbiAgICAgIGxpbmtzLCBmaXJzdCwgcHJldiwgbmV4dCwgbGFzdCxcclxuICAgIH0gPSB0aGlzLnBhZ2luYXRpb25CdWlsZGVyKFxyXG4gICAgICB0b3RhbFBhZ2VzLCArY3VycmVudFBhZ2UsIHBhZ2VMaW1pdCxcclxuICAgICAgbW9kZSwgaHJlZiwgcXVlcnlQYXJhbXMsXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZmlyc3QsXHJcbiAgICAgIHByZXYsXHJcbiAgICAgIG5leHQsXHJcbiAgICAgIGxhc3QsXHJcbiAgICAgIGxpbmtzLFxyXG4gICAgICBzZWxlY3Q6IHNpemVzID8ge1xyXG4gICAgICAgIGxhYmVsOiAnTnVtZXJvIGRpIHJpc3VsdGF0aScsXHJcbiAgICAgICAgb3B0aW9uczogc2l6ZXMubGlzdC5tYXAoKHMpID0+ICh7XHJcbiAgICAgICAgICB0ZXh0OiBzLFxyXG4gICAgICAgICAgc2VsZWN0ZWQ6IHMgPT09IHNpemVzLmFjdGl2ZSxcclxuICAgICAgICB9KSksXHJcbiAgICAgICAgcGF5bG9hZDogJ3NlbGVjdC1zaXplJyxcclxuICAgICAgfSA6IG51bGwsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBwYWdpbmF0aW9uQnVpbGRlciA9ICh0cCwgY3A6IG51bWJlciwgcGwsIG0sIGhyZWYsIHFwKSA9PiB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBbXTtcclxuICAgIC8qXHJcbiAgICAgIHRwIC0gdG90YWwgcGFnZXNcclxuICAgICAgY3AgLSBjdXJyZW50IHBhZ2VcclxuICAgICAgcGwgLSBwYWdlIGxpbWl0XHJcbiAgICAgIG0gLSBwYWdpbmF0aW9uIG1vZGUgKGhyZWYgb3IgcGF5bG9hZHMpXHJcbiAgICAgIGhyZWYgLSBocmVmIGZvciBhbmNob3Igd3JhcHBlclxyXG4gICAgICBxcCAtIHF1ZXJ5IHBhcmFtcyBmb3IgcGFnaW5hdGlvblxyXG4gICAgKi9cclxuICAgIGxldCBsaW1pdCA9IHBsO1xyXG4gICAgaWYgKHRwIDw9IGxpbWl0KSB7XHJcbiAgICAgIGxpbWl0ID0gdHAgLSAxO1xyXG4gICAgfVxyXG4gICAgaWYgKGxpbWl0KSB7XHJcbiAgICAgIGxldFxyXG4gICAgICAgIGxwOiBudW1iZXI7IC8vIGxhc3QgcGFnZVxyXG4gICAgICBsZXQgZnA6IG51bWJlcjsgLy8gZmlyc3QgcGFnZVxyXG4gICAgICBpZiAoY3AgPiBNYXRoLmZsb29yKGxpbWl0IC8gMikpIHtcclxuICAgICAgICBpZiAodHAgPT09IDIpIHtcclxuICAgICAgICAgIGxwID0gdHA7XHJcbiAgICAgICAgICBmcCA9IDE7XHJcbiAgICAgICAgICAvLyB3aGVuIGN1cnJlbnRQYWdlIGlzIGFmdGVyIGhhbGYtcG9pbnRcclxuICAgICAgICAgIC8vIChleGFtcGxlOiBbIDE0IF1bIDE1IF1bITE2IV1bIDE3IF1bIDE4IF0pXHJcbiAgICAgICAgfSBlbHNlIGlmIChjcCA8ICh0cCAtIE1hdGguZmxvb3IobGltaXQgLyAyKSkpIHtcclxuICAgICAgICAgIGxwID0gY3AgLyAxICsgTWF0aC5mbG9vcihsaW1pdCAvIDIpO1xyXG4gICAgICAgICAgZnAgPSBjcCAvIDEgLSBNYXRoLmZsb29yKGxpbWl0IC8gMik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGxwID0gdHA7XHJcbiAgICAgICAgICBmcCA9IGNwIC0gbGltaXQgKyAodHAgLSBjcCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIHdoZW4gY3VycmVudFBhZ2UgaXMgYmVmb3JlIGhhbGYtcG9pbnRcclxuICAgICAgICAvLyAoZXhhbXBsZTogWyAxIF1bITIhXVsgMyBdWyA0IF1bIDUgXSlcclxuICAgICAgICBscCA9IGxpbWl0ICsgMTtcclxuICAgICAgICBmcCA9IDE7XHJcbiAgICAgIH1cclxuICAgICAgZm9yIChsZXQgaSA9IGZwOyBpIDw9IGxwOyBpICs9IDEpIHtcclxuICAgICAgICByZXN1bHQucHVzaCh7XHJcbiAgICAgICAgICB0ZXh0OiBTdHJpbmcoaSksXHJcbiAgICAgICAgICBjbGFzc2VzOiBjcCA9PT0gaSA/ICdpcy1hY3RpdmUnIDogJycsXHJcbiAgICAgICAgICBhbmNob3I6IGNwICE9PSBpID8gdGhpcy5fZ2V0UGFnaW5hdGlvbkFuY2hvcihpLCBtLCBocmVmLCBxcCkgOiBudWxsLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXN1bHQucHVzaCh7XHJcbiAgICAgICAgdGV4dDogJzEnLFxyXG4gICAgICAgIGNsYXNzZXM6IGNwID09PSAxID8gJ2lzLWFjdGl2ZScgOiAnJyxcclxuICAgICAgICBhbmNob3I6IGNwICE9PSAxID8gdGhpcy5fZ2V0UGFnaW5hdGlvbkFuY2hvcigxLCBtLCBocmVmLCBxcCkgOiBudWxsLFxyXG4gICAgICB9KTtcclxuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCB0cDsgaSArPSAxKSB7XHJcbiAgICAgICAgcmVzdWx0LnB1c2goe1xyXG4gICAgICAgICAgdGV4dDogU3RyaW5nKGkgKyAxKSxcclxuICAgICAgICAgIGNsYXNzZXM6IGNwID09PSBpICsgMSA/ICdpcy1hY3RpdmUnIDogJycsXHJcbiAgICAgICAgICBhbmNob3I6IGNwICE9PSBpICsgMSA/IHRoaXMuX2dldFBhZ2luYXRpb25BbmNob3IoaSArIDEsIG0sIGhyZWYsIHFwKSA6IG51bGwsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGxpbmtzOiByZXN1bHQsXHJcbiAgICAgIGZpcnN0OiB7XHJcbiAgICAgICAgY2xhc3NlczogY3AgPT09IDEgPyAnaXMtZGlzYWJsZWQnIDogJycsXHJcbiAgICAgICAgYW5jaG9yOiBjcCAhPT0gMSA/IHRoaXMuX2dldFBhZ2luYXRpb25BbmNob3IoMSwgbSwgaHJlZiwgcXApIDogbnVsbCxcclxuICAgICAgfSxcclxuICAgICAgcHJldjoge1xyXG4gICAgICAgIGNsYXNzZXM6IGNwID09PSAxID8gJ2lzLWRpc2FibGVkJyA6ICcnLFxyXG4gICAgICAgIGFuY2hvcjogY3AgIT09IDEgPyB0aGlzLl9nZXRQYWdpbmF0aW9uQW5jaG9yKGNwIC8gMSAtIDEsIG0sIGhyZWYsIHFwKSA6IG51bGwsXHJcbiAgICAgIH0sXHJcbiAgICAgIG5leHQ6IHtcclxuICAgICAgICBjbGFzc2VzOiBjcCA9PT0gdHAgPyAnaXMtZGlzYWJsZWQnIDogJycsXHJcbiAgICAgICAgYW5jaG9yOiBjcCAhPT0gdHAgPyB0aGlzLl9nZXRQYWdpbmF0aW9uQW5jaG9yKGNwIC8gMSArIDEsIG0sIGhyZWYsIHFwKSA6IG51bGwsXHJcbiAgICAgIH0sXHJcbiAgICAgIGxhc3Q6IHtcclxuICAgICAgICBjbGFzc2VzOiBjcCA9PT0gdHAgPyAnaXMtZGlzYWJsZWQnIDogJycsXHJcbiAgICAgICAgYW5jaG9yOiBjcCAhPT0gdHAgPyB0aGlzLl9nZXRQYWdpbmF0aW9uQW5jaG9yKHRwLCBtLCBocmVmLCBxcCkgOiBudWxsLFxyXG4gICAgICB9LFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2dldFBhZ2luYXRpb25BbmNob3IocGFnZSwgbW9kZSwgaHJlZiwgcXVlcnlQYXJhbXMpIHtcclxuICAgIHN3aXRjaCAobW9kZSkge1xyXG4gICAgICBjYXNlICdwYXlsb2FkJzpcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgcGF5bG9hZDogeyBzb3VyY2U6ICdwYWdpbmF0aW9uJywgcGFnZSB9LFxyXG4gICAgICAgIH07XHJcbiAgICAgIGNhc2UgJ2hyZWYnOlxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBocmVmOiBxdWVyeVBhcmFtcyA/IGhyZWYgOiBocmVmICsgcGFnZSxcclxuICAgICAgICAgIHF1ZXJ5UGFyYW1zOiBxdWVyeVBhcmFtcyA/IHtcclxuICAgICAgICAgICAgLi4ucXVlcnlQYXJhbXMsXHJcbiAgICAgICAgICAgIHBhZ2UsXHJcbiAgICAgICAgICB9IDogbnVsbCxcclxuICAgICAgICB9O1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHt9O1xyXG4gIH1cclxufVxyXG4iXX0=