/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventHandler } from '@n7-frontend/core';
export class HeaderEH extends EventHandler {
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
                case 'header.click':
                    // navigate control
                    // if(payload.source === 'navigate'){
                    this.emitGlobal('navigate', {
                        handler: 'router',
                        path: [payload]
                    });
                    // }
                    // global signal
                    // this.emitGlobal(type, payload);
                    break;
                default:
                    break;
            }
        }));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmVoLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9ldmVudC1oYW5kbGVycy9oZWFkZXIuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVqRCxNQUFNLE9BQU8sUUFBUyxTQUFRLFlBQVk7Ozs7SUFFakMsTUFBTTtRQUNYLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUzs7OztRQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtZQUNoRCxRQUFPLElBQUksRUFBQztnQkFDVixLQUFLLGNBQWM7b0JBQ2pCLG1CQUFtQjtvQkFDbkIscUNBQXFDO29CQUNyQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRTt3QkFDMUIsT0FBTyxFQUFFLFFBQVE7d0JBQ2pCLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQztxQkFDaEIsQ0FBQyxDQUFDO29CQUNILElBQUk7b0JBQ0osZ0JBQWdCO29CQUNoQixrQ0FBa0M7b0JBQ2xDLE1BQU07Z0JBRVI7b0JBQ0UsTUFBTTthQUNUO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDO0NBRUYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBIZWFkZXJFSCBleHRlbmRzIEV2ZW50SGFuZGxlciB7XG5cbiAgcHVibGljIGxpc3Rlbigpe1xuICAgIHRoaXMuaW5uZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICAgIHN3aXRjaCh0eXBlKXtcbiAgICAgICAgY2FzZSAnaGVhZGVyLmNsaWNrJzpcbiAgICAgICAgICAvLyBuYXZpZ2F0ZSBjb250cm9sXG4gICAgICAgICAgLy8gaWYocGF5bG9hZC5zb3VyY2UgPT09ICduYXZpZ2F0ZScpe1xuICAgICAgICAgIHRoaXMuZW1pdEdsb2JhbCgnbmF2aWdhdGUnLCB7XG4gICAgICAgICAgICBoYW5kbGVyOiAncm91dGVyJyxcbiAgICAgICAgICAgIHBhdGg6IFtwYXlsb2FkXVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIC8vIH1cbiAgICAgICAgICAvLyBnbG9iYWwgc2lnbmFsXG4gICAgICAgICAgLy8gdGhpcy5lbWl0R2xvYmFsKHR5cGUsIHBheWxvYWQpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxufVxuIl19