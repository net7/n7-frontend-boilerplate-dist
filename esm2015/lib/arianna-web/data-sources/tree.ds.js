/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataSource } from '@n7-frontend/core';
export class AwTreeDS extends DataSource {
    constructor() {
        super(...arguments);
        this._getCachedData = (/**
         * @return {?}
         */
        () => {
            return AwTreeDS.dataCache[this.rootId];
        });
        this._normalize = (/**
         * @param {?} __0
         * @return {?}
         */
        ({ id, label, icon, img, branches }) => {
            /** @type {?} */
            const hasBranches = !!(Array.isArray(branches) && branches.length);
            this._getCachedData().flatData[id] = { id, label, icon, img, hasBranches };
            if (hasBranches) {
                branches.forEach((/**
                 * @param {?} data
                 * @return {?}
                 */
                data => {
                    this._getCachedData().flatIds.push([id, data.id]);
                    this._normalize(data);
                }));
            }
        });
        this._getParent = (/**
         * @param {?} id
         * @return {?}
         */
        (id) => {
            return this._getCachedData().flatIds
                .filter((/**
             * @param {?} __0
             * @return {?}
             */
            ([, childId]) => childId === id))
                .map((/**
             * @param {?} __0
             * @return {?}
             */
            ([parentId]) => parentId))[0] || null;
        });
        this._getTreePath = (/**
         * @param {?} id
         * @return {?}
         */
        (id) => {
            /** @type {?} */
            const ids = [id];
            /** @type {?} */
            let currentId = id;
            while (currentId) {
                /** @type {?} */
                const parentId = this._getParent(currentId);
                if (parentId) {
                    ids.push(parentId);
                }
                currentId = parentId;
            }
            return ids.reverse();
        });
        this._getTree = (/**
         * @param {?} path
         * @return {?}
         */
        (path) => {
            /** @type {?} */
            const tree = {};
            /** @type {?} */
            let counter = 0;
            /** @type {?} */
            const loadItems = (/**
             * @param {?} id
             * @param {?} source
             * @return {?}
             */
            (id, source) => {
                counter += 1;
                /** @type {?} */
                const nextParent = path[counter];
                source.items = [];
                this._getCachedData().flatIds
                    .filter((/**
                 * @param {?} __0
                 * @return {?}
                 */
                ([parentId]) => parentId === id))
                    .forEach((/**
                 * @param {?} __0
                 * @param {?} index
                 * @return {?}
                 */
                ([, childId], index) => {
                    /** @type {?} */
                    const inPath = childId === nextParent;
                    /** @type {?} */
                    const item = this._getTreeItem(childId, inPath);
                    source.items.push(item);
                    if (inPath) {
                        loadItems(childId, source.items[index]);
                    }
                }));
            });
            // init
            loadItems(path[0], tree);
            return tree;
        });
        this._getTreeItem = (/**
         * @param {?} id
         * @param {?} inPath
         * @return {?}
         */
        (id, inPath) => {
            const { label, icon, img, hasBranches } = this._getCachedData().flatData[id];
            /** @type {?} */
            const defaultIcon = inPath ? 'n7-icon-angle-down' : 'n7-icon-angle-right';
            /** @type {?} */
            const classes = [];
            if (inPath) {
                classes.push('is-expanded');
            }
            if (this.activeId === id) {
                classes.push('is-active');
            }
            return {
                classes: classes.join(' '),
                text: label || null,
                img: img || null,
                icon: icon || null,
                toggle: hasBranches ? {
                    icon: icon || defaultIcon,
                    payload: {
                        source: 'toggle',
                        id: id,
                    }
                } : null,
                meta: id,
                payload: {
                    id,
                    source: 'menuitem',
                }
            };
        });
    }
    /**
     * @protected
     * @param {?} tree
     * @return {?}
     */
    transform(tree) {
        if (!tree) {
            return;
        }
        return tree;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    load(data) {
        const { tree } = data;
        this.rootId = tree.id;
        // save in cache
        if (!AwTreeDS.dataCache[this.rootId]) {
            AwTreeDS.dataCache[this.rootId] = { flatIds: [], flatData: {} };
            this._normalize(tree);
        }
    }
    /**
     * @param {?} id
     * @return {?}
     */
    build(id) {
        /** @type {?} */
        const path = this._getTreePath(id);
        /** @type {?} */
        const oldPath = this._getTreePath(this.currentId);
        /** @type {?} */
        const oldPathIndex = oldPath.indexOf(id);
        if (oldPathIndex > 0) {
            path.splice(oldPathIndex);
            this.currentId = null;
        }
        else if (this.currentId === id) {
            /** @type {?} */
            const idIndex = path.indexOf(this.currentId);
            path.splice(idIndex);
            this.currentId = null;
        }
        else {
            this.currentId = id;
        }
        /** @type {?} */
        const tree = this._getTree(path);
        this.update(tree);
    }
    /**
     * @param {?} id
     * @return {?}
     */
    setActive(id) {
        this.activeId = id;
    }
    /**
     * @return {?}
     */
    highlightActive() {
        /** @type {?} */
        const control = (/**
         * @param {?} items
         * @return {?}
         */
        (items) => {
            items.forEach((/**
             * @param {?} item
             * @return {?}
             */
            item => {
                /** @type {?} */
                const founded = item.meta === this.activeId;
                /** @type {?} */
                const hasActive = item.classes.indexOf('is-active') !== -1;
                // clear is-active
                if (hasActive && !founded) {
                    /** @type {?} */
                    const currentClasses = item.classes.split(' ');
                    currentClasses.splice(currentClasses.indexOf('is-active'), 1);
                    item.classes = currentClasses.join(' ');
                }
                if (founded) {
                    /** @type {?} */
                    const currentClasses = item.classes.split(' ');
                    if (currentClasses.indexOf('is-active') === -1) {
                        currentClasses.push('is-active');
                    }
                    item.classes = currentClasses.join(' ');
                }
                if (Array.isArray(item.items) && item.items.length) {
                    control(item.items);
                }
            }));
        });
        control(this.output.items);
    }
}
AwTreeDS.dataCache = {};
if (false) {
    /** @type {?} */
    AwTreeDS.dataCache;
    /**
     * @type {?}
     * @private
     */
    AwTreeDS.prototype.rootId;
    /**
     * @type {?}
     * @private
     */
    AwTreeDS.prototype.currentId;
    /**
     * @type {?}
     * @private
     */
    AwTreeDS.prototype.activeId;
    /**
     * @type {?}
     * @private
     */
    AwTreeDS.prototype._getCachedData;
    /**
     * @type {?}
     * @private
     */
    AwTreeDS.prototype._normalize;
    /**
     * @type {?}
     * @private
     */
    AwTreeDS.prototype._getParent;
    /**
     * @type {?}
     * @private
     */
    AwTreeDS.prototype._getTreePath;
    /**
     * @type {?}
     * @private
     */
    AwTreeDS.prototype._getTree;
    /**
     * @type {?}
     * @private
     */
    AwTreeDS.prototype._getTreeItem;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvdHJlZS5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRS9DLE1BQU0sT0FBTyxRQUFTLFNBQVEsVUFBVTtJQUF4Qzs7UUE0RVUsbUJBQWM7OztRQUFHLEdBQUcsRUFBRTtZQUM1QixPQUFPLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3pDLENBQUMsRUFBQTtRQUVPLGVBQVU7Ozs7UUFBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUU7O2tCQUNwRCxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDO1lBQ2xFLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsV0FBVyxFQUFFLENBQUM7WUFDM0UsSUFBSSxXQUFXLEVBQUU7Z0JBQ2YsUUFBUSxDQUFDLE9BQU87Ozs7Z0JBQUMsSUFBSSxDQUFDLEVBQUU7b0JBQ3RCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUNsRCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN4QixDQUFDLEVBQUMsQ0FBQzthQUNKO1FBQ0gsQ0FBQyxFQUFBO1FBRU8sZUFBVTs7OztRQUFHLENBQUMsRUFBRSxFQUFFLEVBQUU7WUFDMUIsT0FBTyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsT0FBTztpQkFDakMsTUFBTTs7OztZQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxPQUFPLEtBQUssRUFBRSxFQUFDO2lCQUN2QyxHQUFHOzs7O1lBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxRQUFRLEVBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUM7UUFDOUMsQ0FBQyxFQUFBO1FBRU8saUJBQVk7Ozs7UUFBRyxDQUFDLEVBQUUsRUFBRSxFQUFFOztrQkFDdEIsR0FBRyxHQUFHLENBQUMsRUFBRSxDQUFDOztnQkFDWixTQUFTLEdBQUcsRUFBRTtZQUNsQixPQUFPLFNBQVMsRUFBRTs7c0JBQ1YsUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDO2dCQUMzQyxJQUFJLFFBQVEsRUFBRTtvQkFDWixHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2lCQUNwQjtnQkFDRCxTQUFTLEdBQUcsUUFBUSxDQUFDO2FBQ3RCO1lBQ0QsT0FBTyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDdkIsQ0FBQyxFQUFBO1FBRU8sYUFBUTs7OztRQUFHLENBQUMsSUFBSSxFQUFFLEVBQUU7O2tCQUNwQixJQUFJLEdBQUcsRUFBRTs7Z0JBQ1gsT0FBTyxHQUFHLENBQUM7O2tCQUVULFNBQVM7Ozs7O1lBQUcsQ0FBQyxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUU7Z0JBQy9CLE9BQU8sSUFBSSxDQUFDLENBQUM7O3NCQUNQLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNoQyxNQUFNLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztnQkFFbEIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLE9BQU87cUJBQzFCLE1BQU07Ozs7Z0JBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxRQUFRLEtBQUssRUFBRSxFQUFDO3FCQUN2QyxPQUFPOzs7OztnQkFBQyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRTs7MEJBQ3hCLE1BQU0sR0FBRyxPQUFPLEtBQUssVUFBVTs7MEJBQy9CLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUM7b0JBQy9DLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUN4QixJQUFJLE1BQU0sRUFBRTt3QkFDVixTQUFTLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztxQkFDekM7Z0JBQ0gsQ0FBQyxFQUFDLENBQUM7WUFDUCxDQUFDLENBQUE7WUFFRCxPQUFPO1lBQ1AsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUN6QixPQUFPLElBQUksQ0FBQztRQUNkLENBQUMsRUFBQTtRQUVPLGlCQUFZOzs7OztRQUFHLENBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFO2tCQUM5QixFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLFdBQVcsRUFBRSxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDOztrQkFDdEUsV0FBVyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLHFCQUFxQjs7a0JBQ25FLE9BQU8sR0FBRyxFQUFFO1lBQ2xCLElBQUksTUFBTSxFQUFFO2dCQUNWLE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7YUFDN0I7WUFDRCxJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssRUFBRSxFQUFFO2dCQUN4QixPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQzNCO1lBQ0QsT0FBTztnQkFDTCxPQUFPLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7Z0JBQzFCLElBQUksRUFBRSxLQUFLLElBQUksSUFBSTtnQkFDbkIsR0FBRyxFQUFFLEdBQUcsSUFBSSxJQUFJO2dCQUNoQixJQUFJLEVBQUUsSUFBSSxJQUFJLElBQUk7Z0JBQ2xCLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDO29CQUNwQixJQUFJLEVBQUUsSUFBSSxJQUFJLFdBQVc7b0JBQ3pCLE9BQU8sRUFBRTt3QkFDUCxNQUFNLEVBQUUsUUFBUTt3QkFDaEIsRUFBRSxFQUFFLEVBQUU7cUJBQ1A7aUJBQ0YsQ0FBQyxDQUFDLENBQUMsSUFBSTtnQkFDUixJQUFJLEVBQUUsRUFBRTtnQkFDUixPQUFPLEVBQUU7b0JBQ1AsRUFBRTtvQkFDRixNQUFNLEVBQUUsVUFBVTtpQkFDbkI7YUFDRixDQUFDO1FBQ0osQ0FBQyxFQUFBO0lBQ0gsQ0FBQzs7Ozs7O0lBL0pXLFNBQVMsQ0FBQyxJQUFJO1FBQ3RCLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDVCxPQUFPO1NBQ1I7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Ozs7O0lBRU0sSUFBSSxDQUFDLElBQUk7Y0FDUixFQUFFLElBQUksRUFBRSxHQUFHLElBQUk7UUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQ3RCLGdCQUFnQjtRQUNoQixJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDcEMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsQ0FBQztZQUNoRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQzs7Ozs7SUFFTSxLQUFLLENBQUMsRUFBRTs7Y0FDUCxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUM7O2NBQ2hDLE9BQU8sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7O2NBQzNDLFlBQVksR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztRQUVwQyxJQUFJLFlBQVksR0FBRyxDQUFDLEVBQUU7WUFDcEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztTQUN2QjthQUFNLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxFQUFFLEVBQUU7O2tCQUMxQixPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQzVDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7U0FDdkI7YUFBTTtZQUNMLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1NBQ3JCOztjQUVLLElBQUksR0FBUSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztRQUNyQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BCLENBQUM7Ozs7O0lBRU0sU0FBUyxDQUFDLEVBQUU7UUFDakIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDckIsQ0FBQzs7OztJQUVNLGVBQWU7O2NBQ2QsT0FBTzs7OztRQUFHLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDeEIsS0FBSyxDQUFDLE9BQU87Ozs7WUFBQyxJQUFJLENBQUMsRUFBRTs7c0JBQ2IsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLFFBQVE7O3NCQUN6QyxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUV0RCxrQkFBa0I7Z0JBQ2xCLElBQUksU0FBUyxJQUFJLENBQUMsT0FBTyxFQUFFOzswQkFDbkIsY0FBYyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztvQkFDOUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUM5RCxJQUFJLENBQUMsT0FBTyxHQUFHLGNBQWMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQ3pDO2dCQUVELElBQUksT0FBTyxFQUFFOzswQkFDTCxjQUFjLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO29CQUM5QyxJQUFJLGNBQWMsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7d0JBQzlDLGNBQWMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7cUJBQ2xDO29CQUNELElBQUksQ0FBQyxPQUFPLEdBQUcsY0FBYyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDekM7Z0JBRUQsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTtvQkFDbEQsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDckI7WUFDSCxDQUFDLEVBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQTtRQUNELE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdCLENBQUM7O0FBekVNLGtCQUFTLEdBQVEsRUFBRSxDQUFDOzs7SUFBM0IsbUJBQTJCOzs7OztJQUMzQiwwQkFBdUI7Ozs7O0lBQ3ZCLDZCQUEwQjs7Ozs7SUFDMUIsNEJBQXlCOzs7OztJQXdFekIsa0NBRUM7Ozs7O0lBRUQsOEJBU0M7Ozs7O0lBRUQsOEJBSUM7Ozs7O0lBRUQsZ0NBV0M7Ozs7O0lBRUQsNEJBd0JDOzs7OztJQUVELGdDQTRCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBBd1RyZWVEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuICBzdGF0aWMgZGF0YUNhY2hlOiBhbnkgPSB7fTtcbiAgcHJpdmF0ZSByb290SWQ6IHN0cmluZztcbiAgcHJpdmF0ZSBjdXJyZW50SWQ6IHN0cmluZztcbiAgcHJpdmF0ZSBhY3RpdmVJZDogc3RyaW5nO1xuXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0odHJlZSkge1xuICAgIGlmICghdHJlZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZXR1cm4gdHJlZTtcbiAgfVxuXG4gIHB1YmxpYyBsb2FkKGRhdGEpIHtcbiAgICBjb25zdCB7IHRyZWUgfSA9IGRhdGE7XG4gICAgdGhpcy5yb290SWQgPSB0cmVlLmlkO1xuICAgIC8vIHNhdmUgaW4gY2FjaGVcbiAgICBpZiAoIUF3VHJlZURTLmRhdGFDYWNoZVt0aGlzLnJvb3RJZF0pIHtcbiAgICAgIEF3VHJlZURTLmRhdGFDYWNoZVt0aGlzLnJvb3RJZF0gPSB7IGZsYXRJZHM6IFtdLCBmbGF0RGF0YToge30gfTtcbiAgICAgIHRoaXMuX25vcm1hbGl6ZSh0cmVlKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgYnVpbGQoaWQpIHtcbiAgICBjb25zdCBwYXRoID0gdGhpcy5fZ2V0VHJlZVBhdGgoaWQpLFxuICAgICAgb2xkUGF0aCA9IHRoaXMuX2dldFRyZWVQYXRoKHRoaXMuY3VycmVudElkKSxcbiAgICAgIG9sZFBhdGhJbmRleCA9IG9sZFBhdGguaW5kZXhPZihpZCk7XG5cbiAgICBpZiAob2xkUGF0aEluZGV4ID4gMCkge1xuICAgICAgcGF0aC5zcGxpY2Uob2xkUGF0aEluZGV4KTtcbiAgICAgIHRoaXMuY3VycmVudElkID0gbnVsbDtcbiAgICB9IGVsc2UgaWYgKHRoaXMuY3VycmVudElkID09PSBpZCkge1xuICAgICAgY29uc3QgaWRJbmRleCA9IHBhdGguaW5kZXhPZih0aGlzLmN1cnJlbnRJZCk7XG4gICAgICBwYXRoLnNwbGljZShpZEluZGV4KTtcbiAgICAgIHRoaXMuY3VycmVudElkID0gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jdXJyZW50SWQgPSBpZDtcbiAgICB9XG5cbiAgICBjb25zdCB0cmVlOiBhbnkgPSB0aGlzLl9nZXRUcmVlKHBhdGgpO1xuICAgIHRoaXMudXBkYXRlKHRyZWUpO1xuICB9XG5cbiAgcHVibGljIHNldEFjdGl2ZShpZCkge1xuICAgIHRoaXMuYWN0aXZlSWQgPSBpZDtcbiAgfVxuXG4gIHB1YmxpYyBoaWdobGlnaHRBY3RpdmUoKSB7XG4gICAgY29uc3QgY29udHJvbCA9IChpdGVtcykgPT4ge1xuICAgICAgaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgY29uc3QgZm91bmRlZCA9IGl0ZW0ubWV0YSA9PT0gdGhpcy5hY3RpdmVJZCxcbiAgICAgICAgICBoYXNBY3RpdmUgPSBpdGVtLmNsYXNzZXMuaW5kZXhPZignaXMtYWN0aXZlJykgIT09IC0xO1xuXG4gICAgICAgIC8vIGNsZWFyIGlzLWFjdGl2ZVxuICAgICAgICBpZiAoaGFzQWN0aXZlICYmICFmb3VuZGVkKSB7XG4gICAgICAgICAgY29uc3QgY3VycmVudENsYXNzZXMgPSBpdGVtLmNsYXNzZXMuc3BsaXQoJyAnKTtcbiAgICAgICAgICBjdXJyZW50Q2xhc3Nlcy5zcGxpY2UoY3VycmVudENsYXNzZXMuaW5kZXhPZignaXMtYWN0aXZlJyksIDEpO1xuICAgICAgICAgIGl0ZW0uY2xhc3NlcyA9IGN1cnJlbnRDbGFzc2VzLmpvaW4oJyAnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChmb3VuZGVkKSB7XG4gICAgICAgICAgY29uc3QgY3VycmVudENsYXNzZXMgPSBpdGVtLmNsYXNzZXMuc3BsaXQoJyAnKTtcbiAgICAgICAgICBpZiAoY3VycmVudENsYXNzZXMuaW5kZXhPZignaXMtYWN0aXZlJykgPT09IC0xKSB7XG4gICAgICAgICAgICBjdXJyZW50Q2xhc3Nlcy5wdXNoKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaXRlbS5jbGFzc2VzID0gY3VycmVudENsYXNzZXMuam9pbignICcpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoaXRlbS5pdGVtcykgJiYgaXRlbS5pdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICBjb250cm9sKGl0ZW0uaXRlbXMpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuICAgIGNvbnRyb2wodGhpcy5vdXRwdXQuaXRlbXMpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0Q2FjaGVkRGF0YSA9ICgpID0+IHtcbiAgICByZXR1cm4gQXdUcmVlRFMuZGF0YUNhY2hlW3RoaXMucm9vdElkXTtcbiAgfVxuXG4gIHByaXZhdGUgX25vcm1hbGl6ZSA9ICh7IGlkLCBsYWJlbCwgaWNvbiwgaW1nLCBicmFuY2hlcyB9KSA9PiB7XG4gICAgY29uc3QgaGFzQnJhbmNoZXMgPSAhIShBcnJheS5pc0FycmF5KGJyYW5jaGVzKSAmJiBicmFuY2hlcy5sZW5ndGgpO1xuICAgIHRoaXMuX2dldENhY2hlZERhdGEoKS5mbGF0RGF0YVtpZF0gPSB7IGlkLCBsYWJlbCwgaWNvbiwgaW1nLCBoYXNCcmFuY2hlcyB9O1xuICAgIGlmIChoYXNCcmFuY2hlcykge1xuICAgICAgYnJhbmNoZXMuZm9yRWFjaChkYXRhID0+IHtcbiAgICAgICAgdGhpcy5fZ2V0Q2FjaGVkRGF0YSgpLmZsYXRJZHMucHVzaChbaWQsIGRhdGEuaWRdKTtcbiAgICAgICAgdGhpcy5fbm9ybWFsaXplKGRhdGEpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0UGFyZW50ID0gKGlkKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMuX2dldENhY2hlZERhdGEoKS5mbGF0SWRzXG4gICAgICAuZmlsdGVyKChbLCBjaGlsZElkXSkgPT4gY2hpbGRJZCA9PT0gaWQpXG4gICAgICAubWFwKChbcGFyZW50SWRdKSA9PiBwYXJlbnRJZClbMF0gfHwgbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgX2dldFRyZWVQYXRoID0gKGlkKSA9PiB7XG4gICAgY29uc3QgaWRzID0gW2lkXTtcbiAgICBsZXQgY3VycmVudElkID0gaWQ7XG4gICAgd2hpbGUgKGN1cnJlbnRJZCkge1xuICAgICAgY29uc3QgcGFyZW50SWQgPSB0aGlzLl9nZXRQYXJlbnQoY3VycmVudElkKTtcbiAgICAgIGlmIChwYXJlbnRJZCkge1xuICAgICAgICBpZHMucHVzaChwYXJlbnRJZCk7XG4gICAgICB9XG4gICAgICBjdXJyZW50SWQgPSBwYXJlbnRJZDtcbiAgICB9XG4gICAgcmV0dXJuIGlkcy5yZXZlcnNlKCk7XG4gIH1cblxuICBwcml2YXRlIF9nZXRUcmVlID0gKHBhdGgpID0+IHtcbiAgICBjb25zdCB0cmVlID0ge307XG4gICAgbGV0IGNvdW50ZXIgPSAwO1xuXG4gICAgY29uc3QgbG9hZEl0ZW1zID0gKGlkLCBzb3VyY2UpID0+IHtcbiAgICAgIGNvdW50ZXIgKz0gMTtcbiAgICAgIGNvbnN0IG5leHRQYXJlbnQgPSBwYXRoW2NvdW50ZXJdO1xuICAgICAgc291cmNlLml0ZW1zID0gW107XG5cbiAgICAgIHRoaXMuX2dldENhY2hlZERhdGEoKS5mbGF0SWRzXG4gICAgICAgIC5maWx0ZXIoKFtwYXJlbnRJZF0pID0+IHBhcmVudElkID09PSBpZClcbiAgICAgICAgLmZvckVhY2goKFssIGNoaWxkSWRdLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGluUGF0aCA9IGNoaWxkSWQgPT09IG5leHRQYXJlbnQ7XG4gICAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMuX2dldFRyZWVJdGVtKGNoaWxkSWQsIGluUGF0aCk7XG4gICAgICAgICAgc291cmNlLml0ZW1zLnB1c2goaXRlbSk7XG4gICAgICAgICAgaWYgKGluUGF0aCkge1xuICAgICAgICAgICAgbG9hZEl0ZW1zKGNoaWxkSWQsIHNvdXJjZS5pdGVtc1tpbmRleF0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8vIGluaXRcbiAgICBsb2FkSXRlbXMocGF0aFswXSwgdHJlZSk7XG4gICAgcmV0dXJuIHRyZWU7XG4gIH1cblxuICBwcml2YXRlIF9nZXRUcmVlSXRlbSA9IChpZCwgaW5QYXRoKSA9PiB7XG4gICAgY29uc3QgeyBsYWJlbCwgaWNvbiwgaW1nLCBoYXNCcmFuY2hlcyB9ID0gdGhpcy5fZ2V0Q2FjaGVkRGF0YSgpLmZsYXREYXRhW2lkXTtcbiAgICBjb25zdCBkZWZhdWx0SWNvbiA9IGluUGF0aCA/ICduNy1pY29uLWFuZ2xlLWRvd24nIDogJ243LWljb24tYW5nbGUtcmlnaHQnO1xuICAgIGNvbnN0IGNsYXNzZXMgPSBbXTtcbiAgICBpZiAoaW5QYXRoKSB7XG4gICAgICBjbGFzc2VzLnB1c2goJ2lzLWV4cGFuZGVkJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLmFjdGl2ZUlkID09PSBpZCkge1xuICAgICAgY2xhc3Nlcy5wdXNoKCdpcy1hY3RpdmUnKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIGNsYXNzZXM6IGNsYXNzZXMuam9pbignICcpLFxuICAgICAgdGV4dDogbGFiZWwgfHwgbnVsbCxcbiAgICAgIGltZzogaW1nIHx8IG51bGwsXG4gICAgICBpY29uOiBpY29uIHx8IG51bGwsXG4gICAgICB0b2dnbGU6IGhhc0JyYW5jaGVzID8ge1xuICAgICAgICBpY29uOiBpY29uIHx8IGRlZmF1bHRJY29uLFxuICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgc291cmNlOiAndG9nZ2xlJyxcbiAgICAgICAgICBpZDogaWQsXG4gICAgICAgIH1cbiAgICAgIH0gOiBudWxsLFxuICAgICAgbWV0YTogaWQsXG4gICAgICBwYXlsb2FkOiB7XG4gICAgICAgIGlkLFxuICAgICAgICBzb3VyY2U6ICdtZW51aXRlbScsXG4gICAgICB9XG4gICAgfTtcbiAgfVxufVxuIl19