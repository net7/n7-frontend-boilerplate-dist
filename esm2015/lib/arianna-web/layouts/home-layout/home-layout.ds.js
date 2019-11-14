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
        this.lockLastFacet = false;
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
        this.resultsLimit = -1;
        this.selectedEntitiesIds = [];
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
        this.resultsLimit = this.configuration.get('home-layout')['results-limit'];
        this.one('aw-hero').update(this.configuration.get('home-layout')['top-hero']);
        this.one('aw-home-hero-patrimonio').update(this.configuration.get('home-layout')['bottom-hero']);
        // update streams
        this.mainState.update('headTitle', 'Arianna Web > Home');
        this.mainState.update('pageTitle', 'Arianna Web: Home Layout');
        this.mainState.updateCustom('currentNav', 'aw/home');
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
            params: {
                entitiesListSize: this.configuration.get("home-layout")['max-bubble-num'] * 4
            },
        });
    }
    /**
     * @param {?} response
     * @return {?}
     */
    parseInitialRequest(response) {
        response.typeOfEntityData.forEach((/**
         * @param {?} toe
         * @return {?}
         */
        (toe) => {
            /** @type {?} */
            const teoConfigData = this.configuration.get("config-keys")[toe.type.replace(" ", "-")];
            this.facetData.push(Object.assign({}, toe, { enabled: true, locked: false, configKey: toe.type.replace(" ", "-") }, teoConfigData));
        }));
        /*response.entitiesData.forEach((ent) => {
          const teoConfigData = this.configuration.get("config-keys")[ent.entity.typeOfEntity.toLowerCase()];
    
            this.facetData.push({
              ...ent.countData,
              ...teoConfigData,
              enabled: true,
            });
        });*/
        this.one('aw-home-facets-wrapper').update({
            facetData: this.facetData,
            lockedFacets: this.lockedFacets
        });
        this.one('aw-bubble-chart').updateOptions({
            context: 'home',
            configKeys: this.configuration.get("config-keys"),
            bubbleContainerId: 'bubbleChartContainer',
            containerId: 'bubble-chart-container',
            maxNumber: this.configuration.get("home-layout")['max-bubble-num']
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
        this.one('aw-linked-objects').updateOptions({
            context: 'home',
            config: this.configuration,
        });
        this.one('aw-linked-objects').update(response.itemsPagination);
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
            if (this.selectedBubbles.length <= 0) {
                this.selectedEntitiesIds = [];
            }
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
                    this.selectedEntitiesIds.push(entityId);
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
                selectedEntitiesIds: this.selectedEntitiesIds,
                itemsPagination: {
                    offset: 0,
                    limit: this.resultsLimit
                }
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
            if (f.type === facetId && f.locked === true) {
                // if user clicked on a locked facet, ignore it
                return;
            }
            if (f.type === facetId && f.enabled === true && enabledFacets < 1) {
                return;
            }
            if (f.type === facetId) {
                // if this is the clicked facet
                if (f.enabled && enabledFacets > 0) {
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
                if (enabledFacets <= 1 && f.enabled) {
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
                flip: false,
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
    AwHomeLayoutDS.prototype.lockLastFacet;
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
    AwHomeLayoutDS.prototype.resultsLimit;
    /** @type {?} */
    AwHomeLayoutDS.prototype.selectedEntitiesIds;
    /** @type {?} */
    AwHomeLayoutDS.prototype.updateComponent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1sYXlvdXQuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvbGF5b3V0cy9ob21lLWxheW91dC9ob21lLWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDckQsT0FBTyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDMUMsT0FBTyxFQUFZLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXhELE1BQU0sT0FBTyxjQUFlLFNBQVEsZ0JBQWdCO0lBQXBEOztRQUtVLGNBQVMsR0FBVSxJQUFJLENBQUM7UUFDeEIsaUJBQVksR0FBRyxFQUFFLENBQUM7UUFDbEIsa0JBQWEsR0FBWSxLQUFLLENBQUM7UUFDL0IsZ0JBQVcsR0FBUSxFQUFFLENBQUM7Ozs7UUFJdEIsZUFBVSxHQUFVLElBQUksQ0FBQztRQUV6Qiw0QkFBdUIsR0FBWSxLQUFLLENBQUM7UUFDekMseUJBQW9CLEdBQW9CLElBQUksT0FBTyxFQUFFLENBQUM7OztRQUd2RCxvQkFBZSxHQUFVLEVBQUUsQ0FBQztRQUM1QixrQkFBYSxHQUFXLElBQUksQ0FBQzs7O1FBRzVCLGlCQUFZLEdBQVEsSUFBSSxDQUFDOztRQUV6Qix5QkFBb0IsR0FBVyxDQUFDLENBQUM7Ozs7OztRQU1qQyxzQkFBaUIsR0FBUSxFQUFFLENBQUM7OztRQUc1QixvQkFBZSxHQUFXLENBQUMsQ0FBQyxDQUFDO1FBQzdCLGdCQUFXLEdBQVEsSUFBSSxDQUFDO1FBQ3pCLHVCQUFrQixHQUFRLElBQUksQ0FBQztRQUMvQix3QkFBbUIsR0FBWSxLQUFLLENBQUM7UUFDckMsbUJBQWMsR0FBRyxLQUFLLENBQUM7UUFDdkIsbUJBQWMsR0FBRyxLQUFLLENBQUM7UUFDdkIsaUJBQVksR0FBRyxDQUFD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QUs7Z0JBQ1gsUUFBUSxFQUFFLFFBQVE7Z0JBQ2xCLEtBQUssRUFBRSxjQUFjO2dCQUNyQixTQUFTLEVBQUUsY0FBYztnQkFDekIsUUFBUSxFQUFFLE1BQU07Z0JBQ2hCLFFBQVE7OztnQkFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLEdBQUcsS0FBSyxDQUFBO2FBQ3JELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNQO1FBQ0QsSUFBSSxJQUFJLENBQUMsdUJBQXVCLEVBQUU7WUFDaEMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2pDO2FBQU07WUFDTCxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDakM7UUFDRCxJQUFJLENBQUMsdUJBQXVCLEdBQUcsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUM7SUFDL0QsQ0FBQztDQUNGOzs7Ozs7SUE5Y0MsdUNBQTJCOzs7OztJQUMzQixtQ0FBdUI7Ozs7O0lBQ3ZCLCtCQUFtQjs7Ozs7SUFDbkIsdUNBQTJCOzs7OztJQUMzQixtQ0FBZ0M7Ozs7O0lBQ2hDLHNDQUEwQjs7Ozs7SUFDMUIsdUNBQXVDOzs7OztJQUN2QyxxQ0FBOEI7Ozs7O0lBSTlCLG9DQUFpQzs7Ozs7SUFDakMsNkNBQWlDOzs7OztJQUNqQyxpREFBaUQ7Ozs7O0lBQ2pELDhDQUE4RDs7SUFHOUQseUNBQW1DOztJQUNuQyx1Q0FBb0M7Ozs7O0lBR3BDLHNDQUFpQzs7Ozs7SUFFakMsOENBQXlDOzs7OztJQU16QywyQ0FBb0M7Ozs7O0lBR3BDLHlDQUFxQzs7Ozs7SUFDckMscUNBQWdDOztJQUNoQyw0Q0FBc0M7O0lBQ3RDLDZDQUE0Qzs7SUFDNUMsd0NBQThCOztJQUM5Qix3Q0FBOEI7O0lBQzlCLHNDQUF5Qjs7SUFDekIsNkNBQWdDOztJQTZCaEMseUNBS0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMYXlvdXREYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgZnJvbUV2ZW50LCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZSwgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5leHBvcnQgY2xhc3MgQXdIb21lTGF5b3V0RFMgZXh0ZW5kcyBMYXlvdXREYXRhU291cmNlIHtcbiAgcHJpdmF0ZSBjb21tdW5pY2F0aW9uOiBhbnk7XG4gIHByaXZhdGUgbWFpblN0YXRlOiBhbnk7XG4gIHByaXZhdGUgdGlwcHk6IGFueTtcbiAgcHJpdmF0ZSBjb25maWd1cmF0aW9uOiBhbnk7XG4gIHByaXZhdGUgZmFjZXREYXRhOiBhbnlbXSA9IG51bGw7XG4gIHByaXZhdGUgbG9ja2VkRmFjZXRzID0ge307XG4gIHByaXZhdGUgbG9ja0xhc3RGYWNldDogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIGZhY2V0SW5wdXRzOiBhbnkgPSB7fTtcbiAgLy8gYWxsIHRoZSBidWJibGVzIGFzIHRoZXkgaGF2ZSBiZWVuIGdpdmVuIGJ5IGFwb2xsb1xuICAvLyAodGhlIG9iamVjdHMgaW4gdGhlIGFsbEJ1YmJsZXMgYXJlIG5vdCB0aGUgc2FtZSBidWJibGUgb2JqZWN0c1xuICAvLyBwcmVzZW50IGluIHRoZSBidWJibGUgY2hhcnQpXG4gIHByaXZhdGUgYWxsQnViYmxlczogYW55W10gPSBudWxsO1xuICBwcml2YXRlIGF1dG9jb21wbGV0ZVBvcG92ZXI6IGFueTtcbiAgcHJpdmF0ZSBhdXRvY29tcGxldGVQb3BvdmVyT3BlbjogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIGF1dG9jb21wbGV0ZUNoYW5nZWQkOiBTdWJqZWN0PHN0cmluZz4gPSBuZXcgU3ViamVjdCgpO1xuICAvLyB0aGUgYnViYmxlcyBjdXJyZW50bHkgc2VsZWN0ZWQgKHRoaXMgYXJlIHNhdmVkIGZyb20gdGhlIGV2ZW50IGhhbmRsZXInc1xuICAvLyBhbmQgY29ycmVzcG9uZCBleGFjdGx5IHRvIHRoZSBidWJibGVjaGFydCdzIGJ1YmJsZSBvYmplY3RzKVxuICBwdWJsaWMgc2VsZWN0ZWRCdWJibGVzOiBhbnlbXSA9IFtdO1xuICBwdWJsaWMgbnVtT2ZJdGVtc1N0cjogc3RyaW5nID0gbnVsbDtcbiAgLy8gaW5zdGFuY2Ugb2YgdGhlIGJ1YmJsZSBjaGFydCAoZnJvbSB3aGljaCB5b3UgY2FuIGFjY2VzcyBhbGwgdGhlIHZhcmlvdXNcbiAgLy8gYnViYmxlIG9iamVjdHMpXG4gIHByaXZhdGUgX2J1YmJsZUNoYXJ0OiBhbnkgPSBudWxsO1xuICAvLyB0aGUgbWF4aW11bSBudW1iZXIgb2YgYnViYmxlcyB3aGljaCBjYW4gYmUgc2VsZWN0ZWQgYXQgdGhlIHNhbWUgdGltZVxuICBwcml2YXRlIG1heEJ1YmJsZXNTZWxlY3RhYmxlOiBudW1iZXIgPSAzO1xuICAvLyBlbnRpdGllcyBoYXZlIHRoZWlyIG93biB1bmlxdWUgaWQsIHRoZXNlIGlkcyBhcmUgZ2VuZXJpYyBhbmQgYXJlIHZlcnkgZmxleGlibGVcbiAgLy8gYnViYmxlcyAoYXMgdGhlIGJ1YmJsZSBjaGFydCdzIG9iamVjdHMpIGhhdmUgdW5pcXVlIGlkcyBidXQgZG8gbm90IGFsbG93IGNlcnRhaW5cbiAgLy8gY2hhcmFjdGVycywgc28gZWFjaCBidWJibGUgaGFzIGl0cyBvd24gaWQgZGlmZmVyZW50IGZyb20gdGhlIGlkIG9mIHRoZSBlbnRpdHkgd2hpY2hcbiAgLy8gdGhlIGJ1YmJsZSByZXByZXNlbnRzIChnaXZlbiBhbiBidWJibGUncyBpZCBjYWxsZWQgYnViYmxlSWQgeW91IGNhbiBvYnRhaW4gdGhlXG4gIC8vIHJlc3BlY3RpdmUgZW50aXR5J3MgaWQgd2l0aCBhczogZW50aXR5SWQgPSBlbnRpdHlCdWJibGVJZE1hcFtidWJibGVJZF0gKVxuICBwcml2YXRlIGVudGl0eUJ1YmJsZUlkTWFwOiBhbnkgPSB7fTtcbiAgLy8gd2lkaCBvZiB0aGUgd2luZG93IHdoaWNoIGlzIHVwZGF0ZWQgYXQgZWFjaCByZXNpemUgYW5kIGl0IGlzIHVzZWQgYnkgdGhlIGJ1YmJsZVxuICAvLyBjaGFydCB0byBjaGVjayBpZiB0aGUgd2lkdGggb2YgdGhlIHdpbmRvdyBoYXMgY2hhbmdlZCBkdXJpbmcgdGhlIGxhc3QgcmVzaXplXG4gIHByaXZhdGUgbGFzdFdpbmRvd1dpZHRoOiBudW1iZXIgPSAtMTtcbiAgcHJpdmF0ZSBidWJibGVQb3B1cDogYW55ID0gbnVsbDtcbiAgcHVibGljIGN1cnJlbnRIb3ZlckVudGl0eTogYW55ID0gbnVsbDtcbiAgcHVibGljIGhhc1Njcm9sbEJhY2tncm91bmQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIGxvYWRpbmdCdWJibGVzID0gZmFsc2U7XG4gIHB1YmxpYyBidWJibGVzRW5hYmxlZCA9IGZhbHNlO1xuICBwdWJsaWMgcmVzdWx0c0xpbWl0ID0gLTE7XG4gIHB1YmxpYyBzZWxlY3RlZEVudGl0aWVzSWRzID0gW107XG5cbiAgb25Jbml0KHsgY29tbXVuaWNhdGlvbiwgbWFpblN0YXRlLCBjb25maWd1cmF0aW9uLCB0aXBweSB9KSB7XG4gICAgdGhpcy5jb21tdW5pY2F0aW9uID0gY29tbXVuaWNhdGlvbjtcbiAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBjb25maWd1cmF0aW9uO1xuICAgIHRoaXMuZmFjZXREYXRhID0gW107XG4gICAgdGhpcy5sYXN0V2luZG93V2lkdGggPSB3aW5kb3cub3V0ZXJXaWR0aDtcbiAgICB0aGlzLm1haW5TdGF0ZSA9IG1haW5TdGF0ZTtcbiAgICB0aGlzLnRpcHB5ID0gdGlwcHk7XG4gICAgdGhpcy5idWJibGVzRW5hYmxlZCA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2ZlYXR1cmVzLWVuYWJsZWQnKSA/IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2ZlYXR1cmVzLWVuYWJsZWQnKVsnYnViYmxlY2hhcnQnXSA6IGZhbHNlO1xuICAgIHRoaXMucmVzdWx0c0xpbWl0ID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnaG9tZS1sYXlvdXQnKVsncmVzdWx0cy1saW1pdCddXG5cbiAgICB0aGlzLm9uZSgnYXctaGVybycpLnVwZGF0ZSh0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdob21lLWxheW91dCcpWyd0b3AtaGVybyddKTtcbiAgICB0aGlzLm9uZSgnYXctaG9tZS1oZXJvLXBhdHJpbW9uaW8nKS51cGRhdGUodGhpcy5jb25maWd1cmF0aW9uLmdldCgnaG9tZS1sYXlvdXQnKVsnYm90dG9tLWhlcm8nXSk7XG4gICAgLy8gdXBkYXRlIHN0cmVhbXNcbiAgICB0aGlzLm1haW5TdGF0ZS51cGRhdGUoJ2hlYWRUaXRsZScsICdBcmlhbm5hIFdlYiA+IEhvbWUnKTtcbiAgICB0aGlzLm1haW5TdGF0ZS51cGRhdGUoJ3BhZ2VUaXRsZScsICdBcmlhbm5hIFdlYjogSG9tZSBMYXlvdXQnKTtcbiAgICB0aGlzLm1haW5TdGF0ZS51cGRhdGVDdXN0b20oJ2N1cnJlbnROYXYnLCAnYXcvaG9tZScpO1xuICAgIC8vIGxpc3RlbiBhdXRvY29tcGxldGUgY2hhbmdlc1xuICAgIHRoaXMuX2xpc3RlbkF1dG9Db21wbGV0ZUNoYW5nZXMoKTtcbiAgfVxuXG4gIHB1YmxpYyBtYWtlUmVxdWVzdCQocXVlcnksIHBhcmFtcykge1xuICAgIHJldHVybiB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQocXVlcnksIHtcbiAgICAgIG9uRXJyb3I6IChlcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvciksXG4gICAgICBwYXJhbXNcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGVDb21wb25lbnQgPSAoaWQsIGRhdGEsIG9wdGlvbnMpID0+IHtcbiAgICBpZiAob3B0aW9ucykge1xuICAgICAgdGhpcy5vbmUoaWQpLnVwZGF0ZU9wdGlvbnMob3B0aW9ucylcbiAgICB9XG4gICAgdGhpcy5vbmUoaWQpLnVwZGF0ZShkYXRhKVxuICB9XG5cbiAgaW5pdGlhbEZpbHRlclJlcXVlc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29tbXVuaWNhdGlvbi5yZXF1ZXN0JCgnZ2xvYmFsRmlsdGVyJywge1xuICAgICAgb25FcnJvcjogKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSxcbiAgICAgIHBhcmFtczoge1xuICAgICAgICBlbnRpdGllc0xpc3RTaXplOiB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KFwiaG9tZS1sYXlvdXRcIilbJ21heC1idWJibGUtbnVtJ10gKiA0XG4gICAgICB9LFxuICAgIH0pXG4gIH1cblxuICBwYXJzZUluaXRpYWxSZXF1ZXN0KHJlc3BvbnNlKSB7XG5cbiAgICByZXNwb25zZS50eXBlT2ZFbnRpdHlEYXRhLmZvckVhY2goKHRvZSkgPT4ge1xuICAgICAgY29uc3QgdGVvQ29uZmlnRGF0YSA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoXCJjb25maWcta2V5c1wiKVt0b2UudHlwZS5yZXBsYWNlKFwiIFwiLCBcIi1cIildO1xuICAgICAgIHRoaXMuZmFjZXREYXRhLnB1c2goe1xuICAgICAgICAgIC4uLnRvZSxcbiAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgIGxvY2tlZDogZmFsc2UsXG4gICAgICAgICAgY29uZmlnS2V5OiB0b2UudHlwZS5yZXBsYWNlKFwiIFwiLCBcIi1cIiksXG4gICAgICAgICAgLi4udGVvQ29uZmlnRGF0YVxuICAgICAgICB9KTtcbiAgICB9KTtcblxuXG4gICAgLypyZXNwb25zZS5lbnRpdGllc0RhdGEuZm9yRWFjaCgoZW50KSA9PiB7XG4gICAgICBjb25zdCB0ZW9Db25maWdEYXRhID0gdGhpcy5jb25maWd1cmF0aW9uLmdldChcImNvbmZpZy1rZXlzXCIpW2VudC5lbnRpdHkudHlwZU9mRW50aXR5LnRvTG93ZXJDYXNlKCldO1xuXG4gICAgICAgIHRoaXMuZmFjZXREYXRhLnB1c2goe1xuICAgICAgICAgIC4uLmVudC5jb3VudERhdGEsXG4gICAgICAgICAgLi4udGVvQ29uZmlnRGF0YSxcbiAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICB9KTtcbiAgICB9KTsqL1xuXG4gICAgdGhpcy5vbmUoJ2F3LWhvbWUtZmFjZXRzLXdyYXBwZXInKS51cGRhdGUoe1xuICAgICAgZmFjZXREYXRhOiB0aGlzLmZhY2V0RGF0YSxcbiAgICAgIGxvY2tlZEZhY2V0czogdGhpcy5sb2NrZWRGYWNldHNcbiAgICB9KTtcbiAgICB0aGlzLm9uZSgnYXctYnViYmxlLWNoYXJ0JykudXBkYXRlT3B0aW9ucyh7XG4gICAgICBjb250ZXh0OiAnaG9tZScsXG4gICAgICBjb25maWdLZXlzOiB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KFwiY29uZmlnLWtleXNcIiksXG4gICAgICBidWJibGVDb250YWluZXJJZDogJ2J1YmJsZUNoYXJ0Q29udGFpbmVyJyxcbiAgICAgIGNvbnRhaW5lcklkOiAnYnViYmxlLWNoYXJ0LWNvbnRhaW5lcicsXG4gICAgICBtYXhOdW1iZXI6IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoXCJob21lLWxheW91dFwiKVsnbWF4LWJ1YmJsZS1udW0nXVxuICAgIH0pO1xuICAgIHRoaXMucmVuZGVyUHJldmlld3NGcm9tQXBvbGxvUXVlcnkocmVzcG9uc2UpO1xuICB9XG5cbiAgcmVuZGVyUHJldmlld3NGcm9tQXBvbGxvUXVlcnkocmVzcG9uc2U6IGFueSkge1xuICAgIGlmICghcmVzcG9uc2UgfHwgIXJlc3BvbnNlLml0ZW1zUGFnaW5hdGlvbikge1xuICAgICAgcmV0dXJuXG4gICAgfTtcbiAgICBsZXQgbnVtT2ZJdGVtcyA9IHJlc3BvbnNlLml0ZW1zUGFnaW5hdGlvbi50b3RhbENvdW50O1xuICAgIGlmIChudW1PZkl0ZW1zID4gMCkge1xuICAgICAgbGV0IG51bU9mVGhvdXNhbmQgPSAwO1xuICAgICAgd2hpbGUgKG51bU9mSXRlbXMgPiA5OTkpIHtcbiAgICAgICAgbnVtT2ZJdGVtcyAtPSAxMDAwO1xuICAgICAgICBudW1PZlRob3VzYW5kICs9IDE7XG4gICAgICB9XG4gICAgICBsZXQgbnVtT2ZJdGVtc1RtcFN0ciA9IG51bU9mSXRlbXMgKyAnJztcbiAgICAgIGlmIChudW1PZkl0ZW1zIDwgMTApIG51bU9mSXRlbXNUbXBTdHIgPSAnMDAnICsgbnVtT2ZJdGVtcztcbiAgICAgIGVsc2UgaWYgKG51bU9mSXRlbXMgPCAxMDApIG51bU9mSXRlbXNUbXBTdHIgPSAnMCcgKyBudW1PZkl0ZW1zO1xuICAgICAgaWYgKG51bU9mVGhvdXNhbmQgPiAwKVxuICAgICAgICB0aGlzLm51bU9mSXRlbXNTdHIgPSBudW1PZlRob3VzYW5kICsgJy4nICsgbnVtT2ZJdGVtc1RtcFN0cjtcbiAgICAgIGVsc2VcbiAgICAgICAgdGhpcy5udW1PZkl0ZW1zU3RyID0gbnVtT2ZJdGVtcyArICcnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm51bU9mSXRlbXNTdHIgPSBudWxsO1xuICAgIH1cbiAgICB0aGlzLm9uZSgnYXctbGlua2VkLW9iamVjdHMnKS51cGRhdGVPcHRpb25zKHtcbiAgICAgIGNvbnRleHQ6ICdob21lJyxcbiAgICAgIGNvbmZpZzogdGhpcy5jb25maWd1cmF0aW9uLFxuICAgICAgLy8gcGFnZTogMSxcbiAgICB9KVxuICAgIHRoaXMub25lKCdhdy1saW5rZWQtb2JqZWN0cycpLnVwZGF0ZShyZXNwb25zZS5pdGVtc1BhZ2luYXRpb24pO1xuICB9XG5cbiAgb25CdWJibGVUb29sdGlwQ2xpY2soc291cmNlOiBzdHJpbmcsIHBheWxvYWQpIHtcbiAgICBzd2l0Y2ggKHNvdXJjZSkge1xuICAgICAgY2FzZSAnc2VsZWN0JzpcbiAgICAgICAgaWYgKCFwYXlsb2FkKSByZXR1cm47XG4gICAgICAgIGNvbnN0IGJ1YmJsZUlkID0gcGF5bG9hZC5idWJibGVJZDtcbiAgICAgICAgaWYgKCFidWJibGVJZCkgcmV0dXJuO1xuICAgICAgICBsZXQgYnViYmxlID0gbnVsbDtcbiAgICAgICAgaWYgKHRoaXMuX2J1YmJsZUNoYXJ0KSB7XG4gICAgICAgICAgdGhpcy5fYnViYmxlQ2hhcnQuc2VsZWN0QWxsKGBnYCkuZWFjaChiID0+IHtcbiAgICAgICAgICAgIGlmIChiLmlkID09PSBidWJibGVJZCkgYnViYmxlID0gYjtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpZiAoYnViYmxlKSB0aGlzLm9uQnViYmxlU2VsZWN0ZWQoYnViYmxlKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBvbkJ1YmJsZVNlbGVjdGVkKGJ1YmJsZSkge1xuICAgIGlmIChidWJibGUpIHtcbiAgICAgIGlmICghdGhpcy5zZWxlY3RlZEJ1YmJsZXMuaW5jbHVkZXMoYnViYmxlKSkge1xuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZEJ1YmJsZXMubGVuZ3RoIDwgdGhpcy5tYXhCdWJibGVzU2VsZWN0YWJsZSkge1xuICAgICAgICAgIHRoaXMubG9hZGluZ0J1YmJsZXMgPSB0aGlzLnNlbGVjdGVkQnViYmxlcy5sZW5ndGggPT0gMDtcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkQnViYmxlcy5wdXNoKGJ1YmJsZSk7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBwdWJsaWMgb25CdWJibGVEZXNlbGVjdGVkKHBheWxvYWQpIHtcbiAgICBpZiAocGF5bG9hZCAmJiBwYXlsb2FkLmJ1YmJsZSkge1xuICAgICAgdGhpcy5zZWxlY3RlZEJ1YmJsZXMgPSB0aGlzLnNlbGVjdGVkQnViYmxlcy5maWx0ZXIoXG4gICAgICAgIChiKSA9PiBiLmlkICE9PSBwYXlsb2FkLmJ1YmJsZS5pZCk7XG4gICAgICBpZiAocGF5bG9hZC5idWJibGUuaGFzQ2xvc2VJY29uKSB7XG4gICAgICAgIHBheWxvYWQuYnViYmxlLmhhc0Nsb3NlSWNvbiA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gdGhpcy5maWx0ZXJSZXF1ZXN0KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldEJ1YmJsZVBheWxvYWQocmVzcG9uc2UpIHtcbiAgICBsZXQgYnViYmxlUGF5b2xhZCA9IHtcbiAgICAgIHJlc2V0OiB0cnVlLFxuICAgICAgc2V0QnViYmxlQ2hhcnQ6IChidWJibGVDcmVmKSA9PiB0aGlzLl9idWJibGVDaGFydCA9IGJ1YmJsZUNyZWYsXG4gICAgICBmYWNldERhdGE6IHRoaXMuZmFjZXREYXRhLFxuICAgICAgc291cmNlOiByZXNwb25zZSxcbiAgICAgIHNlbGVjdGVkQnViYmxlczogdGhpcy5zZWxlY3RlZEJ1YmJsZXNcbiAgICB9O1xuICAgIHJldHVybiBidWJibGVQYXlvbGFkO1xuICB9XG5cbiAgcHJpdmF0ZSBmaWx0ZXJSZXF1ZXN0KCkge1xuICAgIGlmICh0aGlzLmVudGl0eUJ1YmJsZUlkTWFwKSB7XG4gICAgICBsZXQgayA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2NvbmZpZy1rZXlzJylcbiAgICAgIGxldCBhY3RpdmVCdWJibGVzID0ge1xuICAgICAgICBwbGFjZXM6IGZhbHNlLFxuICAgICAgICBwZW9wbGU6IGZhbHNlLFxuICAgICAgICBjb25jZXB0czogZmFsc2UsXG4gICAgICAgIG9yZ2FuaXphdGlvbnM6IGZhbHNlLFxuICAgICAgfVxuXG4gICAgICBpZiAoIHRoaXMuc2VsZWN0ZWRCdWJibGVzLmxlbmd0aCA8PSAwICl7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRFbnRpdGllc0lkcyA9IFtdO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNlbGVjdGVkQnViYmxlcy5mb3JFYWNoKChzQikgPT4ge1xuICAgICAgICBsZXQgYyA9IHNCLmNvbG9yXG4gICAgICAgIGxldCBmaW5kVHlwZUZyb21Db2xvciA9IChvYmosIGNvbG9yKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikuZmluZChrZXkgPT4gb2JqW2tleV0uY29sb3IuaGV4ID09PSBjb2xvcilcbiAgICAgICAgfVxuICAgICAgICBhY3RpdmVCdWJibGVzW2ZpbmRUeXBlRnJvbUNvbG9yKGssIGMpXSA9IHRydWVcbiAgICAgICAgbGV0IGVudGl0eUlkID0gdGhpcy5lbnRpdHlCdWJibGVJZE1hcFtzQi5pZF07XG4gICAgICAgIGlmIChlbnRpdHlJZClcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkRW50aXRpZXNJZHMucHVzaChlbnRpdHlJZCk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5sb2NrZWRGYWNldHMgPSBhY3RpdmVCdWJibGVzXG4gICAgICB0aGlzLm9uZSgnYXctaG9tZS1mYWNldHMtd3JhcHBlcicpLnVwZGF0ZSh7XG4gICAgICAgIGZhY2V0RGF0YTogdGhpcy5mYWNldERhdGEsXG4gICAgICAgIGxvY2tlZEZhY2V0czogdGhpcy5sb2NrZWRGYWNldHNcbiAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgcmV0dXJuIHRoaXMuY29tbXVuaWNhdGlvbi5yZXF1ZXN0JCgnZ2xvYmFsRmlsdGVyJywge1xuICAgICAgb25FcnJvcjogKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSxcbiAgICAgIHBhcmFtczoge1xuICAgICAgICBzZWxlY3RlZEVudGl0aWVzSWRzOiB0aGlzLnNlbGVjdGVkRW50aXRpZXNJZHMsXG4gICAgICAgIGl0ZW1zUGFnaW5hdGlvbjoge1xuICAgICAgICAgIG9mZnNldDogMCxcbiAgICAgICAgICBsaW1pdDogdGhpcy5yZXN1bHRzTGltaXRcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9KVxuICB9XG5cbiAgcHVibGljIHVwZGF0ZUJ1YmJsZXMocmVzcG9uc2UsIG9ubHlCdWJibGVzPzogYm9vbGVhbikge1xuICAgIGlmICghb25seUJ1YmJsZXMpIHtcbiAgICAgIHRoaXMucmVuZGVyUHJldmlld3NGcm9tQXBvbGxvUXVlcnkocmVzcG9uc2UpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGVCdWJibGVGaWx0ZXIoZGF0YSkge1xuICAgIHRoaXMuYWxsQnViYmxlcyA9IGRhdGEuYWxsQnViYmxlcztcbiAgICB0aGlzLmVudGl0eUJ1YmJsZUlkTWFwID0gZGF0YS5lbnRpdHlJZG1hcDtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGVUYWdzKG9ubHlCdWJibGVzPzogYm9vbGVhbikge1xuICAgIGlmICghb25seUJ1YmJsZXMpIHtcbiAgICAgIHRoaXMucmVuZGVySXRlbVRhZ3MoKTtcbiAgICB9XG4gIH1cblxuICBmaWx0ZXJCdWJibGVzQmFzZWRPbkZhY2V0c0VuYWJsZWQoKSB7XG4gICAgbGV0IHJlc3VsdCA9IHRoaXMuYWxsQnViYmxlcy5maWx0ZXIoXG4gICAgICAoYnViYmxlKSA9PiB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5mYWNldERhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAoYnViYmxlLmVudGl0eS50eXBlT2ZFbnRpdHkuaWQgPT09IHRoaXMuZmFjZXREYXRhW2ldLnR5cGUuaWQpXG4gICAgICAgICAgICBpZiAoIXRoaXMuZmFjZXREYXRhW2ldLmVuYWJsZWQpIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgaGFuZGxlRmFjZXRTZWFyY2hDaGFuZ2UoY2hhbmdlKSB7XG4gICAgdmFyIHBheWxvYWQ6IHN0cmluZyA9IGNoYW5nZS5pbnB1dFBheWxvYWQ7XG4gICAgdmFyIHZhbHVlOiBzdHJpbmcgPSBjaGFuZ2UudmFsdWU7XG4gICAgLy8gc3RvcmUgdGhlIGVudGVyZWQgdGV4dCBpbiBmYWNldElucHV0c1xuICAgIHRoaXMuZmFjZXRJbnB1dHNbcGF5bG9hZF0gPSB2YWx1ZTtcbiAgfVxuXG4gIGhhbmRsZUZhY2V0U2VhcmNoRW50ZXIoZW50ZXIpIHtcbiAgICB2YXIgcGF5bG9hZDogc3RyaW5nID0gZW50ZXIuaW5wdXRQYXlsb2FkO1xuICAgIC8vIGdldCB0aGUgdGV4dCBlbnRlcmVkIGluIHRoaXMgaW5wdXRcbiAgICB2YXIgdmFsdWU6IHN0cmluZyA9IHRoaXMuZmFjZXRJbnB1dHNbcGF5bG9hZF07XG4gIH1cblxuICBoYW5kbGVGYWNldEhlYWRlckNsaWNrKGZhY2V0SWQpIHtcbiAgICBsZXQgdXBkYXRlQnViYmxlcyA9IGZhbHNlO1xuICAgIGxldCBlbmFibGVkRmFjZXRzID0gdGhpcy5mYWNldERhdGEuZmlsdGVyKGYgPT4gZi5lbmFibGVkKS5sZW5ndGggLSAxO1xuICAgIHRoaXMuZmFjZXREYXRhLmZvckVhY2goZiA9PiB7XG4gICAgICBpZiAoZi50eXBlID09PSBmYWNldElkICYmIGYubG9ja2VkID09PSB0cnVlKSB7XG4gICAgICAgIC8vIGlmIHVzZXIgY2xpY2tlZCBvbiBhIGxvY2tlZCBmYWNldCwgaWdub3JlIGl0XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgaWYgKGYudHlwZSA9PT0gZmFjZXRJZCAmJiBmLmVuYWJsZWQgPT09IHRydWUgJiYgZW5hYmxlZEZhY2V0cyA8IDEpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBpZiAoZi50eXBlID09PSBmYWNldElkKSB7XG4gICAgICAgIC8vIGlmIHRoaXMgaXMgdGhlIGNsaWNrZWQgZmFjZXRcbiAgICAgICAgaWYgKGYuZW5hYmxlZCAmJiBlbmFibGVkRmFjZXRzID4gMCApIHtcbiAgICAgICAgICBmLmVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICBmLmxvY2tlZCA9IGZhbHNlO1xuICAgICAgICAgIHVwZGF0ZUJ1YmJsZXMgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGYuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgICAgZi5sb2NrZWQgPSBmYWxzZTtcbiAgICAgICAgICB1cGRhdGVCdWJibGVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gaWYgdGhpcyBpcyBhbm90aGVyIGZhY2V0XG4gICAgICAgIGlmIChlbmFibGVkRmFjZXRzIDw9IDEgJiYgZi5lbmFibGVkKSB7XG4gICAgICAgICAgZi5sb2NrZWQgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGYubG9ja2VkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIH0pO1xuICAgIHRoaXMub25lKCdhdy1ob21lLWZhY2V0cy13cmFwcGVyJykudXBkYXRlKHtcbiAgICAgIGZhY2V0RGF0YTogdGhpcy5mYWNldERhdGEsXG4gICAgICBsb2NrZWRGYWNldHM6IHRoaXMubG9ja2VkRmFjZXRzXG4gICAgfSk7XG4gICAgaWYgKHVwZGF0ZUJ1YmJsZXMpIHtcbiAgICAgIGxldCBkaXNhYmxlRmFjZXRzSWRzID0gW107XG4gICAgICB0aGlzLmZhY2V0RGF0YS5mb3JFYWNoKChmRCkgPT4ge1xuICAgICAgICBpZiAoIWZELmVuYWJsZWQpIGRpc2FibGVGYWNldHNJZHMucHVzaChmRC50eXBlLmlkKTtcbiAgICAgIH0pO1xuICAgICAgaWYgKGRpc2FibGVGYWNldHNJZHMpIHtcbiAgICAgICAgbGV0IGZpbHRlcmVkU2VsZWN0ZWRCdWJibGVzID0gdGhpcy5zZWxlY3RlZEJ1YmJsZXMuZmlsdGVyKChidWJibGUpID0+IHtcbiAgICAgICAgICBsZXQgdHlwZU9mRW50aXR5ID0gXCJcIjtcbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuYWxsQnViYmxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuYWxsQnViYmxlc1tpXS5pZCA9PT0gYnViYmxlLmlkKSB7XG4gICAgICAgICAgICAgIHR5cGVPZkVudGl0eSA9IHRoaXMuYWxsQnViYmxlc1tpXS5lbnRpdHkudHlwZU9mRW50aXR5LmlkO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGRpc2FibGVGYWNldHNJZHMuaW5jbHVkZXModHlwZU9mRW50aXR5KSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGZpbHRlcmVkU2VsZWN0ZWRCdWJibGVzLmxlbmd0aCAhPSB0aGlzLnNlbGVjdGVkQnViYmxlcy5sZW5ndGgpIHtcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkQnViYmxlcyA9IGZpbHRlcmVkU2VsZWN0ZWRCdWJibGVzO1xuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgdGhpcy5hbGxCdWJibGVzLmZvckVhY2goKGJ1YmJsZSkgPT4ge1xuICAgICAgICBidWJibGUuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnNlbGVjdGVkQnViYmxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkQnViYmxlc1tpXS5pZCA9PT0gYnViYmxlLmlkKSBidWJibGUuc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMub25lKCdhdy1idWJibGUtY2hhcnQnKS51cGRhdGUodGhpcy5nZXRCdWJibGVQYXlsb2FkKG51bGwpKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXJJdGVtVGFncygpIHtcbiAgICBsZXQgdGFnc0RhdGEgPSBbXTtcbiAgICB0aGlzLnNlbGVjdGVkQnViYmxlcy5mb3JFYWNoKChzQnViYmxlKSA9PiB7XG4gICAgICBsZXQgbGFiZWwgPSAnJztcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5hbGxCdWJibGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh0aGlzLmFsbEJ1YmJsZXNbaV0uaWQgPT09IHNCdWJibGUuaWQpIHtcbiAgICAgICAgICBsYWJlbCA9IHRoaXMuYWxsQnViYmxlc1tpXS5lbnRpdHkubGFiZWw7XG4gICAgICAgICAgdGFnc0RhdGEucHVzaCh7XG4gICAgICAgICAgICBsYWJlbCwgaWNvbjogXCJuNy1pY29uLWNsb3NlXCIsXG4gICAgICAgICAgICBwYXlsb2FkOiBzQnViYmxlLmlkLFxuICAgICAgICAgICAgY2xhc3NlczogXCJ0YWctXCIgKyB0aGlzLmFsbEJ1YmJsZXNbaV0uZW50aXR5LnR5cGVPZkVudGl0eS5pZFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5vbmUoJ2F3LWhvbWUtaXRlbS10YWdzLXdyYXBwZXInKS51cGRhdGUodGFnc0RhdGEpO1xuICB9XG5cbiAgb25UYWdDbGlja2VkKHBheWxvYWQpIHtcbiAgICBpZiAoIXBheWxvYWQpIHJldHVybjtcbiAgICBjb25zdCBidWJibGVJZCA9IHBheWxvYWQ7XG4gICAgaWYgKHRoaXMuX2J1YmJsZUNoYXJ0KSB7XG4gICAgICB0aGlzLl9idWJibGVDaGFydC5zZWxlY3RBbGwoYGdgKS5lYWNoKGIgPT4ge1xuICAgICAgICBpZiAoYi5pZCA9PT0gYnViYmxlSWQpIGIuaGFzQ2xvc2VJY29uID0gZmFsc2U7XG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5zZWxlY3RlZEJ1YmJsZXMgPSB0aGlzLnNlbGVjdGVkQnViYmxlcy5maWx0ZXIoKGIpID0+IGIuaWQgIT09IHBheWxvYWQpO1xuICAgIHJldHVybiB0aGlzLmZpbHRlclJlcXVlc3QoKTtcbiAgfVxuXG4gIG9uSGVyb0NoYW5nZSh2YWx1ZSkge1xuICAgIHRoaXMuYXV0b2NvbXBsZXRlQ2hhbmdlZCQubmV4dCh2YWx1ZSk7XG4gIH1cblxuICBwcml2YXRlIF9zY3JvbGxCYWNrZ3JvdW5kQ29udHJvbCgpIHtcbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidWJibGUtcmVzdWx0cy1saXN0JyksXG4gICAgICBzb3VyY2UkID0gZnJvbUV2ZW50KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidWJibGUtcmVzdWx0cy1saXN0JyksICdzY3JvbGwnKTtcblxuICAgIC8vIGhlaWdodCBjb250cm9sXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLl9zZXRIYXNTY3JvbGxCYWNrZ3JvdW5kKGVsKTtcbiAgICB9LCA1MDApO1xuXG4gICAgLy8gc2Nyb2xsIGxpc3RlblxuICAgIHNvdXJjZSQucGlwZShcbiAgICAgIGRlYm91bmNlVGltZSg1MClcbiAgICApLnN1YnNjcmliZSgoeyB0YXJnZXQgfTogeyB0YXJnZXQ6IGFueSB9KSA9PiB7XG4gICAgICB0aGlzLl9zZXRIYXNTY3JvbGxCYWNrZ3JvdW5kKHRhcmdldCk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9zZXRIYXNTY3JvbGxCYWNrZ3JvdW5kKHsgc2Nyb2xsVG9wLCBzY3JvbGxIZWlnaHQsIGNsaWVudEhlaWdodCB9KSB7XG4gICAgdGhpcy5oYXNTY3JvbGxCYWNrZ3JvdW5kID0gc2Nyb2xsSGVpZ2h0ID4gKHNjcm9sbFRvcCArIGNsaWVudEhlaWdodCk7XG4gIH1cblxuICBwcml2YXRlIF9saXN0ZW5BdXRvQ29tcGxldGVDaGFuZ2VzKCkge1xuICAgIHRoaXMub25lKCdhdy1ob21lLWF1dG9jb21wbGV0ZScpLnVwZGF0ZU9wdGlvbnMoeyBjb25maWc6IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2NvbmZpZy1rZXlzJykgfSk7XG4gICAgdGhpcy5hdXRvY29tcGxldGVDaGFuZ2VkJC5waXBlKFxuICAgICAgZGVib3VuY2VUaW1lKDUwMClcbiAgICApLnN1YnNjcmliZSh2YWx1ZSA9PiB7XG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5jb21tdW5pY2F0aW9uLnJlcXVlc3QkKCdhdXRvQ29tcGxldGUnLCB7XG4gICAgICAgICAgb25FcnJvcjogKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSxcbiAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgIGlucHV0OiB2YWx1ZSxcbiAgICAgICAgICAgIGl0ZW1zUGFnaW5hdGlvbjogeyBvZmZzZXQ6IDAsIGxpbWl0OiB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdob21lLWxheW91dCcpWydyZXN1bHRzLWxpbWl0J10gfVxuICAgICAgICAgIH1cbiAgICAgICAgfSkuc3Vic2NyaWJlKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgIHRoaXMub25lKCdhdy1ob21lLWF1dG9jb21wbGV0ZScpLnVwZGF0ZShyZXNwb25zZSk7XG4gICAgICAgICAgaWYgKCF0aGlzLmF1dG9jb21wbGV0ZVBvcG92ZXJPcGVuKSB0aGlzLl90b2dnbGVBdXRvY29tcGxldGVQb3BvdmVyKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fdG9nZ2xlQXV0b2NvbXBsZXRlUG9wb3ZlcigpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfdG9nZ2xlQXV0b2NvbXBsZXRlUG9wb3ZlcigpIHtcbiAgICBpZiAoIXRoaXMuYXV0b2NvbXBsZXRlUG9wb3Zlcikge1xuICAgICAgY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXctaG9tZS1hZHZhbmNlZC1hdXRvY29tcGxldGUtcG9wb3ZlcicpO1xuICAgICAgdGVtcGxhdGUuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICB0aGlzLmF1dG9jb21wbGV0ZVBvcG92ZXIgPSB0aGlzLnRpcHB5KCcuYXctaG9tZV9fdG9wLWhlcm8gLm43LWhlcm9fX2lucHV0Jywge1xuICAgICAgICBjb250ZW50OiB0ZW1wbGF0ZSxcbiAgICAgICAgdHJpZ2dlcjogJ21hbnVhbCcsXG4gICAgICAgIGludGVyYWN0aXZlOiB0cnVlLFxuICAgICAgICBhcnJvdzogZmFsc2UsXG4gICAgICAgIGZsaXA6IGZhbHNlLFxuICAgICAgICBhcHBlbmRUbzogJ3BhcmVudCcsXG4gICAgICAgIHRoZW1lOiAnbGlnaHQtYm9yZGVyJyxcbiAgICAgICAgcGxhY2VtZW50OiAnYm90dG9tLXN0YXJ0JyxcbiAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgICAgb25IaWRkZW46ICgpID0+IHRoaXMuYXV0b2NvbXBsZXRlUG9wb3Zlck9wZW4gPSBmYWxzZSxcbiAgICAgIH0pWzBdO1xuICAgIH1cbiAgICBpZiAodGhpcy5hdXRvY29tcGxldGVQb3BvdmVyT3Blbikge1xuICAgICAgdGhpcy5hdXRvY29tcGxldGVQb3BvdmVyLmhpZGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hdXRvY29tcGxldGVQb3BvdmVyLnNob3coKTtcbiAgICB9XG4gICAgdGhpcy5hdXRvY29tcGxldGVQb3BvdmVyT3BlbiA9ICF0aGlzLmF1dG9jb21wbGV0ZVBvcG92ZXJPcGVuO1xuICB9XG59Il19