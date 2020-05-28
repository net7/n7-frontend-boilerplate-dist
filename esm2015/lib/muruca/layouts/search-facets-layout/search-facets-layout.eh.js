/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventHandler } from '@n7-frontend/core';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil, filter } from 'rxjs/operators';
import { INPUT_STATE_CONTEXT, FACET_STATE_CONTEXT, RESULTS_STATE_CONTEXT } from '../../services/search.service';
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
                    this.searchService = payload.searchService;
                    // listeners
                    this.initChangedListener(this.searchService.getConfig());
                    this.initStateListener();
                    // init
                    this.dataSource.onInit(payload);
                    break;
                case 'mr-search-facets-layout.destroy':
                    this.destroyed$.next();
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
     * @param {?} __0
     * @return {?}
     */
    initChangedListener({ facets }) {
        facets.sections.forEach((/**
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
                 * @param {?} __0
                 * @return {?}
                 */
                ({ id, value }) => {
                    this.searchService.setState('input', id, value);
                }));
            }));
        }));
    }
    /**
     * @return {?}
     */
    initStateListener() {
        // listener for input updates
        this.searchService.getState$(INPUT_STATE_CONTEXT)
            .pipe(takeUntil(this.destroyed$), filter((/**
         * @param {?} __0
         * @return {?}
         */
        ({ lastUpdated }) => this.dataSource.inputsDS[lastUpdated]))).subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ({ lastUpdated, state }) => {
            /** @type {?} */
            const newValue = state[lastUpdated];
            if (newValue === null) {
                this.dataSource.clearInput(lastUpdated);
            }
            else {
                this.dataSource.updateInputValue(lastUpdated, newValue);
            }
        }));
        // listener for facet updates
        this.searchService.getState$(FACET_STATE_CONTEXT)
            .pipe(takeUntil(this.destroyed$), filter((/**
         * @param {?} __0
         * @return {?}
         */
        ({ lastUpdated }) => this.dataSource.inputsDS[lastUpdated]))).subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ({ lastUpdated, state }) => {
            /** @type {?} */
            const newData = state[lastUpdated];
            this.dataSource.updateInputData(lastUpdated, newData);
        }));
        // listener for facet header updates
        this.searchService.getState$(RESULTS_STATE_CONTEXT, 'success')
            .pipe(takeUntil(this.destroyed$)).subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ({ headers }) => {
            Object.keys(headers).forEach((/**
             * @param {?} id
             * @return {?}
             */
            (id) => {
                this.dataSource.updateInputValue(id, headers[id]);
            }));
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
    SearchFacetsLayoutEH.prototype.searchService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZhY2V0cy1sYXlvdXQuZWguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2xheW91dHMvc2VhcmNoLWZhY2V0cy1sYXlvdXQvc2VhcmNoLWZhY2V0cy1sYXlvdXQuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2pFLE9BQU8sRUFFTCxtQkFBbUIsRUFDbkIsbUJBQW1CLEVBQ25CLHFCQUFxQixFQUN0QixNQUFNLCtCQUErQixDQUFDOzs7O0FBRXZDLDhCQUVDO0FBRUQsTUFBTSxPQUFPLG9CQUFxQixTQUFRLFlBQVk7SUFBdEQ7O1FBQ0UsYUFBUSxHQUFvQixFQUFFLENBQUM7UUFFdkIsZUFBVSxHQUFxQixJQUFJLE9BQU8sRUFBRSxDQUFDO0lBNEZ2RCxDQUFDOzs7O0lBeEZRLE1BQU07UUFDWCxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7WUFDaEQsUUFBUSxJQUFJLEVBQUU7Z0JBQ1osS0FBSyw4QkFBOEI7b0JBQ2pDLElBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQztvQkFDM0MsWUFBWTtvQkFDWixJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO29CQUN6RCxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztvQkFDekIsT0FBTztvQkFDUCxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMs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SUFBSSxDQUNILFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQzFCLE1BQU07Ozs7UUFBQyxDQUFDLEVBQUUsV0FBVyxFQUFFLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFDLENBQ25FLENBQUMsU0FBUzs7OztRQUFDLENBQUMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRTs7a0JBQy9CLE9BQU8sR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN4RCxDQUFDLEVBQUMsQ0FBQztRQUVMLG9DQUFvQztRQUNwQyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxxQkFBcUIsRUFBRSxTQUFTLENBQUM7YUFDM0QsSUFBSSxDQUNILFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQzNCLENBQUMsU0FBUzs7OztRQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO1lBQzFCLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTzs7OztZQUFDLENBQUMsRUFBRSxFQUFFLEVBQUU7Z0JBQ2xDLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3BELENBQUMsRUFBQyxDQUFDO1FBQ0wsQ0FBQyxFQUFDLENBQUM7SUFDUCxDQUFDO0NBQ0Y7OztJQTlGQyx3Q0FBK0I7Ozs7O0lBRS9CLDBDQUFxRDs7Ozs7SUFFckQsNkNBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCB0YWtlVW50aWwsIGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7XG4gIE1yU2VhcmNoU2VydmljZSxcbiAgSU5QVVRfU1RBVEVfQ09OVEVYVCxcbiAgRkFDRVRfU1RBVEVfQ09OVEVYVCxcbiAgUkVTVUxUU19TVEFURV9DT05URVhUXG59IGZyb20gJy4uLy4uL3NlcnZpY2VzL3NlYXJjaC5zZXJ2aWNlJztcblxuaW50ZXJmYWNlIENoYW5nZWRTdWJqZWN0cyB7XG4gIFtrZXk6IHN0cmluZ106IFN1YmplY3Q8YW55Pjtcbn1cblxuZXhwb3J0IGNsYXNzIFNlYXJjaEZhY2V0c0xheW91dEVIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcbiAgY2hhbmdlZCQ6IENoYW5nZWRTdWJqZWN0cyA9IHt9O1xuXG4gIHByaXZhdGUgZGVzdHJveWVkJDogU3ViamVjdDxib29sZWFuPiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgcHJpdmF0ZSBzZWFyY2hTZXJ2aWNlOiBNclNlYXJjaFNlcnZpY2U7XG5cbiAgcHVibGljIGxpc3RlbigpIHtcbiAgICB0aGlzLmlubmVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnbXItc2VhcmNoLWZhY2V0cy1sYXlvdXQuaW5pdCc6XG4gICAgICAgICAgdGhpcy5zZWFyY2hTZXJ2aWNlID0gcGF5bG9hZC5zZWFyY2hTZXJ2aWNlO1xuICAgICAgICAgIC8vIGxpc3RlbmVyc1xuICAgICAgICAgIHRoaXMuaW5pdENoYW5nZWRMaXN0ZW5lcih0aGlzLnNlYXJjaFNlcnZpY2UuZ2V0Q29uZmlnKCkpO1xuICAgICAgICAgIHRoaXMuaW5pdFN0YXRlTGlzdGVuZXIoKTtcbiAgICAgICAgICAvLyBpbml0XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uSW5pdChwYXlsb2FkKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdtci1zZWFyY2gtZmFjZXRzLWxheW91dC5kZXN0cm95JzpcbiAgICAgICAgICB0aGlzLmRlc3Ryb3llZCQubmV4dCgpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLm91dGVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBpZiAodHlwZS5pbmRleE9mKCdjaGFuZ2UnKSkge1xuICAgICAgICB0aGlzLmNoYW5nZWQkW3BheWxvYWQuaWRdLm5leHQocGF5bG9hZCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpbml0Q2hhbmdlZExpc3RlbmVyKHsgZmFjZXRzIH0pIHtcbiAgICBmYWNldHMuc2VjdGlvbnMuZm9yRWFjaCgoc2VjdGlvbikgPT4ge1xuICAgICAgY29uc3Qgc291cmNlczoge1xuICAgICAgICBpZDogc3RyaW5nO1xuICAgICAgICBkZWxheTogbnVtYmVyO1xuICAgICAgfVtdID0gW107XG5cbiAgICAgIGlmIChzZWN0aW9uLmhlYWRlcikge1xuICAgICAgICBjb25zdCB7IGlkLCBkZWxheSB9ID0gc2VjdGlvbi5oZWFkZXI7XG4gICAgICAgIHNvdXJjZXMucHVzaCh7IGlkLCBkZWxheSB9KTtcbiAgICAgIH1cbiAgICAgIHNlY3Rpb24uaW5wdXRzLmZvckVhY2goKHsgaWQsIGRlbGF5IH0pID0+IHtcbiAgICAgICAgc291cmNlcy5wdXNoKHsgaWQsIGRlbGF5IH0pO1xuICAgICAgfSk7XG4gICAgICBzb3VyY2VzLmZvckVhY2goKHNvdXJjZSkgPT4ge1xuICAgICAgICB0aGlzLmNoYW5nZWQkW3NvdXJjZS5pZF0gPSBuZXcgU3ViamVjdCgpO1xuICAgICAgICB0aGlzLmNoYW5nZWQkW3NvdXJjZS5pZF0ucGlwZShcbiAgICAgICAgICBkZWJvdW5jZVRpbWUoc291cmNlLmRlbGF5IHx8IDEpXG4gICAgICAgICkuc3Vic2NyaWJlKCh7IGlkLCB2YWx1ZSB9KSA9PiB7XG4gICAgICAgICAgdGhpcy5zZWFyY2hTZXJ2aWNlLnNldFN0YXRlKCdpbnB1dCcsIGlkLCB2YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBpbml0U3RhdGVMaXN0ZW5lcigpIHtcbiAgICAvLyBsaXN0ZW5lciBmb3IgaW5wdXQgdXBkYXRlc1xuICAgIHRoaXMuc2VhcmNoU2VydmljZS5nZXRTdGF0ZSQoSU5QVVRfU1RBVEVfQ09OVEVYVClcbiAgICAgIC5waXBlKFxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95ZWQkKSxcbiAgICAgICAgZmlsdGVyKCh7IGxhc3RVcGRhdGVkIH0pID0+IHRoaXMuZGF0YVNvdXJjZS5pbnB1dHNEU1tsYXN0VXBkYXRlZF0pXG4gICAgICApLnN1YnNjcmliZSgoeyBsYXN0VXBkYXRlZCwgc3RhdGUgfSkgPT4ge1xuICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IHN0YXRlW2xhc3RVcGRhdGVkXTtcbiAgICAgICAgaWYgKG5ld1ZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLmNsZWFySW5wdXQobGFzdFVwZGF0ZWQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS51cGRhdGVJbnB1dFZhbHVlKGxhc3RVcGRhdGVkLCBuZXdWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgLy8gbGlzdGVuZXIgZm9yIGZhY2V0IHVwZGF0ZXNcbiAgICB0aGlzLnNlYXJjaFNlcnZpY2UuZ2V0U3RhdGUkKEZBQ0VUX1NUQVRFX0NPTlRFWFQpXG4gICAgICAucGlwZShcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveWVkJCksXG4gICAgICAgIGZpbHRlcigoeyBsYXN0VXBkYXRlZCB9KSA9PiB0aGlzLmRhdGFTb3VyY2UuaW5wdXRzRFNbbGFzdFVwZGF0ZWRdKVxuICAgICAgKS5zdWJzY3JpYmUoKHsgbGFzdFVwZGF0ZWQsIHN0YXRlIH0pID0+IHtcbiAgICAgICAgY29uc3QgbmV3RGF0YSA9IHN0YXRlW2xhc3RVcGRhdGVkXTtcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZUlucHV0RGF0YShsYXN0VXBkYXRlZCwgbmV3RGF0YSk7XG4gICAgICB9KTtcblxuICAgIC8vIGxpc3RlbmVyIGZvciBmYWNldCBoZWFkZXIgdXBkYXRlc1xuICAgIHRoaXMuc2VhcmNoU2VydmljZS5nZXRTdGF0ZSQoUkVTVUxUU19TVEFURV9DT05URVhULCAnc3VjY2VzcycpXG4gICAgICAucGlwZShcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveWVkJClcbiAgICAgICkuc3Vic2NyaWJlKCh7IGhlYWRlcnMgfSkgPT4ge1xuICAgICAgICBPYmplY3Qua2V5cyhoZWFkZXJzKS5mb3JFYWNoKChpZCkgPT4ge1xuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS51cGRhdGVJbnB1dFZhbHVlKGlkLCBoZWFkZXJzW2lkXSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH1cbn1cbiJdfQ==