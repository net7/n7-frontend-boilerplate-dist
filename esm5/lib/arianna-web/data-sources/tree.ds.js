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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvdHJlZS5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNoRSxPQUFPLE9BQU8sTUFBTSxzQkFBc0IsQ0FBQztBQUUzQztJQUE4QixvQ0FBVTtJQUF4QztRQUFBLHFFQWdMQztRQXJLVyxlQUFTOzs7O1FBQUcsVUFBQyxJQUFJLElBQUssT0FBQSxJQUFJLEVBQUosQ0FBSSxFQUFDO1FBa0U3QixvQkFBYzs7O1FBQUcsY0FBTSxPQUFBLFFBQVEsQ0FBQyxTQUFTLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxFQUEvQixDQUErQixFQUFBO1FBRXRELGdCQUFVOzs7O1FBQUcsVUFBQyxFQUVyQjtnQkFEQyxVQUFFLEVBQUUsZ0JBQUssRUFBRSxjQUFJLEVBQUUsc0JBQVEsRUFBRSx1QkFBbUIsRUFBRSwyQ0FBdUM7O2dCQUVqRixXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDO1lBQ2xFLEtBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEdBQUc7Z0JBQ25DLEVBQUUsSUFBQSxFQUFFLEtBQUssT0FBQSxFQUFFLElBQUksTUFBQSxFQUFFLFdBQVcsYUFBQSxFQUFFLElBQUksTUFBQSxFQUFFLGNBQWMsZ0JBQUE7YUFDbkQsQ0FBQztZQUNGLElBQUksV0FBVyxFQUFFO2dCQUNmLFFBQVEsQ0FBQyxPQUFPOzs7O2dCQUFDLFVBQUMsSUFBSTtvQkFDcEIsS0FBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFD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QUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUN6QztnQkFFRCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFO29CQUNsRCxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUNyQjtZQUNILENBQUMsRUFBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFBO1FBQ0QsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQTFFTSxrQkFBUyxHQUFRLEVBQUUsQ0FBQztJQStLN0IsZUFBQztDQUFBLEFBaExELENBQThCLFVBQVUsR0FnTHZDO1NBaExZLFFBQVE7OztJQUNuQixtQkFBMkI7Ozs7O0lBRTNCLDRCQUF5Qjs7Ozs7SUFFekIsMEJBQXVCOzs7OztJQUV2Qiw2QkFBMEI7Ozs7O0lBRTFCLDRCQUF5Qjs7Ozs7SUFFekIsNkJBQXFDOzs7OztJQWtFckMsa0NBQThEOzs7OztJQUU5RCw4QkFhQzs7Ozs7SUFFRCw4QkFFMkM7Ozs7O0lBRTNDLGdDQVdDOzs7OztJQUVELDRCQXdCQzs7Ozs7SUFFRCxnQ0FzQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUvZGlzdC9kYXRhLXNvdXJjZSc7XG5pbXBvcnQgaGVscGVycyBmcm9tICcuLi8uLi9jb21tb24vaGVscGVycyc7XG5cbmV4cG9ydCBjbGFzcyBBd1RyZWVEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuICBzdGF0aWMgZGF0YUNhY2hlOiBhbnkgPSB7fTtcblxuICBwcml2YXRlIGJhc2VQYXRoOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSByb290SWQ6IHN0cmluZztcblxuICBwcml2YXRlIGN1cnJlbnRJZDogc3RyaW5nO1xuXG4gIHByaXZhdGUgYWN0aXZlSWQ6IHN0cmluZztcblxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtID0gKGRhdGEpID0+IGRhdGE7XG5cbiAgcHVibGljIGxvYWQoZGF0YSkge1xuICAgIGNvbnN0IHsgdHJlZSwgYmFzZVBhdGggfSA9IGRhdGE7XG4gICAgdGhpcy5yb290SWQgPSB0cmVlLmlkO1xuICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aDtcbiAgICAvLyBzYXZlIGluIGNhY2hlXG4gICAgaWYgKCFBd1RyZWVEUy5kYXRhQ2FjaGVbdGhpcy5yb290SWRdKSB7XG4gICAgICBBd1RyZWVEUy5kYXRhQ2FjaGVbdGhpcy5yb290SWRdID0geyBmbGF0SWRzOiBbXSwgZmxhdERhdGE6IHt9IH07XG4gICAgICB0aGlzLl9ub3JtYWxpemUodHJlZSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGJ1aWxkKGlkKSB7XG4gICAgY29uc3QgcGF0aCA9IHRoaXMuX2dldFRyZWVQYXRoKGlkKTtcbiAgICBjb25zdCBvbGRQYXRoID0gdGhpcy5fZ2V0VHJlZVBhdGgodGhpcy5jdXJyZW50SWQpO1xuICAgIGNvbnN0IG9sZFBhdGhJbmRleCA9IG9sZFBhdGguaW5kZXhPZihpZCk7XG5cbiAgICBpZiAob2xkUGF0aEluZGV4ID4gMCkge1xuICAgICAgcGF0aC5zcGxpY2Uob2xkUGF0aEluZGV4KTtcbiAgICAgIHRoaXMuY3VycmVudElkID0gbnVsbDtcbiAgICB9IGVsc2UgaWYgKHRoaXMuY3VycmVudElkID09PSBpZCkge1xuICAgICAgY29uc3QgaWRJbmRleCA9IHBhdGguaW5kZXhPZih0aGlzLmN1cnJlbnRJZCk7XG4gICAgICBwYXRoLnNwbGljZShpZEluZGV4KTtcbiAgICAgIHRoaXMuY3VycmVudElkID0gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jdXJyZW50SWQgPSBpZDtcbiAgICB9XG5cbiAgICBjb25zdCB0cmVlOiBhbnkgPSB0aGlzLl9nZXRUcmVlKHBhdGgpO1xuICAgIHRoaXMudXBkYXRlKHRyZWUpO1xuICB9XG5cbiAgcHVibGljIHNldEFjdGl2ZShpZCkge1xuICAgIHRoaXMuYWN0aXZlSWQgPSBpZDtcbiAgfVxuXG4gIHB1YmxpYyBoaWdobGlnaHRBY3RpdmUoKSB7XG4gICAgY29uc3QgY29udHJvbCA9IChpdGVtcykgPT4ge1xuICAgICAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBjb25zdCBmb3VuZGVkID0gaXRlbS5tZXRhID09PSB0aGlzLmFjdGl2ZUlkO1xuICAgICAgICBjb25zdCBoYXNBY3RpdmUgPSBpdGVtLmNsYXNzZXMuaW5kZXhPZignaXMtYWN0aXZlJykgIT09IC0xO1xuXG4gICAgICAgIC8vIGNsZWFyIGlzLWFjdGl2ZVxuICAgICAgICBpZiAoaGFzQWN0aXZlICYmICFmb3VuZGVkKSB7XG4gICAgICAgICAgY29uc3QgY3VycmVudENsYXNzZXMgPSBpdGVtLmNsYXNzZXMuc3BsaXQoJyAnKTtcbiAgICAgICAgICBjdXJyZW50Q2xhc3Nlcy5zcGxpY2UoY3VycmVudENsYXNzZXMuaW5kZXhPZignaXMtYWN0aXZlJyksIDEpO1xuICAgICAgICAgIGl0ZW0uY2xhc3NlcyA9IGN1cnJlbnRDbGFzc2VzLmpvaW4oJyAnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChmb3VuZGVkKSB7XG4gICAgICAgICAgY29uc3QgY3VycmVudENsYXNzZXMgPSBpdGVtLmNsYXNzZXMuc3BsaXQoJyAnKTtcbiAgICAgICAgICBpZiAoY3VycmVudENsYXNzZXMuaW5kZXhPZignaXMtYWN0aXZlJykgPT09IC0xKSB7XG4gICAgICAgICAgICBjdXJyZW50Q2xhc3Nlcy5wdXNoKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaXRlbS5jbGFzc2VzID0gY3VycmVudENsYXNzZXMuam9pbignICcpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoaXRlbS5pdGVtcykgJiYgaXRlbS5pdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICBjb250cm9sKGl0ZW0uaXRlbXMpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuICAgIGNvbnRyb2wodGhpcy5vdXRwdXQuaXRlbXMpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0Q2FjaGVkRGF0YSA9ICgpID0+IEF3VHJlZURTLmRhdGFDYWNoZVt0aGlzLnJvb3RJZF1cblxuICBwcml2YXRlIF9ub3JtYWxpemUgPSAoe1xuICAgIGlkLCBsYWJlbCwgaWNvbiwgYnJhbmNoZXMsIGRvY3VtZW50X3R5cGU6IHR5cGUsIGRvY3VtZW50X2NsYXNzaWZpY2F0aW9uOiBjbGFzc2lmaWNhdGlvblxuICB9KSA9PiB7XG4gICAgY29uc3QgaGFzQnJhbmNoZXMgPSAhIShBcnJheS5pc0FycmF5KGJyYW5jaGVzKSAmJiBicmFuY2hlcy5sZW5ndGgpO1xuICAgIHRoaXMuX2dldENhY2hlZERhdGEoKS5mbGF0RGF0YVtpZF0gPSB7XG4gICAgICBpZCwgbGFiZWwsIGljb24sIGhhc0JyYW5jaGVzLCB0eXBlLCBjbGFzc2lmaWNhdGlvblxuICAgIH07XG4gICAgaWYgKGhhc0JyYW5jaGVzKSB7XG4gICAgICBicmFuY2hlcy5mb3JFYWNoKChkYXRhKSA9PiB7XG4gICAgICAgIHRoaXMuX2dldENhY2hlZERhdGEoKS5mbGF0SWRzLnB1c2goW2lkLCBkYXRhLmlkXSk7XG4gICAgICAgIHRoaXMuX25vcm1hbGl6ZShkYXRhKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2dldFBhcmVudCA9IChpZCkgPT4gdGhpcy5fZ2V0Q2FjaGVkRGF0YSgpLmZsYXRJZHNcbiAgICAuZmlsdGVyKChbLCBjaGlsZElkXSkgPT4gY2hpbGRJZCA9PT0gaWQpXG4gICAgLm1hcCgoW3BhcmVudElkXSkgPT4gcGFyZW50SWQpWzBdIHx8IG51bGxcblxuICBwcml2YXRlIF9nZXRUcmVlUGF0aCA9IChpZCkgPT4ge1xuICAgIGNvbnN0IGlkcyA9IFtpZF07XG4gICAgbGV0IGN1cnJlbnRJZCA9IGlkO1xuICAgIHdoaWxlIChjdXJyZW50SWQpIHtcbiAgICAgIGNvbnN0IHBhcmVudElkID0gdGhpcy5fZ2V0UGFyZW50KGN1cnJlbnRJZCk7XG4gICAgICBpZiAocGFyZW50SWQpIHtcbiAgICAgICAgaWRzLnB1c2gocGFyZW50SWQpO1xuICAgICAgfVxuICAgICAgY3VycmVudElkID0gcGFyZW50SWQ7XG4gICAgfVxuICAgIHJldHVybiBpZHMucmV2ZXJzZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0VHJlZSA9IChwYXRoKSA9PiB7XG4gICAgY29uc3QgdHJlZSA9IHt9O1xuICAgIGxldCBjb3VudGVyID0gMDtcblxuICAgIGNvbnN0IGxvYWRJdGVtcyA9IChpZCwgc291cmNlKSA9PiB7XG4gICAgICBjb3VudGVyICs9IDE7XG4gICAgICBjb25zdCBuZXh0UGFyZW50ID0gcGF0aFtjb3VudGVyXTtcbiAgICAgIHNvdXJjZS5pdGVtcyA9IFtdO1xuXG4gICAgICB0aGlzLl9nZXRDYWNoZWREYXRhKCkuZmxhdElkc1xuICAgICAgICAuZmlsdGVyKChbcGFyZW50SWRdKSA9PiBwYXJlbnRJZCA9PT0gaWQpXG4gICAgICAgIC5mb3JFYWNoKChbLCBjaGlsZElkXSwgaW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCBpblBhdGggPSBjaGlsZElkID09PSBuZXh0UGFyZW50O1xuICAgICAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLl9nZXRUcmVlSXRlbShjaGlsZElkLCBpblBhdGgpO1xuICAgICAgICAgIHNvdXJjZS5pdGVtcy5wdXNoKGl0ZW0pO1xuICAgICAgICAgIGlmIChpblBhdGgpIHtcbiAgICAgICAgICAgIGxvYWRJdGVtcyhjaGlsZElkLCBzb3VyY2UuaXRlbXNbaW5kZXhdKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvLyBpbml0XG4gICAgbG9hZEl0ZW1zKHBhdGhbMF0sIHRyZWUpO1xuICAgIHJldHVybiB0cmVlO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0VHJlZUl0ZW0gPSAoaWQsIGluUGF0aCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGxhYmVsLCBpbWcsIGhhc0JyYW5jaGVzLCB0eXBlLCBjbGFzc2lmaWNhdGlvblxuICAgIH0gPSB0aGlzLl9nZXRDYWNoZWREYXRhKCkuZmxhdERhdGFbaWRdO1xuICAgIGNvbnN0IGRlZmF1bHRJY29uID0gKHRoaXMub3B0aW9ucy5jb25maWdbdHlwZV0gfHwgeyBpY29uOiBudWxsIH0pLmljb247XG4gICAgbGV0IHNwZWNpZmljSWNvbiA9ICcnO1xuICAgIGNvbnN0IGxhc3RTZWdtZW50ID0gLy4qXFwuKFxcdyspJC87XG4gICAgaWYgKGNsYXNzaWZpY2F0aW9uICYmIGxhc3RTZWdtZW50LnRlc3QoY2xhc3NpZmljYXRpb24pKSB7XG4gICAgICBjb25zdCBjbGFzc0lEID0gY2xhc3NpZmljYXRpb25cbiAgICAgICAgLm1hdGNoKGxhc3RTZWdtZW50KVsxXSAvLyBnZXQgY2xhc3NpZmljYXRpb24gY2hhcmFjdGVyc1xuICAgICAgICAudG9VcHBlckNhc2UoKTsgLy8gbm9ybWFsaXplXG4gICAgICBzcGVjaWZpY0ljb24gPSB0aGlzLm9wdGlvbnMuY29uZmlnW3R5cGVdLmNsYXNzaWZpY2F0aW9uc1tjbGFzc0lEXS5pY29uO1xuICAgIH1cbiAgICBjb25zdCBhcnJvd0ljb25zID0gaW5QYXRoID8gJ243LWljb24tYW5nbGUtZG93bicgOiAnbjctaWNvbi1hbmdsZS1yaWdodCc7XG4gICAgY29uc3QgY2xhc3NlcyA9IFtdO1xuICAgIGlmIChpblBhdGgpIHtcbiAgICAgIGNsYXNzZXMucHVzaCgnaXMtZXhwYW5kZWQnKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuYWN0aXZlSWQgPT09IGlkKSB7XG4gICAgICBjbGFzc2VzLnB1c2goJ2lzLWFjdGl2ZScpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgY2xhc3NlczogY2xhc3Nlcy5qb2luKCcgJyksXG4gICAgICB0ZXh0OiBsYWJlbCB8fCBudWxsLFxuICAgICAgaW1nOiBpbWcgfHwgbnVsbCxcbiAgICAgIGljb246IChzcGVjaWZpY0ljb24gfHwgZGVmYXVsdEljb24pLFxuICAgICAgdG9nZ2xlOiBoYXNCcmFuY2hlcyA/IHtcbiAgICAgICAgaWNvbjogYXJyb3dJY29ucyxcbiAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgIHNvdXJjZTogJ3RvZ2dsZScsXG4gICAgICAgICAgaWQsXG4gICAgICAgIH0sXG4gICAgICB9IDogbnVsbCxcbiAgICAgIG1ldGE6IGlkLFxuICAgICAgYW5jaG9yOiB7XG4gICAgICAgIGhyZWY6IGAke3RoaXMuYmFzZVBhdGh9LyR7aWR9LyR7aGVscGVycy5zbHVnaWZ5KGxhYmVsKX1gLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG59XG4iXX0=