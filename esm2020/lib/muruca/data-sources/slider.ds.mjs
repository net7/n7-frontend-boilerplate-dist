import { DataSource } from '@n7-frontend/core';
export class MrSliderDS extends DataSource {
    transform(data) {
        const { slides } = data;
        return {
            slides,
            containerId: `carousel-${this.id}`,
            // classes: 'demo',
            libOptions: {
                count: 1,
                move: 1,
                // touch: true,
                // mode: 'align',
                buttons: true,
                dots: true,
                rewind: true,
                autoplay: 0,
                animation: 500,
                // responsive: {
                //   0: { count: 1.5, buttons: false },
                //   480: { count: 2.5, buttons: false },
                //   768: { count: 3, touch: false },
                //   1440: { count: 4, touch: false },
                // },
            },
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLmRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbjctYm9pbGVycGxhdGUtbGliL3NyYy9saWIvbXVydWNhL2RhdGEtc291cmNlcy9zbGlkZXIuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRS9DLE1BQU0sT0FBTyxVQUFXLFNBQVEsVUFBVTtJQUc5QixTQUFTLENBQUMsSUFBUztRQUMzQixNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLE9BQU87WUFDTCxNQUFNO1lBQ04sV0FBVyxFQUFFLFlBQVksSUFBSSxDQUFDLEVBQUUsRUFBRTtZQUNsQyxtQkFBbUI7WUFDbkIsVUFBVSxFQUFFO2dCQUNWLEtBQUssRUFBRSxDQUFDO2dCQUNSLElBQUksRUFBRSxDQUFDO2dCQUNQLGVBQWU7Z0JBQ2YsaUJBQWlCO2dCQUNqQixPQUFPLEVBQUUsSUFBSTtnQkFDYixJQUFJLEVBQUUsSUFBSTtnQkFDVixNQUFNLEVBQUUsSUFBSTtnQkFDWixRQUFRLEVBQUUsQ0FBQztnQkFDWCxTQUFTLEVBQUUsR0FBRztnQkFDZCxnQkFBZ0I7Z0JBQ2hCLHVDQUF1QztnQkFDdkMseUNBQXlDO2dCQUN6QyxxQ0FBcUM7Z0JBQ3JDLHNDQUFzQztnQkFDdEMsS0FBSzthQUNOO1NBQ0YsQ0FBQztJQUNKLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhcm91c2VsRGF0YSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcclxuaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBNclNsaWRlckRTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XHJcbiAgaWQ6IHN0cmluZztcclxuXHJcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhOiBhbnkpOiBDYXJvdXNlbERhdGEge1xyXG4gICAgY29uc3QgeyBzbGlkZXMgfSA9IGRhdGE7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzbGlkZXMsXHJcbiAgICAgIGNvbnRhaW5lcklkOiBgY2Fyb3VzZWwtJHt0aGlzLmlkfWAsXHJcbiAgICAgIC8vIGNsYXNzZXM6ICdkZW1vJyxcclxuICAgICAgbGliT3B0aW9uczoge1xyXG4gICAgICAgIGNvdW50OiAxLFxyXG4gICAgICAgIG1vdmU6IDEsXHJcbiAgICAgICAgLy8gdG91Y2g6IHRydWUsXHJcbiAgICAgICAgLy8gbW9kZTogJ2FsaWduJyxcclxuICAgICAgICBidXR0b25zOiB0cnVlLFxyXG4gICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgcmV3aW5kOiB0cnVlLFxyXG4gICAgICAgIGF1dG9wbGF5OiAwLFxyXG4gICAgICAgIGFuaW1hdGlvbjogNTAwLFxyXG4gICAgICAgIC8vIHJlc3BvbnNpdmU6IHtcclxuICAgICAgICAvLyAgIDA6IHsgY291bnQ6IDEuNSwgYnV0dG9uczogZmFsc2UgfSxcclxuICAgICAgICAvLyAgIDQ4MDogeyBjb3VudDogMi41LCBidXR0b25zOiBmYWxzZSB9LFxyXG4gICAgICAgIC8vICAgNzY4OiB7IGNvdW50OiAzLCB0b3VjaDogZmFsc2UgfSxcclxuICAgICAgICAvLyAgIDE0NDA6IHsgY291bnQ6IDQsIHRvdWNoOiBmYWxzZSB9LFxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=