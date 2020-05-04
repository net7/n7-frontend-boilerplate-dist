/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/data-sources/tree.ds.ts
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
        ({ id, label, icon, img, branches, document_type: type, document_classification: classification }) => {
            /** @type {?} */
            const hasBranches = !!(Array.isArray(branches) && branches.length);
            this._getCachedData().flatData[id] = {
                id, label, icon, img, hasBranches, type, classification
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
            const { label, img, hasBranches, type, classification } = this._getCachedData().flatData[id];
            /** @type {?} */
            const defaultIcon = (this.options.config[type] || { icon: null }).icon;
            /** @type {?} */
            let specificIcon = '';
            /** @type {?} */
            const lastSegment = /.*\.(\w+)$/;
            if (classification && lastSegment.test(classification)) {
                /** @type {?} */
                const classID = classification
                    .match(lastSegment)[1] // get classification characters
                    .toUpperCase();
                specificIcon = this.options.config[type].classifications[classID].icon;
            }
            /** @type {?} */
            const arrowIcons = inPath ? 'n7-icon-angle-down' : 'n7-icon-angle-right';
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
                icon: (specificIcon || defaultIcon),
                toggle: hasBranches ? {
                    icon: arrowIcons,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvdHJlZS5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNoRSxPQUFPLE9BQU8sTUFBTSxzQkFBc0IsQ0FBQztBQUUzQyxNQUFNLE9BQU8sUUFBUyxTQUFRLFVBQVU7SUFBeEM7O1FBV1ksY0FBUzs7OztRQUFHLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUM7UUFrRTdCLG1CQUFjOzs7UUFBRyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBQTtRQUV0RCxlQUFVOzs7O1FBQUcsQ0FBQyxFQUNwQixFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsdUJBQXVCLEVBQUUsY0FBYyxFQUM3RixFQUFFLEVBQUU7O2tCQUNHLFdBQVcsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFDbEUsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsR0FBRztnQkFDbkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsY0FBYzthQUN4RCxDQUFDO1lBQ0YsSUFBSSxXQUFXLEVBQUU7Z0JBQ2YsUUFBUSxDQUFDLE9BQU87Ozs7Z0JBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtvQkFDeEIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVB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T0FBTyxHQUFHLGNBQWMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQ3pDO2dCQUVELElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7b0JBQ2xELE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ3JCO1lBQ0gsQ0FBQyxFQUFDLENBQUM7UUFDTCxDQUFDLENBQUE7UUFDRCxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QixDQUFDOztBQTFFTSxrQkFBUyxHQUFRLEVBQUUsQ0FBQzs7O0lBQTNCLG1CQUEyQjs7Ozs7SUFFM0IsNEJBQXlCOzs7OztJQUV6QiwwQkFBdUI7Ozs7O0lBRXZCLDZCQUEwQjs7Ozs7SUFFMUIsNEJBQXlCOzs7OztJQUV6Qiw2QkFBcUM7Ozs7O0lBa0VyQyxrQ0FBOEQ7Ozs7O0lBRTlELDhCQWFDOzs7OztJQUVELDhCQUUyQzs7Ozs7SUFFM0MsZ0NBV0M7Ozs7O0lBRUQsNEJBd0JDOzs7OztJQUVELGdDQXNDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZS9kaXN0L2RhdGEtc291cmNlJztcbmltcG9ydCBoZWxwZXJzIGZyb20gJy4uLy4uL2NvbW1vbi9oZWxwZXJzJztcblxuZXhwb3J0IGNsYXNzIEF3VHJlZURTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG4gIHN0YXRpYyBkYXRhQ2FjaGU6IGFueSA9IHt9O1xuXG4gIHByaXZhdGUgYmFzZVBhdGg6IHN0cmluZztcblxuICBwcml2YXRlIHJvb3RJZDogc3RyaW5nO1xuXG4gIHByaXZhdGUgY3VycmVudElkOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBhY3RpdmVJZDogc3RyaW5nO1xuXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0gPSAoZGF0YSkgPT4gZGF0YTtcblxuICBwdWJsaWMgbG9hZChkYXRhKSB7XG4gICAgY29uc3QgeyB0cmVlLCBiYXNlUGF0aCB9ID0gZGF0YTtcbiAgICB0aGlzLnJvb3RJZCA9IHRyZWUuaWQ7XG4gICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoO1xuICAgIC8vIHNhdmUgaW4gY2FjaGVcbiAgICBpZiAoIUF3VHJlZURTLmRhdGFDYWNoZVt0aGlzLnJvb3RJZF0pIHtcbiAgICAgIEF3VHJlZURTLmRhdGFDYWNoZVt0aGlzLnJvb3RJZF0gPSB7IGZsYXRJZHM6IFtdLCBmbGF0RGF0YToge30gfTtcbiAgICAgIHRoaXMuX25vcm1hbGl6ZSh0cmVlKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgYnVpbGQoaWQpIHtcbiAgICBjb25zdCBwYXRoID0gdGhpcy5fZ2V0VHJlZVBhdGgoaWQpO1xuICAgIGNvbnN0IG9sZFBhdGggPSB0aGlzLl9nZXRUcmVlUGF0aCh0aGlzLmN1cnJlbnRJZCk7XG4gICAgY29uc3Qgb2xkUGF0aEluZGV4ID0gb2xkUGF0aC5pbmRleE9mKGlkKTtcblxuICAgIGlmIChvbGRQYXRoSW5kZXggPiAwKSB7XG4gICAgICBwYXRoLnNwbGljZShvbGRQYXRoSW5kZXgpO1xuICAgICAgdGhpcy5jdXJyZW50SWQgPSBudWxsO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jdXJyZW50SWQgPT09IGlkKSB7XG4gICAgICBjb25zdCBpZEluZGV4ID0gcGF0aC5pbmRleE9mKHRoaXMuY3VycmVudElkKTtcbiAgICAgIHBhdGguc3BsaWNlKGlkSW5kZXgpO1xuICAgICAgdGhpcy5jdXJyZW50SWQgPSBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmN1cnJlbnRJZCA9IGlkO1xuICAgIH1cblxuICAgIGNvbnN0IHRyZWU6IGFueSA9IHRoaXMuX2dldFRyZWUocGF0aCk7XG4gICAgdGhpcy51cGRhdGUodHJlZSk7XG4gIH1cblxuICBwdWJsaWMgc2V0QWN0aXZlKGlkKSB7XG4gICAgdGhpcy5hY3RpdmVJZCA9IGlkO1xuICB9XG5cbiAgcHVibGljIGhpZ2hsaWdodEFjdGl2ZSgpIHtcbiAgICBjb25zdCBjb250cm9sID0gKGl0ZW1zKSA9PiB7XG4gICAgICBpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IGZvdW5kZWQgPSBpdGVtLm1ldGEgPT09IHRoaXMuYWN0aXZlSWQ7XG4gICAgICAgIGNvbnN0IGhhc0FjdGl2ZSA9IGl0ZW0uY2xhc3Nlcy5pbmRleE9mKCdpcy1hY3RpdmUnKSAhPT0gLTE7XG5cbiAgICAgICAgLy8gY2xlYXIgaXMtYWN0aXZlXG4gICAgICAgIGlmIChoYXNBY3RpdmUgJiYgIWZvdW5kZWQpIHtcbiAgICAgICAgICBjb25zdCBjdXJyZW50Q2xhc3NlcyA9IGl0ZW0uY2xhc3Nlcy5zcGxpdCgnICcpO1xuICAgICAgICAgIGN1cnJlbnRDbGFzc2VzLnNwbGljZShjdXJyZW50Q2xhc3Nlcy5pbmRleE9mKCdpcy1hY3RpdmUnKSwgMSk7XG4gICAgICAgICAgaXRlbS5jbGFzc2VzID0gY3VycmVudENsYXNzZXMuam9pbignICcpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZvdW5kZWQpIHtcbiAgICAgICAgICBjb25zdCBjdXJyZW50Q2xhc3NlcyA9IGl0ZW0uY2xhc3Nlcy5zcGxpdCgnICcpO1xuICAgICAgICAgIGlmIChjdXJyZW50Q2xhc3Nlcy5pbmRleE9mKCdpcy1hY3RpdmUnKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIGN1cnJlbnRDbGFzc2VzLnB1c2goJ2lzLWFjdGl2ZScpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpdGVtLmNsYXNzZXMgPSBjdXJyZW50Q2xhc3Nlcy5qb2luKCcgJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShpdGVtLml0ZW1zKSAmJiBpdGVtLml0ZW1zLmxlbmd0aCkge1xuICAgICAgICAgIGNvbnRyb2woaXRlbS5pdGVtcyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG4gICAgY29udHJvbCh0aGlzLm91dHB1dC5pdGVtcyk7XG4gIH1cblxuICBwcml2YXRlIF9nZXRDYWNoZWREYXRhID0gKCkgPT4gQXdUcmVlRFMuZGF0YUNhY2hlW3RoaXMucm9vdElkXVxuXG4gIHByaXZhdGUgX25vcm1hbGl6ZSA9ICh7XG4gICAgaWQsIGxhYmVsLCBpY29uLCBpbWcsIGJyYW5jaGVzLCBkb2N1bWVudF90eXBlOiB0eXBlLCBkb2N1bWVudF9jbGFzc2lmaWNhdGlvbjogY2xhc3NpZmljYXRpb25cbiAgfSkgPT4ge1xuICAgIGNvbnN0IGhhc0JyYW5jaGVzID0gISEoQXJyYXkuaXNBcnJheShicmFuY2hlcykgJiYgYnJhbmNoZXMubGVuZ3RoKTtcbiAgICB0aGlzLl9nZXRDYWNoZWREYXRhKCkuZmxhdERhdGFbaWRdID0ge1xuICAgICAgaWQsIGxhYmVsLCBpY29uLCBpbWcsIGhhc0JyYW5jaGVzLCB0eXBlLCBjbGFzc2lmaWNhdGlvblxuICAgIH07XG4gICAgaWYgKGhhc0JyYW5jaGVzKSB7XG4gICAgICBicmFuY2hlcy5mb3JFYWNoKChkYXRhKSA9PiB7XG4gICAgICAgIHRoaXMuX2dldENhY2hlZERhdGEoKS5mbGF0SWRzLnB1c2goW2lkLCBkYXRhLmlkXSk7XG4gICAgICAgIHRoaXMuX25vcm1hbGl6ZShkYXRhKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2dldFBhcmVudCA9IChpZCkgPT4gdGhpcy5fZ2V0Q2FjaGVkRGF0YSgpLmZsYXRJZHNcbiAgICAuZmlsdGVyKChbLCBjaGlsZElkXSkgPT4gY2hpbGRJZCA9PT0gaWQpXG4gICAgLm1hcCgoW3BhcmVudElkXSkgPT4gcGFyZW50SWQpWzBdIHx8IG51bGxcblxuICBwcml2YXRlIF9nZXRUcmVlUGF0aCA9IChpZCkgPT4ge1xuICAgIGNvbnN0IGlkcyA9IFtpZF07XG4gICAgbGV0IGN1cnJlbnRJZCA9IGlkO1xuICAgIHdoaWxlIChjdXJyZW50SWQpIHtcbiAgICAgIGNvbnN0IHBhcmVudElkID0gdGhpcy5fZ2V0UGFyZW50KGN1cnJlbnRJZCk7XG4gICAgICBpZiAocGFyZW50SWQpIHtcbiAgICAgICAgaWRzLnB1c2gocGFyZW50SWQpO1xuICAgICAgfVxuICAgICAgY3VycmVudElkID0gcGFyZW50SWQ7XG4gICAgfVxuICAgIHJldHVybiBpZHMucmV2ZXJzZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0VHJlZSA9IChwYXRoKSA9PiB7XG4gICAgY29uc3QgdHJlZSA9IHt9O1xuICAgIGxldCBjb3VudGVyID0gMDtcblxuICAgIGNvbnN0IGxvYWRJdGVtcyA9IChpZCwgc291cmNlKSA9PiB7XG4gICAgICBjb3VudGVyICs9IDE7XG4gICAgICBjb25zdCBuZXh0UGFyZW50ID0gcGF0aFtjb3VudGVyXTtcbiAgICAgIHNvdXJjZS5pdGVtcyA9IFtdO1xuXG4gICAgICB0aGlzLl9nZXRDYWNoZWREYXRhKCkuZmxhdElkc1xuICAgICAgICAuZmlsdGVyKChbcGFyZW50SWRdKSA9PiBwYXJlbnRJZCA9PT0gaWQpXG4gICAgICAgIC5mb3JFYWNoKChbLCBjaGlsZElkXSwgaW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCBpblBhdGggPSBjaGlsZElkID09PSBuZXh0UGFyZW50O1xuICAgICAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLl9nZXRUcmVlSXRlbShjaGlsZElkLCBpblBhdGgpO1xuICAgICAgICAgIHNvdXJjZS5pdGVtcy5wdXNoKGl0ZW0pO1xuICAgICAgICAgIGlmIChpblBhdGgpIHtcbiAgICAgICAgICAgIGxvYWRJdGVtcyhjaGlsZElkLCBzb3VyY2UuaXRlbXNbaW5kZXhdKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvLyBpbml0XG4gICAgbG9hZEl0ZW1zKHBhdGhbMF0sIHRyZWUpO1xuICAgIHJldHVybiB0cmVlO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0VHJlZUl0ZW0gPSAoaWQsIGluUGF0aCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGxhYmVsLCBpbWcsIGhhc0JyYW5jaGVzLCB0eXBlLCBjbGFzc2lmaWNhdGlvblxuICAgIH0gPSB0aGlzLl9nZXRDYWNoZWREYXRhKCkuZmxhdERhdGFbaWRdO1xuICAgIGNvbnN0IGRlZmF1bHRJY29uID0gKHRoaXMub3B0aW9ucy5jb25maWdbdHlwZV0gfHwgeyBpY29uOiBudWxsIH0pLmljb247XG4gICAgbGV0IHNwZWNpZmljSWNvbiA9ICcnO1xuICAgIGNvbnN0IGxhc3RTZWdtZW50ID0gLy4qXFwuKFxcdyspJC87XG4gICAgaWYgKGNsYXNzaWZpY2F0aW9uICYmIGxhc3RTZWdtZW50LnRlc3QoY2xhc3NpZmljYXRpb24pKSB7XG4gICAgICBjb25zdCBjbGFzc0lEID0gY2xhc3NpZmljYXRpb25cbiAgICAgICAgLm1hdGNoKGxhc3RTZWdtZW50KVsxXSAvLyBnZXQgY2xhc3NpZmljYXRpb24gY2hhcmFjdGVyc1xuICAgICAgICAudG9VcHBlckNhc2UoKTsgLy8gbm9ybWFsaXplXG4gICAgICBzcGVjaWZpY0ljb24gPSB0aGlzLm9wdGlvbnMuY29uZmlnW3R5cGVdLmNsYXNzaWZpY2F0aW9uc1tjbGFzc0lEXS5pY29uO1xuICAgIH1cbiAgICBjb25zdCBhcnJvd0ljb25zID0gaW5QYXRoID8gJ243LWljb24tYW5nbGUtZG93bicgOiAnbjctaWNvbi1hbmdsZS1yaWdodCc7XG4gICAgY29uc3QgY2xhc3NlcyA9IFtdO1xuICAgIGlmIChpblBhdGgpIHtcbiAgICAgIGNsYXNzZXMucHVzaCgnaXMtZXhwYW5kZWQnKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuYWN0aXZlSWQgPT09IGlkKSB7XG4gICAgICBjbGFzc2VzLnB1c2goJ2lzLWFjdGl2ZScpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgY2xhc3NlczogY2xhc3Nlcy5qb2luKCcgJyksXG4gICAgICB0ZXh0OiBsYWJlbCB8fCBudWxsLFxuICAgICAgaW1nOiBpbWcgfHwgbnVsbCxcbiAgICAgIGljb246IChzcGVjaWZpY0ljb24gfHwgZGVmYXVsdEljb24pLFxuICAgICAgdG9nZ2xlOiBoYXNCcmFuY2hlcyA/IHtcbiAgICAgICAgaWNvbjogYXJyb3dJY29ucyxcbiAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgIHNvdXJjZTogJ3RvZ2dsZScsXG4gICAgICAgICAgaWQsXG4gICAgICAgIH0sXG4gICAgICB9IDogbnVsbCxcbiAgICAgIG1ldGE6IGlkLFxuICAgICAgYW5jaG9yOiB7XG4gICAgICAgIGhyZWY6IGAke3RoaXMuYmFzZVBhdGh9LyR7aWR9LyR7aGVscGVycy5zbHVnaWZ5KGxhYmVsKX1gLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG59XG4iXX0=