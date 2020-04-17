/**
 * @fileoverview added by tsickle
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXRlc3QtbGF5b3V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9sYXlvdXRzL3NlYXJjaC10ZXN0LWxheW91dC9zZWFyY2gtdGVzdC1sYXlvdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsc0JBQXNCLElBQUksTUFBTSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFPL0UsTUFBTSxPQUFPLDJCQUE0QixTQUFRLGNBQWM7SUFnRDdEO1FBQ0UsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBaERoQixpQkFBWSxHQUF1QjtZQUNqQyxPQUFPLEVBQUUsb0JBQW9CO1lBQzdCLFFBQVEsRUFBRSxDQUFDO29CQUNULE1BQU0sRUFBRTt3QkFDTixJQUFJLEVBQUUsV0FBVzt3QkFDakIsT0FBTyxFQUFFLGVBQWU7cUJBQ3pCO29CQUNELE1BQU0sRUFBRSxDQUFDOzRCQUNQLEVBQUUsRUFBRSxZQUFZOzRCQUNoQixJQUFJLEVBQUUsTUFBTTs0QkFDWixLQUFLLEVBQUUsR0FBRzs0QkFDVixJQUFJLEVBQUU7Z0NBQ0osRUFBRSxFQUFFLFlBQVk7Z0NBQ2hCLFdBQVcsRUFBRSxXQUFXO2dDQUN4QixZQUFZLEVBQUUsV0FBVztnQ0FDekIsWUFBWSxFQUFFLGFBQWE7NkJBQzVCO3lCQUNGLENBQUM7aUJBQ0gsRUFBRTtvQkFDRCxNQUFNLEVBQUU7d0JBQ04sSUFBSSxFQUFFLFlBQVk7d0JBQ2xCLE9BQU8sRUFBRSxnQkFBZ0I7cUJBQzFCO29CQUNELE1BQU0sRUFBRSxDQUFDOzRCQUNQLEVBQUUsRUFBRSxhQUFhOzRCQUNqQixJQUFJLEVBQUUsVUFBVTs0QkFDaEIsSUFBSSxFQUFFO2dDQUNKLFVBQVUsRUFBRSxDQUFDO3dDQUNYLEVBQUUsRUFBRSxhQUFhO3dDQUNqQixLQUFLLEVBQUUsZ0JBQWdCO3dDQUN2QixPQUFPLEVBQUUsT0FBTztxQ0FDakIsQ0FBQzs2QkFDSDt5QkFDRixFQUFFOzRCQUNELEVBQUUsRUFBRSxnQkFBZ0I7NEJBQ3BCLElBQUksRUFBRSxNQUFNOzRCQUNaLEtBQUssRUFBRSxJQUFJOzRCQUNYLElBQUksRUFBRTtnQ0FDSixFQUFFLEVBQUUsZ0JBQWdCO2dDQUNwQixXQUFXLEVBQUUsYUFBYTtnQ0FDMUIsWUFBWSxFQUFFLFdBQVc7Z0NBQ3pCLFlBQVksRUFBRSxhQUFhOzZCQUM1Qjt5QkFDRixDQUFDO2lCQUNILENBQUM7U0FDSCxDQUFDO0lBSUYsQ0FBQzs7Ozs7SUFFUyxXQUFXO1FBQ25CLE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQzs7O1lBbEVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQywrR0FBd0M7YUFDekM7Ozs7OztJQUVDLG1EQTZDRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFic3RyYWN0TGF5b3V0IH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL21vZGVscy9hYnN0cmFjdC1sYXlvdXQnO1xuaW1wb3J0IHsgU2VhcmNoVGVzdExheW91dENvbmZpZyBhcyBjb25maWcgfSBmcm9tICcuL3NlYXJjaC10ZXN0LWxheW91dC5jb25maWcnO1xuaW1wb3J0IHsgU2VhcmNoRmFjZXRzQ29uZmlnIH0gZnJvbSAnLi4vc2VhcmNoLWZhY2V0cy1sYXlvdXQvc2VhcmNoLWZhY2V0cy1jb25maWcnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtci1zZWFyY2gtdGVzdC1sYXlvdXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2VhcmNoLXRlc3QtbGF5b3V0Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIE1yU2VhcmNoVGVzdExheW91dENvbXBvbmVudCBleHRlbmRzIEFic3RyYWN0TGF5b3V0IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBzZWFyY2hDb25maWc6IFNlYXJjaEZhY2V0c0NvbmZpZyA9IHtcbiAgICBjbGFzc2VzOiAnc2VhcmNoLXRlc3QtZmFjZXRzJyxcbiAgICBzZWN0aW9uczogW3tcbiAgICAgIGhlYWRlcjoge1xuICAgICAgICB0ZXh0OiAnU2V6aW9uZSBJJyxcbiAgICAgICAgY2xhc3NlczogJ2ZpcnN0LXNlY3Rpb24nLFxuICAgICAgfSxcbiAgICAgIGlucHV0czogW3tcbiAgICAgICAgaWQ6ICdmdWxsc2VhcmNoJyxcbiAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICBkZWxheTogMzAwLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgaWQ6ICdmdWxsc2VhcmNoJyxcbiAgICAgICAgICBwbGFjZWhvbGRlcjogJ1NlYXJjaC4uLicsXG4gICAgICAgICAgaW5wdXRQYXlsb2FkOiAna2V5LWV2ZW50JyxcbiAgICAgICAgICBlbnRlclBheWxvYWQ6ICdlbnRlci1ldmVudCdcbiAgICAgICAgfSxcbiAgICAgIH1dXG4gICAgfSwge1xuICAgICAgaGVhZGVyOiB7XG4gICAgICAgIHRleHQ6ICdTZXppb25lIElJJyxcbiAgICAgICAgY2xhc3NlczogJ3NlY29uZC1zZWN0aW9uJyxcbiAgICAgIH0sXG4gICAgICBpbnB1dHM6IFt7XG4gICAgICAgIGlkOiAnaGFzaW50ZXJuYWwnLFxuICAgICAgICB0eXBlOiAnY2hlY2tib3gnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgY2hlY2tib3hlczogW3tcbiAgICAgICAgICAgIGlkOiAnaGFzaW50ZXJuYWwnLFxuICAgICAgICAgICAgbGFiZWw6ICdGaWx0cm8gaW50ZXJubycsXG4gICAgICAgICAgICBwYXlsb2FkOiAnY2xpY2snXG4gICAgICAgICAgfV1cbiAgICAgICAgfSxcbiAgICAgIH0sIHtcbiAgICAgICAgaWQ6ICdpbnRlcm5hbHNlYXJjaCcsXG4gICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgZGVsYXk6IDUwMDAsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBpZDogJ2ludGVybmFsc2VhcmNoJyxcbiAgICAgICAgICBwbGFjZWhvbGRlcjogJ0ludGVybmFsLi4uJyxcbiAgICAgICAgICBpbnB1dFBheWxvYWQ6ICdrZXktZXZlbnQnLFxuICAgICAgICAgIGVudGVyUGF5bG9hZDogJ2VudGVyLWV2ZW50J1xuICAgICAgICB9LFxuICAgICAgfV1cbiAgICB9XVxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKGNvbmZpZyk7XG4gIH1cblxuICBwcm90ZWN0ZWQgaW5pdFBheWxvYWQoKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5vbkluaXQoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMub25EZXN0cm95KCk7XG4gIH1cbn1cbiJdfQ==