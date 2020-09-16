import { DataSource, _t } from '@n7-frontend/core';
export class MrBreadcrumbsDS extends DataSource {
    transform(data) {
        let items = [];
        if (Array.isArray(data) && data.length) {
            let { base } = this.options || {};
            base = Array.isArray(base) ? base : [];
            items = [
                ...base.map(({ link, title }) => ({
                    label: _t(title),
                    anchor: { href: link }
                })),
                ...data.map(({ link, title }) => ({
                    label: title,
                    anchor: { href: link }
                }))
            ];
        }
        return { items };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYnMuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2RhdGEtc291cmNlcy9icmVhZGNydW1icy5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBR25ELE1BQU0sT0FBTyxlQUFnQixTQUFRLFVBQVU7SUFDbkMsU0FBUyxDQUFDLElBQVM7UUFDM0IsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2YsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDdEMsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDO1lBQ2xDLElBQUksR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUN2QyxLQUFLLEdBQUc7Z0JBQ04sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7b0JBQ2hDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDO29CQUNoQixNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO2lCQUN2QixDQUFDLENBQUM7Z0JBQ0gsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7b0JBQ2hDLEtBQUssRUFBRSxLQUFLO29CQUNaLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7aUJBQ3ZCLENBQUMsQ0FBQzthQUNKLENBQUM7U0FDSDtRQUNELE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQztJQUNuQixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlLCBfdCB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IEJyZWFkY3J1bWJzRGF0YSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcblxuZXhwb3J0IGNsYXNzIE1yQnJlYWRjcnVtYnNEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGE6IGFueSk6IEJyZWFkY3J1bWJzRGF0YSB7XG4gICAgbGV0IGl0ZW1zID0gW107XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkgJiYgZGF0YS5sZW5ndGgpIHtcbiAgICAgIGxldCB7IGJhc2UgfSA9IHRoaXMub3B0aW9ucyB8fCB7fTtcbiAgICAgIGJhc2UgPSBBcnJheS5pc0FycmF5KGJhc2UpID8gYmFzZSA6IFtdO1xuICAgICAgaXRlbXMgPSBbXG4gICAgICAgIC4uLmJhc2UubWFwKCh7IGxpbmssIHRpdGxlIH0pID0+ICh7XG4gICAgICAgICAgbGFiZWw6IF90KHRpdGxlKSxcbiAgICAgICAgICBhbmNob3I6IHsgaHJlZjogbGluayB9XG4gICAgICAgIH0pKSxcbiAgICAgICAgLi4uZGF0YS5tYXAoKHsgbGluaywgdGl0bGUgfSkgPT4gKHtcbiAgICAgICAgICBsYWJlbDogdGl0bGUsXG4gICAgICAgICAgYW5jaG9yOiB7IGhyZWY6IGxpbmsgfVxuICAgICAgICB9KSlcbiAgICAgIF07XG4gICAgfVxuICAgIHJldHVybiB7IGl0ZW1zIH07XG4gIH1cbn1cbiJdfQ==