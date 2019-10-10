/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { LayoutDataSource } from '@n7-frontend/core';
import { fromEvent, interval, Subject } from 'rxjs';
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
        // listen autocomplete changes
        this._listenAutoCompleteChanges();
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
        this.one('aw-linked-objects').updateOptions({ context: 'home', configKeys: this.configuration.get('config-keys') });
        this.one('aw-linked-objects').update(response.itemsPagination.items);
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1sYXlvdXQuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvbGF5b3V0cy9ob21lLWxheW91dC9ob21lLWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDckQsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEQsTUFBTSxPQUFPLGNBQWUsU0FBUSxnQkFBZ0I7SUFBcEQ7O1FBS1UsY0FBUyxHQUFVLElBQUksQ0FBQztRQUN4QixnQkFBVyxHQUFRLEVBQUUsQ0FBQzs7OztRQUl0QixlQUFVLEdBQVUsSUFBSSxDQUFDO1FBRXpCLDRCQUF1QixHQUFZLEtBQUssQ0FBQztRQUN6Qyx5QkFBb0IsR0FBb0IsSUFBSSxPQUFPLEVBQUUsQ0FBQzs7O1FBR3ZELG9CQUFlLEdBQVUsRUFBRSxDQUFDO1FBQzVCLGtCQUFhLEdBQVcsSUFBSSxDQUFDOzs7UUFHNUIsaUJBQVksR0FBUSxJQUFJLENBQUM7O1FBRXpCLHlCQUFvQixHQUFVLENBQUMsQ0FBQzs7Ozs7O1FBTWhDLHNCQUFpQixHQUFRLEVBQUUsQ0FBQzs7O1FBRzVCLG9CQUFlLEdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDN0IsZ0JBQVcsR0FBUSxJQUFJLENBQUM7UUFDekIsdUJBQWtCLEdBQVEsSUFBSSxDQUFDO1FBQy9CLHdCQUFtQixHQUFZLEtBQUssQ0FBQztJQWtjOUMsQ0FBQzs7Ozs7SUFoY0MsTUFBTSxDQUFDLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFO1FBQ3ZELElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxD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OlsiaW1wb3J0IHsgTGF5b3V0RGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IGZyb21FdmVudCwgaW50ZXJ2YWwsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlLCBkZWJvdW5jZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmV4cG9ydCBjbGFzcyBBd0hvbWVMYXlvdXREUyBleHRlbmRzIExheW91dERhdGFTb3VyY2Uge1xuICBwcml2YXRlIGNvbW11bmljYXRpb246IGFueTtcbiAgcHJpdmF0ZSBtYWluU3RhdGU6IGFueTtcbiAgcHJpdmF0ZSB0aXBweTogYW55O1xuICBwcml2YXRlIGNvbmZpZ3VyYXRpb246IGFueTtcbiAgcHJpdmF0ZSBmYWNldERhdGE6IGFueVtdID0gbnVsbDtcbiAgcHJpdmF0ZSBmYWNldElucHV0czogYW55ID0ge307XG4gIC8vIGFsbCB0aGUgYnViYmxlcyBhcyB0aGV5IGhhdmUgYmVlbiBnaXZlbiBieSBhcG9sbG9cbiAgLy8gKHRoZSBvYmplY3RzIGluIHRoZSBhbGxCdWJibGVzIGFyZSBub3QgdGhlIHNhbWUgYnViYmxlIG9iamVjdHNcbiAgLy8gcHJlc2VudCBpbiB0aGUgYnViYmxlIGNoYXJ0KVxuICBwcml2YXRlIGFsbEJ1YmJsZXM6IGFueVtdID0gbnVsbDtcbiAgcHJpdmF0ZSBhdXRvY29tcGxldGVQb3BvdmVyOiBhbnk7XG4gIHByaXZhdGUgYXV0b2NvbXBsZXRlUG9wb3Zlck9wZW46IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBhdXRvY29tcGxldGVDaGFuZ2VkJDogU3ViamVjdDxzdHJpbmc+ID0gbmV3IFN1YmplY3QoKTtcbiAgLy8gdGhlIGJ1YmJsZXMgY3VycmVudGx5IHNlbGVjdGVkICh0aGlzIGFyZSBzYXZlZCBmcm9tIHRoZSBldmVudCBoYW5kbGVyJ3NcbiAgLy8gYW5kIGNvcnJlc3BvbmQgZXhhY3RseSB0byB0aGUgYnViYmxlY2hhcnQncyBidWJibGUgb2JqZWN0cylcbiAgcHVibGljIHNlbGVjdGVkQnViYmxlczogYW55W10gPSBbXTtcbiAgcHVibGljIG51bU9mSXRlbXNTdHI6IHN0cmluZyA9IG51bGw7XG4gIC8vIGluc3RhbmNlIG9mIHRoZSBidWJibGUgY2hhcnQgKGZyb20gd2hpY2ggeW91IGNhbiBhY2Nlc3MgYWxsIHRoZSB2YXJpb3VzXG4gIC8vIGJ1YmJsZSBvYmplY3RzKVxuICBwcml2YXRlIF9idWJibGVDaGFydDogYW55ID0gbnVsbDtcbiAgLy8gdGhlIG1heGltdW0gbnVtYmVyIG9mIGJ1YmJsZXMgd2hpY2ggY2FuIGJlIHNlbGVjdGVkIGF0IHRoZSBzYW1lIHRpbWVcbiAgcHJpdmF0ZSBtYXhCdWJibGVzU2VsZWN0YWJsZTpudW1iZXIgPSAzO1xuICAvLyBlbnRpdGllcyBoYXZlIHRoZWlyIG93biB1bmlxdWUgaWQsIHRoZXNlIGlkcyBhcmUgZ2VuZXJpYyBhbmQgYXJlIHZlcnkgZmxleGlibGVcbiAgLy8gYnViYmxlcyAoYXMgdGhlIGJ1YmJsZSBjaGFydCdzIG9iamVjdHMpIGhhdmUgdW5pcXVlIGlkcyBidXQgZG8gbm90IGFsbG93IGNlcnRhaW5cbiAgLy8gY2hhcmFjdGVycywgc28gZWFjaCBidWJibGUgaGFzIGl0cyBvd24gaWQgZGlmZmVyZW50IGZyb20gdGhlIGlkIG9mIHRoZSBlbnRpdHkgd2hpY2hcbiAgLy8gdGhlIGJ1YmJsZSByZXByZXNlbnRzIChnaXZlbiBhbiBidWJibGUncyBpZCBjYWxsZWQgYnViYmxlSWQgeW91IGNhbiBvYnRhaW4gdGhlXG4gIC8vIHJlc3BlY3RpdmUgZW50aXR5J3MgaWQgd2l0aCBhczogZW50aXR5SWQgPSBlbnRpdHlCdWJibGVJZE1hcFtidWJibGVJZF0gKVxuICBwcml2YXRlIGVudGl0eUJ1YmJsZUlkTWFwOiBhbnkgPSB7fTtcbiAgLy8gd2lkaCBvZiB0aGUgd2luZG93IHdoaWNoIGlzIHVwZGF0ZWQgYXQgZWFjaCByZXNpemUgYW5kIGl0IGlzIHVzZWQgYnkgdGhlIGJ1YmJsZVxuICAvLyBjaGFydCB0byBjaGVjayBpZiB0aGUgd2lkdGggb2YgdGhlIHdpbmRvdyBoYXMgY2hhbmdlZCBkdXJpbmcgdGhlIGxhc3QgcmVzaXplXG4gIHByaXZhdGUgbGFzdFdpbmRvd1dpZHRoOiBudW1iZXIgPSAtMTtcbiAgcHJpdmF0ZSBidWJibGVQb3B1cDogYW55ID0gbnVsbDtcbiAgcHVibGljIGN1cnJlbnRIb3ZlckVudGl0eTogYW55ID0gbnVsbDtcbiAgcHVibGljIGhhc1Njcm9sbEJhY2tncm91bmQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBvbkluaXQoeyBjb21tdW5pY2F0aW9uLCBtYWluU3RhdGUsIGNvbmZpZ3VyYXRpb24sIHRpcHB5IH0pe1xuICAgIHRoaXMuY29tbXVuaWNhdGlvbiA9IGNvbW11bmljYXRpb247XG4gICAgdGhpcy50aXBweSA9IHRpcHB5O1xuICAgIHRoaXMubWFpblN0YXRlID0gbWFpblN0YXRlO1xuICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IGNvbmZpZ3VyYXRpb247XG5cbiAgICB0aGlzLm9uZSgnYXctaGVybycpLnVwZGF0ZSh0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdob21lLWxheW91dCcpWyd0b3AtaGVybyddKTtcbiAgICB0aGlzLm9uZSgnYXctaG9tZS1oZXJvLXBhdHJpbW9uaW8nKS51cGRhdGUodGhpcy5jb25maWd1cmF0aW9uLmdldCgnaG9tZS1sYXlvdXQnKVsnYm90dG9tLWhlcm8nXSk7XG5cbiAgICB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQoJ2dsb2JhbEZpbHRlcicsIHtcbiAgICAgIG9uRXJyb3I6IChlcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvciksXG4gICAgfSkuc3Vic2NyaWJlKChyZXNwb25zZSkgPT4ge1xuICAgICAgdGhpcy5mYWNldERhdGEgPSBbXTtcbiAgICAgIHJlc3BvbnNlLmVudGl0aWVzRGF0YS5mb3JFYWNoKCAoZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IHRlb0NvbmZpZ0RhdGEgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KFwiY29uZmlnLWtleXNcIilbZW50LmNvdW50RGF0YS50eXBlLmNvbmZpZ0tleV07XG4gICAgICAgIGlmKHRlb0NvbmZpZ0RhdGEpXG4gICAgICAgICAgdGhpcy5mYWNldERhdGEucHVzaCh7XG4gICAgICAgICAgICAuLi5lbnQuY291bnREYXRhLFxuICAgICAgICAgICAgLi4udGVvQ29uZmlnRGF0YSxcbiAgICAgICAgICAgIGVuYWJsZWQ6dHJ1ZSxcbiAgICAgICAgICB9KTtcbiAgICAgIH0gKTtcbiAgICAgIHRoaXMub25lKCdhdy1ob21lLWZhY2V0cy13cmFwcGVyJykudXBkYXRlKHRoaXMuZmFjZXREYXRhKTtcbiAgICAgIHRoaXMuc2V0QWxsQnViYmxlc0Zyb21BcG9sbG9RdWVyeShyZXNwb25zZSk7XG4gICAgICB0aGlzLnJlbmRlclByZXZpZXdzRnJvbUFwb2xsb1F1ZXJ5KHJlc3BvbnNlKTtcbiAgICB9KTtcblxuICAgIC8vIHVwZGF0ZSBzdHJlYW1zXG4gICAgdGhpcy5tYWluU3RhdGUudXBkYXRlKCdoZWFkVGl0bGUnLCAnQXJpYW5uYSBXZWIgPiBIb21lJyk7XG4gICAgdGhpcy5tYWluU3RhdGUudXBkYXRlKCdwYWdlVGl0bGUnLCAnQXJpYW5uYSBXZWI6IEhvbWUgTGF5b3V0Jyk7XG5cbiAgICB0aGlzLmxhc3RXaW5kb3dXaWR0aD13aW5kb3cub3V0ZXJXaWR0aDtcbiAgICBmcm9tRXZlbnQoIHdpbmRvdyAsIFwicmVzaXplXCIgKS5waXBlKGRlYm91bmNlKCgpID0+IGludGVydmFsKDIwMCkpKS5cbiAgICBzdWJzY3JpYmUoICgpID0+IHtcbiAgICAgIC8vIG9ubHkgcmVzZXRzIHRoZSBidWJibGVzIGlmIHRoZSB3aW5kb3cncyB3aWR0aCBoYXMgY2hhbmdlZFxuICAgICAgLy8gKGlmIHRoZSByZXNpemUgb25seSBlZmZlY3RzIHRoZSB3aW5kb3cncyBoaWdodCB0aGVuIHRoZSBidWJibGUgY2hhcnRcbiAgICAgIC8vIGRvZXNuJ3QgZ2V0IHJlc2V0KVxuICAgICAgaWYodGhpcy5sYXN0V2luZG93V2lkdGghPXdpbmRvdy5vdXRlcldpZHRoKXtcbiAgICAgICAgdGhpcy5sYXN0V2luZG93V2lkdGg9d2luZG93Lm91dGVyV2lkdGg7XG4gICAgICAgIHRoaXMudXBkYXRlQnViYmxlc0FuZEl0ZW1QcmV2aWV3cyh0cnVlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIGxpc3RlbiBhdXRvY29tcGxldGUgY2hhbmdlc1xuICAgIHRoaXMuX2xpc3RlbkF1dG9Db21wbGV0ZUNoYW5nZXMoKTtcbiAgfVxuXG4gIG9uQnViYmxlVG9vbHRpcENsaWNrKHNvdXJjZTpzdHJpbmcsIHBheWxvYWQpe1xuICAgIHN3aXRjaChzb3VyY2Upe1xuICAgICAgY2FzZSAnc2VsZWN0JzpcbiAgICAgICAgaWYoIXBheWxvYWQpIHJldHVybjtcbiAgICAgICAgY29uc3QgYnViYmxlSWQgPSB0aGlzLmNvbnZlcnRFbnRpdHlJZFRvQnViYmxlSWQocGF5bG9hZC5lbnRpdHlJZCk7XG4gICAgICAgIGlmKCFidWJibGVJZCkgcmV0dXJuO1xuICAgICAgICBsZXQgYnViYmxlID0gbnVsbDtcbiAgICAgICAgaWYodGhpcy5fYnViYmxlQ2hhcnQpe1xuICAgICAgICAgIHRoaXMuX2J1YmJsZUNoYXJ0LnNlbGVjdEFsbChgZ2ApLmVhY2goIGIgPT4ge1xuICAgICAgICAgICAgaWYoYi5pZD09PWJ1YmJsZUlkKSBidWJibGU9YjtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpZihidWJibGUpIHRoaXMub25CdWJibGVTZWxlY3RlZChidWJibGUpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgb25CdWJibGVNb3VzZUVudGVyKHBheWxvYWQpe1xuICAgIGlmKCFwYXlsb2FkIHx8ICFwYXlsb2FkLmJ1YmJsZSkgcmV0dXJuO1xuICAgIGNvbnN0IGJ1YmJsZUlkID0gcGF5bG9hZC5idWJibGUuaWQ7XG4gICAgbGV0IGhvdmVyRW50aXR5SWQgPSB0aGlzLmVudGl0eUJ1YmJsZUlkTWFwW3BheWxvYWQuYnViYmxlLmlkXTtcbiAgICBmb3IodmFyIGk9MDtpPHRoaXMuYWxsQnViYmxlcy5sZW5ndGg7aSsrKXtcbiAgICAgIGxldCBidWJibGUgPSB0aGlzLmFsbEJ1YmJsZXNbaV07XG4gICAgICBpZihidWJibGUuZW50aXR5LmlkPT09aG92ZXJFbnRpdHlJZCl7XG4gICAgICAgIHRoaXMuY3VycmVudEhvdmVyRW50aXR5ID0gYnViYmxlLmVudGl0eTtcbiAgICAgICAgdGhpcy5jdXJyZW50SG92ZXJFbnRpdHkuY291bnQgPSBidWJibGUuY291bnQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBpZih0aGlzLmJ1YmJsZVBvcHVwKXtcbiAgICAgIHRoaXMuYnViYmxlUG9wdXAuaGlkZSgpO1xuICAgICAgdGhpcy5idWJibGVQb3B1cC5kZXN0cm95KCk7XG4gICAgICB0aGlzLmJ1YmJsZVBvcHVwID0gbnVsbDtcbiAgICB9XG4gICAgc2V0VGltZW91dCggKCkgPT4ge1xuICAgICAgbGV0IHRlbXBsYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidWJibGUtcG9wdXAtbWVudVwiKTtcbiAgICAgIGxldCB0ZW1wbGF0ZUNsb25lID0gdGVtcGxhdGUuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgdGVtcGxhdGVDbG9uZVsnc3R5bGUnXS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcbiAgICAgIHRoaXMuYnViYmxlUG9wdXAgPSB0aGlzLnRpcHB5KGAjJHtidWJibGVJZH1gLCB7XG4gICAgICAgIGNvbnRlbnQ6IHRlbXBsYXRlQ2xvbmUsXG4gICAgICAgIHRyaWdnZXI6ICdtYW51YWwnLFxuICAgICAgICBpbnRlcmFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgYXJyb3c6IHRydWUsXG4gICAgICAgIHRoZW1lOiAnbGlnaHQtYm9yZGVyIG5vLXBhZGRpbmcnLFxuICAgICAgICBwbGFjZW1lbnQ6ICd0b3AtbWlkZGxlJyxcbiAgICAgICAgbWF4V2lkdGg6IDUwMCxcbiAgICAgICAgLy9vbkhpZGRlbjogKCkgPT4gY29uc29sZS5sb2coJ2hpZGRlbicpLFxuICAgICAgfSlbMF07XG4gICAgICBzZXRUaW1lb3V0KCAoKSA9PiB7IGlmKHRoaXMuYnViYmxlUG9wdXApIHRoaXMuYnViYmxlUG9wdXAuc2hvdygpIH0gLCA4MDAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlclByZXZpZXdzRnJvbUFwb2xsb1F1ZXJ5KHJlc3BvbnNlOiBhbnkpe1xuICAgIGlmKCFyZXNwb25zZSB8fCAhcmVzcG9uc2UuaXRlbXNQYWdpbmF0aW9uKSByZXR1cm47XG5cbiAgICBsZXQgbnVtT2ZJdGVtcyA9IHJlc3BvbnNlLml0ZW1zUGFnaW5hdGlvbi50b3RhbENvdW50O1xuICAgIGlmKG51bU9mSXRlbXM+MCl7XG4gICAgICBsZXQgbnVtT2ZUaG91c2FuZCA9IDA7XG4gICAgICB3aGlsZShudW1PZkl0ZW1zPjk5OSl7XG4gICAgICAgIG51bU9mSXRlbXMtPTEwMDA7XG4gICAgICAgIG51bU9mVGhvdXNhbmQgKz0gMTtcbiAgICAgIH1cbiAgICAgIGxldCBudW1PZkl0ZW1zVG1wU3RyID0gbnVtT2ZJdGVtcyArICcnO1xuICAgICAgaWYobnVtT2ZJdGVtczwxMCkgbnVtT2ZJdGVtc1RtcFN0ciA9ICcwMCcrbnVtT2ZJdGVtcztcbiAgICAgIGVsc2UgaWYobnVtT2ZJdGVtczwxMDApIG51bU9mSXRlbXNUbXBTdHIgPSAnMCcrbnVtT2ZJdGVtcztcbiAgICAgIGlmKG51bU9mVGhvdXNhbmQ+MClcbiAgICAgICAgdGhpcy5udW1PZkl0ZW1zU3RyID0gbnVtT2ZUaG91c2FuZCsnLicrbnVtT2ZJdGVtc1RtcFN0cjtcbiAgICAgIGVsc2VcbiAgICAgICB0aGlzLm51bU9mSXRlbXNTdHIgPSBudW1PZkl0ZW1zKycnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm51bU9mSXRlbXNTdHIgPSBudWxsO1xuICAgIH1cblxuICAgIHRoaXMub25lKCdhdy1saW5rZWQtb2JqZWN0cycpLnVwZGF0ZU9wdGlvbnMoeyBjb250ZXh0OiAnaG9tZScsIGNvbmZpZ0tleXM6IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2NvbmZpZy1rZXlzJyl9KVxuICAgIHRoaXMub25lKCdhdy1saW5rZWQtb2JqZWN0cycpLnVwZGF0ZShyZXNwb25zZS5pdGVtc1BhZ2luYXRpb24uaXRlbXMpO1xuXG4gICAgLy8gc2Nyb2xsIGNvbnRyb2xcbiAgICB0aGlzLl9zY3JvbGxCYWNrZ3JvdW5kQ29udHJvbCgpO1xuICB9XG5cbiAgcHVibGljIG9uQnViYmxlU2VsZWN0ZWQoYnViYmxlKXtcbiAgICBpZihidWJibGUpe1xuICAgICAgaWYoIXRoaXMuc2VsZWN0ZWRCdWJibGVzLmluY2x1ZGVzKGJ1YmJsZSkpe1xuICAgICAgICBpZih0aGlzLnNlbGVjdGVkQnViYmxlcy5sZW5ndGg8dGhpcy5tYXhCdWJibGVzU2VsZWN0YWJsZSl7XG4gICAgICAgICAgdGhpcy5zZWxlY3RlZEJ1YmJsZXMucHVzaChidWJibGUpO1xuICAgICAgICAgIHRoaXMudXBkYXRlQnViYmxlc0FuZEl0ZW1QcmV2aWV3cygpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG9uQnViYmxlRGVzZWxlY3RlZChwYXlsb2FkKXtcbiAgICBpZihwYXlsb2FkICYmIHBheWxvYWQuYnViYmxlKXtcbiAgICAgIHRoaXMuc2VsZWN0ZWRCdWJibGVzID0gdGhpcy5zZWxlY3RlZEJ1YmJsZXMuZmlsdGVyKFxuICAgICAgICAoYikgPT4gYi5pZCE9PXBheWxvYWQuYnViYmxlLmlkICk7XG4gICAgICBpZihwYXlsb2FkLmJ1YmJsZS5oYXNDbG9zZUljb24pe1xuICAgICAgICBwYXlsb2FkLmJ1YmJsZS5oYXNDbG9zZUljb249ZmFsc2U7XG4gICAgICAgIHRoaXMudXBkYXRlQnViYmxlc0FuZEl0ZW1QcmV2aWV3cygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiB1cGRhdGVzIHRoZSBidWJibGUgY2hhcnQgYW5kIHRoZSBpdGVtIHByZXZpZXdzIGJhc2VkIG9uIHRoZSBjdXJyZW50bHlcbiAgICogc2VsZWN0ZWQgYnViYmxlc1xuICAgKlxuICAgKiBAcGFyYW0gb25seUJ1YmJsZXMgc3BlY2lmaWVzIGlmIG9ubHkgdGhlIGJ1YmJsZSBjaGFydCBzaG91bGQgYmUgdXBkYXRlZCxcbiAgICogICAgICAgICAgICAgICAgICAgIGxlYXZpbmcgdGhlIGl0ZW0gcHJldmlld3MgYXMgdGhleSBhcmVcbiAgICovXG4gIHByaXZhdGUgdXBkYXRlQnViYmxlc0FuZEl0ZW1QcmV2aWV3cyhvbmx5QnViYmxlcz86Ym9vbGVhbil7XG4gICAgbGV0IHNlbGVjdGVkRW50aXRpZXNJZHMgPSBbXTtcbiAgICBpZih0aGlzLmVudGl0eUJ1YmJsZUlkTWFwKVxuICAgIHRoaXMuc2VsZWN0ZWRCdWJibGVzLmZvckVhY2goIChzQikgPT4ge1xuICAgICAgbGV0IGVudGl0eUlkID0gdGhpcy5lbnRpdHlCdWJibGVJZE1hcFtzQi5pZF07XG4gICAgICBpZihlbnRpdHlJZClcbiAgICAgICAgc2VsZWN0ZWRFbnRpdGllc0lkcy5wdXNoKGVudGl0eUlkKTtcbiAgICB9KTtcbiAgICB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQoJ2dsb2JhbEZpbHRlcicsIHtcbiAgICAgIG9uRXJyb3I6IChlcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvciksXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgc2VsZWN0ZWRFbnRpdGllc0lkcyxcbiAgICAgICAgaXRlbXNQYWdpbmF0aW9uOnsgb2Zmc2V0OjAsIGxpbWl0OiB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdob21lLWxheW91dCcpWydyZXN1bHRzLWxpbWl0J10gfVxuICAgICAgfSxcbiAgICB9KS5zdWJzY3JpYmUoKHJlc3BvbnNlKSA9PiB7XG4gICAgICBpZighb25seUJ1YmJsZXMpe1xuICAgICAgICB0aGlzLnJlbmRlclByZXZpZXdzRnJvbUFwb2xsb1F1ZXJ5KHJlc3BvbnNlKTtcbiAgICAgICAgdGhpcy5yZW5kZXJJdGVtVGFncygpO1xuICAgICAgfVxuICAgICAgdGhpcy5zZXRBbGxCdWJibGVzRnJvbUFwb2xsb1F1ZXJ5KHJlc3BvbnNlLHRydWUpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIGNvbnZlcnRzIHRoZSBpZCBvZiBhbiBlbnRpdHkgdG8gdGhlIGlkIG9mIGEgYnViYmxlXG4gICAqICggLy8gZDMvc3ZnIGRvZXMgbm90IGFsbG93IE51bWJlciBhcyBiZWdpbm5pbmcgb2YgSUQuXG4gICAqICAgLy8gZDMvc3ZnIGRvZXMgbm90IGFsbG93ICctJyBhcyBwYXJ0IG9mIElELiApXG4gICAqIEBwYXJhbSBlbnRpdHlJZCBpZCBvZiB0aGUgZW50aXR5XG4gICAqL1xuICBwcml2YXRlIGNvbnZlcnRFbnRpdHlJZFRvQnViYmxlSWQoZW50aXR5SWQ6c3RyaW5nKSA6c3RyaW5nIHtcbiAgICBpZighZW50aXR5SWQpIHJldHVybiBudWxsO1xuICAgIHJldHVybiAoICdCXycrZW50aXR5SWQucmVwbGFjZSgvLS9nLCdfJykgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBzZXRzIHRoZSB0aGlzLmFsbEJ1YmJsZXMgdmFyaWFibGUgYmFzZWQgb24gdGhlIHJlc3BvbnNlIGFwb2xsbyBoYXMgZ2l2ZW5cbiAgICogZm9yIHRoZSBnbG9iYWxGaWx0ZXJRdWVyeVxuICAgKlxuICAgKiBAcGFyYW0gcmVzcG9uc2UgYXBvbGxvJ3MgcmVzcG9uc2VcbiAgICogQHBhcmFtIHJlc2V0IHRydWUgaWYgdGhlIGJ1YmJsZSBjaGFydCBoYXMgdG8gYmUgcmVzZXQvcmVkcmF3blxuICAgKi9cbiAgc2V0QWxsQnViYmxlc0Zyb21BcG9sbG9RdWVyeShyZXNwb25zZTogYW55LHJlc2V0Pzpib29sZWFuKXtcbiAgICBpZiggIXJlc3BvbnNlIHx8ICFyZXNwb25zZS5lbnRpdGllc0RhdGEgKSByZXR1cm47XG4gICAgdGhpcy5hbGxCdWJibGVzID0gW107XG4gICAgZm9yKHZhciBpPTA7aTxyZXNwb25zZS5lbnRpdGllc0RhdGEubGVuZ3RoO2krKyl7XG4gICAgICBsZXQgY3VycmVudFRvRSA9IHJlc3BvbnNlLmVudGl0aWVzRGF0YVtpXTtcbiAgICAgIGZvcih2YXIgaj0wO2o8Y3VycmVudFRvRS5lbnRpdGllc0NvdW50RGF0YS5sZW5ndGg7aisrKXtcbiAgICAgICAgdGhpcy5hbGxCdWJibGVzLnB1c2goXG4gICAgICAgICAge1xuICAgICAgICAgICAgLi4uY3VycmVudFRvRS5lbnRpdGllc0NvdW50RGF0YVtqXSxcbiAgICAgICAgICAgIGNvbG9yOiB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KFwiY29uZmlnLWtleXNcIilbY3VycmVudFRvRS5jb3VudERhdGEudHlwZS5jb25maWdLZXldWydjb2xvciddWydoZXgnXVxuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmVudGl0eUJ1YmJsZUlkTWFwID0ge307XG4gICAgdGhpcy5hbGxCdWJibGVzLmZvckVhY2goIChidWJibGUpID0+IHtcbiAgICAgIGJ1YmJsZS5pZCA9IHRoaXMuY29udmVydEVudGl0eUlkVG9CdWJibGVJZChidWJibGUuZW50aXR5LmlkKTtcbiAgICAgIHRoaXMuZW50aXR5QnViYmxlSWRNYXBbYnViYmxlLmlkXT1idWJibGUuZW50aXR5LmlkO1xuICAgICAgcmV0dXJuIGJ1YmJsZTtcbiAgICB9KTtcbiAgICB0aGlzLmFsbEJ1YmJsZXMuZm9yRWFjaCggKGJ1YmJsZSkgPT4ge1xuICAgICAgYnViYmxlLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICBmb3IodmFyIGk9MDsgaTx0aGlzLnNlbGVjdGVkQnViYmxlcy5sZW5ndGg7aSsrKXtcbiAgICAgICAgaWYodGhpcy5zZWxlY3RlZEJ1YmJsZXNbaV0uaWQ9PT1idWJibGUuaWQpIGJ1YmJsZS5zZWxlY3RlZD10cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMub25lKCdhdy1ob21lLWJ1YmJsZS1jaGFydCcpLnVwZGF0ZSh7XG4gICAgICB3aWR0aDogd2luZG93LmlubmVyV2lkdGgvMS44LFxuICAgICAgYnViYmxlczogdGhpcy5maWx0ZXJCdWJibGVzQmFzZWRPbkZhY2V0c0VuYWJsZWQoKSxcbiAgICAgIHJlc2V0OiAoIHJlc2V0PyByZXNldCA6IGZhbHNlICksXG4gICAgICBzZXRCdWJibGVDaGFydDogKGJ1YmJsZUNyZWYpID0+IHRoaXMuX2J1YmJsZUNoYXJ0ID0gYnViYmxlQ3JlZlxuICAgIH0pO1xuICB9XG5cbiAgZmlsdGVyQnViYmxlc0Jhc2VkT25GYWNldHNFbmFibGVkKCl7XG4gICAgbGV0IHJlc3VsdCA9IHRoaXMuYWxsQnViYmxlcy5maWx0ZXIoXG4gICAgICAoYnViYmxlKSA9PiB7XG4gICAgICAgIGZvcih2YXIgaT0wOyBpPHRoaXMuZmFjZXREYXRhLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICBpZiggYnViYmxlLmVudGl0eS50eXBlT2ZFbnRpdHkuaWQgPT09IHRoaXMuZmFjZXREYXRhW2ldLnR5cGUuaWQgKVxuICAgICAgICAgICAgaWYoICF0aGlzLmZhY2V0RGF0YVtpXS5lbmFibGVkICl7IHJldHVybiBmYWxzZTsgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGhhbmRsZUZhY2V0U2VhcmNoQ2hhbmdlKGNoYW5nZSkge1xuICAgIHZhciBwYXlsb2FkOiBzdHJpbmcgPSBjaGFuZ2UuaW5wdXRQYXlsb2FkO1xuICAgIHZhciB2YWx1ZTogc3RyaW5nID0gY2hhbmdlLnZhbHVlO1xuICAgIC8vIHN0b3JlIHRoZSBlbnRlcmVkIHRleHQgaW4gZmFjZXRJbnB1dHNcbiAgICB0aGlzLmZhY2V0SW5wdXRzW3BheWxvYWRdID0gdmFsdWU7XG4gIH1cblxuICBoYW5kbGVGYWNldFNlYXJjaEVudGVyKGVudGVyKSB7XG4gICAgdmFyIHBheWxvYWQ6IHN0cmluZyA9IGVudGVyLmlucHV0UGF5bG9hZDtcbiAgICAvLyBnZXQgdGhlIHRleHQgZW50ZXJlZCBpbiB0aGlzIGlucHV0XG4gICAgdmFyIHZhbHVlOiBzdHJpbmcgPSB0aGlzLmZhY2V0SW5wdXRzW3BheWxvYWRdO1xuICB9XG5cbiAgaGFuZGxlRmFjZXRIZWFkZXJDbGljayhmYWNldElkKXtcbiAgICBsZXQgdXBkYXRlQnViYmxlcyA9IGZhbHNlO1xuICAgIGxldCBlbmFibGVkRmFjZXRzID0gdGhpcy5mYWNldERhdGEuZmlsdGVyKCAoZikgPT4gZi5lbmFibGVkICkubGVuZ3RoO1xuICAgIHRoaXMuZmFjZXREYXRhLmZvckVhY2goIChmKSA9PiB7XG4gICAgICAgIGlmKGYudHlwZS5pZD09PWZhY2V0SWQpe1xuICAgICAgICAgIGlmKGYuZW5hYmxlZCl7XG4gICAgICAgICAgICBpZihlbmFibGVkRmFjZXRzPjEpe1xuICAgICAgICAgICAgICBmLmVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgdXBkYXRlQnViYmxlcyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGYuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgICAgICB1cGRhdGVCdWJibGVzID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLm9uZSgnYXctaG9tZS1mYWNldHMtd3JhcHBlcicpLnVwZGF0ZSh0aGlzLmZhY2V0RGF0YSk7XG4gICAgaWYodXBkYXRlQnViYmxlcyl7XG4gICAgICBsZXQgZGlzYWJsZUZhY2V0c0lkcyA9IFtdO1xuICAgICAgdGhpcy5mYWNldERhdGEuZm9yRWFjaCggKGZEKSA9PiB7XG4gICAgICAgIGlmKCFmRC5lbmFibGVkKSBkaXNhYmxlRmFjZXRzSWRzLnB1c2goZkQudHlwZS5pZCk7XG4gICAgICB9KTtcblxuICAgICAgaWYoZGlzYWJsZUZhY2V0c0lkcyl7XG4gICAgICAgIGxldCBmaWx0ZXJlZFNlbGVjdGVkQnViYmxlcyA9IHRoaXMuc2VsZWN0ZWRCdWJibGVzLmZpbHRlciggKGJ1YmJsZSkgPT4ge1xuICAgICAgICAgIGxldCB0eXBlT2ZFbnRpdHkgPSBcIlwiO1xuICAgICAgICAgIGZvcih2YXIgaT0wO2k8dGhpcy5hbGxCdWJibGVzLmxlbmd0aDtpKyspe1xuICAgICAgICAgICAgaWYodGhpcy5hbGxCdWJibGVzW2ldLmlkPT09YnViYmxlLmlkKXtcbiAgICAgICAgICAgICAgdHlwZU9mRW50aXR5PXRoaXMuYWxsQnViYmxlc1tpXS5lbnRpdHkudHlwZU9mRW50aXR5LmlkO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYoZGlzYWJsZUZhY2V0c0lkcy5pbmNsdWRlcyh0eXBlT2ZFbnRpdHkpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgICBpZihmaWx0ZXJlZFNlbGVjdGVkQnViYmxlcy5sZW5ndGghPXRoaXMuc2VsZWN0ZWRCdWJibGVzLmxlbmd0aCl7XG4gICAgICAgICAgdGhpcy5zZWxlY3RlZEJ1YmJsZXMgPSBmaWx0ZXJlZFNlbGVjdGVkQnViYmxlcztcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIHRoaXMuYWxsQnViYmxlcy5mb3JFYWNoKCAoYnViYmxlKSA9PiB7XG4gICAgICAgIGJ1YmJsZS5zZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICBmb3IodmFyIGk9MDsgaTx0aGlzLnNlbGVjdGVkQnViYmxlcy5sZW5ndGg7aSsrKXtcbiAgICAgICAgICBpZih0aGlzLnNlbGVjdGVkQnViYmxlc1tpXS5pZD09PWJ1YmJsZS5pZCkgYnViYmxlLnNlbGVjdGVkPXRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5vbmUoJ2F3LWhvbWUtYnViYmxlLWNoYXJ0JykudXBkYXRlKHtcbiAgICAgICAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLzEuOCxcbiAgICAgICAgYnViYmxlczp0aGlzLmZpbHRlckJ1YmJsZXNCYXNlZE9uRmFjZXRzRW5hYmxlZCgpLFxuICAgICAgICBzZXRCdWJibGVDaGFydDogKGJ1YmJsZUNyZWYpID0+IHRoaXMuX2J1YmJsZUNoYXJ0ID0gYnViYmxlQ3JlZixcbiAgICAgICAgcmVzZXQ6dHJ1ZVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVySXRlbVRhZ3MoKXtcbiAgICBsZXQgdGFnc0RhdGEgPSBbXTtcbiAgICB0aGlzLnNlbGVjdGVkQnViYmxlcy5mb3JFYWNoKCAoc0J1YmJsZSkgPT4ge1xuICAgICAgbGV0IGxhYmVsID0gJyc7XG4gICAgICBmb3IodmFyIGk9MDtpPHRoaXMuYWxsQnViYmxlcy5sZW5ndGg7aSsrKXtcbiAgICAgICAgaWYodGhpcy5hbGxCdWJibGVzW2ldLmlkPT09c0J1YmJsZS5pZCl7XG4gICAgICAgICAgbGFiZWwgPSB0aGlzLmFsbEJ1YmJsZXNbaV0uZW50aXR5LmxhYmVsO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0YWdzRGF0YS5wdXNoKHtsYWJlbCxpY29uOlwibjctaWNvbi1jbG9zZVwiLHBheWxvYWQ6c0J1YmJsZS5pZCxjbGFzc2VzOlwidGFnLVwiK3RoaXMuYWxsQnViYmxlc1tpXS5lbnRpdHkudHlwZU9mRW50aXR5LmlkfSk7XG4gICAgfSk7XG4gICAgdGhpcy5vbmUoJ2F3LWhvbWUtaXRlbS10YWdzLXdyYXBwZXInKS51cGRhdGUodGFnc0RhdGEpO1xuICB9XG5cbiAgb25UYWdDbGlja2VkKHBheWxvYWQpe1xuICAgIGlmKCFwYXlsb2FkKSByZXR1cm47XG4gICAgY29uc3QgYnViYmxlSWQ9cGF5bG9hZDtcbiAgICBpZih0aGlzLl9idWJibGVDaGFydCl7XG4gICAgICB0aGlzLl9idWJibGVDaGFydC5zZWxlY3RBbGwoYGdgKS5lYWNoKCBiID0+IHtcbiAgICAgICAgaWYoYi5pZD09PWJ1YmJsZUlkKSBiLmhhc0Nsb3NlSWNvbiA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuc2VsZWN0ZWRCdWJibGVzID0gdGhpcy5zZWxlY3RlZEJ1YmJsZXMuZmlsdGVyKCAoYikgPT4gYi5pZCE9PXBheWxvYWQgKTtcbiAgICB0aGlzLnVwZGF0ZUJ1YmJsZXNBbmRJdGVtUHJldmlld3MoKTtcbiAgfVxuXG4gIG9uSGVyb0NoYW5nZSh2YWx1ZSl7XG4gICAgdGhpcy5hdXRvY29tcGxldGVDaGFuZ2VkJC5uZXh0KHZhbHVlKTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldFN1Ym5hdigpe1xuICAgIHJldHVybiBbJ2hvbWUnLCAncmVzdWx0cycsICdzaW5nbGUnXS5tYXAocGFnZSA9PiAoe1xuICAgICAgdGV4dDogcGFnZS50b1VwcGVyQ2FzZSgpLFxuICAgICAgcGF5bG9hZDoge1xuICAgICAgICBzb3VyY2U6ICduYXZpZ2F0ZScsXG4gICAgICAgIGhhbmRsZXI6ICdyb3V0ZXInLFxuICAgICAgICBwYXRoOiBbYGF3LyR7cGFnZX1gXSxcbiAgICAgICAgaWQ6IHBhZ2VcbiAgICAgIH0sXG4gICAgICBfbWV0YTogeyBpZDogcGFnZSB9XG4gICAgfSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0QnJlYWRjcnVtYnMoKXtcbiAgICByZXR1cm4ge1xuICAgICAgaXRlbXM6IFt7XG4gICAgICAgIGxhYmVsOiAnQXJpYW5uYSBXZWInLFxuICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgc291cmNlOiAnbmF2aWdhdGUnLFxuICAgICAgICAgIGhhbmRsZXI6ICdyb3V0ZXInLFxuICAgICAgICAgIHBhdGg6IFtgYXcvaG9tZWBdXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiAnSG9tZSBMYXlvdXQnLFxuICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgc291cmNlOiAnbmF2aWdhdGUnLFxuICAgICAgICAgIGhhbmRsZXI6ICdyb3V0ZXInLFxuICAgICAgICAgIHBhdGg6IFtgYXcvaG9tZWBdXG4gICAgICAgIH1cbiAgICAgIH1dXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgX3Njcm9sbEJhY2tncm91bmRDb250cm9sKCl7XG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnViYmxlLXJlc3VsdHMtbGlzdCcpLCBcbiAgICAgIHNvdXJjZSQgPSBmcm9tRXZlbnQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1YmJsZS1yZXN1bHRzLWxpc3QnKSwgJ3Njcm9sbCcpO1xuXG4gICAgLy8gaGVpZ2h0IGNvbnRyb2xcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuX3NldEhhc1Njcm9sbEJhY2tncm91bmQoZWwpO1xuICAgIH0sIDUwMCk7XG5cbiAgICAvLyBzY3JvbGwgbGlzdGVuXG4gICAgc291cmNlJC5waXBlKFxuICAgICAgZGVib3VuY2VUaW1lKDUwKVxuICAgICkuc3Vic2NyaWJlKCh7IHRhcmdldCB9OiB7IHRhcmdldDogYW55IH0pID0+IHtcbiAgICAgIHRoaXMuX3NldEhhc1Njcm9sbEJhY2tncm91bmQodGFyZ2V0KTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX3NldEhhc1Njcm9sbEJhY2tncm91bmQoeyBzY3JvbGxUb3AsIHNjcm9sbEhlaWdodCwgY2xpZW50SGVpZ2h0IH0pe1xuICAgIHRoaXMuaGFzU2Nyb2xsQmFja2dyb3VuZCA9IHNjcm9sbEhlaWdodCA+IChzY3JvbGxUb3AgKyBjbGllbnRIZWlnaHQpO1xuICB9XG5cbiAgcHJpdmF0ZSBfbGlzdGVuQXV0b0NvbXBsZXRlQ2hhbmdlcygpe1xuICAgIHRoaXMub25lKCdhdy1ob21lLWF1dG9jb21wbGV0ZScpLnVwZGF0ZU9wdGlvbnMoeyBjb25maWc6IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2NvbmZpZy1rZXlzJykgfSk7XG5cbiAgICB0aGlzLmF1dG9jb21wbGV0ZUNoYW5nZWQkLnBpcGUoXG4gICAgICBkZWJvdW5jZVRpbWUoNTAwKVxuICAgICkuc3Vic2NyaWJlKHZhbHVlID0+IHtcblxuICAgICAgaWYodmFsdWUpe1xuICAgICAgICB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQoJ2F1dG9Db21wbGV0ZScsIHtcbiAgICAgICAgICBvbkVycm9yOiAoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpLFxuICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgaW5wdXQ6IHZhbHVlLFxuICAgICAgICAgICAgaXRlbXNQYWdpbmF0aW9uOnsgb2Zmc2V0OjAsIGxpbWl0OiB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdob21lLWxheW91dCcpWydyZXN1bHRzLWxpbWl0J10gfVxuICAgICAgICAgIH1cbiAgICAgICAgfSkuc3Vic2NyaWJlKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgIHRoaXMub25lKCdhdy1ob21lLWF1dG9jb21wbGV0ZScpLnVwZGF0ZShyZXNwb25zZSk7XG4gICAgICAgICAgaWYoIXRoaXMuYXV0b2NvbXBsZXRlUG9wb3Zlck9wZW4pIHRoaXMuX3RvZ2dsZUF1dG9jb21wbGV0ZVBvcG92ZXIoKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl90b2dnbGVBdXRvY29tcGxldGVQb3BvdmVyKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF90b2dnbGVBdXRvY29tcGxldGVQb3BvdmVyKCl7XG4gICAgaWYoIXRoaXMuYXV0b2NvbXBsZXRlUG9wb3Zlcil7XG4gICAgICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdy1ob21lLWFkdmFuY2VkLWF1dG9jb21wbGV0ZS1wb3BvdmVyJyk7XG4gICAgICB0ZW1wbGF0ZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgXG4gICAgICB0aGlzLmF1dG9jb21wbGV0ZVBvcG92ZXIgPSB0aGlzLnRpcHB5KCcuYXctaG9tZV9fdG9wLWhlcm8gLm43LWhlcm9fX2lucHV0Jywge1xuICAgICAgICBjb250ZW50OiB0ZW1wbGF0ZSxcbiAgICAgICAgdHJpZ2dlcjogJ21hbnVhbCcsXG4gICAgICAgIGludGVyYWN0aXZlOiB0cnVlLFxuICAgICAgICBhcnJvdzogZmFsc2UsXG4gICAgICAgIGFwcGVuZFRvOiAncGFyZW50JyxcbiAgICAgICAgdGhlbWU6ICdsaWdodC1ib3JkZXInLFxuICAgICAgICBwbGFjZW1lbnQ6ICdib3R0b20tc3RhcnQnLFxuICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICBvbkhpZGRlbjogKCkgPT4gdGhpcy5hdXRvY29tcGxldGVQb3BvdmVyT3BlbiA9IGZhbHNlLFxuICAgICAgfSlbMF07XG4gICAgfVxuICAgIFxuICAgIGlmKHRoaXMuYXV0b2NvbXBsZXRlUG9wb3Zlck9wZW4pe1xuICAgICAgdGhpcy5hdXRvY29tcGxldGVQb3BvdmVyLmhpZGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hdXRvY29tcGxldGVQb3BvdmVyLnNob3coKTtcbiAgICB9XG5cbiAgICB0aGlzLmF1dG9jb21wbGV0ZVBvcG92ZXJPcGVuID0gIXRoaXMuYXV0b2NvbXBsZXRlUG9wb3Zlck9wZW47XG4gIH1cbn0iXX0=