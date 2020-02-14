/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataSource } from '@n7-frontend/core';
import helpers from '../../common/helpers';
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
                anchor: {
                    href: `${this.basePath}/${id}/${helpers.slugify(label)}`
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
        const { tree, basePath } = data;
        this.rootId = tree.id;
        this.basePath = basePath;
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
    AwTreeDS.prototype.basePath;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvdHJlZS5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sT0FBTyxNQUFNLHNCQUFzQixDQUFDO0FBRTNDLE1BQU0sT0FBTyxRQUFTLFNBQVEsVUFBVTtJQUF4Qzs7UUE4RVUsbUJBQWM7OztRQUFHLEdBQUcsRUFBRTtZQUM1QixPQUFPLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3pDLENBQUMsRUFBQTtRQUVPLGVBQVU7Ozs7UUFBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUU7O2tCQUNwRCxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDO1lBQ2xFLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsV0FBVyxFQUFFLENBQUM7WUFDM0UsSUFBSSxXQUFXLEVBQUU7Z0JBQ2YsUUFBUSxDQUFDLE9BQU87Ozs7Z0JBQUMsSUFBSSxDQUFDLEVBQUU7b0JBQ3RCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUNsRCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN4QixDQUFDLEVBQUMsQ0FBQzthQUNKO1FB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OztJQXlFekIsa0NBRUM7Ozs7O0lBRUQsOEJBU0M7Ozs7O0lBRUQsOEJBSUM7Ozs7O0lBRUQsZ0NBV0M7Ozs7O0lBRUQsNEJBd0JDOzs7OztJQUVELGdDQTJCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgaGVscGVycyBmcm9tICcuLi8uLi9jb21tb24vaGVscGVycyc7XG5cbmV4cG9ydCBjbGFzcyBBd1RyZWVEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuICBzdGF0aWMgZGF0YUNhY2hlOiBhbnkgPSB7fTtcbiAgcHJpdmF0ZSBiYXNlUGF0aDogc3RyaW5nO1xuICBwcml2YXRlIHJvb3RJZDogc3RyaW5nO1xuICBwcml2YXRlIGN1cnJlbnRJZDogc3RyaW5nO1xuICBwcml2YXRlIGFjdGl2ZUlkOiBzdHJpbmc7XG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybSh0cmVlKSB7XG4gICAgaWYgKCF0cmVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJldHVybiB0cmVlO1xuICB9XG5cbiAgcHVibGljIGxvYWQoZGF0YSkge1xuICAgIGNvbnN0IHsgdHJlZSwgYmFzZVBhdGggfSA9IGRhdGE7XG4gICAgdGhpcy5yb290SWQgPSB0cmVlLmlkO1xuICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aDtcbiAgICAvLyBzYXZlIGluIGNhY2hlXG4gICAgaWYgKCFBd1RyZWVEUy5kYXRhQ2FjaGVbdGhpcy5yb290SWRdKSB7XG4gICAgICBBd1RyZWVEUy5kYXRhQ2FjaGVbdGhpcy5yb290SWRdID0geyBmbGF0SWRzOiBbXSwgZmxhdERhdGE6IHt9IH07XG4gICAgICB0aGlzLl9ub3JtYWxpemUodHJlZSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGJ1aWxkKGlkKSB7XG4gICAgY29uc3QgcGF0aCA9IHRoaXMuX2dldFRyZWVQYXRoKGlkKSxcbiAgICAgIG9sZFBhdGggPSB0aGlzLl9nZXRUcmVlUGF0aCh0aGlzLmN1cnJlbnRJZCksXG4gICAgICBvbGRQYXRoSW5kZXggPSBvbGRQYXRoLmluZGV4T2YoaWQpO1xuXG4gICAgaWYgKG9sZFBhdGhJbmRleCA+IDApIHtcbiAgICAgIHBhdGguc3BsaWNlKG9sZFBhdGhJbmRleCk7XG4gICAgICB0aGlzLmN1cnJlbnRJZCA9IG51bGw7XG4gICAgfSBlbHNlIGlmICh0aGlzLmN1cnJlbnRJZCA9PT0gaWQpIHtcbiAgICAgIGNvbnN0IGlkSW5kZXggPSBwYXRoLmluZGV4T2YodGhpcy5jdXJyZW50SWQpO1xuICAgICAgcGF0aC5zcGxpY2UoaWRJbmRleCk7XG4gICAgICB0aGlzLmN1cnJlbnRJZCA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY3VycmVudElkID0gaWQ7XG4gICAgfVxuXG4gICAgY29uc3QgdHJlZTogYW55ID0gdGhpcy5fZ2V0VHJlZShwYXRoKTtcbiAgICB0aGlzLnVwZGF0ZSh0cmVlKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRBY3RpdmUoaWQpIHtcbiAgICB0aGlzLmFjdGl2ZUlkID0gaWQ7XG4gIH1cblxuICBwdWJsaWMgaGlnaGxpZ2h0QWN0aXZlKCkge1xuICAgIGNvbnN0IGNvbnRyb2wgPSAoaXRlbXMpID0+IHtcbiAgICAgIGl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGNvbnN0IGZvdW5kZWQgPSBpdGVtLm1ldGEgPT09IHRoaXMuYWN0aXZlSWQsXG4gICAgICAgICAgaGFzQWN0aXZlID0gaXRlbS5jbGFzc2VzLmluZGV4T2YoJ2lzLWFjdGl2ZScpICE9PSAtMTtcblxuICAgICAgICAvLyBjbGVhciBpcy1hY3RpdmVcbiAgICAgICAgaWYgKGhhc0FjdGl2ZSAmJiAhZm91bmRlZCkge1xuICAgICAgICAgIGNvbnN0IGN1cnJlbnRDbGFzc2VzID0gaXRlbS5jbGFzc2VzLnNwbGl0KCcgJyk7XG4gICAgICAgICAgY3VycmVudENsYXNzZXMuc3BsaWNlKGN1cnJlbnRDbGFzc2VzLmluZGV4T2YoJ2lzLWFjdGl2ZScpLCAxKTtcbiAgICAgICAgICBpdGVtLmNsYXNzZXMgPSBjdXJyZW50Q2xhc3Nlcy5qb2luKCcgJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZm91bmRlZCkge1xuICAgICAgICAgIGNvbnN0IGN1cnJlbnRDbGFzc2VzID0gaXRlbS5jbGFzc2VzLnNwbGl0KCcgJyk7XG4gICAgICAgICAgaWYgKGN1cnJlbnRDbGFzc2VzLmluZGV4T2YoJ2lzLWFjdGl2ZScpID09PSAtMSkge1xuICAgICAgICAgICAgY3VycmVudENsYXNzZXMucHVzaCgnaXMtYWN0aXZlJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGl0ZW0uY2xhc3NlcyA9IGN1cnJlbnRDbGFzc2VzLmpvaW4oJyAnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGl0ZW0uaXRlbXMpICYmIGl0ZW0uaXRlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgY29udHJvbChpdGVtLml0ZW1zKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcbiAgICBjb250cm9sKHRoaXMub3V0cHV0Lml0ZW1zKTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldENhY2hlZERhdGEgPSAoKSA9PiB7XG4gICAgcmV0dXJuIEF3VHJlZURTLmRhdGFDYWNoZVt0aGlzLnJvb3RJZF07XG4gIH1cblxuICBwcml2YXRlIF9ub3JtYWxpemUgPSAoeyBpZCwgbGFiZWwsIGljb24sIGltZywgYnJhbmNoZXMgfSkgPT4ge1xuICAgIGNvbnN0IGhhc0JyYW5jaGVzID0gISEoQXJyYXkuaXNBcnJheShicmFuY2hlcykgJiYgYnJhbmNoZXMubGVuZ3RoKTtcbiAgICB0aGlzLl9nZXRDYWNoZWREYXRhKCkuZmxhdERhdGFbaWRdID0geyBpZCwgbGFiZWwsIGljb24sIGltZywgaGFzQnJhbmNoZXMgfTtcbiAgICBpZiAoaGFzQnJhbmNoZXMpIHtcbiAgICAgIGJyYW5jaGVzLmZvckVhY2goZGF0YSA9PiB7XG4gICAgICAgIHRoaXMuX2dldENhY2hlZERhdGEoKS5mbGF0SWRzLnB1c2goW2lkLCBkYXRhLmlkXSk7XG4gICAgICAgIHRoaXMuX25vcm1hbGl6ZShkYXRhKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2dldFBhcmVudCA9IChpZCkgPT4ge1xuICAgIHJldHVybiB0aGlzLl9nZXRDYWNoZWREYXRhKCkuZmxhdElkc1xuICAgICAgLmZpbHRlcigoWywgY2hpbGRJZF0pID0+IGNoaWxkSWQgPT09IGlkKVxuICAgICAgLm1hcCgoW3BhcmVudElkXSkgPT4gcGFyZW50SWQpWzBdIHx8IG51bGw7XG4gIH1cblxuICBwcml2YXRlIF9nZXRUcmVlUGF0aCA9IChpZCkgPT4ge1xuICAgIGNvbnN0IGlkcyA9IFtpZF07XG4gICAgbGV0IGN1cnJlbnRJZCA9IGlkO1xuICAgIHdoaWxlIChjdXJyZW50SWQpIHtcbiAgICAgIGNvbnN0IHBhcmVudElkID0gdGhpcy5fZ2V0UGFyZW50KGN1cnJlbnRJZCk7XG4gICAgICBpZiAocGFyZW50SWQpIHtcbiAgICAgICAgaWRzLnB1c2gocGFyZW50SWQpO1xuICAgICAgfVxuICAgICAgY3VycmVudElkID0gcGFyZW50SWQ7XG4gICAgfVxuICAgIHJldHVybiBpZHMucmV2ZXJzZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0VHJlZSA9IChwYXRoKSA9PiB7XG4gICAgY29uc3QgdHJlZSA9IHt9O1xuICAgIGxldCBjb3VudGVyID0gMDtcblxuICAgIGNvbnN0IGxvYWRJdGVtcyA9IChpZCwgc291cmNlKSA9PiB7XG4gICAgICBjb3VudGVyICs9IDE7XG4gICAgICBjb25zdCBuZXh0UGFyZW50ID0gcGF0aFtjb3VudGVyXTtcbiAgICAgIHNvdXJjZS5pdGVtcyA9IFtdO1xuXG4gICAgICB0aGlzLl9nZXRDYWNoZWREYXRhKCkuZmxhdElkc1xuICAgICAgICAuZmlsdGVyKChbcGFyZW50SWRdKSA9PiBwYXJlbnRJZCA9PT0gaWQpXG4gICAgICAgIC5mb3JFYWNoKChbLCBjaGlsZElkXSwgaW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCBpblBhdGggPSBjaGlsZElkID09PSBuZXh0UGFyZW50O1xuICAgICAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLl9nZXRUcmVlSXRlbShjaGlsZElkLCBpblBhdGgpO1xuICAgICAgICAgIHNvdXJjZS5pdGVtcy5wdXNoKGl0ZW0pO1xuICAgICAgICAgIGlmIChpblBhdGgpIHtcbiAgICAgICAgICAgIGxvYWRJdGVtcyhjaGlsZElkLCBzb3VyY2UuaXRlbXNbaW5kZXhdKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvLyBpbml0XG4gICAgbG9hZEl0ZW1zKHBhdGhbMF0sIHRyZWUpO1xuICAgIHJldHVybiB0cmVlO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0VHJlZUl0ZW0gPSAoaWQsIGluUGF0aCkgPT4ge1xuICAgIGNvbnN0IHsgbGFiZWwsIGljb24sIGltZywgaGFzQnJhbmNoZXMgfSA9IHRoaXMuX2dldENhY2hlZERhdGEoKS5mbGF0RGF0YVtpZF07XG4gICAgY29uc3QgZGVmYXVsdEljb24gPSBpblBhdGggPyAnbjctaWNvbi1hbmdsZS1kb3duJyA6ICduNy1pY29uLWFuZ2xlLXJpZ2h0JztcbiAgICBjb25zdCBjbGFzc2VzID0gW107XG4gICAgaWYgKGluUGF0aCkge1xuICAgICAgY2xhc3Nlcy5wdXNoKCdpcy1leHBhbmRlZCcpO1xuICAgIH1cbiAgICBpZiAodGhpcy5hY3RpdmVJZCA9PT0gaWQpIHtcbiAgICAgIGNsYXNzZXMucHVzaCgnaXMtYWN0aXZlJyk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBjbGFzc2VzOiBjbGFzc2VzLmpvaW4oJyAnKSxcbiAgICAgIHRleHQ6IGxhYmVsIHx8IG51bGwsXG4gICAgICBpbWc6IGltZyB8fCBudWxsLFxuICAgICAgaWNvbjogaWNvbiB8fCBudWxsLFxuICAgICAgdG9nZ2xlOiBoYXNCcmFuY2hlcyA/IHtcbiAgICAgICAgaWNvbjogaWNvbiB8fCBkZWZhdWx0SWNvbixcbiAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgIHNvdXJjZTogJ3RvZ2dsZScsXG4gICAgICAgICAgaWQ6IGlkLFxuICAgICAgICB9XG4gICAgICB9IDogbnVsbCxcbiAgICAgIG1ldGE6IGlkLFxuICAgICAgYW5jaG9yOiB7XG4gICAgICAgIGhyZWY6IGAke3RoaXMuYmFzZVBhdGh9LyR7aWR9LyR7aGVscGVycy5zbHVnaWZ5KGxhYmVsKX1gXG4gICAgICB9XG4gICAgfTtcbiAgfVxufVxuIl19