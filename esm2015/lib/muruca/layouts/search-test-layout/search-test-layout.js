/**
 * @fileoverview added by tsickle
 * Generated from: lib/muruca/layouts/search-test-layout/search-test-layout.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { AbstractLayout } from '../../../common/models/abstract-layout';
import { SearchTestLayoutConfig as config } from './search-test-layout.config';
export class MrSearchTestLayoutComponent extends AbstractLayout {
    constructor() {
        super(config);
        this.searchConfig = {
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
    }
    /**
     * @protected
     * @return {?}
     */
    initPayload() {
        return {};
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
MrSearchTestLayoutComponent.decorators = [
    { type: Component, args: [{
                selector: 'mr-search-test-layout',
                template: "<div>\n    <mr-search-facets-layout\n    [data]=\"searchConfig\"></mr-search-facets-layout>\n</div>"
            }] }
];
/** @nocollapse */
MrSearchTestLayoutComponent.ctorParameters = () => [];
if (false) {
    /** @type {?} */
    MrSearchTestLayoutComponent.prototype.searchConfig;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXRlc3QtbGF5b3V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9sYXlvdXRzL3NlYXJjaC10ZXN0LWxheW91dC9zZWFyY2gtdGVzdC1sYXlvdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDeEUsT0FBTyxFQUFFLHNCQUFzQixJQUFJLE1BQU0sRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBTy9FLE1BQU0sT0FBTywyQkFBNEIsU0FBUSxjQUFjO0lBZ0Q3RDtRQUNFLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQWhEaEIsaUJBQVksR0FBdUI7WUFDakMsT0FBTyxFQUFFLG9CQUFvQjtZQUM3QixRQUFRLEVBQUUsQ0FBQztvQkFDVCxNQUFNLEVBQUU7d0JBQ04sSUFBSSxFQUFFLFdBQVc7d0JBQ2pCLE9BQU8sRUFBRSxlQUFlO3FCQUN6QjtvQkFDRCxNQUFNLEVBQUUsQ0FBQzs0QkFDUCxFQUFFLEVBQUUsWUFBWTs0QkFDaEIsSUFBSSxFQUFFLE1BQU07NEJBQ1osS0FBSyxFQUFFLEdBQUc7NEJBQ1YsSUFBSSxFQUFFO2dDQUNKLEVBQUUsRUFBRSxZQUFZO2dDQUNoQixXQUFXLEVBQUUsV0FBVztnQ0FDeEIsWUFBWSxFQUFFLFdBQVc7Z0NBQ3pCLFlBQVksRUFBRSxhQUFhOzZCQUM1Qjt5QkFDRixDQUFDO2lCQUNILEVBQUU7b0JBQ0QsTUFBTSxFQUFFO3dCQUNOLElBQUksRUFBRSxZQUFZO3dCQUNsQixPQUFPLEVBQUUsZ0JBQWdCO3FCQUMxQjtvQkFDRCxNQUFNLEVBQUUsQ0FBQzs0QkFDUCxFQUFFLEVBQUUsYUFBYTs0QkFDakIsSUFBSSxFQUFFLFVBQVU7NEJBQ2hCLElBQUksRUFBRTtnQ0FDSixVQUFVLEVBQUUsQ0FBQzt3Q0FDWCxFQUFFLEVBQUUsYUFBYTt3Q0FDakIsS0FBSyxFQUFFLGdCQUFnQjt3Q0FDdkIsT0FBTyxFQUFFLE9BQU87cUNBQ2pCLENBQUM7NkJBQ0g7eUJBQ0YsRUFBRTs0QkFDRCxFQUFFLEVBQUUsZ0JBQWdCOzRCQUNwQixJQUFJLEVBQUUsTUFBTTs0QkFDWixLQUFLLEVBQUUsSUFBSTs0QkFDWCxJQUFJLEVBQUU7Z0NBQ0osRUFBRSxFQUFFLGdCQUFnQjtnQ0FDcEIsV0FBVyxFQUFFLGFBQWE7Z0NBQzFCLFlBQVksRUFBRSxXQUFXO2dDQUN6QixZQUFZLEVBQUUsYUFBYTs2QkFDNUI7eUJBQ0YsQ0FBQztpQkFDSCxDQUFDO1NBQ0gsQ0FBQztJQUlGLENBQUM7Ozs7O0lBRVMsV0FBVztRQUNuQixPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7OztZQWxFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsK0dBQXdDO2FBQ3pDOzs7Ozs7SUFFQyxtREE2Q0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBYnN0cmFjdExheW91dCB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9tb2RlbHMvYWJzdHJhY3QtbGF5b3V0JztcbmltcG9ydCB7IFNlYXJjaFRlc3RMYXlvdXRDb25maWcgYXMgY29uZmlnIH0gZnJvbSAnLi9zZWFyY2gtdGVzdC1sYXlvdXQuY29uZmlnJztcbmltcG9ydCB7IFNlYXJjaEZhY2V0c0NvbmZpZyB9IGZyb20gJy4uL3NlYXJjaC1mYWNldHMtbGF5b3V0L3NlYXJjaC1mYWNldHMtY29uZmlnJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXItc2VhcmNoLXRlc3QtbGF5b3V0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NlYXJjaC10ZXN0LWxheW91dC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBNclNlYXJjaFRlc3RMYXlvdXRDb21wb25lbnQgZXh0ZW5kcyBBYnN0cmFjdExheW91dCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgc2VhcmNoQ29uZmlnOiBTZWFyY2hGYWNldHNDb25maWcgPSB7XG4gICAgY2xhc3NlczogJ3NlYXJjaC10ZXN0LWZhY2V0cycsXG4gICAgc2VjdGlvbnM6IFt7XG4gICAgICBoZWFkZXI6IHtcbiAgICAgICAgdGV4dDogJ1NlemlvbmUgSScsXG4gICAgICAgIGNsYXNzZXM6ICdmaXJzdC1zZWN0aW9uJyxcbiAgICAgIH0sXG4gICAgICBpbnB1dHM6IFt7XG4gICAgICAgIGlkOiAnZnVsbHNlYXJjaCcsXG4gICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgZGVsYXk6IDMwMCxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGlkOiAnZnVsbHNlYXJjaCcsXG4gICAgICAgICAgcGxhY2Vob2xkZXI6ICdTZWFyY2guLi4nLFxuICAgICAgICAgIGlucHV0UGF5bG9hZDogJ2tleS1ldmVudCcsXG4gICAgICAgICAgZW50ZXJQYXlsb2FkOiAnZW50ZXItZXZlbnQnXG4gICAgICAgIH0sXG4gICAgICB9XVxuICAgIH0sIHtcbiAgICAgIGhlYWRlcjoge1xuICAgICAgICB0ZXh0OiAnU2V6aW9uZSBJSScsXG4gICAgICAgIGNsYXNzZXM6ICdzZWNvbmQtc2VjdGlvbicsXG4gICAgICB9LFxuICAgICAgaW5wdXRzOiBbe1xuICAgICAgICBpZDogJ2hhc2ludGVybmFsJyxcbiAgICAgICAgdHlwZTogJ2NoZWNrYm94JyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGNoZWNrYm94ZXM6IFt7XG4gICAgICAgICAgICBpZDogJ2hhc2ludGVybmFsJyxcbiAgICAgICAgICAgIGxhYmVsOiAnRmlsdHJvIGludGVybm8nLFxuICAgICAgICAgICAgcGF5bG9hZDogJ2NsaWNrJ1xuICAgICAgICAgIH1dXG4gICAgICAgIH0sXG4gICAgICB9LCB7XG4gICAgICAgIGlkOiAnaW50ZXJuYWxzZWFyY2gnLFxuICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgIGRlbGF5OiA1MDAwLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgaWQ6ICdpbnRlcm5hbHNlYXJjaCcsXG4gICAgICAgICAgcGxhY2Vob2xkZXI6ICdJbnRlcm5hbC4uLicsXG4gICAgICAgICAgaW5wdXRQYXlsb2FkOiAna2V5LWV2ZW50JyxcbiAgICAgICAgICBlbnRlclBheWxvYWQ6ICdlbnRlci1ldmVudCdcbiAgICAgICAgfSxcbiAgICAgIH1dXG4gICAgfV1cbiAgfTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihjb25maWcpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGluaXRQYXlsb2FkKCkge1xuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMub25Jbml0KCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLm9uRGVzdHJveSgpO1xuICB9XG59XG4iXX0=