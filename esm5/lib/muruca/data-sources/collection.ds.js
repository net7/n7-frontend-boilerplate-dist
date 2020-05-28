/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DataSource } from '@n7-frontend/core';
var MrCollectionDS = /** @class */ (function (_super) {
    tslib_1.__extends(MrCollectionDS, _super);
    function MrCollectionDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    MrCollectionDS.prototype.transform = /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    function (data) {
        if (data === undefined) {
            return null;
        }
        var header = data.header, items = data.items;
        var classes = this.options.classes;
        return {
            header: {
                title: {
                    main: {
                        text: header.title,
                        classes: 'bold'
                    },
                    secondary: {
                        text: header.subtitle,
                        classes: 'italic'
                    }
                },
                actions: {
                    buttons: [
                        {
                            text: header.button.text,
                            payload: header.button.link,
                        }
                    ]
                }
            },
            items: items.map((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return (tslib_1.__assign({}, item, { classes: classes || '' })); }))
        };
    };
    return MrCollectionDS;
}(DataSource));
export { MrCollectionDS };
if (false) {
    /** @type {?} */
    MrCollectionDS.prototype.id;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGVjdGlvbi5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvZGF0YS1zb3VyY2VzL2NvbGxlY3Rpb24uZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFL0M7SUFBb0MsMENBQVU7SUFBOUM7O0lBaUNBLENBQUM7Ozs7OztJQTlCVyxrQ0FBUzs7Ozs7SUFBbkIsVUFBb0IsSUFBUztRQUMzQixJQUFJLElBQUksS0FBSyxTQUFTLEVBQUU7WUFBRSxPQUFPLElBQUksQ0FBQztTQUFFO1FBRWhDLElBQUEsb0JBQU0sRUFBRSxrQkFBSztRQUNiLElBQUEsOEJBQU87UUFFZixPQUFPO1lBQ0wsTUFBTSxFQUFFO2dCQUNOLEtBQUssRUFBRTtvQkFDTCxJQUFJLEVBQUU7d0JBQ0osSUFBSSxFQUFFLE1BQU0sQ0FBQyxLQUFLO3dCQUNsQixPQUFPLEVBQUUsTUFBTTtxQkFDaEI7b0JBQ0QsU0FBUyxFQUFFO3dCQUNULElBQUksRUFBRSxNQUFNLENBQUMsUUFBUTt3QkFDckIsT0FBTyxFQUFFLFFBQVE7cUJBQ2xCO2lCQUNGO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxPQUFPLEVBQUU7d0JBQ1A7NEJBQ0UsSUFBSSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSTs0QkFDeEIsT0FBTyxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSTt5QkFDNUI7cUJBQ0Y7aUJBQ0Y7YUFDRjtZQUNELEtBQUssRUFBRSxLQUFLLENBQUMsR0FBRzs7OztZQUFDLFVBQUMsSUFBSSxJQUFLLE9BQUEsc0JBQU0sSUFBSSxJQUFFLE9BQU8sRUFBRSxPQUFPLElBQUksRUFBRSxJQUFHLEVBQXJDLENBQXFDLEVBQUM7U0FDbEUsQ0FBQztJQUNKLENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUFqQ0QsQ0FBb0MsVUFBVSxHQWlDN0M7Ozs7SUFoQ0MsNEJBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgTXJDb2xsZWN0aW9uRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgaWQ6IHN0cmluZztcblxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGE6IGFueSk6IGFueSB7XG4gICAgaWYgKGRhdGEgPT09IHVuZGVmaW5lZCkgeyByZXR1cm4gbnVsbDsgfVxuXG4gICAgY29uc3QgeyBoZWFkZXIsIGl0ZW1zIH0gPSBkYXRhO1xuICAgIGNvbnN0IHsgY2xhc3NlcyB9ID0gdGhpcy5vcHRpb25zO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGhlYWRlcjoge1xuICAgICAgICB0aXRsZToge1xuICAgICAgICAgIG1haW46IHtcbiAgICAgICAgICAgIHRleHQ6IGhlYWRlci50aXRsZSxcbiAgICAgICAgICAgIGNsYXNzZXM6ICdib2xkJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgc2Vjb25kYXJ5OiB7XG4gICAgICAgICAgICB0ZXh0OiBoZWFkZXIuc3VidGl0bGUsXG4gICAgICAgICAgICBjbGFzc2VzOiAnaXRhbGljJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgYWN0aW9uczoge1xuICAgICAgICAgIGJ1dHRvbnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogaGVhZGVyLmJ1dHRvbi50ZXh0LFxuICAgICAgICAgICAgICBwYXlsb2FkOiBoZWFkZXIuYnV0dG9uLmxpbmssXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgaXRlbXM6IGl0ZW1zLm1hcCgoaXRlbSkgPT4gKHsgLi4uaXRlbSwgY2xhc3NlczogY2xhc3NlcyB8fCAnJyB9KSlcbiAgICB9O1xuICB9XG59XG4iXX0=