/**
 * @fileoverview added by tsickle
 * Generated from: lib/common/layouts/main-layout/main-layout.eh.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventHandler } from '@n7-frontend/core';
import { Subject } from 'rxjs';
import { takeUntil, filter } from 'rxjs/operators';
import { SearchService } from '../../services';
export class MainLayoutEH extends EventHandler {
    constructor() {
        super(...arguments);
        this.destroyed$ = new Subject();
    }
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
                case 'main-layout.init':
                    this.dataSource.onInit(payload);
                    this.route = payload.route;
                    this.router = payload.router;
                    this._listenRouterChanges();
                    break;
                case 'main-layout.destroy':
                    this.destroyed$.next();
                    break;
                default:
                    break;
            }
        }));
        // listen to global events
        EventHandler.globalEvents$.pipe(takeUntil(this.destroyed$)).subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ({ type, payload }) => {
            switch (type) {
                case 'global.navigate':
                    this.dataSource.onNavigate(payload);
                    break;
                default:
                    break;
            }
        }));
    }
    /**
     * @private
     * @return {?}
     */
    _listenRouterChanges() {
        this.route.queryParams.pipe(filter((/**
         * @param {?} params
         * @return {?}
         */
        params => {
            if (Object.keys(params).length)
                return true;
            return false;
        }))).subscribe((/**
         * @param {?} params
         * @return {?}
         */
        params => {
            this.emitGlobal('queryparams', params);
            // to use in searchs
            SearchService.queryParams = params;
        }));
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    MainLayoutEH.prototype.destroyed$;
    /**
     * @type {?}
     * @private
     */
    MainLayoutEH.prototype.route;
    /**
     * @type {?}
     * @private
     */
    MainLayoutEH.prototype.router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1sYXlvdXQuZWguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL2xheW91dHMvbWFpbi1sYXlvdXQvbWFpbi1sYXlvdXQuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFTLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzFELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUvQyxNQUFNLE9BQU8sWUFBYSxTQUFRLFlBQVk7SUFBOUM7O1FBQ1UsZUFBVSxHQUFpQixJQUFJLE9BQU8sRUFBRSxDQUFDO0lBdURuRCxDQUFDOzs7O0lBbkRRLE1BQU07UUFDWCxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7WUFDaEQsUUFBTyxJQUFJLEVBQUU7Z0JBQ1gsS0FBSyxrQkFBa0I7b0JBQ3JCLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUVoQyxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7b0JBQzNCLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQztvQkFFN0IsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7b0JBQzVCLE1BQU07Z0JBRVIsS0FBSyxxQkFBcUI7b0JBQ3RCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQ3ZCLE1BQU07Z0JBRVY7b0JBQ0ksTUFBTTthQUNYO1FBQ0gsQ0FBQyxFQUFDLENBQUM7UUFFSCwwQkFBMEI7UUFDMUIsWUFBWSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQzdCLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQzNCLENBQUMsU0FBUzs7OztRQUFDLENBQUMsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFDLEVBQUUsRUFBRTtZQUM5QixRQUFPLElBQUksRUFBQztnQkFDVixLQUFLLGlCQUFpQjtvQkFDcEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ3BDLE1BQU07Z0JBRVI7b0JBQ0UsTUFBTTthQUNUO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVPLG9CQUFvQjtRQUMxQixJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQ3pCLE1BQU07Ozs7UUFBQyxNQUFNLENBQUMsRUFBRTtZQUNkLElBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNO2dCQUFFLE9BQU8sSUFBSSxDQUFDO1lBQzNDLE9BQU8sS0FBSyxDQUFDO1FBQ2YsQ0FBQyxFQUFDLENBRUgsQ0FBQyxTQUFTOzs7O1FBQUMsTUFBTSxDQUFDLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFFdkMsb0JBQW9CO1lBQ3BCLGFBQWEsQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDO1FBQ3JDLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQztDQUVGOzs7Ozs7SUF2REMsa0NBQWlEOzs7OztJQUNqRCw2QkFBbUI7Ozs7O0lBQ25CLDhCQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCwgZmlyc3QsIGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFNlYXJjaFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcyc7XG5cbmV4cG9ydCBjbGFzcyBNYWluTGF5b3V0RUggZXh0ZW5kcyBFdmVudEhhbmRsZXIge1xuICBwcml2YXRlIGRlc3Ryb3llZCQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0KCk7XG4gIHByaXZhdGUgcm91dGU6IGFueTtcbiAgcHJpdmF0ZSByb3V0ZXI6IGFueTtcblxuICBwdWJsaWMgbGlzdGVuKCkge1xuICAgIHRoaXMuaW5uZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICAgIHN3aXRjaCh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ21haW4tbGF5b3V0LmluaXQnOlxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vbkluaXQocGF5bG9hZCk7XG5cbiAgICAgICAgICB0aGlzLnJvdXRlID0gcGF5bG9hZC5yb3V0ZTtcbiAgICAgICAgICB0aGlzLnJvdXRlciA9IHBheWxvYWQucm91dGVyO1xuXG4gICAgICAgICAgdGhpcy5fbGlzdGVuUm91dGVyQ2hhbmdlcygpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ21haW4tbGF5b3V0LmRlc3Ryb3knOlxuICAgICAgICAgICAgdGhpcy5kZXN0cm95ZWQkLm5leHQoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIGxpc3RlbiB0byBnbG9iYWwgZXZlbnRzXG4gICAgRXZlbnRIYW5kbGVyLmdsb2JhbEV2ZW50cyQucGlwZShcbiAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3llZCQpXG4gICAgKS5zdWJzY3JpYmUoKHt0eXBlLCBwYXlsb2FkfSkgPT4ge1xuICAgICAgc3dpdGNoKHR5cGUpe1xuICAgICAgICBjYXNlICdnbG9iYWwubmF2aWdhdGUnOlxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vbk5hdmlnYXRlKHBheWxvYWQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIFxuICAgICAgICBkZWZhdWx0OiBcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2xpc3RlblJvdXRlckNoYW5nZXMoKXtcbiAgICB0aGlzLnJvdXRlLnF1ZXJ5UGFyYW1zLnBpcGUoXG4gICAgICBmaWx0ZXIocGFyYW1zID0+IHtcbiAgICAgICAgaWYoT2JqZWN0LmtleXMocGFyYW1zKS5sZW5ndGgpIHJldHVybiB0cnVlO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9KSxcbiAgICAgIC8vIGZpcnN0KCksXG4gICAgKS5zdWJzY3JpYmUocGFyYW1zID0+IHtcbiAgICAgIHRoaXMuZW1pdEdsb2JhbCgncXVlcnlwYXJhbXMnLCBwYXJhbXMpO1xuXG4gICAgICAvLyB0byB1c2UgaW4gc2VhcmNoc1xuICAgICAgU2VhcmNoU2VydmljZS5xdWVyeVBhcmFtcyA9IHBhcmFtcztcbiAgICB9KTtcbiAgfSBcbiAgXG59Il19