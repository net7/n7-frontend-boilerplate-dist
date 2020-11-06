import { DataSource } from '@n7-frontend/core';
export class AwAutocompleteWrapperDS extends DataSource {
    constructor() {
        super(...arguments);
        this.stringTrim = (string, limit) => {
            /*
              Slices the string and adds trailing ellipsis
              TODO: Do not cut the string in the middle of an HTML tag!
            */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLXdyYXBwZXIuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL2F1dG9jb21wbGV0ZS13cmFwcGVyLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUUvQyxNQUFNLE9BQU8sdUJBQXdCLFNBQVEsVUFBVTtJQUF2RDs7UUFpQ1UsZUFBVSxHQUFHLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQ3JDOzs7Y0FHRTtZQUNGLElBQUksTUFBTSxDQUFDLE1BQU0sR0FBRyxLQUFLLEVBQUU7Z0JBQ3pCLE9BQU8sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDO2FBQ3JDO1lBQUMsT0FBTyxNQUFNLENBQUM7UUFDbEIsQ0FBQyxDQUFBO0lBQ0gsQ0FBQztJQXpDVyxTQUFTLENBQUMsSUFBSTtRQUN0QixNQUFNLEVBQUUsUUFBUSxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBRTFCLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDYixPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUM7U0FDMUM7UUFFRCxNQUFNLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFDdEIsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDaEMsTUFBTSxTQUFTLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFDdkUsTUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLE1BQU0sS0FBSyxRQUFRLENBQUMsQ0FBQztRQUVoRiw2Q0FBNkM7UUFDN0MsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFO1lBQ3RCLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEtBQUssVUFBVSxFQUFFLEVBQUUsaUNBQWlDO2dCQUNsRSxVQUFVLENBQUMsSUFBSSxDQUFDO29CQUNkLElBQUksRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUs7b0JBQ3JCLE9BQU8sRUFBRSw4QkFBOEI7aUJBQ3hDLENBQUMsQ0FBQztnQkFDSCxPQUFPLEVBQUUsVUFBVSxFQUFFLENBQUM7YUFDdkI7WUFDRCxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQ3pELFVBQVUsQ0FBQyxJQUFJLENBQUM7Z0JBQ2QsSUFBSTtnQkFDSixNQUFNLEVBQUU7b0JBQ04sT0FBTyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRTtpQkFDdEI7YUFDRixDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sRUFBRSxVQUFVLEVBQUUsQ0FBQztJQUN4QixDQUFDO0NBV0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgQXdBdXRvY29tcGxldGVXcmFwcGVyRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKSB7XG4gICAgY29uc3QgeyByZXNwb25zZSB9ID0gZGF0YTtcblxuICAgIGlmICghcmVzcG9uc2UpIHtcbiAgICAgIHJldHVybiB7IHN1Z2dlc3Rpb246IFtdLCBsb2FkaW5nOiB0cnVlIH07XG4gICAgfVxuXG4gICAgY29uc3Qgc3VnZ2VzdGlvbiA9IFtdO1xuICAgIGNvbnN0IHsgY29uZmlnIH0gPSB0aGlzLm9wdGlvbnM7XG4gICAgY29uc3QgbWF4TGVuZ3RoID0gKGNvbmZpZy5nZXQoJ2hvbWUtbGF5b3V0JylbJ21heC1pdGVtLWxlbmd0aCddIHx8IDIwKTtcbiAgICBjb25zdCBmUmVzdWx0cyA9IHJlc3BvbnNlLnJlc3VsdHMuZmlsdGVyKChlbCkgPT4gdHlwZW9mIGVsLmVudGl0eSA9PT0gJ29iamVjdCcpO1xuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbnNpc3RlbnQtcmV0dXJuXG4gICAgZlJlc3VsdHMuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgIGlmIChlbC5lbnRpdHkuaWQgPT09ICdmYWxsYmFjaycpIHsgLy8gYnVpbGQgYW5kIHJldHVybiBmYWxsYmFjayBkYXRhXG4gICAgICAgIHN1Z2dlc3Rpb24ucHVzaCh7XG4gICAgICAgICAgdGV4dDogZWwuZW50aXR5LmxhYmVsLFxuICAgICAgICAgIHBheWxvYWQ6ICdmYWxsYmFjay1zaW1wbGUtYXV0b2NvbXBsZXRlJyxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7IHN1Z2dlc3Rpb24gfTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHRleHQgPSB0aGlzLnN0cmluZ1RyaW0oZWwuZW50aXR5LmxhYmVsLCBtYXhMZW5ndGgpO1xuICAgICAgc3VnZ2VzdGlvbi5wdXNoKHtcbiAgICAgICAgdGV4dCxcbiAgICAgICAgYW5jaG9yOiB7XG4gICAgICAgICAgcGF5bG9hZDogZWwuZW50aXR5LmlkLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHsgc3VnZ2VzdGlvbiB9O1xuICB9XG5cbiAgcHJpdmF0ZSBzdHJpbmdUcmltID0gKHN0cmluZywgbGltaXQpID0+IHtcbiAgICAvKlxuICAgICAgU2xpY2VzIHRoZSBzdHJpbmcgYW5kIGFkZHMgdHJhaWxpbmcgZWxsaXBzaXNcbiAgICAgIFRPRE86IERvIG5vdCBjdXQgdGhlIHN0cmluZyBpbiB0aGUgbWlkZGxlIG9mIGFuIEhUTUwgdGFnIVxuICAgICovXG4gICAgaWYgKHN0cmluZy5sZW5ndGggPiBsaW1pdCkge1xuICAgICAgcmV0dXJuIGAke3N0cmluZy5zbGljZSgwLCBsaW1pdCl94oCmYDtcbiAgICB9IHJldHVybiBzdHJpbmc7XG4gIH1cbn1cbiJdfQ==