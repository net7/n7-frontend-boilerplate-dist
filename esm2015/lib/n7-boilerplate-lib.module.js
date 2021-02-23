import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { N7BoilerplateCommonModule } from './common/n7-boilerplate-common.module';
import { N7BoilerplateAriannaWebModule } from './arianna-web/n7-boilerplate-arianna-web.module';
import { N7BoilerplateDataVizModule } from './data-viz/n7-boilerplate-data-viz.module';
import { N7BoilerplateMurucaModule } from './muruca/n7-boilerplate-muruca.module';
import { N7BoilerplateSandboxModule } from './sandbox/n7-boilerplate-sandbox.module';
let N7BoilerplateLibModule = class N7BoilerplateLibModule {
};
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
export { N7BoilerplateLibModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibjctYm9pbGVycGxhdGUtbGliLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9uNy1ib2lsZXJwbGF0ZS1saWIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUNsRixPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUNoRyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUN2RixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUNsRixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQW9CckYsSUFBYSxzQkFBc0IsR0FBbkMsTUFBYSxzQkFBc0I7Q0FBSSxDQUFBO0FBQTFCLHNCQUFzQjtJQWxCbEMsUUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AsWUFBWTtTQUNiO1FBQ0QsU0FBUyxFQUFFLEVBQUU7UUFDYixPQUFPLEVBQUU7WUFDUCxTQUFTO1lBQ1QseUJBQXlCO1lBQ3pCLEtBQUs7WUFDTCw2QkFBNkI7WUFDN0IsS0FBSztZQUNMLDBCQUEwQjtZQUMxQixLQUFLO1lBQ0wseUJBQXlCO1lBQ3pCLEtBQUs7WUFDTCwwQkFBMEI7U0FDM0I7S0FDRixDQUFDO0dBQ1csc0JBQXNCLENBQUk7U0FBMUIsc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBON0JvaWxlcnBsYXRlQ29tbW9uTW9kdWxlIH0gZnJvbSAnLi9jb21tb24vbjctYm9pbGVycGxhdGUtY29tbW9uLm1vZHVsZSc7XG5pbXBvcnQgeyBON0JvaWxlcnBsYXRlQXJpYW5uYVdlYk1vZHVsZSB9IGZyb20gJy4vYXJpYW5uYS13ZWIvbjctYm9pbGVycGxhdGUtYXJpYW5uYS13ZWIubW9kdWxlJztcbmltcG9ydCB7IE43Qm9pbGVycGxhdGVEYXRhVml6TW9kdWxlIH0gZnJvbSAnLi9kYXRhLXZpei9uNy1ib2lsZXJwbGF0ZS1kYXRhLXZpei5tb2R1bGUnO1xuaW1wb3J0IHsgTjdCb2lsZXJwbGF0ZU11cnVjYU1vZHVsZSB9IGZyb20gJy4vbXVydWNhL243LWJvaWxlcnBsYXRlLW11cnVjYS5tb2R1bGUnO1xuaW1wb3J0IHsgTjdCb2lsZXJwbGF0ZVNhbmRib3hNb2R1bGUgfSBmcm9tICcuL3NhbmRib3gvbjctYm9pbGVycGxhdGUtc2FuZGJveC5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICBdLFxuICBwcm92aWRlcnM6IFtdLFxuICBleHBvcnRzOiBbXG4gICAgLy8gQ09NTU9OXG4gICAgTjdCb2lsZXJwbGF0ZUNvbW1vbk1vZHVsZSxcbiAgICAvLyBBV1xuICAgIE43Qm9pbGVycGxhdGVBcmlhbm5hV2ViTW9kdWxlLFxuICAgIC8vIERWXG4gICAgTjdCb2lsZXJwbGF0ZURhdGFWaXpNb2R1bGUsXG4gICAgLy8gTVJcbiAgICBON0JvaWxlcnBsYXRlTXVydWNhTW9kdWxlLFxuICAgIC8vIFNCXG4gICAgTjdCb2lsZXJwbGF0ZVNhbmRib3hNb2R1bGUsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIE43Qm9pbGVycGxhdGVMaWJNb2R1bGUgeyB9XG4iXX0=