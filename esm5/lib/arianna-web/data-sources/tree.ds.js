/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/data-sources/tree.ds.ts
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvdHJlZS5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDaEUsT0FBTyxPQUFPLE1BQU0sc0JBQXNCLENBQUM7QUFFM0M7SUFBOEIsb0NBQVU7SUFBeEM7UUFBQSxxRUF1S0M7UUE1SlcsZUFBUzs7OztRQUFHLFVBQUMsSUFBSSxJQUFLLE9BQUEsSUFBSSxFQUFKLENBQUksRUFBQztRQWtFN0Isb0JBQWM7OztRQUFHLGNBQU0sT0FBQSxRQUFRLENBQUMsU0FBUyxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsRUFBL0IsQ0FBK0IsRUFBQTtRQUV0RCxnQkFBVTs7OztRQUFHLFVBQUMsRUFFckI7Z0JBREMsVUFBRSxFQUFFLGdCQUFLLEVBQUUsY0FBSSxFQUFFLFlBQUcsRUFBRSxzQkFBUTs7Z0JBRXhCLFdBQVcsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFDbEUsS0FBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsR0FBRztnQkFDbkMsRUFBRSxJQUFBLEVBQUUsS0FBSyxPQUFBLEVBQUUsSUFBSSxNQUFBLEVBQUUsR0FBRyxLQUFBLEVBQUUsV0FBVyxhQUFBO2FBQ2xDLENBQUM7WUFDRixJQUFJLFdBQVcsRUFBRTtnQkFDZixRQUFRLENBQUMsT0FBTzs7OztnQkFBQyxVQUFDLElBQUk7b0JBQ3BCLEtBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUNsRCxL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ckMsa0NBQThEOzs7OztJQUU5RCw4QkFhQzs7Ozs7SUFFRCw4QkFFMkM7Ozs7O0lBRTNDLGdDQVdDOzs7OztJQUVELDRCQXdCQzs7Ozs7SUFFRCxnQ0E2QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUvZGlzdC9kYXRhLXNvdXJjZSc7XHJcbmltcG9ydCBoZWxwZXJzIGZyb20gJy4uLy4uL2NvbW1vbi9oZWxwZXJzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBBd1RyZWVEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xyXG4gIHN0YXRpYyBkYXRhQ2FjaGU6IGFueSA9IHt9O1xyXG5cclxuICBwcml2YXRlIGJhc2VQYXRoOiBzdHJpbmc7XHJcblxyXG4gIHByaXZhdGUgcm9vdElkOiBzdHJpbmc7XHJcblxyXG4gIHByaXZhdGUgY3VycmVudElkOiBzdHJpbmc7XHJcblxyXG4gIHByaXZhdGUgYWN0aXZlSWQ6IHN0cmluZztcclxuXHJcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybSA9IChkYXRhKSA9PiBkYXRhO1xyXG5cclxuICBwdWJsaWMgbG9hZChkYXRhKSB7XHJcbiAgICBjb25zdCB7IHRyZWUsIGJhc2VQYXRoIH0gPSBkYXRhO1xyXG4gICAgdGhpcy5yb290SWQgPSB0cmVlLmlkO1xyXG4gICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoO1xyXG4gICAgLy8gc2F2ZSBpbiBjYWNoZVxyXG4gICAgaWYgKCFBd1RyZWVEUy5kYXRhQ2FjaGVbdGhpcy5yb290SWRdKSB7XHJcbiAgICAgIEF3VHJlZURTLmRhdGFDYWNoZVt0aGlzLnJvb3RJZF0gPSB7IGZsYXRJZHM6IFtdLCBmbGF0RGF0YToge30gfTtcclxuICAgICAgdGhpcy5fbm9ybWFsaXplKHRyZWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGJ1aWxkKGlkKSB7XHJcbiAgICBjb25zdCBwYXRoID0gdGhpcy5fZ2V0VHJlZVBhdGgoaWQpO1xyXG4gICAgY29uc3Qgb2xkUGF0aCA9IHRoaXMuX2dldFRyZWVQYXRoKHRoaXMuY3VycmVudElkKTtcclxuICAgIGNvbnN0IG9sZFBhdGhJbmRleCA9IG9sZFBhdGguaW5kZXhPZihpZCk7XHJcblxyXG4gICAgaWYgKG9sZFBhdGhJbmRleCA+IDApIHtcclxuICAgICAgcGF0aC5zcGxpY2Uob2xkUGF0aEluZGV4KTtcclxuICAgICAgdGhpcy5jdXJyZW50SWQgPSBudWxsO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmN1cnJlbnRJZCA9PT0gaWQpIHtcclxuICAgICAgY29uc3QgaWRJbmRleCA9IHBhdGguaW5kZXhPZih0aGlzLmN1cnJlbnRJZCk7XHJcbiAgICAgIHBhdGguc3BsaWNlKGlkSW5kZXgpO1xyXG4gICAgICB0aGlzLmN1cnJlbnRJZCA9IG51bGw7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmN1cnJlbnRJZCA9IGlkO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRyZWU6IGFueSA9IHRoaXMuX2dldFRyZWUocGF0aCk7XHJcbiAgICB0aGlzLnVwZGF0ZSh0cmVlKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRBY3RpdmUoaWQpIHtcclxuICAgIHRoaXMuYWN0aXZlSWQgPSBpZDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBoaWdobGlnaHRBY3RpdmUoKSB7XHJcbiAgICBjb25zdCBjb250cm9sID0gKGl0ZW1zKSA9PiB7XHJcbiAgICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICBjb25zdCBmb3VuZGVkID0gaXRlbS5tZXRhID09PSB0aGlzLmFjdGl2ZUlkO1xyXG4gICAgICAgIGNvbnN0IGhhc0FjdGl2ZSA9IGl0ZW0uY2xhc3Nlcy5pbmRleE9mKCdpcy1hY3RpdmUnKSAhPT0gLTE7XHJcblxyXG4gICAgICAgIC8vIGNsZWFyIGlzLWFjdGl2ZVxyXG4gICAgICAgIGlmIChoYXNBY3RpdmUgJiYgIWZvdW5kZWQpIHtcclxuICAgICAgICAgIGNvbnN0IGN1cnJlbnRDbGFzc2VzID0gaXRlbS5jbGFzc2VzLnNwbGl0KCcgJyk7XHJcbiAgICAgICAgICBjdXJyZW50Q2xhc3Nlcy5zcGxpY2UoY3VycmVudENsYXNzZXMuaW5kZXhPZignaXMtYWN0aXZlJyksIDEpO1xyXG4gICAgICAgICAgaXRlbS5jbGFzc2VzID0gY3VycmVudENsYXNzZXMuam9pbignICcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGZvdW5kZWQpIHtcclxuICAgICAgICAgIGNvbnN0IGN1cnJlbnRDbGFzc2VzID0gaXRlbS5jbGFzc2VzLnNwbGl0KCcgJyk7XHJcbiAgICAgICAgICBpZiAoY3VycmVudENsYXNzZXMuaW5kZXhPZignaXMtYWN0aXZlJykgPT09IC0xKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRDbGFzc2VzLnB1c2goJ2lzLWFjdGl2ZScpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaXRlbS5jbGFzc2VzID0gY3VycmVudENsYXNzZXMuam9pbignICcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoaXRlbS5pdGVtcykgJiYgaXRlbS5pdGVtcy5sZW5ndGgpIHtcclxuICAgICAgICAgIGNvbnRyb2woaXRlbS5pdGVtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH07XHJcbiAgICBjb250cm9sKHRoaXMub3V0cHV0Lml0ZW1zKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2dldENhY2hlZERhdGEgPSAoKSA9PiBBd1RyZWVEUy5kYXRhQ2FjaGVbdGhpcy5yb290SWRdXHJcblxyXG4gIHByaXZhdGUgX25vcm1hbGl6ZSA9ICh7XHJcbiAgICBpZCwgbGFiZWwsIGljb24sIGltZywgYnJhbmNoZXMsXHJcbiAgfSkgPT4ge1xyXG4gICAgY29uc3QgaGFzQnJhbmNoZXMgPSAhIShBcnJheS5pc0FycmF5KGJyYW5jaGVzKSAmJiBicmFuY2hlcy5sZW5ndGgpO1xyXG4gICAgdGhpcy5fZ2V0Q2FjaGVkRGF0YSgpLmZsYXREYXRhW2lkXSA9IHtcclxuICAgICAgaWQsIGxhYmVsLCBpY29uLCBpbWcsIGhhc0JyYW5jaGVzLFxyXG4gICAgfTtcclxuICAgIGlmIChoYXNCcmFuY2hlcykge1xyXG4gICAgICBicmFuY2hlcy5mb3JFYWNoKChkYXRhKSA9PiB7XHJcbiAgICAgICAgdGhpcy5fZ2V0Q2FjaGVkRGF0YSgpLmZsYXRJZHMucHVzaChbaWQsIGRhdGEuaWRdKTtcclxuICAgICAgICB0aGlzLl9ub3JtYWxpemUoZGF0YSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfZ2V0UGFyZW50ID0gKGlkKSA9PiB0aGlzLl9nZXRDYWNoZWREYXRhKCkuZmxhdElkc1xyXG4gICAgLmZpbHRlcigoWywgY2hpbGRJZF0pID0+IGNoaWxkSWQgPT09IGlkKVxyXG4gICAgLm1hcCgoW3BhcmVudElkXSkgPT4gcGFyZW50SWQpWzBdIHx8IG51bGxcclxuXHJcbiAgcHJpdmF0ZSBfZ2V0VHJlZVBhdGggPSAoaWQpID0+IHtcclxuICAgIGNvbnN0IGlkcyA9IFtpZF07XHJcbiAgICBsZXQgY3VycmVudElkID0gaWQ7XHJcbiAgICB3aGlsZSAoY3VycmVudElkKSB7XHJcbiAgICAgIGNvbnN0IHBhcmVudElkID0gdGhpcy5fZ2V0UGFyZW50KGN1cnJlbnRJZCk7XHJcbiAgICAgIGlmIChwYXJlbnRJZCkge1xyXG4gICAgICAgIGlkcy5wdXNoKHBhcmVudElkKTtcclxuICAgICAgfVxyXG4gICAgICBjdXJyZW50SWQgPSBwYXJlbnRJZDtcclxuICAgIH1cclxuICAgIHJldHVybiBpZHMucmV2ZXJzZSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfZ2V0VHJlZSA9IChwYXRoKSA9PiB7XHJcbiAgICBjb25zdCB0cmVlID0ge307XHJcbiAgICBsZXQgY291bnRlciA9IDA7XHJcblxyXG4gICAgY29uc3QgbG9hZEl0ZW1zID0gKGlkLCBzb3VyY2UpID0+IHtcclxuICAgICAgY291bnRlciArPSAxO1xyXG4gICAgICBjb25zdCBuZXh0UGFyZW50ID0gcGF0aFtjb3VudGVyXTtcclxuICAgICAgc291cmNlLml0ZW1zID0gW107XHJcblxyXG4gICAgICB0aGlzLl9nZXRDYWNoZWREYXRhKCkuZmxhdElkc1xyXG4gICAgICAgIC5maWx0ZXIoKFtwYXJlbnRJZF0pID0+IHBhcmVudElkID09PSBpZClcclxuICAgICAgICAuZm9yRWFjaCgoWywgY2hpbGRJZF0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBpblBhdGggPSBjaGlsZElkID09PSBuZXh0UGFyZW50O1xyXG4gICAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMuX2dldFRyZWVJdGVtKGNoaWxkSWQsIGluUGF0aCk7XHJcbiAgICAgICAgICBzb3VyY2UuaXRlbXMucHVzaChpdGVtKTtcclxuICAgICAgICAgIGlmIChpblBhdGgpIHtcclxuICAgICAgICAgICAgbG9hZEl0ZW1zKGNoaWxkSWQsIHNvdXJjZS5pdGVtc1tpbmRleF0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBpbml0XHJcbiAgICBsb2FkSXRlbXMocGF0aFswXSwgdHJlZSk7XHJcbiAgICByZXR1cm4gdHJlZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2dldFRyZWVJdGVtID0gKGlkLCBpblBhdGgpID0+IHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgbGFiZWwsIGljb24sIGltZywgaGFzQnJhbmNoZXMsXHJcbiAgICB9ID0gdGhpcy5fZ2V0Q2FjaGVkRGF0YSgpLmZsYXREYXRhW2lkXTtcclxuICAgIGNvbnN0IGRlZmF1bHRJY29uID0gaW5QYXRoID8gJ243LWljb24tYW5nbGUtZG93bicgOiAnbjctaWNvbi1hbmdsZS1yaWdodCc7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gW107XHJcbiAgICBpZiAoaW5QYXRoKSB7XHJcbiAgICAgIGNsYXNzZXMucHVzaCgnaXMtZXhwYW5kZWQnKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmFjdGl2ZUlkID09PSBpZCkge1xyXG4gICAgICBjbGFzc2VzLnB1c2goJ2lzLWFjdGl2ZScpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgY2xhc3NlczogY2xhc3Nlcy5qb2luKCcgJyksXHJcbiAgICAgIHRleHQ6IGxhYmVsIHx8IG51bGwsXHJcbiAgICAgIGltZzogaW1nIHx8IG51bGwsXHJcbiAgICAgIGljb246IGljb24gfHwgbnVsbCxcclxuICAgICAgdG9nZ2xlOiBoYXNCcmFuY2hlcyA/IHtcclxuICAgICAgICBpY29uOiBpY29uIHx8IGRlZmF1bHRJY29uLFxyXG4gICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgIHNvdXJjZTogJ3RvZ2dsZScsXHJcbiAgICAgICAgICBpZCxcclxuICAgICAgICB9LFxyXG4gICAgICB9IDogbnVsbCxcclxuICAgICAgbWV0YTogaWQsXHJcbiAgICAgIGFuY2hvcjoge1xyXG4gICAgICAgIGhyZWY6IGAke3RoaXMuYmFzZVBhdGh9LyR7aWR9LyR7aGVscGVycy5zbHVnaWZ5KGxhYmVsKX1gLFxyXG4gICAgICB9LFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl19