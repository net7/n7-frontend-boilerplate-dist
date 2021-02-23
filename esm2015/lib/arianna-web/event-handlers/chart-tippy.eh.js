import { EventHandler } from '@n7-frontend/core';
import tippy from 'tippy.js';
export class AwChartTippyEH extends EventHandler {
    constructor() {
        super(...arguments);
        this.tippyList = []; // array of tippy instances
        this.tippyMaker = (bubbles) => {
            /*
              Destroys every existing tooltip,
              then creates a new Tippy instance for each bubble.
            */
            // flush existing tooltips
            this.tippyList.forEach((t) => { if (t) {
                t.destroy();
            } });
            this.tippyList = [];
            // create new tooltips
            bubbles.forEach((b) => {
                const target = document.getElementById(`g_${b.entity.id}`);
                if (target) {
                    this.tippyList.push(// add this tippy to the array of instances
                    tippy(target, {
                        content: document.getElementById(`template__${b.entity.id}`),
                        interactive: true,
                        appendTo: document.body,
                        arrow: true,
                        flip: false,
                        theme: 'light-border no-padding',
                        placement: 'top',
                        delay: 150,
                        updateDuration: 400,
                    }));
                }
            });
        };
    }
    listen() {
        this.innerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case 'aw-chart-tippy.select':
                    this.emitOuter('select', payload);
                    break;
                default:
                    console.warn('(chart-tippy) unhandled inner event of type', type);
                    break;
            }
        });
        this.outerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case 'aw-home-layout.d3end':
                case 'aw-entita-layout.d3end':
                case 'aw-scheda-layout.d3end':
                    this.dataSource.update(payload); // creating DOM Elements (templates)
                    setTimeout(() => {
                        this.tippyMaker(payload.bubbles); // assign templates to the bubbles
                    });
                    break;
                default:
                    break;
            }
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQtdGlwcHkuZWguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZXZlbnQtaGFuZGxlcnMvY2hhcnQtdGlwcHkuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sS0FBSyxNQUFNLFVBQVUsQ0FBQztBQUU3QixNQUFNLE9BQU8sY0FBZSxTQUFRLFlBQVk7SUFBaEQ7O1FBQ1UsY0FBUyxHQUFVLEVBQUUsQ0FBQSxDQUFDLDJCQUEyQjtRQTZCekQsZUFBVSxHQUFHLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDdkI7OztjQUdFO1lBQ0YsMEJBQTBCO1lBQzFCLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRTtnQkFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7YUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzNELElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1lBQ3BCLHNCQUFzQjtZQUN0QixPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3BCLE1BQU0sTUFBTSxHQUFZLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7Z0JBQ3BFLElBQUksTUFBTSxFQUFFO29CQUNWLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFFLDJDQUEyQztvQkFDOUQsS0FBSyxDQUFDLE1BQU0sRUFBRTt3QkFDWixPQUFPLEVBQUUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLENBQUM7d0JBQzVELFdBQVcsRUFBRSxJQUFJO3dCQUNqQixRQUFRLEVBQUUsUUFBUSxDQUFDLElBQUk7d0JBQ3ZCLEtBQUssRUFBRSxJQUFJO3dCQUNYLElBQUksRUFBRSxLQUFLO3dCQUNYLEtBQUssRUFBRSx5QkFBeUI7d0JBQ2hDLFNBQVMsRUFBRSxLQUFLO3dCQUNoQixLQUFLLEVBQUUsR0FBRzt3QkFDVixjQUFjLEVBQUUsR0FBRztxQkFDcEIsQ0FBQyxDQUNILENBQUM7aUJBQ0g7WUFDSCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQTtJQUNILENBQUM7SUF2RFEsTUFBTTtRQUNYLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtZQUNoRCxRQUFRLElBQUksRUFBRTtnQkFDWixLQUFLLHVCQUF1QjtvQkFDMUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7b0JBQ2xDLE1BQU07Z0JBQ1I7b0JBQ0UsT0FBTyxDQUFDLElBQUksQ0FBQyw2Q0FBNkMsRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFDbEUsTUFBTTthQUNUO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7WUFDaEQsUUFBUSxJQUFJLEVBQUU7Z0JBQ1osS0FBSyxzQkFBc0IsQ0FBQztnQkFDNUIsS0FBSyx3QkFBd0IsQ0FBQztnQkFDOUIsS0FBSyx3QkFBd0I7b0JBQzNCLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsb0NBQW9DO29CQUNyRSxVQUFVLENBQUMsR0FBRyxFQUFFO3dCQUNkLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsa0NBQWtDO29CQUN0RSxDQUFDLENBQUMsQ0FBQztvQkFDSCxNQUFNO2dCQUNSO29CQUNFLE1BQU07YUFDVDtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQThCRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuaW1wb3J0IHRpcHB5IGZyb20gJ3RpcHB5LmpzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBBd0NoYXJ0VGlwcHlFSCBleHRlbmRzIEV2ZW50SGFuZGxlciB7XHJcbiAgcHJpdmF0ZSB0aXBweUxpc3Q6IGFueVtdID0gW10gLy8gYXJyYXkgb2YgdGlwcHkgaW5zdGFuY2VzXHJcblxyXG4gIHB1YmxpYyBsaXN0ZW4oKSB7XHJcbiAgICB0aGlzLmlubmVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XHJcbiAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ2F3LWNoYXJ0LXRpcHB5LnNlbGVjdCc6XHJcbiAgICAgICAgICB0aGlzLmVtaXRPdXRlcignc2VsZWN0JywgcGF5bG9hZCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgY29uc29sZS53YXJuKCcoY2hhcnQtdGlwcHkpIHVuaGFuZGxlZCBpbm5lciBldmVudCBvZiB0eXBlJywgdHlwZSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLm91dGVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XHJcbiAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtbGF5b3V0LmQzZW5kJzpcclxuICAgICAgICBjYXNlICdhdy1lbnRpdGEtbGF5b3V0LmQzZW5kJzpcclxuICAgICAgICBjYXNlICdhdy1zY2hlZGEtbGF5b3V0LmQzZW5kJzpcclxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS51cGRhdGUocGF5bG9hZCk7IC8vIGNyZWF0aW5nIERPTSBFbGVtZW50cyAodGVtcGxhdGVzKVxyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IC8vIHdhaXQgRE9NIHRvIGJlIHJlYWR5XHJcbiAgICAgICAgICAgIHRoaXMudGlwcHlNYWtlcihwYXlsb2FkLmJ1YmJsZXMpOyAvLyBhc3NpZ24gdGVtcGxhdGVzIHRvIHRoZSBidWJibGVzXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICB0aXBweU1ha2VyID0gKGJ1YmJsZXMpID0+IHtcclxuICAgIC8qXHJcbiAgICAgIERlc3Ryb3lzIGV2ZXJ5IGV4aXN0aW5nIHRvb2x0aXAsXHJcbiAgICAgIHRoZW4gY3JlYXRlcyBhIG5ldyBUaXBweSBpbnN0YW5jZSBmb3IgZWFjaCBidWJibGUuXHJcbiAgICAqL1xyXG4gICAgLy8gZmx1c2ggZXhpc3RpbmcgdG9vbHRpcHNcclxuICAgIHRoaXMudGlwcHlMaXN0LmZvckVhY2goKHQpID0+IHsgaWYgKHQpIHsgdC5kZXN0cm95KCk7IH0gfSk7XHJcbiAgICB0aGlzLnRpcHB5TGlzdCA9IFtdO1xyXG4gICAgLy8gY3JlYXRlIG5ldyB0b29sdGlwc1xyXG4gICAgYnViYmxlcy5mb3JFYWNoKChiKSA9PiB7IC8vIGdpdmUgYSB0b29sdGlwIHRvIGVhY2ggYnViYmxlXHJcbiAgICAgIGNvbnN0IHRhcmdldDogRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBnXyR7Yi5lbnRpdHkuaWR9YCk7XHJcbiAgICAgIGlmICh0YXJnZXQpIHtcclxuICAgICAgICB0aGlzLnRpcHB5TGlzdC5wdXNoKCAvLyBhZGQgdGhpcyB0aXBweSB0byB0aGUgYXJyYXkgb2YgaW5zdGFuY2VzXHJcbiAgICAgICAgICB0aXBweSh0YXJnZXQsIHtcclxuICAgICAgICAgICAgY29udGVudDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHRlbXBsYXRlX18ke2IuZW50aXR5LmlkfWApLFxyXG4gICAgICAgICAgICBpbnRlcmFjdGl2ZTogdHJ1ZSxcclxuICAgICAgICAgICAgYXBwZW5kVG86IGRvY3VtZW50LmJvZHksIC8vIHN1cHByZXNzIGludGVyYWN0aXZlIHdhcm5pbmdcclxuICAgICAgICAgICAgYXJyb3c6IHRydWUsXHJcbiAgICAgICAgICAgIGZsaXA6IGZhbHNlLFxyXG4gICAgICAgICAgICB0aGVtZTogJ2xpZ2h0LWJvcmRlciBuby1wYWRkaW5nJyxcclxuICAgICAgICAgICAgcGxhY2VtZW50OiAndG9wJyxcclxuICAgICAgICAgICAgZGVsYXk6IDE1MCxcclxuICAgICAgICAgICAgdXBkYXRlRHVyYXRpb246IDQwMCxcclxuICAgICAgICAgIH0pLFxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=