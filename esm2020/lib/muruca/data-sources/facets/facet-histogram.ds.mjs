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
                // update the histogram
                setTimeout(() => {
                    this.histogramApi.setSliders([`${firstLabel}`, `${lastLabel}`], // move the sliders
                    false // do not emit
                    );
                    this.loadTooltips();
                });
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
            label: `${link.text}`,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtaGlzdG9ncmFtLmRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbjctYm9pbGVycGxhdGUtbGliL3NyYy9saWIvbXVydWNhL2RhdGEtc291cmNlcy9mYWNldHMvZmFjZXQtaGlzdG9ncmFtLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMvQyxPQUFPLEtBQUssTUFBTSxVQUFVLENBQUM7QUFDN0IsT0FBTyx5QkFBeUIsQ0FBQztBQUtqQyxNQUFNLE9BQU8sZ0JBQWlCLFNBQVEsVUFBVTtJQUFoRDs7UUFHRSxVQUFLLEdBQWdCLEVBQUUsQ0FBQztRQUV4QixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBZ0RqQixhQUFRLEdBQUcsQ0FBQyxLQUFLLEVBQUUsTUFBTSxHQUFHLEtBQUssRUFBRSxFQUFFO1lBQ25DLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQ25CLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDO1lBRXZCLElBQUksTUFBTSxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ3hCLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO2dCQUM3QixJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7Z0JBQ3RDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWTtvQkFBRSxPQUFPO2dCQUMvQiwyQkFBMkI7Z0JBQzNCLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3ZDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3BELGlD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QUFDLENBQUMsS0FBSyxDQUFDO1FBQ2pDLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxDQUFDO0lBQzVELENBQUM7SUFFRDs7T0FFRztJQUNLLFlBQVksQ0FBQyxJQUFZLEVBQUUsS0FBSztRQUN0QyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ2hELE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUU7WUFDckMsSUFBSSxLQUFLLEVBQUU7Z0JBQ1QsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLEtBQUssQ0FBQyxJQUFJLENBQUM7YUFDL0I7WUFDRCxPQUFPLENBQUMsS0FBSyxLQUFLLENBQUMsSUFBSSxDQUFDO1FBQzFCLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQztJQUNaLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhpc3RvZ3JhbVJhbmdlRGF0YSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcclxuaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuaW1wb3J0IHRpcHB5IGZyb20gJ3RpcHB5LmpzJztcclxuaW1wb3J0ICd0aXBweS5qcy9kaXN0L3RpcHB5LmNzcyc7XHJcbmltcG9ydCB7IEZhY2V0RGF0YVNvdXJjZSB9IGZyb20gJy4vZmFjZXQtZGF0YXNvdXJjZSc7XHJcblxyXG50eXBlIEZBQ0VUX1ZBTFVFID0gc3RyaW5nO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZhY2V0SGlzdG9ncmFtRFMgZXh0ZW5kcyBEYXRhU291cmNlIGltcGxlbWVudHMgRmFjZXREYXRhU291cmNlIHtcclxuICBpZDogc3RyaW5nO1xyXG5cclxuICB2YWx1ZTogRkFDRVRfVkFMVUUgPSAnJztcclxuXHJcbiAgaXNVcGRhdGUgPSBmYWxzZTtcclxuXHJcbiAgaGlzdG9ncmFtQXBpOiBhbnk7XHJcblxyXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oeyBsaW5rcyB9KTogSGlzdG9ncmFtUmFuZ2VEYXRhIHtcclxuICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5wYXJzZUxpbmtzKGxpbmtzKTsgLy8gZm9ybWF0IGRhdGFcclxuXHJcbiAgICBjb25zdCBoaXN0b2dyYW1EYXRhOiBIaXN0b2dyYW1SYW5nZURhdGEgPSB7XHJcbiAgICAgIGNvbnRhaW5lcklkOiAnY29udGFpbmVyLWZvci1oaXN0b2dyYW0nLFxyXG4gICAgICB3aWR0aDogNDUwLFxyXG4gICAgICBoZWlnaHQ6IDUwLFxyXG4gICAgICBjb2xvdXJzOiB7XHJcbiAgICAgICAgdG9wOiAnIzcwOTFCMycsXHJcbiAgICAgICAgYm90dG9tOiAnIzk2YzJmMicsXHJcbiAgICAgICAgYWNjZW50OiAnIzJGNTI4QicsXHJcbiAgICAgIH0sXHJcbiAgICAgIG1hcmdpbjoge1xyXG4gICAgICAgIGxlZnQ6IDMwLFxyXG4gICAgICAgIHJpZ2h0OiAwLFxyXG4gICAgICAgIHRvcDogMTAsXHJcbiAgICAgICAgYm90dG9tOiA0NVxyXG4gICAgICB9LFxyXG4gICAgICBheGlzOiB7XHJcbiAgICAgICAgeUF4aXM6IHtcclxuICAgICAgICAgIHNob3c6IHRydWUsXHJcbiAgICAgICAgICAvLyB0aWNrQW1vdW50OiAzXHJcbiAgICAgICAgICB2YWx1ZXM6IFswLCA1LCAyMCwgNjBdXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBpdGVtcyxcclxuICAgICAgc2V0QXBpOiAoYXBpKSA9PiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmhpc3RvZ3JhbUFwaSkgdGhpcy5oaXN0b2dyYW1BcGkgPSBhcGk7XHJcbiAgICAgICAgaWYgKHRoaXMudmFsdWUpIHtcclxuICAgICAgICAgIGNvbnN0IFtmaXJzdFllYXIsIGxhc3RZZWFyXSA9IHRoaXMudmFsdWUuc3BsaXQoJy0nKTtcclxuICAgICAgICAgIGNvbnN0IGZpcnN0TGFiZWwgPSB0aGlzLmdldEZpcnN0TGFiZWwoZmlyc3RZZWFyLCBpdGVtcyk7XHJcbiAgICAgICAgICBjb25zdCBsYXN0TGFiZWwgPSB0aGlzLmdldExhc3RMYWJlbChsYXN0WWVhciwgaXRlbXMpO1xyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIHdoZW4gdGhlIGNvbXBvbmVudCBsb2Fkcywgc2V0IHRoZSBzbGlkZXJzIGFuZCB0aGUgYmFyc1xyXG4gICAgICAgICAgICAvLyAobmVjZXNzYXJ5IGlmIHNlYXJjaCB1cmwgaGFzIHBhcmFtcylcclxuICAgICAgICAgICAgdGhpcy5oaXN0b2dyYW1BcGkuc2V0U2xpZGVycyhbZmlyc3RMYWJlbCwgbGFzdExhYmVsXSk7XHJcbiAgICAgICAgICAgIHRoaXMuaGlzdG9ncmFtQXBpLnNldEJhcnMoaXRlbXMpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGhpc3RvZ3JhbURhdGE7XHJcbiAgfVxyXG5cclxuICBzZXRWYWx1ZSA9ICh2YWx1ZSwgdXBkYXRlID0gZmFsc2UpID0+IHtcclxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgIHRoaXMuaXNVcGRhdGUgPSB1cGRhdGU7XHJcblxyXG4gICAgaWYgKHVwZGF0ZSAmJiB0aGlzLmlucHV0KSB7XHJcbiAgICAgIGNvbnN0IHsgbGlua3MgfSA9IHRoaXMuaW5wdXQ7XHJcbiAgICAgIHRoaXMudXBkYXRlKHsgLi4udGhpcy5pbnB1dCwgbGlua3MgfSk7XHJcbiAgICAgIGlmICghdGhpcy5oaXN0b2dyYW1BcGkpIHJldHVybjtcclxuICAgICAgLy8gZm9ybWF0IHRoZSBuZXcgYmFycyBkYXRhXHJcbiAgICAgIGNvbnN0IG5ld0JhcnMgPSB0aGlzLnBhcnNlTGlua3MobGlua3MpO1xyXG4gICAgICBjb25zdCBbZmlyc3RZZWFyLCBsYXN0WWVhcl0gPSB0aGlzLnZhbHVlLnNwbGl0KCctJyk7XHJcbiAgICAgIC8vIGdldCB5ZWFycyBmb3Igc2xpZGVyIHBvc2l0aW9uc1xyXG4gICAgICBjb25zdCBmaXJzdExhYmVsID0gdGhpcy5nZXRGaXJzdExhYmVsKGZpcnN0WWVhciwgbmV3QmFycyk7XHJcbiAgICAgIGNvbnN0IGxhc3RMYWJlbCA9IHRoaXMuZ2V0TGFzdExhYmVsKGxhc3RZZWFyLCBuZXdCYXJzKTtcclxuICAgICAgLy8gdXBkYXRlIHRoZSBoaXN0b2dyYW1cclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5oaXN0b2dyYW1BcGkuc2V0U2xpZGVycyhcclxuICAgICAgICAgIFtgJHtmaXJzdExhYmVsfWAsIGAke2xhc3RMYWJlbH1gXSwgLy8gbW92ZSB0aGUgc2xpZGVyc1xyXG4gICAgICAgICAgZmFsc2UgLy8gZG8gbm90IGVtaXRcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMubG9hZFRvb2x0aXBzKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLmhpc3RvZ3JhbUFwaS5zZXRCYXJzKG5ld0JhcnMpO1xyXG4gICAgfVxyXG4gICAgLy8gcmVsb2FkIHRoZSB0b29sdGlwc1xyXG4gICAgdGhpcy5sb2FkVG9vbHRpcHMoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgdGhlIGN1cnJlbnQgZmFjZXQgdmFsdWVcclxuICAgKi9cclxuICBnZXRWYWx1ZSA9ICgpOiBGQUNFVF9WQUxVRSA9PiB0aGlzLnZhbHVlO1xyXG5cclxuICAvKipcclxuICAgKiBSZXNldCB0byB0aGUgZGVmYXVsdCBmYWNldCB2YWx1ZVxyXG4gICAqL1xyXG4gIGNsZWFyKCkge1xyXG4gICAgdGhpcy52YWx1ZSA9ICcnO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTG9hZHMgdGlwcHkgdG9vbHRpcHMgYW5kIGFwcGVuZHMgdGhlbSB0byB0aGUgaGlzdG9ncmFtIGJhcnNcclxuICAgKi9cclxuICBsb2FkVG9vbHRpcHMoKSB7XHJcbiAgICBjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNjb250YWluZXItZm9yLWhpc3RvZ3JhbSBnLmJhcnMgcmVjdC5iYXJzJyk7XHJcbiAgICB0aXBweShlbGVtZW50cywge1xyXG4gICAgICBjb250ZW50KHJlZmVyZW5jZSkge1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gcmVmZXJlbmNlLmdldEF0dHJpYnV0ZSgnZGF0YS1zdGFydCcpO1xyXG4gICAgICAgIGNvbnN0IGVuZCA9IHJlZmVyZW5jZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtZW5kJyk7XHJcbiAgICAgICAgcmV0dXJuIGA8c3BhbiBjbGFzcz1cInRpcHB5LXRlbXBsYXRlXCI+JHtzdGFydH08YnI+JHtlbmR9PC9zcGFuPmA7XHJcbiAgICAgIH0sXHJcbiAgICAgIGFsbG93SFRNTDogdHJ1ZSxcclxuICAgICAgYXBwZW5kVG86ICgpID0+IGRvY3VtZW50LmJvZHksXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbnZlcnQgdGhlIGxpbmtzIGludG8gdGhlIGhpc3RvZ3JhbSBjb21wb25lbnQgZm9ybWF0XHJcbiAgICovXHJcbiAgcGFyc2VMaW5rcyhsaW5rcykge1xyXG4gICAgcmV0dXJuIGxpbmtzLm1hcCgobGluaykgPT4gKHtcclxuICAgICAgbGFiZWw6IGAke2xpbmsudGV4dH1gLFxyXG4gICAgICB2YWx1ZTogbGluay5jb3VudGVyLFxyXG4gICAgICBwYXlsb2FkOiBsaW5rLnBheWxvYWQsXHJcbiAgICAgIHJhbmdlOiBsaW5rLnJhbmdlID8ge1xyXG4gICAgICAgIHBheWxvYWQ6IGxpbmsucmFuZ2UucGF5bG9hZCxcclxuICAgICAgICBsYWJlbDogbGluay5yYW5nZS50ZXh0XHJcbiAgICAgIH0gOiB1bmRlZmluZWQsXHJcbiAgICB9KSkuc29ydCgoYSwgYikgPT4gK2EubGFiZWwgLSBiLmxhYmVsKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCB0aGUgbGVmdC1tb3N0IGxhYmVsXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBnZXRGaXJzdExhYmVsKHllYXI6IHN0cmluZywgaXRlbXMpIHtcclxuICAgIGlmICgheWVhcikgcmV0dXJuIGl0ZW1zWzBdLmxhYmVsO1xyXG4gICAgcmV0dXJuIGl0ZW1zLmZpbmQoKHsgbGFiZWwgfSkgPT4gK2xhYmVsID09PSAreWVhcik/LmxhYmVsO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IHRoZSByaWdodC1tb3N0IGxhYmVsXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBnZXRMYXN0TGFiZWwoeWVhcjogc3RyaW5nLCBpdGVtcykge1xyXG4gICAgaWYgKCF5ZWFyKSByZXR1cm4gaXRlbXNbaXRlbXMubGVuZ3RoIC0gMV0ubGFiZWw7XHJcbiAgICByZXR1cm4gaXRlbXMuZmluZCgoeyBsYWJlbCwgcmFuZ2UgfSkgPT4ge1xyXG4gICAgICBpZiAocmFuZ2UpIHtcclxuICAgICAgICByZXR1cm4gK3JhbmdlLmxhYmVsID09PSAreWVhcjtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gK2xhYmVsID09PSAreWVhcjtcclxuICAgIH0pPy5sYWJlbDtcclxuICB9XHJcbn1cclxuIl19