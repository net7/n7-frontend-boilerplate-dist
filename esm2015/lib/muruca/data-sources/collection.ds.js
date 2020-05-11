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
        const { header } = data;
        return Object.assign({}, data, { header: {
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
                    buttons: [
                        {
                            text: header.button.text,
                            payload: header.button.link,
                            classes: 'n7-btn-cta'
                        }
                    ]
                }
            } });
    }
}
if (false) {
    /** @type {?} */
    MrCollectionDS.prototype.id;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGVjdGlvbi5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvZGF0YS1zb3VyY2VzL2NvbGxlY3Rpb24uZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUUvQyxNQUFNLE9BQU8sY0FBZSxTQUFRLFVBQVU7Ozs7OztJQUdsQyxTQUFTLENBQUMsSUFBUztjQUNyQixFQUFFLE1BQU0sRUFBRSxHQUFHLElBQUk7UUFFdkIseUJBQ0ssSUFBSSxJQUNQLE1BQU0sRUFBRTtnQkFDTixLQUFLLEVBQUU7b0JBQ0wsSUFBSSxFQUFFO3dCQUNKLElBQUksRUFBRSxNQUFNLENBQUMsS0FBSzt3QkFDbEIsT0FBTyxFQUFFLE1BQU07cUJBQ2hCO29CQUNELFNBQVMsRUFBRTt3QkFDVCxJQUFJLEVBQUUsTUFBTSxDQUFDLFFBQVE7d0JBQ3JCLE9BQU8sRUFBRSxRQUFRO3FCQUNsQjtpQkFDRjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsT0FBTyxFQUFFO3dCQUNQOzRCQUNFLElBQUksRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUk7NEJBQ3hCLE9BQU8sRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUk7NEJBQzNCLE9BQU8sRUFBRSxZQUFZO3lCQUN0QjtxQkFDRjtpQkFDRjthQUNGLElBQ0Q7SUFDSixDQUFDO0NBQ0Y7OztJQTlCQyw0QkFBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBNckNvbGxlY3Rpb25EUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuICBpZDogc3RyaW5nO1xuXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YTogYW55KTogYW55IHtcbiAgICBjb25zdCB7IGhlYWRlciB9ID0gZGF0YTtcblxuICAgIHJldHVybiB7XG4gICAgICAuLi5kYXRhLFxuICAgICAgaGVhZGVyOiB7XG4gICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgbWFpbjoge1xuICAgICAgICAgICAgdGV4dDogaGVhZGVyLnRpdGxlLFxuICAgICAgICAgICAgY2xhc3NlczogJ2JvbGQnXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzZWNvbmRhcnk6IHtcbiAgICAgICAgICAgIHRleHQ6IGhlYWRlci5zdWJ0aXRsZSxcbiAgICAgICAgICAgIGNsYXNzZXM6ICdpdGFsaWMnXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBhY3Rpb25zOiB7XG4gICAgICAgICAgYnV0dG9uczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiBoZWFkZXIuYnV0dG9uLnRleHQsXG4gICAgICAgICAgICAgIHBheWxvYWQ6IGhlYWRlci5idXR0b24ubGluayxcbiAgICAgICAgICAgICAgY2xhc3NlczogJ243LWJ0bi1jdGEnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxufVxuIl19