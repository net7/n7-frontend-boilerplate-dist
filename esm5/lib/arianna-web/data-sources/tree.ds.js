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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvdHJlZS5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUUvQztJQUE4QixvQ0FBVTtJQUF4QztRQUFBLHFFQXFLQztRQXpGUyxvQkFBYzs7O1FBQUc7WUFDdkIsT0FBTyxRQUFRLENBQUMsU0FBUyxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN6QyxDQUFDLEVBQUE7UUFFTyxnQkFBVTs7OztRQUFHLFVBQUMsRUFBa0M7Z0JBQWhDLFVBQUUsRUFBRSxnQkFBSyxFQUFFLGNBQUksRUFBRSxZQUFHLEVBQUUsc0JBQVE7O2dCQUM5QyxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDO1lBQ2xFLEtBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLElBQUEsRUFBRSxLQUFLLE9BQUEsRUFBRSxJQUFJLE1BQUEsRUFBRSxHQUFHLEtBQUEsRUFBRSxXQUFXLGFBQUEsRUFBRSxDQUFDO1lBQzNFLElBQUksV0FBVyxFQUFFO2dCQUNmLFFBQVEsQ0FBQyxPQUFPOzs7O2dCQUFDLFVBQUEsSUFBSTtvQkFDbkIsS0FBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQ2xELEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3hCLENBQUMsRUFBQyxDQUFDO2FBQ0o7UUFDSCxDQUFDLEVBQUE7UUFFTyxnQkFBVTs7OztR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b3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgQXdUcmVlRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgc3RhdGljIGRhdGFDYWNoZTogYW55ID0ge307XG4gIHByaXZhdGUgcm9vdElkOiBzdHJpbmc7XG4gIHByaXZhdGUgY3VycmVudElkOiBzdHJpbmc7XG4gIHByaXZhdGUgYWN0aXZlSWQ6IHN0cmluZztcblxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKHRyZWUpIHtcbiAgICBpZiAoIXRyZWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmV0dXJuIHRyZWU7XG4gIH1cblxuICBwdWJsaWMgbG9hZChkYXRhKSB7XG4gICAgY29uc3QgeyB0cmVlIH0gPSBkYXRhO1xuICAgIHRoaXMucm9vdElkID0gdHJlZS5pZDtcbiAgICAvLyBzYXZlIGluIGNhY2hlXG4gICAgaWYgKCFBd1RyZWVEUy5kYXRhQ2FjaGVbdGhpcy5yb290SWRdKSB7XG4gICAgICBBd1RyZWVEUy5kYXRhQ2FjaGVbdGhpcy5yb290SWRdID0geyBmbGF0SWRzOiBbXSwgZmxhdERhdGE6IHt9IH07XG4gICAgICB0aGlzLl9ub3JtYWxpemUodHJlZSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGJ1aWxkKGlkKSB7XG4gICAgY29uc3QgcGF0aCA9IHRoaXMuX2dldFRyZWVQYXRoKGlkKSxcbiAgICAgIG9sZFBhdGggPSB0aGlzLl9nZXRUcmVlUGF0aCh0aGlzLmN1cnJlbnRJZCksXG4gICAgICBvbGRQYXRoSW5kZXggPSBvbGRQYXRoLmluZGV4T2YoaWQpO1xuXG4gICAgaWYgKG9sZFBhdGhJbmRleCA+IDApIHtcbiAgICAgIHBhdGguc3BsaWNlKG9sZFBhdGhJbmRleCk7XG4gICAgICB0aGlzLmN1cnJlbnRJZCA9IG51bGw7XG4gICAgfSBlbHNlIGlmICh0aGlzLmN1cnJlbnRJZCA9PT0gaWQpIHtcbiAgICAgIGNvbnN0IGlkSW5kZXggPSBwYXRoLmluZGV4T2YodGhpcy5jdXJyZW50SWQpO1xuICAgICAgcGF0aC5zcGxpY2UoaWRJbmRleCk7XG4gICAgICB0aGlzLmN1cnJlbnRJZCA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY3VycmVudElkID0gaWQ7XG4gICAgfVxuXG4gICAgY29uc3QgdHJlZTogYW55ID0gdGhpcy5fZ2V0VHJlZShwYXRoKTtcbiAgICB0aGlzLnVwZGF0ZSh0cmVlKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRBY3RpdmUoaWQpIHtcbiAgICB0aGlzLmFjdGl2ZUlkID0gaWQ7XG4gIH1cblxuICBwdWJsaWMgaGlnaGxpZ2h0QWN0aXZlKCkge1xuICAgIGNvbnN0IGNvbnRyb2wgPSAoaXRlbXMpID0+IHtcbiAgICAgIGl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGNvbnN0IGZvdW5kZWQgPSBpdGVtLm1ldGEgPT09IHRoaXMuYWN0aXZlSWQsXG4gICAgICAgICAgaGFzQWN0aXZlID0gaXRlbS5jbGFzc2VzLmluZGV4T2YoJ2lzLWFjdGl2ZScpICE9PSAtMTtcblxuICAgICAgICAvLyBjbGVhciBpcy1hY3RpdmVcbiAgICAgICAgaWYgKGhhc0FjdGl2ZSAmJiAhZm91bmRlZCkge1xuICAgICAgICAgIGNvbnN0IGN1cnJlbnRDbGFzc2VzID0gaXRlbS5jbGFzc2VzLnNwbGl0KCcgJyk7XG4gICAgICAgICAgY3VycmVudENsYXNzZXMuc3BsaWNlKGN1cnJlbnRDbGFzc2VzLmluZGV4T2YoJ2lzLWFjdGl2ZScpLCAxKTtcbiAgICAgICAgICBpdGVtLmNsYXNzZXMgPSBjdXJyZW50Q2xhc3Nlcy5qb2luKCcgJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZm91bmRlZCkge1xuICAgICAgICAgIGNvbnN0IGN1cnJlbnRDbGFzc2VzID0gaXRlbS5jbGFzc2VzLnNwbGl0KCcgJyk7XG4gICAgICAgICAgaWYgKGN1cnJlbnRDbGFzc2VzLmluZGV4T2YoJ2lzLWFjdGl2ZScpID09PSAtMSkge1xuICAgICAgICAgICAgY3VycmVudENsYXNzZXMucHVzaCgnaXMtYWN0aXZlJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGl0ZW0uY2xhc3NlcyA9IGN1cnJlbnRDbGFzc2VzLmpvaW4oJyAnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGl0ZW0uaXRlbXMpICYmIGl0ZW0uaXRlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgY29udHJvbChpdGVtLml0ZW1zKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcbiAgICBjb250cm9sKHRoaXMub3V0cHV0Lml0ZW1zKTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldENhY2hlZERhdGEgPSAoKSA9PiB7XG4gICAgcmV0dXJuIEF3VHJlZURTLmRhdGFDYWNoZVt0aGlzLnJvb3RJZF07XG4gIH1cblxuICBwcml2YXRlIF9ub3JtYWxpemUgPSAoeyBpZCwgbGFiZWwsIGljb24sIGltZywgYnJhbmNoZXMgfSkgPT4ge1xuICAgIGNvbnN0IGhhc0JyYW5jaGVzID0gISEoQXJyYXkuaXNBcnJheShicmFuY2hlcykgJiYgYnJhbmNoZXMubGVuZ3RoKTtcbiAgICB0aGlzLl9nZXRDYWNoZWREYXRhKCkuZmxhdERhdGFbaWRdID0geyBpZCwgbGFiZWwsIGljb24sIGltZywgaGFzQnJhbmNoZXMgfTtcbiAgICBpZiAoaGFzQnJhbmNoZXMpIHtcbiAgICAgIGJyYW5jaGVzLmZvckVhY2goZGF0YSA9PiB7XG4gICAgICAgIHRoaXMuX2dldENhY2hlZERhdGEoKS5mbGF0SWRzLnB1c2goW2lkLCBkYXRhLmlkXSk7XG4gICAgICAgIHRoaXMuX25vcm1hbGl6ZShkYXRhKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2dldFBhcmVudCA9IChpZCkgPT4ge1xuICAgIHJldHVybiB0aGlzLl9nZXRDYWNoZWREYXRhKCkuZmxhdElkc1xuICAgICAgLmZpbHRlcigoWywgY2hpbGRJZF0pID0+IGNoaWxkSWQgPT09IGlkKVxuICAgICAgLm1hcCgoW3BhcmVudElkXSkgPT4gcGFyZW50SWQpWzBdIHx8IG51bGw7XG4gIH1cblxuICBwcml2YXRlIF9nZXRUcmVlUGF0aCA9IChpZCkgPT4ge1xuICAgIGNvbnN0IGlkcyA9IFtpZF07XG4gICAgbGV0IGN1cnJlbnRJZCA9IGlkO1xuICAgIHdoaWxlIChjdXJyZW50SWQpIHtcbiAgICAgIGNvbnN0IHBhcmVudElkID0gdGhpcy5fZ2V0UGFyZW50KGN1cnJlbnRJZCk7XG4gICAgICBpZiAocGFyZW50SWQpIHtcbiAgICAgICAgaWRzLnB1c2gocGFyZW50SWQpO1xuICAgICAgfVxuICAgICAgY3VycmVudElkID0gcGFyZW50SWQ7XG4gICAgfVxuICAgIHJldHVybiBpZHMucmV2ZXJzZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0VHJlZSA9IChwYXRoKSA9PiB7XG4gICAgY29uc3QgdHJlZSA9IHt9O1xuICAgIGxldCBjb3VudGVyID0gMDtcblxuICAgIGNvbnN0IGxvYWRJdGVtcyA9IChpZCwgc291cmNlKSA9PiB7XG4gICAgICBjb3VudGVyICs9IDE7XG4gICAgICBjb25zdCBuZXh0UGFyZW50ID0gcGF0aFtjb3VudGVyXTtcbiAgICAgIHNvdXJjZS5pdGVtcyA9IFtdO1xuXG4gICAgICB0aGlzLl9nZXRDYWNoZWREYXRhKCkuZmxhdElkc1xuICAgICAgICAuZmlsdGVyKChbcGFyZW50SWRdKSA9PiBwYXJlbnRJZCA9PT0gaWQpXG4gICAgICAgIC5mb3JFYWNoKChbLCBjaGlsZElkXSwgaW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCBpblBhdGggPSBjaGlsZElkID09PSBuZXh0UGFyZW50O1xuICAgICAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLl9nZXRUcmVlSXRlbShjaGlsZElkLCBpblBhdGgpO1xuICAgICAgICAgIHNvdXJjZS5pdGVtcy5wdXNoKGl0ZW0pO1xuICAgICAgICAgIGlmIChpblBhdGgpIHtcbiAgICAgICAgICAgIGxvYWRJdGVtcyhjaGlsZElkLCBzb3VyY2UuaXRlbXNbaW5kZXhdKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvLyBpbml0XG4gICAgbG9hZEl0ZW1zKHBhdGhbMF0sIHRyZWUpO1xuICAgIHJldHVybiB0cmVlO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0VHJlZUl0ZW0gPSAoaWQsIGluUGF0aCkgPT4ge1xuICAgIGNvbnN0IHsgbGFiZWwsIGljb24sIGltZywgaGFzQnJhbmNoZXMgfSA9IHRoaXMuX2dldENhY2hlZERhdGEoKS5mbGF0RGF0YVtpZF07XG4gICAgY29uc3QgZGVmYXVsdEljb24gPSBpblBhdGggPyAnbjctaWNvbi1hbmdsZS1kb3duJyA6ICduNy1pY29uLWFuZ2xlLXJpZ2h0JztcbiAgICBjb25zdCBjbGFzc2VzID0gW107XG4gICAgaWYgKGluUGF0aCkge1xuICAgICAgY2xhc3Nlcy5wdXNoKCdpcy1leHBhbmRlZCcpO1xuICAgIH1cbiAgICBpZiAodGhpcy5hY3RpdmVJZCA9PT0gaWQpIHtcbiAgICAgIGNsYXNzZXMucHVzaCgnaXMtYWN0aXZlJyk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBjbGFzc2VzOiBjbGFzc2VzLmpvaW4oJyAnKSxcbiAgICAgIHRleHQ6IGxhYmVsIHx8IG51bGwsXG4gICAgICBpbWc6IGltZyB8fCBudWxsLFxuICAgICAgaWNvbjogaWNvbiB8fCBudWxsLFxuICAgICAgdG9nZ2xlOiBoYXNCcmFuY2hlcyA/IHtcbiAgICAgICAgaWNvbjogaWNvbiB8fCBkZWZhdWx0SWNvbixcbiAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgIHNvdXJjZTogJ3RvZ2dsZScsXG4gICAgICAgICAgaWQ6IGlkLFxuICAgICAgICB9XG4gICAgICB9IDogbnVsbCxcbiAgICAgIG1ldGE6IGlkLFxuICAgICAgcGF5bG9hZDoge1xuICAgICAgICBpZCxcbiAgICAgICAgc291cmNlOiAnbWVudWl0ZW0nLFxuICAgICAgfVxuICAgIH07XG4gIH1cbn1cbiJdfQ==