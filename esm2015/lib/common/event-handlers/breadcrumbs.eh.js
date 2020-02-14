/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventHandler } from '@n7-frontend/core';
export class BreadcrumbsEH extends EventHandler {
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
                case 'breadcrumbs.click':
                    // navigate control
                    if (payload.source === 'navigate') {
                        this.emitGlobal('navigate', payload);
                    }
                    // global signal
                    this.emitGlobal(type, payload);
                    break;
                default:
                    break;
            }
        }));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYnMuZWguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL2V2ZW50LWhhbmRsZXJzL2JyZWFkY3J1bWJzLmVoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFakQsTUFBTSxPQUFPLGFBQWMsU0FBUSxZQUFZOzs7O0lBQ3RDLE1BQU07UUFDWCxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7WUFDaEQsUUFBTyxJQUFJLEVBQUM7Z0JBQ1YsS0FBSyxtQkFBbUI7b0JBQ3RCLG1CQUFtQjtvQkFDbkIsSUFBRyxPQUFPLENBQUMsTUFBTSxLQUFLLFVBQVUsRUFBQzt3QkFDL0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUM7cUJBQ3RDO29CQUVELGdCQUFnQjtvQkFDaEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7b0JBQy9CLE1BQU07Z0JBRVI7b0JBQ0UsTUFBTTthQUNUO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBCcmVhZGNydW1ic0VIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcbiAgcHVibGljIGxpc3RlbigpIHtcbiAgICB0aGlzLmlubmVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBzd2l0Y2godHlwZSl7XG4gICAgICAgIGNhc2UgJ2JyZWFkY3J1bWJzLmNsaWNrJzpcbiAgICAgICAgICAvLyBuYXZpZ2F0ZSBjb250cm9sXG4gICAgICAgICAgaWYocGF5bG9hZC5zb3VyY2UgPT09ICduYXZpZ2F0ZScpe1xuICAgICAgICAgICAgdGhpcy5lbWl0R2xvYmFsKCduYXZpZ2F0ZScsIHBheWxvYWQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIGdsb2JhbCBzaWduYWxcbiAgICAgICAgICB0aGlzLmVtaXRHbG9iYWwodHlwZSwgcGF5bG9hZCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufSJdfQ==