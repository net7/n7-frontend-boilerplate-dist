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
            var id = _a.id, label = _a.label, icon = _a.icon, img = _a.img, branches = _a.branches;
            /** @type {?} */
            var hasBranches = !!(Array.isArray(branches) && branches.length);
            _this._getCachedData().flatData[id] = {
                id: id, label: label, icon: icon, img: img, hasBranches: hasBranches,
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
            var _a = _this._getCachedData().flatData[id], label = _a.label, icon = _a.icon, img = _a.img, hasBranches = _a.hasBranches;
            /** @type {?} */
            var defaultIcon = inPath ? 'n7-icon-angle-down' : 'n7-icon-angle-right';
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
                icon: icon || null,
                toggle: hasBranches ? {
                    icon: icon || defaultIcon,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvdHJlZS5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNoRSxPQUFPLE9BQU8sTUFBTSxzQkFBc0IsQ0FBQztBQUUzQztJQUE4QixvQ0FBVTtJQUF4QztRQUFBLHFFQXVLQztRQTVKVyxlQUFTOzs7O1FBQUcsVUFBQyxJQUFJLElBQUssT0FBQSxJQUFJLEVBQUosQ0FBSSxFQUFDO1FBa0U3QixvQkFBYzs7O1FBQUcsY0FBTSxPQUFBLFFBQVEsQ0FBQyxTQUFTLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxFQUEvQixDQUErQixFQUFBO1FBRXRELGdCQUFVOzs7O1FBQUcsVUFBQyxFQUVyQjtnQkFEQyxVQUFFLEVBQUUsZ0JBQUssRUFBRSxjQUFJLEVBQUUsWUFBRyxFQUFFLHNCQUFROztnQkFFeEIsV0FBVyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUNsRSxLQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxHQUFHO2dCQUNuQyxFQUFFLElBQUEsRUFBRSxLQUFLLE9BQUEsRUFBRSxJQUFJLE1BQUEsRUFBRSxHQUFHLEtBQUEsRUFBRSxXQUFXLGFBQUE7YUFDbEMsQ0FBQztZQUNGLElBQUksV0FBVyxFQUFFO2dCQUNmLFFBQVEsQ0FBQyxPQUFPOzs7O2dCQUFDLFVBQUMsSUFBSTtvQkFDcEIsS0FBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQ2xELEtB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QyxrQ0FBOEQ7Ozs7O0lBRTlELDhCQWFDOzs7OztJQUVELDhCQUUyQzs7Ozs7SUFFM0MsZ0NBV0M7Ozs7O0lBRUQsNEJBd0JDOzs7OztJQUVELGdDQTZCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZS9kaXN0L2RhdGEtc291cmNlJztcbmltcG9ydCBoZWxwZXJzIGZyb20gJy4uLy4uL2NvbW1vbi9oZWxwZXJzJztcblxuZXhwb3J0IGNsYXNzIEF3VHJlZURTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG4gIHN0YXRpYyBkYXRhQ2FjaGU6IGFueSA9IHt9O1xuXG4gIHByaXZhdGUgYmFzZVBhdGg6IHN0cmluZztcblxuICBwcml2YXRlIHJvb3RJZDogc3RyaW5nO1xuXG4gIHByaXZhdGUgY3VycmVudElkOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBhY3RpdmVJZDogc3RyaW5nO1xuXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0gPSAoZGF0YSkgPT4gZGF0YTtcblxuICBwdWJsaWMgbG9hZChkYXRhKSB7XG4gICAgY29uc3QgeyB0cmVlLCBiYXNlUGF0aCB9ID0gZGF0YTtcbiAgICB0aGlzLnJvb3RJZCA9IHRyZWUuaWQ7XG4gICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoO1xuICAgIC8vIHNhdmUgaW4gY2FjaGVcbiAgICBpZiAoIUF3VHJlZURTLmRhdGFDYWNoZVt0aGlzLnJvb3RJZF0pIHtcbiAgICAgIEF3VHJlZURTLmRhdGFDYWNoZVt0aGlzLnJvb3RJZF0gPSB7IGZsYXRJZHM6IFtdLCBmbGF0RGF0YToge30gfTtcbiAgICAgIHRoaXMuX25vcm1hbGl6ZSh0cmVlKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgYnVpbGQoaWQpIHtcbiAgICBjb25zdCBwYXRoID0gdGhpcy5fZ2V0VHJlZVBhdGgoaWQpO1xuICAgIGNvbnN0IG9sZFBhdGggPSB0aGlzLl9nZXRUcmVlUGF0aCh0aGlzLmN1cnJlbnRJZCk7XG4gICAgY29uc3Qgb2xkUGF0aEluZGV4ID0gb2xkUGF0aC5pbmRleE9mKGlkKTtcblxuICAgIGlmIChvbGRQYXRoSW5kZXggPiAwKSB7XG4gICAgICBwYXRoLnNwbGljZShvbGRQYXRoSW5kZXgpO1xuICAgICAgdGhpcy5jdXJyZW50SWQgPSBudWxsO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jdXJyZW50SWQgPT09IGlkKSB7XG4gICAgICBjb25zdCBpZEluZGV4ID0gcGF0aC5pbmRleE9mKHRoaXMuY3VycmVudElkKTtcbiAgICAgIHBhdGguc3BsaWNlKGlkSW5kZXgpO1xuICAgICAgdGhpcy5jdXJyZW50SWQgPSBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmN1cnJlbnRJZCA9IGlkO1xuICAgIH1cblxuICAgIGNvbnN0IHRyZWU6IGFueSA9IHRoaXMuX2dldFRyZWUocGF0aCk7XG4gICAgdGhpcy51cGRhdGUodHJlZSk7XG4gIH1cblxuICBwdWJsaWMgc2V0QWN0aXZlKGlkKSB7XG4gICAgdGhpcy5hY3RpdmVJZCA9IGlkO1xuICB9XG5cbiAgcHVibGljIGhpZ2hsaWdodEFjdGl2ZSgpIHtcbiAgICBjb25zdCBjb250cm9sID0gKGl0ZW1zKSA9PiB7XG4gICAgICBpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IGZvdW5kZWQgPSBpdGVtLm1ldGEgPT09IHRoaXMuYWN0aXZlSWQ7XG4gICAgICAgIGNvbnN0IGhhc0FjdGl2ZSA9IGl0ZW0uY2xhc3Nlcy5pbmRleE9mKCdpcy1hY3RpdmUnKSAhPT0gLTE7XG5cbiAgICAgICAgLy8gY2xlYXIgaXMtYWN0aXZlXG4gICAgICAgIGlmIChoYXNBY3RpdmUgJiYgIWZvdW5kZWQpIHtcbiAgICAgICAgICBjb25zdCBjdXJyZW50Q2xhc3NlcyA9IGl0ZW0uY2xhc3Nlcy5zcGxpdCgnICcpO1xuICAgICAgICAgIGN1cnJlbnRDbGFzc2VzLnNwbGljZShjdXJyZW50Q2xhc3Nlcy5pbmRleE9mKCdpcy1hY3RpdmUnKSwgMSk7XG4gICAgICAgICAgaXRlbS5jbGFzc2VzID0gY3VycmVudENsYXNzZXMuam9pbignICcpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZvdW5kZWQpIHtcbiAgICAgICAgICBjb25zdCBjdXJyZW50Q2xhc3NlcyA9IGl0ZW0uY2xhc3Nlcy5zcGxpdCgnICcpO1xuICAgICAgICAgIGlmIChjdXJyZW50Q2xhc3Nlcy5pbmRleE9mKCdpcy1hY3RpdmUnKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIGN1cnJlbnRDbGFzc2VzLnB1c2goJ2lzLWFjdGl2ZScpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpdGVtLmNsYXNzZXMgPSBjdXJyZW50Q2xhc3Nlcy5qb2luKCcgJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShpdGVtLml0ZW1zKSAmJiBpdGVtLml0ZW1zLmxlbmd0aCkge1xuICAgICAgICAgIGNvbnRyb2woaXRlbS5pdGVtcyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG4gICAgY29udHJvbCh0aGlzLm91dHB1dC5pdGVtcyk7XG4gIH1cblxuICBwcml2YXRlIF9nZXRDYWNoZWREYXRhID0gKCkgPT4gQXdUcmVlRFMuZGF0YUNhY2hlW3RoaXMucm9vdElkXVxuXG4gIHByaXZhdGUgX25vcm1hbGl6ZSA9ICh7XG4gICAgaWQsIGxhYmVsLCBpY29uLCBpbWcsIGJyYW5jaGVzLFxuICB9KSA9PiB7XG4gICAgY29uc3QgaGFzQnJhbmNoZXMgPSAhIShBcnJheS5pc0FycmF5KGJyYW5jaGVzKSAmJiBicmFuY2hlcy5sZW5ndGgpO1xuICAgIHRoaXMuX2dldENhY2hlZERhdGEoKS5mbGF0RGF0YVtpZF0gPSB7XG4gICAgICBpZCwgbGFiZWwsIGljb24sIGltZywgaGFzQnJhbmNoZXMsXG4gICAgfTtcbiAgICBpZiAoaGFzQnJhbmNoZXMpIHtcbiAgICAgIGJyYW5jaGVzLmZvckVhY2goKGRhdGEpID0+IHtcbiAgICAgICAgdGhpcy5fZ2V0Q2FjaGVkRGF0YSgpLmZsYXRJZHMucHVzaChbaWQsIGRhdGEuaWRdKTtcbiAgICAgICAgdGhpcy5fbm9ybWFsaXplKGRhdGEpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0UGFyZW50ID0gKGlkKSA9PiB0aGlzLl9nZXRDYWNoZWREYXRhKCkuZmxhdElkc1xuICAgIC5maWx0ZXIoKFssIGNoaWxkSWRdKSA9PiBjaGlsZElkID09PSBpZClcbiAgICAubWFwKChbcGFyZW50SWRdKSA9PiBwYXJlbnRJZClbMF0gfHwgbnVsbFxuXG4gIHByaXZhdGUgX2dldFRyZWVQYXRoID0gKGlkKSA9PiB7XG4gICAgY29uc3QgaWRzID0gW2lkXTtcbiAgICBsZXQgY3VycmVudElkID0gaWQ7XG4gICAgd2hpbGUgKGN1cnJlbnRJZCkge1xuICAgICAgY29uc3QgcGFyZW50SWQgPSB0aGlzLl9nZXRQYXJlbnQoY3VycmVudElkKTtcbiAgICAgIGlmIChwYXJlbnRJZCkge1xuICAgICAgICBpZHMucHVzaChwYXJlbnRJZCk7XG4gICAgICB9XG4gICAgICBjdXJyZW50SWQgPSBwYXJlbnRJZDtcbiAgICB9XG4gICAgcmV0dXJuIGlkcy5yZXZlcnNlKCk7XG4gIH1cblxuICBwcml2YXRlIF9nZXRUcmVlID0gKHBhdGgpID0+IHtcbiAgICBjb25zdCB0cmVlID0ge307XG4gICAgbGV0IGNvdW50ZXIgPSAwO1xuXG4gICAgY29uc3QgbG9hZEl0ZW1zID0gKGlkLCBzb3VyY2UpID0+IHtcbiAgICAgIGNvdW50ZXIgKz0gMTtcbiAgICAgIGNvbnN0IG5leHRQYXJlbnQgPSBwYXRoW2NvdW50ZXJdO1xuICAgICAgc291cmNlLml0ZW1zID0gW107XG5cbiAgICAgIHRoaXMuX2dldENhY2hlZERhdGEoKS5mbGF0SWRzXG4gICAgICAgIC5maWx0ZXIoKFtwYXJlbnRJZF0pID0+IHBhcmVudElkID09PSBpZClcbiAgICAgICAgLmZvckVhY2goKFssIGNoaWxkSWRdLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGluUGF0aCA9IGNoaWxkSWQgPT09IG5leHRQYXJlbnQ7XG4gICAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMuX2dldFRyZWVJdGVtKGNoaWxkSWQsIGluUGF0aCk7XG4gICAgICAgICAgc291cmNlLml0ZW1zLnB1c2goaXRlbSk7XG4gICAgICAgICAgaWYgKGluUGF0aCkge1xuICAgICAgICAgICAgbG9hZEl0ZW1zKGNoaWxkSWQsIHNvdXJjZS5pdGVtc1tpbmRleF0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8vIGluaXRcbiAgICBsb2FkSXRlbXMocGF0aFswXSwgdHJlZSk7XG4gICAgcmV0dXJuIHRyZWU7XG4gIH1cblxuICBwcml2YXRlIF9nZXRUcmVlSXRlbSA9IChpZCwgaW5QYXRoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgbGFiZWwsIGljb24sIGltZywgaGFzQnJhbmNoZXMsXG4gICAgfSA9IHRoaXMuX2dldENhY2hlZERhdGEoKS5mbGF0RGF0YVtpZF07XG4gICAgY29uc3QgZGVmYXVsdEljb24gPSBpblBhdGggPyAnbjctaWNvbi1hbmdsZS1kb3duJyA6ICduNy1pY29uLWFuZ2xlLXJpZ2h0JztcbiAgICBjb25zdCBjbGFzc2VzID0gW107XG4gICAgaWYgKGluUGF0aCkge1xuICAgICAgY2xhc3Nlcy5wdXNoKCdpcy1leHBhbmRlZCcpO1xuICAgIH1cbiAgICBpZiAodGhpcy5hY3RpdmVJZCA9PT0gaWQpIHtcbiAgICAgIGNsYXNzZXMucHVzaCgnaXMtYWN0aXZlJyk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBjbGFzc2VzOiBjbGFzc2VzLmpvaW4oJyAnKSxcbiAgICAgIHRleHQ6IGxhYmVsIHx8IG51bGwsXG4gICAgICBpbWc6IGltZyB8fCBudWxsLFxuICAgICAgaWNvbjogaWNvbiB8fCBudWxsLFxuICAgICAgdG9nZ2xlOiBoYXNCcmFuY2hlcyA/IHtcbiAgICAgICAgaWNvbjogaWNvbiB8fCBkZWZhdWx0SWNvbixcbiAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgIHNvdXJjZTogJ3RvZ2dsZScsXG4gICAgICAgICAgaWQsXG4gICAgICAgIH0sXG4gICAgICB9IDogbnVsbCxcbiAgICAgIG1ldGE6IGlkLFxuICAgICAgYW5jaG9yOiB7XG4gICAgICAgIGhyZWY6IGAke3RoaXMuYmFzZVBhdGh9LyR7aWR9LyR7aGVscGVycy5zbHVnaWZ5KGxhYmVsKX1gLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG59XG4iXX0=