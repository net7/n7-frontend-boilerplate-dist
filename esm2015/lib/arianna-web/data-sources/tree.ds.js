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
        /** @type {?} */
        const tree = this.updateTreeData(data, parents, id);
        this.update(tree);
    }
    /**
     * @private
     * @param {?} data
     * @param {?} parents
     * @param {?} id
     * @return {?}
     */
    updateTreeData(data, parents, id) {
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
                it['classes'] = classes.replace(/is-collapsed/g, 'is-expanded');
                if (it['toggle']) {
                    it['toggle']['icon'] = 'n7-icon-angle-down';
                }
            }
            if (typeof it['items'] != 'undefined' && it['items'].length > 0) {
                this.updateTreeData(it, parents, id);
            }
        }));
        return data;
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
     * @param {?} response
     * @return {?}
     */
    parseData(response) {
        /** @type {?} */
        let treeObj = {
            items: []
        };
        /** @type {?} */
        var data = response['tree'];
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
        if (response['currentItem'] == response['currentItem'] != null) {
            //this.currentItem = response['currentItem'];
            this.selectTreeItem(response['currentItem'], null);
            this.updateTree(null, this.currentItem.parents, response['currentItem']);
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvdHJlZS5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRS9DLE1BQU0sT0FBTyxRQUFTLFNBQVEsVUFBVTs7Ozs7O0lBSzVCLFNBQVMsQ0FBQyxJQUFJO1FBQ3RCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUE7UUFDL0IsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7Ozs7O0lBRUQsVUFBVSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsRUFBRTs7Y0FFcEIsSUFBSSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQUM7UUFDbkQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUVwQixDQUFDOzs7Ozs7OztJQUNPLGNBQWMsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUU7UUFDdEMsSUFBSyxDQUFDLElBQUksRUFBRztZQUNYLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQ3BCO1FBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPOzs7O1FBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRTs7a0JBQ25CLE9BQU8sR0FBRyxFQUFFLENBQUMsU0FBUyxDQUFDO1lBQzdCLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRztnQkFDdEIsSUFBSyxPQUFPLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRztvQkFDcEQsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLGNBQWMsQ0FBQyxDQUFDO29CQUNoRSxJQUFLLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRTt3QkFDakIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLHFCQUFxQixDQUFDO3FCQUM5QztpQkFDRjtxQkFBTTtvQkFDTCxFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUUsYUFBYSxDQUFDLENBQUM7b0JBQ2hFLElBQUssRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFO3dCQUNqQixFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsb0JBQW9CLENBQUM7cUJBQzdDO2lCQUNGO2FBQ0Y7aUJBQU0sSUFBSyxPQUFPLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBRSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUUsSUFBSSxDQUFDLEVBQUc7Z0JBQ3pELEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLGVBQWUsRUFBRSxhQUFhLENBQUMsQ0FBQztnQkFDaEUsSUFBSyxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUU7b0JBQ2pCLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxvQkFBb0IsQ0FBQztpQkFDN0M7YUFDSjtZQUNELElBQUksT0FBTyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksV0FBVyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFHO2dCQUNoRSxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUM7YUFDdEM7UUFDSCxDQUFDLEVBQUMsQ0FBQztRQUNILE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7O0lBRUQsY0FBYyxDQUFDLEVBQUUsRUFBRSxJQUFJO1FBQ3JCLElBQUssQ0FBQyxJQUFJLEVBQUc7WUFDWCxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUNwQjtRQUVELElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUN2RCxPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU87Ozs7UUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFO1lBQ3ZCLElBQUssRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsRUFBRztnQkFDL0QsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxZQUFZLENBQUM7Z0JBQzdDLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO2FBQ3pCO2lCQUFNOztzQkFDQyxPQUFPLEdBQUcsRUFBRSxDQUFDLFNBQVMsQ0FBQztnQkFDN0IsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDO2FBQ2xEO1lBQ0QsSUFBSSxPQUFPLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxXQUFXLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUc7Z0JBQ2hFLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO2FBQzdCO1FBQ0wsQ0FBQyxFQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BCLENBQUM7Ozs7SUFFRCxhQUFhOztZQUNQLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTTtRQUM3QixJQUFLLFdBQVcsQ0FBQyxPQUFPLElBQUksYUFBYSxFQUFHO1lBQzFDLFdBQVcsQ0FBQyxPQUFPLEdBQUcsY0FBYyxDQUFDO1NBQ3RDO2FBQU07WUFDSCxXQUFXLENBQUMsT0FBTyxHQUFHLGFBQWEsQ0FBQztTQUN2QztRQUNELElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDM0IsQ0FBQzs7Ozs7SUFFTSxTQUFTLENBQUMsUUFBUTs7WUFDbkIsT0FBTyxHQUFHO1lBQ1osS0FBSyxFQUFFLEVBQUU7U0FDVjs7WUFFRyxJQUFJLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQztRQUMzQixJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRztZQUNwRCxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTzs7OztZQUFFLElBQUksQ0FBQyxFQUFFO2dCQUMvQixPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBRSxDQUFDO1lBQzNELENBQUMsRUFBQyxDQUFDO1NBQ0o7UUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JCLElBQUksUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxJQUFJLEVBQUU7WUFDOUQsNkNBQTZDO1lBQzdDLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ25ELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1NBRTFFO0lBQ0gsQ0FBQzs7Ozs7Ozs7SUFFTyxTQUFTLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxPQUFPOztZQUNqQyxXQUFXLEdBQUcsQ0FBQyxHQUFHLE9BQU8sQ0FBQzs7WUFDMUIsUUFBUSxHQUFHLEVBQUU7O2NBQ1gsVUFBVSxHQUFJLE1BQU0sSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQztRQUNyRixJQUFJLFVBQVUsRUFBRTtZQUNkLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRztnQkFDbkIsSUFBSSxFQUFFLHFCQUFxQjtnQkFDM0IsT0FBTyxFQUFFO29CQUNMLE1BQU0sRUFBRSxRQUFRO29CQUNoQixFQUFFLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQztvQkFDZCxPQUFPLEVBQUUsV0FBVztpQkFDckI7YUFDSixDQUFBO1NBQ0Y7UUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU87Ozs7UUFBRSxHQUFHLENBQUMsRUFBRTtZQUNqQyxJQUFJLEdBQUcsSUFBSSxVQUFVLEVBQUc7Z0JBQ3RCLFFBQVEsR0FBRyxFQUFFO29CQUNYLEtBQUssT0FBTzt3QkFBRSxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUFDLE1BQU07b0JBQ2xELEtBQUssS0FBSzt3QkFBRyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUFDLE1BQU07b0JBQ2hELEtBQUssTUFBTTt3QkFDUCxJQUFJLFVBQVUsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxFQUFDOzRCQUNsQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3lCQUN4Qzs2QkFBTTs0QkFDTCxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3lCQUM5Qjt3QkFDRCxNQUFNO29CQUNWLEtBQUssSUFBSTt3QkFDTCxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUMvQixRQUFRLENBQUMsU0FBUyxDQUFDLEdBQUc7NEJBQ3BCLE1BQU0sRUFBRSxVQUFVOzRCQUNsQixFQUFFLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQzt5QkFDZixDQUFDO3dCQUNGLE1BQU07b0JBQ1Y7d0JBQVcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUFDLE1BQU07aUJBQzdCO2dCQUNELFFBQVEsQ0FBQyxTQUFTLENBQUMsR0FBRyxjQUFjLENBQUM7Z0JBQ3JDLFFBQVEsQ0FBQyxTQUFTLENBQUMsR0FBRyxXQUFXLENBQUM7YUFFbkM7aUJBQ0ksSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksSUFBSSxFQUFHO2dCQUNsQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUU3QixnRUFBZ0U7Z0JBQ2hFLElBQUksQ0FBQyxNQUFNLEVBQUc7b0JBQ1osUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLGdCQUFnQixDQUFDO29CQUNqRCxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsV0FBVyxDQUFDO2lCQUM5QztnQkFFRCxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDO2dCQUN2QixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTzs7OztnQkFBRSxJQUFJLENBQUMsRUFBRTtvQkFDeEIsSUFBSyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLEVBQUc7d0JBQzlDLFFBQVEsQ0FBQyxXQUFXLENBQUMsR0FBRyxnQkFBZ0IsQ0FBQztxQkFDMUM7b0JBRUQsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsV0FBVyxDQUFDLENBQUUsQ0FBQztnQkFDcEUsQ0FBQyxFQUFDLENBQUE7YUFDSDtRQUNELENBQUMsRUFBQyxDQUFBO1FBQ0YsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztDQUVGOzs7SUFoS0MsK0JBQXdCOztJQUN4Qix5QkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgQXdUcmVlRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcblxuICBwdWJsaWMgY3VycmVudEl0ZW06IGFueTtcbiAgcHVibGljIGljb25zOiBhbnk7XG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKSB7XG4gICAgdGhpcy5pY29ucyA9IHRoaXMub3B0aW9ucy5pY29uc1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgdXBkYXRlVHJlZShkYXRhLCBwYXJlbnRzLCBpZCkge1xuXG4gICAgY29uc3QgdHJlZSA9IHRoaXMudXBkYXRlVHJlZURhdGEoZGF0YSwgcGFyZW50cywgaWQpO1xuICAgIHRoaXMudXBkYXRlKHRyZWUpO1xuXG4gIH1cbiAgcHJpdmF0ZSB1cGRhdGVUcmVlRGF0YShkYXRhLCBwYXJlbnRzLCBpZCl7XG4gICAgaWYgKCAhZGF0YSApIHtcbiAgICAgIGRhdGEgPSB0aGlzLm91dHB1dDtcbiAgICB9XG4gICAgZGF0YS5pdGVtcy5mb3JFYWNoKCAoaXQpID0+IHtcbiAgICAgIGNvbnN0IGNsYXNzZXMgPSBpdFsnY2xhc3NlcyddO1xuICAgICAgaWYoIGl0WydfbWV0YSddID09IGlkICkge1xuICAgICAgICBpZiAoIGNsYXNzZXMgJiYgY2xhc3Nlcy5pbmRleE9mKCdpcy1leHBhbmRlZCcpID4gLTEgKSB7XG4gICAgICAgICAgaXRbJ2NsYXNzZXMnXSA9IGNsYXNzZXMucmVwbGFjZSgvaXMtZXhwYW5kZWQvZywgJ2lzLWNvbGxhcHNlZCcpO1xuICAgICAgICAgIGlmICggaXRbJ3RvZ2dsZSddICl7XG4gICAgICAgICAgICBpdFsndG9nZ2xlJ11bJ2ljb24nXSA9ICduNy1pY29uLWFuZ2xlLXJpZ2h0JztcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRbJ2NsYXNzZXMnXSA9IGNsYXNzZXMucmVwbGFjZSgvaXMtY29sbGFwc2VkL2csICdpcy1leHBhbmRlZCcpO1xuICAgICAgICAgIGlmICggaXRbJ3RvZ2dsZSddICl7XG4gICAgICAgICAgICBpdFsndG9nZ2xlJ11bJ2ljb24nXSA9ICduNy1pY29uLWFuZ2xlLWRvd24nO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICggcGFyZW50cyAmJiBwYXJlbnRzLmluZGV4T2YoIGl0WydfbWV0YSddICkgPj0gMCApIHtcbiAgICAgICAgICBpdFsnY2xhc3NlcyddID0gY2xhc3Nlcy5yZXBsYWNlKC9pcy1jb2xsYXBzZWQvZywgJ2lzLWV4cGFuZGVkJyk7XG4gICAgICAgICAgaWYgKCBpdFsndG9nZ2xlJ10gKXtcbiAgICAgICAgICAgIGl0Wyd0b2dnbGUnXVsnaWNvbiddID0gJ243LWljb24tYW5nbGUtZG93bic7XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYoIHR5cGVvZiBpdFsnaXRlbXMnXSAhPSAndW5kZWZpbmVkJyAmJiBpdFsnaXRlbXMnXS5sZW5ndGggPiAwICkge1xuICAgICAgICB0aGlzLnVwZGF0ZVRyZWVEYXRhKGl0LCBwYXJlbnRzLCBpZCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBzZWxlY3RUcmVlSXRlbShpZCwgZGF0YSl7XG4gICAgaWYgKCAhZGF0YSApIHtcbiAgICAgIGRhdGEgPSB0aGlzLm91dHB1dDtcbiAgICB9XG5cbiAgICBpZiggdGhpcy5jdXJyZW50SXRlbSAmJiB0aGlzLmN1cnJlbnRJdGVtW1wiX21ldGFcIl0gPT0gaWQgKXtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBkYXRhLml0ZW1zLmZvckVhY2goIChpdCkgPT4ge1xuICAgICAgICBpZiAoIGl0WydfbWV0YSddID09IGlkICYmIGl0WydjbGFzc2VzJ10uaW5kZXhPZignaXMtYWN0aXZlJykgPCAwICkge1xuICAgICAgICAgICAgaXRbJ2NsYXNzZXMnXSA9IGl0WydjbGFzc2VzJ10gKyAnIGlzLWFjdGl2ZSc7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRJdGVtID0gaXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgY2xhc3NlcyA9IGl0WydjbGFzc2VzJ107XG4gICAgICAgICAgaXRbJ2NsYXNzZXMnXSA9IGNsYXNzZXMucmVwbGFjZShcImlzLWFjdGl2ZVwiLCBcIlwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiggdHlwZW9mIGl0WydpdGVtcyddICE9IFwidW5kZWZpbmVkXCIgJiYgaXRbJ2l0ZW1zJ10ubGVuZ3RoID4gMCApIHtcbiAgICAgICAgICB0aGlzLnNlbGVjdFRyZWVJdGVtKGlkLCBpdCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnVwZGF0ZShkYXRhKTtcbiAgfVxuXG4gIHRvZ2dsZVNpZGViYXIoKSB7XG4gICAgbGV0IHNpZGViYXJEYXRhID0gdGhpcy5vdXRwdXQ7XG4gICAgaWYgKCBzaWRlYmFyRGF0YS5jbGFzc2VzID09IFwiaXMtZXhwYW5kZWRcIiApIHtcbiAgICAgIHNpZGViYXJEYXRhLmNsYXNzZXMgPSBcImlzLWNvbGxhcHNlZFwiO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHNpZGViYXJEYXRhLmNsYXNzZXMgPSBcImlzLWV4cGFuZGVkXCI7XG4gICAgfVxuICAgIHRoaXMudXBkYXRlKHNpZGViYXJEYXRhKTtcbiAgfVxuXG4gIHB1YmxpYyBwYXJzZURhdGEocmVzcG9uc2UpIHtcbiAgICBsZXQgdHJlZU9iaiA9IHtcbiAgICAgIGl0ZW1zOiBbXVxuICAgIH07XG5cbiAgICB2YXIgZGF0YSA9IHJlc3BvbnNlWyd0cmVlJ107XG4gICAgaWYoIGRhdGFbJ2JyYW5jaGVzJ10gJiYgZGF0YVsnYnJhbmNoZXMnXS5sZW5ndGggPiAwICkge1xuICAgICAgZGF0YVsnYnJhbmNoZXMnXS5mb3JFYWNoKCBpdGVtID0+IHtcbiAgICAgICAgdHJlZU9ialsnaXRlbXMnXS5wdXNoKCB0aGlzLnBhcnNlVHJlZShpdGVtLCBmYWxzZSwgW10pICk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy51cGRhdGUodHJlZU9iaik7XG4gICAgaWYgKHJlc3BvbnNlWydjdXJyZW50SXRlbSddID09IHJlc3BvbnNlWydjdXJyZW50SXRlbSddICE9IG51bGwpIHtcbiAgICAgIC8vdGhpcy5jdXJyZW50SXRlbSA9IHJlc3BvbnNlWydjdXJyZW50SXRlbSddO1xuICAgICAgdGhpcy5zZWxlY3RUcmVlSXRlbShyZXNwb25zZVsnY3VycmVudEl0ZW0nXSwgbnVsbCk7XG4gICAgICB0aGlzLnVwZGF0ZVRyZWUobnVsbCwgdGhpcy5jdXJyZW50SXRlbS5wYXJlbnRzLCByZXNwb25zZVsnY3VycmVudEl0ZW0nXSk7XG5cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHBhcnNlVHJlZShkYXRhLCB0b2dnbGUsIHBhcmVudHMpIHtcbiAgICB2YXIgY3VyclBhcmVudHMgPSBbLi4ucGFyZW50c107XG4gICAgbGV0IHRyZWVJdGVtID0ge307XG4gICAgY29uc3Qgc2hvd1RvZ2dsZSA9ICB0b2dnbGUgJiYgZGF0YVsnYnJhbmNoZXMnXSAhPSBudWxsICYmIGRhdGFbJ2JyYW5jaGVzJ10ubGVuZ3RoID4gMCA7XG4gICAgaWYoIHNob3dUb2dnbGUgKXtcbiAgICAgIHRyZWVJdGVtWyd0b2dnbGUnXSA9IHtcbiAgICAgICAgaWNvbjogJ243LWljb24tYW5nbGUtcmlnaHQnLFxuICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICBzb3VyY2U6IFwidG9nZ2xlXCIsXG4gICAgICAgICAgICBpZDogZGF0YVsnaWQnXSxcbiAgICAgICAgICAgIHBhcmVudHM6IGN1cnJQYXJlbnRzLFxuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgT2JqZWN0LmtleXMoZGF0YSkuZm9yRWFjaCgga2V5ID0+IHtcbiAgICBpZigga2V5ICE9IFwiYnJhbmNoZXNcIiApIHtcbiAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgIGNhc2UgXCJsYWJlbFwiOiB0cmVlSXRlbVsndGV4dCddID0gZGF0YVtrZXldOyBicmVhaztcbiAgICAgICAgY2FzZSBcImltZ1wiIDogdHJlZUl0ZW1bJ2ltZyddID0gZGF0YVtrZXldOyBicmVhaztcbiAgICAgICAgY2FzZSBcImljb25cIiA6XG4gICAgICAgICAgICBpZiAoc2hvd1RvZ2dsZSAmJiBkYXRhW2tleV0gIT0gbnVsbCl7XG4gICAgICAgICAgICAgIHRyZWVJdGVtWyd0b2dnbGUnXVsnaWNvbiddID0gZGF0YVtrZXldO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdHJlZUl0ZW1bJ2ljb24nXSA9IGRhdGFba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiaWRcIiA6XG4gICAgICAgICAgICB0cmVlSXRlbVsnX21ldGEnXSA9ICBkYXRhW2tleV07XG4gICAgICAgICAgICB0cmVlSXRlbVsncGF5bG9hZCddID0ge1xuICAgICAgICAgICAgICBzb3VyY2U6IFwibWVudUl0ZW1cIixcbiAgICAgICAgICAgICAgaWQ6IGRhdGFbJ2lkJ11cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdCA6ICBkYXRhW2tleV07IGJyZWFrO1xuICAgICAgfVxuICAgICAgdHJlZUl0ZW1bJ2NsYXNzZXMnXSA9ICdpcy1jb2xsYXBzZWQnO1xuICAgICAgdHJlZUl0ZW1bJ3BhcmVudHMnXSA9IGN1cnJQYXJlbnRzO1xuXG4gICAgfVxuICAgIGVsc2UgaWYoIGRhdGFbJ2JyYW5jaGVzJ10gIT0gbnVsbCApIHtcbiAgICAgIGN1cnJQYXJlbnRzLnB1c2goZGF0YVsnaWQnXSk7XG5cbiAgICAgIC8qSGFuZGxlIGNhc2VzIHdpdGggbWVudSBpdGVtIHdpdGggY2hpbGRyZW4gYnV0IHdpdGhvdXQgdG9nZ2xlKi9cbiAgICAgIGlmKCAhdG9nZ2xlICkge1xuICAgICAgICB0cmVlSXRlbVsncGF5bG9hZCddWydzb3VyY2UnXSA9IFwiVG9nZ2xlTWVudUl0ZW1cIjtcbiAgICAgICAgdHJlZUl0ZW1bJ3BheWxvYWQnXVsncGFyZW50cyddID0gY3VyclBhcmVudHM7XG4gICAgICB9XG5cbiAgICAgIHRyZWVJdGVtWydpdGVtcyddID0gW107XG4gICAgICBkYXRhW2tleV0uZm9yRWFjaCggaXRlbSA9PiB7XG4gICAgICAgIGlmICggaXRlbVsnaW1nJ10gIT0gXCJcIiAmJiBpdGVtWydpbWcnXSAhPSBudWxsICkge1xuICAgICAgICAgIHRyZWVJdGVtWydpY29ucmlnaHQnXSA9IFwibjctaWNvbi1pbWFnZXNcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRyZWVJdGVtWydpdGVtcyddLnB1c2goIHRoaXMucGFyc2VUcmVlKGl0ZW0sIHRydWUsIGN1cnJQYXJlbnRzKSApO1xuICAgICAgfSlcbiAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gdHJlZUl0ZW07XG4gIH1cblxufSJdfQ==