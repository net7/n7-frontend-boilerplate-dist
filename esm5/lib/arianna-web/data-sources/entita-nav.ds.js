/**
 * @fileoverview added by tsickle
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXRhLW5hdi5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvZW50aXRhLW5hdi5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUUvQztJQUFtQyx5Q0FBVTtJQUE3Qzs7SUEwREEsQ0FBQzs7Ozs7O0lBeERXLGlDQUFTOzs7OztJQUFuQixVQUFvQixLQUFLO1FBQ3ZCLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDVixPQUFPO1NBQ1I7O1lBQ0ssSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJOztZQUNqQixRQUFRLEdBQUcsS0FBSyxDQUFDLFFBQVE7O1lBQ3pCLFVBQVUsR0FBRyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRTtRQUV2RCxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztZQUNwQixJQUFJLEVBQUUsVUFBVTtZQUNoQixNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLFFBQVEsR0FBRyxXQUFXLEVBQUU7WUFDOUMsT0FBTyxFQUFFLFFBQVEsS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRTtTQUN0RCxDQUFDLENBQUM7UUFDSCxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3pDLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO2dCQUNwQixJQUFJLEVBQUUsT0FBTztnQkFDYixNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLFFBQVEsR0FBRyxRQUFRLEVBQUU7Z0JBQzNDLE9BQU8sRUFBRSxRQUFRLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUU7YUFDbkQsQ0FBQyxDQUFDO1NBQ0o7UUFDRCxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7Z0JBQ3BCLElBQUksRUFBRSxtQkFBbUI7Z0JBQ3pCLE1BQU0sRUFBRTtvQkFDTixJQUFJLEVBQUUsS0FBSyxDQUFDLFFBQVEsR0FBRyxvQkFBb0I7b0JBQzNDLFdBQVcsRUFBRTt3QkFDWCxJQUFJLEVBQUUsQ0FBQztxQkFDUjtpQkFDRjtnQkFDRCxPQUFPLEVBQUUsUUFBUSxLQUFLLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUU7YUFDL0QsQ0FBQyxDQUFDO1NBQ0o7UUFDRCxJQUFJLElBQUksQ0FBQyxlQUFlLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFO1lBQzFELFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO2dCQUNwQixJQUFJLEVBQUUsa0JBQWtCO2dCQUN4QixNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLFFBQVEsR0FBRyxtQkFBbUIsRUFBRTtnQkFDdEQsT0FBTyxFQUFFLFFBQVEsS0FBSyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFO2FBQzlELENBQUMsQ0FBQztTQUNKO1FBQ0QsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO2dCQUNwQixJQUFJLEVBQUUsT0FBTztnQkFDYixNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLFFBQVEsR0FBRyxRQUFRLEVBQUU7Z0JBQzNDLE9BQU8sRUFBRSxRQUFRLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUU7YUFDbkQsQ0FBQyxDQUFDO1NBQ0o7UUFDRCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7Z0JBQ3BCLElBQUksRUFBRSxXQUFXO2dCQUNqQixNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLFFBQVEsR0FBRyxPQUFPLEVBQUU7Z0JBQzFDLE9BQU8sRUFBRSxRQUFRLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUU7YUFDbEQsQ0FBQyxDQUFDO1NBQ0o7UUFFRCxPQUFPLFVBQVUsQ0FBQztJQUNwQixDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQUFDLEFBMURELENBQW1DLFVBQVUsR0EwRDVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIEF3RW50aXRhTmF2RFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcblxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKHBhcmFtKSB7XG4gICAgaWYgKCFwYXJhbSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBkYXRhID0gcGFyYW0uZGF0YTtcbiAgICBjb25zdCBzZWxlY3RlZCA9IHBhcmFtLnNlbGVjdGVkO1xuICAgIGNvbnN0IG5hdmlnYXRpb24gPSB7IGl0ZW1zOiBbXSwgcGF5bG9hZDogJ2VudGl0YS1uYXYnIH1cblxuICAgIG5hdmlnYXRpb24uaXRlbXMucHVzaCh7XG4gICAgICB0ZXh0OiAnT1ZFUlZJRVcnLFxuICAgICAgYW5jaG9yOiB7IGhyZWY6IHBhcmFtLmJhc2VQYXRoICsgJy9vdmVydmlldycgfSxcbiAgICAgIGNsYXNzZXM6IHNlbGVjdGVkID09PSAnb3ZlcnZpZXcnID8gJ2lzLXNlbGVjdGVkJyA6ICcnXG4gICAgfSk7XG4gICAgaWYgKGRhdGEuZmllbGRzICYmIGRhdGEuZmllbGRzLmxlbmd0aCA+IDApIHtcbiAgICAgIG5hdmlnYXRpb24uaXRlbXMucHVzaCh7XG4gICAgICAgIHRleHQ6ICdDQU1QSScsXG4gICAgICAgIGFuY2hvcjogeyBocmVmOiBwYXJhbS5iYXNlUGF0aCArICcvY2FtcGknIH0sXG4gICAgICAgIGNsYXNzZXM6IHNlbGVjdGVkID09PSAnY2FtcGknID8gJ2lzLXNlbGVjdGVkJyA6ICcnXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGRhdGEucmVsYXRlZEl0ZW1zKSB7XG4gICAgICBuYXZpZ2F0aW9uLml0ZW1zLnB1c2goe1xuICAgICAgICB0ZXh0OiAnT0dHRVRUSSBDT0xMRUdBVEknLFxuICAgICAgICBhbmNob3I6IHtcbiAgICAgICAgICBocmVmOiBwYXJhbS5iYXNlUGF0aCArICcvb2dnZXR0aS1jb2xsZWdhdGknLFxuICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7XG4gICAgICAgICAgICBwYWdlOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjbGFzc2VzOiBzZWxlY3RlZCA9PT0gJ29nZ2V0dGktY29sbGVnYXRpJyA/ICdpcy1zZWxlY3RlZCcgOiAnJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChkYXRhLnJlbGF0ZWRFbnRpdGllcyAmJiB0aGlzLm9wdGlvbnNbJ2J1YmJsZXNFbmFibGVkJ10pIHtcbiAgICAgIG5hdmlnYXRpb24uaXRlbXMucHVzaCh7XG4gICAgICAgIHRleHQ6ICdFTlRJVMOAIENPTExFR0FURScsXG4gICAgICAgIGFuY2hvcjogeyBocmVmOiBwYXJhbS5iYXNlUGF0aCArICcvZW50aXRhLWNvbGxlZ2F0ZScgfSxcbiAgICAgICAgY2xhc3Nlczogc2VsZWN0ZWQgPT09ICdlbnRpdGEtY29sbGVnYXRlJyA/ICdpcy1zZWxlY3RlZCcgOiAnJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChkYXRhLmV4dHJhVGFiKSB7XG4gICAgICBuYXZpZ2F0aW9uLml0ZW1zLnB1c2goe1xuICAgICAgICB0ZXh0OiAnTUFYWEknLFxuICAgICAgICBhbmNob3I6IHsgaHJlZjogcGFyYW0uYmFzZVBhdGggKyAnL21heHhpJyB9LFxuICAgICAgICBjbGFzc2VzOiBzZWxlY3RlZCA9PT0gJ21heHhpJyA/ICdpcy1zZWxlY3RlZCcgOiAnJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChkYXRhLndpa2lUYWIpIHtcbiAgICAgIG5hdmlnYXRpb24uaXRlbXMucHVzaCh7XG4gICAgICAgIHRleHQ6ICdXSUtJUEVESUEnLFxuICAgICAgICBhbmNob3I6IHsgaHJlZjogcGFyYW0uYmFzZVBhdGggKyAnL3dpa2knIH0sXG4gICAgICAgIGNsYXNzZXM6IHNlbGVjdGVkID09PSAnd2lraScgPyAnaXMtc2VsZWN0ZWQnIDogJydcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBuYXZpZ2F0aW9uO1xuICB9XG59Il19