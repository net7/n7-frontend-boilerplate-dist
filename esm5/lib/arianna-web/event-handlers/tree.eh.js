/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/event-handlers/tree.eh.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { EventHandler } from '@n7-frontend/core';
import { first, filter, withLatestFrom } from 'rxjs/operators';
import { ReplaySubject } from 'rxjs';
var AwTreeEH = /** @class */ (function (_super) {
    tslib_1.__extends(AwTreeEH, _super);
    function AwTreeEH() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.targetOffset = new ReplaySubject();
        _this.targetIsOpen = false;
        _this.scrollOpenedIntoView = (/**
         * @return {?}
         */
        function () {
            _this.dataSource.out$
                .pipe(filter((/**
             * @param {?} data
             * @return {?}
             */
            function (data) { return !!data; })), first(), withLatestFrom(_this.targetOffset)).subscribe((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var _b = tslib_1.__read(_a, 2), offset = _b[1];
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    /** @type {?} */
                    var wrapperEl = (/** @type {?} */ (document.querySelector('.aw-scheda__tree-content')));
                    /** @type {?} */
                    var expandedNode = document.getElementsByClassName('n7-tree__item is-expanded');
                    /** @type {?} */
                    var lastExpandedNode = expandedNode.length
                        ? expandedNode[expandedNode.length - 1]
                        : null;
                    if (lastExpandedNode) {
                        /** @type {?} */
                        var scrollTreeEl = (/** @type {?} */ (document.querySelector('.n7-tree')));
                        /** @type {?} */
                        var wrapperElRect = wrapperEl.getBoundingClientRect();
                        /** @type {?} */
                        var offsetToAdjust = offset - wrapperElRect.top;
                        scrollTreeEl.style.marginBottom = '1000px';
                        lastExpandedNode.scrollIntoView();
                        wrapperEl.scrollTop -= offsetToAdjust;
                        window.scrollTo(0, 0);
                        scrollTreeEl.style.marginBottom = '0px';
                    }
                }), 200);
            }));
        });
        _this.scrollLeafIntoView = (/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var treeNode = document.querySelector('div.aw-scheda__tree');
            setTimeout((/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var leafNode = treeNode.querySelector('.is-active');
                if (leafNode && !_this.isInViewport(leafNode)) {
                    leafNode.scrollIntoView();
                    window.scrollTo(0, 0);
                }
            }), 200);
        });
        _this.isInViewport = (/**
         * @param {?} elem
         * @return {?}
         */
        function (elem) {
            /** @type {?} */
            var bounding = elem.getBoundingClientRect();
            return (bounding.top >= 0
                && bounding.left >= 0
                && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
                && bounding.right <= (window.innerWidth || document.documentElement.clientWidth));
        });
        return _this;
    }
    /**
     * @return {?}
     */
    AwTreeEH.prototype.listen = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.innerEvents$.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var type = _a.type, payload = _a.payload;
            switch (type) {
                case 'aw-tree.click':
                    if (payload.source === 'toggle') {
                        setTimeout((/**
                         * @return {?}
                         */
                        function () {
                            _this.dataSource.build(payload.id);
                            if (_this.targetIsOpen) {
                                _this.scrollOpenedIntoView();
                            }
                        }));
                    }
                    break;
                default:
                    break;
            }
        }));
        this.outerEvents$.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
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
                        /** @type {?} */
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
                        .pipe(filter((/**
                     * @param {?} data
                     * @return {?}
                     */
                    function (data) { return !!data; })), first()).subscribe((/**
                     * @return {?}
                     */
                    function () {
                        _this.scrollLeafIntoView();
                    }));
                    break;
                case 'aw-scheda-layout.treeposition':
                    {
                        var target = payload.target;
                        /** @type {?} */
                        var targetRect = target.getBoundingClientRect();
                        _this.targetIsOpen = target.className.indexOf('n7-icon-angle-right') !== -1;
                        _this.targetOffset.next(targetRect.top);
                    }
                    break;
                default:
                    break;
            }
        }));
    };
    return AwTreeEH;
}(EventHandler));
export { AwTreeEH };
if (false) {
    /**
     * @type {?}
     * @private
     */
    AwTreeEH.prototype.targetOffset;
    /**
     * @type {?}
     * @private
     */
    AwTreeEH.prototype.targetIsOpen;
    /**
     * @type {?}
     * @private
     */
    AwTreeEH.prototype.scrollOpenedIntoView;
    /**
     * @type {?}
     * @private
     */
    AwTreeEH.prototype.scrollLeafIntoView;
    /**
     * @type {?}
     * @private
     */
    AwTreeEH.prototype.isInViewport;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5laC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9ldmVudC1oYW5kbGVycy90cmVlLmVoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRXJDO0lBQThCLG9DQUFZO0lBQTFDO1FBQUEscUVBbUhDO1FBbEhTLGtCQUFZLEdBQUcsSUFBSSxhQUFhLEVBQUUsQ0FBQztRQUVuQyxrQkFBWSxHQUFHLEtBQUssQ0FBQztRQWlFckIsMEJBQW9COzs7UUFBRztZQUM3QixLQUFJLENBQUMsVUFBVSxDQUFDLElBQUk7aUJBQ2pCLElBQUksQ0FDSCxNQUFNOzs7O1lBQUMsVUFBQyxJQUFJLElBQUssT0FBQSxDQUFDLENBQUMsSUFBSSxFQUFOLENBQU0sRUFBQyxFQUN4QixLQUFLLEVBQUUsRUFDUCxjQUFjLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxDQUNsQyxDQUFDLFNBQVM7Ozs7WUFBQyxVQUFDLEVBQVU7b0JBQVYsMEJBQVUsRUFBUCxjQUFNO2dCQUNwQixVQUFVOzs7Z0JBQUM7O3dCQUNILFNBQVMsR0FBRyxtQkFBQSxRQUFRLENBQUMsYUFBYSxDQUFDLDBCQUEwQixDQUFDLEVBQWU7O3dCQUM3RSxZQUFZLEdBQUcsUUFBUSxDQUFDLHNCQUFzQixDQUFDLDJCQUEyQixDQUFDOzt3QkFDM0UsZ0JBQWdCLEdBQUcsWUFBWSxDQUFDLE1BQU07d0JBQzFDLENBQUMsQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7d0JBQ3ZDLENBQUMsQ0FBQyxJQUFJO29CQUNS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QUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7d0JBQzNFLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztxQkFDeEM7b0JBQUMsTUFBTTtnQkFDUjtvQkFDRSxNQUFNO2FBQ1Q7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7SUFpREgsZUFBQztBQUFELENBQUMsQUFuSEQsQ0FBOEIsWUFBWSxHQW1IekM7Ozs7Ozs7SUFsSEMsZ0NBQTJDOzs7OztJQUUzQyxnQ0FBNkI7Ozs7O0lBaUU3Qix3Q0F5QkM7Ozs7O0lBRUQsc0NBU0U7Ozs7O0lBRUYsZ0NBUUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBmaXJzdCwgZmlsdGVyLCB3aXRoTGF0ZXN0RnJvbSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFJlcGxheVN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGNsYXNzIEF3VHJlZUVIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcbiAgcHJpdmF0ZSB0YXJnZXRPZmZzZXQgPSBuZXcgUmVwbGF5U3ViamVjdCgpO1xuXG4gIHByaXZhdGUgdGFyZ2V0SXNPcGVuID0gZmFsc2U7XG5cbiAgcHVibGljIGxpc3RlbigpIHtcbiAgICB0aGlzLmlubmVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnYXctdHJlZS5jbGljayc6XG4gICAgICAgICAgaWYgKHBheWxvYWQuc291cmNlID09PSAndG9nZ2xlJykge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5idWlsZChwYXlsb2FkLmlkKTtcbiAgICAgICAgICAgICAgaWYgKHRoaXMudGFyZ2V0SXNPcGVuKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxPcGVuZWRJbnRvVmlldygpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLm91dGVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnYXctc2lkZWJhci1oZWFkZXIuY2xpY2snOlxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS50b2dnbGVTaWRlYmFyKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LXNjaGVkYS1sYXlvdXQuc2VsZWN0SXRlbSc6XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLmJ1aWxkKHBheWxvYWQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1zY2hlZGEtbGF5b3V0Lm5hdmlnYXRpb25yZXNwb25zZSc6IHtcbiAgICAgICAgICBpZiAocGF5bG9hZC5jdXJyZW50SXRlbSkge1xuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnNldEFjdGl2ZShwYXlsb2FkLmN1cnJlbnRJdGVtKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgY3VycmVudElkID0gcGF5bG9hZC5jdXJyZW50SXRlbSB8fCBwYXlsb2FkLnRyZWUuaWQ7XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLmxvYWQocGF5bG9hZCk7XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLmJ1aWxkKGN1cnJlbnRJZCk7XG4gICAgICAgIH0gYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LXNjaGVkYS1sYXlvdXQucm91dGVjaGFuZ2VkJzpcbiAgICAgICAgICAvLyBoYXMgb3V0cHV0IChub3QgZmlyc3QgbG9hZClcbiAgICAgICAgICBpZiAodGhpcy5kYXRhU291cmNlLm91dHB1dCkge1xuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLmJ1aWxkKHBheWxvYWQpO1xuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnNldEFjdGl2ZShwYXlsb2FkKTtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5oaWdobGlnaHRBY3RpdmUoKTtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsTGVhZkludG9WaWV3KCk7XG4gICAgICAgICAgfSBicmVhaztcbiAgICAgICAgY2FzZSAnYXctc2NoZWRhLWxheW91dC52aWV3bGVhZic6XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLm91dCRcbiAgICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgICBmaWx0ZXIoKGRhdGEpID0+ICEhZGF0YSksXG4gICAgICAgICAgICAgIGZpcnN0KClcbiAgICAgICAgICAgICkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5zY3JvbGxMZWFmSW50b1ZpZXcoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1zY2hlZGEtbGF5b3V0LnRyZWVwb3NpdGlvbic6IHtcbiAgICAgICAgICBjb25zdCB7IHRhcmdldCB9ID0gcGF5bG9hZDtcbiAgICAgICAgICBjb25zdCB0YXJnZXRSZWN0ID0gdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgIHRoaXMudGFyZ2V0SXNPcGVuID0gdGFyZ2V0LmNsYXNzTmFtZS5pbmRleE9mKCduNy1pY29uLWFuZ2xlLXJpZ2h0JykgIT09IC0xO1xuICAgICAgICAgIHRoaXMudGFyZ2V0T2Zmc2V0Lm5leHQodGFyZ2V0UmVjdC50b3ApO1xuICAgICAgICB9IGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBzY3JvbGxPcGVuZWRJbnRvVmlldyA9ICgpID0+IHtcbiAgICB0aGlzLmRhdGFTb3VyY2Uub3V0JFxuICAgICAgLnBpcGUoXG4gICAgICAgIGZpbHRlcigoZGF0YSkgPT4gISFkYXRhKSxcbiAgICAgICAgZmlyc3QoKSxcbiAgICAgICAgd2l0aExhdGVzdEZyb20odGhpcy50YXJnZXRPZmZzZXQpLFxuICAgICAgKS5zdWJzY3JpYmUoKFssIG9mZnNldF0pID0+IHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgY29uc3Qgd3JhcHBlckVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmF3LXNjaGVkYV9fdHJlZS1jb250ZW50JykgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgICAgY29uc3QgZXhwYW5kZWROb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbjctdHJlZV9faXRlbSBpcy1leHBhbmRlZCcpO1xuICAgICAgICAgIGNvbnN0IGxhc3RFeHBhbmRlZE5vZGUgPSBleHBhbmRlZE5vZGUubGVuZ3RoXG4gICAgICAgICAgICA/IGV4cGFuZGVkTm9kZVtleHBhbmRlZE5vZGUubGVuZ3RoIC0gMV1cbiAgICAgICAgICAgIDogbnVsbDtcbiAgICAgICAgICBpZiAobGFzdEV4cGFuZGVkTm9kZSkge1xuICAgICAgICAgICAgY29uc3Qgc2Nyb2xsVHJlZUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm43LXRyZWUnKSBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgICAgIGNvbnN0IHdyYXBwZXJFbFJlY3QgPSB3cmFwcGVyRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICBjb25zdCBvZmZzZXRUb0FkanVzdCA9IG9mZnNldCAtIHdyYXBwZXJFbFJlY3QudG9wO1xuICAgICAgICAgICAgc2Nyb2xsVHJlZUVsLnN0eWxlLm1hcmdpbkJvdHRvbSA9ICcxMDAwcHgnO1xuICAgICAgICAgICAgbGFzdEV4cGFuZGVkTm9kZS5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICAgICAgd3JhcHBlckVsLnNjcm9sbFRvcCAtPSBvZmZzZXRUb0FkanVzdDtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICAgICAgICAgIHNjcm9sbFRyZWVFbC5zdHlsZS5tYXJnaW5Cb3R0b20gPSAnMHB4JztcbiAgICAgICAgICB9XG4gICAgICAgIH0sIDIwMCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgc2Nyb2xsTGVhZkludG9WaWV3ID0gKCkgPT4ge1xuICAgIGNvbnN0IHRyZWVOb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2LmF3LXNjaGVkYV9fdHJlZScpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc3QgbGVhZk5vZGUgPSB0cmVlTm9kZS5xdWVyeVNlbGVjdG9yKCcuaXMtYWN0aXZlJyk7XG4gICAgICBpZiAobGVhZk5vZGUgJiYgIXRoaXMuaXNJblZpZXdwb3J0KGxlYWZOb2RlKSkge1xuICAgICAgICBsZWFmTm9kZS5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgICB9XG4gICAgfSwgMjAwKTtcbiAgfTtcblxuICBwcml2YXRlIGlzSW5WaWV3cG9ydCA9IChlbGVtKSA9PiB7XG4gICAgY29uc3QgYm91bmRpbmcgPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHJldHVybiAoXG4gICAgICBib3VuZGluZy50b3AgPj0gMFxuICAgICAgJiYgYm91bmRpbmcubGVmdCA+PSAwXG4gICAgICAmJiBib3VuZGluZy5ib3R0b20gPD0gKHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KVxuICAgICAgJiYgYm91bmRpbmcucmlnaHQgPD0gKHdpbmRvdy5pbm5lcldpZHRoIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aClcbiAgICApO1xuICB9O1xufVxuIl19