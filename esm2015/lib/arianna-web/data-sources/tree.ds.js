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
        ({ id, label, icon, branches, document_type: type, document_classification: classification }) => {
            /** @type {?} */
            const hasBranches = !!(Array.isArray(branches) && branches.length);
            this._getCachedData().flatData[id] = {
                id, label, icon, hasBranches, type, classification
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvdHJlZS5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ2hFLE9BQU8sT0FBTyxNQUFNLHNCQUFzQixDQUFDO0FBRTNDLE1BQU0sT0FBTyxRQUFTLFNBQVEsVUFBVTtJQUF4Qzs7UUFXWSxjQUFTOzs7O1FBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBQztRQWtFN0IsbUJBQWM7OztRQUFHLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFBO1FBRXRELGVBQVU7Ozs7UUFBRyxDQUFDLEVBQ3BCLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLHVCQUF1QixFQUFFLGNBQWMsRUFDeEYsRUFBRSxFQUFFOztrQkFDRyxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDO1lBQ2xFLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEdBQUc7Z0JBQ25DLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsY0FBYzthQUNuRCxDQUFDO1lBQ0YsSUFBSSxXQUFXLEVBQUU7Z0JBQ2YsUUFBUSxDQUFDLE9BQU87Ozs7Z0JBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtvQkFDeEIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FB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QUFJLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQ3pDO2dCQUVELElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7b0JBQ2xELE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ3JCO1lBQ0gsQ0FBQyxFQUFDLENBQUM7UUFDTCxDQUFDLENBQUE7UUFDRCxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QixDQUFDOztBQTFFTSxrQkFBUyxHQUFRLEVBQUUsQ0FBQzs7O0lBQTNCLG1CQUEyQjs7Ozs7SUFFM0IsNEJBQXlCOzs7OztJQUV6QiwwQkFBdUI7Ozs7O0lBRXZCLDZCQUEwQjs7Ozs7SUFFMUIsNEJBQXlCOzs7OztJQUV6Qiw2QkFBcUM7Ozs7O0lBa0VyQyxrQ0FBOEQ7Ozs7O0lBRTlELDhCQWFDOzs7OztJQUVELDhCQUUyQzs7Ozs7SUFFM0MsZ0NBV0M7Ozs7O0lBRUQsNEJBd0JDOzs7OztJQUVELGdDQXNDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZS9kaXN0L2RhdGEtc291cmNlJztcbmltcG9ydCBoZWxwZXJzIGZyb20gJy4uLy4uL2NvbW1vbi9oZWxwZXJzJztcblxuZXhwb3J0IGNsYXNzIEF3VHJlZURTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG4gIHN0YXRpYyBkYXRhQ2FjaGU6IGFueSA9IHt9O1xuXG4gIHByaXZhdGUgYmFzZVBhdGg6IHN0cmluZztcblxuICBwcml2YXRlIHJvb3RJZDogc3RyaW5nO1xuXG4gIHByaXZhdGUgY3VycmVudElkOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBhY3RpdmVJZDogc3RyaW5nO1xuXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0gPSAoZGF0YSkgPT4gZGF0YTtcblxuICBwdWJsaWMgbG9hZChkYXRhKSB7XG4gICAgY29uc3QgeyB0cmVlLCBiYXNlUGF0aCB9ID0gZGF0YTtcbiAgICB0aGlzLnJvb3RJZCA9IHRyZWUuaWQ7XG4gICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoO1xuICAgIC8vIHNhdmUgaW4gY2FjaGVcbiAgICBpZiAoIUF3VHJlZURTLmRhdGFDYWNoZVt0aGlzLnJvb3RJZF0pIHtcbiAgICAgIEF3VHJlZURTLmRhdGFDYWNoZVt0aGlzLnJvb3RJZF0gPSB7IGZsYXRJZHM6IFtdLCBmbGF0RGF0YToge30gfTtcbiAgICAgIHRoaXMuX25vcm1hbGl6ZSh0cmVlKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgYnVpbGQoaWQpIHtcbiAgICBjb25zdCBwYXRoID0gdGhpcy5fZ2V0VHJlZVBhdGgoaWQpO1xuICAgIGNvbnN0IG9sZFBhdGggPSB0aGlzLl9nZXRUcmVlUGF0aCh0aGlzLmN1cnJlbnRJZCk7XG4gICAgY29uc3Qgb2xkUGF0aEluZGV4ID0gb2xkUGF0aC5pbmRleE9mKGlkKTtcblxuICAgIGlmIChvbGRQYXRoSW5kZXggPiAwKSB7XG4gICAgICBwYXRoLnNwbGljZShvbGRQYXRoSW5kZXgpO1xuICAgICAgdGhpcy5jdXJyZW50SWQgPSBudWxsO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jdXJyZW50SWQgPT09IGlkKSB7XG4gICAgICBjb25zdCBpZEluZGV4ID0gcGF0aC5pbmRleE9mKHRoaXMuY3VycmVudElkKTtcbiAgICAgIHBhdGguc3BsaWNlKGlkSW5kZXgpO1xuICAgICAgdGhpcy5jdXJyZW50SWQgPSBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmN1cnJlbnRJZCA9IGlkO1xuICAgIH1cblxuICAgIGNvbnN0IHRyZWU6IGFueSA9IHRoaXMuX2dldFRyZWUocGF0aCk7XG4gICAgdGhpcy51cGRhdGUodHJlZSk7XG4gIH1cblxuICBwdWJsaWMgc2V0QWN0aXZlKGlkKSB7XG4gICAgdGhpcy5hY3RpdmVJZCA9IGlkO1xuICB9XG5cbiAgcHVibGljIGhpZ2hsaWdodEFjdGl2ZSgpIHtcbiAgICBjb25zdCBjb250cm9sID0gKGl0ZW1zKSA9PiB7XG4gICAgICBpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IGZvdW5kZWQgPSBpdGVtLm1ldGEgPT09IHRoaXMuYWN0aXZlSWQ7XG4gICAgICAgIGNvbnN0IGhhc0FjdGl2ZSA9IGl0ZW0uY2xhc3Nlcy5pbmRleE9mKCdpcy1hY3RpdmUnKSAhPT0gLTE7XG5cbiAgICAgICAgLy8gY2xlYXIgaXMtYWN0aXZlXG4gICAgICAgIGlmIChoYXNBY3RpdmUgJiYgIWZvdW5kZWQpIHtcbiAgICAgICAgICBjb25zdCBjdXJyZW50Q2xhc3NlcyA9IGl0ZW0uY2xhc3Nlcy5zcGxpdCgnICcpO1xuICAgICAgICAgIGN1cnJlbnRDbGFzc2VzLnNwbGljZShjdXJyZW50Q2xhc3Nlcy5pbmRleE9mKCdpcy1hY3RpdmUnKSwgMSk7XG4gICAgICAgICAgaXRlbS5jbGFzc2VzID0gY3VycmVudENsYXNzZXMuam9pbignICcpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZvdW5kZWQpIHtcbiAgICAgICAgICBjb25zdCBjdXJyZW50Q2xhc3NlcyA9IGl0ZW0uY2xhc3Nlcy5zcGxpdCgnICcpO1xuICAgICAgICAgIGlmIChjdXJyZW50Q2xhc3Nlcy5pbmRleE9mKCdpcy1hY3RpdmUnKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIGN1cnJlbnRDbGFzc2VzLnB1c2goJ2lzLWFjdGl2ZScpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpdGVtLmNsYXNzZXMgPSBjdXJyZW50Q2xhc3Nlcy5qb2luKCcgJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShpdGVtLml0ZW1zKSAmJiBpdGVtLml0ZW1zLmxlbmd0aCkge1xuICAgICAgICAgIGNvbnRyb2woaXRlbS5pdGVtcyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG4gICAgY29udHJvbCh0aGlzLm91dHB1dC5pdGVtcyk7XG4gIH1cblxuICBwcml2YXRlIF9nZXRDYWNoZWREYXRhID0gKCkgPT4gQXdUcmVlRFMuZGF0YUNhY2hlW3RoaXMucm9vdElkXVxuXG4gIHByaXZhdGUgX25vcm1hbGl6ZSA9ICh7XG4gICAgaWQsIGxhYmVsLCBpY29uLCBicmFuY2hlcywgZG9jdW1lbnRfdHlwZTogdHlwZSwgZG9jdW1lbnRfY2xhc3NpZmljYXRpb246IGNsYXNzaWZpY2F0aW9uXG4gIH0pID0+IHtcbiAgICBjb25zdCBoYXNCcmFuY2hlcyA9ICEhKEFycmF5LmlzQXJyYXkoYnJhbmNoZXMpICYmIGJyYW5jaGVzLmxlbmd0aCk7XG4gICAgdGhpcy5fZ2V0Q2FjaGVkRGF0YSgpLmZsYXREYXRhW2lkXSA9IHtcbiAgICAgIGlkLCBsYWJlbCwgaWNvbiwgaGFzQnJhbmNoZXMsIHR5cGUsIGNsYXNzaWZpY2F0aW9uXG4gICAgfTtcbiAgICBpZiAoaGFzQnJhbmNoZXMpIHtcbiAgICAgIGJyYW5jaGVzLmZvckVhY2goKGRhdGEpID0+IHtcbiAgICAgICAgdGhpcy5fZ2V0Q2FjaGVkRGF0YSgpLmZsYXRJZHMucHVzaChbaWQsIGRhdGEuaWRdKTtcbiAgICAgICAgdGhpcy5fbm9ybWFsaXplKGRhdGEpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0UGFyZW50ID0gKGlkKSA9PiB0aGlzLl9nZXRDYWNoZWREYXRhKCkuZmxhdElkc1xuICAgIC5maWx0ZXIoKFssIGNoaWxkSWRdKSA9PiBjaGlsZElkID09PSBpZClcbiAgICAubWFwKChbcGFyZW50SWRdKSA9PiBwYXJlbnRJZClbMF0gfHwgbnVsbFxuXG4gIHByaXZhdGUgX2dldFRyZWVQYXRoID0gKGlkKSA9PiB7XG4gICAgY29uc3QgaWRzID0gW2lkXTtcbiAgICBsZXQgY3VycmVudElkID0gaWQ7XG4gICAgd2hpbGUgKGN1cnJlbnRJZCkge1xuICAgICAgY29uc3QgcGFyZW50SWQgPSB0aGlzLl9nZXRQYXJlbnQoY3VycmVudElkKTtcbiAgICAgIGlmIChwYXJlbnRJZCkge1xuICAgICAgICBpZHMucHVzaChwYXJlbnRJZCk7XG4gICAgICB9XG4gICAgICBjdXJyZW50SWQgPSBwYXJlbnRJZDtcbiAgICB9XG4gICAgcmV0dXJuIGlkcy5yZXZlcnNlKCk7XG4gIH1cblxuICBwcml2YXRlIF9nZXRUcmVlID0gKHBhdGgpID0+IHtcbiAgICBjb25zdCB0cmVlID0ge307XG4gICAgbGV0IGNvdW50ZXIgPSAwO1xuXG4gICAgY29uc3QgbG9hZEl0ZW1zID0gKGlkLCBzb3VyY2UpID0+IHtcbiAgICAgIGNvdW50ZXIgKz0gMTtcbiAgICAgIGNvbnN0IG5leHRQYXJlbnQgPSBwYXRoW2NvdW50ZXJdO1xuICAgICAgc291cmNlLml0ZW1zID0gW107XG5cbiAgICAgIHRoaXMuX2dldENhY2hlZERhdGEoKS5mbGF0SWRzXG4gICAgICAgIC5maWx0ZXIoKFtwYXJlbnRJZF0pID0+IHBhcmVudElkID09PSBpZClcbiAgICAgICAgLmZvckVhY2goKFssIGNoaWxkSWRdLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGluUGF0aCA9IGNoaWxkSWQgPT09IG5leHRQYXJlbnQ7XG4gICAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMuX2dldFRyZWVJdGVtKGNoaWxkSWQsIGluUGF0aCk7XG4gICAgICAgICAgc291cmNlLml0ZW1zLnB1c2goaXRlbSk7XG4gICAgICAgICAgaWYgKGluUGF0aCkge1xuICAgICAgICAgICAgbG9hZEl0ZW1zKGNoaWxkSWQsIHNvdXJjZS5pdGVtc1tpbmRleF0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8vIGluaXRcbiAgICBsb2FkSXRlbXMocGF0aFswXSwgdHJlZSk7XG4gICAgcmV0dXJuIHRyZWU7XG4gIH1cblxuICBwcml2YXRlIF9nZXRUcmVlSXRlbSA9IChpZCwgaW5QYXRoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgbGFiZWwsIGltZywgaGFzQnJhbmNoZXMsIHR5cGUsIGNsYXNzaWZpY2F0aW9uXG4gICAgfSA9IHRoaXMuX2dldENhY2hlZERhdGEoKS5mbGF0RGF0YVtpZF07XG4gICAgY29uc3QgZGVmYXVsdEljb24gPSAodGhpcy5vcHRpb25zLmNvbmZpZ1t0eXBlXSB8fCB7IGljb246IG51bGwgfSkuaWNvbjtcbiAgICBsZXQgc3BlY2lmaWNJY29uID0gJyc7XG4gICAgY29uc3QgbGFzdFNlZ21lbnQgPSAvLipcXC4oXFx3KykkLztcbiAgICBpZiAoY2xhc3NpZmljYXRpb24gJiYgbGFzdFNlZ21lbnQudGVzdChjbGFzc2lmaWNhdGlvbikpIHtcbiAgICAgIGNvbnN0IGNsYXNzSUQgPSBjbGFzc2lmaWNhdGlvblxuICAgICAgICAubWF0Y2gobGFzdFNlZ21lbnQpWzFdIC8vIGdldCBjbGFzc2lmaWNhdGlvbiBjaGFyYWN0ZXJzXG4gICAgICAgIC50b1VwcGVyQ2FzZSgpOyAvLyBub3JtYWxpemVcbiAgICAgIHNwZWNpZmljSWNvbiA9IHRoaXMub3B0aW9ucy5jb25maWdbdHlwZV0uY2xhc3NpZmljYXRpb25zW2NsYXNzSURdLmljb247XG4gICAgfVxuICAgIGNvbnN0IGFycm93SWNvbnMgPSBpblBhdGggPyAnbjctaWNvbi1hbmdsZS1kb3duJyA6ICduNy1pY29uLWFuZ2xlLXJpZ2h0JztcbiAgICBjb25zdCBjbGFzc2VzID0gW107XG4gICAgaWYgKGluUGF0aCkge1xuICAgICAgY2xhc3Nlcy5wdXNoKCdpcy1leHBhbmRlZCcpO1xuICAgIH1cbiAgICBpZiAodGhpcy5hY3RpdmVJZCA9PT0gaWQpIHtcbiAgICAgIGNsYXNzZXMucHVzaCgnaXMtYWN0aXZlJyk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBjbGFzc2VzOiBjbGFzc2VzLmpvaW4oJyAnKSxcbiAgICAgIHRleHQ6IGxhYmVsIHx8IG51bGwsXG4gICAgICBpbWc6IGltZyB8fCBudWxsLFxuICAgICAgaWNvbjogKHNwZWNpZmljSWNvbiB8fCBkZWZhdWx0SWNvbiksXG4gICAgICB0b2dnbGU6IGhhc0JyYW5jaGVzID8ge1xuICAgICAgICBpY29uOiBhcnJvd0ljb25zLFxuICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgc291cmNlOiAndG9nZ2xlJyxcbiAgICAgICAgICBpZCxcbiAgICAgICAgfSxcbiAgICAgIH0gOiBudWxsLFxuICAgICAgbWV0YTogaWQsXG4gICAgICBhbmNob3I6IHtcbiAgICAgICAgaHJlZjogYCR7dGhpcy5iYXNlUGF0aH0vJHtpZH0vJHtoZWxwZXJzLnNsdWdpZnkobGFiZWwpfWAsXG4gICAgICB9LFxuICAgIH07XG4gIH1cbn1cbiJdfQ==