import { DataSource } from '@n7-frontend/core';
export class AwGalleryResultsDS extends DataSource {
    constructor() {
        super(...arguments);
        this.addPagination = (page, totalPages, size) => {
            const sizeOptions = [12, 24, 48];
            this.pagination = {
                first: { payload: `goto-${1}`, classes: page === 1 ? 'is-disabled' : '' },
                prev: { payload: `goto-${page / 1 - 1}`, classes: page === 1 ? 'is-disabled' : '' },
                next: { payload: `goto-${page / 1 + 1}`, classes: page === totalPages ? 'is-disabled' : '' },
                last: { payload: `goto-${totalPages}`, classes: page === totalPages ? 'is-disabled' : '' },
                links: this.makePagination(totalPages, page),
                select: {
                    label: 'Numero di risultati',
                    options: sizeOptions.map((o) => ({
                        text: o,
                        selected: o === size,
                    })),
                    payload: 'select-size'
                },
            };
        };
        this.makePagination = (totalPages, currentPage) => {
            /*
              Called by this.unpackData() when this.options.page is defined.
              Returns the data for <n7-pagination> component.
            */
            const result = [];
            let limit = 5 - 1;
            if (totalPages <= limit) {
                limit = totalPages - 1;
            }
            // always push the first page
            if (limit) {
                let lastPage;
                let firstPage;
                if (currentPage > Math.floor(limit / 2)) {
                    if (totalPages === 2) {
                        lastPage = totalPages;
                        firstPage = 1;
                        // when currentPage is after half-point
                        // (example: [ 14 ][ 15 ][!16!][ 17 ][ 18 ])
                    }
                    else if (currentPage < (totalPages - Math.floor(limit / 2))) {
                        lastPage = currentPage / 1 + Math.floor(limit / 2);
                        firstPage = currentPage / 1 - Math.floor(limit / 2);
                    }
                    else {
                        lastPage = totalPages;
                        firstPage = currentPage - limit + (totalPages - currentPage);
                    }
                }
                else {
                    // when currentPage is before half-point
                    // (example: [ 1 ][!2!][ 3 ][ 4 ][ 5 ])
                    lastPage = limit + 1;
                    firstPage = 1;
                }
                // eslint-disable-next-line no-plusplus
                for (let i = firstPage; i <= lastPage; i++) {
                    result.push({
                        text: String(i),
                        payload: `page-${String(i)}`,
                        classes: currentPage === i ? 'is-active' : ''
                    });
                }
            }
            else {
                result.push({
                    text: '1',
                    payload: 'page-1',
                    classes: currentPage === 1 ? 'is-active' : ''
                });
                // eslint-disable-next-line no-plusplus
                for (let i = 1; i < totalPages; i++) {
                    result.push({ text: String(i + 1), payload: `page-${String(i + 1)}`, classes: currentPage === i + 1 ? 'is-active' : '' });
                }
            }
            return result;
        };
    }
    transform(data) {
        if (!data)
            return null;
        const { pageSize, currentPage } = this.options;
        // if the data doesn't fit on one page, render the pagination component
        if (data.length > pageSize) {
            this.addPagination(currentPage, Math.ceil(data.length / pageSize), pageSize);
        }
        return {
            res: data.slice(0, pageSize),
            pagination: this.pagination
        };
    }
    chunks(a, size) {
        const results = [];
        while (a.length) {
            results.push(a.splice(0, size));
        }
        return results;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS1yZXN1bHRzLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2RhdGEtc291cmNlcy9nYWxsZXJ5LXJlc3VsdHMuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRS9DLE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxVQUFVO0lBQWxEOztRQXdCUyxrQkFBYSxHQUFHLENBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsRUFBRTtZQUNoRCxNQUFNLFdBQVcsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLFVBQVUsR0FBRztnQkFDaEIsS0FBSyxFQUFFLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQyxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO2dCQUN6RSxJQUFJLEVBQUUsRUFBRSxPQUFPLEVBQUUsUUFBUSxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtnQkFDbkYsSUFBSSxFQUFFLEVBQUUsT0FBTyxFQUFFLFFBQVEsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxLQUFLLFVBQVUsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7Z0JBQzVGLElBQUksRUFBRSxFQUFFLE9BQU8sRUFBRSxRQUFRLFVBQVUsRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FB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c291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIEF3R2FsbGVyeVJlc3VsdHNEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuICBwcml2YXRlIHBhZ2luYXRpb246IGFueVxuXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSkge1xuICAgIGlmICghZGF0YSkgcmV0dXJuIG51bGw7XG4gICAgY29uc3QgeyBwYWdlU2l6ZSwgY3VycmVudFBhZ2UgfSA9IHRoaXMub3B0aW9ucztcbiAgICAvLyBpZiB0aGUgZGF0YSBkb2Vzbid0IGZpdCBvbiBvbmUgcGFnZSwgcmVuZGVyIHRoZSBwYWdpbmF0aW9uIGNvbXBvbmVudFxuICAgIGlmIChkYXRhLmxlbmd0aCA+IHBhZ2VTaXplKSB7XG4gICAgICB0aGlzLmFkZFBhZ2luYXRpb24oY3VycmVudFBhZ2UsIE1hdGguY2VpbChkYXRhLmxlbmd0aCAvIHBhZ2VTaXplKSwgcGFnZVNpemUpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgcmVzOiBkYXRhLnNsaWNlKDAsIHBhZ2VTaXplKSxcbiAgICAgIHBhZ2luYXRpb246IHRoaXMucGFnaW5hdGlvblxuICAgIH07XG4gIH1cblxuICBwdWJsaWMgY2h1bmtzKGEsIHNpemUpIHtcbiAgICBjb25zdCByZXN1bHRzID0gW107XG4gICAgd2hpbGUgKGEubGVuZ3RoKSB7XG4gICAgICByZXN1bHRzLnB1c2goYS5zcGxpY2UoMCwgc2l6ZSkpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfVxuXG4gIHB1YmxpYyBhZGRQYWdpbmF0aW9uID0gKHBhZ2UsIHRvdGFsUGFnZXMsIHNpemUpID0+IHtcbiAgICBjb25zdCBzaXplT3B0aW9ucyA9IFsxMiwgMjQsIDQ4XTtcbiAgICB0aGlzLnBhZ2luYXRpb24gPSB7XG4gICAgICBmaXJzdDogeyBwYXlsb2FkOiBgZ290by0kezF9YCwgY2xhc3NlczogcGFnZSA9PT0gMSA/ICdpcy1kaXNhYmxlZCcgOiAnJyB9LFxuICAgICAgcHJldjogeyBwYXlsb2FkOiBgZ290by0ke3BhZ2UgLyAxIC0gMX1gLCBjbGFzc2VzOiBwYWdlID09PSAxID8gJ2lzLWRpc2FibGVkJyA6ICcnIH0sXG4gICAgICBuZXh0OiB7IHBheWxvYWQ6IGBnb3RvLSR7cGFnZSAvIDEgKyAxfWAsIGNsYXNzZXM6IHBhZ2UgPT09IHRvdGFsUGFnZXMgPyAnaXMtZGlzYWJsZWQnIDogJycgfSxcbiAgICAgIGxhc3Q6IHsgcGF5bG9hZDogYGdvdG8tJHt0b3RhbFBhZ2VzfWAsIGNsYXNzZXM6IHBhZ2UgPT09IHRvdGFsUGFnZXMgPyAnaXMtZGlzYWJsZWQnIDogJycgfSxcbiAgICAgIGxpbmtzOiB0aGlzLm1ha2VQYWdpbmF0aW9uKHRvdGFsUGFnZXMsIHBhZ2UpLFxuICAgICAgc2VsZWN0OiB7XG4gICAgICAgIGxhYmVsOiAnTnVtZXJvIGRpIHJpc3VsdGF0aScsXG4gICAgICAgIG9wdGlvbnM6IHNpemVPcHRpb25zLm1hcCgobykgPT4gKHtcbiAgICAgICAgICB0ZXh0OiBvLFxuICAgICAgICAgIHNlbGVjdGVkOiBvID09PSBzaXplLFxuICAgICAgICB9KSksXG4gICAgICAgIHBheWxvYWQ6ICdzZWxlY3Qtc2l6ZSdcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHB1YmxpYyBtYWtlUGFnaW5hdGlvbiA9ICh0b3RhbFBhZ2VzLCBjdXJyZW50UGFnZSkgPT4ge1xuICAgIC8qXG4gICAgICBDYWxsZWQgYnkgdGhpcy51bnBhY2tEYXRhKCkgd2hlbiB0aGlzLm9wdGlvbnMucGFnZSBpcyBkZWZpbmVkLlxuICAgICAgUmV0dXJucyB0aGUgZGF0YSBmb3IgPG43LXBhZ2luYXRpb24+IGNvbXBvbmVudC5cbiAgICAqL1xuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgIGxldCBsaW1pdCA9IDUgLSAxO1xuXG4gICAgaWYgKHRvdGFsUGFnZXMgPD0gbGltaXQpIHtcbiAgICAgIGxpbWl0ID0gdG90YWxQYWdlcyAtIDE7XG4gICAgfVxuXG4gICAgLy8gYWx3YXlzIHB1c2ggdGhlIGZpcnN0IHBhZ2VcbiAgICBpZiAobGltaXQpIHtcbiAgICAgIGxldCBsYXN0UGFnZTogbnVtYmVyOyBsZXRcbiAgICAgICAgZmlyc3RQYWdlOiBudW1iZXI7XG4gICAgICBpZiAoY3VycmVudFBhZ2UgPiBNYXRoLmZsb29yKGxpbWl0IC8gMikpIHtcbiAgICAgICAgaWYgKHRvdGFsUGFnZXMgPT09IDIpIHtcbiAgICAgICAgICBsYXN0UGFnZSA9IHRvdGFsUGFnZXM7XG4gICAgICAgICAgZmlyc3RQYWdlID0gMTtcbiAgICAgICAgICAvLyB3aGVuIGN1cnJlbnRQYWdlIGlzIGFmdGVyIGhhbGYtcG9pbnRcbiAgICAgICAgICAvLyAoZXhhbXBsZTogWyAxNCBdWyAxNSBdWyExNiFdWyAxNyBdWyAxOCBdKVxuICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnRQYWdlIDwgKHRvdGFsUGFnZXMgLSBNYXRoLmZsb29yKGxpbWl0IC8gMikpKSB7XG4gICAgICAgICAgbGFzdFBhZ2UgPSBjdXJyZW50UGFnZSAvIDEgKyBNYXRoLmZsb29yKGxpbWl0IC8gMik7XG4gICAgICAgICAgZmlyc3RQYWdlID0gY3VycmVudFBhZ2UgLyAxIC0gTWF0aC5mbG9vcihsaW1pdCAvIDIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxhc3RQYWdlID0gdG90YWxQYWdlcztcbiAgICAgICAgICBmaXJzdFBhZ2UgPSBjdXJyZW50UGFnZSAtIGxpbWl0ICsgKHRvdGFsUGFnZXMgLSBjdXJyZW50UGFnZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHdoZW4gY3VycmVudFBhZ2UgaXMgYmVmb3JlIGhhbGYtcG9pbnRcbiAgICAgICAgLy8gKGV4YW1wbGU6IFsgMSBdWyEyIV1bIDMgXVsgNCBdWyA1IF0pXG4gICAgICAgIGxhc3RQYWdlID0gbGltaXQgKyAxO1xuICAgICAgICBmaXJzdFBhZ2UgPSAxO1xuICAgICAgfVxuXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGx1c3BsdXNcbiAgICAgIGZvciAobGV0IGkgPSBmaXJzdFBhZ2U7IGkgPD0gbGFzdFBhZ2U7IGkrKykge1xuICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgdGV4dDogU3RyaW5nKGkpLFxuICAgICAgICAgIHBheWxvYWQ6IGBwYWdlLSR7U3RyaW5nKGkpfWAsXG4gICAgICAgICAgY2xhc3NlczogY3VycmVudFBhZ2UgPT09IGkgPyAnaXMtYWN0aXZlJyA6ICcnXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgIHRleHQ6ICcxJyxcbiAgICAgICAgcGF5bG9hZDogJ3BhZ2UtMScsXG4gICAgICAgIGNsYXNzZXM6IGN1cnJlbnRQYWdlID09PSAxID8gJ2lzLWFjdGl2ZScgOiAnJ1xuICAgICAgfSk7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGx1c3BsdXNcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgdG90YWxQYWdlczsgaSsrKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKHsgdGV4dDogU3RyaW5nKGkgKyAxKSwgcGF5bG9hZDogYHBhZ2UtJHtTdHJpbmcoaSArIDEpfWAsIGNsYXNzZXM6IGN1cnJlbnRQYWdlID09PSBpICsgMSA/ICdpcy1hY3RpdmUnIDogJycgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn1cbiJdfQ==