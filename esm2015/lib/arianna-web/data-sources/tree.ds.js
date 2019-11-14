/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataSource } from '@n7-frontend/core';
export class AwTreeDS extends DataSource {
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    transform(data) {
        this.icons = this.options.icons;
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
        if (this.currentItem && this.currentItem["_meta"] == id) {
            return;
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
     * @param {?} data
     * @return {?}
     */
    parseData(data) {
        /** @type {?} */
        let treeObj = {
            items: []
        };
        if (data['branches'] && data['branches'].length > 0) {
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
        const showToggle = toggle && data['branches'] != null && data['branches'].length > 0;
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
                    if (item['img'] != "" && item['img'] != null) {
                        treeItem['iconright'] = "n7-icon-images";
                    }
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
    /** @type {?} */
    AwTreeDS.prototype.icons;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvdHJlZS5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRS9DLE1BQU0sT0FBTyxRQUFTLFNBQVEsVUFBVTs7Ozs7O0lBSzVCLFNBQVMsQ0FBQyxJQUFJO1FBQ3RCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUE7UUFDL0IsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7Ozs7O0lBRUQsVUFBVSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsRUFBRTtRQUMxQixJQUFLLENBQUMsSUFBSSxFQUFHO1lBQ1gsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7U0FDcEI7UUFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU87Ozs7UUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFOztrQkFDbkIsT0FBTyxHQUFHLEVBQUUsQ0FBQyxTQUFTLENBQUM7WUFDN0IsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxFQUFHO2dCQUN0QixJQUFLLE9BQU8sSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFHO29CQUNwRCxFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsY0FBYyxDQUFDLENBQUM7b0JBQ2hFLElBQUssRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFO3dCQUNqQixFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcscUJBQXFCLENBQUM7cUJBQzlDO2lCQUNGO3FCQUFNO29CQUNMLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxPQUFP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QUFJLEVBQUc7d0JBQzlDLFFBQVEsQ0FBQyxXQUFXLENBQUMsR0FBRyxnQkFBZ0IsQ0FBQztxQkFDMUM7b0JBRUQsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsV0FBVyxDQUFDLENBQUUsQ0FBQztnQkFDcEUsQ0FBQyxFQUFDLENBQUE7YUFDSDtRQUNELENBQUMsRUFBQyxDQUFBO1FBQ0YsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztDQUVGOzs7SUE3SUMsK0JBQTJCOztJQUMzQix5QkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgQXdUcmVlRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcblxuICBwdWJsaWMgY3VycmVudEl0ZW06IHN0cmluZztcbiAgcHVibGljIGljb25zOiBhbnk7XG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKSB7XG4gICAgdGhpcy5pY29ucyA9IHRoaXMub3B0aW9ucy5pY29uc1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgdXBkYXRlVHJlZShkYXRhLCBwYXJlbnRzLCBpZCl7XG4gICAgaWYgKCAhZGF0YSApIHtcbiAgICAgIGRhdGEgPSB0aGlzLm91dHB1dDtcbiAgICB9XG4gICAgZGF0YS5pdGVtcy5mb3JFYWNoKCAoaXQpID0+IHtcbiAgICAgIGNvbnN0IGNsYXNzZXMgPSBpdFsnY2xhc3NlcyddO1xuICAgICAgaWYoIGl0WydfbWV0YSddID09IGlkICkge1xuICAgICAgICBpZiAoIGNsYXNzZXMgJiYgY2xhc3Nlcy5pbmRleE9mKCdpcy1leHBhbmRlZCcpID4gLTEgKSB7XG4gICAgICAgICAgaXRbJ2NsYXNzZXMnXSA9IGNsYXNzZXMucmVwbGFjZSgvaXMtZXhwYW5kZWQvZywgJ2lzLWNvbGxhcHNlZCcpO1xuICAgICAgICAgIGlmICggaXRbJ3RvZ2dsZSddICl7XG4gICAgICAgICAgICBpdFsndG9nZ2xlJ11bJ2ljb24nXSA9ICduNy1pY29uLWFuZ2xlLXJpZ2h0JztcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRbJ2NsYXNzZXMnXSA9IGNsYXNzZXMucmVwbGFjZSgvaXMtY29sbGFwc2VkL2csICdpcy1leHBhbmRlZCcpO1xuICAgICAgICAgIGlmICggaXRbJ3RvZ2dsZSddICl7XG4gICAgICAgICAgICBpdFsndG9nZ2xlJ11bJ2ljb24nXSA9ICduNy1pY29uLWFuZ2xlLWRvd24nO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICggcGFyZW50cyAmJiBwYXJlbnRzLmluZGV4T2YoIGl0WydfbWV0YSddICkgPj0gMCApIHtcbiAgICAgICAgICBpdFsnY2xhc3NlcyddID0gY2xhc3NlcyArICcgaXMtZXhwYW5kZWQnO1xuICAgICAgfVxuICAgICAgaWYoIHR5cGVvZiBpdFsnaXRlbXMnXSAhPSAndW5kZWZpbmVkJyAmJiBpdFsnaXRlbXMnXS5sZW5ndGggPiAwICkge1xuICAgICAgICB0aGlzLnVwZGF0ZVRyZWUoaXQsIHBhcmVudHMsIGlkKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnVwZGF0ZShkYXRhKTtcbiAgfVxuXG4gIHNlbGVjdFRyZWVJdGVtKGlkLCBkYXRhKXtcbiAgICBpZiAoICFkYXRhICkge1xuICAgICAgZGF0YSA9IHRoaXMub3V0cHV0O1xuICAgIH1cblxuICAgIGlmKCB0aGlzLmN1cnJlbnRJdGVtICYmIHRoaXMuY3VycmVudEl0ZW1bXCJfbWV0YVwiXSA9PSBpZCApe1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGRhdGEuaXRlbXMuZm9yRWFjaCggKGl0KSA9PiB7XG4gICAgICAgIGlmICggaXRbJ19tZXRhJ10gPT0gaWQgJiYgaXRbJ2NsYXNzZXMnXS5pbmRleE9mKCdpcy1hY3RpdmUnKSA8IDAgKSB7XG4gICAgICAgICAgICBpdFsnY2xhc3NlcyddID0gaXRbJ2NsYXNzZXMnXSArICcgaXMtYWN0aXZlJztcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEl0ZW0gPSBpdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBjbGFzc2VzID0gaXRbJ2NsYXNzZXMnXTtcbiAgICAgICAgICBpdFsnY2xhc3NlcyddID0gY2xhc3Nlcy5yZXBsYWNlKFwiaXMtYWN0aXZlXCIsIFwiXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmKCB0eXBlb2YgaXRbJ2l0ZW1zJ10gIT0gXCJ1bmRlZmluZWRcIiAmJiBpdFsnaXRlbXMnXS5sZW5ndGggPiAwICkge1xuICAgICAgICAgIHRoaXMuc2VsZWN0VHJlZUl0ZW0oaWQsIGl0KTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMudXBkYXRlKGRhdGEpO1xuICB9XG5cbiAgdG9nZ2xlU2lkZWJhcigpIHtcbiAgICBsZXQgc2lkZWJhckRhdGEgPSB0aGlzLm91dHB1dDtcbiAgICBpZiAoIHNpZGViYXJEYXRhLmNsYXNzZXMgPT0gXCJpcy1leHBhbmRlZFwiICkge1xuICAgICAgc2lkZWJhckRhdGEuY2xhc3NlcyA9IFwiaXMtY29sbGFwc2VkXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgc2lkZWJhckRhdGEuY2xhc3NlcyA9IFwiaXMtZXhwYW5kZWRcIjtcbiAgICB9XG4gICAgdGhpcy51cGRhdGUoc2lkZWJhckRhdGEpO1xuICB9XG5cbiAgcHVibGljIHBhcnNlRGF0YShkYXRhKSB7XG4gICAgbGV0IHRyZWVPYmogPSB7XG4gICAgICBpdGVtczogW11cbiAgICB9O1xuICAgIGlmKCBkYXRhWydicmFuY2hlcyddICYmIGRhdGFbJ2JyYW5jaGVzJ10ubGVuZ3RoID4gMCApIHtcbiAgICAgIGRhdGFbJ2JyYW5jaGVzJ10uZm9yRWFjaCggaXRlbSA9PiB7XG4gICAgICAgIHRyZWVPYmpbJ2l0ZW1zJ10ucHVzaCggdGhpcy5wYXJzZVRyZWUoaXRlbSwgZmFsc2UsIFtdKSApO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMudXBkYXRlKHRyZWVPYmopO1xuICB9XG5cbiAgcHJpdmF0ZSBwYXJzZVRyZWUoZGF0YSwgdG9nZ2xlLCBwYXJlbnRzKSB7XG4gICAgdmFyIGN1cnJQYXJlbnRzID0gWy4uLnBhcmVudHNdO1xuICAgIGxldCB0cmVlSXRlbSA9IHt9O1xuICAgIGNvbnN0IHNob3dUb2dnbGUgPSAgdG9nZ2xlICYmIGRhdGFbJ2JyYW5jaGVzJ10gIT0gbnVsbCAmJiBkYXRhWydicmFuY2hlcyddLmxlbmd0aCA+IDAgO1xuICAgIGlmKCBzaG93VG9nZ2xlICl7XG4gICAgICB0cmVlSXRlbVsndG9nZ2xlJ10gPSB7XG4gICAgICAgIGljb246ICduNy1pY29uLWFuZ2xlLXJpZ2h0JyxcbiAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgc291cmNlOiBcInRvZ2dsZVwiLFxuICAgICAgICAgICAgaWQ6IGRhdGFbJ2lkJ10sXG4gICAgICAgICAgICBwYXJlbnRzOiBjdXJyUGFyZW50cyxcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIE9iamVjdC5rZXlzKGRhdGEpLmZvckVhY2goIGtleSA9PiB7XG4gICAgaWYoIGtleSAhPSBcImJyYW5jaGVzXCIgKSB7XG4gICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICBjYXNlIFwibGFiZWxcIjogdHJlZUl0ZW1bJ3RleHQnXSA9IGRhdGFba2V5XTsgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJpbWdcIiA6IHRyZWVJdGVtWydpbWcnXSA9IGRhdGFba2V5XTsgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJpY29uXCIgOlxuICAgICAgICAgICAgaWYgKHNob3dUb2dnbGUgJiYgZGF0YVtrZXldICE9IG51bGwpe1xuICAgICAgICAgICAgICB0cmVlSXRlbVsndG9nZ2xlJ11bJ2ljb24nXSA9IGRhdGFba2V5XTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRyZWVJdGVtWydpY29uJ10gPSBkYXRhW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImlkXCIgOlxuICAgICAgICAgICAgdHJlZUl0ZW1bJ19tZXRhJ10gPSAgZGF0YVtrZXldO1xuICAgICAgICAgICAgdHJlZUl0ZW1bJ3BheWxvYWQnXSA9IHtcbiAgICAgICAgICAgICAgc291cmNlOiBcIm1lbnVJdGVtXCIsXG4gICAgICAgICAgICAgIGlkOiBkYXRhWydpZCddXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQgOiAgZGF0YVtrZXldOyBicmVhaztcbiAgICAgIH1cbiAgICAgIHRyZWVJdGVtWydjbGFzc2VzJ10gPSAnaXMtY29sbGFwc2VkJztcbiAgICB9XG4gICAgZWxzZSBpZiggZGF0YVsnYnJhbmNoZXMnXSAhPSBudWxsICkge1xuICAgICAgY3VyclBhcmVudHMucHVzaChkYXRhWydpZCddKTtcblxuICAgICAgLypIYW5kbGUgY2FzZXMgd2l0aCBtZW51IGl0ZW0gd2l0aCBjaGlsZHJlbiBidXQgd2l0aG91dCB0b2dnbGUqL1xuICAgICAgaWYoICF0b2dnbGUgKSB7XG4gICAgICAgIHRyZWVJdGVtWydwYXlsb2FkJ11bJ3NvdXJjZSddID0gXCJUb2dnbGVNZW51SXRlbVwiO1xuICAgICAgICB0cmVlSXRlbVsncGF5bG9hZCddWydwYXJlbnRzJ10gPSBjdXJyUGFyZW50cztcbiAgICAgIH1cblxuICAgICAgdHJlZUl0ZW1bJ2l0ZW1zJ10gPSBbXTtcbiAgICAgIGRhdGFba2V5XS5mb3JFYWNoKCBpdGVtID0+IHtcbiAgICAgICAgaWYgKCBpdGVtWydpbWcnXSAhPSBcIlwiICYmIGl0ZW1bJ2ltZyddICE9IG51bGwgKSB7XG4gICAgICAgICAgdHJlZUl0ZW1bJ2ljb25yaWdodCddID0gXCJuNy1pY29uLWltYWdlc1wiO1xuICAgICAgICB9XG5cbiAgICAgICAgdHJlZUl0ZW1bJ2l0ZW1zJ10ucHVzaCggdGhpcy5wYXJzZVRyZWUoaXRlbSwgdHJ1ZSwgY3VyclBhcmVudHMpICk7XG4gICAgICB9KVxuICAgIH1cbiAgICB9KVxuICAgIHJldHVybiB0cmVlSXRlbTtcbiAgfVxuXG59Il19