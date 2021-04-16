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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLXdyYXBwZXIuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL2F1dG9jb21wbGV0ZS13cmFwcGVyLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUUvQyxNQUFNLE9BQU8sdUJBQXdCLFNBQVEsVUFBVTtJQUF2RDs7UUFpQ0U7Ozs7OztXQU1HO1FBQ0ssZUFBVSxHQUFHLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQ3JDLElBQUksTUFBTSxDQUFDLE1BQU0sR0FBRyxLQUFLLEVBQUU7Z0JBQ3pCLE9BQU8sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDO2FBQ3JDO1lBQUMsT0FBTyxNQUFNLENBQUM7UUFDbEIsQ0FBQyxDQUFBO0lBQ0gsQ0FBQztJQTVDVyxTQUFTLENBQUMsSUFBSTtRQUN0QixNQUFNLEVBQUUsUUFBUSxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBRTFCLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDYixPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUM7U0FDMUM7UUFFRCxNQUFNLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFDdEIsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDaEMsTUFBTSxTQUFTLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFDdkUsTUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLE1BQU0sS0FBSyxRQUFRLENBQUMsQ0FBQztRQUVoRiw2Q0FBNkM7UUFDN0MsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFO1lBQ3RCLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEtBQUssVUFBVSxFQUFFLEVBQUUsaUNBQWlDO2dCQUNsRSxVQUFVLENBQUMsSUFBSSxDQUFDO29CQUNkLElBQUksRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUs7b0JBQ3JCLE9BQU8sRUFBRSw4QkFBOEI7aUJBQ3hDLENBQUMsQ0FBQztnQkFDSCxPQUFPLEVBQUUsVUFBVSxFQUFFLENBQUM7YUFDdkI7WUFDRCxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQ3pELFVBQVUsQ0FBQyxJQUFJLENBQUM7Z0JBQ2QsSUFBSTtnQkFDSixNQUFNLEVBQUU7b0JBQ04sT0FBTyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRTtpQkFDdEI7YUFDRixDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sRUFBRSxVQUFVLEVBQUUsQ0FBQztJQUN4QixDQUFDO0NBY0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEF3QXV0b2NvbXBsZXRlV3JhcHBlckRTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XHJcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKSB7XHJcbiAgICBjb25zdCB7IHJlc3BvbnNlIH0gPSBkYXRhO1xyXG5cclxuICAgIGlmICghcmVzcG9uc2UpIHtcclxuICAgICAgcmV0dXJuIHsgc3VnZ2VzdGlvbjogW10sIGxvYWRpbmc6IHRydWUgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdWdnZXN0aW9uID0gW107XHJcbiAgICBjb25zdCB7IGNvbmZpZyB9ID0gdGhpcy5vcHRpb25zO1xyXG4gICAgY29uc3QgbWF4TGVuZ3RoID0gKGNvbmZpZy5nZXQoJ2hvbWUtbGF5b3V0JylbJ21heC1pdGVtLWxlbmd0aCddIHx8IDIwKTtcclxuICAgIGNvbnN0IGZSZXN1bHRzID0gcmVzcG9uc2UucmVzdWx0cy5maWx0ZXIoKGVsKSA9PiB0eXBlb2YgZWwuZW50aXR5ID09PSAnb2JqZWN0Jyk7XHJcblxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbnNpc3RlbnQtcmV0dXJuXHJcbiAgICBmUmVzdWx0cy5mb3JFYWNoKChlbCkgPT4ge1xyXG4gICAgICBpZiAoZWwuZW50aXR5LmlkID09PSAnZmFsbGJhY2snKSB7IC8vIGJ1aWxkIGFuZCByZXR1cm4gZmFsbGJhY2sgZGF0YVxyXG4gICAgICAgIHN1Z2dlc3Rpb24ucHVzaCh7XHJcbiAgICAgICAgICB0ZXh0OiBlbC5lbnRpdHkubGFiZWwsXHJcbiAgICAgICAgICBwYXlsb2FkOiAnZmFsbGJhY2stc2ltcGxlLWF1dG9jb21wbGV0ZScsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VnZ2VzdGlvbiB9O1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHRleHQgPSB0aGlzLnN0cmluZ1RyaW0oZWwuZW50aXR5LmxhYmVsLCBtYXhMZW5ndGgpO1xyXG4gICAgICBzdWdnZXN0aW9uLnB1c2goe1xyXG4gICAgICAgIHRleHQsXHJcbiAgICAgICAgYW5jaG9yOiB7XHJcbiAgICAgICAgICBwYXlsb2FkOiBlbC5lbnRpdHkuaWQsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiB7IHN1Z2dlc3Rpb24gfTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdpdmVuIGEgc3RyaW5nLCBpdCB0cmltcyBpdCB0byB0aGUgc3BlY2lmaWVkIGxlbmd0aC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBzdHJpbmcgYW4gaW5wdXQgc3RyaW5nXHJcbiAgICogQHBhcmFtIGxpbWl0IGNoYXJhY3RlciBsaW1pdFxyXG4gICAqIEByZXR1cm5zIHRoZSByZXN1bHRpbmcgdHJpbW1lZCBzdHJpbmdcclxuICAgKi9cclxuICBwcml2YXRlIHN0cmluZ1RyaW0gPSAoc3RyaW5nLCBsaW1pdCkgPT4ge1xyXG4gICAgaWYgKHN0cmluZy5sZW5ndGggPiBsaW1pdCkge1xyXG4gICAgICByZXR1cm4gYCR7c3RyaW5nLnNsaWNlKDAsIGxpbWl0KX3igKZgO1xyXG4gICAgfSByZXR1cm4gc3RyaW5nO1xyXG4gIH1cclxufVxyXG4iXX0=