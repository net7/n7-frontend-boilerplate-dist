import { DataSource } from '@n7-frontend/core';
import helpers from '../../common/helpers';
export class AwTreeDS extends DataSource {
    constructor() {
        super(...arguments);
        this.transform = (data) => data;
        this._getCachedData = () => AwTreeDS.dataCache[this.rootId];
        this._normalize = ({ id, label, icon, img, branches, document_type: type, document_classification: classification }) => {
            const hasBranches = !!(Array.isArray(branches) && branches.length);
            this._getCachedData().flatData[id] = {
                id, label, icon, img, hasBranches, type, classification
            };
            if (hasBranches) {
                branches.forEach((data) => {
                    this._getCachedData().flatIds.push([id, data.id]);
                    this._normalize(data);
                });
            }
        };
        this._getParent = (id) => this._getCachedData().flatIds
            .filter(([, childId]) => childId === id)
            .map(([parentId]) => parentId)[0] || null;
        this._getTreePath = (id) => {
            const ids = [id];
            let currentId = id;
            while (currentId) {
                const parentId = this._getParent(currentId);
                if (parentId) {
                    ids.push(parentId);
                }
                currentId = parentId;
            }
            return ids.reverse();
        };
        this._getTree = (path) => {
            const tree = {};
            let counter = 0;
            const loadItems = (id, source) => {
                counter += 1;
                const nextParent = path[counter];
                source.items = [];
                this._getCachedData().flatIds
                    .filter(([parentId]) => parentId === id)
                    .forEach(([, childId], index) => {
                    const inPath = childId === nextParent;
                    const item = this._getTreeItem(childId, inPath);
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
        this._getTreeItem = (id, inPath) => {
            const { label, img, hasBranches, type, classification } = this._getCachedData().flatData[id];
            const defaultIcon = (this.options.config[type] || { icon: null }).icon;
            let specificIcon = '';
            const lastSegment = /.*\.(\w+)$/;
            if (classification && lastSegment.test(classification)) {
                const classID = classification
                    .match(lastSegment)[1] // get classification characters
                    .toUpperCase(); // normalize
                specificIcon = this.options.config[type].classifications[classID].icon;
            }
            const arrowIcons = inPath ? 'n7-icon-angle-down' : 'n7-icon-angle-right';
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
        };
    }
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
    build(id) {
        const path = this._getTreePath(id);
        const oldPath = this._getTreePath(this.currentId);
        const oldPathIndex = oldPath.indexOf(id);
        if (oldPathIndex > 0) {
            path.splice(oldPathIndex);
            this.currentId = null;
        }
        else if (this.currentId === id) {
            const idIndex = path.indexOf(this.currentId);
            path.splice(idIndex);
            this.currentId = null;
        }
        else {
            this.currentId = id;
        }
        const tree = this._getTree(path);
        this.update(tree);
    }
    setActive(id) {
        this.activeId = id;
    }
    highlightActive() {
        const control = (items) => {
            items.forEach((item) => {
                const founded = item.meta === this.activeId;
                const hasActive = item.classes.indexOf('is-active') !== -1;
                // clear is-active
                if (hasActive && !founded) {
                    const currentClasses = item.classes.split(' ');
                    currentClasses.splice(currentClasses.indexOf('is-active'), 1);
                    item.classes = currentClasses.join(' ');
                }
                if (founded) {
                    const currentClasses = item.classes.split(' ');
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
    }
}
AwTreeDS.dataCache = {};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5kcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL243LWJvaWxlcnBsYXRlLWxpYi9zcmMvbGliL2FyaWFubmEtd2ViL2RhdGEtc291cmNlcy90cmVlLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMvQyxPQUFPLE9BQU8sTUFBTSxzQkFBc0IsQ0FBQztBQUUzQyxNQUFNLE9BQU8sUUFBUyxTQUFRLFVBQVU7SUFBeEM7O1FBV1ksY0FBUyxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUM7UUFrRTdCLG1CQUFjLEdBQUcsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7UUFFdEQsZUFBVSxHQUFHLENBQUMsRUFDcEIsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLHVCQUF1QixFQUFFLGNBQWMsRUFDN0YsRUFBRSxFQUFFO1lBQ0gsTUFBTSxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbkUsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsR0FBRztnQkFDbkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsY0FBYzthQUN4RCxDQUFDO1lBQ0YsSUFBSSxXQUFXLEVBQUU7Z0JBQ2YsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO29CQUN4QixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxD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RUFBRTtvQkFDWCxNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDL0MsSUFBSSxjQUFjLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO3dCQUM5QyxjQUFjLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO3FCQUNsQztvQkFDRCxJQUFJLENBQUMsT0FBTyxHQUFHLGNBQWMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQ3pDO2dCQUVELElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7b0JBQ2xELE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ3JCO1lBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUM7UUFDRixPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QixDQUFDOztBQTFFTSxrQkFBUyxHQUFRLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcbmltcG9ydCBoZWxwZXJzIGZyb20gJy4uLy4uL2NvbW1vbi9oZWxwZXJzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBBd1RyZWVEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xyXG4gIHN0YXRpYyBkYXRhQ2FjaGU6IGFueSA9IHt9O1xyXG5cclxuICBwcml2YXRlIGJhc2VQYXRoOiBzdHJpbmc7XHJcblxyXG4gIHByaXZhdGUgcm9vdElkOiBzdHJpbmc7XHJcblxyXG4gIHByaXZhdGUgY3VycmVudElkOiBzdHJpbmc7XHJcblxyXG4gIHByaXZhdGUgYWN0aXZlSWQ6IHN0cmluZztcclxuXHJcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybSA9IChkYXRhKSA9PiBkYXRhO1xyXG5cclxuICBwdWJsaWMgbG9hZChkYXRhKSB7XHJcbiAgICBjb25zdCB7IHRyZWUsIGJhc2VQYXRoIH0gPSBkYXRhO1xyXG4gICAgdGhpcy5yb290SWQgPSB0cmVlLmlkO1xyXG4gICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoO1xyXG4gICAgLy8gc2F2ZSBpbiBjYWNoZVxyXG4gICAgaWYgKCFBd1RyZWVEUy5kYXRhQ2FjaGVbdGhpcy5yb290SWRdKSB7XHJcbiAgICAgIEF3VHJlZURTLmRhdGFDYWNoZVt0aGlzLnJvb3RJZF0gPSB7IGZsYXRJZHM6IFtdLCBmbGF0RGF0YToge30gfTtcclxuICAgICAgdGhpcy5fbm9ybWFsaXplKHRyZWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGJ1aWxkKGlkKSB7XHJcbiAgICBjb25zdCBwYXRoID0gdGhpcy5fZ2V0VHJlZVBhdGgoaWQpO1xyXG4gICAgY29uc3Qgb2xkUGF0aCA9IHRoaXMuX2dldFRyZWVQYXRoKHRoaXMuY3VycmVudElkKTtcclxuICAgIGNvbnN0IG9sZFBhdGhJbmRleCA9IG9sZFBhdGguaW5kZXhPZihpZCk7XHJcblxyXG4gICAgaWYgKG9sZFBhdGhJbmRleCA+IDApIHtcclxuICAgICAgcGF0aC5zcGxpY2Uob2xkUGF0aEluZGV4KTtcclxuICAgICAgdGhpcy5jdXJyZW50SWQgPSBudWxsO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmN1cnJlbnRJZCA9PT0gaWQpIHtcclxuICAgICAgY29uc3QgaWRJbmRleCA9IHBhdGguaW5kZXhPZih0aGlzLmN1cnJlbnRJZCk7XHJcbiAgICAgIHBhdGguc3BsaWNlKGlkSW5kZXgpO1xyXG4gICAgICB0aGlzLmN1cnJlbnRJZCA9IG51bGw7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmN1cnJlbnRJZCA9IGlkO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRyZWU6IGFueSA9IHRoaXMuX2dldFRyZWUocGF0aCk7XHJcbiAgICB0aGlzLnVwZGF0ZSh0cmVlKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRBY3RpdmUoaWQpIHtcclxuICAgIHRoaXMuYWN0aXZlSWQgPSBpZDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBoaWdobGlnaHRBY3RpdmUoKSB7XHJcbiAgICBjb25zdCBjb250cm9sID0gKGl0ZW1zKSA9PiB7XHJcbiAgICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICBjb25zdCBmb3VuZGVkID0gaXRlbS5tZXRhID09PSB0aGlzLmFjdGl2ZUlkO1xyXG4gICAgICAgIGNvbnN0IGhhc0FjdGl2ZSA9IGl0ZW0uY2xhc3Nlcy5pbmRleE9mKCdpcy1hY3RpdmUnKSAhPT0gLTE7XHJcblxyXG4gICAgICAgIC8vIGNsZWFyIGlzLWFjdGl2ZVxyXG4gICAgICAgIGlmIChoYXNBY3RpdmUgJiYgIWZvdW5kZWQpIHtcclxuICAgICAgICAgIGNvbnN0IGN1cnJlbnRDbGFzc2VzID0gaXRlbS5jbGFzc2VzLnNwbGl0KCcgJyk7XHJcbiAgICAgICAgICBjdXJyZW50Q2xhc3Nlcy5zcGxpY2UoY3VycmVudENsYXNzZXMuaW5kZXhPZignaXMtYWN0aXZlJyksIDEpO1xyXG4gICAgICAgICAgaXRlbS5jbGFzc2VzID0gY3VycmVudENsYXNzZXMuam9pbignICcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGZvdW5kZWQpIHtcclxuICAgICAgICAgIGNvbnN0IGN1cnJlbnRDbGFzc2VzID0gaXRlbS5jbGFzc2VzLnNwbGl0KCcgJyk7XHJcbiAgICAgICAgICBpZiAoY3VycmVudENsYXNzZXMuaW5kZXhPZignaXMtYWN0aXZlJykgPT09IC0xKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRDbGFzc2VzLnB1c2goJ2lzLWFjdGl2ZScpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaXRlbS5jbGFzc2VzID0gY3VycmVudENsYXNzZXMuam9pbignICcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoaXRlbS5pdGVtcykgJiYgaXRlbS5pdGVtcy5sZW5ndGgpIHtcclxuICAgICAgICAgIGNvbnRyb2woaXRlbS5pdGVtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH07XHJcbiAgICBjb250cm9sKHRoaXMub3V0cHV0Lml0ZW1zKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2dldENhY2hlZERhdGEgPSAoKSA9PiBBd1RyZWVEUy5kYXRhQ2FjaGVbdGhpcy5yb290SWRdXHJcblxyXG4gIHByaXZhdGUgX25vcm1hbGl6ZSA9ICh7XHJcbiAgICBpZCwgbGFiZWwsIGljb24sIGltZywgYnJhbmNoZXMsIGRvY3VtZW50X3R5cGU6IHR5cGUsIGRvY3VtZW50X2NsYXNzaWZpY2F0aW9uOiBjbGFzc2lmaWNhdGlvblxyXG4gIH0pID0+IHtcclxuICAgIGNvbnN0IGhhc0JyYW5jaGVzID0gISEoQXJyYXkuaXNBcnJheShicmFuY2hlcykgJiYgYnJhbmNoZXMubGVuZ3RoKTtcclxuICAgIHRoaXMuX2dldENhY2hlZERhdGEoKS5mbGF0RGF0YVtpZF0gPSB7XHJcbiAgICAgIGlkLCBsYWJlbCwgaWNvbiwgaW1nLCBoYXNCcmFuY2hlcywgdHlwZSwgY2xhc3NpZmljYXRpb25cclxuICAgIH07XHJcbiAgICBpZiAoaGFzQnJhbmNoZXMpIHtcclxuICAgICAgYnJhbmNoZXMuZm9yRWFjaCgoZGF0YSkgPT4ge1xyXG4gICAgICAgIHRoaXMuX2dldENhY2hlZERhdGEoKS5mbGF0SWRzLnB1c2goW2lkLCBkYXRhLmlkXSk7XHJcbiAgICAgICAgdGhpcy5fbm9ybWFsaXplKGRhdGEpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2dldFBhcmVudCA9IChpZCkgPT4gdGhpcy5fZ2V0Q2FjaGVkRGF0YSgpLmZsYXRJZHNcclxuICAgIC5maWx0ZXIoKFssIGNoaWxkSWRdKSA9PiBjaGlsZElkID09PSBpZClcclxuICAgIC5tYXAoKFtwYXJlbnRJZF0pID0+IHBhcmVudElkKVswXSB8fCBudWxsXHJcblxyXG4gIHByaXZhdGUgX2dldFRyZWVQYXRoID0gKGlkKSA9PiB7XHJcbiAgICBjb25zdCBpZHMgPSBbaWRdO1xyXG4gICAgbGV0IGN1cnJlbnRJZCA9IGlkO1xyXG4gICAgd2hpbGUgKGN1cnJlbnRJZCkge1xyXG4gICAgICBjb25zdCBwYXJlbnRJZCA9IHRoaXMuX2dldFBhcmVudChjdXJyZW50SWQpO1xyXG4gICAgICBpZiAocGFyZW50SWQpIHtcclxuICAgICAgICBpZHMucHVzaChwYXJlbnRJZCk7XHJcbiAgICAgIH1cclxuICAgICAgY3VycmVudElkID0gcGFyZW50SWQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaWRzLnJldmVyc2UoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2dldFRyZWUgPSAocGF0aCkgPT4ge1xyXG4gICAgY29uc3QgdHJlZSA9IHt9O1xyXG4gICAgbGV0IGNvdW50ZXIgPSAwO1xyXG5cclxuICAgIGNvbnN0IGxvYWRJdGVtcyA9IChpZCwgc291cmNlKSA9PiB7XHJcbiAgICAgIGNvdW50ZXIgKz0gMTtcclxuICAgICAgY29uc3QgbmV4dFBhcmVudCA9IHBhdGhbY291bnRlcl07XHJcbiAgICAgIHNvdXJjZS5pdGVtcyA9IFtdO1xyXG5cclxuICAgICAgdGhpcy5fZ2V0Q2FjaGVkRGF0YSgpLmZsYXRJZHNcclxuICAgICAgICAuZmlsdGVyKChbcGFyZW50SWRdKSA9PiBwYXJlbnRJZCA9PT0gaWQpXHJcbiAgICAgICAgLmZvckVhY2goKFssIGNoaWxkSWRdLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgaW5QYXRoID0gY2hpbGRJZCA9PT0gbmV4dFBhcmVudDtcclxuICAgICAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLl9nZXRUcmVlSXRlbShjaGlsZElkLCBpblBhdGgpO1xyXG4gICAgICAgICAgc291cmNlLml0ZW1zLnB1c2goaXRlbSk7XHJcbiAgICAgICAgICBpZiAoaW5QYXRoKSB7XHJcbiAgICAgICAgICAgIGxvYWRJdGVtcyhjaGlsZElkLCBzb3VyY2UuaXRlbXNbaW5kZXhdKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gaW5pdFxyXG4gICAgbG9hZEl0ZW1zKHBhdGhbMF0sIHRyZWUpO1xyXG4gICAgcmV0dXJuIHRyZWU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9nZXRUcmVlSXRlbSA9IChpZCwgaW5QYXRoKSA9PiB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIGxhYmVsLCBpbWcsIGhhc0JyYW5jaGVzLCB0eXBlLCBjbGFzc2lmaWNhdGlvblxyXG4gICAgfSA9IHRoaXMuX2dldENhY2hlZERhdGEoKS5mbGF0RGF0YVtpZF07XHJcbiAgICBjb25zdCBkZWZhdWx0SWNvbiA9ICh0aGlzLm9wdGlvbnMuY29uZmlnW3R5cGVdIHx8IHsgaWNvbjogbnVsbCB9KS5pY29uO1xyXG4gICAgbGV0IHNwZWNpZmljSWNvbiA9ICcnO1xyXG4gICAgY29uc3QgbGFzdFNlZ21lbnQgPSAvLipcXC4oXFx3KykkLztcclxuICAgIGlmIChjbGFzc2lmaWNhdGlvbiAmJiBsYXN0U2VnbWVudC50ZXN0KGNsYXNzaWZpY2F0aW9uKSkge1xyXG4gICAgICBjb25zdCBjbGFzc0lEID0gY2xhc3NpZmljYXRpb25cclxuICAgICAgICAubWF0Y2gobGFzdFNlZ21lbnQpWzFdIC8vIGdldCBjbGFzc2lmaWNhdGlvbiBjaGFyYWN0ZXJzXHJcbiAgICAgICAgLnRvVXBwZXJDYXNlKCk7IC8vIG5vcm1hbGl6ZVxyXG4gICAgICBzcGVjaWZpY0ljb24gPSB0aGlzLm9wdGlvbnMuY29uZmlnW3R5cGVdLmNsYXNzaWZpY2F0aW9uc1tjbGFzc0lEXS5pY29uO1xyXG4gICAgfVxyXG4gICAgY29uc3QgYXJyb3dJY29ucyA9IGluUGF0aCA/ICduNy1pY29uLWFuZ2xlLWRvd24nIDogJ243LWljb24tYW5nbGUtcmlnaHQnO1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IFtdO1xyXG4gICAgaWYgKGluUGF0aCkge1xyXG4gICAgICBjbGFzc2VzLnB1c2goJ2lzLWV4cGFuZGVkJyk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5hY3RpdmVJZCA9PT0gaWQpIHtcclxuICAgICAgY2xhc3Nlcy5wdXNoKCdpcy1hY3RpdmUnKTtcclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGNsYXNzZXM6IGNsYXNzZXMuam9pbignICcpLFxyXG4gICAgICB0ZXh0OiBsYWJlbCB8fCBudWxsLFxyXG4gICAgICBpbWc6IGltZyB8fCBudWxsLFxyXG4gICAgICBpY29uOiAoc3BlY2lmaWNJY29uIHx8IGRlZmF1bHRJY29uKSxcclxuICAgICAgdG9nZ2xlOiBoYXNCcmFuY2hlcyA/IHtcclxuICAgICAgICBpY29uOiBhcnJvd0ljb25zLFxyXG4gICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgIHNvdXJjZTogJ3RvZ2dsZScsXHJcbiAgICAgICAgICBpZCxcclxuICAgICAgICB9LFxyXG4gICAgICB9IDogbnVsbCxcclxuICAgICAgbWV0YTogaWQsXHJcbiAgICAgIGFuY2hvcjoge1xyXG4gICAgICAgIGhyZWY6IGAke3RoaXMuYmFzZVBhdGh9LyR7aWR9LyR7aGVscGVycy5zbHVnaWZ5KGxhYmVsKX1gLFxyXG4gICAgICB9LFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl19