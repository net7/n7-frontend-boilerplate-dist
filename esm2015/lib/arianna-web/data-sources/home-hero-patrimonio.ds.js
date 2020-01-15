/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/data-sources/home-hero-patrimonio.ds.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataSource } from '@n7-frontend/core';
export class AwHomeHeroPatrimonioDS extends DataSource {
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    transform(data) {
        const { title, backgroundImage, image, text, button } = data;
        return {
            title,
            backgroundImage,
            image,
            text,
            button: {
                text: button.text,
                payload: "naviga-patrimonio"
            }
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1oZXJvLXBhdHJpbW9uaW8uZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL2hvbWUtaGVyby1wYXRyaW1vbmlvLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRS9DLE1BQU0sT0FBTyxzQkFBdUIsU0FBUSxVQUFVOzs7Ozs7SUFFMUMsU0FBUyxDQUFDLElBQUk7Y0FDaEIsRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEdBQUcsSUFBSTtRQUU1RCxPQUFPO1lBQ0wsS0FBSztZQUNMLGVBQWU7WUFDZixLQUFLO1lBQ0wsSUFBSTtZQUNKLE1BQU0sRUFBRTtnQkFDTixJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUk7Z0JBQ2pCLE9BQU8sRUFBRSxtQkFBbUI7YUFDN0I7U0FDRixDQUFDO0lBQ0osQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIEF3SG9tZUhlcm9QYXRyaW1vbmlvRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcblxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpIHtcbiAgICBjb25zdCB7IHRpdGxlLCBiYWNrZ3JvdW5kSW1hZ2UsIGltYWdlLCB0ZXh0LCBidXR0b24gfSA9IGRhdGE7XG5cbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGUsXG4gICAgICBiYWNrZ3JvdW5kSW1hZ2UsXG4gICAgICBpbWFnZSxcbiAgICAgIHRleHQsXG4gICAgICBidXR0b246IHtcbiAgICAgICAgdGV4dDogYnV0dG9uLnRleHQsXG4gICAgICAgIHBheWxvYWQ6IFwibmF2aWdhLXBhdHJpbW9uaW9cIlxuICAgICAgfVxuICAgIH07XG4gIH1cbn0iXX0=