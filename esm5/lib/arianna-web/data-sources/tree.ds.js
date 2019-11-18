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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvdHJlZS5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUUvQztJQUE4QixvQ0FBVTtJQUF4Qzs7SUFrS0EsQ0FBQzs7Ozs7O0lBN0pXLDRCQUFTOzs7OztJQUFuQixVQUFvQixJQUFJO1FBQ3RCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUE7UUFDL0IsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7Ozs7O0lBRUQsNkJBQVU7Ozs7OztJQUFWLFVBQVcsSUFBSSxFQUFFLE9BQU8sRUFBRSxFQUFFOztZQUVwQixJQUFJLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUUsQ0FBQztRQUNuRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRXBCLENBQUM7Ozs7Ozs7O0lBQ08saUNBQWM7Ozs7Ozs7SUFBdEIsVUFBdUIsSUFBSSxFQUFFLE9BQU8sRUFBRSxFQUFFO1FBQXhDLGlCQTZCQztRQTVCQyxJQUFLLENBQUMsSUFBSSxFQUFHO1lBQ1gsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7U0FDcEI7UUFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU87Ozs7UUFBRSxVQUFDLEVBQUU7O2dCQUNmLE9BQU8sR0FBRyxFQUFFLENBQUMsU0FBUyxDQUFDO1lBQzdCLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRztnQkFDdEIsSUFBSyxPQUFPLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRztvQkFDcEQsRUFBRSxDQUFD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QUFBO1FBQ0YsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVILGVBQUM7QUFBRCxDQUFDLEFBbEtELENBQThCLFVBQVUsR0FrS3ZDOzs7O0lBaEtDLCtCQUF3Qjs7SUFDeEIseUJBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIEF3VHJlZURTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG5cbiAgcHVibGljIGN1cnJlbnRJdGVtOiBhbnk7XG4gIHB1YmxpYyBpY29uczogYW55O1xuXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSkge1xuICAgIHRoaXMuaWNvbnMgPSB0aGlzLm9wdGlvbnMuaWNvbnNcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIHVwZGF0ZVRyZWUoZGF0YSwgcGFyZW50cywgaWQpIHtcblxuICAgIGNvbnN0IHRyZWUgPSB0aGlzLnVwZGF0ZVRyZWVEYXRhKGRhdGEsIHBhcmVudHMsIGlkKTtcbiAgICB0aGlzLnVwZGF0ZSh0cmVlKTtcblxuICB9XG4gIHByaXZhdGUgdXBkYXRlVHJlZURhdGEoZGF0YSwgcGFyZW50cywgaWQpe1xuICAgIGlmICggIWRhdGEgKSB7XG4gICAgICBkYXRhID0gdGhpcy5vdXRwdXQ7XG4gICAgfVxuICAgIGRhdGEuaXRlbXMuZm9yRWFjaCggKGl0KSA9PiB7XG4gICAgICBjb25zdCBjbGFzc2VzID0gaXRbJ2NsYXNzZXMnXTtcbiAgICAgIGlmKCBpdFsnX21ldGEnXSA9PSBpZCApIHtcbiAgICAgICAgaWYgKCBjbGFzc2VzICYmIGNsYXNzZXMuaW5kZXhPZignaXMtZXhwYW5kZWQnKSA+IC0xICkge1xuICAgICAgICAgIGl0WydjbGFzc2VzJ10gPSBjbGFzc2VzLnJlcGxhY2UoL2lzLWV4cGFuZGVkL2csICdpcy1jb2xsYXBzZWQnKTtcbiAgICAgICAgICBpZiAoIGl0Wyd0b2dnbGUnXSApe1xuICAgICAgICAgICAgaXRbJ3RvZ2dsZSddWydpY29uJ10gPSAnbjctaWNvbi1hbmdsZS1yaWdodCc7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0WydjbGFzc2VzJ10gPSBjbGFzc2VzLnJlcGxhY2UoL2lzLWNvbGxhcHNlZC9nLCAnaXMtZXhwYW5kZWQnKTtcbiAgICAgICAgICBpZiAoIGl0Wyd0b2dnbGUnXSApe1xuICAgICAgICAgICAgaXRbJ3RvZ2dsZSddWydpY29uJ10gPSAnbjctaWNvbi1hbmdsZS1kb3duJztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoIHBhcmVudHMgJiYgcGFyZW50cy5pbmRleE9mKCBpdFsnX21ldGEnXSApID49IDAgKSB7XG4gICAgICAgICAgaXRbJ2NsYXNzZXMnXSA9IGNsYXNzZXMucmVwbGFjZSgvaXMtY29sbGFwc2VkL2csICdpcy1leHBhbmRlZCcpO1xuICAgICAgICAgIGlmICggaXRbJ3RvZ2dsZSddICl7XG4gICAgICAgICAgICBpdFsndG9nZ2xlJ11bJ2ljb24nXSA9ICduNy1pY29uLWFuZ2xlLWRvd24nO1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmKCB0eXBlb2YgaXRbJ2l0ZW1zJ10gIT0gJ3VuZGVmaW5lZCcgJiYgaXRbJ2l0ZW1zJ10ubGVuZ3RoID4gMCApIHtcbiAgICAgICAgdGhpcy51cGRhdGVUcmVlRGF0YShpdCwgcGFyZW50cywgaWQpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgc2VsZWN0VHJlZUl0ZW0oaWQsIGRhdGEpe1xuICAgIGlmICggIWRhdGEgKSB7XG4gICAgICBkYXRhID0gdGhpcy5vdXRwdXQ7XG4gICAgfVxuXG4gICAgaWYoIHRoaXMuY3VycmVudEl0ZW0gJiYgdGhpcy5jdXJyZW50SXRlbVtcIl9tZXRhXCJdID09IGlkICl7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZGF0YS5pdGVtcy5mb3JFYWNoKCAoaXQpID0+IHtcbiAgICAgICAgaWYgKCBpdFsnX21ldGEnXSA9PSBpZCAmJiBpdFsnY2xhc3NlcyddLmluZGV4T2YoJ2lzLWFjdGl2ZScpIDwgMCApIHtcbiAgICAgICAgICAgIGl0WydjbGFzc2VzJ10gPSBpdFsnY2xhc3NlcyddICsgJyBpcy1hY3RpdmUnO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50SXRlbSA9IGl0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGNsYXNzZXMgPSBpdFsnY2xhc3NlcyddO1xuICAgICAgICAgIGl0WydjbGFzc2VzJ10gPSBjbGFzc2VzLnJlcGxhY2UoXCJpcy1hY3RpdmVcIiwgXCJcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYoIHR5cGVvZiBpdFsnaXRlbXMnXSAhPSBcInVuZGVmaW5lZFwiICYmIGl0WydpdGVtcyddLmxlbmd0aCA+IDAgKSB7XG4gICAgICAgICAgdGhpcy5zZWxlY3RUcmVlSXRlbShpZCwgaXQpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy51cGRhdGUoZGF0YSk7XG4gIH1cblxuICB0b2dnbGVTaWRlYmFyKCkge1xuICAgIGxldCBzaWRlYmFyRGF0YSA9IHRoaXMub3V0cHV0O1xuICAgIGlmICggc2lkZWJhckRhdGEuY2xhc3NlcyA9PSBcImlzLWV4cGFuZGVkXCIgKSB7XG4gICAgICBzaWRlYmFyRGF0YS5jbGFzc2VzID0gXCJpcy1jb2xsYXBzZWRcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgICBzaWRlYmFyRGF0YS5jbGFzc2VzID0gXCJpcy1leHBhbmRlZFwiO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZShzaWRlYmFyRGF0YSk7XG4gIH1cblxuICBwdWJsaWMgcGFyc2VEYXRhKHJlc3BvbnNlKSB7XG4gICAgbGV0IHRyZWVPYmogPSB7XG4gICAgICBpdGVtczogW11cbiAgICB9O1xuXG4gICAgdmFyIGRhdGEgPSByZXNwb25zZVsndHJlZSddO1xuICAgIGlmKCBkYXRhWydicmFuY2hlcyddICYmIGRhdGFbJ2JyYW5jaGVzJ10ubGVuZ3RoID4gMCApIHtcbiAgICAgIGRhdGFbJ2JyYW5jaGVzJ10uZm9yRWFjaCggaXRlbSA9PiB7XG4gICAgICAgIHRyZWVPYmpbJ2l0ZW1zJ10ucHVzaCggdGhpcy5wYXJzZVRyZWUoaXRlbSwgZmFsc2UsIFtdKSApO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMudXBkYXRlKHRyZWVPYmopO1xuICAgIGlmIChyZXNwb25zZVsnY3VycmVudEl0ZW0nXSA9PSByZXNwb25zZVsnY3VycmVudEl0ZW0nXSAhPSBudWxsKSB7XG4gICAgICAvL3RoaXMuY3VycmVudEl0ZW0gPSByZXNwb25zZVsnY3VycmVudEl0ZW0nXTtcbiAgICAgIHRoaXMuc2VsZWN0VHJlZUl0ZW0ocmVzcG9uc2VbJ2N1cnJlbnRJdGVtJ10sIG51bGwpO1xuICAgICAgdGhpcy51cGRhdGVUcmVlKG51bGwsIHRoaXMuY3VycmVudEl0ZW0ucGFyZW50cywgcmVzcG9uc2VbJ2N1cnJlbnRJdGVtJ10pO1xuXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBwYXJzZVRyZWUoZGF0YSwgdG9nZ2xlLCBwYXJlbnRzKSB7XG4gICAgdmFyIGN1cnJQYXJlbnRzID0gWy4uLnBhcmVudHNdO1xuICAgIGxldCB0cmVlSXRlbSA9IHt9O1xuICAgIGNvbnN0IHNob3dUb2dnbGUgPSAgdG9nZ2xlICYmIGRhdGFbJ2JyYW5jaGVzJ10gIT0gbnVsbCAmJiBkYXRhWydicmFuY2hlcyddLmxlbmd0aCA+IDAgO1xuICAgIGlmKCBzaG93VG9nZ2xlICl7XG4gICAgICB0cmVlSXRlbVsndG9nZ2xlJ10gPSB7XG4gICAgICAgIGljb246ICduNy1pY29uLWFuZ2xlLXJpZ2h0JyxcbiAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgc291cmNlOiBcInRvZ2dsZVwiLFxuICAgICAgICAgICAgaWQ6IGRhdGFbJ2lkJ10sXG4gICAgICAgICAgICBwYXJlbnRzOiBjdXJyUGFyZW50cyxcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIE9iamVjdC5rZXlzKGRhdGEpLmZvckVhY2goIGtleSA9PiB7XG4gICAgaWYoIGtleSAhPSBcImJyYW5jaGVzXCIgKSB7XG4gICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICBjYXNlIFwibGFiZWxcIjogdHJlZUl0ZW1bJ3RleHQnXSA9IGRhdGFba2V5XTsgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJpbWdcIiA6IHRyZWVJdGVtWydpbWcnXSA9IGRhdGFba2V5XTsgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJpY29uXCIgOlxuICAgICAgICAgICAgaWYgKHNob3dUb2dnbGUgJiYgZGF0YVtrZXldICE9IG51bGwpe1xuICAgICAgICAgICAgICB0cmVlSXRlbVsndG9nZ2xlJ11bJ2ljb24nXSA9IGRhdGFba2V5XTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRyZWVJdGVtWydpY29uJ10gPSBkYXRhW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImlkXCIgOlxuICAgICAgICAgICAgdHJlZUl0ZW1bJ19tZXRhJ10gPSAgZGF0YVtrZXldO1xuICAgICAgICAgICAgdHJlZUl0ZW1bJ3BheWxvYWQnXSA9IHtcbiAgICAgICAgICAgICAgc291cmNlOiBcIm1lbnVJdGVtXCIsXG4gICAgICAgICAgICAgIGlkOiBkYXRhWydpZCddXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQgOiAgZGF0YVtrZXldOyBicmVhaztcbiAgICAgIH1cbiAgICAgIHRyZWVJdGVtWydjbGFzc2VzJ10gPSAnaXMtY29sbGFwc2VkJztcbiAgICAgIHRyZWVJdGVtWydwYXJlbnRzJ10gPSBjdXJyUGFyZW50cztcblxuICAgIH1cbiAgICBlbHNlIGlmKCBkYXRhWydicmFuY2hlcyddICE9IG51bGwgKSB7XG4gICAgICBjdXJyUGFyZW50cy5wdXNoKGRhdGFbJ2lkJ10pO1xuXG4gICAgICAvKkhhbmRsZSBjYXNlcyB3aXRoIG1lbnUgaXRlbSB3aXRoIGNoaWxkcmVuIGJ1dCB3aXRob3V0IHRvZ2dsZSovXG4gICAgICBpZiggIXRvZ2dsZSApIHtcbiAgICAgICAgdHJlZUl0ZW1bJ3BheWxvYWQnXVsnc291cmNlJ10gPSBcIlRvZ2dsZU1lbnVJdGVtXCI7XG4gICAgICAgIHRyZWVJdGVtWydwYXlsb2FkJ11bJ3BhcmVudHMnXSA9IGN1cnJQYXJlbnRzO1xuICAgICAgfVxuXG4gICAgICB0cmVlSXRlbVsnaXRlbXMnXSA9IFtdO1xuICAgICAgZGF0YVtrZXldLmZvckVhY2goIGl0ZW0gPT4ge1xuICAgICAgICBpZiAoIGl0ZW1bJ2ltZyddICE9IFwiXCIgJiYgaXRlbVsnaW1nJ10gIT0gbnVsbCApIHtcbiAgICAgICAgICB0cmVlSXRlbVsnaWNvbnJpZ2h0J10gPSBcIm43LWljb24taW1hZ2VzXCI7XG4gICAgICAgIH1cblxuICAgICAgICB0cmVlSXRlbVsnaXRlbXMnXS5wdXNoKCB0aGlzLnBhcnNlVHJlZShpdGVtLCB0cnVlLCBjdXJyUGFyZW50cykgKTtcbiAgICAgIH0pXG4gICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHRyZWVJdGVtO1xuICB9XG5cbn0iXX0=