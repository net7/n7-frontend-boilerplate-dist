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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtcGFnaW5hdGlvbi5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24vZGF0YS1zb3VyY2VzL3NtYXJ0LXBhZ2luYXRpb24uZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUUvQyxNQUFNLE9BQU8saUJBQWtCLFNBQVEsVUFBVTtJQUFqRDs7UUE0QlUsc0JBQWlCOzs7Ozs7Ozs7UUFBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUU7O2tCQUNoRCxNQUFNLEdBQUcsRUFBRTtZQUNqQjs7Ozs7OztjQU9FOzs7Ozs7Ozs7OztnQkFDRSxLQUFLLEdBQUcsRUFBRTtZQUNkLElBQUksRUFBRSxJQUFJLEtBQUssRUFBRTtnQkFDZixLQUFLLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQzthQUNoQjtZQUNELElBQUksS0FBSyxFQUFFOztvQkFFUCxFQUFVOztvQkFBRSxXQUFXO2dCQUN2QixFQUFVLENBQUMsYUFBYTs7Z0JBQzFCLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFFO29CQUM5QixJQUFJLEVBQUUsS0FBSyxDQUFDLEVBQUU7d0JBQ1osRUFBRSxHQUFHLEVBQUUsQ0FBQzt3QkFDUixFQUFFLEdBQUcsQ0FBQyxDQUFDO3dCQUNQLHVDQUF1Qzt3QkFDdkMsNENBQTRDO3FCQUM3Qzt5QkFBTSxJQUFJLEVBQUUsR0FBRyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFO3dCQUM1QyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQTt3QkFDbkMsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7cUJBQ3JDO3lCQUFNO3dCQUNMLEVBQUUsR0FBRyxFQUFFLENBQUM7d0JBQ1IsRUFBRSxHQUFHLEVBQUUsR0FBRyxLQUFLLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7cUJBQzdCO2lCQUNGO3FCQUFNO29CQUNMLHdDQUF3QztvQkFDeEMsdUNBQXVDO29CQUN2QyxFQUFFLEdBQUcsS0FBSyxFQUFFLENBQUM7b0JBQ2IsRUFBRSxHQUFHLENBQUMsQ0FBQztpQkFDUjtnQkFDRCxLQUFLLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFO29CQUM3QixNQUFNLENBQUMsSUFBSSxDQUFDO3dCQUNWLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO3dCQUNmLE9BQU8sRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUU7d0JBQ25DLE1BQU0sRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUk7cUJBQ25FLENBQUMsQ0FBQztpQkFDSjthQUNGO2lCQUFNO2dCQUNMLE1BQU0sQ0FBQyxJQUFJLENBQUM7b0JBQ1YsSUFBSSxFQUFFLEdBQUc7b0JBQ1QsT0FBTyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRTtvQkFDbkMsTUFBTSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSTtpQkFDcEUsQ0FBQyxDQUFDO2dCQUNILEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQzNCLE1BQU0sQ0FBQyxJQUFJLENBQUM7d0JBQ1YsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUNuQixPQUFPLEVBQUUsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRTt3QkFDdkMsTUFBTSxFQUFFLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJO3FCQUM1RSxDQUFDLENBQUM7aUJBQ0o7YUFDRjtZQUNELE9BQU87Z0JBQ0wsS0FBSyxFQUFFLE1BQU07Z0JBQ2IsS0FBSyxFQUFFO29CQUNMLE9BQU8sRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUU7b0JBQ3JDLE1BQU0sRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUk7aUJBQ25FO2dCQUNELElBQUksRUFBRTtvQkFDSixPQUFPLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUNyQyxNQUFNLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUk7aUJBQzVFO2dCQUNELElBQUksRUFBRTtvQkFDSixPQUFPLEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUN0QyxNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUk7aUJBQzdFO2dCQUNELElBQUksRUFBRTtvQkFDSixPQUFPLEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUN0QyxNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJO2lCQUNyRTthQUNGLENBQUE7UUFDSCxDQUFDLEVBQUE7SUFvQkgsQ0FBQzs7Ozs7O0lBM0hXLFNBQVMsQ0FBQyxJQUFJO2NBQ2hCLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLEdBQUcsSUFBSTtjQUNwRCxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU87UUFDaEQsdUJBQXVCOztRQUF2Qix1QkFBdUI7UUFDdkIsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN2QyxPQUFPLENBQUMsSUFBSSxDQUFDLDJHQUEyRyxDQUFDLENBQUE7U0FDMUg7Y0FFSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQy9ELFVBQVUsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUNsQyxJQUFJLEVBQUUsSUFBSSxFQUFFLFdBQVcsQ0FBQztRQUMxQixPQUFPO1lBQ0wsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUs7WUFDOUIsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ2QsS0FBSyxFQUFFLHFCQUFxQjtnQkFDNUIsT0FBTyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRzs7OztnQkFBQyxDQUFDLENBQUMsRUFBRTtvQkFDMUIsT0FBTzt3QkFDTCxJQUFJLEVBQUUsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxNQUFNO3FCQUM1QixDQUFDO2dCQUNKLENBQUMsRUFBQztnQkFDRixPQUFPLEVBQUUsYUFBYTthQUN2QixDQUFDLENBQUMsQ0FBQyxJQUFJO1NBQ1QsQ0FBQTtJQUNILENBQUM7Ozs7Ozs7OztJQWlGTyxvQkFBb0IsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxXQUFXO1FBQ3hELFFBQVEsSUFBSSxFQUFFO1lBQ1osS0FBSyxTQUFTO2dCQUNaLE9BQU87b0JBQ0wsT0FBTyxFQUFFLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUU7aUJBQ3hDLENBQUE7WUFDSCxLQUFLLE1BQU07Z0JBQ1QsT0FBTztvQkFDTCxJQUFJLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJO29CQUN0QyxXQUFXLEVBQUUsV0FBVyxDQUFDLENBQUMsbUJBQ3JCLFdBQVcsSUFDZCxJQUFJLEVBQUUsSUFBSSxJQUNWLENBQUMsQ0FBQyxJQUFJO2lCQUNULENBQUE7WUFDSDtnQkFDRSxNQUFNO1NBQ1Q7SUFDSCxDQUFDO0NBQ0Y7Ozs7OztJQWpHQyw4Q0E2RUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgU21hcnRQYWdpbmF0aW9uRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcblxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpIHtcbiAgICBjb25zdCB7IHRvdGFsUGFnZXMsIGN1cnJlbnRQYWdlLCBwYWdlTGltaXQsIHNpemVzIH0gPSBkYXRhXG4gICAgY29uc3QgeyBtb2RlLCBocmVmLCBxdWVyeVBhcmFtcyB9ID0gdGhpcy5vcHRpb25zXG4gICAgLy8gPT09PT0gV0FSTklOR1MgPT09PT1cbiAgICBpZiAoIVsnaHJlZicsICdwYXlsb2FkJ10uaW5jbHVkZXMobW9kZSkpIHtcbiAgICAgIGNvbnNvbGUud2FybignKHNtYXJ0LXBhZ2luYXRpb24pIFRoZSBcIm1vZGVcIiBvcHRpb24gaXMgaW5jb3JyZWN0LiBQbGVhc2Ugc3BlY2lmeSBcImhyZWZcIiBvciBcInBheWxvYWRcIiBhcyB0aGUgbW9kZSBvcHRpb24uJylcbiAgICB9XG5cbiAgICBjb25zdCB7IGxpbmtzLCBmaXJzdCwgcHJldiwgbmV4dCwgbGFzdCB9ID0gdGhpcy5wYWdpbmF0aW9uQnVpbGRlcihcbiAgICAgIHRvdGFsUGFnZXMsIGN1cnJlbnRQYWdlLCBwYWdlTGltaXQsXG4gICAgICBtb2RlLCBocmVmLCBxdWVyeVBhcmFtcylcbiAgICByZXR1cm4ge1xuICAgICAgZmlyc3QsIHByZXYsIG5leHQsIGxhc3QsIGxpbmtzLFxuICAgICAgc2VsZWN0OiBzaXplcyA/IHtcbiAgICAgICAgbGFiZWw6ICdOdW1lcm8gZGkgcmlzdWx0YXRpJyxcbiAgICAgICAgb3B0aW9uczogc2l6ZXMubGlzdC5tYXAocyA9PiB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRleHQ6IHMsXG4gICAgICAgICAgICBzZWxlY3RlZDogcyA9PSBzaXplcy5hY3RpdmUsXG4gICAgICAgICAgfTtcbiAgICAgICAgfSksXG4gICAgICAgIHBheWxvYWQ6ICdzZWxlY3Qtc2l6ZSdcbiAgICAgIH0gOiBudWxsXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBwYWdpbmF0aW9uQnVpbGRlciA9ICh0cCwgY3AsIHBsLCBtLCBocmVmLCBxcCkgPT4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IFtdXG4gICAgLypcbiAgICAgIHRwIC0gdG90YWwgcGFnZXNcbiAgICAgIGNwIC0gY3VycmVudCBwYWdlXG4gICAgICBwbCAtIHBhZ2UgbGltaXRcbiAgICAgIG0gLSBwYWdpbmF0aW9uIG1vZGUgKGhyZWYgb3IgcGF5bG9hZHMpXG4gICAgICBocmVmIC0gaHJlZiBmb3IgYW5jaG9yIHdyYXBwZXJcbiAgICAgIHFwIC0gcXVlcnkgcGFyYW1zIGZvciBwYWdpbmF0aW9uXG4gICAgKi9cbiAgICBsZXQgbGltaXQgPSBwbDtcbiAgICBpZiAodHAgPD0gbGltaXQpIHtcbiAgICAgIGxpbWl0ID0gdHAgLSAxO1xuICAgIH1cbiAgICBpZiAobGltaXQpIHtcbiAgICAgIGxldFxuICAgICAgICBscDogbnVtYmVyLCAvL2xhc3QgcGFnZVxuICAgICAgICBmcDogbnVtYmVyIC8vIGZpcnN0IHBhZ2VcbiAgICAgIGlmIChjcCA+IE1hdGguZmxvb3IobGltaXQgLyAyKSkge1xuICAgICAgICBpZiAodHAgPT09IDIpIHtcbiAgICAgICAgICBscCA9IHRwO1xuICAgICAgICAgIGZwID0gMTtcbiAgICAgICAgICAvLyB3aGVuIGN1cnJlbnRQYWdlIGlzIGFmdGVyIGhhbGYtcG9pbnRcbiAgICAgICAgICAvLyAoZXhhbXBsZTogWyAxNCBdWyAxNSBdWyExNiFdWyAxNyBdWyAxOCBdKVxuICAgICAgICB9IGVsc2UgaWYgKGNwIDwgKHRwIC0gTWF0aC5mbG9vcihsaW1pdCAvIDIpKSkge1xuICAgICAgICAgIGxwID0gY3AgLyAxICsgTWF0aC5mbG9vcihsaW1pdCAvIDIpXG4gICAgICAgICAgZnAgPSBjcCAvIDEgLSBNYXRoLmZsb29yKGxpbWl0IC8gMik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbHAgPSB0cDtcbiAgICAgICAgICBmcCA9IGNwIC0gbGltaXQgKyAodHAgLSBjcCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHdoZW4gY3VycmVudFBhZ2UgaXMgYmVmb3JlIGhhbGYtcG9pbnRcbiAgICAgICAgLy8gKGV4YW1wbGU6IFsgMSBdWyEyIV1bIDMgXVsgNCBdWyA1IF0pXG4gICAgICAgIGxwID0gbGltaXQrKztcbiAgICAgICAgZnAgPSAxO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IGZwOyBpIDw9IGxwOyBpKyspIHtcbiAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgIHRleHQ6IFN0cmluZyhpKSxcbiAgICAgICAgICBjbGFzc2VzOiBjcCA9PSBpID8gJ2lzLWFjdGl2ZScgOiAnJyxcbiAgICAgICAgICBhbmNob3I6IGNwICE9IGkgPyB0aGlzLl9nZXRQYWdpbmF0aW9uQW5jaG9yKGksIG0sIGhyZWYsIHFwKSA6IG51bGxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgdGV4dDogJzEnLFxuICAgICAgICBjbGFzc2VzOiBjcCA9PSAxID8gJ2lzLWFjdGl2ZScgOiAnJyxcbiAgICAgICAgYW5jaG9yOiBjcCAhPT0gMSA/IHRoaXMuX2dldFBhZ2luYXRpb25BbmNob3IoMSwgbSwgaHJlZiwgcXApIDogbnVsbFxuICAgICAgfSk7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHRwOyBpKyspIHtcbiAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgIHRleHQ6IFN0cmluZyhpICsgMSksXG4gICAgICAgICAgY2xhc3NlczogY3AgPT0gaSArIDEgPyAnaXMtYWN0aXZlJyA6ICcnLFxuICAgICAgICAgIGFuY2hvcjogY3AgIT09IGkgKyAxID8gdGhpcy5fZ2V0UGFnaW5hdGlvbkFuY2hvcihpICsgMSwgbSwgaHJlZiwgcXApIDogbnVsbFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIGxpbmtzOiByZXN1bHQsXG4gICAgICBmaXJzdDoge1xuICAgICAgICBjbGFzc2VzOiBjcCA9PSAxID8gJ2lzLWRpc2FibGVkJyA6ICcnLFxuICAgICAgICBhbmNob3I6IGNwICE9IDEgPyB0aGlzLl9nZXRQYWdpbmF0aW9uQW5jaG9yKDEsIG0sIGhyZWYsIHFwKSA6IG51bGxcbiAgICAgIH0sXG4gICAgICBwcmV2OiB7XG4gICAgICAgIGNsYXNzZXM6IGNwID09IDEgPyAnaXMtZGlzYWJsZWQnIDogJycsXG4gICAgICAgIGFuY2hvcjogY3AgIT0gMSA/IHRoaXMuX2dldFBhZ2luYXRpb25BbmNob3IoY3AgLyAxIC0gMSwgbSwgaHJlZiwgcXApIDogbnVsbFxuICAgICAgfSxcbiAgICAgIG5leHQ6IHtcbiAgICAgICAgY2xhc3NlczogY3AgPT0gdHAgPyAnaXMtZGlzYWJsZWQnIDogJycsXG4gICAgICAgIGFuY2hvcjogY3AgIT0gdHAgPyB0aGlzLl9nZXRQYWdpbmF0aW9uQW5jaG9yKGNwIC8gMSArIDEsIG0sIGhyZWYsIHFwKSA6IG51bGxcbiAgICAgIH0sXG4gICAgICBsYXN0OiB7XG4gICAgICAgIGNsYXNzZXM6IGNwID09IHRwID8gJ2lzLWRpc2FibGVkJyA6ICcnLFxuICAgICAgICBhbmNob3I6IGNwICE9IHRwID8gdGhpcy5fZ2V0UGFnaW5hdGlvbkFuY2hvcih0cCwgbSwgaHJlZiwgcXApIDogbnVsbFxuICAgICAgfSxcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9nZXRQYWdpbmF0aW9uQW5jaG9yKHBhZ2UsIG1vZGUsIGhyZWYsIHF1ZXJ5UGFyYW1zKSB7XG4gICAgc3dpdGNoIChtb2RlKSB7XG4gICAgICBjYXNlICdwYXlsb2FkJzpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBwYXlsb2FkOiB7IHNvdXJjZTogJ3BhZ2luYXRpb24nLCBwYWdlIH1cbiAgICAgICAgfVxuICAgICAgY2FzZSAnaHJlZic6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaHJlZjogcXVlcnlQYXJhbXMgPyBocmVmIDogaHJlZiArIHBhZ2UsXG4gICAgICAgICAgcXVlcnlQYXJhbXM6IHF1ZXJ5UGFyYW1zID8ge1xuICAgICAgICAgICAgLi4ucXVlcnlQYXJhbXMsXG4gICAgICAgICAgICBwYWdlOiBwYWdlXG4gICAgICAgICAgfSA6IG51bGxcbiAgICAgICAgfVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG59Il19