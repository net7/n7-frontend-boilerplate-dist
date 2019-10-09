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
            /** @type {?} */
            var classes = it['classes'];
            if (it['_meta'] == id) {
                if (classes.indexOf("is-expanded") > -1) {
                    it['classes'] = classes.replace(/is-expanded/g, "is-collapsed");
                }
                else {
                    it['classes'] = classes.replace(/is-collapsed/g, "is-expanded");
                }
            }
            else if (parents.indexOf(it['_meta']) >= 0) {
                it['classes'] = classes + ' is-expanded';
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
            if (it['_meta'] == id && it['classes'].indexOf('is-active') < 0) {
                it['classes'] = it['classes'] + ' is-active';
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
    /**
     * @private
     * @param {?} data
     * @return {?}
     */
    AwTreeDS.prototype.parseData = /**
     * @private
     * @param {?} data
     * @return {?}
     */
    function (data) {
        var _this = this;
        /** @type {?} */
        var treeObj = {
            items: []
        };
        if (data['branches']) {
            data['branches'].forEach((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                treeObj['items'].push(_this.parseTree(item, false, []));
            }));
        }
        this.update(treeObj);
    };
    /**
     * @private
     * @param {?} data
     * @param {?} toggle
     * @param {?} parents
     * @return {?}
     */
    AwTreeDS.prototype.parseTree = /**
     * @private
     * @param {?} data
     * @param {?} toggle
     * @param {?} parents
     * @return {?}
     */
    function (data, toggle, parents) {
        var _this = this;
        /** @type {?} */
        var currParents = tslib_1.__spread(parents);
        /** @type {?} */
        var treeItem = {};
        /** @type {?} */
        var showToggle = toggle && data['branches'] != null;
        if (showToggle) {
            treeItem['toggle'] = {
                icon: 'n7-icon-angle-right',
                payload: {
                    source: "toggle",
                    id: data['id'],
                    parents: currParents,
                }
            };
        }
        Object.keys(data).forEach((/**
         * @param {?} key
         * @return {?}
         */
        function (key) {
            if (key != "branches") {
                switch (key) {
                    case "label":
                        treeItem['text'] = data[key];
                        break;
                    case "icon":
                        if (showToggle && data[key] != null) {
                            treeItem['toggle']['icon'] = data[key];
                        }
                        else {
                            treeItem['icon'] = data[key];
                        }
                        break;
                    case "id":
                        treeItem['_meta'] = data[key];
                        treeItem['payload'] = {
                            source: "menuItem",
                            id: data['id']
                        };
                        break;
                    default:
                        data[key];
                        break;
                }
                treeItem['classes'] = 'is-collapsed';
            }
            else if (data['branches'] != null) {
                currParents.push(data['id']);
                /*Handle cases with menu item with children but without toggle*/
                if (!toggle) {
                    treeItem['payload']['source'] = "ToggleMenuItem";
                    treeItem['payload']['parents'] = currParents;
                }
                treeItem['items'] = [];
                data[key].forEach((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) {
                    treeItem['items'].push(_this.parseTree(item, true, currParents));
                }));
            }
        }));
        return treeItem;
    };
    return AwTreeDS;
}(DataSource));
export { AwTreeDS };
if (false) {
    /** @type {?} */
    AwTreeDS.prototype.currentItem;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvdHJlZS5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUUvQztJQUE4QixvQ0FBVTtJQUF4Qzs7SUFtSUEsQ0FBQzs7OztJQS9IQyw0QkFBUzs7O0lBQVQ7SUFFQSxDQUFDOzs7Ozs7SUFFUyw0QkFBUzs7Ozs7SUFBbkIsVUFBb0IsSUFBSTtRQUN0QixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Ozs7Ozs7SUFFRCw2QkFBVTs7Ozs7O0lBQVYsVUFBVyxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUU7UUFBNUIsaUJBcUJDO1FBcEJDLElBQUssQ0FBQyxJQUFJLEVBQUc7WUFDWCxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUNwQjtRQUVELElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTzs7OztRQUFFLFVBQUMsRUFBRTs7Z0JBQ2YsT0FBTyxHQUFHLEVBQUUsQ0FBQyxTQUFTLENBQUM7WUFDN0IsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxFQUFHO2dCQUN0QixJQUFLLE9BQU8sQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUc7b0JBQ3pDLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxjQUFjLENBQUMsQ0FBQztpQkFDakU7cUJBQU07b0JBQ0wsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsZUFBZSxFQUFFLGFBQWEsQ0FBQyxDQUFDO2lCQUNqRTthQUNGO2lCQUFNLElBQUssT0FBTyxDQUFDLE9BQU8sQ0FBRSxFQUFFLENBQUMsT0FBTyxDQUFDLENB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QUFTLENBQUMsR0FBRyxjQUFjLENBQUM7YUFDdEM7aUJBQ0ksSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksSUFBSSxFQUFHO2dCQUNsQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUU3QixnRUFBZ0U7Z0JBQ2hFLElBQUksQ0FBQyxNQUFNLEVBQUc7b0JBQ1osUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLGdCQUFnQixDQUFDO29CQUNqRCxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsV0FBVyxDQUFDO2lCQUM5QztnQkFFRCxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDO2dCQUN2QixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTzs7OztnQkFBRSxVQUFBLElBQUk7b0JBQ3JCLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUUsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLFdBQVcsQ0FBQyxDQUFFLENBQUM7Z0JBQ3BFLENBQUMsRUFBQyxDQUFBO2FBQ0g7UUFDRCxDQUFDLEVBQUMsQ0FBQTtRQUNGLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFSCxlQUFDO0FBQUQsQ0FBQyxBQW5JRCxDQUE4QixVQUFVLEdBbUl2Qzs7OztJQWpJQywrQkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgQXdUcmVlRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcblxuICBwdWJsaWMgY3VycmVudEl0ZW06IHN0cmluZztcblxuICB0b2dnbGVOYXYoKSB7XG5cbiAgfVxuXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSkge1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgdXBkYXRlVHJlZShkYXRhLCBwYXJlbnRzLCBpZCl7XG4gICAgaWYgKCAhZGF0YSApIHtcbiAgICAgIGRhdGEgPSB0aGlzLm91dHB1dDtcbiAgICB9XG5cbiAgICBkYXRhLml0ZW1zLmZvckVhY2goIChpdCkgPT4ge1xuICAgICAgY29uc3QgY2xhc3NlcyA9IGl0WydjbGFzc2VzJ107XG4gICAgICBpZiggaXRbJ19tZXRhJ10gPT0gaWQgKSB7XG4gICAgICAgIGlmICggY2xhc3Nlcy5pbmRleE9mKFwiaXMtZXhwYW5kZWRcIikgPiAtMSApIHtcbiAgICAgICAgICBpdFsnY2xhc3NlcyddID0gY2xhc3Nlcy5yZXBsYWNlKC9pcy1leHBhbmRlZC9nLCBcImlzLWNvbGxhcHNlZFwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdFsnY2xhc3NlcyddID0gY2xhc3Nlcy5yZXBsYWNlKC9pcy1jb2xsYXBzZWQvZywgXCJpcy1leHBhbmRlZFwiKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICggcGFyZW50cy5pbmRleE9mKCBpdFsnX21ldGEnXSApID49IDAgKSB7XG4gICAgICAgICAgaXRbJ2NsYXNzZXMnXSA9IGNsYXNzZXMgKyAnIGlzLWV4cGFuZGVkJztcbiAgICAgIH1cbiAgICAgIGlmKCB0eXBlb2YgaXRbJ2l0ZW1zJ10gIT0gXCJ1bmRlZmluZWRcIiAmJiBpdFsnaXRlbXMnXS5sZW5ndGggPiAwICkge1xuICAgICAgICB0aGlzLnVwZGF0ZVRyZWUoaXQsIHBhcmVudHMsIGlkKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnVwZGF0ZShkYXRhKTtcbiAgfVxuXG4gIHNlbGVjdFRyZWVJdGVtKGlkLCBkYXRhKXtcbiAgICBpZiAoICFkYXRhICkge1xuICAgICAgZGF0YSA9IHRoaXMub3V0cHV0O1xuICAgIH1cblxuICAgIGRhdGEuaXRlbXMuZm9yRWFjaCggKGl0KSA9PiB7XG4gICAgICAgIGlmICggaXRbJ19tZXRhJ10gPT0gaWQgJiYgaXRbJ2NsYXNzZXMnXS5pbmRleE9mKCdpcy1hY3RpdmUnKSA8IDAgKSB7XG4gICAgICAgICAgICBpdFsnY2xhc3NlcyddID0gaXRbJ2NsYXNzZXMnXSArICcgaXMtYWN0aXZlJztcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEl0ZW0gPSBpdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBjbGFzc2VzID0gaXRbJ2NsYXNzZXMnXTtcbiAgICAgICAgICBpdFsnY2xhc3NlcyddID0gY2xhc3Nlcy5yZXBsYWNlKFwiaXMtYWN0aXZlXCIsIFwiXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmKCB0eXBlb2YgaXRbJ2l0ZW1zJ10gIT0gXCJ1bmRlZmluZWRcIiAmJiBpdFsnaXRlbXMnXS5sZW5ndGggPiAwICkge1xuICAgICAgICAgIHRoaXMuc2VsZWN0VHJlZUl0ZW0oaWQsIGl0KTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMudXBkYXRlKGRhdGEpO1xuICB9XG5cbiAgdG9nZ2xlU2lkZWJhcigpIHtcbiAgICBsZXQgc2lkZWJhckRhdGEgPSB0aGlzLm91dHB1dDtcbiAgICBpZiAoIHNpZGViYXJEYXRhLmNsYXNzZXMgPT0gXCJpcy1leHBhbmRlZFwiICkge1xuICAgICAgc2lkZWJhckRhdGEuY2xhc3NlcyA9IFwiaXMtY29sbGFwc2VkXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgc2lkZWJhckRhdGEuY2xhc3NlcyA9IFwiaXMtZXhwYW5kZWRcIjtcbiAgICB9XG4gICAgdGhpcy51cGRhdGUoc2lkZWJhckRhdGEpO1xuICB9XG5cbiAgcHJpdmF0ZSBwYXJzZURhdGEoZGF0YSkge1xuICAgIGxldCB0cmVlT2JqID0ge1xuICAgICAgaXRlbXM6IFtdXG4gICAgfTtcbiAgICBpZiggZGF0YVsnYnJhbmNoZXMnXSkge1xuICAgICAgZGF0YVsnYnJhbmNoZXMnXS5mb3JFYWNoKCBpdGVtID0+IHtcbiAgICAgICAgdHJlZU9ialsnaXRlbXMnXS5wdXNoKCB0aGlzLnBhcnNlVHJlZShpdGVtLCBmYWxzZSwgW10pICk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy51cGRhdGUodHJlZU9iaik7XG4gIH1cblxuICBwcml2YXRlIHBhcnNlVHJlZShkYXRhLCB0b2dnbGUsIHBhcmVudHMpIHtcbiAgICB2YXIgY3VyclBhcmVudHMgPSBbLi4ucGFyZW50c107XG4gICAgbGV0IHRyZWVJdGVtID0ge307XG4gICAgY29uc3Qgc2hvd1RvZ2dsZSA9ICB0b2dnbGUgJiYgZGF0YVsnYnJhbmNoZXMnXSAhPSBudWxsO1xuICAgIGlmKCBzaG93VG9nZ2xlICl7XG4gICAgICB0cmVlSXRlbVsndG9nZ2xlJ10gPSB7XG4gICAgICAgIGljb246ICduNy1pY29uLWFuZ2xlLXJpZ2h0JyxcbiAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgc291cmNlOiBcInRvZ2dsZVwiLFxuICAgICAgICAgICAgaWQ6IGRhdGFbJ2lkJ10sXG4gICAgICAgICAgICBwYXJlbnRzOiBjdXJyUGFyZW50cyxcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIE9iamVjdC5rZXlzKGRhdGEpLmZvckVhY2goIGtleSA9PiB7XG4gICAgaWYoIGtleSAhPSBcImJyYW5jaGVzXCIgKSB7XG4gICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICBjYXNlIFwibGFiZWxcIjogdHJlZUl0ZW1bJ3RleHQnXSA9IGRhdGFba2V5XTsgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJpY29uXCIgOlxuICAgICAgICAgICAgaWYgKHNob3dUb2dnbGUgJiYgZGF0YVtrZXldICE9IG51bGwpe1xuICAgICAgICAgICAgICB0cmVlSXRlbVsndG9nZ2xlJ11bJ2ljb24nXSA9IGRhdGFba2V5XTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRyZWVJdGVtWydpY29uJ10gPSBkYXRhW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImlkXCIgOlxuICAgICAgICAgICAgdHJlZUl0ZW1bJ19tZXRhJ10gPSAgZGF0YVtrZXldO1xuICAgICAgICAgICAgdHJlZUl0ZW1bJ3BheWxvYWQnXSA9IHtcbiAgICAgICAgICAgICAgc291cmNlOiBcIm1lbnVJdGVtXCIsXG4gICAgICAgICAgICAgIGlkOiBkYXRhWydpZCddXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQgOiAgZGF0YVtrZXldOyBicmVhaztcbiAgICAgIH1cbiAgICAgIHRyZWVJdGVtWydjbGFzc2VzJ10gPSAnaXMtY29sbGFwc2VkJztcbiAgICB9XG4gICAgZWxzZSBpZiggZGF0YVsnYnJhbmNoZXMnXSAhPSBudWxsICkge1xuICAgICAgY3VyclBhcmVudHMucHVzaChkYXRhWydpZCddKTtcblxuICAgICAgLypIYW5kbGUgY2FzZXMgd2l0aCBtZW51IGl0ZW0gd2l0aCBjaGlsZHJlbiBidXQgd2l0aG91dCB0b2dnbGUqL1xuICAgICAgaWYoICF0b2dnbGUgKSB7XG4gICAgICAgIHRyZWVJdGVtWydwYXlsb2FkJ11bJ3NvdXJjZSddID0gXCJUb2dnbGVNZW51SXRlbVwiO1xuICAgICAgICB0cmVlSXRlbVsncGF5bG9hZCddWydwYXJlbnRzJ10gPSBjdXJyUGFyZW50cztcbiAgICAgIH1cblxuICAgICAgdHJlZUl0ZW1bJ2l0ZW1zJ10gPSBbXTtcbiAgICAgIGRhdGFba2V5XS5mb3JFYWNoKCBpdGVtID0+IHtcbiAgICAgICAgdHJlZUl0ZW1bJ2l0ZW1zJ10ucHVzaCggdGhpcy5wYXJzZVRyZWUoaXRlbSwgdHJ1ZSwgY3VyclBhcmVudHMpICk7XG4gICAgICB9KVxuICAgIH1cbiAgICB9KVxuICAgIHJldHVybiB0cmVlSXRlbTtcbiAgfVxuXG59Il19