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
                it['classes'] = classes + ' is-expanded';
            }
            if (typeof it['items'] != 'undefined' && it['items'].length > 0) {
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
     * @param {?} data
     * @return {?}
     */
    AwTreeDS.prototype.parseData = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        var _this = this;
        /** @type {?} */
        var treeObj = {
            items: []
        };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvdHJlZS5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUUvQztJQUE4QixvQ0FBVTtJQUF4Qzs7SUErSUEsQ0FBQzs7Ozs7O0lBMUlXLDRCQUFTOzs7OztJQUFuQixVQUFvQixJQUFJO1FBQ3RCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUE7UUFDL0IsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7Ozs7O0lBRUQsNkJBQVU7Ozs7OztJQUFWLFVBQVcsSUFBSSxFQUFFLE9BQU8sRUFBRSxFQUFFO1FBQTVCLGlCQTBCQztRQXpCQyxJQUFLLENBQUMsSUFBSSxFQUFHO1lBQ1gsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7U0FDcEI7UUFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU87Ozs7UUFBRSxVQUFDLEVBQUU7O2dCQUNmLE9BQU8sR0FBRyxFQUFFLENBQUMsU0FBUyxDQUFDO1lBQzdCLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRztnQkFDdEIsSUFBSyxPQUFPLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRztvQkFDcEQsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLGNBQWMsQ0FBQyxDQUFDO29CQUNoRSxJQUFLLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRTt3QkFDakIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLHFCQUFxQixDQUFDO3FCQUM5QztpQkFDRjtxQkFBTTtvQkFD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SUFBSTtvQkFDckIsSUFBSyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLEVBQUc7d0JBQzlDLFFBQVEsQ0FBQyxXQUFXLENBQUMsR0FBRyxnQkFBZ0IsQ0FBQztxQkFDMUM7b0JBRUQsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBRSxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsV0FBVyxDQUFDLENBQUUsQ0FBQztnQkFDcEUsQ0FBQyxFQUFDLENBQUE7YUFDSDtRQUNELENBQUMsRUFBQyxDQUFBO1FBQ0YsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVILGVBQUM7QUFBRCxDQUFDLEFBL0lELENBQThCLFVBQVUsR0ErSXZDOzs7O0lBN0lDLCtCQUEyQjs7SUFDM0IseUJBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIEF3VHJlZURTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG5cbiAgcHVibGljIGN1cnJlbnRJdGVtOiBzdHJpbmc7XG4gIHB1YmxpYyBpY29uczogYW55O1xuXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSkge1xuICAgIHRoaXMuaWNvbnMgPSB0aGlzLm9wdGlvbnMuaWNvbnNcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIHVwZGF0ZVRyZWUoZGF0YSwgcGFyZW50cywgaWQpe1xuICAgIGlmICggIWRhdGEgKSB7XG4gICAgICBkYXRhID0gdGhpcy5vdXRwdXQ7XG4gICAgfVxuICAgIGRhdGEuaXRlbXMuZm9yRWFjaCggKGl0KSA9PiB7XG4gICAgICBjb25zdCBjbGFzc2VzID0gaXRbJ2NsYXNzZXMnXTtcbiAgICAgIGlmKCBpdFsnX21ldGEnXSA9PSBpZCApIHtcbiAgICAgICAgaWYgKCBjbGFzc2VzICYmIGNsYXNzZXMuaW5kZXhPZignaXMtZXhwYW5kZWQnKSA+IC0xICkge1xuICAgICAgICAgIGl0WydjbGFzc2VzJ10gPSBjbGFzc2VzLnJlcGxhY2UoL2lzLWV4cGFuZGVkL2csICdpcy1jb2xsYXBzZWQnKTtcbiAgICAgICAgICBpZiAoIGl0Wyd0b2dnbGUnXSApe1xuICAgICAgICAgICAgaXRbJ3RvZ2dsZSddWydpY29uJ10gPSAnbjctaWNvbi1hbmdsZS1yaWdodCc7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0WydjbGFzc2VzJ10gPSBjbGFzc2VzLnJlcGxhY2UoL2lzLWNvbGxhcHNlZC9nLCAnaXMtZXhwYW5kZWQnKTtcbiAgICAgICAgICBpZiAoIGl0Wyd0b2dnbGUnXSApe1xuICAgICAgICAgICAgaXRbJ3RvZ2dsZSddWydpY29uJ10gPSAnbjctaWNvbi1hbmdsZS1kb3duJztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoIHBhcmVudHMgJiYgcGFyZW50cy5pbmRleE9mKCBpdFsnX21ldGEnXSApID49IDAgKSB7XG4gICAgICAgICAgaXRbJ2NsYXNzZXMnXSA9IGNsYXNzZXMgKyAnIGlzLWV4cGFuZGVkJztcbiAgICAgIH1cbiAgICAgIGlmKCB0eXBlb2YgaXRbJ2l0ZW1zJ10gIT0gJ3VuZGVmaW5lZCcgJiYgaXRbJ2l0ZW1zJ10ubGVuZ3RoID4gMCApIHtcbiAgICAgICAgdGhpcy51cGRhdGVUcmVlKGl0LCBwYXJlbnRzLCBpZCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy51cGRhdGUoZGF0YSk7XG4gIH1cblxuICBzZWxlY3RUcmVlSXRlbShpZCwgZGF0YSl7XG4gICAgaWYgKCAhZGF0YSApIHtcbiAgICAgIGRhdGEgPSB0aGlzLm91dHB1dDtcbiAgICB9XG5cbiAgICBpZiggdGhpcy5jdXJyZW50SXRlbSAmJiB0aGlzLmN1cnJlbnRJdGVtW1wiX21ldGFcIl0gPT0gaWQgKXtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBkYXRhLml0ZW1zLmZvckVhY2goIChpdCkgPT4ge1xuICAgICAgICBpZiAoIGl0WydfbWV0YSddID09IGlkICYmIGl0WydjbGFzc2VzJ10uaW5kZXhPZignaXMtYWN0aXZlJykgPCAwICkge1xuICAgICAgICAgICAgaXRbJ2NsYXNzZXMnXSA9IGl0WydjbGFzc2VzJ10gKyAnIGlzLWFjdGl2ZSc7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRJdGVtID0gaXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgY2xhc3NlcyA9IGl0WydjbGFzc2VzJ107XG4gICAgICAgICAgaXRbJ2NsYXNzZXMnXSA9IGNsYXNzZXMucmVwbGFjZShcImlzLWFjdGl2ZVwiLCBcIlwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiggdHlwZW9mIGl0WydpdGVtcyddICE9IFwidW5kZWZpbmVkXCIgJiYgaXRbJ2l0ZW1zJ10ubGVuZ3RoID4gMCApIHtcbiAgICAgICAgICB0aGlzLnNlbGVjdFRyZWVJdGVtKGlkLCBpdCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnVwZGF0ZShkYXRhKTtcbiAgfVxuXG4gIHRvZ2dsZVNpZGViYXIoKSB7XG4gICAgbGV0IHNpZGViYXJEYXRhID0gdGhpcy5vdXRwdXQ7XG4gICAgaWYgKCBzaWRlYmFyRGF0YS5jbGFzc2VzID09IFwiaXMtZXhwYW5kZWRcIiApIHtcbiAgICAgIHNpZGViYXJEYXRhLmNsYXNzZXMgPSBcImlzLWNvbGxhcHNlZFwiO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHNpZGViYXJEYXRhLmNsYXNzZXMgPSBcImlzLWV4cGFuZGVkXCI7XG4gICAgfVxuICAgIHRoaXMudXBkYXRlKHNpZGViYXJEYXRhKTtcbiAgfVxuXG4gIHB1YmxpYyBwYXJzZURhdGEoZGF0YSkge1xuICAgIGxldCB0cmVlT2JqID0ge1xuICAgICAgaXRlbXM6IFtdXG4gICAgfTtcbiAgICBpZiggZGF0YVsnYnJhbmNoZXMnXSAmJiBkYXRhWydicmFuY2hlcyddLmxlbmd0aCA+IDAgKSB7XG4gICAgICBkYXRhWydicmFuY2hlcyddLmZvckVhY2goIGl0ZW0gPT4ge1xuICAgICAgICB0cmVlT2JqWydpdGVtcyddLnB1c2goIHRoaXMucGFyc2VUcmVlKGl0ZW0sIGZhbHNlLCBbXSkgKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZSh0cmVlT2JqKTtcbiAgfVxuXG4gIHByaXZhdGUgcGFyc2VUcmVlKGRhdGEsIHRvZ2dsZSwgcGFyZW50cykge1xuICAgIHZhciBjdXJyUGFyZW50cyA9IFsuLi5wYXJlbnRzXTtcbiAgICBsZXQgdHJlZUl0ZW0gPSB7fTtcbiAgICBjb25zdCBzaG93VG9nZ2xlID0gIHRvZ2dsZSAmJiBkYXRhWydicmFuY2hlcyddICE9IG51bGwgJiYgZGF0YVsnYnJhbmNoZXMnXS5sZW5ndGggPiAwIDtcbiAgICBpZiggc2hvd1RvZ2dsZSApe1xuICAgICAgdHJlZUl0ZW1bJ3RvZ2dsZSddID0ge1xuICAgICAgICBpY29uOiAnbjctaWNvbi1hbmdsZS1yaWdodCcsXG4gICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgIHNvdXJjZTogXCJ0b2dnbGVcIixcbiAgICAgICAgICAgIGlkOiBkYXRhWydpZCddLFxuICAgICAgICAgICAgcGFyZW50czogY3VyclBhcmVudHMsXG4gICAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKCBrZXkgPT4ge1xuICAgIGlmKCBrZXkgIT0gXCJicmFuY2hlc1wiICkge1xuICAgICAgc3dpdGNoIChrZXkpIHtcbiAgICAgICAgY2FzZSBcImxhYmVsXCI6IHRyZWVJdGVtWyd0ZXh0J10gPSBkYXRhW2tleV07IGJyZWFrO1xuICAgICAgICBjYXNlIFwiaW1nXCIgOiB0cmVlSXRlbVsnaW1nJ10gPSBkYXRhW2tleV07IGJyZWFrO1xuICAgICAgICBjYXNlIFwiaWNvblwiIDpcbiAgICAgICAgICAgIGlmIChzaG93VG9nZ2xlICYmIGRhdGFba2V5XSAhPSBudWxsKXtcbiAgICAgICAgICAgICAgdHJlZUl0ZW1bJ3RvZ2dsZSddWydpY29uJ10gPSBkYXRhW2tleV07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0cmVlSXRlbVsnaWNvbiddID0gZGF0YVtrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJpZFwiIDpcbiAgICAgICAgICAgIHRyZWVJdGVtWydfbWV0YSddID0gIGRhdGFba2V5XTtcbiAgICAgICAgICAgIHRyZWVJdGVtWydwYXlsb2FkJ10gPSB7XG4gICAgICAgICAgICAgIHNvdXJjZTogXCJtZW51SXRlbVwiLFxuICAgICAgICAgICAgICBpZDogZGF0YVsnaWQnXVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0IDogIGRhdGFba2V5XTsgYnJlYWs7XG4gICAgICB9XG4gICAgICB0cmVlSXRlbVsnY2xhc3NlcyddID0gJ2lzLWNvbGxhcHNlZCc7XG4gICAgfVxuICAgIGVsc2UgaWYoIGRhdGFbJ2JyYW5jaGVzJ10gIT0gbnVsbCApIHtcbiAgICAgIGN1cnJQYXJlbnRzLnB1c2goZGF0YVsnaWQnXSk7XG5cbiAgICAgIC8qSGFuZGxlIGNhc2VzIHdpdGggbWVudSBpdGVtIHdpdGggY2hpbGRyZW4gYnV0IHdpdGhvdXQgdG9nZ2xlKi9cbiAgICAgIGlmKCAhdG9nZ2xlICkge1xuICAgICAgICB0cmVlSXRlbVsncGF5bG9hZCddWydzb3VyY2UnXSA9IFwiVG9nZ2xlTWVudUl0ZW1cIjtcbiAgICAgICAgdHJlZUl0ZW1bJ3BheWxvYWQnXVsncGFyZW50cyddID0gY3VyclBhcmVudHM7XG4gICAgICB9XG5cbiAgICAgIHRyZWVJdGVtWydpdGVtcyddID0gW107XG4gICAgICBkYXRhW2tleV0uZm9yRWFjaCggaXRlbSA9PiB7XG4gICAgICAgIGlmICggaXRlbVsnaW1nJ10gIT0gXCJcIiAmJiBpdGVtWydpbWcnXSAhPSBudWxsICkge1xuICAgICAgICAgIHRyZWVJdGVtWydpY29ucmlnaHQnXSA9IFwibjctaWNvbi1pbWFnZXNcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRyZWVJdGVtWydpdGVtcyddLnB1c2goIHRoaXMucGFyc2VUcmVlKGl0ZW0sIHRydWUsIGN1cnJQYXJlbnRzKSApO1xuICAgICAgfSlcbiAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gdHJlZUl0ZW07XG4gIH1cblxufSJdfQ==