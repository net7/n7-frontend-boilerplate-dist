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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLmRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbjctYm9pbGVycGxhdGUtbGliL3NyYy9saWIvbXVydWNhL2RhdGEtc291cmNlcy9zbGlkZXIuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRS9DLE1BQU0sT0FBTyxVQUFXLFNBQVEsVUFBVTtJQUc5QixTQUFTLENBQUMsSUFBUztRQUMzQixNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLE9BQU87WUFDTCxNQUFNO1lBQ04sV0FBVyxFQUFFLFlBQVksSUFBSSxDQUFDLEVBQUUsRUFBRTtZQUNsQyxtQkFBbUI7WUFDbkIsVUFBVSxFQUFFO2dCQUNWLEtBQUssRUFBRSxDQUFDO2dCQUNSLElBQUksRUFBRSxDQUFDO2dCQUNQLGVBQWU7Z0JBQ2YsaUJBQWlCO2dCQUNqQixPQUFPLEVBQUUsSUFBSTtnQkFDYixJQUFJLEVBQUUsSUFBSTtnQkFDVixNQUFNLEVBQUUsSUFBSTtnQkFDWixRQUFRLEVBQUUsQ0FBQztnQkFDWCxTQUFTLEVBQUUsR0FBRztnQkFDZCxnQkFBZ0I7Z0JBQ2hCLHVDQUF1QztnQkFDdkMseUNBQXlDO2dCQUN6QyxxQ0FBcUM7Z0JBQ3JDLHNDQUFzQztnQkFDdEMsS0FBSzthQUNOO1NBQ0YsQ0FBQztJQUNKLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhcm91c2VsRGF0YSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcbmltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBNclNsaWRlckRTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG4gIGlkOiBzdHJpbmc7XG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhOiBhbnkpOiBDYXJvdXNlbERhdGEge1xuICAgIGNvbnN0IHsgc2xpZGVzIH0gPSBkYXRhO1xuICAgIHJldHVybiB7XG4gICAgICBzbGlkZXMsXG4gICAgICBjb250YWluZXJJZDogYGNhcm91c2VsLSR7dGhpcy5pZH1gLFxuICAgICAgLy8gY2xhc3NlczogJ2RlbW8nLFxuICAgICAgbGliT3B0aW9uczoge1xuICAgICAgICBjb3VudDogMSxcbiAgICAgICAgbW92ZTogMSxcbiAgICAgICAgLy8gdG91Y2g6IHRydWUsXG4gICAgICAgIC8vIG1vZGU6ICdhbGlnbicsXG4gICAgICAgIGJ1dHRvbnM6IHRydWUsXG4gICAgICAgIGRvdHM6IHRydWUsXG4gICAgICAgIHJld2luZDogdHJ1ZSxcbiAgICAgICAgYXV0b3BsYXk6IDAsXG4gICAgICAgIGFuaW1hdGlvbjogNTAwLFxuICAgICAgICAvLyByZXNwb25zaXZlOiB7XG4gICAgICAgIC8vICAgMDogeyBjb3VudDogMS41LCBidXR0b25zOiBmYWxzZSB9LFxuICAgICAgICAvLyAgIDQ4MDogeyBjb3VudDogMi41LCBidXR0b25zOiBmYWxzZSB9LFxuICAgICAgICAvLyAgIDc2ODogeyBjb3VudDogMywgdG91Y2g6IGZhbHNlIH0sXG4gICAgICAgIC8vICAgMTQ0MDogeyBjb3VudDogNCwgdG91Y2g6IGZhbHNlIH0sXG4gICAgICAgIC8vIH0sXG4gICAgICB9LFxuICAgIH07XG4gIH1cbn1cbiJdfQ==