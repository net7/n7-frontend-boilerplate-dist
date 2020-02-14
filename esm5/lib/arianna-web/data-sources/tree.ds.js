/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/data-sources/tree.ds.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DataSource } from '@n7-frontend/core';
import helpers from '../../common/helpers';
var AwTreeDS = /** @class */ (function (_super) {
    tslib_1.__extends(AwTreeDS, _super);
    function AwTreeDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._getCachedData = (/**
         * @return {?}
         */
        function () {
            return AwTreeDS.dataCache[_this.rootId];
        });
        _this._normalize = (/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var id = _a.id, label = _a.label, icon = _a.icon, img = _a.img, branches = _a.branches;
            /** @type {?} */
            var hasBranches = !!(Array.isArray(branches) && branches.length);
            _this._getCachedData().flatData[id] = { id: id, label: label, icon: icon, img: img, hasBranches: hasBranches };
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
        function (id) {
            return _this._getCachedData().flatIds
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
            }))[0] || null;
        });
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
                    }
                } : null,
                meta: id,
                anchor: {
                    href: _this.basePath + "/" + id + "/" + helpers.slugify(label)
                }
            };
        });
        return _this;
    }
    /**
     * @protected
     * @param {?} tree
     * @return {?}
     */
    AwTreeDS.prototype.transform = /**
     * @protected
     * @param {?} tree
     * @return {?}
     */
    function (tree) {
        if (!tree) {
            return;
        }
        return tree;
    };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvdHJlZS5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDL0MsT0FBTyxPQUFPLE1BQU0sc0JBQXNCLENBQUM7QUFFM0M7SUFBOEIsb0NBQVU7SUFBeEM7UUFBQSxxRUFzS0M7UUF4RlMsb0JBQWM7OztRQUFHO1lBQ3ZCLE9BQU8sUUFBUSxDQUFDLFNBQVMsQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDekMsQ0FBQyxFQUFBO1FBRU8sZ0JBQVU7Ozs7UUFBRyxVQUFDLEVBQWtDO2dCQUFoQyxVQUFFLEVBQUUsZ0JBQUssRUFBRSxjQUFJLEVBQUUsWUFBRyxFQUFFLHNCQUFROztnQkFDOUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUNsRSxLQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxJQUFBLEVBQUUsS0FBSyxPQUFBLEVBQUUsSUFBSSxNQUFBLEVBQUUsR0FBRyxLQUFBLEVBQUUsV0FBVyxhQUFBLEVBQUUsQ0FBQztZQUMzRSxJQUFJLFdBQVcsRUFBRTtnQkFDZixRQUFRLENBQUMsT0FBTzs7OztnQkFBQyxVQUFBLElBQUk7b0JBQ25CLEtBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUNsRCxLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN4QixDQUFDLEVBQUMsQ0FBQzth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MEJBQXVCOzs7OztJQUN2Qiw2QkFBMEI7Ozs7O0lBQzFCLDRCQUF5Qjs7Ozs7SUF5RXpCLGtDQUVDOzs7OztJQUVELDhCQVNDOzs7OztJQUVELDhCQUlDOzs7OztJQUVELGdDQVdDOzs7OztJQUVELDRCQXdCQzs7Ozs7SUFFRCxnQ0EyQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5pbXBvcnQgaGVscGVycyBmcm9tICcuLi8uLi9jb21tb24vaGVscGVycyc7XHJcblxyXG5leHBvcnQgY2xhc3MgQXdUcmVlRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcclxuICBzdGF0aWMgZGF0YUNhY2hlOiBhbnkgPSB7fTtcclxuICBwcml2YXRlIGJhc2VQYXRoOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSByb290SWQ6IHN0cmluZztcclxuICBwcml2YXRlIGN1cnJlbnRJZDogc3RyaW5nO1xyXG4gIHByaXZhdGUgYWN0aXZlSWQ6IHN0cmluZztcclxuXHJcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybSh0cmVlKSB7XHJcbiAgICBpZiAoIXRyZWUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRyZWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbG9hZChkYXRhKSB7XHJcbiAgICBjb25zdCB7IHRyZWUsIGJhc2VQYXRoIH0gPSBkYXRhO1xyXG4gICAgdGhpcy5yb290SWQgPSB0cmVlLmlkO1xyXG4gICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoO1xyXG4gICAgLy8gc2F2ZSBpbiBjYWNoZVxyXG4gICAgaWYgKCFBd1RyZWVEUy5kYXRhQ2FjaGVbdGhpcy5yb290SWRdKSB7XHJcbiAgICAgIEF3VHJlZURTLmRhdGFDYWNoZVt0aGlzLnJvb3RJZF0gPSB7IGZsYXRJZHM6IFtdLCBmbGF0RGF0YToge30gfTtcclxuICAgICAgdGhpcy5fbm9ybWFsaXplKHRyZWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGJ1aWxkKGlkKSB7XHJcbiAgICBjb25zdCBwYXRoID0gdGhpcy5fZ2V0VHJlZVBhdGgoaWQpLFxyXG4gICAgICBvbGRQYXRoID0gdGhpcy5fZ2V0VHJlZVBhdGgodGhpcy5jdXJyZW50SWQpLFxyXG4gICAgICBvbGRQYXRoSW5kZXggPSBvbGRQYXRoLmluZGV4T2YoaWQpO1xyXG5cclxuICAgIGlmIChvbGRQYXRoSW5kZXggPiAwKSB7XHJcbiAgICAgIHBhdGguc3BsaWNlKG9sZFBhdGhJbmRleCk7XHJcbiAgICAgIHRoaXMuY3VycmVudElkID0gbnVsbDtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5jdXJyZW50SWQgPT09IGlkKSB7XHJcbiAgICAgIGNvbnN0IGlkSW5kZXggPSBwYXRoLmluZGV4T2YodGhpcy5jdXJyZW50SWQpO1xyXG4gICAgICBwYXRoLnNwbGljZShpZEluZGV4KTtcclxuICAgICAgdGhpcy5jdXJyZW50SWQgPSBudWxsO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5jdXJyZW50SWQgPSBpZDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0cmVlOiBhbnkgPSB0aGlzLl9nZXRUcmVlKHBhdGgpO1xyXG4gICAgdGhpcy51cGRhdGUodHJlZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0QWN0aXZlKGlkKSB7XHJcbiAgICB0aGlzLmFjdGl2ZUlkID0gaWQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaGlnaGxpZ2h0QWN0aXZlKCkge1xyXG4gICAgY29uc3QgY29udHJvbCA9IChpdGVtcykgPT4ge1xyXG4gICAgICBpdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIGNvbnN0IGZvdW5kZWQgPSBpdGVtLm1ldGEgPT09IHRoaXMuYWN0aXZlSWQsXHJcbiAgICAgICAgICBoYXNBY3RpdmUgPSBpdGVtLmNsYXNzZXMuaW5kZXhPZignaXMtYWN0aXZlJykgIT09IC0xO1xyXG5cclxuICAgICAgICAvLyBjbGVhciBpcy1hY3RpdmVcclxuICAgICAgICBpZiAoaGFzQWN0aXZlICYmICFmb3VuZGVkKSB7XHJcbiAgICAgICAgICBjb25zdCBjdXJyZW50Q2xhc3NlcyA9IGl0ZW0uY2xhc3Nlcy5zcGxpdCgnICcpO1xyXG4gICAgICAgICAgY3VycmVudENsYXNzZXMuc3BsaWNlKGN1cnJlbnRDbGFzc2VzLmluZGV4T2YoJ2lzLWFjdGl2ZScpLCAxKTtcclxuICAgICAgICAgIGl0ZW0uY2xhc3NlcyA9IGN1cnJlbnRDbGFzc2VzLmpvaW4oJyAnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChmb3VuZGVkKSB7XHJcbiAgICAgICAgICBjb25zdCBjdXJyZW50Q2xhc3NlcyA9IGl0ZW0uY2xhc3Nlcy5zcGxpdCgnICcpO1xyXG4gICAgICAgICAgaWYgKGN1cnJlbnRDbGFzc2VzLmluZGV4T2YoJ2lzLWFjdGl2ZScpID09PSAtMSkge1xyXG4gICAgICAgICAgICBjdXJyZW50Q2xhc3Nlcy5wdXNoKCdpcy1hY3RpdmUnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGl0ZW0uY2xhc3NlcyA9IGN1cnJlbnRDbGFzc2VzLmpvaW4oJyAnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGl0ZW0uaXRlbXMpICYmIGl0ZW0uaXRlbXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICBjb250cm9sKGl0ZW0uaXRlbXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgY29udHJvbCh0aGlzLm91dHB1dC5pdGVtcyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9nZXRDYWNoZWREYXRhID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIEF3VHJlZURTLmRhdGFDYWNoZVt0aGlzLnJvb3RJZF07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9ub3JtYWxpemUgPSAoeyBpZCwgbGFiZWwsIGljb24sIGltZywgYnJhbmNoZXMgfSkgPT4ge1xyXG4gICAgY29uc3QgaGFzQnJhbmNoZXMgPSAhIShBcnJheS5pc0FycmF5KGJyYW5jaGVzKSAmJiBicmFuY2hlcy5sZW5ndGgpO1xyXG4gICAgdGhpcy5fZ2V0Q2FjaGVkRGF0YSgpLmZsYXREYXRhW2lkXSA9IHsgaWQsIGxhYmVsLCBpY29uLCBpbWcsIGhhc0JyYW5jaGVzIH07XHJcbiAgICBpZiAoaGFzQnJhbmNoZXMpIHtcclxuICAgICAgYnJhbmNoZXMuZm9yRWFjaChkYXRhID0+IHtcclxuICAgICAgICB0aGlzLl9nZXRDYWNoZWREYXRhKCkuZmxhdElkcy5wdXNoKFtpZCwgZGF0YS5pZF0pO1xyXG4gICAgICAgIHRoaXMuX25vcm1hbGl6ZShkYXRhKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9nZXRQYXJlbnQgPSAoaWQpID0+IHtcclxuICAgIHJldHVybiB0aGlzLl9nZXRDYWNoZWREYXRhKCkuZmxhdElkc1xyXG4gICAgICAuZmlsdGVyKChbLCBjaGlsZElkXSkgPT4gY2hpbGRJZCA9PT0gaWQpXHJcbiAgICAgIC5tYXAoKFtwYXJlbnRJZF0pID0+IHBhcmVudElkKVswXSB8fCBudWxsO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfZ2V0VHJlZVBhdGggPSAoaWQpID0+IHtcclxuICAgIGNvbnN0IGlkcyA9IFtpZF07XHJcbiAgICBsZXQgY3VycmVudElkID0gaWQ7XHJcbiAgICB3aGlsZSAoY3VycmVudElkKSB7XHJcbiAgICAgIGNvbnN0IHBhcmVudElkID0gdGhpcy5fZ2V0UGFyZW50KGN1cnJlbnRJZCk7XHJcbiAgICAgIGlmIChwYXJlbnRJZCkge1xyXG4gICAgICAgIGlkcy5wdXNoKHBhcmVudElkKTtcclxuICAgICAgfVxyXG4gICAgICBjdXJyZW50SWQgPSBwYXJlbnRJZDtcclxuICAgIH1cclxuICAgIHJldHVybiBpZHMucmV2ZXJzZSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfZ2V0VHJlZSA9IChwYXRoKSA9PiB7XHJcbiAgICBjb25zdCB0cmVlID0ge307XHJcbiAgICBsZXQgY291bnRlciA9IDA7XHJcblxyXG4gICAgY29uc3QgbG9hZEl0ZW1zID0gKGlkLCBzb3VyY2UpID0+IHtcclxuICAgICAgY291bnRlciArPSAxO1xyXG4gICAgICBjb25zdCBuZXh0UGFyZW50ID0gcGF0aFtjb3VudGVyXTtcclxuICAgICAgc291cmNlLml0ZW1zID0gW107XHJcblxyXG4gICAgICB0aGlzLl9nZXRDYWNoZWREYXRhKCkuZmxhdElkc1xyXG4gICAgICAgIC5maWx0ZXIoKFtwYXJlbnRJZF0pID0+IHBhcmVudElkID09PSBpZClcclxuICAgICAgICAuZm9yRWFjaCgoWywgY2hpbGRJZF0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBpblBhdGggPSBjaGlsZElkID09PSBuZXh0UGFyZW50O1xyXG4gICAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMuX2dldFRyZWVJdGVtKGNoaWxkSWQsIGluUGF0aCk7XHJcbiAgICAgICAgICBzb3VyY2UuaXRlbXMucHVzaChpdGVtKTtcclxuICAgICAgICAgIGlmIChpblBhdGgpIHtcclxuICAgICAgICAgICAgbG9hZEl0ZW1zKGNoaWxkSWQsIHNvdXJjZS5pdGVtc1tpbmRleF0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBpbml0XHJcbiAgICBsb2FkSXRlbXMocGF0aFswXSwgdHJlZSk7XHJcbiAgICByZXR1cm4gdHJlZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2dldFRyZWVJdGVtID0gKGlkLCBpblBhdGgpID0+IHtcclxuICAgIGNvbnN0IHsgbGFiZWwsIGljb24sIGltZywgaGFzQnJhbmNoZXMgfSA9IHRoaXMuX2dldENhY2hlZERhdGEoKS5mbGF0RGF0YVtpZF07XHJcbiAgICBjb25zdCBkZWZhdWx0SWNvbiA9IGluUGF0aCA/ICduNy1pY29uLWFuZ2xlLWRvd24nIDogJ243LWljb24tYW5nbGUtcmlnaHQnO1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IFtdO1xyXG4gICAgaWYgKGluUGF0aCkge1xyXG4gICAgICBjbGFzc2VzLnB1c2goJ2lzLWV4cGFuZGVkJyk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5hY3RpdmVJZCA9PT0gaWQpIHtcclxuICAgICAgY2xhc3Nlcy5wdXNoKCdpcy1hY3RpdmUnKTtcclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGNsYXNzZXM6IGNsYXNzZXMuam9pbignICcpLFxyXG4gICAgICB0ZXh0OiBsYWJlbCB8fCBudWxsLFxyXG4gICAgICBpbWc6IGltZyB8fCBudWxsLFxyXG4gICAgICBpY29uOiBpY29uIHx8IG51bGwsXHJcbiAgICAgIHRvZ2dsZTogaGFzQnJhbmNoZXMgPyB7XHJcbiAgICAgICAgaWNvbjogaWNvbiB8fCBkZWZhdWx0SWNvbixcclxuICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICBzb3VyY2U6ICd0b2dnbGUnLFxyXG4gICAgICAgICAgaWQ6IGlkLFxyXG4gICAgICAgIH1cclxuICAgICAgfSA6IG51bGwsXHJcbiAgICAgIG1ldGE6IGlkLFxyXG4gICAgICBhbmNob3I6IHtcclxuICAgICAgICBocmVmOiBgJHt0aGlzLmJhc2VQYXRofS8ke2lkfS8ke2hlbHBlcnMuc2x1Z2lmeShsYWJlbCl9YFxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=