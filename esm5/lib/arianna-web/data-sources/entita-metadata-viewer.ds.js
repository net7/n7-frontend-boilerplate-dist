/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DataSource } from '@n7-frontend/core';
import { get as _get } from 'lodash';
import helpers from '../../common/helpers';
var AwEntitaMetadataViewerDS = /** @class */ (function (_super) {
    tslib_1.__extends(AwEntitaMetadataViewerDS, _super);
    function AwEntitaMetadataViewerDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hasGroups = false;
        return _this;
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
        var _a = this.options, context = _a.context, config = _a.config, typeOfEntity = _a.typeOfEntity;
        /** @type {?} */
        var labels = this.options.labels || {};
        /** @type {?} */
        var metadataToShow = (config.get('entita-layout') || {})['metadata-to-show'];
        /** @type {?} */
        var unpackedData = [];
        if (context === 'overview' && data) {
            /** @type {?} */
            var configuredKeys_1 = _get(config.get('entita-layout'), 'overview.campi', []);
            /** @type {?} */
            var filteredData = data.filter((/**
             * @param {?} d
             * @return {?}
             */
            function (d) { return configuredKeys_1.includes(d.key); }));
            unpackedData = AwEntitaMetadataViewerDS.unpackFields(filteredData, metadataToShow);
        }
        else {
            unpackedData = AwEntitaMetadataViewerDS.unpackFields(data, metadataToShow);
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
            function (item) {
                item.label = helpers.prettifySnakeCase(item.label, labels[typeOfEntity + "." + item.label]);
            }));
        }));
        this.hasGroups = Array.isArray(unpackedData) && !!unpackedData.length;
        return {
            group: unpackedData,
        };
    };
    /**
     * @param {?} fields
     * @param {?=} metadataToShow
     * @return {?}
     */
    AwEntitaMetadataViewerDS.unpackFields = /**
     * @param {?} fields
     * @param {?=} metadataToShow
     * @return {?}
     */
    function (fields, metadataToShow) {
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
            extracted = fields
                .filter((/**
             * @param {?} el
             * @return {?}
             */
            function (el) {
                if (Array.isArray(metadataToShow) && metadataToShow.length) {
                    return metadataToShow.indexOf(el.key) !== -1;
                }
                return false;
            }))
                .map((/**
             * @param {?} el
             * @return {?}
             */
            function (el) { return ({ label: el.key, value: el.value, order: metadataToShow.indexOf(el.key) }); }));
            // sort by order (metadata-to-show configuration order)
            extracted.sort((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            function (a, b) { return a.order - b.order; }));
            if (extracted.length) {
                return [{ items: extracted }];
            }
            return [];
        }
        if (!fields) {
            return [];
        } // if is empty → quit
        for (var i = 0; i < fields.length; i += 1) {
            /** @type {?} */
            var thisField = fields[i];
            // rename current field
            /** @type {?} */
            var title = thisField.label;
            // field title
            /** @type {?} */
            var label = thisField.key;
            // item label
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
if (false) {
    /** @type {?} */
    AwEntitaMetadataViewerDS.prototype.hasGroups;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXRhLW1ldGFkYXRhLXZpZXdlci5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvZW50aXRhLW1ldGFkYXRhLXZpZXdlci5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsR0FBRyxJQUFJLElBQUksRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUNyQyxPQUFPLE9BQU8sTUFBTSxzQkFBc0IsQ0FBQztBQUUzQztJQUE4QyxvREFBVTtJQUF4RDtRQUFBLHFFQThGQztRQTdGUSxlQUFTLEdBQUcsS0FBSyxDQUFDOztJQTZGM0IsQ0FBQzs7Ozs7O0lBM0ZXLDRDQUFTOzs7OztJQUFuQixVQUFvQixJQUFJO1FBQ3RCOzs7VUFHRTs7Ozs7UUFFSSxJQUFBLGlCQUFnRCxFQUE5QyxvQkFBTyxFQUFFLGtCQUFNLEVBQUUsOEJBQTZCOztZQUNoRCxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLElBQUksRUFBRTs7WUFDbEMsY0FBYyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQzs7WUFFMUUsWUFBWSxHQUFHLEVBQUU7UUFDckIsSUFBSSxPQUFPLEtBQUssVUFBVSxJQUFJLElBQUksRUFBRTs7Z0JBQzVCLGdCQUFjLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLEVBQUUsZ0JBQWdCLEVBQUUsRUFBRSxDQUFDOztnQkFDeEUsWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNOzs7O1lBQUMsVUFBQyxDQUFDLElBQUssT0FBQSxnQkFBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQTlCLENB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QUssQ0FBQzthQUNwQjtZQUNELElBQUksS0FBSyxJQUFJLEtBQUssRUFBRTtnQkFDbEIsMkNBQTJDO2dCQUMzQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztnQkFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7YUFDcEI7WUFDRCxJQUFJLEtBQUssRUFBRTtnQkFDVCw0QkFBNEI7Z0JBQzVCLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRTtvQkFDaEIsOENBQThDO29CQUM5QyxJQUFJLENBQUMsS0FBSyxHQUFHLHdCQUF3QixDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLG1CQUFtQjtpQkFDL0U7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLEtBQUssR0FBRyx3QkFBd0IsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyx5QkFBeUI7aUJBQ3JGO2FBQ0Y7WUFDRCxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsbUNBQW1DO1NBQzFEO1FBQ0QsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQztJQUNILCtCQUFDO0FBQUQsQ0FBQyxBQTlGRCxDQUE4QyxVQUFVLEdBOEZ2RDs7OztJQTdGQyw2Q0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgZ2V0IGFzIF9nZXQgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IGhlbHBlcnMgZnJvbSAnLi4vLi4vY29tbW9uL2hlbHBlcnMnO1xuXG5leHBvcnQgY2xhc3MgQXdFbnRpdGFNZXRhZGF0YVZpZXdlckRTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG4gIHB1YmxpYyBoYXNHcm91cHMgPSBmYWxzZTtcblxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpIHtcbiAgICAvKlxuICAgICAgQWNjZXNzIGFuZCB1c2UgdGhpcy5vcHRpb25zIGlmIHRoZSByZW5kZXJpbmdcbiAgICAgIGNoYW5nZXMgYmFzZWQgb24gY29udGV4dC5cbiAgICAqL1xuXG4gICAgY29uc3QgeyBjb250ZXh0LCBjb25maWcsIHR5cGVPZkVudGl0eSB9ID0gdGhpcy5vcHRpb25zO1xuICAgIGNvbnN0IGxhYmVscyA9IHRoaXMub3B0aW9ucy5sYWJlbHMgfHwge307XG4gICAgY29uc3QgbWV0YWRhdGFUb1Nob3cgPSAoY29uZmlnLmdldCgnZW50aXRhLWxheW91dCcpIHx8IHt9KVsnbWV0YWRhdGEtdG8tc2hvdyddO1xuXG4gICAgbGV0IHVucGFja2VkRGF0YSA9IFtdO1xuICAgIGlmIChjb250ZXh0ID09PSAnb3ZlcnZpZXcnICYmIGRhdGEpIHtcbiAgICAgIGNvbnN0IGNvbmZpZ3VyZWRLZXlzID0gX2dldChjb25maWcuZ2V0KCdlbnRpdGEtbGF5b3V0JyksICdvdmVydmlldy5jYW1waScsIFtdKTtcbiAgICAgIGNvbnN0IGZpbHRlcmVkRGF0YSA9IGRhdGEuZmlsdGVyKChkKSA9PiBjb25maWd1cmVkS2V5cy5pbmNsdWRlcyhkLmtleSkpO1xuICAgICAgdW5wYWNrZWREYXRhID0gQXdFbnRpdGFNZXRhZGF0YVZpZXdlckRTLnVucGFja0ZpZWxkcyhmaWx0ZXJlZERhdGEsIG1ldGFkYXRhVG9TaG93KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdW5wYWNrZWREYXRhID0gQXdFbnRpdGFNZXRhZGF0YVZpZXdlckRTLnVucGFja0ZpZWxkcyhkYXRhLCBtZXRhZGF0YVRvU2hvdyk7XG4gICAgfVxuICAgIC8vIHByZXR0aWZ5IGxhYmVsc1xuICAgIHVucGFja2VkRGF0YS5mb3JFYWNoKChzZWN0aW9uKSA9PiB7XG4gICAgICBzZWN0aW9uLml0ZW1zXG4gICAgICAgIC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0ubGFiZWwpXG4gICAgICAgIC5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgaXRlbS5sYWJlbCA9IGhlbHBlcnMucHJldHRpZnlTbmFrZUNhc2UoaXRlbS5sYWJlbCwgbGFiZWxzW2Ake3R5cGVPZkVudGl0eX0uJHtpdGVtLmxhYmVsfWBdKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmhhc0dyb3VwcyA9IEFycmF5LmlzQXJyYXkodW5wYWNrZWREYXRhKSAmJiAhIXVucGFja2VkRGF0YS5sZW5ndGg7XG5cbiAgICByZXR1cm4ge1xuICAgICAgZ3JvdXA6IHVucGFja2VkRGF0YSxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIHVucGFja0ZpZWxkcyhmaWVsZHMsIG1ldGFkYXRhVG9TaG93Pykge1xuICAgIC8qXG4gICAgICBSZWN1cnNpdmUgdW5wYWNraW5nIGZvciByZW5kZXJpbmcgcmVzLmZpZWxkc1xuICAgICAgLSAtIC1cbiAgICAgIFRoaXMgZnVuY3Rpb24gdHJhbnNmb3JtcyB0aGUgcmVzcG9uc2Ugb2JqZWN0IHRyZWVcbiAgICAgIGludG8gYW4gYXJyYXksIHVzYWJsZSBieSBtZXRhZGF0YS12aWV3ZXItY29tcG9uZW50XG4gICAgKi9cbiAgICBsZXQgZXh0cmFjdGVkID0gW107IC8vIGhvbGRzIHRyYW5zZm9ybWVkIG9iamVjdFxuICAgIC8vIGlmIHRoZSBzZXJ2ZXIgcmV0dXJucyBhbiBhcnJheSBvZiBrZXktdmFsdWUgdHVwbGVzXG4gICAgaWYgKGZpZWxkcyBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICBleHRyYWN0ZWQgPSBmaWVsZHNcbiAgICAgICAgLmZpbHRlcigoZWwpID0+IHtcbiAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShtZXRhZGF0YVRvU2hvdykgJiYgbWV0YWRhdGFUb1Nob3cubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gbWV0YWRhdGFUb1Nob3cuaW5kZXhPZihlbC5rZXkpICE9PSAtMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KVxuICAgICAgICAubWFwKChlbCkgPT4gKHsgbGFiZWw6IGVsLmtleSwgdmFsdWU6IGVsLnZhbHVlLCBvcmRlcjogbWV0YWRhdGFUb1Nob3cuaW5kZXhPZihlbC5rZXkpIH0pKTtcblxuICAgICAgLy8gc29ydCBieSBvcmRlciAobWV0YWRhdGEtdG8tc2hvdyBjb25maWd1cmF0aW9uIG9yZGVyKVxuICAgICAgZXh0cmFjdGVkLnNvcnQoKGEsIGIpID0+IGEub3JkZXIgLSBiLm9yZGVyKTtcbiAgICAgIGlmIChleHRyYWN0ZWQubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBbeyBpdGVtczogZXh0cmFjdGVkIH1dO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICBpZiAoIWZpZWxkcykgeyByZXR1cm4gW107IH0gLy8gaWYgaXMgZW1wdHkg4oaSIHF1aXRcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpZWxkcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgdGhpc0ZpZWxkID0gZmllbGRzW2ldOyAvLyByZW5hbWUgY3VycmVudCBmaWVsZFxuICAgICAgY29uc3QgdGl0bGUgPSB0aGlzRmllbGQubGFiZWw7IC8vIGZpZWxkIHRpdGxlXG4gICAgICBjb25zdCBsYWJlbCA9IHRoaXNGaWVsZC5rZXk7IC8vIGl0ZW0gbGFiZWxcbiAgICAgIGNvbnN0IHsgdmFsdWUgfSA9IHRoaXNGaWVsZDsgLy8gaXRlbSB2YWx1ZVxuICAgICAgY29uc3QgZ3JvdXAgPSB0aGlzRmllbGQuZmllbGRzOyAvLyBjaGlsZCBncm91cFxuICAgICAgY29uc3QgdGVtcDogYW55ID0ge307IC8vIHRlbXBvcmFyeSBvYmplY3RcblxuICAgICAgaWYgKHRpdGxlKSB7XG4gICAgICAgIC8vIGlmIHRoZXJlIGlzIGEgdGl0bGUsIHVzZSBpdFxuICAgICAgICB0ZW1wLnRpdGxlID0gdGl0bGU7XG4gICAgICB9XG4gICAgICBpZiAobGFiZWwgJiYgdmFsdWUpIHtcbiAgICAgICAgLy8gaWYgdGhlcmUgYXJlIGEgbGFibGUgYW5kIHZhbHVlLCB1c2UgdGhlbVxuICAgICAgICB0ZW1wLmxhYmVsID0gbGFiZWw7XG4gICAgICAgIHRlbXAudmFsdWUgPSB2YWx1ZTtcbiAgICAgIH1cbiAgICAgIGlmIChncm91cCkge1xuICAgICAgICAvLyBpZiB0aGVyZSBpcyBhIGNoaWxkIGdyb3VwXG4gICAgICAgIGlmIChncm91cFswXS5rZXkpIHtcbiAgICAgICAgICAvLyBpZiB0aGlzIGdyb3VwIGhhcyBhIHR1cGxlIG9mIChsYWJlbCwgdmFsdWUpXG4gICAgICAgICAgdGVtcC5pdGVtcyA9IEF3RW50aXRhTWV0YWRhdGFWaWV3ZXJEUy51bnBhY2tGaWVsZHMoZ3JvdXApOyAvLyBtYWtlIGl0ZW1zIGFycmF5XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGVtcC5ncm91cCA9IEF3RW50aXRhTWV0YWRhdGFWaWV3ZXJEUy51bnBhY2tGaWVsZHMoZ3JvdXApOyAvLyBtYWtlIGNoaWxkIGdyb3VwIGFycmF5XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGV4dHJhY3RlZC5wdXNoKHRlbXApOyAvLyBhZGQgdGhpcyBvYmplY3QgdG8gdGhlIG5ldyBhcnJheVxuICAgIH1cbiAgICByZXR1cm4gZXh0cmFjdGVkO1xuICB9XG59XG4iXX0=