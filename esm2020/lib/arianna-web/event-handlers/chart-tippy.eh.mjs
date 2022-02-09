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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQtdGlwcHkuZWguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uNy1ib2lsZXJwbGF0ZS1saWIvc3JjL2xpYi9hcmlhbm5hLXdlYi9ldmVudC1oYW5kbGVycy9jaGFydC10aXBweS5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxLQUFLLE1BQU0sVUFBVSxDQUFDO0FBRTdCLE1BQU0sT0FBTyxjQUFlLFNBQVEsWUFBWTtJQUFoRDs7UUFDVSxjQUFTLEdBQVUsRUFBRSxDQUFBLENBQUMsMkJBQTJCO1FBNkJ6RCxlQUFVLEdBQUcsQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUN2Qjs7O2NBR0U7WUFDRiwwQkFBMEI7WUFDMUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFO2dCQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7WUFDcEIsc0JBQXNCO1lBQ3RCLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtnQkFDcEIsTUFBTSxNQUFNLEdBQVksUUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDcEUsSUFBSSxNQUFNLEVBQUU7b0JBQ1YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUUsMkNBQTJDO29CQUM5RCxLQUFLLENBQUMsTUFBTSxFQUFFO3dCQUNaLE9BQU8sRUFBRSxRQUFRLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsQ0FBQzt3QkFDNUQsV0FBVyxFQUFFLElBQUk7d0JBQ2pCLFFBQVEsRUFBRSxRQUFRLENBQUMsSUFBSTt3QkFDdkIsS0FBSyxFQUFFLElBQUk7d0JBQ1gsSUFBSSxFQUFFLEtBQUs7d0JBQ1gsS0FBSyxFQUFFLHlCQUF5Qjt3QkFDaEMsU0FBUyxFQUFFLEtBQUs7d0JBQ2hCLEtBQUssRUFBRSxHQUFHO3dCQUNWLGNBQWMsRUFBRSxHQUFHO3FCQUNwQixDQUFDLENBQ0gsQ0FBQztpQkFDSDtZQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFBO0lBQ0gsQ0FBQztJQXZEUSxNQUFNO1FBQ1gsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO1lBQ2hELFFBQVEsSUFBSSxFQUFFO2dCQUNaLEtBQUssdUJBQXVCO29CQUMxQixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztvQkFDbEMsTUFBTTtnQkFDUjtvQkFDRSxPQUFPLENBQUMsSUFBSSxDQUFDLDZDQUE2QyxFQUFFLElBQUksQ0FBQyxDQUFDO29CQUNsRSxNQUFNO2FBQ1Q7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtZQUNoRCxRQUFRLElBQUksRUFBRTtnQkFDWixLQUFLLHNCQUFzQixDQUFDO2dCQUM1QixLQUFLLHdCQUF3QixDQUFDO2dCQUM5QixLQUFLLHdCQUF3QjtvQkFDM0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxvQ0FBb0M7b0JBQ3JFLFVBQVUsQ0FBQyxHQUFHLEVBQUU7d0JBQ2QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxrQ0FBa0M7b0JBQ3RFLENBQUMsQ0FBQyxDQUFDO29CQUNILE1BQU07Z0JBQ1I7b0JBQ0UsTUFBTTthQUNUO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0NBOEJGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5pbXBvcnQgdGlwcHkgZnJvbSAndGlwcHkuanMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEF3Q2hhcnRUaXBweUVIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcclxuICBwcml2YXRlIHRpcHB5TGlzdDogYW55W10gPSBbXSAvLyBhcnJheSBvZiB0aXBweSBpbnN0YW5jZXNcclxuXHJcbiAgcHVibGljIGxpc3RlbigpIHtcclxuICAgIHRoaXMuaW5uZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcclxuICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnYXctY2hhcnQtdGlwcHkuc2VsZWN0JzpcclxuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdzZWxlY3QnLCBwYXlsb2FkKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICBjb25zb2xlLndhcm4oJyhjaGFydC10aXBweSkgdW5oYW5kbGVkIGlubmVyIGV2ZW50IG9mIHR5cGUnLCB0eXBlKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHRoaXMub3V0ZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcclxuICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnYXctaG9tZS1sYXlvdXQuZDNlbmQnOlxyXG4gICAgICAgIGNhc2UgJ2F3LWVudGl0YS1sYXlvdXQuZDNlbmQnOlxyXG4gICAgICAgIGNhc2UgJ2F3LXNjaGVkYS1sYXlvdXQuZDNlbmQnOlxyXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZShwYXlsb2FkKTsgLy8gY3JlYXRpbmcgRE9NIEVsZW1lbnRzICh0ZW1wbGF0ZXMpXHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgLy8gd2FpdCBET00gdG8gYmUgcmVhZHlcclxuICAgICAgICAgICAgdGhpcy50aXBweU1ha2VyKHBheWxvYWQuYnViYmxlcyk7IC8vIGFzc2lnbiB0ZW1wbGF0ZXMgdG8gdGhlIGJ1YmJsZXNcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHRpcHB5TWFrZXIgPSAoYnViYmxlcykgPT4ge1xyXG4gICAgLypcclxuICAgICAgRGVzdHJveXMgZXZlcnkgZXhpc3RpbmcgdG9vbHRpcCxcclxuICAgICAgdGhlbiBjcmVhdGVzIGEgbmV3IFRpcHB5IGluc3RhbmNlIGZvciBlYWNoIGJ1YmJsZS5cclxuICAgICovXHJcbiAgICAvLyBmbHVzaCBleGlzdGluZyB0b29sdGlwc1xyXG4gICAgdGhpcy50aXBweUxpc3QuZm9yRWFjaCgodCkgPT4geyBpZiAodCkgeyB0LmRlc3Ryb3koKTsgfSB9KTtcclxuICAgIHRoaXMudGlwcHlMaXN0ID0gW107XHJcbiAgICAvLyBjcmVhdGUgbmV3IHRvb2x0aXBzXHJcbiAgICBidWJibGVzLmZvckVhY2goKGIpID0+IHsgLy8gZ2l2ZSBhIHRvb2x0aXAgdG8gZWFjaCBidWJibGVcclxuICAgICAgY29uc3QgdGFyZ2V0OiBFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGdfJHtiLmVudGl0eS5pZH1gKTtcclxuICAgICAgaWYgKHRhcmdldCkge1xyXG4gICAgICAgIHRoaXMudGlwcHlMaXN0LnB1c2goIC8vIGFkZCB0aGlzIHRpcHB5IHRvIHRoZSBhcnJheSBvZiBpbnN0YW5jZXNcclxuICAgICAgICAgIHRpcHB5KHRhcmdldCwge1xyXG4gICAgICAgICAgICBjb250ZW50OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgdGVtcGxhdGVfXyR7Yi5lbnRpdHkuaWR9YCksXHJcbiAgICAgICAgICAgIGludGVyYWN0aXZlOiB0cnVlLFxyXG4gICAgICAgICAgICBhcHBlbmRUbzogZG9jdW1lbnQuYm9keSwgLy8gc3VwcHJlc3MgaW50ZXJhY3RpdmUgd2FybmluZ1xyXG4gICAgICAgICAgICBhcnJvdzogdHJ1ZSxcclxuICAgICAgICAgICAgZmxpcDogZmFsc2UsXHJcbiAgICAgICAgICAgIHRoZW1lOiAnbGlnaHQtYm9yZGVyIG5vLXBhZGRpbmcnLFxyXG4gICAgICAgICAgICBwbGFjZW1lbnQ6ICd0b3AnLFxyXG4gICAgICAgICAgICBkZWxheTogMTUwLFxyXG4gICAgICAgICAgICB1cGRhdGVEdXJhdGlvbjogNDAwLFxyXG4gICAgICAgICAgfSksXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==