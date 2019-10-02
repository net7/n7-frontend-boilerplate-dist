/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { LayoutDataSource } from '@n7-frontend/core';
import { fromEvent, interval } from 'rxjs';
import { debounce, debounceTime } from 'rxjs/operators';
export class AwHomeLayoutDS extends LayoutDataSource {
    constructor() {
        super(...arguments);
        this.facetData = null;
        this.facetInputs = {};
        // all the bubbles as they have been given by apollo
        // (the objects in the allBubbles are not the same bubble objects
        // present in the bubble chart)
        this.allBubbles = null;
        // the bubbles currently selected (this are saved from the event handler's
        // and correspond exactly to the bubblechart's bubble objects)
        this.selectedBubbles = [];
        this.numOfItemsStr = null;
        // instance of the bubble chart (from which you can access all the various
        // bubble objects)
        this._bubbleChart = null;
        // the maximum number of bubbles which can be selected at the same time
        this.maxBubblesSelectable = 3;
        // entities have their own unique id, these ids are generic and are very flexible
        // bubbles (as the bubble chart's objects) have unique ids but do not allow certain
        // characters, so each bubble has its own id different from the id of the entity which
        // the bubble represents (given an bubble's id called bubbleId you can obtain the
        // respective entity's id with as: entityId = entityBubbleIdMap[bubbleId] )
        this.entityBubbleIdMap = {};
        // widh of the window which is updated at each resize and it is used by the bubble
        // chart to check if the width of the window has changed during the last resize
        this.lastWindowWidth = -1;
        this.bubblePopup = null;
        this.currentHoverEntity = null;
        this.hasScrollBackground = false;
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    onInit({ communication, mainState, configuration, tippy }) {
        this.communication = communication;
        this.tippy = tippy;
        this.mainState = mainState;
        this.configuration = configuration;
        this.one('aw-hero').update(this.configuration.get('home-layout')['top-hero']);
        this.one('aw-home-hero-patrimonio').update(this.configuration.get('home-layout')['bottom-hero']);
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
                    this.facetData.push(Object.assign({}, ent.countData, teoConfigData, { enabled: true }));
            }));
            this.one('aw-home-facets-wrapper').update(this.facetData);
            this.setAllBubblesFromApolloQuery(response);
            this.renderPreviewsFromApolloQuery(response);
        }));
        // update streams
        this.mainState.update('headTitle', 'Arianna Web > Home');
        this.mainState.update('pageTitle', 'Arianna Web: Home Layout');
        this.lastWindowWidth = window.outerWidth;
        fromEvent(window, "resize").pipe(debounce((/**
         * @return {?}
         */
        () => interval(200)))).
            subscribe((/**
         * @return {?}
         */
        () => {
            // only resets the bubbles if the window's width has changed
            // (if the resize only effects the window's hight then the bubble chart
            // doesn't get reset)
            if (this.lastWindowWidth != window.outerWidth) {
                this.lastWindowWidth = window.outerWidth;
                this.updateBubblesAndItemPreviews(true);
            }
        }));
    }
    /**
     * @param {?} source
     * @param {?} payload
     * @return {?}
     */
    onBubbleTooltipClick(source, payload) {
        switch (source) {
            case 'select':
                if (!payload)
                    return;
                /** @type {?} */
                const bubbleId = this.convertEntityIdToBubbleId(payload.entityId);
                if (!bubbleId)
                    return;
                /** @type {?} */
                let bubble = null;
                if (this._bubbleChart) {
                    this._bubbleChart.selectAll(`g`).each((/**
                     * @param {?} b
                     * @return {?}
                     */
                    b => {
                        if (b.id === bubbleId)
                            bubble = b;
                    }));
                    if (bubble)
                        this.onBubbleSelected(bubble);
                }
                break;
            default:
                break;
        }
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    onBubbleMouseEnter(payload) {
        if (!payload || !payload.bubble)
            return;
        /** @type {?} */
        const bubbleId = payload.bubble.id;
        /** @type {?} */
        let hoverEntityId = this.entityBubbleIdMap[payload.bubble.id];
        for (var i = 0; i < this.allBubbles.length; i++) {
            /** @type {?} */
            let bubble = this.allBubbles[i];
            if (bubble.entity.id === hoverEntityId) {
                this.currentHoverEntity = bubble.entity;
                this.currentHoverEntity.count = bubble.count;
                break;
            }
        }
        if (this.bubblePopup) {
            this.bubblePopup.hide();
            this.bubblePopup.destroy();
            this.bubblePopup = null;
        }
        setTimeout((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            let template = document.getElementById("bubble-popup-menu");
            /** @type {?} */
            let templateClone = template.cloneNode(true);
            templateClone['style'].display = "inline-block";
            this.bubblePopup = this.tippy(`#${bubbleId}`, {
                content: templateClone,
                trigger: 'manual',
                interactive: true,
                arrow: true,
                theme: 'light-border no-padding',
                placement: 'top-middle',
                maxWidth: 500,
            })[0];
            setTimeout((/**
             * @return {?}
             */
            () => { if (this.bubblePopup)
                this.bubblePopup.show(); }), 800);
        }));
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
        // scroll control
        this._scrollBackgroundControl();
    }
    /**
     * @param {?} bubble
     * @return {?}
     */
    onBubbleSelected(bubble) {
        if (bubble) {
            if (!this.selectedBubbles.includes(bubble)) {
                if (this.selectedBubbles.length < this.maxBubblesSelectable) {
                    this.selectedBubbles.push(bubble);
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
     * updates the bubble chart and the item previews based on the currently
     * selected bubbles
     *
     * @private
     * @param {?=} onlyBubbles specifies if only the bubble chart should be updated,
     *                    leaving the item previews as they are
     * @return {?}
     */
    updateBubblesAndItemPreviews(onlyBubbles) {
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
                itemsPagination: { offset: 0, limit: this.configuration.get('home-layout')['results-limit'] }
            },
        }).subscribe((/**
         * @param {?} response
         * @return {?}
         */
        (response) => {
            if (!onlyBubbles) {
                this.renderPreviewsFromApolloQuery(response);
                this.renderItemTags();
            }
            this.setAllBubblesFromApolloQuery(response, true);
        }));
    }
    /**
     * converts the id of an entity to the id of a bubble
     * ( // d3/svg does not allow Number as beginning of ID.
     *   // d3/svg does not allow '-' as part of ID. )
     * @private
     * @param {?} entityId id of the entity
     * @return {?}
     */
    convertEntityIdToBubbleId(entityId) {
        if (!entityId)
            return null;
        return ('B_' + entityId.replace(/-/g, '_'));
    }
    /**
     * sets the this.allBubbles variable based on the response apollo has given
     * for the globalFilterQuery
     *
     * @param {?} response apollo's response
     * @param {?=} reset true if the bubble chart has to be reset/redrawn
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
            bubble.id = this.convertEntityIdToBubbleId(bubble.entity.id);
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
    /**
     * @private
     * @return {?}
     */
    _scrollBackgroundControl() {
        /** @type {?} */
        const el = document.getElementById('bubble-results-list');
        /** @type {?} */
        const source$ = fromEvent(document.getElementById('bubble-results-list'), 'scroll');
        // height control
        setTimeout((/**
         * @return {?}
         */
        () => {
            this._setHasScrollBackground(el);
        }), 500);
        // scroll listen
        source$.pipe(debounceTime(50)).subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ({ target }) => {
            this._setHasScrollBackground(target);
        }));
    }
    /**
     * @private
     * @param {?} __0
     * @return {?}
     */
    _setHasScrollBackground({ scrollTop, scrollHeight, clientHeight }) {
        this.hasScrollBackground = scrollHeight > (scrollTop + clientHeight);
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
    AwHomeLayoutDS.prototype.tippy;
    /**
     * @type {?}
     * @private
     */
    AwHomeLayoutDS.prototype.configuration;
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
    /**
     * @type {?}
     * @private
     */
    AwHomeLayoutDS.prototype.lastWindowWidth;
    /**
     * @type {?}
     * @private
     */
    AwHomeLayoutDS.prototype.bubblePopup;
    /** @type {?} */
    AwHomeLayoutDS.prototype.currentHoverEntity;
    /** @type {?} */
    AwHomeLayoutDS.prototype.hasScrollBackground;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1sYXlvdXQuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvbGF5b3V0cy9ob21lLWxheW91dC9ob21lLWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDckQsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4RCxNQUFNLE9BQU8sY0FBZSxTQUFRLGdCQUFnQjtJQUFwRDs7UUFLVSxjQUFTLEdBQVUsSUFBSSxDQUFDO1FBQ3hCLGdCQUFXLEdBQVEsRUFBRSxDQUFDOzs7O1FBSXRCLGVBQVUsR0FBVSxJQUFJLENBQUM7OztRQUcxQixvQkFBZSxHQUFVLEVBQUUsQ0FBQztRQUM1QixrQkFBYSxHQUFXLElBQUksQ0FBQzs7O1FBRzVCLGlCQUFZLEdBQVEsSUFBSSxDQUFDOztRQUV6Qix5QkFBb0IsR0FBVSxDQUFDLENBQUM7Ozs7OztRQU1oQyxzQkFBaUIsR0FBUSxFQUFFLENBQUM7OztRQUc1QixvQkFBZSxHQUFXLENBQUMsQ0FBQyxDQUFDO1FBQzdCLGdCQUFXLEdBQVEsSUFBSSxDQUFDO1FBQ3pCLHVCQUFrQixHQUFRLElBQUksQ0FBQztRQUMvQix3QkFBbUIsR0FBWSxLQUFLLENBQUM7SUF3WTlDLENBQUM7Ozs7O0lBdFlDLE1BQU0sQ0FBQyxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBRTtRQUN2RCxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztR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RyxTQUFTLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFLFFBQVEsQ0FBQztRQUUvRSxpQkFBaUI7UUFDakIsVUFBVTs7O1FBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLHVCQUF1QixDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ25DLENBQUMsR0FBRSxHQUFHLENBQUMsQ0FBQztRQUVSLGdCQUFnQjtRQUNoQixPQUFPLENBQUMsSUFBSSxDQUNWLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FDakIsQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBbUIsRUFBRSxFQUFFO1lBQzFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN2QyxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7OztJQUVPLHVCQUF1QixDQUFDLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUU7UUFDdkUsSUFBSSxDQUFDLG1CQUFtQixHQUFHLFlBQVksR0FBRyxDQUFDLFNBQVMsR0FBRyxZQUFZLENBQUMsQ0FBQztJQUN2RSxDQUFDO0NBQ0Y7Ozs7OztJQXRhQyx1Q0FBMkI7Ozs7O0lBQzNCLG1DQUF1Qjs7Ozs7SUFDdkIsK0JBQW1COzs7OztJQUNuQix1Q0FBMkI7Ozs7O0lBQzNCLG1DQUFnQzs7Ozs7SUFDaEMscUNBQThCOzs7OztJQUk5QixvQ0FBaUM7O0lBR2pDLHlDQUFtQzs7SUFDbkMsdUNBQW9DOzs7OztJQUdwQyxzQ0FBaUM7Ozs7O0lBRWpDLDhDQUF3Qzs7Ozs7SUFNeEMsMkNBQW9DOzs7OztJQUdwQyx5Q0FBcUM7Ozs7O0lBQ3JDLHFDQUFnQzs7SUFDaEMsNENBQXNDOztJQUN0Qyw2Q0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMYXlvdXREYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgZnJvbUV2ZW50LCBpbnRlcnZhbCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2UsIGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuZXhwb3J0IGNsYXNzIEF3SG9tZUxheW91dERTIGV4dGVuZHMgTGF5b3V0RGF0YVNvdXJjZSB7XG4gIHByaXZhdGUgY29tbXVuaWNhdGlvbjogYW55O1xuICBwcml2YXRlIG1haW5TdGF0ZTogYW55O1xuICBwcml2YXRlIHRpcHB5OiBhbnk7XG4gIHByaXZhdGUgY29uZmlndXJhdGlvbjogYW55O1xuICBwcml2YXRlIGZhY2V0RGF0YTogYW55W10gPSBudWxsO1xuICBwcml2YXRlIGZhY2V0SW5wdXRzOiBhbnkgPSB7fTtcbiAgLy8gYWxsIHRoZSBidWJibGVzIGFzIHRoZXkgaGF2ZSBiZWVuIGdpdmVuIGJ5IGFwb2xsb1xuICAvLyAodGhlIG9iamVjdHMgaW4gdGhlIGFsbEJ1YmJsZXMgYXJlIG5vdCB0aGUgc2FtZSBidWJibGUgb2JqZWN0c1xuICAvLyBwcmVzZW50IGluIHRoZSBidWJibGUgY2hhcnQpXG4gIHByaXZhdGUgYWxsQnViYmxlczogYW55W10gPSBudWxsO1xuICAvLyB0aGUgYnViYmxlcyBjdXJyZW50bHkgc2VsZWN0ZWQgKHRoaXMgYXJlIHNhdmVkIGZyb20gdGhlIGV2ZW50IGhhbmRsZXInc1xuICAvLyBhbmQgY29ycmVzcG9uZCBleGFjdGx5IHRvIHRoZSBidWJibGVjaGFydCdzIGJ1YmJsZSBvYmplY3RzKVxuICBwdWJsaWMgc2VsZWN0ZWRCdWJibGVzOiBhbnlbXSA9IFtdO1xuICBwdWJsaWMgbnVtT2ZJdGVtc1N0cjogc3RyaW5nID0gbnVsbDtcbiAgLy8gaW5zdGFuY2Ugb2YgdGhlIGJ1YmJsZSBjaGFydCAoZnJvbSB3aGljaCB5b3UgY2FuIGFjY2VzcyBhbGwgdGhlIHZhcmlvdXNcbiAgLy8gYnViYmxlIG9iamVjdHMpXG4gIHByaXZhdGUgX2J1YmJsZUNoYXJ0OiBhbnkgPSBudWxsO1xuICAvLyB0aGUgbWF4aW11bSBudW1iZXIgb2YgYnViYmxlcyB3aGljaCBjYW4gYmUgc2VsZWN0ZWQgYXQgdGhlIHNhbWUgdGltZVxuICBwcml2YXRlIG1heEJ1YmJsZXNTZWxlY3RhYmxlOm51bWJlciA9IDM7XG4gIC8vIGVudGl0aWVzIGhhdmUgdGhlaXIgb3duIHVuaXF1ZSBpZCwgdGhlc2UgaWRzIGFyZSBnZW5lcmljIGFuZCBhcmUgdmVyeSBmbGV4aWJsZVxuICAvLyBidWJibGVzIChhcyB0aGUgYnViYmxlIGNoYXJ0J3Mgb2JqZWN0cykgaGF2ZSB1bmlxdWUgaWRzIGJ1dCBkbyBub3QgYWxsb3cgY2VydGFpblxuICAvLyBjaGFyYWN0ZXJzLCBzbyBlYWNoIGJ1YmJsZSBoYXMgaXRzIG93biBpZCBkaWZmZXJlbnQgZnJvbSB0aGUgaWQgb2YgdGhlIGVudGl0eSB3aGljaFxuICAvLyB0aGUgYnViYmxlIHJlcHJlc2VudHMgKGdpdmVuIGFuIGJ1YmJsZSdzIGlkIGNhbGxlZCBidWJibGVJZCB5b3UgY2FuIG9idGFpbiB0aGVcbiAgLy8gcmVzcGVjdGl2ZSBlbnRpdHkncyBpZCB3aXRoIGFzOiBlbnRpdHlJZCA9IGVudGl0eUJ1YmJsZUlkTWFwW2J1YmJsZUlkXSApXG4gIHByaXZhdGUgZW50aXR5QnViYmxlSWRNYXA6IGFueSA9IHt9O1xuICAvLyB3aWRoIG9mIHRoZSB3aW5kb3cgd2hpY2ggaXMgdXBkYXRlZCBhdCBlYWNoIHJlc2l6ZSBhbmQgaXQgaXMgdXNlZCBieSB0aGUgYnViYmxlXG4gIC8vIGNoYXJ0IHRvIGNoZWNrIGlmIHRoZSB3aWR0aCBvZiB0aGUgd2luZG93IGhhcyBjaGFuZ2VkIGR1cmluZyB0aGUgbGFzdCByZXNpemVcbiAgcHJpdmF0ZSBsYXN0V2luZG93V2lkdGg6IG51bWJlciA9IC0xO1xuICBwcml2YXRlIGJ1YmJsZVBvcHVwOiBhbnkgPSBudWxsO1xuICBwdWJsaWMgY3VycmVudEhvdmVyRW50aXR5OiBhbnkgPSBudWxsO1xuICBwdWJsaWMgaGFzU2Nyb2xsQmFja2dyb3VuZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIG9uSW5pdCh7IGNvbW11bmljYXRpb24sIG1haW5TdGF0ZSwgY29uZmlndXJhdGlvbiwgdGlwcHkgfSl7XG4gICAgdGhpcy5jb21tdW5pY2F0aW9uID0gY29tbXVuaWNhdGlvbjtcbiAgICB0aGlzLnRpcHB5ID0gdGlwcHk7XG4gICAgdGhpcy5tYWluU3RhdGUgPSBtYWluU3RhdGU7XG4gICAgdGhpcy5jb25maWd1cmF0aW9uID0gY29uZmlndXJhdGlvbjtcblxuICAgIHRoaXMub25lKCdhdy1oZXJvJykudXBkYXRlKHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2hvbWUtbGF5b3V0JylbJ3RvcC1oZXJvJ10pO1xuICAgIHRoaXMub25lKCdhdy1ob21lLWhlcm8tcGF0cmltb25pbycpLnVwZGF0ZSh0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdob21lLWxheW91dCcpWydib3R0b20taGVybyddKTtcblxuICAgIHRoaXMuY29tbXVuaWNhdGlvbi5yZXF1ZXN0JCgnZ2xvYmFsRmlsdGVyJywge1xuICAgICAgb25FcnJvcjogKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSxcbiAgICB9KS5zdWJzY3JpYmUoKHJlc3BvbnNlKSA9PiB7XG4gICAgICB0aGlzLmZhY2V0RGF0YSA9IFtdO1xuICAgICAgcmVzcG9uc2UuZW50aXRpZXNEYXRhLmZvckVhY2goIChlbnQpID0+IHtcbiAgICAgICAgY29uc3QgdGVvQ29uZmlnRGF0YSA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoXCJjb25maWcta2V5c1wiKVtlbnQuY291bnREYXRhLnR5cGUuY29uZmlnS2V5XTtcbiAgICAgICAgaWYodGVvQ29uZmlnRGF0YSlcbiAgICAgICAgICB0aGlzLmZhY2V0RGF0YS5wdXNoKHtcbiAgICAgICAgICAgIC4uLmVudC5jb3VudERhdGEsXG4gICAgICAgICAgICAuLi50ZW9Db25maWdEYXRhLFxuICAgICAgICAgICAgZW5hYmxlZDp0cnVlLFxuICAgICAgICAgIH0pO1xuICAgICAgfSApO1xuICAgICAgdGhpcy5vbmUoJ2F3LWhvbWUtZmFjZXRzLXdyYXBwZXInKS51cGRhdGUodGhpcy5mYWNldERhdGEpO1xuICAgICAgdGhpcy5zZXRBbGxCdWJibGVzRnJvbUFwb2xsb1F1ZXJ5KHJlc3BvbnNlKTtcbiAgICAgIHRoaXMucmVuZGVyUHJldmlld3NGcm9tQXBvbGxvUXVlcnkocmVzcG9uc2UpO1xuICAgIH0pO1xuXG4gICAgLy8gdXBkYXRlIHN0cmVhbXNcbiAgICB0aGlzLm1haW5TdGF0ZS51cGRhdGUoJ2hlYWRUaXRsZScsICdBcmlhbm5hIFdlYiA+IEhvbWUnKTtcbiAgICB0aGlzLm1haW5TdGF0ZS51cGRhdGUoJ3BhZ2VUaXRsZScsICdBcmlhbm5hIFdlYjogSG9tZSBMYXlvdXQnKTtcblxuICAgIHRoaXMubGFzdFdpbmRvd1dpZHRoPXdpbmRvdy5vdXRlcldpZHRoO1xuICAgIGZyb21FdmVudCggd2luZG93ICwgXCJyZXNpemVcIiApLnBpcGUoZGVib3VuY2UoKCkgPT4gaW50ZXJ2YWwoMjAwKSkpLlxuICAgIHN1YnNjcmliZSggKCkgPT4ge1xuICAgICAgLy8gb25seSByZXNldHMgdGhlIGJ1YmJsZXMgaWYgdGhlIHdpbmRvdydzIHdpZHRoIGhhcyBjaGFuZ2VkXG4gICAgICAvLyAoaWYgdGhlIHJlc2l6ZSBvbmx5IGVmZmVjdHMgdGhlIHdpbmRvdydzIGhpZ2h0IHRoZW4gdGhlIGJ1YmJsZSBjaGFydFxuICAgICAgLy8gZG9lc24ndCBnZXQgcmVzZXQpXG4gICAgICBpZih0aGlzLmxhc3RXaW5kb3dXaWR0aCE9d2luZG93Lm91dGVyV2lkdGgpe1xuICAgICAgICB0aGlzLmxhc3RXaW5kb3dXaWR0aD13aW5kb3cub3V0ZXJXaWR0aDtcbiAgICAgICAgdGhpcy51cGRhdGVCdWJibGVzQW5kSXRlbVByZXZpZXdzKHRydWUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgb25CdWJibGVUb29sdGlwQ2xpY2soc291cmNlOnN0cmluZywgcGF5bG9hZCl7XG4gICAgc3dpdGNoKHNvdXJjZSl7XG4gICAgICBjYXNlICdzZWxlY3QnOlxuICAgICAgICBpZighcGF5bG9hZCkgcmV0dXJuO1xuICAgICAgICBjb25zdCBidWJibGVJZCA9IHRoaXMuY29udmVydEVudGl0eUlkVG9CdWJibGVJZChwYXlsb2FkLmVudGl0eUlkKTtcbiAgICAgICAgaWYoIWJ1YmJsZUlkKSByZXR1cm47XG4gICAgICAgIGxldCBidWJibGUgPSBudWxsO1xuICAgICAgICBpZih0aGlzLl9idWJibGVDaGFydCl7XG4gICAgICAgICAgdGhpcy5fYnViYmxlQ2hhcnQuc2VsZWN0QWxsKGBnYCkuZWFjaCggYiA9PiB7XG4gICAgICAgICAgICBpZihiLmlkPT09YnViYmxlSWQpIGJ1YmJsZT1iO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmKGJ1YmJsZSkgdGhpcy5vbkJ1YmJsZVNlbGVjdGVkKGJ1YmJsZSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuXG4gIG9uQnViYmxlTW91c2VFbnRlcihwYXlsb2FkKXtcbiAgICBpZighcGF5bG9hZCB8fCAhcGF5bG9hZC5idWJibGUpIHJldHVybjtcbiAgICBjb25zdCBidWJibGVJZCA9IHBheWxvYWQuYnViYmxlLmlkO1xuICAgIGxldCBob3ZlckVudGl0eUlkID0gdGhpcy5lbnRpdHlCdWJibGVJZE1hcFtwYXlsb2FkLmJ1YmJsZS5pZF07XG4gICAgZm9yKHZhciBpPTA7aTx0aGlzLmFsbEJ1YmJsZXMubGVuZ3RoO2krKyl7XG4gICAgICBsZXQgYnViYmxlID0gdGhpcy5hbGxCdWJibGVzW2ldO1xuICAgICAgaWYoYnViYmxlLmVudGl0eS5pZD09PWhvdmVyRW50aXR5SWQpe1xuICAgICAgICB0aGlzLmN1cnJlbnRIb3ZlckVudGl0eSA9IGJ1YmJsZS5lbnRpdHk7XG4gICAgICAgIHRoaXMuY3VycmVudEhvdmVyRW50aXR5LmNvdW50ID0gYnViYmxlLmNvdW50O1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYodGhpcy5idWJibGVQb3B1cCl7XG4gICAgICB0aGlzLmJ1YmJsZVBvcHVwLmhpZGUoKTtcbiAgICAgIHRoaXMuYnViYmxlUG9wdXAuZGVzdHJveSgpO1xuICAgICAgdGhpcy5idWJibGVQb3B1cCA9IG51bGw7XG4gICAgfVxuICAgIHNldFRpbWVvdXQoICgpID0+IHtcbiAgICAgIGxldCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnViYmxlLXBvcHVwLW1lbnVcIik7XG4gICAgICBsZXQgdGVtcGxhdGVDbG9uZSA9IHRlbXBsYXRlLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgIHRlbXBsYXRlQ2xvbmVbJ3N0eWxlJ10uZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XG4gICAgICB0aGlzLmJ1YmJsZVBvcHVwID0gdGhpcy50aXBweShgIyR7YnViYmxlSWR9YCwge1xuICAgICAgICBjb250ZW50OiB0ZW1wbGF0ZUNsb25lLFxuICAgICAgICB0cmlnZ2VyOiAnbWFudWFsJyxcbiAgICAgICAgaW50ZXJhY3RpdmU6IHRydWUsXG4gICAgICAgIGFycm93OiB0cnVlLFxuICAgICAgICB0aGVtZTogJ2xpZ2h0LWJvcmRlciBuby1wYWRkaW5nJyxcbiAgICAgICAgcGxhY2VtZW50OiAndG9wLW1pZGRsZScsXG4gICAgICAgIG1heFdpZHRoOiA1MDAsXG4gICAgICAgIC8vb25IaWRkZW46ICgpID0+IGNvbnNvbGUubG9nKCdoaWRkZW4nKSxcbiAgICAgIH0pWzBdO1xuICAgICAgc2V0VGltZW91dCggKCkgPT4geyBpZih0aGlzLmJ1YmJsZVBvcHVwKSB0aGlzLmJ1YmJsZVBvcHVwLnNob3coKSB9ICwgODAwICk7XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXJQcmV2aWV3c0Zyb21BcG9sbG9RdWVyeShyZXNwb25zZTogYW55KXtcbiAgICBpZighcmVzcG9uc2UgfHwgIXJlc3BvbnNlLml0ZW1zUGFnaW5hdGlvbikgcmV0dXJuO1xuXG4gICAgbGV0IG51bU9mSXRlbXMgPSByZXNwb25zZS5pdGVtc1BhZ2luYXRpb24udG90YWxDb3VudDtcbiAgICBpZihudW1PZkl0ZW1zPjApe1xuICAgICAgbGV0IG51bU9mVGhvdXNhbmQgPSAwO1xuICAgICAgd2hpbGUobnVtT2ZJdGVtcz45OTkpe1xuICAgICAgICBudW1PZkl0ZW1zLT0xMDAwO1xuICAgICAgICBudW1PZlRob3VzYW5kICs9IDE7XG4gICAgICB9XG4gICAgICBsZXQgbnVtT2ZJdGVtc1RtcFN0ciA9IG51bU9mSXRlbXMgKyAnJztcbiAgICAgIGlmKG51bU9mSXRlbXM8MTApIG51bU9mSXRlbXNUbXBTdHIgPSAnMDAnK251bU9mSXRlbXM7XG4gICAgICBlbHNlIGlmKG51bU9mSXRlbXM8MTAwKSBudW1PZkl0ZW1zVG1wU3RyID0gJzAnK251bU9mSXRlbXM7XG4gICAgICBpZihudW1PZlRob3VzYW5kPjApXG4gICAgICAgIHRoaXMubnVtT2ZJdGVtc1N0ciA9IG51bU9mVGhvdXNhbmQrJy4nK251bU9mSXRlbXNUbXBTdHI7XG4gICAgICBlbHNlXG4gICAgICAgdGhpcy5udW1PZkl0ZW1zU3RyID0gbnVtT2ZJdGVtcysnJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5udW1PZkl0ZW1zU3RyID0gbnVsbDtcbiAgICB9XG5cbiAgICB0aGlzLm9uZSgnYXctaG9tZS1pdGVtLXByZXZpZXctd3JhcHBlcicpLnVwZGF0ZShyZXNwb25zZS5pdGVtc1BhZ2luYXRpb24uaXRlbXMpO1xuXG4gICAgLy8gc2Nyb2xsIGNvbnRyb2xcbiAgICB0aGlzLl9zY3JvbGxCYWNrZ3JvdW5kQ29udHJvbCgpO1xuICB9XG5cbiAgcHVibGljIG9uQnViYmxlU2VsZWN0ZWQoYnViYmxlKXtcbiAgICBpZihidWJibGUpe1xuICAgICAgaWYoIXRoaXMuc2VsZWN0ZWRCdWJibGVzLmluY2x1ZGVzKGJ1YmJsZSkpe1xuICAgICAgICBpZih0aGlzLnNlbGVjdGVkQnViYmxlcy5sZW5ndGg8dGhpcy5tYXhCdWJibGVzU2VsZWN0YWJsZSl7XG4gICAgICAgICAgdGhpcy5zZWxlY3RlZEJ1YmJsZXMucHVzaChidWJibGUpO1xuICAgICAgICAgIHRoaXMudXBkYXRlQnViYmxlc0FuZEl0ZW1QcmV2aWV3cygpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG9uQnViYmxlRGVzZWxlY3RlZChwYXlsb2FkKXtcbiAgICBpZihwYXlsb2FkICYmIHBheWxvYWQuYnViYmxlKXtcbiAgICAgIHRoaXMuc2VsZWN0ZWRCdWJibGVzID0gdGhpcy5zZWxlY3RlZEJ1YmJsZXMuZmlsdGVyKFxuICAgICAgICAoYikgPT4gYi5pZCE9PXBheWxvYWQuYnViYmxlLmlkICk7XG4gICAgICBpZihwYXlsb2FkLmJ1YmJsZS5oYXNDbG9zZUljb24pe1xuICAgICAgICBwYXlsb2FkLmJ1YmJsZS5oYXNDbG9zZUljb249ZmFsc2U7XG4gICAgICAgIHRoaXMudXBkYXRlQnViYmxlc0FuZEl0ZW1QcmV2aWV3cygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiB1cGRhdGVzIHRoZSBidWJibGUgY2hhcnQgYW5kIHRoZSBpdGVtIHByZXZpZXdzIGJhc2VkIG9uIHRoZSBjdXJyZW50bHlcbiAgICogc2VsZWN0ZWQgYnViYmxlc1xuICAgKlxuICAgKiBAcGFyYW0gb25seUJ1YmJsZXMgc3BlY2lmaWVzIGlmIG9ubHkgdGhlIGJ1YmJsZSBjaGFydCBzaG91bGQgYmUgdXBkYXRlZCxcbiAgICogICAgICAgICAgICAgICAgICAgIGxlYXZpbmcgdGhlIGl0ZW0gcHJldmlld3MgYXMgdGhleSBhcmVcbiAgICovXG4gIHByaXZhdGUgdXBkYXRlQnViYmxlc0FuZEl0ZW1QcmV2aWV3cyhvbmx5QnViYmxlcz86Ym9vbGVhbil7XG4gICAgbGV0IHNlbGVjdGVkRW50aXRpZXNJZHMgPSBbXTtcbiAgICBpZih0aGlzLmVudGl0eUJ1YmJsZUlkTWFwKVxuICAgIHRoaXMuc2VsZWN0ZWRCdWJibGVzLmZvckVhY2goIChzQikgPT4ge1xuICAgICAgbGV0IGVudGl0eUlkID0gdGhpcy5lbnRpdHlCdWJibGVJZE1hcFtzQi5pZF07XG4gICAgICBpZihlbnRpdHlJZClcbiAgICAgICAgc2VsZWN0ZWRFbnRpdGllc0lkcy5wdXNoKGVudGl0eUlkKTtcbiAgICB9KTtcbiAgICB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQoJ2dsb2JhbEZpbHRlcicsIHtcbiAgICAgIG9uRXJyb3I6IChlcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvciksXG4gICAgICBwYXJhbXM6IHsgXG4gICAgICAgIHNlbGVjdGVkRW50aXRpZXNJZHMsXG4gICAgICAgIGl0ZW1zUGFnaW5hdGlvbjp7IG9mZnNldDowLCBsaW1pdDogdGhpcy5jb25maWd1cmF0aW9uLmdldCgnaG9tZS1sYXlvdXQnKVsncmVzdWx0cy1saW1pdCddIH1cbiAgICAgIH0sXG4gICAgfSkuc3Vic2NyaWJlKChyZXNwb25zZSkgPT4ge1xuICAgICAgaWYoIW9ubHlCdWJibGVzKXtcbiAgICAgICAgdGhpcy5yZW5kZXJQcmV2aWV3c0Zyb21BcG9sbG9RdWVyeShyZXNwb25zZSk7XG4gICAgICAgIHRoaXMucmVuZGVySXRlbVRhZ3MoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0QWxsQnViYmxlc0Zyb21BcG9sbG9RdWVyeShyZXNwb25zZSx0cnVlKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBjb252ZXJ0cyB0aGUgaWQgb2YgYW4gZW50aXR5IHRvIHRoZSBpZCBvZiBhIGJ1YmJsZVxuICAgKiAoIC8vIGQzL3N2ZyBkb2VzIG5vdCBhbGxvdyBOdW1iZXIgYXMgYmVnaW5uaW5nIG9mIElELlxuICAgKiAgIC8vIGQzL3N2ZyBkb2VzIG5vdCBhbGxvdyAnLScgYXMgcGFydCBvZiBJRC4gKVxuICAgKiBAcGFyYW0gZW50aXR5SWQgaWQgb2YgdGhlIGVudGl0eVxuICAgKi9cbiAgcHJpdmF0ZSBjb252ZXJ0RW50aXR5SWRUb0J1YmJsZUlkKGVudGl0eUlkOnN0cmluZykgOnN0cmluZyB7XG4gICAgaWYoIWVudGl0eUlkKSByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gKCAnQl8nK2VudGl0eUlkLnJlcGxhY2UoLy0vZywnXycpICk7XG4gIH1cblxuICAvKipcbiAgICogc2V0cyB0aGUgdGhpcy5hbGxCdWJibGVzIHZhcmlhYmxlIGJhc2VkIG9uIHRoZSByZXNwb25zZSBhcG9sbG8gaGFzIGdpdmVuXG4gICAqIGZvciB0aGUgZ2xvYmFsRmlsdGVyUXVlcnlcbiAgICpcbiAgICogQHBhcmFtIHJlc3BvbnNlIGFwb2xsbydzIHJlc3BvbnNlXG4gICAqIEBwYXJhbSByZXNldCB0cnVlIGlmIHRoZSBidWJibGUgY2hhcnQgaGFzIHRvIGJlIHJlc2V0L3JlZHJhd25cbiAgICovXG4gIHNldEFsbEJ1YmJsZXNGcm9tQXBvbGxvUXVlcnkocmVzcG9uc2U6IGFueSxyZXNldD86Ym9vbGVhbil7XG4gICAgaWYoICFyZXNwb25zZSB8fCAhcmVzcG9uc2UuZW50aXRpZXNEYXRhICkgcmV0dXJuO1xuICAgIHRoaXMuYWxsQnViYmxlcyA9IFtdO1xuICAgIGZvcih2YXIgaT0wO2k8cmVzcG9uc2UuZW50aXRpZXNEYXRhLmxlbmd0aDtpKyspe1xuICAgICAgbGV0IGN1cnJlbnRUb0UgPSByZXNwb25zZS5lbnRpdGllc0RhdGFbaV07XG4gICAgICBmb3IodmFyIGo9MDtqPGN1cnJlbnRUb0UuZW50aXRpZXNDb3VudERhdGEubGVuZ3RoO2orKyl7XG4gICAgICAgIHRoaXMuYWxsQnViYmxlcy5wdXNoKFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIC4uLmN1cnJlbnRUb0UuZW50aXRpZXNDb3VudERhdGFbal0sXG4gICAgICAgICAgICBjb2xvcjogdGhpcy5jb25maWd1cmF0aW9uLmdldChcImNvbmZpZy1rZXlzXCIpW2N1cnJlbnRUb0UuY291bnREYXRhLnR5cGUuY29uZmlnS2V5XVsnY29sb3InXVsnaGV4J11cbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5lbnRpdHlCdWJibGVJZE1hcCA9IHt9O1xuICAgIHRoaXMuYWxsQnViYmxlcy5mb3JFYWNoKCAoYnViYmxlKSA9PiB7XG4gICAgICBidWJibGUuaWQgPSB0aGlzLmNvbnZlcnRFbnRpdHlJZFRvQnViYmxlSWQoYnViYmxlLmVudGl0eS5pZCk7XG4gICAgICB0aGlzLmVudGl0eUJ1YmJsZUlkTWFwW2J1YmJsZS5pZF09YnViYmxlLmVudGl0eS5pZDtcbiAgICAgIHJldHVybiBidWJibGU7XG4gICAgfSk7XG4gICAgdGhpcy5hbGxCdWJibGVzLmZvckVhY2goIChidWJibGUpID0+IHtcbiAgICAgIGJ1YmJsZS5zZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgZm9yKHZhciBpPTA7IGk8dGhpcy5zZWxlY3RlZEJ1YmJsZXMubGVuZ3RoO2krKyl7XG4gICAgICAgIGlmKHRoaXMuc2VsZWN0ZWRCdWJibGVzW2ldLmlkPT09YnViYmxlLmlkKSBidWJibGUuc2VsZWN0ZWQ9dHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLm9uZSgnYXctaG9tZS1idWJibGUtY2hhcnQnKS51cGRhdGUoe1xuICAgICAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLzEuOCxcbiAgICAgIGJ1YmJsZXM6IHRoaXMuZmlsdGVyQnViYmxlc0Jhc2VkT25GYWNldHNFbmFibGVkKCksXG4gICAgICByZXNldDogKCByZXNldD8gcmVzZXQgOiBmYWxzZSApLFxuICAgICAgc2V0QnViYmxlQ2hhcnQ6IChidWJibGVDcmVmKSA9PiB0aGlzLl9idWJibGVDaGFydCA9IGJ1YmJsZUNyZWZcbiAgICB9KTtcbiAgfVxuXG4gIGZpbHRlckJ1YmJsZXNCYXNlZE9uRmFjZXRzRW5hYmxlZCgpe1xuICAgIGxldCByZXN1bHQgPSB0aGlzLmFsbEJ1YmJsZXMuZmlsdGVyKFxuICAgICAgKGJ1YmJsZSkgPT4ge1xuICAgICAgICBmb3IodmFyIGk9MDsgaTx0aGlzLmZhY2V0RGF0YS5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgaWYoIGJ1YmJsZS5lbnRpdHkudHlwZU9mRW50aXR5LmlkID09PSB0aGlzLmZhY2V0RGF0YVtpXS50eXBlLmlkIClcbiAgICAgICAgICAgIGlmKCAhdGhpcy5mYWNldERhdGFbaV0uZW5hYmxlZCApeyByZXR1cm4gZmFsc2U7IH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICApO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBoYW5kbGVGYWNldFNlYXJjaENoYW5nZShjaGFuZ2UpIHtcbiAgICB2YXIgcGF5bG9hZDogc3RyaW5nID0gY2hhbmdlLmlucHV0UGF5bG9hZDtcbiAgICB2YXIgdmFsdWU6IHN0cmluZyA9IGNoYW5nZS52YWx1ZTtcbiAgICAvLyBzdG9yZSB0aGUgZW50ZXJlZCB0ZXh0IGluIGZhY2V0SW5wdXRzXG4gICAgdGhpcy5mYWNldElucHV0c1twYXlsb2FkXSA9IHZhbHVlO1xuICB9XG5cbiAgaGFuZGxlRmFjZXRTZWFyY2hFbnRlcihlbnRlcikge1xuICAgIHZhciBwYXlsb2FkOiBzdHJpbmcgPSBlbnRlci5pbnB1dFBheWxvYWQ7XG4gICAgLy8gZ2V0IHRoZSB0ZXh0IGVudGVyZWQgaW4gdGhpcyBpbnB1dFxuICAgIHZhciB2YWx1ZTogc3RyaW5nID0gdGhpcy5mYWNldElucHV0c1twYXlsb2FkXTtcbiAgfVxuXG4gIGhhbmRsZUZhY2V0SGVhZGVyQ2xpY2soZmFjZXRJZCl7XG4gICAgbGV0IHVwZGF0ZUJ1YmJsZXMgPSBmYWxzZTtcbiAgICBsZXQgZW5hYmxlZEZhY2V0cyA9IHRoaXMuZmFjZXREYXRhLmZpbHRlciggKGYpID0+IGYuZW5hYmxlZCApLmxlbmd0aDtcbiAgICB0aGlzLmZhY2V0RGF0YS5mb3JFYWNoKCAoZikgPT4ge1xuICAgICAgICBpZihmLnR5cGUuaWQ9PT1mYWNldElkKXtcbiAgICAgICAgICBpZihmLmVuYWJsZWQpe1xuICAgICAgICAgICAgaWYoZW5hYmxlZEZhY2V0cz4xKXtcbiAgICAgICAgICAgICAgZi5lbmFibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgIHVwZGF0ZUJ1YmJsZXMgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgdXBkYXRlQnViYmxlcyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5vbmUoJ2F3LWhvbWUtZmFjZXRzLXdyYXBwZXInKS51cGRhdGUodGhpcy5mYWNldERhdGEpO1xuICAgIGlmKHVwZGF0ZUJ1YmJsZXMpe1xuICAgICAgbGV0IGRpc2FibGVGYWNldHNJZHMgPSBbXTtcbiAgICAgIHRoaXMuZmFjZXREYXRhLmZvckVhY2goIChmRCkgPT4ge1xuICAgICAgICBpZighZkQuZW5hYmxlZCkgZGlzYWJsZUZhY2V0c0lkcy5wdXNoKGZELnR5cGUuaWQpO1xuICAgICAgfSk7XG5cbiAgICAgIGlmKGRpc2FibGVGYWNldHNJZHMpe1xuICAgICAgICBsZXQgZmlsdGVyZWRTZWxlY3RlZEJ1YmJsZXMgPSB0aGlzLnNlbGVjdGVkQnViYmxlcy5maWx0ZXIoIChidWJibGUpID0+IHtcbiAgICAgICAgICBsZXQgdHlwZU9mRW50aXR5ID0gXCJcIjtcbiAgICAgICAgICBmb3IodmFyIGk9MDtpPHRoaXMuYWxsQnViYmxlcy5sZW5ndGg7aSsrKXtcbiAgICAgICAgICAgIGlmKHRoaXMuYWxsQnViYmxlc1tpXS5pZD09PWJ1YmJsZS5pZCl7XG4gICAgICAgICAgICAgIHR5cGVPZkVudGl0eT10aGlzLmFsbEJ1YmJsZXNbaV0uZW50aXR5LnR5cGVPZkVudGl0eS5pZDtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmKGRpc2FibGVGYWNldHNJZHMuaW5jbHVkZXModHlwZU9mRW50aXR5KSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYoZmlsdGVyZWRTZWxlY3RlZEJ1YmJsZXMubGVuZ3RoIT10aGlzLnNlbGVjdGVkQnViYmxlcy5sZW5ndGgpe1xuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRCdWJibGVzID0gZmlsdGVyZWRTZWxlY3RlZEJ1YmJsZXM7XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICB0aGlzLmFsbEJ1YmJsZXMuZm9yRWFjaCggKGJ1YmJsZSkgPT4ge1xuICAgICAgICBidWJibGUuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgZm9yKHZhciBpPTA7IGk8dGhpcy5zZWxlY3RlZEJ1YmJsZXMubGVuZ3RoO2krKyl7XG4gICAgICAgICAgaWYodGhpcy5zZWxlY3RlZEJ1YmJsZXNbaV0uaWQ9PT1idWJibGUuaWQpIGJ1YmJsZS5zZWxlY3RlZD10cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMub25lKCdhdy1ob21lLWJ1YmJsZS1jaGFydCcpLnVwZGF0ZSh7XG4gICAgICAgIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aC8xLjgsXG4gICAgICAgIGJ1YmJsZXM6dGhpcy5maWx0ZXJCdWJibGVzQmFzZWRPbkZhY2V0c0VuYWJsZWQoKSxcbiAgICAgICAgc2V0QnViYmxlQ2hhcnQ6IChidWJibGVDcmVmKSA9PiB0aGlzLl9idWJibGVDaGFydCA9IGJ1YmJsZUNyZWYsXG4gICAgICAgIHJlc2V0OnRydWVcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlckl0ZW1UYWdzKCl7XG4gICAgbGV0IHRhZ3NEYXRhID0gW107XG4gICAgdGhpcy5zZWxlY3RlZEJ1YmJsZXMuZm9yRWFjaCggKHNCdWJibGUpID0+IHtcbiAgICAgIGxldCBsYWJlbCA9ICcnO1xuICAgICAgZm9yKHZhciBpPTA7aTx0aGlzLmFsbEJ1YmJsZXMubGVuZ3RoO2krKyl7XG4gICAgICAgIGlmKHRoaXMuYWxsQnViYmxlc1tpXS5pZD09PXNCdWJibGUuaWQpe1xuICAgICAgICAgIGxhYmVsID0gdGhpcy5hbGxCdWJibGVzW2ldLmVudGl0eS5sYWJlbDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGFnc0RhdGEucHVzaCh7bGFiZWwsaWNvbjpcIm43LWljb24tY2xvc2VcIixwYXlsb2FkOnNCdWJibGUuaWQsY2xhc3NlczpcInRhZy1cIit0aGlzLmFsbEJ1YmJsZXNbaV0uZW50aXR5LnR5cGVPZkVudGl0eS5pZH0pO1xuICAgIH0pO1xuICAgIHRoaXMub25lKCdhdy1ob21lLWl0ZW0tdGFncy13cmFwcGVyJykudXBkYXRlKHRhZ3NEYXRhKTtcbiAgfVxuXG4gIG9uVGFnQ2xpY2tlZChwYXlsb2FkKXtcbiAgICBpZighcGF5bG9hZCkgcmV0dXJuO1xuICAgIGNvbnN0IGJ1YmJsZUlkPXBheWxvYWQ7XG4gICAgaWYodGhpcy5fYnViYmxlQ2hhcnQpe1xuICAgICAgdGhpcy5fYnViYmxlQ2hhcnQuc2VsZWN0QWxsKGBnYCkuZWFjaCggYiA9PiB7XG4gICAgICAgIGlmKGIuaWQ9PT1idWJibGVJZCkgYi5oYXNDbG9zZUljb24gPSBmYWxzZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLnNlbGVjdGVkQnViYmxlcyA9IHRoaXMuc2VsZWN0ZWRCdWJibGVzLmZpbHRlciggKGIpID0+IGIuaWQhPT1wYXlsb2FkICk7XG4gICAgdGhpcy51cGRhdGVCdWJibGVzQW5kSXRlbVByZXZpZXdzKCk7XG4gIH1cblxuICBwcml2YXRlIF9nZXRTdWJuYXYoKXtcbiAgICByZXR1cm4gWydob21lJywgJ3Jlc3VsdHMnLCAnc2luZ2xlJ10ubWFwKHBhZ2UgPT4gKHtcbiAgICAgIHRleHQ6IHBhZ2UudG9VcHBlckNhc2UoKSwgXG4gICAgICBwYXlsb2FkOiB7XG4gICAgICAgIHNvdXJjZTogJ25hdmlnYXRlJyxcbiAgICAgICAgaGFuZGxlcjogJ3JvdXRlcicsXG4gICAgICAgIHBhdGg6IFtgYXcvJHtwYWdlfWBdLFxuICAgICAgICBpZDogcGFnZVxuICAgICAgfSxcbiAgICAgIF9tZXRhOiB7IGlkOiBwYWdlIH1cbiAgICB9KSk7XG4gIH1cblxuICBwcml2YXRlIF9nZXRCcmVhZGNydW1icygpe1xuICAgIHJldHVybiB7XG4gICAgICBpdGVtczogW3tcbiAgICAgICAgbGFiZWw6ICdBcmlhbm5hIFdlYicsXG4gICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICBzb3VyY2U6ICduYXZpZ2F0ZScsXG4gICAgICAgICAgaGFuZGxlcjogJ3JvdXRlcicsXG4gICAgICAgICAgcGF0aDogW2Bhdy9ob21lYF1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICdIb21lIExheW91dCcsXG4gICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICBzb3VyY2U6ICduYXZpZ2F0ZScsXG4gICAgICAgICAgaGFuZGxlcjogJ3JvdXRlcicsXG4gICAgICAgICAgcGF0aDogW2Bhdy9ob21lYF1cbiAgICAgICAgfVxuICAgICAgfV0gXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgX3Njcm9sbEJhY2tncm91bmRDb250cm9sKCl7XG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnViYmxlLXJlc3VsdHMtbGlzdCcpLCBcbiAgICAgIHNvdXJjZSQgPSBmcm9tRXZlbnQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1YmJsZS1yZXN1bHRzLWxpc3QnKSwgJ3Njcm9sbCcpO1xuXG4gICAgLy8gaGVpZ2h0IGNvbnRyb2xcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuX3NldEhhc1Njcm9sbEJhY2tncm91bmQoZWwpO1xuICAgIH0sIDUwMCk7XG5cbiAgICAvLyBzY3JvbGwgbGlzdGVuXG4gICAgc291cmNlJC5waXBlKFxuICAgICAgZGVib3VuY2VUaW1lKDUwKVxuICAgICkuc3Vic2NyaWJlKCh7IHRhcmdldCB9OiB7IHRhcmdldDogYW55IH0pID0+IHtcbiAgICAgIHRoaXMuX3NldEhhc1Njcm9sbEJhY2tncm91bmQodGFyZ2V0KTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX3NldEhhc1Njcm9sbEJhY2tncm91bmQoeyBzY3JvbGxUb3AsIHNjcm9sbEhlaWdodCwgY2xpZW50SGVpZ2h0IH0pe1xuICAgIHRoaXMuaGFzU2Nyb2xsQmFja2dyb3VuZCA9IHNjcm9sbEhlaWdodCA+IChzY3JvbGxUb3AgKyBjbGllbnRIZWlnaHQpO1xuICB9XG59Il19