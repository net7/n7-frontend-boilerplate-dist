import { EventHandler } from '@n7-frontend/core';
import { first, filter, withLatestFrom } from 'rxjs/operators';
import { ReplaySubject } from 'rxjs';
export class AwTreeEH extends EventHandler {
    constructor() {
        super(...arguments);
        this.targetOffset = new ReplaySubject();
        this.targetIsOpen = false;
        this.scrollOpenedIntoView = () => {
            this.dataSource.out$
                .pipe(filter((data) => !!data), first(), withLatestFrom(this.targetOffset)).subscribe(([, offset]) => {
                setTimeout(() => {
                    const wrapperEl = document.querySelector('.aw-scheda__tree-content');
                    const expandedNode = document.getElementsByClassName('n7-tree__item is-expanded');
                    const lastExpandedNode = expandedNode.length
                        ? expandedNode[expandedNode.length - 1]
                        : null;
                    if (lastExpandedNode) {
                        const scrollTreeEl = document.querySelector('.n7-tree');
                        const wrapperElRect = wrapperEl.getBoundingClientRect();
                        const offsetToAdjust = offset - wrapperElRect.top;
                        scrollTreeEl.style.marginBottom = '1000px';
                        lastExpandedNode.scrollIntoView();
                        wrapperEl.scrollTop -= offsetToAdjust;
                        window.scrollTo(0, 0);
                        scrollTreeEl.style.marginBottom = '0px';
                    }
                }, 200);
            });
        };
        this.scrollLeafIntoView = () => {
            setTimeout(() => {
                const treeNode = document.querySelector('div.aw-scheda__tree');
                const leafNode = treeNode.querySelector('.is-active .n7-tree__item-contents');
                if (leafNode && !this.isInViewport(leafNode)) {
                    leafNode.scrollIntoView();
                    window.scrollTo(0, 0);
                    if (!this.isInViewport(leafNode)) {
                        this.scrollLeafIntoView();
                    }
                }
            });
        };
        this.isInViewport = (elem) => {
            const bounding = elem.getBoundingClientRect();
            return (bounding.top >= 0
                && bounding.left >= 0
                && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
                && bounding.right <= (window.innerWidth || document.documentElement.clientWidth));
        };
    }
    listen() {
        this.innerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case 'aw-tree.click':
                    if (payload.source === 'toggle') {
                        setTimeout(() => {
                            this.dataSource.build(payload.id);
                            if (this.targetIsOpen) {
                                this.scrollOpenedIntoView();
                            }
                        });
                    }
                    break;
                default:
                    break;
            }
        });
        this.outerEvents$.subscribe(({ type, payload }) => {
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
                        .pipe(filter((data) => !!data), first()).subscribe(() => {
                        this.scrollLeafIntoView();
                    });
                    break;
                case 'aw-scheda-layout.treeposition':
                    {
                        const { target } = payload;
                        const targetRect = target.getBoundingClientRect();
                        this.targetIsOpen = target.className.indexOf('n7-icon-angle-right') !== -1;
                        this.targetOffset.next(targetRect.top);
                    }
                    break;
                default:
                    break;
            }
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5laC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9ldmVudC1oYW5kbGVycy90cmVlLmVoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRXJDLE1BQU0sT0FBTyxRQUFTLFNBQVEsWUFBWTtJQUExQzs7UUFDVSxpQkFBWSxHQUFHLElBQUksYUFBYSxFQUFFLENBQUM7UUFFbkMsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFpRXJCLHlCQUFvQixHQUFHLEdBQUcsRUFBRTtZQUNsQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUk7aUJBQ2pCLElBQUksQ0FDSCxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFDeEIsS0FBSyxFQUFFLEVBQ1AsY0FBYyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FDbEMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLEVBQUUsRUFBRTtnQkFDekIsVUFBVSxDQUFDLEdBQUcsRUFBRTtvQkFDZCxNQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLDBCQUEwQixDQUFnQixDQUFDO29CQUNwRixNQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsc0JBQXNCLENBQUMsMkJBQTJCLENBQUMsQ0FBQztvQkFDbEYsTUFBTSxnQkFBZ0IsR0FBRyxZQUFZLENBQUMsTUFBTTt3QkFDMUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQzt3QkFDdkMsQ0FBQyxD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RyxFQUFFO3dCQUNmLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO29CQUM1QixDQUFDLENBQUMsQ0FBQztvQkFDTCxNQUFNO2dCQUNSLEtBQUssK0JBQStCO29CQUFFO3dCQUNwQyxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsT0FBTyxDQUFDO3dCQUMzQixNQUFNLFVBQVUsR0FBRyxNQUFNLENBQUMscUJBQXFCLEVBQUUsQ0FBQzt3QkFDbEQsSUFBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO3dCQUMzRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7cUJBQ3hDO29CQUFDLE1BQU07Z0JBQ1I7b0JBQ0UsTUFBTTthQUNUO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0NBb0RGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgZmlyc3QsIGZpbHRlciwgd2l0aExhdGVzdEZyb20gfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBSZXBsYXlTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBjbGFzcyBBd1RyZWVFSCBleHRlbmRzIEV2ZW50SGFuZGxlciB7XG4gIHByaXZhdGUgdGFyZ2V0T2Zmc2V0ID0gbmV3IFJlcGxheVN1YmplY3QoKTtcblxuICBwcml2YXRlIHRhcmdldElzT3BlbiA9IGZhbHNlO1xuXG4gIHB1YmxpYyBsaXN0ZW4oKSB7XG4gICAgdGhpcy5pbm5lckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ2F3LXRyZWUuY2xpY2snOlxuICAgICAgICAgIGlmIChwYXlsb2FkLnNvdXJjZSA9PT0gJ3RvZ2dsZScpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuYnVpbGQocGF5bG9hZC5pZCk7XG4gICAgICAgICAgICAgIGlmICh0aGlzLnRhcmdldElzT3Blbikge1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsT3BlbmVkSW50b1ZpZXcoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5vdXRlckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ2F3LXNpZGViYXItaGVhZGVyLmNsaWNrJzpcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UudG9nZ2xlU2lkZWJhcigpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1zY2hlZGEtbGF5b3V0LnNlbGVjdEl0ZW0nOlxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5idWlsZChwYXlsb2FkKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctc2NoZWRhLWxheW91dC5uYXZpZ2F0aW9ucmVzcG9uc2UnOiB7XG4gICAgICAgICAgaWYgKHBheWxvYWQuY3VycmVudEl0ZW0pIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5zZXRBY3RpdmUocGF5bG9hZC5jdXJyZW50SXRlbSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IGN1cnJlbnRJZCA9IHBheWxvYWQuY3VycmVudEl0ZW0gfHwgcGF5bG9hZC50cmVlLmlkO1xuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5sb2FkKHBheWxvYWQpO1xuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5idWlsZChjdXJyZW50SWQpO1xuICAgICAgICB9IGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1zY2hlZGEtbGF5b3V0LnJvdXRlY2hhbmdlZCc6XG4gICAgICAgICAgLy8gaGFzIG91dHB1dCAobm90IGZpcnN0IGxvYWQpXG4gICAgICAgICAgaWYgKHRoaXMuZGF0YVNvdXJjZS5vdXRwdXQpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5idWlsZChwYXlsb2FkKTtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5zZXRBY3RpdmUocGF5bG9hZCk7XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuaGlnaGxpZ2h0QWN0aXZlKCk7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbExlYWZJbnRvVmlldygpO1xuICAgICAgICAgIH0gYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LXNjaGVkYS1sYXlvdXQudmlld2xlYWYnOlxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vdXQkXG4gICAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgICAgZmlsdGVyKChkYXRhKSA9PiAhIWRhdGEpLFxuICAgICAgICAgICAgICBmaXJzdCgpXG4gICAgICAgICAgICApLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuc2Nyb2xsTGVhZkludG9WaWV3KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctc2NoZWRhLWxheW91dC50cmVlcG9zaXRpb24nOiB7XG4gICAgICAgICAgY29uc3QgeyB0YXJnZXQgfSA9IHBheWxvYWQ7XG4gICAgICAgICAgY29uc3QgdGFyZ2V0UmVjdCA9IHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICB0aGlzLnRhcmdldElzT3BlbiA9IHRhcmdldC5jbGFzc05hbWUuaW5kZXhPZignbjctaWNvbi1hbmdsZS1yaWdodCcpICE9PSAtMTtcbiAgICAgICAgICB0aGlzLnRhcmdldE9mZnNldC5uZXh0KHRhcmdldFJlY3QudG9wKTtcbiAgICAgICAgfSBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgc2Nyb2xsT3BlbmVkSW50b1ZpZXcgPSAoKSA9PiB7XG4gICAgdGhpcy5kYXRhU291cmNlLm91dCRcbiAgICAgIC5waXBlKFxuICAgICAgICBmaWx0ZXIoKGRhdGEpID0+ICEhZGF0YSksXG4gICAgICAgIGZpcnN0KCksXG4gICAgICAgIHdpdGhMYXRlc3RGcm9tKHRoaXMudGFyZ2V0T2Zmc2V0KSxcbiAgICAgICkuc3Vic2NyaWJlKChbLCBvZmZzZXRdKSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHdyYXBwZXJFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hdy1zY2hlZGFfX3RyZWUtY29udGVudCcpIGFzIEhUTUxFbGVtZW50O1xuICAgICAgICAgIGNvbnN0IGV4cGFuZGVkTm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ243LXRyZWVfX2l0ZW0gaXMtZXhwYW5kZWQnKTtcbiAgICAgICAgICBjb25zdCBsYXN0RXhwYW5kZWROb2RlID0gZXhwYW5kZWROb2RlLmxlbmd0aFxuICAgICAgICAgICAgPyBleHBhbmRlZE5vZGVbZXhwYW5kZWROb2RlLmxlbmd0aCAtIDFdXG4gICAgICAgICAgICA6IG51bGw7XG4gICAgICAgICAgaWYgKGxhc3RFeHBhbmRlZE5vZGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbFRyZWVFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uNy10cmVlJykgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgICAgICBjb25zdCB3cmFwcGVyRWxSZWN0ID0gd3JhcHBlckVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgY29uc3Qgb2Zmc2V0VG9BZGp1c3QgPSBvZmZzZXQgLSB3cmFwcGVyRWxSZWN0LnRvcDtcbiAgICAgICAgICAgIHNjcm9sbFRyZWVFbC5zdHlsZS5tYXJnaW5Cb3R0b20gPSAnMTAwMHB4JztcbiAgICAgICAgICAgIGxhc3RFeHBhbmRlZE5vZGUuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgICAgIHdyYXBwZXJFbC5zY3JvbGxUb3AgLT0gb2Zmc2V0VG9BZGp1c3Q7XG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgICAgICAgICBzY3JvbGxUcmVlRWwuc3R5bGUubWFyZ2luQm90dG9tID0gJzBweCc7XG4gICAgICAgICAgfVxuICAgICAgICB9LCAyMDApO1xuICAgICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHNjcm9sbExlYWZJbnRvVmlldyA9ICgpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnN0IHRyZWVOb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2LmF3LXNjaGVkYV9fdHJlZScpO1xuICAgICAgY29uc3QgbGVhZk5vZGUgPSB0cmVlTm9kZS5xdWVyeVNlbGVjdG9yKCcuaXMtYWN0aXZlIC5uNy10cmVlX19pdGVtLWNvbnRlbnRzJykgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICBpZiAobGVhZk5vZGUgJiYgIXRoaXMuaXNJblZpZXdwb3J0KGxlYWZOb2RlKSkge1xuICAgICAgICBsZWFmTm9kZS5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgICAgIGlmICghdGhpcy5pc0luVmlld3BvcnQobGVhZk5vZGUpKSB7XG4gICAgICAgICAgdGhpcy5zY3JvbGxMZWFmSW50b1ZpZXcoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIHByaXZhdGUgaXNJblZpZXdwb3J0ID0gKGVsZW0pID0+IHtcbiAgICBjb25zdCBib3VuZGluZyA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgcmV0dXJuIChcbiAgICAgIGJvdW5kaW5nLnRvcCA+PSAwXG4gICAgICAmJiBib3VuZGluZy5sZWZ0ID49IDBcbiAgICAgICYmIGJvdW5kaW5nLmJvdHRvbSA8PSAod2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpXG4gICAgICAmJiBib3VuZGluZy5yaWdodCA8PSAod2luZG93LmlubmVyV2lkdGggfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoKVxuICAgICk7XG4gIH07XG59XG4iXX0=