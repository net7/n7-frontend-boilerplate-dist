/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DataSource } from '@n7-frontend/core';
var AwHomeItemPreviewWrapperDS = /** @class */ (function (_super) {
    tslib_1.__extends(AwHomeItemPreviewWrapperDS, _super);
    function AwHomeItemPreviewWrapperDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    AwHomeItemPreviewWrapperDS.prototype.transform = /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    function (data) {
        /** @type {?} */
        var result = [];
        data.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            /** @type {?} */
            var infoGroup = [
                { label: 'Autore', value: '' },
                { label: '', value: '' }
            ];
            item.item.info.forEach((/**
             * @param {?} i
             * @return {?}
             */
            function (i) {
                if (i.key === 'author')
                    infoGroup[0].value = i.value;
                else if (i.key === 'short_description')
                    infoGroup[1].value = i.value;
            }));
            /** @type {?} */
            var toeGroup = item.relatedTOEData.map((/**
             * @param {?} rToe
             * @return {?}
             */
            function (rToe) {
                return {
                    label: rToe.type.label,
                    value: rToe.count,
                    icon: rToe.type.icon
                };
            }));
            /** @type {?} */
            var metadata = [{ items: infoGroup }, { items: toeGroup }];
            result.push({
                image: item.thumbnail,
                title: item.item.label,
                metadata: metadata,
                payload: item.item.id
            });
        }));
        return result;
    };
    return AwHomeItemPreviewWrapperDS;
}(DataSource));
export { AwHomeItemPreviewWrapperDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1pdGVtLXByZXZpZXctd3JhcHBlci5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvaG9tZS1pdGVtLXByZXZpZXctd3JhcHBlci5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUUvQztJQUFnRCxzREFBVTtJQUExRDs7SUE2QkEsQ0FBQzs7Ozs7O0lBM0JXLDhDQUFTOzs7OztJQUFuQixVQUFvQixJQUFJOztZQUNsQixNQUFNLEdBQUcsRUFBRTtRQUNmLElBQUksQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQSxJQUFJOztnQkFDWCxTQUFTLEdBQUc7Z0JBQ2QsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUU7Z0JBQzlCLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFO2FBQUU7WUFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTzs7OztZQUFFLFVBQUEsQ0FBQztnQkFDdkIsSUFBRyxDQUFDLENBQUMsR0FBRyxLQUFHLFFBQVE7b0JBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO3FCQUMzQyxJQUFHLENBQUMsQ0FBQyxHQUFHLEtBQUcsbUJBQW1CO29CQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUNsRSxDQUFDLEVBQUMsQ0FBQzs7Z0JBQ0MsUUFBUSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRzs7OztZQUFFLFVBQUEsSUFBSTtnQkFDeEMsT0FBTztvQkFDTCxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLO29CQUN0QixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7b0JBQ2pCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7aUJBQ3JCLENBQUM7WUFDTixDQUFDLEVBQUM7O2dCQUNFLFFBQVEsR0FBRyxDQUFDLEVBQUMsS0FBSyxFQUFDLFNBQVMsRUFBQyxFQUFDLEVBQUMsS0FBSyxFQUFDLFFBQVEsRUFBQyxDQUFDO1lBQ25ELE1BQU0sQ0FBQyxJQUFJLENBQUM7Z0JBQ1YsS0FBSyxFQUFFLElBQUksQ0FBQyxTQUFTO2dCQUNyQixLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLO2dCQUN0QixRQUFRLFVBQUE7Z0JBQ1IsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTthQUN0QixDQUFDLENBQUM7UUFDTCxDQUFDLEVBQUMsQ0FBQztRQUNILE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFDSCxpQ0FBQztBQUFELENBQUMsQUE3QkQsQ0FBZ0QsVUFBVSxHQTZCekQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgQXdIb21lSXRlbVByZXZpZXdXcmFwcGVyRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcblxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpIHtcbiAgICBsZXQgcmVzdWx0ID0gW107XG4gICAgZGF0YS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgbGV0IGluZm9Hcm91cCA9IFtcbiAgICAgICAgeyBsYWJlbDogJ0F1dG9yZScsIHZhbHVlOiAnJyB9LFxuICAgICAgICB7IGxhYmVsOiAnJywgdmFsdWU6ICcnIH0gXTtcbiAgICAgIGl0ZW0uaXRlbS5pbmZvLmZvckVhY2goIGkgPT4ge1xuICAgICAgICBpZihpLmtleT09PSdhdXRob3InKSBpbmZvR3JvdXBbMF0udmFsdWU9aS52YWx1ZTtcbiAgICAgICAgZWxzZSBpZihpLmtleT09PSdzaG9ydF9kZXNjcmlwdGlvbicpIGluZm9Hcm91cFsxXS52YWx1ZT1pLnZhbHVlO1xuICAgICAgfSk7XG4gICAgICBsZXQgdG9lR3JvdXAgPSBpdGVtLnJlbGF0ZWRUT0VEYXRhLm1hcCggclRvZSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGxhYmVsOiByVG9lLnR5cGUubGFiZWwsXG4gICAgICAgICAgICB2YWx1ZTogclRvZS5jb3VudCxcbiAgICAgICAgICAgIGljb246IHJUb2UudHlwZS5pY29uXG4gICAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgICAgbGV0IG1ldGFkYXRhID0gW3tpdGVtczppbmZvR3JvdXB9LHtpdGVtczp0b2VHcm91cH1dO1xuICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICBpbWFnZTogaXRlbS50aHVtYm5haWwsXG4gICAgICAgIHRpdGxlOiBpdGVtLml0ZW0ubGFiZWwsXG4gICAgICAgIG1ldGFkYXRhLFxuICAgICAgICBwYXlsb2FkOiBpdGVtLml0ZW0uaWRcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn0iXX0=