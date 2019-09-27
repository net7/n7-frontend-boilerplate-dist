/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DataSource } from '@n7-frontend/core';
var AwTreeDS = /** @class */ (function (_super) {
    tslib_1.__extends(AwTreeDS, _super);
    function AwTreeDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    AwTreeDS.prototype.toggleNav = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    AwTreeDS.prototype.transform = /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    function (data) {
        return data;
    };
    /**
     * @param {?} data
     * @param {?} parents
     * @param {?} id
     * @return {?}
     */
    AwTreeDS.prototype.updateTree = /**
     * @param {?} data
     * @param {?} parents
     * @param {?} id
     * @return {?}
     */
    function (data, parents, id) {
        var _this = this;
        if (!data) {
            data = this.output;
        }
        data.items.forEach((/**
         * @param {?} it
         * @return {?}
         */
        function (it) {
            if (it['_meta'] == id) {
                if (it['classes'] == "is-expanded") {
                    it['classes'] = "is-collapsed";
                }
                else {
                    it['classes'] = "is-expanded";
                }
            }
            else if (parents.indexOf(it['_meta']) >= 0) {
                it['classes'] = "is-expanded";
            }
            if (typeof it['items'] != "undefined" && it['items'].length > 0) {
                _this.updateTree(it, parents, id);
            }
        }));
        this.update(data);
    };
    /**
     * @param {?} id
     * @param {?} data
     * @return {?}
     */
    AwTreeDS.prototype.selectTreeItem = /**
     * @param {?} id
     * @param {?} data
     * @return {?}
     */
    function (id, data) {
        var _this = this;
        if (!data) {
            data = this.output;
        }
        data.items.forEach((/**
         * @param {?} it
         * @return {?}
         */
        function (it) {
            if (it['_meta'] == id) {
                it['classes'] = it['classes'] + " is-active";
                _this.currentItem = it;
            }
            else {
                /** @type {?} */
                var classes = it['classes'];
                it['classes'] = classes.replace("is-active", "");
            }
            if (typeof it['items'] != "undefined" && it['items'].length > 0) {
                _this.selectTreeItem(id, it);
            }
        }));
        this.update(data);
    };
    /**
     * @return {?}
     */
    AwTreeDS.prototype.toggleSidebar = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var sidebarData = this.output;
        if (sidebarData.classes == "is-expanded") {
            sidebarData.classes = "is-collapsed";
        }
        else {
            sidebarData.classes = "is-expanded";
        }
        this.update(sidebarData);
    };
    return AwTreeDS;
}(DataSource));
export { AwTreeDS };
if (false) {
    /** @type {?} */
    AwTreeDS.prototype.currentItem;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvdHJlZS5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUUvQztJQUE4QixvQ0FBVTtJQUF4Qzs7SUFnRUEsQ0FBQzs7OztJQTVEQyw0QkFBUzs7O0lBQVQ7SUFFQSxDQUFDOzs7Ozs7SUFFUyw0QkFBUzs7Ozs7SUFBbkIsVUFBb0IsSUFBSTtRQUN0QixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Ozs7Ozs7SUFFRCw2QkFBVTs7Ozs7O0lBQVYsVUFBVyxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUU7UUFBNUIsaUJBcUJDO1FBcEJDLElBQUssQ0FBQyxJQUFJLEVBQUc7WUFDWCxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUNwQjtRQUVELElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTzs7OztRQUFFLFVBQUMsRUFBRTtZQUNyQixJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUc7Z0JBQ3RCLElBQUssRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLGFBQWEsRUFBRztvQkFDcEMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLGNBQWMsQ0FBQztpQkFDaEM7cUJBQU07b0JBQ0wsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLGFBQWEsQ0FBQztpQkFDL0I7YUFDRjtpQkFDSSxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFFLElBQUksQ0FBQyxFQUFHO2dCQUMzQyxFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsYUFBYSxDQUFDO2FBQ2pDO1lBQ0QsSUFBSSxPQUFPLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxXQUFXLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUc7Z0JBQ2hFLEtBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQzthQUNsQztRQUNILENBQUMsRUFBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQixDQUFDOzs7Ozs7SUFFRCxpQ0FBYzs7Ozs7SUFBZCxVQUFlLEVBQUUsRUFBRSxJQUFJO1FBQXZCLGlCQWtCQztRQWpCQyxJQUFLLENBQUMsSUFBSSxFQUFHO1lBQ1gsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7U0FDcEI7UUFFRCxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU87Ozs7UUFBRSxVQUFDLEVBQUU7WUFDbkIsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxFQUFHO2dCQUNwQixFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLFlBQVksQ0FBQztnQkFDN0MsS0FBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7YUFDekI7aUJBQU07O29CQUNELE9BQU8sR0FBRyxFQUFFLENBQUMsU0FBUyxDQUFDO2dCQUMzQixFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUM7YUFDbEQ7WUFDRCxJQUFJLE9BQU8sRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLFdBQVcsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRztnQkFDaEUsS0FBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7YUFDN0I7UUFDTCxDQUFDLEVBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEIsQ0FBQzs7OztJQUVELGdDQUFhOzs7SUFBYjs7WUFDTSxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU07UUFDN0IsSUFBSyxXQUFXLENBQUMsT0FBTyxJQUFJLGFBQWEsRUFBRztZQUMxQyxXQUFXLENBQUMsT0FBTyxHQUFHLGNBQWMsQ0FBQztTQUN0QzthQUFNO1lBQ0gsV0FBVyxDQUFDLE9BQU8sR0FBRyxhQUFhLENBQUM7U0FDdkM7UUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFDSCxlQUFDO0FBQUQsQ0FBQyxBQWhFRCxDQUE4QixVQUFVLEdBZ0V2Qzs7OztJQTlEQywrQkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgQXdUcmVlRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcblxuICBwdWJsaWMgY3VycmVudEl0ZW06IHN0cmluZztcblxuICB0b2dnbGVOYXYoKSB7XG4gICAgXG4gIH1cblxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpIHsgICAgIFxuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgdXBkYXRlVHJlZShkYXRhLCBwYXJlbnRzLCBpZCl7IFxuICAgIGlmICggIWRhdGEgKSB7XG4gICAgICBkYXRhID0gdGhpcy5vdXRwdXQ7ICAgIFxuICAgIH1cbiAgICBcbiAgICBkYXRhLml0ZW1zLmZvckVhY2goIChpdCkgPT4geyAgICBcbiAgICAgIGlmKCBpdFsnX21ldGEnXSA9PSBpZCApIHsgICAgICBcbiAgICAgICAgaWYgKCBpdFsnY2xhc3NlcyddID09IFwiaXMtZXhwYW5kZWRcIiApIHtcbiAgICAgICAgICBpdFsnY2xhc3NlcyddID0gXCJpcy1jb2xsYXBzZWRcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdFsnY2xhc3NlcyddID0gXCJpcy1leHBhbmRlZFwiO1xuICAgICAgICB9ICBcbiAgICAgIH0gICAgXG4gICAgICBlbHNlIGlmKCBwYXJlbnRzLmluZGV4T2YoIGl0WydfbWV0YSddICkgPj0gMCApIHsgICAgICAgICAgXG4gICAgICAgICAgaXRbJ2NsYXNzZXMnXSA9IFwiaXMtZXhwYW5kZWRcIjtcbiAgICAgIH1cbiAgICAgIGlmKCB0eXBlb2YgaXRbJ2l0ZW1zJ10gIT0gXCJ1bmRlZmluZWRcIiAmJiBpdFsnaXRlbXMnXS5sZW5ndGggPiAwICkgeyAgICAgICAgICAgIFxuICAgICAgICB0aGlzLnVwZGF0ZVRyZWUoaXQsIHBhcmVudHMsIGlkKTsgICAgICAgICAgICBcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnVwZGF0ZShkYXRhKTtcbiAgfVxuXG4gIHNlbGVjdFRyZWVJdGVtKGlkLCBkYXRhKXtcbiAgICBpZiAoICFkYXRhICkge1xuICAgICAgZGF0YSA9IHRoaXMub3V0cHV0OyAgICBcbiAgICB9XG5cbiAgICBkYXRhLml0ZW1zLmZvckVhY2goIChpdCkgPT4ge1xuICAgICAgICBpZiggaXRbJ19tZXRhJ10gPT0gaWQgKSB7XG4gICAgICAgICAgICBpdFsnY2xhc3NlcyddID0gaXRbJ2NsYXNzZXMnXSArIFwiIGlzLWFjdGl2ZVwiO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50SXRlbSA9IGl0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxldCBjbGFzc2VzID0gaXRbJ2NsYXNzZXMnXTtcbiAgICAgICAgICBpdFsnY2xhc3NlcyddID0gY2xhc3Nlcy5yZXBsYWNlKFwiaXMtYWN0aXZlXCIsIFwiXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmKCB0eXBlb2YgaXRbJ2l0ZW1zJ10gIT0gXCJ1bmRlZmluZWRcIiAmJiBpdFsnaXRlbXMnXS5sZW5ndGggPiAwICkgeyAgICAgICAgICAgIFxuICAgICAgICAgIHRoaXMuc2VsZWN0VHJlZUl0ZW0oaWQsIGl0KTsgICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMudXBkYXRlKGRhdGEpO1xuICB9XG5cbiAgdG9nZ2xlU2lkZWJhcigpIHtcbiAgICBsZXQgc2lkZWJhckRhdGEgPSB0aGlzLm91dHB1dDsgICAgXG4gICAgaWYgKCBzaWRlYmFyRGF0YS5jbGFzc2VzID09IFwiaXMtZXhwYW5kZWRcIiApIHtcbiAgICAgIHNpZGViYXJEYXRhLmNsYXNzZXMgPSBcImlzLWNvbGxhcHNlZFwiO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHNpZGViYXJEYXRhLmNsYXNzZXMgPSBcImlzLWV4cGFuZGVkXCI7XG4gICAgfSAgICBcbiAgICB0aGlzLnVwZGF0ZShzaWRlYmFyRGF0YSk7XG4gIH1cbn0iXX0=