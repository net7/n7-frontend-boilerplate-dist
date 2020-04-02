/**
 * @fileoverview added by tsickle
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtcGFnaW5hdGlvbi5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24vZGF0YS1zb3VyY2VzL3NtYXJ0LXBhZ2luYXRpb24uZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUUvQyxNQUFNLE9BQU8saUJBQWtCLFNBQVEsVUFBVTtJQUFqRDs7UUFrQ1Usc0JBQWlCOzs7Ozs7Ozs7UUFBRyxDQUFDLEVBQUUsRUFBRSxFQUFVLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUU7O2tCQUN4RCxNQUFNLEdBQUcsRUFBRTs7Ozs7Ozs7OztnQkFTYixLQUFLLEdBQUcsRUFBRTtZQUNkLElBQUksRUFBRSxJQUFJLEtBQUssRUFBRTtnQkFDZixLQUFLLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQzthQUNoQjtZQUNELElBQUksS0FBSyxFQUFFOztvQkFFUCxFQUFVOzs7b0JBQ1IsRUFBVTtnQkFDZCxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRTtvQkFDOUIsSUFBSSxFQUFFLEtBQUssQ0FBQyxFQUFFO3dCQUNaLEVBQUUsR0FBRyxFQUFFLENBQUM7d0JBQ1IsRUFBRSxHQUFHLENBQUMsQ0FBQzt3QkFDUCx1Q0FBdUM7d0JBQ3ZDLDRDQUE0QztxQkFDN0M7eUJBQU0sSUFBSSxFQUFFLEdBQUcsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRTt3QkFDNUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7d0JBQ3BDLEVBQUUsR0FBRyxFQUFF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JztcblxuZXhwb3J0IGNsYXNzIFNtYXJ0UGFnaW5hdGlvbkRTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSkge1xuICAgIGNvbnN0IHtcbiAgICAgIHRvdGFsUGFnZXMsIGN1cnJlbnRQYWdlLCBwYWdlTGltaXQsIHNpemVzLFxuICAgIH0gPSBkYXRhO1xuICAgIGNvbnN0IHsgbW9kZSwgaHJlZiwgcXVlcnlQYXJhbXMgfSA9IHRoaXMub3B0aW9ucztcbiAgICAvLyA9PT09PSBXQVJOSU5HUyA9PT09PVxuICAgIGlmICghWydocmVmJywgJ3BheWxvYWQnXS5pbmNsdWRlcyhtb2RlKSkge1xuICAgICAgY29uc29sZS53YXJuKCcoc21hcnQtcGFnaW5hdGlvbikgVGhlIFwibW9kZVwiIG9wdGlvbiBpcyBpbmNvcnJlY3QuIFBsZWFzZSBzcGVjaWZ5IFwiaHJlZlwiIG9yIFwicGF5bG9hZFwiIGFzIHRoZSBtb2RlIG9wdGlvbi4nKTtcbiAgICB9XG5cbiAgICBjb25zdCB7XG4gICAgICBsaW5rcywgZmlyc3QsIHByZXYsIG5leHQsIGxhc3QsXG4gICAgfSA9IHRoaXMucGFnaW5hdGlvbkJ1aWxkZXIoXG4gICAgICB0b3RhbFBhZ2VzLCArY3VycmVudFBhZ2UsIHBhZ2VMaW1pdCxcbiAgICAgIG1vZGUsIGhyZWYsIHF1ZXJ5UGFyYW1zLFxuICAgICk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZpcnN0LFxuICAgICAgcHJldixcbiAgICAgIG5leHQsXG4gICAgICBsYXN0LFxuICAgICAgbGlua3MsXG4gICAgICBzZWxlY3Q6IHNpemVzID8ge1xuICAgICAgICBsYWJlbDogJ051bWVybyBkaSByaXN1bHRhdGknLFxuICAgICAgICBvcHRpb25zOiBzaXplcy5saXN0Lm1hcCgocykgPT4gKHtcbiAgICAgICAgICB0ZXh0OiBzLFxuICAgICAgICAgIHNlbGVjdGVkOiBzID09PSBzaXplcy5hY3RpdmUsXG4gICAgICAgIH0pKSxcbiAgICAgICAgcGF5bG9hZDogJ3NlbGVjdC1zaXplJyxcbiAgICAgIH0gOiBudWxsLFxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIHBhZ2luYXRpb25CdWlsZGVyID0gKHRwLCBjcDogbnVtYmVyLCBwbCwgbSwgaHJlZiwgcXApID0+IHtcbiAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICAvKlxuICAgICAgdHAgLSB0b3RhbCBwYWdlc1xuICAgICAgY3AgLSBjdXJyZW50IHBhZ2VcbiAgICAgIHBsIC0gcGFnZSBsaW1pdFxuICAgICAgbSAtIHBhZ2luYXRpb24gbW9kZSAoaHJlZiBvciBwYXlsb2FkcylcbiAgICAgIGhyZWYgLSBocmVmIGZvciBhbmNob3Igd3JhcHBlclxuICAgICAgcXAgLSBxdWVyeSBwYXJhbXMgZm9yIHBhZ2luYXRpb25cbiAgICAqL1xuICAgIGxldCBsaW1pdCA9IHBsO1xuICAgIGlmICh0cCA8PSBsaW1pdCkge1xuICAgICAgbGltaXQgPSB0cCAtIDE7XG4gICAgfVxuICAgIGlmIChsaW1pdCkge1xuICAgICAgbGV0XG4gICAgICAgIGxwOiBudW1iZXI7IC8vIGxhc3QgcGFnZVxuICAgICAgbGV0IGZwOiBudW1iZXI7IC8vIGZpcnN0IHBhZ2VcbiAgICAgIGlmIChjcCA+IE1hdGguZmxvb3IobGltaXQgLyAyKSkge1xuICAgICAgICBpZiAodHAgPT09IDIpIHtcbiAgICAgICAgICBscCA9IHRwO1xuICAgICAgICAgIGZwID0gMTtcbiAgICAgICAgICAvLyB3aGVuIGN1cnJlbnRQYWdlIGlzIGFmdGVyIGhhbGYtcG9pbnRcbiAgICAgICAgICAvLyAoZXhhbXBsZTogWyAxNCBdWyAxNSBdWyExNiFdWyAxNyBdWyAxOCBdKVxuICAgICAgICB9IGVsc2UgaWYgKGNwIDwgKHRwIC0gTWF0aC5mbG9vcihsaW1pdCAvIDIpKSkge1xuICAgICAgICAgIGxwID0gY3AgLyAxICsgTWF0aC5mbG9vcihsaW1pdCAvIDIpO1xuICAgICAgICAgIGZwID0gY3AgLyAxIC0gTWF0aC5mbG9vcihsaW1pdCAvIDIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxwID0gdHA7XG4gICAgICAgICAgZnAgPSBjcCAtIGxpbWl0ICsgKHRwIC0gY3ApO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyB3aGVuIGN1cnJlbnRQYWdlIGlzIGJlZm9yZSBoYWxmLXBvaW50XG4gICAgICAgIC8vIChleGFtcGxlOiBbIDEgXVshMiFdWyAzIF1bIDQgXVsgNSBdKVxuICAgICAgICBscCA9IGxpbWl0ICsgMTtcbiAgICAgICAgZnAgPSAxO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IGZwOyBpIDw9IGxwOyBpICs9IDEpIHtcbiAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgIHRleHQ6IFN0cmluZyhpKSxcbiAgICAgICAgICBjbGFzc2VzOiBjcCA9PT0gaSA/ICdpcy1hY3RpdmUnIDogJycsXG4gICAgICAgICAgYW5jaG9yOiBjcCAhPT0gaSA/IHRoaXMuX2dldFBhZ2luYXRpb25BbmNob3IoaSwgbSwgaHJlZiwgcXApIDogbnVsbCxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgdGV4dDogJzEnLFxuICAgICAgICBjbGFzc2VzOiBjcCA9PT0gMSA/ICdpcy1hY3RpdmUnIDogJycsXG4gICAgICAgIGFuY2hvcjogY3AgIT09IDEgPyB0aGlzLl9nZXRQYWdpbmF0aW9uQW5jaG9yKDEsIG0sIGhyZWYsIHFwKSA6IG51bGwsXG4gICAgICB9KTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgdHA7IGkgKz0gMSkge1xuICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgdGV4dDogU3RyaW5nKGkgKyAxKSxcbiAgICAgICAgICBjbGFzc2VzOiBjcCA9PT0gaSArIDEgPyAnaXMtYWN0aXZlJyA6ICcnLFxuICAgICAgICAgIGFuY2hvcjogY3AgIT09IGkgKyAxID8gdGhpcy5fZ2V0UGFnaW5hdGlvbkFuY2hvcihpICsgMSwgbSwgaHJlZiwgcXApIDogbnVsbCxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBsaW5rczogcmVzdWx0LFxuICAgICAgZmlyc3Q6IHtcbiAgICAgICAgY2xhc3NlczogY3AgPT09IDEgPyAnaXMtZGlzYWJsZWQnIDogJycsXG4gICAgICAgIGFuY2hvcjogY3AgIT09IDEgPyB0aGlzLl9nZXRQYWdpbmF0aW9uQW5jaG9yKDEsIG0sIGhyZWYsIHFwKSA6IG51bGwsXG4gICAgICB9LFxuICAgICAgcHJldjoge1xuICAgICAgICBjbGFzc2VzOiBjcCA9PT0gMSA/ICdpcy1kaXNhYmxlZCcgOiAnJyxcbiAgICAgICAgYW5jaG9yOiBjcCAhPT0gMSA/IHRoaXMuX2dldFBhZ2luYXRpb25BbmNob3IoY3AgLyAxIC0gMSwgbSwgaHJlZiwgcXApIDogbnVsbCxcbiAgICAgIH0sXG4gICAgICBuZXh0OiB7XG4gICAgICAgIGNsYXNzZXM6IGNwID09PSB0cCA/ICdpcy1kaXNhYmxlZCcgOiAnJyxcbiAgICAgICAgYW5jaG9yOiBjcCAhPT0gdHAgPyB0aGlzLl9nZXRQYWdpbmF0aW9uQW5jaG9yKGNwIC8gMSArIDEsIG0sIGhyZWYsIHFwKSA6IG51bGwsXG4gICAgICB9LFxuICAgICAgbGFzdDoge1xuICAgICAgICBjbGFzc2VzOiBjcCA9PT0gdHAgPyAnaXMtZGlzYWJsZWQnIDogJycsXG4gICAgICAgIGFuY2hvcjogY3AgIT09IHRwID8gdGhpcy5fZ2V0UGFnaW5hdGlvbkFuY2hvcih0cCwgbSwgaHJlZiwgcXApIDogbnVsbCxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldFBhZ2luYXRpb25BbmNob3IocGFnZSwgbW9kZSwgaHJlZiwgcXVlcnlQYXJhbXMpIHtcbiAgICBzd2l0Y2ggKG1vZGUpIHtcbiAgICAgIGNhc2UgJ3BheWxvYWQnOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHBheWxvYWQ6IHsgc291cmNlOiAncGFnaW5hdGlvbicsIHBhZ2UgfSxcbiAgICAgICAgfTtcbiAgICAgIGNhc2UgJ2hyZWYnOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGhyZWY6IHF1ZXJ5UGFyYW1zID8gaHJlZiA6IGhyZWYgKyBwYWdlLFxuICAgICAgICAgIHF1ZXJ5UGFyYW1zOiBxdWVyeVBhcmFtcyA/IHtcbiAgICAgICAgICAgIC4uLnF1ZXJ5UGFyYW1zLFxuICAgICAgICAgICAgcGFnZSxcbiAgICAgICAgICB9IDogbnVsbCxcbiAgICAgICAgfTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4ge307XG4gIH1cbn1cbiJdfQ==