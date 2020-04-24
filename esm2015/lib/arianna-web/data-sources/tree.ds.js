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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvdHJlZS5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ2hFLE9BQU8sT0FBTyxNQUFNLHNCQUFzQixDQUFDO0FBRTNDLE1BQU0sT0FBTyxRQUFTLFNBQVEsVUFBVTtJQUF4Qzs7UUFXWSxjQUFTOzs7O1FBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBQztRQWtFN0IsbUJBQWM7OztRQUFHLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFBO1FBRXRELGVBQVU7Ozs7UUFBRyxDQUFDLEVBQ3BCLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSx1QkFBdUIsRUFBRSxjQUFjLEVBQzdGLEVBQUUsRUFBRTs7a0JBQ0csV0FBVyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUNsRSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxHQUFHO2dCQUNuQyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxjQUFjO2FBQ3hELENBQUM7WUFDRixJQUFJLFdBQVcsRUFBRTtnQkFDZixRQUFRLENBQUMsT0FBTzs7OztnQkFBQyxDQUFDLElBQUksRUFBRSxFQUFFO29CQUN4QixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFB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QUFPLEdBQUcsY0FBYyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDekM7Z0JBRUQsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTtvQkFDbEQsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDckI7WUFDSCxDQUFDLEVBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQTtRQUNELE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdCLENBQUM7O0FBMUVNLGtCQUFTLEdBQVEsRUFBRSxDQUFDOzs7SUFBM0IsbUJBQTJCOzs7OztJQUUzQiw0QkFBeUI7Ozs7O0lBRXpCLDBCQUF1Qjs7Ozs7SUFFdkIsNkJBQTBCOzs7OztJQUUxQiw0QkFBeUI7Ozs7O0lBRXpCLDZCQUFxQzs7Ozs7SUFrRXJDLGtDQUE4RDs7Ozs7SUFFOUQsOEJBYUM7Ozs7O0lBRUQsOEJBRTJDOzs7OztJQUUzQyxnQ0FXQzs7Ozs7SUFFRCw0QkF3QkM7Ozs7O0lBRUQsZ0NBc0NDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlL2Rpc3QvZGF0YS1zb3VyY2UnO1xuaW1wb3J0IGhlbHBlcnMgZnJvbSAnLi4vLi4vY29tbW9uL2hlbHBlcnMnO1xuXG5leHBvcnQgY2xhc3MgQXdUcmVlRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgc3RhdGljIGRhdGFDYWNoZTogYW55ID0ge307XG5cbiAgcHJpdmF0ZSBiYXNlUGF0aDogc3RyaW5nO1xuXG4gIHByaXZhdGUgcm9vdElkOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBjdXJyZW50SWQ6IHN0cmluZztcblxuICBwcml2YXRlIGFjdGl2ZUlkOiBzdHJpbmc7XG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybSA9IChkYXRhKSA9PiBkYXRhO1xuXG4gIHB1YmxpYyBsb2FkKGRhdGEpIHtcbiAgICBjb25zdCB7IHRyZWUsIGJhc2VQYXRoIH0gPSBkYXRhO1xuICAgIHRoaXMucm9vdElkID0gdHJlZS5pZDtcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGg7XG4gICAgLy8gc2F2ZSBpbiBjYWNoZVxuICAgIGlmICghQXdUcmVlRFMuZGF0YUNhY2hlW3RoaXMucm9vdElkXSkge1xuICAgICAgQXdUcmVlRFMuZGF0YUNhY2hlW3RoaXMucm9vdElkXSA9IHsgZmxhdElkczogW10sIGZsYXREYXRhOiB7fSB9O1xuICAgICAgdGhpcy5fbm9ybWFsaXplKHRyZWUpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBidWlsZChpZCkge1xuICAgIGNvbnN0IHBhdGggPSB0aGlzLl9nZXRUcmVlUGF0aChpZCk7XG4gICAgY29uc3Qgb2xkUGF0aCA9IHRoaXMuX2dldFRyZWVQYXRoKHRoaXMuY3VycmVudElkKTtcbiAgICBjb25zdCBvbGRQYXRoSW5kZXggPSBvbGRQYXRoLmluZGV4T2YoaWQpO1xuXG4gICAgaWYgKG9sZFBhdGhJbmRleCA+IDApIHtcbiAgICAgIHBhdGguc3BsaWNlKG9sZFBhdGhJbmRleCk7XG4gICAgICB0aGlzLmN1cnJlbnRJZCA9IG51bGw7XG4gICAgfSBlbHNlIGlmICh0aGlzLmN1cnJlbnRJZCA9PT0gaWQpIHtcbiAgICAgIGNvbnN0IGlkSW5kZXggPSBwYXRoLmluZGV4T2YodGhpcy5jdXJyZW50SWQpO1xuICAgICAgcGF0aC5zcGxpY2UoaWRJbmRleCk7XG4gICAgICB0aGlzLmN1cnJlbnRJZCA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY3VycmVudElkID0gaWQ7XG4gICAgfVxuXG4gICAgY29uc3QgdHJlZTogYW55ID0gdGhpcy5fZ2V0VHJlZShwYXRoKTtcbiAgICB0aGlzLnVwZGF0ZSh0cmVlKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRBY3RpdmUoaWQpIHtcbiAgICB0aGlzLmFjdGl2ZUlkID0gaWQ7XG4gIH1cblxuICBwdWJsaWMgaGlnaGxpZ2h0QWN0aXZlKCkge1xuICAgIGNvbnN0IGNvbnRyb2wgPSAoaXRlbXMpID0+IHtcbiAgICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgY29uc3QgZm91bmRlZCA9IGl0ZW0ubWV0YSA9PT0gdGhpcy5hY3RpdmVJZDtcbiAgICAgICAgY29uc3QgaGFzQWN0aXZlID0gaXRlbS5jbGFzc2VzLmluZGV4T2YoJ2lzLWFjdGl2ZScpICE9PSAtMTtcblxuICAgICAgICAvLyBjbGVhciBpcy1hY3RpdmVcbiAgICAgICAgaWYgKGhhc0FjdGl2ZSAmJiAhZm91bmRlZCkge1xuICAgICAgICAgIGNvbnN0IGN1cnJlbnRDbGFzc2VzID0gaXRlbS5jbGFzc2VzLnNwbGl0KCcgJyk7XG4gICAgICAgICAgY3VycmVudENsYXNzZXMuc3BsaWNlKGN1cnJlbnRDbGFzc2VzLmluZGV4T2YoJ2lzLWFjdGl2ZScpLCAxKTtcbiAgICAgICAgICBpdGVtLmNsYXNzZXMgPSBjdXJyZW50Q2xhc3Nlcy5qb2luKCcgJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZm91bmRlZCkge1xuICAgICAgICAgIGNvbnN0IGN1cnJlbnRDbGFzc2VzID0gaXRlbS5jbGFzc2VzLnNwbGl0KCcgJyk7XG4gICAgICAgICAgaWYgKGN1cnJlbnRDbGFzc2VzLmluZGV4T2YoJ2lzLWFjdGl2ZScpID09PSAtMSkge1xuICAgICAgICAgICAgY3VycmVudENsYXNzZXMucHVzaCgnaXMtYWN0aXZlJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGl0ZW0uY2xhc3NlcyA9IGN1cnJlbnRDbGFzc2VzLmpvaW4oJyAnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGl0ZW0uaXRlbXMpICYmIGl0ZW0uaXRlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgY29udHJvbChpdGVtLml0ZW1zKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcbiAgICBjb250cm9sKHRoaXMub3V0cHV0Lml0ZW1zKTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldENhY2hlZERhdGEgPSAoKSA9PiBBd1RyZWVEUy5kYXRhQ2FjaGVbdGhpcy5yb290SWRdXG5cbiAgcHJpdmF0ZSBfbm9ybWFsaXplID0gKHtcbiAgICBpZCwgbGFiZWwsIGljb24sIGltZywgYnJhbmNoZXMsIGRvY3VtZW50X3R5cGU6IHR5cGUsIGRvY3VtZW50X2NsYXNzaWZpY2F0aW9uOiBjbGFzc2lmaWNhdGlvblxuICB9KSA9PiB7XG4gICAgY29uc3QgaGFzQnJhbmNoZXMgPSAhIShBcnJheS5pc0FycmF5KGJyYW5jaGVzKSAmJiBicmFuY2hlcy5sZW5ndGgpO1xuICAgIHRoaXMuX2dldENhY2hlZERhdGEoKS5mbGF0RGF0YVtpZF0gPSB7XG4gICAgICBpZCwgbGFiZWwsIGljb24sIGltZywgaGFzQnJhbmNoZXMsIHR5cGUsIGNsYXNzaWZpY2F0aW9uXG4gICAgfTtcbiAgICBpZiAoaGFzQnJhbmNoZXMpIHtcbiAgICAgIGJyYW5jaGVzLmZvckVhY2goKGRhdGEpID0+IHtcbiAgICAgICAgdGhpcy5fZ2V0Q2FjaGVkRGF0YSgpLmZsYXRJZHMucHVzaChbaWQsIGRhdGEuaWRdKTtcbiAgICAgICAgdGhpcy5fbm9ybWFsaXplKGRhdGEpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0UGFyZW50ID0gKGlkKSA9PiB0aGlzLl9nZXRDYWNoZWREYXRhKCkuZmxhdElkc1xuICAgIC5maWx0ZXIoKFssIGNoaWxkSWRdKSA9PiBjaGlsZElkID09PSBpZClcbiAgICAubWFwKChbcGFyZW50SWRdKSA9PiBwYXJlbnRJZClbMF0gfHwgbnVsbFxuXG4gIHByaXZhdGUgX2dldFRyZWVQYXRoID0gKGlkKSA9PiB7XG4gICAgY29uc3QgaWRzID0gW2lkXTtcbiAgICBsZXQgY3VycmVudElkID0gaWQ7XG4gICAgd2hpbGUgKGN1cnJlbnRJZCkge1xuICAgICAgY29uc3QgcGFyZW50SWQgPSB0aGlzLl9nZXRQYXJlbnQoY3VycmVudElkKTtcbiAgICAgIGlmIChwYXJlbnRJZCkge1xuICAgICAgICBpZHMucHVzaChwYXJlbnRJZCk7XG4gICAgICB9XG4gICAgICBjdXJyZW50SWQgPSBwYXJlbnRJZDtcbiAgICB9XG4gICAgcmV0dXJuIGlkcy5yZXZlcnNlKCk7XG4gIH1cblxuICBwcml2YXRlIF9nZXRUcmVlID0gKHBhdGgpID0+IHtcbiAgICBjb25zdCB0cmVlID0ge307XG4gICAgbGV0IGNvdW50ZXIgPSAwO1xuXG4gICAgY29uc3QgbG9hZEl0ZW1zID0gKGlkLCBzb3VyY2UpID0+IHtcbiAgICAgIGNvdW50ZXIgKz0gMTtcbiAgICAgIGNvbnN0IG5leHRQYXJlbnQgPSBwYXRoW2NvdW50ZXJdO1xuICAgICAgc291cmNlLml0ZW1zID0gW107XG5cbiAgICAgIHRoaXMuX2dldENhY2hlZERhdGEoKS5mbGF0SWRzXG4gICAgICAgIC5maWx0ZXIoKFtwYXJlbnRJZF0pID0+IHBhcmVudElkID09PSBpZClcbiAgICAgICAgLmZvckVhY2goKFssIGNoaWxkSWRdLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGluUGF0aCA9IGNoaWxkSWQgPT09IG5leHRQYXJlbnQ7XG4gICAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMuX2dldFRyZWVJdGVtKGNoaWxkSWQsIGluUGF0aCk7XG4gICAgICAgICAgc291cmNlLml0ZW1zLnB1c2goaXRlbSk7XG4gICAgICAgICAgaWYgKGluUGF0aCkge1xuICAgICAgICAgICAgbG9hZEl0ZW1zKGNoaWxkSWQsIHNvdXJjZS5pdGVtc1tpbmRleF0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8vIGluaXRcbiAgICBsb2FkSXRlbXMocGF0aFswXSwgdHJlZSk7XG4gICAgcmV0dXJuIHRyZWU7XG4gIH1cblxuICBwcml2YXRlIF9nZXRUcmVlSXRlbSA9IChpZCwgaW5QYXRoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgbGFiZWwsIGltZywgaGFzQnJhbmNoZXMsIHR5cGUsIGNsYXNzaWZpY2F0aW9uXG4gICAgfSA9IHRoaXMuX2dldENhY2hlZERhdGEoKS5mbGF0RGF0YVtpZF07XG4gICAgY29uc3QgZGVmYXVsdEljb24gPSAodGhpcy5vcHRpb25zLmNvbmZpZ1t0eXBlXSB8fCB7IGljb246IG51bGwgfSkuaWNvbjtcbiAgICBsZXQgc3BlY2lmaWNJY29uID0gJyc7XG4gICAgY29uc3QgbGFzdFNlZ21lbnQgPSAvLipcXC4oXFx3KykkLztcbiAgICBpZiAoY2xhc3NpZmljYXRpb24gJiYgbGFzdFNlZ21lbnQudGVzdChjbGFzc2lmaWNhdGlvbikpIHtcbiAgICAgIGNvbnN0IGNsYXNzSUQgPSBjbGFzc2lmaWNhdGlvblxuICAgICAgICAubWF0Y2gobGFzdFNlZ21lbnQpWzFdIC8vIGdldCBjbGFzc2lmaWNhdGlvbiBjaGFyYWN0ZXJzXG4gICAgICAgIC50b1VwcGVyQ2FzZSgpOyAvLyBub3JtYWxpemVcbiAgICAgIHNwZWNpZmljSWNvbiA9IHRoaXMub3B0aW9ucy5jb25maWdbdHlwZV0uY2xhc3NpZmljYXRpb25zW2NsYXNzSURdLmljb247XG4gICAgfVxuICAgIGNvbnN0IGFycm93SWNvbnMgPSBpblBhdGggPyAnbjctaWNvbi1hbmdsZS1kb3duJyA6ICduNy1pY29uLWFuZ2xlLXJpZ2h0JztcbiAgICBjb25zdCBjbGFzc2VzID0gW107XG4gICAgaWYgKGluUGF0aCkge1xuICAgICAgY2xhc3Nlcy5wdXNoKCdpcy1leHBhbmRlZCcpO1xuICAgIH1cbiAgICBpZiAodGhpcy5hY3RpdmVJZCA9PT0gaWQpIHtcbiAgICAgIGNsYXNzZXMucHVzaCgnaXMtYWN0aXZlJyk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBjbGFzc2VzOiBjbGFzc2VzLmpvaW4oJyAnKSxcbiAgICAgIHRleHQ6IGxhYmVsIHx8IG51bGwsXG4gICAgICBpbWc6IGltZyB8fCBudWxsLFxuICAgICAgaWNvbjogKHNwZWNpZmljSWNvbiB8fCBkZWZhdWx0SWNvbiksXG4gICAgICB0b2dnbGU6IGhhc0JyYW5jaGVzID8ge1xuICAgICAgICBpY29uOiBhcnJvd0ljb25zLFxuICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgc291cmNlOiAndG9nZ2xlJyxcbiAgICAgICAgICBpZCxcbiAgICAgICAgfSxcbiAgICAgIH0gOiBudWxsLFxuICAgICAgbWV0YTogaWQsXG4gICAgICBhbmNob3I6IHtcbiAgICAgICAgaHJlZjogYCR7dGhpcy5iYXNlUGF0aH0vJHtpZH0vJHtoZWxwZXJzLnNsdWdpZnkobGFiZWwpfWAsXG4gICAgICB9LFxuICAgIH07XG4gIH1cbn1cbiJdfQ==