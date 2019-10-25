/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { LayoutDataSource } from '@n7-frontend/core';
import { fromEvent, Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
export class AwHomeLayoutDS extends LayoutDataSource {
    constructor() {
        super(...arguments);
        this.facetData = null;
        this.lockedFacets = {};
        this.facetInputs = {};
        // all the bubbles as they have been given by apollo
        // (the objects in the allBubbles are not the same bubble objects
        // present in the bubble chart)
        this.allBubbles = null;
        this.autocompletePopoverOpen = false;
        this.autocompleteChanged$ = new Subject();
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
        this.loadingBubbles = false;
        this.bubblesEnabled = false;
        this.updateComponent = (/**
         * @param {?} id
         * @param {?} data
         * @param {?} options
         * @return {?}
         */
        (id, data, options) => {
            if (options) {
                this.one(id).updateOptions(options);
            }
            this.one(id).update(data);
        });
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    onInit({ communication, mainState, configuration, tippy }) {
        this.communication = communication;
        this.configuration = configuration;
        this.facetData = [];
        this.lastWindowWidth = window.outerWidth;
        this.mainState = mainState;
        this.tippy = tippy;
        this.bubblesEnabled = this.configuration.get('features-enabled') ? this.configuration.get('features-enabled')['bubblechart'] : false;
        this.one('aw-hero').update(this.configuration.get('home-layout')['top-hero']);
        this.one('aw-home-hero-patrimonio').update(this.configuration.get('home-layout')['bottom-hero']);
        // update streams
        this.mainState.update('headTitle', 'Arianna Web > Home');
        this.mainState.update('pageTitle', 'Arianna Web: Home Layout');
        // listen autocomplete changes
        this._listenAutoCompleteChanges();
    }
    /**
     * @param {?} query
     * @param {?} params
     * @return {?}
     */
    makeRequest$(query, params) {
        return this.communication.request$(query, {
            onError: (/**
             * @param {?} error
             * @return {?}
             */
            (error) => console.error(error)),
            params
        });
    }
    /**
     * @return {?}
     */
    initialFilterRequest() {
        return this.communication.request$('globalFilter', {
            onError: (/**
             * @param {?} error
             * @return {?}
             */
            (error) => console.error(error)),
        });
    }
    /**
     * @param {?} response
     * @return {?}
     */
    parseInitialRequest(response) {
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
        this.one('aw-home-facets-wrapper').update({
            facetData: this.facetData,
            lockedFacets: this.lockedFacets
        });
        this.one('aw-bubble-chart').updateOptions({
            context: 'home',
            configKeys: this.configuration.get("config-keys"),
            bubbleContainerId: 'bubbleChartContainer',
            containerId: 'bubble-chart-container',
        });
        this.renderPreviewsFromApolloQuery(response);
    }
    /**
     * @param {?} response
     * @return {?}
     */
    renderPreviewsFromApolloQuery(response) {
        if (!response || !response.itemsPagination) {
            return;
        }
        ;
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
        this.one('aw-linked-objects').updateOptions({ context: 'home', config: this.configuration });
        this.one('aw-linked-objects').update(response.itemsPagination.items);
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
                const bubbleId = payload.bubbleId;
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
     * @param {?} bubble
     * @return {?}
     */
    onBubbleSelected(bubble) {
        if (bubble) {
            if (!this.selectedBubbles.includes(bubble)) {
                if (this.selectedBubbles.length < this.maxBubblesSelectable) {
                    this.loadingBubbles = this.selectedBubbles.length == 0;
                    this.selectedBubbles.push(bubble);
                    return true;
                }
            }
        }
        return null;
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
                return this.filterRequest();
            }
        }
    }
    /**
     * @param {?} response
     * @return {?}
     */
    getBubblePayload(response) {
        /** @type {?} */
        let bubblePayolad = {
            reset: true,
            setBubbleChart: (/**
             * @param {?} bubbleCref
             * @return {?}
             */
            (bubbleCref) => this._bubbleChart = bubbleCref),
            facetData: this.facetData,
            source: response,
            selectedBubbles: this.selectedBubbles
        };
        return bubblePayolad;
    }
    /**
     * @private
     * @return {?}
     */
    filterRequest() {
        /** @type {?} */
        let selectedEntitiesIds = [];
        if (this.entityBubbleIdMap) {
            /** @type {?} */
            let k = this.configuration.get('config-keys');
            /** @type {?} */
            let activeBubbles = {
                places: false,
                people: false,
                concepts: false,
                organizations: false,
            };
            this.selectedBubbles.forEach((/**
             * @param {?} sB
             * @return {?}
             */
            (sB) => {
                /** @type {?} */
                let c = sB.color;
                /** @type {?} */
                let findTypeFromColor = (/**
                 * @param {?} obj
                 * @param {?} color
                 * @return {?}
                 */
                (obj, color) => {
                    return Object.keys(obj).find((/**
                     * @param {?} key
                     * @return {?}
                     */
                    key => obj[key].color.hex === color));
                });
                activeBubbles[findTypeFromColor(k, c)] = true;
                /** @type {?} */
                let entityId = this.entityBubbleIdMap[sB.id];
                if (entityId)
                    selectedEntitiesIds.push(entityId);
            }));
            this.lockedFacets = activeBubbles;
            this.one('aw-home-facets-wrapper').update({
                facetData: this.facetData,
                lockedFacets: this.lockedFacets
            });
        }
        return this.communication.request$('globalFilter', {
            onError: (/**
             * @param {?} error
             * @return {?}
             */
            (error) => console.error(error)),
            params: {
                selectedEntitiesIds,
                itemsPagination: { offset: 0, limit: this.configuration.get('home-layout')['results-limit'] }
            },
        });
    }
    /**
     * @param {?} response
     * @param {?=} onlyBubbles
     * @return {?}
     */
    updateBubbles(response, onlyBubbles) {
        if (!onlyBubbles) {
            this.renderPreviewsFromApolloQuery(response);
        }
    }
    /**
     * @param {?} data
     * @return {?}
     */
    updateBubbleFilter(data) {
        this.allBubbles = data.allBubbles;
        this.entityBubbleIdMap = data.entityIdmap;
    }
    /**
     * @param {?=} onlyBubbles
     * @return {?}
     */
    updateTags(onlyBubbles) {
        if (!onlyBubbles) {
            this.renderItemTags();
        }
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
        f => f.enabled)).length - 1;
        this.facetData.forEach((/**
         * @param {?} f
         * @return {?}
         */
        f => {
            if (f.type.id === facetId && f.locked === true) {
                // if user clicked on a locked facet, ignore it
                return;
            }
            if (f.type.id === facetId) {
                // if this is the clicked facet
                if (f.enabled && enabledFacets >= 1) {
                    f.enabled = false;
                    f.locked = false;
                    updateBubbles = true;
                }
                else {
                    f.enabled = true;
                    f.locked = false;
                    updateBubbles = true;
                }
            }
            else {
                // if this is another facet
                if (enabledFacets === 1 && f.enabled) {
                    f.locked = true;
                }
                else {
                    f.locked = false;
                }
            }
        }));
        this.one('aw-home-facets-wrapper').update({
            facetData: this.facetData,
            lockedFacets: this.lockedFacets
        });
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
            this.one('aw-bubble-chart').update(this.getBubblePayload(null));
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
                    tagsData.push({
                        label, icon: "n7-icon-close",
                        payload: sBubble.id,
                        classes: "tag-" + this.allBubbles[i].entity.typeOfEntity.id
                    });
                    break;
                }
            }
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
        return this.filterRequest();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onHeroChange(value) {
        this.autocompleteChanged$.next(value);
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
    /**
     * @private
     * @return {?}
     */
    _listenAutoCompleteChanges() {
        this.one('aw-home-autocomplete').updateOptions({ config: this.configuration.get('config-keys') });
        this.autocompleteChanged$.pipe(debounceTime(500)).subscribe((/**
         * @param {?} value
         * @return {?}
         */
        value => {
            if (value) {
                this.communication.request$('autoComplete', {
                    onError: (/**
                     * @param {?} error
                     * @return {?}
                     */
                    (error) => console.error(error)),
                    params: {
                        input: value,
                        itemsPagination: { offset: 0, limit: this.configuration.get('home-layout')['results-limit'] }
                    }
                }).subscribe((/**
                 * @param {?} response
                 * @return {?}
                 */
                (response) => {
                    this.one('aw-home-autocomplete').update(response);
                    if (!this.autocompletePopoverOpen)
                        this._toggleAutocompletePopover();
                }));
            }
            else {
                this._toggleAutocompletePopover();
            }
        }));
    }
    /**
     * @private
     * @return {?}
     */
    _toggleAutocompletePopover() {
        if (!this.autocompletePopover) {
            /** @type {?} */
            const template = document.getElementById('aw-home-advanced-autocomplete-popover');
            template.style.display = 'block';
            this.autocompletePopover = this.tippy('.aw-home__top-hero .n7-hero__input', {
                content: template,
                trigger: 'manual',
                interactive: true,
                arrow: false,
                appendTo: 'parent',
                theme: 'light-border',
                placement: 'bottom-start',
                maxWidth: '100%',
                onHidden: (/**
                 * @return {?}
                 */
                () => this.autocompletePopoverOpen = false),
            })[0];
        }
        if (this.autocompletePopoverOpen) {
            this.autocompletePopover.hide();
        }
        else {
            this.autocompletePopover.show();
        }
        this.autocompletePopoverOpen = !this.autocompletePopoverOpen;
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
    AwHomeLayoutDS.prototype.lockedFacets;
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
    /**
     * @type {?}
     * @private
     */
    AwHomeLayoutDS.prototype.autocompletePopover;
    /**
     * @type {?}
     * @private
     */
    AwHomeLayoutDS.prototype.autocompletePopoverOpen;
    /**
     * @type {?}
     * @private
     */
    AwHomeLayoutDS.prototype.autocompleteChanged$;
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
    /** @type {?} */
    AwHomeLayoutDS.prototype.loadingBubbles;
    /** @type {?} */
    AwHomeLayoutDS.prototype.bubblesEnabled;
    /** @type {?} */
    AwHomeLayoutDS.prototype.updateComponent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1sYXlvdXQuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvbGF5b3V0cy9ob21lLWxheW91dC9ob21lLWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDckQsT0FBTyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDMUMsT0FBTyxFQUFZLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXhELE1BQU0sT0FBTyxjQUFlLFNBQVEsZ0JBQWdCO0lBQXBEOztRQUtVLGNBQVMsR0FBVSxJQUFJLENBQUM7UUFDeEIsaUJBQVksR0FBRyxFQUFFLENBQUM7UUFDbEIsZ0JBQVcsR0FBUSxFQUFFLENBQUM7Ozs7UUFJdEIsZUFBVSxHQUFVLElBQUksQ0FBQztRQUV6Qiw0QkFBdUIsR0FBWSxLQUFLLENBQUM7UUFDekMseUJBQW9CLEdBQW9CLElBQUksT0FBTyxFQUFFLENBQUM7OztRQUd2RCxvQkFBZSxHQUFVLEVBQUUsQ0FBQztRQUM1QixrQkFBYSxHQUFXLElBQUksQ0FBQzs7O1FBRzVCLGlCQUFZLEdBQVEsSUFBSSxDQUFDOztRQUV6Qix5QkFBb0IsR0FBVyxDQUFDLENBQUM7Ozs7OztRQU1qQyxzQkFBaUIsR0FBUSxFQUFFLENBQUM7OztRQUc1QixvQkFBZSxHQUFXLENBQUMsQ0FBQyxDQUFDO1FBQzdCLGdCQUFXLEdBQVEsSUFBSSxDQUFDO1FBQ3pCLHVCQUFrQixHQUFRLElBQUksQ0FBQztRQUMvQix3QkFBbUIsR0FBWSxLQUFLLENBQUM7UUFDckMsbUJBQWMsR0FBRyxLQUFLLENBQUM7UUFDdkIsbUJBQWMsR0FBRyxLQUFLLENBQUM7UUEyQnZCLG9CQUFlOzs7Ozs7UUFBRyxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUs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LHlDQUFxQzs7Ozs7SUFDckMscUNBQWdDOztJQUNoQyw0Q0FBc0M7O0lBQ3RDLDZDQUE0Qzs7SUFDNUMsd0NBQThCOztJQUM5Qix3Q0FBOEI7O0lBMkI5Qix5Q0FLQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExheW91dERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBmcm9tRXZlbnQsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlLCBkZWJvdW5jZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmV4cG9ydCBjbGFzcyBBd0hvbWVMYXlvdXREUyBleHRlbmRzIExheW91dERhdGFTb3VyY2Uge1xuICBwcml2YXRlIGNvbW11bmljYXRpb246IGFueTtcbiAgcHJpdmF0ZSBtYWluU3RhdGU6IGFueTtcbiAgcHJpdmF0ZSB0aXBweTogYW55O1xuICBwcml2YXRlIGNvbmZpZ3VyYXRpb246IGFueTtcbiAgcHJpdmF0ZSBmYWNldERhdGE6IGFueVtdID0gbnVsbDtcbiAgcHJpdmF0ZSBsb2NrZWRGYWNldHMgPSB7fTtcbiAgcHJpdmF0ZSBmYWNldElucHV0czogYW55ID0ge307XG4gIC8vIGFsbCB0aGUgYnViYmxlcyBhcyB0aGV5IGhhdmUgYmVlbiBnaXZlbiBieSBhcG9sbG9cbiAgLy8gKHRoZSBvYmplY3RzIGluIHRoZSBhbGxCdWJibGVzIGFyZSBub3QgdGhlIHNhbWUgYnViYmxlIG9iamVjdHNcbiAgLy8gcHJlc2VudCBpbiB0aGUgYnViYmxlIGNoYXJ0KVxuICBwcml2YXRlIGFsbEJ1YmJsZXM6IGFueVtdID0gbnVsbDtcbiAgcHJpdmF0ZSBhdXRvY29tcGxldGVQb3BvdmVyOiBhbnk7XG4gIHByaXZhdGUgYXV0b2NvbXBsZXRlUG9wb3Zlck9wZW46IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBhdXRvY29tcGxldGVDaGFuZ2VkJDogU3ViamVjdDxzdHJpbmc+ID0gbmV3IFN1YmplY3QoKTtcbiAgLy8gdGhlIGJ1YmJsZXMgY3VycmVudGx5IHNlbGVjdGVkICh0aGlzIGFyZSBzYXZlZCBmcm9tIHRoZSBldmVudCBoYW5kbGVyJ3NcbiAgLy8gYW5kIGNvcnJlc3BvbmQgZXhhY3RseSB0byB0aGUgYnViYmxlY2hhcnQncyBidWJibGUgb2JqZWN0cylcbiAgcHVibGljIHNlbGVjdGVkQnViYmxlczogYW55W10gPSBbXTtcbiAgcHVibGljIG51bU9mSXRlbXNTdHI6IHN0cmluZyA9IG51bGw7XG4gIC8vIGluc3RhbmNlIG9mIHRoZSBidWJibGUgY2hhcnQgKGZyb20gd2hpY2ggeW91IGNhbiBhY2Nlc3MgYWxsIHRoZSB2YXJpb3VzXG4gIC8vIGJ1YmJsZSBvYmplY3RzKVxuICBwcml2YXRlIF9idWJibGVDaGFydDogYW55ID0gbnVsbDtcbiAgLy8gdGhlIG1heGltdW0gbnVtYmVyIG9mIGJ1YmJsZXMgd2hpY2ggY2FuIGJlIHNlbGVjdGVkIGF0IHRoZSBzYW1lIHRpbWVcbiAgcHJpdmF0ZSBtYXhCdWJibGVzU2VsZWN0YWJsZTogbnVtYmVyID0gMztcbiAgLy8gZW50aXRpZXMgaGF2ZSB0aGVpciBvd24gdW5pcXVlIGlkLCB0aGVzZSBpZHMgYXJlIGdlbmVyaWMgYW5kIGFyZSB2ZXJ5IGZsZXhpYmxlXG4gIC8vIGJ1YmJsZXMgKGFzIHRoZSBidWJibGUgY2hhcnQncyBvYmplY3RzKSBoYXZlIHVuaXF1ZSBpZHMgYnV0IGRvIG5vdCBhbGxvdyBjZXJ0YWluXG4gIC8vIGNoYXJhY3RlcnMsIHNvIGVhY2ggYnViYmxlIGhhcyBpdHMgb3duIGlkIGRpZmZlcmVudCBmcm9tIHRoZSBpZCBvZiB0aGUgZW50aXR5IHdoaWNoXG4gIC8vIHRoZSBidWJibGUgcmVwcmVzZW50cyAoZ2l2ZW4gYW4gYnViYmxlJ3MgaWQgY2FsbGVkIGJ1YmJsZUlkIHlvdSBjYW4gb2J0YWluIHRoZVxuICAvLyByZXNwZWN0aXZlIGVudGl0eSdzIGlkIHdpdGggYXM6IGVudGl0eUlkID0gZW50aXR5QnViYmxlSWRNYXBbYnViYmxlSWRdIClcbiAgcHJpdmF0ZSBlbnRpdHlCdWJibGVJZE1hcDogYW55ID0ge307XG4gIC8vIHdpZGggb2YgdGhlIHdpbmRvdyB3aGljaCBpcyB1cGRhdGVkIGF0IGVhY2ggcmVzaXplIGFuZCBpdCBpcyB1c2VkIGJ5IHRoZSBidWJibGVcbiAgLy8gY2hhcnQgdG8gY2hlY2sgaWYgdGhlIHdpZHRoIG9mIHRoZSB3aW5kb3cgaGFzIGNoYW5nZWQgZHVyaW5nIHRoZSBsYXN0IHJlc2l6ZVxuICBwcml2YXRlIGxhc3RXaW5kb3dXaWR0aDogbnVtYmVyID0gLTE7XG4gIHByaXZhdGUgYnViYmxlUG9wdXA6IGFueSA9IG51bGw7XG4gIHB1YmxpYyBjdXJyZW50SG92ZXJFbnRpdHk6IGFueSA9IG51bGw7XG4gIHB1YmxpYyBoYXNTY3JvbGxCYWNrZ3JvdW5kOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBsb2FkaW5nQnViYmxlcyA9IGZhbHNlO1xuICBwdWJsaWMgYnViYmxlc0VuYWJsZWQgPSBmYWxzZTtcblxuICBvbkluaXQoeyBjb21tdW5pY2F0aW9uLCBtYWluU3RhdGUsIGNvbmZpZ3VyYXRpb24sIHRpcHB5IH0pIHtcbiAgICB0aGlzLmNvbW11bmljYXRpb24gPSBjb21tdW5pY2F0aW9uO1xuICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IGNvbmZpZ3VyYXRpb247XG4gICAgdGhpcy5mYWNldERhdGEgPSBbXTtcbiAgICB0aGlzLmxhc3RXaW5kb3dXaWR0aCA9IHdpbmRvdy5vdXRlcldpZHRoO1xuICAgIHRoaXMubWFpblN0YXRlID0gbWFpblN0YXRlO1xuICAgIHRoaXMudGlwcHkgPSB0aXBweTtcbiAgICB0aGlzLmJ1YmJsZXNFbmFibGVkID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnZmVhdHVyZXMtZW5hYmxlZCcpID8gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnZmVhdHVyZXMtZW5hYmxlZCcpWydidWJibGVjaGFydCddIDogZmFsc2U7XG5cbiAgICB0aGlzLm9uZSgnYXctaGVybycpLnVwZGF0ZSh0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdob21lLWxheW91dCcpWyd0b3AtaGVybyddKTtcbiAgICB0aGlzLm9uZSgnYXctaG9tZS1oZXJvLXBhdHJpbW9uaW8nKS51cGRhdGUodGhpcy5jb25maWd1cmF0aW9uLmdldCgnaG9tZS1sYXlvdXQnKVsnYm90dG9tLWhlcm8nXSk7XG4gICAgLy8gdXBkYXRlIHN0cmVhbXNcbiAgICB0aGlzLm1haW5TdGF0ZS51cGRhdGUoJ2hlYWRUaXRsZScsICdBcmlhbm5hIFdlYiA+IEhvbWUnKTtcbiAgICB0aGlzLm1haW5TdGF0ZS51cGRhdGUoJ3BhZ2VUaXRsZScsICdBcmlhbm5hIFdlYjogSG9tZSBMYXlvdXQnKTtcbiAgICAvLyBsaXN0ZW4gYXV0b2NvbXBsZXRlIGNoYW5nZXNcbiAgICB0aGlzLl9saXN0ZW5BdXRvQ29tcGxldGVDaGFuZ2VzKCk7XG4gIH1cblxuICBwdWJsaWMgbWFrZVJlcXVlc3QkKHF1ZXJ5LCBwYXJhbXMpIHtcbiAgICByZXR1cm4gdGhpcy5jb21tdW5pY2F0aW9uLnJlcXVlc3QkKHF1ZXJ5LCB7XG4gICAgICBvbkVycm9yOiAoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpLFxuICAgICAgcGFyYW1zXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlQ29tcG9uZW50ID0gKGlkLCBkYXRhLCBvcHRpb25zKSA9PiB7XG4gICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgIHRoaXMub25lKGlkKS51cGRhdGVPcHRpb25zKG9wdGlvbnMpXG4gICAgfVxuICAgIHRoaXMub25lKGlkKS51cGRhdGUoZGF0YSlcbiAgfVxuXG4gIGluaXRpYWxGaWx0ZXJSZXF1ZXN0KCkge1xuICAgIHJldHVybiB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQoJ2dsb2JhbEZpbHRlcicsIHtcbiAgICAgIG9uRXJyb3I6IChlcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvciksXG4gICAgfSlcbiAgfVxuXG4gIHBhcnNlSW5pdGlhbFJlcXVlc3QocmVzcG9uc2UpIHtcbiAgICByZXNwb25zZS5lbnRpdGllc0RhdGEuZm9yRWFjaCgoZW50KSA9PiB7XG4gICAgICBjb25zdCB0ZW9Db25maWdEYXRhID0gdGhpcy5jb25maWd1cmF0aW9uLmdldChcImNvbmZpZy1rZXlzXCIpW2VudC5jb3VudERhdGEudHlwZS5jb25maWdLZXldO1xuICAgICAgaWYgKHRlb0NvbmZpZ0RhdGEpXG4gICAgICAgIHRoaXMuZmFjZXREYXRhLnB1c2goe1xuICAgICAgICAgIC4uLmVudC5jb3VudERhdGEsXG4gICAgICAgICAgLi4udGVvQ29uZmlnRGF0YSxcbiAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICB0aGlzLm9uZSgnYXctaG9tZS1mYWNldHMtd3JhcHBlcicpLnVwZGF0ZSh7XG4gICAgICBmYWNldERhdGE6IHRoaXMuZmFjZXREYXRhLFxuICAgICAgbG9ja2VkRmFjZXRzOiB0aGlzLmxvY2tlZEZhY2V0c1xuICAgIH0pO1xuICAgIHRoaXMub25lKCdhdy1idWJibGUtY2hhcnQnKS51cGRhdGVPcHRpb25zKHtcbiAgICAgIGNvbnRleHQ6ICdob21lJyxcbiAgICAgIGNvbmZpZ0tleXM6IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoXCJjb25maWcta2V5c1wiKSxcbiAgICAgIGJ1YmJsZUNvbnRhaW5lcklkOiAnYnViYmxlQ2hhcnRDb250YWluZXInLFxuICAgICAgY29udGFpbmVySWQ6ICdidWJibGUtY2hhcnQtY29udGFpbmVyJyxcbiAgICB9KTtcbiAgICB0aGlzLnJlbmRlclByZXZpZXdzRnJvbUFwb2xsb1F1ZXJ5KHJlc3BvbnNlKTtcbiAgfVxuXG4gIHJlbmRlclByZXZpZXdzRnJvbUFwb2xsb1F1ZXJ5KHJlc3BvbnNlOiBhbnkpIHtcbiAgICBpZiAoIXJlc3BvbnNlIHx8ICFyZXNwb25zZS5pdGVtc1BhZ2luYXRpb24pIHtcbiAgICAgIHJldHVyblxuICAgIH07XG4gICAgbGV0IG51bU9mSXRlbXMgPSByZXNwb25zZS5pdGVtc1BhZ2luYXRpb24udG90YWxDb3VudDtcbiAgICBpZiAobnVtT2ZJdGVtcyA+IDApIHtcbiAgICAgIGxldCBudW1PZlRob3VzYW5kID0gMDtcbiAgICAgIHdoaWxlIChudW1PZkl0ZW1zID4gOTk5KSB7XG4gICAgICAgIG51bU9mSXRlbXMgLT0gMTAwMDtcbiAgICAgICAgbnVtT2ZUaG91c2FuZCArPSAxO1xuICAgICAgfVxuICAgICAgbGV0IG51bU9mSXRlbXNUbXBTdHIgPSBudW1PZkl0ZW1zICsgJyc7XG4gICAgICBpZiAobnVtT2ZJdGVtcyA8IDEwKSBudW1PZkl0ZW1zVG1wU3RyID0gJzAwJyArIG51bU9mSXRlbXM7XG4gICAgICBlbHNlIGlmIChudW1PZkl0ZW1zIDwgMTAwKSBudW1PZkl0ZW1zVG1wU3RyID0gJzAnICsgbnVtT2ZJdGVtcztcbiAgICAgIGlmIChudW1PZlRob3VzYW5kID4gMClcbiAgICAgICAgdGhpcy5udW1PZkl0ZW1zU3RyID0gbnVtT2ZUaG91c2FuZCArICcuJyArIG51bU9mSXRlbXNUbXBTdHI7XG4gICAgICBlbHNlXG4gICAgICAgIHRoaXMubnVtT2ZJdGVtc1N0ciA9IG51bU9mSXRlbXMgKyAnJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5udW1PZkl0ZW1zU3RyID0gbnVsbDtcbiAgICB9XG4gICAgdGhpcy5vbmUoJ2F3LWxpbmtlZC1vYmplY3RzJykudXBkYXRlT3B0aW9ucyh7IGNvbnRleHQ6ICdob21lJywgY29uZmlnOiB0aGlzLmNvbmZpZ3VyYXRpb24gfSlcbiAgICB0aGlzLm9uZSgnYXctbGlua2VkLW9iamVjdHMnKS51cGRhdGUocmVzcG9uc2UuaXRlbXNQYWdpbmF0aW9uLml0ZW1zKTtcbiAgfVxuXG4gIG9uQnViYmxlVG9vbHRpcENsaWNrKHNvdXJjZTogc3RyaW5nLCBwYXlsb2FkKSB7XG4gICAgc3dpdGNoIChzb3VyY2UpIHtcbiAgICAgIGNhc2UgJ3NlbGVjdCc6XG4gICAgICAgIGlmICghcGF5bG9hZCkgcmV0dXJuO1xuICAgICAgICBjb25zdCBidWJibGVJZCA9IHBheWxvYWQuYnViYmxlSWQ7XG4gICAgICAgIGlmICghYnViYmxlSWQpIHJldHVybjtcbiAgICAgICAgbGV0IGJ1YmJsZSA9IG51bGw7XG4gICAgICAgIGlmICh0aGlzLl9idWJibGVDaGFydCkge1xuICAgICAgICAgIHRoaXMuX2J1YmJsZUNoYXJ0LnNlbGVjdEFsbChgZ2ApLmVhY2goYiA9PiB7XG4gICAgICAgICAgICBpZiAoYi5pZCA9PT0gYnViYmxlSWQpIGJ1YmJsZSA9IGI7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaWYgKGJ1YmJsZSkgdGhpcy5vbkJ1YmJsZVNlbGVjdGVkKGJ1YmJsZSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb25CdWJibGVTZWxlY3RlZChidWJibGUpIHtcbiAgICBpZiAoYnViYmxlKSB7XG4gICAgICBpZiAoIXRoaXMuc2VsZWN0ZWRCdWJibGVzLmluY2x1ZGVzKGJ1YmJsZSkpIHtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRCdWJibGVzLmxlbmd0aCA8IHRoaXMubWF4QnViYmxlc1NlbGVjdGFibGUpIHtcbiAgICAgICAgICB0aGlzLmxvYWRpbmdCdWJibGVzID0gdGhpcy5zZWxlY3RlZEJ1YmJsZXMubGVuZ3RoID09IDA7XG4gICAgICAgICAgdGhpcy5zZWxlY3RlZEJ1YmJsZXMucHVzaChidWJibGUpO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcHVibGljIG9uQnViYmxlRGVzZWxlY3RlZChwYXlsb2FkKSB7XG4gICAgaWYgKHBheWxvYWQgJiYgcGF5bG9hZC5idWJibGUpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRCdWJibGVzID0gdGhpcy5zZWxlY3RlZEJ1YmJsZXMuZmlsdGVyKFxuICAgICAgICAoYikgPT4gYi5pZCAhPT0gcGF5bG9hZC5idWJibGUuaWQpO1xuICAgICAgaWYgKHBheWxvYWQuYnViYmxlLmhhc0Nsb3NlSWNvbikge1xuICAgICAgICBwYXlsb2FkLmJ1YmJsZS5oYXNDbG9zZUljb24gPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmlsdGVyUmVxdWVzdCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXRCdWJibGVQYXlsb2FkKHJlc3BvbnNlKSB7XG4gICAgbGV0IGJ1YmJsZVBheW9sYWQgPSB7XG4gICAgICByZXNldDogdHJ1ZSxcbiAgICAgIHNldEJ1YmJsZUNoYXJ0OiAoYnViYmxlQ3JlZikgPT4gdGhpcy5fYnViYmxlQ2hhcnQgPSBidWJibGVDcmVmLFxuICAgICAgZmFjZXREYXRhOiB0aGlzLmZhY2V0RGF0YSxcbiAgICAgIHNvdXJjZTogcmVzcG9uc2UsXG4gICAgICBzZWxlY3RlZEJ1YmJsZXM6IHRoaXMuc2VsZWN0ZWRCdWJibGVzXG4gICAgfTtcbiAgICByZXR1cm4gYnViYmxlUGF5b2xhZDtcbiAgfVxuXG4gIHByaXZhdGUgZmlsdGVyUmVxdWVzdCgpIHtcbiAgICBsZXQgc2VsZWN0ZWRFbnRpdGllc0lkcyA9IFtdO1xuICAgIGlmICh0aGlzLmVudGl0eUJ1YmJsZUlkTWFwKSB7XG4gICAgICBsZXQgayA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2NvbmZpZy1rZXlzJylcbiAgICAgIGxldCBhY3RpdmVCdWJibGVzID0ge1xuICAgICAgICBwbGFjZXM6IGZhbHNlLFxuICAgICAgICBwZW9wbGU6IGZhbHNlLFxuICAgICAgICBjb25jZXB0czogZmFsc2UsXG4gICAgICAgIG9yZ2FuaXphdGlvbnM6IGZhbHNlLFxuICAgICAgfVxuICAgICAgdGhpcy5zZWxlY3RlZEJ1YmJsZXMuZm9yRWFjaCgoc0IpID0+IHtcbiAgICAgICAgbGV0IGMgPSBzQi5jb2xvclxuICAgICAgICBsZXQgZmluZFR5cGVGcm9tQ29sb3IgPSAob2JqLCBjb2xvcikgPT4ge1xuICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmopLmZpbmQoa2V5ID0+IG9ialtrZXldLmNvbG9yLmhleCA9PT0gY29sb3IpXG4gICAgICAgIH1cbiAgICAgICAgYWN0aXZlQnViYmxlc1tmaW5kVHlwZUZyb21Db2xvcihrLCBjKV0gPSB0cnVlXG4gICAgICAgIGxldCBlbnRpdHlJZCA9IHRoaXMuZW50aXR5QnViYmxlSWRNYXBbc0IuaWRdO1xuICAgICAgICBpZiAoZW50aXR5SWQpXG4gICAgICAgICAgc2VsZWN0ZWRFbnRpdGllc0lkcy5wdXNoKGVudGl0eUlkKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5sb2NrZWRGYWNldHMgPSBhY3RpdmVCdWJibGVzXG4gICAgICB0aGlzLm9uZSgnYXctaG9tZS1mYWNldHMtd3JhcHBlcicpLnVwZGF0ZSh7XG4gICAgICAgIGZhY2V0RGF0YTogdGhpcy5mYWNldERhdGEsXG4gICAgICAgIGxvY2tlZEZhY2V0czogdGhpcy5sb2NrZWRGYWNldHNcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5jb21tdW5pY2F0aW9uLnJlcXVlc3QkKCdnbG9iYWxGaWx0ZXInLCB7XG4gICAgICBvbkVycm9yOiAoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIHNlbGVjdGVkRW50aXRpZXNJZHMsXG4gICAgICAgIGl0ZW1zUGFnaW5hdGlvbjogeyBvZmZzZXQ6IDAsIGxpbWl0OiB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdob21lLWxheW91dCcpWydyZXN1bHRzLWxpbWl0J10gfVxuICAgICAgfSxcbiAgICB9KVxuICB9XG5cbiAgcHVibGljIHVwZGF0ZUJ1YmJsZXMocmVzcG9uc2UsIG9ubHlCdWJibGVzPzogYm9vbGVhbikge1xuICAgIGlmICghb25seUJ1YmJsZXMpIHtcbiAgICAgIHRoaXMucmVuZGVyUHJldmlld3NGcm9tQXBvbGxvUXVlcnkocmVzcG9uc2UpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGVCdWJibGVGaWx0ZXIoZGF0YSkge1xuICAgIHRoaXMuYWxsQnViYmxlcyA9IGRhdGEuYWxsQnViYmxlcztcbiAgICB0aGlzLmVudGl0eUJ1YmJsZUlkTWFwID0gZGF0YS5lbnRpdHlJZG1hcDtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGVUYWdzKG9ubHlCdWJibGVzPzogYm9vbGVhbikge1xuICAgIGlmICghb25seUJ1YmJsZXMpIHtcbiAgICAgIHRoaXMucmVuZGVySXRlbVRhZ3MoKTtcbiAgICB9XG4gIH1cblxuICBmaWx0ZXJCdWJibGVzQmFzZWRPbkZhY2V0c0VuYWJsZWQoKSB7XG4gICAgbGV0IHJlc3VsdCA9IHRoaXMuYWxsQnViYmxlcy5maWx0ZXIoXG4gICAgICAoYnViYmxlKSA9PiB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5mYWNldERhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAoYnViYmxlLmVudGl0eS50eXBlT2ZFbnRpdHkuaWQgPT09IHRoaXMuZmFjZXREYXRhW2ldLnR5cGUuaWQpXG4gICAgICAgICAgICBpZiAoIXRoaXMuZmFjZXREYXRhW2ldLmVuYWJsZWQpIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgaGFuZGxlRmFjZXRTZWFyY2hDaGFuZ2UoY2hhbmdlKSB7XG4gICAgdmFyIHBheWxvYWQ6IHN0cmluZyA9IGNoYW5nZS5pbnB1dFBheWxvYWQ7XG4gICAgdmFyIHZhbHVlOiBzdHJpbmcgPSBjaGFuZ2UudmFsdWU7XG4gICAgLy8gc3RvcmUgdGhlIGVudGVyZWQgdGV4dCBpbiBmYWNldElucHV0c1xuICAgIHRoaXMuZmFjZXRJbnB1dHNbcGF5bG9hZF0gPSB2YWx1ZTtcbiAgfVxuXG4gIGhhbmRsZUZhY2V0U2VhcmNoRW50ZXIoZW50ZXIpIHtcbiAgICB2YXIgcGF5bG9hZDogc3RyaW5nID0gZW50ZXIuaW5wdXRQYXlsb2FkO1xuICAgIC8vIGdldCB0aGUgdGV4dCBlbnRlcmVkIGluIHRoaXMgaW5wdXRcbiAgICB2YXIgdmFsdWU6IHN0cmluZyA9IHRoaXMuZmFjZXRJbnB1dHNbcGF5bG9hZF07XG4gIH1cblxuICBoYW5kbGVGYWNldEhlYWRlckNsaWNrKGZhY2V0SWQpIHtcbiAgICBsZXQgdXBkYXRlQnViYmxlcyA9IGZhbHNlO1xuICAgIGxldCBlbmFibGVkRmFjZXRzID0gdGhpcy5mYWNldERhdGEuZmlsdGVyKGYgPT4gZi5lbmFibGVkKS5sZW5ndGggLSAxO1xuICAgIHRoaXMuZmFjZXREYXRhLmZvckVhY2goZiA9PiB7XG4gICAgICBpZiAoZi50eXBlLmlkID09PSBmYWNldElkICYmIGYubG9ja2VkID09PSB0cnVlKSB7XG4gICAgICAgIC8vIGlmIHVzZXIgY2xpY2tlZCBvbiBhIGxvY2tlZCBmYWNldCwgaWdub3JlIGl0XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgaWYgKGYudHlwZS5pZCA9PT0gZmFjZXRJZCkge1xuICAgICAgICAvLyBpZiB0aGlzIGlzIHRoZSBjbGlja2VkIGZhY2V0XG4gICAgICAgIGlmIChmLmVuYWJsZWQgJiYgZW5hYmxlZEZhY2V0cyA+PSAxKSB7XG4gICAgICAgICAgZi5lbmFibGVkID0gZmFsc2U7XG4gICAgICAgICAgZi5sb2NrZWQgPSBmYWxzZTtcbiAgICAgICAgICB1cGRhdGVCdWJibGVzID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICAgIGYubG9ja2VkID0gZmFsc2U7XG4gICAgICAgICAgdXBkYXRlQnViYmxlcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGlmIHRoaXMgaXMgYW5vdGhlciBmYWNldFxuICAgICAgICBpZiAoZW5hYmxlZEZhY2V0cyA9PT0gMSAmJiBmLmVuYWJsZWQpIHtcbiAgICAgICAgICBmLmxvY2tlZCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZi5sb2NrZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMub25lKCdhdy1ob21lLWZhY2V0cy13cmFwcGVyJykudXBkYXRlKHtcbiAgICAgIGZhY2V0RGF0YTogdGhpcy5mYWNldERhdGEsXG4gICAgICBsb2NrZWRGYWNldHM6IHRoaXMubG9ja2VkRmFjZXRzXG4gICAgfSk7XG4gICAgaWYgKHVwZGF0ZUJ1YmJsZXMpIHtcbiAgICAgIGxldCBkaXNhYmxlRmFjZXRzSWRzID0gW107XG4gICAgICB0aGlzLmZhY2V0RGF0YS5mb3JFYWNoKChmRCkgPT4ge1xuICAgICAgICBpZiAoIWZELmVuYWJsZWQpIGRpc2FibGVGYWNldHNJZHMucHVzaChmRC50eXBlLmlkKTtcbiAgICAgIH0pO1xuICAgICAgaWYgKGRpc2FibGVGYWNldHNJZHMpIHtcbiAgICAgICAgbGV0IGZpbHRlcmVkU2VsZWN0ZWRCdWJibGVzID0gdGhpcy5zZWxlY3RlZEJ1YmJsZXMuZmlsdGVyKChidWJibGUpID0+IHtcbiAgICAgICAgICBsZXQgdHlwZU9mRW50aXR5ID0gXCJcIjtcbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuYWxsQnViYmxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuYWxsQnViYmxlc1tpXS5pZCA9PT0gYnViYmxlLmlkKSB7XG4gICAgICAgICAgICAgIHR5cGVPZkVudGl0eSA9IHRoaXMuYWxsQnViYmxlc1tpXS5lbnRpdHkudHlwZU9mRW50aXR5LmlkO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGRpc2FibGVGYWNldHNJZHMuaW5jbHVkZXModHlwZU9mRW50aXR5KSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGZpbHRlcmVkU2VsZWN0ZWRCdWJibGVzLmxlbmd0aCAhPSB0aGlzLnNlbGVjdGVkQnViYmxlcy5sZW5ndGgpIHtcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkQnViYmxlcyA9IGZpbHRlcmVkU2VsZWN0ZWRCdWJibGVzO1xuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgdGhpcy5hbGxCdWJibGVzLmZvckVhY2goKGJ1YmJsZSkgPT4ge1xuICAgICAgICBidWJibGUuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnNlbGVjdGVkQnViYmxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkQnViYmxlc1tpXS5pZCA9PT0gYnViYmxlLmlkKSBidWJibGUuc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMub25lKCdhdy1idWJibGUtY2hhcnQnKS51cGRhdGUodGhpcy5nZXRCdWJibGVQYXlsb2FkKG51bGwpKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXJJdGVtVGFncygpIHtcbiAgICBsZXQgdGFnc0RhdGEgPSBbXTtcbiAgICB0aGlzLnNlbGVjdGVkQnViYmxlcy5mb3JFYWNoKChzQnViYmxlKSA9PiB7XG4gICAgICBsZXQgbGFiZWwgPSAnJztcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5hbGxCdWJibGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh0aGlzLmFsbEJ1YmJsZXNbaV0uaWQgPT09IHNCdWJibGUuaWQpIHtcbiAgICAgICAgICBsYWJlbCA9IHRoaXMuYWxsQnViYmxlc1tpXS5lbnRpdHkubGFiZWw7XG4gICAgICAgICAgdGFnc0RhdGEucHVzaCh7XG4gICAgICAgICAgICBsYWJlbCwgaWNvbjogXCJuNy1pY29uLWNsb3NlXCIsXG4gICAgICAgICAgICBwYXlsb2FkOiBzQnViYmxlLmlkLFxuICAgICAgICAgICAgY2xhc3NlczogXCJ0YWctXCIgKyB0aGlzLmFsbEJ1YmJsZXNbaV0uZW50aXR5LnR5cGVPZkVudGl0eS5pZFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5vbmUoJ2F3LWhvbWUtaXRlbS10YWdzLXdyYXBwZXInKS51cGRhdGUodGFnc0RhdGEpO1xuICB9XG5cbiAgb25UYWdDbGlja2VkKHBheWxvYWQpIHtcbiAgICBpZiAoIXBheWxvYWQpIHJldHVybjtcbiAgICBjb25zdCBidWJibGVJZCA9IHBheWxvYWQ7XG4gICAgaWYgKHRoaXMuX2J1YmJsZUNoYXJ0KSB7XG4gICAgICB0aGlzLl9idWJibGVDaGFydC5zZWxlY3RBbGwoYGdgKS5lYWNoKGIgPT4ge1xuICAgICAgICBpZiAoYi5pZCA9PT0gYnViYmxlSWQpIGIuaGFzQ2xvc2VJY29uID0gZmFsc2U7XG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5zZWxlY3RlZEJ1YmJsZXMgPSB0aGlzLnNlbGVjdGVkQnViYmxlcy5maWx0ZXIoKGIpID0+IGIuaWQgIT09IHBheWxvYWQpO1xuICAgIHJldHVybiB0aGlzLmZpbHRlclJlcXVlc3QoKTtcbiAgfVxuXG4gIG9uSGVyb0NoYW5nZSh2YWx1ZSkge1xuICAgIHRoaXMuYXV0b2NvbXBsZXRlQ2hhbmdlZCQubmV4dCh2YWx1ZSk7XG4gIH1cblxuICBwcml2YXRlIF9zY3JvbGxCYWNrZ3JvdW5kQ29udHJvbCgpIHtcbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidWJibGUtcmVzdWx0cy1saXN0JyksXG4gICAgICBzb3VyY2UkID0gZnJvbUV2ZW50KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidWJibGUtcmVzdWx0cy1saXN0JyksICdzY3JvbGwnKTtcblxuICAgIC8vIGhlaWdodCBjb250cm9sXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLl9zZXRIYXNTY3JvbGxCYWNrZ3JvdW5kKGVsKTtcbiAgICB9LCA1MDApO1xuXG4gICAgLy8gc2Nyb2xsIGxpc3RlblxuICAgIHNvdXJjZSQucGlwZShcbiAgICAgIGRlYm91bmNlVGltZSg1MClcbiAgICApLnN1YnNjcmliZSgoeyB0YXJnZXQgfTogeyB0YXJnZXQ6IGFueSB9KSA9PiB7XG4gICAgICB0aGlzLl9zZXRIYXNTY3JvbGxCYWNrZ3JvdW5kKHRhcmdldCk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9zZXRIYXNTY3JvbGxCYWNrZ3JvdW5kKHsgc2Nyb2xsVG9wLCBzY3JvbGxIZWlnaHQsIGNsaWVudEhlaWdodCB9KSB7XG4gICAgdGhpcy5oYXNTY3JvbGxCYWNrZ3JvdW5kID0gc2Nyb2xsSGVpZ2h0ID4gKHNjcm9sbFRvcCArIGNsaWVudEhlaWdodCk7XG4gIH1cblxuICBwcml2YXRlIF9saXN0ZW5BdXRvQ29tcGxldGVDaGFuZ2VzKCkge1xuICAgIHRoaXMub25lKCdhdy1ob21lLWF1dG9jb21wbGV0ZScpLnVwZGF0ZU9wdGlvbnMoeyBjb25maWc6IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2NvbmZpZy1rZXlzJykgfSk7XG4gICAgdGhpcy5hdXRvY29tcGxldGVDaGFuZ2VkJC5waXBlKFxuICAgICAgZGVib3VuY2VUaW1lKDUwMClcbiAgICApLnN1YnNjcmliZSh2YWx1ZSA9PiB7XG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5jb21tdW5pY2F0aW9uLnJlcXVlc3QkKCdhdXRvQ29tcGxldGUnLCB7XG4gICAgICAgICAgb25FcnJvcjogKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSxcbiAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgIGlucHV0OiB2YWx1ZSxcbiAgICAgICAgICAgIGl0ZW1zUGFnaW5hdGlvbjogeyBvZmZzZXQ6IDAsIGxpbWl0OiB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdob21lLWxheW91dCcpWydyZXN1bHRzLWxpbWl0J10gfVxuICAgICAgICAgIH1cbiAgICAgICAgfSkuc3Vic2NyaWJlKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgIHRoaXMub25lKCdhdy1ob21lLWF1dG9jb21wbGV0ZScpLnVwZGF0ZShyZXNwb25zZSk7XG4gICAgICAgICAgaWYgKCF0aGlzLmF1dG9jb21wbGV0ZVBvcG92ZXJPcGVuKSB0aGlzLl90b2dnbGVBdXRvY29tcGxldGVQb3BvdmVyKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fdG9nZ2xlQXV0b2NvbXBsZXRlUG9wb3ZlcigpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfdG9nZ2xlQXV0b2NvbXBsZXRlUG9wb3ZlcigpIHtcbiAgICBpZiAoIXRoaXMuYXV0b2NvbXBsZXRlUG9wb3Zlcikge1xuICAgICAgY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXctaG9tZS1hZHZhbmNlZC1hdXRvY29tcGxldGUtcG9wb3ZlcicpO1xuICAgICAgdGVtcGxhdGUuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICB0aGlzLmF1dG9jb21wbGV0ZVBvcG92ZXIgPSB0aGlzLnRpcHB5KCcuYXctaG9tZV9fdG9wLWhlcm8gLm43LWhlcm9fX2lucHV0Jywge1xuICAgICAgICBjb250ZW50OiB0ZW1wbGF0ZSxcbiAgICAgICAgdHJpZ2dlcjogJ21hbnVhbCcsXG4gICAgICAgIGludGVyYWN0aXZlOiB0cnVlLFxuICAgICAgICBhcnJvdzogZmFsc2UsXG4gICAgICAgIGFwcGVuZFRvOiAncGFyZW50JyxcbiAgICAgICAgdGhlbWU6ICdsaWdodC1ib3JkZXInLFxuICAgICAgICBwbGFjZW1lbnQ6ICdib3R0b20tc3RhcnQnLFxuICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICBvbkhpZGRlbjogKCkgPT4gdGhpcy5hdXRvY29tcGxldGVQb3BvdmVyT3BlbiA9IGZhbHNlLFxuICAgICAgfSlbMF07XG4gICAgfVxuICAgIGlmICh0aGlzLmF1dG9jb21wbGV0ZVBvcG92ZXJPcGVuKSB7XG4gICAgICB0aGlzLmF1dG9jb21wbGV0ZVBvcG92ZXIuaGlkZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmF1dG9jb21wbGV0ZVBvcG92ZXIuc2hvdygpO1xuICAgIH1cbiAgICB0aGlzLmF1dG9jb21wbGV0ZVBvcG92ZXJPcGVuID0gIXRoaXMuYXV0b2NvbXBsZXRlUG9wb3Zlck9wZW47XG4gIH1cbn0iXX0=