import { DataSource } from '@n7-frontend/core';
export class MrMetadataDS extends DataSource {
    constructor() {
        super(...arguments);
        /** Test if a string is a valid URL */
        this.isUrl = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=.]+$/;
        /** Turn a string into an anchor element */
        this.toUrl = (string) => `<a href="${string}" target="_blank">${string}<a>`;
    }
    transform(data) {
        const { hideLabels } = this.options;
        const group = data.group.map((d) => {
            let { items } = d;
            // Convert URLs to anchor elements and remove labels if necessary
            items = d.items
                .filter(({ label, value }) => label && value)
                .map(({ label, value }) => {
                const newItem = {};
                // value check
                if (value) {
                    if (this.isUrl.test(value)) {
                        newItem.value = this.toUrl(value);
                    }
                    else {
                        newItem.value = value;
                    }
                }
                if (label && !hideLabels) {
                    newItem.label = label;
                }
                return newItem;
            });
            return { items };
        });
        // Overwrite the metadata group
        data.group = group;
        return data;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0YWRhdGEuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2RhdGEtc291cmNlcy9tZXRhZGF0YS5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFL0MsTUFBTSxPQUFPLFlBQWEsU0FBUSxVQUFVO0lBQTVDOztRQUNFLHNDQUFzQztRQUN0QyxVQUFLLEdBQUcseUVBQXlFLENBQUE7UUFFakYsMkNBQTJDO1FBQzNDLFVBQUssR0FBRyxDQUFDLE1BQWMsRUFBRSxFQUFFLENBQUMsWUFBWSxNQUFNLHFCQUFxQixNQUFNLEtBQUssQ0FBQTtJQWdDaEYsQ0FBQztJQTlCVyxTQUFTLENBQUMsSUFBUztRQUMzQixNQUFNLEVBQUUsVUFBVSxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUNwQyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO1lBQ2pDLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDbEIsaUVBQWlFO1lBQ2pFLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSztpQkFDWixNQUFNLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQztpQkFDNUMsR0FBRyxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRTtnQkFDeEIsTUFBTSxPQUFPLEdBQUcsRUFBd0MsQ0FBQztnQkFDekQsY0FBYztnQkFDZCxJQUFJLEtBQUssRUFBRTtvQkFDVCxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO3dCQUMxQixPQUFPLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7cUJBQ25DO3lCQUFNO3dCQUNMLE9BQU8sQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO3FCQUN2QjtpQkFDRjtnQkFFRCxJQUFJLEtBQUssSUFBSSxDQUFDLFVBQVUsRUFBRTtvQkFDeEIsT0FBTyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7aUJBQ3ZCO2dCQUNELE9BQU8sT0FBTyxDQUFDO1lBQ2pCLENBQUMsQ0FBQyxDQUFDO1lBRUwsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDO1FBQ25CLENBQUMsQ0FBQyxDQUFDO1FBQ0gsK0JBQStCO1FBQy9CLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIE1yTWV0YWRhdGFEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuICAvKiogVGVzdCBpZiBhIHN0cmluZyBpcyBhIHZhbGlkIFVSTCAqL1xuICBpc1VybCA9IC9eKD86aHR0cChzKT86XFwvXFwvKT9bXFx3Li1dKyg/OlxcLltcXHcuLV0rKStbXFx3XFwtLl9+Oi8/I1tcXF1AISQmJygpKissOz0uXSskL1xuXG4gIC8qKiBUdXJuIGEgc3RyaW5nIGludG8gYW4gYW5jaG9yIGVsZW1lbnQgKi9cbiAgdG9VcmwgPSAoc3RyaW5nOiBzdHJpbmcpID0+IGA8YSBocmVmPVwiJHtzdHJpbmd9XCIgdGFyZ2V0PVwiX2JsYW5rXCI+JHtzdHJpbmd9PGE+YFxuXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YTogYW55KTogYW55IHtcbiAgICBjb25zdCB7IGhpZGVMYWJlbHMgfSA9IHRoaXMub3B0aW9ucztcbiAgICBjb25zdCBncm91cCA9IGRhdGEuZ3JvdXAubWFwKChkKSA9PiB7XG4gICAgICBsZXQgeyBpdGVtcyB9ID0gZDtcbiAgICAgIC8vIENvbnZlcnQgVVJMcyB0byBhbmNob3IgZWxlbWVudHMgYW5kIHJlbW92ZSBsYWJlbHMgaWYgbmVjZXNzYXJ5XG4gICAgICBpdGVtcyA9IGQuaXRlbXNcbiAgICAgICAgLmZpbHRlcigoeyBsYWJlbCwgdmFsdWUgfSkgPT4gbGFiZWwgJiYgdmFsdWUpXG4gICAgICAgIC5tYXAoKHsgbGFiZWwsIHZhbHVlIH0pID0+IHtcbiAgICAgICAgICBjb25zdCBuZXdJdGVtID0ge30gYXMgeyBsYWJlbD86IHN0cmluZzsgdmFsdWU/OiBzdHJpbmcgfTtcbiAgICAgICAgICAvLyB2YWx1ZSBjaGVja1xuICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNVcmwudGVzdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgbmV3SXRlbS52YWx1ZSA9IHRoaXMudG9VcmwodmFsdWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbmV3SXRlbS52YWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChsYWJlbCAmJiAhaGlkZUxhYmVscykge1xuICAgICAgICAgICAgbmV3SXRlbS5sYWJlbCA9IGxhYmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbmV3SXRlbTtcbiAgICAgICAgfSk7XG5cbiAgICAgIHJldHVybiB7IGl0ZW1zIH07XG4gICAgfSk7XG4gICAgLy8gT3ZlcndyaXRlIHRoZSBtZXRhZGF0YSBncm91cFxuICAgIGRhdGEuZ3JvdXAgPSBncm91cDtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxufVxuIl19