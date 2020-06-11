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
            return null;
        }
        var data = param.data;
        var selected = param.selected;
        /** @type {?} */
        var navigation = { items: [], payload: 'entita-nav' };
        var hasMetadataFields = this.options.hasMetadataFields;
        navigation.items.push({
            text: 'OVERVIEW',
            anchor: { href: param.basePath + "/overview" },
            classes: selected === 'overview' ? 'is-selected' : '',
        });
        if (hasMetadataFields) {
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
        // one tab control
        if (navigation.items.length === 2) {
            navigation.items.shift();
        }
        return navigation;
    };
    return AwEntitaNavDS;
}(DataSource));
export { AwEntitaNavDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXRhLW5hdi5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvZW50aXRhLW5hdi5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUUvQztJQUFtQyx5Q0FBVTtJQUE3Qzs7SUErREEsQ0FBQzs7Ozs7O0lBOURXLGlDQUFTOzs7OztJQUFuQixVQUFvQixLQUFLO1FBQ3ZCLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDVixPQUFPLElBQUksQ0FBQztTQUNiO1FBQ08sSUFBQSxpQkFBSTtRQUNKLElBQUEseUJBQVE7O1lBQ1YsVUFBVSxHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFO1FBQy9DLElBQUEsa0RBQWlCO1FBRXpCLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1lBQ3BCLElBQUksRUFBRSxVQUFVO1lBQ2hCLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBSyxLQUFLLENBQUMsUUFBUSxjQUFXLEVBQUU7WUFDOUMsT0FBTyxFQUFFLFFBQVEsS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRTtTQUN0RCxDQUFDLENBQUM7UUFDSCxJQUFJLGlCQUFpQixFQUFFO1lBQ3JCLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO2dCQUNwQixJQUFJLEVBQUUsT0FBTztnQkFDYixNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUssS0FBSyxDQUFDLFFBQVEsV0FBUSxFQUFFO2dCQUMzQyxPQUFPLEVBQUUsUUFBUSxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFO2FBQ25ELENBQUMsQ0FBQztTQUNKO1FBQ0QsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO2dCQUNwQixJQUFJLEVBQUUsbUJBQW1CO2dCQUN6QixNQUFNLEVBQUU7b0JBQ04sSUFBSSxFQUFLLEtBQUssQ0FBQyxRQUFRLHVCQUFvQjtvQkFDM0MsV0FBVyxFQUFFO3dCQUNYLElBQUksRUFBRSxDQUFDO3FCQUNSO2lCQUNGO2dCQUNELE9BQU8sRUFBRSxRQUFRLEtBQUssbUJBQW1CLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRTthQUMvRCxDQUFDLENBQUM7U0FDSjtRQUNELElBQUksSUFBSSxDQUFDLGVBQWUsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRTtZQUN2RCxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztnQkFDcEIsSUFBSSxFQUFFLGtCQUFrQjtnQkFDeEIsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFLLEtBQUssQ0FBQyxRQUFRLHNCQUFtQixFQUFFO2dCQUN0RCxPQUFPLEVBQUUsUUFBUSxLQUFLLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUU7YUFDOUQsQ0FBQyxDQUFDO1NBQ0o7UUFDRCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7Z0JBQ3BCLElBQUksRUFBRSxPQUFPO2dCQUNiLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBSyxLQUFLLENBQUMsUUFBUSxXQUFRLEVBQUU7Z0JBQzNDLE9BQU8sRUFBRSxRQUFRLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUU7YUFDbkQsQ0FBQyxDQUFDO1NBQ0o7UUFDRCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7Z0JBQ3BCLElBQUksRUFBRSxXQUFXO2dCQUNqQixNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUssS0FBSyxDQUFDLFFBQVEsVUFBTyxFQUFFO2dCQUMxQyxPQUFPLEVBQUUsUUFBUSxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFO2FBQ2xELENBQUMsQ0FBQztTQUNKO1FBRUQsa0JBQWtCO1FBQ2xCLElBQUksVUFBVSxDQUFDLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ2pDLFVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDMUI7UUFFRCxPQUFPLFVBQVUsQ0FBQztJQUNwQixDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQUFDLEFBL0RELENBQW1DLFVBQVUsR0ErRDVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIEF3RW50aXRhTmF2RFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShwYXJhbSk6IGFueSB7XG4gICAgaWYgKCFwYXJhbSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IHsgZGF0YSB9ID0gcGFyYW07XG4gICAgY29uc3QgeyBzZWxlY3RlZCB9ID0gcGFyYW07XG4gICAgY29uc3QgbmF2aWdhdGlvbiA9IHsgaXRlbXM6IFtdLCBwYXlsb2FkOiAnZW50aXRhLW5hdicgfTtcbiAgICBjb25zdCB7IGhhc01ldGFkYXRhRmllbGRzIH0gPSB0aGlzLm9wdGlvbnM7XG5cbiAgICBuYXZpZ2F0aW9uLml0ZW1zLnB1c2goe1xuICAgICAgdGV4dDogJ09WRVJWSUVXJyxcbiAgICAgIGFuY2hvcjogeyBocmVmOiBgJHtwYXJhbS5iYXNlUGF0aH0vb3ZlcnZpZXdgIH0sXG4gICAgICBjbGFzc2VzOiBzZWxlY3RlZCA9PT0gJ292ZXJ2aWV3JyA/ICdpcy1zZWxlY3RlZCcgOiAnJyxcbiAgICB9KTtcbiAgICBpZiAoaGFzTWV0YWRhdGFGaWVsZHMpIHtcbiAgICAgIG5hdmlnYXRpb24uaXRlbXMucHVzaCh7XG4gICAgICAgIHRleHQ6ICdDQU1QSScsXG4gICAgICAgIGFuY2hvcjogeyBocmVmOiBgJHtwYXJhbS5iYXNlUGF0aH0vY2FtcGlgIH0sXG4gICAgICAgIGNsYXNzZXM6IHNlbGVjdGVkID09PSAnY2FtcGknID8gJ2lzLXNlbGVjdGVkJyA6ICcnLFxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChkYXRhLnJlbGF0ZWRJdGVtcykge1xuICAgICAgbmF2aWdhdGlvbi5pdGVtcy5wdXNoKHtcbiAgICAgICAgdGV4dDogJ09HR0VUVEkgQ09MTEVHQVRJJyxcbiAgICAgICAgYW5jaG9yOiB7XG4gICAgICAgICAgaHJlZjogYCR7cGFyYW0uYmFzZVBhdGh9L29nZ2V0dGktY29sbGVnYXRpYCxcbiAgICAgICAgICBxdWVyeVBhcmFtczoge1xuICAgICAgICAgICAgcGFnZTogMSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBjbGFzc2VzOiBzZWxlY3RlZCA9PT0gJ29nZ2V0dGktY29sbGVnYXRpJyA/ICdpcy1zZWxlY3RlZCcgOiAnJyxcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoZGF0YS5yZWxhdGVkRW50aXRpZXMgJiYgdGhpcy5vcHRpb25zLmJ1YmJsZXNFbmFibGVkKSB7XG4gICAgICBuYXZpZ2F0aW9uLml0ZW1zLnB1c2goe1xuICAgICAgICB0ZXh0OiAnRU5USVTDgCBDT0xMRUdBVEUnLFxuICAgICAgICBhbmNob3I6IHsgaHJlZjogYCR7cGFyYW0uYmFzZVBhdGh9L2VudGl0YS1jb2xsZWdhdGVgIH0sXG4gICAgICAgIGNsYXNzZXM6IHNlbGVjdGVkID09PSAnZW50aXRhLWNvbGxlZ2F0ZScgPyAnaXMtc2VsZWN0ZWQnIDogJycsXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGRhdGEuZXh0cmFUYWIpIHtcbiAgICAgIG5hdmlnYXRpb24uaXRlbXMucHVzaCh7XG4gICAgICAgIHRleHQ6ICdNQVhYSScsXG4gICAgICAgIGFuY2hvcjogeyBocmVmOiBgJHtwYXJhbS5iYXNlUGF0aH0vbWF4eGlgIH0sXG4gICAgICAgIGNsYXNzZXM6IHNlbGVjdGVkID09PSAnbWF4eGknID8gJ2lzLXNlbGVjdGVkJyA6ICcnLFxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChkYXRhLndpa2lUYWIpIHtcbiAgICAgIG5hdmlnYXRpb24uaXRlbXMucHVzaCh7XG4gICAgICAgIHRleHQ6ICdXSUtJUEVESUEnLFxuICAgICAgICBhbmNob3I6IHsgaHJlZjogYCR7cGFyYW0uYmFzZVBhdGh9L3dpa2lgIH0sXG4gICAgICAgIGNsYXNzZXM6IHNlbGVjdGVkID09PSAnd2lraScgPyAnaXMtc2VsZWN0ZWQnIDogJycsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBvbmUgdGFiIGNvbnRyb2xcbiAgICBpZiAobmF2aWdhdGlvbi5pdGVtcy5sZW5ndGggPT09IDIpIHtcbiAgICAgIG5hdmlnYXRpb24uaXRlbXMuc2hpZnQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmF2aWdhdGlvbjtcbiAgfVxufVxuIl19