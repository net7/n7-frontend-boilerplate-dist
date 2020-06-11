/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataSource } from '@n7-frontend/core';
export class AwEntitaNavDS extends DataSource {
    /**
     * @protected
     * @param {?} param
     * @return {?}
     */
    transform(param) {
        if (!param) {
            return null;
        }
        const { data } = param;
        const { selected } = param;
        /** @type {?} */
        const navigation = { items: [], payload: 'entita-nav' };
        const { hasMetadataFields } = this.options;
        navigation.items.push({
            text: 'OVERVIEW',
            anchor: { href: `${param.basePath}/overview` },
            classes: selected === 'overview' ? 'is-selected' : '',
        });
        if (hasMetadataFields) {
            navigation.items.push({
                text: 'CAMPI',
                anchor: { href: `${param.basePath}/campi` },
                classes: selected === 'campi' ? 'is-selected' : '',
            });
        }
        if (data.relatedItems) {
            navigation.items.push({
                text: 'OGGETTI COLLEGATI',
                anchor: {
                    href: `${param.basePath}/oggetti-collegati`,
                    queryParams: {
                        page: 1,
                    },
                },
                classes: selected === 'oggetti-collegati' ? 'is-selected' : '',
            });
        }
        if (data.relatedEntities && this.options.bubblesEnabled) {
            navigation.items.push({
                text: 'ENTITÀ COLLEGATE',
                anchor: { href: `${param.basePath}/entita-collegate` },
                classes: selected === 'entita-collegate' ? 'is-selected' : '',
            });
        }
        if (data.extraTab) {
            navigation.items.push({
                text: 'MAXXI',
                anchor: { href: `${param.basePath}/maxxi` },
                classes: selected === 'maxxi' ? 'is-selected' : '',
            });
        }
        if (data.wikiTab) {
            navigation.items.push({
                text: 'WIKIPEDIA',
                anchor: { href: `${param.basePath}/wiki` },
                classes: selected === 'wiki' ? 'is-selected' : '',
            });
        }
        // one tab control
        if (navigation.items.length === 2) {
            navigation.items.shift();
        }
        return navigation;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXRhLW5hdi5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvZW50aXRhLW5hdi5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRS9DLE1BQU0sT0FBTyxhQUFjLFNBQVEsVUFBVTs7Ozs7O0lBQ2pDLFNBQVMsQ0FBQyxLQUFLO1FBQ3ZCLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDVixPQUFPLElBQUksQ0FBQztTQUNiO2NBQ0ssRUFBRSxJQUFJLEVBQUUsR0FBRyxLQUFLO2NBQ2hCLEVBQUUsUUFBUSxFQUFFLEdBQUcsS0FBSzs7Y0FDcEIsVUFBVSxHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFO2NBQ2pELEVBQUUsaUJBQWlCLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTztRQUUxQyxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztZQUNwQixJQUFJLEVBQUUsVUFBVTtZQUNoQixNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsR0FBRyxLQUFLLENBQUMsUUFBUSxXQUFXLEVBQUU7WUFDOUMsT0FBTyxFQUFFLFFBQVEsS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRTtTQUN0RCxDQUFDLENBQUM7UUFDSCxJQUFJLGlCQUFpQixFQUFFO1lBQ3JCLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO2dCQUNwQixJQUFJLEVBQUUsT0FBTztnQkFDYixNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsR0FBRyxLQUFLLENBQUMsUUFBUSxRQUFRLEVBQUU7Z0JBQzNDLE9BQU8sRUFBRSxRQUFRLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUU7YUFDbkQsQ0FBQyxDQUFDO1NBQ0o7UUFDRCxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7Z0JBQ3BCLElBQUksRUFBRSxtQkFBbUI7Z0JBQ3pCLE1BQU0sRUFBRTtvQkFDTixJQUFJLEVBQUUsR0FBRyxLQUFLLENBQUMsUUFBUSxvQkFBb0I7b0JBQzNDLFdBQVcsRUFBRTt3QkFDWCxJQUFJLEVBQUUsQ0FBQztxQkFDUjtpQkFDRjtnQkFDRCxPQUFPLEVBQUUsUUFBUSxLQUFLLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUU7YUFDL0QsQ0FBQyxDQUFDO1NBQ0o7UUFDRCxJQUFJLElBQUksQ0FBQyxlQUFlLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUU7WUFDdkQsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7Z0JBQ3BCLElBQUksRUFBRSxrQkFBa0I7Z0JBQ3hCLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxHQUFHLEtBQUssQ0FBQyxRQUFRLG1CQUFtQixFQUFFO2dCQUN0RCxPQUFPLEVBQUUsUUFBUSxLQUFLLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUU7YUFDOUQsQ0FBQyxDQUFDO1NBQ0o7UUFDRCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7Z0JBQ3BCLElBQUksRUFBRSxPQUFPO2dCQUNiLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxHQUFHLEtBQUssQ0FBQyxRQUFRLFFBQVEsRUFBRTtnQkFDM0MsT0FBTyxFQUFFLFFBQVEsS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRTthQUNuRCxDQUFDLENBQUM7U0FDSjtRQUNELElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztnQkFDcEIsSUFBSSxFQUFFLFdBQVc7Z0JBQ2pCLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxHQUFHLEtBQUssQ0FBQyxRQUFRLE9BQU8sRUFBRTtnQkFDMUMsT0FBTyxFQUFFLFFBQVEsS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRTthQUNsRCxDQUFDLENBQUM7U0FDSjtRQUVELGtCQUFrQjtRQUNsQixJQUFJLFVBQVUsQ0FBQyxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUNqQyxVQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQzFCO1FBRUQsT0FBTyxVQUFVLENBQUM7SUFDcEIsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIEF3RW50aXRhTmF2RFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShwYXJhbSk6IGFueSB7XG4gICAgaWYgKCFwYXJhbSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IHsgZGF0YSB9ID0gcGFyYW07XG4gICAgY29uc3QgeyBzZWxlY3RlZCB9ID0gcGFyYW07XG4gICAgY29uc3QgbmF2aWdhdGlvbiA9IHsgaXRlbXM6IFtdLCBwYXlsb2FkOiAnZW50aXRhLW5hdicgfTtcbiAgICBjb25zdCB7IGhhc01ldGFkYXRhRmllbGRzIH0gPSB0aGlzLm9wdGlvbnM7XG5cbiAgICBuYXZpZ2F0aW9uLml0ZW1zLnB1c2goe1xuICAgICAgdGV4dDogJ09WRVJWSUVXJyxcbiAgICAgIGFuY2hvcjogeyBocmVmOiBgJHtwYXJhbS5iYXNlUGF0aH0vb3ZlcnZpZXdgIH0sXG4gICAgICBjbGFzc2VzOiBzZWxlY3RlZCA9PT0gJ292ZXJ2aWV3JyA/ICdpcy1zZWxlY3RlZCcgOiAnJyxcbiAgICB9KTtcbiAgICBpZiAoaGFzTWV0YWRhdGFGaWVsZHMpIHtcbiAgICAgIG5hdmlnYXRpb24uaXRlbXMucHVzaCh7XG4gICAgICAgIHRleHQ6ICdDQU1QSScsXG4gICAgICAgIGFuY2hvcjogeyBocmVmOiBgJHtwYXJhbS5iYXNlUGF0aH0vY2FtcGlgIH0sXG4gICAgICAgIGNsYXNzZXM6IHNlbGVjdGVkID09PSAnY2FtcGknID8gJ2lzLXNlbGVjdGVkJyA6ICcnLFxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChkYXRhLnJlbGF0ZWRJdGVtcykge1xuICAgICAgbmF2aWdhdGlvbi5pdGVtcy5wdXNoKHtcbiAgICAgICAgdGV4dDogJ09HR0VUVEkgQ09MTEVHQVRJJyxcbiAgICAgICAgYW5jaG9yOiB7XG4gICAgICAgICAgaHJlZjogYCR7cGFyYW0uYmFzZVBhdGh9L29nZ2V0dGktY29sbGVnYXRpYCxcbiAgICAgICAgICBxdWVyeVBhcmFtczoge1xuICAgICAgICAgICAgcGFnZTogMSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBjbGFzc2VzOiBzZWxlY3RlZCA9PT0gJ29nZ2V0dGktY29sbGVnYXRpJyA/ICdpcy1zZWxlY3RlZCcgOiAnJyxcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoZGF0YS5yZWxhdGVkRW50aXRpZXMgJiYgdGhpcy5vcHRpb25zLmJ1YmJsZXNFbmFibGVkKSB7XG4gICAgICBuYXZpZ2F0aW9uLml0ZW1zLnB1c2goe1xuICAgICAgICB0ZXh0OiAnRU5USVTDgCBDT0xMRUdBVEUnLFxuICAgICAgICBhbmNob3I6IHsgaHJlZjogYCR7cGFyYW0uYmFzZVBhdGh9L2VudGl0YS1jb2xsZWdhdGVgIH0sXG4gICAgICAgIGNsYXNzZXM6IHNlbGVjdGVkID09PSAnZW50aXRhLWNvbGxlZ2F0ZScgPyAnaXMtc2VsZWN0ZWQnIDogJycsXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGRhdGEuZXh0cmFUYWIpIHtcbiAgICAgIG5hdmlnYXRpb24uaXRlbXMucHVzaCh7XG4gICAgICAgIHRleHQ6ICdNQVhYSScsXG4gICAgICAgIGFuY2hvcjogeyBocmVmOiBgJHtwYXJhbS5iYXNlUGF0aH0vbWF4eGlgIH0sXG4gICAgICAgIGNsYXNzZXM6IHNlbGVjdGVkID09PSAnbWF4eGknID8gJ2lzLXNlbGVjdGVkJyA6ICcnLFxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChkYXRhLndpa2lUYWIpIHtcbiAgICAgIG5hdmlnYXRpb24uaXRlbXMucHVzaCh7XG4gICAgICAgIHRleHQ6ICdXSUtJUEVESUEnLFxuICAgICAgICBhbmNob3I6IHsgaHJlZjogYCR7cGFyYW0uYmFzZVBhdGh9L3dpa2lgIH0sXG4gICAgICAgIGNsYXNzZXM6IHNlbGVjdGVkID09PSAnd2lraScgPyAnaXMtc2VsZWN0ZWQnIDogJycsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBvbmUgdGFiIGNvbnRyb2xcbiAgICBpZiAobmF2aWdhdGlvbi5pdGVtcy5sZW5ndGggPT09IDIpIHtcbiAgICAgIG5hdmlnYXRpb24uaXRlbXMuc2hpZnQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmF2aWdhdGlvbjtcbiAgfVxufVxuIl19