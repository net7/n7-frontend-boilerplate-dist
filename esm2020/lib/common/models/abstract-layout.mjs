import { LayoutBuilder } from '@n7-frontend/core';
export class AbstractLayout {
    constructor(config) {
        this.config = config;
        this.widgets = this.config.widgets;
        this.lb = new LayoutBuilder(this.config.layoutId);
    }
    onInit() {
        // on ready
        this.lb.ready$.subscribe(() => {
            this.lb.eventHandler.emitInner('init', this.initPayload());
        });
        const LayoutDS = this.config.layoutDS;
        const LayoutEH = this.config.layoutEH;
        this.lb.init({
            widgetsConfig: this.widgets,
            widgetsDataSources: this.config.widgetsDataSources,
            widgetsEventHandlers: this.config.widgetsEventHandlers,
            dataSource: new LayoutDS(),
            eventHandler: new LayoutEH(),
        });
    }
    onDestroy() {
        this.lb.eventHandler.emitInner('destroy');
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QtbGF5b3V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbjctYm9pbGVycGxhdGUtbGliL3NyYy9saWIvY29tbW9uL21vZGVscy9hYnN0cmFjdC1sYXlvdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWxELE1BQU0sT0FBZ0IsY0FBYztJQU9sQyxZQUFZLE1BQVc7UUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUNuQyxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUlTLE1BQU07UUFDZCxXQUFXO1FBQ1gsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUM1QixJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBQzdELENBQUMsQ0FBQyxDQUFDO1FBRUgsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFDdEMsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFDdEMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7WUFDWCxhQUFhLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDM0Isa0JBQWtCLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0I7WUFDbEQsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxvQkFBb0I7WUFDdEQsVUFBVSxFQUFFLElBQUksUUFBUSxFQUFFO1lBQzFCLFlBQVksRUFBRSxJQUFJLFFBQVEsRUFBRTtTQUM3QixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRVMsU0FBUztRQUNqQixJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDNUMsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGF5b3V0QnVpbGRlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0TGF5b3V0IHtcbiAgcHJvdGVjdGVkIGNvbmZpZzogYW55O1xuXG4gIHByb3RlY3RlZCB3aWRnZXRzOiBhbnlbXTtcblxuICBwdWJsaWMgbGI6IGFueTtcblxuICBjb25zdHJ1Y3Rvcihjb25maWc6IGFueSkge1xuICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuICAgIHRoaXMud2lkZ2V0cyA9IHRoaXMuY29uZmlnLndpZGdldHM7XG4gICAgdGhpcy5sYiA9IG5ldyBMYXlvdXRCdWlsZGVyKHRoaXMuY29uZmlnLmxheW91dElkKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBhYnN0cmFjdCBpbml0UGF5bG9hZCgpOiBhbnk7XG5cbiAgcHJvdGVjdGVkIG9uSW5pdCgpIHtcbiAgICAvLyBvbiByZWFkeVxuICAgIHRoaXMubGIucmVhZHkkLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmxiLmV2ZW50SGFuZGxlci5lbWl0SW5uZXIoJ2luaXQnLCB0aGlzLmluaXRQYXlsb2FkKCkpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgTGF5b3V0RFMgPSB0aGlzLmNvbmZpZy5sYXlvdXREUztcbiAgICBjb25zdCBMYXlvdXRFSCA9IHRoaXMuY29uZmlnLmxheW91dEVIO1xuICAgIHRoaXMubGIuaW5pdCh7XG4gICAgICB3aWRnZXRzQ29uZmlnOiB0aGlzLndpZGdldHMsXG4gICAgICB3aWRnZXRzRGF0YVNvdXJjZXM6IHRoaXMuY29uZmlnLndpZGdldHNEYXRhU291cmNlcyxcbiAgICAgIHdpZGdldHNFdmVudEhhbmRsZXJzOiB0aGlzLmNvbmZpZy53aWRnZXRzRXZlbnRIYW5kbGVycyxcbiAgICAgIGRhdGFTb3VyY2U6IG5ldyBMYXlvdXREUygpLFxuICAgICAgZXZlbnRIYW5kbGVyOiBuZXcgTGF5b3V0RUgoKSxcbiAgICB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBvbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5sYi5ldmVudEhhbmRsZXIuZW1pdElubmVyKCdkZXN0cm95Jyk7XG4gIH1cbn1cbiJdfQ==