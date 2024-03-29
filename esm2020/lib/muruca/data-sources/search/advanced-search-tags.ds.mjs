import { DataSource, _t } from '@n7-frontend/core';
export class MrAdvancedSearchTagsDS extends DataSource {
    transform(data) {
        const { labels } = this.options;
        return Object.keys(data).map((key) => ({
            text: `${labels[key] || key}: ${_t(data[key])}`
        }));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2YW5jZWQtc2VhcmNoLXRhZ3MuZHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uNy1ib2lsZXJwbGF0ZS1saWIvc3JjL2xpYi9tdXJ1Y2EvZGF0YS1zb3VyY2VzL3NlYXJjaC9hZHZhbmNlZC1zZWFyY2gtdGFncy5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBR25ELE1BQU0sT0FBTyxzQkFBdUIsU0FBUSxVQUFVO0lBQzFDLFNBQVMsQ0FBQyxJQUFJO1FBQ3RCLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ2hDLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDckMsSUFBSSxFQUFFLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7U0FDaEQsQ0FBQyxDQUFDLENBQUM7SUFDTixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlLCBfdCB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuaW1wb3J0IHsgVGFnRGF0YSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBNckFkdmFuY2VkU2VhcmNoVGFnc0RTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XHJcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKTogVGFnRGF0YVtdIHtcclxuICAgIGNvbnN0IHsgbGFiZWxzIH0gPSB0aGlzLm9wdGlvbnM7XHJcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoZGF0YSkubWFwKChrZXkpID0+ICh7XHJcbiAgICAgIHRleHQ6IGAke2xhYmVsc1trZXldIHx8IGtleX06ICR7X3QoZGF0YVtrZXldKX1gXHJcbiAgICB9KSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==