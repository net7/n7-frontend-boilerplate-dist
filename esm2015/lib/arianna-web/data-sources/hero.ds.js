/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataSource } from '@n7-frontend/core';
export class AwHeroDS extends DataSource {
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    transform(data) {
        console.log({ data });
        /** @type {?} */
        const HERO_DATA = {
            title: "Arte, architettura e fotografia nel XXI secolo",
            text: "Consulta il patrimonio completo del polo nazionale per l\'arte e l\'architettura contemporanee.",
            button: {
                text: "CERCA",
                payload: "cerca"
            },
            backgroundImage: "https://i.imgur.com/FgsxSYR.png",
            input: {
                placeholder: "Cerca in MAXXI",
                payload: "cerca-in-maxxi"
            }
        };
        return HERO_DATA;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVyby5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvaGVyby5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRy9DLE1BQU0sT0FBTyxRQUFTLFNBQVEsVUFBVTs7Ozs7O0lBRTVCLFNBQVMsQ0FBQyxJQUFJO1FBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDOztjQUNkLFNBQVMsR0FBRztZQUNoQixLQUFLLEVBQUUsZ0RBQWdEO1lBQ3ZELElBQUksRUFBRSxpR0FBaUc7WUFDdkcsTUFBTSxFQUFFO2dCQUNOLElBQUksRUFBRSxPQUFPO2dCQUNiLE9BQU8sRUFBRSxPQUFPO2FBQ2pCO1lBQ0QsZUFBZSxFQUFFLGlDQUFpQztZQUNsRCxLQUFLLEVBQUU7Z0JBQ0wsV0FBVyxFQUFFLGdCQUFnQjtnQkFDN0IsT0FBTyxFQUFFLGdCQUFnQjthQUMxQjtTQUNGO1FBQ0QsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IEhFUk9fTU9DSyB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcblxuZXhwb3J0IGNsYXNzIEF3SGVyb0RTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKXtcbiAgICBjb25zb2xlLmxvZyh7ZGF0YX0pO1xuICAgIGNvbnN0IEhFUk9fREFUQSA9IHtcbiAgICAgIHRpdGxlOiBcIkFydGUsIGFyY2hpdGV0dHVyYSBlIGZvdG9ncmFmaWEgbmVsIFhYSSBzZWNvbG9cIixcbiAgICAgIHRleHQ6IFwiQ29uc3VsdGEgaWwgcGF0cmltb25pbyBjb21wbGV0byBkZWwgcG9sbyBuYXppb25hbGUgcGVyIGxcXCdhcnRlIGUgbFxcJ2FyY2hpdGV0dHVyYSBjb250ZW1wb3JhbmVlLlwiLFxuICAgICAgYnV0dG9uOiB7XG4gICAgICAgIHRleHQ6IFwiQ0VSQ0FcIixcbiAgICAgICAgcGF5bG9hZDogXCJjZXJjYVwiXG4gICAgICB9LFxuICAgICAgYmFja2dyb3VuZEltYWdlOiBcImh0dHBzOi8vaS5pbWd1ci5jb20vRmdzeFNZUi5wbmdcIixcbiAgICAgIGlucHV0OiB7XG4gICAgICAgIHBsYWNlaG9sZGVyOiBcIkNlcmNhIGluIE1BWFhJXCIsXG4gICAgICAgIHBheWxvYWQ6IFwiY2VyY2EtaW4tbWF4eGlcIlxuICAgICAgfVxuICAgIH07ICBcbiAgICByZXR1cm4gSEVST19EQVRBO1xuICB9XG59Il19