/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventHandler } from '@n7-frontend/core';
export class AwHeroEH extends EventHandler {
    /**
     * @return {?}
     */
    listen() {
        this.innerEvents$.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ({ type, payload }) => {
            console.log(type, payload);
            switch (type) {
                case 'aw-hero.click':
                    if (payload === 'cerca' && this.dataSource.currentInputValue) {
                        this.emitOuter('enter', this.dataSource.currentInputValue);
                    }
                    break;
                case 'aw-hero.change':
                    this.dataSource.currentInputValue = payload;
                    this.emitOuter('change', payload);
                    break;
                case 'aw-hero.enter':
                    this.emitOuter('enter', payload);
                    break;
                default:
                    console.log('(hero) unhandled event of type', type);
                    break;
            }
        }));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVyby5laC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9ldmVudC1oYW5kbGVycy9oZXJvLmVoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFakQsTUFBTSxPQUFPLFFBQVMsU0FBUSxZQUFZOzs7O0lBRWpDLE1BQU07UUFDWCxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7WUFDaEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDM0IsUUFBUSxJQUFJLEVBQUU7Z0JBQ1osS0FBSyxlQUFlO29CQUNsQixJQUFJLE9BQU8sS0FBSyxPQUFPLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsRUFBRTt3QkFDNUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO3FCQUM1RDtvQkFDRCxNQUFNO2dCQUNSLEtBQUssZ0JBQWdCO29CQUNuQixJQUFJLENBQUMsVUFBVSxDQUFDLGlCQUFpQixHQUFHLE9BQU8sQ0FBQztvQkFDNUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7b0JBQ2xDLE1BQU07Z0JBQ1IsS0FBSyxlQUFlO29CQUNsQixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztvQkFDakMsTUFBTTtnQkFFUjtvQkFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLGdDQUFnQyxFQUFFLElBQUksQ0FBQyxDQUFBO29CQUNuRCxNQUFNO2FBQ1Q7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Q0FFRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIEF3SGVyb0VIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcblxuICBwdWJsaWMgbGlzdGVuKCkge1xuICAgIHRoaXMuaW5uZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKHR5cGUsIHBheWxvYWQpO1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ2F3LWhlcm8uY2xpY2snOlxuICAgICAgICAgIGlmIChwYXlsb2FkID09PSAnY2VyY2EnICYmIHRoaXMuZGF0YVNvdXJjZS5jdXJyZW50SW5wdXRWYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2VudGVyJywgdGhpcy5kYXRhU291cmNlLmN1cnJlbnRJbnB1dFZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LWhlcm8uY2hhbmdlJzpcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuY3VycmVudElucHV0VmFsdWUgPSBwYXlsb2FkO1xuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdjaGFuZ2UnLCBwYXlsb2FkKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctaGVyby5lbnRlcic6XG4gICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2VudGVyJywgcGF5bG9hZCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBjb25zb2xlLmxvZygnKGhlcm8pIHVuaGFuZGxlZCBldmVudCBvZiB0eXBlJywgdHlwZSlcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG59Il19