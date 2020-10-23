import { __decorate, __extends, __metadata } from "tslib";
/* eslint-disable */
import { Component } from '@angular/core';
import { AbstractLayout } from '../../../common/models/abstract-layout';
import { SbExampleLayoutConfig as config } from './example-layout.config';
var SbExampleLayoutComponent = /** @class */ (function (_super) {
    __extends(SbExampleLayoutComponent, _super);
    function SbExampleLayoutComponent() {
        return _super.call(this, config) || this;
    }
    SbExampleLayoutComponent.prototype.initPayload = function () {
        return {};
    };
    SbExampleLayoutComponent.prototype.ngOnInit = function () {
        this.onInit();
    };
    SbExampleLayoutComponent.prototype.ngOnDestroy = function () {
        this.onDestroy();
    };
    SbExampleLayoutComponent = __decorate([
        Component({
            selector: 'sb-example-layout',
            template: "<div class=\"sb-example-layout\" id=\"example-layout\">\n    // TODO\n</div>"
        }),
        __metadata("design:paramtypes", [])
    ], SbExampleLayoutComponent);
    return SbExampleLayoutComponent;
}(AbstractLayout));
export { SbExampleLayoutComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZS1sYXlvdXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvc2FuZGJveC9sYXlvdXQvZXhhbXBsZS1sYXlvdXQvZXhhbXBsZS1sYXlvdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLG9CQUFvQjtBQUNwQixPQUFPLEVBQUUsU0FBUyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDeEUsT0FBTyxFQUFFLHFCQUFxQixJQUFJLE1BQU0sRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBTTFFO0lBQThDLDRDQUFjO0lBQzFEO2VBQ0Usa0JBQU0sTUFBTSxDQUFDO0lBQ2YsQ0FBQztJQUVELDhDQUFXLEdBQVg7UUFDRSxPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFFRCwyQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFRCw4Q0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFmVSx3QkFBd0I7UUFKcEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLG1CQUFtQjtZQUM3Qix3RkFBb0M7U0FDckMsQ0FBQzs7T0FDVyx3QkFBd0IsQ0FnQnBDO0lBQUQsK0JBQUM7Q0FBQSxBQWhCRCxDQUE4QyxjQUFjLEdBZ0IzRDtTQWhCWSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWJzdHJhY3RMYXlvdXQgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vbW9kZWxzL2Fic3RyYWN0LWxheW91dCc7XG5pbXBvcnQgeyBTYkV4YW1wbGVMYXlvdXRDb25maWcgYXMgY29uZmlnIH0gZnJvbSAnLi9leGFtcGxlLWxheW91dC5jb25maWcnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzYi1leGFtcGxlLWxheW91dCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9leGFtcGxlLWxheW91dC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgU2JFeGFtcGxlTGF5b3V0Q29tcG9uZW50IGV4dGVuZHMgQWJzdHJhY3RMYXlvdXQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKGNvbmZpZyk7XG4gIH1cblxuICBpbml0UGF5bG9hZCgpIHtcbiAgICByZXR1cm4ge307XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLm9uSW5pdCgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5vbkRlc3Ryb3koKTtcbiAgfVxufVxuIl19