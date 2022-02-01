import { DataSource } from '@n7-frontend/core';
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';
export class FacetHistogramDS extends DataSource {
    constructor() {
        super(...arguments);
        this.value = '';
        this.isUpdate = false;
        this.setValue = (value, update = false) => {
            this.value = value;
            this.isUpdate = update;
            if (update && this.input) {
                const { links } = this.input;
                this.update({ ...this.input, links });
                if (!this.histogramApi)
                    return;
                // format the new bars data
                const newBars = this.parseLinks(links);
                const [firstYear, lastYear] = this.value.split('-');
                // get years for slider positions
                const firstLabel = this.getFirstLabel(firstYear, newBars);
                const lastLabel = this.getLastLabel(lastYear, newBars);
                this.value = `${firstLabel}-${lastLabel}`;
                // update the histogram
                this.histogramApi.setSliders([firstLabel, lastLabel]);
                this.histogramApi.setBars(newBars);
            }
            // reload the tooltips
            this.loadTooltips();
        };
        /**
         * Returns the current facet value
         */
        this.getValue = () => this.value;
    }
    transform({ links }) {
        const items = this.parseLinks(links); // format data
        const histogramData = {
            containerId: 'container-for-histogram',
            width: 450,
            height: 50,
            colours: {
                top: '#7091B3',
                bottom: '#96c2f2',
                accent: '#2F528B',
            },
            margin: {
                left: 30,
                right: 0,
                top: 10,
                bottom: 45
            },
            axis: {
                yAxis: {
                    show: true,
                    // tickAmount: 3
                    values: [0, 5, 20, 60]
                }
            },
            items,
            setApi: (api) => {
                if (!this.histogramApi)
                    this.histogramApi = api;
                if (this.value) {
                    const [firstYear, lastYear] = this.value.split('-');
                    const firstLabel = this.getFirstLabel(firstYear, items);
                    const lastLabel = this.getLastLabel(lastYear, items);
                    setTimeout(() => {
                        // when the component loads, set the sliders and the bars
                        // (necessary if search url has params)
                        this.histogramApi.setSliders([firstLabel, lastLabel]);
                        this.histogramApi.setBars(items);
                    });
                }
            }
        };
        // if (this.value) {
        //   const [firstYear, lastYear] = this.value.split('-');
        //   const firstLabel = this.getFirstLabel(firstYear, items);
        //   const lastLabel = this.getLastLabel(lastYear, items);
        //   histogramData.setSliders = [firstLabel, lastLabel];
        //   histogramData.items = items;
        // }
        return histogramData;
    }
    /**
     * Reset to the default facet value
     */
    clear() {
        this.value = '';
    }
    /**
     * Loads tippy tooltips and appends them to the histogram bars
     */
    loadTooltips() {
        const elements = document.querySelectorAll('#container-for-histogram g.bars rect.bars');
        tippy(elements, {
            content(reference) {
                const start = reference.getAttribute('data-start');
                const end = reference.getAttribute('data-end');
                return `<span class="tippy-template">${start}<br>${end}</span>`;
            },
            allowHTML: true,
            appendTo: () => document.body,
        });
    }
    /**
     * Convert the links into the histogram component format
     */
    parseLinks(links) {
        return links.map((link) => ({
            label: link.text,
            value: link.counter,
            payload: link.payload,
            range: link.range ? {
                payload: link.range.payload,
                label: link.range.text
            } : undefined,
        })).sort((a, b) => +a.label - b.label);
    }
    /**
     * Get the left-most label
     */
    getFirstLabel(year, items) {
        if (!year)
            return items[0].label;
        return items.find(({ label }) => +label === +year)?.label;
    }
    /**
     * Get the right-most label
     */
    getLastLabel(year, items) {
        if (!year)
            return items[items.length - 1].label;
        return items.find(({ label, range }) => {
            if (range) {
                return +range.label === +year;
            }
            return +label === +year;
        })?.label;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtaGlzdG9ncmFtLmRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbjctYm9pbGVycGxhdGUtbGliL3NyYy9saWIvbXVydWNhL2RhdGEtc291cmNlcy9mYWNldHMvZmFjZXQtaGlzdG9ncmFtLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMvQyxPQUFPLEtBQUssTUFBTSxVQUFVLENBQUM7QUFDN0IsT0FBTyx5QkFBeUIsQ0FBQztBQUtqQyxNQUFNLE9BQU8sZ0JBQWlCLFNBQVEsVUFBVTtJQUFoRDs7UUFHRSxVQUFLLEdBQWdCLEVBQUUsQ0FBQztRQUV4QixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBdURqQixhQUFRLEdBQUcsQ0FBQyxLQUFLLEVBQUUsTUFBTSxHQUFHLEtBQUssRUFBRSxFQUFFO1lBQ25DLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQ25CLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDO1lBRXZCLElBQUksTUFBTSxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ3hCLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO2dCQUM3QixJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7Z0JBQ3RDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWTtvQkFBRSxPQUFPO2dCQUMvQiwyQkFBMkI7Z0JBQzNCLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3ZDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3BELGlD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QUFDLENBQUMsS0FBSyxDQUFDO1FBQ2pDLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxDQUFDO0lBQzVELENBQUM7SUFFRDs7T0FFRztJQUNLLFlBQVksQ0FBQyxJQUFZLEVBQUUsS0FBSztRQUN0QyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ2hELE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUU7WUFDckMsSUFBSSxLQUFLLEVBQUU7Z0JBQ1QsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLEtBQUssQ0FBQyxJQUFJLENBQUM7YUFDL0I7WUFDRCxPQUFPLENBQUMsS0FBSyxLQUFLLENBQUMsSUFBSSxDQUFDO1FBQzFCLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQztJQUNaLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhpc3RvZ3JhbVJhbmdlRGF0YSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcbmltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgdGlwcHkgZnJvbSAndGlwcHkuanMnO1xuaW1wb3J0ICd0aXBweS5qcy9kaXN0L3RpcHB5LmNzcyc7XG5pbXBvcnQgeyBGYWNldERhdGFTb3VyY2UgfSBmcm9tICcuL2ZhY2V0LWRhdGFzb3VyY2UnO1xuXG50eXBlIEZBQ0VUX1ZBTFVFID0gc3RyaW5nO1xuXG5leHBvcnQgY2xhc3MgRmFjZXRIaXN0b2dyYW1EUyBleHRlbmRzIERhdGFTb3VyY2UgaW1wbGVtZW50cyBGYWNldERhdGFTb3VyY2Uge1xuICBpZDogc3RyaW5nO1xuXG4gIHZhbHVlOiBGQUNFVF9WQUxVRSA9ICcnO1xuXG4gIGlzVXBkYXRlID0gZmFsc2U7XG5cbiAgaGlzdG9ncmFtQXBpOiBhbnk7XG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybSh7IGxpbmtzIH0pOiBIaXN0b2dyYW1SYW5nZURhdGEge1xuICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5wYXJzZUxpbmtzKGxpbmtzKTsgLy8gZm9ybWF0IGRhdGFcblxuICAgIGNvbnN0IGhpc3RvZ3JhbURhdGE6IEhpc3RvZ3JhbVJhbmdlRGF0YSA9IHtcbiAgICAgIGNvbnRhaW5lcklkOiAnY29udGFpbmVyLWZvci1oaXN0b2dyYW0nLFxuICAgICAgd2lkdGg6IDQ1MCxcbiAgICAgIGhlaWdodDogNTAsXG4gICAgICBjb2xvdXJzOiB7XG4gICAgICAgIHRvcDogJyM3MDkxQjMnLFxuICAgICAgICBib3R0b206ICcjOTZjMmYyJyxcbiAgICAgICAgYWNjZW50OiAnIzJGNTI4QicsXG4gICAgICB9LFxuICAgICAgbWFyZ2luOiB7XG4gICAgICAgIGxlZnQ6IDMwLFxuICAgICAgICByaWdodDogMCxcbiAgICAgICAgdG9wOiAxMCxcbiAgICAgICAgYm90dG9tOiA0NVxuICAgICAgfSxcbiAgICAgIGF4aXM6IHtcbiAgICAgICAgeUF4aXM6IHtcbiAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgIC8vIHRpY2tBbW91bnQ6IDNcbiAgICAgICAgICB2YWx1ZXM6IFswLCA1LCAyMCwgNjBdXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBpdGVtcyxcbiAgICAgIHNldEFwaTogKGFwaSkgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuaGlzdG9ncmFtQXBpKSB0aGlzLmhpc3RvZ3JhbUFwaSA9IGFwaTtcbiAgICAgICAgaWYgKHRoaXMudmFsdWUpIHtcbiAgICAgICAgICBjb25zdCBbZmlyc3RZZWFyLCBsYXN0WWVhcl0gPSB0aGlzLnZhbHVlLnNwbGl0KCctJyk7XG4gICAgICAgICAgY29uc3QgZmlyc3RMYWJlbCA9IHRoaXMuZ2V0Rmlyc3RMYWJlbChmaXJzdFllYXIsIGl0ZW1zKTtcbiAgICAgICAgICBjb25zdCBsYXN0TGFiZWwgPSB0aGlzLmdldExhc3RMYWJlbChsYXN0WWVhciwgaXRlbXMpO1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgLy8gd2hlbiB0aGUgY29tcG9uZW50IGxvYWRzLCBzZXQgdGhlIHNsaWRlcnMgYW5kIHRoZSBiYXJzXG4gICAgICAgICAgICAvLyAobmVjZXNzYXJ5IGlmIHNlYXJjaCB1cmwgaGFzIHBhcmFtcylcbiAgICAgICAgICAgIHRoaXMuaGlzdG9ncmFtQXBpLnNldFNsaWRlcnMoW2ZpcnN0TGFiZWwsIGxhc3RMYWJlbF0pO1xuICAgICAgICAgICAgdGhpcy5oaXN0b2dyYW1BcGkuc2V0QmFycyhpdGVtcyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIC8vIGlmICh0aGlzLnZhbHVlKSB7XG4gICAgLy8gICBjb25zdCBbZmlyc3RZZWFyLCBsYXN0WWVhcl0gPSB0aGlzLnZhbHVlLnNwbGl0KCctJyk7XG4gICAgLy8gICBjb25zdCBmaXJzdExhYmVsID0gdGhpcy5nZXRGaXJzdExhYmVsKGZpcnN0WWVhciwgaXRlbXMpO1xuICAgIC8vICAgY29uc3QgbGFzdExhYmVsID0gdGhpcy5nZXRMYXN0TGFiZWwobGFzdFllYXIsIGl0ZW1zKTtcbiAgICAvLyAgIGhpc3RvZ3JhbURhdGEuc2V0U2xpZGVycyA9IFtmaXJzdExhYmVsLCBsYXN0TGFiZWxdO1xuICAgIC8vICAgaGlzdG9ncmFtRGF0YS5pdGVtcyA9IGl0ZW1zO1xuICAgIC8vIH1cbiAgICByZXR1cm4gaGlzdG9ncmFtRGF0YTtcbiAgfVxuXG4gIHNldFZhbHVlID0gKHZhbHVlLCB1cGRhdGUgPSBmYWxzZSkgPT4ge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLmlzVXBkYXRlID0gdXBkYXRlO1xuXG4gICAgaWYgKHVwZGF0ZSAmJiB0aGlzLmlucHV0KSB7XG4gICAgICBjb25zdCB7IGxpbmtzIH0gPSB0aGlzLmlucHV0O1xuICAgICAgdGhpcy51cGRhdGUoeyAuLi50aGlzLmlucHV0LCBsaW5rcyB9KTtcbiAgICAgIGlmICghdGhpcy5oaXN0b2dyYW1BcGkpIHJldHVybjtcbiAgICAgIC8vIGZvcm1hdCB0aGUgbmV3IGJhcnMgZGF0YVxuICAgICAgY29uc3QgbmV3QmFycyA9IHRoaXMucGFyc2VMaW5rcyhsaW5rcyk7XG4gICAgICBjb25zdCBbZmlyc3RZZWFyLCBsYXN0WWVhcl0gPSB0aGlzLnZhbHVlLnNwbGl0KCctJyk7XG4gICAgICAvLyBnZXQgeWVhcnMgZm9yIHNsaWRlciBwb3NpdGlvbnNcbiAgICAgIGNvbnN0IGZpcnN0TGFiZWwgPSB0aGlzLmdldEZpcnN0TGFiZWwoZmlyc3RZZWFyLCBuZXdCYXJzKTtcbiAgICAgIGNvbnN0IGxhc3RMYWJlbCA9IHRoaXMuZ2V0TGFzdExhYmVsKGxhc3RZZWFyLCBuZXdCYXJzKTtcbiAgICAgIHRoaXMudmFsdWUgPSBgJHtmaXJzdExhYmVsfS0ke2xhc3RMYWJlbH1gO1xuICAgICAgLy8gdXBkYXRlIHRoZSBoaXN0b2dyYW1cbiAgICAgIHRoaXMuaGlzdG9ncmFtQXBpLnNldFNsaWRlcnMoW2ZpcnN0TGFiZWwsIGxhc3RMYWJlbF0pO1xuICAgICAgdGhpcy5oaXN0b2dyYW1BcGkuc2V0QmFycyhuZXdCYXJzKTtcbiAgICB9XG4gICAgLy8gcmVsb2FkIHRoZSB0b29sdGlwc1xuICAgIHRoaXMubG9hZFRvb2x0aXBzKCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY3VycmVudCBmYWNldCB2YWx1ZVxuICAgKi9cbiAgZ2V0VmFsdWUgPSAoKTogRkFDRVRfVkFMVUUgPT4gdGhpcy52YWx1ZTtcblxuICAvKipcbiAgICogUmVzZXQgdG8gdGhlIGRlZmF1bHQgZmFjZXQgdmFsdWVcbiAgICovXG4gIGNsZWFyKCkge1xuICAgIHRoaXMudmFsdWUgPSAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2FkcyB0aXBweSB0b29sdGlwcyBhbmQgYXBwZW5kcyB0aGVtIHRvIHRoZSBoaXN0b2dyYW0gYmFyc1xuICAgKi9cbiAgbG9hZFRvb2x0aXBzKCkge1xuICAgIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2NvbnRhaW5lci1mb3ItaGlzdG9ncmFtIGcuYmFycyByZWN0LmJhcnMnKTtcbiAgICB0aXBweShlbGVtZW50cywge1xuICAgICAgY29udGVudChyZWZlcmVuY2UpIHtcbiAgICAgICAgY29uc3Qgc3RhcnQgPSByZWZlcmVuY2UuZ2V0QXR0cmlidXRlKCdkYXRhLXN0YXJ0Jyk7XG4gICAgICAgIGNvbnN0IGVuZCA9IHJlZmVyZW5jZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtZW5kJyk7XG4gICAgICAgIHJldHVybiBgPHNwYW4gY2xhc3M9XCJ0aXBweS10ZW1wbGF0ZVwiPiR7c3RhcnR9PGJyPiR7ZW5kfTwvc3Bhbj5gO1xuICAgICAgfSxcbiAgICAgIGFsbG93SFRNTDogdHJ1ZSxcbiAgICAgIGFwcGVuZFRvOiAoKSA9PiBkb2N1bWVudC5ib2R5LFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnQgdGhlIGxpbmtzIGludG8gdGhlIGhpc3RvZ3JhbSBjb21wb25lbnQgZm9ybWF0XG4gICAqL1xuICBwYXJzZUxpbmtzKGxpbmtzKSB7XG4gICAgcmV0dXJuIGxpbmtzLm1hcCgobGluaykgPT4gKHtcbiAgICAgIGxhYmVsOiBsaW5rLnRleHQsXG4gICAgICB2YWx1ZTogbGluay5jb3VudGVyLFxuICAgICAgcGF5bG9hZDogbGluay5wYXlsb2FkLFxuICAgICAgcmFuZ2U6IGxpbmsucmFuZ2UgPyB7XG4gICAgICAgIHBheWxvYWQ6IGxpbmsucmFuZ2UucGF5bG9hZCxcbiAgICAgICAgbGFiZWw6IGxpbmsucmFuZ2UudGV4dFxuICAgICAgfSA6IHVuZGVmaW5lZCxcbiAgICB9KSkuc29ydCgoYSwgYikgPT4gK2EubGFiZWwgLSBiLmxhYmVsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGxlZnQtbW9zdCBsYWJlbFxuICAgKi9cbiAgcHJpdmF0ZSBnZXRGaXJzdExhYmVsKHllYXI6IHN0cmluZywgaXRlbXMpIHtcbiAgICBpZiAoIXllYXIpIHJldHVybiBpdGVtc1swXS5sYWJlbDtcbiAgICByZXR1cm4gaXRlbXMuZmluZCgoeyBsYWJlbCB9KSA9PiArbGFiZWwgPT09ICt5ZWFyKT8ubGFiZWw7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSByaWdodC1tb3N0IGxhYmVsXG4gICAqL1xuICBwcml2YXRlIGdldExhc3RMYWJlbCh5ZWFyOiBzdHJpbmcsIGl0ZW1zKSB7XG4gICAgaWYgKCF5ZWFyKSByZXR1cm4gaXRlbXNbaXRlbXMubGVuZ3RoIC0gMV0ubGFiZWw7XG4gICAgcmV0dXJuIGl0ZW1zLmZpbmQoKHsgbGFiZWwsIHJhbmdlIH0pID0+IHtcbiAgICAgIGlmIChyYW5nZSkge1xuICAgICAgICByZXR1cm4gK3JhbmdlLmxhYmVsID09PSAreWVhcjtcbiAgICAgIH1cbiAgICAgIHJldHVybiArbGFiZWwgPT09ICt5ZWFyO1xuICAgIH0pPy5sYWJlbDtcbiAgfVxufVxuIl19