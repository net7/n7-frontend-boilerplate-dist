/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/data-sources/entita-nav.ds.ts
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
            return;
        }
        /** @type {?} */
        const data = param.data;
        /** @type {?} */
        const selected = param.selected;
        /** @type {?} */
        const navigation = { items: [], payload: 'entita-nav' };
        navigation.items.push({
            text: 'OVERVIEW',
            anchor: { href: param.basePath + '/overview' },
            classes: selected === 'overview' ? 'is-selected' : ''
        });
        if (data.fields && data.fields.length > 0) {
            navigation.items.push({
                text: 'CAMPI',
                anchor: { href: param.basePath + '/campi' },
                classes: selected === 'campi' ? 'is-selected' : ''
            });
        }
        if (data.relatedItems) {
            navigation.items.push({
                text: 'OGGETTI-COLLEGATI',
                anchor: {
                    href: param.basePath + '/oggetti-collegati',
                    queryParams: {
                        page: 1
                    }
                },
                classes: selected === 'oggetti-collegati' ? 'is-selected' : ''
            });
        }
        if (data.relatedEntities && this.options['bubblesEnabled']) {
            navigation.items.push({
                text: 'ENTITÀ COLLEGATE',
                anchor: { href: param.basePath + '/entita-collegate' },
                classes: selected === 'entita-collegate' ? 'is-selected' : ''
            });
        }
        if (data.extraTab) {
            navigation.items.push({
                text: 'MAXXI',
                anchor: { href: param.basePath + '/maxxi' },
                classes: selected === 'maxxi' ? 'is-selected' : ''
            });
        }
        if (data.wikiTab) {
            navigation.items.push({
                text: 'WIKIPEDIA',
                anchor: { href: param.basePath + '/wiki' },
                classes: selected === 'wiki' ? 'is-selected' : ''
            });
        }
        return navigation;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXRhLW5hdi5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvZW50aXRhLW5hdi5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUUvQyxNQUFNLE9BQU8sYUFBYyxTQUFRLFVBQVU7Ozs7OztJQUVqQyxTQUFTLENBQUMsS0FBSztRQUN2QixJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1YsT0FBTztTQUNSOztjQUNLLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSTs7Y0FDakIsUUFBUSxHQUFHLEtBQUssQ0FBQyxRQUFROztjQUN6QixVQUFVLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUU7UUFFdkQsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7WUFDcEIsSUFBSSxFQUFFLFVBQVU7WUFDaEIsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxRQUFRLEdBQUcsV0FBVyxFQUFFO1lBQzlDLE9BQU8sRUFBRSxRQUFRLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUU7U0FDdEQsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUN6QyxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztnQkFDcEIsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxRQUFRLEdBQUcsUUFBUSxFQUFFO2dCQUMzQyxPQUFPLEVBQUUsUUFBUSxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFO2FBQ25ELENBQUMsQ0FBQztTQUNKO1FBQ0QsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO2dCQUNwQixJQUFJLEVBQUUsbUJBQW1CO2dCQUN6QixNQUFNLEVBQUU7b0JBQ04sSUFBSSxFQUFFLEtBQUssQ0FBQyxRQUFRLEdBQUcsb0JBQW9CO29CQUMzQyxXQUFXLEVBQUU7d0JBQ1gsSUFBSSxFQUFFLENBQUM7cUJBQ1I7aUJBQ0Y7Z0JBQ0QsT0FBTyxFQUFFLFFBQVEsS0FBSyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFO2FBQy9ELENBQUMsQ0FBQztTQUNKO1FBQ0QsSUFBSSxJQUFJLENBQUMsZUFBZSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtZQUMxRCxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztnQkFDcEIsSUFBSSxFQUFFLGtCQUFrQjtnQkFDeEIsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxRQUFRLEdBQUcsbUJBQW1CLEVBQUU7Z0JBQ3RELE9BQU8sRUFBRSxRQUFRLEtBQUssa0JBQWtCLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRTthQUM5RCxDQUFDLENBQUM7U0FDSjtRQUNELElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztnQkFDcEIsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxRQUFRLEdBQUcsUUFBUSxFQUFFO2dCQUMzQyxPQUFPLEVBQUUsUUFBUSxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFO2FBQ25ELENBQUMsQ0FBQztTQUNKO1FBQ0QsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO2dCQUNwQixJQUFJLEVBQUUsV0FBVztnQkFDakIsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxRQUFRLEdBQUcsT0FBTyxFQUFFO2dCQUMxQyxPQUFPLEVBQUUsUUFBUSxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFO2FBQ2xELENBQUMsQ0FBQztTQUNKO1FBRUQsT0FBTyxVQUFVLENBQUM7SUFDcEIsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBBd0VudGl0YU5hdkRTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XHJcblxyXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0ocGFyYW0pIHtcclxuICAgIGlmICghcGFyYW0pIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZGF0YSA9IHBhcmFtLmRhdGE7XHJcbiAgICBjb25zdCBzZWxlY3RlZCA9IHBhcmFtLnNlbGVjdGVkO1xyXG4gICAgY29uc3QgbmF2aWdhdGlvbiA9IHsgaXRlbXM6IFtdLCBwYXlsb2FkOiAnZW50aXRhLW5hdicgfVxyXG5cclxuICAgIG5hdmlnYXRpb24uaXRlbXMucHVzaCh7XHJcbiAgICAgIHRleHQ6ICdPVkVSVklFVycsXHJcbiAgICAgIGFuY2hvcjogeyBocmVmOiBwYXJhbS5iYXNlUGF0aCArICcvb3ZlcnZpZXcnIH0sXHJcbiAgICAgIGNsYXNzZXM6IHNlbGVjdGVkID09PSAnb3ZlcnZpZXcnID8gJ2lzLXNlbGVjdGVkJyA6ICcnXHJcbiAgICB9KTtcclxuICAgIGlmIChkYXRhLmZpZWxkcyAmJiBkYXRhLmZpZWxkcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIG5hdmlnYXRpb24uaXRlbXMucHVzaCh7XHJcbiAgICAgICAgdGV4dDogJ0NBTVBJJyxcclxuICAgICAgICBhbmNob3I6IHsgaHJlZjogcGFyYW0uYmFzZVBhdGggKyAnL2NhbXBpJyB9LFxyXG4gICAgICAgIGNsYXNzZXM6IHNlbGVjdGVkID09PSAnY2FtcGknID8gJ2lzLXNlbGVjdGVkJyA6ICcnXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKGRhdGEucmVsYXRlZEl0ZW1zKSB7XHJcbiAgICAgIG5hdmlnYXRpb24uaXRlbXMucHVzaCh7XHJcbiAgICAgICAgdGV4dDogJ09HR0VUVEktQ09MTEVHQVRJJyxcclxuICAgICAgICBhbmNob3I6IHtcclxuICAgICAgICAgIGhyZWY6IHBhcmFtLmJhc2VQYXRoICsgJy9vZ2dldHRpLWNvbGxlZ2F0aScsXHJcbiAgICAgICAgICBxdWVyeVBhcmFtczoge1xyXG4gICAgICAgICAgICBwYWdlOiAxXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjbGFzc2VzOiBzZWxlY3RlZCA9PT0gJ29nZ2V0dGktY29sbGVnYXRpJyA/ICdpcy1zZWxlY3RlZCcgOiAnJ1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmIChkYXRhLnJlbGF0ZWRFbnRpdGllcyAmJiB0aGlzLm9wdGlvbnNbJ2J1YmJsZXNFbmFibGVkJ10pIHtcclxuICAgICAgbmF2aWdhdGlvbi5pdGVtcy5wdXNoKHtcclxuICAgICAgICB0ZXh0OiAnRU5USVTDgCBDT0xMRUdBVEUnLFxyXG4gICAgICAgIGFuY2hvcjogeyBocmVmOiBwYXJhbS5iYXNlUGF0aCArICcvZW50aXRhLWNvbGxlZ2F0ZScgfSxcclxuICAgICAgICBjbGFzc2VzOiBzZWxlY3RlZCA9PT0gJ2VudGl0YS1jb2xsZWdhdGUnID8gJ2lzLXNlbGVjdGVkJyA6ICcnXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKGRhdGEuZXh0cmFUYWIpIHtcclxuICAgICAgbmF2aWdhdGlvbi5pdGVtcy5wdXNoKHtcclxuICAgICAgICB0ZXh0OiAnTUFYWEknLFxyXG4gICAgICAgIGFuY2hvcjogeyBocmVmOiBwYXJhbS5iYXNlUGF0aCArICcvbWF4eGknIH0sXHJcbiAgICAgICAgY2xhc3Nlczogc2VsZWN0ZWQgPT09ICdtYXh4aScgPyAnaXMtc2VsZWN0ZWQnIDogJydcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAoZGF0YS53aWtpVGFiKSB7XHJcbiAgICAgIG5hdmlnYXRpb24uaXRlbXMucHVzaCh7XHJcbiAgICAgICAgdGV4dDogJ1dJS0lQRURJQScsXHJcbiAgICAgICAgYW5jaG9yOiB7IGhyZWY6IHBhcmFtLmJhc2VQYXRoICsgJy93aWtpJyB9LFxyXG4gICAgICAgIGNsYXNzZXM6IHNlbGVjdGVkID09PSAnd2lraScgPyAnaXMtc2VsZWN0ZWQnIDogJydcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5hdmlnYXRpb247XHJcbiAgfVxyXG59Il19