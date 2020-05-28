/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataSource } from '@n7-frontend/core';
import { get as _get } from 'lodash';
import helpers from '../../common/helpers';
export class AwEntitaMetadataViewerDS extends DataSource {
    constructor() {
        super(...arguments);
        this.hasGroups = false;
    }
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    transform(data) {
        /*
          Access and use this.options if the rendering
          changes based on context.
        */
        /*
              Access and use this.options if the rendering
              changes based on context.
            */
        const { context, config, typeOfEntity } = this.options;
        /** @type {?} */
        const labels = this.options.labels || {};
        /** @type {?} */
        const metadataToShow = (config.get('entita-layout') || {})['metadata-to-show'];
        /** @type {?} */
        let unpackedData = [];
        if (context === 'overview' && data) {
            /** @type {?} */
            const configuredKeys = _get(config.get('entita-layout'), 'overview.campi', []);
            /** @type {?} */
            const filteredData = data.filter((/**
             * @param {?} d
             * @return {?}
             */
            (d) => configuredKeys.includes(d.key)));
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
        (section) => {
            section.items
                .filter((/**
             * @param {?} item
             * @return {?}
             */
            (item) => item.label))
                .forEach((/**
             * @param {?} item
             * @return {?}
             */
            (item) => {
                item.label = helpers.prettifySnakeCase(item.label, labels[`${typeOfEntity}.${item.label}`]);
            }));
        }));
        this.hasGroups = Array.isArray(unpackedData) && !!unpackedData.length;
        return {
            group: unpackedData,
        };
    }
    /**
     * @param {?} fields
     * @param {?=} metadataToShow
     * @return {?}
     */
    static unpackFields(fields, metadataToShow) {
        /*
              Recursive unpacking for rendering res.fields
              - - -
              This function transforms the response object tree
              into an array, usable by metadata-viewer-component
            */
        /** @type {?} */
        let extracted = [];
        // if the server returns an array of key-value tuples
        if (fields instanceof Array) {
            extracted = fields
                .filter((/**
             * @param {?} el
             * @return {?}
             */
            (el) => {
                if (Array.isArray(metadataToShow) && metadataToShow.length) {
                    return metadataToShow.indexOf(el.key) !== -1;
                }
                return false;
            }))
                .map((/**
             * @param {?} el
             * @return {?}
             */
            (el) => ({ label: el.key, value: el.value, order: metadataToShow.indexOf(el.key) })));
            // sort by order (metadata-to-show configuration order)
            extracted.sort((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            (a, b) => a.order - b.order));
            if (extracted.length) {
                return [{ items: extracted }];
            }
            return [];
        }
        if (!fields) {
            return [];
        } // if is empty → quit
        for (let i = 0; i < fields.length; i += 1) {
            /** @type {?} */
            const thisField = fields[i];
            // rename current field
            /** @type {?} */
            const title = thisField.label;
            // field title
            /** @type {?} */
            const label = thisField.key;
            // item label
            const { value } = thisField;
            // item value
            /** @type {?} */
            const group = thisField.fields;
            // child group
            /** @type {?} */
            const temp = {};
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
    }
}
if (false) {
    /** @type {?} */
    AwEntitaMetadataViewerDS.prototype.hasGroups;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXRhLW1ldGFkYXRhLXZpZXdlci5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvZW50aXRhLW1ldGFkYXRhLXZpZXdlci5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxHQUFHLElBQUksSUFBSSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQ3JDLE9BQU8sT0FBTyxNQUFNLHNCQUFzQixDQUFDO0FBRTNDLE1BQU0sT0FBTyx3QkFBeUIsU0FBUSxVQUFVO0lBQXhEOztRQUNTLGNBQVMsR0FBRyxLQUFLLENBQUM7SUE2RjNCLENBQUM7Ozs7OztJQTNGVyxTQUFTLENBQUMsSUFBSTtRQUN0Qjs7O1VBR0U7Ozs7O2NBRUksRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPOztjQUNoRCxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLElBQUksRUFBRTs7Y0FDbEMsY0FBYyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQzs7WUFFMUUsWUFBWSxHQUFHLEVBQUU7UUFDckIsSUFBSSxPQUFPLEtBQUssVUFBVSxJQUFJLElBQUksRUFBRTs7a0JBQzVCLGNBQWMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsRUFBRSxnQkFBZ0IsRUFBRSxFQUFFLENBQUM7O2tCQUN4RSxZQUFZLEdBQUcsSUFBSSxDQUFDLE1BQU07Ozs7WUFBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUM7WUFD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QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQzthQUNwQjtZQUNELElBQUksS0FBSyxJQUFJLEtBQUssRUFBRTtnQkFDbEIsMkNBQTJDO2dCQUMzQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztnQkFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7YUFDcEI7WUFDRCxJQUFJLEtBQUssRUFBRTtnQkFDVCw0QkFBNEI7Z0JBQzVCLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRTtvQkFDaEIsOENBQThDO29CQUM5QyxJQUFJLENBQUMsS0FBSyxHQUFHLHdCQUF3QixDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLG1CQUFtQjtpQkFDL0U7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLEtBQUssR0FBRyx3QkFBd0IsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyx5QkFBeUI7aUJBQ3JGO2FBQ0Y7WUFDRCxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsbUNBQW1DO1NBQzFEO1FBQ0QsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQztDQUNGOzs7SUE3RkMsNkNBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IGdldCBhcyBfZ2V0IH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBoZWxwZXJzIGZyb20gJy4uLy4uL2NvbW1vbi9oZWxwZXJzJztcblxuZXhwb3J0IGNsYXNzIEF3RW50aXRhTWV0YWRhdGFWaWV3ZXJEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuICBwdWJsaWMgaGFzR3JvdXBzID0gZmFsc2U7XG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKSB7XG4gICAgLypcbiAgICAgIEFjY2VzcyBhbmQgdXNlIHRoaXMub3B0aW9ucyBpZiB0aGUgcmVuZGVyaW5nXG4gICAgICBjaGFuZ2VzIGJhc2VkIG9uIGNvbnRleHQuXG4gICAgKi9cblxuICAgIGNvbnN0IHsgY29udGV4dCwgY29uZmlnLCB0eXBlT2ZFbnRpdHkgfSA9IHRoaXMub3B0aW9ucztcbiAgICBjb25zdCBsYWJlbHMgPSB0aGlzLm9wdGlvbnMubGFiZWxzIHx8IHt9O1xuICAgIGNvbnN0IG1ldGFkYXRhVG9TaG93ID0gKGNvbmZpZy5nZXQoJ2VudGl0YS1sYXlvdXQnKSB8fCB7fSlbJ21ldGFkYXRhLXRvLXNob3cnXTtcblxuICAgIGxldCB1bnBhY2tlZERhdGEgPSBbXTtcbiAgICBpZiAoY29udGV4dCA9PT0gJ292ZXJ2aWV3JyAmJiBkYXRhKSB7XG4gICAgICBjb25zdCBjb25maWd1cmVkS2V5cyA9IF9nZXQoY29uZmlnLmdldCgnZW50aXRhLWxheW91dCcpLCAnb3ZlcnZpZXcuY2FtcGknLCBbXSk7XG4gICAgICBjb25zdCBmaWx0ZXJlZERhdGEgPSBkYXRhLmZpbHRlcigoZCkgPT4gY29uZmlndXJlZEtleXMuaW5jbHVkZXMoZC5rZXkpKTtcbiAgICAgIHVucGFja2VkRGF0YSA9IEF3RW50aXRhTWV0YWRhdGFWaWV3ZXJEUy51bnBhY2tGaWVsZHMoZmlsdGVyZWREYXRhLCBtZXRhZGF0YVRvU2hvdyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVucGFja2VkRGF0YSA9IEF3RW50aXRhTWV0YWRhdGFWaWV3ZXJEUy51bnBhY2tGaWVsZHMoZGF0YSwgbWV0YWRhdGFUb1Nob3cpO1xuICAgIH1cbiAgICAvLyBwcmV0dGlmeSBsYWJlbHNcbiAgICB1bnBhY2tlZERhdGEuZm9yRWFjaCgoc2VjdGlvbikgPT4ge1xuICAgICAgc2VjdGlvbi5pdGVtc1xuICAgICAgICAuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmxhYmVsKVxuICAgICAgICAuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgIGl0ZW0ubGFiZWwgPSBoZWxwZXJzLnByZXR0aWZ5U25ha2VDYXNlKGl0ZW0ubGFiZWwsIGxhYmVsc1tgJHt0eXBlT2ZFbnRpdHl9LiR7aXRlbS5sYWJlbH1gXSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5oYXNHcm91cHMgPSBBcnJheS5pc0FycmF5KHVucGFja2VkRGF0YSkgJiYgISF1bnBhY2tlZERhdGEubGVuZ3RoO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGdyb3VwOiB1bnBhY2tlZERhdGEsXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyB1bnBhY2tGaWVsZHMoZmllbGRzLCBtZXRhZGF0YVRvU2hvdz8pIHtcbiAgICAvKlxuICAgICAgUmVjdXJzaXZlIHVucGFja2luZyBmb3IgcmVuZGVyaW5nIHJlcy5maWVsZHNcbiAgICAgIC0gLSAtXG4gICAgICBUaGlzIGZ1bmN0aW9uIHRyYW5zZm9ybXMgdGhlIHJlc3BvbnNlIG9iamVjdCB0cmVlXG4gICAgICBpbnRvIGFuIGFycmF5LCB1c2FibGUgYnkgbWV0YWRhdGEtdmlld2VyLWNvbXBvbmVudFxuICAgICovXG4gICAgbGV0IGV4dHJhY3RlZCA9IFtdOyAvLyBob2xkcyB0cmFuc2Zvcm1lZCBvYmplY3RcbiAgICAvLyBpZiB0aGUgc2VydmVyIHJldHVybnMgYW4gYXJyYXkgb2Yga2V5LXZhbHVlIHR1cGxlc1xuICAgIGlmIChmaWVsZHMgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgZXh0cmFjdGVkID0gZmllbGRzXG4gICAgICAgIC5maWx0ZXIoKGVsKSA9PiB7XG4gICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkobWV0YWRhdGFUb1Nob3cpICYmIG1ldGFkYXRhVG9TaG93Lmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIG1ldGFkYXRhVG9TaG93LmluZGV4T2YoZWwua2V5KSAhPT0gLTE7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSlcbiAgICAgICAgLm1hcCgoZWwpID0+ICh7IGxhYmVsOiBlbC5rZXksIHZhbHVlOiBlbC52YWx1ZSwgb3JkZXI6IG1ldGFkYXRhVG9TaG93LmluZGV4T2YoZWwua2V5KSB9KSk7XG5cbiAgICAgIC8vIHNvcnQgYnkgb3JkZXIgKG1ldGFkYXRhLXRvLXNob3cgY29uZmlndXJhdGlvbiBvcmRlcilcbiAgICAgIGV4dHJhY3RlZC5zb3J0KChhLCBiKSA9PiBhLm9yZGVyIC0gYi5vcmRlcik7XG4gICAgICBpZiAoZXh0cmFjdGVkLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gW3sgaXRlbXM6IGV4dHJhY3RlZCB9XTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgaWYgKCFmaWVsZHMpIHsgcmV0dXJuIFtdOyB9IC8vIGlmIGlzIGVtcHR5IOKGkiBxdWl0XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWVsZHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IHRoaXNGaWVsZCA9IGZpZWxkc1tpXTsgLy8gcmVuYW1lIGN1cnJlbnQgZmllbGRcbiAgICAgIGNvbnN0IHRpdGxlID0gdGhpc0ZpZWxkLmxhYmVsOyAvLyBmaWVsZCB0aXRsZVxuICAgICAgY29uc3QgbGFiZWwgPSB0aGlzRmllbGQua2V5OyAvLyBpdGVtIGxhYmVsXG4gICAgICBjb25zdCB7IHZhbHVlIH0gPSB0aGlzRmllbGQ7IC8vIGl0ZW0gdmFsdWVcbiAgICAgIGNvbnN0IGdyb3VwID0gdGhpc0ZpZWxkLmZpZWxkczsgLy8gY2hpbGQgZ3JvdXBcbiAgICAgIGNvbnN0IHRlbXA6IGFueSA9IHt9OyAvLyB0ZW1wb3Jhcnkgb2JqZWN0XG5cbiAgICAgIGlmICh0aXRsZSkge1xuICAgICAgICAvLyBpZiB0aGVyZSBpcyBhIHRpdGxlLCB1c2UgaXRcbiAgICAgICAgdGVtcC50aXRsZSA9IHRpdGxlO1xuICAgICAgfVxuICAgICAgaWYgKGxhYmVsICYmIHZhbHVlKSB7XG4gICAgICAgIC8vIGlmIHRoZXJlIGFyZSBhIGxhYmxlIGFuZCB2YWx1ZSwgdXNlIHRoZW1cbiAgICAgICAgdGVtcC5sYWJlbCA9IGxhYmVsO1xuICAgICAgICB0ZW1wLnZhbHVlID0gdmFsdWU7XG4gICAgICB9XG4gICAgICBpZiAoZ3JvdXApIHtcbiAgICAgICAgLy8gaWYgdGhlcmUgaXMgYSBjaGlsZCBncm91cFxuICAgICAgICBpZiAoZ3JvdXBbMF0ua2V5KSB7XG4gICAgICAgICAgLy8gaWYgdGhpcyBncm91cCBoYXMgYSB0dXBsZSBvZiAobGFiZWwsIHZhbHVlKVxuICAgICAgICAgIHRlbXAuaXRlbXMgPSBBd0VudGl0YU1ldGFkYXRhVmlld2VyRFMudW5wYWNrRmllbGRzKGdyb3VwKTsgLy8gbWFrZSBpdGVtcyBhcnJheVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRlbXAuZ3JvdXAgPSBBd0VudGl0YU1ldGFkYXRhVmlld2VyRFMudW5wYWNrRmllbGRzKGdyb3VwKTsgLy8gbWFrZSBjaGlsZCBncm91cCBhcnJheVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBleHRyYWN0ZWQucHVzaCh0ZW1wKTsgLy8gYWRkIHRoaXMgb2JqZWN0IHRvIHRoZSBuZXcgYXJyYXlcbiAgICB9XG4gICAgcmV0dXJuIGV4dHJhY3RlZDtcbiAgfVxufVxuIl19