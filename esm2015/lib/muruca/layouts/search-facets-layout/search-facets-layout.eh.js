/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventHandler } from '@n7-frontend/core';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
/**
 * @record
 */
function ChangedSubjects() { }
export class SearchFacetsLayoutEH extends EventHandler {
    constructor() {
        super(...arguments);
        this.changed$ = {};
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
                case 'mr-search-facets-layout.init':
                    this.hostEmit$ = payload.hostEmit$;
                    this.guestEmit$ = payload.guestEmit$;
                    // listeners
                    this.listenFacetsReady();
                    this.listenToHost();
                    this.initChangedListener(payload.data);
                    // init
                    this.dataSource.onInit(payload);
                    break;
                case 'mr-search-facets-layout.destroy':
                    this.dataSource.onDestroy();
                    break;
                default:
                    break;
            }
        }));
        this.outerEvents$.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ({ type, payload }) => {
            if (type.indexOf('change')) {
                this.changed$[payload.id].next(payload);
            }
        }));
    }
    /**
     * @param {?} data
     * @return {?}
     */
    initChangedListener(data) {
        data.sections.forEach((/**
         * @param {?} section
         * @return {?}
         */
        (section) => {
            /** @type {?} */
            const sources = [];
            if (section.header) {
                const { id, delay } = section.header;
                sources.push({ id, delay });
            }
            section.inputs.forEach((/**
             * @param {?} __0
             * @return {?}
             */
            ({ id, delay }) => {
                sources.push({ id, delay });
            }));
            sources.forEach((/**
             * @param {?} source
             * @return {?}
             */
            (source) => {
                this.changed$[source.id] = new Subject();
                this.changed$[source.id].pipe(debounceTime(source.delay || 1)).subscribe((/**
                 * @param {?} payload
                 * @return {?}
                 */
                (payload) => {
                    this.guestEmit$.next({
                        payload,
                        type: 'change'
                    });
                }));
            }));
        }));
    }
    /**
     * @return {?}
     */
    listenFacetsReady() {
        this.dataSource.ready$.subscribe((/**
         * @return {?}
         */
        () => {
            this.guestEmit$.next({
                type: 'facetsready'
            });
        }));
    }
    /**
     * @return {?}
     */
    listenToHost() {
        this.hostEmit$.pipe(takeUntil(this.destroyed$)).subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ({ type, payload }) => {
            switch (type) {
                case 'updateinputvalue':
                    this.dataSource.updateInputValue(payload.id, payload.value);
                    break;
                case 'updateinputdata':
                    this.dataSource.updateInputData(payload.id, payload.data);
                    break;
                case 'clearinput':
                    this.dataSource.clearInput(payload.id);
                    break;
                case 'clearinputs':
                    this.dataSource.clearInputs();
                    break;
                default:
                    break;
            }
        }));
    }
}
if (false) {
    /** @type {?} */
    SearchFacetsLayoutEH.prototype.changed$;
    /**
     * @type {?}
     * @private
     */
    SearchFacetsLayoutEH.prototype.destroyed$;
    /**
     * @type {?}
     * @private
     */
    SearchFacetsLayoutEH.prototype.hostEmit$;
    /**
     * @type {?}
     * @private
     */
    SearchFacetsLayoutEH.prototype.guestEmit$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZhY2V0cy1sYXlvdXQuZWguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2xheW91dHMvc2VhcmNoLWZhY2V0cy1sYXlvdXQvc2VhcmNoLWZhY2V0cy1sYXlvdXQuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFHekQsOEJBRUM7QUFFRCxNQUFNLE9BQU8sb0JBQXFCLFNBQVEsWUFBWTtJQUF0RDs7UUFDRSxhQUFRLEdBQW9CLEVBQUUsQ0FBQztRQUV2QixlQUFVLEdBQXFCLElBQUksT0FBTyxFQUFFLENBQUM7SUFrR3ZELENBQUM7Ozs7SUE1RlEsTUFBTTtRQUNYLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUzs7OztRQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtZQUNoRCxRQUFRLElBQUksRUFBRTtnQkFDWixLQUFLLDhCQUE4QjtvQkFDakMsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDO29CQUNuQyxJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUM7b0JBQ3JDLFlBQVk7b0JBQ1osSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7b0JBQ3pCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztvQkFDcEIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDdkMsT0FBTztvQkFDUCxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDaEMsTUFBTTtn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QyxVQUFVLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUN2QyxNQUFNO2dCQUVSLEtBQUssYUFBYTtvQkFDaEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztvQkFDOUIsTUFBTTtnQkFFUjtvQkFDRSxNQUFNO2FBQ1Q7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRjs7O0lBcEdDLHdDQUErQjs7Ozs7SUFFL0IsMENBQXFEOzs7OztJQUVyRCx5Q0FBZ0M7Ozs7O0lBRWhDLDBDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgU2VhcmNoRmFjZXRzQ29uZmlnIH0gZnJvbSAnLi9zZWFyY2gtZmFjZXRzLWNvbmZpZyc7XG5cbmludGVyZmFjZSBDaGFuZ2VkU3ViamVjdHMge1xuICBba2V5OiBzdHJpbmddOiBTdWJqZWN0PGFueT47XG59XG5cbmV4cG9ydCBjbGFzcyBTZWFyY2hGYWNldHNMYXlvdXRFSCBleHRlbmRzIEV2ZW50SGFuZGxlciB7XG4gIGNoYW5nZWQkOiBDaGFuZ2VkU3ViamVjdHMgPSB7fTtcblxuICBwcml2YXRlIGRlc3Ryb3llZCQ6IFN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgU3ViamVjdCgpO1xuXG4gIHByaXZhdGUgaG9zdEVtaXQkOiBTdWJqZWN0PGFueT47XG5cbiAgcHJpdmF0ZSBndWVzdEVtaXQkOiBTdWJqZWN0PGFueT47XG5cbiAgcHVibGljIGxpc3RlbigpIHtcbiAgICB0aGlzLmlubmVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnbXItc2VhcmNoLWZhY2V0cy1sYXlvdXQuaW5pdCc6XG4gICAgICAgICAgdGhpcy5ob3N0RW1pdCQgPSBwYXlsb2FkLmhvc3RFbWl0JDtcbiAgICAgICAgICB0aGlzLmd1ZXN0RW1pdCQgPSBwYXlsb2FkLmd1ZXN0RW1pdCQ7XG4gICAgICAgICAgLy8gbGlzdGVuZXJzXG4gICAgICAgICAgdGhpcy5saXN0ZW5GYWNldHNSZWFkeSgpO1xuICAgICAgICAgIHRoaXMubGlzdGVuVG9Ib3N0KCk7XG4gICAgICAgICAgdGhpcy5pbml0Q2hhbmdlZExpc3RlbmVyKHBheWxvYWQuZGF0YSk7XG4gICAgICAgICAgLy8gaW5pdFxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vbkluaXQocGF5bG9hZCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnbXItc2VhcmNoLWZhY2V0cy1sYXlvdXQuZGVzdHJveSc6XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uRGVzdHJveSgpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLm91dGVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBpZiAodHlwZS5pbmRleE9mKCdjaGFuZ2UnKSkge1xuICAgICAgICB0aGlzLmNoYW5nZWQkW3BheWxvYWQuaWRdLm5leHQocGF5bG9hZCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpbml0Q2hhbmdlZExpc3RlbmVyKGRhdGE6IFNlYXJjaEZhY2V0c0NvbmZpZykge1xuICAgIGRhdGEuc2VjdGlvbnMuZm9yRWFjaCgoc2VjdGlvbikgPT4ge1xuICAgICAgY29uc3Qgc291cmNlczoge1xuICAgICAgICBpZDogc3RyaW5nO1xuICAgICAgICBkZWxheTogbnVtYmVyO1xuICAgICAgfVtdID0gW107XG5cbiAgICAgIGlmIChzZWN0aW9uLmhlYWRlcikge1xuICAgICAgICBjb25zdCB7IGlkLCBkZWxheSB9ID0gc2VjdGlvbi5oZWFkZXI7XG4gICAgICAgIHNvdXJjZXMucHVzaCh7IGlkLCBkZWxheSB9KTtcbiAgICAgIH1cbiAgICAgIHNlY3Rpb24uaW5wdXRzLmZvckVhY2goKHsgaWQsIGRlbGF5IH0pID0+IHtcbiAgICAgICAgc291cmNlcy5wdXNoKHsgaWQsIGRlbGF5IH0pO1xuICAgICAgfSk7XG4gICAgICBzb3VyY2VzLmZvckVhY2goKHNvdXJjZSkgPT4ge1xuICAgICAgICB0aGlzLmNoYW5nZWQkW3NvdXJjZS5pZF0gPSBuZXcgU3ViamVjdCgpO1xuICAgICAgICB0aGlzLmNoYW5nZWQkW3NvdXJjZS5pZF0ucGlwZShcbiAgICAgICAgICBkZWJvdW5jZVRpbWUoc291cmNlLmRlbGF5IHx8IDEpXG4gICAgICAgICkuc3Vic2NyaWJlKChwYXlsb2FkKSA9PiB7XG4gICAgICAgICAgdGhpcy5ndWVzdEVtaXQkLm5leHQoe1xuICAgICAgICAgICAgcGF5bG9hZCxcbiAgICAgICAgICAgIHR5cGU6ICdjaGFuZ2UnXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBsaXN0ZW5GYWNldHNSZWFkeSgpIHtcbiAgICB0aGlzLmRhdGFTb3VyY2UucmVhZHkkLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmd1ZXN0RW1pdCQubmV4dCh7XG4gICAgICAgIHR5cGU6ICdmYWNldHNyZWFkeSdcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgbGlzdGVuVG9Ib3N0KCkge1xuICAgIHRoaXMuaG9zdEVtaXQkLnBpcGUoXG4gICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95ZWQkKVxuICAgICkuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ3VwZGF0ZWlucHV0dmFsdWUnOlxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS51cGRhdGVJbnB1dFZhbHVlKHBheWxvYWQuaWQsIHBheWxvYWQudmFsdWUpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ3VwZGF0ZWlucHV0ZGF0YSc6XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZUlucHV0RGF0YShwYXlsb2FkLmlkLCBwYXlsb2FkLmRhdGEpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ2NsZWFyaW5wdXQnOlxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5jbGVhcklucHV0KHBheWxvYWQuaWQpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ2NsZWFyaW5wdXRzJzpcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuY2xlYXJJbnB1dHMoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iXX0=