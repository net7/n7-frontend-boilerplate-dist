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
        this.selectedBubbles = [];
        this.numOfItemsStr = null;
        //public _updateBubbles: any = null;
        this._bubbleChart = null;
        this.maxBubblesSelectable = 3;
        this.entityBubbleIdMap = {};
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
            this.facetData = [];
            response.entitiesData.forEach((/**
             * @param {?} ent
             * @return {?}
             */
            (ent) => {
                this.facetData.push(Object.assign({}, (ent.countData), { enabled: true }));
            }));
            this.one('aw-home-facets-wrapper').update(this.facetData);
            this.setAllBubblesFromApolloQuery(response);
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
            /** @type {?} */
            let numOfItemsTmpStr = numOfItems + '';
            if (numOfItems < 10)
                numOfItemsTmpStr = '00' + numOfItems;
            else if (numOfItems < 100)
                numOfItemsTmpStr = '0' + numOfItems;
            if (numOfThousand > 0)
                this.numOfItemsStr = numOfThousand + '.' + numOfItemsTmpStr;
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
        if (payload && payload.bubble) {
            if (!this.selectedBubbles.includes(payload.bubble)) {
                if (this.selectedBubbles.length < this.maxBubblesSelectable) {
                    this.selectedBubbles.push(payload.bubble);
                    //payload.bubble.hasCloseIcon=true;
                    //if(this._updateBubbles) this._updateBubbles();
                    this.updateBubblesAndItemPreviews();
                }
            }
        }
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    onBubbleDeselected(payload) {
        if (payload && payload.bubble) {
            this.selectedBubbles = this.selectedBubbles.filter((/**
             * @param {?} b
             * @return {?}
             */
            (b) => b.id !== payload.bubble.id));
            if (payload.bubble.hasCloseIcon) {
                payload.bubble.hasCloseIcon = false;
                //if(this._updateBubbles) this._updateBubbles();
                this.updateBubblesAndItemPreviews();
            }
        }
    }
    /**
     * @private
     * @return {?}
     */
    updateBubblesAndItemPreviews() {
        /** @type {?} */
        let selectedEntitiesIds = [];
        if (this.entityBubbleIdMap)
            this.selectedBubbles.forEach((/**
             * @param {?} sB
             * @return {?}
             */
            (sB) => {
                /** @type {?} */
                let entityId = this.entityBubbleIdMap[sB.id];
                if (entityId)
                    selectedEntitiesIds.push(entityId);
            }));
        this.communication.request$('globalFilter', {
            onError: (/**
             * @param {?} error
             * @return {?}
             */
            (error) => console.log(error)),
            params: { selectedEntitiesIds,
                itemsPagination: { offset: 0, limit: 4 } },
        }).subscribe((/**
         * @param {?} response
         * @return {?}
         */
        (response) => {
            this.renderPreviewsFromApolloQuery(response);
            this.renderItemTags();
            this.setAllBubblesFromApolloQuery(response, true);
        }));
    }
    /**
     * @param {?} response
     * @param {?=} reset
     * @return {?}
     */
    setAllBubblesFromApolloQuery(response, reset) {
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
        this.entityBubbleIdMap = {};
        this.allBubbles.forEach((/**
         * @param {?} bubble
         * @return {?}
         */
        (bubble) => {
            // d3/svg doesn't allow '-' as part of the ids
            // or strings starting with a number as ids
            bubble.id = 'B_' + bubble.entity.id.replace(/-/g, '_');
            this.entityBubbleIdMap[bubble.id] = bubble.entity.id;
            return bubble;
        }));
        this.allBubbles.forEach((/**
         * @param {?} bubble
         * @return {?}
         */
        (bubble) => {
            bubble.selected = false;
            for (var i = 0; i < this.selectedBubbles.length; i++) {
                if (this.selectedBubbles[i].id === bubble.id)
                    bubble.selected = true;
            }
        }));
        this.one('aw-home-bubble-chart').update({
            width: window.innerWidth / 1.8,
            bubbles: this.filterBubblesBasedOnFacetsEnabled(),
            reset: (reset ? reset : false),
            //setUpdateReference: (ref) => this._updateBubbles = ref,
            setBubbleChart: (/**
             * @param {?} bubbleCref
             * @return {?}
             */
            (bubbleCref) => this._bubbleChart = bubbleCref)
        });
    }
    /**
     * @return {?}
     */
    filterBubblesBasedOnFacetsEnabled() {
        /** @type {?} */
        let result = this.allBubbles.filter((/**
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
        console.log({ filterBubbles: result });
        return result;
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
                let filteredSelectedBubbles = this.selectedBubbles.filter((/**
                 * @param {?} bubble
                 * @return {?}
                 */
                (bubble) => {
                    /** @type {?} */
                    let typeOfEntity = "";
                    for (var i = 0; i < this.allBubbles.length; i++) {
                        if (this.allBubbles[i].id === bubble.id) {
                            typeOfEntity = this.allBubbles[i].entity.typeOfEntity.id;
                            break;
                        }
                    }
                    if (disableFacetsIds.includes(typeOfEntity))
                        return false;
                    return true;
                }));
                if (filteredSelectedBubbles.length != this.selectedBubbles.length) {
                    this.selectedBubbles = filteredSelectedBubbles;
                    this.updateBubblesAndItemPreviews();
                }
                ;
            }
            this.allBubbles.forEach((/**
             * @param {?} bubble
             * @return {?}
             */
            (bubble) => {
                bubble.selected = false;
                for (var i = 0; i < this.selectedBubbles.length; i++) {
                    if (this.selectedBubbles[i].id === bubble.id)
                        bubble.selected = true;
                }
            }));
            this.one('aw-home-bubble-chart').update({
                width: window.innerWidth / 1.8,
                bubbles: this.filterBubblesBasedOnFacetsEnabled(),
                setBubbleChart: (/**
                 * @param {?} bubbleCref
                 * @return {?}
                 */
                (bubbleCref) => this._bubbleChart = bubbleCref),
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
        this.selectedBubbles.forEach((/**
         * @param {?} sBubble
         * @return {?}
         */
        (sBubble) => {
            /** @type {?} */
            let label = '';
            for (var i = 0; i < this.allBubbles.length; i++) {
                if (this.allBubbles[i].id === sBubble.id) {
                    label = this.allBubbles[i].entity.label;
                    break;
                }
            }
            tagsData.push({ label, icon: "n7-icon-close", payload: sBubble.id, classes: "tag-" + this.allBubbles[i].entity.typeOfEntity.id });
        }));
        this.one('aw-home-item-tags-wrapper').update(tagsData);
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    onTagClicked(payload) {
        if (!payload)
            return;
        /** @type {?} */
        const bubbleId = payload;
        if (this._bubbleChart) {
            this._bubbleChart.selectAll(`g`).each((/**
             * @param {?} b
             * @return {?}
             */
            b => {
                if (b.id === bubbleId)
                    b.hasCloseIcon = false;
            }));
        }
        this.selectedBubbles = this.selectedBubbles.filter((/**
         * @param {?} b
         * @return {?}
         */
        (b) => b.id !== payload));
        //if(this._updateBubbles) this._updateBubbles();
        this.updateBubblesAndItemPreviews();
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
    AwHomeLayoutDS.prototype.selectedBubbles;
    /** @type {?} */
    AwHomeLayoutDS.prototype.numOfItemsStr;
    /**
     * @type {?}
     * @private
     */
    AwHomeLayoutDS.prototype._bubbleChart;
    /**
     * @type {?}
     * @private
     */
    AwHomeLayoutDS.prototype.maxBubblesSelectable;
    /**
     * @type {?}
     * @private
     */
    AwHomeLayoutDS.prototype.entityBubbleIdMap;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1sYXlvdXQuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvbGF5b3V0cy9ob21lLWxheW91dC9ob21lLWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFckQsTUFBTSxPQUFPLGNBQWUsU0FBUSxnQkFBZ0I7SUFBcEQ7O1FBSVUsY0FBUyxHQUFVLElBQUksQ0FBQztRQUN4QixnQkFBVyxHQUFRLEVBQUUsQ0FBQztRQUN0QixlQUFVLEdBQVUsSUFBSSxDQUFDO1FBQzFCLG9CQUFlLEdBQVUsRUFBRSxDQUFDO1FBQzVCLGtCQUFhLEdBQVcsSUFBSSxDQUFDOztRQUU1QixpQkFBWSxHQUFRLElBQUksQ0FBQztRQUN6Qix5QkFBb0IsR0FBVSxDQUFDLENBQUM7UUFDaEMsc0JBQWlCLEdBQVEsRUFBRSxDQUFDO0lBeVJ0QyxDQUFDOzs7OztJQXZSQyxNQUFNLENBQUMsRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFO1FBQ2pDLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ25DLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBRTNCLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRS9CLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRTtZQUMxQyxPQUFPOzs7O1lBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7U0FDdkMsQ0FBQyxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLFFBQVEsRUFBRSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1lBQ3BCLFFBQVEsQ0FB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Q25DLHVDQUFvQzs7Ozs7SUFFcEMsc0NBQWlDOzs7OztJQUNqQyw4Q0FBd0M7Ozs7O0lBQ3hDLDJDQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExheW91dERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBBd0hvbWVMYXlvdXREUyBleHRlbmRzIExheW91dERhdGFTb3VyY2Uge1xuICBwcml2YXRlIGNvbW11bmljYXRpb246IGFueTtcbiAgcHJpdmF0ZSBtYWluU3RhdGU6IGFueTtcbiAgcHVibGljIHRlc3Q6IHN0cmluZztcbiAgcHJpdmF0ZSBmYWNldERhdGE6IGFueVtdID0gbnVsbDtcbiAgcHJpdmF0ZSBmYWNldElucHV0czogYW55ID0ge307XG4gIHByaXZhdGUgYWxsQnViYmxlczogYW55W10gPSBudWxsO1xuICBwdWJsaWMgc2VsZWN0ZWRCdWJibGVzOiBhbnlbXSA9IFtdO1xuICBwdWJsaWMgbnVtT2ZJdGVtc1N0cjogc3RyaW5nID0gbnVsbDtcbiAgLy9wdWJsaWMgX3VwZGF0ZUJ1YmJsZXM6IGFueSA9IG51bGw7XG4gIHByaXZhdGUgX2J1YmJsZUNoYXJ0OiBhbnkgPSBudWxsO1xuICBwcml2YXRlIG1heEJ1YmJsZXNTZWxlY3RhYmxlOm51bWJlciA9IDM7XG4gIHByaXZhdGUgZW50aXR5QnViYmxlSWRNYXA6IGFueSA9IHt9O1xuXG4gIG9uSW5pdCh7IGNvbW11bmljYXRpb24sIG1haW5TdGF0ZSB9KXtcbiAgICB0aGlzLmNvbW11bmljYXRpb24gPSBjb21tdW5pY2F0aW9uO1xuICAgIHRoaXMubWFpblN0YXRlID0gbWFpblN0YXRlO1xuXG4gICAgdGhpcy5vbmUoJ2F3LWhlcm8nKS51cGRhdGUoe30pO1xuXG4gICAgdGhpcy5jb21tdW5pY2F0aW9uLnJlcXVlc3QkKCdnbG9iYWxGaWx0ZXInLCB7XG4gICAgICBvbkVycm9yOiAoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKSxcbiAgICB9KS5zdWJzY3JpYmUoKHJlc3BvbnNlKSA9PiB7XG4gICAgICB0aGlzLmZhY2V0RGF0YSA9IFtdO1xuICAgICAgcmVzcG9uc2UuZW50aXRpZXNEYXRhLmZvckVhY2goIChlbnQpID0+IHtcbiAgICAgICAgdGhpcy5mYWNldERhdGEucHVzaCh7Li4uKGVudC5jb3VudERhdGEpLCBlbmFibGVkOnRydWV9KTtcbiAgICAgIH0gKTtcbiAgICAgIHRoaXMub25lKCdhdy1ob21lLWZhY2V0cy13cmFwcGVyJykudXBkYXRlKHRoaXMuZmFjZXREYXRhKTtcbiAgICAgIHRoaXMuc2V0QWxsQnViYmxlc0Zyb21BcG9sbG9RdWVyeShyZXNwb25zZSk7XG4gICAgICB0aGlzLnJlbmRlclByZXZpZXdzRnJvbUFwb2xsb1F1ZXJ5KHJlc3BvbnNlKTtcbiAgICB9KTtcblxuICAgIC8vIHVwZGF0ZSBzdHJlYW1zXG4gICAgdGhpcy5tYWluU3RhdGUudXBkYXRlKCdoZWFkVGl0bGUnLCAnQXJpYW5uYSBXZWIgPiBIb21lJyk7XG4gICAgdGhpcy5tYWluU3RhdGUudXBkYXRlKCdwYWdlVGl0bGUnLCAnQXJpYW5uYSBXZWI6IEhvbWUgTGF5b3V0Jyk7XG4gICAgLy8gdGhpcy5tYWluU3RhdGUudXBkYXRlKCdzdWJuYXYnLCB0aGlzLl9nZXRTdWJuYXYoKSk7XG4gICAgLy8gdGhpcy5tYWluU3RhdGUudXBkYXRlKCdicmVhZGNydW1icycsIHRoaXMuX2dldEJyZWFkY3J1bWJzKCkpO1xuICB9XG5cblxuICByZW5kZXJQcmV2aWV3c0Zyb21BcG9sbG9RdWVyeShyZXNwb25zZTogYW55KXtcbiAgICBpZighcmVzcG9uc2UgfHwgIXJlc3BvbnNlLml0ZW1zUGFnaW5hdGlvbikgcmV0dXJuO1xuXG4gICAgbGV0IG51bU9mSXRlbXMgPSByZXNwb25zZS5pdGVtc1BhZ2luYXRpb24udG90YWxDb3VudDtcbiAgICBpZihudW1PZkl0ZW1zPjApe1xuICAgICAgbGV0IG51bU9mVGhvdXNhbmQgPSAwO1xuICAgICAgd2hpbGUobnVtT2ZJdGVtcz45OTkpe1xuICAgICAgICBudW1PZkl0ZW1zLT0xMDAwO1xuICAgICAgICBudW1PZlRob3VzYW5kICs9IDE7XG4gICAgICB9XG4gICAgICBsZXQgbnVtT2ZJdGVtc1RtcFN0ciA9IG51bU9mSXRlbXMgKyAnJztcbiAgICAgIGlmKG51bU9mSXRlbXM8MTApIG51bU9mSXRlbXNUbXBTdHIgPSAnMDAnK251bU9mSXRlbXM7XG4gICAgICBlbHNlIGlmKG51bU9mSXRlbXM8MTAwKSBudW1PZkl0ZW1zVG1wU3RyID0gJzAnK251bU9mSXRlbXM7XG4gICAgICBpZihudW1PZlRob3VzYW5kPjApXG4gICAgICAgIHRoaXMubnVtT2ZJdGVtc1N0ciA9IG51bU9mVGhvdXNhbmQrJy4nK251bU9mSXRlbXNUbXBTdHI7XG4gICAgICBlbHNlXG4gICAgICAgdGhpcy5udW1PZkl0ZW1zU3RyID0gbnVtT2ZJdGVtcysnJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5udW1PZkl0ZW1zU3RyID0gbnVsbDtcbiAgICB9XG5cbiAgICB0aGlzLm9uZSgnYXctaG9tZS1pdGVtLXByZXZpZXctd3JhcHBlcicpLnVwZGF0ZShyZXNwb25zZS5pdGVtc1BhZ2luYXRpb24uaXRlbXMpO1xuICB9XG5cbiAgcHVibGljIG9uQnViYmxlU2VsZWN0ZWQocGF5bG9hZCl7XG4gICAgaWYocGF5bG9hZCAmJiBwYXlsb2FkLmJ1YmJsZSl7XG4gICAgICBpZighdGhpcy5zZWxlY3RlZEJ1YmJsZXMuaW5jbHVkZXMocGF5bG9hZC5idWJibGUpKXtcbiAgICAgICAgaWYodGhpcy5zZWxlY3RlZEJ1YmJsZXMubGVuZ3RoPHRoaXMubWF4QnViYmxlc1NlbGVjdGFibGUpe1xuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRCdWJibGVzLnB1c2gocGF5bG9hZC5idWJibGUpO1xuICAgICAgICAgIC8vcGF5bG9hZC5idWJibGUuaGFzQ2xvc2VJY29uPXRydWU7XG4gICAgICAgICAgLy9pZih0aGlzLl91cGRhdGVCdWJibGVzKSB0aGlzLl91cGRhdGVCdWJibGVzKCk7XG4gICAgICAgICAgdGhpcy51cGRhdGVCdWJibGVzQW5kSXRlbVByZXZpZXdzKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuXG4gIHB1YmxpYyBvbkJ1YmJsZURlc2VsZWN0ZWQocGF5bG9hZCl7XG4gICAgaWYocGF5bG9hZCAmJiBwYXlsb2FkLmJ1YmJsZSl7XG4gICAgICB0aGlzLnNlbGVjdGVkQnViYmxlcyA9IHRoaXMuc2VsZWN0ZWRCdWJibGVzLmZpbHRlcihcbiAgICAgICAgKGIpID0+IGIuaWQhPT1wYXlsb2FkLmJ1YmJsZS5pZCApO1xuICAgICAgaWYocGF5bG9hZC5idWJibGUuaGFzQ2xvc2VJY29uKXtcbiAgICAgICAgcGF5bG9hZC5idWJibGUuaGFzQ2xvc2VJY29uPWZhbHNlO1xuICAgICAgICAvL2lmKHRoaXMuX3VwZGF0ZUJ1YmJsZXMpIHRoaXMuX3VwZGF0ZUJ1YmJsZXMoKTtcbiAgICAgICAgdGhpcy51cGRhdGVCdWJibGVzQW5kSXRlbVByZXZpZXdzKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVCdWJibGVzQW5kSXRlbVByZXZpZXdzKCl7XG4gICAgbGV0IHNlbGVjdGVkRW50aXRpZXNJZHMgPSBbXTtcbiAgICBpZih0aGlzLmVudGl0eUJ1YmJsZUlkTWFwKVxuICAgIHRoaXMuc2VsZWN0ZWRCdWJibGVzLmZvckVhY2goIChzQikgPT4ge1xuICAgICAgbGV0IGVudGl0eUlkID0gdGhpcy5lbnRpdHlCdWJibGVJZE1hcFtzQi5pZF07XG4gICAgICBpZihlbnRpdHlJZClcbiAgICAgICAgc2VsZWN0ZWRFbnRpdGllc0lkcy5wdXNoKGVudGl0eUlkKTtcbiAgICB9KTtcbiAgICB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQoJ2dsb2JhbEZpbHRlcicsIHtcbiAgICAgIG9uRXJyb3I6IChlcnJvcikgPT4gY29uc29sZS5sb2coZXJyb3IpLFxuICAgICAgcGFyYW1zOiB7IHNlbGVjdGVkRW50aXRpZXNJZHMsXG4gICAgICAgICAgICAgICAgaXRlbXNQYWdpbmF0aW9uOnsgb2Zmc2V0OjAsbGltaXQ6NCB9IH0sXG4gICAgfSkuc3Vic2NyaWJlKChyZXNwb25zZSkgPT4ge1xuICAgICAgdGhpcy5yZW5kZXJQcmV2aWV3c0Zyb21BcG9sbG9RdWVyeShyZXNwb25zZSk7XG4gICAgICB0aGlzLnJlbmRlckl0ZW1UYWdzKCk7XG4gICAgICB0aGlzLnNldEFsbEJ1YmJsZXNGcm9tQXBvbGxvUXVlcnkocmVzcG9uc2UsdHJ1ZSk7XG4gICAgfSk7XG4gIH1cblxuICBzZXRBbGxCdWJibGVzRnJvbUFwb2xsb1F1ZXJ5KHJlc3BvbnNlOiBhbnkscmVzZXQ/OmJvb2xlYW4pe1xuICAgIGlmKCAhcmVzcG9uc2UgfHwgIXJlc3BvbnNlLmVudGl0aWVzRGF0YSApIHJldHVybjtcbiAgICB0aGlzLmFsbEJ1YmJsZXMgPSBbXTtcbiAgICBmb3IodmFyIGk9MDtpPHJlc3BvbnNlLmVudGl0aWVzRGF0YS5sZW5ndGg7aSsrKXtcbiAgICAgIGxldCBjdXJyZW50VG9FID0gcmVzcG9uc2UuZW50aXRpZXNEYXRhW2ldO1xuICAgICAgZm9yKHZhciBqPTA7ajxjdXJyZW50VG9FLmVudGl0aWVzQ291bnREYXRhLmxlbmd0aDtqKyspe1xuICAgICAgICB0aGlzLmFsbEJ1YmJsZXMucHVzaChcbiAgICAgICAgICB7XG4gICAgICAgICAgICAuLi5jdXJyZW50VG9FLmVudGl0aWVzQ291bnREYXRhW2pdLFxuICAgICAgICAgICAgY29sb3I6Y3VycmVudFRvRS5jb3VudERhdGEudHlwZS5jb2xvclxuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmVudGl0eUJ1YmJsZUlkTWFwID0ge307XG4gICAgdGhpcy5hbGxCdWJibGVzLmZvckVhY2goIChidWJibGUpID0+IHtcbiAgICAgIC8vIGQzL3N2ZyBkb2Vzbid0IGFsbG93ICctJyBhcyBwYXJ0IG9mIHRoZSBpZHNcbiAgICAgIC8vIG9yIHN0cmluZ3Mgc3RhcnRpbmcgd2l0aCBhIG51bWJlciBhcyBpZHNcbiAgICAgIGJ1YmJsZS5pZCA9ICdCXycrYnViYmxlLmVudGl0eS5pZC5yZXBsYWNlKC8tL2csJ18nKTtcbiAgICAgIHRoaXMuZW50aXR5QnViYmxlSWRNYXBbYnViYmxlLmlkXT1idWJibGUuZW50aXR5LmlkO1xuICAgICAgcmV0dXJuIGJ1YmJsZTtcbiAgICB9KTtcbiAgICB0aGlzLmFsbEJ1YmJsZXMuZm9yRWFjaCggKGJ1YmJsZSkgPT4ge1xuICAgICAgYnViYmxlLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICBmb3IodmFyIGk9MDsgaTx0aGlzLnNlbGVjdGVkQnViYmxlcy5sZW5ndGg7aSsrKXtcbiAgICAgICAgaWYodGhpcy5zZWxlY3RlZEJ1YmJsZXNbaV0uaWQ9PT1idWJibGUuaWQpIGJ1YmJsZS5zZWxlY3RlZD10cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMub25lKCdhdy1ob21lLWJ1YmJsZS1jaGFydCcpLnVwZGF0ZSh7XG4gICAgICB3aWR0aDogd2luZG93LmlubmVyV2lkdGgvMS44LFxuICAgICAgYnViYmxlczogdGhpcy5maWx0ZXJCdWJibGVzQmFzZWRPbkZhY2V0c0VuYWJsZWQoKSxcbiAgICAgIHJlc2V0OiAoIHJlc2V0PyByZXNldCA6IGZhbHNlICksXG4gICAgICAvL3NldFVwZGF0ZVJlZmVyZW5jZTogKHJlZikgPT4gdGhpcy5fdXBkYXRlQnViYmxlcyA9IHJlZixcbiAgICAgIHNldEJ1YmJsZUNoYXJ0OiAoYnViYmxlQ3JlZikgPT4gdGhpcy5fYnViYmxlQ2hhcnQgPSBidWJibGVDcmVmXG4gICAgfSk7XG4gIH1cblxuICBmaWx0ZXJCdWJibGVzQmFzZWRPbkZhY2V0c0VuYWJsZWQoKXtcbiAgICBsZXQgcmVzdWx0ID0gdGhpcy5hbGxCdWJibGVzLmZpbHRlcihcbiAgICAgIChidWJibGUpID0+IHtcbiAgICAgICAgZm9yKHZhciBpPTA7IGk8dGhpcy5mYWNldERhdGEubGVuZ3RoOyBpKyspe1xuICAgICAgICAgIGlmKCBidWJibGUuZW50aXR5LnR5cGVPZkVudGl0eS5pZCA9PT0gdGhpcy5mYWNldERhdGFbaV0udHlwZS5pZCApXG4gICAgICAgICAgICBpZiggIXRoaXMuZmFjZXREYXRhW2ldLmVuYWJsZWQgKXsgcmV0dXJuIGZhbHNlOyB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgKTtcbiAgICBjb25zb2xlLmxvZyh7ZmlsdGVyQnViYmxlczpyZXN1bHR9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cblxuICBoYW5kbGVGYWNldFNlYXJjaENoYW5nZShjaGFuZ2UpIHtcbiAgICB2YXIgcGF5bG9hZDogc3RyaW5nID0gY2hhbmdlLmlucHV0UGF5bG9hZDtcbiAgICB2YXIgdmFsdWU6IHN0cmluZyA9IGNoYW5nZS52YWx1ZTtcbiAgICAvLyBzdG9yZSB0aGUgZW50ZXJlZCB0ZXh0IGluIGZhY2V0SW5wdXRzXG4gICAgdGhpcy5mYWNldElucHV0c1twYXlsb2FkXSA9IHZhbHVlO1xuICAgIGNvbnNvbGUubG9nKCdjaGFuZ2VkOiAnKyBwYXlsb2FkICsgJyB3aXRoIHZhbHVlOiAnICsgdmFsdWUpXG4gIH1cblxuICBoYW5kbGVGYWNldFNlYXJjaEVudGVyKGVudGVyKSB7XG4gICAgdmFyIHBheWxvYWQ6IHN0cmluZyA9IGVudGVyLmlucHV0UGF5bG9hZDtcbiAgICB2YXIgdmFsdWU6IHN0cmluZyA9IHRoaXMuZmFjZXRJbnB1dHNbcGF5bG9hZF07XG4gICAgLy8gZ2V0IHRoZSB0ZXh0IGVudGVyZWQgaW4gdGhpcyBpbnB1dFxuICAgIGNvbnNvbGUubG9nKCdlbnRlcmVkOiAnICsgcGF5bG9hZCArICcgd2l0aCB2YWx1ZTogJyArIHZhbHVlKVxuICB9XG5cbiAgaGFuZGxlRmFjZXRIZWFkZXJDbGljayhmYWNldElkKXtcbiAgICBsZXQgdXBkYXRlQnViYmxlcyA9IGZhbHNlO1xuICAgIGxldCBlbmFibGVkRmFjZXRzID0gdGhpcy5mYWNldERhdGEuZmlsdGVyKCAoZikgPT4gZi5lbmFibGVkICkubGVuZ3RoO1xuICAgIHRoaXMuZmFjZXREYXRhLmZvckVhY2goIChmKSA9PiB7XG4gICAgICAgIGlmKGYudHlwZS5pZD09PWZhY2V0SWQpe1xuICAgICAgICAgIGlmKGYuZW5hYmxlZCl7XG4gICAgICAgICAgICBpZihlbmFibGVkRmFjZXRzPjEpe1xuICAgICAgICAgICAgICBmLmVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgdXBkYXRlQnViYmxlcyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGYuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgICAgICB1cGRhdGVCdWJibGVzID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLm9uZSgnYXctaG9tZS1mYWNldHMtd3JhcHBlcicpLnVwZGF0ZSh0aGlzLmZhY2V0RGF0YSk7XG4gICAgaWYodXBkYXRlQnViYmxlcyl7XG4gICAgICBsZXQgZGlzYWJsZUZhY2V0c0lkcyA9IFtdO1xuICAgICAgdGhpcy5mYWNldERhdGEuZm9yRWFjaCggKGZEKSA9PiB7XG4gICAgICAgIGlmKCFmRC5lbmFibGVkKSBkaXNhYmxlRmFjZXRzSWRzLnB1c2goZkQudHlwZS5pZCk7XG4gICAgICB9KTtcblxuICAgICAgaWYoZGlzYWJsZUZhY2V0c0lkcyl7XG4gICAgICAgIGxldCBmaWx0ZXJlZFNlbGVjdGVkQnViYmxlcyA9IHRoaXMuc2VsZWN0ZWRCdWJibGVzLmZpbHRlciggKGJ1YmJsZSkgPT4ge1xuICAgICAgICAgIGxldCB0eXBlT2ZFbnRpdHkgPSBcIlwiO1xuICAgICAgICAgIGZvcih2YXIgaT0wO2k8dGhpcy5hbGxCdWJibGVzLmxlbmd0aDtpKyspe1xuICAgICAgICAgICAgaWYodGhpcy5hbGxCdWJibGVzW2ldLmlkPT09YnViYmxlLmlkKXtcbiAgICAgICAgICAgICAgdHlwZU9mRW50aXR5PXRoaXMuYWxsQnViYmxlc1tpXS5lbnRpdHkudHlwZU9mRW50aXR5LmlkO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYoZGlzYWJsZUZhY2V0c0lkcy5pbmNsdWRlcyh0eXBlT2ZFbnRpdHkpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgICBpZihmaWx0ZXJlZFNlbGVjdGVkQnViYmxlcy5sZW5ndGghPXRoaXMuc2VsZWN0ZWRCdWJibGVzLmxlbmd0aCl7XG4gICAgICAgICAgdGhpcy5zZWxlY3RlZEJ1YmJsZXMgPSBmaWx0ZXJlZFNlbGVjdGVkQnViYmxlcztcbiAgICAgICAgICB0aGlzLnVwZGF0ZUJ1YmJsZXNBbmRJdGVtUHJldmlld3MoKTtcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIHRoaXMuYWxsQnViYmxlcy5mb3JFYWNoKCAoYnViYmxlKSA9PiB7XG4gICAgICAgIGJ1YmJsZS5zZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICBmb3IodmFyIGk9MDsgaTx0aGlzLnNlbGVjdGVkQnViYmxlcy5sZW5ndGg7aSsrKXtcbiAgICAgICAgICBpZih0aGlzLnNlbGVjdGVkQnViYmxlc1tpXS5pZD09PWJ1YmJsZS5pZCkgYnViYmxlLnNlbGVjdGVkPXRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5vbmUoJ2F3LWhvbWUtYnViYmxlLWNoYXJ0JykudXBkYXRlKHtcbiAgICAgICAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLzEuOCxcbiAgICAgICAgYnViYmxlczp0aGlzLmZpbHRlckJ1YmJsZXNCYXNlZE9uRmFjZXRzRW5hYmxlZCgpLFxuICAgICAgICBzZXRCdWJibGVDaGFydDogKGJ1YmJsZUNyZWYpID0+IHRoaXMuX2J1YmJsZUNoYXJ0ID0gYnViYmxlQ3JlZixcbiAgICAgICAgcmVzZXQ6dHJ1ZVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVySXRlbVRhZ3MoKXtcbiAgICBsZXQgdGFnc0RhdGEgPSBbXTtcbiAgICB0aGlzLnNlbGVjdGVkQnViYmxlcy5mb3JFYWNoKCAoc0J1YmJsZSkgPT4ge1xuICAgICAgbGV0IGxhYmVsID0gJyc7XG4gICAgICBmb3IodmFyIGk9MDtpPHRoaXMuYWxsQnViYmxlcy5sZW5ndGg7aSsrKXtcbiAgICAgICAgaWYodGhpcy5hbGxCdWJibGVzW2ldLmlkPT09c0J1YmJsZS5pZCl7XG4gICAgICAgICAgbGFiZWwgPSB0aGlzLmFsbEJ1YmJsZXNbaV0uZW50aXR5LmxhYmVsO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0YWdzRGF0YS5wdXNoKHtsYWJlbCxpY29uOlwibjctaWNvbi1jbG9zZVwiLHBheWxvYWQ6c0J1YmJsZS5pZCxjbGFzc2VzOlwidGFnLVwiK3RoaXMuYWxsQnViYmxlc1tpXS5lbnRpdHkudHlwZU9mRW50aXR5LmlkfSk7XG4gICAgfSk7XG4gICAgdGhpcy5vbmUoJ2F3LWhvbWUtaXRlbS10YWdzLXdyYXBwZXInKS51cGRhdGUodGFnc0RhdGEpO1xuICB9XG5cblxuICBvblRhZ0NsaWNrZWQocGF5bG9hZCl7XG4gICAgaWYoIXBheWxvYWQpIHJldHVybjtcbiAgICBjb25zdCBidWJibGVJZD1wYXlsb2FkO1xuICAgIGlmKHRoaXMuX2J1YmJsZUNoYXJ0KXtcbiAgICAgIHRoaXMuX2J1YmJsZUNoYXJ0LnNlbGVjdEFsbChgZ2ApLmVhY2goIGIgPT4ge1xuICAgICAgICBpZihiLmlkPT09YnViYmxlSWQpIGIuaGFzQ2xvc2VJY29uID0gZmFsc2U7XG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5zZWxlY3RlZEJ1YmJsZXMgPSB0aGlzLnNlbGVjdGVkQnViYmxlcy5maWx0ZXIoIChiKSA9PiBiLmlkIT09cGF5bG9hZCApO1xuICAgIC8vaWYodGhpcy5fdXBkYXRlQnViYmxlcykgdGhpcy5fdXBkYXRlQnViYmxlcygpO1xuICAgIHRoaXMudXBkYXRlQnViYmxlc0FuZEl0ZW1QcmV2aWV3cygpO1xuICB9XG5cblxuICBwcml2YXRlIF9nZXRTdWJuYXYoKXtcbiAgICByZXR1cm4gWydob21lJywgJ3Jlc3VsdHMnLCAnc2luZ2xlJ10ubWFwKHBhZ2UgPT4gKHtcbiAgICAgIHRleHQ6IHBhZ2UudG9VcHBlckNhc2UoKSwgXG4gICAgICBwYXlsb2FkOiB7XG4gICAgICAgIHNvdXJjZTogJ25hdmlnYXRlJyxcbiAgICAgICAgaGFuZGxlcjogJ3JvdXRlcicsXG4gICAgICAgIHBhdGg6IFtgYXcvJHtwYWdlfWBdLFxuICAgICAgICBpZDogcGFnZVxuICAgICAgfSxcbiAgICAgIF9tZXRhOiB7IGlkOiBwYWdlIH1cbiAgICB9KSk7XG4gIH1cblxuICBwcml2YXRlIF9nZXRCcmVhZGNydW1icygpe1xuICAgIHJldHVybiB7XG4gICAgICBpdGVtczogW3tcbiAgICAgICAgbGFiZWw6ICdBcmlhbm5hIFdlYicsXG4gICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICBzb3VyY2U6ICduYXZpZ2F0ZScsXG4gICAgICAgICAgaGFuZGxlcjogJ3JvdXRlcicsXG4gICAgICAgICAgcGF0aDogW2Bhdy9ob21lYF1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICdIb21lIExheW91dCcsXG4gICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICBzb3VyY2U6ICduYXZpZ2F0ZScsXG4gICAgICAgICAgaGFuZGxlcjogJ3JvdXRlcicsXG4gICAgICAgICAgcGF0aDogW2Bhdy9ob21lYF1cbiAgICAgICAgfVxuICAgICAgfV0gXG4gICAgfTtcbiAgfVxufSJdfQ==