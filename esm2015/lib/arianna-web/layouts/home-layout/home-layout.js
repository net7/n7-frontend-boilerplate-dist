/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { AbstractLayout } from '../../../common/models/abstract-layout';
import { AwHomeLayoutConfig as config } from './home-layout.config';
export class AwHomeLayoutComponent extends AbstractLayout {
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
AwHomeLayoutComponent.decorators = [
    { type: Component, args: [{
                selector: 'aw-home-layout',
                template: "<div class=\"\" *ngIf=\"lb.dataSource\">\n    <n7-table\n    [data]=\"lb.widgets['aw-table'].ds.out$ | async\"\n    [emit]=\"lb.widgets['aw-table'].emit\">\n    </n7-table>\n</div>"
            }] }
];
/** @nocollapse */
AwHomeLayoutComponent.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1sYXlvdXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvbGF5b3V0cy9ob21lLWxheW91dC9ob21lLWxheW91dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxrQkFBa0IsSUFBSSxNQUFNLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQU1wRSxNQUFNLE9BQU8scUJBQXNCLFNBQVEsY0FBYztJQUN2RDtRQUVFLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNoQixDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDOzs7WUFoQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLGdNQUFpQzthQUNsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFic3RyYWN0TGF5b3V0IH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL21vZGVscy9hYnN0cmFjdC1sYXlvdXQnO1xuaW1wb3J0IHsgQXdIb21lTGF5b3V0Q29uZmlnIGFzIGNvbmZpZyB9IGZyb20gJy4vaG9tZS1sYXlvdXQuY29uZmlnJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXctaG9tZS1sYXlvdXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vaG9tZS1sYXlvdXQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgQXdIb21lTGF5b3V0Q29tcG9uZW50IGV4dGVuZHMgQWJzdHJhY3RMYXlvdXQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIGNvbnN0cnVjdG9yKFxuICApe1xuICAgIHN1cGVyKGNvbmZpZyk7XG4gIH1cblxuICBuZ09uSW5pdCgpe1xuICAgIHRoaXMub25Jbml0KCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpe1xuICAgIHRoaXMub25EZXN0cm95KCk7XG4gIH1cblxufSJdfQ==