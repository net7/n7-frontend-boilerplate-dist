import { DataSource, _t } from '@n7-frontend/core';
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
        if (!(group || []).length) {
            return null;
        }
        const result = { group: [] };
        group.forEach(({ items }) => {
            items.forEach(({ label, value }) => {
                const itemLabel = label && !hideLabels ? label : null;
                if (Array.isArray(value)) {
                    result.group.push({
                        group: [Object.assign({ title: _t(itemLabel) }, this.getItemGroup(value))]
                    });
                }
                else {
                    result.group.push({
                        group: [{
                                items: value ? [{
                                        label: _t(itemLabel),
                                        value: this.getItemValue(value)
                                    }] : []
                            }]
                    });
                }
            });
        });
        return result;
    }
    getItemGroup(value) {
        if (Array.isArray(value) && Array.isArray(value[0])) {
            return {
                group: value.map((val) => (Object.assign({}, this.getItemGroup(val))))
            };
        }
        return {
            items: value
                .filter((childItem) => !!childItem.value)
                .map((childItem) => ({
                label: _t(childItem.label),
                value: this.getItemValue(childItem.value)
            }))
        };
    }
    getItemValue(value) {
        return this.isUrl.test(value) ? this.toUrl(value) : value;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0YWRhdGEuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2RhdGEtc291cmNlcy9tZXRhZGF0YS5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRW5ELE1BQU0sT0FBTyxZQUFhLFNBQVEsVUFBVTtJQUE1Qzs7UUFDRSxzQ0FBc0M7UUFDdEMsVUFBSyxHQUFHLHlFQUF5RSxDQUFBO1FBRWpGLDJDQUEyQztRQUMzQyxVQUFLLEdBQUcsQ0FBQyxNQUFjLEVBQUUsRUFBRSxDQUFDLFlBQVksTUFBTSxxQkFBcUIsTUFBTSxLQUFLLENBQUE7SUF5RGhGLENBQUM7SUF2RFcsU0FBUyxDQUFDLElBQVM7UUFDM0IsTUFBTSxFQUFFLFVBQVUsRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDcEMsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLElBQUksQ0FBQztRQUV2QixJQUFJLENBQUMsQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFO1lBQ3pCLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFFRCxNQUFNLE1BQU0sR0FBRyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUM3QixLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFO1lBQzFCLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFO2dCQUNqQyxNQUFNLFNBQVMsR0FBRyxLQUFLLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUN0RCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7b0JBQ3hCLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO3dCQUNoQixLQUFLLEVBQUUsaUJBQ0wsS0FBSyxFQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFDakIsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsRUFDM0I7cUJBQ0gsQ0FBQyxDQUFDO2lCQUNKO3FCQUFNO29CQUNMLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO3dCQUNoQixLQUFLLEVBQUUsQ0FBQztnQ0FDTixLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dDQUNkLEtBQUssRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDO3dDQUNwQixLQUFLLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7cUNBQ2hDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTs2QkFDUixDQUFDO3FCQUNILENBQUMsQ0FBQztpQkFDSjtZQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBRU8sWUFBWSxDQUFDLEtBQUs7UUFDeEIsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDbkQsT0FBTztnQkFDTCxLQUFLLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsbUJBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEVBQ3pCLENBQUM7YUFDSixDQUFDO1NBQ0g7UUFDRCxPQUFPO1lBQ0wsS0FBSyxFQUFFLEtBQUs7aUJBQ1QsTUFBTSxDQUFDLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQztpQkFDeEMsR0FBRyxDQUFDLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUNuQixLQUFLLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7Z0JBQzFCLEtBQUssRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7YUFDMUMsQ0FBQyxDQUFDO1NBQ04sQ0FBQztJQUNKLENBQUM7SUFFTyxZQUFZLENBQUMsS0FBSztRQUN4QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDNUQsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSwgX3QgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBNck1ldGFkYXRhRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgLyoqIFRlc3QgaWYgYSBzdHJpbmcgaXMgYSB2YWxpZCBVUkwgKi9cbiAgaXNVcmwgPSAvXig/Omh0dHAocyk/OlxcL1xcLyk/W1xcdy4tXSsoPzpcXC5bXFx3Li1dKykrW1xcd1xcLS5ffjovPyNbXFxdQCEkJicoKSorLDs9Ll0rJC9cblxuICAvKiogVHVybiBhIHN0cmluZyBpbnRvIGFuIGFuY2hvciBlbGVtZW50ICovXG4gIHRvVXJsID0gKHN0cmluZzogc3RyaW5nKSA9PiBgPGEgaHJlZj1cIiR7c3RyaW5nfVwiIHRhcmdldD1cIl9ibGFua1wiPiR7c3RyaW5nfTxhPmBcblxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGE6IGFueSk6IGFueSB7XG4gICAgY29uc3QgeyBoaWRlTGFiZWxzIH0gPSB0aGlzLm9wdGlvbnM7XG4gICAgY29uc3QgeyBncm91cCB9ID0gZGF0YTtcblxuICAgIGlmICghKGdyb3VwIHx8IFtdKS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHJlc3VsdCA9IHsgZ3JvdXA6IFtdIH07XG4gICAgZ3JvdXAuZm9yRWFjaCgoeyBpdGVtcyB9KSA9PiB7XG4gICAgICBpdGVtcy5mb3JFYWNoKCh7IGxhYmVsLCB2YWx1ZSB9KSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW1MYWJlbCA9IGxhYmVsICYmICFoaWRlTGFiZWxzID8gbGFiZWwgOiBudWxsO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICByZXN1bHQuZ3JvdXAucHVzaCh7XG4gICAgICAgICAgICBncm91cDogW3tcbiAgICAgICAgICAgICAgdGl0bGU6IF90KGl0ZW1MYWJlbCksXG4gICAgICAgICAgICAgIC4uLnRoaXMuZ2V0SXRlbUdyb3VwKHZhbHVlKVxuICAgICAgICAgICAgfV1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXN1bHQuZ3JvdXAucHVzaCh7XG4gICAgICAgICAgICBncm91cDogW3tcbiAgICAgICAgICAgICAgaXRlbXM6IHZhbHVlID8gW3tcbiAgICAgICAgICAgICAgICBsYWJlbDogX3QoaXRlbUxhYmVsKSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5nZXRJdGVtVmFsdWUodmFsdWUpXG4gICAgICAgICAgICAgIH1dIDogW11cbiAgICAgICAgICAgIH1dXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBwcml2YXRlIGdldEl0ZW1Hcm91cCh2YWx1ZSkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSAmJiBBcnJheS5pc0FycmF5KHZhbHVlWzBdKSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZ3JvdXA6IHZhbHVlLm1hcCgodmFsKSA9PiAoe1xuICAgICAgICAgIC4uLnRoaXMuZ2V0SXRlbUdyb3VwKHZhbClcbiAgICAgICAgfSkpXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgaXRlbXM6IHZhbHVlXG4gICAgICAgIC5maWx0ZXIoKGNoaWxkSXRlbSkgPT4gISFjaGlsZEl0ZW0udmFsdWUpXG4gICAgICAgIC5tYXAoKGNoaWxkSXRlbSkgPT4gKHtcbiAgICAgICAgICBsYWJlbDogX3QoY2hpbGRJdGVtLmxhYmVsKSxcbiAgICAgICAgICB2YWx1ZTogdGhpcy5nZXRJdGVtVmFsdWUoY2hpbGRJdGVtLnZhbHVlKVxuICAgICAgICB9KSlcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRJdGVtVmFsdWUodmFsdWUpIHtcbiAgICByZXR1cm4gdGhpcy5pc1VybC50ZXN0KHZhbHVlKSA/IHRoaXMudG9VcmwodmFsdWUpIDogdmFsdWU7XG4gIH1cbn1cbiJdfQ==