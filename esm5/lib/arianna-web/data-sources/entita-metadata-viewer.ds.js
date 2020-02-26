/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/data-sources/entita-metadata-viewer.ds.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DataSource } from '@n7-frontend/core';
import helpers from '../../common/helpers';
var AwEntitaMetadataViewerDS = /** @class */ (function (_super) {
    tslib_1.__extends(AwEntitaMetadataViewerDS, _super);
    function AwEntitaMetadataViewerDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    AwEntitaMetadataViewerDS.prototype.transform = /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    function (data) {
        /*
          Access and use this.options if the rendering
          changes based on context.
        */
        /*
              Access and use this.options if the rendering
              changes based on context.
            */
        var _a = this.options, context = _a.context, labels = _a.labels, config = _a.config;
        labels = labels || {};
        /** @type {?} */
        var unpackedData = [];
        if (context == 'overview' && data) {
            /** @type {?} */
            var configuredKeys_1 = ((config.get('entita-layout') || {}).overview || {}).campi;
            /** @type {?} */
            var filteredData = data.filter((/**
             * @param {?} d
             * @return {?}
             */
            function (d) { return configuredKeys_1.includes(d.key); }));
            unpackedData = AwEntitaMetadataViewerDS.unpackFields(filteredData);
        }
        else {
            unpackedData = AwEntitaMetadataViewerDS.unpackFields(data);
        }
        // prettify labels
        unpackedData.forEach((/**
         * @param {?} section
         * @return {?}
         */
        function (section) {
            section.items
                .filter((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.label; }))
                .forEach((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.label = helpers.prettifySnakeCase(item.label, labels[item.label]); }));
        }));
        return {
            group: unpackedData
        };
    };
    // tslint:disable-next-line: member-ordering
    // tslint:disable-next-line: member-ordering
    /**
     * @param {?} fields
     * @return {?}
     */
    AwEntitaMetadataViewerDS.unpackFields = 
    // tslint:disable-next-line: member-ordering
    /**
     * @param {?} fields
     * @return {?}
     */
    function (fields) {
        /*
              Recursive unpacking for rendering res.fields
              - - -
              This function transforms the response object tree
              into an array, usable by metadata-viewer-component
            */
        /** @type {?} */
        var extracted = [];
        // if the server returns an array of key-value tuples
        if (fields instanceof Array) {
            extracted = fields.map((/**
             * @param {?} el
             * @return {?}
             */
            function (el) {
                return { label: el.key, value: el.value };
            }));
            return [{ items: extracted }];
        }
        if (!fields) {
            return [];
        } // if is empty → quit
        for (var i = 0; i < fields.length; i++) {
            /** @type {?} */
            var thisField = fields[i];
            // rename current field
            /** @type {?} */
            var title = thisField.label;
            // field title
            /** @type {?} */
            var label = thisField.key;
            // item label
            /** @type {?} */
            var value = thisField.value;
            // item value
            /** @type {?} */
            var group = thisField.fields;
            // child group
            /** @type {?} */
            var temp = {};
            if (title) {
                // if there is a title, use it
                temp.title = title;
            }
            if (label && value) {
                // if there are a lable and value, use them
                temp.label = label;
                temp.value = value;
            }
            if (group) {
                // if there is a child group
                if (group[0].key) {
                    // if this group has a tuple of (label, value)
                    temp.items = AwEntitaMetadataViewerDS.unpackFields(group); // make items array
                }
                else {
                    temp.group = AwEntitaMetadataViewerDS.unpackFields(group); // make child group array
                }
            }
            extracted.push(temp); // add this object to the new array
        }
        return extracted;
    };
    return AwEntitaMetadataViewerDS;
}(DataSource));
export { AwEntitaMetadataViewerDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXRhLW1ldGFkYXRhLXZpZXdlci5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvZW50aXRhLW1ldGFkYXRhLXZpZXdlci5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDL0MsT0FBTyxPQUFPLE1BQU0sc0JBQXNCLENBQUM7QUFFM0M7SUFBOEMsb0RBQVU7SUFBeEQ7O0lBNEVBLENBQUM7Ozs7OztJQTNFVyw0Q0FBUzs7Ozs7SUFBbkIsVUFBb0IsSUFBSTtRQUN0Qjs7O1VBR0U7Ozs7O1FBRUUsSUFBQSxpQkFBMEMsRUFBeEMsb0JBQU8sRUFBRSxrQkFBTSxFQUFFLGtCQUF1QjtRQUM5QyxNQUFNLEdBQUcsTUFBTSxJQUFJLEVBQUUsQ0FBQzs7WUFFbEIsWUFBWSxHQUFHLEVBQUU7UUFDckIsSUFBSSxPQUFPLElBQUksVUFBVSxJQUFJLElBQUksRUFBRTs7Z0JBQzdCLGdCQUFjLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUs7O2dCQUMzRSxZQUFZLEdBQUcsSUFBSSxDQUFDLE1BQU07Ozs7WUFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLGdCQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBOUIsQ0FBOEIsRUFBQztZQUNuRSxZQUFZLEdBQUcsd0JBQXdCLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxDQUFBO1NBQ25FO2FBQU07WUFDTCxZQUFZLEdBQUcsd0JBQXdCLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzVEO1FBQ0Qsa0JBQWtCO1FBQ2xCLFlBQVksQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQSxPQUFPO1lBQzFCLE9BQU8sQ0FBQyxLQUFLO2lCQUNWLE1BQU07Ozs7WUFBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxLQUFLLEVBQVYsQ0FBVSxFQUFDO2lCQUMxQixPQUFPOzs7O1lBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBdEUsQ0FBc0UsRUFBQyxDQUFDO1FBQzdGLENBQUMsRUFBQyxDQUFDO1FBQ0gsT0FBTztZQUNMLEtBQUssRUFBRSxZQUFZO1NBQ3BCLENBQUM7SUFDSixDQUFDO0lBRUQsNENBQTRDOzs7Ozs7SUFDckMscUNBQVk7Ozs7OztJQUFuQixVQUFvQixNQUFNOzs7Ozs7OztZQU9wQixTQUFTLEdBQUcsRUFBRTtRQUNsQixxREFBcUQ7UUFDckQsSUFBSSxNQUFNLFlBQVksS0FBSyxFQUFFO1lBQzNCLFNBQVMsR0FBRyxNQUFNLENBQUMsR0FBRzs7OztZQUFDLFVBQUEsRUFBRTtnQkFDdkIsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDNUMsQ0FBQyxFQUFDLENBQUM7WUFDSCxPQUFPLENBQUMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztTQUMvQjtRQUNELElBQUksQ0FBQyxNQUFNLEVBQUU7WUFBRSxPQUFPLEVBQUUsQ0FBQztTQUFFLENBQUMscUJBQXFCO1FBQ2pELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFOztnQkFDaEMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUM7OztnQkFDckIsS0FBSyxHQUFHLFNBQVMsQ0FBQyxLQUFLOzs7Z0JBQ3ZCLEtBQUssR0FBRyxTQUFTLENBQUMsR0FBRzs7O2dCQUNyQixLQUFLLEdBQUcsU0FBUyxDQUFDLEtBQUs7OztnQkFDdkIsS0FBSyxHQUFHLFNBQVMsQ0FBQyxNQUFNOzs7Z0JBQ3hCLElBQUksR0FBUSxFQUFFO1lBRXBCLElBQUksS0FBSyxFQUFFO2dCQUNULDhCQUE4QjtnQkFDOUIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7YUFDcEI7WUFDRCxJQUFJLEtBQUssSUFBSSxLQUFLLEVBQUU7Z0JBQ2xCLDJDQUEyQztnQkFDM0MsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7Z0JBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO2FBQ3BCO1lBQ0QsSUFBSSxLQUFLLEVBQUU7Z0JBQ1QsNEJBQTRCO2dCQUM1QixJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUU7b0JBQ2hCLDhDQUE4QztvQkFDOUMsSUFBSSxDQUFDLEtBQUssR0FBRyx3QkFBd0IsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxtQkFBbUI7aUJBQy9FO3FCQUFNO29CQUNMLElBQUksQ0FBQyxLQUFLLEdBQUcsd0JBQXdCLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMseUJBQXlCO2lCQUNyRjthQUNGO1lBQ0QsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLG1DQUFtQztTQUMxRDtRQUNELE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7SUFDSCwrQkFBQztBQUFELENBQUMsQUE1RUQsQ0FBOEMsVUFBVSxHQTRFdkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IGhlbHBlcnMgZnJvbSAnLi4vLi4vY29tbW9uL2hlbHBlcnMnO1xuXG5leHBvcnQgY2xhc3MgQXdFbnRpdGFNZXRhZGF0YVZpZXdlckRTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSkge1xuICAgIC8qXG4gICAgICBBY2Nlc3MgYW5kIHVzZSB0aGlzLm9wdGlvbnMgaWYgdGhlIHJlbmRlcmluZ1xuICAgICAgY2hhbmdlcyBiYXNlZCBvbiBjb250ZXh0LlxuICAgICovXG5cbiAgICBsZXQgeyBjb250ZXh0LCBsYWJlbHMsIGNvbmZpZyB9ID0gdGhpcy5vcHRpb25zO1xuICAgIGxhYmVscyA9IGxhYmVscyB8fCB7fTtcblxuICAgIGxldCB1bnBhY2tlZERhdGEgPSBbXVxuICAgIGlmIChjb250ZXh0ID09ICdvdmVydmlldycgJiYgZGF0YSkge1xuICAgICAgbGV0IGNvbmZpZ3VyZWRLZXlzID0gKChjb25maWcuZ2V0KCdlbnRpdGEtbGF5b3V0JykgfHwge30pLm92ZXJ2aWV3IHx8IHt9KS5jYW1waVxuICAgICAgbGV0IGZpbHRlcmVkRGF0YSA9IGRhdGEuZmlsdGVyKGQgPT4gY29uZmlndXJlZEtleXMuaW5jbHVkZXMoZC5rZXkpKVxuICAgICAgdW5wYWNrZWREYXRhID0gQXdFbnRpdGFNZXRhZGF0YVZpZXdlckRTLnVucGFja0ZpZWxkcyhmaWx0ZXJlZERhdGEpXG4gICAgfSBlbHNlIHtcbiAgICAgIHVucGFja2VkRGF0YSA9IEF3RW50aXRhTWV0YWRhdGFWaWV3ZXJEUy51bnBhY2tGaWVsZHMoZGF0YSk7XG4gICAgfVxuICAgIC8vIHByZXR0aWZ5IGxhYmVsc1xuICAgIHVucGFja2VkRGF0YS5mb3JFYWNoKHNlY3Rpb24gPT4ge1xuICAgICAgc2VjdGlvbi5pdGVtc1xuICAgICAgICAuZmlsdGVyKGl0ZW0gPT4gaXRlbS5sYWJlbClcbiAgICAgICAgLmZvckVhY2goaXRlbSA9PiBpdGVtLmxhYmVsID0gaGVscGVycy5wcmV0dGlmeVNuYWtlQ2FzZShpdGVtLmxhYmVsLCBsYWJlbHNbaXRlbS5sYWJlbF0pKTtcbiAgICB9KTtcbiAgICByZXR1cm4ge1xuICAgICAgZ3JvdXA6IHVucGFja2VkRGF0YVxuICAgIH07XG4gIH1cblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xuICBzdGF0aWMgdW5wYWNrRmllbGRzKGZpZWxkcykge1xuICAgIC8qXG4gICAgICBSZWN1cnNpdmUgdW5wYWNraW5nIGZvciByZW5kZXJpbmcgcmVzLmZpZWxkc1xuICAgICAgLSAtIC1cbiAgICAgIFRoaXMgZnVuY3Rpb24gdHJhbnNmb3JtcyB0aGUgcmVzcG9uc2Ugb2JqZWN0IHRyZWVcbiAgICAgIGludG8gYW4gYXJyYXksIHVzYWJsZSBieSBtZXRhZGF0YS12aWV3ZXItY29tcG9uZW50XG4gICAgKi9cbiAgICBsZXQgZXh0cmFjdGVkID0gW107IC8vIGhvbGRzIHRyYW5zZm9ybWVkIG9iamVjdFxuICAgIC8vIGlmIHRoZSBzZXJ2ZXIgcmV0dXJucyBhbiBhcnJheSBvZiBrZXktdmFsdWUgdHVwbGVzXG4gICAgaWYgKGZpZWxkcyBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICBleHRyYWN0ZWQgPSBmaWVsZHMubWFwKGVsID0+IHtcbiAgICAgICAgcmV0dXJuIHsgbGFiZWw6IGVsLmtleSwgdmFsdWU6IGVsLnZhbHVlIH07XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBbeyBpdGVtczogZXh0cmFjdGVkIH1dO1xuICAgIH1cbiAgICBpZiAoIWZpZWxkcykgeyByZXR1cm4gW107IH0gLy8gaWYgaXMgZW1wdHkg4oaSIHF1aXRcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpZWxkcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgdGhpc0ZpZWxkID0gZmllbGRzW2ldOyAvLyByZW5hbWUgY3VycmVudCBmaWVsZFxuICAgICAgY29uc3QgdGl0bGUgPSB0aGlzRmllbGQubGFiZWw7IC8vIGZpZWxkIHRpdGxlXG4gICAgICBjb25zdCBsYWJlbCA9IHRoaXNGaWVsZC5rZXk7IC8vIGl0ZW0gbGFiZWxcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpc0ZpZWxkLnZhbHVlOyAvLyBpdGVtIHZhbHVlXG4gICAgICBjb25zdCBncm91cCA9IHRoaXNGaWVsZC5maWVsZHM7IC8vIGNoaWxkIGdyb3VwXG4gICAgICBjb25zdCB0ZW1wOiBhbnkgPSB7fTsgLy8gdGVtcG9yYXJ5IG9iamVjdFxuXG4gICAgICBpZiAodGl0bGUpIHtcbiAgICAgICAgLy8gaWYgdGhlcmUgaXMgYSB0aXRsZSwgdXNlIGl0XG4gICAgICAgIHRlbXAudGl0bGUgPSB0aXRsZTtcbiAgICAgIH1cbiAgICAgIGlmIChsYWJlbCAmJiB2YWx1ZSkge1xuICAgICAgICAvLyBpZiB0aGVyZSBhcmUgYSBsYWJsZSBhbmQgdmFsdWUsIHVzZSB0aGVtXG4gICAgICAgIHRlbXAubGFiZWwgPSBsYWJlbDtcbiAgICAgICAgdGVtcC52YWx1ZSA9IHZhbHVlO1xuICAgICAgfVxuICAgICAgaWYgKGdyb3VwKSB7XG4gICAgICAgIC8vIGlmIHRoZXJlIGlzIGEgY2hpbGQgZ3JvdXBcbiAgICAgICAgaWYgKGdyb3VwWzBdLmtleSkge1xuICAgICAgICAgIC8vIGlmIHRoaXMgZ3JvdXAgaGFzIGEgdHVwbGUgb2YgKGxhYmVsLCB2YWx1ZSlcbiAgICAgICAgICB0ZW1wLml0ZW1zID0gQXdFbnRpdGFNZXRhZGF0YVZpZXdlckRTLnVucGFja0ZpZWxkcyhncm91cCk7IC8vIG1ha2UgaXRlbXMgYXJyYXlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0ZW1wLmdyb3VwID0gQXdFbnRpdGFNZXRhZGF0YVZpZXdlckRTLnVucGFja0ZpZWxkcyhncm91cCk7IC8vIG1ha2UgY2hpbGQgZ3JvdXAgYXJyYXlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZXh0cmFjdGVkLnB1c2godGVtcCk7IC8vIGFkZCB0aGlzIG9iamVjdCB0byB0aGUgbmV3IGFycmF5XG4gICAgfVxuICAgIHJldHVybiBleHRyYWN0ZWQ7XG4gIH1cbn1cbiJdfQ==