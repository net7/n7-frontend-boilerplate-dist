import { __extends, __read } from "tslib";
import { DataSource } from '@n7-frontend/core';
import helpers from '../../common/helpers';
var AwTreeDS = /** @class */ (function (_super) {
    __extends(AwTreeDS, _super);
    function AwTreeDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.transform = function (data) { return data; };
        _this._getCachedData = function () { return AwTreeDS.dataCache[_this.rootId]; };
        _this._normalize = function (_a) {
            var id = _a.id, label = _a.label, icon = _a.icon, img = _a.img, branches = _a.branches, type = _a.document_type, classification = _a.document_classification;
            var hasBranches = !!(Array.isArray(branches) && branches.length);
            _this._getCachedData().flatData[id] = {
                id: id, label: label, icon: icon, img: img, hasBranches: hasBranches, type: type, classification: classification
            };
            if (hasBranches) {
                branches.forEach(function (data) {
                    _this._getCachedData().flatIds.push([id, data.id]);
                    _this._normalize(data);
                });
            }
        };
        _this._getParent = function (id) { return _this._getCachedData().flatIds
            .filter(function (_a) {
            var _b = __read(_a, 2), childId = _b[1];
            return childId === id;
        })
            .map(function (_a) {
            var _b = __read(_a, 1), parentId = _b[0];
            return parentId;
        })[0] || null; };
        _this._getTreePath = function (id) {
            var ids = [id];
            var currentId = id;
            while (currentId) {
                var parentId = _this._getParent(currentId);
                if (parentId) {
                    ids.push(parentId);
                }
                currentId = parentId;
            }
            return ids.reverse();
        };
        _this._getTree = function (path) {
            var tree = {};
            var counter = 0;
            var loadItems = function (id, source) {
                counter += 1;
                var nextParent = path[counter];
                source.items = [];
                _this._getCachedData().flatIds
                    .filter(function (_a) {
                    var _b = __read(_a, 1), parentId = _b[0];
                    return parentId === id;
                })
                    .forEach(function (_a, index) {
                    var _b = __read(_a, 2), childId = _b[1];
                    var inPath = childId === nextParent;
                    var item = _this._getTreeItem(childId, inPath);
                    source.items.push(item);
                    if (inPath) {
                        loadItems(childId, source.items[index]);
                    }
                });
            };
            // init
            loadItems(path[0], tree);
            return tree;
        };
        _this._getTreeItem = function (id, inPath) {
            var _a = _this._getCachedData().flatData[id], label = _a.label, img = _a.img, hasBranches = _a.hasBranches, type = _a.type, classification = _a.classification;
            var defaultIcon = (_this.options.config[type] || { icon: null }).icon;
            var specificIcon = '';
            var lastSegment = /.*\.(\w+)$/;
            if (classification && lastSegment.test(classification)) {
                var classID = classification
                    .match(lastSegment)[1] // get classification characters
                    .toUpperCase(); // normalize
                specificIcon = _this.options.config[type].classifications[classID].icon;
            }
            var arrowIcons = inPath ? 'n7-icon-angle-down' : 'n7-icon-angle-right';
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
        };
        return _this;
    }
    AwTreeDS.prototype.load = function (data) {
        var tree = data.tree, basePath = data.basePath;
        this.rootId = tree.id;
        this.basePath = basePath;
        // save in cache
        if (!AwTreeDS.dataCache[this.rootId]) {
            AwTreeDS.dataCache[this.rootId] = { flatIds: [], flatData: {} };
            this._normalize(tree);
        }
    };
    AwTreeDS.prototype.build = function (id) {
        var path = this._getTreePath(id);
        var oldPath = this._getTreePath(this.currentId);
        var oldPathIndex = oldPath.indexOf(id);
        if (oldPathIndex > 0) {
            path.splice(oldPathIndex);
            this.currentId = null;
        }
        else if (this.currentId === id) {
            var idIndex = path.indexOf(this.currentId);
            path.splice(idIndex);
            this.currentId = null;
        }
        else {
            this.currentId = id;
        }
        var tree = this._getTree(path);
        this.update(tree);
    };
    AwTreeDS.prototype.setActive = function (id) {
        this.activeId = id;
    };
    AwTreeDS.prototype.highlightActive = function () {
        var _this = this;
        var control = function (items) {
            items.forEach(function (item) {
                var founded = item.meta === _this.activeId;
                var hasActive = item.classes.indexOf('is-active') !== -1;
                // clear is-active
                if (hasActive && !founded) {
                    var currentClasses = item.classes.split(' ');
                    currentClasses.splice(currentClasses.indexOf('is-active'), 1);
                    item.classes = currentClasses.join(' ');
                }
                if (founded) {
                    var currentClasses = item.classes.split(' ');
                    if (currentClasses.indexOf('is-active') === -1) {
                        currentClasses.push('is-active');
                    }
                    item.classes = currentClasses.join(' ');
                }
                if (Array.isArray(item.items) && item.items.length) {
                    control(item.items);
                }
            });
        };
        control(this.output.items);
    };
    AwTreeDS.dataCache = {};
    return AwTreeDS;
}(DataSource));
export { AwTreeDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvdHJlZS5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sT0FBTyxNQUFNLHNCQUFzQixDQUFDO0FBRTNDO0lBQThCLDRCQUFVO0lBQXhDO1FBQUEscUVBZ0xDO1FBcktXLGVBQVMsR0FBRyxVQUFDLElBQUksSUFBSyxPQUFBLElBQUksRUFBSixDQUFJLENBQUM7UUFrRTdCLG9CQUFjLEdBQUcsY0FBTSxPQUFBLFFBQVEsQ0FBQyxTQUFTLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxFQUEvQixDQUErQixDQUFBO1FBRXRELGdCQUFVLEdBQUcsVUFBQyxFQUVyQjtnQkFEQyxVQUFFLEVBQUUsZ0JBQUssRUFBRSxjQUFJLEVBQUUsWUFBRyxFQUFFLHNCQUFRLEVBQUUsdUJBQW1CLEVBQUUsMkNBQXVDO1lBRTVGLElBQU0sV0FBVyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ25FLEtBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEdBQUc7Z0JBQ25DLEVBQUUsSUFBQSxFQUFFLEtBQUssT0FBQSxFQUFFLElBQUksTUFBQSxFQUFFLEdBQUcsS0FBQSxFQUFFLFdBQVcsYUFBQSxFQUFFLElBQUksTUFBQSxFQUFFLGNBQWMsZ0JBQUE7YUFDeEQsQ0FBQztZQUNGLElBQUksV0FBVyxFQUFFO2dCQUNmLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJO29CQUNwQixLQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLEVB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LENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUMvQyxJQUFJLGNBQWMsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7d0JBQzlDLGNBQWMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7cUJBQ2xDO29CQUNELElBQUksQ0FBQyxPQUFPLEdBQUcsY0FBYyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDekM7Z0JBRUQsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTtvQkFDbEQsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDckI7WUFDSCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQztRQUNGLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUExRU0sa0JBQVMsR0FBUSxFQUFFLENBQUM7SUErSzdCLGVBQUM7Q0FBQSxBQWhMRCxDQUE4QixVQUFVLEdBZ0x2QztTQWhMWSxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuaW1wb3J0IGhlbHBlcnMgZnJvbSAnLi4vLi4vY29tbW9uL2hlbHBlcnMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEF3VHJlZURTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XHJcbiAgc3RhdGljIGRhdGFDYWNoZTogYW55ID0ge307XHJcblxyXG4gIHByaXZhdGUgYmFzZVBhdGg6IHN0cmluZztcclxuXHJcbiAgcHJpdmF0ZSByb290SWQ6IHN0cmluZztcclxuXHJcbiAgcHJpdmF0ZSBjdXJyZW50SWQ6IHN0cmluZztcclxuXHJcbiAgcHJpdmF0ZSBhY3RpdmVJZDogc3RyaW5nO1xyXG5cclxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtID0gKGRhdGEpID0+IGRhdGE7XHJcblxyXG4gIHB1YmxpYyBsb2FkKGRhdGEpIHtcclxuICAgIGNvbnN0IHsgdHJlZSwgYmFzZVBhdGggfSA9IGRhdGE7XHJcbiAgICB0aGlzLnJvb3RJZCA9IHRyZWUuaWQ7XHJcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGg7XHJcbiAgICAvLyBzYXZlIGluIGNhY2hlXHJcbiAgICBpZiAoIUF3VHJlZURTLmRhdGFDYWNoZVt0aGlzLnJvb3RJZF0pIHtcclxuICAgICAgQXdUcmVlRFMuZGF0YUNhY2hlW3RoaXMucm9vdElkXSA9IHsgZmxhdElkczogW10sIGZsYXREYXRhOiB7fSB9O1xyXG4gICAgICB0aGlzLl9ub3JtYWxpemUodHJlZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYnVpbGQoaWQpIHtcclxuICAgIGNvbnN0IHBhdGggPSB0aGlzLl9nZXRUcmVlUGF0aChpZCk7XHJcbiAgICBjb25zdCBvbGRQYXRoID0gdGhpcy5fZ2V0VHJlZVBhdGgodGhpcy5jdXJyZW50SWQpO1xyXG4gICAgY29uc3Qgb2xkUGF0aEluZGV4ID0gb2xkUGF0aC5pbmRleE9mKGlkKTtcclxuXHJcbiAgICBpZiAob2xkUGF0aEluZGV4ID4gMCkge1xyXG4gICAgICBwYXRoLnNwbGljZShvbGRQYXRoSW5kZXgpO1xyXG4gICAgICB0aGlzLmN1cnJlbnRJZCA9IG51bGw7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuY3VycmVudElkID09PSBpZCkge1xyXG4gICAgICBjb25zdCBpZEluZGV4ID0gcGF0aC5pbmRleE9mKHRoaXMuY3VycmVudElkKTtcclxuICAgICAgcGF0aC5zcGxpY2UoaWRJbmRleCk7XHJcbiAgICAgIHRoaXMuY3VycmVudElkID0gbnVsbDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuY3VycmVudElkID0gaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdHJlZTogYW55ID0gdGhpcy5fZ2V0VHJlZShwYXRoKTtcclxuICAgIHRoaXMudXBkYXRlKHRyZWUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldEFjdGl2ZShpZCkge1xyXG4gICAgdGhpcy5hY3RpdmVJZCA9IGlkO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGhpZ2hsaWdodEFjdGl2ZSgpIHtcclxuICAgIGNvbnN0IGNvbnRyb2wgPSAoaXRlbXMpID0+IHtcclxuICAgICAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZvdW5kZWQgPSBpdGVtLm1ldGEgPT09IHRoaXMuYWN0aXZlSWQ7XHJcbiAgICAgICAgY29uc3QgaGFzQWN0aXZlID0gaXRlbS5jbGFzc2VzLmluZGV4T2YoJ2lzLWFjdGl2ZScpICE9PSAtMTtcclxuXHJcbiAgICAgICAgLy8gY2xlYXIgaXMtYWN0aXZlXHJcbiAgICAgICAgaWYgKGhhc0FjdGl2ZSAmJiAhZm91bmRlZCkge1xyXG4gICAgICAgICAgY29uc3QgY3VycmVudENsYXNzZXMgPSBpdGVtLmNsYXNzZXMuc3BsaXQoJyAnKTtcclxuICAgICAgICAgIGN1cnJlbnRDbGFzc2VzLnNwbGljZShjdXJyZW50Q2xhc3Nlcy5pbmRleE9mKCdpcy1hY3RpdmUnKSwgMSk7XHJcbiAgICAgICAgICBpdGVtLmNsYXNzZXMgPSBjdXJyZW50Q2xhc3Nlcy5qb2luKCcgJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZm91bmRlZCkge1xyXG4gICAgICAgICAgY29uc3QgY3VycmVudENsYXNzZXMgPSBpdGVtLmNsYXNzZXMuc3BsaXQoJyAnKTtcclxuICAgICAgICAgIGlmIChjdXJyZW50Q2xhc3Nlcy5pbmRleE9mKCdpcy1hY3RpdmUnKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgY3VycmVudENsYXNzZXMucHVzaCgnaXMtYWN0aXZlJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpdGVtLmNsYXNzZXMgPSBjdXJyZW50Q2xhc3Nlcy5qb2luKCcgJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShpdGVtLml0ZW1zKSAmJiBpdGVtLml0ZW1zLmxlbmd0aCkge1xyXG4gICAgICAgICAgY29udHJvbChpdGVtLml0ZW1zKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIGNvbnRyb2wodGhpcy5vdXRwdXQuaXRlbXMpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfZ2V0Q2FjaGVkRGF0YSA9ICgpID0+IEF3VHJlZURTLmRhdGFDYWNoZVt0aGlzLnJvb3RJZF1cclxuXHJcbiAgcHJpdmF0ZSBfbm9ybWFsaXplID0gKHtcclxuICAgIGlkLCBsYWJlbCwgaWNvbiwgaW1nLCBicmFuY2hlcywgZG9jdW1lbnRfdHlwZTogdHlwZSwgZG9jdW1lbnRfY2xhc3NpZmljYXRpb246IGNsYXNzaWZpY2F0aW9uXHJcbiAgfSkgPT4ge1xyXG4gICAgY29uc3QgaGFzQnJhbmNoZXMgPSAhIShBcnJheS5pc0FycmF5KGJyYW5jaGVzKSAmJiBicmFuY2hlcy5sZW5ndGgpO1xyXG4gICAgdGhpcy5fZ2V0Q2FjaGVkRGF0YSgpLmZsYXREYXRhW2lkXSA9IHtcclxuICAgICAgaWQsIGxhYmVsLCBpY29uLCBpbWcsIGhhc0JyYW5jaGVzLCB0eXBlLCBjbGFzc2lmaWNhdGlvblxyXG4gICAgfTtcclxuICAgIGlmIChoYXNCcmFuY2hlcykge1xyXG4gICAgICBicmFuY2hlcy5mb3JFYWNoKChkYXRhKSA9PiB7XHJcbiAgICAgICAgdGhpcy5fZ2V0Q2FjaGVkRGF0YSgpLmZsYXRJZHMucHVzaChbaWQsIGRhdGEuaWRdKTtcclxuICAgICAgICB0aGlzLl9ub3JtYWxpemUoZGF0YSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfZ2V0UGFyZW50ID0gKGlkKSA9PiB0aGlzLl9nZXRDYWNoZWREYXRhKCkuZmxhdElkc1xyXG4gICAgLmZpbHRlcigoWywgY2hpbGRJZF0pID0+IGNoaWxkSWQgPT09IGlkKVxyXG4gICAgLm1hcCgoW3BhcmVudElkXSkgPT4gcGFyZW50SWQpWzBdIHx8IG51bGxcclxuXHJcbiAgcHJpdmF0ZSBfZ2V0VHJlZVBhdGggPSAoaWQpID0+IHtcclxuICAgIGNvbnN0IGlkcyA9IFtpZF07XHJcbiAgICBsZXQgY3VycmVudElkID0gaWQ7XHJcbiAgICB3aGlsZSAoY3VycmVudElkKSB7XHJcbiAgICAgIGNvbnN0IHBhcmVudElkID0gdGhpcy5fZ2V0UGFyZW50KGN1cnJlbnRJZCk7XHJcbiAgICAgIGlmIChwYXJlbnRJZCkge1xyXG4gICAgICAgIGlkcy5wdXNoKHBhcmVudElkKTtcclxuICAgICAgfVxyXG4gICAgICBjdXJyZW50SWQgPSBwYXJlbnRJZDtcclxuICAgIH1cclxuICAgIHJldHVybiBpZHMucmV2ZXJzZSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfZ2V0VHJlZSA9IChwYXRoKSA9PiB7XHJcbiAgICBjb25zdCB0cmVlID0ge307XHJcbiAgICBsZXQgY291bnRlciA9IDA7XHJcblxyXG4gICAgY29uc3QgbG9hZEl0ZW1zID0gKGlkLCBzb3VyY2UpID0+IHtcclxuICAgICAgY291bnRlciArPSAxO1xyXG4gICAgICBjb25zdCBuZXh0UGFyZW50ID0gcGF0aFtjb3VudGVyXTtcclxuICAgICAgc291cmNlLml0ZW1zID0gW107XHJcblxyXG4gICAgICB0aGlzLl9nZXRDYWNoZWREYXRhKCkuZmxhdElkc1xyXG4gICAgICAgIC5maWx0ZXIoKFtwYXJlbnRJZF0pID0+IHBhcmVudElkID09PSBpZClcclxuICAgICAgICAuZm9yRWFjaCgoWywgY2hpbGRJZF0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBpblBhdGggPSBjaGlsZElkID09PSBuZXh0UGFyZW50O1xyXG4gICAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMuX2dldFRyZWVJdGVtKGNoaWxkSWQsIGluUGF0aCk7XHJcbiAgICAgICAgICBzb3VyY2UuaXRlbXMucHVzaChpdGVtKTtcclxuICAgICAgICAgIGlmIChpblBhdGgpIHtcclxuICAgICAgICAgICAgbG9hZEl0ZW1zKGNoaWxkSWQsIHNvdXJjZS5pdGVtc1tpbmRleF0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBpbml0XHJcbiAgICBsb2FkSXRlbXMocGF0aFswXSwgdHJlZSk7XHJcbiAgICByZXR1cm4gdHJlZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2dldFRyZWVJdGVtID0gKGlkLCBpblBhdGgpID0+IHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgbGFiZWwsIGltZywgaGFzQnJhbmNoZXMsIHR5cGUsIGNsYXNzaWZpY2F0aW9uXHJcbiAgICB9ID0gdGhpcy5fZ2V0Q2FjaGVkRGF0YSgpLmZsYXREYXRhW2lkXTtcclxuICAgIGNvbnN0IGRlZmF1bHRJY29uID0gKHRoaXMub3B0aW9ucy5jb25maWdbdHlwZV0gfHwgeyBpY29uOiBudWxsIH0pLmljb247XHJcbiAgICBsZXQgc3BlY2lmaWNJY29uID0gJyc7XHJcbiAgICBjb25zdCBsYXN0U2VnbWVudCA9IC8uKlxcLihcXHcrKSQvO1xyXG4gICAgaWYgKGNsYXNzaWZpY2F0aW9uICYmIGxhc3RTZWdtZW50LnRlc3QoY2xhc3NpZmljYXRpb24pKSB7XHJcbiAgICAgIGNvbnN0IGNsYXNzSUQgPSBjbGFzc2lmaWNhdGlvblxyXG4gICAgICAgIC5tYXRjaChsYXN0U2VnbWVudClbMV0gLy8gZ2V0IGNsYXNzaWZpY2F0aW9uIGNoYXJhY3RlcnNcclxuICAgICAgICAudG9VcHBlckNhc2UoKTsgLy8gbm9ybWFsaXplXHJcbiAgICAgIHNwZWNpZmljSWNvbiA9IHRoaXMub3B0aW9ucy5jb25maWdbdHlwZV0uY2xhc3NpZmljYXRpb25zW2NsYXNzSURdLmljb247XHJcbiAgICB9XHJcbiAgICBjb25zdCBhcnJvd0ljb25zID0gaW5QYXRoID8gJ243LWljb24tYW5nbGUtZG93bicgOiAnbjctaWNvbi1hbmdsZS1yaWdodCc7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gW107XHJcbiAgICBpZiAoaW5QYXRoKSB7XHJcbiAgICAgIGNsYXNzZXMucHVzaCgnaXMtZXhwYW5kZWQnKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmFjdGl2ZUlkID09PSBpZCkge1xyXG4gICAgICBjbGFzc2VzLnB1c2goJ2lzLWFjdGl2ZScpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgY2xhc3NlczogY2xhc3Nlcy5qb2luKCcgJyksXHJcbiAgICAgIHRleHQ6IGxhYmVsIHx8IG51bGwsXHJcbiAgICAgIGltZzogaW1nIHx8IG51bGwsXHJcbiAgICAgIGljb246IChzcGVjaWZpY0ljb24gfHwgZGVmYXVsdEljb24pLFxyXG4gICAgICB0b2dnbGU6IGhhc0JyYW5jaGVzID8ge1xyXG4gICAgICAgIGljb246IGFycm93SWNvbnMsXHJcbiAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgc291cmNlOiAndG9nZ2xlJyxcclxuICAgICAgICAgIGlkLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0gOiBudWxsLFxyXG4gICAgICBtZXRhOiBpZCxcclxuICAgICAgYW5jaG9yOiB7XHJcbiAgICAgICAgaHJlZjogYCR7dGhpcy5iYXNlUGF0aH0vJHtpZH0vJHtoZWxwZXJzLnNsdWdpZnkobGFiZWwpfWAsXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=