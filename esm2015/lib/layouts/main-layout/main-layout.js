/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { LayoutBuilder } from '@n7-frontend/core';
import * as DS from '../../common/data-sources';
import * as EH from '../../common/event-handlers';
import { MainLayoutEH } from './main-layout.eh';
import { MainLayoutDS } from './main-layout.ds';
export class MainLayoutComponent {
    constructor() {
        this.lb = new LayoutBuilder('main-layout');
        this.widgets = [
            { id: 'header', hasStaticData: true }
        ];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // on ready
        this.lb.ready$.subscribe((/**
         * @return {?}
         */
        () => {
            this.lb.eventHandler.emitInner('init', {
            // TODO
            });
        }));
        this.lb.init({
            widgetsConfig: this.widgets,
            widgetsDataSources: DS,
            widgetsEventHandlers: EH,
            dataSource: new MainLayoutDS(),
            eventHandler: new MainLayoutEH(),
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.lb.eventHandler.emitInner('destroy');
    }
}
MainLayoutComponent.decorators = [
    { type: Component, args: [{
                selector: 'main-layout',
                template: "<div class=\"n7b-page-wrapper\" id=\"main-layout\">\n    <div class=\"n7b-page-content\">\n        <n7-header \n        [emit]=\"lb.widgets['header'].emit\"\n        [data]=\"lb.widgets['header'].ds.out$ | async\"></n7-header>\n    </div>\n</div>"
            }] }
];
/** @nocollapse */
MainLayoutComponent.ctorParameters = () => [];
if (false) {
    /** @type {?} */
    MainLayoutComponent.prototype.lb;
    /**
     * @type {?}
     * @private
     */
    MainLayoutComponent.prototype.widgets;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1sYXlvdXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbGF5b3V0cy9tYWluLWxheW91dC9tYWluLWxheW91dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFbEQsT0FBTyxLQUFLLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNoRCxPQUFPLEtBQUssRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ2xELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFNaEQsTUFBTSxPQUFPLG1CQUFtQjtJQU05QjtRQUxPLE9BQUUsR0FBRyxJQUFJLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNyQyxZQUFPLEdBQUc7WUFDaEIsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUU7U0FDdEMsQ0FBQztJQUVhLENBQUM7Ozs7SUFFaEIsUUFBUTtRQUNOLFdBQVc7UUFDWCxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxTQUFTOzs7UUFBQyxHQUFHLEVBQUU7WUFDNUIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRTtZQUNyQyxPQUFPO2FBQ1IsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxFQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztZQUNYLGFBQWEsRUFBRSxJQUFJLENBQUMsT0FBTztZQUMzQixrQkFBa0IsRUFBRSxFQUFFO1lBQ3RCLG9CQUFvQixFQUFFLEVBQUU7WUFDeEIsVUFBVSxFQUFFLElBQUksWUFBWSxFQUFFO1lBQzlCLFlBQVksRUFBRSxJQUFJLFlBQVksRUFBRTtTQUNqQyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7WUEvQkYsU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxhQUFhO2dCQUN2QixrUUFBaUM7YUFDcEM7Ozs7OztJQUVDLGlDQUE2Qzs7Ozs7SUFDN0Msc0NBRUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTGF5b3V0QnVpbGRlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcblxuaW1wb3J0ICogYXMgRFMgZnJvbSAnLi4vLi4vY29tbW9uL2RhdGEtc291cmNlcyc7XG5pbXBvcnQgKiBhcyBFSCBmcm9tICcuLi8uLi9jb21tb24vZXZlbnQtaGFuZGxlcnMnO1xuaW1wb3J0IHsgTWFpbkxheW91dEVIIH0gZnJvbSAnLi9tYWluLWxheW91dC5laCc7XG5pbXBvcnQgeyBNYWluTGF5b3V0RFMgfSBmcm9tICcuL21haW4tbGF5b3V0LmRzJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdtYWluLWxheW91dCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL21haW4tbGF5b3V0Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIE1haW5MYXlvdXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwdWJsaWMgbGIgPSBuZXcgTGF5b3V0QnVpbGRlcignbWFpbi1sYXlvdXQnKTtcbiAgcHJpdmF0ZSB3aWRnZXRzID0gW1xuICAgIHsgaWQ6ICdoZWFkZXInLCBoYXNTdGF0aWNEYXRhOiB0cnVlIH1cbiAgXTtcblxuICBjb25zdHJ1Y3RvcigpeyB9XG5cbiAgbmdPbkluaXQoKXtcbiAgICAvLyBvbiByZWFkeVxuICAgIHRoaXMubGIucmVhZHkkLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmxiLmV2ZW50SGFuZGxlci5lbWl0SW5uZXIoJ2luaXQnLCB7XG4gICAgICAgIC8vIFRPRE9cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5sYi5pbml0KHtcbiAgICAgIHdpZGdldHNDb25maWc6IHRoaXMud2lkZ2V0cyxcbiAgICAgIHdpZGdldHNEYXRhU291cmNlczogRFMsXG4gICAgICB3aWRnZXRzRXZlbnRIYW5kbGVyczogRUgsXG4gICAgICBkYXRhU291cmNlOiBuZXcgTWFpbkxheW91dERTKCksXG4gICAgICBldmVudEhhbmRsZXI6IG5ldyBNYWluTGF5b3V0RUgoKSxcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCl7XG4gICAgdGhpcy5sYi5ldmVudEhhbmRsZXIuZW1pdElubmVyKCdkZXN0cm95Jyk7XG4gIH1cbn1cbiJdfQ==