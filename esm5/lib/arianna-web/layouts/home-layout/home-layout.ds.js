/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { LayoutDataSource } from '@n7-frontend/core';
import { fromEvent, interval, Subject } from 'rxjs';
import { debounce, debounceTime } from 'rxjs/operators';
var AwHomeLayoutDS = /** @class */ (function (_super) {
    tslib_1.__extends(AwHomeLayoutDS, _super);
    function AwHomeLayoutDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.facetData = null;
        _this.facetInputs = {};
        // all the bubbles as they have been given by apollo
        // (the objects in the allBubbles are not the same bubble objects
        // present in the bubble chart)
        _this.allBubbles = null;
        _this.autocompletePopoverOpen = false;
        _this.autocompleteChanged$ = new Subject();
        // the bubbles currently selected (this are saved from the event handler's
        // and correspond exactly to the bubblechart's bubble objects)
        _this.selectedBubbles = [];
        _this.numOfItemsStr = null;
        // instance of the bubble chart (from which you can access all the various
        // bubble objects)
        _this._bubbleChart = null;
        // the maximum number of bubbles which can be selected at the same time
        _this.maxBubblesSelectable = 3;
        // entities have their own unique id, these ids are generic and are very flexible
        // bubbles (as the bubble chart's objects) have unique ids but do not allow certain
        // characters, so each bubble has its own id different from the id of the entity which
        // the bubble represents (given an bubble's id called bubbleId you can obtain the
        // respective entity's id with as: entityId = entityBubbleIdMap[bubbleId] )
        _this.entityBubbleIdMap = {};
        // widh of the window which is updated at each resize and it is used by the bubble
        // chart to check if the width of the window has changed during the last resize
        _this.lastWindowWidth = -1;
        _this.bubblePopup = null;
        _this.currentHoverEntity = null;
        _this.hasScrollBackground = false;
        return _this;
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    AwHomeLayoutDS.prototype.onInit = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var _this = this;
        var communication = _a.communication, mainState = _a.mainState, configuration = _a.configuration, tippy = _a.tippy;
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
            function (error) { return console.error(error); }),
        }).subscribe((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            _this.facetData = [];
            response.entitiesData.forEach((/**
             * @param {?} ent
             * @return {?}
             */
            function (ent) {
                /** @type {?} */
                var teoConfigData = _this.configuration.get("config-keys")[ent.countData.type.configKey];
                if (teoConfigData)
                    _this.facetData.push(tslib_1.__assign({}, ent.countData, teoConfigData, { enabled: true }));
            }));
            _this.one('aw-home-facets-wrapper').update(_this.facetData);
            _this.setAllBubblesFromApolloQuery(response);
            _this.renderPreviewsFromApolloQuery(response);
        }));
        // update streams
        this.mainState.update('headTitle', 'Arianna Web > Home');
        this.mainState.update('pageTitle', 'Arianna Web: Home Layout');
        this.lastWindowWidth = window.outerWidth;
        fromEvent(window, "resize").pipe(debounce((/**
         * @return {?}
         */
        function () { return interval(200); }))).
            subscribe((/**
         * @return {?}
         */
        function () {
            // only resets the bubbles if the window's width has changed
            // (if the resize only effects the window's hight then the bubble chart
            // doesn't get reset)
            if (_this.lastWindowWidth != window.outerWidth) {
                _this.lastWindowWidth = window.outerWidth;
                _this.updateBubblesAndItemPreviews(true);
            }
        }));
        // listen autocomplete changes
        this._listenAutoCompleteChanges();
    };
    /**
     * @param {?} source
     * @param {?} payload
     * @return {?}
     */
    AwHomeLayoutDS.prototype.onBubbleTooltipClick = /**
     * @param {?} source
     * @param {?} payload
     * @return {?}
     */
    function (source, payload) {
        switch (source) {
            case 'select':
                if (!payload)
                    return;
                /** @type {?} */
                var bubbleId_1 = this.convertEntityIdToBubbleId(payload.entityId);
                if (!bubbleId_1)
                    return;
                /** @type {?} */
                var bubble_1 = null;
                if (this._bubbleChart) {
                    this._bubbleChart.selectAll("g").each((/**
                     * @param {?} b
                     * @return {?}
                     */
                    function (b) {
                        if (b.id === bubbleId_1)
                            bubble_1 = b;
                    }));
                    if (bubble_1)
                        this.onBubbleSelected(bubble_1);
                }
                break;
            default:
                break;
        }
    };
    /**
     * @param {?} payload
     * @return {?}
     */
    AwHomeLayoutDS.prototype.onBubbleMouseEnter = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        var _this = this;
        if (!payload || !payload.bubble)
            return;
        /** @type {?} */
        var bubbleId = payload.bubble.id;
        /** @type {?} */
        var hoverEntityId = this.entityBubbleIdMap[payload.bubble.id];
        for (var i = 0; i < this.allBubbles.length; i++) {
            /** @type {?} */
            var bubble = this.allBubbles[i];
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
        function () {
            /** @type {?} */
            var template = document.getElementById("bubble-popup-menu");
            /** @type {?} */
            var templateClone = template.cloneNode(true);
            templateClone['style'].display = "inline-block";
            _this.bubblePopup = _this.tippy("#" + bubbleId, {
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
            function () { if (_this.bubblePopup)
                _this.bubblePopup.show(); }), 800);
        }));
    };
    /**
     * @param {?} response
     * @return {?}
     */
    AwHomeLayoutDS.prototype.renderPreviewsFromApolloQuery = /**
     * @param {?} response
     * @return {?}
     */
    function (response) {
        if (!response || !response.itemsPagination)
            return;
        /** @type {?} */
        var numOfItems = response.itemsPagination.totalCount;
        if (numOfItems > 0) {
            /** @type {?} */
            var numOfThousand = 0;
            while (numOfItems > 999) {
                numOfItems -= 1000;
                numOfThousand += 1;
            }
            /** @type {?} */
            var numOfItemsTmpStr = numOfItems + '';
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
    };
    /**
     * @param {?} bubble
     * @return {?}
     */
    AwHomeLayoutDS.prototype.onBubbleSelected = /**
     * @param {?} bubble
     * @return {?}
     */
    function (bubble) {
        if (bubble) {
            if (!this.selectedBubbles.includes(bubble)) {
                if (this.selectedBubbles.length < this.maxBubblesSelectable) {
                    this.selectedBubbles.push(bubble);
                    this.updateBubblesAndItemPreviews();
                }
            }
        }
    };
    /**
     * @param {?} payload
     * @return {?}
     */
    AwHomeLayoutDS.prototype.onBubbleDeselected = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        if (payload && payload.bubble) {
            this.selectedBubbles = this.selectedBubbles.filter((/**
             * @param {?} b
             * @return {?}
             */
            function (b) { return b.id !== payload.bubble.id; }));
            if (payload.bubble.hasCloseIcon) {
                payload.bubble.hasCloseIcon = false;
                this.updateBubblesAndItemPreviews();
            }
        }
    };
    /**
     * updates the bubble chart and the item previews based on the currently
     * selected bubbles
     *
     * @param onlyBubbles specifies if only the bubble chart should be updated,
     *                    leaving the item previews as they are
     */
    /**
     * updates the bubble chart and the item previews based on the currently
     * selected bubbles
     *
     * @private
     * @param {?=} onlyBubbles specifies if only the bubble chart should be updated,
     *                    leaving the item previews as they are
     * @return {?}
     */
    AwHomeLayoutDS.prototype.updateBubblesAndItemPreviews = /**
     * updates the bubble chart and the item previews based on the currently
     * selected bubbles
     *
     * @private
     * @param {?=} onlyBubbles specifies if only the bubble chart should be updated,
     *                    leaving the item previews as they are
     * @return {?}
     */
    function (onlyBubbles) {
        var _this = this;
        /** @type {?} */
        var selectedEntitiesIds = [];
        if (this.entityBubbleIdMap)
            this.selectedBubbles.forEach((/**
             * @param {?} sB
             * @return {?}
             */
            function (sB) {
                /** @type {?} */
                var entityId = _this.entityBubbleIdMap[sB.id];
                if (entityId)
                    selectedEntitiesIds.push(entityId);
            }));
        this.communication.request$('globalFilter', {
            onError: (/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return console.error(error); }),
            params: {
                selectedEntitiesIds: selectedEntitiesIds,
                itemsPagination: { offset: 0, limit: this.configuration.get('home-layout')['results-limit'] }
            },
        }).subscribe((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            if (!onlyBubbles) {
                _this.renderPreviewsFromApolloQuery(response);
                _this.renderItemTags();
            }
            _this.setAllBubblesFromApolloQuery(response, true);
        }));
    };
    /**
     * converts the id of an entity to the id of a bubble
     * ( // d3/svg does not allow Number as beginning of ID.
     *   // d3/svg does not allow '-' as part of ID. )
     * @param entityId id of the entity
     */
    /**
     * converts the id of an entity to the id of a bubble
     * ( // d3/svg does not allow Number as beginning of ID.
     *   // d3/svg does not allow '-' as part of ID. )
     * @private
     * @param {?} entityId id of the entity
     * @return {?}
     */
    AwHomeLayoutDS.prototype.convertEntityIdToBubbleId = /**
     * converts the id of an entity to the id of a bubble
     * ( // d3/svg does not allow Number as beginning of ID.
     *   // d3/svg does not allow '-' as part of ID. )
     * @private
     * @param {?} entityId id of the entity
     * @return {?}
     */
    function (entityId) {
        if (!entityId)
            return null;
        return ('B_' + entityId.replace(/-/g, '_'));
    };
    /**
     * sets the this.allBubbles variable based on the response apollo has given
     * for the globalFilterQuery
     *
     * @param response apollo's response
     * @param reset true if the bubble chart has to be reset/redrawn
     */
    /**
     * sets the this.allBubbles variable based on the response apollo has given
     * for the globalFilterQuery
     *
     * @param {?} response apollo's response
     * @param {?=} reset true if the bubble chart has to be reset/redrawn
     * @return {?}
     */
    AwHomeLayoutDS.prototype.setAllBubblesFromApolloQuery = /**
     * sets the this.allBubbles variable based on the response apollo has given
     * for the globalFilterQuery
     *
     * @param {?} response apollo's response
     * @param {?=} reset true if the bubble chart has to be reset/redrawn
     * @return {?}
     */
    function (response, reset) {
        var _this = this;
        if (!response || !response.entitiesData)
            return;
        this.allBubbles = [];
        for (var i = 0; i < response.entitiesData.length; i++) {
            /** @type {?} */
            var currentToE = response.entitiesData[i];
            for (var j = 0; j < currentToE.entitiesCountData.length; j++) {
                this.allBubbles.push(tslib_1.__assign({}, currentToE.entitiesCountData[j], { color: this.configuration.get("config-keys")[currentToE.countData.type.configKey]['color']['hex'] }));
            }
        }
        this.entityBubbleIdMap = {};
        this.allBubbles.forEach((/**
         * @param {?} bubble
         * @return {?}
         */
        function (bubble) {
            bubble.id = _this.convertEntityIdToBubbleId(bubble.entity.id);
            _this.entityBubbleIdMap[bubble.id] = bubble.entity.id;
            return bubble;
        }));
        this.allBubbles.forEach((/**
         * @param {?} bubble
         * @return {?}
         */
        function (bubble) {
            bubble.selected = false;
            for (var i = 0; i < _this.selectedBubbles.length; i++) {
                if (_this.selectedBubbles[i].id === bubble.id)
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
            function (bubbleCref) { return _this._bubbleChart = bubbleCref; })
        });
    };
    /**
     * @return {?}
     */
    AwHomeLayoutDS.prototype.filterBubblesBasedOnFacetsEnabled = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var result = this.allBubbles.filter((/**
         * @param {?} bubble
         * @return {?}
         */
        function (bubble) {
            for (var i = 0; i < _this.facetData.length; i++) {
                if (bubble.entity.typeOfEntity.id === _this.facetData[i].type.id)
                    if (!_this.facetData[i].enabled) {
                        return false;
                    }
            }
            return true;
        }));
        return result;
    };
    /**
     * @param {?} change
     * @return {?}
     */
    AwHomeLayoutDS.prototype.handleFacetSearchChange = /**
     * @param {?} change
     * @return {?}
     */
    function (change) {
        /** @type {?} */
        var payload = change.inputPayload;
        /** @type {?} */
        var value = change.value;
        // store the entered text in facetInputs
        this.facetInputs[payload] = value;
    };
    /**
     * @param {?} enter
     * @return {?}
     */
    AwHomeLayoutDS.prototype.handleFacetSearchEnter = /**
     * @param {?} enter
     * @return {?}
     */
    function (enter) {
        /** @type {?} */
        var payload = enter.inputPayload;
        // get the text entered in this input
        /** @type {?} */
        var value = this.facetInputs[payload];
    };
    /**
     * @param {?} facetId
     * @return {?}
     */
    AwHomeLayoutDS.prototype.handleFacetHeaderClick = /**
     * @param {?} facetId
     * @return {?}
     */
    function (facetId) {
        var _this = this;
        /** @type {?} */
        var updateBubbles = false;
        /** @type {?} */
        var enabledFacets = this.facetData.filter((/**
         * @param {?} f
         * @return {?}
         */
        function (f) { return f.enabled; })).length;
        this.facetData.forEach((/**
         * @param {?} f
         * @return {?}
         */
        function (f) {
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
            var disableFacetsIds_1 = [];
            this.facetData.forEach((/**
             * @param {?} fD
             * @return {?}
             */
            function (fD) {
                if (!fD.enabled)
                    disableFacetsIds_1.push(fD.type.id);
            }));
            if (disableFacetsIds_1) {
                /** @type {?} */
                var filteredSelectedBubbles = this.selectedBubbles.filter((/**
                 * @param {?} bubble
                 * @return {?}
                 */
                function (bubble) {
                    /** @type {?} */
                    var typeOfEntity = "";
                    for (var i = 0; i < _this.allBubbles.length; i++) {
                        if (_this.allBubbles[i].id === bubble.id) {
                            typeOfEntity = _this.allBubbles[i].entity.typeOfEntity.id;
                            break;
                        }
                    }
                    if (disableFacetsIds_1.includes(typeOfEntity))
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
            function (bubble) {
                bubble.selected = false;
                for (var i = 0; i < _this.selectedBubbles.length; i++) {
                    if (_this.selectedBubbles[i].id === bubble.id)
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
                function (bubbleCref) { return _this._bubbleChart = bubbleCref; }),
                reset: true
            });
        }
    };
    /**
     * @return {?}
     */
    AwHomeLayoutDS.prototype.renderItemTags = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var tagsData = [];
        this.selectedBubbles.forEach((/**
         * @param {?} sBubble
         * @return {?}
         */
        function (sBubble) {
            /** @type {?} */
            var label = '';
            for (var i = 0; i < _this.allBubbles.length; i++) {
                if (_this.allBubbles[i].id === sBubble.id) {
                    label = _this.allBubbles[i].entity.label;
                    break;
                }
            }
            tagsData.push({ label: label, icon: "n7-icon-close", payload: sBubble.id, classes: "tag-" + _this.allBubbles[i].entity.typeOfEntity.id });
        }));
        this.one('aw-home-item-tags-wrapper').update(tagsData);
    };
    /**
     * @param {?} payload
     * @return {?}
     */
    AwHomeLayoutDS.prototype.onTagClicked = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        if (!payload)
            return;
        /** @type {?} */
        var bubbleId = payload;
        if (this._bubbleChart) {
            this._bubbleChart.selectAll("g").each((/**
             * @param {?} b
             * @return {?}
             */
            function (b) {
                if (b.id === bubbleId)
                    b.hasCloseIcon = false;
            }));
        }
        this.selectedBubbles = this.selectedBubbles.filter((/**
         * @param {?} b
         * @return {?}
         */
        function (b) { return b.id !== payload; }));
        this.updateBubblesAndItemPreviews();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    AwHomeLayoutDS.prototype.onHeroChange = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.autocompleteChanged$.next(value);
    };
    /**
     * @private
     * @return {?}
     */
    AwHomeLayoutDS.prototype._getSubnav = /**
     * @private
     * @return {?}
     */
    function () {
        return ['home', 'results', 'single'].map((/**
         * @param {?} page
         * @return {?}
         */
        function (page) { return ({
            text: page.toUpperCase(),
            payload: {
                source: 'navigate',
                handler: 'router',
                path: ["aw/" + page],
                id: page
            },
            _meta: { id: page }
        }); }));
    };
    /**
     * @private
     * @return {?}
     */
    AwHomeLayoutDS.prototype._getBreadcrumbs = /**
     * @private
     * @return {?}
     */
    function () {
        return {
            items: [{
                    label: 'Arianna Web',
                    payload: {
                        source: 'navigate',
                        handler: 'router',
                        path: ["aw/home"]
                    }
                },
                {
                    label: 'Home Layout',
                    payload: {
                        source: 'navigate',
                        handler: 'router',
                        path: ["aw/home"]
                    }
                }]
        };
    };
    /**
     * @private
     * @return {?}
     */
    AwHomeLayoutDS.prototype._scrollBackgroundControl = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var el = document.getElementById('bubble-results-list');
        /** @type {?} */
        var source$ = fromEvent(document.getElementById('bubble-results-list'), 'scroll');
        // height control
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this._setHasScrollBackground(el);
        }), 500);
        // scroll listen
        source$.pipe(debounceTime(50)).subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var target = _a.target;
            _this._setHasScrollBackground(target);
        }));
    };
    /**
     * @private
     * @param {?} __0
     * @return {?}
     */
    AwHomeLayoutDS.prototype._setHasScrollBackground = /**
     * @private
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var scrollTop = _a.scrollTop, scrollHeight = _a.scrollHeight, clientHeight = _a.clientHeight;
        this.hasScrollBackground = scrollHeight > (scrollTop + clientHeight);
    };
    /**
     * @private
     * @return {?}
     */
    AwHomeLayoutDS.prototype._listenAutoCompleteChanges = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.one('aw-home-autocomplete').updateOptions({ config: this.configuration.get('config-keys') });
        this.autocompleteChanged$.pipe(debounceTime(500)).subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                _this.communication.request$('autoComplete', {
                    onError: (/**
                     * @param {?} error
                     * @return {?}
                     */
                    function (error) { return console.error(error); }),
                    params: {
                        input: value,
                        itemsPagination: { offset: 0, limit: _this.configuration.get('home-layout')['results-limit'] }
                    }
                }).subscribe((/**
                 * @param {?} response
                 * @return {?}
                 */
                function (response) {
                    _this.one('aw-home-autocomplete').update(response);
                    if (!_this.autocompletePopoverOpen)
                        _this._toggleAutocompletePopover();
                }));
            }
            else {
                _this._toggleAutocompletePopover();
            }
        }));
    };
    /**
     * @private
     * @return {?}
     */
    AwHomeLayoutDS.prototype._toggleAutocompletePopover = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.autocompletePopover) {
            /** @type {?} */
            var template = document.getElementById('aw-home-advanced-autocomplete-popover');
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
                function () { return _this.autocompletePopoverOpen = false; }),
            })[0];
        }
        if (this.autocompletePopoverOpen) {
            this.autocompletePopover.hide();
        }
        else {
            this.autocompletePopover.show();
        }
        this.autocompletePopoverOpen = !this.autocompletePopoverOpen;
    };
    return AwHomeLayoutDS;
}(LayoutDataSource));
export { AwHomeLayoutDS };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1sYXlvdXQuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvbGF5b3V0cy9ob21lLWxheW91dC9ob21lLWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNwRCxPQUFPLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXhEO0lBQW9DLDBDQUFnQjtJQUFwRDtRQUFBLHFFQW9lQztRQS9kUyxlQUFTLEdBQVUsSUFBSSxDQUFDO1FBQ3hCLGlCQUFXLEdBQVEsRUFBRSxDQUFDOzs7O1FBSXRCLGdCQUFVLEdBQVUsSUFBSSxDQUFDO1FBRXpCLDZCQUF1QixHQUFZLEtBQUssQ0FBQztRQUN6QywwQkFBb0IsR0FBb0IsSUFBSSxPQUFPLEVBQUUsQ0FBQzs7O1FBR3ZELHFCQUFlLEdBQVUsRUFBRSxDQUFDO1FBQzVCLG1CQUFhLEdBQVcsSUFBSSxDQUFDOzs7UUFHNUIsa0JBQVksR0FBUSxJQUFJLENBQUM7O1FBRXpCLDBCQUFvQixHQUFVLENBQUMsQ0FBQzs7Ozs7O1FBTWhDLHVCQUFpQixHQUFRLEVBQUUsQ0FBQzs7O1FBRzVCLHFCQUFlLEdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDN0IsaUJBQVcsR0FBUSxJQUFJLENBQUM7UUFDekIsd0JBQWtCLEdBQVEsSUFBSSxDQUFDO1FBQy9CLHlCQUFtQixHQUFZLEtBQUssQ0FBQzs7SUFrYzlDLENBQUM7Ozs7O0lBaGNDLCtCQUFNOzs7O0lBQU4sVUFBTyxFQUFrRDtRQUF6RCxpQkE2Q0M7WUE3Q1EsZ0NBQWEsRUFBRSx3QkFBUyxFQUFFLGdDQUFhLEVBQUUsZ0JBQUs7UUFD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OztJQW5lQyx1Q0FBMkI7Ozs7O0lBQzNCLG1DQUF1Qjs7Ozs7SUFDdkIsK0JBQW1COzs7OztJQUNuQix1Q0FBMkI7Ozs7O0lBQzNCLG1DQUFnQzs7Ozs7SUFDaEMscUNBQThCOzs7OztJQUk5QixvQ0FBaUM7Ozs7O0lBQ2pDLDZDQUFpQzs7Ozs7SUFDakMsaURBQWlEOzs7OztJQUNqRCw4Q0FBOEQ7O0lBRzlELHlDQUFtQzs7SUFDbkMsdUNBQW9DOzs7OztJQUdwQyxzQ0FBaUM7Ozs7O0lBRWpDLDhDQUF3Qzs7Ozs7SUFNeEMsMkNBQW9DOzs7OztJQUdwQyx5Q0FBcUM7Ozs7O0lBQ3JDLHFDQUFnQzs7SUFDaEMsNENBQXNDOztJQUN0Qyw2Q0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMYXlvdXREYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgZnJvbUV2ZW50LCBpbnRlcnZhbCwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2UsIGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuZXhwb3J0IGNsYXNzIEF3SG9tZUxheW91dERTIGV4dGVuZHMgTGF5b3V0RGF0YVNvdXJjZSB7XG4gIHByaXZhdGUgY29tbXVuaWNhdGlvbjogYW55O1xuICBwcml2YXRlIG1haW5TdGF0ZTogYW55O1xuICBwcml2YXRlIHRpcHB5OiBhbnk7XG4gIHByaXZhdGUgY29uZmlndXJhdGlvbjogYW55O1xuICBwcml2YXRlIGZhY2V0RGF0YTogYW55W10gPSBudWxsO1xuICBwcml2YXRlIGZhY2V0SW5wdXRzOiBhbnkgPSB7fTtcbiAgLy8gYWxsIHRoZSBidWJibGVzIGFzIHRoZXkgaGF2ZSBiZWVuIGdpdmVuIGJ5IGFwb2xsb1xuICAvLyAodGhlIG9iamVjdHMgaW4gdGhlIGFsbEJ1YmJsZXMgYXJlIG5vdCB0aGUgc2FtZSBidWJibGUgb2JqZWN0c1xuICAvLyBwcmVzZW50IGluIHRoZSBidWJibGUgY2hhcnQpXG4gIHByaXZhdGUgYWxsQnViYmxlczogYW55W10gPSBudWxsO1xuICBwcml2YXRlIGF1dG9jb21wbGV0ZVBvcG92ZXI6IGFueTtcbiAgcHJpdmF0ZSBhdXRvY29tcGxldGVQb3BvdmVyT3BlbjogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIGF1dG9jb21wbGV0ZUNoYW5nZWQkOiBTdWJqZWN0PHN0cmluZz4gPSBuZXcgU3ViamVjdCgpO1xuICAvLyB0aGUgYnViYmxlcyBjdXJyZW50bHkgc2VsZWN0ZWQgKHRoaXMgYXJlIHNhdmVkIGZyb20gdGhlIGV2ZW50IGhhbmRsZXInc1xuICAvLyBhbmQgY29ycmVzcG9uZCBleGFjdGx5IHRvIHRoZSBidWJibGVjaGFydCdzIGJ1YmJsZSBvYmplY3RzKVxuICBwdWJsaWMgc2VsZWN0ZWRCdWJibGVzOiBhbnlbXSA9IFtdO1xuICBwdWJsaWMgbnVtT2ZJdGVtc1N0cjogc3RyaW5nID0gbnVsbDtcbiAgLy8gaW5zdGFuY2Ugb2YgdGhlIGJ1YmJsZSBjaGFydCAoZnJvbSB3aGljaCB5b3UgY2FuIGFjY2VzcyBhbGwgdGhlIHZhcmlvdXNcbiAgLy8gYnViYmxlIG9iamVjdHMpXG4gIHByaXZhdGUgX2J1YmJsZUNoYXJ0OiBhbnkgPSBudWxsO1xuICAvLyB0aGUgbWF4aW11bSBudW1iZXIgb2YgYnViYmxlcyB3aGljaCBjYW4gYmUgc2VsZWN0ZWQgYXQgdGhlIHNhbWUgdGltZVxuICBwcml2YXRlIG1heEJ1YmJsZXNTZWxlY3RhYmxlOm51bWJlciA9IDM7XG4gIC8vIGVudGl0aWVzIGhhdmUgdGhlaXIgb3duIHVuaXF1ZSBpZCwgdGhlc2UgaWRzIGFyZSBnZW5lcmljIGFuZCBhcmUgdmVyeSBmbGV4aWJsZVxuICAvLyBidWJibGVzIChhcyB0aGUgYnViYmxlIGNoYXJ0J3Mgb2JqZWN0cykgaGF2ZSB1bmlxdWUgaWRzIGJ1dCBkbyBub3QgYWxsb3cgY2VydGFpblxuICAvLyBjaGFyYWN0ZXJzLCBzbyBlYWNoIGJ1YmJsZSBoYXMgaXRzIG93biBpZCBkaWZmZXJlbnQgZnJvbSB0aGUgaWQgb2YgdGhlIGVudGl0eSB3aGljaFxuICAvLyB0aGUgYnViYmxlIHJlcHJlc2VudHMgKGdpdmVuIGFuIGJ1YmJsZSdzIGlkIGNhbGxlZCBidWJibGVJZCB5b3UgY2FuIG9idGFpbiB0aGVcbiAgLy8gcmVzcGVjdGl2ZSBlbnRpdHkncyBpZCB3aXRoIGFzOiBlbnRpdHlJZCA9IGVudGl0eUJ1YmJsZUlkTWFwW2J1YmJsZUlkXSApXG4gIHByaXZhdGUgZW50aXR5QnViYmxlSWRNYXA6IGFueSA9IHt9O1xuICAvLyB3aWRoIG9mIHRoZSB3aW5kb3cgd2hpY2ggaXMgdXBkYXRlZCBhdCBlYWNoIHJlc2l6ZSBhbmQgaXQgaXMgdXNlZCBieSB0aGUgYnViYmxlXG4gIC8vIGNoYXJ0IHRvIGNoZWNrIGlmIHRoZSB3aWR0aCBvZiB0aGUgd2luZG93IGhhcyBjaGFuZ2VkIGR1cmluZyB0aGUgbGFzdCByZXNpemVcbiAgcHJpdmF0ZSBsYXN0V2luZG93V2lkdGg6IG51bWJlciA9IC0xO1xuICBwcml2YXRlIGJ1YmJsZVBvcHVwOiBhbnkgPSBudWxsO1xuICBwdWJsaWMgY3VycmVudEhvdmVyRW50aXR5OiBhbnkgPSBudWxsO1xuICBwdWJsaWMgaGFzU2Nyb2xsQmFja2dyb3VuZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIG9uSW5pdCh7IGNvbW11bmljYXRpb24sIG1haW5TdGF0ZSwgY29uZmlndXJhdGlvbiwgdGlwcHkgfSl7XG4gICAgdGhpcy5jb21tdW5pY2F0aW9uID0gY29tbXVuaWNhdGlvbjtcbiAgICB0aGlzLnRpcHB5ID0gdGlwcHk7XG4gICAgdGhpcy5tYWluU3RhdGUgPSBtYWluU3RhdGU7XG4gICAgdGhpcy5jb25maWd1cmF0aW9uID0gY29uZmlndXJhdGlvbjtcblxuICAgIHRoaXMub25lKCdhdy1oZXJvJykudXBkYXRlKHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2hvbWUtbGF5b3V0JylbJ3RvcC1oZXJvJ10pO1xuICAgIHRoaXMub25lKCdhdy1ob21lLWhlcm8tcGF0cmltb25pbycpLnVwZGF0ZSh0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdob21lLWxheW91dCcpWydib3R0b20taGVybyddKTtcblxuICAgIHRoaXMuY29tbXVuaWNhdGlvbi5yZXF1ZXN0JCgnZ2xvYmFsRmlsdGVyJywge1xuICAgICAgb25FcnJvcjogKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSxcbiAgICB9KS5zdWJzY3JpYmUoKHJlc3BvbnNlKSA9PiB7XG4gICAgICB0aGlzLmZhY2V0RGF0YSA9IFtdO1xuICAgICAgcmVzcG9uc2UuZW50aXRpZXNEYXRhLmZvckVhY2goIChlbnQpID0+IHtcbiAgICAgICAgY29uc3QgdGVvQ29uZmlnRGF0YSA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoXCJjb25maWcta2V5c1wiKVtlbnQuY291bnREYXRhLnR5cGUuY29uZmlnS2V5XTtcbiAgICAgICAgaWYodGVvQ29uZmlnRGF0YSlcbiAgICAgICAgICB0aGlzLmZhY2V0RGF0YS5wdXNoKHtcbiAgICAgICAgICAgIC4uLmVudC5jb3VudERhdGEsXG4gICAgICAgICAgICAuLi50ZW9Db25maWdEYXRhLFxuICAgICAgICAgICAgZW5hYmxlZDp0cnVlLFxuICAgICAgICAgIH0pO1xuICAgICAgfSApO1xuICAgICAgdGhpcy5vbmUoJ2F3LWhvbWUtZmFjZXRzLXdyYXBwZXInKS51cGRhdGUodGhpcy5mYWNldERhdGEpO1xuICAgICAgdGhpcy5zZXRBbGxCdWJibGVzRnJvbUFwb2xsb1F1ZXJ5KHJlc3BvbnNlKTtcbiAgICAgIHRoaXMucmVuZGVyUHJldmlld3NGcm9tQXBvbGxvUXVlcnkocmVzcG9uc2UpO1xuICAgIH0pO1xuXG4gICAgLy8gdXBkYXRlIHN0cmVhbXNcbiAgICB0aGlzLm1haW5TdGF0ZS51cGRhdGUoJ2hlYWRUaXRsZScsICdBcmlhbm5hIFdlYiA+IEhvbWUnKTtcbiAgICB0aGlzLm1haW5TdGF0ZS51cGRhdGUoJ3BhZ2VUaXRsZScsICdBcmlhbm5hIFdlYjogSG9tZSBMYXlvdXQnKTtcblxuICAgIHRoaXMubGFzdFdpbmRvd1dpZHRoPXdpbmRvdy5vdXRlcldpZHRoO1xuICAgIGZyb21FdmVudCggd2luZG93ICwgXCJyZXNpemVcIiApLnBpcGUoZGVib3VuY2UoKCkgPT4gaW50ZXJ2YWwoMjAwKSkpLlxuICAgIHN1YnNjcmliZSggKCkgPT4ge1xuICAgICAgLy8gb25seSByZXNldHMgdGhlIGJ1YmJsZXMgaWYgdGhlIHdpbmRvdydzIHdpZHRoIGhhcyBjaGFuZ2VkXG4gICAgICAvLyAoaWYgdGhlIHJlc2l6ZSBvbmx5IGVmZmVjdHMgdGhlIHdpbmRvdydzIGhpZ2h0IHRoZW4gdGhlIGJ1YmJsZSBjaGFydFxuICAgICAgLy8gZG9lc24ndCBnZXQgcmVzZXQpXG4gICAgICBpZih0aGlzLmxhc3RXaW5kb3dXaWR0aCE9d2luZG93Lm91dGVyV2lkdGgpe1xuICAgICAgICB0aGlzLmxhc3RXaW5kb3dXaWR0aD13aW5kb3cub3V0ZXJXaWR0aDtcbiAgICAgICAgdGhpcy51cGRhdGVCdWJibGVzQW5kSXRlbVByZXZpZXdzKHRydWUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gbGlzdGVuIGF1dG9jb21wbGV0ZSBjaGFuZ2VzXG4gICAgdGhpcy5fbGlzdGVuQXV0b0NvbXBsZXRlQ2hhbmdlcygpO1xuICB9XG5cbiAgb25CdWJibGVUb29sdGlwQ2xpY2soc291cmNlOnN0cmluZywgcGF5bG9hZCl7XG4gICAgc3dpdGNoKHNvdXJjZSl7XG4gICAgICBjYXNlICdzZWxlY3QnOlxuICAgICAgICBpZighcGF5bG9hZCkgcmV0dXJuO1xuICAgICAgICBjb25zdCBidWJibGVJZCA9IHRoaXMuY29udmVydEVudGl0eUlkVG9CdWJibGVJZChwYXlsb2FkLmVudGl0eUlkKTtcbiAgICAgICAgaWYoIWJ1YmJsZUlkKSByZXR1cm47XG4gICAgICAgIGxldCBidWJibGUgPSBudWxsO1xuICAgICAgICBpZih0aGlzLl9idWJibGVDaGFydCl7XG4gICAgICAgICAgdGhpcy5fYnViYmxlQ2hhcnQuc2VsZWN0QWxsKGBnYCkuZWFjaCggYiA9PiB7XG4gICAgICAgICAgICBpZihiLmlkPT09YnViYmxlSWQpIGJ1YmJsZT1iO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmKGJ1YmJsZSkgdGhpcy5vbkJ1YmJsZVNlbGVjdGVkKGJ1YmJsZSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBvbkJ1YmJsZU1vdXNlRW50ZXIocGF5bG9hZCl7XG4gICAgaWYoIXBheWxvYWQgfHwgIXBheWxvYWQuYnViYmxlKSByZXR1cm47XG4gICAgY29uc3QgYnViYmxlSWQgPSBwYXlsb2FkLmJ1YmJsZS5pZDtcbiAgICBsZXQgaG92ZXJFbnRpdHlJZCA9IHRoaXMuZW50aXR5QnViYmxlSWRNYXBbcGF5bG9hZC5idWJibGUuaWRdO1xuICAgIGZvcih2YXIgaT0wO2k8dGhpcy5hbGxCdWJibGVzLmxlbmd0aDtpKyspe1xuICAgICAgbGV0IGJ1YmJsZSA9IHRoaXMuYWxsQnViYmxlc1tpXTtcbiAgICAgIGlmKGJ1YmJsZS5lbnRpdHkuaWQ9PT1ob3ZlckVudGl0eUlkKXtcbiAgICAgICAgdGhpcy5jdXJyZW50SG92ZXJFbnRpdHkgPSBidWJibGUuZW50aXR5O1xuICAgICAgICB0aGlzLmN1cnJlbnRIb3ZlckVudGl0eS5jb3VudCA9IGJ1YmJsZS5jb3VudDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIGlmKHRoaXMuYnViYmxlUG9wdXApe1xuICAgICAgdGhpcy5idWJibGVQb3B1cC5oaWRlKCk7XG4gICAgICB0aGlzLmJ1YmJsZVBvcHVwLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMuYnViYmxlUG9wdXAgPSBudWxsO1xuICAgIH1cbiAgICBzZXRUaW1lb3V0KCAoKSA9PiB7XG4gICAgICBsZXQgdGVtcGxhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1YmJsZS1wb3B1cC1tZW51XCIpO1xuICAgICAgbGV0IHRlbXBsYXRlQ2xvbmUgPSB0ZW1wbGF0ZS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICB0ZW1wbGF0ZUNsb25lWydzdHlsZSddLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xuICAgICAgdGhpcy5idWJibGVQb3B1cCA9IHRoaXMudGlwcHkoYCMke2J1YmJsZUlkfWAsIHtcbiAgICAgICAgY29udGVudDogdGVtcGxhdGVDbG9uZSxcbiAgICAgICAgdHJpZ2dlcjogJ21hbnVhbCcsXG4gICAgICAgIGludGVyYWN0aXZlOiB0cnVlLFxuICAgICAgICBhcnJvdzogdHJ1ZSxcbiAgICAgICAgdGhlbWU6ICdsaWdodC1ib3JkZXIgbm8tcGFkZGluZycsXG4gICAgICAgIHBsYWNlbWVudDogJ3RvcC1taWRkbGUnLFxuICAgICAgICBtYXhXaWR0aDogNTAwLFxuICAgICAgICAvL29uSGlkZGVuOiAoKSA9PiBjb25zb2xlLmxvZygnaGlkZGVuJyksXG4gICAgICB9KVswXTtcbiAgICAgIHNldFRpbWVvdXQoICgpID0+IHsgaWYodGhpcy5idWJibGVQb3B1cCkgdGhpcy5idWJibGVQb3B1cC5zaG93KCkgfSAsIDgwMCApO1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyUHJldmlld3NGcm9tQXBvbGxvUXVlcnkocmVzcG9uc2U6IGFueSl7XG4gICAgaWYoIXJlc3BvbnNlIHx8ICFyZXNwb25zZS5pdGVtc1BhZ2luYXRpb24pIHJldHVybjtcblxuICAgIGxldCBudW1PZkl0ZW1zID0gcmVzcG9uc2UuaXRlbXNQYWdpbmF0aW9uLnRvdGFsQ291bnQ7XG4gICAgaWYobnVtT2ZJdGVtcz4wKXtcbiAgICAgIGxldCBudW1PZlRob3VzYW5kID0gMDtcbiAgICAgIHdoaWxlKG51bU9mSXRlbXM+OTk5KXtcbiAgICAgICAgbnVtT2ZJdGVtcy09MTAwMDtcbiAgICAgICAgbnVtT2ZUaG91c2FuZCArPSAxO1xuICAgICAgfVxuICAgICAgbGV0IG51bU9mSXRlbXNUbXBTdHIgPSBudW1PZkl0ZW1zICsgJyc7XG4gICAgICBpZihudW1PZkl0ZW1zPDEwKSBudW1PZkl0ZW1zVG1wU3RyID0gJzAwJytudW1PZkl0ZW1zO1xuICAgICAgZWxzZSBpZihudW1PZkl0ZW1zPDEwMCkgbnVtT2ZJdGVtc1RtcFN0ciA9ICcwJytudW1PZkl0ZW1zO1xuICAgICAgaWYobnVtT2ZUaG91c2FuZD4wKVxuICAgICAgICB0aGlzLm51bU9mSXRlbXNTdHIgPSBudW1PZlRob3VzYW5kKycuJytudW1PZkl0ZW1zVG1wU3RyO1xuICAgICAgZWxzZVxuICAgICAgIHRoaXMubnVtT2ZJdGVtc1N0ciA9IG51bU9mSXRlbXMrJyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubnVtT2ZJdGVtc1N0ciA9IG51bGw7XG4gICAgfVxuXG4gICAgdGhpcy5vbmUoJ2F3LWxpbmtlZC1vYmplY3RzJykudXBkYXRlT3B0aW9ucyh7IGNvbnRleHQ6ICdob21lJywgY29uZmlnS2V5czogdGhpcy5jb25maWd1cmF0aW9uLmdldCgnY29uZmlnLWtleXMnKX0pXG4gICAgdGhpcy5vbmUoJ2F3LWxpbmtlZC1vYmplY3RzJykudXBkYXRlKHJlc3BvbnNlLml0ZW1zUGFnaW5hdGlvbi5pdGVtcyk7XG5cbiAgICAvLyBzY3JvbGwgY29udHJvbFxuICAgIHRoaXMuX3Njcm9sbEJhY2tncm91bmRDb250cm9sKCk7XG4gIH1cblxuICBwdWJsaWMgb25CdWJibGVTZWxlY3RlZChidWJibGUpe1xuICAgIGlmKGJ1YmJsZSl7XG4gICAgICBpZighdGhpcy5zZWxlY3RlZEJ1YmJsZXMuaW5jbHVkZXMoYnViYmxlKSl7XG4gICAgICAgIGlmKHRoaXMuc2VsZWN0ZWRCdWJibGVzLmxlbmd0aDx0aGlzLm1heEJ1YmJsZXNTZWxlY3RhYmxlKXtcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkQnViYmxlcy5wdXNoKGJ1YmJsZSk7XG4gICAgICAgICAgdGhpcy51cGRhdGVCdWJibGVzQW5kSXRlbVByZXZpZXdzKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb25CdWJibGVEZXNlbGVjdGVkKHBheWxvYWQpe1xuICAgIGlmKHBheWxvYWQgJiYgcGF5bG9hZC5idWJibGUpe1xuICAgICAgdGhpcy5zZWxlY3RlZEJ1YmJsZXMgPSB0aGlzLnNlbGVjdGVkQnViYmxlcy5maWx0ZXIoXG4gICAgICAgIChiKSA9PiBiLmlkIT09cGF5bG9hZC5idWJibGUuaWQgKTtcbiAgICAgIGlmKHBheWxvYWQuYnViYmxlLmhhc0Nsb3NlSWNvbil7XG4gICAgICAgIHBheWxvYWQuYnViYmxlLmhhc0Nsb3NlSWNvbj1mYWxzZTtcbiAgICAgICAgdGhpcy51cGRhdGVCdWJibGVzQW5kSXRlbVByZXZpZXdzKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIHVwZGF0ZXMgdGhlIGJ1YmJsZSBjaGFydCBhbmQgdGhlIGl0ZW0gcHJldmlld3MgYmFzZWQgb24gdGhlIGN1cnJlbnRseVxuICAgKiBzZWxlY3RlZCBidWJibGVzXG4gICAqXG4gICAqIEBwYXJhbSBvbmx5QnViYmxlcyBzcGVjaWZpZXMgaWYgb25seSB0aGUgYnViYmxlIGNoYXJ0IHNob3VsZCBiZSB1cGRhdGVkLFxuICAgKiAgICAgICAgICAgICAgICAgICAgbGVhdmluZyB0aGUgaXRlbSBwcmV2aWV3cyBhcyB0aGV5IGFyZVxuICAgKi9cbiAgcHJpdmF0ZSB1cGRhdGVCdWJibGVzQW5kSXRlbVByZXZpZXdzKG9ubHlCdWJibGVzPzpib29sZWFuKXtcbiAgICBsZXQgc2VsZWN0ZWRFbnRpdGllc0lkcyA9IFtdO1xuICAgIGlmKHRoaXMuZW50aXR5QnViYmxlSWRNYXApXG4gICAgdGhpcy5zZWxlY3RlZEJ1YmJsZXMuZm9yRWFjaCggKHNCKSA9PiB7XG4gICAgICBsZXQgZW50aXR5SWQgPSB0aGlzLmVudGl0eUJ1YmJsZUlkTWFwW3NCLmlkXTtcbiAgICAgIGlmKGVudGl0eUlkKVxuICAgICAgICBzZWxlY3RlZEVudGl0aWVzSWRzLnB1c2goZW50aXR5SWQpO1xuICAgIH0pO1xuICAgIHRoaXMuY29tbXVuaWNhdGlvbi5yZXF1ZXN0JCgnZ2xvYmFsRmlsdGVyJywge1xuICAgICAgb25FcnJvcjogKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSxcbiAgICAgIHBhcmFtczoge1xuICAgICAgICBzZWxlY3RlZEVudGl0aWVzSWRzLFxuICAgICAgICBpdGVtc1BhZ2luYXRpb246eyBvZmZzZXQ6MCwgbGltaXQ6IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2hvbWUtbGF5b3V0JylbJ3Jlc3VsdHMtbGltaXQnXSB9XG4gICAgICB9LFxuICAgIH0pLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcbiAgICAgIGlmKCFvbmx5QnViYmxlcyl7XG4gICAgICAgIHRoaXMucmVuZGVyUHJldmlld3NGcm9tQXBvbGxvUXVlcnkocmVzcG9uc2UpO1xuICAgICAgICB0aGlzLnJlbmRlckl0ZW1UYWdzKCk7XG4gICAgICB9XG4gICAgICB0aGlzLnNldEFsbEJ1YmJsZXNGcm9tQXBvbGxvUXVlcnkocmVzcG9uc2UsdHJ1ZSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogY29udmVydHMgdGhlIGlkIG9mIGFuIGVudGl0eSB0byB0aGUgaWQgb2YgYSBidWJibGVcbiAgICogKCAvLyBkMy9zdmcgZG9lcyBub3QgYWxsb3cgTnVtYmVyIGFzIGJlZ2lubmluZyBvZiBJRC5cbiAgICogICAvLyBkMy9zdmcgZG9lcyBub3QgYWxsb3cgJy0nIGFzIHBhcnQgb2YgSUQuIClcbiAgICogQHBhcmFtIGVudGl0eUlkIGlkIG9mIHRoZSBlbnRpdHlcbiAgICovXG4gIHByaXZhdGUgY29udmVydEVudGl0eUlkVG9CdWJibGVJZChlbnRpdHlJZDpzdHJpbmcpIDpzdHJpbmcge1xuICAgIGlmKCFlbnRpdHlJZCkgcmV0dXJuIG51bGw7XG4gICAgcmV0dXJuICggJ0JfJytlbnRpdHlJZC5yZXBsYWNlKC8tL2csJ18nKSApO1xuICB9XG5cbiAgLyoqXG4gICAqIHNldHMgdGhlIHRoaXMuYWxsQnViYmxlcyB2YXJpYWJsZSBiYXNlZCBvbiB0aGUgcmVzcG9uc2UgYXBvbGxvIGhhcyBnaXZlblxuICAgKiBmb3IgdGhlIGdsb2JhbEZpbHRlclF1ZXJ5XG4gICAqXG4gICAqIEBwYXJhbSByZXNwb25zZSBhcG9sbG8ncyByZXNwb25zZVxuICAgKiBAcGFyYW0gcmVzZXQgdHJ1ZSBpZiB0aGUgYnViYmxlIGNoYXJ0IGhhcyB0byBiZSByZXNldC9yZWRyYXduXG4gICAqL1xuICBzZXRBbGxCdWJibGVzRnJvbUFwb2xsb1F1ZXJ5KHJlc3BvbnNlOiBhbnkscmVzZXQ/OmJvb2xlYW4pe1xuICAgIGlmKCAhcmVzcG9uc2UgfHwgIXJlc3BvbnNlLmVudGl0aWVzRGF0YSApIHJldHVybjtcbiAgICB0aGlzLmFsbEJ1YmJsZXMgPSBbXTtcbiAgICBmb3IodmFyIGk9MDtpPHJlc3BvbnNlLmVudGl0aWVzRGF0YS5sZW5ndGg7aSsrKXtcbiAgICAgIGxldCBjdXJyZW50VG9FID0gcmVzcG9uc2UuZW50aXRpZXNEYXRhW2ldO1xuICAgICAgZm9yKHZhciBqPTA7ajxjdXJyZW50VG9FLmVudGl0aWVzQ291bnREYXRhLmxlbmd0aDtqKyspe1xuICAgICAgICB0aGlzLmFsbEJ1YmJsZXMucHVzaChcbiAgICAgICAgICB7XG4gICAgICAgICAgICAuLi5jdXJyZW50VG9FLmVudGl0aWVzQ291bnREYXRhW2pdLFxuICAgICAgICAgICAgY29sb3I6IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoXCJjb25maWcta2V5c1wiKVtjdXJyZW50VG9FLmNvdW50RGF0YS50eXBlLmNvbmZpZ0tleV1bJ2NvbG9yJ11bJ2hleCddXG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuZW50aXR5QnViYmxlSWRNYXAgPSB7fTtcbiAgICB0aGlzLmFsbEJ1YmJsZXMuZm9yRWFjaCggKGJ1YmJsZSkgPT4ge1xuICAgICAgYnViYmxlLmlkID0gdGhpcy5jb252ZXJ0RW50aXR5SWRUb0J1YmJsZUlkKGJ1YmJsZS5lbnRpdHkuaWQpO1xuICAgICAgdGhpcy5lbnRpdHlCdWJibGVJZE1hcFtidWJibGUuaWRdPWJ1YmJsZS5lbnRpdHkuaWQ7XG4gICAgICByZXR1cm4gYnViYmxlO1xuICAgIH0pO1xuICAgIHRoaXMuYWxsQnViYmxlcy5mb3JFYWNoKCAoYnViYmxlKSA9PiB7XG4gICAgICBidWJibGUuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgIGZvcih2YXIgaT0wOyBpPHRoaXMuc2VsZWN0ZWRCdWJibGVzLmxlbmd0aDtpKyspe1xuICAgICAgICBpZih0aGlzLnNlbGVjdGVkQnViYmxlc1tpXS5pZD09PWJ1YmJsZS5pZCkgYnViYmxlLnNlbGVjdGVkPXRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5vbmUoJ2F3LWhvbWUtYnViYmxlLWNoYXJ0JykudXBkYXRlKHtcbiAgICAgIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aC8xLjgsXG4gICAgICBidWJibGVzOiB0aGlzLmZpbHRlckJ1YmJsZXNCYXNlZE9uRmFjZXRzRW5hYmxlZCgpLFxuICAgICAgcmVzZXQ6ICggcmVzZXQ/IHJlc2V0IDogZmFsc2UgKSxcbiAgICAgIHNldEJ1YmJsZUNoYXJ0OiAoYnViYmxlQ3JlZikgPT4gdGhpcy5fYnViYmxlQ2hhcnQgPSBidWJibGVDcmVmXG4gICAgfSk7XG4gIH1cblxuICBmaWx0ZXJCdWJibGVzQmFzZWRPbkZhY2V0c0VuYWJsZWQoKXtcbiAgICBsZXQgcmVzdWx0ID0gdGhpcy5hbGxCdWJibGVzLmZpbHRlcihcbiAgICAgIChidWJibGUpID0+IHtcbiAgICAgICAgZm9yKHZhciBpPTA7IGk8dGhpcy5mYWNldERhdGEubGVuZ3RoOyBpKyspe1xuICAgICAgICAgIGlmKCBidWJibGUuZW50aXR5LnR5cGVPZkVudGl0eS5pZCA9PT0gdGhpcy5mYWNldERhdGFbaV0udHlwZS5pZCApXG4gICAgICAgICAgICBpZiggIXRoaXMuZmFjZXREYXRhW2ldLmVuYWJsZWQgKXsgcmV0dXJuIGZhbHNlOyB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgaGFuZGxlRmFjZXRTZWFyY2hDaGFuZ2UoY2hhbmdlKSB7XG4gICAgdmFyIHBheWxvYWQ6IHN0cmluZyA9IGNoYW5nZS5pbnB1dFBheWxvYWQ7XG4gICAgdmFyIHZhbHVlOiBzdHJpbmcgPSBjaGFuZ2UudmFsdWU7XG4gICAgLy8gc3RvcmUgdGhlIGVudGVyZWQgdGV4dCBpbiBmYWNldElucHV0c1xuICAgIHRoaXMuZmFjZXRJbnB1dHNbcGF5bG9hZF0gPSB2YWx1ZTtcbiAgfVxuXG4gIGhhbmRsZUZhY2V0U2VhcmNoRW50ZXIoZW50ZXIpIHtcbiAgICB2YXIgcGF5bG9hZDogc3RyaW5nID0gZW50ZXIuaW5wdXRQYXlsb2FkO1xuICAgIC8vIGdldCB0aGUgdGV4dCBlbnRlcmVkIGluIHRoaXMgaW5wdXRcbiAgICB2YXIgdmFsdWU6IHN0cmluZyA9IHRoaXMuZmFjZXRJbnB1dHNbcGF5bG9hZF07XG4gIH1cblxuICBoYW5kbGVGYWNldEhlYWRlckNsaWNrKGZhY2V0SWQpe1xuICAgIGxldCB1cGRhdGVCdWJibGVzID0gZmFsc2U7XG4gICAgbGV0IGVuYWJsZWRGYWNldHMgPSB0aGlzLmZhY2V0RGF0YS5maWx0ZXIoIChmKSA9PiBmLmVuYWJsZWQgKS5sZW5ndGg7XG4gICAgdGhpcy5mYWNldERhdGEuZm9yRWFjaCggKGYpID0+IHtcbiAgICAgICAgaWYoZi50eXBlLmlkPT09ZmFjZXRJZCl7XG4gICAgICAgICAgaWYoZi5lbmFibGVkKXtcbiAgICAgICAgICAgIGlmKGVuYWJsZWRGYWNldHM+MSl7XG4gICAgICAgICAgICAgIGYuZW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICB1cGRhdGVCdWJibGVzID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZi5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHVwZGF0ZUJ1YmJsZXMgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMub25lKCdhdy1ob21lLWZhY2V0cy13cmFwcGVyJykudXBkYXRlKHRoaXMuZmFjZXREYXRhKTtcbiAgICBpZih1cGRhdGVCdWJibGVzKXtcbiAgICAgIGxldCBkaXNhYmxlRmFjZXRzSWRzID0gW107XG4gICAgICB0aGlzLmZhY2V0RGF0YS5mb3JFYWNoKCAoZkQpID0+IHtcbiAgICAgICAgaWYoIWZELmVuYWJsZWQpIGRpc2FibGVGYWNldHNJZHMucHVzaChmRC50eXBlLmlkKTtcbiAgICAgIH0pO1xuXG4gICAgICBpZihkaXNhYmxlRmFjZXRzSWRzKXtcbiAgICAgICAgbGV0IGZpbHRlcmVkU2VsZWN0ZWRCdWJibGVzID0gdGhpcy5zZWxlY3RlZEJ1YmJsZXMuZmlsdGVyKCAoYnViYmxlKSA9PiB7XG4gICAgICAgICAgbGV0IHR5cGVPZkVudGl0eSA9IFwiXCI7XG4gICAgICAgICAgZm9yKHZhciBpPTA7aTx0aGlzLmFsbEJ1YmJsZXMubGVuZ3RoO2krKyl7XG4gICAgICAgICAgICBpZih0aGlzLmFsbEJ1YmJsZXNbaV0uaWQ9PT1idWJibGUuaWQpe1xuICAgICAgICAgICAgICB0eXBlT2ZFbnRpdHk9dGhpcy5hbGxCdWJibGVzW2ldLmVudGl0eS50eXBlT2ZFbnRpdHkuaWQ7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZihkaXNhYmxlRmFjZXRzSWRzLmluY2x1ZGVzKHR5cGVPZkVudGl0eSkpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmKGZpbHRlcmVkU2VsZWN0ZWRCdWJibGVzLmxlbmd0aCE9dGhpcy5zZWxlY3RlZEJ1YmJsZXMubGVuZ3RoKXtcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkQnViYmxlcyA9IGZpbHRlcmVkU2VsZWN0ZWRCdWJibGVzO1xuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgdGhpcy5hbGxCdWJibGVzLmZvckVhY2goIChidWJibGUpID0+IHtcbiAgICAgICAgYnViYmxlLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgIGZvcih2YXIgaT0wOyBpPHRoaXMuc2VsZWN0ZWRCdWJibGVzLmxlbmd0aDtpKyspe1xuICAgICAgICAgIGlmKHRoaXMuc2VsZWN0ZWRCdWJibGVzW2ldLmlkPT09YnViYmxlLmlkKSBidWJibGUuc2VsZWN0ZWQ9dHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLm9uZSgnYXctaG9tZS1idWJibGUtY2hhcnQnKS51cGRhdGUoe1xuICAgICAgICB3aWR0aDogd2luZG93LmlubmVyV2lkdGgvMS44LFxuICAgICAgICBidWJibGVzOnRoaXMuZmlsdGVyQnViYmxlc0Jhc2VkT25GYWNldHNFbmFibGVkKCksXG4gICAgICAgIHNldEJ1YmJsZUNoYXJ0OiAoYnViYmxlQ3JlZikgPT4gdGhpcy5fYnViYmxlQ2hhcnQgPSBidWJibGVDcmVmLFxuICAgICAgICByZXNldDp0cnVlXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXJJdGVtVGFncygpe1xuICAgIGxldCB0YWdzRGF0YSA9IFtdO1xuICAgIHRoaXMuc2VsZWN0ZWRCdWJibGVzLmZvckVhY2goIChzQnViYmxlKSA9PiB7XG4gICAgICBsZXQgbGFiZWwgPSAnJztcbiAgICAgIGZvcih2YXIgaT0wO2k8dGhpcy5hbGxCdWJibGVzLmxlbmd0aDtpKyspe1xuICAgICAgICBpZih0aGlzLmFsbEJ1YmJsZXNbaV0uaWQ9PT1zQnViYmxlLmlkKXtcbiAgICAgICAgICBsYWJlbCA9IHRoaXMuYWxsQnViYmxlc1tpXS5lbnRpdHkubGFiZWw7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRhZ3NEYXRhLnB1c2goe2xhYmVsLGljb246XCJuNy1pY29uLWNsb3NlXCIscGF5bG9hZDpzQnViYmxlLmlkLGNsYXNzZXM6XCJ0YWctXCIrdGhpcy5hbGxCdWJibGVzW2ldLmVudGl0eS50eXBlT2ZFbnRpdHkuaWR9KTtcbiAgICB9KTtcbiAgICB0aGlzLm9uZSgnYXctaG9tZS1pdGVtLXRhZ3Mtd3JhcHBlcicpLnVwZGF0ZSh0YWdzRGF0YSk7XG4gIH1cblxuICBvblRhZ0NsaWNrZWQocGF5bG9hZCl7XG4gICAgaWYoIXBheWxvYWQpIHJldHVybjtcbiAgICBjb25zdCBidWJibGVJZD1wYXlsb2FkO1xuICAgIGlmKHRoaXMuX2J1YmJsZUNoYXJ0KXtcbiAgICAgIHRoaXMuX2J1YmJsZUNoYXJ0LnNlbGVjdEFsbChgZ2ApLmVhY2goIGIgPT4ge1xuICAgICAgICBpZihiLmlkPT09YnViYmxlSWQpIGIuaGFzQ2xvc2VJY29uID0gZmFsc2U7XG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5zZWxlY3RlZEJ1YmJsZXMgPSB0aGlzLnNlbGVjdGVkQnViYmxlcy5maWx0ZXIoIChiKSA9PiBiLmlkIT09cGF5bG9hZCApO1xuICAgIHRoaXMudXBkYXRlQnViYmxlc0FuZEl0ZW1QcmV2aWV3cygpO1xuICB9XG5cbiAgb25IZXJvQ2hhbmdlKHZhbHVlKXtcbiAgICB0aGlzLmF1dG9jb21wbGV0ZUNoYW5nZWQkLm5leHQodmFsdWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0U3VibmF2KCl7XG4gICAgcmV0dXJuIFsnaG9tZScsICdyZXN1bHRzJywgJ3NpbmdsZSddLm1hcChwYWdlID0+ICh7XG4gICAgICB0ZXh0OiBwYWdlLnRvVXBwZXJDYXNlKCksXG4gICAgICBwYXlsb2FkOiB7XG4gICAgICAgIHNvdXJjZTogJ25hdmlnYXRlJyxcbiAgICAgICAgaGFuZGxlcjogJ3JvdXRlcicsXG4gICAgICAgIHBhdGg6IFtgYXcvJHtwYWdlfWBdLFxuICAgICAgICBpZDogcGFnZVxuICAgICAgfSxcbiAgICAgIF9tZXRhOiB7IGlkOiBwYWdlIH1cbiAgICB9KSk7XG4gIH1cblxuICBwcml2YXRlIF9nZXRCcmVhZGNydW1icygpe1xuICAgIHJldHVybiB7XG4gICAgICBpdGVtczogW3tcbiAgICAgICAgbGFiZWw6ICdBcmlhbm5hIFdlYicsXG4gICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICBzb3VyY2U6ICduYXZpZ2F0ZScsXG4gICAgICAgICAgaGFuZGxlcjogJ3JvdXRlcicsXG4gICAgICAgICAgcGF0aDogW2Bhdy9ob21lYF1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICdIb21lIExheW91dCcsXG4gICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICBzb3VyY2U6ICduYXZpZ2F0ZScsXG4gICAgICAgICAgaGFuZGxlcjogJ3JvdXRlcicsXG4gICAgICAgICAgcGF0aDogW2Bhdy9ob21lYF1cbiAgICAgICAgfVxuICAgICAgfV1cbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBfc2Nyb2xsQmFja2dyb3VuZENvbnRyb2woKXtcbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidWJibGUtcmVzdWx0cy1saXN0JyksIFxuICAgICAgc291cmNlJCA9IGZyb21FdmVudChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnViYmxlLXJlc3VsdHMtbGlzdCcpLCAnc2Nyb2xsJyk7XG5cbiAgICAvLyBoZWlnaHQgY29udHJvbFxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5fc2V0SGFzU2Nyb2xsQmFja2dyb3VuZChlbCk7XG4gICAgfSwgNTAwKTtcblxuICAgIC8vIHNjcm9sbCBsaXN0ZW5cbiAgICBzb3VyY2UkLnBpcGUoXG4gICAgICBkZWJvdW5jZVRpbWUoNTApXG4gICAgKS5zdWJzY3JpYmUoKHsgdGFyZ2V0IH06IHsgdGFyZ2V0OiBhbnkgfSkgPT4ge1xuICAgICAgdGhpcy5fc2V0SGFzU2Nyb2xsQmFja2dyb3VuZCh0YXJnZXQpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2V0SGFzU2Nyb2xsQmFja2dyb3VuZCh7IHNjcm9sbFRvcCwgc2Nyb2xsSGVpZ2h0LCBjbGllbnRIZWlnaHQgfSl7XG4gICAgdGhpcy5oYXNTY3JvbGxCYWNrZ3JvdW5kID0gc2Nyb2xsSGVpZ2h0ID4gKHNjcm9sbFRvcCArIGNsaWVudEhlaWdodCk7XG4gIH1cblxuICBwcml2YXRlIF9saXN0ZW5BdXRvQ29tcGxldGVDaGFuZ2VzKCl7XG4gICAgdGhpcy5vbmUoJ2F3LWhvbWUtYXV0b2NvbXBsZXRlJykudXBkYXRlT3B0aW9ucyh7IGNvbmZpZzogdGhpcy5jb25maWd1cmF0aW9uLmdldCgnY29uZmlnLWtleXMnKSB9KTtcblxuICAgIHRoaXMuYXV0b2NvbXBsZXRlQ2hhbmdlZCQucGlwZShcbiAgICAgIGRlYm91bmNlVGltZSg1MDApXG4gICAgKS5zdWJzY3JpYmUodmFsdWUgPT4ge1xuXG4gICAgICBpZih2YWx1ZSl7XG4gICAgICAgIHRoaXMuY29tbXVuaWNhdGlvbi5yZXF1ZXN0JCgnYXV0b0NvbXBsZXRlJywge1xuICAgICAgICAgIG9uRXJyb3I6IChlcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvciksXG4gICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICBpbnB1dDogdmFsdWUsXG4gICAgICAgICAgICBpdGVtc1BhZ2luYXRpb246eyBvZmZzZXQ6MCwgbGltaXQ6IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2hvbWUtbGF5b3V0JylbJ3Jlc3VsdHMtbGltaXQnXSB9XG4gICAgICAgICAgfVxuICAgICAgICB9KS5zdWJzY3JpYmUoKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgdGhpcy5vbmUoJ2F3LWhvbWUtYXV0b2NvbXBsZXRlJykudXBkYXRlKHJlc3BvbnNlKTtcbiAgICAgICAgICBpZighdGhpcy5hdXRvY29tcGxldGVQb3BvdmVyT3BlbikgdGhpcy5fdG9nZ2xlQXV0b2NvbXBsZXRlUG9wb3ZlcigpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3RvZ2dsZUF1dG9jb21wbGV0ZVBvcG92ZXIoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX3RvZ2dsZUF1dG9jb21wbGV0ZVBvcG92ZXIoKXtcbiAgICBpZighdGhpcy5hdXRvY29tcGxldGVQb3BvdmVyKXtcbiAgICAgIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F3LWhvbWUtYWR2YW5jZWQtYXV0b2NvbXBsZXRlLXBvcG92ZXInKTtcbiAgICAgIHRlbXBsYXRlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICBcbiAgICAgIHRoaXMuYXV0b2NvbXBsZXRlUG9wb3ZlciA9IHRoaXMudGlwcHkoJy5hdy1ob21lX190b3AtaGVybyAubjctaGVyb19faW5wdXQnLCB7XG4gICAgICAgIGNvbnRlbnQ6IHRlbXBsYXRlLFxuICAgICAgICB0cmlnZ2VyOiAnbWFudWFsJyxcbiAgICAgICAgaW50ZXJhY3RpdmU6IHRydWUsXG4gICAgICAgIGFycm93OiBmYWxzZSxcbiAgICAgICAgYXBwZW5kVG86ICdwYXJlbnQnLFxuICAgICAgICB0aGVtZTogJ2xpZ2h0LWJvcmRlcicsXG4gICAgICAgIHBsYWNlbWVudDogJ2JvdHRvbS1zdGFydCcsXG4gICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgIG9uSGlkZGVuOiAoKSA9PiB0aGlzLmF1dG9jb21wbGV0ZVBvcG92ZXJPcGVuID0gZmFsc2UsXG4gICAgICB9KVswXTtcbiAgICB9XG4gICAgXG4gICAgaWYodGhpcy5hdXRvY29tcGxldGVQb3BvdmVyT3Blbil7XG4gICAgICB0aGlzLmF1dG9jb21wbGV0ZVBvcG92ZXIuaGlkZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmF1dG9jb21wbGV0ZVBvcG92ZXIuc2hvdygpO1xuICAgIH1cblxuICAgIHRoaXMuYXV0b2NvbXBsZXRlUG9wb3Zlck9wZW4gPSAhdGhpcy5hdXRvY29tcGxldGVQb3BvdmVyT3BlbjtcbiAgfVxufSJdfQ==