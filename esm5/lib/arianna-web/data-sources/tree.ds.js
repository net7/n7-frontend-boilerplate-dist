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
                if (classes.indexOf('is-expanded') > -1) {
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
            else if (parents.indexOf(it['_meta']) >= 0) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvdHJlZS5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUUvQztJQUE4QixvQ0FBVTtJQUF4Qzs7SUF5SUEsQ0FBQzs7OztJQXJJQyw0QkFBUzs7O0lBQVQ7SUFFQSxDQUFDOzs7Ozs7SUFFUyw0QkFBUzs7Ozs7SUFBbkIsVUFBb0IsSUFBSTtRQUN0QixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Ozs7Ozs7SUFFRCw2QkFBVTs7Ozs7O0lBQVYsVUFBVyxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUU7UUFBNUIsaUJBMEJDO1FBekJDLElBQUssQ0FBQyxJQUFJLEVBQUc7WUFDWCxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUNwQjtRQUNELElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTzs7OztRQUFFLFVBQUMsRUFBRTs7Z0JBQ2YsT0FBTyxHQUFHLEVBQUUsQ0FBQyxTQUFTLENBQUM7WUFDN0IsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxFQUFHO2dCQUN0QixJQUFLLE9BQU8sQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUc7b0JBQ3pDLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxjQUFjLENBQUMsQ0FBQztvQkFDaEUsSUFBSyxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUU7d0JBQ2pCLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxxQkFBcUIsQ0FBQztxQkFDOUM7aUJBQ0Y7cUJBQU07b0JBQ0wsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLE9BQU8sQ0FB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eUl2Qzs7OztJQXZJQywrQkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgQXdUcmVlRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcblxuICBwdWJsaWMgY3VycmVudEl0ZW06IHN0cmluZztcblxuICB0b2dnbGVOYXYoKSB7XG5cbiAgfVxuXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSkge1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgdXBkYXRlVHJlZShkYXRhLCBwYXJlbnRzLCBpZCl7XG4gICAgaWYgKCAhZGF0YSApIHtcbiAgICAgIGRhdGEgPSB0aGlzLm91dHB1dDtcbiAgICB9XG4gICAgZGF0YS5pdGVtcy5mb3JFYWNoKCAoaXQpID0+IHtcbiAgICAgIGNvbnN0IGNsYXNzZXMgPSBpdFsnY2xhc3NlcyddO1xuICAgICAgaWYoIGl0WydfbWV0YSddID09IGlkICkge1xuICAgICAgICBpZiAoIGNsYXNzZXMuaW5kZXhPZignaXMtZXhwYW5kZWQnKSA+IC0xICkge1xuICAgICAgICAgIGl0WydjbGFzc2VzJ10gPSBjbGFzc2VzLnJlcGxhY2UoL2lzLWV4cGFuZGVkL2csICdpcy1jb2xsYXBzZWQnKTtcbiAgICAgICAgICBpZiAoIGl0Wyd0b2dnbGUnXSApe1xuICAgICAgICAgICAgaXRbJ3RvZ2dsZSddWydpY29uJ10gPSAnbjctaWNvbi1hbmdsZS1yaWdodCc7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0WydjbGFzc2VzJ10gPSBjbGFzc2VzLnJlcGxhY2UoL2lzLWNvbGxhcHNlZC9nLCAnaXMtZXhwYW5kZWQnKTtcbiAgICAgICAgICBpZiAoIGl0Wyd0b2dnbGUnXSApe1xuICAgICAgICAgICAgaXRbJ3RvZ2dsZSddWydpY29uJ10gPSAnbjctaWNvbi1hbmdsZS1kb3duJztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoIHBhcmVudHMuaW5kZXhPZiggaXRbJ19tZXRhJ10gKSA+PSAwICkge1xuICAgICAgICAgIGl0WydjbGFzc2VzJ10gPSBjbGFzc2VzICsgJyBpcy1leHBhbmRlZCc7XG4gICAgICB9XG4gICAgICBpZiggdHlwZW9mIGl0WydpdGVtcyddICE9ICd1bmRlZmluZWQnICYmIGl0WydpdGVtcyddLmxlbmd0aCA+IDAgKSB7XG4gICAgICAgIHRoaXMudXBkYXRlVHJlZShpdCwgcGFyZW50cywgaWQpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMudXBkYXRlKGRhdGEpO1xuICB9XG5cbiAgc2VsZWN0VHJlZUl0ZW0oaWQsIGRhdGEpe1xuICAgIGlmICggIWRhdGEgKSB7XG4gICAgICBkYXRhID0gdGhpcy5vdXRwdXQ7XG4gICAgfVxuXG4gICAgZGF0YS5pdGVtcy5mb3JFYWNoKCAoaXQpID0+IHtcbiAgICAgICAgaWYgKCBpdFsnX21ldGEnXSA9PSBpZCAmJiBpdFsnY2xhc3NlcyddLmluZGV4T2YoJ2lzLWFjdGl2ZScpIDwgMCApIHtcbiAgICAgICAgICAgIGl0WydjbGFzc2VzJ10gPSBpdFsnY2xhc3NlcyddICsgJyBpcy1hY3RpdmUnO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50SXRlbSA9IGl0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGNsYXNzZXMgPSBpdFsnY2xhc3NlcyddO1xuICAgICAgICAgIGl0WydjbGFzc2VzJ10gPSBjbGFzc2VzLnJlcGxhY2UoXCJpcy1hY3RpdmVcIiwgXCJcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYoIHR5cGVvZiBpdFsnaXRlbXMnXSAhPSBcInVuZGVmaW5lZFwiICYmIGl0WydpdGVtcyddLmxlbmd0aCA+IDAgKSB7XG4gICAgICAgICAgdGhpcy5zZWxlY3RUcmVlSXRlbShpZCwgaXQpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy51cGRhdGUoZGF0YSk7XG4gIH1cblxuICB0b2dnbGVTaWRlYmFyKCkge1xuICAgIGxldCBzaWRlYmFyRGF0YSA9IHRoaXMub3V0cHV0O1xuICAgIGlmICggc2lkZWJhckRhdGEuY2xhc3NlcyA9PSBcImlzLWV4cGFuZGVkXCIgKSB7XG4gICAgICBzaWRlYmFyRGF0YS5jbGFzc2VzID0gXCJpcy1jb2xsYXBzZWRcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgICBzaWRlYmFyRGF0YS5jbGFzc2VzID0gXCJpcy1leHBhbmRlZFwiO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZShzaWRlYmFyRGF0YSk7XG4gIH1cblxuICBwcml2YXRlIHBhcnNlRGF0YShkYXRhKSB7XG4gICAgbGV0IHRyZWVPYmogPSB7XG4gICAgICBpdGVtczogW11cbiAgICB9O1xuICAgIGlmKCBkYXRhWydicmFuY2hlcyddKSB7XG4gICAgICBkYXRhWydicmFuY2hlcyddLmZvckVhY2goIGl0ZW0gPT4ge1xuICAgICAgICB0cmVlT2JqWydpdGVtcyddLnB1c2goIHRoaXMucGFyc2VUcmVlKGl0ZW0sIGZhbHNlLCBbXSkgKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZSh0cmVlT2JqKTtcbiAgfVxuXG4gIHByaXZhdGUgcGFyc2VUcmVlKGRhdGEsIHRvZ2dsZSwgcGFyZW50cykge1xuICAgIHZhciBjdXJyUGFyZW50cyA9IFsuLi5wYXJlbnRzXTtcbiAgICBsZXQgdHJlZUl0ZW0gPSB7fTtcbiAgICBjb25zdCBzaG93VG9nZ2xlID0gIHRvZ2dsZSAmJiBkYXRhWydicmFuY2hlcyddICE9IG51bGw7XG4gICAgaWYoIHNob3dUb2dnbGUgKXtcbiAgICAgIHRyZWVJdGVtWyd0b2dnbGUnXSA9IHtcbiAgICAgICAgaWNvbjogJ243LWljb24tYW5nbGUtcmlnaHQnLFxuICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICBzb3VyY2U6IFwidG9nZ2xlXCIsXG4gICAgICAgICAgICBpZDogZGF0YVsnaWQnXSxcbiAgICAgICAgICAgIHBhcmVudHM6IGN1cnJQYXJlbnRzLFxuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgT2JqZWN0LmtleXMoZGF0YSkuZm9yRWFjaCgga2V5ID0+IHtcbiAgICBpZigga2V5ICE9IFwiYnJhbmNoZXNcIiApIHtcbiAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgIGNhc2UgXCJsYWJlbFwiOiB0cmVlSXRlbVsndGV4dCddID0gZGF0YVtrZXldOyBicmVhaztcbiAgICAgICAgY2FzZSBcImltZ1wiIDogdHJlZUl0ZW1bJ2ltZyddID0gZGF0YVtrZXldOyBicmVhaztcbiAgICAgICAgY2FzZSBcImljb25cIiA6XG4gICAgICAgICAgICBpZiAoc2hvd1RvZ2dsZSAmJiBkYXRhW2tleV0gIT0gbnVsbCl7XG4gICAgICAgICAgICAgIHRyZWVJdGVtWyd0b2dnbGUnXVsnaWNvbiddID0gZGF0YVtrZXldO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdHJlZUl0ZW1bJ2ljb24nXSA9IGRhdGFba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiaWRcIiA6XG4gICAgICAgICAgICB0cmVlSXRlbVsnX21ldGEnXSA9ICBkYXRhW2tleV07XG4gICAgICAgICAgICB0cmVlSXRlbVsncGF5bG9hZCddID0ge1xuICAgICAgICAgICAgICBzb3VyY2U6IFwibWVudUl0ZW1cIixcbiAgICAgICAgICAgICAgaWQ6IGRhdGFbJ2lkJ11cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdCA6ICBkYXRhW2tleV07IGJyZWFrO1xuICAgICAgfVxuICAgICAgdHJlZUl0ZW1bJ2NsYXNzZXMnXSA9ICdpcy1jb2xsYXBzZWQnO1xuICAgIH1cbiAgICBlbHNlIGlmKCBkYXRhWydicmFuY2hlcyddICE9IG51bGwgKSB7XG4gICAgICBjdXJyUGFyZW50cy5wdXNoKGRhdGFbJ2lkJ10pO1xuXG4gICAgICAvKkhhbmRsZSBjYXNlcyB3aXRoIG1lbnUgaXRlbSB3aXRoIGNoaWxkcmVuIGJ1dCB3aXRob3V0IHRvZ2dsZSovXG4gICAgICBpZiggIXRvZ2dsZSApIHtcbiAgICAgICAgdHJlZUl0ZW1bJ3BheWxvYWQnXVsnc291cmNlJ10gPSBcIlRvZ2dsZU1lbnVJdGVtXCI7XG4gICAgICAgIHRyZWVJdGVtWydwYXlsb2FkJ11bJ3BhcmVudHMnXSA9IGN1cnJQYXJlbnRzO1xuICAgICAgfVxuXG4gICAgICB0cmVlSXRlbVsnaXRlbXMnXSA9IFtdO1xuICAgICAgZGF0YVtrZXldLmZvckVhY2goIGl0ZW0gPT4ge1xuICAgICAgICB0cmVlSXRlbVsnaXRlbXMnXS5wdXNoKCB0aGlzLnBhcnNlVHJlZShpdGVtLCB0cnVlLCBjdXJyUGFyZW50cykgKTtcbiAgICAgIH0pXG4gICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHRyZWVJdGVtO1xuICB9XG5cbn0iXX0=