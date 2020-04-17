/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DataSource } from '@n7-frontend/core/dist/data-source';
import helpers from '../../common/helpers';
var AwTreeDS = /** @class */ (function (_super) {
    tslib_1.__extends(AwTreeDS, _super);
    function AwTreeDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.transform = (/**
         * @param {?} data
         * @return {?}
         */
        function (data) { return data; });
        _this._getCachedData = (/**
         * @return {?}
         */
        function () { return AwTreeDS.dataCache[_this.rootId]; });
        _this._normalize = (/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var id = _a.id, label = _a.label, icon = _a.icon, branches = _a.branches, type = _a.document_type, classification = _a.document_classification;
            /** @type {?} */
            var hasBranches = !!(Array.isArray(branches) && branches.length);
            _this._getCachedData().flatData[id] = {
                id: id, label: label, icon: icon, hasBranches: hasBranches, type: type, classification: classification
            };
            if (hasBranches) {
                branches.forEach((/**
                 * @param {?} data
                 * @return {?}
                 */
                function (data) {
                    _this._getCachedData().flatIds.push([id, data.id]);
                    _this._normalize(data);
                }));
            }
        });
        _this._getParent = (/**
         * @param {?} id
         * @return {?}
         */
        function (id) { return _this._getCachedData().flatIds
            .filter((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), childId = _b[1];
            return childId === id;
        }))
            .map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 1), parentId = _b[0];
            return parentId;
        }))[0] || null; });
        _this._getTreePath = (/**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            /** @type {?} */
            var ids = [id];
            /** @type {?} */
            var currentId = id;
            while (currentId) {
                /** @type {?} */
                var parentId = _this._getParent(currentId);
                if (parentId) {
                    ids.push(parentId);
                }
                currentId = parentId;
            }
            return ids.reverse();
        });
        _this._getTree = (/**
         * @param {?} path
         * @return {?}
         */
        function (path) {
            /** @type {?} */
            var tree = {};
            /** @type {?} */
            var counter = 0;
            /** @type {?} */
            var loadItems = (/**
             * @param {?} id
             * @param {?} source
             * @return {?}
             */
            function (id, source) {
                counter += 1;
                /** @type {?} */
                var nextParent = path[counter];
                source.items = [];
                _this._getCachedData().flatIds
                    .filter((/**
                 * @param {?} __0
                 * @return {?}
                 */
                function (_a) {
                    var _b = tslib_1.__read(_a, 1), parentId = _b[0];
                    return parentId === id;
                }))
                    .forEach((/**
                 * @param {?} __0
                 * @param {?} index
                 * @return {?}
                 */
                function (_a, index) {
                    var _b = tslib_1.__read(_a, 2), childId = _b[1];
                    /** @type {?} */
                    var inPath = childId === nextParent;
                    /** @type {?} */
                    var item = _this._getTreeItem(childId, inPath);
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
        _this._getTreeItem = (/**
         * @param {?} id
         * @param {?} inPath
         * @return {?}
         */
        function (id, inPath) {
            var _a = _this._getCachedData().flatData[id], label = _a.label, img = _a.img, hasBranches = _a.hasBranches, type = _a.type, classification = _a.classification;
            /** @type {?} */
            var defaultIcon = (_this.options.config[type] || { icon: null }).icon;
            /** @type {?} */
            var specificIcon = '';
            if (classification) {
                /** @type {?} */
                var classID = classification.match(/.*\.(\w+)$/)[1].toUpperCase();
                specificIcon = _this.options.config[type].classifications[classID].icon;
            }
            /** @type {?} */
            var arrowIcons = inPath ? 'n7-icon-angle-down' : 'n7-icon-angle-right';
            /** @type {?} */
            var classes = [];
            if (inPath) {
                classes.push('is-expanded');
            }
            if (_this.activeId === id) {
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
                        id: id,
                    },
                } : null,
                meta: id,
                anchor: {
                    href: _this.basePath + "/" + id + "/" + helpers.slugify(label),
                },
            };
        });
        return _this;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    AwTreeDS.prototype.load = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        var tree = data.tree, basePath = data.basePath;
        this.rootId = tree.id;
        this.basePath = basePath;
        // save in cache
        if (!AwTreeDS.dataCache[this.rootId]) {
            AwTreeDS.dataCache[this.rootId] = { flatIds: [], flatData: {} };
            this._normalize(tree);
        }
    };
    /**
     * @param {?} id
     * @return {?}
     */
    AwTreeDS.prototype.build = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        /** @type {?} */
        var path = this._getTreePath(id);
        /** @type {?} */
        var oldPath = this._getTreePath(this.currentId);
        /** @type {?} */
        var oldPathIndex = oldPath.indexOf(id);
        if (oldPathIndex > 0) {
            path.splice(oldPathIndex);
            this.currentId = null;
        }
        else if (this.currentId === id) {
            /** @type {?} */
            var idIndex = path.indexOf(this.currentId);
            path.splice(idIndex);
            this.currentId = null;
        }
        else {
            this.currentId = id;
        }
        /** @type {?} */
        var tree = this._getTree(path);
        this.update(tree);
    };
    /**
     * @param {?} id
     * @return {?}
     */
    AwTreeDS.prototype.setActive = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        this.activeId = id;
    };
    /**
     * @return {?}
     */
    AwTreeDS.prototype.highlightActive = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var control = (/**
         * @param {?} items
         * @return {?}
         */
        function (items) {
            items.forEach((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                /** @type {?} */
                var founded = item.meta === _this.activeId;
                /** @type {?} */
                var hasActive = item.classes.indexOf('is-active') !== -1;
                // clear is-active
                if (hasActive && !founded) {
                    /** @type {?} */
                    var currentClasses = item.classes.split(' ');
                    currentClasses.splice(currentClasses.indexOf('is-active'), 1);
                    item.classes = currentClasses.join(' ');
                }
                if (founded) {
                    /** @type {?} */
                    var currentClasses = item.classes.split(' ');
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
    };
    AwTreeDS.dataCache = {};
    return AwTreeDS;
}(DataSource));
export { AwTreeDS };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvdHJlZS5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNoRSxPQUFPLE9BQU8sTUFBTSxzQkFBc0IsQ0FBQztBQUUzQztJQUE4QixvQ0FBVTtJQUF4QztRQUFBLHFFQTZLQztRQWxLVyxlQUFTOzs7O1FBQUcsVUFBQyxJQUFJLElBQUssT0FBQSxJQUFJLEVBQUosQ0FBSSxFQUFDO1FBa0U3QixvQkFBYzs7O1FBQUcsY0FBTSxPQUFBLFFBQVEsQ0FBQyxTQUFTLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxFQUEvQixDQUErQixFQUFBO1FBRXRELGdCQUFVOzs7O1FBQUcsVUFBQyxFQUVyQjtnQkFEQyxVQUFFLEVBQUUsZ0JBQUssRUFBRSxjQUFJLEVBQUUsc0JBQVEsRUFBRSx1QkFBbUIsRUFBRSwyQ0FBdUM7O2dCQUVqRixXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDO1lBQ2xFLEtBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEdBQUc7Z0JBQ25DLEVBQUUsSUFBQSxFQUFFLEtBQUssT0FBQSxFQUFFLElBQUksTUFBQSxFQUFFLFdBQVcsYUFBQSxFQUFFLElBQUksTUFBQSxFQUFFLGNBQWMsZ0JBQUE7YUFDbkQsQ0FBQztZQUNGLElBQUksV0FBVyxFQUFFO2dCQUNmLFFBQVEsQ0FBQyxPQUFPOzs7O2dCQUFDLFVBQUMsSUFBSTtvQkFDcEIsS0FBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFD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QUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTtvQkFDbEQsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDckI7WUFDSCxDQUFDLEVBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQTtRQUNELE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUExRU0sa0JBQVMsR0FBUSxFQUFFLENBQUM7SUE0SzdCLGVBQUM7Q0FBQSxBQTdLRCxDQUE4QixVQUFVLEdBNkt2QztTQTdLWSxRQUFROzs7SUFDbkIsbUJBQTJCOzs7OztJQUUzQiw0QkFBeUI7Ozs7O0lBRXpCLDBCQUF1Qjs7Ozs7SUFFdkIsNkJBQTBCOzs7OztJQUUxQiw0QkFBeUI7Ozs7O0lBRXpCLDZCQUFxQzs7Ozs7SUFrRXJDLGtDQUE4RDs7Ozs7SUFFOUQsOEJBYUM7Ozs7O0lBRUQsOEJBRTJDOzs7OztJQUUzQyxnQ0FXQzs7Ozs7SUFFRCw0QkF3QkM7Ozs7O0lBRUQsZ0NBbUNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlL2Rpc3QvZGF0YS1zb3VyY2UnO1xuaW1wb3J0IGhlbHBlcnMgZnJvbSAnLi4vLi4vY29tbW9uL2hlbHBlcnMnO1xuXG5leHBvcnQgY2xhc3MgQXdUcmVlRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgc3RhdGljIGRhdGFDYWNoZTogYW55ID0ge307XG5cbiAgcHJpdmF0ZSBiYXNlUGF0aDogc3RyaW5nO1xuXG4gIHByaXZhdGUgcm9vdElkOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBjdXJyZW50SWQ6IHN0cmluZztcblxuICBwcml2YXRlIGFjdGl2ZUlkOiBzdHJpbmc7XG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybSA9IChkYXRhKSA9PiBkYXRhO1xuXG4gIHB1YmxpYyBsb2FkKGRhdGEpIHtcbiAgICBjb25zdCB7IHRyZWUsIGJhc2VQYXRoIH0gPSBkYXRhO1xuICAgIHRoaXMucm9vdElkID0gdHJlZS5pZDtcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGg7XG4gICAgLy8gc2F2ZSBpbiBjYWNoZVxuICAgIGlmICghQXdUcmVlRFMuZGF0YUNhY2hlW3RoaXMucm9vdElkXSkge1xuICAgICAgQXdUcmVlRFMuZGF0YUNhY2hlW3RoaXMucm9vdElkXSA9IHsgZmxhdElkczogW10sIGZsYXREYXRhOiB7fSB9O1xuICAgICAgdGhpcy5fbm9ybWFsaXplKHRyZWUpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBidWlsZChpZCkge1xuICAgIGNvbnN0IHBhdGggPSB0aGlzLl9nZXRUcmVlUGF0aChpZCk7XG4gICAgY29uc3Qgb2xkUGF0aCA9IHRoaXMuX2dldFRyZWVQYXRoKHRoaXMuY3VycmVudElkKTtcbiAgICBjb25zdCBvbGRQYXRoSW5kZXggPSBvbGRQYXRoLmluZGV4T2YoaWQpO1xuXG4gICAgaWYgKG9sZFBhdGhJbmRleCA+IDApIHtcbiAgICAgIHBhdGguc3BsaWNlKG9sZFBhdGhJbmRleCk7XG4gICAgICB0aGlzLmN1cnJlbnRJZCA9IG51bGw7XG4gICAgfSBlbHNlIGlmICh0aGlzLmN1cnJlbnRJZCA9PT0gaWQpIHtcbiAgICAgIGNvbnN0IGlkSW5kZXggPSBwYXRoLmluZGV4T2YodGhpcy5jdXJyZW50SWQpO1xuICAgICAgcGF0aC5zcGxpY2UoaWRJbmRleCk7XG4gICAgICB0aGlzLmN1cnJlbnRJZCA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY3VycmVudElkID0gaWQ7XG4gICAgfVxuXG4gICAgY29uc3QgdHJlZTogYW55ID0gdGhpcy5fZ2V0VHJlZShwYXRoKTtcbiAgICB0aGlzLnVwZGF0ZSh0cmVlKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRBY3RpdmUoaWQpIHtcbiAgICB0aGlzLmFjdGl2ZUlkID0gaWQ7XG4gIH1cblxuICBwdWJsaWMgaGlnaGxpZ2h0QWN0aXZlKCkge1xuICAgIGNvbnN0IGNvbnRyb2wgPSAoaXRlbXMpID0+IHtcbiAgICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgY29uc3QgZm91bmRlZCA9IGl0ZW0ubWV0YSA9PT0gdGhpcy5hY3RpdmVJZDtcbiAgICAgICAgY29uc3QgaGFzQWN0aXZlID0gaXRlbS5jbGFzc2VzLmluZGV4T2YoJ2lzLWFjdGl2ZScpICE9PSAtMTtcblxuICAgICAgICAvLyBjbGVhciBpcy1hY3RpdmVcbiAgICAgICAgaWYgKGhhc0FjdGl2ZSAmJiAhZm91bmRlZCkge1xuICAgICAgICAgIGNvbnN0IGN1cnJlbnRDbGFzc2VzID0gaXRlbS5jbGFzc2VzLnNwbGl0KCcgJyk7XG4gICAgICAgICAgY3VycmVudENsYXNzZXMuc3BsaWNlKGN1cnJlbnRDbGFzc2VzLmluZGV4T2YoJ2lzLWFjdGl2ZScpLCAxKTtcbiAgICAgICAgICBpdGVtLmNsYXNzZXMgPSBjdXJyZW50Q2xhc3Nlcy5qb2luKCcgJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZm91bmRlZCkge1xuICAgICAgICAgIGNvbnN0IGN1cnJlbnRDbGFzc2VzID0gaXRlbS5jbGFzc2VzLnNwbGl0KCcgJyk7XG4gICAgICAgICAgaWYgKGN1cnJlbnRDbGFzc2VzLmluZGV4T2YoJ2lzLWFjdGl2ZScpID09PSAtMSkge1xuICAgICAgICAgICAgY3VycmVudENsYXNzZXMucHVzaCgnaXMtYWN0aXZlJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGl0ZW0uY2xhc3NlcyA9IGN1cnJlbnRDbGFzc2VzLmpvaW4oJyAnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGl0ZW0uaXRlbXMpICYmIGl0ZW0uaXRlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgY29udHJvbChpdGVtLml0ZW1zKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcbiAgICBjb250cm9sKHRoaXMub3V0cHV0Lml0ZW1zKTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldENhY2hlZERhdGEgPSAoKSA9PiBBd1RyZWVEUy5kYXRhQ2FjaGVbdGhpcy5yb290SWRdXG5cbiAgcHJpdmF0ZSBfbm9ybWFsaXplID0gKHtcbiAgICBpZCwgbGFiZWwsIGljb24sIGJyYW5jaGVzLCBkb2N1bWVudF90eXBlOiB0eXBlLCBkb2N1bWVudF9jbGFzc2lmaWNhdGlvbjogY2xhc3NpZmljYXRpb25cbiAgfSkgPT4ge1xuICAgIGNvbnN0IGhhc0JyYW5jaGVzID0gISEoQXJyYXkuaXNBcnJheShicmFuY2hlcykgJiYgYnJhbmNoZXMubGVuZ3RoKTtcbiAgICB0aGlzLl9nZXRDYWNoZWREYXRhKCkuZmxhdERhdGFbaWRdID0ge1xuICAgICAgaWQsIGxhYmVsLCBpY29uLCBoYXNCcmFuY2hlcywgdHlwZSwgY2xhc3NpZmljYXRpb25cbiAgICB9O1xuICAgIGlmIChoYXNCcmFuY2hlcykge1xuICAgICAgYnJhbmNoZXMuZm9yRWFjaCgoZGF0YSkgPT4ge1xuICAgICAgICB0aGlzLl9nZXRDYWNoZWREYXRhKCkuZmxhdElkcy5wdXNoKFtpZCwgZGF0YS5pZF0pO1xuICAgICAgICB0aGlzLl9ub3JtYWxpemUoZGF0YSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9nZXRQYXJlbnQgPSAoaWQpID0+IHRoaXMuX2dldENhY2hlZERhdGEoKS5mbGF0SWRzXG4gICAgLmZpbHRlcigoWywgY2hpbGRJZF0pID0+IGNoaWxkSWQgPT09IGlkKVxuICAgIC5tYXAoKFtwYXJlbnRJZF0pID0+IHBhcmVudElkKVswXSB8fCBudWxsXG5cbiAgcHJpdmF0ZSBfZ2V0VHJlZVBhdGggPSAoaWQpID0+IHtcbiAgICBjb25zdCBpZHMgPSBbaWRdO1xuICAgIGxldCBjdXJyZW50SWQgPSBpZDtcbiAgICB3aGlsZSAoY3VycmVudElkKSB7XG4gICAgICBjb25zdCBwYXJlbnRJZCA9IHRoaXMuX2dldFBhcmVudChjdXJyZW50SWQpO1xuICAgICAgaWYgKHBhcmVudElkKSB7XG4gICAgICAgIGlkcy5wdXNoKHBhcmVudElkKTtcbiAgICAgIH1cbiAgICAgIGN1cnJlbnRJZCA9IHBhcmVudElkO1xuICAgIH1cbiAgICByZXR1cm4gaWRzLnJldmVyc2UoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldFRyZWUgPSAocGF0aCkgPT4ge1xuICAgIGNvbnN0IHRyZWUgPSB7fTtcbiAgICBsZXQgY291bnRlciA9IDA7XG5cbiAgICBjb25zdCBsb2FkSXRlbXMgPSAoaWQsIHNvdXJjZSkgPT4ge1xuICAgICAgY291bnRlciArPSAxO1xuICAgICAgY29uc3QgbmV4dFBhcmVudCA9IHBhdGhbY291bnRlcl07XG4gICAgICBzb3VyY2UuaXRlbXMgPSBbXTtcblxuICAgICAgdGhpcy5fZ2V0Q2FjaGVkRGF0YSgpLmZsYXRJZHNcbiAgICAgICAgLmZpbHRlcigoW3BhcmVudElkXSkgPT4gcGFyZW50SWQgPT09IGlkKVxuICAgICAgICAuZm9yRWFjaCgoWywgY2hpbGRJZF0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgY29uc3QgaW5QYXRoID0gY2hpbGRJZCA9PT0gbmV4dFBhcmVudDtcbiAgICAgICAgICBjb25zdCBpdGVtID0gdGhpcy5fZ2V0VHJlZUl0ZW0oY2hpbGRJZCwgaW5QYXRoKTtcbiAgICAgICAgICBzb3VyY2UuaXRlbXMucHVzaChpdGVtKTtcbiAgICAgICAgICBpZiAoaW5QYXRoKSB7XG4gICAgICAgICAgICBsb2FkSXRlbXMoY2hpbGRJZCwgc291cmNlLml0ZW1zW2luZGV4XSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgLy8gaW5pdFxuICAgIGxvYWRJdGVtcyhwYXRoWzBdLCB0cmVlKTtcbiAgICByZXR1cm4gdHJlZTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldFRyZWVJdGVtID0gKGlkLCBpblBhdGgpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBsYWJlbCwgaW1nLCBoYXNCcmFuY2hlcywgdHlwZSwgY2xhc3NpZmljYXRpb25cbiAgICB9ID0gdGhpcy5fZ2V0Q2FjaGVkRGF0YSgpLmZsYXREYXRhW2lkXTtcbiAgICBjb25zdCBkZWZhdWx0SWNvbiA9ICh0aGlzLm9wdGlvbnMuY29uZmlnW3R5cGVdIHx8IHsgaWNvbjogbnVsbCB9KS5pY29uO1xuICAgIGxldCBzcGVjaWZpY0ljb24gPSAnJztcbiAgICBpZiAoY2xhc3NpZmljYXRpb24pIHtcbiAgICAgIGNvbnN0IGNsYXNzSUQgPSBjbGFzc2lmaWNhdGlvbi5tYXRjaCgvLipcXC4oXFx3KykkLylbMV0udG9VcHBlckNhc2UoKTsgLy8gZ2V0IGNsYXNzaWZpY2F0aW9uIGNoYXJhY3RlcnNcbiAgICAgIHNwZWNpZmljSWNvbiA9IHRoaXMub3B0aW9ucy5jb25maWdbdHlwZV0uY2xhc3NpZmljYXRpb25zW2NsYXNzSURdLmljb247XG4gICAgfVxuICAgIGNvbnN0IGFycm93SWNvbnMgPSBpblBhdGggPyAnbjctaWNvbi1hbmdsZS1kb3duJyA6ICduNy1pY29uLWFuZ2xlLXJpZ2h0JztcbiAgICBjb25zdCBjbGFzc2VzID0gW107XG4gICAgaWYgKGluUGF0aCkge1xuICAgICAgY2xhc3Nlcy5wdXNoKCdpcy1leHBhbmRlZCcpO1xuICAgIH1cbiAgICBpZiAodGhpcy5hY3RpdmVJZCA9PT0gaWQpIHtcbiAgICAgIGNsYXNzZXMucHVzaCgnaXMtYWN0aXZlJyk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBjbGFzc2VzOiBjbGFzc2VzLmpvaW4oJyAnKSxcbiAgICAgIHRleHQ6IGxhYmVsIHx8IG51bGwsXG4gICAgICBpbWc6IGltZyB8fCBudWxsLFxuICAgICAgaWNvbjogKHNwZWNpZmljSWNvbiB8fCBkZWZhdWx0SWNvbiksXG4gICAgICB0b2dnbGU6IGhhc0JyYW5jaGVzID8ge1xuICAgICAgICBpY29uOiBhcnJvd0ljb25zLFxuICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgc291cmNlOiAndG9nZ2xlJyxcbiAgICAgICAgICBpZCxcbiAgICAgICAgfSxcbiAgICAgIH0gOiBudWxsLFxuICAgICAgbWV0YTogaWQsXG4gICAgICBhbmNob3I6IHtcbiAgICAgICAgaHJlZjogYCR7dGhpcy5iYXNlUGF0aH0vJHtpZH0vJHtoZWxwZXJzLnNsdWdpZnkobGFiZWwpfWAsXG4gICAgICB9LFxuICAgIH07XG4gIH1cbn1cbiJdfQ==