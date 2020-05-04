/**
 * @fileoverview added by tsickle
 * Generated from: lib/muruca/layouts/search-test-layout/search-test-layout.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AbstractLayout } from '../../../common/models/abstract-layout';
import { SearchTestLayoutConfig as config } from './search-test-layout.config';
var MrSearchTestLayoutComponent = /** @class */ (function (_super) {
    tslib_1.__extends(MrSearchTestLayoutComponent, _super);
    function MrSearchTestLayoutComponent() {
        var _this = _super.call(this, config) || this;
        _this.searchConfig = {
            classes: 'search-test-facets',
            sections: [{
                    header: {
                        text: 'Sezione I',
                        classes: 'first-section',
                    },
                    inputs: [{
                            id: 'fullsearch',
                            type: 'text',
                            delay: 300,
                            data: {
                                id: 'fullsearch',
                                placeholder: 'Search...',
                                inputPayload: 'key-event',
                                enterPayload: 'enter-event'
                            },
                        }]
                }, {
                    header: {
                        text: 'Sezione II',
                        classes: 'second-section',
                    },
                    inputs: [{
                            id: 'hasinternal',
                            type: 'checkbox',
                            data: {
                                checkboxes: [{
                                        id: 'hasinternal',
                                        label: 'Filtro interno',
                                        payload: 'click'
                                    }]
                            },
                        }, {
                            id: 'internalsearch',
                            type: 'text',
                            delay: 5000,
                            data: {
                                id: 'internalsearch',
                                placeholder: 'Internal...',
                                inputPayload: 'key-event',
                                enterPayload: 'enter-event'
                            },
                        }]
                }]
        };
        return _this;
    }
    /**
     * @protected
     * @return {?}
     */
    MrSearchTestLayoutComponent.prototype.initPayload = /**
     * @protected
     * @return {?}
     */
    function () {
        return {};
    };
    /**
     * @return {?}
     */
    MrSearchTestLayoutComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.onInit();
    };
    /**
     * @return {?}
     */
    MrSearchTestLayoutComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.onDestroy();
    };
    MrSearchTestLayoutComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mr-search-test-layout',
                    template: "<div>\n    <mr-search-facets-layout\n    [data]=\"searchConfig\"></mr-search-facets-layout>\n</div>"
                }] }
    ];
    /** @nocollapse */
    MrSearchTestLayoutComponent.ctorParameters = function () { return []; };
    return MrSearchTestLayoutComponent;
}(AbstractLayout));
export { MrSearchTestLayoutComponent };
if (false) {
    /** @type {?} */
    MrSearchTestLayoutComponent.prototype.searchConfig;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXRlc3QtbGF5b3V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9sYXlvdXRzL3NlYXJjaC10ZXN0LWxheW91dC9zZWFyY2gtdGVzdC1sYXlvdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxzQkFBc0IsSUFBSSxNQUFNLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUcvRTtJQUlpRCx1REFBYztJQWdEN0Q7UUFBQSxZQUNFLGtCQUFNLE1BQU0sQ0FBQyxTQUNkO1FBakRELGtCQUFZLEdBQXVCO1lBQ2pDLE9BQU8sRUFBRSxvQkFBb0I7WUFDN0IsUUFBUSxFQUFFLENBQUM7b0JBQ1QsTUFBTSxFQUFFO3dCQUNOLElBQUksRUFBRSxXQUFXO3dCQUNqQixPQUFPLEVBQUUsZUFBZTtxQkFDekI7b0JBQ0QsTUFBTSxFQUFFLENBQUM7NEJBQ1AsRUFBRSxFQUFFLFlBQVk7NEJBQ2hCLElBQUksRUFBRSxNQUFNOzRCQUNaLEtBQUssRUFBRSxHQUFHOzRCQUNWLElBQUksRUFBRTtnQ0FDSixFQUFFLEVBQUUsWUFBWTtnQ0FDaEIsV0FBVyxFQUFFLFdBQVc7Z0NBQ3hCLFlBQVksRUFBRSxXQUFXO2dDQUN6QixZQUFZLEVBQUUsYUFBYTs2QkFDNUI7eUJBQ0YsQ0FBQztpQkFDSCxFQUFFO29CQUNELE1BQU0sRUFBRTt3QkFDTixJQUFJLEVBQUUsWUFBWTt3QkFDbEIsT0FBTyxFQUFFLGdCQUFnQjtxQkFDMUI7b0JBQ0QsTUFBTSxFQUFFLENBQUM7NEJBQ1AsRUFBRSxFQUFFLGFBQWE7NEJBQ2pCLElBQUksRUFBRSxVQUFVOzRCQUNoQixJQUFJLEVBQUU7Z0NBQ0osVUFBVSxFQUFFLENBQUM7d0NBQ1gsRUFBRSxFQUFFLGFBQWE7d0NBQ2pCLEtBQUssRUFBRSxnQkFBZ0I7d0NBQ3ZCLE9BQU8sRUFBRSxPQUFPO3FDQUNqQixDQUFDOzZCQUNIO3lCQUNGLEVBQUU7NEJBQ0QsRUFBRSxFQUFFLGdCQUFnQjs0QkFDcEIsSUFBSSxFQUFFLE1BQU07NEJBQ1osS0FBSyxFQUFFLElBQUk7NEJBQ1gsSUFBSSxFQUFFO2dDQUNKLEVBQUUsRUFBRSxnQkFBZ0I7Z0NBQ3BCLFdBQVcsRUFBRSxhQUFhO2dDQUMxQixZQUFZLEVBQUUsV0FBVztnQ0FDekIsWUFBWSxFQUFFLGFBQWE7NkJBQzVCO3lCQUNGLENBQUM7aUJBQ0gsQ0FBQztTQUNILENBQUM7O0lBSUYsQ0FBQzs7Ozs7SUFFUyxpREFBVzs7OztJQUFyQjtRQUNFLE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQzs7OztJQUVELDhDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDOzs7O0lBRUQsaURBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7O2dCQWxFRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtvQkFDakMsK0dBQXdDO2lCQUN6Qzs7OztJQWdFRCxrQ0FBQztDQUFBLEFBbkVELENBSWlELGNBQWMsR0ErRDlEO1NBL0RZLDJCQUEyQjs7O0lBQ3RDLG1EQTZDRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFic3RyYWN0TGF5b3V0IH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL21vZGVscy9hYnN0cmFjdC1sYXlvdXQnO1xuaW1wb3J0IHsgU2VhcmNoVGVzdExheW91dENvbmZpZyBhcyBjb25maWcgfSBmcm9tICcuL3NlYXJjaC10ZXN0LWxheW91dC5jb25maWcnO1xuaW1wb3J0IHsgU2VhcmNoRmFjZXRzQ29uZmlnIH0gZnJvbSAnLi4vc2VhcmNoLWZhY2V0cy1sYXlvdXQvc2VhcmNoLWZhY2V0cy1jb25maWcnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtci1zZWFyY2gtdGVzdC1sYXlvdXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2VhcmNoLXRlc3QtbGF5b3V0Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIE1yU2VhcmNoVGVzdExheW91dENvbXBvbmVudCBleHRlbmRzIEFic3RyYWN0TGF5b3V0IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBzZWFyY2hDb25maWc6IFNlYXJjaEZhY2V0c0NvbmZpZyA9IHtcbiAgICBjbGFzc2VzOiAnc2VhcmNoLXRlc3QtZmFjZXRzJyxcbiAgICBzZWN0aW9uczogW3tcbiAgICAgIGhlYWRlcjoge1xuICAgICAgICB0ZXh0OiAnU2V6aW9uZSBJJyxcbiAgICAgICAgY2xhc3NlczogJ2ZpcnN0LXNlY3Rpb24nLFxuICAgICAgfSxcbiAgICAgIGlucHV0czogW3tcbiAgICAgICAgaWQ6ICdmdWxsc2VhcmNoJyxcbiAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICBkZWxheTogMzAwLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgaWQ6ICdmdWxsc2VhcmNoJyxcbiAgICAgICAgICBwbGFjZWhvbGRlcjogJ1NlYXJjaC4uLicsXG4gICAgICAgICAgaW5wdXRQYXlsb2FkOiAna2V5LWV2ZW50JyxcbiAgICAgICAgICBlbnRlclBheWxvYWQ6ICdlbnRlci1ldmVudCdcbiAgICAgICAgfSxcbiAgICAgIH1dXG4gICAgfSwge1xuICAgICAgaGVhZGVyOiB7XG4gICAgICAgIHRleHQ6ICdTZXppb25lIElJJyxcbiAgICAgICAgY2xhc3NlczogJ3NlY29uZC1zZWN0aW9uJyxcbiAgICAgIH0sXG4gICAgICBpbnB1dHM6IFt7XG4gICAgICAgIGlkOiAnaGFzaW50ZXJuYWwnLFxuICAgICAgICB0eXBlOiAnY2hlY2tib3gnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgY2hlY2tib3hlczogW3tcbiAgICAgICAgICAgIGlkOiAnaGFzaW50ZXJuYWwnLFxuICAgICAgICAgICAgbGFiZWw6ICdGaWx0cm8gaW50ZXJubycsXG4gICAgICAgICAgICBwYXlsb2FkOiAnY2xpY2snXG4gICAgICAgICAgfV1cbiAgICAgICAgfSxcbiAgICAgIH0sIHtcbiAgICAgICAgaWQ6ICdpbnRlcm5hbHNlYXJjaCcsXG4gICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgZGVsYXk6IDUwMDAsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBpZDogJ2ludGVybmFsc2VhcmNoJyxcbiAgICAgICAgICBwbGFjZWhvbGRlcjogJ0ludGVybmFsLi4uJyxcbiAgICAgICAgICBpbnB1dFBheWxvYWQ6ICdrZXktZXZlbnQnLFxuICAgICAgICAgIGVudGVyUGF5bG9hZDogJ2VudGVyLWV2ZW50J1xuICAgICAgICB9LFxuICAgICAgfV1cbiAgICB9XVxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKGNvbmZpZyk7XG4gIH1cblxuICBwcm90ZWN0ZWQgaW5pdFBheWxvYWQoKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5vbkluaXQoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMub25EZXN0cm95KCk7XG4gIH1cbn1cbiJdfQ==