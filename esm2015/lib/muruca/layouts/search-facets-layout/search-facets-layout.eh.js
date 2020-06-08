/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventHandler } from '@n7-frontend/core';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil, filter } from 'rxjs/operators';
import { INPUT_STATE_CONTEXT, FACET_STATE_CONTEXT, FACETS_REQUEST_STATE_CONTEXT } from '../../services/search.service';
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
        this.searchService.getState$(FACETS_REQUEST_STATE_CONTEXT, 'success')
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZhY2V0cy1sYXlvdXQuZWguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2xheW91dHMvc2VhcmNoLWZhY2V0cy1sYXlvdXQvc2VhcmNoLWZhY2V0cy1sYXlvdXQuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2pFLE9BQU8sRUFFTCxtQkFBbUIsRUFDbkIsbUJBQW1CLEVBQ25CLDRCQUE0QixFQUM3QixNQUFNLCtCQUErQixDQUFDOzs7O0FBRXZDLDhCQUVDO0FBRUQsTUFBTSxPQUFPLG9CQUFxQixTQUFRLFlBQVk7SUFBdEQ7O1FBQ0UsYUFBUSxHQUFvQixFQUFFLENBQUM7UUFFdkIsZUFBVSxHQUFxQixJQUFJLE9BQU8sRUFBRSxDQUFDO0lBNEZ2RCxDQUFDOzs7O0lBeEZRLE1BQU07UUFDWCxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7WUFDaEQsUUFBUSxJQUFJLEVBQUU7Z0JBQ1osS0FBSyw4QkFBOEI7b0JBQ2pDLElBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQztvQkFDM0MsWUFBWTtvQkFDWixJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO29CQUN6RCxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztvQkFDekIsT0FBTztvQkFDUCxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMs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SUFBSSxDQUNILFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQzFCLE1BQU07Ozs7UUFBQyxDQUFDLEVBQUUsV0FBVyxFQUFFLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFDLENBQ25FLENBQUMsU0FBUzs7OztRQUFDLENBQUMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRTs7a0JBQy9CLE9BQU8sR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN4RCxDQUFDLEVBQUMsQ0FBQztRQUVMLG9DQUFvQztRQUNwQyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyw0QkFBNEIsRUFBRSxTQUFTLENBQUM7YUFDbEUsSUFBSSxDQUNILFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQzNCLENBQUMsU0FBUzs7OztRQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO1lBQzFCLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTzs7OztZQUFDLENBQUMsRUFBRSxFQUFFLEVBQUU7Z0JBQ2xDLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3BELENBQUMsRUFBQyxDQUFDO1FBQ0wsQ0FBQyxFQUFDLENBQUM7SUFDUCxDQUFDO0NBQ0Y7OztJQTlGQyx3Q0FBK0I7Ozs7O0lBRS9CLDBDQUFxRDs7Ozs7SUFFckQsNkNBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCB0YWtlVW50aWwsIGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7XG4gIE1yU2VhcmNoU2VydmljZSxcbiAgSU5QVVRfU1RBVEVfQ09OVEVYVCxcbiAgRkFDRVRfU1RBVEVfQ09OVEVYVCxcbiAgRkFDRVRTX1JFUVVFU1RfU1RBVEVfQ09OVEVYVFxufSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9zZWFyY2guc2VydmljZSc7XG5cbmludGVyZmFjZSBDaGFuZ2VkU3ViamVjdHMge1xuICBba2V5OiBzdHJpbmddOiBTdWJqZWN0PGFueT47XG59XG5cbmV4cG9ydCBjbGFzcyBTZWFyY2hGYWNldHNMYXlvdXRFSCBleHRlbmRzIEV2ZW50SGFuZGxlciB7XG4gIGNoYW5nZWQkOiBDaGFuZ2VkU3ViamVjdHMgPSB7fTtcblxuICBwcml2YXRlIGRlc3Ryb3llZCQ6IFN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgU3ViamVjdCgpO1xuXG4gIHByaXZhdGUgc2VhcmNoU2VydmljZTogTXJTZWFyY2hTZXJ2aWNlO1xuXG4gIHB1YmxpYyBsaXN0ZW4oKSB7XG4gICAgdGhpcy5pbm5lckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ21yLXNlYXJjaC1mYWNldHMtbGF5b3V0LmluaXQnOlxuICAgICAgICAgIHRoaXMuc2VhcmNoU2VydmljZSA9IHBheWxvYWQuc2VhcmNoU2VydmljZTtcbiAgICAgICAgICAvLyBsaXN0ZW5lcnNcbiAgICAgICAgICB0aGlzLmluaXRDaGFuZ2VkTGlzdGVuZXIodGhpcy5zZWFyY2hTZXJ2aWNlLmdldENvbmZpZygpKTtcbiAgICAgICAgICB0aGlzLmluaXRTdGF0ZUxpc3RlbmVyKCk7XG4gICAgICAgICAgLy8gaW5pdFxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vbkluaXQocGF5bG9hZCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnbXItc2VhcmNoLWZhY2V0cy1sYXlvdXQuZGVzdHJveSc6XG4gICAgICAgICAgdGhpcy5kZXN0cm95ZWQkLm5leHQoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5vdXRlckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICAgICAgaWYgKHR5cGUuaW5kZXhPZignY2hhbmdlJykpIHtcbiAgICAgICAgdGhpcy5jaGFuZ2VkJFtwYXlsb2FkLmlkXS5uZXh0KHBheWxvYWQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaW5pdENoYW5nZWRMaXN0ZW5lcih7IGZhY2V0cyB9KSB7XG4gICAgZmFjZXRzLnNlY3Rpb25zLmZvckVhY2goKHNlY3Rpb24pID0+IHtcbiAgICAgIGNvbnN0IHNvdXJjZXM6IHtcbiAgICAgICAgaWQ6IHN0cmluZztcbiAgICAgICAgZGVsYXk6IG51bWJlcjtcbiAgICAgIH1bXSA9IFtdO1xuXG4gICAgICBpZiAoc2VjdGlvbi5oZWFkZXIpIHtcbiAgICAgICAgY29uc3QgeyBpZCwgZGVsYXkgfSA9IHNlY3Rpb24uaGVhZGVyO1xuICAgICAgICBzb3VyY2VzLnB1c2goeyBpZCwgZGVsYXkgfSk7XG4gICAgICB9XG4gICAgICBzZWN0aW9uLmlucHV0cy5mb3JFYWNoKCh7IGlkLCBkZWxheSB9KSA9PiB7XG4gICAgICAgIHNvdXJjZXMucHVzaCh7IGlkLCBkZWxheSB9KTtcbiAgICAgIH0pO1xuICAgICAgc291cmNlcy5mb3JFYWNoKChzb3VyY2UpID0+IHtcbiAgICAgICAgdGhpcy5jaGFuZ2VkJFtzb3VyY2UuaWRdID0gbmV3IFN1YmplY3QoKTtcbiAgICAgICAgdGhpcy5jaGFuZ2VkJFtzb3VyY2UuaWRdLnBpcGUoXG4gICAgICAgICAgZGVib3VuY2VUaW1lKHNvdXJjZS5kZWxheSB8fCAxKVxuICAgICAgICApLnN1YnNjcmliZSgoeyBpZCwgdmFsdWUgfSkgPT4ge1xuICAgICAgICAgIHRoaXMuc2VhcmNoU2VydmljZS5zZXRTdGF0ZSgnaW5wdXQnLCBpZCwgdmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgaW5pdFN0YXRlTGlzdGVuZXIoKSB7XG4gICAgLy8gbGlzdGVuZXIgZm9yIGlucHV0IHVwZGF0ZXNcbiAgICB0aGlzLnNlYXJjaFNlcnZpY2UuZ2V0U3RhdGUkKElOUFVUX1NUQVRFX0NPTlRFWFQpXG4gICAgICAucGlwZShcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveWVkJCksXG4gICAgICAgIGZpbHRlcigoeyBsYXN0VXBkYXRlZCB9KSA9PiB0aGlzLmRhdGFTb3VyY2UuaW5wdXRzRFNbbGFzdFVwZGF0ZWRdKVxuICAgICAgKS5zdWJzY3JpYmUoKHsgbGFzdFVwZGF0ZWQsIHN0YXRlIH0pID0+IHtcbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSBzdGF0ZVtsYXN0VXBkYXRlZF07XG4gICAgICAgIGlmIChuZXdWYWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5jbGVhcklucHV0KGxhc3RVcGRhdGVkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UudXBkYXRlSW5wdXRWYWx1ZShsYXN0VXBkYXRlZCwgbmV3VmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgIC8vIGxpc3RlbmVyIGZvciBmYWNldCB1cGRhdGVzXG4gICAgdGhpcy5zZWFyY2hTZXJ2aWNlLmdldFN0YXRlJChGQUNFVF9TVEFURV9DT05URVhUKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3llZCQpLFxuICAgICAgICBmaWx0ZXIoKHsgbGFzdFVwZGF0ZWQgfSkgPT4gdGhpcy5kYXRhU291cmNlLmlucHV0c0RTW2xhc3RVcGRhdGVkXSlcbiAgICAgICkuc3Vic2NyaWJlKCh7IGxhc3RVcGRhdGVkLCBzdGF0ZSB9KSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0RhdGEgPSBzdGF0ZVtsYXN0VXBkYXRlZF07XG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS51cGRhdGVJbnB1dERhdGEobGFzdFVwZGF0ZWQsIG5ld0RhdGEpO1xuICAgICAgfSk7XG5cbiAgICAvLyBsaXN0ZW5lciBmb3IgZmFjZXQgaGVhZGVyIHVwZGF0ZXNcbiAgICB0aGlzLnNlYXJjaFNlcnZpY2UuZ2V0U3RhdGUkKEZBQ0VUU19SRVFVRVNUX1NUQVRFX0NPTlRFWFQsICdzdWNjZXNzJylcbiAgICAgIC5waXBlKFxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95ZWQkKVxuICAgICAgKS5zdWJzY3JpYmUoKHsgaGVhZGVycyB9KSA9PiB7XG4gICAgICAgIE9iamVjdC5rZXlzKGhlYWRlcnMpLmZvckVhY2goKGlkKSA9PiB7XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZUlucHV0VmFsdWUoaWQsIGhlYWRlcnNbaWRdKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfVxufVxuIl19