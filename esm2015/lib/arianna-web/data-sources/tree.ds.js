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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvdHJlZS5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRS9DLE1BQU0sT0FBTyxRQUFTLFNBQVEsVUFBVTs7OztJQUl0QyxTQUFTO0lBRVQsQ0FBQzs7Ozs7O0lBRVMsU0FBUyxDQUFDLElBQUk7UUFDdEIsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7Ozs7O0lBRUQsVUFBVSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsRUFBRTtRQUMxQixJQUFLLENBQUMsSUFBSSxFQUFHO1lBQ1gsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7U0FDcEI7UUFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU87Ozs7UUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFOztrQkFDbkIsT0FBTyxHQUFHLEVBQUUsQ0FBQyxTQUFTLENBQUM7WUFDN0IsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxFQUFHO2dCQUN0QixJQUFLLE9BQU8sQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUc7b0JBQ3pDLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxjQUFjLENBQUMsQ0FBQztvQkFDaEUsSUFBSyxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUU7d0JBQ2pCLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxxQkFBcUIsQ0FBQztxQkFDOUM7aUJBQ0Y7cUJBQU07b0JBQ0wsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsZUFBZSxFQUFFLGFBQWEsQ0FBQyxDQUFDO29C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RyxDQUFDLENBQUM7d0JBQy9CLFFBQVEsQ0FBQyxTQUFTLENBQUMsR0FBRzs0QkFDcEIsTUFBTSxFQUFFLFVBQVU7NEJBQ2xCLEVBQUUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDO3lCQUNmLENBQUM7d0JBQ0YsTUFBTTtvQkFDVjt3QkFBVyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQUMsTUFBTTtpQkFDN0I7Z0JBQ0QsUUFBUSxDQUFDLFNBQVMsQ0FBQyxHQUFHLGNBQWMsQ0FBQzthQUN0QztpQkFDSSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxJQUFJLEVBQUc7Z0JBQ2xDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBRTdCLGdFQUFnRTtnQkFDaEUsSUFBSSxDQUFDLE1BQU0sRUFBRztvQkFDWixRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsZ0JBQWdCLENBQUM7b0JBQ2pELFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxXQUFXLENBQUM7aUJBQzlDO2dCQUVELFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPOzs7O2dCQUFFLElBQUksQ0FBQyxFQUFFO29CQUN4QixRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBRSxDQUFDO2dCQUNwRSxDQUFDLEVBQUMsQ0FBQTthQUNIO1FBQ0QsQ0FBQyxFQUFDLENBQUE7UUFDRixPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0NBRUY7OztJQXZJQywrQkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgQXdUcmVlRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcblxuICBwdWJsaWMgY3VycmVudEl0ZW06IHN0cmluZztcblxuICB0b2dnbGVOYXYoKSB7XG5cbiAgfVxuXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSkge1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgdXBkYXRlVHJlZShkYXRhLCBwYXJlbnRzLCBpZCl7XG4gICAgaWYgKCAhZGF0YSApIHtcbiAgICAgIGRhdGEgPSB0aGlzLm91dHB1dDtcbiAgICB9XG4gICAgZGF0YS5pdGVtcy5mb3JFYWNoKCAoaXQpID0+IHtcbiAgICAgIGNvbnN0IGNsYXNzZXMgPSBpdFsnY2xhc3NlcyddO1xuICAgICAgaWYoIGl0WydfbWV0YSddID09IGlkICkge1xuICAgICAgICBpZiAoIGNsYXNzZXMuaW5kZXhPZignaXMtZXhwYW5kZWQnKSA+IC0xICkge1xuICAgICAgICAgIGl0WydjbGFzc2VzJ10gPSBjbGFzc2VzLnJlcGxhY2UoL2lzLWV4cGFuZGVkL2csICdpcy1jb2xsYXBzZWQnKTtcbiAgICAgICAgICBpZiAoIGl0Wyd0b2dnbGUnXSApe1xuICAgICAgICAgICAgaXRbJ3RvZ2dsZSddWydpY29uJ10gPSAnbjctaWNvbi1hbmdsZS1yaWdodCc7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0WydjbGFzc2VzJ10gPSBjbGFzc2VzLnJlcGxhY2UoL2lzLWNvbGxhcHNlZC9nLCAnaXMtZXhwYW5kZWQnKTtcbiAgICAgICAgICBpZiAoIGl0Wyd0b2dnbGUnXSApe1xuICAgICAgICAgICAgaXRbJ3RvZ2dsZSddWydpY29uJ10gPSAnbjctaWNvbi1hbmdsZS1kb3duJztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoIHBhcmVudHMuaW5kZXhPZiggaXRbJ19tZXRhJ10gKSA+PSAwICkge1xuICAgICAgICAgIGl0WydjbGFzc2VzJ10gPSBjbGFzc2VzICsgJyBpcy1leHBhbmRlZCc7XG4gICAgICB9XG4gICAgICBpZiggdHlwZW9mIGl0WydpdGVtcyddICE9ICd1bmRlZmluZWQnICYmIGl0WydpdGVtcyddLmxlbmd0aCA+IDAgKSB7XG4gICAgICAgIHRoaXMudXBkYXRlVHJlZShpdCwgcGFyZW50cywgaWQpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMudXBkYXRlKGRhdGEpO1xuICB9XG5cbiAgc2VsZWN0VHJlZUl0ZW0oaWQsIGRhdGEpe1xuICAgIGlmICggIWRhdGEgKSB7XG4gICAgICBkYXRhID0gdGhpcy5vdXRwdXQ7XG4gICAgfVxuXG4gICAgZGF0YS5pdGVtcy5mb3JFYWNoKCAoaXQpID0+IHtcbiAgICAgICAgaWYgKCBpdFsnX21ldGEnXSA9PSBpZCAmJiBpdFsnY2xhc3NlcyddLmluZGV4T2YoJ2lzLWFjdGl2ZScpIDwgMCApIHtcbiAgICAgICAgICAgIGl0WydjbGFzc2VzJ10gPSBpdFsnY2xhc3NlcyddICsgJyBpcy1hY3RpdmUnO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50SXRlbSA9IGl0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGNsYXNzZXMgPSBpdFsnY2xhc3NlcyddO1xuICAgICAgICAgIGl0WydjbGFzc2VzJ10gPSBjbGFzc2VzLnJlcGxhY2UoXCJpcy1hY3RpdmVcIiwgXCJcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYoIHR5cGVvZiBpdFsnaXRlbXMnXSAhPSBcInVuZGVmaW5lZFwiICYmIGl0WydpdGVtcyddLmxlbmd0aCA+IDAgKSB7XG4gICAgICAgICAgdGhpcy5zZWxlY3RUcmVlSXRlbShpZCwgaXQpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy51cGRhdGUoZGF0YSk7XG4gIH1cblxuICB0b2dnbGVTaWRlYmFyKCkge1xuICAgIGxldCBzaWRlYmFyRGF0YSA9IHRoaXMub3V0cHV0O1xuICAgIGlmICggc2lkZWJhckRhdGEuY2xhc3NlcyA9PSBcImlzLWV4cGFuZGVkXCIgKSB7XG4gICAgICBzaWRlYmFyRGF0YS5jbGFzc2VzID0gXCJpcy1jb2xsYXBzZWRcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgICBzaWRlYmFyRGF0YS5jbGFzc2VzID0gXCJpcy1leHBhbmRlZFwiO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZShzaWRlYmFyRGF0YSk7XG4gIH1cblxuICBwcml2YXRlIHBhcnNlRGF0YShkYXRhKSB7XG4gICAgbGV0IHRyZWVPYmogPSB7XG4gICAgICBpdGVtczogW11cbiAgICB9O1xuICAgIGlmKCBkYXRhWydicmFuY2hlcyddKSB7XG4gICAgICBkYXRhWydicmFuY2hlcyddLmZvckVhY2goIGl0ZW0gPT4ge1xuICAgICAgICB0cmVlT2JqWydpdGVtcyddLnB1c2goIHRoaXMucGFyc2VUcmVlKGl0ZW0sIGZhbHNlLCBbXSkgKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZSh0cmVlT2JqKTtcbiAgfVxuXG4gIHByaXZhdGUgcGFyc2VUcmVlKGRhdGEsIHRvZ2dsZSwgcGFyZW50cykge1xuICAgIHZhciBjdXJyUGFyZW50cyA9IFsuLi5wYXJlbnRzXTtcbiAgICBsZXQgdHJlZUl0ZW0gPSB7fTtcbiAgICBjb25zdCBzaG93VG9nZ2xlID0gIHRvZ2dsZSAmJiBkYXRhWydicmFuY2hlcyddICE9IG51bGw7XG4gICAgaWYoIHNob3dUb2dnbGUgKXtcbiAgICAgIHRyZWVJdGVtWyd0b2dnbGUnXSA9IHtcbiAgICAgICAgaWNvbjogJ243LWljb24tYW5nbGUtcmlnaHQnLFxuICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICBzb3VyY2U6IFwidG9nZ2xlXCIsXG4gICAgICAgICAgICBpZDogZGF0YVsnaWQnXSxcbiAgICAgICAgICAgIHBhcmVudHM6IGN1cnJQYXJlbnRzLFxuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgT2JqZWN0LmtleXMoZGF0YSkuZm9yRWFjaCgga2V5ID0+IHtcbiAgICBpZigga2V5ICE9IFwiYnJhbmNoZXNcIiApIHtcbiAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgIGNhc2UgXCJsYWJlbFwiOiB0cmVlSXRlbVsndGV4dCddID0gZGF0YVtrZXldOyBicmVhaztcbiAgICAgICAgY2FzZSBcImltZ1wiIDogdHJlZUl0ZW1bJ2ltZyddID0gZGF0YVtrZXldOyBicmVhaztcbiAgICAgICAgY2FzZSBcImljb25cIiA6XG4gICAgICAgICAgICBpZiAoc2hvd1RvZ2dsZSAmJiBkYXRhW2tleV0gIT0gbnVsbCl7XG4gICAgICAgICAgICAgIHRyZWVJdGVtWyd0b2dnbGUnXVsnaWNvbiddID0gZGF0YVtrZXldO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdHJlZUl0ZW1bJ2ljb24nXSA9IGRhdGFba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiaWRcIiA6XG4gICAgICAgICAgICB0cmVlSXRlbVsnX21ldGEnXSA9ICBkYXRhW2tleV07XG4gICAgICAgICAgICB0cmVlSXRlbVsncGF5bG9hZCddID0ge1xuICAgICAgICAgICAgICBzb3VyY2U6IFwibWVudUl0ZW1cIixcbiAgICAgICAgICAgICAgaWQ6IGRhdGFbJ2lkJ11cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdCA6ICBkYXRhW2tleV07IGJyZWFrO1xuICAgICAgfVxuICAgICAgdHJlZUl0ZW1bJ2NsYXNzZXMnXSA9ICdpcy1jb2xsYXBzZWQnO1xuICAgIH1cbiAgICBlbHNlIGlmKCBkYXRhWydicmFuY2hlcyddICE9IG51bGwgKSB7XG4gICAgICBjdXJyUGFyZW50cy5wdXNoKGRhdGFbJ2lkJ10pO1xuXG4gICAgICAvKkhhbmRsZSBjYXNlcyB3aXRoIG1lbnUgaXRlbSB3aXRoIGNoaWxkcmVuIGJ1dCB3aXRob3V0IHRvZ2dsZSovXG4gICAgICBpZiggIXRvZ2dsZSApIHtcbiAgICAgICAgdHJlZUl0ZW1bJ3BheWxvYWQnXVsnc291cmNlJ10gPSBcIlRvZ2dsZU1lbnVJdGVtXCI7XG4gICAgICAgIHRyZWVJdGVtWydwYXlsb2FkJ11bJ3BhcmVudHMnXSA9IGN1cnJQYXJlbnRzO1xuICAgICAgfVxuXG4gICAgICB0cmVlSXRlbVsnaXRlbXMnXSA9IFtdO1xuICAgICAgZGF0YVtrZXldLmZvckVhY2goIGl0ZW0gPT4ge1xuICAgICAgICB0cmVlSXRlbVsnaXRlbXMnXS5wdXNoKCB0aGlzLnBhcnNlVHJlZShpdGVtLCB0cnVlLCBjdXJyUGFyZW50cykgKTtcbiAgICAgIH0pXG4gICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHRyZWVJdGVtO1xuICB9XG5cbn0iXX0=