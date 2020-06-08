/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataSource } from '@n7-frontend/core';
export class MrCollectionDS extends DataSource {
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    transform(data) {
        if (data === undefined) {
            return null;
        }
        const { header, items } = data;
        const { classes } = this.options;
        if (header.button) {
            header.button = [{
                    text: header.button.text,
                    payload: header.button.anchor
                }];
        }
        return {
            header: {
                title: {
                    main: {
                        text: header.title,
                        classes: 'bold'
                    },
                    secondary: {
                        text: header.subtitle,
                        classes: 'italic'
                    }
                },
                actions: {
                    buttons: header.button
                }
            },
            items: items.map((/**
             * @param {?} item
             * @return {?}
             */
            (item) => (Object.assign({}, item, { classes: classes || '' }))))
        };
    }
}
if (false) {
    /** @type {?} */
    MrCollectionDS.prototype.id;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGVjdGlvbi5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvZGF0YS1zb3VyY2VzL2NvbGxlY3Rpb24uZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUUvQyxNQUFNLE9BQU8sY0FBZSxTQUFRLFVBQVU7Ozs7OztJQUdsQyxTQUFTLENBQUMsSUFBUztRQUMzQixJQUFJLElBQUksS0FBSyxTQUFTLEVBQUU7WUFBRSxPQUFPLElBQUksQ0FBQztTQUFFO2NBRWxDLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLElBQUk7Y0FDeEIsRUFBRSxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTztRQUVoQyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEVBQUU7WUFDakIsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDO29CQUNmLElBQUksRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUk7b0JBQ3hCLE9BQU8sRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU07aUJBQzlCLENBQUMsQ0FBQztTQUNKO1FBRUQsT0FBTztZQUNMLE1BQU0sRUFBRTtnQkFDTixLQUFLLEVBQUU7b0JBQ0wsSUFBSSxFQUFFO3dCQUNKLElBQUksRUFBRSxNQUFNLENBQUMsS0FBSzt3QkFDbEIsT0FBTyxFQUFFLE1BQU07cUJBQ2hCO29CQUNELFNBQVMsRUFBRTt3QkFDVCxJQUFJLEVBQUUsTUFBTSxDQUFDLFFBQVE7d0JBQ3JCLE9BQU8sRUFBRSxRQUFRO3FCQUNsQjtpQkFDRjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsT0FBTyxFQUFFLE1BQU0sQ0FBQyxNQUFNO2lCQUN2QjthQUNGO1lBQ0QsS0FBSyxFQUFFLEtBQUssQ0FBQyxHQUFHOzs7O1lBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLG1CQUFNLElBQUksSUFBRSxPQUFPLEVBQUUsT0FBTyxJQUFJLEVBQUUsSUFBRyxFQUFDO1NBQ2xFLENBQUM7SUFDSixDQUFDO0NBQ0Y7OztJQWxDQyw0QkFBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBNckNvbGxlY3Rpb25EUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuICBpZDogc3RyaW5nO1xuXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YTogYW55KTogYW55IHtcbiAgICBpZiAoZGF0YSA9PT0gdW5kZWZpbmVkKSB7IHJldHVybiBudWxsOyB9XG5cbiAgICBjb25zdCB7IGhlYWRlciwgaXRlbXMgfSA9IGRhdGE7XG4gICAgY29uc3QgeyBjbGFzc2VzIH0gPSB0aGlzLm9wdGlvbnM7XG5cbiAgICBpZiAoaGVhZGVyLmJ1dHRvbikge1xuICAgICAgaGVhZGVyLmJ1dHRvbiA9IFt7XG4gICAgICAgIHRleHQ6IGhlYWRlci5idXR0b24udGV4dCxcbiAgICAgICAgcGF5bG9hZDogaGVhZGVyLmJ1dHRvbi5hbmNob3JcbiAgICAgIH1dO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBoZWFkZXI6IHtcbiAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICBtYWluOiB7XG4gICAgICAgICAgICB0ZXh0OiBoZWFkZXIudGl0bGUsXG4gICAgICAgICAgICBjbGFzc2VzOiAnYm9sZCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNlY29uZGFyeToge1xuICAgICAgICAgICAgdGV4dDogaGVhZGVyLnN1YnRpdGxlLFxuICAgICAgICAgICAgY2xhc3NlczogJ2l0YWxpYydcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGFjdGlvbnM6IHtcbiAgICAgICAgICBidXR0b25zOiBoZWFkZXIuYnV0dG9uXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBpdGVtczogaXRlbXMubWFwKChpdGVtKSA9PiAoeyAuLi5pdGVtLCBjbGFzc2VzOiBjbGFzc2VzIHx8ICcnIH0pKVxuICAgIH07XG4gIH1cbn1cbiJdfQ==