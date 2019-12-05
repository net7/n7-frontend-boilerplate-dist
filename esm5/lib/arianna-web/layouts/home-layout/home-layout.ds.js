/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/layouts/home-layout/home-layout.ds.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { LayoutDataSource } from '@n7-frontend/core';
import { fromEvent, Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
var AwHomeLayoutDS = /** @class */ (function (_super) {
    tslib_1.__extends(AwHomeLayoutDS, _super);
    function AwHomeLayoutDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.facetData = null;
        _this.lockedFacets = {};
        _this.lockLastFacet = false;
        _this.facetInputs = {};
        // all the bubbles as they have been given by apollo
        // (the objects in the allBubbles are not the same bubble objects
        // present in the bubble chart)
        _this.allBubbles = null;
        _this.autocompletePopoverOpen = false;
        _this.autocompleteChanged$ = new Subject();
        // the bubbles currently selected (these are saved from the event handler's
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
        _this.loadingBubbles = false;
        _this.bubblesEnabled = false;
        _this.resultsLimit = -1;
        _this.selectedEntitiesIds = [];
        _this.updateComponent = (/**
         * @param {?} id
         * @param {?} data
         * @param {?=} options
         * @return {?}
         */
        function (id, data, options) {
            if (options) {
                _this.one(id).updateOptions(options);
            }
            _this.one(id).update(data);
        });
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
        var communication = _a.communication, mainState = _a.mainState, configuration = _a.configuration, tippy = _a.tippy;
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
        this.outerLinks = this.configuration.get('home-layout')['outer-links']['test'];
        this.outerLinksTitle = this.configuration.get('home-layout')['outer-links']['title'];
    };
    /**
     * @param {?} query
     * @param {?} params
     * @return {?}
     */
    AwHomeLayoutDS.prototype.makeRequest$ = /**
     * @param {?} query
     * @param {?} params
     * @return {?}
     */
    function (query, params) {
        return this.communication.request$(query, {
            onError: (/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return console.error(error); }),
            params: params
        });
    };
    /**
     * @return {?}
     */
    AwHomeLayoutDS.prototype.initialFilterRequest = /**
     * @return {?}
     */
    function () {
        return this.communication.request$('globalFilter', {
            onError: (/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return console.error(error); }),
            params: {
                entitiesListSize: this.configuration.get("home-layout")['max-bubble-num'] * 4
            },
        });
    };
    /**
     * @param {?} response
     * @return {?}
     */
    AwHomeLayoutDS.prototype.parseInitialRequest = /**
     * @param {?} response
     * @return {?}
     */
    function (response) {
        var _this = this;
        response.typeOfEntityData.forEach((/**
         * @param {?} toe
         * @return {?}
         */
        function (toe) {
            /** @type {?} */
            var teoConfigData = _this.configuration.get("config-keys")[toe.type.replace(" ", "-")];
            _this.facetData.push(tslib_1.__assign({}, toe, { enabled: true, locked: false, configKey: toe.type.replace(" ", "-") }, teoConfigData));
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
            maxNumber: this.configuration.get("home-layout")['max-bubble-num']
        });
        this.renderPreviewsFromApolloQuery(response);
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
        if (!response || !response.itemsPagination) {
            return;
        }
        ;
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
        this.one('aw-linked-objects').updateOptions({
            context: 'home',
            config: this.configuration,
        });
        this.one('aw-linked-objects').update(response.itemsPagination);
        if (document.getElementById('bubble-results-list')) {
            // reset scroll position of result list
            document.getElementById('bubble-results-list').scrollTo(0, 0);
        }
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
                var bubbleId_1 = payload.bubbleId;
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
                    this.loadingBubbles = this.selectedBubbles.length == 0;
                    this.selectedBubbles.push(bubble);
                    return true;
                }
            }
        }
        return null;
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
                return this.filterRequest();
            }
        }
    };
    /**
     * @param {?} response
     * @return {?}
     */
    AwHomeLayoutDS.prototype.getBubblePayload = /**
     * @param {?} response
     * @return {?}
     */
    function (response) {
        var _this = this;
        /** @type {?} */
        var bubblePayload = {
            reset: true,
            setBubbleChart: (/**
             * @param {?} bubbleCref
             * @return {?}
             */
            function (bubbleCref) { return _this._bubbleChart = bubbleCref; }),
            facetData: this.facetData,
            source: response,
            selectedBubbles: this.selectedBubbles
        };
        return bubblePayload;
    };
    /**
     * @private
     * @return {?}
     */
    AwHomeLayoutDS.prototype.filterRequest = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.entityBubbleIdMap) {
            /** @type {?} */
            var k_1 = this.configuration.get('config-keys');
            /** @type {?} */
            var activeBubbles_1 = {
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
            function (sB) {
                /** @type {?} */
                var c = sB.color;
                /** @type {?} */
                var findTypeFromColor = (/**
                 * @param {?} obj
                 * @param {?} color
                 * @return {?}
                 */
                function (obj, color) {
                    return Object.keys(obj).find((/**
                     * @param {?} key
                     * @return {?}
                     */
                    function (key) { return obj[key].color.hex === color; }));
                });
                activeBubbles_1[findTypeFromColor(k_1, c)] = true;
                /** @type {?} */
                var entityId = _this.entityBubbleIdMap[sB.id];
                if (entityId)
                    _this.selectedEntitiesIds.push(entityId);
            }));
            this.lockedFacets = activeBubbles_1;
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
            function (error) { return console.error(error); }),
            params: {
                selectedEntitiesIds: this.selectedEntitiesIds,
                itemsPagination: {
                    offset: 0,
                    limit: this.resultsLimit
                }
            },
        });
    };
    /**
     * @param {?} response
     * @param {?=} onlyBubbles
     * @return {?}
     */
    AwHomeLayoutDS.prototype.updateBubbles = /**
     * @param {?} response
     * @param {?=} onlyBubbles
     * @return {?}
     */
    function (response, onlyBubbles) {
        if (!onlyBubbles) {
            this.renderPreviewsFromApolloQuery(response);
        }
    };
    /**
     * @param {?} data
     * @return {?}
     */
    AwHomeLayoutDS.prototype.updateBubbleFilter = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        this.allBubbles = data.allBubbles;
        this.entityBubbleIdMap = data.entityIdmap;
    };
    /**
     * @param {?=} onlyBubbles
     * @return {?}
     */
    AwHomeLayoutDS.prototype.updateTags = /**
     * @param {?=} onlyBubbles
     * @return {?}
     */
    function (onlyBubbles) {
        if (!onlyBubbles) {
            this.renderItemTags();
        }
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
            f.type = f.type.replace(/ /g, '-'); // fix for space in facet type string ('cose notevoli')
            if (f.type === facetId && f.locked === true) {
                // if user clicked on a locked facet, ignore it
                return;
            }
            if (f.type === facetId && f.enabled === true && enabledFacets < 1) {
                return;
            }
            if (f.type === facetId) { // if this is the clicked facet
                console.log(f.type + " is the clicked facet");
                if (f.enabled && enabledFacets > 1) {
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
            else { // if this is another facet
                if (enabledFacets <= 2 && f.enabled) {
                    f.locked = true;
                }
                if (enabledFacets >= 1 && f.locked) {
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
            var disableFacetsIds_1 = [];
            this.facetData.forEach((/**
             * @param {?} fD
             * @return {?}
             */
            function (fD) {
                if (!fD.enabled)
                    disableFacetsIds_1.push(fD.type); // this is probably useless
            }));
            if (disableFacetsIds_1.length > 0) {
                /** @type {?} */
                var filteredSelectedBubbles = this.selectedBubbles.filter((/**
                 * @param {?} bubble
                 * @return {?}
                 */
                function (bubble) {
                    for (var i = 0; i < _this.allBubbles.length; i++) {
                        if (_this.allBubbles[i].id === bubble.id) {
                            if (disableFacetsIds_1.includes(_this.allBubbles[i].entity.typeOfEntity.id)) {
                                return false;
                            }
                        }
                    }
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
            this.one('aw-bubble-chart').update(this.getBubblePayload(null));
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
                    tagsData.push({
                        label: label,
                        icon: "n7-icon-close",
                        payload: sBubble.id,
                        classes: "tag-" + _this.allBubbles[i].entity.typeOfEntity.replace(/ /g, '-')
                    });
                    break;
                }
            }
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
        return this.filterRequest();
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
        this.one('aw-home-autocomplete').updateOptions({
            config: this.configuration.get('config-keys'),
            labels: this.configuration.get('labels')
        });
        this.autocompleteChanged$.pipe(debounceTime(500)).subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            _this.homeAutocompleteQuery = value;
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
                flip: false,
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
    AwHomeLayoutDS.prototype.outerLinks;
    /** @type {?} */
    AwHomeLayoutDS.prototype.outerLinksTitle;
    /** @type {?} */
    AwHomeLayoutDS.prototype.homeAutocompleteQuery;
    /** @type {?} */
    AwHomeLayoutDS.prototype.updateComponent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1sYXlvdXQuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvbGF5b3V0cy9ob21lLWxheW91dC9ob21lLWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMxQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFOUM7SUFBb0MsMENBQWdCO0lBQXBEO1FBQUEscUVBNGNDO1FBdmNTLGVBQVMsR0FBVSxJQUFJLENBQUM7UUFDeEIsa0JBQVksR0FBRyxFQUFFLENBQUM7UUFDbEIsbUJBQWEsR0FBWSxLQUFLLENBQUM7UUFDL0IsaUJBQVcsR0FBUSxFQUFFLENBQUM7Ozs7UUFJdEIsZ0JBQVUsR0FBVSxJQUFJLENBQUM7UUFFekIsNkJBQXVCLEdBQVksS0FBSyxDQUFDO1FBQ3pDLDBCQUFvQixHQUFvQixJQUFJLE9BQU8sRUFBRSxDQUFDOzs7UUFHdkQscUJBQWUsR0FBVSxFQUFFLENBQUM7UUFDNUIsbUJBQWEsR0FBVyxJQUFJLENBQUM7OztRQUc1QixrQkFBWSxHQUFRLElBQUksQ0FBQzs7UUFFekIsMEJBQW9CLEdBQVcsQ0FBQyxDQUFDOzs7Ozs7UUFNakMsdUJBQWlCLEdBQVEsRUFBRSxDQUFDOzs7UUFHNUIscUJBQWUsR0FBVyxDQUFDLENBQUMsQ0FBQztRQUM3QixpQkFBVyxHQUFRLElBQUksQ0FBQztRQUN6Qix3QkFBa0IsR0FBUSxJQUFJLENBQUM7UUFDL0IseUJBQW1CLEdBQVksS0FBSyxDQUFDO1FBQ3JDLG9CQUFjLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLG9CQUFjLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLGtCQUFZLEdBQUcsQ0FB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OlsiaW1wb3J0IHsgTGF5b3V0RGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IGZyb21FdmVudCwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5leHBvcnQgY2xhc3MgQXdIb21lTGF5b3V0RFMgZXh0ZW5kcyBMYXlvdXREYXRhU291cmNlIHtcbiAgcHJpdmF0ZSBjb21tdW5pY2F0aW9uOiBhbnk7XG4gIHByaXZhdGUgbWFpblN0YXRlOiBhbnk7XG4gIHByaXZhdGUgdGlwcHk6IGFueTtcbiAgcHJpdmF0ZSBjb25maWd1cmF0aW9uOiBhbnk7XG4gIHByaXZhdGUgZmFjZXREYXRhOiBhbnlbXSA9IG51bGw7XG4gIHByaXZhdGUgbG9ja2VkRmFjZXRzID0ge307XG4gIHByaXZhdGUgbG9ja0xhc3RGYWNldDogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIGZhY2V0SW5wdXRzOiBhbnkgPSB7fTtcbiAgLy8gYWxsIHRoZSBidWJibGVzIGFzIHRoZXkgaGF2ZSBiZWVuIGdpdmVuIGJ5IGFwb2xsb1xuICAvLyAodGhlIG9iamVjdHMgaW4gdGhlIGFsbEJ1YmJsZXMgYXJlIG5vdCB0aGUgc2FtZSBidWJibGUgb2JqZWN0c1xuICAvLyBwcmVzZW50IGluIHRoZSBidWJibGUgY2hhcnQpXG4gIHByaXZhdGUgYWxsQnViYmxlczogYW55W10gPSBudWxsO1xuICBwcml2YXRlIGF1dG9jb21wbGV0ZVBvcG92ZXI6IGFueTtcbiAgcHJpdmF0ZSBhdXRvY29tcGxldGVQb3BvdmVyT3BlbjogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIGF1dG9jb21wbGV0ZUNoYW5nZWQkOiBTdWJqZWN0PHN0cmluZz4gPSBuZXcgU3ViamVjdCgpO1xuICAvLyB0aGUgYnViYmxlcyBjdXJyZW50bHkgc2VsZWN0ZWQgKHRoZXNlIGFyZSBzYXZlZCBmcm9tIHRoZSBldmVudCBoYW5kbGVyJ3NcbiAgLy8gYW5kIGNvcnJlc3BvbmQgZXhhY3RseSB0byB0aGUgYnViYmxlY2hhcnQncyBidWJibGUgb2JqZWN0cylcbiAgcHVibGljIHNlbGVjdGVkQnViYmxlczogYW55W10gPSBbXTtcbiAgcHVibGljIG51bU9mSXRlbXNTdHI6IHN0cmluZyA9IG51bGw7XG4gIC8vIGluc3RhbmNlIG9mIHRoZSBidWJibGUgY2hhcnQgKGZyb20gd2hpY2ggeW91IGNhbiBhY2Nlc3MgYWxsIHRoZSB2YXJpb3VzXG4gIC8vIGJ1YmJsZSBvYmplY3RzKVxuICBwcml2YXRlIF9idWJibGVDaGFydDogYW55ID0gbnVsbDtcbiAgLy8gdGhlIG1heGltdW0gbnVtYmVyIG9mIGJ1YmJsZXMgd2hpY2ggY2FuIGJlIHNlbGVjdGVkIGF0IHRoZSBzYW1lIHRpbWVcbiAgcHJpdmF0ZSBtYXhCdWJibGVzU2VsZWN0YWJsZTogbnVtYmVyID0gMztcbiAgLy8gZW50aXRpZXMgaGF2ZSB0aGVpciBvd24gdW5pcXVlIGlkLCB0aGVzZSBpZHMgYXJlIGdlbmVyaWMgYW5kIGFyZSB2ZXJ5IGZsZXhpYmxlXG4gIC8vIGJ1YmJsZXMgKGFzIHRoZSBidWJibGUgY2hhcnQncyBvYmplY3RzKSBoYXZlIHVuaXF1ZSBpZHMgYnV0IGRvIG5vdCBhbGxvdyBjZXJ0YWluXG4gIC8vIGNoYXJhY3RlcnMsIHNvIGVhY2ggYnViYmxlIGhhcyBpdHMgb3duIGlkIGRpZmZlcmVudCBmcm9tIHRoZSBpZCBvZiB0aGUgZW50aXR5IHdoaWNoXG4gIC8vIHRoZSBidWJibGUgcmVwcmVzZW50cyAoZ2l2ZW4gYW4gYnViYmxlJ3MgaWQgY2FsbGVkIGJ1YmJsZUlkIHlvdSBjYW4gb2J0YWluIHRoZVxuICAvLyByZXNwZWN0aXZlIGVudGl0eSdzIGlkIHdpdGggYXM6IGVudGl0eUlkID0gZW50aXR5QnViYmxlSWRNYXBbYnViYmxlSWRdIClcbiAgcHJpdmF0ZSBlbnRpdHlCdWJibGVJZE1hcDogYW55ID0ge307XG4gIC8vIHdpZGggb2YgdGhlIHdpbmRvdyB3aGljaCBpcyB1cGRhdGVkIGF0IGVhY2ggcmVzaXplIGFuZCBpdCBpcyB1c2VkIGJ5IHRoZSBidWJibGVcbiAgLy8gY2hhcnQgdG8gY2hlY2sgaWYgdGhlIHdpZHRoIG9mIHRoZSB3aW5kb3cgaGFzIGNoYW5nZWQgZHVyaW5nIHRoZSBsYXN0IHJlc2l6ZVxuICBwcml2YXRlIGxhc3RXaW5kb3dXaWR0aDogbnVtYmVyID0gLTE7XG4gIHByaXZhdGUgYnViYmxlUG9wdXA6IGFueSA9IG51bGw7XG4gIHB1YmxpYyBjdXJyZW50SG92ZXJFbnRpdHk6IGFueSA9IG51bGw7XG4gIHB1YmxpYyBoYXNTY3JvbGxCYWNrZ3JvdW5kOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBsb2FkaW5nQnViYmxlcyA9IGZhbHNlO1xuICBwdWJsaWMgYnViYmxlc0VuYWJsZWQgPSBmYWxzZTtcbiAgcHVibGljIHJlc3VsdHNMaW1pdCA9IC0xO1xuICBwdWJsaWMgc2VsZWN0ZWRFbnRpdGllc0lkcyA9IFtdO1xuICBwdWJsaWMgb3V0ZXJMaW5rczphbnk7XG4gIHB1YmxpYyBvdXRlckxpbmtzVGl0bGU6c3RyaW5nO1xuICBwdWJsaWMgaG9tZUF1dG9jb21wbGV0ZVF1ZXJ5OiBzdHJpbmc7XG5cbiAgb25Jbml0KHsgY29tbXVuaWNhdGlvbiwgbWFpblN0YXRlLCBjb25maWd1cmF0aW9uLCB0aXBweSB9KSB7XG4gICAgdGhpcy5jb21tdW5pY2F0aW9uID0gY29tbXVuaWNhdGlvbjtcbiAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBjb25maWd1cmF0aW9uO1xuICAgIHRoaXMuZmFjZXREYXRhID0gW107XG4gICAgdGhpcy5sYXN0V2luZG93V2lkdGggPSB3aW5kb3cub3V0ZXJXaWR0aDtcbiAgICB0aGlzLm1haW5TdGF0ZSA9IG1haW5TdGF0ZTtcbiAgICB0aGlzLnRpcHB5ID0gdGlwcHk7XG4gICAgdGhpcy5idWJibGVzRW5hYmxlZCA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2ZlYXR1cmVzLWVuYWJsZWQnKSA/IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2ZlYXR1cmVzLWVuYWJsZWQnKVsnYnViYmxlY2hhcnQnXSA6IGZhbHNlO1xuICAgIHRoaXMucmVzdWx0c0xpbWl0ID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnaG9tZS1sYXlvdXQnKVsncmVzdWx0cy1saW1pdCddXG5cbiAgICB0aGlzLm9uZSgnYXctaGVybycpLnVwZGF0ZSh0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdob21lLWxheW91dCcpWyd0b3AtaGVybyddKTtcbiAgICB0aGlzLm9uZSgnYXctaG9tZS1oZXJvLXBhdHJpbW9uaW8nKS51cGRhdGUodGhpcy5jb25maWd1cmF0aW9uLmdldCgnaG9tZS1sYXlvdXQnKVsnYm90dG9tLWhlcm8nXSk7XG4gICAgLy8gdXBkYXRlIHN0cmVhbXNcbiAgICB0aGlzLm1haW5TdGF0ZS51cGRhdGUoJ2hlYWRUaXRsZScsICdBcmlhbm5hIFdlYiA+IEhvbWUnKTtcbiAgICB0aGlzLm1haW5TdGF0ZS51cGRhdGUoJ3BhZ2VUaXRsZScsICdBcmlhbm5hIFdlYjogSG9tZSBMYXlvdXQnKTtcbiAgICB0aGlzLm1haW5TdGF0ZS51cGRhdGVDdXN0b20oJ2N1cnJlbnROYXYnLCAnYXcvaG9tZScpO1xuICAgIC8vIGxpc3RlbiBhdXRvY29tcGxldGUgY2hhbmdlc1xuICAgIHRoaXMuX2xpc3RlbkF1dG9Db21wbGV0ZUNoYW5nZXMoKTtcblxuICAgIHRoaXMub3V0ZXJMaW5rcyA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2hvbWUtbGF5b3V0JylbJ291dGVyLWxpbmtzJ11bJ3Rlc3QnXTtcbiAgICB0aGlzLm91dGVyTGlua3NUaXRsZSA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2hvbWUtbGF5b3V0JylbJ291dGVyLWxpbmtzJ11bJ3RpdGxlJ107XG4gIH1cblxuICBwdWJsaWMgbWFrZVJlcXVlc3QkKHF1ZXJ5LCBwYXJhbXMpIHtcbiAgICByZXR1cm4gdGhpcy5jb21tdW5pY2F0aW9uLnJlcXVlc3QkKHF1ZXJ5LCB7XG4gICAgICBvbkVycm9yOiAoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpLFxuICAgICAgcGFyYW1zXG4gICAgfSk7XG4gIH1cblxuXG4gIHB1YmxpYyB1cGRhdGVDb21wb25lbnQgPSAoaWQsIGRhdGEsIG9wdGlvbnM/KSA9PiB7XG4gICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgIHRoaXMub25lKGlkKS51cGRhdGVPcHRpb25zKG9wdGlvbnMpXG4gICAgfVxuICAgIHRoaXMub25lKGlkKS51cGRhdGUoZGF0YSlcbiAgfVxuXG4gIGluaXRpYWxGaWx0ZXJSZXF1ZXN0KCkge1xuICAgIHJldHVybiB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQoJ2dsb2JhbEZpbHRlcicsIHtcbiAgICAgIG9uRXJyb3I6IChlcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvciksXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgZW50aXRpZXNMaXN0U2l6ZTogdGhpcy5jb25maWd1cmF0aW9uLmdldChcImhvbWUtbGF5b3V0XCIpWydtYXgtYnViYmxlLW51bSddICogNFxuICAgICAgfSxcbiAgICB9KVxuICB9XG5cbiAgcGFyc2VJbml0aWFsUmVxdWVzdChyZXNwb25zZSkge1xuICAgIHJlc3BvbnNlLnR5cGVPZkVudGl0eURhdGEuZm9yRWFjaCgodG9lKSA9PiB7XG4gICAgICBjb25zdCB0ZW9Db25maWdEYXRhID0gdGhpcy5jb25maWd1cmF0aW9uLmdldChcImNvbmZpZy1rZXlzXCIpW3RvZS50eXBlLnJlcGxhY2UoXCIgXCIsIFwiLVwiKV07XG4gICAgICB0aGlzLmZhY2V0RGF0YS5wdXNoKHtcbiAgICAgICAgLi4udG9lLFxuICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICBsb2NrZWQ6IGZhbHNlLFxuICAgICAgICBjb25maWdLZXk6IHRvZS50eXBlLnJlcGxhY2UoXCIgXCIsIFwiLVwiKSxcbiAgICAgICAgLi4udGVvQ29uZmlnRGF0YVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgdGhpcy5vbmUoJ2F3LWhvbWUtZmFjZXRzLXdyYXBwZXInKS51cGRhdGUoe1xuICAgICAgZmFjZXREYXRhOiB0aGlzLmZhY2V0RGF0YSxcbiAgICAgIGxvY2tlZEZhY2V0czogdGhpcy5sb2NrZWRGYWNldHNcbiAgICB9KTtcbiAgICB0aGlzLm9uZSgnYXctYnViYmxlLWNoYXJ0JykudXBkYXRlT3B0aW9ucyh7XG4gICAgICBjb250ZXh0OiAnaG9tZScsXG4gICAgICBjb25maWdLZXlzOiB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KFwiY29uZmlnLWtleXNcIiksXG4gICAgICBidWJibGVDb250YWluZXJJZDogJ2J1YmJsZUNoYXJ0Q29udGFpbmVyJyxcbiAgICAgIGNvbnRhaW5lcklkOiAnYnViYmxlLWNoYXJ0LWNvbnRhaW5lcicsXG4gICAgICBtYXhOdW1iZXI6IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoXCJob21lLWxheW91dFwiKVsnbWF4LWJ1YmJsZS1udW0nXVxuICAgIH0pO1xuICAgIHRoaXMucmVuZGVyUHJldmlld3NGcm9tQXBvbGxvUXVlcnkocmVzcG9uc2UpO1xuICB9XG5cbiAgcmVuZGVyUHJldmlld3NGcm9tQXBvbGxvUXVlcnkocmVzcG9uc2U6IGFueSkge1xuICAgIGlmICghcmVzcG9uc2UgfHwgIXJlc3BvbnNlLml0ZW1zUGFnaW5hdGlvbikge1xuICAgICAgcmV0dXJuXG4gICAgfTtcbiAgICBsZXQgbnVtT2ZJdGVtcyA9IHJlc3BvbnNlLml0ZW1zUGFnaW5hdGlvbi50b3RhbENvdW50O1xuICAgIGlmIChudW1PZkl0ZW1zID4gMCkge1xuICAgICAgbGV0IG51bU9mVGhvdXNhbmQgPSAwO1xuICAgICAgd2hpbGUgKG51bU9mSXRlbXMgPiA5OTkpIHtcbiAgICAgICAgbnVtT2ZJdGVtcyAtPSAxMDAwO1xuICAgICAgICBudW1PZlRob3VzYW5kICs9IDE7XG4gICAgICB9XG4gICAgICBsZXQgbnVtT2ZJdGVtc1RtcFN0ciA9IG51bU9mSXRlbXMgKyAnJztcbiAgICAgIGlmIChudW1PZkl0ZW1zIDwgMTApIG51bU9mSXRlbXNUbXBTdHIgPSAnMDAnICsgbnVtT2ZJdGVtcztcbiAgICAgIGVsc2UgaWYgKG51bU9mSXRlbXMgPCAxMDApIG51bU9mSXRlbXNUbXBTdHIgPSAnMCcgKyBudW1PZkl0ZW1zO1xuICAgICAgaWYgKG51bU9mVGhvdXNhbmQgPiAwKVxuICAgICAgICB0aGlzLm51bU9mSXRlbXNTdHIgPSBudW1PZlRob3VzYW5kICsgJy4nICsgbnVtT2ZJdGVtc1RtcFN0cjtcbiAgICAgIGVsc2VcbiAgICAgICAgdGhpcy5udW1PZkl0ZW1zU3RyID0gbnVtT2ZJdGVtcyArICcnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm51bU9mSXRlbXNTdHIgPSBudWxsO1xuICAgIH1cbiAgICB0aGlzLm9uZSgnYXctbGlua2VkLW9iamVjdHMnKS51cGRhdGVPcHRpb25zKHtcbiAgICAgIGNvbnRleHQ6ICdob21lJyxcbiAgICAgIGNvbmZpZzogdGhpcy5jb25maWd1cmF0aW9uLFxuICAgICAgLy8gcGFnZTogMSxcbiAgICB9KVxuICAgIHRoaXMub25lKCdhdy1saW5rZWQtb2JqZWN0cycpLnVwZGF0ZShyZXNwb25zZS5pdGVtc1BhZ2luYXRpb24pO1xuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnViYmxlLXJlc3VsdHMtbGlzdCcpKSB7IFxuICAgICAgLy8gcmVzZXQgc2Nyb2xsIHBvc2l0aW9uIG9mIHJlc3VsdCBsaXN0XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnViYmxlLXJlc3VsdHMtbGlzdCcpLnNjcm9sbFRvKDAsMClcbiAgICB9XG4gIH1cblxuICBvbkJ1YmJsZVRvb2x0aXBDbGljayhzb3VyY2U6IHN0cmluZywgcGF5bG9hZCkge1xuICAgIHN3aXRjaCAoc291cmNlKSB7XG4gICAgICBjYXNlICdzZWxlY3QnOlxuICAgICAgICBpZiAoIXBheWxvYWQpIHJldHVybjtcbiAgICAgICAgY29uc3QgYnViYmxlSWQgPSBwYXlsb2FkLmJ1YmJsZUlkO1xuICAgICAgICBpZiAoIWJ1YmJsZUlkKSByZXR1cm47XG4gICAgICAgIGxldCBidWJibGUgPSBudWxsO1xuICAgICAgICBpZiAodGhpcy5fYnViYmxlQ2hhcnQpIHtcbiAgICAgICAgICB0aGlzLl9idWJibGVDaGFydC5zZWxlY3RBbGwoYGdgKS5lYWNoKGIgPT4ge1xuICAgICAgICAgICAgaWYgKGIuaWQgPT09IGJ1YmJsZUlkKSBidWJibGUgPSBiO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmIChidWJibGUpIHRoaXMub25CdWJibGVTZWxlY3RlZChidWJibGUpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG9uQnViYmxlU2VsZWN0ZWQoYnViYmxlKSB7XG4gICAgaWYgKGJ1YmJsZSkge1xuICAgICAgaWYgKCF0aGlzLnNlbGVjdGVkQnViYmxlcy5pbmNsdWRlcyhidWJibGUpKSB7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkQnViYmxlcy5sZW5ndGggPCB0aGlzLm1heEJ1YmJsZXNTZWxlY3RhYmxlKSB7XG4gICAgICAgICAgdGhpcy5sb2FkaW5nQnViYmxlcyA9IHRoaXMuc2VsZWN0ZWRCdWJibGVzLmxlbmd0aCA9PSAwO1xuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRCdWJibGVzLnB1c2goYnViYmxlKTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHB1YmxpYyBvbkJ1YmJsZURlc2VsZWN0ZWQocGF5bG9hZCkge1xuICAgIGlmIChwYXlsb2FkICYmIHBheWxvYWQuYnViYmxlKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkQnViYmxlcyA9IHRoaXMuc2VsZWN0ZWRCdWJibGVzLmZpbHRlcihcbiAgICAgICAgKGIpID0+IGIuaWQgIT09IHBheWxvYWQuYnViYmxlLmlkKTtcbiAgICAgIGlmIChwYXlsb2FkLmJ1YmJsZS5oYXNDbG9zZUljb24pIHtcbiAgICAgICAgcGF5bG9hZC5idWJibGUuaGFzQ2xvc2VJY29uID0gZmFsc2U7XG4gICAgICAgIHJldHVybiB0aGlzLmZpbHRlclJlcXVlc3QoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0QnViYmxlUGF5bG9hZChyZXNwb25zZSkge1xuICAgIGxldCBidWJibGVQYXlsb2FkID0ge1xuICAgICAgcmVzZXQ6IHRydWUsXG4gICAgICBzZXRCdWJibGVDaGFydDogKGJ1YmJsZUNyZWYpID0+IHRoaXMuX2J1YmJsZUNoYXJ0ID0gYnViYmxlQ3JlZixcbiAgICAgIGZhY2V0RGF0YTogdGhpcy5mYWNldERhdGEsXG4gICAgICBzb3VyY2U6IHJlc3BvbnNlLFxuICAgICAgc2VsZWN0ZWRCdWJibGVzOiB0aGlzLnNlbGVjdGVkQnViYmxlc1xuICAgIH07XG4gICAgcmV0dXJuIGJ1YmJsZVBheWxvYWQ7XG4gIH1cblxuICBwcml2YXRlIGZpbHRlclJlcXVlc3QoKSB7XG4gICAgaWYgKHRoaXMuZW50aXR5QnViYmxlSWRNYXApIHtcbiAgICAgIGxldCBrID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnY29uZmlnLWtleXMnKVxuICAgICAgbGV0IGFjdGl2ZUJ1YmJsZXMgPSB7XG4gICAgICAgIHBsYWNlczogZmFsc2UsXG4gICAgICAgIHBlb3BsZTogZmFsc2UsXG4gICAgICAgIGNvbmNlcHRzOiBmYWxzZSxcbiAgICAgICAgb3JnYW5pemF0aW9uczogZmFsc2UsXG4gICAgICB9XG4gICAgICBpZiAodGhpcy5zZWxlY3RlZEJ1YmJsZXMubGVuZ3RoIDw9IDApIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEVudGl0aWVzSWRzID0gW107XG4gICAgICB9XG4gICAgICB0aGlzLnNlbGVjdGVkQnViYmxlcy5mb3JFYWNoKChzQikgPT4ge1xuICAgICAgICBsZXQgYyA9IHNCLmNvbG9yXG4gICAgICAgIGxldCBmaW5kVHlwZUZyb21Db2xvciA9IChvYmosIGNvbG9yKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikuZmluZChrZXkgPT4gb2JqW2tleV0uY29sb3IuaGV4ID09PSBjb2xvcilcbiAgICAgICAgfVxuICAgICAgICBhY3RpdmVCdWJibGVzW2ZpbmRUeXBlRnJvbUNvbG9yKGssIGMpXSA9IHRydWVcbiAgICAgICAgbGV0IGVudGl0eUlkID0gdGhpcy5lbnRpdHlCdWJibGVJZE1hcFtzQi5pZF07XG4gICAgICAgIGlmIChlbnRpdHlJZClcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkRW50aXRpZXNJZHMucHVzaChlbnRpdHlJZCk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMubG9ja2VkRmFjZXRzID0gYWN0aXZlQnViYmxlc1xuICAgICAgdGhpcy5vbmUoJ2F3LWhvbWUtZmFjZXRzLXdyYXBwZXInKS51cGRhdGUoe1xuICAgICAgICBmYWNldERhdGE6IHRoaXMuZmFjZXREYXRhLFxuICAgICAgICBsb2NrZWRGYWNldHM6IHRoaXMubG9ja2VkRmFjZXRzXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuY29tbXVuaWNhdGlvbi5yZXF1ZXN0JCgnZ2xvYmFsRmlsdGVyJywge1xuICAgICAgb25FcnJvcjogKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSxcbiAgICAgIHBhcmFtczoge1xuICAgICAgICBzZWxlY3RlZEVudGl0aWVzSWRzOiB0aGlzLnNlbGVjdGVkRW50aXRpZXNJZHMsXG4gICAgICAgIGl0ZW1zUGFnaW5hdGlvbjoge1xuICAgICAgICAgIG9mZnNldDogMCxcbiAgICAgICAgICBsaW1pdDogdGhpcy5yZXN1bHRzTGltaXRcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9KVxuICB9XG5cbiAgcHVibGljIHVwZGF0ZUJ1YmJsZXMocmVzcG9uc2UsIG9ubHlCdWJibGVzPzogYm9vbGVhbikge1xuICAgIGlmICghb25seUJ1YmJsZXMpIHtcbiAgICAgIHRoaXMucmVuZGVyUHJldmlld3NGcm9tQXBvbGxvUXVlcnkocmVzcG9uc2UpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGVCdWJibGVGaWx0ZXIoZGF0YSkge1xuICAgIHRoaXMuYWxsQnViYmxlcyA9IGRhdGEuYWxsQnViYmxlcztcbiAgICB0aGlzLmVudGl0eUJ1YmJsZUlkTWFwID0gZGF0YS5lbnRpdHlJZG1hcDtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGVUYWdzKG9ubHlCdWJibGVzPzogYm9vbGVhbikge1xuICAgIGlmICghb25seUJ1YmJsZXMpIHtcbiAgICAgIHRoaXMucmVuZGVySXRlbVRhZ3MoKTtcbiAgICB9XG4gIH1cblxuICBmaWx0ZXJCdWJibGVzQmFzZWRPbkZhY2V0c0VuYWJsZWQoKSB7XG4gICAgbGV0IHJlc3VsdCA9IHRoaXMuYWxsQnViYmxlcy5maWx0ZXIoXG4gICAgICAoYnViYmxlKSA9PiB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5mYWNldERhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAoYnViYmxlLmVudGl0eS50eXBlT2ZFbnRpdHkuaWQgPT09IHRoaXMuZmFjZXREYXRhW2ldLnR5cGUuaWQpXG4gICAgICAgICAgICBpZiAoIXRoaXMuZmFjZXREYXRhW2ldLmVuYWJsZWQpIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgaGFuZGxlRmFjZXRTZWFyY2hDaGFuZ2UoY2hhbmdlKSB7XG4gICAgdmFyIHBheWxvYWQ6IHN0cmluZyA9IGNoYW5nZS5pbnB1dFBheWxvYWQ7XG4gICAgdmFyIHZhbHVlOiBzdHJpbmcgPSBjaGFuZ2UudmFsdWU7XG4gICAgLy8gc3RvcmUgdGhlIGVudGVyZWQgdGV4dCBpbiBmYWNldElucHV0c1xuICAgIHRoaXMuZmFjZXRJbnB1dHNbcGF5bG9hZF0gPSB2YWx1ZTtcbiAgfVxuXG4gIGhhbmRsZUZhY2V0U2VhcmNoRW50ZXIoZW50ZXIpIHtcbiAgICB2YXIgcGF5bG9hZDogc3RyaW5nID0gZW50ZXIuaW5wdXRQYXlsb2FkO1xuICAgIC8vIGdldCB0aGUgdGV4dCBlbnRlcmVkIGluIHRoaXMgaW5wdXRcbiAgICB2YXIgdmFsdWU6IHN0cmluZyA9IHRoaXMuZmFjZXRJbnB1dHNbcGF5bG9hZF07XG4gIH1cblxuICBoYW5kbGVGYWNldEhlYWRlckNsaWNrKGZhY2V0SWQpIHtcbiAgICBsZXQgdXBkYXRlQnViYmxlcyA9IGZhbHNlO1xuICAgIGxldCBlbmFibGVkRmFjZXRzID0gdGhpcy5mYWNldERhdGEuZmlsdGVyKGYgPT4gZi5lbmFibGVkKS5sZW5ndGg7XG4gICAgdGhpcy5mYWNldERhdGEuZm9yRWFjaChmID0+IHtcbiAgICAgIGYudHlwZSA9IGYudHlwZS5yZXBsYWNlKC8gL2csICctJykgLy8gZml4IGZvciBzcGFjZSBpbiBmYWNldCB0eXBlIHN0cmluZyAoJ2Nvc2Ugbm90ZXZvbGknKVxuICAgICAgaWYgKGYudHlwZSA9PT0gZmFjZXRJZCAmJiBmLmxvY2tlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAvLyBpZiB1c2VyIGNsaWNrZWQgb24gYSBsb2NrZWQgZmFjZXQsIGlnbm9yZSBpdFxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGlmIChmLnR5cGUgPT09IGZhY2V0SWQgJiYgZi5lbmFibGVkID09PSB0cnVlICYmIGVuYWJsZWRGYWNldHMgPCAxKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgaWYgKGYudHlwZSA9PT0gZmFjZXRJZCkgeyAvLyBpZiB0aGlzIGlzIHRoZSBjbGlja2VkIGZhY2V0XG4gICAgICAgIGNvbnNvbGUubG9nKGAke2YudHlwZX0gaXMgdGhlIGNsaWNrZWQgZmFjZXRgKVxuICAgICAgICBpZiAoZi5lbmFibGVkICYmIGVuYWJsZWRGYWNldHMgPiAxKSB7XG4gICAgICAgICAgZi5lbmFibGVkID0gZmFsc2U7XG4gICAgICAgICAgZi5sb2NrZWQgPSBmYWxzZTtcbiAgICAgICAgICB1cGRhdGVCdWJibGVzID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICAgIGYubG9ja2VkID0gZmFsc2U7XG4gICAgICAgICAgdXBkYXRlQnViYmxlcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7IC8vIGlmIHRoaXMgaXMgYW5vdGhlciBmYWNldFxuICAgICAgICBpZiAoZW5hYmxlZEZhY2V0cyA8PSAyICYmIGYuZW5hYmxlZCkge1xuICAgICAgICAgIGYubG9ja2VkID0gdHJ1ZTtcbiAgICAgICAgfSBpZiAoZW5hYmxlZEZhY2V0cyA+PSAxICYmIGYubG9ja2VkKSB7XG4gICAgICAgICAgZi5sb2NrZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMub25lKCdhdy1ob21lLWZhY2V0cy13cmFwcGVyJykudXBkYXRlKHtcbiAgICAgIGZhY2V0RGF0YTogdGhpcy5mYWNldERhdGEsXG4gICAgICBsb2NrZWRGYWNldHM6IHRoaXMubG9ja2VkRmFjZXRzXG4gICAgfSk7XG4gICAgaWYgKHVwZGF0ZUJ1YmJsZXMpIHtcbiAgICAgIGxldCBkaXNhYmxlRmFjZXRzSWRzID0gW107XG4gICAgICB0aGlzLmZhY2V0RGF0YS5mb3JFYWNoKChmRCkgPT4ge1xuICAgICAgICBpZiAoIWZELmVuYWJsZWQpIGRpc2FibGVGYWNldHNJZHMucHVzaChmRC50eXBlKTsgLy8gdGhpcyBpcyBwcm9iYWJseSB1c2VsZXNzXG4gICAgICB9KTtcbiAgICAgIGlmIChkaXNhYmxlRmFjZXRzSWRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgbGV0IGZpbHRlcmVkU2VsZWN0ZWRCdWJibGVzID0gdGhpcy5zZWxlY3RlZEJ1YmJsZXMuZmlsdGVyKGJ1YmJsZSA9PiB7XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmFsbEJ1YmJsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmFsbEJ1YmJsZXNbaV0uaWQgPT09IGJ1YmJsZS5pZCkge1xuICAgICAgICAgICAgICBpZiAoZGlzYWJsZUZhY2V0c0lkcy5pbmNsdWRlcyhcbiAgICAgICAgICAgICAgICB0aGlzLmFsbEJ1YmJsZXNbaV0uZW50aXR5LnR5cGVPZkVudGl0eS5pZFxuICAgICAgICAgICAgICApKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoZmlsdGVyZWRTZWxlY3RlZEJ1YmJsZXMubGVuZ3RoICE9IHRoaXMuc2VsZWN0ZWRCdWJibGVzLmxlbmd0aCkge1xuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRCdWJibGVzID0gZmlsdGVyZWRTZWxlY3RlZEJ1YmJsZXM7XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICB0aGlzLmFsbEJ1YmJsZXMuZm9yRWFjaChidWJibGUgPT4ge1xuICAgICAgICBidWJibGUuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnNlbGVjdGVkQnViYmxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkQnViYmxlc1tpXS5pZCA9PT0gYnViYmxlLmlkKSBidWJibGUuc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMub25lKCdhdy1idWJibGUtY2hhcnQnKS51cGRhdGUodGhpcy5nZXRCdWJibGVQYXlsb2FkKG51bGwpKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXJJdGVtVGFncygpIHtcbiAgICBsZXQgdGFnc0RhdGEgPSBbXTtcbiAgICB0aGlzLnNlbGVjdGVkQnViYmxlcy5mb3JFYWNoKChzQnViYmxlKSA9PiB7XG4gICAgICBsZXQgbGFiZWwgPSAnJztcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5hbGxCdWJibGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh0aGlzLmFsbEJ1YmJsZXNbaV0uaWQgPT09IHNCdWJibGUuaWQpIHtcbiAgICAgICAgICBsYWJlbCA9IHRoaXMuYWxsQnViYmxlc1tpXS5lbnRpdHkubGFiZWw7XG4gICAgICAgICAgdGFnc0RhdGEucHVzaCh7XG4gICAgICAgICAgICBsYWJlbCxcbiAgICAgICAgICAgIGljb246IFwibjctaWNvbi1jbG9zZVwiLFxuICAgICAgICAgICAgcGF5bG9hZDogc0J1YmJsZS5pZCxcbiAgICAgICAgICAgIGNsYXNzZXM6IGB0YWctJHt0aGlzLmFsbEJ1YmJsZXNbaV0uZW50aXR5LnR5cGVPZkVudGl0eS5yZXBsYWNlKC8gL2csICctJyl9YFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5vbmUoJ2F3LWhvbWUtaXRlbS10YWdzLXdyYXBwZXInKS51cGRhdGUodGFnc0RhdGEpO1xuICB9XG5cbiAgb25UYWdDbGlja2VkKHBheWxvYWQpIHtcbiAgICBpZiAoIXBheWxvYWQpIHJldHVybjtcbiAgICBjb25zdCBidWJibGVJZCA9IHBheWxvYWQ7XG4gICAgaWYgKHRoaXMuX2J1YmJsZUNoYXJ0KSB7XG4gICAgICB0aGlzLl9idWJibGVDaGFydC5zZWxlY3RBbGwoYGdgKS5lYWNoKGIgPT4ge1xuICAgICAgICBpZiAoYi5pZCA9PT0gYnViYmxlSWQpIGIuaGFzQ2xvc2VJY29uID0gZmFsc2U7XG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5zZWxlY3RlZEJ1YmJsZXMgPSB0aGlzLnNlbGVjdGVkQnViYmxlcy5maWx0ZXIoKGIpID0+IGIuaWQgIT09IHBheWxvYWQpO1xuICAgIHJldHVybiB0aGlzLmZpbHRlclJlcXVlc3QoKTtcbiAgfVxuXG4gIG9uSGVyb0NoYW5nZSh2YWx1ZSkge1xuICAgIHRoaXMuYXV0b2NvbXBsZXRlQ2hhbmdlZCQubmV4dCh2YWx1ZSk7XG4gIH1cblxuICBwcml2YXRlIF9zY3JvbGxCYWNrZ3JvdW5kQ29udHJvbCgpIHtcbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidWJibGUtcmVzdWx0cy1saXN0JyksXG4gICAgICBzb3VyY2UkID0gZnJvbUV2ZW50KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidWJibGUtcmVzdWx0cy1saXN0JyksICdzY3JvbGwnKTtcblxuICAgIC8vIGhlaWdodCBjb250cm9sXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLl9zZXRIYXNTY3JvbGxCYWNrZ3JvdW5kKGVsKTtcbiAgICB9LCA1MDApO1xuXG4gICAgLy8gc2Nyb2xsIGxpc3RlblxuICAgIHNvdXJjZSQucGlwZShcbiAgICAgIGRlYm91bmNlVGltZSg1MClcbiAgICApLnN1YnNjcmliZSgoeyB0YXJnZXQgfTogeyB0YXJnZXQ6IGFueSB9KSA9PiB7XG4gICAgICB0aGlzLl9zZXRIYXNTY3JvbGxCYWNrZ3JvdW5kKHRhcmdldCk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9zZXRIYXNTY3JvbGxCYWNrZ3JvdW5kKHsgc2Nyb2xsVG9wLCBzY3JvbGxIZWlnaHQsIGNsaWVudEhlaWdodCB9KSB7XG4gICAgdGhpcy5oYXNTY3JvbGxCYWNrZ3JvdW5kID0gc2Nyb2xsSGVpZ2h0ID4gKHNjcm9sbFRvcCArIGNsaWVudEhlaWdodCk7XG4gIH1cblxuICBwcml2YXRlIF9saXN0ZW5BdXRvQ29tcGxldGVDaGFuZ2VzKCkge1xuICAgIHRoaXMub25lKCdhdy1ob21lLWF1dG9jb21wbGV0ZScpLnVwZGF0ZU9wdGlvbnMoe1xuICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdjb25maWcta2V5cycpLFxuICAgICAgbGFiZWxzOiB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdsYWJlbHMnKVxuICAgIH0pO1xuICAgIHRoaXMuYXV0b2NvbXBsZXRlQ2hhbmdlZCQucGlwZShcbiAgICAgIGRlYm91bmNlVGltZSg1MDApXG4gICAgKS5zdWJzY3JpYmUodmFsdWUgPT4ge1xuICAgICAgdGhpcy5ob21lQXV0b2NvbXBsZXRlUXVlcnkgPSB2YWx1ZTtcbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQoJ2F1dG9Db21wbGV0ZScsIHtcbiAgICAgICAgICBvbkVycm9yOiAoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpLFxuICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgaW5wdXQ6IHZhbHVlLFxuICAgICAgICAgICAgaXRlbXNQYWdpbmF0aW9uOiB7IG9mZnNldDogMCwgbGltaXQ6IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2hvbWUtbGF5b3V0JylbJ3Jlc3VsdHMtbGltaXQnXSB9XG4gICAgICAgICAgfVxuICAgICAgICB9KS5zdWJzY3JpYmUoKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgdGhpcy5vbmUoJ2F3LWhvbWUtYXV0b2NvbXBsZXRlJykudXBkYXRlKHJlc3BvbnNlKTtcbiAgICAgICAgICBpZiAoIXRoaXMuYXV0b2NvbXBsZXRlUG9wb3Zlck9wZW4pIHRoaXMuX3RvZ2dsZUF1dG9jb21wbGV0ZVBvcG92ZXIoKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl90b2dnbGVBdXRvY29tcGxldGVQb3BvdmVyKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF90b2dnbGVBdXRvY29tcGxldGVQb3BvdmVyKCkge1xuICAgIGlmICghdGhpcy5hdXRvY29tcGxldGVQb3BvdmVyKSB7XG4gICAgICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdy1ob21lLWFkdmFuY2VkLWF1dG9jb21wbGV0ZS1wb3BvdmVyJyk7XG4gICAgICB0ZW1wbGF0ZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIHRoaXMuYXV0b2NvbXBsZXRlUG9wb3ZlciA9IHRoaXMudGlwcHkoJy5hdy1ob21lX190b3AtaGVybyAubjctaGVyb19faW5wdXQnLCB7XG4gICAgICAgIGNvbnRlbnQ6IHRlbXBsYXRlLFxuICAgICAgICB0cmlnZ2VyOiAnbWFudWFsJyxcbiAgICAgICAgaW50ZXJhY3RpdmU6IHRydWUsXG4gICAgICAgIGFycm93OiBmYWxzZSxcbiAgICAgICAgZmxpcDogZmFsc2UsXG4gICAgICAgIGFwcGVuZFRvOiAncGFyZW50JyxcbiAgICAgICAgdGhlbWU6ICdsaWdodC1ib3JkZXInLFxuICAgICAgICBwbGFjZW1lbnQ6ICdib3R0b20tc3RhcnQnLFxuICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICBvbkhpZGRlbjogKCkgPT4gdGhpcy5hdXRvY29tcGxldGVQb3BvdmVyT3BlbiA9IGZhbHNlLFxuICAgICAgfSlbMF07XG4gICAgfVxuICAgIGlmICh0aGlzLmF1dG9jb21wbGV0ZVBvcG92ZXJPcGVuKSB7XG4gICAgICB0aGlzLmF1dG9jb21wbGV0ZVBvcG92ZXIuaGlkZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmF1dG9jb21wbGV0ZVBvcG92ZXIuc2hvdygpO1xuICAgIH1cbiAgICB0aGlzLmF1dG9jb21wbGV0ZVBvcG92ZXJPcGVuID0gIXRoaXMuYXV0b2NvbXBsZXRlUG9wb3Zlck9wZW47XG4gIH1cbn0iXX0=