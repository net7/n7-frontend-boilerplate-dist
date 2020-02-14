/**
 * @fileoverview added by tsickle
 * Generated from: lib/common/data-sources/facets.ds.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataSource } from '@n7-frontend/core';
export class FacetsDS extends DataSource {
    /**
     * @protected
     * @param {?} __0
     * @return {?}
     */
    transform({ fields }) {
        const { searchModel } = this.options;
        this.searchModel = searchModel;
        return fields;
    }
}
if (false) {
    /** @type {?} */
    FacetsDS.prototype.searchModel;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXRzLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9kYXRhLXNvdXJjZXMvZmFjZXRzLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRS9DLE1BQU0sT0FBTyxRQUFTLFNBQVEsVUFBVTs7Ozs7O0lBRzVCLFNBQVMsQ0FBQyxFQUFFLE1BQU0sRUFBRTtjQUV0QixFQUFFLFdBQVcsRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPO1FBQ3BDLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBRS9CLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7Q0FDRjs7O0lBVEMsK0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBGYWNldHNEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xyXG4gIHB1YmxpYyBzZWFyY2hNb2RlbDogYW55O1xyXG5cclxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKHsgZmllbGRzIH0pIHtcclxuXHJcbiAgICBjb25zdCB7IHNlYXJjaE1vZGVsIH0gPSB0aGlzLm9wdGlvbnM7XHJcbiAgICB0aGlzLnNlYXJjaE1vZGVsID0gc2VhcmNoTW9kZWw7XHJcblxyXG4gICAgcmV0dXJuIGZpZWxkcztcclxuICB9XHJcbn1cclxuIl19