/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { LayoutDataSource } from '@n7-frontend/core';
export class AwHomeLayoutDS extends LayoutDataSource {
    constructor() {
        super(...arguments);
        this.facetData = null;
        this.facetInputs = {};
        this.allBubbles = null;
        this.selectedBubbleIds = [];
        this.numOfItemsStr = null;
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    onInit({ communication, mainState }) {
        this.communication = communication;
        this.mainState = mainState;
        this.one('aw-hero').update({});
        this.communication.request$('globalFilter', {
            onError: (/**
             * @param {?} error
             * @return {?}
             */
            (error) => console.log(error)),
        }).subscribe((/**
         * @param {?} response
         * @return {?}
         */
        (response) => {
            console.log('apollo-response', { response });
            this.facetData = [];
            response.entitiesData.forEach((/**
             * @param {?} ent
             * @return {?}
             */
            (ent) => {
                this.facetData.push(Object.assign({}, (ent.countData), { enabled: true }));
            }));
            this.one('aw-home-facets-wrapper').update(this.facetData);
            this.renderBubblesFromApolloQuery(response);
            this.renderPreviewsFromApolloQuery(response);
        }));
        // update streams
        this.mainState.update('headTitle', 'Arianna Web > Home');
        this.mainState.update('pageTitle', 'Arianna Web: Home Layout');
        // this.mainState.update('subnav', this._getSubnav());
        // this.mainState.update('breadcrumbs', this._getBreadcrumbs());
    }
    /**
     * @param {?} response
     * @return {?}
     */
    renderPreviewsFromApolloQuery(response) {
        if (!response || !response.itemsPagination)
            return;
        /** @type {?} */
        let numOfItems = response.itemsPagination.totalCount;
        if (numOfItems > 0) {
            /** @type {?} */
            let numOfThousand = 0;
            while (numOfItems > 999) {
                numOfItems -= 1000;
                numOfThousand += 1;
            }
            if (numOfThousand > 0)
                this.numOfItemsStr = numOfThousand + '.' + numOfItems;
            else
                this.numOfItemsStr = numOfItems + '';
        }
        else {
            this.numOfItemsStr = null;
        }
        this.one('aw-home-item-preview-wrapper').update(response.itemsPagination.items);
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    onBubbleSelected(payload) {
        if (payload && payload.id) {
            if (!this.selectedBubbleIds.includes(payload.id))
                this.selectedBubbleIds.push(payload.id);
        }
        this.updateItemPreviews();
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    onBubbleDeselected(payload) {
        if (payload && payload.id)
            this.selectedBubbleIds = this.selectedBubbleIds.filter((/**
             * @param {?} b
             * @return {?}
             */
            (b) => {
                return (b !== payload.id);
            }));
        this.updateItemPreviews();
    }
    /**
     * @private
     * @return {?}
     */
    updateItemPreviews() {
        this.communication.request$('globalFilter', {
            onError: (/**
             * @param {?} error
             * @return {?}
             */
            (error) => console.log(error)),
            params: { selectedEntitiesIds: this.selectedBubbleIds,
                itemsPagination: { offset: 0, limit: 4 } },
        }).subscribe((/**
         * @param {?} response
         * @return {?}
         */
        (response) => {
            // the facets should be handled by the layout
            // (otherwise they would always return as enabled)
            //this.facetData = [];
            //response.entitiesData.forEach( (ent) => {
            //  this.facetData.push({...(ent.countData), enabled:true});
            //});
            this.renderPreviewsFromApolloQuery(response);
            this.renderItemTags();
        }));
    }
    /**
     * @param {?} response
     * @return {?}
     */
    renderBubblesFromApolloQuery(response) {
        if (!response || !response.entitiesData)
            return;
        this.allBubbles = [];
        for (var i = 0; i < response.entitiesData.length; i++) {
            /** @type {?} */
            let currentToE = response.entitiesData[i];
            for (var j = 0; j < currentToE.entitiesCountData.length; j++) {
                this.allBubbles.push(Object.assign({}, currentToE.entitiesCountData[j], { color: currentToE.countData.type.color }));
            }
        }
        this.allBubbles.map((/**
         * @param {?} bubble
         * @return {?}
         */
        (bubble) => {
            // d3/svg doesn't allow '-' or strings starting with a number as ids
            bubble.entity.id = 'B_' + bubble.entity.id.replace(/-/g, '_');
            return bubble;
        }));
        this.one('aw-home-bubble-chart').update({
            width: window.innerWidth / 1.8,
            bubbles: this.allBubbles
        });
    }
    /**
     * @param {?} change
     * @return {?}
     */
    handleFacetSearchChange(change) {
        /** @type {?} */
        var payload = change.inputPayload;
        /** @type {?} */
        var value = change.value;
        // store the entered text in facetInputs
        this.facetInputs[payload] = value;
        console.log('changed: ' + payload + ' with value: ' + value);
    }
    /**
     * @param {?} enter
     * @return {?}
     */
    handleFacetSearchEnter(enter) {
        /** @type {?} */
        var payload = enter.inputPayload;
        /** @type {?} */
        var value = this.facetInputs[payload];
        // get the text entered in this input
        console.log('entered: ' + payload + ' with value: ' + value);
    }
    /**
     * @param {?} facetId
     * @return {?}
     */
    handleFacetHeaderClick(facetId) {
        /** @type {?} */
        let updateBubbles = false;
        /** @type {?} */
        let enabledFacets = this.facetData.filter((/**
         * @param {?} f
         * @return {?}
         */
        (f) => f.enabled)).length;
        this.facetData.forEach((/**
         * @param {?} f
         * @return {?}
         */
        (f) => {
            if (f.type.id === facetId) {
                if (f.enabled) {
                    if (enabledFacets > 1) {
                        f.enabled = false;
                        updateBubbles = true;
                    }
                }
                else {
                    f.enabled = true;
                    updateBubbles = true;
                }
            }
        }));
        this.one('aw-home-facets-wrapper').update(this.facetData);
        if (updateBubbles) {
            /** @type {?} */
            let disableFacetsIds = [];
            this.facetData.forEach((/**
             * @param {?} fD
             * @return {?}
             */
            (fD) => {
                if (!fD.enabled)
                    disableFacetsIds.push(fD.type.id);
            }));
            if (disableFacetsIds) {
                /** @type {?} */
                let filteredSelectedBubbleIds = this.selectedBubbleIds.filter((/**
                 * @param {?} bId
                 * @return {?}
                 */
                (bId) => {
                    /** @type {?} */
                    let typeOfEntity = "";
                    for (var i = 0; i < this.allBubbles.length; i++) {
                        if (this.allBubbles[i].entity.id === bId) {
                            typeOfEntity = this.allBubbles[i].entity.typeOfEntity.id;
                            break;
                        }
                    }
                    if (disableFacetsIds.includes(typeOfEntity))
                        return false;
                    return true;
                }));
                if (filteredSelectedBubbleIds.length != this.selectedBubbleIds.length) {
                    this.selectedBubbleIds = filteredSelectedBubbleIds;
                    this.updateItemPreviews();
                }
                ;
            }
            /** @type {?} */
            let currentBubbles = this.allBubbles.filter((/**
             * @param {?} bubble
             * @return {?}
             */
            (bubble) => {
                for (var i = 0; i < this.facetData.length; i++) {
                    if (bubble.entity.typeOfEntity.id === this.facetData[i].type.id)
                        if (!this.facetData[i].enabled) {
                            return false;
                        }
                }
                return true;
            }));
            currentBubbles.forEach((/**
             * @param {?} bubble
             * @return {?}
             */
            (bubble) => {
                bubble.selected = false;
                if (this.selectedBubbleIds.includes(bubble.entity.id)) {
                    bubble.selected = true;
                }
            }));
            this.one('aw-home-bubble-chart').update({
                width: window.innerWidth / 1.8,
                bubbles: currentBubbles,
                reset: true
            });
        }
    }
    /**
     * @return {?}
     */
    renderItemTags() {
        /** @type {?} */
        let tagsData = [];
        this.selectedBubbleIds.forEach((/**
         * @param {?} sBid
         * @return {?}
         */
        (sBid) => {
            /** @type {?} */
            let label = '';
            for (var i = 0; i < this.allBubbles.length; i++) {
                if (this.allBubbles[i].entity.id === sBid) {
                    label = this.allBubbles[i].entity.label;
                    break;
                }
            }
            tagsData.push({ label });
        }));
        this.one('aw-home-item-tags-wrapper').update(tagsData);
    }
    /**
     * @private
     * @return {?}
     */
    _getSubnav() {
        return ['home', 'results', 'single'].map((/**
         * @param {?} page
         * @return {?}
         */
        page => ({
            text: page.toUpperCase(),
            payload: {
                source: 'navigate',
                handler: 'router',
                path: [`aw/${page}`],
                id: page
            },
            _meta: { id: page }
        })));
    }
    /**
     * @private
     * @return {?}
     */
    _getBreadcrumbs() {
        return {
            items: [{
                    label: 'Arianna Web',
                    payload: {
                        source: 'navigate',
                        handler: 'router',
                        path: [`aw/home`]
                    }
                },
                {
                    label: 'Home Layout',
                    payload: {
                        source: 'navigate',
                        handler: 'router',
                        path: [`aw/home`]
                    }
                }]
        };
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    AwHomeLayoutDS.prototype.communication;
    /**
     * @type {?}
     * @private
     */
    AwHomeLayoutDS.prototype.mainState;
    /** @type {?} */
    AwHomeLayoutDS.prototype.test;
    /**
     * @type {?}
     * @private
     */
    AwHomeLayoutDS.prototype.facetData;
    /**
     * @type {?}
     * @private
     */
    AwHomeLayoutDS.prototype.facetInputs;
    /**
     * @type {?}
     * @private
     */
    AwHomeLayoutDS.prototype.allBubbles;
    /** @type {?} */
    AwHomeLayoutDS.prototype.selectedBubbleIds;
    /** @type {?} */
    AwHomeLayoutDS.prototype.numOfItemsStr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1sYXlvdXQuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvbGF5b3V0cy9ob21lLWxheW91dC9ob21lLWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFckQsTUFBTSxPQUFPLGNBQWUsU0FBUSxnQkFBZ0I7SUFBcEQ7O1FBSVUsY0FBUyxHQUFVLElBQUksQ0FBQztRQUN4QixnQkFBVyxHQUFRLEVBQUUsQ0FBQztRQUN0QixlQUFVLEdBQVUsSUFBSSxDQUFDO1FBQzFCLHNCQUFpQixHQUFVLEVBQUUsQ0FBQztRQUM5QixrQkFBYSxHQUFXLElBQUksQ0FBQztJQTJPdEMsQ0FBQzs7Ozs7SUF6T0MsTUFBTSxDQUFDLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRTtRQUNqQyxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUUzQixJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUUvQixJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUU7WUFDMUMsT0FBTzs7OztZQUFFLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFBO1NBQ3ZDLENBQUMsQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRTtZQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixFQUFFLEVBQUMsUUFBUSxFQUFDLENBQUMsQ0FBQTtZQUMxQyxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztZQUNwQixRQUFRLENBQUMsWUFBWSxDQUFDLE9BQU87Ozs7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VTtnQkFDbEIsT0FBTyxFQUFFLFFBQVE7Z0JBQ2pCLElBQUksRUFBRSxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUM7Z0JBQ3BCLEVBQUUsRUFBRSxJQUFJO2FBQ1Q7WUFDRCxLQUFLLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFO1NBQ3BCLENBQUMsRUFBQyxDQUFDO0lBQ04sQ0FBQzs7Ozs7SUFFTyxlQUFlO1FBQ3JCLE9BQU87WUFDTCxLQUFLLEVBQUUsQ0FBQztvQkFDTixLQUFLLEVBQUUsYUFBYTtvQkFDcEIsT0FBTyxFQUFFO3dCQUNQLE1BQU0sRUFBRSxVQUFVO3dCQUNsQixPQUFPLEVBQUUsUUFBUTt3QkFDakIsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDO3FCQUNsQjtpQkFDRjtnQkFDRDtvQkFDRSxLQUFLLEVBQUUsYUFBYTtvQkFDcEIsT0FBTyxFQUFFO3dCQUNQLE1BQU0sRUFBRSxVQUFVO3dCQUNsQixPQUFPLEVBQUUsUUFBUTt3QkFDakIsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDO3FCQUNsQjtpQkFDRixDQUFDO1NBQ0gsQ0FBQztJQUNKLENBQUM7Q0FDRjs7Ozs7O0lBbFBDLHVDQUEyQjs7Ozs7SUFDM0IsbUNBQXVCOztJQUN2Qiw4QkFBb0I7Ozs7O0lBQ3BCLG1DQUFnQzs7Ozs7SUFDaEMscUNBQThCOzs7OztJQUM5QixvQ0FBaUM7O0lBQ2pDLDJDQUFxQzs7SUFDckMsdUNBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGF5b3V0RGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIEF3SG9tZUxheW91dERTIGV4dGVuZHMgTGF5b3V0RGF0YVNvdXJjZSB7XG4gIHByaXZhdGUgY29tbXVuaWNhdGlvbjogYW55O1xuICBwcml2YXRlIG1haW5TdGF0ZTogYW55O1xuICBwdWJsaWMgdGVzdDogc3RyaW5nO1xuICBwcml2YXRlIGZhY2V0RGF0YTogYW55W10gPSBudWxsO1xuICBwcml2YXRlIGZhY2V0SW5wdXRzOiBhbnkgPSB7fTtcbiAgcHJpdmF0ZSBhbGxCdWJibGVzOiBhbnlbXSA9IG51bGw7XG4gIHB1YmxpYyBzZWxlY3RlZEJ1YmJsZUlkczogYW55W10gPSBbXTtcbiAgcHVibGljIG51bU9mSXRlbXNTdHI6IHN0cmluZyA9IG51bGw7XG5cbiAgb25Jbml0KHsgY29tbXVuaWNhdGlvbiwgbWFpblN0YXRlIH0pe1xuICAgIHRoaXMuY29tbXVuaWNhdGlvbiA9IGNvbW11bmljYXRpb247XG4gICAgdGhpcy5tYWluU3RhdGUgPSBtYWluU3RhdGU7XG5cbiAgICB0aGlzLm9uZSgnYXctaGVybycpLnVwZGF0ZSh7fSk7XG5cbiAgICB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQoJ2dsb2JhbEZpbHRlcicsIHtcbiAgICAgIG9uRXJyb3I6IChlcnJvcikgPT4gY29uc29sZS5sb2coZXJyb3IpLFxuICAgIH0pLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdhcG9sbG8tcmVzcG9uc2UnLCB7cmVzcG9uc2V9KVxuICAgICAgdGhpcy5mYWNldERhdGEgPSBbXTtcbiAgICAgIHJlc3BvbnNlLmVudGl0aWVzRGF0YS5mb3JFYWNoKCAoZW50KSA9PiB7XG4gICAgICAgIHRoaXMuZmFjZXREYXRhLnB1c2goey4uLihlbnQuY291bnREYXRhKSwgZW5hYmxlZDp0cnVlfSk7XG4gICAgICB9ICk7XG4gICAgICB0aGlzLm9uZSgnYXctaG9tZS1mYWNldHMtd3JhcHBlcicpLnVwZGF0ZSh0aGlzLmZhY2V0RGF0YSk7XG4gICAgICB0aGlzLnJlbmRlckJ1YmJsZXNGcm9tQXBvbGxvUXVlcnkocmVzcG9uc2UpO1xuICAgICAgdGhpcy5yZW5kZXJQcmV2aWV3c0Zyb21BcG9sbG9RdWVyeShyZXNwb25zZSk7XG4gICAgfSk7XG5cbiAgICAvLyB1cGRhdGUgc3RyZWFtc1xuICAgIHRoaXMubWFpblN0YXRlLnVwZGF0ZSgnaGVhZFRpdGxlJywgJ0FyaWFubmEgV2ViID4gSG9tZScpO1xuICAgIHRoaXMubWFpblN0YXRlLnVwZGF0ZSgncGFnZVRpdGxlJywgJ0FyaWFubmEgV2ViOiBIb21lIExheW91dCcpO1xuICAgIC8vIHRoaXMubWFpblN0YXRlLnVwZGF0ZSgnc3VibmF2JywgdGhpcy5fZ2V0U3VibmF2KCkpO1xuICAgIC8vIHRoaXMubWFpblN0YXRlLnVwZGF0ZSgnYnJlYWRjcnVtYnMnLCB0aGlzLl9nZXRCcmVhZGNydW1icygpKTtcbiAgfVxuXG5cbiAgcmVuZGVyUHJldmlld3NGcm9tQXBvbGxvUXVlcnkocmVzcG9uc2U6IGFueSl7XG4gICAgaWYoIXJlc3BvbnNlIHx8ICFyZXNwb25zZS5pdGVtc1BhZ2luYXRpb24pIHJldHVybjtcblxuICAgIGxldCBudW1PZkl0ZW1zID0gcmVzcG9uc2UuaXRlbXNQYWdpbmF0aW9uLnRvdGFsQ291bnQ7XG4gICAgaWYobnVtT2ZJdGVtcz4wKXtcbiAgICAgIGxldCBudW1PZlRob3VzYW5kID0gMDtcbiAgICAgIHdoaWxlKG51bU9mSXRlbXM+OTk5KXtcbiAgICAgICAgbnVtT2ZJdGVtcy09MTAwMDtcbiAgICAgICAgbnVtT2ZUaG91c2FuZCArPSAxO1xuICAgICAgfVxuICAgICAgaWYobnVtT2ZUaG91c2FuZD4wKVxuICAgICAgICB0aGlzLm51bU9mSXRlbXNTdHIgPSBudW1PZlRob3VzYW5kKycuJytudW1PZkl0ZW1zO1xuICAgICAgZWxzZVxuICAgICAgIHRoaXMubnVtT2ZJdGVtc1N0ciA9IG51bU9mSXRlbXMrJyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubnVtT2ZJdGVtc1N0ciA9IG51bGw7XG4gICAgfVxuXG4gICAgdGhpcy5vbmUoJ2F3LWhvbWUtaXRlbS1wcmV2aWV3LXdyYXBwZXInKS51cGRhdGUocmVzcG9uc2UuaXRlbXNQYWdpbmF0aW9uLml0ZW1zKTtcbiAgfVxuXG4gIHB1YmxpYyBvbkJ1YmJsZVNlbGVjdGVkKHBheWxvYWQpe1xuICAgIGlmKHBheWxvYWQgJiYgcGF5bG9hZC5pZCl7XG4gICAgICBpZiggIXRoaXMuc2VsZWN0ZWRCdWJibGVJZHMuaW5jbHVkZXMocGF5bG9hZC5pZCkpXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRCdWJibGVJZHMucHVzaChwYXlsb2FkLmlkKTtcbiAgICB9XG4gICAgdGhpcy51cGRhdGVJdGVtUHJldmlld3MoKTtcbiAgfVxuXG5cbiAgcHVibGljIG9uQnViYmxlRGVzZWxlY3RlZChwYXlsb2FkKXtcbiAgICBpZihwYXlsb2FkICYmIHBheWxvYWQuaWQpXG4gICAgICB0aGlzLnNlbGVjdGVkQnViYmxlSWRzID0gdGhpcy5zZWxlY3RlZEJ1YmJsZUlkcy5maWx0ZXIoXG4gICAgICAgIChiKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChiIT09cGF5bG9hZC5pZCk7IH1cbiAgICAgICk7XG4gICAgICB0aGlzLnVwZGF0ZUl0ZW1QcmV2aWV3cygpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVJdGVtUHJldmlld3MoKXtcbiAgICB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQoJ2dsb2JhbEZpbHRlcicsIHtcbiAgICAgIG9uRXJyb3I6IChlcnJvcikgPT4gY29uc29sZS5sb2coZXJyb3IpLFxuICAgICAgcGFyYW1zOiB7IHNlbGVjdGVkRW50aXRpZXNJZHM6IHRoaXMuc2VsZWN0ZWRCdWJibGVJZHMsXG4gICAgICAgICAgICAgICAgaXRlbXNQYWdpbmF0aW9uOnsgb2Zmc2V0OjAsbGltaXQ6NCB9IH0sXG4gICAgfSkuc3Vic2NyaWJlKChyZXNwb25zZSkgPT4ge1xuICAgICAgLy8gdGhlIGZhY2V0cyBzaG91bGQgYmUgaGFuZGxlZCBieSB0aGUgbGF5b3V0XG4gICAgICAvLyAob3RoZXJ3aXNlIHRoZXkgd291bGQgYWx3YXlzIHJldHVybiBhcyBlbmFibGVkKVxuICAgICAgLy90aGlzLmZhY2V0RGF0YSA9IFtdO1xuICAgICAgLy9yZXNwb25zZS5lbnRpdGllc0RhdGEuZm9yRWFjaCggKGVudCkgPT4ge1xuICAgICAgLy8gIHRoaXMuZmFjZXREYXRhLnB1c2goey4uLihlbnQuY291bnREYXRhKSwgZW5hYmxlZDp0cnVlfSk7XG4gICAgICAvL30pO1xuICAgICAgdGhpcy5yZW5kZXJQcmV2aWV3c0Zyb21BcG9sbG9RdWVyeShyZXNwb25zZSk7XG4gICAgICB0aGlzLnJlbmRlckl0ZW1UYWdzKCk7XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXJCdWJibGVzRnJvbUFwb2xsb1F1ZXJ5KHJlc3BvbnNlOiBhbnkpe1xuICAgIGlmKCAhcmVzcG9uc2UgfHwgIXJlc3BvbnNlLmVudGl0aWVzRGF0YSApIHJldHVybjtcbiAgICB0aGlzLmFsbEJ1YmJsZXMgPSBbXTtcbiAgICBmb3IodmFyIGk9MDtpPHJlc3BvbnNlLmVudGl0aWVzRGF0YS5sZW5ndGg7aSsrKXtcbiAgICAgIGxldCBjdXJyZW50VG9FID0gcmVzcG9uc2UuZW50aXRpZXNEYXRhW2ldO1xuICAgICAgZm9yKHZhciBqPTA7ajxjdXJyZW50VG9FLmVudGl0aWVzQ291bnREYXRhLmxlbmd0aDtqKyspe1xuICAgICAgICB0aGlzLmFsbEJ1YmJsZXMucHVzaChcbiAgICAgICAgICB7XG4gICAgICAgICAgICAuLi5jdXJyZW50VG9FLmVudGl0aWVzQ291bnREYXRhW2pdLFxuICAgICAgICAgICAgY29sb3I6Y3VycmVudFRvRS5jb3VudERhdGEudHlwZS5jb2xvclxuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmFsbEJ1YmJsZXMubWFwKCAoYnViYmxlKSA9PiB7XG4gICAgICAvLyBkMy9zdmcgZG9lc24ndCBhbGxvdyAnLScgb3Igc3RyaW5ncyBzdGFydGluZyB3aXRoIGEgbnVtYmVyIGFzIGlkc1xuICAgICAgYnViYmxlLmVudGl0eS5pZCA9ICdCXycrYnViYmxlLmVudGl0eS5pZC5yZXBsYWNlKC8tL2csJ18nKTtcbiAgICAgIHJldHVybiBidWJibGU7XG4gICAgfSk7XG4gICAgdGhpcy5vbmUoJ2F3LWhvbWUtYnViYmxlLWNoYXJ0JykudXBkYXRlKHtcbiAgICAgIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aC8xLjgsXG4gICAgICBidWJibGVzOnRoaXMuYWxsQnViYmxlc1xuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlRmFjZXRTZWFyY2hDaGFuZ2UoY2hhbmdlKSB7XG4gICAgdmFyIHBheWxvYWQ6IHN0cmluZyA9IGNoYW5nZS5pbnB1dFBheWxvYWQ7XG4gICAgdmFyIHZhbHVlOiBzdHJpbmcgPSBjaGFuZ2UudmFsdWU7XG4gICAgLy8gc3RvcmUgdGhlIGVudGVyZWQgdGV4dCBpbiBmYWNldElucHV0c1xuICAgIHRoaXMuZmFjZXRJbnB1dHNbcGF5bG9hZF0gPSB2YWx1ZTtcbiAgICBjb25zb2xlLmxvZygnY2hhbmdlZDogJysgcGF5bG9hZCArICcgd2l0aCB2YWx1ZTogJyArIHZhbHVlKVxuICB9XG5cbiAgaGFuZGxlRmFjZXRTZWFyY2hFbnRlcihlbnRlcikge1xuICAgIHZhciBwYXlsb2FkOiBzdHJpbmcgPSBlbnRlci5pbnB1dFBheWxvYWQ7XG4gICAgdmFyIHZhbHVlOiBzdHJpbmcgPSB0aGlzLmZhY2V0SW5wdXRzW3BheWxvYWRdO1xuICAgIC8vIGdldCB0aGUgdGV4dCBlbnRlcmVkIGluIHRoaXMgaW5wdXRcbiAgICBjb25zb2xlLmxvZygnZW50ZXJlZDogJyArIHBheWxvYWQgKyAnIHdpdGggdmFsdWU6ICcgKyB2YWx1ZSlcbiAgfVxuXG4gIGhhbmRsZUZhY2V0SGVhZGVyQ2xpY2soZmFjZXRJZCl7XG4gICAgbGV0IHVwZGF0ZUJ1YmJsZXMgPSBmYWxzZTtcbiAgICBsZXQgZW5hYmxlZEZhY2V0cyA9IHRoaXMuZmFjZXREYXRhLmZpbHRlciggKGYpID0+IGYuZW5hYmxlZCApLmxlbmd0aDtcbiAgICB0aGlzLmZhY2V0RGF0YS5mb3JFYWNoKCAoZikgPT4ge1xuICAgICAgICBpZihmLnR5cGUuaWQ9PT1mYWNldElkKXtcbiAgICAgICAgICBpZihmLmVuYWJsZWQpe1xuICAgICAgICAgICAgaWYoZW5hYmxlZEZhY2V0cz4xKXtcbiAgICAgICAgICAgICAgZi5lbmFibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgIHVwZGF0ZUJ1YmJsZXMgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgdXBkYXRlQnViYmxlcyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5vbmUoJ2F3LWhvbWUtZmFjZXRzLXdyYXBwZXInKS51cGRhdGUodGhpcy5mYWNldERhdGEpO1xuICAgIGlmKHVwZGF0ZUJ1YmJsZXMpe1xuICAgICAgbGV0IGRpc2FibGVGYWNldHNJZHMgPSBbXTtcbiAgICAgIHRoaXMuZmFjZXREYXRhLmZvckVhY2goIChmRCkgPT4ge1xuICAgICAgICBpZighZkQuZW5hYmxlZCkgZGlzYWJsZUZhY2V0c0lkcy5wdXNoKGZELnR5cGUuaWQpO1xuICAgICAgfSk7XG5cbiAgICAgIGlmKGRpc2FibGVGYWNldHNJZHMpe1xuICAgICAgICBsZXQgZmlsdGVyZWRTZWxlY3RlZEJ1YmJsZUlkcyA9IHRoaXMuc2VsZWN0ZWRCdWJibGVJZHMuZmlsdGVyKCAoYklkKSA9PiB7XG4gICAgICAgICAgbGV0IHR5cGVPZkVudGl0eSA9IFwiXCI7XG4gICAgICAgICAgZm9yKHZhciBpPTA7aTx0aGlzLmFsbEJ1YmJsZXMubGVuZ3RoO2krKyl7XG4gICAgICAgICAgICBpZih0aGlzLmFsbEJ1YmJsZXNbaV0uZW50aXR5LmlkPT09YklkKXtcbiAgICAgICAgICAgICAgdHlwZU9mRW50aXR5PXRoaXMuYWxsQnViYmxlc1tpXS5lbnRpdHkudHlwZU9mRW50aXR5LmlkO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYoZGlzYWJsZUZhY2V0c0lkcy5pbmNsdWRlcyh0eXBlT2ZFbnRpdHkpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgICBpZihmaWx0ZXJlZFNlbGVjdGVkQnViYmxlSWRzLmxlbmd0aCE9dGhpcy5zZWxlY3RlZEJ1YmJsZUlkcy5sZW5ndGgpe1xuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRCdWJibGVJZHMgPSBmaWx0ZXJlZFNlbGVjdGVkQnViYmxlSWRzO1xuICAgICAgICAgIHRoaXMudXBkYXRlSXRlbVByZXZpZXdzKCk7XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBsZXQgY3VycmVudEJ1YmJsZXMgPSB0aGlzLmFsbEJ1YmJsZXMuZmlsdGVyKFxuICAgICAgICAoYnViYmxlKSA9PiB7XG4gICAgICAgICAgZm9yKHZhciBpPTA7IGk8dGhpcy5mYWNldERhdGEubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgaWYoIGJ1YmJsZS5lbnRpdHkudHlwZU9mRW50aXR5LmlkID09PSB0aGlzLmZhY2V0RGF0YVtpXS50eXBlLmlkIClcbiAgICAgICAgICAgICAgaWYoICF0aGlzLmZhY2V0RGF0YVtpXS5lbmFibGVkICl7IHJldHVybiBmYWxzZTsgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICAgIGN1cnJlbnRCdWJibGVzLmZvckVhY2goIChidWJibGUpID0+IHtcbiAgICAgICAgYnViYmxlLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgIGlmKHRoaXMuc2VsZWN0ZWRCdWJibGVJZHMuaW5jbHVkZXMoYnViYmxlLmVudGl0eS5pZCkpe1xuICAgICAgICAgIGJ1YmJsZS5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5vbmUoJ2F3LWhvbWUtYnViYmxlLWNoYXJ0JykudXBkYXRlKHtcbiAgICAgICAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLzEuOCxcbiAgICAgICAgYnViYmxlczpjdXJyZW50QnViYmxlcyxcbiAgICAgICAgcmVzZXQ6dHJ1ZVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVySXRlbVRhZ3MoKXtcbiAgICBsZXQgdGFnc0RhdGEgPSBbXTtcbiAgICB0aGlzLnNlbGVjdGVkQnViYmxlSWRzLmZvckVhY2goIChzQmlkKSA9PiB7XG4gICAgICBsZXQgbGFiZWwgPSAnJztcbiAgICAgIGZvcih2YXIgaT0wO2k8dGhpcy5hbGxCdWJibGVzLmxlbmd0aDtpKyspe1xuICAgICAgICBpZih0aGlzLmFsbEJ1YmJsZXNbaV0uZW50aXR5LmlkPT09c0JpZCl7XG4gICAgICAgICAgbGFiZWwgPSB0aGlzLmFsbEJ1YmJsZXNbaV0uZW50aXR5LmxhYmVsO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0YWdzRGF0YS5wdXNoKHtsYWJlbH0pO1xuICAgIH0pO1xuICAgIHRoaXMub25lKCdhdy1ob21lLWl0ZW0tdGFncy13cmFwcGVyJykudXBkYXRlKHRhZ3NEYXRhKTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldFN1Ym5hdigpe1xuICAgIHJldHVybiBbJ2hvbWUnLCAncmVzdWx0cycsICdzaW5nbGUnXS5tYXAocGFnZSA9PiAoe1xuICAgICAgdGV4dDogcGFnZS50b1VwcGVyQ2FzZSgpLCBcbiAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgc291cmNlOiAnbmF2aWdhdGUnLFxuICAgICAgICBoYW5kbGVyOiAncm91dGVyJyxcbiAgICAgICAgcGF0aDogW2Bhdy8ke3BhZ2V9YF0sXG4gICAgICAgIGlkOiBwYWdlXG4gICAgICB9LFxuICAgICAgX21ldGE6IHsgaWQ6IHBhZ2UgfVxuICAgIH0pKTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldEJyZWFkY3J1bWJzKCl7XG4gICAgcmV0dXJuIHtcbiAgICAgIGl0ZW1zOiBbe1xuICAgICAgICBsYWJlbDogJ0FyaWFubmEgV2ViJyxcbiAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgIHNvdXJjZTogJ25hdmlnYXRlJyxcbiAgICAgICAgICBoYW5kbGVyOiAncm91dGVyJyxcbiAgICAgICAgICBwYXRoOiBbYGF3L2hvbWVgXVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogJ0hvbWUgTGF5b3V0JyxcbiAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgIHNvdXJjZTogJ25hdmlnYXRlJyxcbiAgICAgICAgICBoYW5kbGVyOiAncm91dGVyJyxcbiAgICAgICAgICBwYXRoOiBbYGF3L2hvbWVgXVxuICAgICAgICB9XG4gICAgICB9XSBcbiAgICB9O1xuICB9XG59Il19