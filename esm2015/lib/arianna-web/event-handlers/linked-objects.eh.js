/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventHandler } from '@n7-frontend/core';
export class AwLinkedObjectsEH extends EventHandler {
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
                case 'aw-linked-objects.click':
                    if (payload.startsWith('page')) {
                        // pagination routing is handled by the parent layout
                        this.emitOuter('pagination', payload);
                    }
                    else if (payload.startsWith('goto')) {
                        /** @type {?} */
                        let targetPage = Number(payload.replace('goto-', ''))
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
                    else {
                        // navigate to the patrimonio page of this item
                        this.emitGlobal('navigate', {
                            handler: 'router',
                            path: [`aw/patrimonio/${payload}`]
                        });
                    }
                    break;
                case 'aw-linked-objects.change':
                    this.emitOuter('change', Number(payload.value));
                    break;
                default:
                    console.warn('unhandled event type: ', type, ' with payload: ', payload);
                    break;
            }
        }));
        this.outerEvents$.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ({ type, payload }) => {
            switch (type) {
                case 'aw-home-layout.viewmore':
                    // this.dataSource.handleShowMoreClick()
                    console.log('current page: ', this.dataSource.currentPage);
                    break;
                default:
                    break;
            }
        }));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlua2VkLW9iamVjdHMuZWguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZXZlbnQtaGFuZGxlcnMvbGlua2VkLW9iamVjdHMuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVqRCxNQUFNLE9BQU8saUJBQWtCLFNBQVEsWUFBWTs7OztJQUUxQyxNQUFNO1FBRVgsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO1lBQ2hELFFBQVEsSUFBSSxFQUFFO2dCQUNaLEtBQUsseUJBQXlCO29CQUM1QixJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7d0JBQzlCLHFEQUFxRDt3QkFDckQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLENBQUE7cUJBQ3RDO3lCQUFNLElBQUksT0FBTyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTs7NEJBQ2pDLFVBQVUsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUM7d0JBQ3JELG1DQUFtQzs7d0JBQW5DLG1DQUFtQzt3QkFDbkMsSUFBSyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVOzRCQUFHLE9BQU87NkJBQ2pELElBQUssVUFBVSxHQUFHLENBQUMsSUFBSSxVQUFVLEtBQUssSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXOzRCQUFHLE9BQU87OzRCQUMzRSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQTtxQkFDckM7eUJBQU07d0JBQ0wsK0NBQStDO3dCQUMvQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRTs0QkFDMUIsT0FBTyxFQUFFLFFBQVE7NEJBQ2pCLElBQUksRUFBRSxDQUFDLGlCQUFpQixPQUFPLEVBQUUsQ0FBQzt5QkFDbkMsQ0FBQyxDQUFDO3FCQUNKO29CQUNELE1BQU07Z0JBQ1IsS0FBSywwQkFBMEI7b0JBQzdCLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQTtvQkFDL0MsTUFBTTtnQkFDTjtvQkFDRSxPQUFPLENBQUMsSUFBSSxDQUFDLHdCQUF3QixFQUFFLElBQUksRUFBRSxpQkFBaUIsRUFBRSxPQUFPLENBQUMsQ0FBQTtvQkFDeEUsTUFBTTthQUNYO1FBQ0gsQ0FBQyxFQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7WUFDaEQsUUFBUSxJQUFJLEVBQUU7Z0JBQ1osS0FBSyx5QkFBeUI7b0JBQzVCLHdDQUF3QztvQkFDeEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFBO29CQUMxRCxNQUFNO2dCQUNSO29CQUNFLE1BQU07YUFDVDtRQUNILENBQUMsRUFBQyxDQUFBO0lBQ0osQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgQXdMaW5rZWRPYmplY3RzRUggZXh0ZW5kcyBFdmVudEhhbmRsZXIge1xuXG4gIHB1YmxpYyBsaXN0ZW4oKSB7XG5cbiAgICB0aGlzLmlubmVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnYXctbGlua2VkLW9iamVjdHMuY2xpY2snOlxuICAgICAgICAgIGlmIChwYXlsb2FkLnN0YXJ0c1dpdGgoJ3BhZ2UnKSkge1xuICAgICAgICAgICAgLy8gcGFnaW5hdGlvbiByb3V0aW5nIGlzIGhhbmRsZWQgYnkgdGhlIHBhcmVudCBsYXlvdXRcbiAgICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdwYWdpbmF0aW9uJywgcGF5bG9hZClcbiAgICAgICAgICB9IGVsc2UgaWYgKHBheWxvYWQuc3RhcnRzV2l0aCgnZ290bycpKSB7XG4gICAgICAgICAgICBsZXQgdGFyZ2V0UGFnZSA9IE51bWJlcihwYXlsb2FkLnJlcGxhY2UoJ2dvdG8tJywgJycpKVxuICAgICAgICAgICAgLy8ga2lsbCBpbXBvc3NpYmxlIHBhZ2UgbmF2aWdhdGlvbnNcbiAgICAgICAgICAgIGlmICggdGFyZ2V0UGFnZSA+IHRoaXMuZGF0YVNvdXJjZS50b3RhbFBhZ2VzICkgcmV0dXJuO1xuICAgICAgICAgICAgZWxzZSBpZiAoIHRhcmdldFBhZ2UgPCAxIHx8IHRhcmdldFBhZ2UgPT09IHRoaXMuZGF0YVNvdXJjZS5jdXJyZW50UGFnZSApIHJldHVybjtcbiAgICAgICAgICAgIGVsc2UgdGhpcy5lbWl0T3V0ZXIoJ2dvdG8nLCBwYXlsb2FkKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBuYXZpZ2F0ZSB0byB0aGUgcGF0cmltb25pbyBwYWdlIG9mIHRoaXMgaXRlbVxuICAgICAgICAgICAgdGhpcy5lbWl0R2xvYmFsKCduYXZpZ2F0ZScsIHtcbiAgICAgICAgICAgICAgaGFuZGxlcjogJ3JvdXRlcicsXG4gICAgICAgICAgICAgIHBhdGg6IFtgYXcvcGF0cmltb25pby8ke3BheWxvYWR9YF1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctbGlua2VkLW9iamVjdHMuY2hhbmdlJzpcbiAgICAgICAgICB0aGlzLmVtaXRPdXRlcignY2hhbmdlJywgTnVtYmVyKHBheWxvYWQudmFsdWUpKVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ3VuaGFuZGxlZCBldmVudCB0eXBlOiAnLCB0eXBlLCAnIHdpdGggcGF5bG9hZDogJywgcGF5bG9hZClcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5vdXRlckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtbGF5b3V0LnZpZXdtb3JlJzpcbiAgICAgICAgICAvLyB0aGlzLmRhdGFTb3VyY2UuaGFuZGxlU2hvd01vcmVDbGljaygpXG4gICAgICAgICAgY29uc29sZS5sb2coJ2N1cnJlbnQgcGFnZTogJywgdGhpcy5kYXRhU291cmNlLmN1cnJlbnRQYWdlKVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pXG4gIH1cbn0iXX0=