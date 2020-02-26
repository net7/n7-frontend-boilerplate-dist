/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/data-sources/entita-nav.ds.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DataSource } from '@n7-frontend/core';
var AwEntitaNavDS = /** @class */ (function (_super) {
    tslib_1.__extends(AwEntitaNavDS, _super);
    function AwEntitaNavDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @protected
     * @param {?} param
     * @return {?}
     */
    AwEntitaNavDS.prototype.transform = /**
     * @protected
     * @param {?} param
     * @return {?}
     */
    function (param) {
        if (!param) {
            return;
        }
        /** @type {?} */
        var data = param.data;
        /** @type {?} */
        var selected = param.selected;
        /** @type {?} */
        var navigation = { items: [], payload: 'entita-nav' };
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
                text: 'OGGETTI COLLEGATI',
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
    };
    return AwEntitaNavDS;
}(DataSource));
export { AwEntitaNavDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXRhLW5hdi5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvZW50aXRhLW5hdi5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFL0M7SUFBbUMseUNBQVU7SUFBN0M7O0lBMERBLENBQUM7Ozs7OztJQXhEVyxpQ0FBUzs7Ozs7SUFBbkIsVUFBb0IsS0FBSztRQUN2QixJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1YsT0FBTztTQUNSOztZQUNLLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSTs7WUFDakIsUUFBUSxHQUFHLEtBQUssQ0FBQyxRQUFROztZQUN6QixVQUFVLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUU7UUFFdkQsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7WUFDcEIsSUFBSSxFQUFFLFVBQVU7WUFDaEIsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxRQUFRLEdBQUcsV0FBVyxFQUFFO1lBQzlDLE9BQU8sRUFBRSxRQUFRLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUU7U0FDdEQsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUN6QyxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztnQkFDcEIsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxRQUFRLEdBQUcsUUFBUSxFQUFFO2dCQUMzQyxPQUFPLEVBQUUsUUFBUSxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFO2FBQ25ELENBQUMsQ0FBQztTQUNKO1FBQ0QsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO2dCQUNwQixJQUFJLEVBQUUsbUJBQW1CO2dCQUN6QixNQUFNLEVBQUU7b0JBQ04sSUFBSSxFQUFFLEtBQUssQ0FBQyxRQUFRLEdBQUcsb0JBQW9CO29CQUMzQyxXQUFXLEVBQUU7d0JBQ1gsSUFBSSxFQUFFLENBQUM7cUJBQ1I7aUJBQ0Y7Z0JBQ0QsT0FBTyxFQUFFLFFBQVEsS0FBSyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFO2FBQy9ELENBQUMsQ0FBQztTQUNKO1FBQ0QsSUFBSSxJQUFJLENBQUMsZUFBZSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtZQUMxRCxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztnQkFDcEIsSUFBSSxFQUFFLGtCQUFrQjtnQkFDeEIsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxRQUFRLEdBQUcsbUJBQW1CLEVBQUU7Z0JBQ3RELE9BQU8sRUFBRSxRQUFRLEtBQUssa0JBQWtCLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRTthQUM5RCxDQUFDLENBQUM7U0FDSjtRQUNELElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztnQkFDcEIsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxRQUFRLEdBQUcsUUFBUSxFQUFFO2dCQUMzQyxPQUFPLEVBQUUsUUFBUSxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFO2FBQ25ELENBQUMsQ0FBQztTQUNKO1FBQ0QsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO2dCQUNwQixJQUFJLEVBQUUsV0FBVztnQkFDakIsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxRQUFRLEdBQUcsT0FBTyxFQUFFO2dCQUMxQyxPQUFPLEVBQUUsUUFBUSxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFO2FBQ2xELENBQUMsQ0FBQztTQUNKO1FBRUQsT0FBTyxVQUFVLENBQUM7SUFDcEIsQ0FBQztJQUNILG9CQUFDO0FBQUQsQ0FBQyxBQTFERCxDQUFtQyxVQUFVLEdBMEQ1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBBd0VudGl0YU5hdkRTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShwYXJhbSkge1xuICAgIGlmICghcGFyYW0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgZGF0YSA9IHBhcmFtLmRhdGE7XG4gICAgY29uc3Qgc2VsZWN0ZWQgPSBwYXJhbS5zZWxlY3RlZDtcbiAgICBjb25zdCBuYXZpZ2F0aW9uID0geyBpdGVtczogW10sIHBheWxvYWQ6ICdlbnRpdGEtbmF2JyB9XG5cbiAgICBuYXZpZ2F0aW9uLml0ZW1zLnB1c2goe1xuICAgICAgdGV4dDogJ09WRVJWSUVXJyxcbiAgICAgIGFuY2hvcjogeyBocmVmOiBwYXJhbS5iYXNlUGF0aCArICcvb3ZlcnZpZXcnIH0sXG4gICAgICBjbGFzc2VzOiBzZWxlY3RlZCA9PT0gJ292ZXJ2aWV3JyA/ICdpcy1zZWxlY3RlZCcgOiAnJ1xuICAgIH0pO1xuICAgIGlmIChkYXRhLmZpZWxkcyAmJiBkYXRhLmZpZWxkcy5sZW5ndGggPiAwKSB7XG4gICAgICBuYXZpZ2F0aW9uLml0ZW1zLnB1c2goe1xuICAgICAgICB0ZXh0OiAnQ0FNUEknLFxuICAgICAgICBhbmNob3I6IHsgaHJlZjogcGFyYW0uYmFzZVBhdGggKyAnL2NhbXBpJyB9LFxuICAgICAgICBjbGFzc2VzOiBzZWxlY3RlZCA9PT0gJ2NhbXBpJyA/ICdpcy1zZWxlY3RlZCcgOiAnJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChkYXRhLnJlbGF0ZWRJdGVtcykge1xuICAgICAgbmF2aWdhdGlvbi5pdGVtcy5wdXNoKHtcbiAgICAgICAgdGV4dDogJ09HR0VUVEkgQ09MTEVHQVRJJyxcbiAgICAgICAgYW5jaG9yOiB7XG4gICAgICAgICAgaHJlZjogcGFyYW0uYmFzZVBhdGggKyAnL29nZ2V0dGktY29sbGVnYXRpJyxcbiAgICAgICAgICBxdWVyeVBhcmFtczoge1xuICAgICAgICAgICAgcGFnZTogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY2xhc3Nlczogc2VsZWN0ZWQgPT09ICdvZ2dldHRpLWNvbGxlZ2F0aScgPyAnaXMtc2VsZWN0ZWQnIDogJydcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoZGF0YS5yZWxhdGVkRW50aXRpZXMgJiYgdGhpcy5vcHRpb25zWydidWJibGVzRW5hYmxlZCddKSB7XG4gICAgICBuYXZpZ2F0aW9uLml0ZW1zLnB1c2goe1xuICAgICAgICB0ZXh0OiAnRU5USVTDgCBDT0xMRUdBVEUnLFxuICAgICAgICBhbmNob3I6IHsgaHJlZjogcGFyYW0uYmFzZVBhdGggKyAnL2VudGl0YS1jb2xsZWdhdGUnIH0sXG4gICAgICAgIGNsYXNzZXM6IHNlbGVjdGVkID09PSAnZW50aXRhLWNvbGxlZ2F0ZScgPyAnaXMtc2VsZWN0ZWQnIDogJydcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoZGF0YS5leHRyYVRhYikge1xuICAgICAgbmF2aWdhdGlvbi5pdGVtcy5wdXNoKHtcbiAgICAgICAgdGV4dDogJ01BWFhJJyxcbiAgICAgICAgYW5jaG9yOiB7IGhyZWY6IHBhcmFtLmJhc2VQYXRoICsgJy9tYXh4aScgfSxcbiAgICAgICAgY2xhc3Nlczogc2VsZWN0ZWQgPT09ICdtYXh4aScgPyAnaXMtc2VsZWN0ZWQnIDogJydcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoZGF0YS53aWtpVGFiKSB7XG4gICAgICBuYXZpZ2F0aW9uLml0ZW1zLnB1c2goe1xuICAgICAgICB0ZXh0OiAnV0lLSVBFRElBJyxcbiAgICAgICAgYW5jaG9yOiB7IGhyZWY6IHBhcmFtLmJhc2VQYXRoICsgJy93aWtpJyB9LFxuICAgICAgICBjbGFzc2VzOiBzZWxlY3RlZCA9PT0gJ3dpa2knID8gJ2lzLXNlbGVjdGVkJyA6ICcnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmF2aWdhdGlvbjtcbiAgfVxufSJdfQ==