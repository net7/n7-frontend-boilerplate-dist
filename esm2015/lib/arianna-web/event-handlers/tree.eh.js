/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/event-handlers/tree.eh.ts
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5laC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9ldmVudC1oYW5kbGVycy90cmVlLmVoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFckMsTUFBTSxPQUFPLFFBQVMsU0FBUSxZQUFZO0lBQTFDOztRQUNVLGlCQUFZLEdBQUcsSUFBSSxhQUFhLEVBQUUsQ0FBQztRQUVuQyxpQkFBWSxHQUFHLEtBQUssQ0FBQztRQWlFckIseUJBQW9COzs7UUFBRyxHQUFHLEVBQUU7WUFDbEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJO2lCQUNqQixJQUFJLENBQ0gsTUFBTTs7OztZQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFDLEVBQ3hCLEtBQUssRUFBRSxFQUNQLGNBQWMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQ2xDLENBQUMsU0FBUzs7OztZQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxFQUFFLEVBQUU7Z0JBQ3pCLFVBQVU7OztnQkFBQyxHQUFHLEVBQUU7OzBCQUNSLFNBQVMsR0FBRyxtQkFBQSxRQUFRLENBQUMsYUFBYSxDQUFDLDBCQUEwQixDQUFDLEVBQWU7OzBCQUM3RSxZQUFZLEdBQUcsUUFBUSxDQUFDLHNCQUFzQixDQUFDLDJCQUEyQixDQUFDOzswQkFDM0UsZ0JBQWdCLEdBQUcsWUFBWSxDQUFDLE1BQU07d0JBQzFDLENBQUMsQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7d0JBQ3ZDLENB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LEVBQUUsR0FBRyxPQUFPOzs4QkFDcEIsVUFBVSxHQUFHLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRTt3QkFDakQsSUFBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO3dCQUMzRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7cUJBQ3hDO29CQUFDLE1BQU07Z0JBQ1I7b0JBQ0UsTUFBTTthQUNUO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDO0NBaURGOzs7Ozs7SUFsSEMsZ0NBQTJDOzs7OztJQUUzQyxnQ0FBNkI7Ozs7O0lBaUU3Qix3Q0F5QkM7Ozs7O0lBRUQsc0NBU0U7Ozs7O0lBRUYsZ0NBUUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBmaXJzdCwgZmlsdGVyLCB3aXRoTGF0ZXN0RnJvbSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFJlcGxheVN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGNsYXNzIEF3VHJlZUVIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcbiAgcHJpdmF0ZSB0YXJnZXRPZmZzZXQgPSBuZXcgUmVwbGF5U3ViamVjdCgpO1xuXG4gIHByaXZhdGUgdGFyZ2V0SXNPcGVuID0gZmFsc2U7XG5cbiAgcHVibGljIGxpc3RlbigpIHtcbiAgICB0aGlzLmlubmVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnYXctdHJlZS5jbGljayc6XG4gICAgICAgICAgaWYgKHBheWxvYWQuc291cmNlID09PSAndG9nZ2xlJykge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5idWlsZChwYXlsb2FkLmlkKTtcbiAgICAgICAgICAgICAgaWYgKHRoaXMudGFyZ2V0SXNPcGVuKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxPcGVuZWRJbnRvVmlldygpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLm91dGVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnYXctc2lkZWJhci1oZWFkZXIuY2xpY2snOlxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS50b2dnbGVTaWRlYmFyKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LXNjaGVkYS1sYXlvdXQuc2VsZWN0SXRlbSc6XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLmJ1aWxkKHBheWxvYWQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1zY2hlZGEtbGF5b3V0Lm5hdmlnYXRpb25yZXNwb25zZSc6IHtcbiAgICAgICAgICBpZiAocGF5bG9hZC5jdXJyZW50SXRlbSkge1xuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnNldEFjdGl2ZShwYXlsb2FkLmN1cnJlbnRJdGVtKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgY3VycmVudElkID0gcGF5bG9hZC5jdXJyZW50SXRlbSB8fCBwYXlsb2FkLnRyZWUuaWQ7XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLmxvYWQocGF5bG9hZCk7XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLmJ1aWxkKGN1cnJlbnRJZCk7XG4gICAgICAgIH0gYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LXNjaGVkYS1sYXlvdXQucm91dGVjaGFuZ2VkJzpcbiAgICAgICAgICAvLyBoYXMgb3V0cHV0IChub3QgZmlyc3QgbG9hZClcbiAgICAgICAgICBpZiAodGhpcy5kYXRhU291cmNlLm91dHB1dCkge1xuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLmJ1aWxkKHBheWxvYWQpO1xuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnNldEFjdGl2ZShwYXlsb2FkKTtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5oaWdobGlnaHRBY3RpdmUoKTtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsTGVhZkludG9WaWV3KCk7XG4gICAgICAgICAgfSBicmVhaztcbiAgICAgICAgY2FzZSAnYXctc2NoZWRhLWxheW91dC52aWV3bGVhZic6XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLm91dCRcbiAgICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgICBmaWx0ZXIoKGRhdGEpID0+ICEhZGF0YSksXG4gICAgICAgICAgICAgIGZpcnN0KClcbiAgICAgICAgICAgICkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5zY3JvbGxMZWFmSW50b1ZpZXcoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1zY2hlZGEtbGF5b3V0LnRyZWVwb3NpdGlvbic6IHtcbiAgICAgICAgICBjb25zdCB7IHRhcmdldCB9ID0gcGF5bG9hZDtcbiAgICAgICAgICBjb25zdCB0YXJnZXRSZWN0ID0gdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgIHRoaXMudGFyZ2V0SXNPcGVuID0gdGFyZ2V0LmNsYXNzTmFtZS5pbmRleE9mKCduNy1pY29uLWFuZ2xlLXJpZ2h0JykgIT09IC0xO1xuICAgICAgICAgIHRoaXMudGFyZ2V0T2Zmc2V0Lm5leHQodGFyZ2V0UmVjdC50b3ApO1xuICAgICAgICB9IGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBzY3JvbGxPcGVuZWRJbnRvVmlldyA9ICgpID0+IHtcbiAgICB0aGlzLmRhdGFTb3VyY2Uub3V0JFxuICAgICAgLnBpcGUoXG4gICAgICAgIGZpbHRlcigoZGF0YSkgPT4gISFkYXRhKSxcbiAgICAgICAgZmlyc3QoKSxcbiAgICAgICAgd2l0aExhdGVzdEZyb20odGhpcy50YXJnZXRPZmZzZXQpLFxuICAgICAgKS5zdWJzY3JpYmUoKFssIG9mZnNldF0pID0+IHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgY29uc3Qgd3JhcHBlckVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmF3LXNjaGVkYV9fdHJlZS1jb250ZW50JykgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgICAgY29uc3QgZXhwYW5kZWROb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbjctdHJlZV9faXRlbSBpcy1leHBhbmRlZCcpO1xuICAgICAgICAgIGNvbnN0IGxhc3RFeHBhbmRlZE5vZGUgPSBleHBhbmRlZE5vZGUubGVuZ3RoXG4gICAgICAgICAgICA/IGV4cGFuZGVkTm9kZVtleHBhbmRlZE5vZGUubGVuZ3RoIC0gMV1cbiAgICAgICAgICAgIDogbnVsbDtcbiAgICAgICAgICBpZiAobGFzdEV4cGFuZGVkTm9kZSkge1xuICAgICAgICAgICAgY29uc3Qgc2Nyb2xsVHJlZUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm43LXRyZWUnKSBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgICAgIGNvbnN0IHdyYXBwZXJFbFJlY3QgPSB3cmFwcGVyRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICBjb25zdCBvZmZzZXRUb0FkanVzdCA9IG9mZnNldCAtIHdyYXBwZXJFbFJlY3QudG9wO1xuICAgICAgICAgICAgc2Nyb2xsVHJlZUVsLnN0eWxlLm1hcmdpbkJvdHRvbSA9ICcxMDAwcHgnO1xuICAgICAgICAgICAgbGFzdEV4cGFuZGVkTm9kZS5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICAgICAgd3JhcHBlckVsLnNjcm9sbFRvcCAtPSBvZmZzZXRUb0FkanVzdDtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICAgICAgICAgIHNjcm9sbFRyZWVFbC5zdHlsZS5tYXJnaW5Cb3R0b20gPSAnMHB4JztcbiAgICAgICAgICB9XG4gICAgICAgIH0sIDIwMCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgc2Nyb2xsTGVhZkludG9WaWV3ID0gKCkgPT4ge1xuICAgIGNvbnN0IHRyZWVOb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2LmF3LXNjaGVkYV9fdHJlZScpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc3QgbGVhZk5vZGUgPSB0cmVlTm9kZS5xdWVyeVNlbGVjdG9yKCcuaXMtYWN0aXZlJyk7XG4gICAgICBpZiAobGVhZk5vZGUgJiYgIXRoaXMuaXNJblZpZXdwb3J0KGxlYWZOb2RlKSkge1xuICAgICAgICBsZWFmTm9kZS5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgICB9XG4gICAgfSwgMjAwKTtcbiAgfTtcblxuICBwcml2YXRlIGlzSW5WaWV3cG9ydCA9IChlbGVtKSA9PiB7XG4gICAgY29uc3QgYm91bmRpbmcgPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHJldHVybiAoXG4gICAgICBib3VuZGluZy50b3AgPj0gMFxuICAgICAgJiYgYm91bmRpbmcubGVmdCA+PSAwXG4gICAgICAmJiBib3VuZGluZy5ib3R0b20gPD0gKHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KVxuICAgICAgJiYgYm91bmRpbmcucmlnaHQgPD0gKHdpbmRvdy5pbm5lcldpZHRoIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aClcbiAgICApO1xuICB9O1xufVxuIl19