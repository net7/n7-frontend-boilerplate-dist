import { ModuleWithProviders } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./layouts/main-layout/main-layout";
import * as i2 from "./layouts/page404-layout/page404-layout";
import * as i3 from "./components/smart-pagination/smart-pagination";
import * as i4 from "@angular/common";
import * as i5 from "@angular/common/http";
import * as i6 from "@n7-frontend/components";
export declare class N7BoilerplateCommonModule {
    static forRoot(config?: any): ModuleWithProviders<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<N7BoilerplateCommonModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<N7BoilerplateCommonModule, [typeof i1.MainLayoutComponent, typeof i2.Page404LayoutComponent, typeof i3.SmartPaginationComponent], [typeof i4.CommonModule, typeof i5.HttpClientModule, typeof i6.DvComponentsLibModule], [typeof i1.MainLayoutComponent, typeof i2.Page404LayoutComponent, typeof i3.SmartPaginationComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<N7BoilerplateCommonModule>;
}
