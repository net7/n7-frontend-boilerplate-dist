/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventHandler } from '@n7-frontend/core';
export class AwAutocompleteWrapperEH extends EventHandler {
    /**
     * @return {?}
     */
    listen() {
        this.innerEvents$.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ({ type, payload }) => {
            switch (type) {
                case 'aw-autocomplete-wrapper.click':
                    if (payload != 'fallback-simple-autocomplete') { // if this is the fallback item, kill the event.
                        this.emitOuter('clickresult', payload);
                    }
                    break;
                default:
                    console.warn('unhandled event of type:', type);
                    break;
            }
        }));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLXdyYXBwZXIuZWguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZXZlbnQtaGFuZGxlcnMvYXV0b2NvbXBsZXRlLXdyYXBwZXIuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVqRCxNQUFNLE9BQU8sdUJBQXdCLFNBQVEsWUFBWTs7OztJQUVoRCxNQUFNO1FBQ1gsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO1lBQ2hELFFBQVEsSUFBSSxFQUFFO2dCQUNaLEtBQUssK0JBQStCO29CQUNsQyxJQUFJLE9BQU8sSUFBSSw4QkFBOEIsRUFBRSxFQUFFLGdEQUFnRDt3QkFDL0YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLENBQUE7cUJBQ3ZDO29CQUNELE1BQU07Z0JBQ1I7b0JBQ0UsT0FBTyxDQUFDLElBQUksQ0FBQywwQkFBMEIsRUFBRSxJQUFJLENBQUMsQ0FBQTtvQkFDOUMsTUFBTTthQUNUO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDO0NBRUYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBBd0F1dG9jb21wbGV0ZVdyYXBwZXJFSCBleHRlbmRzIEV2ZW50SGFuZGxlciB7XG5cbiAgcHVibGljIGxpc3RlbigpIHtcbiAgICB0aGlzLmlubmVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnYXctYXV0b2NvbXBsZXRlLXdyYXBwZXIuY2xpY2snOlxuICAgICAgICAgIGlmIChwYXlsb2FkICE9ICdmYWxsYmFjay1zaW1wbGUtYXV0b2NvbXBsZXRlJykgeyAvLyBpZiB0aGlzIGlzIHRoZSBmYWxsYmFjayBpdGVtLCBraWxsIHRoZSBldmVudC5cbiAgICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdjbGlja3Jlc3VsdCcsIHBheWxvYWQpXG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGNvbnNvbGUud2FybigndW5oYW5kbGVkIGV2ZW50IG9mIHR5cGU6JywgdHlwZSlcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG59Il19