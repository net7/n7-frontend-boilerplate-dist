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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5laC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL243LWJvaWxlcnBsYXRlLWxpYi9zcmMvbGliL2FyaWFubmEtd2ViL2V2ZW50LWhhbmRsZXJzL3RyZWUuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFckMsTUFBTSxPQUFPLFFBQVMsU0FBUSxZQUFZO0lBQTFDOztRQUNVLGlCQUFZLEdBQUcsSUFBSSxhQUFhLEVBQUUsQ0FBQztRQUVuQyxpQkFBWSxHQUFHLEtBQUssQ0FBQztRQThEckIseUJBQW9CLEdBQUcsR0FBRyxFQUFFO1lBQ2xDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSTtpQkFDakIsSUFBSSxDQUNILE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUN4QixLQUFLLEVBQUUsRUFDUCxjQUFjLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUNsQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsRUFBRSxFQUFFO2dCQUN6QixVQUFVLENBQUMsR0FBRyxFQUFFO29CQUNkLE1BQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsMEJBQTBCLENBQWdCLENBQUM7b0JBQ3BGLE1BQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO29CQUNsRixNQUFNLGdCQUFnQixHQUFHLFlBQVksQ0FBQyxNQUFNO3dCQUMxQyxDQUFDLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsQ0FB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Q0FBQyxDQUFDO29CQUNMLE1BQU07Z0JBQ1IsS0FBSywrQkFBK0I7b0JBQUU7d0JBQ3BDLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxPQUFPLENBQUM7d0JBQzNCLE1BQU0sVUFBVSxHQUFHLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO3dCQUNsRCxJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7d0JBQzNFLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztxQkFDeEM7b0JBQUMsTUFBTTtnQkFDUjtvQkFDRSxNQUFNO2FBQ1Q7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FvREYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBmaXJzdCwgZmlsdGVyLCB3aXRoTGF0ZXN0RnJvbSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFJlcGxheVN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGNsYXNzIEF3VHJlZUVIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcbiAgcHJpdmF0ZSB0YXJnZXRPZmZzZXQgPSBuZXcgUmVwbGF5U3ViamVjdCgpO1xuXG4gIHByaXZhdGUgdGFyZ2V0SXNPcGVuID0gZmFsc2U7XG5cbiAgcHVibGljIGxpc3RlbigpIHtcbiAgICB0aGlzLmlubmVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnYXctdHJlZS5jbGljayc6XG4gICAgICAgICAgaWYgKHBheWxvYWQuc291cmNlID09PSAndG9nZ2xlJykge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5idWlsZChwYXlsb2FkLmlkKTtcbiAgICAgICAgICAgICAgaWYgKHRoaXMudGFyZ2V0SXNPcGVuKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxPcGVuZWRJbnRvVmlldygpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLm91dGVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnYXctc2NoZWRhLWxheW91dC5zZWxlY3RJdGVtJzpcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuYnVpbGQocGF5bG9hZCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LXNjaGVkYS1sYXlvdXQubmF2aWdhdGlvbnJlc3BvbnNlJzoge1xuICAgICAgICAgIGlmIChwYXlsb2FkLmN1cnJlbnRJdGVtKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uuc2V0QWN0aXZlKHBheWxvYWQuY3VycmVudEl0ZW0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBjdXJyZW50SWQgPSBwYXlsb2FkLmN1cnJlbnRJdGVtIHx8IHBheWxvYWQudHJlZS5pZDtcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UubG9hZChwYXlsb2FkKTtcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuYnVpbGQoY3VycmVudElkKTtcbiAgICAgICAgfSBicmVhaztcbiAgICAgICAgY2FzZSAnYXctc2NoZWRhLWxheW91dC5yb3V0ZWNoYW5nZWQnOlxuICAgICAgICAgIC8vIGhhcyBvdXRwdXQgKG5vdCBmaXJzdCBsb2FkKVxuICAgICAgICAgIGlmICh0aGlzLmRhdGFTb3VyY2Uub3V0cHV0KSB7XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuYnVpbGQocGF5bG9hZCk7XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uuc2V0QWN0aXZlKHBheWxvYWQpO1xuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLmhpZ2hsaWdodEFjdGl2ZSgpO1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxMZWFmSW50b1ZpZXcoKTtcbiAgICAgICAgICB9IGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1zY2hlZGEtbGF5b3V0LnZpZXdsZWFmJzpcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub3V0JFxuICAgICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICAgIGZpbHRlcigoZGF0YSkgPT4gISFkYXRhKSxcbiAgICAgICAgICAgICAgZmlyc3QoKVxuICAgICAgICAgICAgKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLnNjcm9sbExlYWZJbnRvVmlldygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LXNjaGVkYS1sYXlvdXQudHJlZXBvc2l0aW9uJzoge1xuICAgICAgICAgIGNvbnN0IHsgdGFyZ2V0IH0gPSBwYXlsb2FkO1xuICAgICAgICAgIGNvbnN0IHRhcmdldFJlY3QgPSB0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgdGhpcy50YXJnZXRJc09wZW4gPSB0YXJnZXQuY2xhc3NOYW1lLmluZGV4T2YoJ243LWljb24tYW5nbGUtcmlnaHQnKSAhPT0gLTE7XG4gICAgICAgICAgdGhpcy50YXJnZXRPZmZzZXQubmV4dCh0YXJnZXRSZWN0LnRvcCk7XG4gICAgICAgIH0gYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHNjcm9sbE9wZW5lZEludG9WaWV3ID0gKCkgPT4ge1xuICAgIHRoaXMuZGF0YVNvdXJjZS5vdXQkXG4gICAgICAucGlwZShcbiAgICAgICAgZmlsdGVyKChkYXRhKSA9PiAhIWRhdGEpLFxuICAgICAgICBmaXJzdCgpLFxuICAgICAgICB3aXRoTGF0ZXN0RnJvbSh0aGlzLnRhcmdldE9mZnNldCksXG4gICAgICApLnN1YnNjcmliZSgoWywgb2Zmc2V0XSkgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBjb25zdCB3cmFwcGVyRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXctc2NoZWRhX190cmVlLWNvbnRlbnQnKSBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgICBjb25zdCBleHBhbmRlZE5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduNy10cmVlX19pdGVtIGlzLWV4cGFuZGVkJyk7XG4gICAgICAgICAgY29uc3QgbGFzdEV4cGFuZGVkTm9kZSA9IGV4cGFuZGVkTm9kZS5sZW5ndGhcbiAgICAgICAgICAgID8gZXhwYW5kZWROb2RlW2V4cGFuZGVkTm9kZS5sZW5ndGggLSAxXVxuICAgICAgICAgICAgOiBudWxsO1xuICAgICAgICAgIGlmIChsYXN0RXhwYW5kZWROb2RlKSB7XG4gICAgICAgICAgICBjb25zdCBzY3JvbGxUcmVlRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubjctdHJlZScpIGFzIEhUTUxFbGVtZW50O1xuICAgICAgICAgICAgY29uc3Qgd3JhcHBlckVsUmVjdCA9IHdyYXBwZXJFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIGNvbnN0IG9mZnNldFRvQWRqdXN0ID0gb2Zmc2V0IC0gd3JhcHBlckVsUmVjdC50b3A7XG4gICAgICAgICAgICBzY3JvbGxUcmVlRWwuc3R5bGUubWFyZ2luQm90dG9tID0gJzEwMDBweCc7XG4gICAgICAgICAgICBsYXN0RXhwYW5kZWROb2RlLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgICAgICB3cmFwcGVyRWwuc2Nyb2xsVG9wIC09IG9mZnNldFRvQWRqdXN0O1xuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgICAgICAgICAgc2Nyb2xsVHJlZUVsLnN0eWxlLm1hcmdpbkJvdHRvbSA9ICcwcHgnO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgMjAwKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBzY3JvbGxMZWFmSW50b1ZpZXcgPSAoKSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zdCB0cmVlTm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5hdy1zY2hlZGFfX3RyZWUnKTtcbiAgICAgIGNvbnN0IGxlYWZOb2RlID0gdHJlZU5vZGUucXVlcnlTZWxlY3RvcignLmlzLWFjdGl2ZSAubjctdHJlZV9faXRlbS1jb250ZW50cycpIGFzIEhUTUxFbGVtZW50O1xuICAgICAgaWYgKGxlYWZOb2RlICYmICF0aGlzLmlzSW5WaWV3cG9ydChsZWFmTm9kZSkpIHtcbiAgICAgICAgbGVhZk5vZGUuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgICAgICBpZiAoIXRoaXMuaXNJblZpZXdwb3J0KGxlYWZOb2RlKSkge1xuICAgICAgICAgIHRoaXMuc2Nyb2xsTGVhZkludG9WaWV3KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBwcml2YXRlIGlzSW5WaWV3cG9ydCA9IChlbGVtKSA9PiB7XG4gICAgY29uc3QgYm91bmRpbmcgPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHJldHVybiAoXG4gICAgICBib3VuZGluZy50b3AgPj0gMFxuICAgICAgJiYgYm91bmRpbmcubGVmdCA+PSAwXG4gICAgICAmJiBib3VuZGluZy5ib3R0b20gPD0gKHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KVxuICAgICAgJiYgYm91bmRpbmcucmlnaHQgPD0gKHdpbmRvdy5pbm5lcldpZHRoIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aClcbiAgICApO1xuICB9O1xufVxuIl19