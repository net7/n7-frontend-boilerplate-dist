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
            var id = _a.id, label = _a.label, icon = _a.icon, img = _a.img, branches = _a.branches, type = _a.document_type, classification = _a.document_classification;
            /** @type {?} */
            var hasBranches = !!(Array.isArray(branches) && branches.length);
            _this._getCachedData().flatData[id] = {
                id: id, label: label, icon: icon, img: img, hasBranches: hasBranches, type: type, classification: classification
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
            /** @type {?} */
            var lastSegment = /.*\.(\w+)$/;
            if (classification && lastSegment.test(classification)) {
                /** @type {?} */
                var classID = classification
                    .match(lastSegment)[1] // get classification characters
                    .toUpperCase();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvdHJlZS5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDaEUsT0FBTyxPQUFPLE1BQU0sc0JBQXNCLENBQUM7QUFFM0M7SUFBOEIsb0NBQVU7SUFBeEM7UUFBQSxxRUFnTEM7UUFyS1csZUFBUzs7OztRQUFHLFVBQUMsSUFBSSxJQUFLLE9BQUEsSUFBSSxFQUFKLENBQUksRUFBQztRQWtFN0Isb0JBQWM7OztRQUFHLGNBQU0sT0FBQSxRQUFRLENBQUMsU0FBUyxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsRUFBL0IsQ0FBK0IsRUFBQTtRQUV0RCxnQkFBVTs7OztRQUFHLFVBQUMsRUFFckI7Z0JBREMsVUFBRSxFQUFFLGdCQUFLLEVBQUUsY0FBSSxFQUFFLFlBQUcsRUFBRSxzQkFBUSxFQUFFLHVCQUFtQixFQUFFLDJDQUF1Qzs7Z0JBRXRGLFdBQVcsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFDbEUsS0FBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsR0FBRztnQkFDbkMsRUFBRSxJQUFBLEVBQUUsS0FBSyxPQUFBLEVBQUUsSUFBSSxNQUFBLEVBQUUsR0FBRyxLQUFBLEVBQUUsV0FBVyxhQUFBLEVBQUUsSUFBSSxNQUFBLEVBQUUsY0FBYyxnQkFBQTthQUN4RCxDQUFDO1lBQ0YsSUFBSSxXQUFXLEVBQUU7Z0JBQ2YsUUFBUSxDQUFDLE9BQU87Ozs7Z0JBQUMsVUFBQyxJQUFJO29CQUNwQixLQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FB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T0FBTyxHQUFHLGNBQWMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQ3pDO2dCQUVELElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7b0JBQ2xELE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ3JCO1lBQ0gsQ0FBQyxFQUFDLENBQUM7UUFDTCxDQUFDLENBQUE7UUFDRCxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBMUVNLGtCQUFTLEdBQVEsRUFBRSxDQUFDO0lBK0s3QixlQUFDO0NBQUEsQUFoTEQsQ0FBOEIsVUFBVSxHQWdMdkM7U0FoTFksUUFBUTs7O0lBQ25CLG1CQUEyQjs7Ozs7SUFFM0IsNEJBQXlCOzs7OztJQUV6QiwwQkFBdUI7Ozs7O0lBRXZCLDZCQUEwQjs7Ozs7SUFFMUIsNEJBQXlCOzs7OztJQUV6Qiw2QkFBcUM7Ozs7O0lBa0VyQyxrQ0FBOEQ7Ozs7O0lBRTlELDhCQWFDOzs7OztJQUVELDhCQUUyQzs7Ozs7SUFFM0MsZ0NBV0M7Ozs7O0lBRUQsNEJBd0JDOzs7OztJQUVELGdDQXNDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZS9kaXN0L2RhdGEtc291cmNlJztcbmltcG9ydCBoZWxwZXJzIGZyb20gJy4uLy4uL2NvbW1vbi9oZWxwZXJzJztcblxuZXhwb3J0IGNsYXNzIEF3VHJlZURTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG4gIHN0YXRpYyBkYXRhQ2FjaGU6IGFueSA9IHt9O1xuXG4gIHByaXZhdGUgYmFzZVBhdGg6IHN0cmluZztcblxuICBwcml2YXRlIHJvb3RJZDogc3RyaW5nO1xuXG4gIHByaXZhdGUgY3VycmVudElkOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBhY3RpdmVJZDogc3RyaW5nO1xuXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0gPSAoZGF0YSkgPT4gZGF0YTtcblxuICBwdWJsaWMgbG9hZChkYXRhKSB7XG4gICAgY29uc3QgeyB0cmVlLCBiYXNlUGF0aCB9ID0gZGF0YTtcbiAgICB0aGlzLnJvb3RJZCA9IHRyZWUuaWQ7XG4gICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoO1xuICAgIC8vIHNhdmUgaW4gY2FjaGVcbiAgICBpZiAoIUF3VHJlZURTLmRhdGFDYWNoZVt0aGlzLnJvb3RJZF0pIHtcbiAgICAgIEF3VHJlZURTLmRhdGFDYWNoZVt0aGlzLnJvb3RJZF0gPSB7IGZsYXRJZHM6IFtdLCBmbGF0RGF0YToge30gfTtcbiAgICAgIHRoaXMuX25vcm1hbGl6ZSh0cmVlKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgYnVpbGQoaWQpIHtcbiAgICBjb25zdCBwYXRoID0gdGhpcy5fZ2V0VHJlZVBhdGgoaWQpO1xuICAgIGNvbnN0IG9sZFBhdGggPSB0aGlzLl9nZXRUcmVlUGF0aCh0aGlzLmN1cnJlbnRJZCk7XG4gICAgY29uc3Qgb2xkUGF0aEluZGV4ID0gb2xkUGF0aC5pbmRleE9mKGlkKTtcblxuICAgIGlmIChvbGRQYXRoSW5kZXggPiAwKSB7XG4gICAgICBwYXRoLnNwbGljZShvbGRQYXRoSW5kZXgpO1xuICAgICAgdGhpcy5jdXJyZW50SWQgPSBudWxsO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jdXJyZW50SWQgPT09IGlkKSB7XG4gICAgICBjb25zdCBpZEluZGV4ID0gcGF0aC5pbmRleE9mKHRoaXMuY3VycmVudElkKTtcbiAgICAgIHBhdGguc3BsaWNlKGlkSW5kZXgpO1xuICAgICAgdGhpcy5jdXJyZW50SWQgPSBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmN1cnJlbnRJZCA9IGlkO1xuICAgIH1cblxuICAgIGNvbnN0IHRyZWU6IGFueSA9IHRoaXMuX2dldFRyZWUocGF0aCk7XG4gICAgdGhpcy51cGRhdGUodHJlZSk7XG4gIH1cblxuICBwdWJsaWMgc2V0QWN0aXZlKGlkKSB7XG4gICAgdGhpcy5hY3RpdmVJZCA9IGlkO1xuICB9XG5cbiAgcHVibGljIGhpZ2hsaWdodEFjdGl2ZSgpIHtcbiAgICBjb25zdCBjb250cm9sID0gKGl0ZW1zKSA9PiB7XG4gICAgICBpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IGZvdW5kZWQgPSBpdGVtLm1ldGEgPT09IHRoaXMuYWN0aXZlSWQ7XG4gICAgICAgIGNvbnN0IGhhc0FjdGl2ZSA9IGl0ZW0uY2xhc3Nlcy5pbmRleE9mKCdpcy1hY3RpdmUnKSAhPT0gLTE7XG5cbiAgICAgICAgLy8gY2xlYXIgaXMtYWN0aXZlXG4gICAgICAgIGlmIChoYXNBY3RpdmUgJiYgIWZvdW5kZWQpIHtcbiAgICAgICAgICBjb25zdCBjdXJyZW50Q2xhc3NlcyA9IGl0ZW0uY2xhc3Nlcy5zcGxpdCgnICcpO1xuICAgICAgICAgIGN1cnJlbnRDbGFzc2VzLnNwbGljZShjdXJyZW50Q2xhc3Nlcy5pbmRleE9mKCdpcy1hY3RpdmUnKSwgMSk7XG4gICAgICAgICAgaXRlbS5jbGFzc2VzID0gY3VycmVudENsYXNzZXMuam9pbignICcpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZvdW5kZWQpIHtcbiAgICAgICAgICBjb25zdCBjdXJyZW50Q2xhc3NlcyA9IGl0ZW0uY2xhc3Nlcy5zcGxpdCgnICcpO1xuICAgICAgICAgIGlmIChjdXJyZW50Q2xhc3Nlcy5pbmRleE9mKCdpcy1hY3RpdmUnKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIGN1cnJlbnRDbGFzc2VzLnB1c2goJ2lzLWFjdGl2ZScpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpdGVtLmNsYXNzZXMgPSBjdXJyZW50Q2xhc3Nlcy5qb2luKCcgJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShpdGVtLml0ZW1zKSAmJiBpdGVtLml0ZW1zLmxlbmd0aCkge1xuICAgICAgICAgIGNvbnRyb2woaXRlbS5pdGVtcyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG4gICAgY29udHJvbCh0aGlzLm91dHB1dC5pdGVtcyk7XG4gIH1cblxuICBwcml2YXRlIF9nZXRDYWNoZWREYXRhID0gKCkgPT4gQXdUcmVlRFMuZGF0YUNhY2hlW3RoaXMucm9vdElkXVxuXG4gIHByaXZhdGUgX25vcm1hbGl6ZSA9ICh7XG4gICAgaWQsIGxhYmVsLCBpY29uLCBpbWcsIGJyYW5jaGVzLCBkb2N1bWVudF90eXBlOiB0eXBlLCBkb2N1bWVudF9jbGFzc2lmaWNhdGlvbjogY2xhc3NpZmljYXRpb25cbiAgfSkgPT4ge1xuICAgIGNvbnN0IGhhc0JyYW5jaGVzID0gISEoQXJyYXkuaXNBcnJheShicmFuY2hlcykgJiYgYnJhbmNoZXMubGVuZ3RoKTtcbiAgICB0aGlzLl9nZXRDYWNoZWREYXRhKCkuZmxhdERhdGFbaWRdID0ge1xuICAgICAgaWQsIGxhYmVsLCBpY29uLCBpbWcsIGhhc0JyYW5jaGVzLCB0eXBlLCBjbGFzc2lmaWNhdGlvblxuICAgIH07XG4gICAgaWYgKGhhc0JyYW5jaGVzKSB7XG4gICAgICBicmFuY2hlcy5mb3JFYWNoKChkYXRhKSA9PiB7XG4gICAgICAgIHRoaXMuX2dldENhY2hlZERhdGEoKS5mbGF0SWRzLnB1c2goW2lkLCBkYXRhLmlkXSk7XG4gICAgICAgIHRoaXMuX25vcm1hbGl6ZShkYXRhKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2dldFBhcmVudCA9IChpZCkgPT4gdGhpcy5fZ2V0Q2FjaGVkRGF0YSgpLmZsYXRJZHNcbiAgICAuZmlsdGVyKChbLCBjaGlsZElkXSkgPT4gY2hpbGRJZCA9PT0gaWQpXG4gICAgLm1hcCgoW3BhcmVudElkXSkgPT4gcGFyZW50SWQpWzBdIHx8IG51bGxcblxuICBwcml2YXRlIF9nZXRUcmVlUGF0aCA9IChpZCkgPT4ge1xuICAgIGNvbnN0IGlkcyA9IFtpZF07XG4gICAgbGV0IGN1cnJlbnRJZCA9IGlkO1xuICAgIHdoaWxlIChjdXJyZW50SWQpIHtcbiAgICAgIGNvbnN0IHBhcmVudElkID0gdGhpcy5fZ2V0UGFyZW50KGN1cnJlbnRJZCk7XG4gICAgICBpZiAocGFyZW50SWQpIHtcbiAgICAgICAgaWRzLnB1c2gocGFyZW50SWQpO1xuICAgICAgfVxuICAgICAgY3VycmVudElkID0gcGFyZW50SWQ7XG4gICAgfVxuICAgIHJldHVybiBpZHMucmV2ZXJzZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0VHJlZSA9IChwYXRoKSA9PiB7XG4gICAgY29uc3QgdHJlZSA9IHt9O1xuICAgIGxldCBjb3VudGVyID0gMDtcblxuICAgIGNvbnN0IGxvYWRJdGVtcyA9IChpZCwgc291cmNlKSA9PiB7XG4gICAgICBjb3VudGVyICs9IDE7XG4gICAgICBjb25zdCBuZXh0UGFyZW50ID0gcGF0aFtjb3VudGVyXTtcbiAgICAgIHNvdXJjZS5pdGVtcyA9IFtdO1xuXG4gICAgICB0aGlzLl9nZXRDYWNoZWREYXRhKCkuZmxhdElkc1xuICAgICAgICAuZmlsdGVyKChbcGFyZW50SWRdKSA9PiBwYXJlbnRJZCA9PT0gaWQpXG4gICAgICAgIC5mb3JFYWNoKChbLCBjaGlsZElkXSwgaW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCBpblBhdGggPSBjaGlsZElkID09PSBuZXh0UGFyZW50O1xuICAgICAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLl9nZXRUcmVlSXRlbShjaGlsZElkLCBpblBhdGgpO1xuICAgICAgICAgIHNvdXJjZS5pdGVtcy5wdXNoKGl0ZW0pO1xuICAgICAgICAgIGlmIChpblBhdGgpIHtcbiAgICAgICAgICAgIGxvYWRJdGVtcyhjaGlsZElkLCBzb3VyY2UuaXRlbXNbaW5kZXhdKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvLyBpbml0XG4gICAgbG9hZEl0ZW1zKHBhdGhbMF0sIHRyZWUpO1xuICAgIHJldHVybiB0cmVlO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0VHJlZUl0ZW0gPSAoaWQsIGluUGF0aCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGxhYmVsLCBpbWcsIGhhc0JyYW5jaGVzLCB0eXBlLCBjbGFzc2lmaWNhdGlvblxuICAgIH0gPSB0aGlzLl9nZXRDYWNoZWREYXRhKCkuZmxhdERhdGFbaWRdO1xuICAgIGNvbnN0IGRlZmF1bHRJY29uID0gKHRoaXMub3B0aW9ucy5jb25maWdbdHlwZV0gfHwgeyBpY29uOiBudWxsIH0pLmljb247XG4gICAgbGV0IHNwZWNpZmljSWNvbiA9ICcnO1xuICAgIGNvbnN0IGxhc3RTZWdtZW50ID0gLy4qXFwuKFxcdyspJC87XG4gICAgaWYgKGNsYXNzaWZpY2F0aW9uICYmIGxhc3RTZWdtZW50LnRlc3QoY2xhc3NpZmljYXRpb24pKSB7XG4gICAgICBjb25zdCBjbGFzc0lEID0gY2xhc3NpZmljYXRpb25cbiAgICAgICAgLm1hdGNoKGxhc3RTZWdtZW50KVsxXSAvLyBnZXQgY2xhc3NpZmljYXRpb24gY2hhcmFjdGVyc1xuICAgICAgICAudG9VcHBlckNhc2UoKTsgLy8gbm9ybWFsaXplXG4gICAgICBzcGVjaWZpY0ljb24gPSB0aGlzLm9wdGlvbnMuY29uZmlnW3R5cGVdLmNsYXNzaWZpY2F0aW9uc1tjbGFzc0lEXS5pY29uO1xuICAgIH1cbiAgICBjb25zdCBhcnJvd0ljb25zID0gaW5QYXRoID8gJ243LWljb24tYW5nbGUtZG93bicgOiAnbjctaWNvbi1hbmdsZS1yaWdodCc7XG4gICAgY29uc3QgY2xhc3NlcyA9IFtdO1xuICAgIGlmIChpblBhdGgpIHtcbiAgICAgIGNsYXNzZXMucHVzaCgnaXMtZXhwYW5kZWQnKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuYWN0aXZlSWQgPT09IGlkKSB7XG4gICAgICBjbGFzc2VzLnB1c2goJ2lzLWFjdGl2ZScpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgY2xhc3NlczogY2xhc3Nlcy5qb2luKCcgJyksXG4gICAgICB0ZXh0OiBsYWJlbCB8fCBudWxsLFxuICAgICAgaW1nOiBpbWcgfHwgbnVsbCxcbiAgICAgIGljb246IChzcGVjaWZpY0ljb24gfHwgZGVmYXVsdEljb24pLFxuICAgICAgdG9nZ2xlOiBoYXNCcmFuY2hlcyA/IHtcbiAgICAgICAgaWNvbjogYXJyb3dJY29ucyxcbiAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgIHNvdXJjZTogJ3RvZ2dsZScsXG4gICAgICAgICAgaWQsXG4gICAgICAgIH0sXG4gICAgICB9IDogbnVsbCxcbiAgICAgIG1ldGE6IGlkLFxuICAgICAgYW5jaG9yOiB7XG4gICAgICAgIGhyZWY6IGAke3RoaXMuYmFzZVBhdGh9LyR7aWR9LyR7aGVscGVycy5zbHVnaWZ5KGxhYmVsKX1gLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG59XG4iXX0=