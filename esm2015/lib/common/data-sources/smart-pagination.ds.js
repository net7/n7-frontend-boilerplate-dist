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
            const result = []
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
            let limit = pl;
            if (tp <= limit) {
                limit = tp - 1;
            }
            if (limit) {
                /** @type {?} */
                let lp;
                /** @type {?} */
                let //last page
                fp // first page
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
                for (let i = fp; i <= lp; i++) {
                    result.push({
                        text: String(i),
                        classes: cp == i ? 'is-active' : '',
                        anchor: cp != i ? this._getPaginationAnchor(i, m, href, qp) : null
                    });
                }
            }
            else {
                result.push({
                    text: '1',
                    classes: cp == 1 ? 'is-active' : '',
                    anchor: cp !== 1 ? this._getPaginationAnchor(1, m, href, qp) : null
                });
                for (let i = 1; i < tp; i++) {
                    result.push({
                        text: String(i + 1),
                        classes: cp == i + 1 ? 'is-active' : '',
                        anchor: cp !== i + 1 ? this._getPaginationAnchor(i + 1, m, href, qp) : null
                    });
                }
            }
            return {
                links: result,
                first: {
                    classes: cp == 1 ? 'is-disabled' : '',
                    anchor: cp != 1 ? this._getPaginationAnchor(1, m, href, qp) : null
                },
                prev: {
                    classes: cp == 1 ? 'is-disabled' : '',
                    anchor: cp != 1 ? this._getPaginationAnchor(cp / 1 - 1, m, href, qp) : null
                },
                next: {
                    classes: cp == tp ? 'is-disabled' : '',
                    anchor: cp != tp ? this._getPaginationAnchor(cp / 1 + 1, m, href, qp) : null
                },
                last: {
                    classes: cp == tp ? 'is-disabled' : '',
                    anchor: cp != tp ? this._getPaginationAnchor(tp, m, href, qp) : null
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
        const { totalPages, currentPage, pageLimit, sizes } = data;
        const { mode, href, queryParams } = this.options
        // ===== WARNINGS =====
        ;
        // ===== WARNINGS =====
        if (!['href', 'payload'].includes(mode)) {
            console.warn('(smart-pagination) The "mode" option is incorrect. Please specify "href" or "payload" as the mode option.');
        }
        const { links, first, prev, next, last } = this.paginationBuilder(totalPages, currentPage, pageLimit, mode, href, queryParams);
        return {
            first, prev, next, last, links,
            select: sizes ? {
                label: 'Numero di risultati',
                options: sizes.list.map((/**
                 * @param {?} s
                 * @return {?}
                 */
                s => {
                    return {
                        text: s,
                        selected: s == sizes.active,
                    };
                })),
                payload: 'select-size'
            } : null
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
                    payload: { source: 'pagination', page }
                };
            case 'href':
                return {
                    href: queryParams ? href : href + page,
                    queryParams: queryParams ? Object.assign({}, queryParams, { page: page }) : null
                };
            default:
                break;
        }
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    SmartPaginationDS.prototype.paginationBuilder;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtcGFnaW5hdGlvbi5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24vZGF0YS1zb3VyY2VzL3NtYXJ0LXBhZ2luYXRpb24uZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFL0MsTUFBTSxPQUFPLGlCQUFrQixTQUFRLFVBQVU7SUFBakQ7O1FBNEJVLHNCQUFpQjs7Ozs7Ozs7O1FBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFOztrQkFDaEQsTUFBTSxHQUFHLEVBQUU7WUFDakI7Ozs7Ozs7Y0FPRTs7Ozs7Ozs7Ozs7Z0JBQ0UsS0FBSyxHQUFHLEVBQUU7WUFDZCxJQUFJLEVBQUUsSUFBSSxLQUFLLEVBQUU7Z0JBQ2YsS0FBSyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7YUFDaEI7WUFDRCxJQUFJLEtBQUssRUFBRTs7b0JBRVAsRUFBVTs7b0JBQUUsV0FBVztnQkFDdkIsRUFBVSxDQUFDLGFBQWE7O2dCQUMxQixJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRTtvQkFDOUIsSUFBSSxFQUFFLEtBQUssQ0FBQyxFQUFFO3dCQUNaLEVBQUUsR0FBRyxFQUFFLENBQUM7d0JBQ1IsRUFBRSxHQUFHLENBQUMsQ0FBQzt3QkFDUCx1Q0FBdUM7d0JBQ3ZDLDRDQUE0QztxQkFDN0M7eUJBQU0sSUFBSSxFQUFFLEdBQUcsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRTt3QkFDNUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFL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YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIFNtYXJ0UGFnaW5hdGlvbkRTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKSB7XG4gICAgY29uc3QgeyB0b3RhbFBhZ2VzLCBjdXJyZW50UGFnZSwgcGFnZUxpbWl0LCBzaXplcyB9ID0gZGF0YVxuICAgIGNvbnN0IHsgbW9kZSwgaHJlZiwgcXVlcnlQYXJhbXMgfSA9IHRoaXMub3B0aW9uc1xuICAgIC8vID09PT09IFdBUk5JTkdTID09PT09XG4gICAgaWYgKCFbJ2hyZWYnLCAncGF5bG9hZCddLmluY2x1ZGVzKG1vZGUpKSB7XG4gICAgICBjb25zb2xlLndhcm4oJyhzbWFydC1wYWdpbmF0aW9uKSBUaGUgXCJtb2RlXCIgb3B0aW9uIGlzIGluY29ycmVjdC4gUGxlYXNlIHNwZWNpZnkgXCJocmVmXCIgb3IgXCJwYXlsb2FkXCIgYXMgdGhlIG1vZGUgb3B0aW9uLicpXG4gICAgfVxuXG4gICAgY29uc3QgeyBsaW5rcywgZmlyc3QsIHByZXYsIG5leHQsIGxhc3QgfSA9IHRoaXMucGFnaW5hdGlvbkJ1aWxkZXIoXG4gICAgICB0b3RhbFBhZ2VzLCBjdXJyZW50UGFnZSwgcGFnZUxpbWl0LFxuICAgICAgbW9kZSwgaHJlZiwgcXVlcnlQYXJhbXMpXG4gICAgcmV0dXJuIHtcbiAgICAgIGZpcnN0LCBwcmV2LCBuZXh0LCBsYXN0LCBsaW5rcyxcbiAgICAgIHNlbGVjdDogc2l6ZXMgPyB7XG4gICAgICAgIGxhYmVsOiAnTnVtZXJvIGRpIHJpc3VsdGF0aScsXG4gICAgICAgIG9wdGlvbnM6IHNpemVzLmxpc3QubWFwKHMgPT4ge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0ZXh0OiBzLFxuICAgICAgICAgICAgc2VsZWN0ZWQ6IHMgPT0gc2l6ZXMuYWN0aXZlLFxuICAgICAgICAgIH07XG4gICAgICAgIH0pLFxuICAgICAgICBwYXlsb2FkOiAnc2VsZWN0LXNpemUnXG4gICAgICB9IDogbnVsbFxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcGFnaW5hdGlvbkJ1aWxkZXIgPSAodHAsIGNwLCBwbCwgbSwgaHJlZiwgcXApID0+IHtcbiAgICBjb25zdCByZXN1bHQgPSBbXVxuICAgIC8qXG4gICAgICB0cCAtIHRvdGFsIHBhZ2VzXG4gICAgICBjcCAtIGN1cnJlbnQgcGFnZVxuICAgICAgcGwgLSBwYWdlIGxpbWl0XG4gICAgICBtIC0gcGFnaW5hdGlvbiBtb2RlIChocmVmIG9yIHBheWxvYWRzKVxuICAgICAgaHJlZiAtIGhyZWYgZm9yIGFuY2hvciB3cmFwcGVyXG4gICAgICBxcCAtIHF1ZXJ5IHBhcmFtcyBmb3IgcGFnaW5hdGlvblxuICAgICovXG4gICAgbGV0IGxpbWl0ID0gcGw7XG4gICAgaWYgKHRwIDw9IGxpbWl0KSB7XG4gICAgICBsaW1pdCA9IHRwIC0gMTtcbiAgICB9XG4gICAgaWYgKGxpbWl0KSB7XG4gICAgICBsZXRcbiAgICAgICAgbHA6IG51bWJlciwgLy9sYXN0IHBhZ2VcbiAgICAgICAgZnA6IG51bWJlciAvLyBmaXJzdCBwYWdlXG4gICAgICBpZiAoY3AgPiBNYXRoLmZsb29yKGxpbWl0IC8gMikpIHtcbiAgICAgICAgaWYgKHRwID09PSAyKSB7XG4gICAgICAgICAgbHAgPSB0cDtcbiAgICAgICAgICBmcCA9IDE7XG4gICAgICAgICAgLy8gd2hlbiBjdXJyZW50UGFnZSBpcyBhZnRlciBoYWxmLXBvaW50XG4gICAgICAgICAgLy8gKGV4YW1wbGU6IFsgMTQgXVsgMTUgXVshMTYhXVsgMTcgXVsgMTggXSlcbiAgICAgICAgfSBlbHNlIGlmIChjcCA8ICh0cCAtIE1hdGguZmxvb3IobGltaXQgLyAyKSkpIHtcbiAgICAgICAgICBscCA9IGNwIC8gMSArIE1hdGguZmxvb3IobGltaXQgLyAyKVxuICAgICAgICAgIGZwID0gY3AgLyAxIC0gTWF0aC5mbG9vcihsaW1pdCAvIDIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxwID0gdHA7XG4gICAgICAgICAgZnAgPSBjcCAtIGxpbWl0ICsgKHRwIC0gY3ApO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyB3aGVuIGN1cnJlbnRQYWdlIGlzIGJlZm9yZSBoYWxmLXBvaW50XG4gICAgICAgIC8vIChleGFtcGxlOiBbIDEgXVshMiFdWyAzIF1bIDQgXVsgNSBdKVxuICAgICAgICBscCA9IGxpbWl0Kys7XG4gICAgICAgIGZwID0gMTtcbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGkgPSBmcDsgaSA8PSBscDsgaSsrKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICB0ZXh0OiBTdHJpbmcoaSksXG4gICAgICAgICAgY2xhc3NlczogY3AgPT0gaSA/ICdpcy1hY3RpdmUnIDogJycsXG4gICAgICAgICAgYW5jaG9yOiBjcCAhPSBpID8gdGhpcy5fZ2V0UGFnaW5hdGlvbkFuY2hvcihpLCBtLCBocmVmLCBxcCkgOiBudWxsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgIHRleHQ6ICcxJyxcbiAgICAgICAgY2xhc3NlczogY3AgPT0gMSA/ICdpcy1hY3RpdmUnIDogJycsXG4gICAgICAgIGFuY2hvcjogY3AgIT09IDEgPyB0aGlzLl9nZXRQYWdpbmF0aW9uQW5jaG9yKDEsIG0sIGhyZWYsIHFwKSA6IG51bGxcbiAgICAgIH0pO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCB0cDsgaSsrKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICB0ZXh0OiBTdHJpbmcoaSArIDEpLFxuICAgICAgICAgIGNsYXNzZXM6IGNwID09IGkgKyAxID8gJ2lzLWFjdGl2ZScgOiAnJyxcbiAgICAgICAgICBhbmNob3I6IGNwICE9PSBpICsgMSA/IHRoaXMuX2dldFBhZ2luYXRpb25BbmNob3IoaSArIDEsIG0sIGhyZWYsIHFwKSA6IG51bGxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBsaW5rczogcmVzdWx0LFxuICAgICAgZmlyc3Q6IHtcbiAgICAgICAgY2xhc3NlczogY3AgPT0gMSA/ICdpcy1kaXNhYmxlZCcgOiAnJyxcbiAgICAgICAgYW5jaG9yOiBjcCAhPSAxID8gdGhpcy5fZ2V0UGFnaW5hdGlvbkFuY2hvcigxLCBtLCBocmVmLCBxcCkgOiBudWxsXG4gICAgICB9LFxuICAgICAgcHJldjoge1xuICAgICAgICBjbGFzc2VzOiBjcCA9PSAxID8gJ2lzLWRpc2FibGVkJyA6ICcnLFxuICAgICAgICBhbmNob3I6IGNwICE9IDEgPyB0aGlzLl9nZXRQYWdpbmF0aW9uQW5jaG9yKGNwIC8gMSAtIDEsIG0sIGhyZWYsIHFwKSA6IG51bGxcbiAgICAgIH0sXG4gICAgICBuZXh0OiB7XG4gICAgICAgIGNsYXNzZXM6IGNwID09IHRwID8gJ2lzLWRpc2FibGVkJyA6ICcnLFxuICAgICAgICBhbmNob3I6IGNwICE9IHRwID8gdGhpcy5fZ2V0UGFnaW5hdGlvbkFuY2hvcihjcCAvIDEgKyAxLCBtLCBocmVmLCBxcCkgOiBudWxsXG4gICAgICB9LFxuICAgICAgbGFzdDoge1xuICAgICAgICBjbGFzc2VzOiBjcCA9PSB0cCA/ICdpcy1kaXNhYmxlZCcgOiAnJyxcbiAgICAgICAgYW5jaG9yOiBjcCAhPSB0cCA/IHRoaXMuX2dldFBhZ2luYXRpb25BbmNob3IodHAsIG0sIGhyZWYsIHFwKSA6IG51bGxcbiAgICAgIH0sXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0UGFnaW5hdGlvbkFuY2hvcihwYWdlLCBtb2RlLCBocmVmLCBxdWVyeVBhcmFtcykge1xuICAgIHN3aXRjaCAobW9kZSkge1xuICAgICAgY2FzZSAncGF5bG9hZCc6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcGF5bG9hZDogeyBzb3VyY2U6ICdwYWdpbmF0aW9uJywgcGFnZSB9XG4gICAgICAgIH1cbiAgICAgIGNhc2UgJ2hyZWYnOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGhyZWY6IHF1ZXJ5UGFyYW1zID8gaHJlZiA6IGhyZWYgKyBwYWdlLFxuICAgICAgICAgIHF1ZXJ5UGFyYW1zOiBxdWVyeVBhcmFtcyA/IHtcbiAgICAgICAgICAgIC4uLnF1ZXJ5UGFyYW1zLFxuICAgICAgICAgICAgcGFnZTogcGFnZVxuICAgICAgICAgIH0gOiBudWxsXG4gICAgICAgIH1cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxufSJdfQ==