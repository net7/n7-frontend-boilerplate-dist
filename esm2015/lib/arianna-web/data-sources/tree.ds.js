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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvdHJlZS5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNoRSxPQUFPLE9BQU8sTUFBTSxzQkFBc0IsQ0FBQztBQUUzQyxNQUFNLE9BQU8sUUFBUyxTQUFRLFVBQVU7SUFBeEM7O1FBV1ksY0FBUzs7OztRQUFHLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUM7UUFrRTdCLG1CQUFjOzs7UUFBRyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBQTtRQUV0RCxlQUFVOzs7O1FBQUcsQ0FBQyxFQUNwQixFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsUUFBUSxHQUMvQixFQUFFLEVBQUU7O2tCQUNHLFdBQVcsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFDbEUsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsR0FBRztnQkFDbkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLFdBQVc7YUFDbEMsQ0FBQztZQUNGLElBQUksV0FBVyxFQUFFO2dCQUNmLFFBQVEsQ0FBQyxPQUFPOzs7O2dCQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7b0JBQ3hCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUNsRCxJQUFJLENBQUMsVUFBVSxDQUFDLElB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Ozs7O0lBRUQsNEJBd0JDOzs7OztJQUVELGdDQTZCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZS9kaXN0L2RhdGEtc291cmNlJztcclxuaW1wb3J0IGhlbHBlcnMgZnJvbSAnLi4vLi4vY29tbW9uL2hlbHBlcnMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEF3VHJlZURTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XHJcbiAgc3RhdGljIGRhdGFDYWNoZTogYW55ID0ge307XHJcblxyXG4gIHByaXZhdGUgYmFzZVBhdGg6IHN0cmluZztcclxuXHJcbiAgcHJpdmF0ZSByb290SWQ6IHN0cmluZztcclxuXHJcbiAgcHJpdmF0ZSBjdXJyZW50SWQ6IHN0cmluZztcclxuXHJcbiAgcHJpdmF0ZSBhY3RpdmVJZDogc3RyaW5nO1xyXG5cclxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtID0gKGRhdGEpID0+IGRhdGE7XHJcblxyXG4gIHB1YmxpYyBsb2FkKGRhdGEpIHtcclxuICAgIGNvbnN0IHsgdHJlZSwgYmFzZVBhdGggfSA9IGRhdGE7XHJcbiAgICB0aGlzLnJvb3RJZCA9IHRyZWUuaWQ7XHJcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGg7XHJcbiAgICAvLyBzYXZlIGluIGNhY2hlXHJcbiAgICBpZiAoIUF3VHJlZURTLmRhdGFDYWNoZVt0aGlzLnJvb3RJZF0pIHtcclxuICAgICAgQXdUcmVlRFMuZGF0YUNhY2hlW3RoaXMucm9vdElkXSA9IHsgZmxhdElkczogW10sIGZsYXREYXRhOiB7fSB9O1xyXG4gICAgICB0aGlzLl9ub3JtYWxpemUodHJlZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYnVpbGQoaWQpIHtcclxuICAgIGNvbnN0IHBhdGggPSB0aGlzLl9nZXRUcmVlUGF0aChpZCk7XHJcbiAgICBjb25zdCBvbGRQYXRoID0gdGhpcy5fZ2V0VHJlZVBhdGgodGhpcy5jdXJyZW50SWQpO1xyXG4gICAgY29uc3Qgb2xkUGF0aEluZGV4ID0gb2xkUGF0aC5pbmRleE9mKGlkKTtcclxuXHJcbiAgICBpZiAob2xkUGF0aEluZGV4ID4gMCkge1xyXG4gICAgICBwYXRoLnNwbGljZShvbGRQYXRoSW5kZXgpO1xyXG4gICAgICB0aGlzLmN1cnJlbnRJZCA9IG51bGw7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuY3VycmVudElkID09PSBpZCkge1xyXG4gICAgICBjb25zdCBpZEluZGV4ID0gcGF0aC5pbmRleE9mKHRoaXMuY3VycmVudElkKTtcclxuICAgICAgcGF0aC5zcGxpY2UoaWRJbmRleCk7XHJcbiAgICAgIHRoaXMuY3VycmVudElkID0gbnVsbDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuY3VycmVudElkID0gaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdHJlZTogYW55ID0gdGhpcy5fZ2V0VHJlZShwYXRoKTtcclxuICAgIHRoaXMudXBkYXRlKHRyZWUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldEFjdGl2ZShpZCkge1xyXG4gICAgdGhpcy5hY3RpdmVJZCA9IGlkO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGhpZ2hsaWdodEFjdGl2ZSgpIHtcclxuICAgIGNvbnN0IGNvbnRyb2wgPSAoaXRlbXMpID0+IHtcclxuICAgICAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZvdW5kZWQgPSBpdGVtLm1ldGEgPT09IHRoaXMuYWN0aXZlSWQ7XHJcbiAgICAgICAgY29uc3QgaGFzQWN0aXZlID0gaXRlbS5jbGFzc2VzLmluZGV4T2YoJ2lzLWFjdGl2ZScpICE9PSAtMTtcclxuXHJcbiAgICAgICAgLy8gY2xlYXIgaXMtYWN0aXZlXHJcbiAgICAgICAgaWYgKGhhc0FjdGl2ZSAmJiAhZm91bmRlZCkge1xyXG4gICAgICAgICAgY29uc3QgY3VycmVudENsYXNzZXMgPSBpdGVtLmNsYXNzZXMuc3BsaXQoJyAnKTtcclxuICAgICAgICAgIGN1cnJlbnRDbGFzc2VzLnNwbGljZShjdXJyZW50Q2xhc3Nlcy5pbmRleE9mKCdpcy1hY3RpdmUnKSwgMSk7XHJcbiAgICAgICAgICBpdGVtLmNsYXNzZXMgPSBjdXJyZW50Q2xhc3Nlcy5qb2luKCcgJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZm91bmRlZCkge1xyXG4gICAgICAgICAgY29uc3QgY3VycmVudENsYXNzZXMgPSBpdGVtLmNsYXNzZXMuc3BsaXQoJyAnKTtcclxuICAgICAgICAgIGlmIChjdXJyZW50Q2xhc3Nlcy5pbmRleE9mKCdpcy1hY3RpdmUnKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgY3VycmVudENsYXNzZXMucHVzaCgnaXMtYWN0aXZlJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpdGVtLmNsYXNzZXMgPSBjdXJyZW50Q2xhc3Nlcy5qb2luKCcgJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShpdGVtLml0ZW1zKSAmJiBpdGVtLml0ZW1zLmxlbmd0aCkge1xyXG4gICAgICAgICAgY29udHJvbChpdGVtLml0ZW1zKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIGNvbnRyb2wodGhpcy5vdXRwdXQuaXRlbXMpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfZ2V0Q2FjaGVkRGF0YSA9ICgpID0+IEF3VHJlZURTLmRhdGFDYWNoZVt0aGlzLnJvb3RJZF1cclxuXHJcbiAgcHJpdmF0ZSBfbm9ybWFsaXplID0gKHtcclxuICAgIGlkLCBsYWJlbCwgaWNvbiwgaW1nLCBicmFuY2hlcyxcclxuICB9KSA9PiB7XHJcbiAgICBjb25zdCBoYXNCcmFuY2hlcyA9ICEhKEFycmF5LmlzQXJyYXkoYnJhbmNoZXMpICYmIGJyYW5jaGVzLmxlbmd0aCk7XHJcbiAgICB0aGlzLl9nZXRDYWNoZWREYXRhKCkuZmxhdERhdGFbaWRdID0ge1xyXG4gICAgICBpZCwgbGFiZWwsIGljb24sIGltZywgaGFzQnJhbmNoZXMsXHJcbiAgICB9O1xyXG4gICAgaWYgKGhhc0JyYW5jaGVzKSB7XHJcbiAgICAgIGJyYW5jaGVzLmZvckVhY2goKGRhdGEpID0+IHtcclxuICAgICAgICB0aGlzLl9nZXRDYWNoZWREYXRhKCkuZmxhdElkcy5wdXNoKFtpZCwgZGF0YS5pZF0pO1xyXG4gICAgICAgIHRoaXMuX25vcm1hbGl6ZShkYXRhKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9nZXRQYXJlbnQgPSAoaWQpID0+IHRoaXMuX2dldENhY2hlZERhdGEoKS5mbGF0SWRzXHJcbiAgICAuZmlsdGVyKChbLCBjaGlsZElkXSkgPT4gY2hpbGRJZCA9PT0gaWQpXHJcbiAgICAubWFwKChbcGFyZW50SWRdKSA9PiBwYXJlbnRJZClbMF0gfHwgbnVsbFxyXG5cclxuICBwcml2YXRlIF9nZXRUcmVlUGF0aCA9IChpZCkgPT4ge1xyXG4gICAgY29uc3QgaWRzID0gW2lkXTtcclxuICAgIGxldCBjdXJyZW50SWQgPSBpZDtcclxuICAgIHdoaWxlIChjdXJyZW50SWQpIHtcclxuICAgICAgY29uc3QgcGFyZW50SWQgPSB0aGlzLl9nZXRQYXJlbnQoY3VycmVudElkKTtcclxuICAgICAgaWYgKHBhcmVudElkKSB7XHJcbiAgICAgICAgaWRzLnB1c2gocGFyZW50SWQpO1xyXG4gICAgICB9XHJcbiAgICAgIGN1cnJlbnRJZCA9IHBhcmVudElkO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGlkcy5yZXZlcnNlKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9nZXRUcmVlID0gKHBhdGgpID0+IHtcclxuICAgIGNvbnN0IHRyZWUgPSB7fTtcclxuICAgIGxldCBjb3VudGVyID0gMDtcclxuXHJcbiAgICBjb25zdCBsb2FkSXRlbXMgPSAoaWQsIHNvdXJjZSkgPT4ge1xyXG4gICAgICBjb3VudGVyICs9IDE7XHJcbiAgICAgIGNvbnN0IG5leHRQYXJlbnQgPSBwYXRoW2NvdW50ZXJdO1xyXG4gICAgICBzb3VyY2UuaXRlbXMgPSBbXTtcclxuXHJcbiAgICAgIHRoaXMuX2dldENhY2hlZERhdGEoKS5mbGF0SWRzXHJcbiAgICAgICAgLmZpbHRlcigoW3BhcmVudElkXSkgPT4gcGFyZW50SWQgPT09IGlkKVxyXG4gICAgICAgIC5mb3JFYWNoKChbLCBjaGlsZElkXSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgIGNvbnN0IGluUGF0aCA9IGNoaWxkSWQgPT09IG5leHRQYXJlbnQ7XHJcbiAgICAgICAgICBjb25zdCBpdGVtID0gdGhpcy5fZ2V0VHJlZUl0ZW0oY2hpbGRJZCwgaW5QYXRoKTtcclxuICAgICAgICAgIHNvdXJjZS5pdGVtcy5wdXNoKGl0ZW0pO1xyXG4gICAgICAgICAgaWYgKGluUGF0aCkge1xyXG4gICAgICAgICAgICBsb2FkSXRlbXMoY2hpbGRJZCwgc291cmNlLml0ZW1zW2luZGV4XSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIGluaXRcclxuICAgIGxvYWRJdGVtcyhwYXRoWzBdLCB0cmVlKTtcclxuICAgIHJldHVybiB0cmVlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfZ2V0VHJlZUl0ZW0gPSAoaWQsIGluUGF0aCkgPT4ge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBsYWJlbCwgaWNvbiwgaW1nLCBoYXNCcmFuY2hlcyxcclxuICAgIH0gPSB0aGlzLl9nZXRDYWNoZWREYXRhKCkuZmxhdERhdGFbaWRdO1xyXG4gICAgY29uc3QgZGVmYXVsdEljb24gPSBpblBhdGggPyAnbjctaWNvbi1hbmdsZS1kb3duJyA6ICduNy1pY29uLWFuZ2xlLXJpZ2h0JztcclxuICAgIGNvbnN0IGNsYXNzZXMgPSBbXTtcclxuICAgIGlmIChpblBhdGgpIHtcclxuICAgICAgY2xhc3Nlcy5wdXNoKCdpcy1leHBhbmRlZCcpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuYWN0aXZlSWQgPT09IGlkKSB7XHJcbiAgICAgIGNsYXNzZXMucHVzaCgnaXMtYWN0aXZlJyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBjbGFzc2VzOiBjbGFzc2VzLmpvaW4oJyAnKSxcclxuICAgICAgdGV4dDogbGFiZWwgfHwgbnVsbCxcclxuICAgICAgaW1nOiBpbWcgfHwgbnVsbCxcclxuICAgICAgaWNvbjogaWNvbiB8fCBudWxsLFxyXG4gICAgICB0b2dnbGU6IGhhc0JyYW5jaGVzID8ge1xyXG4gICAgICAgIGljb246IGljb24gfHwgZGVmYXVsdEljb24sXHJcbiAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgc291cmNlOiAndG9nZ2xlJyxcclxuICAgICAgICAgIGlkLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0gOiBudWxsLFxyXG4gICAgICBtZXRhOiBpZCxcclxuICAgICAgYW5jaG9yOiB7XHJcbiAgICAgICAgaHJlZjogYCR7dGhpcy5iYXNlUGF0aH0vJHtpZH0vJHtoZWxwZXJzLnNsdWdpZnkobGFiZWwpfWAsXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=