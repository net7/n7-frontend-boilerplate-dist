/**
 * @fileoverview added by tsickle
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXRlc3QtbGF5b3V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9sYXlvdXRzL3NlYXJjaC10ZXN0LWxheW91dC9zZWFyY2gtdGVzdC1sYXlvdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDeEUsT0FBTyxFQUFFLHNCQUFzQixJQUFJLE1BQU0sRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRy9FO0lBSWlELHVEQUFjO0lBZ0Q3RDtRQUFBLFlBQ0Usa0JBQU0sTUFBTSxDQUFDLFNBQ2Q7UUFqREQsa0JBQVksR0FBdUI7WUFDakMsT0FBTyxFQUFFLG9CQUFvQjtZQUM3QixRQUFRLEVBQUUsQ0FBQztvQkFDVCxNQUFNLEVBQUU7d0JBQ04sSUFBSSxFQUFFLFdBQVc7d0JBQ2pCLE9BQU8sRUFBRSxlQUFlO3FCQUN6QjtvQkFDRCxNQUFNLEVBQUUsQ0FBQzs0QkFDUCxFQUFFLEVBQUUsWUFBWTs0QkFDaEIsSUFBSSxFQUFFLE1BQU07NEJBQ1osS0FBSyxFQUFFLEdBQUc7NEJBQ1YsSUFBSSxFQUFFO2dDQUNKLEVBQUUsRUFBRSxZQUFZO2dDQUNoQixXQUFXLEVBQUUsV0FBVztnQ0FDeEIsWUFBWSxFQUFFLFdBQVc7Z0NBQ3pCLFlBQVksRUFBRSxhQUFhOzZCQUM1Qjt5QkFDRixDQUFDO2lCQUNILEVBQUU7b0JBQ0QsTUFBTSxFQUFFO3dCQUNOLElBQUksRUFBRSxZQUFZO3dCQUNsQixPQUFPLEVBQUUsZ0JBQWdCO3FCQUMxQjtvQkFDRCxNQUFNLEVBQUUsQ0FBQzs0QkFDUCxFQUFFLEVBQUUsYUFBYTs0QkFDakIsSUFBSSxFQUFFLFVBQVU7NEJBQ2hCLElBQUksRUFBRTtnQ0FDSixVQUFVLEVBQUUsQ0FBQzt3Q0FDWCxFQUFFLEVBQUUsYUFBYTt3Q0FDakIsS0FBSyxFQUFFLGdCQUFnQjt3Q0FDdkIsT0FBTyxFQUFFLE9BQU87cUNBQ2pCLENBQUM7NkJBQ0g7eUJBQ0YsRUFBRTs0QkFDRCxFQUFFLEVBQUUsZ0JBQWdCOzRCQUNwQixJQUFJLEVBQUUsTUFBTTs0QkFDWixLQUFLLEVBQUUsSUFBSTs0QkFDWCxJQUFJLEVBQUU7Z0NBQ0osRUFBRSxFQUFFLGdCQUFnQjtnQ0FDcEIsV0FBVyxFQUFFLGFBQWE7Z0NBQzFCLFlBQVksRUFBRSxXQUFXO2dDQUN6QixZQUFZLEVBQUUsYUFBYTs2QkFDNUI7eUJBQ0YsQ0FBQztpQkFDSCxDQUFDO1NBQ0gsQ0FBQzs7SUFJRixDQUFDOzs7OztJQUVTLGlEQUFXOzs7O0lBQXJCO1FBQ0UsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDOzs7O0lBRUQsOENBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7Ozs7SUFFRCxpREFBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQzs7Z0JBbEVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsdUJBQXVCO29CQUNqQywrR0FBd0M7aUJBQ3pDOzs7O0lBZ0VELGtDQUFDO0NBQUEsQUFuRUQsQ0FJaUQsY0FBYyxHQStEOUQ7U0EvRFksMkJBQTJCOzs7SUFDdEMsbURBNkNFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWJzdHJhY3RMYXlvdXQgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vbW9kZWxzL2Fic3RyYWN0LWxheW91dCc7XG5pbXBvcnQgeyBTZWFyY2hUZXN0TGF5b3V0Q29uZmlnIGFzIGNvbmZpZyB9IGZyb20gJy4vc2VhcmNoLXRlc3QtbGF5b3V0LmNvbmZpZyc7XG5pbXBvcnQgeyBTZWFyY2hGYWNldHNDb25maWcgfSBmcm9tICcuLi9zZWFyY2gtZmFjZXRzLWxheW91dC9zZWFyY2gtZmFjZXRzLWNvbmZpZyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21yLXNlYXJjaC10ZXN0LWxheW91dCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zZWFyY2gtdGVzdC1sYXlvdXQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgTXJTZWFyY2hUZXN0TGF5b3V0Q29tcG9uZW50IGV4dGVuZHMgQWJzdHJhY3RMYXlvdXQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHNlYXJjaENvbmZpZzogU2VhcmNoRmFjZXRzQ29uZmlnID0ge1xuICAgIGNsYXNzZXM6ICdzZWFyY2gtdGVzdC1mYWNldHMnLFxuICAgIHNlY3Rpb25zOiBbe1xuICAgICAgaGVhZGVyOiB7XG4gICAgICAgIHRleHQ6ICdTZXppb25lIEknLFxuICAgICAgICBjbGFzc2VzOiAnZmlyc3Qtc2VjdGlvbicsXG4gICAgICB9LFxuICAgICAgaW5wdXRzOiBbe1xuICAgICAgICBpZDogJ2Z1bGxzZWFyY2gnLFxuICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgIGRlbGF5OiAzMDAsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBpZDogJ2Z1bGxzZWFyY2gnLFxuICAgICAgICAgIHBsYWNlaG9sZGVyOiAnU2VhcmNoLi4uJyxcbiAgICAgICAgICBpbnB1dFBheWxvYWQ6ICdrZXktZXZlbnQnLFxuICAgICAgICAgIGVudGVyUGF5bG9hZDogJ2VudGVyLWV2ZW50J1xuICAgICAgICB9LFxuICAgICAgfV1cbiAgICB9LCB7XG4gICAgICBoZWFkZXI6IHtcbiAgICAgICAgdGV4dDogJ1NlemlvbmUgSUknLFxuICAgICAgICBjbGFzc2VzOiAnc2Vjb25kLXNlY3Rpb24nLFxuICAgICAgfSxcbiAgICAgIGlucHV0czogW3tcbiAgICAgICAgaWQ6ICdoYXNpbnRlcm5hbCcsXG4gICAgICAgIHR5cGU6ICdjaGVja2JveCcsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBjaGVja2JveGVzOiBbe1xuICAgICAgICAgICAgaWQ6ICdoYXNpbnRlcm5hbCcsXG4gICAgICAgICAgICBsYWJlbDogJ0ZpbHRybyBpbnRlcm5vJyxcbiAgICAgICAgICAgIHBheWxvYWQ6ICdjbGljaydcbiAgICAgICAgICB9XVxuICAgICAgICB9LFxuICAgICAgfSwge1xuICAgICAgICBpZDogJ2ludGVybmFsc2VhcmNoJyxcbiAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICBkZWxheTogNTAwMCxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGlkOiAnaW50ZXJuYWxzZWFyY2gnLFxuICAgICAgICAgIHBsYWNlaG9sZGVyOiAnSW50ZXJuYWwuLi4nLFxuICAgICAgICAgIGlucHV0UGF5bG9hZDogJ2tleS1ldmVudCcsXG4gICAgICAgICAgZW50ZXJQYXlsb2FkOiAnZW50ZXItZXZlbnQnXG4gICAgICAgIH0sXG4gICAgICB9XVxuICAgIH1dXG4gIH07XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoY29uZmlnKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBpbml0UGF5bG9hZCgpIHtcbiAgICByZXR1cm4ge307XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLm9uSW5pdCgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5vbkRlc3Ryb3koKTtcbiAgfVxufVxuIl19