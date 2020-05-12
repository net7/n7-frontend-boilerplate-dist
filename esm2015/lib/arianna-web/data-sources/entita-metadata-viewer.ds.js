/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataSource } from '@n7-frontend/core';
import helpers from '../../common/helpers';
export class AwEntitaMetadataViewerDS extends DataSource {
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
        const { context, config } = this.options;
        /** @type {?} */
        const labels = this.options.labels || {};
        /** @type {?} */
        const metadataToShow = (config.get('entita-layout') || {})['metadata-to-show'];
        /** @type {?} */
        let unpackedData = [];
        if (context === 'overview' && data) {
            /** @type {?} */
            const configuredKeys = ((config.get('entita-layout') || {}).overview || {}).campi;
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
                item.label = helpers.prettifySnakeCase(item.label, labels[item.label]);
            }));
        }));
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
            (el) => ({ label: el.key, value: el.value })));
            return [{ items: extracted }];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXRhLW1ldGFkYXRhLXZpZXdlci5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvZW50aXRhLW1ldGFkYXRhLXZpZXdlci5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sT0FBTyxNQUFNLHNCQUFzQixDQUFDO0FBRTNDLE1BQU0sT0FBTyx3QkFBeUIsU0FBUSxVQUFVOzs7Ozs7SUFDNUMsU0FBUyxDQUFDLElBQUk7UUFDdEI7OztVQUdFOzs7OztjQUVJLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPOztjQUNsQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLElBQUksRUFBRTs7Y0FDbEMsY0FBYyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQzs7WUFFMUUsWUFBWSxHQUFHLEVBQUU7UUFDckIsSUFBSSxPQUFPLEtBQUssVUFBVSxJQUFJLElBQUksRUFBRTs7a0JBQzVCLGNBQWMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSzs7a0JBQzNFLFlBQVksR0FBRyxJQUFJLENBQUMsTUFBTTs7OztZQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBQztZQUN2RSxZQUFZLEdBQUcsd0JBQXdCLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxjQUFjLENBQUMsQ0FBQztTQUNwRjthQUFNO1lBQ0wsWUFBWSxH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QUNGO1lBQ0QsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLG1DQUFtQztTQUMxRDtRQUNELE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgaGVscGVycyBmcm9tICcuLi8uLi9jb21tb24vaGVscGVycyc7XG5cbmV4cG9ydCBjbGFzcyBBd0VudGl0YU1ldGFkYXRhVmlld2VyRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKSB7XG4gICAgLypcbiAgICAgIEFjY2VzcyBhbmQgdXNlIHRoaXMub3B0aW9ucyBpZiB0aGUgcmVuZGVyaW5nXG4gICAgICBjaGFuZ2VzIGJhc2VkIG9uIGNvbnRleHQuXG4gICAgKi9cblxuICAgIGNvbnN0IHsgY29udGV4dCwgY29uZmlnIH0gPSB0aGlzLm9wdGlvbnM7XG4gICAgY29uc3QgbGFiZWxzID0gdGhpcy5vcHRpb25zLmxhYmVscyB8fCB7fTtcbiAgICBjb25zdCBtZXRhZGF0YVRvU2hvdyA9IChjb25maWcuZ2V0KCdlbnRpdGEtbGF5b3V0JykgfHwge30pWydtZXRhZGF0YS10by1zaG93J107XG5cbiAgICBsZXQgdW5wYWNrZWREYXRhID0gW107XG4gICAgaWYgKGNvbnRleHQgPT09ICdvdmVydmlldycgJiYgZGF0YSkge1xuICAgICAgY29uc3QgY29uZmlndXJlZEtleXMgPSAoKGNvbmZpZy5nZXQoJ2VudGl0YS1sYXlvdXQnKSB8fCB7fSkub3ZlcnZpZXcgfHwge30pLmNhbXBpO1xuICAgICAgY29uc3QgZmlsdGVyZWREYXRhID0gZGF0YS5maWx0ZXIoKGQpID0+IGNvbmZpZ3VyZWRLZXlzLmluY2x1ZGVzKGQua2V5KSk7XG4gICAgICB1bnBhY2tlZERhdGEgPSBBd0VudGl0YU1ldGFkYXRhVmlld2VyRFMudW5wYWNrRmllbGRzKGZpbHRlcmVkRGF0YSwgbWV0YWRhdGFUb1Nob3cpO1xuICAgIH0gZWxzZSB7XG4gICAgICB1bnBhY2tlZERhdGEgPSBBd0VudGl0YU1ldGFkYXRhVmlld2VyRFMudW5wYWNrRmllbGRzKGRhdGEsIG1ldGFkYXRhVG9TaG93KTtcbiAgICB9XG4gICAgLy8gcHJldHRpZnkgbGFiZWxzXG4gICAgdW5wYWNrZWREYXRhLmZvckVhY2goKHNlY3Rpb24pID0+IHtcbiAgICAgIHNlY3Rpb24uaXRlbXNcbiAgICAgICAgLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5sYWJlbClcbiAgICAgICAgLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICBpdGVtLmxhYmVsID0gaGVscGVycy5wcmV0dGlmeVNuYWtlQ2FzZShpdGVtLmxhYmVsLCBsYWJlbHNbaXRlbS5sYWJlbF0pO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4ge1xuICAgICAgZ3JvdXA6IHVucGFja2VkRGF0YSxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIHVucGFja0ZpZWxkcyhmaWVsZHMsIG1ldGFkYXRhVG9TaG93Pykge1xuICAgIC8qXG4gICAgICBSZWN1cnNpdmUgdW5wYWNraW5nIGZvciByZW5kZXJpbmcgcmVzLmZpZWxkc1xuICAgICAgLSAtIC1cbiAgICAgIFRoaXMgZnVuY3Rpb24gdHJhbnNmb3JtcyB0aGUgcmVzcG9uc2Ugb2JqZWN0IHRyZWVcbiAgICAgIGludG8gYW4gYXJyYXksIHVzYWJsZSBieSBtZXRhZGF0YS12aWV3ZXItY29tcG9uZW50XG4gICAgKi9cbiAgICBsZXQgZXh0cmFjdGVkID0gW107IC8vIGhvbGRzIHRyYW5zZm9ybWVkIG9iamVjdFxuICAgIC8vIGlmIHRoZSBzZXJ2ZXIgcmV0dXJucyBhbiBhcnJheSBvZiBrZXktdmFsdWUgdHVwbGVzXG4gICAgaWYgKGZpZWxkcyBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICBleHRyYWN0ZWQgPSBmaWVsZHNcbiAgICAgICAgLmZpbHRlcigoZWwpID0+IHtcbiAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShtZXRhZGF0YVRvU2hvdykgJiYgbWV0YWRhdGFUb1Nob3cubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gbWV0YWRhdGFUb1Nob3cuaW5kZXhPZihlbC5rZXkpICE9PSAtMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KVxuICAgICAgICAubWFwKChlbCkgPT4gKHsgbGFiZWw6IGVsLmtleSwgdmFsdWU6IGVsLnZhbHVlIH0pKTtcbiAgICAgIHJldHVybiBbeyBpdGVtczogZXh0cmFjdGVkIH1dO1xuICAgIH1cbiAgICBpZiAoIWZpZWxkcykgeyByZXR1cm4gW107IH0gLy8gaWYgaXMgZW1wdHkg4oaSIHF1aXRcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpZWxkcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgdGhpc0ZpZWxkID0gZmllbGRzW2ldOyAvLyByZW5hbWUgY3VycmVudCBmaWVsZFxuICAgICAgY29uc3QgdGl0bGUgPSB0aGlzRmllbGQubGFiZWw7IC8vIGZpZWxkIHRpdGxlXG4gICAgICBjb25zdCBsYWJlbCA9IHRoaXNGaWVsZC5rZXk7IC8vIGl0ZW0gbGFiZWxcbiAgICAgIGNvbnN0IHsgdmFsdWUgfSA9IHRoaXNGaWVsZDsgLy8gaXRlbSB2YWx1ZVxuICAgICAgY29uc3QgZ3JvdXAgPSB0aGlzRmllbGQuZmllbGRzOyAvLyBjaGlsZCBncm91cFxuICAgICAgY29uc3QgdGVtcDogYW55ID0ge307IC8vIHRlbXBvcmFyeSBvYmplY3RcblxuICAgICAgaWYgKHRpdGxlKSB7XG4gICAgICAgIC8vIGlmIHRoZXJlIGlzIGEgdGl0bGUsIHVzZSBpdFxuICAgICAgICB0ZW1wLnRpdGxlID0gdGl0bGU7XG4gICAgICB9XG4gICAgICBpZiAobGFiZWwgJiYgdmFsdWUpIHtcbiAgICAgICAgLy8gaWYgdGhlcmUgYXJlIGEgbGFibGUgYW5kIHZhbHVlLCB1c2UgdGhlbVxuICAgICAgICB0ZW1wLmxhYmVsID0gbGFiZWw7XG4gICAgICAgIHRlbXAudmFsdWUgPSB2YWx1ZTtcbiAgICAgIH1cbiAgICAgIGlmIChncm91cCkge1xuICAgICAgICAvLyBpZiB0aGVyZSBpcyBhIGNoaWxkIGdyb3VwXG4gICAgICAgIGlmIChncm91cFswXS5rZXkpIHtcbiAgICAgICAgICAvLyBpZiB0aGlzIGdyb3VwIGhhcyBhIHR1cGxlIG9mIChsYWJlbCwgdmFsdWUpXG4gICAgICAgICAgdGVtcC5pdGVtcyA9IEF3RW50aXRhTWV0YWRhdGFWaWV3ZXJEUy51bnBhY2tGaWVsZHMoZ3JvdXApOyAvLyBtYWtlIGl0ZW1zIGFycmF5XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGVtcC5ncm91cCA9IEF3RW50aXRhTWV0YWRhdGFWaWV3ZXJEUy51bnBhY2tGaWVsZHMoZ3JvdXApOyAvLyBtYWtlIGNoaWxkIGdyb3VwIGFycmF5XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGV4dHJhY3RlZC5wdXNoKHRlbXApOyAvLyBhZGQgdGhpcyBvYmplY3QgdG8gdGhlIG5ldyBhcnJheVxuICAgIH1cbiAgICByZXR1cm4gZXh0cmFjdGVkO1xuICB9XG59XG4iXX0=