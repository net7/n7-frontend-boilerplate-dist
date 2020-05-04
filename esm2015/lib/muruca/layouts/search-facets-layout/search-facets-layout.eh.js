/**
 * @fileoverview added by tsickle
 * Generated from: lib/muruca/layouts/search-facets-layout/search-facets-layout.eh.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventHandler } from '@n7-frontend/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
/**
 * @record
 */
function ChangedSubjects() { }
export class SearchFacetsLayoutEH extends EventHandler {
    constructor() {
        super(...arguments);
        this.changed$ = {};
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
                    this.dataSource.onInit(payload);
                    this.initChangedListener(payload.data);
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
            section.inputs.forEach((/**
             * @param {?} input
             * @return {?}
             */
            (input) => {
                this.changed$[input.id] = new Subject();
                this.changed$[input.id].pipe(debounceTime(input.delay || 1)).subscribe((/**
                 * @param {?} payload
                 * @return {?}
                 */
                (payload) => {
                    console.warn('#todo', payload);
                }));
            }));
        }));
    }
}
if (false) {
    /** @type {?} */
    SearchFacetsLayoutEH.prototype.changed$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZhY2V0cy1sYXlvdXQuZWguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2xheW91dHMvc2VhcmNoLWZhY2V0cy1sYXlvdXQvc2VhcmNoLWZhY2V0cy1sYXlvdXQuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFHOUMsOEJBRUM7QUFFRCxNQUFNLE9BQU8sb0JBQXFCLFNBQVEsWUFBWTtJQUF0RDs7UUFDRSxhQUFRLEdBQW9CLEVBQUUsQ0FBQztJQXFDakMsQ0FBQzs7OztJQW5DUSxNQUFNO1FBQ1gsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO1lBQ2hELFFBQVEsSUFBSSxFQUFFO2dCQUNaLEtBQUssOEJBQThCO29CQUNqQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDaEMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDdkMsTUFBTTtnQkFFUixLQUFLLGlDQUFpQztvQkFDcEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztvQkFDNUIsTUFBTTtnQkFDUjtvQkFDRSxNQUFNO2FBQ1Q7UUFDSCxDQUFDLEVBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUzs7OztRQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtZQUNoRCxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQzFCLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUN6QztRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCxtQkFBbUIsQ0FBQyxJQUF3QjtRQUMxQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU87Ozs7UUFBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQ2hDLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTzs7OztZQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7Z0JBQy9CLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7Z0JBQ3hDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FDMUIsWUFBWSxDQUFDLEtBQUssQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQy9CLENBQUMsU0FBUzs7OztnQkFBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO29CQUN0QixPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztnQkFDakMsQ0FBQyxFQUFDLENBQUM7WUFDTCxDQUFDLEVBQUMsQ0FBQztRQUNMLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGOzs7SUFyQ0Msd0NBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgU2VhcmNoRmFjZXRzQ29uZmlnIH0gZnJvbSAnLi9zZWFyY2gtZmFjZXRzLWNvbmZpZyc7XG5cbmludGVyZmFjZSBDaGFuZ2VkU3ViamVjdHMge1xuICBba2V5OiBzdHJpbmddOiBTdWJqZWN0PGFueT47XG59XG5cbmV4cG9ydCBjbGFzcyBTZWFyY2hGYWNldHNMYXlvdXRFSCBleHRlbmRzIEV2ZW50SGFuZGxlciB7XG4gIGNoYW5nZWQkOiBDaGFuZ2VkU3ViamVjdHMgPSB7fTtcblxuICBwdWJsaWMgbGlzdGVuKCkge1xuICAgIHRoaXMuaW5uZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdtci1zZWFyY2gtZmFjZXRzLWxheW91dC5pbml0JzpcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25Jbml0KHBheWxvYWQpO1xuICAgICAgICAgIHRoaXMuaW5pdENoYW5nZWRMaXN0ZW5lcihwYXlsb2FkLmRhdGEpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ21yLXNlYXJjaC1mYWNldHMtbGF5b3V0LmRlc3Ryb3knOlxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vbkRlc3Ryb3koKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMub3V0ZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICAgIGlmICh0eXBlLmluZGV4T2YoJ2NoYW5nZScpKSB7XG4gICAgICAgIHRoaXMuY2hhbmdlZCRbcGF5bG9hZC5pZF0ubmV4dChwYXlsb2FkKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGluaXRDaGFuZ2VkTGlzdGVuZXIoZGF0YTogU2VhcmNoRmFjZXRzQ29uZmlnKSB7XG4gICAgZGF0YS5zZWN0aW9ucy5mb3JFYWNoKChzZWN0aW9uKSA9PiB7XG4gICAgICBzZWN0aW9uLmlucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgICAgICB0aGlzLmNoYW5nZWQkW2lucHV0LmlkXSA9IG5ldyBTdWJqZWN0KCk7XG4gICAgICAgIHRoaXMuY2hhbmdlZCRbaW5wdXQuaWRdLnBpcGUoXG4gICAgICAgICAgZGVib3VuY2VUaW1lKGlucHV0LmRlbGF5IHx8IDEpXG4gICAgICAgICkuc3Vic2NyaWJlKChwYXlsb2FkKSA9PiB7XG4gICAgICAgICAgY29uc29sZS53YXJuKCcjdG9kbycsIHBheWxvYWQpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG4iXX0=