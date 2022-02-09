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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS1yZXN1bHRzLmRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbjctYm9pbGVycGxhdGUtbGliL3NyYy9saWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL2dhbGxlcnktcmVzdWx0cy5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFL0MsTUFBTSxPQUFPLGtCQUFtQixTQUFRLFVBQVU7SUFBbEQ7O1FBd0JTLGtCQUFhLEdBQUcsQ0FBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxFQUFFO1lBQ2hELE1BQU0sV0FBVyxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsVUFBVSxHQUFHO2dCQUNoQixLQUFLLEVBQUUsRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3pFLElBQUksRUFBRSxFQUFFLE9BQU8sRUFBRSxRQUFRLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO2dCQUNuRixJQUFJLEVBQUUsRUFBRSxPQUFPLEVBQUUsUUFBUSxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtnQkFDNUYsSUFBSSxFQUFFLEVBQUUsT0FBTyxFQUFFLFFBQVEsVUFBVSxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksS0FB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O0lBQ2pCLENBQUM7Q0E4RUYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEF3R2FsbGVyeVJlc3VsdHNEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xyXG4gIHByaXZhdGUgcGFnaW5hdGlvbjogYW55XHJcblxyXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSkge1xyXG4gICAgaWYgKCFkYXRhKSByZXR1cm4gbnVsbDtcclxuICAgIGNvbnN0IHsgcGFnZVNpemUsIGN1cnJlbnRQYWdlIH0gPSB0aGlzLm9wdGlvbnM7XHJcbiAgICAvLyBpZiB0aGUgZGF0YSBkb2Vzbid0IGZpdCBvbiBvbmUgcGFnZSwgcmVuZGVyIHRoZSBwYWdpbmF0aW9uIGNvbXBvbmVudFxyXG4gICAgaWYgKGRhdGEubGVuZ3RoID4gcGFnZVNpemUpIHtcclxuICAgICAgdGhpcy5hZGRQYWdpbmF0aW9uKGN1cnJlbnRQYWdlLCBNYXRoLmNlaWwoZGF0YS5sZW5ndGggLyBwYWdlU2l6ZSksIHBhZ2VTaXplKTtcclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHJlczogZGF0YS5zbGljZSgwLCBwYWdlU2l6ZSksXHJcbiAgICAgIHBhZ2luYXRpb246IHRoaXMucGFnaW5hdGlvblxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjaHVua3MoYSwgc2l6ZSkge1xyXG4gICAgY29uc3QgcmVzdWx0cyA9IFtdO1xyXG4gICAgd2hpbGUgKGEubGVuZ3RoKSB7XHJcbiAgICAgIHJlc3VsdHMucHVzaChhLnNwbGljZSgwLCBzaXplKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0cztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhZGRQYWdpbmF0aW9uID0gKHBhZ2UsIHRvdGFsUGFnZXMsIHNpemUpID0+IHtcclxuICAgIGNvbnN0IHNpemVPcHRpb25zID0gWzEyLCAyNCwgNDhdO1xyXG4gICAgdGhpcy5wYWdpbmF0aW9uID0ge1xyXG4gICAgICBmaXJzdDogeyBwYXlsb2FkOiBgZ290by0kezF9YCwgY2xhc3NlczogcGFnZSA9PT0gMSA/ICdpcy1kaXNhYmxlZCcgOiAnJyB9LFxyXG4gICAgICBwcmV2OiB7IHBheWxvYWQ6IGBnb3RvLSR7cGFnZSAvIDEgLSAxfWAsIGNsYXNzZXM6IHBhZ2UgPT09IDEgPyAnaXMtZGlzYWJsZWQnIDogJycgfSxcclxuICAgICAgbmV4dDogeyBwYXlsb2FkOiBgZ290by0ke3BhZ2UgLyAxICsgMX1gLCBjbGFzc2VzOiBwYWdlID09PSB0b3RhbFBhZ2VzID8gJ2lzLWRpc2FibGVkJyA6ICcnIH0sXHJcbiAgICAgIGxhc3Q6IHsgcGF5bG9hZDogYGdvdG8tJHt0b3RhbFBhZ2VzfWAsIGNsYXNzZXM6IHBhZ2UgPT09IHRvdGFsUGFnZXMgPyAnaXMtZGlzYWJsZWQnIDogJycgfSxcclxuICAgICAgbGlua3M6IHRoaXMubWFrZVBhZ2luYXRpb24odG90YWxQYWdlcywgcGFnZSksXHJcbiAgICAgIHNlbGVjdDoge1xyXG4gICAgICAgIGxhYmVsOiAnTnVtZXJvIGRpIHJpc3VsdGF0aScsXHJcbiAgICAgICAgb3B0aW9uczogc2l6ZU9wdGlvbnMubWFwKChvKSA9PiAoe1xyXG4gICAgICAgICAgdGV4dDogbyxcclxuICAgICAgICAgIHNlbGVjdGVkOiBvID09PSBzaXplLFxyXG4gICAgICAgIH0pKSxcclxuICAgICAgICBwYXlsb2FkOiAnc2VsZWN0LXNpemUnXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG1ha2VQYWdpbmF0aW9uID0gKHRvdGFsUGFnZXMsIGN1cnJlbnRQYWdlKSA9PiB7XHJcbiAgICAvKlxyXG4gICAgICBDYWxsZWQgYnkgdGhpcy51bnBhY2tEYXRhKCkgd2hlbiB0aGlzLm9wdGlvbnMucGFnZSBpcyBkZWZpbmVkLlxyXG4gICAgICBSZXR1cm5zIHRoZSBkYXRhIGZvciA8bjctcGFnaW5hdGlvbj4gY29tcG9uZW50LlxyXG4gICAgKi9cclxuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xyXG4gICAgbGV0IGxpbWl0ID0gNSAtIDE7XHJcblxyXG4gICAgaWYgKHRvdGFsUGFnZXMgPD0gbGltaXQpIHtcclxuICAgICAgbGltaXQgPSB0b3RhbFBhZ2VzIC0gMTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBhbHdheXMgcHVzaCB0aGUgZmlyc3QgcGFnZVxyXG4gICAgaWYgKGxpbWl0KSB7XHJcbiAgICAgIGxldCBsYXN0UGFnZTogbnVtYmVyOyBsZXRcclxuICAgICAgICBmaXJzdFBhZ2U6IG51bWJlcjtcclxuICAgICAgaWYgKGN1cnJlbnRQYWdlID4gTWF0aC5mbG9vcihsaW1pdCAvIDIpKSB7XHJcbiAgICAgICAgaWYgKHRvdGFsUGFnZXMgPT09IDIpIHtcclxuICAgICAgICAgIGxhc3RQYWdlID0gdG90YWxQYWdlcztcclxuICAgICAgICAgIGZpcnN0UGFnZSA9IDE7XHJcbiAgICAgICAgICAvLyB3aGVuIGN1cnJlbnRQYWdlIGlzIGFmdGVyIGhhbGYtcG9pbnRcclxuICAgICAgICAgIC8vIChleGFtcGxlOiBbIDE0IF1bIDE1IF1bITE2IV1bIDE3IF1bIDE4IF0pXHJcbiAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50UGFnZSA8ICh0b3RhbFBhZ2VzIC0gTWF0aC5mbG9vcihsaW1pdCAvIDIpKSkge1xyXG4gICAgICAgICAgbGFzdFBhZ2UgPSBjdXJyZW50UGFnZSAvIDEgKyBNYXRoLmZsb29yKGxpbWl0IC8gMik7XHJcbiAgICAgICAgICBmaXJzdFBhZ2UgPSBjdXJyZW50UGFnZSAvIDEgLSBNYXRoLmZsb29yKGxpbWl0IC8gMik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGxhc3RQYWdlID0gdG90YWxQYWdlcztcclxuICAgICAgICAgIGZpcnN0UGFnZSA9IGN1cnJlbnRQYWdlIC0gbGltaXQgKyAodG90YWxQYWdlcyAtIGN1cnJlbnRQYWdlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gd2hlbiBjdXJyZW50UGFnZSBpcyBiZWZvcmUgaGFsZi1wb2ludFxyXG4gICAgICAgIC8vIChleGFtcGxlOiBbIDEgXVshMiFdWyAzIF1bIDQgXVsgNSBdKVxyXG4gICAgICAgIGxhc3RQYWdlID0gbGltaXQgKyAxO1xyXG4gICAgICAgIGZpcnN0UGFnZSA9IDE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wbHVzcGx1c1xyXG4gICAgICBmb3IgKGxldCBpID0gZmlyc3RQYWdlOyBpIDw9IGxhc3RQYWdlOyBpKyspIHtcclxuICAgICAgICByZXN1bHQucHVzaCh7XHJcbiAgICAgICAgICB0ZXh0OiBTdHJpbmcoaSksXHJcbiAgICAgICAgICBwYXlsb2FkOiBgcGFnZS0ke1N0cmluZyhpKX1gLFxyXG4gICAgICAgICAgY2xhc3NlczogY3VycmVudFBhZ2UgPT09IGkgPyAnaXMtYWN0aXZlJyA6ICcnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJlc3VsdC5wdXNoKHtcclxuICAgICAgICB0ZXh0OiAnMScsXHJcbiAgICAgICAgcGF5bG9hZDogJ3BhZ2UtMScsXHJcbiAgICAgICAgY2xhc3NlczogY3VycmVudFBhZ2UgPT09IDEgPyAnaXMtYWN0aXZlJyA6ICcnXHJcbiAgICAgIH0pO1xyXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGx1c3BsdXNcclxuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCB0b3RhbFBhZ2VzOyBpKyspIHtcclxuICAgICAgICByZXN1bHQucHVzaCh7IHRleHQ6IFN0cmluZyhpICsgMSksIHBheWxvYWQ6IGBwYWdlLSR7U3RyaW5nKGkgKyAxKX1gLCBjbGFzc2VzOiBjdXJyZW50UGFnZSA9PT0gaSArIDEgPyAnaXMtYWN0aXZlJyA6ICcnIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxufVxyXG4iXX0=