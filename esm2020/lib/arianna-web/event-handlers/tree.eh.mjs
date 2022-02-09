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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5laC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL243LWJvaWxlcnBsYXRlLWxpYi9zcmMvbGliL2FyaWFubmEtd2ViL2V2ZW50LWhhbmRsZXJzL3RyZWUuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFckMsTUFBTSxPQUFPLFFBQVMsU0FBUSxZQUFZO0lBQTFDOztRQUNVLGlCQUFZLEdBQUcsSUFBSSxhQUFhLEVBQUUsQ0FBQztRQUVuQyxpQkFBWSxHQUFHLEtBQUssQ0FBQztRQThEckIseUJBQW9CLEdBQUcsR0FBRyxFQUFFO1lBQ2xDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSTtpQkFDakIsSUFBSSxDQUNILE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUN4QixLQUFLLEVBQUUsRUFDUCxjQUFjLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUNsQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsRUFBRSxFQUFFO2dCQUN6QixVQUFVLENBQUMsR0FBRyxFQUFFO29CQUNkLE1BQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsMEJBQTBCLENBQWdCLENBQUM7b0JBQ3BGLE1BQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO29CQUNsRixNQUFNLGdCQUFnQixHQUFHLFlBQVksQ0FBQyxNQUFNO3dCQUMxQyxDQUFDLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO3dCQUN2QyxDQUFDLENBQUMsSUFBSSxDQUFDO29CQUNULElBQUksZ0JBQWdCLEVBQUU7d0JBQ3BCLE1BQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFnQixDQUFDO3dCQUN2RSxNQUFNLGFBQWEsR0FBRyxTQUFTLENBQUMscUJBQXFCLEVBQUUsQ0FBQzt3QkFDeEQsTUFBTSxjQUFjLEdBQUcsTUFBTSxHQUFHLGFBQWEsQ0FBQyxHQUFHLENBQUM7d0JBQ2xELFlBQVksQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQzt3QkFDM0MsZ0JBQWdCLENBQUMsY0FBYyxFQUFFLENBQUM7d0JBQ2xDLFNBQVMsQ0FBQyxTQUFTLElBQUksY0FBYyxDQUFDO3dCQUN0QyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzt3QkFDdEIsWUFBWSxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO3FCQUN6QztnQkFDSCxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDVixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQTtRQUVPLHVCQUFrQixHQUFHLEdBQUcsRUFBRTtZQUNoQyxVQUFVLENBQUMsR0FBRyxFQUFFO2dCQUNkLE1BQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMscUJBQXFCLENBQUMsQ0FBQztnQkFDL0QsTUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxvQ0FBb0MsQ0FBZ0IsQ0FBQztnQkFDN0YsSUFBSSxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxFQUFFO29CQUM1QyxRQUFRLENBQUMsY0FBYyxFQUFFLENBQUM7b0JBQzFCLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsRUFBRTt3QkFDaEMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7cUJBQzNCO2lCQUNGO1lBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUM7UUFFTSxpQkFBWSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDOUIsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7WUFDOUMsT0FBTyxDQUNMLFFBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQzttQkFDZCxRQUFRLENBQUMsSUFBSSxJQUFJLENBQUM7bUJBQ2xCLFFBQVEsQ0FBQyxNQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxJQUFJLFFBQVEsQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDO21CQUNoRixRQUFRLENBQUMsS0FBSyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsSUFBSSxRQUFRLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxDQUNqRixDQUFDO1FBQ0osQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQTlHUSxNQUFNO1FBQ1gsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO1lBQ2hELFFBQVEsSUFBSSxFQUFFO2dCQUNaLEtBQUssZUFBZTtvQkFDbEIsSUFBSSxPQUFPLENBQUMsTUFBTSxLQUFLLFFBQVEsRUFBRTt3QkFDL0IsVUFBVSxDQUFDLEdBQUcsRUFBRTs0QkFDZCxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7NEJBQ2xDLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtnQ0FDckIsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7NkJBQzdCO3dCQUNILENBQUMsQ0FBQyxDQUFDO3FCQUNKO29CQUNELE1BQU07Z0JBQ1I7b0JBQ0UsTUFBTTthQUNUO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7WUFDaEQsUUFBUSxJQUFJLEVBQUU7Z0JBQ1osS0FBSyw2QkFBNkI7b0JBQ2hDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUMvQixNQUFNO2dCQUNSLEtBQUsscUNBQXFDO29CQUFFO3dCQUMxQyxJQUFJLE9BQU8sQ0FBQyxXQUFXLEVBQUU7NEJBQ3ZCLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQzt5QkFDaEQ7d0JBQ0QsTUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLFdBQVcsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQzt3QkFDekQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7d0JBQzlCLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO3FCQUNsQztvQkFBQyxNQUFNO2dCQUNSLEtBQUssK0JBQStCO29CQUNsQyw4QkFBOEI7b0JBQzlCLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUU7d0JBQzFCLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO3dCQUMvQixJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQzt3QkFDbkMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLEVBQUUsQ0FBQzt3QkFDbEMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7cUJBQzNCO29CQUFDLE1BQU07Z0JBQ1YsS0FBSywyQkFBMkI7b0JBQzlCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSTt5QkFDakIsSUFBSSxDQUNILE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUN4QixLQUFLLEVBQUUsQ0FDUixDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7d0JBQ2YsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7b0JBQzVCLENBQUMsQ0FBQyxDQUFDO29CQUNMLE1BQU07Z0JBQ1IsS0FBSywrQkFBK0I7b0JBQUU7d0JBQ3BDLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxPQUFPLENBQUM7d0JBQzNCLE1BQU0sVUFBVSxHQUFHLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO3dCQUNsRCxJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7d0JBQzNFLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztxQkFDeEM7b0JBQUMsTUFBTTtnQkFDUjtvQkFDRSxNQUFNO2FBQ1Q7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FvREYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcbmltcG9ydCB7IGZpcnN0LCBmaWx0ZXIsIHdpdGhMYXRlc3RGcm9tIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBSZXBsYXlTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgQXdUcmVlRUggZXh0ZW5kcyBFdmVudEhhbmRsZXIge1xyXG4gIHByaXZhdGUgdGFyZ2V0T2Zmc2V0ID0gbmV3IFJlcGxheVN1YmplY3QoKTtcclxuXHJcbiAgcHJpdmF0ZSB0YXJnZXRJc09wZW4gPSBmYWxzZTtcclxuXHJcbiAgcHVibGljIGxpc3RlbigpIHtcclxuICAgIHRoaXMuaW5uZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcclxuICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnYXctdHJlZS5jbGljayc6XHJcbiAgICAgICAgICBpZiAocGF5bG9hZC5zb3VyY2UgPT09ICd0b2dnbGUnKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5idWlsZChwYXlsb2FkLmlkKTtcclxuICAgICAgICAgICAgICBpZiAodGhpcy50YXJnZXRJc09wZW4pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsT3BlbmVkSW50b1ZpZXcoKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLm91dGVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XHJcbiAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ2F3LXNjaGVkYS1sYXlvdXQuc2VsZWN0SXRlbSc6XHJcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuYnVpbGQocGF5bG9hZCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdhdy1zY2hlZGEtbGF5b3V0Lm5hdmlnYXRpb25yZXNwb25zZSc6IHtcclxuICAgICAgICAgIGlmIChwYXlsb2FkLmN1cnJlbnRJdGVtKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5zZXRBY3RpdmUocGF5bG9hZC5jdXJyZW50SXRlbSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjb25zdCBjdXJyZW50SWQgPSBwYXlsb2FkLmN1cnJlbnRJdGVtIHx8IHBheWxvYWQudHJlZS5pZDtcclxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5sb2FkKHBheWxvYWQpO1xyXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLmJ1aWxkKGN1cnJlbnRJZCk7XHJcbiAgICAgICAgfSBicmVhaztcclxuICAgICAgICBjYXNlICdhdy1zY2hlZGEtbGF5b3V0LnJvdXRlY2hhbmdlZCc6XHJcbiAgICAgICAgICAvLyBoYXMgb3V0cHV0IChub3QgZmlyc3QgbG9hZClcclxuICAgICAgICAgIGlmICh0aGlzLmRhdGFTb3VyY2Uub3V0cHV0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5idWlsZChwYXlsb2FkKTtcclxuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnNldEFjdGl2ZShwYXlsb2FkKTtcclxuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLmhpZ2hsaWdodEFjdGl2ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLnNjcm9sbExlYWZJbnRvVmlldygpO1xyXG4gICAgICAgICAgfSBicmVhaztcclxuICAgICAgICBjYXNlICdhdy1zY2hlZGEtbGF5b3V0LnZpZXdsZWFmJzpcclxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vdXQkXHJcbiAgICAgICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgICAgIGZpbHRlcigoZGF0YSkgPT4gISFkYXRhKSxcclxuICAgICAgICAgICAgICBmaXJzdCgpXHJcbiAgICAgICAgICAgICkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLnNjcm9sbExlYWZJbnRvVmlldygpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2F3LXNjaGVkYS1sYXlvdXQudHJlZXBvc2l0aW9uJzoge1xyXG4gICAgICAgICAgY29uc3QgeyB0YXJnZXQgfSA9IHBheWxvYWQ7XHJcbiAgICAgICAgICBjb25zdCB0YXJnZXRSZWN0ID0gdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgICAgdGhpcy50YXJnZXRJc09wZW4gPSB0YXJnZXQuY2xhc3NOYW1lLmluZGV4T2YoJ243LWljb24tYW5nbGUtcmlnaHQnKSAhPT0gLTE7XHJcbiAgICAgICAgICB0aGlzLnRhcmdldE9mZnNldC5uZXh0KHRhcmdldFJlY3QudG9wKTtcclxuICAgICAgICB9IGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNjcm9sbE9wZW5lZEludG9WaWV3ID0gKCkgPT4ge1xyXG4gICAgdGhpcy5kYXRhU291cmNlLm91dCRcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgZmlsdGVyKChkYXRhKSA9PiAhIWRhdGEpLFxyXG4gICAgICAgIGZpcnN0KCksXHJcbiAgICAgICAgd2l0aExhdGVzdEZyb20odGhpcy50YXJnZXRPZmZzZXQpLFxyXG4gICAgICApLnN1YnNjcmliZSgoWywgb2Zmc2V0XSkgPT4ge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgY29uc3Qgd3JhcHBlckVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmF3LXNjaGVkYV9fdHJlZS1jb250ZW50JykgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgICBjb25zdCBleHBhbmRlZE5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduNy10cmVlX19pdGVtIGlzLWV4cGFuZGVkJyk7XHJcbiAgICAgICAgICBjb25zdCBsYXN0RXhwYW5kZWROb2RlID0gZXhwYW5kZWROb2RlLmxlbmd0aFxyXG4gICAgICAgICAgICA/IGV4cGFuZGVkTm9kZVtleHBhbmRlZE5vZGUubGVuZ3RoIC0gMV1cclxuICAgICAgICAgICAgOiBudWxsO1xyXG4gICAgICAgICAgaWYgKGxhc3RFeHBhbmRlZE5vZGUpIHtcclxuICAgICAgICAgICAgY29uc3Qgc2Nyb2xsVHJlZUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm43LXRyZWUnKSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgICAgICAgY29uc3Qgd3JhcHBlckVsUmVjdCA9IHdyYXBwZXJFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICAgICAgY29uc3Qgb2Zmc2V0VG9BZGp1c3QgPSBvZmZzZXQgLSB3cmFwcGVyRWxSZWN0LnRvcDtcclxuICAgICAgICAgICAgc2Nyb2xsVHJlZUVsLnN0eWxlLm1hcmdpbkJvdHRvbSA9ICcxMDAwcHgnO1xyXG4gICAgICAgICAgICBsYXN0RXhwYW5kZWROb2RlLnNjcm9sbEludG9WaWV3KCk7XHJcbiAgICAgICAgICAgIHdyYXBwZXJFbC5zY3JvbGxUb3AgLT0gb2Zmc2V0VG9BZGp1c3Q7XHJcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcclxuICAgICAgICAgICAgc2Nyb2xsVHJlZUVsLnN0eWxlLm1hcmdpbkJvdHRvbSA9ICcwcHgnO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sIDIwMCk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzY3JvbGxMZWFmSW50b1ZpZXcgPSAoKSA9PiB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgY29uc3QgdHJlZU5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYuYXctc2NoZWRhX190cmVlJyk7XHJcbiAgICAgIGNvbnN0IGxlYWZOb2RlID0gdHJlZU5vZGUucXVlcnlTZWxlY3RvcignLmlzLWFjdGl2ZSAubjctdHJlZV9faXRlbS1jb250ZW50cycpIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICBpZiAobGVhZk5vZGUgJiYgIXRoaXMuaXNJblZpZXdwb3J0KGxlYWZOb2RlKSkge1xyXG4gICAgICAgIGxlYWZOb2RlLnNjcm9sbEludG9WaWV3KCk7XHJcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xyXG4gICAgICAgIGlmICghdGhpcy5pc0luVmlld3BvcnQobGVhZk5vZGUpKSB7XHJcbiAgICAgICAgICB0aGlzLnNjcm9sbExlYWZJbnRvVmlldygpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBpc0luVmlld3BvcnQgPSAoZWxlbSkgPT4ge1xyXG4gICAgY29uc3QgYm91bmRpbmcgPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgYm91bmRpbmcudG9wID49IDBcclxuICAgICAgJiYgYm91bmRpbmcubGVmdCA+PSAwXHJcbiAgICAgICYmIGJvdW5kaW5nLmJvdHRvbSA8PSAod2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpXHJcbiAgICAgICYmIGJvdW5kaW5nLnJpZ2h0IDw9ICh3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgpXHJcbiAgICApO1xyXG4gIH07XHJcbn1cclxuIl19