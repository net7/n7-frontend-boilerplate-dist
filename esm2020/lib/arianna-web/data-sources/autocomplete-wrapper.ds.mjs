import { DataSource } from '@n7-frontend/core';
export class AwAutocompleteWrapperDS extends DataSource {
    constructor() {
        super(...arguments);
        /**
         * Given a string, it trims it to the specified length.
         *
         * @param string an input string
         * @param limit character limit
         * @returns the resulting trimmed string
         */
        this.stringTrim = (string, limit) => {
            if (string.length > limit) {
                return `${string.slice(0, limit)}…`;
            }
            return string;
        };
    }
    transform(data) {
        const { response } = data;
        if (!response) {
            return { suggestion: [], loading: true };
        }
        const suggestion = [];
        const { config } = this.options;
        const maxLength = (config.get('home-layout')['max-item-length'] || 20);
        const fResults = response.results.filter((el) => typeof el.entity === 'object');
        // eslint-disable-next-line consistent-return
        fResults.forEach((el) => {
            if (el.entity.id === 'fallback') { // build and return fallback data
                suggestion.push({
                    text: el.entity.label,
                    payload: 'fallback-simple-autocomplete',
                });
                return { suggestion };
            }
            const text = this.stringTrim(el.entity.label, maxLength);
            suggestion.push({
                text,
                anchor: {
                    payload: el.entity.id,
                },
            });
        });
        return { suggestion };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLXdyYXBwZXIuZHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uNy1ib2lsZXJwbGF0ZS1saWIvc3JjL2xpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvYXV0b2NvbXBsZXRlLXdyYXBwZXIuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRS9DLE1BQU0sT0FBTyx1QkFBd0IsU0FBUSxVQUFVO0lBQXZEOztRQWlDRTs7Ozs7O1dBTUc7UUFDSyxlQUFVLEdBQUcsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDckMsSUFBSSxNQUFNLENBQUMsTUFBTSxHQUFHLEtBQUssRUFBRTtnQkFDekIsT0FBTyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUM7YUFDckM7WUFBQyxPQUFPLE1BQU0sQ0FBQztRQUNsQixDQUFDLENBQUE7SUFDSCxDQUFDO0lBNUNXLFNBQVMsQ0FBQyxJQUFJO1FBQ3RCLE1BQU0sRUFBRSxRQUFRLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFFMUIsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNiLE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQztTQUMxQztRQUVELE1BQU0sVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUN0QixNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUNoQyxNQUFNLFNBQVMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUN2RSxNQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsTUFBTSxLQUFLLFFBQVEsQ0FBQyxDQUFDO1FBRWhGLDZDQUE2QztRQUM3QyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUU7WUFDdEIsSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsS0FBSyxVQUFVLEVBQUUsRUFBRSxpQ0FBaUM7Z0JBQ2xFLFVBQVUsQ0FBQyxJQUFJLENBQUM7b0JBQ2QsSUFBSSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSztvQkFDckIsT0FBTyxFQUFFLDhCQUE4QjtpQkFDeEMsQ0FBQyxDQUFDO2dCQUNILE9BQU8sRUFBRSxVQUFVLEVBQUUsQ0FBQzthQUN2QjtZQUNELE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFDekQsVUFBVSxDQUFDLElBQUksQ0FBQztnQkFDZCxJQUFJO2dCQUNKLE1BQU0sRUFBRTtvQkFDTixPQUFPLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFO2lCQUN0QjthQUNGLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxFQUFFLFVBQVUsRUFBRSxDQUFDO0lBQ3hCLENBQUM7Q0FjRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgQXdBdXRvY29tcGxldGVXcmFwcGVyRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcclxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpIHtcclxuICAgIGNvbnN0IHsgcmVzcG9uc2UgfSA9IGRhdGE7XHJcblxyXG4gICAgaWYgKCFyZXNwb25zZSkge1xyXG4gICAgICByZXR1cm4geyBzdWdnZXN0aW9uOiBbXSwgbG9hZGluZzogdHJ1ZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN1Z2dlc3Rpb24gPSBbXTtcclxuICAgIGNvbnN0IHsgY29uZmlnIH0gPSB0aGlzLm9wdGlvbnM7XHJcbiAgICBjb25zdCBtYXhMZW5ndGggPSAoY29uZmlnLmdldCgnaG9tZS1sYXlvdXQnKVsnbWF4LWl0ZW0tbGVuZ3RoJ10gfHwgMjApO1xyXG4gICAgY29uc3QgZlJlc3VsdHMgPSByZXNwb25zZS5yZXN1bHRzLmZpbHRlcigoZWwpID0+IHR5cGVvZiBlbC5lbnRpdHkgPT09ICdvYmplY3QnKTtcclxuXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29uc2lzdGVudC1yZXR1cm5cclxuICAgIGZSZXN1bHRzLmZvckVhY2goKGVsKSA9PiB7XHJcbiAgICAgIGlmIChlbC5lbnRpdHkuaWQgPT09ICdmYWxsYmFjaycpIHsgLy8gYnVpbGQgYW5kIHJldHVybiBmYWxsYmFjayBkYXRhXHJcbiAgICAgICAgc3VnZ2VzdGlvbi5wdXNoKHtcclxuICAgICAgICAgIHRleHQ6IGVsLmVudGl0eS5sYWJlbCxcclxuICAgICAgICAgIHBheWxvYWQ6ICdmYWxsYmFjay1zaW1wbGUtYXV0b2NvbXBsZXRlJyxcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4geyBzdWdnZXN0aW9uIH07XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgdGV4dCA9IHRoaXMuc3RyaW5nVHJpbShlbC5lbnRpdHkubGFiZWwsIG1heExlbmd0aCk7XHJcbiAgICAgIHN1Z2dlc3Rpb24ucHVzaCh7XHJcbiAgICAgICAgdGV4dCxcclxuICAgICAgICBhbmNob3I6IHtcclxuICAgICAgICAgIHBheWxvYWQ6IGVsLmVudGl0eS5pZCxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHsgc3VnZ2VzdGlvbiB9O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2l2ZW4gYSBzdHJpbmcsIGl0IHRyaW1zIGl0IHRvIHRoZSBzcGVjaWZpZWQgbGVuZ3RoLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHN0cmluZyBhbiBpbnB1dCBzdHJpbmdcclxuICAgKiBAcGFyYW0gbGltaXQgY2hhcmFjdGVyIGxpbWl0XHJcbiAgICogQHJldHVybnMgdGhlIHJlc3VsdGluZyB0cmltbWVkIHN0cmluZ1xyXG4gICAqL1xyXG4gIHByaXZhdGUgc3RyaW5nVHJpbSA9IChzdHJpbmcsIGxpbWl0KSA9PiB7XHJcbiAgICBpZiAoc3RyaW5nLmxlbmd0aCA+IGxpbWl0KSB7XHJcbiAgICAgIHJldHVybiBgJHtzdHJpbmcuc2xpY2UoMCwgbGltaXQpfeKApmA7XHJcbiAgICB9IHJldHVybiBzdHJpbmc7XHJcbiAgfVxyXG59XHJcbiJdfQ==