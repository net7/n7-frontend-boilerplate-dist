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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5laC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9ldmVudC1oYW5kbGVycy90cmVlLmVoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVyQztJQUE4Qiw0QkFBWTtJQUExQztRQUFBLHFFQW1IQztRQWxIUyxrQkFBWSxHQUFHLElBQUksYUFBYSxFQUFFLENBQUM7UUFFbkMsa0JBQVksR0FBRyxLQUFLLENBQUM7UUE4RHJCLDBCQUFvQixHQUFHO1lBQzdCLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSTtpQkFDakIsSUFBSSxDQUNILE1BQU0sQ0FBQyxVQUFDLElBQUksSUFBSyxPQUFBLENBQUMsQ0FBQyxJQUFJLEVBQU4sQ0FBTSxDQUFDLEVBQ3hCLEtBQUssRUFBRSxFQUNQLGNBQWMsQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLENBQ2xDLENBQUMsU0FBUyxDQUFDLFVBQUMsRUFBVTtvQkFBVixrQkFBVSxFQUFQLGNBQU07Z0JBQ3BCLFVBQVUsQ0FBQztvQkFDVCxJQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLDBCQUEwQixDQUFnQixDQUFDO29CQUNwRixJQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsc0JBQXNCLENBQUMsMkJBQTJCLENBQUMsQ0FBQztvQkFDbEYsSUFBTSxnQkFBZ0IsR0FBRyxZQUFZLENBQUMsTUFBTTt3QkFDMUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQzt3QkFDdkMsQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFDVCxJQUFJLGdCQUFnQixFQUFFO3dCQUNwQixJQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBZ0IsQ0FBQzt3QkFDdkUsSUFBTSxhQUFhLEdBQUcsU0FBUyxDQUFDLHFCQUFxQixFQUFFLENBQUM7d0JBQ3hELElBQU0sY0FBYyxHQUFHLE1BQU0sR0FBRyxhQUFhLENBQUMsR0FBRyxDQUFDO3dCQUNsRCxZQUFZLENBQUMsS0FBSyxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUM7d0JBQzNDLGdCQUFnQixDQUFDLGNBQWMsRUFBRSxDQUFDO3dCQUNsQyxTQUFTLENBQUMsU0FBUyxJQUFJLGNBQWMsQ0FBQzt3QkFDdEMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7d0JBQ3RCLFlBQVksQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztxQkFDekM7Z0JBQ0gsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ1YsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUE7UUFFTyx3QkFBa0IsR0FBRztZQUMzQixVQUFVLENBQUM7Z0JBQ1QsSUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO2dCQUMvRCxJQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLG9DQUFvQyxDQUFnQixDQUFDO2dCQUM3RixJQUFJLFFBQVEsSUFBSSxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEVBQUU7b0JBQzVDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsQ0FBQztvQkFDMUIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQ3RCLElBQUksQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxFQUFFO3dCQUNoQyxLQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztxQkFDM0I7aUJBQ0Y7WUFDSCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQztRQUVNLGtCQUFZLEdBQUcsVUFBQyxJQUFJO1lBQzFCLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1lBQzlDLE9BQU8sQ0FDTCxRQUFRLENBQUMsR0FBRyxJQUFJLENBQUM7bUJBQ2QsUUFBUSxDQUFDLElBQUksSUFBSSxDQUFDO21CQUNsQixRQUFRLENBQUMsTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsSUFBSSxRQUFRLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQzttQkFDaEYsUUFBUSxDQUFDLEtBQUssSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLElBQUksUUFBUSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsQ0FDakYsQ0FBQztRQUNKLENBQUMsQ0FBQzs7SUFDSixDQUFDO0lBOUdRLHlCQUFNLEdBQWI7UUFBQSxpQkEwREM7UUF6REMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsVUFBQyxFQUFpQjtnQkFBZixjQUFJLEVBQUUsb0JBQU87WUFDMUMsUUFBUSxJQUFJLEVBQUU7Z0JBQ1osS0FBSyxlQUFlO29CQUNsQixJQUFJLE9BQU8sQ0FBQyxNQUFNLEtBQUssUUFBUSxFQUFFO3dCQUMvQixVQUFVLENBQUM7NEJBQ1QsS0FBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDOzRCQUNsQyxJQUFJLEtBQUksQ0FBQyxZQUFZLEVBQUU7Z0NBQ3JCLEtBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDOzZCQUM3Qjt3QkFDSCxDQUFDLENBQUMsQ0FBQztxQkFDSjtvQkFDRCxNQUFNO2dCQUNSO29CQUNFLE1BQU07YUFDVDtRQUNILENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsVUFBQyxFQUFpQjtnQkFBZixjQUFJLEVBQUUsb0JBQU87WUFDMUMsUUFBUSxJQUFJLEVBQUU7Z0JBQ1osS0FBSyw2QkFBNkI7b0JBQ2hDLEtBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUMvQixNQUFNO2dCQUNSLEtBQUsscUNBQXFDO29CQUFFO3dCQUMxQyxJQUFJLE9BQU8sQ0FBQyxXQUFXLEVBQUU7NEJBQ3ZCLEtBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQzt5QkFDaEQ7d0JBQ0QsSUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLFdBQVcsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQzt3QkFDekQsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7d0JBQzlCLEtBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO3FCQUNsQztvQkFBQyxNQUFNO2dCQUNSLEtBQUssK0JBQStCO29CQUNsQyw4QkFBOEI7b0JBQzlCLElBQUksS0FBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUU7d0JBQzFCLEtBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO3dCQUMvQixLQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQzt3QkFDbkMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLEVBQUUsQ0FBQzt3QkFDbEMsS0FBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7cUJBQzNCO29CQUFDLE1BQU07Z0JBQ1YsS0FBSywyQkFBMkI7b0JBQzlCLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSTt5QkFDakIsSUFBSSxDQUNILE1BQU0sQ0FBQyxVQUFDLElBQUksSUFBSyxPQUFBLENBQUMsQ0FBQyxJQUFJLEVBQU4sQ0FBTSxDQUFDLEVBQ3hCLEtBQUssRUFBRSxDQUNSLENBQUMsU0FBUyxDQUFDO3dCQUNWLEtBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO29CQUM1QixDQUFDLENBQUMsQ0FBQztvQkFDTCxNQUFNO2dCQUNSLEtBQUssK0JBQStCO29CQUFFO3dCQUM1QixJQUFBLHVCQUFNLENBQWE7d0JBQzNCLElBQU0sVUFBVSxHQUFHLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO3dCQUNsRCxLQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7d0JBQzNFLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztxQkFDeEM7b0JBQUMsTUFBTTtnQkFDUjtvQkFDRSxNQUFNO2FBQ1Q7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFvREgsZUFBQztBQUFELENBQUMsQUFuSEQsQ0FBOEIsWUFBWSxHQW1IekMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcbmltcG9ydCB7IGZpcnN0LCBmaWx0ZXIsIHdpdGhMYXRlc3RGcm9tIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBSZXBsYXlTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgQXdUcmVlRUggZXh0ZW5kcyBFdmVudEhhbmRsZXIge1xyXG4gIHByaXZhdGUgdGFyZ2V0T2Zmc2V0ID0gbmV3IFJlcGxheVN1YmplY3QoKTtcclxuXHJcbiAgcHJpdmF0ZSB0YXJnZXRJc09wZW4gPSBmYWxzZTtcclxuXHJcbiAgcHVibGljIGxpc3RlbigpIHtcclxuICAgIHRoaXMuaW5uZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcclxuICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnYXctdHJlZS5jbGljayc6XHJcbiAgICAgICAgICBpZiAocGF5bG9hZC5zb3VyY2UgPT09ICd0b2dnbGUnKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5idWlsZChwYXlsb2FkLmlkKTtcclxuICAgICAgICAgICAgICBpZiAodGhpcy50YXJnZXRJc09wZW4pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsT3BlbmVkSW50b1ZpZXcoKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLm91dGVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XHJcbiAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ2F3LXNjaGVkYS1sYXlvdXQuc2VsZWN0SXRlbSc6XHJcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuYnVpbGQocGF5bG9hZCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdhdy1zY2hlZGEtbGF5b3V0Lm5hdmlnYXRpb25yZXNwb25zZSc6IHtcclxuICAgICAgICAgIGlmIChwYXlsb2FkLmN1cnJlbnRJdGVtKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5zZXRBY3RpdmUocGF5bG9hZC5jdXJyZW50SXRlbSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjb25zdCBjdXJyZW50SWQgPSBwYXlsb2FkLmN1cnJlbnRJdGVtIHx8IHBheWxvYWQudHJlZS5pZDtcclxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5sb2FkKHBheWxvYWQpO1xyXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLmJ1aWxkKGN1cnJlbnRJZCk7XHJcbiAgICAgICAgfSBicmVhaztcclxuICAgICAgICBjYXNlICdhdy1zY2hlZGEtbGF5b3V0LnJvdXRlY2hhbmdlZCc6XHJcbiAgICAgICAgICAvLyBoYXMgb3V0cHV0IChub3QgZmlyc3QgbG9hZClcclxuICAgICAgICAgIGlmICh0aGlzLmRhdGFTb3VyY2Uub3V0cHV0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5idWlsZChwYXlsb2FkKTtcclxuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnNldEFjdGl2ZShwYXlsb2FkKTtcclxuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLmhpZ2hsaWdodEFjdGl2ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLnNjcm9sbExlYWZJbnRvVmlldygpO1xyXG4gICAgICAgICAgfSBicmVhaztcclxuICAgICAgICBjYXNlICdhdy1zY2hlZGEtbGF5b3V0LnZpZXdsZWFmJzpcclxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vdXQkXHJcbiAgICAgICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgICAgIGZpbHRlcigoZGF0YSkgPT4gISFkYXRhKSxcclxuICAgICAgICAgICAgICBmaXJzdCgpXHJcbiAgICAgICAgICAgICkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLnNjcm9sbExlYWZJbnRvVmlldygpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2F3LXNjaGVkYS1sYXlvdXQudHJlZXBvc2l0aW9uJzoge1xyXG4gICAgICAgICAgY29uc3QgeyB0YXJnZXQgfSA9IHBheWxvYWQ7XHJcbiAgICAgICAgICBjb25zdCB0YXJnZXRSZWN0ID0gdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgICAgdGhpcy50YXJnZXRJc09wZW4gPSB0YXJnZXQuY2xhc3NOYW1lLmluZGV4T2YoJ243LWljb24tYW5nbGUtcmlnaHQnKSAhPT0gLTE7XHJcbiAgICAgICAgICB0aGlzLnRhcmdldE9mZnNldC5uZXh0KHRhcmdldFJlY3QudG9wKTtcclxuICAgICAgICB9IGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNjcm9sbE9wZW5lZEludG9WaWV3ID0gKCkgPT4ge1xyXG4gICAgdGhpcy5kYXRhU291cmNlLm91dCRcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgZmlsdGVyKChkYXRhKSA9PiAhIWRhdGEpLFxyXG4gICAgICAgIGZpcnN0KCksXHJcbiAgICAgICAgd2l0aExhdGVzdEZyb20odGhpcy50YXJnZXRPZmZzZXQpLFxyXG4gICAgICApLnN1YnNjcmliZSgoWywgb2Zmc2V0XSkgPT4ge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgY29uc3Qgd3JhcHBlckVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmF3LXNjaGVkYV9fdHJlZS1jb250ZW50JykgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgICBjb25zdCBleHBhbmRlZE5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduNy10cmVlX19pdGVtIGlzLWV4cGFuZGVkJyk7XHJcbiAgICAgICAgICBjb25zdCBsYXN0RXhwYW5kZWROb2RlID0gZXhwYW5kZWROb2RlLmxlbmd0aFxyXG4gICAgICAgICAgICA/IGV4cGFuZGVkTm9kZVtleHBhbmRlZE5vZGUubGVuZ3RoIC0gMV1cclxuICAgICAgICAgICAgOiBudWxsO1xyXG4gICAgICAgICAgaWYgKGxhc3RFeHBhbmRlZE5vZGUpIHtcclxuICAgICAgICAgICAgY29uc3Qgc2Nyb2xsVHJlZUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm43LXRyZWUnKSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgICAgICAgY29uc3Qgd3JhcHBlckVsUmVjdCA9IHdyYXBwZXJFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICAgICAgY29uc3Qgb2Zmc2V0VG9BZGp1c3QgPSBvZmZzZXQgLSB3cmFwcGVyRWxSZWN0LnRvcDtcclxuICAgICAgICAgICAgc2Nyb2xsVHJlZUVsLnN0eWxlLm1hcmdpbkJvdHRvbSA9ICcxMDAwcHgnO1xyXG4gICAgICAgICAgICBsYXN0RXhwYW5kZWROb2RlLnNjcm9sbEludG9WaWV3KCk7XHJcbiAgICAgICAgICAgIHdyYXBwZXJFbC5zY3JvbGxUb3AgLT0gb2Zmc2V0VG9BZGp1c3Q7XHJcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcclxuICAgICAgICAgICAgc2Nyb2xsVHJlZUVsLnN0eWxlLm1hcmdpbkJvdHRvbSA9ICcwcHgnO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sIDIwMCk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzY3JvbGxMZWFmSW50b1ZpZXcgPSAoKSA9PiB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgY29uc3QgdHJlZU5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYuYXctc2NoZWRhX190cmVlJyk7XHJcbiAgICAgIGNvbnN0IGxlYWZOb2RlID0gdHJlZU5vZGUucXVlcnlTZWxlY3RvcignLmlzLWFjdGl2ZSAubjctdHJlZV9faXRlbS1jb250ZW50cycpIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICBpZiAobGVhZk5vZGUgJiYgIXRoaXMuaXNJblZpZXdwb3J0KGxlYWZOb2RlKSkge1xyXG4gICAgICAgIGxlYWZOb2RlLnNjcm9sbEludG9WaWV3KCk7XHJcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xyXG4gICAgICAgIGlmICghdGhpcy5pc0luVmlld3BvcnQobGVhZk5vZGUpKSB7XHJcbiAgICAgICAgICB0aGlzLnNjcm9sbExlYWZJbnRvVmlldygpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBpc0luVmlld3BvcnQgPSAoZWxlbSkgPT4ge1xyXG4gICAgY29uc3QgYm91bmRpbmcgPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgYm91bmRpbmcudG9wID49IDBcclxuICAgICAgJiYgYm91bmRpbmcubGVmdCA+PSAwXHJcbiAgICAgICYmIGJvdW5kaW5nLmJvdHRvbSA8PSAod2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpXHJcbiAgICAgICYmIGJvdW5kaW5nLnJpZ2h0IDw9ICh3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgpXHJcbiAgICApO1xyXG4gIH07XHJcbn1cclxuIl19