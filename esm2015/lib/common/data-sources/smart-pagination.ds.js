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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtcGFnaW5hdGlvbi5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24vZGF0YS1zb3VyY2VzL3NtYXJ0LXBhZ2luYXRpb24uZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFL0MsTUFBTSxPQUFPLGlCQUFrQixTQUFRLFVBQVU7SUFBakQ7O1FBa0NVLHNCQUFpQjs7Ozs7Ozs7O1FBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBVSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFOztrQkFDeEQsTUFBTSxHQUFHLEVBQUU7Ozs7Ozs7Ozs7Z0JBU2IsS0FBSyxHQUFHLEVBQUU7WUFDZCxJQUFJLEVBQUUsSUFBSSxLQUFLLEVBQUU7Z0JBQ2YsS0FBSyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7YUFDaEI7WUFDRCxJQUFJLEtBQUssRUFBRTs7b0JBRVAsRUFBVTs7O29CQUNSLEVBQVU7Z0JBQ2QsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUU7b0JBQzlCLElBQUksRUFBRSxLQUFLLENBQUMsRUFBRTt3QkFDWixFQUFFLEdBQUcsRUFBRSxDQUFDO3dCQUNSLEVBQUUsR0FBRyxDQUFDLENBQUM7d0JBQ1AsdUNBQXVDO3dCQUN2Qyw0Q0FBNEM7cUJBQzdDO3lCQUFNLElBQUksRUFBRSxHQUFHLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUU7d0JBQzVDLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO3dCQUNwQyxFQUFFLEdBQUcsRUFB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ZSc7XG5cbmV4cG9ydCBjbGFzcyBTbWFydFBhZ2luYXRpb25EUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpIHtcbiAgICBjb25zdCB7XG4gICAgICB0b3RhbFBhZ2VzLCBjdXJyZW50UGFnZSwgcGFnZUxpbWl0LCBzaXplcyxcbiAgICB9ID0gZGF0YTtcbiAgICBjb25zdCB7IG1vZGUsIGhyZWYsIHF1ZXJ5UGFyYW1zIH0gPSB0aGlzLm9wdGlvbnM7XG4gICAgLy8gPT09PT0gV0FSTklOR1MgPT09PT1cbiAgICBpZiAoIVsnaHJlZicsICdwYXlsb2FkJ10uaW5jbHVkZXMobW9kZSkpIHtcbiAgICAgIGNvbnNvbGUud2FybignKHNtYXJ0LXBhZ2luYXRpb24pIFRoZSBcIm1vZGVcIiBvcHRpb24gaXMgaW5jb3JyZWN0LiBQbGVhc2Ugc3BlY2lmeSBcImhyZWZcIiBvciBcInBheWxvYWRcIiBhcyB0aGUgbW9kZSBvcHRpb24uJyk7XG4gICAgfVxuXG4gICAgY29uc3Qge1xuICAgICAgbGlua3MsIGZpcnN0LCBwcmV2LCBuZXh0LCBsYXN0LFxuICAgIH0gPSB0aGlzLnBhZ2luYXRpb25CdWlsZGVyKFxuICAgICAgdG90YWxQYWdlcywgK2N1cnJlbnRQYWdlLCBwYWdlTGltaXQsXG4gICAgICBtb2RlLCBocmVmLCBxdWVyeVBhcmFtcyxcbiAgICApO1xuICAgIHJldHVybiB7XG4gICAgICBmaXJzdCxcbiAgICAgIHByZXYsXG4gICAgICBuZXh0LFxuICAgICAgbGFzdCxcbiAgICAgIGxpbmtzLFxuICAgICAgc2VsZWN0OiBzaXplcyA/IHtcbiAgICAgICAgbGFiZWw6ICdOdW1lcm8gZGkgcmlzdWx0YXRpJyxcbiAgICAgICAgb3B0aW9uczogc2l6ZXMubGlzdC5tYXAoKHMpID0+ICh7XG4gICAgICAgICAgdGV4dDogcyxcbiAgICAgICAgICBzZWxlY3RlZDogcyA9PT0gc2l6ZXMuYWN0aXZlLFxuICAgICAgICB9KSksXG4gICAgICAgIHBheWxvYWQ6ICdzZWxlY3Qtc2l6ZScsXG4gICAgICB9IDogbnVsbCxcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBwYWdpbmF0aW9uQnVpbGRlciA9ICh0cCwgY3A6IG51bWJlciwgcGwsIG0sIGhyZWYsIHFwKSA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgLypcbiAgICAgIHRwIC0gdG90YWwgcGFnZXNcbiAgICAgIGNwIC0gY3VycmVudCBwYWdlXG4gICAgICBwbCAtIHBhZ2UgbGltaXRcbiAgICAgIG0gLSBwYWdpbmF0aW9uIG1vZGUgKGhyZWYgb3IgcGF5bG9hZHMpXG4gICAgICBocmVmIC0gaHJlZiBmb3IgYW5jaG9yIHdyYXBwZXJcbiAgICAgIHFwIC0gcXVlcnkgcGFyYW1zIGZvciBwYWdpbmF0aW9uXG4gICAgKi9cbiAgICBsZXQgbGltaXQgPSBwbDtcbiAgICBpZiAodHAgPD0gbGltaXQpIHtcbiAgICAgIGxpbWl0ID0gdHAgLSAxO1xuICAgIH1cbiAgICBpZiAobGltaXQpIHtcbiAgICAgIGxldFxuICAgICAgICBscDogbnVtYmVyOyAvLyBsYXN0IHBhZ2VcbiAgICAgIGxldCBmcDogbnVtYmVyOyAvLyBmaXJzdCBwYWdlXG4gICAgICBpZiAoY3AgPiBNYXRoLmZsb29yKGxpbWl0IC8gMikpIHtcbiAgICAgICAgaWYgKHRwID09PSAyKSB7XG4gICAgICAgICAgbHAgPSB0cDtcbiAgICAgICAgICBmcCA9IDE7XG4gICAgICAgICAgLy8gd2hlbiBjdXJyZW50UGFnZSBpcyBhZnRlciBoYWxmLXBvaW50XG4gICAgICAgICAgLy8gKGV4YW1wbGU6IFsgMTQgXVsgMTUgXVshMTYhXVsgMTcgXVsgMTggXSlcbiAgICAgICAgfSBlbHNlIGlmIChjcCA8ICh0cCAtIE1hdGguZmxvb3IobGltaXQgLyAyKSkpIHtcbiAgICAgICAgICBscCA9IGNwIC8gMSArIE1hdGguZmxvb3IobGltaXQgLyAyKTtcbiAgICAgICAgICBmcCA9IGNwIC8gMSAtIE1hdGguZmxvb3IobGltaXQgLyAyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBscCA9IHRwO1xuICAgICAgICAgIGZwID0gY3AgLSBsaW1pdCArICh0cCAtIGNwKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gd2hlbiBjdXJyZW50UGFnZSBpcyBiZWZvcmUgaGFsZi1wb2ludFxuICAgICAgICAvLyAoZXhhbXBsZTogWyAxIF1bITIhXVsgMyBdWyA0IF1bIDUgXSlcbiAgICAgICAgbHAgPSBsaW1pdCArIDE7XG4gICAgICAgIGZwID0gMTtcbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGkgPSBmcDsgaSA8PSBscDsgaSArPSAxKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICB0ZXh0OiBTdHJpbmcoaSksXG4gICAgICAgICAgY2xhc3NlczogY3AgPT09IGkgPyAnaXMtYWN0aXZlJyA6ICcnLFxuICAgICAgICAgIGFuY2hvcjogY3AgIT09IGkgPyB0aGlzLl9nZXRQYWdpbmF0aW9uQW5jaG9yKGksIG0sIGhyZWYsIHFwKSA6IG51bGwsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgIHRleHQ6ICcxJyxcbiAgICAgICAgY2xhc3NlczogY3AgPT09IDEgPyAnaXMtYWN0aXZlJyA6ICcnLFxuICAgICAgICBhbmNob3I6IGNwICE9PSAxID8gdGhpcy5fZ2V0UGFnaW5hdGlvbkFuY2hvcigxLCBtLCBocmVmLCBxcCkgOiBudWxsLFxuICAgICAgfSk7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHRwOyBpICs9IDEpIHtcbiAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgIHRleHQ6IFN0cmluZyhpICsgMSksXG4gICAgICAgICAgY2xhc3NlczogY3AgPT09IGkgKyAxID8gJ2lzLWFjdGl2ZScgOiAnJyxcbiAgICAgICAgICBhbmNob3I6IGNwICE9PSBpICsgMSA/IHRoaXMuX2dldFBhZ2luYXRpb25BbmNob3IoaSArIDEsIG0sIGhyZWYsIHFwKSA6IG51bGwsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgbGlua3M6IHJlc3VsdCxcbiAgICAgIGZpcnN0OiB7XG4gICAgICAgIGNsYXNzZXM6IGNwID09PSAxID8gJ2lzLWRpc2FibGVkJyA6ICcnLFxuICAgICAgICBhbmNob3I6IGNwICE9PSAxID8gdGhpcy5fZ2V0UGFnaW5hdGlvbkFuY2hvcigxLCBtLCBocmVmLCBxcCkgOiBudWxsLFxuICAgICAgfSxcbiAgICAgIHByZXY6IHtcbiAgICAgICAgY2xhc3NlczogY3AgPT09IDEgPyAnaXMtZGlzYWJsZWQnIDogJycsXG4gICAgICAgIGFuY2hvcjogY3AgIT09IDEgPyB0aGlzLl9nZXRQYWdpbmF0aW9uQW5jaG9yKGNwIC8gMSAtIDEsIG0sIGhyZWYsIHFwKSA6IG51bGwsXG4gICAgICB9LFxuICAgICAgbmV4dDoge1xuICAgICAgICBjbGFzc2VzOiBjcCA9PT0gdHAgPyAnaXMtZGlzYWJsZWQnIDogJycsXG4gICAgICAgIGFuY2hvcjogY3AgIT09IHRwID8gdGhpcy5fZ2V0UGFnaW5hdGlvbkFuY2hvcihjcCAvIDEgKyAxLCBtLCBocmVmLCBxcCkgOiBudWxsLFxuICAgICAgfSxcbiAgICAgIGxhc3Q6IHtcbiAgICAgICAgY2xhc3NlczogY3AgPT09IHRwID8gJ2lzLWRpc2FibGVkJyA6ICcnLFxuICAgICAgICBhbmNob3I6IGNwICE9PSB0cCA/IHRoaXMuX2dldFBhZ2luYXRpb25BbmNob3IodHAsIG0sIGhyZWYsIHFwKSA6IG51bGwsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIF9nZXRQYWdpbmF0aW9uQW5jaG9yKHBhZ2UsIG1vZGUsIGhyZWYsIHF1ZXJ5UGFyYW1zKSB7XG4gICAgc3dpdGNoIChtb2RlKSB7XG4gICAgICBjYXNlICdwYXlsb2FkJzpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBwYXlsb2FkOiB7IHNvdXJjZTogJ3BhZ2luYXRpb24nLCBwYWdlIH0sXG4gICAgICAgIH07XG4gICAgICBjYXNlICdocmVmJzpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBocmVmOiBxdWVyeVBhcmFtcyA/IGhyZWYgOiBocmVmICsgcGFnZSxcbiAgICAgICAgICBxdWVyeVBhcmFtczogcXVlcnlQYXJhbXMgPyB7XG4gICAgICAgICAgICAuLi5xdWVyeVBhcmFtcyxcbiAgICAgICAgICAgIHBhZ2UsXG4gICAgICAgICAgfSA6IG51bGwsXG4gICAgICAgIH07XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIHt9O1xuICB9XG59XG4iXX0=