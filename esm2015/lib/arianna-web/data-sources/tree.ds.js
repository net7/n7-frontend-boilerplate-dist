/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataSource } from '@n7-frontend/core/dist/data-source';
import helpers from '../../common/helpers';
export class AwTreeDS extends DataSource {
    constructor() {
        super(...arguments);
        this.transform = (/**
         * @param {?} data
         * @return {?}
         */
        (data) => data);
        this._getCachedData = (/**
         * @return {?}
         */
        () => AwTreeDS.dataCache[this.rootId]);
        this._normalize = (/**
         * @param {?} __0
         * @return {?}
         */
        ({ id, label, icon, img, branches, }) => {
            /** @type {?} */
            const hasBranches = !!(Array.isArray(branches) && branches.length);
            this._getCachedData().flatData[id] = {
                id, label, icon, img, hasBranches,
            };
            if (hasBranches) {
                branches.forEach((/**
                 * @param {?} data
                 * @return {?}
                 */
                (data) => {
                    this._getCachedData().flatIds.push([id, data.id]);
                    this._normalize(data);
                }));
            }
        });
        this._getParent = (/**
         * @param {?} id
         * @return {?}
         */
        (id) => this._getCachedData().flatIds
            .filter((/**
         * @param {?} __0
         * @return {?}
         */
        ([, childId]) => childId === id))
            .map((/**
         * @param {?} __0
         * @return {?}
         */
        ([parentId]) => parentId))[0] || null);
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
            const { label, icon, img, hasBranches, } = this._getCachedData().flatData[id];
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
                        id,
                    },
                } : null,
                meta: id,
                anchor: {
                    href: `${this.basePath}/${id}/${helpers.slugify(label)}`,
                },
            };
        });
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
            (item) => {
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
     * @protected
     */
    AwTreeDS.prototype.transform;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvdHJlZS5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ2hFLE9BQU8sT0FBTyxNQUFNLHNCQUFzQixDQUFDO0FBRTNDLE1BQU0sT0FBTyxRQUFTLFNBQVEsVUFBVTtJQUF4Qzs7UUFXWSxjQUFTOzs7O1FBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBQztRQWtFN0IsbUJBQWM7OztRQUFHLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFBO1FBRXRELGVBQVU7Ozs7UUFBRyxDQUFDLEVBQ3BCLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxRQUFRLEdBQy9CLEVBQUUsRUFBRTs7a0JBQ0csV0FBVyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUNsRSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxHQUFHO2dCQUNuQyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsV0FBVzthQUNsQyxDQUFDO1lBQ0YsSUFBSSxXQUFXLEVBQUU7Z0JBQ2YsUUFBUSxDQUFDLE9BQU87Ozs7Z0JBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtvQkFDeEIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQ2xELElBQUksQ0FBQyxVQUFVLENBQUMsSUFB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Ozs7SUFFRCw0QkF3QkM7Ozs7O0lBRUQsZ0NBNkJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlL2Rpc3QvZGF0YS1zb3VyY2UnO1xuaW1wb3J0IGhlbHBlcnMgZnJvbSAnLi4vLi4vY29tbW9uL2hlbHBlcnMnO1xuXG5leHBvcnQgY2xhc3MgQXdUcmVlRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgc3RhdGljIGRhdGFDYWNoZTogYW55ID0ge307XG5cbiAgcHJpdmF0ZSBiYXNlUGF0aDogc3RyaW5nO1xuXG4gIHByaXZhdGUgcm9vdElkOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBjdXJyZW50SWQ6IHN0cmluZztcblxuICBwcml2YXRlIGFjdGl2ZUlkOiBzdHJpbmc7XG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybSA9IChkYXRhKSA9PiBkYXRhO1xuXG4gIHB1YmxpYyBsb2FkKGRhdGEpIHtcbiAgICBjb25zdCB7IHRyZWUsIGJhc2VQYXRoIH0gPSBkYXRhO1xuICAgIHRoaXMucm9vdElkID0gdHJlZS5pZDtcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGg7XG4gICAgLy8gc2F2ZSBpbiBjYWNoZVxuICAgIGlmICghQXdUcmVlRFMuZGF0YUNhY2hlW3RoaXMucm9vdElkXSkge1xuICAgICAgQXdUcmVlRFMuZGF0YUNhY2hlW3RoaXMucm9vdElkXSA9IHsgZmxhdElkczogW10sIGZsYXREYXRhOiB7fSB9O1xuICAgICAgdGhpcy5fbm9ybWFsaXplKHRyZWUpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBidWlsZChpZCkge1xuICAgIGNvbnN0IHBhdGggPSB0aGlzLl9nZXRUcmVlUGF0aChpZCk7XG4gICAgY29uc3Qgb2xkUGF0aCA9IHRoaXMuX2dldFRyZWVQYXRoKHRoaXMuY3VycmVudElkKTtcbiAgICBjb25zdCBvbGRQYXRoSW5kZXggPSBvbGRQYXRoLmluZGV4T2YoaWQpO1xuXG4gICAgaWYgKG9sZFBhdGhJbmRleCA+IDApIHtcbiAgICAgIHBhdGguc3BsaWNlKG9sZFBhdGhJbmRleCk7XG4gICAgICB0aGlzLmN1cnJlbnRJZCA9IG51bGw7XG4gICAgfSBlbHNlIGlmICh0aGlzLmN1cnJlbnRJZCA9PT0gaWQpIHtcbiAgICAgIGNvbnN0IGlkSW5kZXggPSBwYXRoLmluZGV4T2YodGhpcy5jdXJyZW50SWQpO1xuICAgICAgcGF0aC5zcGxpY2UoaWRJbmRleCk7XG4gICAgICB0aGlzLmN1cnJlbnRJZCA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY3VycmVudElkID0gaWQ7XG4gICAgfVxuXG4gICAgY29uc3QgdHJlZTogYW55ID0gdGhpcy5fZ2V0VHJlZShwYXRoKTtcbiAgICB0aGlzLnVwZGF0ZSh0cmVlKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRBY3RpdmUoaWQpIHtcbiAgICB0aGlzLmFjdGl2ZUlkID0gaWQ7XG4gIH1cblxuICBwdWJsaWMgaGlnaGxpZ2h0QWN0aXZlKCkge1xuICAgIGNvbnN0IGNvbnRyb2wgPSAoaXRlbXMpID0+IHtcbiAgICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgY29uc3QgZm91bmRlZCA9IGl0ZW0ubWV0YSA9PT0gdGhpcy5hY3RpdmVJZDtcbiAgICAgICAgY29uc3QgaGFzQWN0aXZlID0gaXRlbS5jbGFzc2VzLmluZGV4T2YoJ2lzLWFjdGl2ZScpICE9PSAtMTtcblxuICAgICAgICAvLyBjbGVhciBpcy1hY3RpdmVcbiAgICAgICAgaWYgKGhhc0FjdGl2ZSAmJiAhZm91bmRlZCkge1xuICAgICAgICAgIGNvbnN0IGN1cnJlbnRDbGFzc2VzID0gaXRlbS5jbGFzc2VzLnNwbGl0KCcgJyk7XG4gICAgICAgICAgY3VycmVudENsYXNzZXMuc3BsaWNlKGN1cnJlbnRDbGFzc2VzLmluZGV4T2YoJ2lzLWFjdGl2ZScpLCAxKTtcbiAgICAgICAgICBpdGVtLmNsYXNzZXMgPSBjdXJyZW50Q2xhc3Nlcy5qb2luKCcgJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZm91bmRlZCkge1xuICAgICAgICAgIGNvbnN0IGN1cnJlbnRDbGFzc2VzID0gaXRlbS5jbGFzc2VzLnNwbGl0KCcgJyk7XG4gICAgICAgICAgaWYgKGN1cnJlbnRDbGFzc2VzLmluZGV4T2YoJ2lzLWFjdGl2ZScpID09PSAtMSkge1xuICAgICAgICAgICAgY3VycmVudENsYXNzZXMucHVzaCgnaXMtYWN0aXZlJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGl0ZW0uY2xhc3NlcyA9IGN1cnJlbnRDbGFzc2VzLmpvaW4oJyAnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGl0ZW0uaXRlbXMpICYmIGl0ZW0uaXRlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgY29udHJvbChpdGVtLml0ZW1zKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcbiAgICBjb250cm9sKHRoaXMub3V0cHV0Lml0ZW1zKTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldENhY2hlZERhdGEgPSAoKSA9PiBBd1RyZWVEUy5kYXRhQ2FjaGVbdGhpcy5yb290SWRdXG5cbiAgcHJpdmF0ZSBfbm9ybWFsaXplID0gKHtcbiAgICBpZCwgbGFiZWwsIGljb24sIGltZywgYnJhbmNoZXMsXG4gIH0pID0+IHtcbiAgICBjb25zdCBoYXNCcmFuY2hlcyA9ICEhKEFycmF5LmlzQXJyYXkoYnJhbmNoZXMpICYmIGJyYW5jaGVzLmxlbmd0aCk7XG4gICAgdGhpcy5fZ2V0Q2FjaGVkRGF0YSgpLmZsYXREYXRhW2lkXSA9IHtcbiAgICAgIGlkLCBsYWJlbCwgaWNvbiwgaW1nLCBoYXNCcmFuY2hlcyxcbiAgICB9O1xuICAgIGlmIChoYXNCcmFuY2hlcykge1xuICAgICAgYnJhbmNoZXMuZm9yRWFjaCgoZGF0YSkgPT4ge1xuICAgICAgICB0aGlzLl9nZXRDYWNoZWREYXRhKCkuZmxhdElkcy5wdXNoKFtpZCwgZGF0YS5pZF0pO1xuICAgICAgICB0aGlzLl9ub3JtYWxpemUoZGF0YSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9nZXRQYXJlbnQgPSAoaWQpID0+IHRoaXMuX2dldENhY2hlZERhdGEoKS5mbGF0SWRzXG4gICAgLmZpbHRlcigoWywgY2hpbGRJZF0pID0+IGNoaWxkSWQgPT09IGlkKVxuICAgIC5tYXAoKFtwYXJlbnRJZF0pID0+IHBhcmVudElkKVswXSB8fCBudWxsXG5cbiAgcHJpdmF0ZSBfZ2V0VHJlZVBhdGggPSAoaWQpID0+IHtcbiAgICBjb25zdCBpZHMgPSBbaWRdO1xuICAgIGxldCBjdXJyZW50SWQgPSBpZDtcbiAgICB3aGlsZSAoY3VycmVudElkKSB7XG4gICAgICBjb25zdCBwYXJlbnRJZCA9IHRoaXMuX2dldFBhcmVudChjdXJyZW50SWQpO1xuICAgICAgaWYgKHBhcmVudElkKSB7XG4gICAgICAgIGlkcy5wdXNoKHBhcmVudElkKTtcbiAgICAgIH1cbiAgICAgIGN1cnJlbnRJZCA9IHBhcmVudElkO1xuICAgIH1cbiAgICByZXR1cm4gaWRzLnJldmVyc2UoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldFRyZWUgPSAocGF0aCkgPT4ge1xuICAgIGNvbnN0IHRyZWUgPSB7fTtcbiAgICBsZXQgY291bnRlciA9IDA7XG5cbiAgICBjb25zdCBsb2FkSXRlbXMgPSAoaWQsIHNvdXJjZSkgPT4ge1xuICAgICAgY291bnRlciArPSAxO1xuICAgICAgY29uc3QgbmV4dFBhcmVudCA9IHBhdGhbY291bnRlcl07XG4gICAgICBzb3VyY2UuaXRlbXMgPSBbXTtcblxuICAgICAgdGhpcy5fZ2V0Q2FjaGVkRGF0YSgpLmZsYXRJZHNcbiAgICAgICAgLmZpbHRlcigoW3BhcmVudElkXSkgPT4gcGFyZW50SWQgPT09IGlkKVxuICAgICAgICAuZm9yRWFjaCgoWywgY2hpbGRJZF0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgY29uc3QgaW5QYXRoID0gY2hpbGRJZCA9PT0gbmV4dFBhcmVudDtcbiAgICAgICAgICBjb25zdCBpdGVtID0gdGhpcy5fZ2V0VHJlZUl0ZW0oY2hpbGRJZCwgaW5QYXRoKTtcbiAgICAgICAgICBzb3VyY2UuaXRlbXMucHVzaChpdGVtKTtcbiAgICAgICAgICBpZiAoaW5QYXRoKSB7XG4gICAgICAgICAgICBsb2FkSXRlbXMoY2hpbGRJZCwgc291cmNlLml0ZW1zW2luZGV4XSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgLy8gaW5pdFxuICAgIGxvYWRJdGVtcyhwYXRoWzBdLCB0cmVlKTtcbiAgICByZXR1cm4gdHJlZTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldFRyZWVJdGVtID0gKGlkLCBpblBhdGgpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBsYWJlbCwgaWNvbiwgaW1nLCBoYXNCcmFuY2hlcyxcbiAgICB9ID0gdGhpcy5fZ2V0Q2FjaGVkRGF0YSgpLmZsYXREYXRhW2lkXTtcbiAgICBjb25zdCBkZWZhdWx0SWNvbiA9IGluUGF0aCA/ICduNy1pY29uLWFuZ2xlLWRvd24nIDogJ243LWljb24tYW5nbGUtcmlnaHQnO1xuICAgIGNvbnN0IGNsYXNzZXMgPSBbXTtcbiAgICBpZiAoaW5QYXRoKSB7XG4gICAgICBjbGFzc2VzLnB1c2goJ2lzLWV4cGFuZGVkJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLmFjdGl2ZUlkID09PSBpZCkge1xuICAgICAgY2xhc3Nlcy5wdXNoKCdpcy1hY3RpdmUnKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIGNsYXNzZXM6IGNsYXNzZXMuam9pbignICcpLFxuICAgICAgdGV4dDogbGFiZWwgfHwgbnVsbCxcbiAgICAgIGltZzogaW1nIHx8IG51bGwsXG4gICAgICBpY29uOiBpY29uIHx8IG51bGwsXG4gICAgICB0b2dnbGU6IGhhc0JyYW5jaGVzID8ge1xuICAgICAgICBpY29uOiBpY29uIHx8IGRlZmF1bHRJY29uLFxuICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgc291cmNlOiAndG9nZ2xlJyxcbiAgICAgICAgICBpZCxcbiAgICAgICAgfSxcbiAgICAgIH0gOiBudWxsLFxuICAgICAgbWV0YTogaWQsXG4gICAgICBhbmNob3I6IHtcbiAgICAgICAgaHJlZjogYCR7dGhpcy5iYXNlUGF0aH0vJHtpZH0vJHtoZWxwZXJzLnNsdWdpZnkobGFiZWwpfWAsXG4gICAgICB9LFxuICAgIH07XG4gIH1cbn1cbiJdfQ==