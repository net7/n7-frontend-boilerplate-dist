import { EventHandler } from '@n7-frontend/core';
export class AwMapEH extends EventHandler {
    listen() {
        this.outerEvents$.subscribe(({ type }) => {
            switch (type) {
                case 'aw-map-layout.init':
                    this.listenToMarkers();
                    break;
                default:
                    break;
            }
        });
    }
    listenToMarkers() {
        this.dataSource.markerOpen$.subscribe((item) => {
            this.emitOuter('markeropen', item);
        });
        this.dataSource.markerClose$.subscribe(() => {
            this.emitOuter('markerclose');
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmVoLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2V2ZW50LWhhbmRsZXJzL21hcC5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFakQsTUFBTSxPQUFPLE9BQVEsU0FBUSxZQUFZO0lBQ2hDLE1BQU07UUFDWCxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRTtZQUN2QyxRQUFRLElBQUksRUFBRTtnQkFDWixLQUFLLG9CQUFvQjtvQkFDdkIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO29CQUN2QixNQUFNO2dCQUVSO29CQUNFLE1BQU07YUFDVDtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLGVBQWU7UUFDckIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDN0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDckMsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO1lBQzFDLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDaEMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgQXdNYXBFSCBleHRlbmRzIEV2ZW50SGFuZGxlciB7XHJcbiAgcHVibGljIGxpc3RlbigpIHtcclxuICAgIHRoaXMub3V0ZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlIH0pID0+IHtcclxuICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnYXctbWFwLWxheW91dC5pbml0JzpcclxuICAgICAgICAgIHRoaXMubGlzdGVuVG9NYXJrZXJzKCk7XHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbGlzdGVuVG9NYXJrZXJzKCkge1xyXG4gICAgdGhpcy5kYXRhU291cmNlLm1hcmtlck9wZW4kLnN1YnNjcmliZSgoaXRlbSkgPT4ge1xyXG4gICAgICB0aGlzLmVtaXRPdXRlcignbWFya2Vyb3BlbicsIGl0ZW0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5kYXRhU291cmNlLm1hcmtlckNsb3NlJC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLmVtaXRPdXRlcignbWFya2VyY2xvc2UnKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=