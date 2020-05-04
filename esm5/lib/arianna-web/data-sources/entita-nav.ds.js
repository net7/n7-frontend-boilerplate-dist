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
            return null;
        }
        var data = param.data;
        var selected = param.selected;
        /** @type {?} */
        var navigation = { items: [], payload: 'entita-nav' };
        navigation.items.push({
            text: 'OVERVIEW',
            anchor: { href: param.basePath + "/overview" },
            classes: selected === 'overview' ? 'is-selected' : '',
        });
        if (data.fields && data.fields.length > 0) {
            navigation.items.push({
                text: 'CAMPI',
                anchor: { href: param.basePath + "/campi" },
                classes: selected === 'campi' ? 'is-selected' : '',
            });
        }
        if (data.relatedItems) {
            navigation.items.push({
                text: 'OGGETTI COLLEGATI',
                anchor: {
                    href: param.basePath + "/oggetti-collegati",
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
                anchor: { href: param.basePath + "/entita-collegate" },
                classes: selected === 'entita-collegate' ? 'is-selected' : '',
            });
        }
        if (data.extraTab) {
            navigation.items.push({
                text: 'MAXXI',
                anchor: { href: param.basePath + "/maxxi" },
                classes: selected === 'maxxi' ? 'is-selected' : '',
            });
        }
        if (data.wikiTab) {
            navigation.items.push({
                text: 'WIKIPEDIA',
                anchor: { href: param.basePath + "/wiki" },
                classes: selected === 'wiki' ? 'is-selected' : '',
            });
        }
        return navigation;
    };
    return AwEntitaNavDS;
}(DataSource));
export { AwEntitaNavDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXRhLW5hdi5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvZW50aXRhLW5hdi5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFL0M7SUFBbUMseUNBQVU7SUFBN0M7O0lBeURBLENBQUM7Ozs7OztJQXhEVyxpQ0FBUzs7Ozs7SUFBbkIsVUFBb0IsS0FBSztRQUN2QixJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1YsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNPLElBQUEsaUJBQUk7UUFDSixJQUFBLHlCQUFROztZQUNWLFVBQVUsR0FBRyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRTtRQUV2RCxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztZQUNwQixJQUFJLEVBQUUsVUFBVTtZQUNoQixNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUssS0FBSyxDQUFDLFFBQVEsY0FBVyxFQUFFO1lBQzlDLE9BQU8sRUFBRSxRQUFRLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUU7U0FDdEQsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUN6QyxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztnQkFDcEIsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFLLEtBQUssQ0FBQyxRQUFRLFdBQVEsRUFBRTtnQkFDM0MsT0FBTyxFQUFFLFFBQVEsS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRTthQUNuRCxDQUFDLENBQUM7U0FDSjtRQUNELElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztnQkFDcEIsSUFBSSxFQUFFLG1CQUFtQjtnQkFDekIsTUFBTSxFQUFFO29CQUNOLElBQUksRUFBSyxLQUFLLENBQUMsUUFBUSx1QkFBb0I7b0JBQzNDLFdBQVcsRUFBRTt3QkFDWCxJQUFJLEVBQUUsQ0FBQztxQkFDUjtpQkFDRjtnQkFDRCxPQUFPLEVBQUUsUUFBUSxLQUFLLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUU7YUFDL0QsQ0FBQyxDQUFDO1NBQ0o7UUFDRCxJQUFJLElBQUksQ0FBQyxlQUFlLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUU7WUFDdkQsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7Z0JBQ3BCLElBQUksRUFBRSxrQkFBa0I7Z0JBQ3hCLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBSyxLQUFLLENBQUMsUUFBUSxzQkFBbUIsRUFBRTtnQkFDdEQsT0FBTyxFQUFFLFFBQVEsS0FBSyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFO2FBQzlELENBQUMsQ0FBQztTQUNKO1FBQ0QsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO2dCQUNwQixJQUFJLEVBQUUsT0FBTztnQkFDYixNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUssS0FBSyxDQUFDLFFBQVEsV0FBUSxFQUFFO2dCQUMzQyxPQUFPLEVBQUUsUUFBUSxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFO2FBQ25ELENBQUMsQ0FBQztTQUNKO1FBQ0QsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO2dCQUNwQixJQUFJLEVBQUUsV0FBVztnQkFDakIsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFLLEtBQUssQ0FBQyxRQUFRLFVBQU8sRUFBRTtnQkFDMUMsT0FBTyxFQUFFLFFBQVEsS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRTthQUNsRCxDQUFDLENBQUM7U0FDSjtRQUVELE9BQU8sVUFBVSxDQUFDO0lBQ3BCLENBQUM7SUFDSCxvQkFBQztBQUFELENBQUMsQUF6REQsQ0FBbUMsVUFBVSxHQXlENUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgQXdFbnRpdGFOYXZEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKHBhcmFtKTogYW55IHtcbiAgICBpZiAoIXBhcmFtKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgeyBkYXRhIH0gPSBwYXJhbTtcbiAgICBjb25zdCB7IHNlbGVjdGVkIH0gPSBwYXJhbTtcbiAgICBjb25zdCBuYXZpZ2F0aW9uID0geyBpdGVtczogW10sIHBheWxvYWQ6ICdlbnRpdGEtbmF2JyB9O1xuXG4gICAgbmF2aWdhdGlvbi5pdGVtcy5wdXNoKHtcbiAgICAgIHRleHQ6ICdPVkVSVklFVycsXG4gICAgICBhbmNob3I6IHsgaHJlZjogYCR7cGFyYW0uYmFzZVBhdGh9L292ZXJ2aWV3YCB9LFxuICAgICAgY2xhc3Nlczogc2VsZWN0ZWQgPT09ICdvdmVydmlldycgPyAnaXMtc2VsZWN0ZWQnIDogJycsXG4gICAgfSk7XG4gICAgaWYgKGRhdGEuZmllbGRzICYmIGRhdGEuZmllbGRzLmxlbmd0aCA+IDApIHtcbiAgICAgIG5hdmlnYXRpb24uaXRlbXMucHVzaCh7XG4gICAgICAgIHRleHQ6ICdDQU1QSScsXG4gICAgICAgIGFuY2hvcjogeyBocmVmOiBgJHtwYXJhbS5iYXNlUGF0aH0vY2FtcGlgIH0sXG4gICAgICAgIGNsYXNzZXM6IHNlbGVjdGVkID09PSAnY2FtcGknID8gJ2lzLXNlbGVjdGVkJyA6ICcnLFxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChkYXRhLnJlbGF0ZWRJdGVtcykge1xuICAgICAgbmF2aWdhdGlvbi5pdGVtcy5wdXNoKHtcbiAgICAgICAgdGV4dDogJ09HR0VUVEkgQ09MTEVHQVRJJyxcbiAgICAgICAgYW5jaG9yOiB7XG4gICAgICAgICAgaHJlZjogYCR7cGFyYW0uYmFzZVBhdGh9L29nZ2V0dGktY29sbGVnYXRpYCxcbiAgICAgICAgICBxdWVyeVBhcmFtczoge1xuICAgICAgICAgICAgcGFnZTogMSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBjbGFzc2VzOiBzZWxlY3RlZCA9PT0gJ29nZ2V0dGktY29sbGVnYXRpJyA/ICdpcy1zZWxlY3RlZCcgOiAnJyxcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoZGF0YS5yZWxhdGVkRW50aXRpZXMgJiYgdGhpcy5vcHRpb25zLmJ1YmJsZXNFbmFibGVkKSB7XG4gICAgICBuYXZpZ2F0aW9uLml0ZW1zLnB1c2goe1xuICAgICAgICB0ZXh0OiAnRU5USVTDgCBDT0xMRUdBVEUnLFxuICAgICAgICBhbmNob3I6IHsgaHJlZjogYCR7cGFyYW0uYmFzZVBhdGh9L2VudGl0YS1jb2xsZWdhdGVgIH0sXG4gICAgICAgIGNsYXNzZXM6IHNlbGVjdGVkID09PSAnZW50aXRhLWNvbGxlZ2F0ZScgPyAnaXMtc2VsZWN0ZWQnIDogJycsXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGRhdGEuZXh0cmFUYWIpIHtcbiAgICAgIG5hdmlnYXRpb24uaXRlbXMucHVzaCh7XG4gICAgICAgIHRleHQ6ICdNQVhYSScsXG4gICAgICAgIGFuY2hvcjogeyBocmVmOiBgJHtwYXJhbS5iYXNlUGF0aH0vbWF4eGlgIH0sXG4gICAgICAgIGNsYXNzZXM6IHNlbGVjdGVkID09PSAnbWF4eGknID8gJ2lzLXNlbGVjdGVkJyA6ICcnLFxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChkYXRhLndpa2lUYWIpIHtcbiAgICAgIG5hdmlnYXRpb24uaXRlbXMucHVzaCh7XG4gICAgICAgIHRleHQ6ICdXSUtJUEVESUEnLFxuICAgICAgICBhbmNob3I6IHsgaHJlZjogYCR7cGFyYW0uYmFzZVBhdGh9L3dpa2lgIH0sXG4gICAgICAgIGNsYXNzZXM6IHNlbGVjdGVkID09PSAnd2lraScgPyAnaXMtc2VsZWN0ZWQnIDogJycsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmF2aWdhdGlvbjtcbiAgfVxufVxuIl19