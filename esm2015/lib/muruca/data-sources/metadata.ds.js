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
        const { group } = data;
        const result = { group: [] };
        group.forEach(({ items }) => {
            items.forEach(({ label, value }) => {
                const itemLabel = label && !hideLabels ? label : null;
                if (Array.isArray(value)) {
                    result.group.push({
                        group: [{
                                title: itemLabel,
                                items: value.map((childItem) => ({
                                    label: childItem.label,
                                    value: this.getItemValue(childItem.value)
                                }))
                            }]
                    });
                }
                else {
                    result.group.push({
                        group: [{
                                items: [{
                                        label: itemLabel,
                                        value: this.getItemValue(value)
                                    }]
                            }]
                    });
                }
            });
        });
        return result;
    }
    getItemValue(value) {
        return this.isUrl.test(value) ? this.toUrl(value) : value;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0YWRhdGEuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2RhdGEtc291cmNlcy9tZXRhZGF0YS5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFL0MsTUFBTSxPQUFPLFlBQWEsU0FBUSxVQUFVO0lBQTVDOztRQUNFLHNDQUFzQztRQUN0QyxVQUFLLEdBQUcseUVBQXlFLENBQUE7UUFFakYsMkNBQTJDO1FBQzNDLFVBQUssR0FBRyxDQUFDLE1BQWMsRUFBRSxFQUFFLENBQUMsWUFBWSxNQUFNLHFCQUFxQixNQUFNLEtBQUssQ0FBQTtJQXFDaEYsQ0FBQztJQW5DVyxTQUFTLENBQUMsSUFBUztRQUMzQixNQUFNLEVBQUUsVUFBVSxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUNwQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLE1BQU0sTUFBTSxHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBQzdCLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUU7WUFDMUIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUU7Z0JBQ2pDLE1BQU0sU0FBUyxHQUFHLEtBQUssSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQ3RELElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtvQkFDeEIsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7d0JBQ2hCLEtBQUssRUFBRSxDQUFDO2dDQUNOLEtBQUssRUFBRSxTQUFTO2dDQUNoQixLQUFLLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQztvQ0FDL0IsS0FBSyxFQUFFLFNBQVMsQ0FBQyxLQUFLO29DQUN0QixLQUFLLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO2lDQUMxQyxDQUFDLENBQUM7NkJBQ0osQ0FBQztxQkFDSCxDQUFDLENBQUM7aUJBQ0o7cUJBQU07b0JBQ0wsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7d0JBQ2hCLEtBQUssRUFBRSxDQUFDO2dDQUNOLEtBQUssRUFBRSxDQUFDO3dDQUNOLEtBQUssRUFBRSxTQUFTO3dDQUNoQixLQUFLLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7cUNBQ2hDLENBQUM7NkJBQ0gsQ0FBQztxQkFDSCxDQUFDLENBQUM7aUJBQ0o7WUFDSCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVPLFlBQVksQ0FBQyxLQUFLO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUM1RCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgTXJNZXRhZGF0YURTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG4gIC8qKiBUZXN0IGlmIGEgc3RyaW5nIGlzIGEgdmFsaWQgVVJMICovXG4gIGlzVXJsID0gL14oPzpodHRwKHMpPzpcXC9cXC8pP1tcXHcuLV0rKD86XFwuW1xcdy4tXSspK1tcXHdcXC0uX346Lz8jW1xcXUAhJCYnKCkqKyw7PS5dKyQvXG5cbiAgLyoqIFR1cm4gYSBzdHJpbmcgaW50byBhbiBhbmNob3IgZWxlbWVudCAqL1xuICB0b1VybCA9IChzdHJpbmc6IHN0cmluZykgPT4gYDxhIGhyZWY9XCIke3N0cmluZ31cIiB0YXJnZXQ9XCJfYmxhbmtcIj4ke3N0cmluZ308YT5gXG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhOiBhbnkpOiBhbnkge1xuICAgIGNvbnN0IHsgaGlkZUxhYmVscyB9ID0gdGhpcy5vcHRpb25zO1xuICAgIGNvbnN0IHsgZ3JvdXAgfSA9IGRhdGE7XG4gICAgY29uc3QgcmVzdWx0ID0geyBncm91cDogW10gfTtcbiAgICBncm91cC5mb3JFYWNoKCh7IGl0ZW1zIH0pID0+IHtcbiAgICAgIGl0ZW1zLmZvckVhY2goKHsgbGFiZWwsIHZhbHVlIH0pID0+IHtcbiAgICAgICAgY29uc3QgaXRlbUxhYmVsID0gbGFiZWwgJiYgIWhpZGVMYWJlbHMgPyBsYWJlbCA6IG51bGw7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgIHJlc3VsdC5ncm91cC5wdXNoKHtcbiAgICAgICAgICAgIGdyb3VwOiBbe1xuICAgICAgICAgICAgICB0aXRsZTogaXRlbUxhYmVsLFxuICAgICAgICAgICAgICBpdGVtczogdmFsdWUubWFwKChjaGlsZEl0ZW0pID0+ICh7XG4gICAgICAgICAgICAgICAgbGFiZWw6IGNoaWxkSXRlbS5sYWJlbCxcbiAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5nZXRJdGVtVmFsdWUoY2hpbGRJdGVtLnZhbHVlKVxuICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgIH1dXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzdWx0Lmdyb3VwLnB1c2goe1xuICAgICAgICAgICAgZ3JvdXA6IFt7XG4gICAgICAgICAgICAgIGl0ZW1zOiBbe1xuICAgICAgICAgICAgICAgIGxhYmVsOiBpdGVtTGFiZWwsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuZ2V0SXRlbVZhbHVlKHZhbHVlKVxuICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfV1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0SXRlbVZhbHVlKHZhbHVlKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNVcmwudGVzdCh2YWx1ZSkgPyB0aGlzLnRvVXJsKHZhbHVlKSA6IHZhbHVlO1xuICB9XG59XG4iXX0=