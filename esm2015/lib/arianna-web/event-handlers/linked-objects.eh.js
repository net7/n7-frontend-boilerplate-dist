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
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlua2VkLW9iamVjdHMuZWguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZXZlbnQtaGFuZGxlcnMvbGlua2VkLW9iamVjdHMuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVqRCxNQUFNLE9BQU8saUJBQWtCLFNBQVEsWUFBWTs7OztJQUUxQyxNQUFNO1FBRVgsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO1lBQ2hELFFBQVEsSUFBSSxFQUFFO2dCQUNaLEtBQUsseUJBQXlCO29CQUM1QixJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7d0JBQzlCLHFEQUFxRDt3QkFDckQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLENBQUE7cUJBQ3RDO3lCQUFNLElBQUksT0FBTyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTs7NEJBQ2pDLFVBQVUsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUM7d0JBQ3JELG1DQUFtQzs7d0JBQW5DLG1DQUFtQzt3QkFDbkMsSUFBSyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVOzRCQUFHLE9BQU87NkJBQ2pELElBQUssVUFBVSxHQUFHLENBQUMsSUFBSSxVQUFVLEtBQUssSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXOzRCQUFHLE9BQU87OzRCQUMzRSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQTtxQkFDckM7eUJBQU07d0JBQ0wsK0NBQStDO3dCQUMvQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRTs0QkFDMUIsT0FBTyxFQUFFLFFBQVE7NEJBQ2pCLElBQUksRUFBRSxDQUFDLGlCQUFpQixPQUFPLEVBQUUsQ0FBQzt5QkFDbkMsQ0FBQyxDQUFDO3FCQUNKO29CQUNELE1BQU07Z0JBQ1IsS0FBSywwQkFBMEI7b0JBQzdCLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQTtvQkFDL0MsTUFBTTtnQkFDTjtvQkFDRSxPQUFPLENBQUMsSUFBSSxDQUFDLHdCQUF3QixFQUFFLElBQUksRUFBRSxpQkFBaUIsRUFBRSxPQUFPLENBQUMsQ0FBQTtvQkFDeEUsTUFBTTthQUNYO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBBd0xpbmtlZE9iamVjdHNFSCBleHRlbmRzIEV2ZW50SGFuZGxlciB7XG5cbiAgcHVibGljIGxpc3RlbigpIHtcblxuICAgIHRoaXMuaW5uZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdhdy1saW5rZWQtb2JqZWN0cy5jbGljayc6XG4gICAgICAgICAgaWYgKHBheWxvYWQuc3RhcnRzV2l0aCgncGFnZScpKSB7XG4gICAgICAgICAgICAvLyBwYWdpbmF0aW9uIHJvdXRpbmcgaXMgaGFuZGxlZCBieSB0aGUgcGFyZW50IGxheW91dFxuICAgICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ3BhZ2luYXRpb24nLCBwYXlsb2FkKVxuICAgICAgICAgIH0gZWxzZSBpZiAocGF5bG9hZC5zdGFydHNXaXRoKCdnb3RvJykpIHtcbiAgICAgICAgICAgIGxldCB0YXJnZXRQYWdlID0gTnVtYmVyKHBheWxvYWQucmVwbGFjZSgnZ290by0nLCAnJykpXG4gICAgICAgICAgICAvLyBraWxsIGltcG9zc2libGUgcGFnZSBuYXZpZ2F0aW9uc1xuICAgICAgICAgICAgaWYgKCB0YXJnZXRQYWdlID4gdGhpcy5kYXRhU291cmNlLnRvdGFsUGFnZXMgKSByZXR1cm47XG4gICAgICAgICAgICBlbHNlIGlmICggdGFyZ2V0UGFnZSA8IDEgfHwgdGFyZ2V0UGFnZSA9PT0gdGhpcy5kYXRhU291cmNlLmN1cnJlbnRQYWdlICkgcmV0dXJuO1xuICAgICAgICAgICAgZWxzZSB0aGlzLmVtaXRPdXRlcignZ290bycsIHBheWxvYWQpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIG5hdmlnYXRlIHRvIHRoZSBwYXRyaW1vbmlvIHBhZ2Ugb2YgdGhpcyBpdGVtXG4gICAgICAgICAgICB0aGlzLmVtaXRHbG9iYWwoJ25hdmlnYXRlJywge1xuICAgICAgICAgICAgICBoYW5kbGVyOiAncm91dGVyJyxcbiAgICAgICAgICAgICAgcGF0aDogW2Bhdy9wYXRyaW1vbmlvLyR7cGF5bG9hZH1gXVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1saW5rZWQtb2JqZWN0cy5jaGFuZ2UnOlxuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdjaGFuZ2UnLCBOdW1iZXIocGF5bG9hZC52YWx1ZSkpXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGNvbnNvbGUud2FybigndW5oYW5kbGVkIGV2ZW50IHR5cGU6ICcsIHR5cGUsICcgd2l0aCBwYXlsb2FkOiAnLCBwYXlsb2FkKVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn0iXX0=