import { __extends, __read } from "tslib";
import { EventHandler } from '@n7-frontend/core';
import { first, filter, withLatestFrom } from 'rxjs/operators';
import { ReplaySubject } from 'rxjs';
var AwTreeEH = /** @class */ (function (_super) {
    __extends(AwTreeEH, _super);
    function AwTreeEH() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.targetOffset = new ReplaySubject();
        _this.targetIsOpen = false;
        _this.scrollOpenedIntoView = function () {
            _this.dataSource.out$
                .pipe(filter(function (data) { return !!data; }), first(), withLatestFrom(_this.targetOffset)).subscribe(function (_a) {
                var _b = __read(_a, 2), offset = _b[1];
                setTimeout(function () {
                    var wrapperEl = document.querySelector('.aw-scheda__tree-content');
                    var expandedNode = document.getElementsByClassName('n7-tree__item is-expanded');
                    var lastExpandedNode = expandedNode.length
                        ? expandedNode[expandedNode.length - 1]
                        : null;
                    if (lastExpandedNode) {
                        var scrollTreeEl = document.querySelector('.n7-tree');
                        var wrapperElRect = wrapperEl.getBoundingClientRect();
                        var offsetToAdjust = offset - wrapperElRect.top;
                        scrollTreeEl.style.marginBottom = '1000px';
                        lastExpandedNode.scrollIntoView();
                        wrapperEl.scrollTop -= offsetToAdjust;
                        window.scrollTo(0, 0);
                        scrollTreeEl.style.marginBottom = '0px';
                    }
                }, 200);
            });
        };
        _this.scrollLeafIntoView = function () {
            setTimeout(function () {
                var treeNode = document.querySelector('div.aw-scheda__tree');
                var leafNode = treeNode.querySelector('.is-active .n7-tree__item-contents');
                if (leafNode && !_this.isInViewport(leafNode)) {
                    leafNode.scrollIntoView();
                    window.scrollTo(0, 0);
                    if (!_this.isInViewport(leafNode)) {
                        _this.scrollLeafIntoView();
                    }
                }
            });
        };
        _this.isInViewport = function (elem) {
            var bounding = elem.getBoundingClientRect();
            return (bounding.top >= 0
                && bounding.left >= 0
                && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
                && bounding.right <= (window.innerWidth || document.documentElement.clientWidth));
        };
        return _this;
    }
    AwTreeEH.prototype.listen = function () {
        var _this = this;
        this.innerEvents$.subscribe(function (_a) {
            var type = _a.type, payload = _a.payload;
            switch (type) {
                case 'aw-tree.click':
                    if (payload.source === 'toggle') {
                        setTimeout(function () {
                            _this.dataSource.build(payload.id);
                            if (_this.targetIsOpen) {
                                _this.scrollOpenedIntoView();
                            }
                        });
                    }
                    break;
                default:
                    break;
            }
        });
        this.outerEvents$.subscribe(function (_a) {
            var type = _a.type, payload = _a.payload;
            switch (type) {
                case 'aw-sidebar-header.click':
                    _this.dataSource.toggleSidebar();
                    break;
                case 'aw-scheda-layout.selectItem':
                    _this.dataSource.build(payload);
                    break;
                case 'aw-scheda-layout.navigationresponse':
                    {
                        if (payload.currentItem) {
                            _this.dataSource.setActive(payload.currentItem);
                        }
                        var currentId = payload.currentItem || payload.tree.id;
                        _this.dataSource.load(payload);
                        _this.dataSource.build(currentId);
                    }
                    break;
                case 'aw-scheda-layout.routechanged':
                    // has output (not first load)
                    if (_this.dataSource.output) {
                        _this.dataSource.build(payload);
                        _this.dataSource.setActive(payload);
                        _this.dataSource.highlightActive();
                        _this.scrollLeafIntoView();
                    }
                    break;
                case 'aw-scheda-layout.viewleaf':
                    _this.dataSource.out$
                        .pipe(filter(function (data) { return !!data; }), first()).subscribe(function () {
                        _this.scrollLeafIntoView();
                    });
                    break;
                case 'aw-scheda-layout.treeposition':
                    {
                        var target = payload.target;
                        var targetRect = target.getBoundingClientRect();
                        _this.targetIsOpen = target.className.indexOf('n7-icon-angle-right') !== -1;
                        _this.targetOffset.next(targetRect.top);
                    }
                    break;
                default:
                    break;
            }
        });
    };
    return AwTreeEH;
}(EventHandler));
export { AwTreeEH };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5laC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9ldmVudC1oYW5kbGVycy90cmVlLmVoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVyQztJQUE4Qiw0QkFBWTtJQUExQztRQUFBLHFFQXNIQztRQXJIUyxrQkFBWSxHQUFHLElBQUksYUFBYSxFQUFFLENBQUM7UUFFbkMsa0JBQVksR0FBRyxLQUFLLENBQUM7UUFpRXJCLDBCQUFvQixHQUFHO1lBQzdCLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSTtpQkFDakIsSUFBSSxDQUNILE1BQU0sQ0FBQyxVQUFDLElBQUksSUFBSyxPQUFBLENBQUMsQ0FBQyxJQUFJLEVBQU4sQ0FBTSxDQUFDLEVBQ3hCLEtBQUssRUFBRSxFQUNQLGNBQWMsQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLENBQ2xDLENBQUMsU0FBUyxDQUFDLFVBQUMsRUFBVTtvQkFBVixrQkFBVSxFQUFQLGNBQU07Z0JBQ3BCLFVBQVUsQ0FBQztvQkFDVCxJQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLDBCQUEwQixDQUFnQixDQUFDO29CQUNwRixJQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsc0JBQXNCLENBQUMsMkJBQTJCLENBQUMsQ0FBQztvQkFDbEYsSUFBTSxnQkFBZ0IsR0FBRyxZQUFZLENBQUMsTUFBTTt3QkFDMUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQzt3QkFDdkMsQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFD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Q0FBQztvQkFDTCxNQUFNO2dCQUNSLEtBQUssK0JBQStCO29CQUFFO3dCQUM1QixJQUFBLHVCQUFNLENBQWE7d0JBQzNCLElBQU0sVUFBVSxHQUFHLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO3dCQUNsRCxLQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7d0JBQzNFLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztxQkFDeEM7b0JBQUMsTUFBTTtnQkFDUjtvQkFDRSxNQUFNO2FBQ1Q7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFvREgsZUFBQztBQUFELENBQUMsQUF0SEQsQ0FBOEIsWUFBWSxHQXNIekMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBmaXJzdCwgZmlsdGVyLCB3aXRoTGF0ZXN0RnJvbSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFJlcGxheVN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGNsYXNzIEF3VHJlZUVIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcbiAgcHJpdmF0ZSB0YXJnZXRPZmZzZXQgPSBuZXcgUmVwbGF5U3ViamVjdCgpO1xuXG4gIHByaXZhdGUgdGFyZ2V0SXNPcGVuID0gZmFsc2U7XG5cbiAgcHVibGljIGxpc3RlbigpIHtcbiAgICB0aGlzLmlubmVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnYXctdHJlZS5jbGljayc6XG4gICAgICAgICAgaWYgKHBheWxvYWQuc291cmNlID09PSAndG9nZ2xlJykge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5idWlsZChwYXlsb2FkLmlkKTtcbiAgICAgICAgICAgICAgaWYgKHRoaXMudGFyZ2V0SXNPcGVuKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxPcGVuZWRJbnRvVmlldygpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLm91dGVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnYXctc2lkZWJhci1oZWFkZXIuY2xpY2snOlxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS50b2dnbGVTaWRlYmFyKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LXNjaGVkYS1sYXlvdXQuc2VsZWN0SXRlbSc6XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLmJ1aWxkKHBheWxvYWQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1zY2hlZGEtbGF5b3V0Lm5hdmlnYXRpb25yZXNwb25zZSc6IHtcbiAgICAgICAgICBpZiAocGF5bG9hZC5jdXJyZW50SXRlbSkge1xuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnNldEFjdGl2ZShwYXlsb2FkLmN1cnJlbnRJdGVtKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgY3VycmVudElkID0gcGF5bG9hZC5jdXJyZW50SXRlbSB8fCBwYXlsb2FkLnRyZWUuaWQ7XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLmxvYWQocGF5bG9hZCk7XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLmJ1aWxkKGN1cnJlbnRJZCk7XG4gICAgICAgIH0gYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LXNjaGVkYS1sYXlvdXQucm91dGVjaGFuZ2VkJzpcbiAgICAgICAgICAvLyBoYXMgb3V0cHV0IChub3QgZmlyc3QgbG9hZClcbiAgICAgICAgICBpZiAodGhpcy5kYXRhU291cmNlLm91dHB1dCkge1xuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLmJ1aWxkKHBheWxvYWQpO1xuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnNldEFjdGl2ZShwYXlsb2FkKTtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5oaWdobGlnaHRBY3RpdmUoKTtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsTGVhZkludG9WaWV3KCk7XG4gICAgICAgICAgfSBicmVhaztcbiAgICAgICAgY2FzZSAnYXctc2NoZWRhLWxheW91dC52aWV3bGVhZic6XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLm91dCRcbiAgICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgICBmaWx0ZXIoKGRhdGEpID0+ICEhZGF0YSksXG4gICAgICAgICAgICAgIGZpcnN0KClcbiAgICAgICAgICAgICkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5zY3JvbGxMZWFmSW50b1ZpZXcoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1zY2hlZGEtbGF5b3V0LnRyZWVwb3NpdGlvbic6IHtcbiAgICAgICAgICBjb25zdCB7IHRhcmdldCB9ID0gcGF5bG9hZDtcbiAgICAgICAgICBjb25zdCB0YXJnZXRSZWN0ID0gdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgIHRoaXMudGFyZ2V0SXNPcGVuID0gdGFyZ2V0LmNsYXNzTmFtZS5pbmRleE9mKCduNy1pY29uLWFuZ2xlLXJpZ2h0JykgIT09IC0xO1xuICAgICAgICAgIHRoaXMudGFyZ2V0T2Zmc2V0Lm5leHQodGFyZ2V0UmVjdC50b3ApO1xuICAgICAgICB9IGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBzY3JvbGxPcGVuZWRJbnRvVmlldyA9ICgpID0+IHtcbiAgICB0aGlzLmRhdGFTb3VyY2Uub3V0JFxuICAgICAgLnBpcGUoXG4gICAgICAgIGZpbHRlcigoZGF0YSkgPT4gISFkYXRhKSxcbiAgICAgICAgZmlyc3QoKSxcbiAgICAgICAgd2l0aExhdGVzdEZyb20odGhpcy50YXJnZXRPZmZzZXQpLFxuICAgICAgKS5zdWJzY3JpYmUoKFssIG9mZnNldF0pID0+IHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgY29uc3Qgd3JhcHBlckVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmF3LXNjaGVkYV9fdHJlZS1jb250ZW50JykgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgICAgY29uc3QgZXhwYW5kZWROb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbjctdHJlZV9faXRlbSBpcy1leHBhbmRlZCcpO1xuICAgICAgICAgIGNvbnN0IGxhc3RFeHBhbmRlZE5vZGUgPSBleHBhbmRlZE5vZGUubGVuZ3RoXG4gICAgICAgICAgICA/IGV4cGFuZGVkTm9kZVtleHBhbmRlZE5vZGUubGVuZ3RoIC0gMV1cbiAgICAgICAgICAgIDogbnVsbDtcbiAgICAgICAgICBpZiAobGFzdEV4cGFuZGVkTm9kZSkge1xuICAgICAgICAgICAgY29uc3Qgc2Nyb2xsVHJlZUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm43LXRyZWUnKSBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgICAgIGNvbnN0IHdyYXBwZXJFbFJlY3QgPSB3cmFwcGVyRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICBjb25zdCBvZmZzZXRUb0FkanVzdCA9IG9mZnNldCAtIHdyYXBwZXJFbFJlY3QudG9wO1xuICAgICAgICAgICAgc2Nyb2xsVHJlZUVsLnN0eWxlLm1hcmdpbkJvdHRvbSA9ICcxMDAwcHgnO1xuICAgICAgICAgICAgbGFzdEV4cGFuZGVkTm9kZS5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICAgICAgd3JhcHBlckVsLnNjcm9sbFRvcCAtPSBvZmZzZXRUb0FkanVzdDtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICAgICAgICAgIHNjcm9sbFRyZWVFbC5zdHlsZS5tYXJnaW5Cb3R0b20gPSAnMHB4JztcbiAgICAgICAgICB9XG4gICAgICAgIH0sIDIwMCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgc2Nyb2xsTGVhZkludG9WaWV3ID0gKCkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc3QgdHJlZU5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYuYXctc2NoZWRhX190cmVlJyk7XG4gICAgICBjb25zdCBsZWFmTm9kZSA9IHRyZWVOb2RlLnF1ZXJ5U2VsZWN0b3IoJy5pcy1hY3RpdmUgLm43LXRyZWVfX2l0ZW0tY29udGVudHMnKSBhcyBIVE1MRWxlbWVudDtcbiAgICAgIGlmIChsZWFmTm9kZSAmJiAhdGhpcy5pc0luVmlld3BvcnQobGVhZk5vZGUpKSB7XG4gICAgICAgIGxlYWZOb2RlLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICAgICAgaWYgKCF0aGlzLmlzSW5WaWV3cG9ydChsZWFmTm9kZSkpIHtcbiAgICAgICAgICB0aGlzLnNjcm9sbExlYWZJbnRvVmlldygpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgcHJpdmF0ZSBpc0luVmlld3BvcnQgPSAoZWxlbSkgPT4ge1xuICAgIGNvbnN0IGJvdW5kaW5nID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICByZXR1cm4gKFxuICAgICAgYm91bmRpbmcudG9wID49IDBcbiAgICAgICYmIGJvdW5kaW5nLmxlZnQgPj0gMFxuICAgICAgJiYgYm91bmRpbmcuYm90dG9tIDw9ICh3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodClcbiAgICAgICYmIGJvdW5kaW5nLnJpZ2h0IDw9ICh3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgpXG4gICAgKTtcbiAgfTtcbn1cbiJdfQ==