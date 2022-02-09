import { EventHandler } from '@n7-frontend/core';
export class MrMapLayoutEH extends EventHandler {
    listen() {
        this.innerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case 'mr-map-layout.init':
                    this.dataSource.onInit(payload);
                    this.route = payload.route;
                    this.router = payload.router;
                    this.location = payload.location;
                    this.listenRoute();
                    // scroll top
                    window.scrollTo(0, 0);
                    // listen for clicks on the map markers
                    this.dataSource.mapListener$
                        .subscribe(({ markers }) => {
                        markers.on('click', ({ layer: marker }) => {
                            if (!marker.id)
                                return;
                            const isSelected = marker.getIcon().options.className.includes('selected');
                            if (isSelected) {
                                // navigate to the clicked resource / marker
                                this.location.go(`/map/${marker.id}/${marker.slug}`);
                                this.dataSource.updatePageDetails(marker.id);
                            }
                            else {
                                this.location.go('/map/');
                                this.dataSource.loadDefaults();
                            }
                        });
                    });
                    break;
                case 'mr-timeline-layout.destroy':
                    break;
                default:
                    console.warn('unhandled inner event of type', type);
                    break;
            }
        });
        this.outerEvents$.subscribe(({ type }) => {
            switch (type) {
                case 'mr-year-header.closeevent':
                    this.dataSource.loadDefaults(true);
                    break;
                default:
                    break;
            }
        });
    }
    listenRoute() {
        this.route.paramMap.subscribe((params) => {
            const paramId = params.get('id');
            if (paramId) {
                this.dataSource.currentId = paramId;
                this.emitOuter('routechanged', paramId);
                this.dataSource.updatePageDetails(paramId);
            }
            else {
                this.dataSource.loadDefaults(true);
            }
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLWxheW91dC5laC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL243LWJvaWxlcnBsYXRlLWxpYi9zcmMvbGliL211cnVjYS9sYXlvdXRzL21hcC1sYXlvdXQvbWFwLWxheW91dC5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFakQsTUFBTSxPQUFPLGFBQWMsU0FBUSxZQUFZO0lBT3RDLE1BQU07UUFDWCxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7WUFDaEQsUUFBUSxJQUFJLEVBQUU7Z0JBQ1osS0FBSyxvQkFBb0I7b0JBQ3ZCLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNoQyxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7b0JBQzNCLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQztvQkFDN0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDO29CQUNqQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7b0JBQ25CLGFBQWE7b0JBQ2IsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBRXRCLHVDQUF1QztvQkFDdkMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZO3lCQUN6QixTQUFTLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7d0JBQ3pCLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRTs0QkFDeEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dDQUFFLE9BQU87NEJBQ3ZCLE1BQU0sVUFBVSxHQUFHLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQzs0QkFDM0UsSUFBSSxVQUFVLEVBQUU7Z0NBQ2QsNENBQTRDO2dDQUM1QyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLE1BQU0sQ0FBQyxFQUFFLElBQUksTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7Z0NBQ3JELElBQUksQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDOzZCQUM5QztpQ0FBTTtnQ0FDTCxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQ0FDMUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsQ0FBQzs2QkFDaEM7d0JBQ0gsQ0FBQyxDQUFDLENBQUM7b0JBQ0wsQ0FBQyxDQUFDLENBQUM7b0JBQ0wsTUFBTTtnQkFDUixLQUFLLDRCQUE0QjtvQkFDL0IsTUFBTTtnQkFDUjtvQkFDRSxPQUFPLENBQUMsSUFBSSxDQUFDLCtCQUErQixFQUFFLElBQUksQ0FBQyxDQUFDO29CQUNwRCxNQUFNO2FBQ1Q7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFO1lBQ3ZDLFFBQVEsSUFBSSxFQUFFO2dCQUNaLEtBQUssMkJBQTJCO29CQUM5QixJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDbkMsTUFBTTtnQkFDUjtvQkFDRSxNQUFNO2FBQ1Q7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTyxXQUFXO1FBQ2pCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO1lBQ3ZDLE1BQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDakMsSUFBSSxPQUFPLEVBQUU7Z0JBQ1gsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDO2dCQUNwQyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsRUFBRSxPQUFPLENBQUMsQ0FBQztnQkFDeEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUM1QztpQkFBTTtnQkFDTCxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNwQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1yTWFwTGF5b3V0RUggZXh0ZW5kcyBFdmVudEhhbmRsZXIge1xyXG4gIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlO1xyXG5cclxuICBwcml2YXRlIHJvdXRlcjogUm91dGVyO1xyXG5cclxuICBwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvbjtcclxuXHJcbiAgcHVibGljIGxpc3RlbigpIHtcclxuICAgIHRoaXMuaW5uZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcclxuICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnbXItbWFwLWxheW91dC5pbml0JzpcclxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vbkluaXQocGF5bG9hZCk7XHJcbiAgICAgICAgICB0aGlzLnJvdXRlID0gcGF5bG9hZC5yb3V0ZTtcclxuICAgICAgICAgIHRoaXMucm91dGVyID0gcGF5bG9hZC5yb3V0ZXI7XHJcbiAgICAgICAgICB0aGlzLmxvY2F0aW9uID0gcGF5bG9hZC5sb2NhdGlvbjtcclxuICAgICAgICAgIHRoaXMubGlzdGVuUm91dGUoKTtcclxuICAgICAgICAgIC8vIHNjcm9sbCB0b3BcclxuICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcclxuXHJcbiAgICAgICAgICAvLyBsaXN0ZW4gZm9yIGNsaWNrcyBvbiB0aGUgbWFwIG1hcmtlcnNcclxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5tYXBMaXN0ZW5lciRcclxuICAgICAgICAgICAgLnN1YnNjcmliZSgoeyBtYXJrZXJzIH0pID0+IHtcclxuICAgICAgICAgICAgICBtYXJrZXJzLm9uKCdjbGljaycsICh7IGxheWVyOiBtYXJrZXIgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFtYXJrZXIuaWQpIHJldHVybjtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlzU2VsZWN0ZWQgPSBtYXJrZXIuZ2V0SWNvbigpLm9wdGlvbnMuY2xhc3NOYW1lLmluY2x1ZGVzKCdzZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzU2VsZWN0ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgLy8gbmF2aWdhdGUgdG8gdGhlIGNsaWNrZWQgcmVzb3VyY2UgLyBtYXJrZXJcclxuICAgICAgICAgICAgICAgICAgdGhpcy5sb2NhdGlvbi5nbyhgL21hcC8ke21hcmtlci5pZH0vJHttYXJrZXIuc2x1Z31gKTtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZVBhZ2VEZXRhaWxzKG1hcmtlci5pZCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLmxvY2F0aW9uLmdvKCcvbWFwLycpO1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UubG9hZERlZmF1bHRzKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnbXItdGltZWxpbmUtbGF5b3V0LmRlc3Ryb3knOlxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIGNvbnNvbGUud2FybigndW5oYW5kbGVkIGlubmVyIGV2ZW50IG9mIHR5cGUnLCB0eXBlKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHRoaXMub3V0ZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlIH0pID0+IHtcclxuICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnbXIteWVhci1oZWFkZXIuY2xvc2VldmVudCc6XHJcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UubG9hZERlZmF1bHRzKHRydWUpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbGlzdGVuUm91dGUoKSB7XHJcbiAgICB0aGlzLnJvdXRlLnBhcmFtTWFwLnN1YnNjcmliZSgocGFyYW1zKSA9PiB7XHJcbiAgICAgIGNvbnN0IHBhcmFtSWQgPSBwYXJhbXMuZ2V0KCdpZCcpO1xyXG4gICAgICBpZiAocGFyYW1JZCkge1xyXG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS5jdXJyZW50SWQgPSBwYXJhbUlkO1xyXG4gICAgICAgIHRoaXMuZW1pdE91dGVyKCdyb3V0ZWNoYW5nZWQnLCBwYXJhbUlkKTtcclxuICAgICAgICB0aGlzLmRhdGFTb3VyY2UudXBkYXRlUGFnZURldGFpbHMocGFyYW1JZCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLmxvYWREZWZhdWx0cyh0cnVlKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==