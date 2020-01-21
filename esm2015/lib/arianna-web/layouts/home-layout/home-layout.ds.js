/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { LayoutDataSource } from '@n7-frontend/core';
import { Subject, forkJoin, fromEvent } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
export class AwHomeLayoutDS extends LayoutDataSource {
    constructor() {
        super(...arguments);
        this.facetInputs = {};
        this.autocompletePopoverOpen = false;
        this.autocompleteChanged$ = new Subject();
        this.numOfItemsStr = null;
        this.currentHoverEntity = null;
        this.hasScrollBackground = false;
        this.resultsLimit = -1;
        this.selectedEntitiesIds = [];
        this.destroyed$ = new Subject();
        // BUBBLE CHART DATA ↓
        this.bubblesEnabled = false; // true if this Arianna Web project has the bubble chart module
        // true if this Arianna Web project has the bubble chart module
        this.selectedBubbles = []; // array of IDs
        // store the first array of bubbles, to find them in case of zero results (entities data returned as empty array from backend)
        // BUBBLE CHART DATA ↑
        this.homeAutocompleteIsLoading = false;
        this.resultsListIsLoading = false;
        this.updateComponent = (/**
         * @param {?} id
         * @param {?} data
         * @param {?=} options
         * @return {?}
         */
        (id, data, options) => {
            // update components from EH
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
        // this.facetData = [];
        this.mainState = mainState;
        this.tippy = tippy;
        this.resultsLimit = this.configuration.get('home-layout')['results-limit'];
        this.bubblesEnabled = this.configuration.get('features-enabled') ? this.configuration.get('features-enabled')['bubblechart'] : false;
        this.one('aw-hero').update(this.configuration.get('home-layout')['top-hero']);
        this.one('aw-home-hero-patrimonio').update(this.configuration.get('home-layout')['bottom-hero']);
        // update streams
        this.mainState.update('headTitle', 'Arianna Web > Home');
        this.mainState.update('pageTitle', 'Arianna Web: Home Layout');
        this.mainState.updateCustom('currentNav', 'home');
        // listen autocomplete changes
        this._listenAutoCompleteChanges();
        this.outerLinks = this.configuration.get('home-layout')['outer-links']['test'];
        this.outerLinksTitle = this.configuration.get('home-layout')['outer-links']['title'];
        this.one('aw-bubble-chart').updateOptions({
            selectable: true,
            config: this.configuration,
            limit: this.configuration.get('bubble-chart').bubbleLimit
        });
    }
    /**
     * @return {?}
     */
    onDestroy() {
        this.destroyed$.next();
    }
    /**
     * @param {?} query
     * @param {?} params
     * @return {?}
     */
    makeRequest$(query, params) {
        // make request from EH
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
                entitiesListSize: this.configuration.get('home-layout')['entitiesQuerySize']
            },
        });
    }
    /**
     * @param {?} response
     * @return {?}
     */
    parseInitialRequest(response) {
        this.firstBubbleResponse = response.entitiesData;
        /** @type {?} */
        const facetData = [];
        response.typeOfEntityData.forEach((/**
         * @param {?} toe
         * @return {?}
         */
        (toe) => {
            /** @type {?} */
            const TOEconfigData = this.configuration.get("config-keys")[toe.type.replace(" ", "-")];
            facetData.push(Object.assign({}, toe, { enabled: true, locked: false, configKey: toe.type.replace(" ", "-") }, TOEconfigData));
        }));
        this.one('aw-home-facets-wrapper').update(facetData);
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
            this.numOfItemsStr = '0';
        }
        this.one('aw-linked-objects').updateOptions({
            context: 'home',
            config: this.configuration,
        });
        this.one('aw-linked-objects').update(response.itemsPagination);
        // scroll control
        setTimeout((/**
         * @return {?}
         */
        () => {
            this._scrollBackgroundControl();
        }));
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
     * @return {?}
     */
    renderItemTags() {
        /*
                    Try to build an item tag for each selected query looking at the data from the
                    first response. If the needed bubble data cannot be found, ask the backend
                    for that bubble's data.
                */
        /** @type {?} */
        let queryList = [] // list of pending queries
        ;
        // list of pending queries
        /** @type {?} */
        let tagsData = [] // list of tags data built from query
        ;
        this.selectedBubbles.forEach((/**
         * @param {?} b
         * @return {?}
         */
        b => {
            // try to get the data of each selected bubble
            /** @type {?} */
            let theBubble = this.firstBubbleResponse.find((/**
             * @param {?} el
             * @return {?}
             */
            el => el.entity.id == b));
            if (theBubble) { // if a bubble was found
                tagsData.push({
                    label: theBubble.entity.label,
                    icon: 'n7-icon-close',
                    payload: b,
                    classes: `tag-${theBubble.entity.typeOfEntity.replace(/ /g, '-')}`
                });
            }
            else { // if the bubble was not found, make a query
                // if the bubble was not found, make a query
                /** @type {?} */
                let params = { entityId: b, entitiesListSize: 1 };
                queryList.push(this.makeRequest$('getMissingBubble', params));
            }
        }));
        if (queryList.length > 0) { // if there are pending bubble queries
            forkJoin(queryList).subscribe((/**
             * @param {?} forkres
             * @return {?}
             */
            forkres => {
                forkres.forEach((/**
                 * @param {?} r
                 * @return {?}
                 */
                r => {
                    tagsData.push({
                        label: r.label,
                        icon: 'n7-icon-close',
                        payload: r.id,
                        classes: `tag-${r.typeOfEntity.replace(/ /g, '-')}`
                    });
                }));
                this.one('aw-home-item-tags-wrapper').update(tagsData);
            }));
        }
        else {
            this.one('aw-home-item-tags-wrapper').update(tagsData);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onHeroChange(value) {
        if (value) {
            this.autocompleteChanged$.next(value);
            this.homeAutocompleteIsLoading = true;
            this.homeAutocompleteQuery = value;
            if (!this.autocompletePopoverOpen) {
                this._toggleAutocompletePopover();
            }
        }
        else if (this.autocompletePopoverOpen) {
            this._toggleAutocompletePopover();
        }
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
        console.log('scroll', scrollTop, scrollHeight, clientHeight);
        this.hasScrollBackground = scrollHeight > (scrollTop + clientHeight);
    }
    /**
     * @private
     * @return {?}
     */
    _listenAutoCompleteChanges() {
        this.one('aw-home-autocomplete').updateOptions({
            keys: this.configuration.get('config-keys'),
            config: this.configuration,
            labels: this.configuration.get('labels')
        });
        this.autocompleteChanged$.pipe(debounceTime(500), takeUntil(this.destroyed$)).subscribe((/**
         * @param {?} value
         * @return {?}
         */
        value => {
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
                this.homeAutocompleteIsLoading = false;
                this.one('aw-home-autocomplete').update(response);
            }));
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
    AwHomeLayoutDS.prototype.facetInputs;
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
    AwHomeLayoutDS.prototype.numOfItemsStr;
    /** @type {?} */
    AwHomeLayoutDS.prototype.currentHoverEntity;
    /** @type {?} */
    AwHomeLayoutDS.prototype.hasScrollBackground;
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
    /**
     * @type {?}
     * @private
     */
    AwHomeLayoutDS.prototype.destroyed$;
    /** @type {?} */
    AwHomeLayoutDS.prototype.bubblesEnabled;
    /** @type {?} */
    AwHomeLayoutDS.prototype.selectedBubbles;
    /** @type {?} */
    AwHomeLayoutDS.prototype.lastBubbleResponse;
    /** @type {?} */
    AwHomeLayoutDS.prototype.firstBubbleResponse;
    /** @type {?} */
    AwHomeLayoutDS.prototype.homeAutocompleteIsLoading;
    /** @type {?} */
    AwHomeLayoutDS.prototype.resultsListIsLoading;
    /** @type {?} */
    AwHomeLayoutDS.prototype.updateComponent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1sYXlvdXQuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvbGF5b3V0cy9ob21lLWxheW91dC9ob21lLWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDckQsT0FBTyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekQsTUFBTSxPQUFPLGNBQWUsU0FBUSxnQkFBZ0I7SUFBcEQ7O1FBS1ksZ0JBQVcsR0FBUSxFQUFFLENBQUM7UUFFdEIsNEJBQXVCLEdBQUcsS0FBSyxDQUFDO1FBQ2hDLHlCQUFvQixHQUFvQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ3ZELGtCQUFhLEdBQVcsSUFBSSxDQUFDO1FBQzdCLHVCQUFrQixHQUFRLElBQUksQ0FBQztRQUMvQix3QkFBbUIsR0FBRyxLQUFLLENBQUM7UUFDNUIsaUJBQVksR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNsQix3QkFBbUIsR0FBRyxFQUFFLENBQUM7UUFJeEIsZUFBVSxHQUFpQixJQUFJLE9BQU8sRUFBRSxDQUFDOztRQUUxQyxtQkFBYyxHQUFHLEtBQUssQ0FBQyxDQUFDLCtEQUErRDs7UUFDdkYsb0JBQWUsR0FBVSxFQUFFLENBQUEsQ0FBTSxlQUFlOzs7UUFJaEQsOEJBQXlCLEdBQUcsS0FBSyxDQUFDO1FBQ2xDLHlCQUFvQixHQUFHLEtBQUssQ0FBQztRQXVDN0Isb0JBQWU7Ozs7OztRQUFHLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxPQUFRLEVBQUUsRUFBRTtZQUM1Qyw0QkFBNEI7WUFDNUIsSUFBSSxPQUFPLEVBQUU7Z0JBQ1QsSUFBSSxDQUFD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dERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0LCBmb3JrSm9pbiwgZnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuZXhwb3J0IGNsYXNzIEF3SG9tZUxheW91dERTIGV4dGVuZHMgTGF5b3V0RGF0YVNvdXJjZSB7XG4gICAgcHJpdmF0ZSBjb21tdW5pY2F0aW9uOiBhbnk7XG4gICAgcHJpdmF0ZSBtYWluU3RhdGU6IGFueTtcbiAgICBwcml2YXRlIHRpcHB5OiBhbnk7XG4gICAgcHJpdmF0ZSBjb25maWd1cmF0aW9uOiBhbnk7XG4gICAgcHJpdmF0ZSBmYWNldElucHV0czogYW55ID0ge307XG4gICAgcHJpdmF0ZSBhdXRvY29tcGxldGVQb3BvdmVyOiBhbnk7XG4gICAgcHJpdmF0ZSBhdXRvY29tcGxldGVQb3BvdmVyT3BlbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgYXV0b2NvbXBsZXRlQ2hhbmdlZCQ6IFN1YmplY3Q8c3RyaW5nPiA9IG5ldyBTdWJqZWN0KCk7XG4gICAgcHVibGljIG51bU9mSXRlbXNTdHI6IHN0cmluZyA9IG51bGw7XG4gICAgcHVibGljIGN1cnJlbnRIb3ZlckVudGl0eTogYW55ID0gbnVsbDtcbiAgICBwdWJsaWMgaGFzU2Nyb2xsQmFja2dyb3VuZCA9IGZhbHNlO1xuICAgIHB1YmxpYyByZXN1bHRzTGltaXQgPSAtMTtcbiAgICBwdWJsaWMgc2VsZWN0ZWRFbnRpdGllc0lkcyA9IFtdO1xuICAgIHB1YmxpYyBvdXRlckxpbmtzOiBhbnk7XG4gICAgcHVibGljIG91dGVyTGlua3NUaXRsZTogc3RyaW5nO1xuICAgIHB1YmxpYyBob21lQXV0b2NvbXBsZXRlUXVlcnk6IHN0cmluZztcbiAgICBwcml2YXRlIGRlc3Ryb3llZCQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0KCk7XG4gICAgLy8gQlVCQkxFIENIQVJUIERBVEEg4oaTXG4gICAgcHVibGljIGJ1YmJsZXNFbmFibGVkID0gZmFsc2U7IC8vIHRydWUgaWYgdGhpcyBBcmlhbm5hIFdlYiBwcm9qZWN0IGhhcyB0aGUgYnViYmxlIGNoYXJ0IG1vZHVsZVxuICAgIHB1YmxpYyBzZWxlY3RlZEJ1YmJsZXM6IGFueVtdID0gW10gICAgICAvLyBhcnJheSBvZiBJRHNcbiAgICBwdWJsaWMgbGFzdEJ1YmJsZVJlc3BvbnNlOiBhbnkgICAgICAgICAgLy8gc3RvcmUgbGFzdCBidWJibGUgcmVzcG9uc2UgdG8gcmVmcmVzaCB0aGUgZ3JhcGggd2l0aCB0aGUgc2FtZSBkYXRhXG4gICAgcHVibGljIGZpcnN0QnViYmxlUmVzcG9uc2U6IGFueSAgICAgICAgIC8vIHN0b3JlIHRoZSBmaXJzdCBhcnJheSBvZiBidWJibGVzLCB0byBmaW5kIHRoZW0gaW4gY2FzZSBvZiB6ZXJvIHJlc3VsdHMgKGVudGl0aWVzIGRhdGEgcmV0dXJuZWQgYXMgZW1wdHkgYXJyYXkgZnJvbSBiYWNrZW5kKVxuICAgIC8vIEJVQkJMRSBDSEFSVCBEQVRBIOKGkVxuICAgIHB1YmxpYyBob21lQXV0b2NvbXBsZXRlSXNMb2FkaW5nID0gZmFsc2U7XG4gICAgcHVibGljIHJlc3VsdHNMaXN0SXNMb2FkaW5nID0gZmFsc2U7XG5cbiAgICBvbkluaXQoeyBjb21tdW5pY2F0aW9uLCBtYWluU3RhdGUsIGNvbmZpZ3VyYXRpb24sIHRpcHB5IH0pIHtcbiAgICAgICAgdGhpcy5jb21tdW5pY2F0aW9uID0gY29tbXVuaWNhdGlvbjtcbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uID0gY29uZmlndXJhdGlvbjtcbiAgICAgICAgLy8gdGhpcy5mYWNldERhdGEgPSBbXTtcbiAgICAgICAgdGhpcy5tYWluU3RhdGUgPSBtYWluU3RhdGU7XG4gICAgICAgIHRoaXMudGlwcHkgPSB0aXBweTtcbiAgICAgICAgdGhpcy5yZXN1bHRzTGltaXQgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdob21lLWxheW91dCcpWydyZXN1bHRzLWxpbWl0J11cbiAgICAgICAgdGhpcy5idWJibGVzRW5hYmxlZCA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2ZlYXR1cmVzLWVuYWJsZWQnKSA/IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2ZlYXR1cmVzLWVuYWJsZWQnKVsnYnViYmxlY2hhcnQnXSA6IGZhbHNlO1xuICAgICAgICB0aGlzLm9uZSgnYXctaGVybycpLnVwZGF0ZSh0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdob21lLWxheW91dCcpWyd0b3AtaGVybyddKTtcbiAgICAgICAgdGhpcy5vbmUoJ2F3LWhvbWUtaGVyby1wYXRyaW1vbmlvJykudXBkYXRlKHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2hvbWUtbGF5b3V0JylbJ2JvdHRvbS1oZXJvJ10pO1xuICAgICAgICAvLyB1cGRhdGUgc3RyZWFtc1xuICAgICAgICB0aGlzLm1haW5TdGF0ZS51cGRhdGUoJ2hlYWRUaXRsZScsICdBcmlhbm5hIFdlYiA+IEhvbWUnKTtcbiAgICAgICAgdGhpcy5tYWluU3RhdGUudXBkYXRlKCdwYWdlVGl0bGUnLCAnQXJpYW5uYSBXZWI6IEhvbWUgTGF5b3V0Jyk7XG4gICAgICAgIHRoaXMubWFpblN0YXRlLnVwZGF0ZUN1c3RvbSgnY3VycmVudE5hdicsICdob21lJyk7XG4gICAgICAgIC8vIGxpc3RlbiBhdXRvY29tcGxldGUgY2hhbmdlc1xuICAgICAgICB0aGlzLl9saXN0ZW5BdXRvQ29tcGxldGVDaGFuZ2VzKCk7XG4gICAgICAgIHRoaXMub3V0ZXJMaW5rcyA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2hvbWUtbGF5b3V0JylbJ291dGVyLWxpbmtzJ11bJ3Rlc3QnXTtcbiAgICAgICAgdGhpcy5vdXRlckxpbmtzVGl0bGUgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdob21lLWxheW91dCcpWydvdXRlci1saW5rcyddWyd0aXRsZSddO1xuICAgICAgICB0aGlzLm9uZSgnYXctYnViYmxlLWNoYXJ0JykudXBkYXRlT3B0aW9ucyh7XG4gICAgICAgICAgICBzZWxlY3RhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZ3VyYXRpb24sXG4gICAgICAgICAgICBsaW1pdDogdGhpcy5jb25maWd1cmF0aW9uLmdldCgnYnViYmxlLWNoYXJ0JykuYnViYmxlTGltaXRcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBvbkRlc3Ryb3koKXtcbiAgICAgICAgdGhpcy5kZXN0cm95ZWQkLm5leHQoKVxuICAgIH1cblxuICAgIHB1YmxpYyBtYWtlUmVxdWVzdCQocXVlcnksIHBhcmFtcykge1xuICAgICAgICAvLyBtYWtlIHJlcXVlc3QgZnJvbSBFSFxuICAgICAgICByZXR1cm4gdGhpcy5jb21tdW5pY2F0aW9uLnJlcXVlc3QkKHF1ZXJ5LCB7XG4gICAgICAgICAgICBvbkVycm9yOiAoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpLFxuICAgICAgICAgICAgcGFyYW1zXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGVDb21wb25lbnQgPSAoaWQsIGRhdGEsIG9wdGlvbnM/KSA9PiB7XG4gICAgICAgIC8vIHVwZGF0ZSBjb21wb25lbnRzIGZyb20gRUhcbiAgICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgICAgIHRoaXMub25lKGlkKS51cGRhdGVPcHRpb25zKG9wdGlvbnMpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vbmUoaWQpLnVwZGF0ZShkYXRhKVxuICAgIH1cblxuICAgIGluaXRpYWxGaWx0ZXJSZXF1ZXN0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb21tdW5pY2F0aW9uLnJlcXVlc3QkKCdnbG9iYWxGaWx0ZXInLCB7XG4gICAgICAgICAgICBvbkVycm9yOiAoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpLFxuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgZW50aXRpZXNMaXN0U2l6ZTogdGhpcy5jb25maWd1cmF0aW9uLmdldCgnaG9tZS1sYXlvdXQnKVsnZW50aXRpZXNRdWVyeVNpemUnXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwYXJzZUluaXRpYWxSZXF1ZXN0KHJlc3BvbnNlKSB7XG4gICAgICAgIHRoaXMuZmlyc3RCdWJibGVSZXNwb25zZSA9IHJlc3BvbnNlLmVudGl0aWVzRGF0YVxuICAgICAgICBjb25zdCBmYWNldERhdGEgPSBbXVxuICAgICAgICByZXNwb25zZS50eXBlT2ZFbnRpdHlEYXRhLmZvckVhY2goKHRvZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgVE9FY29uZmlnRGF0YSA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoXCJjb25maWcta2V5c1wiKVt0b2UudHlwZS5yZXBsYWNlKFwiIFwiLCBcIi1cIildO1xuICAgICAgICAgICAgZmFjZXREYXRhLnB1c2goe1xuICAgICAgICAgICAgICAgIC4uLnRvZSxcbiAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIGxvY2tlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgY29uZmlnS2V5OiB0b2UudHlwZS5yZXBsYWNlKFwiIFwiLCBcIi1cIiksXG4gICAgICAgICAgICAgICAgLi4uVE9FY29uZmlnRGF0YVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLm9uZSgnYXctaG9tZS1mYWNldHMtd3JhcHBlcicpLnVwZGF0ZShmYWNldERhdGEpO1xuICAgIH1cblxuICAgIHJlbmRlclByZXZpZXdzRnJvbUFwb2xsb1F1ZXJ5KHJlc3BvbnNlOiBhbnkpIHtcbiAgICAgICAgaWYgKCFyZXNwb25zZSB8fCAhcmVzcG9uc2UuaXRlbXNQYWdpbmF0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfTtcbiAgICAgICAgbGV0IG51bU9mSXRlbXMgPSByZXNwb25zZS5pdGVtc1BhZ2luYXRpb24udG90YWxDb3VudDtcbiAgICAgICAgaWYgKG51bU9mSXRlbXMgPiAwKSB7XG4gICAgICAgICAgICBsZXQgbnVtT2ZUaG91c2FuZCA9IDA7XG4gICAgICAgICAgICB3aGlsZSAobnVtT2ZJdGVtcyA+IDk5OSkge1xuICAgICAgICAgICAgICAgIG51bU9mSXRlbXMgLT0gMTAwMDtcbiAgICAgICAgICAgICAgICBudW1PZlRob3VzYW5kICs9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgbnVtT2ZJdGVtc1RtcFN0ciA9IG51bU9mSXRlbXMgKyAnJztcbiAgICAgICAgICAgIGlmIChudW1PZkl0ZW1zIDwgMTApIG51bU9mSXRlbXNUbXBTdHIgPSAnMDAnICsgbnVtT2ZJdGVtcztcbiAgICAgICAgICAgIGVsc2UgaWYgKG51bU9mSXRlbXMgPCAxMDApIG51bU9mSXRlbXNUbXBTdHIgPSAnMCcgKyBudW1PZkl0ZW1zO1xuICAgICAgICAgICAgaWYgKG51bU9mVGhvdXNhbmQgPiAwKVxuICAgICAgICAgICAgICAgIHRoaXMubnVtT2ZJdGVtc1N0ciA9IG51bU9mVGhvdXNhbmQgKyAnLicgKyBudW1PZkl0ZW1zVG1wU3RyO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHRoaXMubnVtT2ZJdGVtc1N0ciA9IG51bU9mSXRlbXMgKyAnJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubnVtT2ZJdGVtc1N0ciA9ICcwJztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9uZSgnYXctbGlua2VkLW9iamVjdHMnKS51cGRhdGVPcHRpb25zKHtcbiAgICAgICAgICAgIGNvbnRleHQ6ICdob21lJyxcbiAgICAgICAgICAgIGNvbmZpZzogdGhpcy5jb25maWd1cmF0aW9uLFxuICAgICAgICB9KVxuICAgICAgICB0aGlzLm9uZSgnYXctbGlua2VkLW9iamVjdHMnKS51cGRhdGUocmVzcG9uc2UuaXRlbXNQYWdpbmF0aW9uKTtcblxuICAgICAgICAvLyBzY3JvbGwgY29udHJvbFxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3Njcm9sbEJhY2tncm91bmRDb250cm9sKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGVUYWdzKG9ubHlCdWJibGVzPzogYm9vbGVhbikge1xuICAgICAgICBpZiAoIW9ubHlCdWJibGVzKSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlckl0ZW1UYWdzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVGYWNldFNlYXJjaENoYW5nZShjaGFuZ2UpIHtcbiAgICAgICAgdmFyIHBheWxvYWQ6IHN0cmluZyA9IGNoYW5nZS5pbnB1dFBheWxvYWQ7XG4gICAgICAgIHZhciB2YWx1ZTogc3RyaW5nID0gY2hhbmdlLnZhbHVlO1xuICAgICAgICAvLyBzdG9yZSB0aGUgZW50ZXJlZCB0ZXh0IGluIGZhY2V0SW5wdXRzXG4gICAgICAgIHRoaXMuZmFjZXRJbnB1dHNbcGF5bG9hZF0gPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBoYW5kbGVGYWNldFNlYXJjaEVudGVyKGVudGVyKSB7XG4gICAgICAgIHZhciBwYXlsb2FkOiBzdHJpbmcgPSBlbnRlci5pbnB1dFBheWxvYWQ7XG4gICAgICAgIC8vIGdldCB0aGUgdGV4dCBlbnRlcmVkIGluIHRoaXMgaW5wdXRcbiAgICAgICAgdmFyIHZhbHVlOiBzdHJpbmcgPSB0aGlzLmZhY2V0SW5wdXRzW3BheWxvYWRdO1xuICAgIH1cblxuICAgIHJlbmRlckl0ZW1UYWdzKCkge1xuICAgICAgICAvKlxuICAgICAgICAgICAgVHJ5IHRvIGJ1aWxkIGFuIGl0ZW0gdGFnIGZvciBlYWNoIHNlbGVjdGVkIHF1ZXJ5IGxvb2tpbmcgYXQgdGhlIGRhdGEgZnJvbSB0aGVcbiAgICAgICAgICAgIGZpcnN0IHJlc3BvbnNlLiBJZiB0aGUgbmVlZGVkIGJ1YmJsZSBkYXRhIGNhbm5vdCBiZSBmb3VuZCwgYXNrIHRoZSBiYWNrZW5kXG4gICAgICAgICAgICBmb3IgdGhhdCBidWJibGUncyBkYXRhLlxuICAgICAgICAqL1xuICAgICAgICBsZXQgcXVlcnlMaXN0ID0gW10gLy8gbGlzdCBvZiBwZW5kaW5nIHF1ZXJpZXNcbiAgICAgICAgbGV0IHRhZ3NEYXRhID0gW10gIC8vIGxpc3Qgb2YgdGFncyBkYXRhIGJ1aWx0IGZyb20gcXVlcnlcbiAgICAgICAgdGhpcy5zZWxlY3RlZEJ1YmJsZXMuZm9yRWFjaChiID0+IHsgLy8gdHJ5IHRvIGdldCB0aGUgZGF0YSBvZiBlYWNoIHNlbGVjdGVkIGJ1YmJsZVxuICAgICAgICAgICAgbGV0IHRoZUJ1YmJsZSA9IHRoaXMuZmlyc3RCdWJibGVSZXNwb25zZS5maW5kKGVsID0+IGVsLmVudGl0eS5pZCA9PSBiKVxuICAgICAgICAgICAgaWYgKHRoZUJ1YmJsZSkgeyAvLyBpZiBhIGJ1YmJsZSB3YXMgZm91bmRcbiAgICAgICAgICAgICAgICB0YWdzRGF0YS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IHRoZUJ1YmJsZS5lbnRpdHkubGFiZWwsXG4gICAgICAgICAgICAgICAgICAgIGljb246ICduNy1pY29uLWNsb3NlJyxcbiAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDogYixcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NlczogYHRhZy0ke3RoZUJ1YmJsZS5lbnRpdHkudHlwZU9mRW50aXR5LnJlcGxhY2UoLyAvZywgJy0nKX1gXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0gZWxzZSB7IC8vIGlmIHRoZSBidWJibGUgd2FzIG5vdCBmb3VuZCwgbWFrZSBhIHF1ZXJ5XG4gICAgICAgICAgICAgICAgbGV0IHBhcmFtcyA9IHsgZW50aXR5SWQ6IGIsIGVudGl0aWVzTGlzdFNpemU6IDEgfVxuICAgICAgICAgICAgICAgIHF1ZXJ5TGlzdC5wdXNoKHRoaXMubWFrZVJlcXVlc3QkKCdnZXRNaXNzaW5nQnViYmxlJywgcGFyYW1zKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChxdWVyeUxpc3QubGVuZ3RoID4gMCkgeyAvLyBpZiB0aGVyZSBhcmUgcGVuZGluZyBidWJibGUgcXVlcmllc1xuICAgICAgICAgICAgZm9ya0pvaW4ocXVlcnlMaXN0KS5zdWJzY3JpYmUoZm9ya3JlcyA9PiB7XG4gICAgICAgICAgICAgICAgZm9ya3Jlcy5mb3JFYWNoKHIgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0YWdzRGF0YS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiByLmxhYmVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ243LWljb24tY2xvc2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDogci5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXM6IGB0YWctJHtyLnR5cGVPZkVudGl0eS5yZXBsYWNlKC8gL2csICctJyl9YFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMub25lKCdhdy1ob21lLWl0ZW0tdGFncy13cmFwcGVyJykudXBkYXRlKHRhZ3NEYXRhKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm9uZSgnYXctaG9tZS1pdGVtLXRhZ3Mtd3JhcHBlcicpLnVwZGF0ZSh0YWdzRGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkhlcm9DaGFuZ2UodmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLmF1dG9jb21wbGV0ZUNoYW5nZWQkLm5leHQodmFsdWUpO1xuICAgICAgICAgICAgdGhpcy5ob21lQXV0b2NvbXBsZXRlSXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuaG9tZUF1dG9jb21wbGV0ZVF1ZXJ5ID0gdmFsdWU7XG4gICAgICAgICAgICBpZiAoIXRoaXMuYXV0b2NvbXBsZXRlUG9wb3Zlck9wZW4pIHtcbiAgICAgICAgICAgICAgICB0aGlzLl90b2dnbGVBdXRvY29tcGxldGVQb3BvdmVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5hdXRvY29tcGxldGVQb3BvdmVyT3Blbikge1xuICAgICAgICAgICAgdGhpcy5fdG9nZ2xlQXV0b2NvbXBsZXRlUG9wb3ZlcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfc2Nyb2xsQmFja2dyb3VuZENvbnRyb2woKSB7XG4gICAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1YmJsZS1yZXN1bHRzLWxpc3QnKSxcbiAgICAgICAgICAgIHNvdXJjZSQgPSBmcm9tRXZlbnQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1YmJsZS1yZXN1bHRzLWxpc3QnKSwgJ3Njcm9sbCcpO1xuXG4gICAgICAgIC8vIGhlaWdodCBjb250cm9sXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fc2V0SGFzU2Nyb2xsQmFja2dyb3VuZChlbCk7XG4gICAgICAgIH0sIDUwMCk7XG5cbiAgICAgICAgLy8gc2Nyb2xsIGxpc3RlblxuICAgICAgICBzb3VyY2UkLnBpcGUoXG4gICAgICAgICAgICBkZWJvdW5jZVRpbWUoNTApXG4gICAgICAgICkuc3Vic2NyaWJlKCh7IHRhcmdldCB9OiB7IHRhcmdldDogYW55IH0pID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3NldEhhc1Njcm9sbEJhY2tncm91bmQodGFyZ2V0KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfc2V0SGFzU2Nyb2xsQmFja2dyb3VuZCh7IHNjcm9sbFRvcCwgc2Nyb2xsSGVpZ2h0LCBjbGllbnRIZWlnaHQgfSkge1xuICAgICAgICBjb25zb2xlLmxvZygnc2Nyb2xsJywgc2Nyb2xsVG9wLCBzY3JvbGxIZWlnaHQsIGNsaWVudEhlaWdodCk7XG4gICAgICAgIHRoaXMuaGFzU2Nyb2xsQmFja2dyb3VuZCA9IHNjcm9sbEhlaWdodCA+IChzY3JvbGxUb3AgKyBjbGllbnRIZWlnaHQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2xpc3RlbkF1dG9Db21wbGV0ZUNoYW5nZXMoKSB7XG4gICAgICAgIHRoaXMub25lKCdhdy1ob21lLWF1dG9jb21wbGV0ZScpLnVwZGF0ZU9wdGlvbnMoe1xuICAgICAgICAgICAga2V5czogdGhpcy5jb25maWd1cmF0aW9uLmdldCgnY29uZmlnLWtleXMnKSxcbiAgICAgICAgICAgIGNvbmZpZzogdGhpcy5jb25maWd1cmF0aW9uLFxuICAgICAgICAgICAgbGFiZWxzOiB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdsYWJlbHMnKVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hdXRvY29tcGxldGVDaGFuZ2VkJC5waXBlKFxuICAgICAgICAgICAgZGVib3VuY2VUaW1lKDUwMCksXG4gICAgICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95ZWQkKVxuICAgICAgICApLnN1YnNjcmliZSh2YWx1ZSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQoJ2F1dG9Db21wbGV0ZScsIHtcbiAgICAgICAgICAgICAgICBvbkVycm9yOiAoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpLFxuICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICBpbnB1dDogdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zUGFnaW5hdGlvbjogeyBvZmZzZXQ6IDAsIGxpbWl0OiB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdob21lLWxheW91dCcpWydyZXN1bHRzLWxpbWl0J10gfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmhvbWVBdXRvY29tcGxldGVJc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLm9uZSgnYXctaG9tZS1hdXRvY29tcGxldGUnKS51cGRhdGUocmVzcG9uc2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3RvZ2dsZUF1dG9jb21wbGV0ZVBvcG92ZXIoKSB7XG4gICAgICAgIGlmICghdGhpcy5hdXRvY29tcGxldGVQb3BvdmVyKSB7XG4gICAgICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdy1ob21lLWFkdmFuY2VkLWF1dG9jb21wbGV0ZS1wb3BvdmVyJyk7XG4gICAgICAgICAgICB0ZW1wbGF0ZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgIHRoaXMuYXV0b2NvbXBsZXRlUG9wb3ZlciA9IHRoaXMudGlwcHkoJy5hdy1ob21lX190b3AtaGVybyAubjctaGVyb19faW5wdXQnLCB7XG4gICAgICAgICAgICAgICAgY29udGVudDogdGVtcGxhdGUsXG4gICAgICAgICAgICAgICAgdHJpZ2dlcjogJ21hbnVhbCcsXG4gICAgICAgICAgICAgICAgaW50ZXJhY3RpdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgYXJyb3c6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGZsaXA6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGFwcGVuZFRvOiAncGFyZW50JyxcbiAgICAgICAgICAgICAgICB0aGVtZTogJ2xpZ2h0LWJvcmRlcicsXG4gICAgICAgICAgICAgICAgcGxhY2VtZW50OiAnYm90dG9tLXN0YXJ0JyxcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIG9uSGlkZGVuOiAoKSA9PiB0aGlzLmF1dG9jb21wbGV0ZVBvcG92ZXJPcGVuID0gZmFsc2UsXG4gICAgICAgICAgICB9KVswXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5hdXRvY29tcGxldGVQb3BvdmVyT3Blbikge1xuICAgICAgICAgICAgdGhpcy5hdXRvY29tcGxldGVQb3BvdmVyLmhpZGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYXV0b2NvbXBsZXRlUG9wb3Zlci5zaG93KCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hdXRvY29tcGxldGVQb3BvdmVyT3BlbiA9ICF0aGlzLmF1dG9jb21wbGV0ZVBvcG92ZXJPcGVuO1xuICAgIH1cbn1cbiJdfQ==