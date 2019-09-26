/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataSource } from '@n7-frontend/core';
export class AwHomeItemPreviewWrapperDS extends DataSource {
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    transform(data) {
        /** @type {?} */
        let result = [];
        data.forEach((/**
         * @param {?} item
         * @return {?}
         */
        item => {
            /** @type {?} */
            let infoGroup = [
                { label: 'Autore', value: '' },
                { label: '', value: '' }
            ];
            item.item.info.forEach((/**
             * @param {?} i
             * @return {?}
             */
            i => {
                if (i.key === 'author')
                    infoGroup[0].value = i.value;
                else if (i.key === 'short_description')
                    infoGroup[1].value = i.value;
            }));
            /** @type {?} */
            let toeGroup = item.relatedTOEData.map((/**
             * @param {?} rToe
             * @return {?}
             */
            rToe => {
                return {
                    label: rToe.type.label,
                    value: rToe.count,
                    icon: rToe.type.icon
                };
            }));
            /** @type {?} */
            let metadata = [{ items: infoGroup }, { items: toeGroup }];
            result.push({
                image: item.thumbnail,
                title: item.item.label,
                metadata,
                payload: item.item.id
            });
        }));
        return result;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1pdGVtLXByZXZpZXctd3JhcHBlci5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvaG9tZS1pdGVtLXByZXZpZXctd3JhcHBlci5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRS9DLE1BQU0sT0FBTywwQkFBMkIsU0FBUSxVQUFVOzs7Ozs7SUFFOUMsU0FBUyxDQUFDLElBQUk7O1lBQ2xCLE1BQU0sR0FBRyxFQUFFO1FBQ2YsSUFBSSxDQUFDLE9BQU87Ozs7UUFBQyxJQUFJLENBQUMsRUFBRTs7Z0JBQ2QsU0FBUyxHQUFHO2dCQUNkLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFO2dCQUM5QixFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRTthQUFFO1lBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU87Ozs7WUFBRSxDQUFDLENBQUMsRUFBRTtnQkFDMUIsSUFBRyxDQUFDLENBQUMsR0FBRyxLQUFHLFFBQVE7b0JBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO3FCQUMzQyxJQUFHLENBQUMsQ0FBQyxHQUFHLEtBQUcsbUJBQW1CO29CQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUNsRSxDQUFDLEVBQUMsQ0FBQzs7Z0JBQ0MsUUFBUSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRzs7OztZQUFFLElBQUksQ0FBQyxFQUFFO2dCQUMzQyxPQUFPO29CQUNMLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUs7b0JBQ3RCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztvQkFDakIsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtpQkFDckIsQ0FBQztZQUNOLENBQUMsRUFBQzs7Z0JBQ0UsUUFBUSxHQUFHLENBQUMsRUFBQyxLQUFLLEVBQUMsU0FBUyxFQUFDLEVBQUMsRUFBQyxLQUFLLEVBQUMsUUFBUSxFQUFDLENBQUM7WUFDbkQsTUFBTSxDQUFDLElBQUksQ0FBQztnQkFDVixLQUFLLEVBQUUsSUFBSSxDQUFDLFNBQVM7Z0JBQ3JCLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUs7Z0JBQ3RCLFFBQVE7Z0JBQ1IsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTthQUN0QixDQUFDLENBQUM7UUFDTCxDQUFDLEVBQUMsQ0FBQztRQUNILE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBBd0hvbWVJdGVtUHJldmlld1dyYXBwZXJEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSkge1xuICAgIGxldCByZXN1bHQgPSBbXTtcbiAgICBkYXRhLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBsZXQgaW5mb0dyb3VwID0gW1xuICAgICAgICB7IGxhYmVsOiAnQXV0b3JlJywgdmFsdWU6ICcnIH0sXG4gICAgICAgIHsgbGFiZWw6ICcnLCB2YWx1ZTogJycgfSBdO1xuICAgICAgaXRlbS5pdGVtLmluZm8uZm9yRWFjaCggaSA9PiB7XG4gICAgICAgIGlmKGkua2V5PT09J2F1dGhvcicpIGluZm9Hcm91cFswXS52YWx1ZT1pLnZhbHVlO1xuICAgICAgICBlbHNlIGlmKGkua2V5PT09J3Nob3J0X2Rlc2NyaXB0aW9uJykgaW5mb0dyb3VwWzFdLnZhbHVlPWkudmFsdWU7XG4gICAgICB9KTtcbiAgICAgIGxldCB0b2VHcm91cCA9IGl0ZW0ucmVsYXRlZFRPRURhdGEubWFwKCByVG9lID0+IHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbGFiZWw6IHJUb2UudHlwZS5sYWJlbCxcbiAgICAgICAgICAgIHZhbHVlOiByVG9lLmNvdW50LFxuICAgICAgICAgICAgaWNvbjogclRvZS50eXBlLmljb25cbiAgICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgICBsZXQgbWV0YWRhdGEgPSBbe2l0ZW1zOmluZm9Hcm91cH0se2l0ZW1zOnRvZUdyb3VwfV07XG4gICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgIGltYWdlOiBpdGVtLnRodW1ibmFpbCxcbiAgICAgICAgdGl0bGU6IGl0ZW0uaXRlbS5sYWJlbCxcbiAgICAgICAgbWV0YWRhdGEsXG4gICAgICAgIHBheWxvYWQ6IGl0ZW0uaXRlbS5pZFxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufSJdfQ==