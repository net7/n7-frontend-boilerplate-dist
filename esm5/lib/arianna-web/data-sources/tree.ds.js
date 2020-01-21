/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DataSource } from '@n7-frontend/core';
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
                payload: {
                    id: id,
                    source: 'menuitem',
                    label: label
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
        var tree = data.tree;
        this.rootId = tree.id;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvdHJlZS5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUUvQztJQUE4QixvQ0FBVTtJQUF4QztRQUFBLHFFQXNLQztRQTFGUyxvQkFBYzs7O1FBQUc7WUFDdkIsT0FBTyxRQUFRLENBQUMsU0FBUyxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN6QyxDQUFDLEVBQUE7UUFFTyxnQkFBVTs7OztRQUFHLFVBQUMsRUFBa0M7Z0JBQWhDLFVBQUUsRUFBRSxnQkFBSyxFQUFFLGNBQUksRUFBRSxZQUFHLEVBQUUsc0JBQVE7O2dCQUM5QyxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDO1lBQ2xFLEtBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLElBQUEsRUFBRSxLQUFLLE9BQUEsRUFBRSxJQUFJLE1BQUEsRUFBRSxHQUFHLEtBQUEsRUFBRSxXQUFXLGFBQUEsRUFBRSxDQUFDO1lBQzNFLElBQUksV0FBVyxFQUFFO2dCQUNmLFFBQVEsQ0FBQyxPQUFPOzs7O2dCQUFDLFVBQUEsSUFBSTtvQkFDbkIsS0FBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQ2xELEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3hCLENBQUMsRUFBQyxDQUFDO2FBQ0o7UUFDSCxDQUFDLEVBQUE7UUFFTyxnQkFBVTs7OztR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O0lBRUQsZ0NBNkJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIEF3VHJlZURTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG4gIHN0YXRpYyBkYXRhQ2FjaGU6IGFueSA9IHt9O1xuICBwcml2YXRlIHJvb3RJZDogc3RyaW5nO1xuICBwcml2YXRlIGN1cnJlbnRJZDogc3RyaW5nO1xuICBwcml2YXRlIGFjdGl2ZUlkOiBzdHJpbmc7XG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybSh0cmVlKSB7XG4gICAgaWYgKCF0cmVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJldHVybiB0cmVlO1xuICB9XG5cbiAgcHVibGljIGxvYWQoZGF0YSkge1xuICAgIGNvbnN0IHsgdHJlZSB9ID0gZGF0YTtcbiAgICB0aGlzLnJvb3RJZCA9IHRyZWUuaWQ7XG4gICAgLy8gc2F2ZSBpbiBjYWNoZVxuICAgIGlmICghQXdUcmVlRFMuZGF0YUNhY2hlW3RoaXMucm9vdElkXSkge1xuICAgICAgQXdUcmVlRFMuZGF0YUNhY2hlW3RoaXMucm9vdElkXSA9IHsgZmxhdElkczogW10sIGZsYXREYXRhOiB7fSB9O1xuICAgICAgdGhpcy5fbm9ybWFsaXplKHRyZWUpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBidWlsZChpZCkge1xuICAgIGNvbnN0IHBhdGggPSB0aGlzLl9nZXRUcmVlUGF0aChpZCksXG4gICAgICBvbGRQYXRoID0gdGhpcy5fZ2V0VHJlZVBhdGgodGhpcy5jdXJyZW50SWQpLFxuICAgICAgb2xkUGF0aEluZGV4ID0gb2xkUGF0aC5pbmRleE9mKGlkKTtcblxuICAgIGlmIChvbGRQYXRoSW5kZXggPiAwKSB7XG4gICAgICBwYXRoLnNwbGljZShvbGRQYXRoSW5kZXgpO1xuICAgICAgdGhpcy5jdXJyZW50SWQgPSBudWxsO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jdXJyZW50SWQgPT09IGlkKSB7XG4gICAgICBjb25zdCBpZEluZGV4ID0gcGF0aC5pbmRleE9mKHRoaXMuY3VycmVudElkKTtcbiAgICAgIHBhdGguc3BsaWNlKGlkSW5kZXgpO1xuICAgICAgdGhpcy5jdXJyZW50SWQgPSBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmN1cnJlbnRJZCA9IGlkO1xuICAgIH1cblxuICAgIGNvbnN0IHRyZWU6IGFueSA9IHRoaXMuX2dldFRyZWUocGF0aCk7XG4gICAgdGhpcy51cGRhdGUodHJlZSk7XG4gIH1cblxuICBwdWJsaWMgc2V0QWN0aXZlKGlkKSB7XG4gICAgdGhpcy5hY3RpdmVJZCA9IGlkO1xuICB9XG5cbiAgcHVibGljIGhpZ2hsaWdodEFjdGl2ZSgpIHtcbiAgICBjb25zdCBjb250cm9sID0gKGl0ZW1zKSA9PiB7XG4gICAgICBpdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBjb25zdCBmb3VuZGVkID0gaXRlbS5tZXRhID09PSB0aGlzLmFjdGl2ZUlkLFxuICAgICAgICAgIGhhc0FjdGl2ZSA9IGl0ZW0uY2xhc3Nlcy5pbmRleE9mKCdpcy1hY3RpdmUnKSAhPT0gLTE7XG5cbiAgICAgICAgLy8gY2xlYXIgaXMtYWN0aXZlXG4gICAgICAgIGlmIChoYXNBY3RpdmUgJiYgIWZvdW5kZWQpIHtcbiAgICAgICAgICBjb25zdCBjdXJyZW50Q2xhc3NlcyA9IGl0ZW0uY2xhc3Nlcy5zcGxpdCgnICcpO1xuICAgICAgICAgIGN1cnJlbnRDbGFzc2VzLnNwbGljZShjdXJyZW50Q2xhc3Nlcy5pbmRleE9mKCdpcy1hY3RpdmUnKSwgMSk7XG4gICAgICAgICAgaXRlbS5jbGFzc2VzID0gY3VycmVudENsYXNzZXMuam9pbignICcpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZvdW5kZWQpIHtcbiAgICAgICAgICBjb25zdCBjdXJyZW50Q2xhc3NlcyA9IGl0ZW0uY2xhc3Nlcy5zcGxpdCgnICcpO1xuICAgICAgICAgIGlmIChjdXJyZW50Q2xhc3Nlcy5pbmRleE9mKCdpcy1hY3RpdmUnKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIGN1cnJlbnRDbGFzc2VzLnB1c2goJ2lzLWFjdGl2ZScpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpdGVtLmNsYXNzZXMgPSBjdXJyZW50Q2xhc3Nlcy5qb2luKCcgJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShpdGVtLml0ZW1zKSAmJiBpdGVtLml0ZW1zLmxlbmd0aCkge1xuICAgICAgICAgIGNvbnRyb2woaXRlbS5pdGVtcyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG4gICAgY29udHJvbCh0aGlzLm91dHB1dC5pdGVtcyk7XG4gIH1cblxuICBwcml2YXRlIF9nZXRDYWNoZWREYXRhID0gKCkgPT4ge1xuICAgIHJldHVybiBBd1RyZWVEUy5kYXRhQ2FjaGVbdGhpcy5yb290SWRdO1xuICB9XG5cbiAgcHJpdmF0ZSBfbm9ybWFsaXplID0gKHsgaWQsIGxhYmVsLCBpY29uLCBpbWcsIGJyYW5jaGVzIH0pID0+IHtcbiAgICBjb25zdCBoYXNCcmFuY2hlcyA9ICEhKEFycmF5LmlzQXJyYXkoYnJhbmNoZXMpICYmIGJyYW5jaGVzLmxlbmd0aCk7XG4gICAgdGhpcy5fZ2V0Q2FjaGVkRGF0YSgpLmZsYXREYXRhW2lkXSA9IHsgaWQsIGxhYmVsLCBpY29uLCBpbWcsIGhhc0JyYW5jaGVzIH07XG4gICAgaWYgKGhhc0JyYW5jaGVzKSB7XG4gICAgICBicmFuY2hlcy5mb3JFYWNoKGRhdGEgPT4ge1xuICAgICAgICB0aGlzLl9nZXRDYWNoZWREYXRhKCkuZmxhdElkcy5wdXNoKFtpZCwgZGF0YS5pZF0pO1xuICAgICAgICB0aGlzLl9ub3JtYWxpemUoZGF0YSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9nZXRQYXJlbnQgPSAoaWQpID0+IHtcbiAgICByZXR1cm4gdGhpcy5fZ2V0Q2FjaGVkRGF0YSgpLmZsYXRJZHNcbiAgICAgIC5maWx0ZXIoKFssIGNoaWxkSWRdKSA9PiBjaGlsZElkID09PSBpZClcbiAgICAgIC5tYXAoKFtwYXJlbnRJZF0pID0+IHBhcmVudElkKVswXSB8fCBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0VHJlZVBhdGggPSAoaWQpID0+IHtcbiAgICBjb25zdCBpZHMgPSBbaWRdO1xuICAgIGxldCBjdXJyZW50SWQgPSBpZDtcbiAgICB3aGlsZSAoY3VycmVudElkKSB7XG4gICAgICBjb25zdCBwYXJlbnRJZCA9IHRoaXMuX2dldFBhcmVudChjdXJyZW50SWQpO1xuICAgICAgaWYgKHBhcmVudElkKSB7XG4gICAgICAgIGlkcy5wdXNoKHBhcmVudElkKTtcbiAgICAgIH1cbiAgICAgIGN1cnJlbnRJZCA9IHBhcmVudElkO1xuICAgIH1cbiAgICByZXR1cm4gaWRzLnJldmVyc2UoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldFRyZWUgPSAocGF0aCkgPT4ge1xuICAgIGNvbnN0IHRyZWUgPSB7fTtcbiAgICBsZXQgY291bnRlciA9IDA7XG5cbiAgICBjb25zdCBsb2FkSXRlbXMgPSAoaWQsIHNvdXJjZSkgPT4ge1xuICAgICAgY291bnRlciArPSAxO1xuICAgICAgY29uc3QgbmV4dFBhcmVudCA9IHBhdGhbY291bnRlcl07XG4gICAgICBzb3VyY2UuaXRlbXMgPSBbXTtcblxuICAgICAgdGhpcy5fZ2V0Q2FjaGVkRGF0YSgpLmZsYXRJZHNcbiAgICAgICAgLmZpbHRlcigoW3BhcmVudElkXSkgPT4gcGFyZW50SWQgPT09IGlkKVxuICAgICAgICAuZm9yRWFjaCgoWywgY2hpbGRJZF0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgY29uc3QgaW5QYXRoID0gY2hpbGRJZCA9PT0gbmV4dFBhcmVudDtcbiAgICAgICAgICBjb25zdCBpdGVtID0gdGhpcy5fZ2V0VHJlZUl0ZW0oY2hpbGRJZCwgaW5QYXRoKTtcbiAgICAgICAgICBzb3VyY2UuaXRlbXMucHVzaChpdGVtKTtcbiAgICAgICAgICBpZiAoaW5QYXRoKSB7XG4gICAgICAgICAgICBsb2FkSXRlbXMoY2hpbGRJZCwgc291cmNlLml0ZW1zW2luZGV4XSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgLy8gaW5pdFxuICAgIGxvYWRJdGVtcyhwYXRoWzBdLCB0cmVlKTtcbiAgICByZXR1cm4gdHJlZTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldFRyZWVJdGVtID0gKGlkLCBpblBhdGgpID0+IHtcbiAgICBjb25zdCB7IGxhYmVsLCBpY29uLCBpbWcsIGhhc0JyYW5jaGVzIH0gPSB0aGlzLl9nZXRDYWNoZWREYXRhKCkuZmxhdERhdGFbaWRdO1xuICAgIGNvbnN0IGRlZmF1bHRJY29uID0gaW5QYXRoID8gJ243LWljb24tYW5nbGUtZG93bicgOiAnbjctaWNvbi1hbmdsZS1yaWdodCc7XG4gICAgY29uc3QgY2xhc3NlcyA9IFtdO1xuICAgIGlmIChpblBhdGgpIHtcbiAgICAgIGNsYXNzZXMucHVzaCgnaXMtZXhwYW5kZWQnKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuYWN0aXZlSWQgPT09IGlkKSB7XG4gICAgICBjbGFzc2VzLnB1c2goJ2lzLWFjdGl2ZScpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgY2xhc3NlczogY2xhc3Nlcy5qb2luKCcgJyksXG4gICAgICB0ZXh0OiBsYWJlbCB8fCBudWxsLFxuICAgICAgaW1nOiBpbWcgfHwgbnVsbCxcbiAgICAgIGljb246IGljb24gfHwgbnVsbCxcbiAgICAgIHRvZ2dsZTogaGFzQnJhbmNoZXMgPyB7XG4gICAgICAgIGljb246IGljb24gfHwgZGVmYXVsdEljb24sXG4gICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICBzb3VyY2U6ICd0b2dnbGUnLFxuICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgfVxuICAgICAgfSA6IG51bGwsXG4gICAgICBtZXRhOiBpZCxcbiAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgaWQsXG4gICAgICAgIHNvdXJjZTogJ21lbnVpdGVtJyxcbiAgICAgICAgbGFiZWxcbiAgICAgIH1cbiAgICB9O1xuICB9XG59XG4iXX0=