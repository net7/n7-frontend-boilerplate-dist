/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataSource } from '@n7-frontend/core';
export class AwTreeDS extends DataSource {
    /**
     * @return {?}
     */
    toggleNav() {
    }
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    transform(data) {
        return data;
    }
    /**
     * @param {?} data
     * @param {?} parents
     * @param {?} id
     * @return {?}
     */
    updateTree(data, parents, id) {
        if (!data) {
            data = this.output;
        }
        data.items.forEach((/**
         * @param {?} it
         * @return {?}
         */
        (it) => {
            /** @type {?} */
            const classes = it['classes'];
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
                this.updateTree(it, parents, id);
            }
        }));
        this.update(data);
    }
    /**
     * @param {?} id
     * @param {?} data
     * @return {?}
     */
    selectTreeItem(id, data) {
        if (!data) {
            data = this.output;
        }
        data.items.forEach((/**
         * @param {?} it
         * @return {?}
         */
        (it) => {
            if (it['_meta'] == id && it['classes'].indexOf('is-active') < 0) {
                it['classes'] = it['classes'] + ' is-active';
                this.currentItem = it;
            }
            else {
                /** @type {?} */
                const classes = it['classes'];
                it['classes'] = classes.replace("is-active", "");
            }
            if (typeof it['items'] != "undefined" && it['items'].length > 0) {
                this.selectTreeItem(id, it);
            }
        }));
        this.update(data);
    }
    /**
     * @return {?}
     */
    toggleSidebar() {
        /** @type {?} */
        let sidebarData = this.output;
        if (sidebarData.classes == "is-expanded") {
            sidebarData.classes = "is-collapsed";
        }
        else {
            sidebarData.classes = "is-expanded";
        }
        this.update(sidebarData);
    }
    /**
     * @private
     * @param {?} data
     * @return {?}
     */
    parseData(data) {
        /** @type {?} */
        let treeObj = {
            items: []
        };
        if (data['branches']) {
            data['branches'].forEach((/**
             * @param {?} item
             * @return {?}
             */
            item => {
                treeObj['items'].push(this.parseTree(item, false, []));
            }));
        }
        this.update(treeObj);
    }
    /**
     * @private
     * @param {?} data
     * @param {?} toggle
     * @param {?} parents
     * @return {?}
     */
    parseTree(data, toggle, parents) {
        /** @type {?} */
        var currParents = [...parents];
        /** @type {?} */
        let treeItem = {};
        /** @type {?} */
        const showToggle = toggle && data['branches'] != null;
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
        key => {
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
                item => {
                    treeItem['items'].push(this.parseTree(item, true, currParents));
                }));
            }
        }));
        return treeItem;
    }
}
if (false) {
    /** @type {?} */
    AwTreeDS.prototype.currentItem;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvdHJlZS5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRS9DLE1BQU0sT0FBTyxRQUFTLFNBQVEsVUFBVTs7OztJQUl0QyxTQUFTO0lBRVQsQ0FBQzs7Ozs7O0lBRVMsU0FBUyxDQUFDLElBQUk7UUFDdEIsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7Ozs7O0lBRUQsVUFBVSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsRUFBRTtRQUMxQixJQUFLLENBQUMsSUFBSSxFQUFHO1lBQ1gsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7U0FDcEI7UUFFRCxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU87Ozs7UUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFOztrQkFDbkIsT0FBTyxHQUFHLEVBQUUsQ0FBQyxTQUFTLENBQUM7WUFDN0IsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxFQUFHO2dCQUN0QixJQUFLLE9BQU8sQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUc7b0JBQ3pDLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxjQUFjLENBQUMsQ0FBQztpQkFDakU7cUJBQU07b0JBQ0wsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsZUFBZSxFQUFFLGFBQWEsQ0FBQyxDQUFDO2lCQUNqRTthQUNGO2lCQUFNLElBQUssT0FBTyxDQUFDLE9BQU8sQ0FBRSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUUsSUFBSSxDQUFDLEVBQUc7Z0JBQzlDLEVBQUUsQ0FBQyxTQUFT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QyxHQUFHLGNBQWMsQ0FBQzthQUN0QztpQkFDSSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxJQUFJLEVBQUc7Z0JBQ2xDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBRTdCLGdFQUFnRTtnQkFDaEUsSUFBSSxDQUFDLE1BQU0sRUFBRztvQkFDWixRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsZ0JBQWdCLENBQUM7b0JBQ2pELFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxXQUFXLENBQUM7aUJBQzlDO2dCQUVELFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPOzs7O2dCQUFFLElBQUksQ0FBQyxFQUFFO29CQUN4QixRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBRSxDQUFDO2dCQUNwRSxDQUFDLEVBQUMsQ0FBQTthQUNIO1FBQ0QsQ0FBQyxFQUFDLENBQUE7UUFDRixPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0NBRUY7OztJQWxJQywrQkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgQXdUcmVlRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcblxuICBwdWJsaWMgY3VycmVudEl0ZW06IHN0cmluZztcblxuICB0b2dnbGVOYXYoKSB7XG5cbiAgfVxuXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSkge1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgdXBkYXRlVHJlZShkYXRhLCBwYXJlbnRzLCBpZCl7XG4gICAgaWYgKCAhZGF0YSApIHtcbiAgICAgIGRhdGEgPSB0aGlzLm91dHB1dDtcbiAgICB9XG5cbiAgICBkYXRhLml0ZW1zLmZvckVhY2goIChpdCkgPT4ge1xuICAgICAgY29uc3QgY2xhc3NlcyA9IGl0WydjbGFzc2VzJ107XG4gICAgICBpZiggaXRbJ19tZXRhJ10gPT0gaWQgKSB7XG4gICAgICAgIGlmICggY2xhc3Nlcy5pbmRleE9mKFwiaXMtZXhwYW5kZWRcIikgPiAtMSApIHtcbiAgICAgICAgICBpdFsnY2xhc3NlcyddID0gY2xhc3Nlcy5yZXBsYWNlKC9pcy1leHBhbmRlZC9nLCBcImlzLWNvbGxhcHNlZFwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdFsnY2xhc3NlcyddID0gY2xhc3Nlcy5yZXBsYWNlKC9pcy1jb2xsYXBzZWQvZywgXCJpcy1leHBhbmRlZFwiKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICggcGFyZW50cy5pbmRleE9mKCBpdFsnX21ldGEnXSApID49IDAgKSB7XG4gICAgICAgICAgaXRbJ2NsYXNzZXMnXSA9IGNsYXNzZXMgKyAnIGlzLWV4cGFuZGVkJztcbiAgICAgIH1cbiAgICAgIGlmKCB0eXBlb2YgaXRbJ2l0ZW1zJ10gIT0gXCJ1bmRlZmluZWRcIiAmJiBpdFsnaXRlbXMnXS5sZW5ndGggPiAwICkge1xuICAgICAgICB0aGlzLnVwZGF0ZVRyZWUoaXQsIHBhcmVudHMsIGlkKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnVwZGF0ZShkYXRhKTtcbiAgfVxuXG4gIHNlbGVjdFRyZWVJdGVtKGlkLCBkYXRhKXtcbiAgICBpZiAoICFkYXRhICkge1xuICAgICAgZGF0YSA9IHRoaXMub3V0cHV0O1xuICAgIH1cblxuICAgIGRhdGEuaXRlbXMuZm9yRWFjaCggKGl0KSA9PiB7XG4gICAgICAgIGlmICggaXRbJ19tZXRhJ10gPT0gaWQgJiYgaXRbJ2NsYXNzZXMnXS5pbmRleE9mKCdpcy1hY3RpdmUnKSA8IDAgKSB7XG4gICAgICAgICAgICBpdFsnY2xhc3NlcyddID0gaXRbJ2NsYXNzZXMnXSArICcgaXMtYWN0aXZlJztcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEl0ZW0gPSBpdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBjbGFzc2VzID0gaXRbJ2NsYXNzZXMnXTtcbiAgICAgICAgICBpdFsnY2xhc3NlcyddID0gY2xhc3Nlcy5yZXBsYWNlKFwiaXMtYWN0aXZlXCIsIFwiXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmKCB0eXBlb2YgaXRbJ2l0ZW1zJ10gIT0gXCJ1bmRlZmluZWRcIiAmJiBpdFsnaXRlbXMnXS5sZW5ndGggPiAwICkge1xuICAgICAgICAgIHRoaXMuc2VsZWN0VHJlZUl0ZW0oaWQsIGl0KTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMudXBkYXRlKGRhdGEpO1xuICB9XG5cbiAgdG9nZ2xlU2lkZWJhcigpIHtcbiAgICBsZXQgc2lkZWJhckRhdGEgPSB0aGlzLm91dHB1dDtcbiAgICBpZiAoIHNpZGViYXJEYXRhLmNsYXNzZXMgPT0gXCJpcy1leHBhbmRlZFwiICkge1xuICAgICAgc2lkZWJhckRhdGEuY2xhc3NlcyA9IFwiaXMtY29sbGFwc2VkXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgc2lkZWJhckRhdGEuY2xhc3NlcyA9IFwiaXMtZXhwYW5kZWRcIjtcbiAgICB9XG4gICAgdGhpcy51cGRhdGUoc2lkZWJhckRhdGEpO1xuICB9XG5cbiAgcHJpdmF0ZSBwYXJzZURhdGEoZGF0YSkge1xuICAgIGxldCB0cmVlT2JqID0ge1xuICAgICAgaXRlbXM6IFtdXG4gICAgfTtcbiAgICBpZiggZGF0YVsnYnJhbmNoZXMnXSkge1xuICAgICAgZGF0YVsnYnJhbmNoZXMnXS5mb3JFYWNoKCBpdGVtID0+IHtcbiAgICAgICAgdHJlZU9ialsnaXRlbXMnXS5wdXNoKCB0aGlzLnBhcnNlVHJlZShpdGVtLCBmYWxzZSwgW10pICk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy51cGRhdGUodHJlZU9iaik7XG4gIH1cblxuICBwcml2YXRlIHBhcnNlVHJlZShkYXRhLCB0b2dnbGUsIHBhcmVudHMpIHtcbiAgICB2YXIgY3VyclBhcmVudHMgPSBbLi4ucGFyZW50c107XG4gICAgbGV0IHRyZWVJdGVtID0ge307XG4gICAgY29uc3Qgc2hvd1RvZ2dsZSA9ICB0b2dnbGUgJiYgZGF0YVsnYnJhbmNoZXMnXSAhPSBudWxsO1xuICAgIGlmKCBzaG93VG9nZ2xlICl7XG4gICAgICB0cmVlSXRlbVsndG9nZ2xlJ10gPSB7XG4gICAgICAgIGljb246ICduNy1pY29uLWFuZ2xlLXJpZ2h0JyxcbiAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgc291cmNlOiBcInRvZ2dsZVwiLFxuICAgICAgICAgICAgaWQ6IGRhdGFbJ2lkJ10sXG4gICAgICAgICAgICBwYXJlbnRzOiBjdXJyUGFyZW50cyxcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIE9iamVjdC5rZXlzKGRhdGEpLmZvckVhY2goIGtleSA9PiB7XG4gICAgaWYoIGtleSAhPSBcImJyYW5jaGVzXCIgKSB7XG4gICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICBjYXNlIFwibGFiZWxcIjogdHJlZUl0ZW1bJ3RleHQnXSA9IGRhdGFba2V5XTsgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJpbWdcIiA6IHRyZWVJdGVtWydpbWcnXSA9IGRhdGFba2V5XTsgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJpY29uXCIgOlxuICAgICAgICAgICAgaWYgKHNob3dUb2dnbGUgJiYgZGF0YVtrZXldICE9IG51bGwpe1xuICAgICAgICAgICAgICB0cmVlSXRlbVsndG9nZ2xlJ11bJ2ljb24nXSA9IGRhdGFba2V5XTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRyZWVJdGVtWydpY29uJ10gPSBkYXRhW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImlkXCIgOlxuICAgICAgICAgICAgdHJlZUl0ZW1bJ19tZXRhJ10gPSAgZGF0YVtrZXldO1xuICAgICAgICAgICAgdHJlZUl0ZW1bJ3BheWxvYWQnXSA9IHtcbiAgICAgICAgICAgICAgc291cmNlOiBcIm1lbnVJdGVtXCIsXG4gICAgICAgICAgICAgIGlkOiBkYXRhWydpZCddXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQgOiAgZGF0YVtrZXldOyBicmVhaztcbiAgICAgIH1cbiAgICAgIHRyZWVJdGVtWydjbGFzc2VzJ10gPSAnaXMtY29sbGFwc2VkJztcbiAgICB9XG4gICAgZWxzZSBpZiggZGF0YVsnYnJhbmNoZXMnXSAhPSBudWxsICkge1xuICAgICAgY3VyclBhcmVudHMucHVzaChkYXRhWydpZCddKTtcblxuICAgICAgLypIYW5kbGUgY2FzZXMgd2l0aCBtZW51IGl0ZW0gd2l0aCBjaGlsZHJlbiBidXQgd2l0aG91dCB0b2dnbGUqL1xuICAgICAgaWYoICF0b2dnbGUgKSB7XG4gICAgICAgIHRyZWVJdGVtWydwYXlsb2FkJ11bJ3NvdXJjZSddID0gXCJUb2dnbGVNZW51SXRlbVwiO1xuICAgICAgICB0cmVlSXRlbVsncGF5bG9hZCddWydwYXJlbnRzJ10gPSBjdXJyUGFyZW50cztcbiAgICAgIH1cblxuICAgICAgdHJlZUl0ZW1bJ2l0ZW1zJ10gPSBbXTtcbiAgICAgIGRhdGFba2V5XS5mb3JFYWNoKCBpdGVtID0+IHtcbiAgICAgICAgdHJlZUl0ZW1bJ2l0ZW1zJ10ucHVzaCggdGhpcy5wYXJzZVRyZWUoaXRlbSwgdHJ1ZSwgY3VyclBhcmVudHMpICk7XG4gICAgICB9KVxuICAgIH1cbiAgICB9KVxuICAgIHJldHVybiB0cmVlSXRlbTtcbiAgfVxuXG59Il19