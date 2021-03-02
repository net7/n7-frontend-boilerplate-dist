import { LayoutBuilder } from '@n7-frontend/core';
var AbstractLayout = /** @class */ (function () {
    function AbstractLayout(config) {
        this.config = config;
        this.widgets = this.config.widgets;
        this.lb = new LayoutBuilder(this.config.layoutId);
    }
    AbstractLayout.prototype.onInit = function () {
        var _this = this;
        // on ready
        this.lb.ready$.subscribe(function () {
            _this.lb.eventHandler.emitInner('init', _this.initPayload());
        });
        var LayoutDS = this.config.layoutDS;
        var LayoutEH = this.config.layoutEH;
        this.lb.init({
            widgetsConfig: this.widgets,
            widgetsDataSources: this.config.widgetsDataSources,
            widgetsEventHandlers: this.config.widgetsEventHandlers,
            dataSource: new LayoutDS(),
            eventHandler: new LayoutEH(),
        });
    };
    AbstractLayout.prototype.onDestroy = function () {
        this.lb.eventHandler.emitInner('destroy');
    };
    return AbstractLayout;
}());
export { AbstractLayout };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QtbGF5b3V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9tb2RlbHMvYWJzdHJhY3QtbGF5b3V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVsRDtJQU9FLHdCQUFZLE1BQVc7UUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUNuQyxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUlTLCtCQUFNLEdBQWhCO1FBQUEsaUJBZUM7UUFkQyxXQUFXO1FBQ1gsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO1lBQ3ZCLEtBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsS0FBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFDN0QsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUN0QyxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUN0QyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztZQUNYLGFBQWEsRUFBRSxJQUFJLENBQUMsT0FBTztZQUMzQixrQkFBa0IsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFrQjtZQUNsRCxvQkFBb0IsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLG9CQUFvQjtZQUN0RCxVQUFVLEVBQUUsSUFBSSxRQUFRLEVBQUU7WUFDMUIsWUFBWSxFQUFFLElBQUksUUFBUSxFQUFFO1NBQzdCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFUyxrQ0FBUyxHQUFuQjtRQUNFLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQUFDLEFBbkNELElBbUNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGF5b3V0QnVpbGRlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0TGF5b3V0IHtcbiAgcHJvdGVjdGVkIGNvbmZpZzogYW55O1xuXG4gIHByb3RlY3RlZCB3aWRnZXRzOiBhbnlbXTtcblxuICBwdWJsaWMgbGI6IGFueTtcblxuICBjb25zdHJ1Y3Rvcihjb25maWc6IGFueSkge1xuICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuICAgIHRoaXMud2lkZ2V0cyA9IHRoaXMuY29uZmlnLndpZGdldHM7XG4gICAgdGhpcy5sYiA9IG5ldyBMYXlvdXRCdWlsZGVyKHRoaXMuY29uZmlnLmxheW91dElkKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBhYnN0cmFjdCBpbml0UGF5bG9hZCgpOiBhbnk7XG5cbiAgcHJvdGVjdGVkIG9uSW5pdCgpIHtcbiAgICAvLyBvbiByZWFkeVxuICAgIHRoaXMubGIucmVhZHkkLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmxiLmV2ZW50SGFuZGxlci5lbWl0SW5uZXIoJ2luaXQnLCB0aGlzLmluaXRQYXlsb2FkKCkpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgTGF5b3V0RFMgPSB0aGlzLmNvbmZpZy5sYXlvdXREUztcbiAgICBjb25zdCBMYXlvdXRFSCA9IHRoaXMuY29uZmlnLmxheW91dEVIO1xuICAgIHRoaXMubGIuaW5pdCh7XG4gICAgICB3aWRnZXRzQ29uZmlnOiB0aGlzLndpZGdldHMsXG4gICAgICB3aWRnZXRzRGF0YVNvdXJjZXM6IHRoaXMuY29uZmlnLndpZGdldHNEYXRhU291cmNlcyxcbiAgICAgIHdpZGdldHNFdmVudEhhbmRsZXJzOiB0aGlzLmNvbmZpZy53aWRnZXRzRXZlbnRIYW5kbGVycyxcbiAgICAgIGRhdGFTb3VyY2U6IG5ldyBMYXlvdXREUygpLFxuICAgICAgZXZlbnRIYW5kbGVyOiBuZXcgTGF5b3V0RUgoKSxcbiAgICB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBvbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5sYi5ldmVudEhhbmRsZXIuZW1pdElubmVyKCdkZXN0cm95Jyk7XG4gIH1cbn1cbiJdfQ==