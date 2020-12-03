import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { N7BoilerplateCommonModule } from './common/n7-boilerplate-common.module';
import { N7BoilerplateAriannaWebModule } from './arianna-web/n7-boilerplate-arianna-web.module';
import { N7BoilerplateDataVizModule } from './data-viz/n7-boilerplate-data-viz.module';
import { N7BoilerplateMurucaModule } from './muruca/n7-boilerplate-muruca.module';
import { N7BoilerplateSandboxModule } from './sandbox/n7-boilerplate-sandbox.module';
var N7BoilerplateLibModule = /** @class */ (function () {
    function N7BoilerplateLibModule() {
    }
    N7BoilerplateLibModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
            ],
            providers: [],
            exports: [
                // COMMON
                N7BoilerplateCommonModule,
                // AW
                N7BoilerplateAriannaWebModule,
                // DV
                N7BoilerplateDataVizModule,
                // MR
                N7BoilerplateMurucaModule,
                // SB
                N7BoilerplateSandboxModule,
            ],
        })
    ], N7BoilerplateLibModule);
    return N7BoilerplateLibModule;
}());
export { N7BoilerplateLibModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibjctYm9pbGVycGxhdGUtbGliLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9uNy1ib2lsZXJwbGF0ZS1saWIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUNsRixPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUNoRyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUN2RixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUNsRixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQW9CckY7SUFBQTtJQUFzQyxDQUFDO0lBQTFCLHNCQUFzQjtRQWxCbEMsUUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLFlBQVk7YUFDYjtZQUNELFNBQVMsRUFBRSxFQUFFO1lBQ2IsT0FBTyxFQUFFO2dCQUNQLFNBQVM7Z0JBQ1QseUJBQXlCO2dCQUN6QixLQUFLO2dCQUNMLDZCQUE2QjtnQkFDN0IsS0FBSztnQkFDTCwwQkFBMEI7Z0JBQzFCLEtBQUs7Z0JBQ0wseUJBQXlCO2dCQUN6QixLQUFLO2dCQUNMLDBCQUEwQjthQUMzQjtTQUNGLENBQUM7T0FDVyxzQkFBc0IsQ0FBSTtJQUFELDZCQUFDO0NBQUEsQUFBdkMsSUFBdUM7U0FBMUIsc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTjdCb2lsZXJwbGF0ZUNvbW1vbk1vZHVsZSB9IGZyb20gJy4vY29tbW9uL243LWJvaWxlcnBsYXRlLWNvbW1vbi5tb2R1bGUnO1xyXG5pbXBvcnQgeyBON0JvaWxlcnBsYXRlQXJpYW5uYVdlYk1vZHVsZSB9IGZyb20gJy4vYXJpYW5uYS13ZWIvbjctYm9pbGVycGxhdGUtYXJpYW5uYS13ZWIubW9kdWxlJztcclxuaW1wb3J0IHsgTjdCb2lsZXJwbGF0ZURhdGFWaXpNb2R1bGUgfSBmcm9tICcuL2RhdGEtdml6L243LWJvaWxlcnBsYXRlLWRhdGEtdml6Lm1vZHVsZSc7XHJcbmltcG9ydCB7IE43Qm9pbGVycGxhdGVNdXJ1Y2FNb2R1bGUgfSBmcm9tICcuL211cnVjYS9uNy1ib2lsZXJwbGF0ZS1tdXJ1Y2EubW9kdWxlJztcclxuaW1wb3J0IHsgTjdCb2lsZXJwbGF0ZVNhbmRib3hNb2R1bGUgfSBmcm9tICcuL3NhbmRib3gvbjctYm9pbGVycGxhdGUtc2FuZGJveC5tb2R1bGUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIC8vIENPTU1PTlxyXG4gICAgTjdCb2lsZXJwbGF0ZUNvbW1vbk1vZHVsZSxcclxuICAgIC8vIEFXXHJcbiAgICBON0JvaWxlcnBsYXRlQXJpYW5uYVdlYk1vZHVsZSxcclxuICAgIC8vIERWXHJcbiAgICBON0JvaWxlcnBsYXRlRGF0YVZpek1vZHVsZSxcclxuICAgIC8vIE1SXHJcbiAgICBON0JvaWxlcnBsYXRlTXVydWNhTW9kdWxlLFxyXG4gICAgLy8gU0JcclxuICAgIE43Qm9pbGVycGxhdGVTYW5kYm94TW9kdWxlLFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBON0JvaWxlcnBsYXRlTGliTW9kdWxlIHsgfVxyXG4iXX0=