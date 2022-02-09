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
                // do not update the value when resetting
                if (this.value !== '') {
                    this.value = `${firstLabel}-${lastLabel}`;
                }
                // update the histogram
                setTimeout(() => {
                    this.histogramApi.setSliders([`${firstLabel}`, `${lastLabel}`], // move the sliders
                    value !== '' // do not emit range when resetting
                    );
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtaGlzdG9ncmFtLmRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbjctYm9pbGVycGxhdGUtbGliL3NyYy9saWIvbXVydWNhL2RhdGEtc291cmNlcy9mYWNldHMvZmFjZXQtaGlzdG9ncmFtLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMvQyxPQUFPLEtBQUssTUFBTSxVQUFVLENBQUM7QUFDN0IsT0FBTyx5QkFBeUIsQ0FBQztBQUtqQyxNQUFNLE9BQU8sZ0JBQWlCLFNBQVEsVUFBVTtJQUFoRDs7UUFHRSxVQUFLLEdBQWdCLEVBQUUsQ0FBQztRQUV4QixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBdURqQixhQUFRLEdBQUcsQ0FBQyxLQUFLLEVBQUUsTUFBTSxHQUFHLEtBQUssRUFBRSxFQUFFO1lBQ25DLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQ25CLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDO1lBRXZCLElBQUksTUFBTSxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ3hCLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO2dCQUM3QixJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7Z0JBQ3RDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWTtvQkFBRSxPQUFPO2dCQUMvQiwyQkFBMkI7Z0JBQzNCLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3ZDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3BELGlD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QUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRDs7T0FFRztJQUNLLGFBQWEsQ0FBQyxJQUFZLEVBQUUsS0FBSztRQUN2QyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU8sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUNqQyxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssQ0FBQztJQUM1RCxDQUFDO0lBRUQ7O09BRUc7SUFDSyxZQUFZLENBQUMsSUFBWSxFQUFFLEtBQUs7UUFDdEMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUNoRCxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFO1lBQ3JDLElBQUksS0FBSyxFQUFFO2dCQUNULE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxLQUFLLENBQUMsSUFBSSxDQUFDO2FBQy9CO1lBQ0QsT0FBTyxDQUFDLEtBQUssS0FBSyxDQUFDLElBQUksQ0FBQztRQUMxQixDQUFDLENBQUMsRUFBRSxLQUFLLENBQUM7SUFDWixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIaXN0b2dyYW1SYW5nZURhdGEgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcbmltcG9ydCB0aXBweSBmcm9tICd0aXBweS5qcyc7XHJcbmltcG9ydCAndGlwcHkuanMvZGlzdC90aXBweS5jc3MnO1xyXG5pbXBvcnQgeyBGYWNldERhdGFTb3VyY2UgfSBmcm9tICcuL2ZhY2V0LWRhdGFzb3VyY2UnO1xyXG5cclxudHlwZSBGQUNFVF9WQUxVRSA9IHN0cmluZztcclxuXHJcbmV4cG9ydCBjbGFzcyBGYWNldEhpc3RvZ3JhbURTIGV4dGVuZHMgRGF0YVNvdXJjZSBpbXBsZW1lbnRzIEZhY2V0RGF0YVNvdXJjZSB7XHJcbiAgaWQ6IHN0cmluZztcclxuXHJcbiAgdmFsdWU6IEZBQ0VUX1ZBTFVFID0gJyc7XHJcblxyXG4gIGlzVXBkYXRlID0gZmFsc2U7XHJcblxyXG4gIGhpc3RvZ3JhbUFwaTogYW55O1xyXG5cclxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKHsgbGlua3MgfSk6IEhpc3RvZ3JhbVJhbmdlRGF0YSB7XHJcbiAgICBjb25zdCBpdGVtcyA9IHRoaXMucGFyc2VMaW5rcyhsaW5rcyk7IC8vIGZvcm1hdCBkYXRhXHJcblxyXG4gICAgY29uc3QgaGlzdG9ncmFtRGF0YTogSGlzdG9ncmFtUmFuZ2VEYXRhID0ge1xyXG4gICAgICBjb250YWluZXJJZDogJ2NvbnRhaW5lci1mb3ItaGlzdG9ncmFtJyxcclxuICAgICAgd2lkdGg6IDQ1MCxcclxuICAgICAgaGVpZ2h0OiA1MCxcclxuICAgICAgY29sb3Vyczoge1xyXG4gICAgICAgIHRvcDogJyM3MDkxQjMnLFxyXG4gICAgICAgIGJvdHRvbTogJyM5NmMyZjInLFxyXG4gICAgICAgIGFjY2VudDogJyMyRjUyOEInLFxyXG4gICAgICB9LFxyXG4gICAgICBtYXJnaW46IHtcclxuICAgICAgICBsZWZ0OiAzMCxcclxuICAgICAgICByaWdodDogMCxcclxuICAgICAgICB0b3A6IDEwLFxyXG4gICAgICAgIGJvdHRvbTogNDVcclxuICAgICAgfSxcclxuICAgICAgYXhpczoge1xyXG4gICAgICAgIHlBeGlzOiB7XHJcbiAgICAgICAgICBzaG93OiB0cnVlLFxyXG4gICAgICAgICAgLy8gdGlja0Ftb3VudDogM1xyXG4gICAgICAgICAgdmFsdWVzOiBbMCwgNSwgMjAsIDYwXVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgaXRlbXMsXHJcbiAgICAgIHNldEFwaTogKGFwaSkgPT4ge1xyXG4gICAgICAgIGlmICghdGhpcy5oaXN0b2dyYW1BcGkpIHRoaXMuaGlzdG9ncmFtQXBpID0gYXBpO1xyXG4gICAgICAgIGlmICh0aGlzLnZhbHVlKSB7XHJcbiAgICAgICAgICBjb25zdCBbZmlyc3RZZWFyLCBsYXN0WWVhcl0gPSB0aGlzLnZhbHVlLnNwbGl0KCctJyk7XHJcbiAgICAgICAgICBjb25zdCBmaXJzdExhYmVsID0gdGhpcy5nZXRGaXJzdExhYmVsKGZpcnN0WWVhciwgaXRlbXMpO1xyXG4gICAgICAgICAgY29uc3QgbGFzdExhYmVsID0gdGhpcy5nZXRMYXN0TGFiZWwobGFzdFllYXIsIGl0ZW1zKTtcclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyB3aGVuIHRoZSBjb21wb25lbnQgbG9hZHMsIHNldCB0aGUgc2xpZGVycyBhbmQgdGhlIGJhcnNcclxuICAgICAgICAgICAgLy8gKG5lY2Vzc2FyeSBpZiBzZWFyY2ggdXJsIGhhcyBwYXJhbXMpXHJcbiAgICAgICAgICAgIHRoaXMuaGlzdG9ncmFtQXBpLnNldFNsaWRlcnMoW2ZpcnN0TGFiZWwsIGxhc3RMYWJlbF0pO1xyXG4gICAgICAgICAgICB0aGlzLmhpc3RvZ3JhbUFwaS5zZXRCYXJzKGl0ZW1zKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8vIGlmICh0aGlzLnZhbHVlKSB7XHJcbiAgICAvLyAgIGNvbnN0IFtmaXJzdFllYXIsIGxhc3RZZWFyXSA9IHRoaXMudmFsdWUuc3BsaXQoJy0nKTtcclxuICAgIC8vICAgY29uc3QgZmlyc3RMYWJlbCA9IHRoaXMuZ2V0Rmlyc3RMYWJlbChmaXJzdFllYXIsIGl0ZW1zKTtcclxuICAgIC8vICAgY29uc3QgbGFzdExhYmVsID0gdGhpcy5nZXRMYXN0TGFiZWwobGFzdFllYXIsIGl0ZW1zKTtcclxuICAgIC8vICAgaGlzdG9ncmFtRGF0YS5zZXRTbGlkZXJzID0gW2ZpcnN0TGFiZWwsIGxhc3RMYWJlbF07XHJcbiAgICAvLyAgIGhpc3RvZ3JhbURhdGEuaXRlbXMgPSBpdGVtcztcclxuICAgIC8vIH1cclxuICAgIHJldHVybiBoaXN0b2dyYW1EYXRhO1xyXG4gIH1cclxuXHJcbiAgc2V0VmFsdWUgPSAodmFsdWUsIHVwZGF0ZSA9IGZhbHNlKSA9PiB7XHJcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICB0aGlzLmlzVXBkYXRlID0gdXBkYXRlO1xyXG5cclxuICAgIGlmICh1cGRhdGUgJiYgdGhpcy5pbnB1dCkge1xyXG4gICAgICBjb25zdCB7IGxpbmtzIH0gPSB0aGlzLmlucHV0O1xyXG4gICAgICB0aGlzLnVwZGF0ZSh7IC4uLnRoaXMuaW5wdXQsIGxpbmtzIH0pO1xyXG4gICAgICBpZiAoIXRoaXMuaGlzdG9ncmFtQXBpKSByZXR1cm47XHJcbiAgICAgIC8vIGZvcm1hdCB0aGUgbmV3IGJhcnMgZGF0YVxyXG4gICAgICBjb25zdCBuZXdCYXJzID0gdGhpcy5wYXJzZUxpbmtzKGxpbmtzKTtcclxuICAgICAgY29uc3QgW2ZpcnN0WWVhciwgbGFzdFllYXJdID0gdGhpcy52YWx1ZS5zcGxpdCgnLScpO1xyXG4gICAgICAvLyBnZXQgeWVhcnMgZm9yIHNsaWRlciBwb3NpdGlvbnNcclxuICAgICAgY29uc3QgZmlyc3RMYWJlbCA9IHRoaXMuZ2V0Rmlyc3RMYWJlbChmaXJzdFllYXIsIG5ld0JhcnMpO1xyXG4gICAgICBjb25zdCBsYXN0TGFiZWwgPSB0aGlzLmdldExhc3RMYWJlbChsYXN0WWVhciwgbmV3QmFycyk7XHJcbiAgICAgIC8vIGRvIG5vdCB1cGRhdGUgdGhlIHZhbHVlIHdoZW4gcmVzZXR0aW5nXHJcbiAgICAgIGlmICh0aGlzLnZhbHVlICE9PSAnJykge1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSBgJHtmaXJzdExhYmVsfS0ke2xhc3RMYWJlbH1gO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIHVwZGF0ZSB0aGUgaGlzdG9ncmFtXHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuaGlzdG9ncmFtQXBpLnNldFNsaWRlcnMoXHJcbiAgICAgICAgICBbYCR7Zmlyc3RMYWJlbH1gLCBgJHtsYXN0TGFiZWx9YF0sIC8vIG1vdmUgdGhlIHNsaWRlcnNcclxuICAgICAgICAgIHZhbHVlICE9PSAnJyAvLyBkbyBub3QgZW1pdCByYW5nZSB3aGVuIHJlc2V0dGluZ1xyXG4gICAgICAgICk7XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLmhpc3RvZ3JhbUFwaS5zZXRCYXJzKG5ld0JhcnMpO1xyXG4gICAgfVxyXG4gICAgLy8gcmVsb2FkIHRoZSB0b29sdGlwc1xyXG4gICAgdGhpcy5sb2FkVG9vbHRpcHMoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgdGhlIGN1cnJlbnQgZmFjZXQgdmFsdWVcclxuICAgKi9cclxuICBnZXRWYWx1ZSA9ICgpOiBGQUNFVF9WQUxVRSA9PiB0aGlzLnZhbHVlO1xyXG5cclxuICAvKipcclxuICAgKiBSZXNldCB0byB0aGUgZGVmYXVsdCBmYWNldCB2YWx1ZVxyXG4gICAqL1xyXG4gIGNsZWFyKCkge1xyXG4gICAgdGhpcy52YWx1ZSA9ICcnO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTG9hZHMgdGlwcHkgdG9vbHRpcHMgYW5kIGFwcGVuZHMgdGhlbSB0byB0aGUgaGlzdG9ncmFtIGJhcnNcclxuICAgKi9cclxuICBsb2FkVG9vbHRpcHMoKSB7XHJcbiAgICBjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNjb250YWluZXItZm9yLWhpc3RvZ3JhbSBnLmJhcnMgcmVjdC5iYXJzJyk7XHJcbiAgICB0aXBweShlbGVtZW50cywge1xyXG4gICAgICBjb250ZW50KHJlZmVyZW5jZSkge1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gcmVmZXJlbmNlLmdldEF0dHJpYnV0ZSgnZGF0YS1zdGFydCcpO1xyXG4gICAgICAgIGNvbnN0IGVuZCA9IHJlZmVyZW5jZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtZW5kJyk7XHJcbiAgICAgICAgcmV0dXJuIGA8c3BhbiBjbGFzcz1cInRpcHB5LXRlbXBsYXRlXCI+JHtzdGFydH08YnI+JHtlbmR9PC9zcGFuPmA7XHJcbiAgICAgIH0sXHJcbiAgICAgIGFsbG93SFRNTDogdHJ1ZSxcclxuICAgICAgYXBwZW5kVG86ICgpID0+IGRvY3VtZW50LmJvZHksXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbnZlcnQgdGhlIGxpbmtzIGludG8gdGhlIGhpc3RvZ3JhbSBjb21wb25lbnQgZm9ybWF0XHJcbiAgICovXHJcbiAgcGFyc2VMaW5rcyhsaW5rcykge1xyXG4gICAgcmV0dXJuIGxpbmtzLm1hcCgobGluaykgPT4gKHtcclxuICAgICAgbGFiZWw6IGAke2xpbmsudGV4dH1gLFxyXG4gICAgICB2YWx1ZTogbGluay5jb3VudGVyLFxyXG4gICAgICBwYXlsb2FkOiBsaW5rLnBheWxvYWQsXHJcbiAgICAgIHJhbmdlOiBsaW5rLnJhbmdlID8ge1xyXG4gICAgICAgIHBheWxvYWQ6IGxpbmsucmFuZ2UucGF5bG9hZCxcclxuICAgICAgICBsYWJlbDogbGluay5yYW5nZS50ZXh0XHJcbiAgICAgIH0gOiB1bmRlZmluZWQsXHJcbiAgICB9KSkuc29ydCgoYSwgYikgPT4gK2EubGFiZWwgLSBiLmxhYmVsKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCB0aGUgbGVmdC1tb3N0IGxhYmVsXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBnZXRGaXJzdExhYmVsKHllYXI6IHN0cmluZywgaXRlbXMpIHtcclxuICAgIGlmICgheWVhcikgcmV0dXJuIGl0ZW1zWzBdLmxhYmVsO1xyXG4gICAgcmV0dXJuIGl0ZW1zLmZpbmQoKHsgbGFiZWwgfSkgPT4gK2xhYmVsID09PSAreWVhcik/LmxhYmVsO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IHRoZSByaWdodC1tb3N0IGxhYmVsXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBnZXRMYXN0TGFiZWwoeWVhcjogc3RyaW5nLCBpdGVtcykge1xyXG4gICAgaWYgKCF5ZWFyKSByZXR1cm4gaXRlbXNbaXRlbXMubGVuZ3RoIC0gMV0ubGFiZWw7XHJcbiAgICByZXR1cm4gaXRlbXMuZmluZCgoeyBsYWJlbCwgcmFuZ2UgfSkgPT4ge1xyXG4gICAgICBpZiAocmFuZ2UpIHtcclxuICAgICAgICByZXR1cm4gK3JhbmdlLmxhYmVsID09PSAreWVhcjtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gK2xhYmVsID09PSAreWVhcjtcclxuICAgIH0pPy5sYWJlbDtcclxuICB9XHJcbn1cclxuIl19