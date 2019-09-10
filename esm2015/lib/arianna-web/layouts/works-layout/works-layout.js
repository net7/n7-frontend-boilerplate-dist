/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { AbstractLayout } from '../../../common/models/abstract-layout';
import { AwWorksLayoutConfig as config } from './works-layout.config';
export class AwWorksLayoutComponent extends AbstractLayout {
    constructor() {
        super(config);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.onInit();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.onDestroy();
    }
}
AwWorksLayoutComponent.decorators = [
    { type: Component, args: [{
                selector: 'aw-works-layout',
                template: "<div class=\"\" *ngIf=\"lb.dataSource\">\n    Works page!\n</div>"
            }] }
];
/** @nocollapse */
AwWorksLayoutComponent.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya3MtbGF5b3V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2xheW91dHMvd29ya3MtbGF5b3V0L3dvcmtzLWxheW91dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxtQkFBbUIsSUFBSSxNQUFNLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQU10RSxNQUFNLE9BQU8sc0JBQXVCLFNBQVEsY0FBYztJQUN4RDtRQUVFLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNoQixDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDOzs7WUFoQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLDZFQUFrQzthQUNuQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFic3RyYWN0TGF5b3V0IH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL21vZGVscy9hYnN0cmFjdC1sYXlvdXQnO1xuaW1wb3J0IHsgQXdXb3Jrc0xheW91dENvbmZpZyBhcyBjb25maWcgfSBmcm9tICcuL3dvcmtzLWxheW91dC5jb25maWcnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhdy13b3Jrcy1sYXlvdXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vd29ya3MtbGF5b3V0Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEF3V29ya3NMYXlvdXRDb21wb25lbnQgZXh0ZW5kcyBBYnN0cmFjdExheW91dCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgY29uc3RydWN0b3IoXG4gICl7XG4gICAgc3VwZXIoY29uZmlnKTtcbiAgfVxuXG4gIG5nT25Jbml0KCl7XG4gICAgdGhpcy5vbkluaXQoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCl7XG4gICAgdGhpcy5vbkRlc3Ryb3koKTtcbiAgfVxuXG59Il19