/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataSource } from '@n7-frontend/core';
export class AwHomeAutocompleteDS extends DataSource {
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    transform(data) {
        const { entities, totalCount } = data;
        const { config } = this.options;
        /** @type {?} */
        let itemIds = [];
        /** @type {?} */
        let groups = {};
        console.log(entities);
        entities.forEach((/**
         * @param {?} __0
         * @return {?}
         */
        ({ entity, count }) => {
            if (!groups[entity.typeOfEntity]) {
                const { label, icon } = config[entity.typeOfEntity.replace(" ", "-")];
                groups[entity.typeOfEntity.replace(" ", "-")] = {
                    title: label,
                    icon,
                    classes: `color-${entity.typeOfEntity.replace(" ", "-")}`,
                    items: [],
                };
            }
            if (itemIds.indexOf(entity.id) === -1) {
                /** @type {?} */
                let metaDataValue = ' ';
                if (entity.fields) {
                    /** @type {?} */
                    const meta = config[entity.typeOfEntity.replace(" ", "-")]['main-metadata'];
                    entity.fields.forEach((/**
                     * @param {?} infoData
                     * @return {?}
                     */
                    infoData => {
                        if (infoData.key === meta)
                            metaDataValue = ` - ${infoData.value}`;
                    }));
                }
                groups[entity.typeOfEntity.replace(" ", "-")].items.push({
                    label: entity.label,
                    value: metaDataValue,
                    payload: {
                        source: 'item',
                        id: entity.id
                    }
                });
            }
        }));
        /** @type {?} */
        const results = Object.keys(groups).map((/**
         * @param {?} key
         * @return {?}
         */
        key => ({ group: Object.assign({}, groups[key]) })));
        return {
            results,
            actions: {
                showMore: {
                    text: `Visualizza tutti i ${totalCount} risultati`,
                    payload: {
                        source: 'showMore'
                    }
                }
            },
            fallback: 'Spiacenti, non è stato trovato nessun risultato. <br> Riprova con una nuova ricerca.'
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1hdXRvY29tcGxldGUuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL2hvbWUtYXV0b2NvbXBsZXRlLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFHL0MsTUFBTSxPQUFPLG9CQUFxQixTQUFRLFVBQVU7Ozs7OztJQUV4QyxTQUFTLENBQUMsSUFBSTtjQUVoQixFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsR0FBRyxJQUFJO2NBQy9CLEVBQUUsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU87O1lBRTNCLE9BQU8sR0FBRyxFQUFFOztZQUNkLE1BQU0sR0FBRyxFQUFFO1FBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN0QixRQUFRLENBQUMsT0FBTzs7OztRQUNkLENBQUMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRTtZQUN0QixJQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBRTtzQkFDekIsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDckUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHO29CQUM5QyxLQUFLLEVBQUUsS0FBSztvQkFDWixJQUFJO29CQUNKLE9BQU8sRUFBRSxTQUFTLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRTtvQkFDekQsS0FBSyxFQUFFLEVBQUU7aUJBQ1YsQ0FBQzthQUNIO1lBRUQsSUFBRyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBQzs7b0JBQy9CLGFBQWEsR0FBVyxHQUFHO2dCQUMvQixJQUFJLE1BQU0sQ0FBQyxNQUFNLEVBQUM7OzBCQUNWLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDO29CQUMzRSxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU87Ozs7b0JBQUMsUUFBUSxDQUFDLEVBQUU7d0JBQy9CLElBQUksUUFBUSxDQUFDLEdBQUcsS0FBSyxJQUFJOzRCQUFFLGFBQWEsR0FBRyxNQUFNLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztvQkFDcEUsQ0FBQyxFQUFDLENBQUM7aUJBQ0o7Z0JBQ0QsTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7b0JBQ3ZELEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSztvQkFDbkIsS0FBSyxFQUFFLGFBQWE7b0JBQ3BCLE9BQU8sRUFBRTt3QkFDUCxNQUFNLEVBQUUsTUFBTTt3QkFDZCxFQUFFLEVBQUUsTUFBTSxDQUFDLEVBQUU7cUJBQ2Q7aUJBQ0YsQ0FBQyxDQUFDO2FBQ0o7UUFDSCxDQUFDLEVBQUMsQ0FBQzs7Y0FFRyxPQUFPLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHOzs7O1FBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsS0FBSyxvQkFBTSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUM7UUFDN0UsT0FBTztZQUNMLE9BQU87WUFDUCxPQUFPLEVBQUU7Z0JBQ1AsUUFBUSxFQUFFO29CQUNSLElBQUksRUFBRSxzQkFBc0IsVUFBVSxZQUFZO29CQUNsRCxPQUFPLEVBQUU7d0JBQ1AsTUFBTSxFQUFFLFVBQVU7cUJBQ25CO2lCQUNGO2FBQ0Y7WUFDRCxRQUFRLEVBQUUsc0ZBQXNGO1NBQ2pHLENBQUM7SUFDSixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgQURWQU5DRURfQVVUT0NPTVBMRVRFX01PQ0sgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XG5cbmV4cG9ydCBjbGFzcyBBd0hvbWVBdXRvY29tcGxldGVEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSl7XG5cbiAgICBjb25zdCB7IGVudGl0aWVzLCB0b3RhbENvdW50IH0gPSBkYXRhLFxuICAgICAgICAgIHsgY29uZmlnIH0gPSB0aGlzLm9wdGlvbnM7XG5cbiAgICBsZXQgaXRlbUlkcyA9IFtdLFxuICAgICAgZ3JvdXBzID0ge307XG4gICAgY29uc29sZS5sb2coZW50aXRpZXMpO1xuICAgIGVudGl0aWVzLmZvckVhY2goXG4gICAgICAoeyBlbnRpdHksIGNvdW50IH0pID0+IHtcbiAgICAgIGlmKCFncm91cHNbZW50aXR5LnR5cGVPZkVudGl0eV0pIHtcbiAgICAgICAgY29uc3QgeyBsYWJlbCwgaWNvbiB9ID0gY29uZmlnW2VudGl0eS50eXBlT2ZFbnRpdHkucmVwbGFjZShcIiBcIiwgXCItXCIpXTtcbiAgICAgICAgZ3JvdXBzW2VudGl0eS50eXBlT2ZFbnRpdHkucmVwbGFjZShcIiBcIiwgXCItXCIpXSA9IHtcbiAgICAgICAgICB0aXRsZTogbGFiZWwsXG4gICAgICAgICAgaWNvbixcbiAgICAgICAgICBjbGFzc2VzOiBgY29sb3ItJHtlbnRpdHkudHlwZU9mRW50aXR5LnJlcGxhY2UoXCIgXCIsIFwiLVwiKX1gLFxuICAgICAgICAgIGl0ZW1zOiBbXSxcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgaWYoaXRlbUlkcy5pbmRleE9mKGVudGl0eS5pZCkgPT09IC0xKXtcbiAgICAgICAgbGV0IG1ldGFEYXRhVmFsdWU6IHN0cmluZyA9ICcgJztcbiAgICAgICAgaWYgKGVudGl0eS5maWVsZHMpe1xuICAgICAgICAgIGNvbnN0IG1ldGEgPSBjb25maWdbZW50aXR5LnR5cGVPZkVudGl0eS5yZXBsYWNlKFwiIFwiLCBcIi1cIildWydtYWluLW1ldGFkYXRhJ107XG4gICAgICAgICAgZW50aXR5LmZpZWxkcy5mb3JFYWNoKGluZm9EYXRhID0+IHtcbiAgICAgICAgICAgIGlmKCBpbmZvRGF0YS5rZXkgPT09IG1ldGEpIG1ldGFEYXRhVmFsdWUgPSBgIC0gJHtpbmZvRGF0YS52YWx1ZX1gO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGdyb3Vwc1tlbnRpdHkudHlwZU9mRW50aXR5LnJlcGxhY2UoXCIgXCIsIFwiLVwiKV0uaXRlbXMucHVzaCh7XG4gICAgICAgICAgbGFiZWw6IGVudGl0eS5sYWJlbCxcbiAgICAgICAgICB2YWx1ZTogbWV0YURhdGFWYWx1ZSxcbiAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICBzb3VyY2U6ICdpdGVtJyxcbiAgICAgICAgICAgIGlkOiBlbnRpdHkuaWRcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgcmVzdWx0cyA9IE9iamVjdC5rZXlzKGdyb3VwcykubWFwKGtleSA9PiAoeyBncm91cDogey4uLmdyb3Vwc1trZXldfSB9KSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc3VsdHMsXG4gICAgICBhY3Rpb25zOiB7XG4gICAgICAgIHNob3dNb3JlOiB7XG4gICAgICAgICAgdGV4dDogYFZpc3VhbGl6emEgdHV0dGkgaSAke3RvdGFsQ291bnR9IHJpc3VsdGF0aWAsXG4gICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgc291cmNlOiAnc2hvd01vcmUnXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZmFsbGJhY2s6ICdTcGlhY2VudGksIG5vbiDDqCBzdGF0byB0cm92YXRvIG5lc3N1biByaXN1bHRhdG8uIDxicj4gUmlwcm92YSBjb24gdW5hIG51b3ZhIHJpY2VyY2EuJ1xuICAgIH07XG4gIH1cbn0iXX0=