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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS1yZXN1bHRzLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2RhdGEtc291cmNlcy9nYWxsZXJ5LXJlc3VsdHMuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRS9DLE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxVQUFVO0lBQWxEOztRQXdCUyxrQkFBYSxHQUFHLENBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsRUFBRTtZQUNoRCxNQUFNLFdBQVcsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLFVBQVUsR0FBRztnQkFDaEIsS0FBSyxFQUFFLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQyxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO2dCQUN6RSxJQUFJLEVBQUUsRUFBRSxPQUFPLEVBQUUsUUFBUSxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtnQkFDbkYsSUFBSSxFQUFFLEVBQUUsT0FBTyxFQUFFLFFBQVEsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxLQUFLLFVBQVUsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7Z0JBQzVGLElBQUksRUFBRSxFQUFFLE9BQU8sRUFBRSxRQUFRLFVBQVUsRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FB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c291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBBd0dhbGxlcnlSZXN1bHRzRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcclxuICBwcml2YXRlIHBhZ2luYXRpb246IGFueVxyXG5cclxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpIHtcclxuICAgIGlmICghZGF0YSkgcmV0dXJuIG51bGw7XHJcbiAgICBjb25zdCB7IHBhZ2VTaXplLCBjdXJyZW50UGFnZSB9ID0gdGhpcy5vcHRpb25zO1xyXG4gICAgLy8gaWYgdGhlIGRhdGEgZG9lc24ndCBmaXQgb24gb25lIHBhZ2UsIHJlbmRlciB0aGUgcGFnaW5hdGlvbiBjb21wb25lbnRcclxuICAgIGlmIChkYXRhLmxlbmd0aCA+IHBhZ2VTaXplKSB7XHJcbiAgICAgIHRoaXMuYWRkUGFnaW5hdGlvbihjdXJyZW50UGFnZSwgTWF0aC5jZWlsKGRhdGEubGVuZ3RoIC8gcGFnZVNpemUpLCBwYWdlU2l6ZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICByZXM6IGRhdGEuc2xpY2UoMCwgcGFnZVNpemUpLFxyXG4gICAgICBwYWdpbmF0aW9uOiB0aGlzLnBhZ2luYXRpb25cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2h1bmtzKGEsIHNpemUpIHtcclxuICAgIGNvbnN0IHJlc3VsdHMgPSBbXTtcclxuICAgIHdoaWxlIChhLmxlbmd0aCkge1xyXG4gICAgICByZXN1bHRzLnB1c2goYS5zcGxpY2UoMCwgc2l6ZSkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdHM7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYWRkUGFnaW5hdGlvbiA9IChwYWdlLCB0b3RhbFBhZ2VzLCBzaXplKSA9PiB7XHJcbiAgICBjb25zdCBzaXplT3B0aW9ucyA9IFsxMiwgMjQsIDQ4XTtcclxuICAgIHRoaXMucGFnaW5hdGlvbiA9IHtcclxuICAgICAgZmlyc3Q6IHsgcGF5bG9hZDogYGdvdG8tJHsxfWAsIGNsYXNzZXM6IHBhZ2UgPT09IDEgPyAnaXMtZGlzYWJsZWQnIDogJycgfSxcclxuICAgICAgcHJldjogeyBwYXlsb2FkOiBgZ290by0ke3BhZ2UgLyAxIC0gMX1gLCBjbGFzc2VzOiBwYWdlID09PSAxID8gJ2lzLWRpc2FibGVkJyA6ICcnIH0sXHJcbiAgICAgIG5leHQ6IHsgcGF5bG9hZDogYGdvdG8tJHtwYWdlIC8gMSArIDF9YCwgY2xhc3NlczogcGFnZSA9PT0gdG90YWxQYWdlcyA/ICdpcy1kaXNhYmxlZCcgOiAnJyB9LFxyXG4gICAgICBsYXN0OiB7IHBheWxvYWQ6IGBnb3RvLSR7dG90YWxQYWdlc31gLCBjbGFzc2VzOiBwYWdlID09PSB0b3RhbFBhZ2VzID8gJ2lzLWRpc2FibGVkJyA6ICcnIH0sXHJcbiAgICAgIGxpbmtzOiB0aGlzLm1ha2VQYWdpbmF0aW9uKHRvdGFsUGFnZXMsIHBhZ2UpLFxyXG4gICAgICBzZWxlY3Q6IHtcclxuICAgICAgICBsYWJlbDogJ051bWVybyBkaSByaXN1bHRhdGknLFxyXG4gICAgICAgIG9wdGlvbnM6IHNpemVPcHRpb25zLm1hcCgobykgPT4gKHtcclxuICAgICAgICAgIHRleHQ6IG8sXHJcbiAgICAgICAgICBzZWxlY3RlZDogbyA9PT0gc2l6ZSxcclxuICAgICAgICB9KSksXHJcbiAgICAgICAgcGF5bG9hZDogJ3NlbGVjdC1zaXplJ1xyXG4gICAgICB9LFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBtYWtlUGFnaW5hdGlvbiA9ICh0b3RhbFBhZ2VzLCBjdXJyZW50UGFnZSkgPT4ge1xyXG4gICAgLypcclxuICAgICAgQ2FsbGVkIGJ5IHRoaXMudW5wYWNrRGF0YSgpIHdoZW4gdGhpcy5vcHRpb25zLnBhZ2UgaXMgZGVmaW5lZC5cclxuICAgICAgUmV0dXJucyB0aGUgZGF0YSBmb3IgPG43LXBhZ2luYXRpb24+IGNvbXBvbmVudC5cclxuICAgICovXHJcbiAgICBjb25zdCByZXN1bHQgPSBbXTtcclxuICAgIGxldCBsaW1pdCA9IDUgLSAxO1xyXG5cclxuICAgIGlmICh0b3RhbFBhZ2VzIDw9IGxpbWl0KSB7XHJcbiAgICAgIGxpbWl0ID0gdG90YWxQYWdlcyAtIDE7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gYWx3YXlzIHB1c2ggdGhlIGZpcnN0IHBhZ2VcclxuICAgIGlmIChsaW1pdCkge1xyXG4gICAgICBsZXQgbGFzdFBhZ2U6IG51bWJlcjsgbGV0XHJcbiAgICAgICAgZmlyc3RQYWdlOiBudW1iZXI7XHJcbiAgICAgIGlmIChjdXJyZW50UGFnZSA+IE1hdGguZmxvb3IobGltaXQgLyAyKSkge1xyXG4gICAgICAgIGlmICh0b3RhbFBhZ2VzID09PSAyKSB7XHJcbiAgICAgICAgICBsYXN0UGFnZSA9IHRvdGFsUGFnZXM7XHJcbiAgICAgICAgICBmaXJzdFBhZ2UgPSAxO1xyXG4gICAgICAgICAgLy8gd2hlbiBjdXJyZW50UGFnZSBpcyBhZnRlciBoYWxmLXBvaW50XHJcbiAgICAgICAgICAvLyAoZXhhbXBsZTogWyAxNCBdWyAxNSBdWyExNiFdWyAxNyBdWyAxOCBdKVxyXG4gICAgICAgIH0gZWxzZSBpZiAoY3VycmVudFBhZ2UgPCAodG90YWxQYWdlcyAtIE1hdGguZmxvb3IobGltaXQgLyAyKSkpIHtcclxuICAgICAgICAgIGxhc3RQYWdlID0gY3VycmVudFBhZ2UgLyAxICsgTWF0aC5mbG9vcihsaW1pdCAvIDIpO1xyXG4gICAgICAgICAgZmlyc3RQYWdlID0gY3VycmVudFBhZ2UgLyAxIC0gTWF0aC5mbG9vcihsaW1pdCAvIDIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBsYXN0UGFnZSA9IHRvdGFsUGFnZXM7XHJcbiAgICAgICAgICBmaXJzdFBhZ2UgPSBjdXJyZW50UGFnZSAtIGxpbWl0ICsgKHRvdGFsUGFnZXMgLSBjdXJyZW50UGFnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIHdoZW4gY3VycmVudFBhZ2UgaXMgYmVmb3JlIGhhbGYtcG9pbnRcclxuICAgICAgICAvLyAoZXhhbXBsZTogWyAxIF1bITIhXVsgMyBdWyA0IF1bIDUgXSlcclxuICAgICAgICBsYXN0UGFnZSA9IGxpbWl0ICsgMTtcclxuICAgICAgICBmaXJzdFBhZ2UgPSAxO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGx1c3BsdXNcclxuICAgICAgZm9yIChsZXQgaSA9IGZpcnN0UGFnZTsgaSA8PSBsYXN0UGFnZTsgaSsrKSB7XHJcbiAgICAgICAgcmVzdWx0LnB1c2goe1xyXG4gICAgICAgICAgdGV4dDogU3RyaW5nKGkpLFxyXG4gICAgICAgICAgcGF5bG9hZDogYHBhZ2UtJHtTdHJpbmcoaSl9YCxcclxuICAgICAgICAgIGNsYXNzZXM6IGN1cnJlbnRQYWdlID09PSBpID8gJ2lzLWFjdGl2ZScgOiAnJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXN1bHQucHVzaCh7XHJcbiAgICAgICAgdGV4dDogJzEnLFxyXG4gICAgICAgIHBheWxvYWQ6ICdwYWdlLTEnLFxyXG4gICAgICAgIGNsYXNzZXM6IGN1cnJlbnRQYWdlID09PSAxID8gJ2lzLWFjdGl2ZScgOiAnJ1xyXG4gICAgICB9KTtcclxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBsdXNwbHVzXHJcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgdG90YWxQYWdlczsgaSsrKSB7XHJcbiAgICAgICAgcmVzdWx0LnB1c2goeyB0ZXh0OiBTdHJpbmcoaSArIDEpLCBwYXlsb2FkOiBgcGFnZS0ke1N0cmluZyhpICsgMSl9YCwgY2xhc3NlczogY3VycmVudFBhZ2UgPT09IGkgKyAxID8gJ2lzLWFjdGl2ZScgOiAnJyB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcbn1cclxuIl19