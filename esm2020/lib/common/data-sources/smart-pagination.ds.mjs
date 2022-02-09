import { DataSource, _t } from '@n7-frontend/core';
export class SmartPaginationDS extends DataSource {
    constructor() {
        super(...arguments);
        this.paginationBuilder = (tp, cp, pl, m, href, qp) => {
            const result = [];
            /*
              tp - total pages
              cp - current page
              pl - page limit
              m - pagination mode (href or payloads)
              href - href for anchor wrapper
              qp - query params for pagination
            */
            let limit = pl;
            if (tp <= limit) {
                limit = tp - 1;
            }
            if (limit) {
                let lp; // last page
                let fp; // first page
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
        };
    }
    transform(data) {
        const { totalPages, currentPage, pageLimit, sizes } = data;
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
                label: sizes.label || _t('search#resultsamount'),
                options: sizes.list.map((s) => ({
                    text: s,
                    selected: s === sizes.active,
                })),
                payload: 'select-size',
            } : null,
        };
    }
    _getPaginationAnchor(page, mode, href, queryParams) {
        switch (mode) {
            case 'payload':
                return {
                    payload: { source: 'pagination', page },
                };
            case 'href':
                return {
                    href: queryParams ? href : href + page,
                    queryParams: queryParams ? {
                        ...queryParams,
                        page,
                    } : null,
                };
            default:
                break;
        }
        return {};
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtcGFnaW5hdGlvbi5kcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL243LWJvaWxlcnBsYXRlLWxpYi9zcmMvbGliL2NvbW1vbi9kYXRhLXNvdXJjZXMvc21hcnQtcGFnaW5hdGlvbi5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRW5ELE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxVQUFVO0lBQWpEOztRQWtDVSxzQkFBaUIsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFVLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUU7WUFDOUQsTUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDO1lBQ2xCOzs7Ozs7O2NBT0U7WUFDRixJQUFJLEtBQUssR0FBRyxFQUFFLENBQUM7WUFDZixJQUFJLEVBQUUsSUFBSSxLQUFLLEVBQUU7Z0JBQ2YsS0FBSyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7YUFDaEI7WUFDRCxJQUFJLEtBQUssRUFBRTtnQkFDVCxJQUNFLEVBQVUsQ0FBQyxDQUFDLFlBQVk7Z0JBQzFCLElBQUksRUFBVSxDQUFDLENBQUMsYUFBYTtnQkFDN0IsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUU7b0JBQzlCLElBQUksRUFBRSxLQUFLLENBQUMsRUFBRTt3QkFDWixFQUFFLEdBQUcsRUFBRSxDQUFDO3dCQUNSLEVBQUUsR0FBRyxDQUFDLENBQUM7d0JBQ1AsdUNBQXVDO3dCQUN2Qyw0Q0FBNEM7cUJBQzdDO3lCQUFNLElBQUksRUFBRSxHQUFHLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUU7d0JBQzVDLEVBQUUsR0FBRyxFQUFF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Q1QsQ0FBQztZQUNKO2dCQUNFLE1BQU07U0FDVDtRQUNELE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSwgX3QgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgU21hcnRQYWdpbmF0aW9uRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcclxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpIHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgdG90YWxQYWdlcywgY3VycmVudFBhZ2UsIHBhZ2VMaW1pdCwgc2l6ZXNcclxuICAgIH0gPSBkYXRhO1xyXG4gICAgY29uc3QgeyBtb2RlLCBocmVmLCBxdWVyeVBhcmFtcyB9ID0gdGhpcy5vcHRpb25zO1xyXG4gICAgLy8gPT09PT0gV0FSTklOR1MgPT09PT1cclxuICAgIGlmICghWydocmVmJywgJ3BheWxvYWQnXS5pbmNsdWRlcyhtb2RlKSkge1xyXG4gICAgICBjb25zb2xlLndhcm4oJyhzbWFydC1wYWdpbmF0aW9uKSBUaGUgXCJtb2RlXCIgb3B0aW9uIGlzIGluY29ycmVjdC4gUGxlYXNlIHNwZWNpZnkgXCJocmVmXCIgb3IgXCJwYXlsb2FkXCIgYXMgdGhlIG1vZGUgb3B0aW9uLicpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHtcclxuICAgICAgbGlua3MsIGZpcnN0LCBwcmV2LCBuZXh0LCBsYXN0LFxyXG4gICAgfSA9IHRoaXMucGFnaW5hdGlvbkJ1aWxkZXIoXHJcbiAgICAgIHRvdGFsUGFnZXMsICtjdXJyZW50UGFnZSwgcGFnZUxpbWl0LFxyXG4gICAgICBtb2RlLCBocmVmLCBxdWVyeVBhcmFtcyxcclxuICAgICk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBmaXJzdCxcclxuICAgICAgcHJldixcclxuICAgICAgbmV4dCxcclxuICAgICAgbGFzdCxcclxuICAgICAgbGlua3MsXHJcbiAgICAgIHNlbGVjdDogc2l6ZXMgPyB7XHJcbiAgICAgICAgbGFiZWw6IHNpemVzLmxhYmVsIHx8IF90KCdzZWFyY2gjcmVzdWx0c2Ftb3VudCcpLFxyXG4gICAgICAgIG9wdGlvbnM6IHNpemVzLmxpc3QubWFwKChzKSA9PiAoe1xyXG4gICAgICAgICAgdGV4dDogcyxcclxuICAgICAgICAgIHNlbGVjdGVkOiBzID09PSBzaXplcy5hY3RpdmUsXHJcbiAgICAgICAgfSkpLFxyXG4gICAgICAgIHBheWxvYWQ6ICdzZWxlY3Qtc2l6ZScsXHJcbiAgICAgIH0gOiBudWxsLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcGFnaW5hdGlvbkJ1aWxkZXIgPSAodHAsIGNwOiBudW1iZXIsIHBsLCBtLCBocmVmLCBxcCkgPT4ge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gW107XHJcbiAgICAvKlxyXG4gICAgICB0cCAtIHRvdGFsIHBhZ2VzXHJcbiAgICAgIGNwIC0gY3VycmVudCBwYWdlXHJcbiAgICAgIHBsIC0gcGFnZSBsaW1pdFxyXG4gICAgICBtIC0gcGFnaW5hdGlvbiBtb2RlIChocmVmIG9yIHBheWxvYWRzKVxyXG4gICAgICBocmVmIC0gaHJlZiBmb3IgYW5jaG9yIHdyYXBwZXJcclxuICAgICAgcXAgLSBxdWVyeSBwYXJhbXMgZm9yIHBhZ2luYXRpb25cclxuICAgICovXHJcbiAgICBsZXQgbGltaXQgPSBwbDtcclxuICAgIGlmICh0cCA8PSBsaW1pdCkge1xyXG4gICAgICBsaW1pdCA9IHRwIC0gMTtcclxuICAgIH1cclxuICAgIGlmIChsaW1pdCkge1xyXG4gICAgICBsZXRcclxuICAgICAgICBscDogbnVtYmVyOyAvLyBsYXN0IHBhZ2VcclxuICAgICAgbGV0IGZwOiBudW1iZXI7IC8vIGZpcnN0IHBhZ2VcclxuICAgICAgaWYgKGNwID4gTWF0aC5mbG9vcihsaW1pdCAvIDIpKSB7XHJcbiAgICAgICAgaWYgKHRwID09PSAyKSB7XHJcbiAgICAgICAgICBscCA9IHRwO1xyXG4gICAgICAgICAgZnAgPSAxO1xyXG4gICAgICAgICAgLy8gd2hlbiBjdXJyZW50UGFnZSBpcyBhZnRlciBoYWxmLXBvaW50XHJcbiAgICAgICAgICAvLyAoZXhhbXBsZTogWyAxNCBdWyAxNSBdWyExNiFdWyAxNyBdWyAxOCBdKVxyXG4gICAgICAgIH0gZWxzZSBpZiAoY3AgPCAodHAgLSBNYXRoLmZsb29yKGxpbWl0IC8gMikpKSB7XHJcbiAgICAgICAgICBscCA9IGNwIC8gMSArIE1hdGguZmxvb3IobGltaXQgLyAyKTtcclxuICAgICAgICAgIGZwID0gY3AgLyAxIC0gTWF0aC5mbG9vcihsaW1pdCAvIDIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBscCA9IHRwO1xyXG4gICAgICAgICAgZnAgPSBjcCAtIGxpbWl0ICsgKHRwIC0gY3ApO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyB3aGVuIGN1cnJlbnRQYWdlIGlzIGJlZm9yZSBoYWxmLXBvaW50XHJcbiAgICAgICAgLy8gKGV4YW1wbGU6IFsgMSBdWyEyIV1bIDMgXVsgNCBdWyA1IF0pXHJcbiAgICAgICAgbHAgPSBsaW1pdCArIDE7XHJcbiAgICAgICAgZnAgPSAxO1xyXG4gICAgICB9XHJcbiAgICAgIGZvciAobGV0IGkgPSBmcDsgaSA8PSBscDsgaSArPSAxKSB7XHJcbiAgICAgICAgcmVzdWx0LnB1c2goe1xyXG4gICAgICAgICAgdGV4dDogU3RyaW5nKGkpLFxyXG4gICAgICAgICAgY2xhc3NlczogY3AgPT09IGkgPyAnaXMtYWN0aXZlJyA6ICcnLFxyXG4gICAgICAgICAgYW5jaG9yOiBjcCAhPT0gaSA/IHRoaXMuX2dldFBhZ2luYXRpb25BbmNob3IoaSwgbSwgaHJlZiwgcXApIDogbnVsbCxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVzdWx0LnB1c2goe1xyXG4gICAgICAgIHRleHQ6ICcxJyxcclxuICAgICAgICBjbGFzc2VzOiBjcCA9PT0gMSA/ICdpcy1hY3RpdmUnIDogJycsXHJcbiAgICAgICAgYW5jaG9yOiBjcCAhPT0gMSA/IHRoaXMuX2dldFBhZ2luYXRpb25BbmNob3IoMSwgbSwgaHJlZiwgcXApIDogbnVsbCxcclxuICAgICAgfSk7XHJcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgdHA7IGkgKz0gMSkge1xyXG4gICAgICAgIHJlc3VsdC5wdXNoKHtcclxuICAgICAgICAgIHRleHQ6IFN0cmluZyhpICsgMSksXHJcbiAgICAgICAgICBjbGFzc2VzOiBjcCA9PT0gaSArIDEgPyAnaXMtYWN0aXZlJyA6ICcnLFxyXG4gICAgICAgICAgYW5jaG9yOiBjcCAhPT0gaSArIDEgPyB0aGlzLl9nZXRQYWdpbmF0aW9uQW5jaG9yKGkgKyAxLCBtLCBocmVmLCBxcCkgOiBudWxsLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBsaW5rczogcmVzdWx0LFxyXG4gICAgICBmaXJzdDoge1xyXG4gICAgICAgIGNsYXNzZXM6IGNwID09PSAxID8gJ2lzLWRpc2FibGVkJyA6ICcnLFxyXG4gICAgICAgIGFuY2hvcjogY3AgIT09IDEgPyB0aGlzLl9nZXRQYWdpbmF0aW9uQW5jaG9yKDEsIG0sIGhyZWYsIHFwKSA6IG51bGwsXHJcbiAgICAgIH0sXHJcbiAgICAgIHByZXY6IHtcclxuICAgICAgICBjbGFzc2VzOiBjcCA9PT0gMSA/ICdpcy1kaXNhYmxlZCcgOiAnJyxcclxuICAgICAgICBhbmNob3I6IGNwICE9PSAxID8gdGhpcy5fZ2V0UGFnaW5hdGlvbkFuY2hvcihjcCAvIDEgLSAxLCBtLCBocmVmLCBxcCkgOiBudWxsLFxyXG4gICAgICB9LFxyXG4gICAgICBuZXh0OiB7XHJcbiAgICAgICAgY2xhc3NlczogY3AgPT09IHRwID8gJ2lzLWRpc2FibGVkJyA6ICcnLFxyXG4gICAgICAgIGFuY2hvcjogY3AgIT09IHRwID8gdGhpcy5fZ2V0UGFnaW5hdGlvbkFuY2hvcihjcCAvIDEgKyAxLCBtLCBocmVmLCBxcCkgOiBudWxsLFxyXG4gICAgICB9LFxyXG4gICAgICBsYXN0OiB7XHJcbiAgICAgICAgY2xhc3NlczogY3AgPT09IHRwID8gJ2lzLWRpc2FibGVkJyA6ICcnLFxyXG4gICAgICAgIGFuY2hvcjogY3AgIT09IHRwID8gdGhpcy5fZ2V0UGFnaW5hdGlvbkFuY2hvcih0cCwgbSwgaHJlZiwgcXApIDogbnVsbCxcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9nZXRQYWdpbmF0aW9uQW5jaG9yKHBhZ2UsIG1vZGUsIGhyZWYsIHF1ZXJ5UGFyYW1zKSB7XHJcbiAgICBzd2l0Y2ggKG1vZGUpIHtcclxuICAgICAgY2FzZSAncGF5bG9hZCc6XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHBheWxvYWQ6IHsgc291cmNlOiAncGFnaW5hdGlvbicsIHBhZ2UgfSxcclxuICAgICAgICB9O1xyXG4gICAgICBjYXNlICdocmVmJzpcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgaHJlZjogcXVlcnlQYXJhbXMgPyBocmVmIDogaHJlZiArIHBhZ2UsXHJcbiAgICAgICAgICBxdWVyeVBhcmFtczogcXVlcnlQYXJhbXMgPyB7XHJcbiAgICAgICAgICAgIC4uLnF1ZXJ5UGFyYW1zLFxyXG4gICAgICAgICAgICBwYWdlLFxyXG4gICAgICAgICAgfSA6IG51bGwsXHJcbiAgICAgICAgfTtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIHJldHVybiB7fTtcclxuICB9XHJcbn1cclxuIl19