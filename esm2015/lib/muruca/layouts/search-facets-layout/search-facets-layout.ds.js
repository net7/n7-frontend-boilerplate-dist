/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Subject } from 'rxjs';
import { LayoutDataSource } from '@n7-frontend/core';
export class SearchFacetsLayoutDS extends LayoutDataSource {
    constructor() {
        super(...arguments);
        this.ready$ = new Subject();
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    onInit(payload) {
        this.data = payload.data;
        this.initInputs();
    }
    /**
     * @return {?}
     */
    onDestroy() {
        // TODO
    }
    /**
     * @return {?}
     */
    initInputs() {
        this.data.sections.forEach((/**
         * @param {?} __0
         * @return {?}
         */
        ({ header, inputs }) => {
            [header, ...inputs].forEach((/**
             * @param {?} input
             * @return {?}
             */
            (input) => {
                // set id
                /** @type {?} */
                const widgetDataSource = this.getWidgetDataSource(input.id);
                widgetDataSource.id = input.id;
                // update data
                this.one(input.id).update(input.data);
            }));
        }));
        // signal
        this.ready$.next();
    }
    /**
     * @param {?} id
     * @param {?} newValue
     * @return {?}
     */
    updateInputValue(id, newValue) {
        /** @type {?} */
        const widgetDataSource = this.getWidgetDataSource(id);
        if (widgetDataSource) {
            widgetDataSource.setValue(newValue, true);
        }
    }
    /**
     * @param {?} id
     * @param {?} newData
     * @return {?}
     */
    updateInputData(id, newData) {
        /** @type {?} */
        const widgetDataSource = this.getWidgetDataSource(id);
        if (widgetDataSource) {
            widgetDataSource.update(Object.assign({}, widgetDataSource.input, newData));
        }
    }
    /**
     * @param {?} id
     * @return {?}
     */
    clearInput(id) {
        /** @type {?} */
        const widgetDataSource = this.getWidgetDataSource(id);
        if (widgetDataSource) {
            widgetDataSource.clear();
            widgetDataSource.setValue(widgetDataSource.value, true);
        }
    }
    /**
     * @return {?}
     */
    clearInputs() {
        this.data.sections.forEach((/**
         * @param {?} __0
         * @return {?}
         */
        ({ header, inputs }) => {
            [header, ...inputs].forEach((/**
             * @param {?} input
             * @return {?}
             */
            (input) => {
                this.clearInput(input.id);
            }));
        }));
    }
}
if (false) {
    /** @type {?} */
    SearchFacetsLayoutDS.prototype.data;
    /** @type {?} */
    SearchFacetsLayoutDS.prototype.ready$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZhY2V0cy1sYXlvdXQuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2xheW91dHMvc2VhcmNoLWZhY2V0cy1sYXlvdXQvc2VhcmNoLWZhY2V0cy1sYXlvdXQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFHckQsTUFBTSxPQUFPLG9CQUFxQixTQUFRLGdCQUFnQjtJQUExRDs7UUFHUyxXQUFNLEdBQWtCLElBQUksT0FBTyxFQUFFLENBQUM7SUEyRC9DLENBQUM7Ozs7O0lBekRDLE1BQU0sQ0FBQyxPQUFPO1FBQ1osSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDO1FBRXpCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDOzs7O0lBRUQsU0FBUztRQUNQLE9BQU87SUFDVCxDQUFDOzs7O0lBRUQsVUFBVTtRQUNSLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU87Ozs7UUFBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUU7WUFDaEQsQ0FBQyxNQUFNLEVBQUUsR0FBRyxNQUFNLENBQUMsQ0FBQyxPQUFPOzs7O1lBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTs7O3NCQUU5QixnQkFBZ0IsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQztnQkFDM0QsZ0JBQWdCLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQyxFQUFFLENBQUM7Z0JBQy9CLGNBQWM7Z0JBQ2QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN4QyxDQUFDLEVBQUMsQ0FBQztRQUNMLENBQUMsRUFBQyxDQUFDO1FBRUgsU0FBUztRQUNULElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDckIsQ0FBQzs7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsRUFBRSxFQUFFLFFBQVE7O2NBQ3JCLGdCQUFnQixHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFLENBQUM7UUFDckQsSUFBSSxnQkFBZ0IsRUFBRTtZQUNwQixnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQzNDO0lBQ0gsQ0FBQzs7Ozs7O0lBRUQsZUFBZSxDQUFDLEVBQUUsRUFBRSxPQUFPOztjQUNuQixnQkFBZ0IsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsRUFBRSxDQUFDO1FBQ3JELElBQUksZ0JBQWdCLEVBQUU7WUFDcEIsZ0JBQWdCLENBQUMsTUFBTSxtQkFDbEIsZ0JBQWdCLENBQUMsS0FBSyxFQUN0QixPQUFPLEVBQ1YsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxVQUFVLENBQUMsRUFBRTs7Y0FDTCxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsRUFBRSxDQUFDO1FBQ3JELElBQUksZ0JBQWdCLEVBQUU7WUFDcEIsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDekIsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztTQUN6RDtJQUNILENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTzs7OztRQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRTtZQUNoRCxDQUFDLE1BQU0sRUFBRSxHQUFHLE1BQU0sQ0FBQyxDQUFDLE9BQU87Ozs7WUFBQyxDQUFDLEtBQUssRUFBRSxFQUFFO2dCQUNwQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUM1QixDQUFDLEVBQUMsQ0FBQztRQUNMLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGOzs7SUE3REMsb0NBQWdDOztJQUVoQyxzQ0FBNkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBMYXlvdXREYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgU2VhcmNoRmFjZXRzQ29uZmlnIH0gZnJvbSAnLi9zZWFyY2gtZmFjZXRzLWNvbmZpZyc7XG5cbmV4cG9ydCBjbGFzcyBTZWFyY2hGYWNldHNMYXlvdXREUyBleHRlbmRzIExheW91dERhdGFTb3VyY2Uge1xuICBwdWJsaWMgZGF0YTogU2VhcmNoRmFjZXRzQ29uZmlnO1xuXG4gIHB1YmxpYyByZWFkeSQ6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdCgpO1xuXG4gIG9uSW5pdChwYXlsb2FkKSB7XG4gICAgdGhpcy5kYXRhID0gcGF5bG9hZC5kYXRhO1xuXG4gICAgdGhpcy5pbml0SW5wdXRzKCk7XG4gIH1cblxuICBvbkRlc3Ryb3koKSB7XG4gICAgLy8gVE9ET1xuICB9XG5cbiAgaW5pdElucHV0cygpIHtcbiAgICB0aGlzLmRhdGEuc2VjdGlvbnMuZm9yRWFjaCgoeyBoZWFkZXIsIGlucHV0cyB9KSA9PiB7XG4gICAgICBbaGVhZGVyLCAuLi5pbnB1dHNdLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgICAgIC8vIHNldCBpZFxuICAgICAgICBjb25zdCB3aWRnZXREYXRhU291cmNlID0gdGhpcy5nZXRXaWRnZXREYXRhU291cmNlKGlucHV0LmlkKTtcbiAgICAgICAgd2lkZ2V0RGF0YVNvdXJjZS5pZCA9IGlucHV0LmlkO1xuICAgICAgICAvLyB1cGRhdGUgZGF0YVxuICAgICAgICB0aGlzLm9uZShpbnB1dC5pZCkudXBkYXRlKGlucHV0LmRhdGEpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvLyBzaWduYWxcbiAgICB0aGlzLnJlYWR5JC5uZXh0KCk7XG4gIH1cblxuICB1cGRhdGVJbnB1dFZhbHVlKGlkLCBuZXdWYWx1ZSkge1xuICAgIGNvbnN0IHdpZGdldERhdGFTb3VyY2UgPSB0aGlzLmdldFdpZGdldERhdGFTb3VyY2UoaWQpO1xuICAgIGlmICh3aWRnZXREYXRhU291cmNlKSB7XG4gICAgICB3aWRnZXREYXRhU291cmNlLnNldFZhbHVlKG5ld1ZhbHVlLCB0cnVlKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVJbnB1dERhdGEoaWQsIG5ld0RhdGEpIHtcbiAgICBjb25zdCB3aWRnZXREYXRhU291cmNlID0gdGhpcy5nZXRXaWRnZXREYXRhU291cmNlKGlkKTtcbiAgICBpZiAod2lkZ2V0RGF0YVNvdXJjZSkge1xuICAgICAgd2lkZ2V0RGF0YVNvdXJjZS51cGRhdGUoe1xuICAgICAgICAuLi53aWRnZXREYXRhU291cmNlLmlucHV0LFxuICAgICAgICAuLi5uZXdEYXRhXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBjbGVhcklucHV0KGlkKSB7XG4gICAgY29uc3Qgd2lkZ2V0RGF0YVNvdXJjZSA9IHRoaXMuZ2V0V2lkZ2V0RGF0YVNvdXJjZShpZCk7XG4gICAgaWYgKHdpZGdldERhdGFTb3VyY2UpIHtcbiAgICAgIHdpZGdldERhdGFTb3VyY2UuY2xlYXIoKTtcbiAgICAgIHdpZGdldERhdGFTb3VyY2Uuc2V0VmFsdWUod2lkZ2V0RGF0YVNvdXJjZS52YWx1ZSwgdHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgY2xlYXJJbnB1dHMoKSB7XG4gICAgdGhpcy5kYXRhLnNlY3Rpb25zLmZvckVhY2goKHsgaGVhZGVyLCBpbnB1dHMgfSkgPT4ge1xuICAgICAgW2hlYWRlciwgLi4uaW5wdXRzXS5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgICAgICB0aGlzLmNsZWFySW5wdXQoaW5wdXQuaWQpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==