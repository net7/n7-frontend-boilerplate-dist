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
            items = d.items.map(({ label, value }) => {
                if (this.isUrl.test(value)) {
                    return ({ label: hideLabels ? '' : label, value: this.toUrl(value) });
                }
                return ({ label: hideLabels ? '' : label, value });
            });
            return { items };
        });
        // Overwrite the metadata group
        data.group = group;
        return data;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0YWRhdGEuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2RhdGEtc291cmNlcy9tZXRhZGF0YS5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFL0MsTUFBTSxPQUFPLFlBQWEsU0FBUSxVQUFVO0lBQTVDOztRQUNFLHNDQUFzQztRQUN0QyxVQUFLLEdBQUcseUVBQXlFLENBQUE7UUFFakYsMkNBQTJDO1FBQzNDLFVBQUssR0FBRyxDQUFDLE1BQWMsRUFBRSxFQUFFLENBQUMsWUFBWSxNQUFNLHFCQUFxQixNQUFNLEtBQUssQ0FBQTtJQW1CaEYsQ0FBQztJQWpCVyxTQUFTLENBQUMsSUFBUztRQUMzQixNQUFNLEVBQUUsVUFBVSxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUNwQyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO1lBQ2pDLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDbEIsaUVBQWlFO1lBQ2pFLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUU7Z0JBQ3ZDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7b0JBQzFCLE9BQU8sQ0FBQyxFQUFFLEtBQUssRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztpQkFDdkU7Z0JBQ0QsT0FBTyxDQUFDLEVBQUUsS0FBSyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztZQUNyRCxDQUFDLENBQUMsQ0FBQztZQUNILE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQztRQUNuQixDQUFDLENBQUMsQ0FBQztRQUNILCtCQUErQjtRQUMvQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBNck1ldGFkYXRhRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgLyoqIFRlc3QgaWYgYSBzdHJpbmcgaXMgYSB2YWxpZCBVUkwgKi9cbiAgaXNVcmwgPSAvXig/Omh0dHAocyk/OlxcL1xcLyk/W1xcdy4tXSsoPzpcXC5bXFx3Li1dKykrW1xcd1xcLS5ffjovPyNbXFxdQCEkJicoKSorLDs9Ll0rJC9cblxuICAvKiogVHVybiBhIHN0cmluZyBpbnRvIGFuIGFuY2hvciBlbGVtZW50ICovXG4gIHRvVXJsID0gKHN0cmluZzogc3RyaW5nKSA9PiBgPGEgaHJlZj1cIiR7c3RyaW5nfVwiIHRhcmdldD1cIl9ibGFua1wiPiR7c3RyaW5nfTxhPmBcblxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGE6IGFueSk6IGFueSB7XG4gICAgY29uc3QgeyBoaWRlTGFiZWxzIH0gPSB0aGlzLm9wdGlvbnM7XG4gICAgY29uc3QgZ3JvdXAgPSBkYXRhLmdyb3VwLm1hcCgoZCkgPT4ge1xuICAgICAgbGV0IHsgaXRlbXMgfSA9IGQ7XG4gICAgICAvLyBDb252ZXJ0IFVSTHMgdG8gYW5jaG9yIGVsZW1lbnRzIGFuZCByZW1vdmUgbGFiZWxzIGlmIG5lY2Vzc2FyeVxuICAgICAgaXRlbXMgPSBkLml0ZW1zLm1hcCgoeyBsYWJlbCwgdmFsdWUgfSkgPT4ge1xuICAgICAgICBpZiAodGhpcy5pc1VybC50ZXN0KHZhbHVlKSkge1xuICAgICAgICAgIHJldHVybiAoeyBsYWJlbDogaGlkZUxhYmVscyA/ICcnIDogbGFiZWwsIHZhbHVlOiB0aGlzLnRvVXJsKHZhbHVlKSB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKHsgbGFiZWw6IGhpZGVMYWJlbHMgPyAnJyA6IGxhYmVsLCB2YWx1ZSB9KTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHsgaXRlbXMgfTtcbiAgICB9KTtcbiAgICAvLyBPdmVyd3JpdGUgdGhlIG1ldGFkYXRhIGdyb3VwXG4gICAgZGF0YS5ncm91cCA9IGdyb3VwO1xuICAgIHJldHVybiBkYXRhO1xuICB9XG59XG4iXX0=