/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventHandler } from '@n7-frontend/core';
export class DvDatepickerWrapperEH extends EventHandler {
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
                case 'dv-datepicker-wrapper.click':
                    if (payload === "ByDate") {
                        this.dataSource.openDatepicker();
                    }
                    else {
                        this.dataSource.closeDatepicker();
                    }
                    break;
                case 'dv-datepicker-wrapper.toggle':
                    this.dataSource.toggleDropDown();
                    break;
                case 'dv-datepicker-wrapper.change':
                    this.dataSource.setLabel(payload);
                    break;
            }
        }));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci13cmFwcGVyLmVoLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2RhdGEtdml6L2V2ZW50LWhhbmRsZXJzL2RhdGVwaWNrZXItd3JhcHBlci5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWpELE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxZQUFZOzs7O0lBQzVDLE1BQU07UUFDVCxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7WUFDOUMsUUFBTyxJQUFJLEVBQUM7Z0JBQ1YsS0FBSyw2QkFBNkI7b0JBQ2hDLElBQUcsT0FBTyxLQUFLLFFBQVEsRUFBRTt3QkFDdkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLEVBQUUsQ0FBQztxQkFDbEM7eUJBQUs7d0JBQ0osSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLEVBQUUsQ0FBQztxQkFDbkM7b0JBQ0QsTUFBTTtnQkFDUixLQUFLLDhCQUE4QjtvQkFDakMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLEVBQUUsQ0FBQztvQkFDakMsTUFBTTtnQkFDUixLQUFLLDhCQUE4QjtvQkFDakMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ2xDLE1BQU07YUFDVDtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ1QsQ0FBQztDQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgRHZEYXRlcGlja2VyV3JhcHBlckVIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcbiAgICBwdWJsaWMgbGlzdGVuKCkge1xuICAgICAgICB0aGlzLmlubmVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICAgICAgICBzd2l0Y2godHlwZSl7XG4gICAgICAgICAgICAgIGNhc2UgJ2R2LWRhdGVwaWNrZXItd3JhcHBlci5jbGljayc6XG4gICAgICAgICAgICAgICAgaWYocGF5bG9hZCA9PT0gXCJCeURhdGVcIikge1xuICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLm9wZW5EYXRlcGlja2VyKCk7XG4gICAgICAgICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLmNsb3NlRGF0ZXBpY2tlcigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSAnZHYtZGF0ZXBpY2tlci13cmFwcGVyLnRvZ2dsZSc6XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnRvZ2dsZURyb3BEb3duKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgJ2R2LWRhdGVwaWNrZXItd3JhcHBlci5jaGFuZ2UnOlxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5zZXRMYWJlbChwYXlsb2FkKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICB9XG59Il19