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
var MainLayoutComponent = /** @class */ (function () {
    function MainLayoutComponent() {
        this.lb = new LayoutBuilder('main-layout');
        this.widgets = [
            { id: 'header', hasStaticData: true }
        ];
    }
    /**
     * @return {?}
     */
    MainLayoutComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // on ready
        this.lb.ready$.subscribe((/**
         * @return {?}
         */
        function () {
            _this.lb.eventHandler.emitInner('init', {
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
    };
    /**
     * @return {?}
     */
    MainLayoutComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.lb.eventHandler.emitInner('destroy');
    };
    MainLayoutComponent.decorators = [
        { type: Component, args: [{
                    selector: 'main-layout',
                    template: "<div class=\"n7b-page-wrapper\" id=\"main-layout\">\n    <div class=\"n7b-page-content\">\n        <n7-header \n        [emit]=\"lb.widgets['header'].emit\"\n        [data]=\"lb.widgets['header'].ds.out$ | async\"></n7-header>\n    </div>\n</div>"
                }] }
    ];
    /** @nocollapse */
    MainLayoutComponent.ctorParameters = function () { return []; };
    return MainLayoutComponent;
}());
export { MainLayoutComponent };
if (false) {
    /** @type {?} */
    MainLayoutComponent.prototype.lb;
    /**
     * @type {?}
     * @private
     */
    MainLayoutComponent.prototype.widgets;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1sYXlvdXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbGF5b3V0cy9tYWluLWxheW91dC9tYWluLWxheW91dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFbEQsT0FBTyxLQUFLLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNoRCxPQUFPLEtBQUssRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ2xELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFaEQ7SUFVRTtRQUxPLE9BQUUsR0FBRyxJQUFJLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNyQyxZQUFPLEdBQUc7WUFDaEIsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUU7U0FDdEMsQ0FBQztJQUVhLENBQUM7Ozs7SUFFaEIsc0NBQVE7OztJQUFSO1FBQUEsaUJBZUM7UUFkQyxXQUFXO1FBQ1gsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsU0FBUzs7O1FBQUM7WUFDdkIsS0FBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRTtZQUNyQyxPQUFPO2FBQ1IsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxFQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztZQUNYLGFBQWEsRUFBRSxJQUFJLENBQUMsT0FBTztZQUMzQixrQkFBa0IsRUFBRSxFQUFFO1lBQ3RCLG9CQUFvQixFQUFFLEVBQUU7WUFDeEIsVUFBVSxFQUFFLElBQUksWUFBWSxFQUFFO1lBQzlCLFlBQVksRUFBRSxJQUFJLFlBQVksRUFBRTtTQUNqQyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQseUNBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzVDLENBQUM7O2dCQS9CRixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLGtRQUFpQztpQkFDcEM7Ozs7SUE2QkQsMEJBQUM7Q0FBQSxBQWhDRCxJQWdDQztTQTVCWSxtQkFBbUI7OztJQUM5QixpQ0FBNkM7Ozs7O0lBQzdDLHNDQUVFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExheW91dEJ1aWxkZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5cbmltcG9ydCAqIGFzIERTIGZyb20gJy4uLy4uL2NvbW1vbi9kYXRhLXNvdXJjZXMnO1xuaW1wb3J0ICogYXMgRUggZnJvbSAnLi4vLi4vY29tbW9uL2V2ZW50LWhhbmRsZXJzJztcbmltcG9ydCB7IE1haW5MYXlvdXRFSCB9IGZyb20gJy4vbWFpbi1sYXlvdXQuZWgnO1xuaW1wb3J0IHsgTWFpbkxheW91dERTIH0gZnJvbSAnLi9tYWluLWxheW91dC5kcyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbWFpbi1sYXlvdXQnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9tYWluLWxheW91dC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBNYWluTGF5b3V0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHVibGljIGxiID0gbmV3IExheW91dEJ1aWxkZXIoJ21haW4tbGF5b3V0Jyk7XG4gIHByaXZhdGUgd2lkZ2V0cyA9IFtcbiAgICB7IGlkOiAnaGVhZGVyJywgaGFzU3RhdGljRGF0YTogdHJ1ZSB9XG4gIF07XG5cbiAgY29uc3RydWN0b3IoKXsgfVxuXG4gIG5nT25Jbml0KCl7XG4gICAgLy8gb24gcmVhZHlcbiAgICB0aGlzLmxiLnJlYWR5JC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5sYi5ldmVudEhhbmRsZXIuZW1pdElubmVyKCdpbml0Jywge1xuICAgICAgICAvLyBUT0RPXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHRoaXMubGIuaW5pdCh7XG4gICAgICB3aWRnZXRzQ29uZmlnOiB0aGlzLndpZGdldHMsXG4gICAgICB3aWRnZXRzRGF0YVNvdXJjZXM6IERTLFxuICAgICAgd2lkZ2V0c0V2ZW50SGFuZGxlcnM6IEVILFxuICAgICAgZGF0YVNvdXJjZTogbmV3IE1haW5MYXlvdXREUygpLFxuICAgICAgZXZlbnRIYW5kbGVyOiBuZXcgTWFpbkxheW91dEVIKCksXG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpe1xuICAgIHRoaXMubGIuZXZlbnRIYW5kbGVyLmVtaXRJbm5lcignZGVzdHJveScpO1xuICB9XG59XG4iXX0=