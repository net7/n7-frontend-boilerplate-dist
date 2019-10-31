/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataSource } from '@n7-frontend/core';
export class AwLinkedObjectsDS extends DataSource {
    constructor() {
        super(...arguments);
        this.handleShowMoreClick = (/**
         * @param {?} incomingData
         * @return {?}
         */
        incomingData => {
            /*
              Called by button <Mostra Altri>, adds the incoming
              data to the linked objects component.
            */
            console.log('showing more stuff');
            // TODO
        });
        this.makePagination = (/**
         * @param {?} totalPages
         * @param {?} currentPage
         * @return {?}
         */
        (totalPages, currentPage) => {
            /*
                  Called by this.unpackData() when this.options.page is defined.
                  Returns the data for <n7-pagination> component.
                */
            /** @type {?} */
            let result = []
            // always push the first page
            ;
            // always push the first page
            result.push({
                text: '1',
                payload: 'page-1',
                classes: currentPage == 1 ? 'is-active' : ''
            });
            for (let i = 1; i < totalPages; i++) {
                result.push({ text: String(i + 1), payload: 'page-' + String(i + 1), classes: currentPage == i + 1 ? 'is-active' : '' });
            }
            return result;
        });
        this.unpackData = (/**
         * @param {?} data
         * @return {?}
         */
        data => {
            /*
                  Dynamically returns the data object for each HTML component
                  data: {
                    previews: [ breadcrumbs: { items[] }, classes, image, metadata, payload, title ],
                    pagination: { first, last, links, next, prev, select }
                  }
                */
            /** @type {?} */
            const config = this.options.config;
            /** @type {?} */
            const // app-config.json
            totalCount = data.totalCount;
            /** @type {?} */
            const // total amount of items available on backend
            totalPages = this.totalPages;
            /** @type {?} */
            const // calculated number of pages
            page = this.currentPage;
            /** @type {?} */
            const // current page (if using pagination)
            context = this.context;
            /** @type {?} */
            const // parent layout name
            size = this.pageSize // items per page (if using pagination)
            ;
            // items per page (if using pagination)
            /** @type {?} */
            var d = data.items // items to iterate over
            ;
            if (config) {
                /** @type {?} */
                var keys = config.get('config-keys')
                // dynamic search for max-item-length
                ;
                // dynamic search for max-item-length
                if (config.get(context + '-layout')) {
                    /** @type {?} */
                    var lengthLimit = config.get(context + '-layout')['max-item-length'];
                    /** @type {?} */
                    var resultsLimit = config.get(context + '-layout')['results-limit'];
                }
            }
            // resize data
            if (size && page) {
                d = d.slice(page * size - size, page * size);
            }
            else if (size) {
                d = d.slice(0, size);
            }
            /** @type {?} */
            var result = [];
            d.forEach((/**
             * @param {?} el
             * @return {?}
             */
            el => {
                /** @type {?} */
                let item = {
                    image: el.thumbnail,
                    title: 
                    // if there is a max string length in config, use it
                    lengthLimit && el.item.label.length > lengthLimit ?
                        el.item.label.slice(0, lengthLimit) + '...' : el.item.label,
                    payload: el.item.id,
                    classes: ['entita', 'search'].includes(context) ? 'is-fullwidth' : '',
                    metadata: [
                        {
                            classes: 'n7-objects__metadata-artist',
                            items: el.item.info.map((/**
                             * @param {?} __0
                             * @return {?}
                             */
                            ({ value, key }) => ({
                                label: key === 'author' ? 'Artista' : null,
                                value
                            })))
                        },
                        {
                            classes: 'n7-objects__metadata-linked',
                            items: el.relatedTOEData.map((/**
                             * @param {?} toe
                             * @return {?}
                             */
                            toe => {
                                return {
                                    // Persone: 6, Organizz: 12, Luoghi: 2, Concetti: 32
                                    value: toe.count,
                                    // icon: 'n7-icon-bell' // TODO: link icon to config key
                                    icon: keys[toe.type.configKey].icon,
                                    classes: 'color-' + toe.type.configKey
                                };
                            }))
                        }
                    ]
                };
                if (el.breadcrumbs) {
                    item['breadcrumbs'] = {
                        // n7-breadcrumbs uses this as it's own data
                        items: el.breadcrumbs.map((/**
                         * @param {?} crumb
                         * @return {?}
                         */
                        crumb => {
                            return {
                                label: crumb.label,
                                payload: crumb.link,
                            };
                        }))
                    };
                }
                result.push(item);
            }));
            if (page) { // if I'm on a page, render pagination data.
                // if I'm on a page, render pagination data.
                /** @type {?} */
                let sizeOptions = [10, 25, 50];
                return {
                    pagination: {
                        first: { payload: `goto-${1}`, classes: page == 1 ? 'is-disabled' : '' },
                        prev: { payload: `goto-${page - 1}`, classes: page == 1 ? 'is-disabled' : '' },
                        next: { payload: `goto-${page + 1}`, classes: page == totalPages ? 'is-disabled' : '' },
                        last: { payload: `goto-${totalPages}`, classes: page == totalPages ? 'is-disabled' : '' },
                        links: this.makePagination(totalPages, page),
                        select: {
                            label: 'Numero di risultati',
                            options: sizeOptions.map((/**
                             * @param {?} o
                             * @return {?}
                             */
                            o => {
                                return {
                                    text: o,
                                    selected: o == size,
                                };
                            })),
                            payload: 'select-size'
                        }
                    },
                    previews: result
                };
            }
            if (context === 'home') {
                return {
                    result,
                    actions: [
                        { label: 'Mostra Tutti (' + totalCount + ')' },
                        lengthLimit ?
                            { label: 'Mostra Altri (' + resultsLimit + ')' } :
                            null,
                    ]
                };
            }
            console.log('linked objects result', result);
            return result;
        });
    }
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    transform(data) {
        this.pageSize = this.options.size;
        this.currentPage = (/** @type {?} */ (this.options.page));
        this.totalPages = Math.floor(data.length / this.pageSize);
        this.context = this.options.context;
        return this.unpackData(data);
    }
}
if (false) {
    /** @type {?} */
    AwLinkedObjectsDS.prototype.currentPage;
    /** @type {?} */
    AwLinkedObjectsDS.prototype.totalPages;
    /** @type {?} */
    AwLinkedObjectsDS.prototype.pageSize;
    /** @type {?} */
    AwLinkedObjectsDS.prototype.context;
    /** @type {?} */
    AwLinkedObjectsDS.prototype.handleShowMoreClick;
    /** @type {?} */
    AwLinkedObjectsDS.prototype.makePagination;
    /**
     * @type {?}
     * @private
     */
    AwLinkedObjectsDS.prototype.unpackData;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlua2VkLW9iamVjdHMuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL2xpbmtlZC1vYmplY3RzLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFL0MsTUFBTSxPQUFPLGlCQUFrQixTQUFRLFVBQVU7SUFBakQ7O1FBZVMsd0JBQW1COzs7O1FBQUcsWUFBWSxDQUFDLEVBQUU7WUFDMUM7OztjQUdFO1lBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFBO1lBQ2pDLE9BQU87UUFDVCxDQUFDLEVBQUE7UUFFTSxtQkFBYzs7Ozs7UUFBRyxDQUFDLFVBQVUsRUFBRSxXQUFXLEVBQUUsRUFBRTs7Ozs7O2dCQUs5QyxNQUFNLEdBQUcsRUFBRTtZQUNmLDZCQUE2Qjs7WUFBN0IsNkJBQTZCO1lBQzdCLE1BQU0sQ0FBQyxJQUFJLENBQUM7Z0JBQ1YsSUFBSSxFQUFFLEdBQUc7Z0JBQ1QsT0FBTyxFQUFFLFFBQVE7Z0JBQ2pCLE9BQU8sRUFBRSxXQUFXLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUU7YUFDN0MsQ0FBQyxDQUFBO1lBQ0YsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDbkMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxPQUFPLEdBQUcsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsV0FBVyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxD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QUE7SUFDSCxDQUFDOzs7Ozs7SUF2SlcsU0FBUyxDQUFDLElBQUk7UUFDdEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQTtRQUNqQyxJQUFJLENBQUMsV0FBVyxHQUFHLG1CQUFRLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFBLENBQUE7UUFDNUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQ3pELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUE7UUFDbkMsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQzlCLENBQUM7Q0FpSkY7OztJQTVKQyx3Q0FBMEI7O0lBQzFCLHVDQUF5Qjs7SUFDekIscUNBQXVCOztJQUN2QixvQ0FBc0I7O0lBVXRCLGdEQU9DOztJQUVELDJDQWdCQzs7Ozs7SUFFRCx1Q0FtSEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgQXdMaW5rZWRPYmplY3RzRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcblxuICBwdWJsaWMgY3VycmVudFBhZ2U6IG51bWJlclxuICBwdWJsaWMgdG90YWxQYWdlczogbnVtYmVyXG4gIHB1YmxpYyBwYWdlU2l6ZTogbnVtYmVyXG4gIHB1YmxpYyBjb250ZXh0OiBzdHJpbmdcblxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpIHtcbiAgICB0aGlzLnBhZ2VTaXplID0gdGhpcy5vcHRpb25zLnNpemVcbiAgICB0aGlzLmN1cnJlbnRQYWdlID0gPG51bWJlcj50aGlzLm9wdGlvbnMucGFnZVxuICAgIHRoaXMudG90YWxQYWdlcyA9IE1hdGguZmxvb3IoZGF0YS5sZW5ndGggLyB0aGlzLnBhZ2VTaXplKVxuICAgIHRoaXMuY29udGV4dCA9IHRoaXMub3B0aW9ucy5jb250ZXh0XG4gICAgcmV0dXJuIHRoaXMudW5wYWNrRGF0YShkYXRhKVxuICB9XG5cbiAgcHVibGljIGhhbmRsZVNob3dNb3JlQ2xpY2sgPSBpbmNvbWluZ0RhdGEgPT4ge1xuICAgIC8qXG4gICAgICBDYWxsZWQgYnkgYnV0dG9uIDxNb3N0cmEgQWx0cmk+LCBhZGRzIHRoZSBpbmNvbWluZ1xuICAgICAgZGF0YSB0byB0aGUgbGlua2VkIG9iamVjdHMgY29tcG9uZW50LlxuICAgICovXG4gICAgY29uc29sZS5sb2coJ3Nob3dpbmcgbW9yZSBzdHVmZicpXG4gICAgLy8gVE9ET1xuICB9XG5cbiAgcHVibGljIG1ha2VQYWdpbmF0aW9uID0gKHRvdGFsUGFnZXMsIGN1cnJlbnRQYWdlKSA9PiB7XG4gICAgLypcbiAgICAgIENhbGxlZCBieSB0aGlzLnVucGFja0RhdGEoKSB3aGVuIHRoaXMub3B0aW9ucy5wYWdlIGlzIGRlZmluZWQuXG4gICAgICBSZXR1cm5zIHRoZSBkYXRhIGZvciA8bjctcGFnaW5hdGlvbj4gY29tcG9uZW50LlxuICAgICovXG4gICAgbGV0IHJlc3VsdCA9IFtdXG4gICAgLy8gYWx3YXlzIHB1c2ggdGhlIGZpcnN0IHBhZ2VcbiAgICByZXN1bHQucHVzaCh7XG4gICAgICB0ZXh0OiAnMScsXG4gICAgICBwYXlsb2FkOiAncGFnZS0xJyxcbiAgICAgIGNsYXNzZXM6IGN1cnJlbnRQYWdlID09IDEgPyAnaXMtYWN0aXZlJyA6ICcnXG4gICAgfSlcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IHRvdGFsUGFnZXM7IGkrKykge1xuICAgICAgcmVzdWx0LnB1c2goeyB0ZXh0OiBTdHJpbmcoaSArIDEpLCBwYXlsb2FkOiAncGFnZS0nICsgU3RyaW5nKGkgKyAxKSwgY2xhc3NlczogY3VycmVudFBhZ2UgPT0gaSArIDEgPyAnaXMtYWN0aXZlJyA6ICcnIH0pXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfVxuXG4gIHByaXZhdGUgdW5wYWNrRGF0YSA9IGRhdGEgPT4ge1xuICAgIC8qXG4gICAgICBEeW5hbWljYWxseSByZXR1cm5zIHRoZSBkYXRhIG9iamVjdCBmb3IgZWFjaCBIVE1MIGNvbXBvbmVudFxuICAgICAgZGF0YToge1xuICAgICAgICBwcmV2aWV3czogWyBicmVhZGNydW1iczogeyBpdGVtc1tdIH0sIGNsYXNzZXMsIGltYWdlLCBtZXRhZGF0YSwgcGF5bG9hZCwgdGl0bGUgXSxcbiAgICAgICAgcGFnaW5hdGlvbjogeyBmaXJzdCwgbGFzdCwgbGlua3MsIG5leHQsIHByZXYsIHNlbGVjdCB9XG4gICAgICB9XG4gICAgKi9cbiAgICBjb25zdFxuICAgICAgY29uZmlnID0gdGhpcy5vcHRpb25zLmNvbmZpZywgLy8gYXBwLWNvbmZpZy5qc29uXG4gICAgICB0b3RhbENvdW50ID0gZGF0YS50b3RhbENvdW50LCAvLyB0b3RhbCBhbW91bnQgb2YgaXRlbXMgYXZhaWxhYmxlIG9uIGJhY2tlbmRcbiAgICAgIHRvdGFsUGFnZXMgPSB0aGlzLnRvdGFsUGFnZXMsIC8vIGNhbGN1bGF0ZWQgbnVtYmVyIG9mIHBhZ2VzXG4gICAgICBwYWdlID0gdGhpcy5jdXJyZW50UGFnZSwgICAgICAvLyBjdXJyZW50IHBhZ2UgKGlmIHVzaW5nIHBhZ2luYXRpb24pXG4gICAgICBjb250ZXh0ID0gdGhpcy5jb250ZXh0LCAgICAgICAvLyBwYXJlbnQgbGF5b3V0IG5hbWVcbiAgICAgIHNpemUgPSB0aGlzLnBhZ2VTaXplICAgICAgICAgIC8vIGl0ZW1zIHBlciBwYWdlIChpZiB1c2luZyBwYWdpbmF0aW9uKVxuICAgIHZhclxuICAgICAgZCA9IGRhdGEuaXRlbXMgICAgICAgICAgICAgICAgLy8gaXRlbXMgdG8gaXRlcmF0ZSBvdmVyXG5cbiAgICBpZiAoY29uZmlnKSB7XG4gICAgICB2YXIga2V5cyA9IGNvbmZpZy5nZXQoJ2NvbmZpZy1rZXlzJylcbiAgICAgIC8vIGR5bmFtaWMgc2VhcmNoIGZvciBtYXgtaXRlbS1sZW5ndGhcbiAgICAgIGlmIChjb25maWcuZ2V0KGNvbnRleHQgKyAnLWxheW91dCcpKSB7XG4gICAgICAgIHZhciBsZW5ndGhMaW1pdCA9IGNvbmZpZy5nZXQoY29udGV4dCArICctbGF5b3V0JylbJ21heC1pdGVtLWxlbmd0aCddXG4gICAgICAgIHZhciByZXN1bHRzTGltaXQgPSBjb25maWcuZ2V0KGNvbnRleHQgKyAnLWxheW91dCcpWydyZXN1bHRzLWxpbWl0J11cbiAgICAgIH1cbiAgICB9XG4gICAgLy8gcmVzaXplIGRhdGFcbiAgICBpZiAoc2l6ZSAmJiBwYWdlKSB7XG4gICAgICBkID0gZC5zbGljZShwYWdlICogc2l6ZSAtIHNpemUsIHBhZ2UgKiBzaXplKVxuICAgIH0gZWxzZSBpZiAoc2l6ZSkge1xuICAgICAgZCA9IGQuc2xpY2UoMCwgc2l6ZSlcbiAgICB9XG5cbiAgICB2YXIgcmVzdWx0ID0gW11cbiAgICBkLmZvckVhY2goZWwgPT4ge1xuICAgICAgbGV0IGl0ZW0gPSB7XG4gICAgICAgIGltYWdlOiBlbC50aHVtYm5haWwsXG4gICAgICAgIHRpdGxlOlxuICAgICAgICAgIC8vIGlmIHRoZXJlIGlzIGEgbWF4IHN0cmluZyBsZW5ndGggaW4gY29uZmlnLCB1c2UgaXRcbiAgICAgICAgICBsZW5ndGhMaW1pdCAmJiBlbC5pdGVtLmxhYmVsLmxlbmd0aCA+IGxlbmd0aExpbWl0ID9cbiAgICAgICAgICAgIGVsLml0ZW0ubGFiZWwuc2xpY2UoMCwgbGVuZ3RoTGltaXQpICsgJy4uLicgOiBlbC5pdGVtLmxhYmVsLFxuICAgICAgICBwYXlsb2FkOiBlbC5pdGVtLmlkLFxuICAgICAgICBjbGFzc2VzOiBbJ2VudGl0YScsICdzZWFyY2gnXS5pbmNsdWRlcyhjb250ZXh0KSA/ICdpcy1mdWxsd2lkdGgnIDogJycsXG4gICAgICAgIG1ldGFkYXRhOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NlczogJ243LW9iamVjdHNfX21ldGFkYXRhLWFydGlzdCcsXG4gICAgICAgICAgICBpdGVtczogZWwuaXRlbS5pbmZvLm1hcCgoeyB2YWx1ZSwga2V5IH0pID0+ICh7XG4gICAgICAgICAgICAgIGxhYmVsOiBrZXkgPT09ICdhdXRob3InID8gJ0FydGlzdGEnIDogbnVsbCxcbiAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgIH0pKVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NlczogJ243LW9iamVjdHNfX21ldGFkYXRhLWxpbmtlZCcsXG4gICAgICAgICAgICBpdGVtczogZWwucmVsYXRlZFRPRURhdGEubWFwKHRvZSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiB7IC8vIFBlcnNvbmU6IDYsIE9yZ2FuaXp6OiAxMiwgTHVvZ2hpOiAyLCBDb25jZXR0aTogMzJcbiAgICAgICAgICAgICAgICB2YWx1ZTogdG9lLmNvdW50LFxuICAgICAgICAgICAgICAgIC8vIGljb246ICduNy1pY29uLWJlbGwnIC8vIFRPRE86IGxpbmsgaWNvbiB0byBjb25maWcga2V5XG4gICAgICAgICAgICAgICAgaWNvbjoga2V5c1t0b2UudHlwZS5jb25maWdLZXldLmljb24sXG4gICAgICAgICAgICAgICAgY2xhc3NlczogJ2NvbG9yLScgKyB0b2UudHlwZS5jb25maWdLZXlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH07XG4gICAgICBpZiAoZWwuYnJlYWRjcnVtYnMpIHtcbiAgICAgICAgaXRlbVsnYnJlYWRjcnVtYnMnXSA9IHsgLy8gbjctYnJlYWRjcnVtYnMgdXNlcyB0aGlzIGFzIGl0J3Mgb3duIGRhdGFcbiAgICAgICAgICBpdGVtczogZWwuYnJlYWRjcnVtYnMubWFwKGNydW1iID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIGxhYmVsOiBjcnVtYi5sYWJlbCxcbiAgICAgICAgICAgICAgcGF5bG9hZDogY3J1bWIubGluayxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgcmVzdWx0LnB1c2goaXRlbSk7XG4gICAgfSk7XG4gICAgaWYgKHBhZ2UpIHsgLy8gaWYgSSdtIG9uIGEgcGFnZSwgcmVuZGVyIHBhZ2luYXRpb24gZGF0YS5cbiAgICAgIGxldCBzaXplT3B0aW9ucyA9IFsxMCwgMjUsIDUwXVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnaW5hdGlvbjoge1xuICAgICAgICAgIGZpcnN0OiB7IHBheWxvYWQ6IGBnb3RvLSR7MX1gLCBjbGFzc2VzOiBwYWdlID09IDEgPyAnaXMtZGlzYWJsZWQnIDogJycgfSxcbiAgICAgICAgICBwcmV2OiB7IHBheWxvYWQ6IGBnb3RvLSR7cGFnZSAtIDF9YCwgY2xhc3NlczogcGFnZSA9PSAxID8gJ2lzLWRpc2FibGVkJyA6ICcnIH0sXG4gICAgICAgICAgbmV4dDogeyBwYXlsb2FkOiBgZ290by0ke3BhZ2UgKyAxfWAsIGNsYXNzZXM6IHBhZ2UgPT0gdG90YWxQYWdlcyA/ICdpcy1kaXNhYmxlZCcgOiAnJyB9LFxuICAgICAgICAgIGxhc3Q6IHsgcGF5bG9hZDogYGdvdG8tJHt0b3RhbFBhZ2VzfWAsIGNsYXNzZXM6IHBhZ2UgPT0gdG90YWxQYWdlcyA/ICdpcy1kaXNhYmxlZCcgOiAnJyB9LFxuICAgICAgICAgIGxpbmtzOiB0aGlzLm1ha2VQYWdpbmF0aW9uKHRvdGFsUGFnZXMsIHBhZ2UpLFxuICAgICAgICAgIHNlbGVjdDoge1xuICAgICAgICAgICAgbGFiZWw6ICdOdW1lcm8gZGkgcmlzdWx0YXRpJyxcbiAgICAgICAgICAgIG9wdGlvbnM6IHNpemVPcHRpb25zLm1hcChvID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0ZXh0OiBvLFxuICAgICAgICAgICAgICAgIHNlbGVjdGVkOiBvID09IHNpemUsXG4gICAgICAgICAgICAgICAgLy8gZGlzYWJsZXMgb3B0aW9ucyBncmVhdGVyIHRoYW4gdG90YWwgaXRlbXNcbiAgICAgICAgICAgICAgICAvLyBkaXNhYmxlZDogbyA+IHRvdGFsUGFnZXMqc2l6ZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHBheWxvYWQ6ICdzZWxlY3Qtc2l6ZSdcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHByZXZpZXdzOiByZXN1bHRcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGNvbnRleHQgPT09ICdob21lJykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcmVzdWx0LFxuICAgICAgICBhY3Rpb25zOlxuICAgICAgICAgIFtcbiAgICAgICAgICAgIHsgbGFiZWw6ICdNb3N0cmEgVHV0dGkgKCcgKyB0b3RhbENvdW50ICsgJyknIH0sXG4gICAgICAgICAgICBsZW5ndGhMaW1pdCA/XG4gICAgICAgICAgICAgIHsgbGFiZWw6ICdNb3N0cmEgQWx0cmkgKCcgKyByZXN1bHRzTGltaXQgKyAnKScgfSA6XG4gICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgICBjb25zb2xlLmxvZygnbGlua2VkIG9iamVjdHMgcmVzdWx0JywgcmVzdWx0KVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn0iXX0=