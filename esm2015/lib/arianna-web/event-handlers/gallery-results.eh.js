/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventHandler } from '@n7-frontend/core';
export class AwGalleryResultsEH extends EventHandler {
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
                case 'aw-gallery-results.change':
                    this.emitOuter('change', +payload.value);
                    break;
                case 'aw-gallery-results.click':
                    if (typeof payload == 'string') { // click on pagination
                        if (payload.startsWith('page')) {
                            // pagination routing is handled by the parent layout
                            this.emitOuter('pagination', payload);
                        }
                        else if (payload.startsWith('goto')) {
                            /** @type {?} */
                            let targetPage = +payload.replace('goto-', '')
                            // kill impossible page navigations
                            ;
                            // kill impossible page navigations
                            if (targetPage > this.dataSource.totalPages)
                                return;
                            else if (targetPage < 1 || targetPage === this.dataSource.currentPage)
                                return;
                            else
                                this.emitOuter('goto', payload);
                        }
                    }
                    else { // click on a linked object
                        this.emitOuter('click', payload);
                    }
                    break;
                default:
                    console.warn('(gallery-results) unhandled inner event of type', type);
                    break;
            }
        }));
        /*
            this.outerEvents$.subscribe(event => {
                
            });
        */
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS1yZXN1bHRzLmVoLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2V2ZW50LWhhbmRsZXJzL2dhbGxlcnktcmVzdWx0cy5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWpELE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxZQUFZOzs7O0lBRXpDLE1BQU07UUFDVCxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7WUFDOUMsUUFBUSxJQUFJLEVBQUU7Z0JBQ1YsS0FBSywyQkFBMkI7b0JBQzVCLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFBO29CQUN4QyxNQUFNO2dCQUNWLEtBQUssMEJBQTBCO29CQUMzQixJQUFJLE9BQU8sT0FBTyxJQUFJLFFBQVEsRUFBRSxFQUFFLHNCQUFzQjt3QkFDcEQsSUFBSSxPQUFPLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFOzRCQUM1QixxREFBcUQ7NEJBQ3JELElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxDQUFBO3lCQUN4Qzs2QkFBTSxJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7O2dDQUMvQixVQUFVLEdBQUcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUM7NEJBQzlDLG1DQUFtQzs7NEJBQW5DLG1DQUFtQzs0QkFDbkMsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVO2dDQUFFLE9BQU87aUNBQy9DLElBQUksVUFBVSxHQUFHLENBQUMsSUFBSSxVQUFVLEtBQUssSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXO2dDQUFFLE9BQU87O2dDQUN6RSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQTt5QkFDdkM7cUJBQ0o7eUJBQU0sRUFBRSwyQkFBMkI7d0JBQ2hDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO3FCQUNwQztvQkFDRCxNQUFNO2dCQUNWO29CQUNJLE9BQU8sQ0FBQyxJQUFJLENBQUMsaURBQWlELEVBQUUsSUFBSSxDQUFDLENBQUE7b0JBQ3JFLE1BQU07YUFDYjtRQUNMLENBQUMsRUFBQyxDQUFDO1FBQ1A7Ozs7VUFJRTtJQUNGLENBQUM7Q0FDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIEF3R2FsbGVyeVJlc3VsdHNFSCBleHRlbmRzIEV2ZW50SGFuZGxlciB7XG5cbiAgICBwdWJsaWMgbGlzdGVuKCkge1xuICAgICAgICB0aGlzLmlubmVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdhdy1nYWxsZXJ5LXJlc3VsdHMuY2hhbmdlJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2NoYW5nZScsICtwYXlsb2FkLnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdhdy1nYWxsZXJ5LXJlc3VsdHMuY2xpY2snOlxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHBheWxvYWQgPT0gJ3N0cmluZycpIHsgLy8gY2xpY2sgb24gcGFnaW5hdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBheWxvYWQuc3RhcnRzV2l0aCgncGFnZScpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcGFnaW5hdGlvbiByb3V0aW5nIGlzIGhhbmRsZWQgYnkgdGhlIHBhcmVudCBsYXlvdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXRPdXRlcigncGFnaW5hdGlvbicsIHBheWxvYWQpXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBheWxvYWQuc3RhcnRzV2l0aCgnZ290bycpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRhcmdldFBhZ2UgPSArcGF5bG9hZC5yZXBsYWNlKCdnb3RvLScsICcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGtpbGwgaW1wb3NzaWJsZSBwYWdlIG5hdmlnYXRpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldFBhZ2UgPiB0aGlzLmRhdGFTb3VyY2UudG90YWxQYWdlcykgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRhcmdldFBhZ2UgPCAxIHx8IHRhcmdldFBhZ2UgPT09IHRoaXMuZGF0YVNvdXJjZS5jdXJyZW50UGFnZSkgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgdGhpcy5lbWl0T3V0ZXIoJ2dvdG8nLCBwYXlsb2FkKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgeyAvLyBjbGljayBvbiBhIGxpbmtlZCBvYmplY3RcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdjbGljaycsIHBheWxvYWQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignKGdhbGxlcnktcmVzdWx0cykgdW5oYW5kbGVkIGlubmVyIGV2ZW50IG9mIHR5cGUnLCB0eXBlKVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgLypcbiAgICAgICAgdGhpcy5vdXRlckV2ZW50cyQuc3Vic2NyaWJlKGV2ZW50ID0+IHtcbiAgICAgICAgICAgIFxuICAgICAgICB9KTtcbiAgICAqL1xuICAgIH1cbn0iXX0=