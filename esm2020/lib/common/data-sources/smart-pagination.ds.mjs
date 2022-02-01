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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtcGFnaW5hdGlvbi5kcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL243LWJvaWxlcnBsYXRlLWxpYi9zcmMvbGliL2NvbW1vbi9kYXRhLXNvdXJjZXMvc21hcnQtcGFnaW5hdGlvbi5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRW5ELE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxVQUFVO0lBQWpEOztRQWtDVSxzQkFBaUIsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFVLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUU7WUFDOUQsTUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDO1lBQ2xCOzs7Ozs7O2NBT0U7WUFDRixJQUFJLEtBQUssR0FBRyxFQUFFLENBQUM7WUFDZixJQUFJLEVBQUUsSUFBSSxLQUFLLEVBQUU7Z0JBQ2YsS0FBSyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7YUFDaEI7WUFDRCxJQUFJLEtBQUssRUFBRTtnQkFDVCxJQUNFLEVBQVUsQ0FBQyxDQUFDLFlBQVk7Z0JBQzFCLElBQUksRUFBVSxDQUFDLENBQUMsYUFBYTtnQkFDN0IsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUU7b0JBQzlCLElBQUksRUFBRSxLQUFLLENBQUMsRUFBRTt3QkFDWixFQUFFLEdBQUcsRUFBRSxDQUFDO3dCQUNSLEVBQUUsR0FBRyxDQUFDLENBQUM7d0JBQ1AsdUNBQXVDO3dCQUN2Qyw0Q0FBNEM7cUJBQzdDO3lCQUFNLElBQUksRUFBRSxHQUFHLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUU7d0JBQzVDLEVBQUUsR0FBRyxFQUFF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Q1QsQ0FBQztZQUNKO2dCQUNFLE1BQU07U0FDVDtRQUNELE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSwgX3QgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBTbWFydFBhZ2luYXRpb25EUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpIHtcbiAgICBjb25zdCB7XG4gICAgICB0b3RhbFBhZ2VzLCBjdXJyZW50UGFnZSwgcGFnZUxpbWl0LCBzaXplc1xuICAgIH0gPSBkYXRhO1xuICAgIGNvbnN0IHsgbW9kZSwgaHJlZiwgcXVlcnlQYXJhbXMgfSA9IHRoaXMub3B0aW9ucztcbiAgICAvLyA9PT09PSBXQVJOSU5HUyA9PT09PVxuICAgIGlmICghWydocmVmJywgJ3BheWxvYWQnXS5pbmNsdWRlcyhtb2RlKSkge1xuICAgICAgY29uc29sZS53YXJuKCcoc21hcnQtcGFnaW5hdGlvbikgVGhlIFwibW9kZVwiIG9wdGlvbiBpcyBpbmNvcnJlY3QuIFBsZWFzZSBzcGVjaWZ5IFwiaHJlZlwiIG9yIFwicGF5bG9hZFwiIGFzIHRoZSBtb2RlIG9wdGlvbi4nKTtcbiAgICB9XG5cbiAgICBjb25zdCB7XG4gICAgICBsaW5rcywgZmlyc3QsIHByZXYsIG5leHQsIGxhc3QsXG4gICAgfSA9IHRoaXMucGFnaW5hdGlvbkJ1aWxkZXIoXG4gICAgICB0b3RhbFBhZ2VzLCArY3VycmVudFBhZ2UsIHBhZ2VMaW1pdCxcbiAgICAgIG1vZGUsIGhyZWYsIHF1ZXJ5UGFyYW1zLFxuICAgICk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZpcnN0LFxuICAgICAgcHJldixcbiAgICAgIG5leHQsXG4gICAgICBsYXN0LFxuICAgICAgbGlua3MsXG4gICAgICBzZWxlY3Q6IHNpemVzID8ge1xuICAgICAgICBsYWJlbDogc2l6ZXMubGFiZWwgfHwgX3QoJ3NlYXJjaCNyZXN1bHRzYW1vdW50JyksXG4gICAgICAgIG9wdGlvbnM6IHNpemVzLmxpc3QubWFwKChzKSA9PiAoe1xuICAgICAgICAgIHRleHQ6IHMsXG4gICAgICAgICAgc2VsZWN0ZWQ6IHMgPT09IHNpemVzLmFjdGl2ZSxcbiAgICAgICAgfSkpLFxuICAgICAgICBwYXlsb2FkOiAnc2VsZWN0LXNpemUnLFxuICAgICAgfSA6IG51bGwsXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgcGFnaW5hdGlvbkJ1aWxkZXIgPSAodHAsIGNwOiBudW1iZXIsIHBsLCBtLCBocmVmLCBxcCkgPT4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgIC8qXG4gICAgICB0cCAtIHRvdGFsIHBhZ2VzXG4gICAgICBjcCAtIGN1cnJlbnQgcGFnZVxuICAgICAgcGwgLSBwYWdlIGxpbWl0XG4gICAgICBtIC0gcGFnaW5hdGlvbiBtb2RlIChocmVmIG9yIHBheWxvYWRzKVxuICAgICAgaHJlZiAtIGhyZWYgZm9yIGFuY2hvciB3cmFwcGVyXG4gICAgICBxcCAtIHF1ZXJ5IHBhcmFtcyBmb3IgcGFnaW5hdGlvblxuICAgICovXG4gICAgbGV0IGxpbWl0ID0gcGw7XG4gICAgaWYgKHRwIDw9IGxpbWl0KSB7XG4gICAgICBsaW1pdCA9IHRwIC0gMTtcbiAgICB9XG4gICAgaWYgKGxpbWl0KSB7XG4gICAgICBsZXRcbiAgICAgICAgbHA6IG51bWJlcjsgLy8gbGFzdCBwYWdlXG4gICAgICBsZXQgZnA6IG51bWJlcjsgLy8gZmlyc3QgcGFnZVxuICAgICAgaWYgKGNwID4gTWF0aC5mbG9vcihsaW1pdCAvIDIpKSB7XG4gICAgICAgIGlmICh0cCA9PT0gMikge1xuICAgICAgICAgIGxwID0gdHA7XG4gICAgICAgICAgZnAgPSAxO1xuICAgICAgICAgIC8vIHdoZW4gY3VycmVudFBhZ2UgaXMgYWZ0ZXIgaGFsZi1wb2ludFxuICAgICAgICAgIC8vIChleGFtcGxlOiBbIDE0IF1bIDE1IF1bITE2IV1bIDE3IF1bIDE4IF0pXG4gICAgICAgIH0gZWxzZSBpZiAoY3AgPCAodHAgLSBNYXRoLmZsb29yKGxpbWl0IC8gMikpKSB7XG4gICAgICAgICAgbHAgPSBjcCAvIDEgKyBNYXRoLmZsb29yKGxpbWl0IC8gMik7XG4gICAgICAgICAgZnAgPSBjcCAvIDEgLSBNYXRoLmZsb29yKGxpbWl0IC8gMik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbHAgPSB0cDtcbiAgICAgICAgICBmcCA9IGNwIC0gbGltaXQgKyAodHAgLSBjcCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHdoZW4gY3VycmVudFBhZ2UgaXMgYmVmb3JlIGhhbGYtcG9pbnRcbiAgICAgICAgLy8gKGV4YW1wbGU6IFsgMSBdWyEyIV1bIDMgXVsgNCBdWyA1IF0pXG4gICAgICAgIGxwID0gbGltaXQgKyAxO1xuICAgICAgICBmcCA9IDE7XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBpID0gZnA7IGkgPD0gbHA7IGkgKz0gMSkge1xuICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgdGV4dDogU3RyaW5nKGkpLFxuICAgICAgICAgIGNsYXNzZXM6IGNwID09PSBpID8gJ2lzLWFjdGl2ZScgOiAnJyxcbiAgICAgICAgICBhbmNob3I6IGNwICE9PSBpID8gdGhpcy5fZ2V0UGFnaW5hdGlvbkFuY2hvcihpLCBtLCBocmVmLCBxcCkgOiBudWxsLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICB0ZXh0OiAnMScsXG4gICAgICAgIGNsYXNzZXM6IGNwID09PSAxID8gJ2lzLWFjdGl2ZScgOiAnJyxcbiAgICAgICAgYW5jaG9yOiBjcCAhPT0gMSA/IHRoaXMuX2dldFBhZ2luYXRpb25BbmNob3IoMSwgbSwgaHJlZiwgcXApIDogbnVsbCxcbiAgICAgIH0pO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCB0cDsgaSArPSAxKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICB0ZXh0OiBTdHJpbmcoaSArIDEpLFxuICAgICAgICAgIGNsYXNzZXM6IGNwID09PSBpICsgMSA/ICdpcy1hY3RpdmUnIDogJycsXG4gICAgICAgICAgYW5jaG9yOiBjcCAhPT0gaSArIDEgPyB0aGlzLl9nZXRQYWdpbmF0aW9uQW5jaG9yKGkgKyAxLCBtLCBocmVmLCBxcCkgOiBudWxsLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIGxpbmtzOiByZXN1bHQsXG4gICAgICBmaXJzdDoge1xuICAgICAgICBjbGFzc2VzOiBjcCA9PT0gMSA/ICdpcy1kaXNhYmxlZCcgOiAnJyxcbiAgICAgICAgYW5jaG9yOiBjcCAhPT0gMSA/IHRoaXMuX2dldFBhZ2luYXRpb25BbmNob3IoMSwgbSwgaHJlZiwgcXApIDogbnVsbCxcbiAgICAgIH0sXG4gICAgICBwcmV2OiB7XG4gICAgICAgIGNsYXNzZXM6IGNwID09PSAxID8gJ2lzLWRpc2FibGVkJyA6ICcnLFxuICAgICAgICBhbmNob3I6IGNwICE9PSAxID8gdGhpcy5fZ2V0UGFnaW5hdGlvbkFuY2hvcihjcCAvIDEgLSAxLCBtLCBocmVmLCBxcCkgOiBudWxsLFxuICAgICAgfSxcbiAgICAgIG5leHQ6IHtcbiAgICAgICAgY2xhc3NlczogY3AgPT09IHRwID8gJ2lzLWRpc2FibGVkJyA6ICcnLFxuICAgICAgICBhbmNob3I6IGNwICE9PSB0cCA/IHRoaXMuX2dldFBhZ2luYXRpb25BbmNob3IoY3AgLyAxICsgMSwgbSwgaHJlZiwgcXApIDogbnVsbCxcbiAgICAgIH0sXG4gICAgICBsYXN0OiB7XG4gICAgICAgIGNsYXNzZXM6IGNwID09PSB0cCA/ICdpcy1kaXNhYmxlZCcgOiAnJyxcbiAgICAgICAgYW5jaG9yOiBjcCAhPT0gdHAgPyB0aGlzLl9nZXRQYWdpbmF0aW9uQW5jaG9yKHRwLCBtLCBocmVmLCBxcCkgOiBudWxsLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0UGFnaW5hdGlvbkFuY2hvcihwYWdlLCBtb2RlLCBocmVmLCBxdWVyeVBhcmFtcykge1xuICAgIHN3aXRjaCAobW9kZSkge1xuICAgICAgY2FzZSAncGF5bG9hZCc6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcGF5bG9hZDogeyBzb3VyY2U6ICdwYWdpbmF0aW9uJywgcGFnZSB9LFxuICAgICAgICB9O1xuICAgICAgY2FzZSAnaHJlZic6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaHJlZjogcXVlcnlQYXJhbXMgPyBocmVmIDogaHJlZiArIHBhZ2UsXG4gICAgICAgICAgcXVlcnlQYXJhbXM6IHF1ZXJ5UGFyYW1zID8ge1xuICAgICAgICAgICAgLi4ucXVlcnlQYXJhbXMsXG4gICAgICAgICAgICBwYWdlLFxuICAgICAgICAgIH0gOiBudWxsLFxuICAgICAgICB9O1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiB7fTtcbiAgfVxufVxuIl19