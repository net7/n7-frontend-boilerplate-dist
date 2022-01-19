import { DataSource } from '@n7-frontend/core';
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';
const ACTIVE_CLASS = 'is-active';
export class FacetHistogramDS extends DataSource {
    constructor() {
        super(...arguments);
        this.value = '';
        this.isUpdate = false;
        this.getValue = () => this.value;
    }
    transform({ links }) {
        // Remap the response values in the correct
        // format for histogram-range-component
        const items = links.map((link) => ({
            label: link.text,
            value: link.counter,
            payload: link.payload,
            range: link.range ? {
                payload: link.range.payload,
                label: link.range.text
            } : undefined,
        })).sort((a, b) => +a.label - b.label);
        return {
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
        };
    }
    setValue(value, update = false) {
        this.value = value;
        this.isUpdate = update;
        if (update) {
            const { links } = this.input;
            const updatedLinks = links.map((link) => (Object.assign(Object.assign({}, link), { classes: this.value && (this.value === link.payload) ? ACTIVE_CLASS : '' })));
            this.update(Object.assign(Object.assign({}, this.input), { links: updatedLinks }));
        }
    }
    clear() {
        this.value = '';
    }
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtaGlzdG9ncmFtLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9kYXRhLXNvdXJjZXMvZmFjZXRzL2ZhY2V0LWhpc3RvZ3JhbS5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDL0MsT0FBTyxLQUFLLE1BQU0sVUFBVSxDQUFDO0FBQzdCLE9BQU8seUJBQXlCLENBQUM7QUFHakMsTUFBTSxZQUFZLEdBQUcsV0FBVyxDQUFDO0FBSWpDLE1BQU0sT0FBTyxnQkFBaUIsU0FBUSxVQUFVO0lBQWhEOztRQUdFLFVBQUssR0FBZ0IsRUFBRSxDQUFDO1FBRXhCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUEwRGpCLGFBQVEsR0FBRyxHQUFnQixFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztJQWtCM0MsQ0FBQztJQTFFVyxTQUFTLENBQUMsRUFBRSxLQUFLLEVBQUU7UUFDM0IsMkNBQTJDO1FBQzNDLHVDQUF1QztRQUN2QyxNQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ2pDLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNoQixLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDbkIsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1lBQ3JCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDbEIsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTztnQkFDM0IsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSTthQUN2QixDQUFDLENBQUMsQ0FBQyxTQUFTO1NBQ2QsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUV2QyxPQUFPO1lBQ0wsV0FBVyxFQUFFLHlCQUF5QjtZQUN0QyxLQUFLLEVBQUUsR0FBRztZQUNWLE1BQU0sRUFBRSxFQUFFO1lBQ1YsT0FBTyxFQUFFO2dCQUNQLEdBQUcsRUFBRSxTQUFTO2dCQUNkLE1BQU0sRUFBRSxTQUFTO2dCQUNqQixNQUFNLEVBQUUsU0FBUzthQUNsQjtZQUNELE1BQU0sRUFBRTtnQkFDTixJQUFJLEVBQUUsRUFBRTtnQkFDUixLQUFLLEVBQUUsQ0FBQztnQkFDUixHQUFHLEVBQUUsRUFBRTtnQkFDUCxNQUFNLEVBQUUsRUFBRTthQUNYO1lBQ0QsSUFBSSxFQUFFO2dCQUNKLEtBQUssRUFBRTtvQkFDTCxJQUFJLEVBQUUsSUFBSTtvQkFDVixnQkFBZ0I7b0JBQ2hCLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztpQkFDdkI7YUFDRjtZQUNELEtBQUs7U0FDTixDQUFDO0lBQ0osQ0FBQztJQUVELFFBQVEsQ0FBQyxLQUFLLEVBQUUsTUFBTSxHQUFHLEtBQUs7UUFDNUIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUM7UUFFdkIsSUFBSSxNQUFNLEVBQUU7WUFDVixNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUM3QixNQUFNLFlBQVksR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxpQ0FDcEMsSUFBSSxLQUNQLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUN4RSxDQUFDLENBQUM7WUFDSixJQUFJLENBQUMsTUFBTSxpQ0FDTixJQUFJLENBQUMsS0FBSyxLQUNiLEtBQUssRUFBRSxZQUFZLElBQ25CLENBQUM7U0FDSjtJQUNILENBQUM7SUFJRCxLQUFLO1FBQ0gsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUVELFlBQVk7UUFDVixNQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsMkNBQTJDLENBQUMsQ0FBQztRQUN4RixLQUFLLENBQUMsUUFBUSxFQUFFO1lBQ2QsT0FBTyxDQUFDLFNBQVM7Z0JBQ2YsTUFBTSxLQUFLLEdBQUcsU0FBUyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDbkQsTUFBTSxHQUFHLEdBQUcsU0FBUyxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDL0MsT0FBTyxnQ0FBZ0MsS0FBSyxPQUFPLEdBQUcsU0FBUyxDQUFDO1lBQ2xFLENBQUM7WUFDRCxTQUFTLEVBQUUsSUFBSTtZQUNmLFFBQVEsRUFBRSxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSTtTQUM5QixDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIaXN0b2dyYW1SYW5nZURhdGEgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcbmltcG9ydCB0aXBweSBmcm9tICd0aXBweS5qcyc7XHJcbmltcG9ydCAndGlwcHkuanMvZGlzdC90aXBweS5jc3MnO1xyXG5pbXBvcnQgeyBGYWNldERhdGFTb3VyY2UgfSBmcm9tICcuL2ZhY2V0LWRhdGFzb3VyY2UnO1xyXG5cclxuY29uc3QgQUNUSVZFX0NMQVNTID0gJ2lzLWFjdGl2ZSc7XHJcblxyXG50eXBlIEZBQ0VUX1ZBTFVFID0gc3RyaW5nO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZhY2V0SGlzdG9ncmFtRFMgZXh0ZW5kcyBEYXRhU291cmNlIGltcGxlbWVudHMgRmFjZXREYXRhU291cmNlIHtcclxuICBpZDogc3RyaW5nO1xyXG5cclxuICB2YWx1ZTogRkFDRVRfVkFMVUUgPSAnJztcclxuXHJcbiAgaXNVcGRhdGUgPSBmYWxzZTtcclxuXHJcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybSh7IGxpbmtzIH0pOiBIaXN0b2dyYW1SYW5nZURhdGEge1xyXG4gICAgLy8gUmVtYXAgdGhlIHJlc3BvbnNlIHZhbHVlcyBpbiB0aGUgY29ycmVjdFxyXG4gICAgLy8gZm9ybWF0IGZvciBoaXN0b2dyYW0tcmFuZ2UtY29tcG9uZW50XHJcbiAgICBjb25zdCBpdGVtcyA9IGxpbmtzLm1hcCgobGluaykgPT4gKHtcclxuICAgICAgbGFiZWw6IGxpbmsudGV4dCxcclxuICAgICAgdmFsdWU6IGxpbmsuY291bnRlcixcclxuICAgICAgcGF5bG9hZDogbGluay5wYXlsb2FkLFxyXG4gICAgICByYW5nZTogbGluay5yYW5nZSA/IHtcclxuICAgICAgICBwYXlsb2FkOiBsaW5rLnJhbmdlLnBheWxvYWQsXHJcbiAgICAgICAgbGFiZWw6IGxpbmsucmFuZ2UudGV4dFxyXG4gICAgICB9IDogdW5kZWZpbmVkLFxyXG4gICAgfSkpLnNvcnQoKGEsIGIpID0+ICthLmxhYmVsIC0gYi5sYWJlbCk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgY29udGFpbmVySWQ6ICdjb250YWluZXItZm9yLWhpc3RvZ3JhbScsXHJcbiAgICAgIHdpZHRoOiA0NTAsXHJcbiAgICAgIGhlaWdodDogNTAsXHJcbiAgICAgIGNvbG91cnM6IHtcclxuICAgICAgICB0b3A6ICcjNzA5MUIzJyxcclxuICAgICAgICBib3R0b206ICcjOTZjMmYyJyxcclxuICAgICAgICBhY2NlbnQ6ICcjMkY1MjhCJyxcclxuICAgICAgfSxcclxuICAgICAgbWFyZ2luOiB7XHJcbiAgICAgICAgbGVmdDogMzAsXHJcbiAgICAgICAgcmlnaHQ6IDAsXHJcbiAgICAgICAgdG9wOiAxMCxcclxuICAgICAgICBib3R0b206IDQ1XHJcbiAgICAgIH0sXHJcbiAgICAgIGF4aXM6IHtcclxuICAgICAgICB5QXhpczoge1xyXG4gICAgICAgICAgc2hvdzogdHJ1ZSxcclxuICAgICAgICAgIC8vIHRpY2tBbW91bnQ6IDNcclxuICAgICAgICAgIHZhbHVlczogWzAsIDUsIDIwLCA2MF1cclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGl0ZW1zLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHNldFZhbHVlKHZhbHVlLCB1cGRhdGUgPSBmYWxzZSkge1xyXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgdGhpcy5pc1VwZGF0ZSA9IHVwZGF0ZTtcclxuXHJcbiAgICBpZiAodXBkYXRlKSB7XHJcbiAgICAgIGNvbnN0IHsgbGlua3MgfSA9IHRoaXMuaW5wdXQ7XHJcbiAgICAgIGNvbnN0IHVwZGF0ZWRMaW5rcyA9IGxpbmtzLm1hcCgobGluaykgPT4gKHtcclxuICAgICAgICAuLi5saW5rLFxyXG4gICAgICAgIGNsYXNzZXM6IHRoaXMudmFsdWUgJiYgKHRoaXMudmFsdWUgPT09IGxpbmsucGF5bG9hZCkgPyBBQ1RJVkVfQ0xBU1MgOiAnJ1xyXG4gICAgICB9KSk7XHJcbiAgICAgIHRoaXMudXBkYXRlKHtcclxuICAgICAgICAuLi50aGlzLmlucHV0LFxyXG4gICAgICAgIGxpbmtzOiB1cGRhdGVkTGlua3NcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRWYWx1ZSA9ICgpOiBGQUNFVF9WQUxVRSA9PiB0aGlzLnZhbHVlO1xyXG5cclxuICBjbGVhcigpIHtcclxuICAgIHRoaXMudmFsdWUgPSAnJztcclxuICB9XHJcblxyXG4gIGxvYWRUb29sdGlwcygpIHtcclxuICAgIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2NvbnRhaW5lci1mb3ItaGlzdG9ncmFtIGcuYmFycyByZWN0LmJhcnMnKTtcclxuICAgIHRpcHB5KGVsZW1lbnRzLCB7XHJcbiAgICAgIGNvbnRlbnQocmVmZXJlbmNlKSB7XHJcbiAgICAgICAgY29uc3Qgc3RhcnQgPSByZWZlcmVuY2UuZ2V0QXR0cmlidXRlKCdkYXRhLXN0YXJ0Jyk7XHJcbiAgICAgICAgY29uc3QgZW5kID0gcmVmZXJlbmNlLmdldEF0dHJpYnV0ZSgnZGF0YS1lbmQnKTtcclxuICAgICAgICByZXR1cm4gYDxzcGFuIGNsYXNzPVwidGlwcHktdGVtcGxhdGVcIj4ke3N0YXJ0fTxicj4ke2VuZH08L3NwYW4+YDtcclxuICAgICAgfSxcclxuICAgICAgYWxsb3dIVE1MOiB0cnVlLFxyXG4gICAgICBhcHBlbmRUbzogKCkgPT4gZG9jdW1lbnQuYm9keSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=