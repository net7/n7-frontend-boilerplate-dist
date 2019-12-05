/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/data-sources/tree.ds.ts
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
        this.icons = this.options.icons;
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
        /** @type {?} */
        var tree = this.updateTreeData(data, parents, id);
        this.update(tree);
    };
    /**
     * @private
     * @param {?} data
     * @param {?} parents
     * @param {?} id
     * @return {?}
     */
    AwTreeDS.prototype.updateTreeData = /**
     * @private
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
                if (classes && classes.indexOf('is-expanded') > -1) {
                    it['classes'] = classes.replace(/is-expanded/g, 'is-collapsed');
                    if (it['toggle']) {
                        it['toggle']['icon'] = 'n7-icon-angle-right';
                    }
                }
                else {
                    it['classes'] = classes.replace(/is-collapsed/g, 'is-expanded');
                    if (it['toggle']) {
                        it['toggle']['icon'] = 'n7-icon-angle-down';
                    }
                }
            }
            else if (parents && parents.indexOf(it['_meta']) >= 0) {
                it['classes'] = classes.replace(/is-collapsed/g, 'is-expanded');
                if (it['toggle']) {
                    it['toggle']['icon'] = 'n7-icon-angle-down';
                }
            }
            if (typeof it['items'] != 'undefined' && it['items'].length > 0) {
                _this.updateTreeData(it, parents, id);
            }
        }));
        return data;
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
        if (this.currentItem && this.currentItem["_meta"] == id) {
            return;
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
     * @param {?} response
     * @return {?}
     */
    AwTreeDS.prototype.parseData = /**
     * @param {?} response
     * @return {?}
     */
    function (response) {
        var _this = this;
        /** @type {?} */
        var treeObj = {
            items: []
        };
        /** @type {?} */
        var data = response['tree'];
        if (data['branches'] && data['branches'].length > 0) {
            data['branches'].forEach((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                treeObj['items'].push(_this.parseTree(item, false, []));
            }));
        }
        this.update(treeObj);
        if (response['currentItem'] == response['currentItem'] != null) {
            //this.currentItem = response['currentItem'];
            this.selectTreeItem(response['currentItem'], null);
            this.updateTree(null, this.currentItem.parents, response['currentItem']);
        }
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
        var showToggle = toggle && data['branches'] != null && data['branches'].length > 0;
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
                    case "img":
                        treeItem['img'] = data[key];
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
                treeItem['parents'] = currParents;
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
                    if (item['img'] != "" && item['img'] != null) {
                        treeItem['iconright'] = "n7-icon-images";
                    }
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
    /** @type {?} */
    AwTreeDS.prototype.icons;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvdHJlZS5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFL0M7SUFBOEIsb0NBQVU7SUFBeEM7O0lBa0tBLENBQUM7Ozs7OztJQTdKVyw0QkFBUzs7Ozs7SUFBbkIsVUFBb0IsSUFBSTtRQUN0QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFBO1FBQy9CLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7OztJQUVELDZCQUFVOzs7Ozs7SUFBVixVQUFXLElBQUksRUFBRSxPQUFPLEVBQUUsRUFBRTs7WUFFcEIsSUFBSSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQUM7UUFDbkQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUVwQixDQUFDOzs7Ozs7OztJQUNPLGlDQUFjOzs7Ozs7O0lBQXRCLFVBQXVCLElBQUksRUFBRSxPQUFPLEVBQUUsRUFBRTtRQUF4QyxpQkE2QkM7UUE1QkMsSUFBSyxDQUFDLElBQUksRUFBRztZQUNYLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQ3BCO1FBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPOzs7O1FBQUUsVUFBQyxFQUFFOztnQkFDZixPQUFPLEdBQUcsRUFBRSxDQUFDLFNBQVMsQ0FBQztZQUM3QixJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUc7Z0JBQ3RCLElBQUssT0FBTyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUc7b0JBQ3BELEVBQUUsQ0FB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Q0FBQTtRQUNGLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFSCxlQUFDO0FBQUQsQ0FBQyxBQWxLRCxDQUE4QixVQUFVLEdBa0t2Qzs7OztJQWhLQywrQkFBd0I7O0lBQ3hCLHlCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBBd1RyZWVEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuXG4gIHB1YmxpYyBjdXJyZW50SXRlbTogYW55O1xuICBwdWJsaWMgaWNvbnM6IGFueTtcblxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpIHtcbiAgICB0aGlzLmljb25zID0gdGhpcy5vcHRpb25zLmljb25zXG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICB1cGRhdGVUcmVlKGRhdGEsIHBhcmVudHMsIGlkKSB7XG5cbiAgICBjb25zdCB0cmVlID0gdGhpcy51cGRhdGVUcmVlRGF0YShkYXRhLCBwYXJlbnRzLCBpZCk7XG4gICAgdGhpcy51cGRhdGUodHJlZSk7XG5cbiAgfVxuICBwcml2YXRlIHVwZGF0ZVRyZWVEYXRhKGRhdGEsIHBhcmVudHMsIGlkKXtcbiAgICBpZiAoICFkYXRhICkge1xuICAgICAgZGF0YSA9IHRoaXMub3V0cHV0O1xuICAgIH1cbiAgICBkYXRhLml0ZW1zLmZvckVhY2goIChpdCkgPT4ge1xuICAgICAgY29uc3QgY2xhc3NlcyA9IGl0WydjbGFzc2VzJ107XG4gICAgICBpZiggaXRbJ19tZXRhJ10gPT0gaWQgKSB7XG4gICAgICAgIGlmICggY2xhc3NlcyAmJiBjbGFzc2VzLmluZGV4T2YoJ2lzLWV4cGFuZGVkJykgPiAtMSApIHtcbiAgICAgICAgICBpdFsnY2xhc3NlcyddID0gY2xhc3Nlcy5yZXBsYWNlKC9pcy1leHBhbmRlZC9nLCAnaXMtY29sbGFwc2VkJyk7XG4gICAgICAgICAgaWYgKCBpdFsndG9nZ2xlJ10gKXtcbiAgICAgICAgICAgIGl0Wyd0b2dnbGUnXVsnaWNvbiddID0gJ243LWljb24tYW5nbGUtcmlnaHQnO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdFsnY2xhc3NlcyddID0gY2xhc3Nlcy5yZXBsYWNlKC9pcy1jb2xsYXBzZWQvZywgJ2lzLWV4cGFuZGVkJyk7XG4gICAgICAgICAgaWYgKCBpdFsndG9nZ2xlJ10gKXtcbiAgICAgICAgICAgIGl0Wyd0b2dnbGUnXVsnaWNvbiddID0gJ243LWljb24tYW5nbGUtZG93bic7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKCBwYXJlbnRzICYmIHBhcmVudHMuaW5kZXhPZiggaXRbJ19tZXRhJ10gKSA+PSAwICkge1xuICAgICAgICAgIGl0WydjbGFzc2VzJ10gPSBjbGFzc2VzLnJlcGxhY2UoL2lzLWNvbGxhcHNlZC9nLCAnaXMtZXhwYW5kZWQnKTtcbiAgICAgICAgICBpZiAoIGl0Wyd0b2dnbGUnXSApe1xuICAgICAgICAgICAgaXRbJ3RvZ2dsZSddWydpY29uJ10gPSAnbjctaWNvbi1hbmdsZS1kb3duJztcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiggdHlwZW9mIGl0WydpdGVtcyddICE9ICd1bmRlZmluZWQnICYmIGl0WydpdGVtcyddLmxlbmd0aCA+IDAgKSB7XG4gICAgICAgIHRoaXMudXBkYXRlVHJlZURhdGEoaXQsIHBhcmVudHMsIGlkKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIHNlbGVjdFRyZWVJdGVtKGlkLCBkYXRhKXtcbiAgICBpZiAoICFkYXRhICkge1xuICAgICAgZGF0YSA9IHRoaXMub3V0cHV0O1xuICAgIH1cblxuICAgIGlmKCB0aGlzLmN1cnJlbnRJdGVtICYmIHRoaXMuY3VycmVudEl0ZW1bXCJfbWV0YVwiXSA9PSBpZCApe1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGRhdGEuaXRlbXMuZm9yRWFjaCggKGl0KSA9PiB7XG4gICAgICAgIGlmICggaXRbJ19tZXRhJ10gPT0gaWQgJiYgaXRbJ2NsYXNzZXMnXS5pbmRleE9mKCdpcy1hY3RpdmUnKSA8IDAgKSB7XG4gICAgICAgICAgICBpdFsnY2xhc3NlcyddID0gaXRbJ2NsYXNzZXMnXSArICcgaXMtYWN0aXZlJztcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEl0ZW0gPSBpdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBjbGFzc2VzID0gaXRbJ2NsYXNzZXMnXTtcbiAgICAgICAgICBpdFsnY2xhc3NlcyddID0gY2xhc3Nlcy5yZXBsYWNlKFwiaXMtYWN0aXZlXCIsIFwiXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmKCB0eXBlb2YgaXRbJ2l0ZW1zJ10gIT0gXCJ1bmRlZmluZWRcIiAmJiBpdFsnaXRlbXMnXS5sZW5ndGggPiAwICkge1xuICAgICAgICAgIHRoaXMuc2VsZWN0VHJlZUl0ZW0oaWQsIGl0KTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMudXBkYXRlKGRhdGEpO1xuICB9XG5cbiAgdG9nZ2xlU2lkZWJhcigpIHtcbiAgICBsZXQgc2lkZWJhckRhdGEgPSB0aGlzLm91dHB1dDtcbiAgICBpZiAoIHNpZGViYXJEYXRhLmNsYXNzZXMgPT0gXCJpcy1leHBhbmRlZFwiICkge1xuICAgICAgc2lkZWJhckRhdGEuY2xhc3NlcyA9IFwiaXMtY29sbGFwc2VkXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgc2lkZWJhckRhdGEuY2xhc3NlcyA9IFwiaXMtZXhwYW5kZWRcIjtcbiAgICB9XG4gICAgdGhpcy51cGRhdGUoc2lkZWJhckRhdGEpO1xuICB9XG5cbiAgcHVibGljIHBhcnNlRGF0YShyZXNwb25zZSkge1xuICAgIGxldCB0cmVlT2JqID0ge1xuICAgICAgaXRlbXM6IFtdXG4gICAgfTtcblxuICAgIHZhciBkYXRhID0gcmVzcG9uc2VbJ3RyZWUnXTtcbiAgICBpZiggZGF0YVsnYnJhbmNoZXMnXSAmJiBkYXRhWydicmFuY2hlcyddLmxlbmd0aCA+IDAgKSB7XG4gICAgICBkYXRhWydicmFuY2hlcyddLmZvckVhY2goIGl0ZW0gPT4ge1xuICAgICAgICB0cmVlT2JqWydpdGVtcyddLnB1c2goIHRoaXMucGFyc2VUcmVlKGl0ZW0sIGZhbHNlLCBbXSkgKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZSh0cmVlT2JqKTtcbiAgICBpZiAocmVzcG9uc2VbJ2N1cnJlbnRJdGVtJ10gPT0gcmVzcG9uc2VbJ2N1cnJlbnRJdGVtJ10gIT0gbnVsbCkge1xuICAgICAgLy90aGlzLmN1cnJlbnRJdGVtID0gcmVzcG9uc2VbJ2N1cnJlbnRJdGVtJ107XG4gICAgICB0aGlzLnNlbGVjdFRyZWVJdGVtKHJlc3BvbnNlWydjdXJyZW50SXRlbSddLCBudWxsKTtcbiAgICAgIHRoaXMudXBkYXRlVHJlZShudWxsLCB0aGlzLmN1cnJlbnRJdGVtLnBhcmVudHMsIHJlc3BvbnNlWydjdXJyZW50SXRlbSddKTtcblxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcGFyc2VUcmVlKGRhdGEsIHRvZ2dsZSwgcGFyZW50cykge1xuICAgIHZhciBjdXJyUGFyZW50cyA9IFsuLi5wYXJlbnRzXTtcbiAgICBsZXQgdHJlZUl0ZW0gPSB7fTtcbiAgICBjb25zdCBzaG93VG9nZ2xlID0gIHRvZ2dsZSAmJiBkYXRhWydicmFuY2hlcyddICE9IG51bGwgJiYgZGF0YVsnYnJhbmNoZXMnXS5sZW5ndGggPiAwIDtcbiAgICBpZiggc2hvd1RvZ2dsZSApe1xuICAgICAgdHJlZUl0ZW1bJ3RvZ2dsZSddID0ge1xuICAgICAgICBpY29uOiAnbjctaWNvbi1hbmdsZS1yaWdodCcsXG4gICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgIHNvdXJjZTogXCJ0b2dnbGVcIixcbiAgICAgICAgICAgIGlkOiBkYXRhWydpZCddLFxuICAgICAgICAgICAgcGFyZW50czogY3VyclBhcmVudHMsXG4gICAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKCBrZXkgPT4ge1xuICAgIGlmKCBrZXkgIT0gXCJicmFuY2hlc1wiICkge1xuICAgICAgc3dpdGNoIChrZXkpIHtcbiAgICAgICAgY2FzZSBcImxhYmVsXCI6IHRyZWVJdGVtWyd0ZXh0J10gPSBkYXRhW2tleV07IGJyZWFrO1xuICAgICAgICBjYXNlIFwiaW1nXCIgOiB0cmVlSXRlbVsnaW1nJ10gPSBkYXRhW2tleV07IGJyZWFrO1xuICAgICAgICBjYXNlIFwiaWNvblwiIDpcbiAgICAgICAgICAgIGlmIChzaG93VG9nZ2xlICYmIGRhdGFba2V5XSAhPSBudWxsKXtcbiAgICAgICAgICAgICAgdHJlZUl0ZW1bJ3RvZ2dsZSddWydpY29uJ10gPSBkYXRhW2tleV07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0cmVlSXRlbVsnaWNvbiddID0gZGF0YVtrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJpZFwiIDpcbiAgICAgICAgICAgIHRyZWVJdGVtWydfbWV0YSddID0gIGRhdGFba2V5XTtcbiAgICAgICAgICAgIHRyZWVJdGVtWydwYXlsb2FkJ10gPSB7XG4gICAgICAgICAgICAgIHNvdXJjZTogXCJtZW51SXRlbVwiLFxuICAgICAgICAgICAgICBpZDogZGF0YVsnaWQnXVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0IDogIGRhdGFba2V5XTsgYnJlYWs7XG4gICAgICB9XG4gICAgICB0cmVlSXRlbVsnY2xhc3NlcyddID0gJ2lzLWNvbGxhcHNlZCc7XG4gICAgICB0cmVlSXRlbVsncGFyZW50cyddID0gY3VyclBhcmVudHM7XG5cbiAgICB9XG4gICAgZWxzZSBpZiggZGF0YVsnYnJhbmNoZXMnXSAhPSBudWxsICkge1xuICAgICAgY3VyclBhcmVudHMucHVzaChkYXRhWydpZCddKTtcblxuICAgICAgLypIYW5kbGUgY2FzZXMgd2l0aCBtZW51IGl0ZW0gd2l0aCBjaGlsZHJlbiBidXQgd2l0aG91dCB0b2dnbGUqL1xuICAgICAgaWYoICF0b2dnbGUgKSB7XG4gICAgICAgIHRyZWVJdGVtWydwYXlsb2FkJ11bJ3NvdXJjZSddID0gXCJUb2dnbGVNZW51SXRlbVwiO1xuICAgICAgICB0cmVlSXRlbVsncGF5bG9hZCddWydwYXJlbnRzJ10gPSBjdXJyUGFyZW50cztcbiAgICAgIH1cblxuICAgICAgdHJlZUl0ZW1bJ2l0ZW1zJ10gPSBbXTtcbiAgICAgIGRhdGFba2V5XS5mb3JFYWNoKCBpdGVtID0+IHtcbiAgICAgICAgaWYgKCBpdGVtWydpbWcnXSAhPSBcIlwiICYmIGl0ZW1bJ2ltZyddICE9IG51bGwgKSB7XG4gICAgICAgICAgdHJlZUl0ZW1bJ2ljb25yaWdodCddID0gXCJuNy1pY29uLWltYWdlc1wiO1xuICAgICAgICB9XG5cbiAgICAgICAgdHJlZUl0ZW1bJ2l0ZW1zJ10ucHVzaCggdGhpcy5wYXJzZVRyZWUoaXRlbSwgdHJ1ZSwgY3VyclBhcmVudHMpICk7XG4gICAgICB9KVxuICAgIH1cbiAgICB9KVxuICAgIHJldHVybiB0cmVlSXRlbTtcbiAgfVxuXG59Il19