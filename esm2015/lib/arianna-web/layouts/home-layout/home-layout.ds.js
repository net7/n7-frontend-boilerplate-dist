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
        this._bubbleChart = null;
        this.maxBubblesSelectable = 3;
        this.entityBubbleIdMap = {};
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    onInit({ communication, mainState, configuration }) {
        this.communication = communication;
        this.mainState = mainState;
        this.configuration = configuration;
        this.one('aw-hero').update({});
        this.communication.request$('globalFilter', {
            onError: (/**
             * @param {?} error
             * @return {?}
             */
            (error) => console.error(error)),
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
                /** @type {?} */
                const teoConfigData = this.configuration.get("config-keys")[ent.countData.type.configKey];
                if (teoConfigData)
                    this.facetData.push(Object.assign({}, (ent.countData), { enabled: true, icon: teoConfigData.icon, label: teoConfigData.label }));
            }));
            this.one('aw-home-facets-wrapper').update(this.facetData);
            this.setAllBubblesFromApolloQuery(response);
            this.renderPreviewsFromApolloQuery(response);
        }));
        // update streams
        this.mainState.update('headTitle', 'Arianna Web > Home');
        this.mainState.update('pageTitle', 'Arianna Web: Home Layout');
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
            (error) => console.error(error)),
            params: {
                selectedEntitiesIds,
                itemsPagination: { offset: 0, limit: 4 }
            },
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
                this.allBubbles.push(Object.assign({}, currentToE.entitiesCountData[j], { color: this.configuration.get("config-keys")[currentToE.countData.type.configKey]['color']['hex'] }));
            }
        }
        this.entityBubbleIdMap = {};
        this.allBubbles.forEach((/**
         * @param {?} bubble
         * @return {?}
         */
        (bubble) => {
            // d3/svg does not allow Number as beginning of ID.
            // d3/svg does not allow '-' as part of ID.
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
    }
    /**
     * @param {?} enter
     * @return {?}
     */
    handleFacetSearchEnter(enter) {
        /** @type {?} */
        var payload = enter.inputPayload;
        // get the text entered in this input
        /** @type {?} */
        var value = this.facetInputs[payload];
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
    /**
     * @type {?}
     * @private
     */
    AwHomeLayoutDS.prototype.configuration;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1sYXlvdXQuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvbGF5b3V0cy9ob21lLWxheW91dC9ob21lLWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFckQsTUFBTSxPQUFPLGNBQWUsU0FBUSxnQkFBZ0I7SUFBcEQ7O1FBS1UsY0FBUyxHQUFVLElBQUksQ0FBQztRQUN4QixnQkFBVyxHQUFRLEVBQUUsQ0FBQztRQUN0QixlQUFVLEdBQVUsSUFBSSxDQUFDO1FBQzFCLG9CQUFlLEdBQVUsRUFBRSxDQUFDO1FBQzVCLGtCQUFhLEdBQVcsSUFBSSxDQUFDO1FBQzVCLGlCQUFZLEdBQVEsSUFBSSxDQUFDO1FBQ3pCLHlCQUFvQixHQUFVLENBQUMsQ0FBQztRQUNoQyxzQkFBaUIsR0FBUSxFQUFFLENBQUM7SUFtUnRDLENBQUM7Ozs7O0lBalJDLE1BQU0sQ0FBQyxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFO1FBQ2hELElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ25DLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBRW5DLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRS9CLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRTtZQUMxQyxPQUFPOzs7O1lBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7U0FDekMsQ0FBQyxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLFFBQVEsRUFBRSxFQUFFO1lBQ3hC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QzlCLG9DQUFpQzs7SUFDakMseUNBQW1DOztJQUNuQyx1Q0FBb0M7Ozs7O0lBQ3BDLHNDQUFpQzs7Ozs7SUFDakMsOENBQXdDOzs7OztJQUN4QywyQ0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMYXlvdXREYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgQXdIb21lTGF5b3V0RFMgZXh0ZW5kcyBMYXlvdXREYXRhU291cmNlIHtcbiAgcHJpdmF0ZSBjb21tdW5pY2F0aW9uOiBhbnk7XG4gIHByaXZhdGUgbWFpblN0YXRlOiBhbnk7XG4gIHByaXZhdGUgY29uZmlndXJhdGlvbjogYW55O1xuICBwdWJsaWMgdGVzdDogc3RyaW5nO1xuICBwcml2YXRlIGZhY2V0RGF0YTogYW55W10gPSBudWxsO1xuICBwcml2YXRlIGZhY2V0SW5wdXRzOiBhbnkgPSB7fTtcbiAgcHJpdmF0ZSBhbGxCdWJibGVzOiBhbnlbXSA9IG51bGw7XG4gIHB1YmxpYyBzZWxlY3RlZEJ1YmJsZXM6IGFueVtdID0gW107XG4gIHB1YmxpYyBudW1PZkl0ZW1zU3RyOiBzdHJpbmcgPSBudWxsO1xuICBwcml2YXRlIF9idWJibGVDaGFydDogYW55ID0gbnVsbDtcbiAgcHJpdmF0ZSBtYXhCdWJibGVzU2VsZWN0YWJsZTpudW1iZXIgPSAzO1xuICBwcml2YXRlIGVudGl0eUJ1YmJsZUlkTWFwOiBhbnkgPSB7fTtcblxuICBvbkluaXQoeyBjb21tdW5pY2F0aW9uLCBtYWluU3RhdGUsIGNvbmZpZ3VyYXRpb24gfSl7XG4gICAgdGhpcy5jb21tdW5pY2F0aW9uID0gY29tbXVuaWNhdGlvbjtcbiAgICB0aGlzLm1haW5TdGF0ZSA9IG1haW5TdGF0ZTtcbiAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBjb25maWd1cmF0aW9uO1xuXG4gICAgdGhpcy5vbmUoJ2F3LWhlcm8nKS51cGRhdGUoe30pO1xuXG4gICAgdGhpcy5jb21tdW5pY2F0aW9uLnJlcXVlc3QkKCdnbG9iYWxGaWx0ZXInLCB7XG4gICAgICBvbkVycm9yOiAoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpLFxuICAgIH0pLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcbiAgICAgIHRoaXMuZmFjZXREYXRhID0gW107XG4gICAgICByZXNwb25zZS5lbnRpdGllc0RhdGEuZm9yRWFjaCggKGVudCkgPT4ge1xuICAgICAgICBjb25zdCB0ZW9Db25maWdEYXRhID0gdGhpcy5jb25maWd1cmF0aW9uLmdldChcImNvbmZpZy1rZXlzXCIpW2VudC5jb3VudERhdGEudHlwZS5jb25maWdLZXldO1xuICAgICAgICBpZih0ZW9Db25maWdEYXRhKVxuICAgICAgICAgIHRoaXMuZmFjZXREYXRhLnB1c2goey4uLihlbnQuY291bnREYXRhKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6dHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246IHRlb0NvbmZpZ0RhdGEuaWNvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiB0ZW9Db25maWdEYXRhLmxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgIH0gKTtcbiAgICAgIHRoaXMub25lKCdhdy1ob21lLWZhY2V0cy13cmFwcGVyJykudXBkYXRlKHRoaXMuZmFjZXREYXRhKTtcbiAgICAgIHRoaXMuc2V0QWxsQnViYmxlc0Zyb21BcG9sbG9RdWVyeShyZXNwb25zZSk7XG4gICAgICB0aGlzLnJlbmRlclByZXZpZXdzRnJvbUFwb2xsb1F1ZXJ5KHJlc3BvbnNlKTtcbiAgICB9KTtcblxuICAgIC8vIHVwZGF0ZSBzdHJlYW1zXG4gICAgdGhpcy5tYWluU3RhdGUudXBkYXRlKCdoZWFkVGl0bGUnLCAnQXJpYW5uYSBXZWIgPiBIb21lJyk7XG4gICAgdGhpcy5tYWluU3RhdGUudXBkYXRlKCdwYWdlVGl0bGUnLCAnQXJpYW5uYSBXZWI6IEhvbWUgTGF5b3V0Jyk7XG4gIH1cblxuICByZW5kZXJQcmV2aWV3c0Zyb21BcG9sbG9RdWVyeShyZXNwb25zZTogYW55KXtcbiAgICBpZighcmVzcG9uc2UgfHwgIXJlc3BvbnNlLml0ZW1zUGFnaW5hdGlvbikgcmV0dXJuO1xuXG4gICAgbGV0IG51bU9mSXRlbXMgPSByZXNwb25zZS5pdGVtc1BhZ2luYXRpb24udG90YWxDb3VudDtcbiAgICBpZihudW1PZkl0ZW1zPjApe1xuICAgICAgbGV0IG51bU9mVGhvdXNhbmQgPSAwO1xuICAgICAgd2hpbGUobnVtT2ZJdGVtcz45OTkpe1xuICAgICAgICBudW1PZkl0ZW1zLT0xMDAwO1xuICAgICAgICBudW1PZlRob3VzYW5kICs9IDE7XG4gICAgICB9XG4gICAgICBsZXQgbnVtT2ZJdGVtc1RtcFN0ciA9IG51bU9mSXRlbXMgKyAnJztcbiAgICAgIGlmKG51bU9mSXRlbXM8MTApIG51bU9mSXRlbXNUbXBTdHIgPSAnMDAnK251bU9mSXRlbXM7XG4gICAgICBlbHNlIGlmKG51bU9mSXRlbXM8MTAwKSBudW1PZkl0ZW1zVG1wU3RyID0gJzAnK251bU9mSXRlbXM7XG4gICAgICBpZihudW1PZlRob3VzYW5kPjApXG4gICAgICAgIHRoaXMubnVtT2ZJdGVtc1N0ciA9IG51bU9mVGhvdXNhbmQrJy4nK251bU9mSXRlbXNUbXBTdHI7XG4gICAgICBlbHNlXG4gICAgICAgdGhpcy5udW1PZkl0ZW1zU3RyID0gbnVtT2ZJdGVtcysnJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5udW1PZkl0ZW1zU3RyID0gbnVsbDtcbiAgICB9XG5cbiAgICB0aGlzLm9uZSgnYXctaG9tZS1pdGVtLXByZXZpZXctd3JhcHBlcicpLnVwZGF0ZShyZXNwb25zZS5pdGVtc1BhZ2luYXRpb24uaXRlbXMpO1xuICB9XG5cbiAgcHVibGljIG9uQnViYmxlU2VsZWN0ZWQocGF5bG9hZCl7XG4gICAgaWYocGF5bG9hZCAmJiBwYXlsb2FkLmJ1YmJsZSl7XG4gICAgICBpZighdGhpcy5zZWxlY3RlZEJ1YmJsZXMuaW5jbHVkZXMocGF5bG9hZC5idWJibGUpKXtcbiAgICAgICAgaWYodGhpcy5zZWxlY3RlZEJ1YmJsZXMubGVuZ3RoPHRoaXMubWF4QnViYmxlc1NlbGVjdGFibGUpe1xuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRCdWJibGVzLnB1c2gocGF5bG9hZC5idWJibGUpO1xuICAgICAgICAgIHRoaXMudXBkYXRlQnViYmxlc0FuZEl0ZW1QcmV2aWV3cygpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG9uQnViYmxlRGVzZWxlY3RlZChwYXlsb2FkKXtcbiAgICBpZihwYXlsb2FkICYmIHBheWxvYWQuYnViYmxlKXtcbiAgICAgIHRoaXMuc2VsZWN0ZWRCdWJibGVzID0gdGhpcy5zZWxlY3RlZEJ1YmJsZXMuZmlsdGVyKFxuICAgICAgICAoYikgPT4gYi5pZCE9PXBheWxvYWQuYnViYmxlLmlkICk7XG4gICAgICBpZihwYXlsb2FkLmJ1YmJsZS5oYXNDbG9zZUljb24pe1xuICAgICAgICBwYXlsb2FkLmJ1YmJsZS5oYXNDbG9zZUljb249ZmFsc2U7XG4gICAgICAgIHRoaXMudXBkYXRlQnViYmxlc0FuZEl0ZW1QcmV2aWV3cygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlQnViYmxlc0FuZEl0ZW1QcmV2aWV3cygpe1xuICAgIGxldCBzZWxlY3RlZEVudGl0aWVzSWRzID0gW107XG4gICAgaWYodGhpcy5lbnRpdHlCdWJibGVJZE1hcClcbiAgICB0aGlzLnNlbGVjdGVkQnViYmxlcy5mb3JFYWNoKCAoc0IpID0+IHtcbiAgICAgIGxldCBlbnRpdHlJZCA9IHRoaXMuZW50aXR5QnViYmxlSWRNYXBbc0IuaWRdO1xuICAgICAgaWYoZW50aXR5SWQpXG4gICAgICAgIHNlbGVjdGVkRW50aXRpZXNJZHMucHVzaChlbnRpdHlJZCk7XG4gICAgfSk7XG4gICAgdGhpcy5jb21tdW5pY2F0aW9uLnJlcXVlc3QkKCdnbG9iYWxGaWx0ZXInLCB7XG4gICAgICBvbkVycm9yOiAoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpLFxuICAgICAgcGFyYW1zOiB7IFxuICAgICAgICBzZWxlY3RlZEVudGl0aWVzSWRzLFxuICAgICAgICBpdGVtc1BhZ2luYXRpb246eyBvZmZzZXQ6MCxsaW1pdDo0IH1cbiAgICAgIH0sXG4gICAgfSkuc3Vic2NyaWJlKChyZXNwb25zZSkgPT4ge1xuICAgICAgdGhpcy5yZW5kZXJQcmV2aWV3c0Zyb21BcG9sbG9RdWVyeShyZXNwb25zZSk7XG4gICAgICB0aGlzLnJlbmRlckl0ZW1UYWdzKCk7XG4gICAgICB0aGlzLnNldEFsbEJ1YmJsZXNGcm9tQXBvbGxvUXVlcnkocmVzcG9uc2UsdHJ1ZSk7XG4gICAgfSk7XG4gIH1cblxuICBzZXRBbGxCdWJibGVzRnJvbUFwb2xsb1F1ZXJ5KHJlc3BvbnNlOiBhbnkscmVzZXQ/OmJvb2xlYW4pe1xuICAgIGlmKCAhcmVzcG9uc2UgfHwgIXJlc3BvbnNlLmVudGl0aWVzRGF0YSApIHJldHVybjtcbiAgICB0aGlzLmFsbEJ1YmJsZXMgPSBbXTtcbiAgICBmb3IodmFyIGk9MDtpPHJlc3BvbnNlLmVudGl0aWVzRGF0YS5sZW5ndGg7aSsrKXtcbiAgICAgIGxldCBjdXJyZW50VG9FID0gcmVzcG9uc2UuZW50aXRpZXNEYXRhW2ldO1xuICAgICAgZm9yKHZhciBqPTA7ajxjdXJyZW50VG9FLmVudGl0aWVzQ291bnREYXRhLmxlbmd0aDtqKyspe1xuICAgICAgICB0aGlzLmFsbEJ1YmJsZXMucHVzaChcbiAgICAgICAgICB7XG4gICAgICAgICAgICAuLi5jdXJyZW50VG9FLmVudGl0aWVzQ291bnREYXRhW2pdLFxuICAgICAgICAgICAgY29sb3I6IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoXCJjb25maWcta2V5c1wiKVtjdXJyZW50VG9FLmNvdW50RGF0YS50eXBlLmNvbmZpZ0tleV1bJ2NvbG9yJ11bJ2hleCddXG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuZW50aXR5QnViYmxlSWRNYXAgPSB7fTtcbiAgICB0aGlzLmFsbEJ1YmJsZXMuZm9yRWFjaCggKGJ1YmJsZSkgPT4ge1xuICAgICAgLy8gZDMvc3ZnIGRvZXMgbm90IGFsbG93IE51bWJlciBhcyBiZWdpbm5pbmcgb2YgSUQuXG4gICAgICAvLyBkMy9zdmcgZG9lcyBub3QgYWxsb3cgJy0nIGFzIHBhcnQgb2YgSUQuXG4gICAgICBidWJibGUuaWQgPSAnQl8nK2J1YmJsZS5lbnRpdHkuaWQucmVwbGFjZSgvLS9nLCdfJyk7XG4gICAgICB0aGlzLmVudGl0eUJ1YmJsZUlkTWFwW2J1YmJsZS5pZF09YnViYmxlLmVudGl0eS5pZDtcbiAgICAgIHJldHVybiBidWJibGU7XG4gICAgfSk7XG4gICAgdGhpcy5hbGxCdWJibGVzLmZvckVhY2goIChidWJibGUpID0+IHtcbiAgICAgIGJ1YmJsZS5zZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgZm9yKHZhciBpPTA7IGk8dGhpcy5zZWxlY3RlZEJ1YmJsZXMubGVuZ3RoO2krKyl7XG4gICAgICAgIGlmKHRoaXMuc2VsZWN0ZWRCdWJibGVzW2ldLmlkPT09YnViYmxlLmlkKSBidWJibGUuc2VsZWN0ZWQ9dHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLm9uZSgnYXctaG9tZS1idWJibGUtY2hhcnQnKS51cGRhdGUoe1xuICAgICAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLzEuOCxcbiAgICAgIGJ1YmJsZXM6IHRoaXMuZmlsdGVyQnViYmxlc0Jhc2VkT25GYWNldHNFbmFibGVkKCksXG4gICAgICByZXNldDogKCByZXNldD8gcmVzZXQgOiBmYWxzZSApLFxuICAgICAgc2V0QnViYmxlQ2hhcnQ6IChidWJibGVDcmVmKSA9PiB0aGlzLl9idWJibGVDaGFydCA9IGJ1YmJsZUNyZWZcbiAgICB9KTtcbiAgfVxuXG4gIGZpbHRlckJ1YmJsZXNCYXNlZE9uRmFjZXRzRW5hYmxlZCgpe1xuICAgIGxldCByZXN1bHQgPSB0aGlzLmFsbEJ1YmJsZXMuZmlsdGVyKFxuICAgICAgKGJ1YmJsZSkgPT4ge1xuICAgICAgICBmb3IodmFyIGk9MDsgaTx0aGlzLmZhY2V0RGF0YS5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgaWYoIGJ1YmJsZS5lbnRpdHkudHlwZU9mRW50aXR5LmlkID09PSB0aGlzLmZhY2V0RGF0YVtpXS50eXBlLmlkIClcbiAgICAgICAgICAgIGlmKCAhdGhpcy5mYWNldERhdGFbaV0uZW5hYmxlZCApeyByZXR1cm4gZmFsc2U7IH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICApO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBoYW5kbGVGYWNldFNlYXJjaENoYW5nZShjaGFuZ2UpIHtcbiAgICB2YXIgcGF5bG9hZDogc3RyaW5nID0gY2hhbmdlLmlucHV0UGF5bG9hZDtcbiAgICB2YXIgdmFsdWU6IHN0cmluZyA9IGNoYW5nZS52YWx1ZTtcbiAgICAvLyBzdG9yZSB0aGUgZW50ZXJlZCB0ZXh0IGluIGZhY2V0SW5wdXRzXG4gICAgdGhpcy5mYWNldElucHV0c1twYXlsb2FkXSA9IHZhbHVlO1xuICB9XG5cbiAgaGFuZGxlRmFjZXRTZWFyY2hFbnRlcihlbnRlcikge1xuICAgIHZhciBwYXlsb2FkOiBzdHJpbmcgPSBlbnRlci5pbnB1dFBheWxvYWQ7XG4gICAgLy8gZ2V0IHRoZSB0ZXh0IGVudGVyZWQgaW4gdGhpcyBpbnB1dFxuICAgIHZhciB2YWx1ZTogc3RyaW5nID0gdGhpcy5mYWNldElucHV0c1twYXlsb2FkXTtcbiAgfVxuXG4gIGhhbmRsZUZhY2V0SGVhZGVyQ2xpY2soZmFjZXRJZCl7XG4gICAgbGV0IHVwZGF0ZUJ1YmJsZXMgPSBmYWxzZTtcbiAgICBsZXQgZW5hYmxlZEZhY2V0cyA9IHRoaXMuZmFjZXREYXRhLmZpbHRlciggKGYpID0+IGYuZW5hYmxlZCApLmxlbmd0aDtcbiAgICB0aGlzLmZhY2V0RGF0YS5mb3JFYWNoKCAoZikgPT4ge1xuICAgICAgICBpZihmLnR5cGUuaWQ9PT1mYWNldElkKXtcbiAgICAgICAgICBpZihmLmVuYWJsZWQpe1xuICAgICAgICAgICAgaWYoZW5hYmxlZEZhY2V0cz4xKXtcbiAgICAgICAgICAgICAgZi5lbmFibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgIHVwZGF0ZUJ1YmJsZXMgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgdXBkYXRlQnViYmxlcyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5vbmUoJ2F3LWhvbWUtZmFjZXRzLXdyYXBwZXInKS51cGRhdGUodGhpcy5mYWNldERhdGEpO1xuICAgIGlmKHVwZGF0ZUJ1YmJsZXMpe1xuICAgICAgbGV0IGRpc2FibGVGYWNldHNJZHMgPSBbXTtcbiAgICAgIHRoaXMuZmFjZXREYXRhLmZvckVhY2goIChmRCkgPT4ge1xuICAgICAgICBpZighZkQuZW5hYmxlZCkgZGlzYWJsZUZhY2V0c0lkcy5wdXNoKGZELnR5cGUuaWQpO1xuICAgICAgfSk7XG5cbiAgICAgIGlmKGRpc2FibGVGYWNldHNJZHMpe1xuICAgICAgICBsZXQgZmlsdGVyZWRTZWxlY3RlZEJ1YmJsZXMgPSB0aGlzLnNlbGVjdGVkQnViYmxlcy5maWx0ZXIoIChidWJibGUpID0+IHtcbiAgICAgICAgICBsZXQgdHlwZU9mRW50aXR5ID0gXCJcIjtcbiAgICAgICAgICBmb3IodmFyIGk9MDtpPHRoaXMuYWxsQnViYmxlcy5sZW5ndGg7aSsrKXtcbiAgICAgICAgICAgIGlmKHRoaXMuYWxsQnViYmxlc1tpXS5pZD09PWJ1YmJsZS5pZCl7XG4gICAgICAgICAgICAgIHR5cGVPZkVudGl0eT10aGlzLmFsbEJ1YmJsZXNbaV0uZW50aXR5LnR5cGVPZkVudGl0eS5pZDtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmKGRpc2FibGVGYWNldHNJZHMuaW5jbHVkZXModHlwZU9mRW50aXR5KSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYoZmlsdGVyZWRTZWxlY3RlZEJ1YmJsZXMubGVuZ3RoIT10aGlzLnNlbGVjdGVkQnViYmxlcy5sZW5ndGgpe1xuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRCdWJibGVzID0gZmlsdGVyZWRTZWxlY3RlZEJ1YmJsZXM7XG4gICAgICAgICAgdGhpcy51cGRhdGVCdWJibGVzQW5kSXRlbVByZXZpZXdzKCk7XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICB0aGlzLmFsbEJ1YmJsZXMuZm9yRWFjaCggKGJ1YmJsZSkgPT4ge1xuICAgICAgICBidWJibGUuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgZm9yKHZhciBpPTA7IGk8dGhpcy5zZWxlY3RlZEJ1YmJsZXMubGVuZ3RoO2krKyl7XG4gICAgICAgICAgaWYodGhpcy5zZWxlY3RlZEJ1YmJsZXNbaV0uaWQ9PT1idWJibGUuaWQpIGJ1YmJsZS5zZWxlY3RlZD10cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMub25lKCdhdy1ob21lLWJ1YmJsZS1jaGFydCcpLnVwZGF0ZSh7XG4gICAgICAgIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aC8xLjgsXG4gICAgICAgIGJ1YmJsZXM6dGhpcy5maWx0ZXJCdWJibGVzQmFzZWRPbkZhY2V0c0VuYWJsZWQoKSxcbiAgICAgICAgc2V0QnViYmxlQ2hhcnQ6IChidWJibGVDcmVmKSA9PiB0aGlzLl9idWJibGVDaGFydCA9IGJ1YmJsZUNyZWYsXG4gICAgICAgIHJlc2V0OnRydWVcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlckl0ZW1UYWdzKCl7XG4gICAgbGV0IHRhZ3NEYXRhID0gW107XG4gICAgdGhpcy5zZWxlY3RlZEJ1YmJsZXMuZm9yRWFjaCggKHNCdWJibGUpID0+IHtcbiAgICAgIGxldCBsYWJlbCA9ICcnO1xuICAgICAgZm9yKHZhciBpPTA7aTx0aGlzLmFsbEJ1YmJsZXMubGVuZ3RoO2krKyl7XG4gICAgICAgIGlmKHRoaXMuYWxsQnViYmxlc1tpXS5pZD09PXNCdWJibGUuaWQpe1xuICAgICAgICAgIGxhYmVsID0gdGhpcy5hbGxCdWJibGVzW2ldLmVudGl0eS5sYWJlbDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGFnc0RhdGEucHVzaCh7bGFiZWwsaWNvbjpcIm43LWljb24tY2xvc2VcIixwYXlsb2FkOnNCdWJibGUuaWQsY2xhc3NlczpcInRhZy1cIit0aGlzLmFsbEJ1YmJsZXNbaV0uZW50aXR5LnR5cGVPZkVudGl0eS5pZH0pO1xuICAgIH0pO1xuICAgIHRoaXMub25lKCdhdy1ob21lLWl0ZW0tdGFncy13cmFwcGVyJykudXBkYXRlKHRhZ3NEYXRhKTtcbiAgfVxuXG4gIG9uVGFnQ2xpY2tlZChwYXlsb2FkKXtcbiAgICBpZighcGF5bG9hZCkgcmV0dXJuO1xuICAgIGNvbnN0IGJ1YmJsZUlkPXBheWxvYWQ7XG4gICAgaWYodGhpcy5fYnViYmxlQ2hhcnQpe1xuICAgICAgdGhpcy5fYnViYmxlQ2hhcnQuc2VsZWN0QWxsKGBnYCkuZWFjaCggYiA9PiB7XG4gICAgICAgIGlmKGIuaWQ9PT1idWJibGVJZCkgYi5oYXNDbG9zZUljb24gPSBmYWxzZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLnNlbGVjdGVkQnViYmxlcyA9IHRoaXMuc2VsZWN0ZWRCdWJibGVzLmZpbHRlciggKGIpID0+IGIuaWQhPT1wYXlsb2FkICk7XG4gICAgdGhpcy51cGRhdGVCdWJibGVzQW5kSXRlbVByZXZpZXdzKCk7XG4gIH1cblxuICBwcml2YXRlIF9nZXRTdWJuYXYoKXtcbiAgICByZXR1cm4gWydob21lJywgJ3Jlc3VsdHMnLCAnc2luZ2xlJ10ubWFwKHBhZ2UgPT4gKHtcbiAgICAgIHRleHQ6IHBhZ2UudG9VcHBlckNhc2UoKSwgXG4gICAgICBwYXlsb2FkOiB7XG4gICAgICAgIHNvdXJjZTogJ25hdmlnYXRlJyxcbiAgICAgICAgaGFuZGxlcjogJ3JvdXRlcicsXG4gICAgICAgIHBhdGg6IFtgYXcvJHtwYWdlfWBdLFxuICAgICAgICBpZDogcGFnZVxuICAgICAgfSxcbiAgICAgIF9tZXRhOiB7IGlkOiBwYWdlIH1cbiAgICB9KSk7XG4gIH1cblxuICBwcml2YXRlIF9nZXRCcmVhZGNydW1icygpe1xuICAgIHJldHVybiB7XG4gICAgICBpdGVtczogW3tcbiAgICAgICAgbGFiZWw6ICdBcmlhbm5hIFdlYicsXG4gICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICBzb3VyY2U6ICduYXZpZ2F0ZScsXG4gICAgICAgICAgaGFuZGxlcjogJ3JvdXRlcicsXG4gICAgICAgICAgcGF0aDogW2Bhdy9ob21lYF1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICdIb21lIExheW91dCcsXG4gICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICBzb3VyY2U6ICduYXZpZ2F0ZScsXG4gICAgICAgICAgaGFuZGxlcjogJ3JvdXRlcicsXG4gICAgICAgICAgcGF0aDogW2Bhdy9ob21lYF1cbiAgICAgICAgfVxuICAgICAgfV0gXG4gICAgfTtcbiAgfVxufSJdfQ==