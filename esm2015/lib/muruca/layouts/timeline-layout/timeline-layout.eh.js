import { EventHandler } from '@n7-frontend/core';
import helpers from '../../../common/helpers';
export class MrTimelineLayoutEH extends EventHandler {
    listen() {
        this.innerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case 'mr-timeline-layout.init':
                    this.dataSource.onInit(payload);
                    this.route = payload.route;
                    this.router = payload.router;
                    this.location = payload.location;
                    this.listenRoute();
                    // scroll top
                    window.scrollTo(0, 0);
                    this.dataSource.timelineListener$.subscribe((timeline) => {
                        timeline.on('click', (props) => {
                            if (!props.item)
                                return;
                            // build URL slug
                            const { content } = this.dataSource.timelineData.dataSet
                                .find((d) => d.id === props.item);
                            const slug = helpers.slugify(content);
                            // navigate without reloading the layout
                            this.location.go(`/timeline/${props.item}/${slug}`);
                            this.dataSource.updatePageDetails(props.item);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUtbGF5b3V0LmVoLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9sYXlvdXRzL3RpbWVsaW5lLWxheW91dC90aW1lbGluZS1sYXlvdXQuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWpELE9BQU8sT0FBTyxNQUFNLHlCQUF5QixDQUFDO0FBRTlDLE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxZQUFZO0lBTzNDLE1BQU07UUFDWCxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7WUFDaEQsUUFBUSxJQUFJLEVBQUU7Z0JBQ1osS0FBSyx5QkFBeUI7b0JBQzVCLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNoQyxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7b0JBQzNCLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQztvQkFDN0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDO29CQUNqQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7b0JBQ25CLGFBQWE7b0JBQ2IsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBRXRCLElBQUksQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBc0IsRUFBRSxFQUFFO3dCQUNyRSxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFOzRCQUM3QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUk7Z0NBQUUsT0FBTzs0QkFDeEIsaUJBQWlCOzRCQUNqQixNQUFNLEVBQUUsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsT0FBTztpQ0FDckQsSUFBSSxDQUFDLENBQUMsQ0FBa0MsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7NEJBQ3JFLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7NEJBQ3RDLHdDQUF3Qzs0QkFDeEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsYUFBYSxLQUFLLENBQUMsSUFBSSxJQUFJLElBQUksRUFBRSxDQUFDLENBQUM7NEJBQ3BELElBQUksQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNoRCxDQUFDLENBQUMsQ0FBQztvQkFDTCxDQUFDLENBQUMsQ0FBQztvQkFDSCxNQUFNO2dCQUNSLEtBQUssNEJBQTRCO29CQUMvQixNQUFNO2dCQUNSO29CQUNFLE9BQU8sQ0FBQyxJQUFJLENBQUMsK0JBQStCLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBQ3BELE1BQU07YUFDVDtRQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUU7WUFDdkMsUUFBUSxJQUFJLEVBQUU7Z0JBQ1osS0FBSywyQkFBMkI7b0JBQzlCLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNuQyxNQUFNO2dCQUNSO29CQUNFLE1BQU07YUFDVDtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLFdBQVc7UUFDakIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDdkMsTUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNqQyxJQUFJLE9BQU8sRUFBRTtnQkFDWCxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7Z0JBQ3BDLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxFQUFFLE9BQU8sQ0FBQyxDQUFDO2dCQUN4QyxJQUFJLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQzVDO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3BDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcbmltcG9ydCAqIGFzIHZpcyBmcm9tICd2aXMtdGltZWxpbmUvZGVjbGFyYXRpb25zJztcclxuaW1wb3J0IGhlbHBlcnMgZnJvbSAnLi4vLi4vLi4vY29tbW9uL2hlbHBlcnMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1yVGltZWxpbmVMYXlvdXRFSCBleHRlbmRzIEV2ZW50SGFuZGxlciB7XHJcbiAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGU7XHJcblxyXG4gIHByaXZhdGUgcm91dGVyOiBSb3V0ZXI7XHJcblxyXG4gIHByaXZhdGUgbG9jYXRpb246IExvY2F0aW9uO1xyXG5cclxuICBwdWJsaWMgbGlzdGVuKCkge1xyXG4gICAgdGhpcy5pbm5lckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xyXG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICBjYXNlICdtci10aW1lbGluZS1sYXlvdXQuaW5pdCc6XHJcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25Jbml0KHBheWxvYWQpO1xyXG4gICAgICAgICAgdGhpcy5yb3V0ZSA9IHBheWxvYWQucm91dGU7XHJcbiAgICAgICAgICB0aGlzLnJvdXRlciA9IHBheWxvYWQucm91dGVyO1xyXG4gICAgICAgICAgdGhpcy5sb2NhdGlvbiA9IHBheWxvYWQubG9jYXRpb247XHJcbiAgICAgICAgICB0aGlzLmxpc3RlblJvdXRlKCk7XHJcbiAgICAgICAgICAvLyBzY3JvbGwgdG9wXHJcbiAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XHJcblxyXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLnRpbWVsaW5lTGlzdGVuZXIkLnN1YnNjcmliZSgodGltZWxpbmU6IHZpcy5UaW1lbGluZSkgPT4ge1xyXG4gICAgICAgICAgICB0aW1lbGluZS5vbignY2xpY2snLCAocHJvcHMpID0+IHtcclxuICAgICAgICAgICAgICBpZiAoIXByb3BzLml0ZW0pIHJldHVybjtcclxuICAgICAgICAgICAgICAvLyBidWlsZCBVUkwgc2x1Z1xyXG4gICAgICAgICAgICAgIGNvbnN0IHsgY29udGVudCB9ID0gdGhpcy5kYXRhU291cmNlLnRpbWVsaW5lRGF0YS5kYXRhU2V0XHJcbiAgICAgICAgICAgICAgICAuZmluZCgoZDogeyBpZDogbnVtYmVyOyBjb250ZW50OiBzdHJpbmcgfSkgPT4gZC5pZCA9PT0gcHJvcHMuaXRlbSk7XHJcbiAgICAgICAgICAgICAgY29uc3Qgc2x1ZyA9IGhlbHBlcnMuc2x1Z2lmeShjb250ZW50KTtcclxuICAgICAgICAgICAgICAvLyBuYXZpZ2F0ZSB3aXRob3V0IHJlbG9hZGluZyB0aGUgbGF5b3V0XHJcbiAgICAgICAgICAgICAgdGhpcy5sb2NhdGlvbi5nbyhgL3RpbWVsaW5lLyR7cHJvcHMuaXRlbX0vJHtzbHVnfWApO1xyXG4gICAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS51cGRhdGVQYWdlRGV0YWlscyhwcm9wcy5pdGVtKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ21yLXRpbWVsaW5lLWxheW91dC5kZXN0cm95JzpcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ3VuaGFuZGxlZCBpbm5lciBldmVudCBvZiB0eXBlJywgdHlwZSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLm91dGVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSB9KSA9PiB7XHJcbiAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ21yLXllYXItaGVhZGVyLmNsb3NlZXZlbnQnOlxyXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLmxvYWREZWZhdWx0cyh0cnVlKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGxpc3RlblJvdXRlKCkge1xyXG4gICAgdGhpcy5yb3V0ZS5wYXJhbU1hcC5zdWJzY3JpYmUoKHBhcmFtcykgPT4ge1xyXG4gICAgICBjb25zdCBwYXJhbUlkID0gcGFyYW1zLmdldCgnaWQnKTtcclxuICAgICAgaWYgKHBhcmFtSWQpIHtcclxuICAgICAgICB0aGlzLmRhdGFTb3VyY2UuY3VycmVudElkID0gcGFyYW1JZDtcclxuICAgICAgICB0aGlzLmVtaXRPdXRlcigncm91dGVjaGFuZ2VkJywgcGFyYW1JZCk7XHJcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZVBhZ2VEZXRhaWxzKHBhcmFtSWQpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS5sb2FkRGVmYXVsdHModHJ1ZSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=