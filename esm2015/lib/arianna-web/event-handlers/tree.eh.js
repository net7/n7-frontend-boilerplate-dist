/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventHandler } from '@n7-frontend/core';
import { first, filter, withLatestFrom } from 'rxjs/operators';
import { ReplaySubject } from 'rxjs';
export class AwTreeEH extends EventHandler {
    constructor() {
        super(...arguments);
        this.targetOffset = new ReplaySubject();
        this.targetIsOpen = false;
        this.scrollOpenedIntoView = (/**
         * @return {?}
         */
        () => {
            this.dataSource.out$
                .pipe(filter((/**
             * @param {?} data
             * @return {?}
             */
            (data) => !!data)), first(), withLatestFrom(this.targetOffset)).subscribe((/**
             * @param {?} __0
             * @return {?}
             */
            ([, offset]) => {
                setTimeout((/**
                 * @return {?}
                 */
                () => {
                    /** @type {?} */
                    const wrapperEl = (/** @type {?} */ (document.querySelector('.aw-scheda__tree-content')));
                    /** @type {?} */
                    const expandedNode = document.getElementsByClassName('n7-tree__item is-expanded');
                    /** @type {?} */
                    const lastExpandedNode = expandedNode.length
                        ? expandedNode[expandedNode.length - 1]
                        : null;
                    if (lastExpandedNode) {
                        /** @type {?} */
                        const scrollTreeEl = (/** @type {?} */ (document.querySelector('.n7-tree')));
                        /** @type {?} */
                        const wrapperElRect = wrapperEl.getBoundingClientRect();
                        /** @type {?} */
                        const offsetToAdjust = offset - wrapperElRect.top;
                        scrollTreeEl.style.marginBottom = '1000px';
                        lastExpandedNode.scrollIntoView();
                        wrapperEl.scrollTop -= offsetToAdjust;
                        window.scrollTo(0, 0);
                        scrollTreeEl.style.marginBottom = '0px';
                    }
                }), 200);
            }));
        });
        this.scrollLeafIntoView = (/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const treeNode = document.querySelector('div.aw-scheda__tree');
            setTimeout((/**
             * @return {?}
             */
            () => {
                /** @type {?} */
                const leafNode = treeNode.querySelector('.is-active');
                if (leafNode && !this.isInViewport(leafNode)) {
                    leafNode.scrollIntoView();
                    window.scrollTo(0, 0);
                }
            }), 200);
        });
        this.isInViewport = (/**
         * @param {?} elem
         * @return {?}
         */
        (elem) => {
            /** @type {?} */
            const bounding = elem.getBoundingClientRect();
            return (bounding.top >= 0
                && bounding.left >= 0
                && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
                && bounding.right <= (window.innerWidth || document.documentElement.clientWidth));
        });
    }
    /**
     * @return {?}
     */
    listen() {
        this.innerEvents$.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ({ type, payload }) => {
            switch (type) {
                case 'aw-tree.click':
                    if (payload.source === 'toggle') {
                        setTimeout((/**
                         * @return {?}
                         */
                        () => {
                            this.dataSource.build(payload.id);
                            if (this.targetIsOpen) {
                                this.scrollOpenedIntoView();
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
        ({ type, payload }) => {
            switch (type) {
                case 'aw-sidebar-header.click':
                    this.dataSource.toggleSidebar();
                    break;
                case 'aw-scheda-layout.selectItem':
                    this.dataSource.build(payload);
                    break;
                case 'aw-scheda-layout.navigationresponse':
                    {
                        if (payload.currentItem) {
                            this.dataSource.setActive(payload.currentItem);
                        }
                        /** @type {?} */
                        const currentId = payload.currentItem || payload.tree.id;
                        this.dataSource.load(payload);
                        this.dataSource.build(currentId);
                    }
                    break;
                case 'aw-scheda-layout.routechanged':
                    // has output (not first load)
                    if (this.dataSource.output) {
                        this.dataSource.build(payload);
                        this.dataSource.setActive(payload);
                        this.dataSource.highlightActive();
                        this.scrollLeafIntoView();
                    }
                    break;
                case 'aw-scheda-layout.viewleaf':
                    this.dataSource.out$
                        .pipe(filter((/**
                     * @param {?} data
                     * @return {?}
                     */
                    (data) => !!data)), first()).subscribe((/**
                     * @return {?}
                     */
                    () => {
                        this.scrollLeafIntoView();
                    }));
                    break;
                case 'aw-scheda-layout.treeposition':
                    {
                        const { target } = payload;
                        /** @type {?} */
                        const targetRect = target.getBoundingClientRect();
                        this.targetIsOpen = target.className.indexOf('n7-icon-angle-right') !== -1;
                        this.targetOffset.next(targetRect.top);
                    }
                    break;
                default:
                    break;
            }
        }));
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5laC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9ldmVudC1oYW5kbGVycy90cmVlLmVoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVyQyxNQUFNLE9BQU8sUUFBUyxTQUFRLFlBQVk7SUFBMUM7O1FBQ1UsaUJBQVksR0FBRyxJQUFJLGFBQWEsRUFBRSxDQUFDO1FBRW5DLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBaUVyQix5QkFBb0I7OztRQUFHLEdBQUcsRUFBRTtZQUNsQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUk7aUJBQ2pCLElBQUksQ0FDSCxNQUFNOzs7O1lBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUMsRUFDeEIsS0FBSyxFQUFFLEVBQ1AsY0FBYyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FDbEMsQ0FBQyxTQUFTOzs7O1lBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLEVBQUUsRUFBRTtnQkFDekIsVUFBVTs7O2dCQUFDLEdBQUcsRUFBRTs7MEJBQ1IsU0FBUyxHQUFHLG1CQUFBLFFBQVEsQ0FBQyxhQUFhLENBQUMsMEJBQTBCLENBQUMsRUFBZTs7MEJBQzdFLFlBQVksR0FBRyxRQUFRLENBQUMsc0JBQXNCLENBQUMsMkJBQTJCLENBQUM7OzBCQUMzRSxnQkFBZ0IsR0FBRyxZQUFZLENBQUMsTUFBTTt3QkFDMUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQzt3QkFDdkMsQ0FB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RUFBRSxHQUFHLE9BQU87OzhCQUNwQixVQUFVLEdBQUcsTUFBTSxDQUFDLHFCQUFxQixFQUFFO3dCQUNqRCxJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7d0JBQzNFLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztxQkFDeEM7b0JBQUMsTUFBTTtnQkFDUjtvQkFDRSxNQUFNO2FBQ1Q7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Q0FpREY7Ozs7OztJQWxIQyxnQ0FBMkM7Ozs7O0lBRTNDLGdDQUE2Qjs7Ozs7SUFpRTdCLHdDQXlCQzs7Ozs7SUFFRCxzQ0FTRTs7Ozs7SUFFRixnQ0FRRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IGZpcnN0LCBmaWx0ZXIsIHdpdGhMYXRlc3RGcm9tIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUmVwbGF5U3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgY2xhc3MgQXdUcmVlRUggZXh0ZW5kcyBFdmVudEhhbmRsZXIge1xuICBwcml2YXRlIHRhcmdldE9mZnNldCA9IG5ldyBSZXBsYXlTdWJqZWN0KCk7XG5cbiAgcHJpdmF0ZSB0YXJnZXRJc09wZW4gPSBmYWxzZTtcblxuICBwdWJsaWMgbGlzdGVuKCkge1xuICAgIHRoaXMuaW5uZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdhdy10cmVlLmNsaWNrJzpcbiAgICAgICAgICBpZiAocGF5bG9hZC5zb3VyY2UgPT09ICd0b2dnbGUnKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLmJ1aWxkKHBheWxvYWQuaWQpO1xuICAgICAgICAgICAgICBpZiAodGhpcy50YXJnZXRJc09wZW4pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbE9wZW5lZEludG9WaWV3KCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMub3V0ZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdhdy1zaWRlYmFyLWhlYWRlci5jbGljayc6XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLnRvZ2dsZVNpZGViYXIoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctc2NoZWRhLWxheW91dC5zZWxlY3RJdGVtJzpcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuYnVpbGQocGF5bG9hZCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LXNjaGVkYS1sYXlvdXQubmF2aWdhdGlvbnJlc3BvbnNlJzoge1xuICAgICAgICAgIGlmIChwYXlsb2FkLmN1cnJlbnRJdGVtKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uuc2V0QWN0aXZlKHBheWxvYWQuY3VycmVudEl0ZW0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBjdXJyZW50SWQgPSBwYXlsb2FkLmN1cnJlbnRJdGVtIHx8IHBheWxvYWQudHJlZS5pZDtcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UubG9hZChwYXlsb2FkKTtcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuYnVpbGQoY3VycmVudElkKTtcbiAgICAgICAgfSBicmVhaztcbiAgICAgICAgY2FzZSAnYXctc2NoZWRhLWxheW91dC5yb3V0ZWNoYW5nZWQnOlxuICAgICAgICAgIC8vIGhhcyBvdXRwdXQgKG5vdCBmaXJzdCBsb2FkKVxuICAgICAgICAgIGlmICh0aGlzLmRhdGFTb3VyY2Uub3V0cHV0KSB7XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuYnVpbGQocGF5bG9hZCk7XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uuc2V0QWN0aXZlKHBheWxvYWQpO1xuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLmhpZ2hsaWdodEFjdGl2ZSgpO1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxMZWFmSW50b1ZpZXcoKTtcbiAgICAgICAgICB9IGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1zY2hlZGEtbGF5b3V0LnZpZXdsZWFmJzpcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub3V0JFxuICAgICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICAgIGZpbHRlcigoZGF0YSkgPT4gISFkYXRhKSxcbiAgICAgICAgICAgICAgZmlyc3QoKVxuICAgICAgICAgICAgKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLnNjcm9sbExlYWZJbnRvVmlldygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LXNjaGVkYS1sYXlvdXQudHJlZXBvc2l0aW9uJzoge1xuICAgICAgICAgIGNvbnN0IHsgdGFyZ2V0IH0gPSBwYXlsb2FkO1xuICAgICAgICAgIGNvbnN0IHRhcmdldFJlY3QgPSB0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgdGhpcy50YXJnZXRJc09wZW4gPSB0YXJnZXQuY2xhc3NOYW1lLmluZGV4T2YoJ243LWljb24tYW5nbGUtcmlnaHQnKSAhPT0gLTE7XG4gICAgICAgICAgdGhpcy50YXJnZXRPZmZzZXQubmV4dCh0YXJnZXRSZWN0LnRvcCk7XG4gICAgICAgIH0gYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHNjcm9sbE9wZW5lZEludG9WaWV3ID0gKCkgPT4ge1xuICAgIHRoaXMuZGF0YVNvdXJjZS5vdXQkXG4gICAgICAucGlwZShcbiAgICAgICAgZmlsdGVyKChkYXRhKSA9PiAhIWRhdGEpLFxuICAgICAgICBmaXJzdCgpLFxuICAgICAgICB3aXRoTGF0ZXN0RnJvbSh0aGlzLnRhcmdldE9mZnNldCksXG4gICAgICApLnN1YnNjcmliZSgoWywgb2Zmc2V0XSkgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBjb25zdCB3cmFwcGVyRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXctc2NoZWRhX190cmVlLWNvbnRlbnQnKSBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgICBjb25zdCBleHBhbmRlZE5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduNy10cmVlX19pdGVtIGlzLWV4cGFuZGVkJyk7XG4gICAgICAgICAgY29uc3QgbGFzdEV4cGFuZGVkTm9kZSA9IGV4cGFuZGVkTm9kZS5sZW5ndGhcbiAgICAgICAgICAgID8gZXhwYW5kZWROb2RlW2V4cGFuZGVkTm9kZS5sZW5ndGggLSAxXVxuICAgICAgICAgICAgOiBudWxsO1xuICAgICAgICAgIGlmIChsYXN0RXhwYW5kZWROb2RlKSB7XG4gICAgICAgICAgICBjb25zdCBzY3JvbGxUcmVlRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubjctdHJlZScpIGFzIEhUTUxFbGVtZW50O1xuICAgICAgICAgICAgY29uc3Qgd3JhcHBlckVsUmVjdCA9IHdyYXBwZXJFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIGNvbnN0IG9mZnNldFRvQWRqdXN0ID0gb2Zmc2V0IC0gd3JhcHBlckVsUmVjdC50b3A7XG4gICAgICAgICAgICBzY3JvbGxUcmVlRWwuc3R5bGUubWFyZ2luQm90dG9tID0gJzEwMDBweCc7XG4gICAgICAgICAgICBsYXN0RXhwYW5kZWROb2RlLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgICAgICB3cmFwcGVyRWwuc2Nyb2xsVG9wIC09IG9mZnNldFRvQWRqdXN0O1xuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgICAgICAgICAgc2Nyb2xsVHJlZUVsLnN0eWxlLm1hcmdpbkJvdHRvbSA9ICcwcHgnO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgMjAwKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBzY3JvbGxMZWFmSW50b1ZpZXcgPSAoKSA9PiB7XG4gICAgY29uc3QgdHJlZU5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYuYXctc2NoZWRhX190cmVlJyk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zdCBsZWFmTm9kZSA9IHRyZWVOb2RlLnF1ZXJ5U2VsZWN0b3IoJy5pcy1hY3RpdmUnKTtcbiAgICAgIGlmIChsZWFmTm9kZSAmJiAhdGhpcy5pc0luVmlld3BvcnQobGVhZk5vZGUpKSB7XG4gICAgICAgIGxlYWZOb2RlLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICAgIH1cbiAgICB9LCAyMDApO1xuICB9O1xuXG4gIHByaXZhdGUgaXNJblZpZXdwb3J0ID0gKGVsZW0pID0+IHtcbiAgICBjb25zdCBib3VuZGluZyA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgcmV0dXJuIChcbiAgICAgIGJvdW5kaW5nLnRvcCA+PSAwXG4gICAgICAmJiBib3VuZGluZy5sZWZ0ID49IDBcbiAgICAgICYmIGJvdW5kaW5nLmJvdHRvbSA8PSAod2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpXG4gICAgICAmJiBib3VuZGluZy5yaWdodCA8PSAod2luZG93LmlubmVyV2lkdGggfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoKVxuICAgICk7XG4gIH07XG59XG4iXX0=