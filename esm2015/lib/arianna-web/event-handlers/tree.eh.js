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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5laC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9ldmVudC1oYW5kbGVycy90cmVlLmVoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRXJDLE1BQU0sT0FBTyxRQUFTLFNBQVEsWUFBWTtJQUExQzs7UUFDVSxpQkFBWSxHQUFHLElBQUksYUFBYSxFQUFFLENBQUM7UUFFbkMsaUJBQVksR0FBRyxLQUFLLENBQUM7UUE4RHJCLHlCQUFvQixHQUFHLEdBQUcsRUFBRTtZQUNsQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUk7aUJBQ2pCLElBQUksQ0FDSCxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFDeEIsS0FBSyxFQUFFLEVBQ1AsY0FBYyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FDbEMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLEVBQUUsRUFBRTtnQkFDekIsVUFBVSxDQUFDLEdBQUcsRUFBRTtvQkFDZCxNQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLDBCQUEwQixDQUFnQixDQUFDO29CQUNwRixNQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsc0JBQXNCLENBQUMsMkJBQTJCLENBQUMsQ0FBQztvQkFDbEYsTUFBTSxnQkFBZ0IsR0FBRyxZQUFZLENBQUMsTUFBTTt3QkFDMUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQzt3QkFDdkMsQ0FBQyxD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O2dCQUNSLEtBQUssK0JBQStCO29CQUFFO3dCQUNwQyxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsT0FBTyxDQUFDO3dCQUMzQixNQUFNLFVBQVUsR0FBRyxNQUFNLENBQUMscUJBQXFCLEVBQUUsQ0FBQzt3QkFDbEQsSUFBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO3dCQUMzRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7cUJBQ3hDO29CQUFDLE1BQU07Z0JBQ1I7b0JBQ0UsTUFBTTthQUNUO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0NBb0RGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5pbXBvcnQgeyBmaXJzdCwgZmlsdGVyLCB3aXRoTGF0ZXN0RnJvbSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgUmVwbGF5U3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEF3VHJlZUVIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcclxuICBwcml2YXRlIHRhcmdldE9mZnNldCA9IG5ldyBSZXBsYXlTdWJqZWN0KCk7XHJcblxyXG4gIHByaXZhdGUgdGFyZ2V0SXNPcGVuID0gZmFsc2U7XHJcblxyXG4gIHB1YmxpYyBsaXN0ZW4oKSB7XHJcbiAgICB0aGlzLmlubmVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XHJcbiAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ2F3LXRyZWUuY2xpY2snOlxyXG4gICAgICAgICAgaWYgKHBheWxvYWQuc291cmNlID09PSAndG9nZ2xlJykge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuYnVpbGQocGF5bG9hZC5pZCk7XHJcbiAgICAgICAgICAgICAgaWYgKHRoaXMudGFyZ2V0SXNPcGVuKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbE9wZW5lZEludG9WaWV3KCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5vdXRlckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xyXG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICBjYXNlICdhdy1zY2hlZGEtbGF5b3V0LnNlbGVjdEl0ZW0nOlxyXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLmJ1aWxkKHBheWxvYWQpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnYXctc2NoZWRhLWxheW91dC5uYXZpZ2F0aW9ucmVzcG9uc2UnOiB7XHJcbiAgICAgICAgICBpZiAocGF5bG9hZC5jdXJyZW50SXRlbSkge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uuc2V0QWN0aXZlKHBheWxvYWQuY3VycmVudEl0ZW0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY29uc3QgY3VycmVudElkID0gcGF5bG9hZC5jdXJyZW50SXRlbSB8fCBwYXlsb2FkLnRyZWUuaWQ7XHJcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UubG9hZChwYXlsb2FkKTtcclxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5idWlsZChjdXJyZW50SWQpO1xyXG4gICAgICAgIH0gYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnYXctc2NoZWRhLWxheW91dC5yb3V0ZWNoYW5nZWQnOlxyXG4gICAgICAgICAgLy8gaGFzIG91dHB1dCAobm90IGZpcnN0IGxvYWQpXHJcbiAgICAgICAgICBpZiAodGhpcy5kYXRhU291cmNlLm91dHB1dCkge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuYnVpbGQocGF5bG9hZCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5zZXRBY3RpdmUocGF5bG9hZCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5oaWdobGlnaHRBY3RpdmUoKTtcclxuICAgICAgICAgICAgdGhpcy5zY3JvbGxMZWFmSW50b1ZpZXcoKTtcclxuICAgICAgICAgIH0gYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnYXctc2NoZWRhLWxheW91dC52aWV3bGVhZic6XHJcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub3V0JFxyXG4gICAgICAgICAgICAucGlwZShcclxuICAgICAgICAgICAgICBmaWx0ZXIoKGRhdGEpID0+ICEhZGF0YSksXHJcbiAgICAgICAgICAgICAgZmlyc3QoKVxyXG4gICAgICAgICAgICApLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy5zY3JvbGxMZWFmSW50b1ZpZXcoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdhdy1zY2hlZGEtbGF5b3V0LnRyZWVwb3NpdGlvbic6IHtcclxuICAgICAgICAgIGNvbnN0IHsgdGFyZ2V0IH0gPSBwYXlsb2FkO1xyXG4gICAgICAgICAgY29uc3QgdGFyZ2V0UmVjdCA9IHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICAgIHRoaXMudGFyZ2V0SXNPcGVuID0gdGFyZ2V0LmNsYXNzTmFtZS5pbmRleE9mKCduNy1pY29uLWFuZ2xlLXJpZ2h0JykgIT09IC0xO1xyXG4gICAgICAgICAgdGhpcy50YXJnZXRPZmZzZXQubmV4dCh0YXJnZXRSZWN0LnRvcCk7XHJcbiAgICAgICAgfSBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzY3JvbGxPcGVuZWRJbnRvVmlldyA9ICgpID0+IHtcclxuICAgIHRoaXMuZGF0YVNvdXJjZS5vdXQkXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIGZpbHRlcigoZGF0YSkgPT4gISFkYXRhKSxcclxuICAgICAgICBmaXJzdCgpLFxyXG4gICAgICAgIHdpdGhMYXRlc3RGcm9tKHRoaXMudGFyZ2V0T2Zmc2V0KSxcclxuICAgICAgKS5zdWJzY3JpYmUoKFssIG9mZnNldF0pID0+IHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHdyYXBwZXJFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hdy1zY2hlZGFfX3RyZWUtY29udGVudCcpIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAgICAgY29uc3QgZXhwYW5kZWROb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbjctdHJlZV9faXRlbSBpcy1leHBhbmRlZCcpO1xyXG4gICAgICAgICAgY29uc3QgbGFzdEV4cGFuZGVkTm9kZSA9IGV4cGFuZGVkTm9kZS5sZW5ndGhcclxuICAgICAgICAgICAgPyBleHBhbmRlZE5vZGVbZXhwYW5kZWROb2RlLmxlbmd0aCAtIDFdXHJcbiAgICAgICAgICAgIDogbnVsbDtcclxuICAgICAgICAgIGlmIChsYXN0RXhwYW5kZWROb2RlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbFRyZWVFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uNy10cmVlJykgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIGNvbnN0IHdyYXBwZXJFbFJlY3QgPSB3cmFwcGVyRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG9mZnNldFRvQWRqdXN0ID0gb2Zmc2V0IC0gd3JhcHBlckVsUmVjdC50b3A7XHJcbiAgICAgICAgICAgIHNjcm9sbFRyZWVFbC5zdHlsZS5tYXJnaW5Cb3R0b20gPSAnMTAwMHB4JztcclxuICAgICAgICAgICAgbGFzdEV4cGFuZGVkTm9kZS5zY3JvbGxJbnRvVmlldygpO1xyXG4gICAgICAgICAgICB3cmFwcGVyRWwuc2Nyb2xsVG9wIC09IG9mZnNldFRvQWRqdXN0O1xyXG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XHJcbiAgICAgICAgICAgIHNjcm9sbFRyZWVFbC5zdHlsZS5tYXJnaW5Cb3R0b20gPSAnMHB4JztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LCAyMDApO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2Nyb2xsTGVhZkludG9WaWV3ID0gKCkgPT4ge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHRyZWVOb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2LmF3LXNjaGVkYV9fdHJlZScpO1xyXG4gICAgICBjb25zdCBsZWFmTm9kZSA9IHRyZWVOb2RlLnF1ZXJ5U2VsZWN0b3IoJy5pcy1hY3RpdmUgLm43LXRyZWVfX2l0ZW0tY29udGVudHMnKSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgaWYgKGxlYWZOb2RlICYmICF0aGlzLmlzSW5WaWV3cG9ydChsZWFmTm9kZSkpIHtcclxuICAgICAgICBsZWFmTm9kZS5zY3JvbGxJbnRvVmlldygpO1xyXG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcclxuICAgICAgICBpZiAoIXRoaXMuaXNJblZpZXdwb3J0KGxlYWZOb2RlKSkge1xyXG4gICAgICAgICAgdGhpcy5zY3JvbGxMZWFmSW50b1ZpZXcoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgaXNJblZpZXdwb3J0ID0gKGVsZW0pID0+IHtcclxuICAgIGNvbnN0IGJvdW5kaW5nID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIGJvdW5kaW5nLnRvcCA+PSAwXHJcbiAgICAgICYmIGJvdW5kaW5nLmxlZnQgPj0gMFxyXG4gICAgICAmJiBib3VuZGluZy5ib3R0b20gPD0gKHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KVxyXG4gICAgICAmJiBib3VuZGluZy5yaWdodCA8PSAod2luZG93LmlubmVyV2lkdGggfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoKVxyXG4gICAgKTtcclxuICB9O1xyXG59XHJcbiJdfQ==