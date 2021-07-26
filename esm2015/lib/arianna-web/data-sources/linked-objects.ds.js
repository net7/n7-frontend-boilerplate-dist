import { DataSource } from '@n7-frontend/core';
import { get as _get } from 'lodash'; // used for cherry-picking object keys from app-config.json
import helpers from '../../common/helpers';
export class AwLinkedObjectsDS extends DataSource {
    constructor() {
        super(...arguments);
        this.loadingData = false;
        this.checkForMore = (force) => {
            /*
              Checks if it is possible to load more item previews.
              Can receive a boolean argument to force the button to be
              enabled or disabled. (Used while data is loading)
            */
            if (!this.loadedData.actions) {
                // if not using actions, don't check
                return;
            }
            if (typeof force !== 'undefined') {
                this.loadedData.actions[1].disabled = !force;
                return;
            }
            if (this.loadedData.result.length >= this.totalObjects) {
                this.loadedData.actions[1].disabled = true;
            }
            else {
                this.loadedData.actions[1].disabled = false;
            }
        };
        this.handleIncomingData = (incomingData) => {
            /*
              Called by infinite scroller, adds the incoming
              data to the linked objects component.
            */
            this.currentPage += 1;
            const newData = this.unpackData(incomingData.itemsPagination);
            this.loadedData.result = this.loadedData.result.concat(newData.result);
            this.checkForMore();
            this.loadedData.isLoading = false;
        };
        /**
         * Dynamically returns the data object for each HTML component
         *  data: {
         *     previews: [ breadcrumbs: { items[] }, classes, image, metadata, payload, title ],
         *     pagination: { first, last, links, next, prev, select }
         *   }
         */
        this.unpackData = (data) => {
            const { config } = this.options; // app-config.json
            const paths = config.get('item-preview'); // item preview dynamic paths
            const { totalCount } = data; // total amount of items available on backend
            const page = this.currentPage; // current page (if using pagination)
            const { context } = this; // parent layout name
            const size = this.pageSize; // items per page (if using pagination)
            const labels = config.get('labels');
            const { dynamicPagination } = this.options;
            const keys = config ? config.get('config-keys') : {};
            let lengthLimit;
            let resultsLimit;
            let d = data.items ? data.items : data.relatedItems; // items to iterate over
            if (config) {
                // dynamic search for max-item-length
                if (config.get(`${context}-layout`)) {
                    lengthLimit = config.get(`${context}-layout`)['max-item-length'];
                    resultsLimit = config.get(`${context}-layout`)['results-limit'];
                }
            }
            // resize data if necessary
            if (!dynamicPagination && size && page && d.length > size) {
                d = d.slice(page * size - size, page * size);
            }
            else if (size) {
                d = d.slice(0, size);
            }
            const result = [];
            const enabledKeys = paths.metadata.info.selection.map((info) => info.key);
            d.forEach((el) => {
                const itemData = el.item ? el.item : el;
                const infoData = _get(el, paths.metadata.info.data, itemData.fields);
                const toeData = _get(el, paths.metadata.toe.data, itemData.relatedTypesOfEntity);
                const breadcrumbs = _get(el, paths.metadata.breadcrumbs.data, itemData.breadcrumbs);
                let infoDataItems = infoData
                    ? infoData.filter((info) => enabledKeys.indexOf(info.key) !== -1)
                    : [];
                // order metadata
                infoDataItems = infoDataItems.map((info) => (Object.assign(Object.assign({}, info), { order: enabledKeys.indexOf(info.key) })));
                infoDataItems.sort((a, b) => a.order - b.order);
                if (['entita', 'search', 'gallery'].includes(context)) {
                    if (itemData.typeOfEntity && itemData.typeOfEntity !== '') {
                        infoDataItems.push({ key: 'Tipo di entità', value: keys[itemData.typeOfEntity]['singular-label'] });
                    }
                }
                let classes = ['entita', 'search', 'oggetti-collegati'].includes(context) ? 'is-fullwidth' : '';
                classes += itemData.typeOfEntity ? ` is-${config.get('config-keys')[itemData.typeOfEntity]['class-name']}` : ' is-oggetto-culturale';
                // gallery classes
                if (context === 'gallery') {
                    classes += ' is-vertical has-image';
                }
                // consider the lenght of <em> tags to exclude from count
                const highlights = _get(el, paths.title, itemData.label).match(/<em>/g) ? _get(el, paths.title, itemData.label).match(/<em>/g).length * 9 : 0;
                const itemTitle = +paths.title.maxLength
                    && _get(el, paths.title, itemData.label).length > +paths.title.maxLength + highlights
                    ? `${_get(el, paths.title, itemData.label).slice(0, +paths.title.maxLength + highlights)}…`
                    : _get(el, paths.title, itemData.label);
                const itemId = _get(el, paths.payload, itemData.id);
                const itemType = itemData.typeOfEntity;
                const itemHref = [
                    itemType ? config.get('paths').entitaBasePath : config.get('paths').schedaBasePath,
                    itemId,
                    helpers.slugify(itemTitle),
                ].join('/');
                let text;
                if (!paths.text) {
                    text = null;
                }
                else if (+paths.text.maxLength
                    && _get(el, paths.text.data, itemData.text).length > +paths.text.maxLength) {
                    text = `${_get(el, paths.text.data, itemData.text).slice(0, +paths.text.maxLength)}…`;
                }
                else {
                    text = _get(el, paths.text.data, itemData.text);
                }
                const item = {
                    text,
                    classes,
                    breadcrumbs,
                    image: _get(el, paths.image, itemData.image),
                    title: itemTitle,
                    anchor: {
                        href: itemHref,
                        target: ['gallery', 'search'].includes(context) ? '_blank' : '_self'
                    },
                    relation: { key: el.relationName, value: el.relation },
                    metadata: infoDataItems.length || toeData ? [] : null,
                };
                // metadata
                if (infoDataItems.length) {
                    item.metadata.push({
                        classes: 'aw-item-preview_metadata',
                        items: infoDataItems.map((infoDItem) => ({
                            label: helpers.prettifySnakeCase(infoDItem.key, labels[infoDItem.key]),
                            value: infoDItem.value,
                        })),
                    });
                }
                if (toeData) {
                    item.metadata.push({
                        classes: 'aw-item-preview-entities',
                        items: toeData.map((toe) => ({
                            value: _get(toe, paths.metadata.toe.value, toe.count),
                            // icon: 'n7-icon-bell' // TODO: link icon to config key
                            icon: keys[_get(toe, paths.metadata.toe.icon, toe.type)]
                                ? keys[_get(toe, paths.metadata.toe.icon, toe.type)].icon
                                : '',
                            classes: `color-${keys[_get(toe, paths.metadata.toe.icon, toe.type)]['class-name']}`,
                        })),
                    });
                }
                // breadcrumbs
                if (breadcrumbs) {
                    item.breadcrumbs = {
                        items: _get(el, paths.metadata.breadcrumbs.data, el.item.breadcrumbs).map((crumb) => {
                            const label = _get(crumb, paths.metadata.breadcrumbs.label, crumb.label);
                            return {
                                label,
                                anchor: {
                                    href: itemHref,
                                },
                            };
                        }),
                    };
                }
                result.push(item);
            });
            if (context === 'home') {
                const actions = [
                    {
                        label: `Mostra Tutti (${totalCount})`,
                    },
                    lengthLimit
                        ? {
                            label: `Mostra Altri (${resultsLimit})`,
                            disabled: false,
                        } : null,
                ];
                return {
                    result,
                    actions,
                    isLoading: false,
                    fallback: config.get('home-layout')['linked-objects-fallback'],
                };
            }
            return { previews: result };
        };
    }
    transform(data) {
        this.paths = this.options.config.get('item-preview');
        this.pageSize = this.options.size;
        this.totalObjects = data.totalCount;
        this.currentPage = this.options.page ? +this.options.page : 1;
        if (this.options.dynamicPagination && this.options.dynamicPagination.total) {
            this.totalPages = Math.ceil(this.options.dynamicPagination.total / this.pageSize);
        }
        else if (data.items) {
            this.totalPages = Math.ceil(data.items.length / this.pageSize);
        }
        else if (data.relatedItems) {
            this.totalPages = Math.ceil(data.relatedItems.length / this.pageSize);
        }
        this.context = this.options.context;
        this.loadedData = this.unpackData(data);
        this.checkForMore(); // checks if <Show More> button should be enabled
        this.loadedData.loaderData = {};
        return this.loadedData;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlua2VkLW9iamVjdHMuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL2xpbmtlZC1vYmplY3RzLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsR0FBRyxJQUFJLElBQUksRUFBRSxNQUFNLFFBQVEsQ0FBQyxDQUFDLDJEQUEyRDtBQUNqRyxPQUFPLE9BQU8sTUFBTSxzQkFBc0IsQ0FBQztBQUUzQyxNQUFNLE9BQU8saUJBQWtCLFNBQVEsVUFBVTtJQUFqRDs7UUFhUyxnQkFBVyxHQUFHLEtBQUssQ0FBQztRQXVCbEIsaUJBQVksR0FBRyxDQUFDLEtBQWUsRUFBRSxFQUFFO1lBQ3hDOzs7O2NBSUU7WUFDRixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUU7Z0JBQzVCLG9DQUFvQztnQkFDcEMsT0FBTzthQUNSO1lBQ0QsSUFBSSxPQUFPLEtBQUssS0FBSyxXQUFXLEVBQUU7Z0JBQ2hDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxDQUFDLEtBQUssQ0FBQztnQkFDN0MsT0FBTzthQUNSO1lBQ0QsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtnQkFDdEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQzthQUM1QztpQkFBTTtnQkFDTCxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO2FBQzdDO1FBQ0gsQ0FBQyxDQUFBO1FBRUksdUJBQWtCLEdBQUcsQ0FBQyxZQUFZLEVBQUUsRUFBRTtZQUMzQzs7O2NBR0U7WUFDRixJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsQ0FBQztZQUN0QixNQUFNLE9BQU8sR0FBUSxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUNuRSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3ZFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNwQixJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDcEMsQ0FBQyxDQUFBO1FBRUQ7Ozs7OztXQU1HO1FBQ0ssZUFBVSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDNUIsTUFDRSxFQUFFLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxrQkFBa0I7WUFDL0MsTUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLDZCQUE2QjtZQUN2RSxNQUFNLEVBQUUsVUFBVSxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUMsNkNBQTZDO1lBQzFFLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxxQ0FBcUM7WUFDcEUsTUFBTSxFQUFFLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDLHFCQUFxQjtZQUMvQyxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsdUNBQXVDO1lBQ25FLE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDcEMsTUFBTSxFQUFFLGlCQUFpQixFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUMzQyxNQUFNLElBQUksR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUNyRCxJQUNFLFdBQWlCLENBQUM7WUFDcEIsSUFBSSxZQUFrQixDQUFDO1lBQ3ZCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyx3QkFBd0I7WUFDN0UsSUFBSSxNQUFNLEVBQUU7Z0JBQ1YscUNBQXFDO2dCQUNyQyxJQUFJLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxPQUFPLFNBQVMsQ0FBQyxFQUFFO29CQUNuQyxXQUFXLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE9BQU8sU0FBUyxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQztvQkFDakUsWUFBWSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxPQUFPLFNBQVMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDO2lCQUNqRTthQUNGO1lBQ0QsMkJBQTJCO1lBQzNCLElBQUksQ0FBQyxpQkFBaUIsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxFQUFFO2dCQUN6RCxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksRUFBRSxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUM7YUFDOUM7aUJBQU0sSUFBSSxJQUFJLEVBQUU7Z0JBQ2YsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQ3RCO1lBRUQsTUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDO1lBQ2xCLE1BQU0sV0FBVyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMxRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUU7Z0JBQ2YsTUFBTSxRQUFRLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO2dCQUV4QyxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3JFLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO2dCQUNqRixNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQ3BGLElBQUksYUFBYSxHQUFHLFFBQVE7b0JBQzFCLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztvQkFDakUsQ0FBQyxDQUFDLEVBQUUsQ0FBQztnQkFFUCxpQkFBaUI7Z0JBQ2pCLGFBQWEsR0FBRyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxpQ0FDdkMsSUFBSSxLQUNQLEtBQUssRUFBRSxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFDcEMsQ0FBQyxDQUFDO2dCQUNKLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFFaEQsSUFBSSxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsU0FBUyxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFO29CQUNyRCxJQUFJLFFBQVEsQ0FBQyxZQUFZLElBQUksUUFBUSxDQUFDLFlBQVksS0FBSyxFQUFFLEVBQUU7d0JBQ3pELGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsZ0JBQWdCLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLENBQUM7cUJBQ3JHO2lCQUNGO2dCQUNELElBQUksT0FBTyxHQUFHLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7Z0JBQ2hHLE9BQU8sSUFBSSxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxPQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLHVCQUF1QixDQUFDO2dCQUVySSxrQkFBa0I7Z0JBQ2xCLElBQUksT0FBTyxLQUFLLFNBQVMsRUFBRTtvQkFDekIsT0FBTyxJQUFJLHdCQUF3QixDQUFDO2lCQUNyQztnQkFFRCx5REFBeUQ7Z0JBQ3pELE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBRTlJLE1BQU0sU0FBUyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxTQUFTO3VCQUNuQyxJQUFJLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLFVBQVU7b0JBQ3JGLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQyxHQUFHO29CQUMzRixDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDMUMsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDcEQsTUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLFlBQVksQ0FBQztnQkFDdkMsTUFBTSxRQUFRLEdBQUc7b0JBQ2YsUUFBUSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxjQUFjO29CQUNsRixNQUFNO29CQUNOLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO2lCQUMzQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDWixJQUFJLElBQUksQ0FBQztnQkFDVCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRTtvQkFDZixJQUFJLEdBQUcsSUFBSSxDQUFDO2lCQUNiO3FCQUFNLElBQ0wsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVM7dUJBQ2xCLElBQUksQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUMxRTtvQkFDQSxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDO2lCQUN2RjtxQkFBTTtvQkFDTCxJQUFJLEdBQUcsSUFBSSxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ2pEO2dCQUNELE1BQU0sSUFBSSxHQUFHO29CQUNYLElBQUk7b0JBQ0osT0FBTztvQkFDUCxXQUFXO29CQUNYLEtBQUssRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLEtBQUssQ0FBQztvQkFDNUMsS0FBSyxFQUFFLFNBQVM7b0JBQ2hCLE1BQU0sRUFBRTt3QkFDTixJQUFJLEVBQUUsUUFBUTt3QkFDZCxNQUFNLEVBQUUsQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE9BQU87cUJBQ3JFO29CQUNELFFBQVEsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsWUFBWSxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsUUFBUSxFQUFFO29CQUN0RCxRQUFRLEVBQUUsYUFBYSxDQUFDLE1BQU0sSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSTtpQkFDdEQsQ0FBQztnQkFDRixXQUFXO2dCQUNYLElBQUksYUFBYSxDQUFDLE1BQU0sRUFBRTtvQkFDeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7d0JBQ2pCLE9BQU8sRUFBRSwwQkFBMEI7d0JBQ25DLEtBQUssRUFBRSxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDOzRCQUN2QyxLQUFLLEVBQUUsT0FBTyxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQzs0QkFDdEUsS0FBSyxFQUFFLFNBQVMsQ0FBQyxLQUFLO3lCQUN2QixDQUFDLENBQUM7cUJBQ0osQ0FBQyxDQUFDO2lCQUNKO2dCQUNELElBQUksT0FBTyxFQUFFO29CQUNYLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO3dCQUNqQixPQUFPLEVBQUUsMEJBQTBCO3dCQUNuQyxLQUFLLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQzs0QkFDM0IsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUM7NEJBQ3JELHdEQUF3RDs0QkFDeEQsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7Z0NBQ3RELENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSTtnQ0FDekQsQ0FBQyxDQUFDLEVBQUU7NEJBQ04sT0FBTyxFQUFFLFNBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFO3lCQUNyRixDQUFDLENBQUM7cUJBQ0osQ0FBQyxDQUFDO2lCQUNKO2dCQUNELGNBQWM7Z0JBQ2QsSUFBSSxXQUFXLEVBQUU7b0JBQ2YsSUFBSSxDQUFDLFdBQVcsR0FBRzt3QkFDakIsS0FBSyxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7NEJBQ2xGLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQzs0QkFDekUsT0FBTztnQ0FDTCxLQUFLO2dDQUNMLE1BQU0sRUFBRTtvQ0FDTixJQUFJLEVBQUUsUUFBUTtpQ0FDZjs2QkFDRixDQUFDO3dCQUNKLENBQUMsQ0FBQztxQkFDSCxDQUFDO2lCQUNIO2dCQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDcEIsQ0FBQyxDQUFDLENBQUM7WUFDSCxJQUFJLE9BQU8sS0FBSyxNQUFNLEVBQUU7Z0JBQ3RCLE1BQU0sT0FBTyxHQUFHO29CQUNkO3dCQUNFLEtBQUssRUFBRSxpQkFBaUIsVUFBVSxHQUFHO3FCQUN0QztvQkFDRCxXQUFXO3dCQUNULENBQUMsQ0FBQzs0QkFDQSxLQUFLLEVBQUUsaUJBQWlCLFlBQVksR0FBRzs0QkFDdkMsUUFBUSxFQUFFLEtBQUs7eUJBQ2hCLENBQUMsQ0FBQyxDQUFDLElBQUk7aUJBQ1gsQ0FBQztnQkFDRixPQUFPO29CQUNMLE1BQU07b0JBQ04sT0FBTztvQkFDUCxTQUFTLEVBQUUsS0FBSztvQkFDaEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMseUJBQXlCLENBQUM7aUJBQy9ELENBQUM7YUFDSDtZQUNELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLENBQUM7UUFDOUIsQ0FBQyxDQUFBO0lBQ0gsQ0FBQztJQXpOVyxTQUFTLENBQUMsSUFBSTtRQUN0QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUNwQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUQsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsS0FBSyxFQUFFO1lBQzFFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDbkY7YUFBTSxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDckIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNoRTthQUFNLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUM1QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3ZFO1FBQ0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztRQUNwQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsaURBQWlEO1FBQ3RFLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNoQyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQztDQXdNRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcbmltcG9ydCB7IGdldCBhcyBfZ2V0IH0gZnJvbSAnbG9kYXNoJzsgLy8gdXNlZCBmb3IgY2hlcnJ5LXBpY2tpbmcgb2JqZWN0IGtleXMgZnJvbSBhcHAtY29uZmlnLmpzb25cclxuaW1wb3J0IGhlbHBlcnMgZnJvbSAnLi4vLi4vY29tbW9uL2hlbHBlcnMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEF3TGlua2VkT2JqZWN0c0RTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XHJcbiAgcHVibGljIGN1cnJlbnRQYWdlOiBudW1iZXI7XHJcblxyXG4gIHB1YmxpYyB0b3RhbFBhZ2VzOiBudW1iZXI7XHJcblxyXG4gIHB1YmxpYyB0b3RhbE9iamVjdHM6IG51bWJlcjtcclxuXHJcbiAgcHVibGljIHBhZ2VTaXplOiBudW1iZXI7XHJcblxyXG4gIHB1YmxpYyBjb250ZXh0OiBzdHJpbmc7XHJcblxyXG4gIHB1YmxpYyBsb2FkZWREYXRhOiBhbnk7XHJcblxyXG4gIHB1YmxpYyBsb2FkaW5nRGF0YSA9IGZhbHNlO1xyXG5cclxuICBwdWJsaWMgcGF0aHM6IGFueTsgLy8gdXNlIGR5bmFtaWMgb2JqZWN0IHBhdGhzIGZyb20gY29uZmlnXHJcblxyXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSkge1xyXG4gICAgdGhpcy5wYXRocyA9IHRoaXMub3B0aW9ucy5jb25maWcuZ2V0KCdpdGVtLXByZXZpZXcnKTtcclxuICAgIHRoaXMucGFnZVNpemUgPSB0aGlzLm9wdGlvbnMuc2l6ZTtcclxuICAgIHRoaXMudG90YWxPYmplY3RzID0gZGF0YS50b3RhbENvdW50O1xyXG4gICAgdGhpcy5jdXJyZW50UGFnZSA9IHRoaXMub3B0aW9ucy5wYWdlID8gK3RoaXMub3B0aW9ucy5wYWdlIDogMTtcclxuICAgIGlmICh0aGlzLm9wdGlvbnMuZHluYW1pY1BhZ2luYXRpb24gJiYgdGhpcy5vcHRpb25zLmR5bmFtaWNQYWdpbmF0aW9uLnRvdGFsKSB7XHJcbiAgICAgIHRoaXMudG90YWxQYWdlcyA9IE1hdGguY2VpbCh0aGlzLm9wdGlvbnMuZHluYW1pY1BhZ2luYXRpb24udG90YWwgLyB0aGlzLnBhZ2VTaXplKTtcclxuICAgIH0gZWxzZSBpZiAoZGF0YS5pdGVtcykge1xyXG4gICAgICB0aGlzLnRvdGFsUGFnZXMgPSBNYXRoLmNlaWwoZGF0YS5pdGVtcy5sZW5ndGggLyB0aGlzLnBhZ2VTaXplKTtcclxuICAgIH0gZWxzZSBpZiAoZGF0YS5yZWxhdGVkSXRlbXMpIHtcclxuICAgICAgdGhpcy50b3RhbFBhZ2VzID0gTWF0aC5jZWlsKGRhdGEucmVsYXRlZEl0ZW1zLmxlbmd0aCAvIHRoaXMucGFnZVNpemUpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jb250ZXh0ID0gdGhpcy5vcHRpb25zLmNvbnRleHQ7XHJcbiAgICB0aGlzLmxvYWRlZERhdGEgPSB0aGlzLnVucGFja0RhdGEoZGF0YSk7XHJcbiAgICB0aGlzLmNoZWNrRm9yTW9yZSgpOyAvLyBjaGVja3MgaWYgPFNob3cgTW9yZT4gYnV0dG9uIHNob3VsZCBiZSBlbmFibGVkXHJcbiAgICB0aGlzLmxvYWRlZERhdGEubG9hZGVyRGF0YSA9IHt9O1xyXG4gICAgcmV0dXJuIHRoaXMubG9hZGVkRGF0YTtcclxuICB9XHJcblxyXG4gICAgcHVibGljIGNoZWNrRm9yTW9yZSA9IChmb3JjZT86IGJvb2xlYW4pID0+IHtcclxuICAgICAgLypcclxuICAgICAgICBDaGVja3MgaWYgaXQgaXMgcG9zc2libGUgdG8gbG9hZCBtb3JlIGl0ZW0gcHJldmlld3MuXHJcbiAgICAgICAgQ2FuIHJlY2VpdmUgYSBib29sZWFuIGFyZ3VtZW50IHRvIGZvcmNlIHRoZSBidXR0b24gdG8gYmVcclxuICAgICAgICBlbmFibGVkIG9yIGRpc2FibGVkLiAoVXNlZCB3aGlsZSBkYXRhIGlzIGxvYWRpbmcpXHJcbiAgICAgICovXHJcbiAgICAgIGlmICghdGhpcy5sb2FkZWREYXRhLmFjdGlvbnMpIHtcclxuICAgICAgICAvLyBpZiBub3QgdXNpbmcgYWN0aW9ucywgZG9uJ3QgY2hlY2tcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHR5cGVvZiBmb3JjZSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICB0aGlzLmxvYWRlZERhdGEuYWN0aW9uc1sxXS5kaXNhYmxlZCA9ICFmb3JjZTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMubG9hZGVkRGF0YS5yZXN1bHQubGVuZ3RoID49IHRoaXMudG90YWxPYmplY3RzKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkZWREYXRhLmFjdGlvbnNbMV0uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMubG9hZGVkRGF0YS5hY3Rpb25zWzFdLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgcHVibGljIGhhbmRsZUluY29taW5nRGF0YSA9IChpbmNvbWluZ0RhdGEpID0+IHtcclxuICAgIC8qXHJcbiAgICAgIENhbGxlZCBieSBpbmZpbml0ZSBzY3JvbGxlciwgYWRkcyB0aGUgaW5jb21pbmdcclxuICAgICAgZGF0YSB0byB0aGUgbGlua2VkIG9iamVjdHMgY29tcG9uZW50LlxyXG4gICAgKi9cclxuICAgIHRoaXMuY3VycmVudFBhZ2UgKz0gMTtcclxuICAgIGNvbnN0IG5ld0RhdGE6IGFueSA9IHRoaXMudW5wYWNrRGF0YShpbmNvbWluZ0RhdGEuaXRlbXNQYWdpbmF0aW9uKTtcclxuICAgIHRoaXMubG9hZGVkRGF0YS5yZXN1bHQgPSB0aGlzLmxvYWRlZERhdGEucmVzdWx0LmNvbmNhdChuZXdEYXRhLnJlc3VsdCk7XHJcbiAgICB0aGlzLmNoZWNrRm9yTW9yZSgpO1xyXG4gICAgdGhpcy5sb2FkZWREYXRhLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRHluYW1pY2FsbHkgcmV0dXJucyB0aGUgZGF0YSBvYmplY3QgZm9yIGVhY2ggSFRNTCBjb21wb25lbnRcclxuICAgKiAgZGF0YToge1xyXG4gICAqICAgICBwcmV2aWV3czogWyBicmVhZGNydW1iczogeyBpdGVtc1tdIH0sIGNsYXNzZXMsIGltYWdlLCBtZXRhZGF0YSwgcGF5bG9hZCwgdGl0bGUgXSxcclxuICAgKiAgICAgcGFnaW5hdGlvbjogeyBmaXJzdCwgbGFzdCwgbGlua3MsIG5leHQsIHByZXYsIHNlbGVjdCB9XHJcbiAgICogICB9XHJcbiAgICovXHJcbiAgcHJpdmF0ZSB1bnBhY2tEYXRhID0gKGRhdGEpID0+IHtcclxuICAgIGNvbnN0XHJcbiAgICAgIHsgY29uZmlnIH0gPSB0aGlzLm9wdGlvbnM7IC8vIGFwcC1jb25maWcuanNvblxyXG4gICAgY29uc3QgcGF0aHMgPSBjb25maWcuZ2V0KCdpdGVtLXByZXZpZXcnKTsgLy8gaXRlbSBwcmV2aWV3IGR5bmFtaWMgcGF0aHNcclxuICAgIGNvbnN0IHsgdG90YWxDb3VudCB9ID0gZGF0YTsgLy8gdG90YWwgYW1vdW50IG9mIGl0ZW1zIGF2YWlsYWJsZSBvbiBiYWNrZW5kXHJcbiAgICBjb25zdCBwYWdlID0gdGhpcy5jdXJyZW50UGFnZTsgLy8gY3VycmVudCBwYWdlIChpZiB1c2luZyBwYWdpbmF0aW9uKVxyXG4gICAgY29uc3QgeyBjb250ZXh0IH0gPSB0aGlzOyAvLyBwYXJlbnQgbGF5b3V0IG5hbWVcclxuICAgIGNvbnN0IHNpemUgPSB0aGlzLnBhZ2VTaXplOyAvLyBpdGVtcyBwZXIgcGFnZSAoaWYgdXNpbmcgcGFnaW5hdGlvbilcclxuICAgIGNvbnN0IGxhYmVscyA9IGNvbmZpZy5nZXQoJ2xhYmVscycpO1xyXG4gICAgY29uc3QgeyBkeW5hbWljUGFnaW5hdGlvbiB9ID0gdGhpcy5vcHRpb25zO1xyXG4gICAgY29uc3Qga2V5cyA9IGNvbmZpZyA/IGNvbmZpZy5nZXQoJ2NvbmZpZy1rZXlzJykgOiB7fTtcclxuICAgIGxldFxyXG4gICAgICBsZW5ndGhMaW1pdDogbnVsbDtcclxuICAgIGxldCByZXN1bHRzTGltaXQ6IG51bGw7XHJcbiAgICBsZXQgZCA9IGRhdGEuaXRlbXMgPyBkYXRhLml0ZW1zIDogZGF0YS5yZWxhdGVkSXRlbXM7IC8vIGl0ZW1zIHRvIGl0ZXJhdGUgb3ZlclxyXG4gICAgaWYgKGNvbmZpZykge1xyXG4gICAgICAvLyBkeW5hbWljIHNlYXJjaCBmb3IgbWF4LWl0ZW0tbGVuZ3RoXHJcbiAgICAgIGlmIChjb25maWcuZ2V0KGAke2NvbnRleHR9LWxheW91dGApKSB7XHJcbiAgICAgICAgbGVuZ3RoTGltaXQgPSBjb25maWcuZ2V0KGAke2NvbnRleHR9LWxheW91dGApWydtYXgtaXRlbS1sZW5ndGgnXTtcclxuICAgICAgICByZXN1bHRzTGltaXQgPSBjb25maWcuZ2V0KGAke2NvbnRleHR9LWxheW91dGApWydyZXN1bHRzLWxpbWl0J107XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIHJlc2l6ZSBkYXRhIGlmIG5lY2Vzc2FyeVxyXG4gICAgaWYgKCFkeW5hbWljUGFnaW5hdGlvbiAmJiBzaXplICYmIHBhZ2UgJiYgZC5sZW5ndGggPiBzaXplKSB7XHJcbiAgICAgIGQgPSBkLnNsaWNlKHBhZ2UgKiBzaXplIC0gc2l6ZSwgcGFnZSAqIHNpemUpO1xyXG4gICAgfSBlbHNlIGlmIChzaXplKSB7XHJcbiAgICAgIGQgPSBkLnNsaWNlKDAsIHNpemUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xyXG4gICAgY29uc3QgZW5hYmxlZEtleXMgPSBwYXRocy5tZXRhZGF0YS5pbmZvLnNlbGVjdGlvbi5tYXAoKGluZm8pID0+IGluZm8ua2V5KTtcclxuICAgIGQuZm9yRWFjaCgoZWwpID0+IHtcclxuICAgICAgY29uc3QgaXRlbURhdGEgPSBlbC5pdGVtID8gZWwuaXRlbSA6IGVsO1xyXG5cclxuICAgICAgY29uc3QgaW5mb0RhdGEgPSBfZ2V0KGVsLCBwYXRocy5tZXRhZGF0YS5pbmZvLmRhdGEsIGl0ZW1EYXRhLmZpZWxkcyk7XHJcbiAgICAgIGNvbnN0IHRvZURhdGEgPSBfZ2V0KGVsLCBwYXRocy5tZXRhZGF0YS50b2UuZGF0YSwgaXRlbURhdGEucmVsYXRlZFR5cGVzT2ZFbnRpdHkpO1xyXG4gICAgICBjb25zdCBicmVhZGNydW1icyA9IF9nZXQoZWwsIHBhdGhzLm1ldGFkYXRhLmJyZWFkY3J1bWJzLmRhdGEsIGl0ZW1EYXRhLmJyZWFkY3J1bWJzKTtcclxuICAgICAgbGV0IGluZm9EYXRhSXRlbXMgPSBpbmZvRGF0YVxyXG4gICAgICAgID8gaW5mb0RhdGEuZmlsdGVyKChpbmZvKSA9PiBlbmFibGVkS2V5cy5pbmRleE9mKGluZm8ua2V5KSAhPT0gLTEpXHJcbiAgICAgICAgOiBbXTtcclxuXHJcbiAgICAgIC8vIG9yZGVyIG1ldGFkYXRhXHJcbiAgICAgIGluZm9EYXRhSXRlbXMgPSBpbmZvRGF0YUl0ZW1zLm1hcCgoaW5mbykgPT4gKHtcclxuICAgICAgICAuLi5pbmZvLFxyXG4gICAgICAgIG9yZGVyOiBlbmFibGVkS2V5cy5pbmRleE9mKGluZm8ua2V5KVxyXG4gICAgICB9KSk7XHJcbiAgICAgIGluZm9EYXRhSXRlbXMuc29ydCgoYSwgYikgPT4gYS5vcmRlciAtIGIub3JkZXIpO1xyXG5cclxuICAgICAgaWYgKFsnZW50aXRhJywgJ3NlYXJjaCcsICdnYWxsZXJ5J10uaW5jbHVkZXMoY29udGV4dCkpIHtcclxuICAgICAgICBpZiAoaXRlbURhdGEudHlwZU9mRW50aXR5ICYmIGl0ZW1EYXRhLnR5cGVPZkVudGl0eSAhPT0gJycpIHtcclxuICAgICAgICAgIGluZm9EYXRhSXRlbXMucHVzaCh7IGtleTogJ1RpcG8gZGkgZW50aXTDoCcsIHZhbHVlOiBrZXlzW2l0ZW1EYXRhLnR5cGVPZkVudGl0eV1bJ3Npbmd1bGFyLWxhYmVsJ10gfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGxldCBjbGFzc2VzID0gWydlbnRpdGEnLCAnc2VhcmNoJywgJ29nZ2V0dGktY29sbGVnYXRpJ10uaW5jbHVkZXMoY29udGV4dCkgPyAnaXMtZnVsbHdpZHRoJyA6ICcnO1xyXG4gICAgICBjbGFzc2VzICs9IGl0ZW1EYXRhLnR5cGVPZkVudGl0eSA/IGAgaXMtJHtjb25maWcuZ2V0KCdjb25maWcta2V5cycpW2l0ZW1EYXRhLnR5cGVPZkVudGl0eV1bJ2NsYXNzLW5hbWUnXX1gIDogJyBpcy1vZ2dldHRvLWN1bHR1cmFsZSc7XHJcblxyXG4gICAgICAvLyBnYWxsZXJ5IGNsYXNzZXNcclxuICAgICAgaWYgKGNvbnRleHQgPT09ICdnYWxsZXJ5Jykge1xyXG4gICAgICAgIGNsYXNzZXMgKz0gJyBpcy12ZXJ0aWNhbCBoYXMtaW1hZ2UnO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBjb25zaWRlciB0aGUgbGVuZ2h0IG9mIDxlbT4gdGFncyB0byBleGNsdWRlIGZyb20gY291bnRcclxuICAgICAgY29uc3QgaGlnaGxpZ2h0cyA9IF9nZXQoZWwsIHBhdGhzLnRpdGxlLCBpdGVtRGF0YS5sYWJlbCkubWF0Y2goLzxlbT4vZykgPyBfZ2V0KGVsLCBwYXRocy50aXRsZSwgaXRlbURhdGEubGFiZWwpLm1hdGNoKC88ZW0+L2cpLmxlbmd0aCAqIDkgOiAwO1xyXG5cclxuICAgICAgY29uc3QgaXRlbVRpdGxlID0gK3BhdGhzLnRpdGxlLm1heExlbmd0aFxyXG4gICAgICAgICYmIF9nZXQoZWwsIHBhdGhzLnRpdGxlLCBpdGVtRGF0YS5sYWJlbCkubGVuZ3RoID4gK3BhdGhzLnRpdGxlLm1heExlbmd0aCArIGhpZ2hsaWdodHNcclxuICAgICAgICA/IGAke19nZXQoZWwsIHBhdGhzLnRpdGxlLCBpdGVtRGF0YS5sYWJlbCkuc2xpY2UoMCwgK3BhdGhzLnRpdGxlLm1heExlbmd0aCArIGhpZ2hsaWdodHMpfeKApmBcclxuICAgICAgICA6IF9nZXQoZWwsIHBhdGhzLnRpdGxlLCBpdGVtRGF0YS5sYWJlbCk7XHJcbiAgICAgIGNvbnN0IGl0ZW1JZCA9IF9nZXQoZWwsIHBhdGhzLnBheWxvYWQsIGl0ZW1EYXRhLmlkKTtcclxuICAgICAgY29uc3QgaXRlbVR5cGUgPSBpdGVtRGF0YS50eXBlT2ZFbnRpdHk7XHJcbiAgICAgIGNvbnN0IGl0ZW1IcmVmID0gW1xyXG4gICAgICAgIGl0ZW1UeXBlID8gY29uZmlnLmdldCgncGF0aHMnKS5lbnRpdGFCYXNlUGF0aCA6IGNvbmZpZy5nZXQoJ3BhdGhzJykuc2NoZWRhQmFzZVBhdGgsXHJcbiAgICAgICAgaXRlbUlkLFxyXG4gICAgICAgIGhlbHBlcnMuc2x1Z2lmeShpdGVtVGl0bGUpLFxyXG4gICAgICBdLmpvaW4oJy8nKTtcclxuICAgICAgbGV0IHRleHQ7XHJcbiAgICAgIGlmICghcGF0aHMudGV4dCkge1xyXG4gICAgICAgIHRleHQgPSBudWxsO1xyXG4gICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgICtwYXRocy50ZXh0Lm1heExlbmd0aFxyXG4gICAgICAgICYmIF9nZXQoZWwsIHBhdGhzLnRleHQuZGF0YSwgaXRlbURhdGEudGV4dCkubGVuZ3RoID4gK3BhdGhzLnRleHQubWF4TGVuZ3RoXHJcbiAgICAgICkge1xyXG4gICAgICAgIHRleHQgPSBgJHtfZ2V0KGVsLCBwYXRocy50ZXh0LmRhdGEsIGl0ZW1EYXRhLnRleHQpLnNsaWNlKDAsICtwYXRocy50ZXh0Lm1heExlbmd0aCl94oCmYDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0ZXh0ID0gX2dldChlbCwgcGF0aHMudGV4dC5kYXRhLCBpdGVtRGF0YS50ZXh0KTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBpdGVtID0ge1xyXG4gICAgICAgIHRleHQsXHJcbiAgICAgICAgY2xhc3NlcyxcclxuICAgICAgICBicmVhZGNydW1icyxcclxuICAgICAgICBpbWFnZTogX2dldChlbCwgcGF0aHMuaW1hZ2UsIGl0ZW1EYXRhLmltYWdlKSxcclxuICAgICAgICB0aXRsZTogaXRlbVRpdGxlLFxyXG4gICAgICAgIGFuY2hvcjoge1xyXG4gICAgICAgICAgaHJlZjogaXRlbUhyZWYsXHJcbiAgICAgICAgICB0YXJnZXQ6IFsnZ2FsbGVyeScsICdzZWFyY2gnXS5pbmNsdWRlcyhjb250ZXh0KSA/ICdfYmxhbmsnIDogJ19zZWxmJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVsYXRpb246IHsga2V5OiBlbC5yZWxhdGlvbk5hbWUsIHZhbHVlOiBlbC5yZWxhdGlvbiB9LFxyXG4gICAgICAgIG1ldGFkYXRhOiBpbmZvRGF0YUl0ZW1zLmxlbmd0aCB8fCB0b2VEYXRhID8gW10gOiBudWxsLFxyXG4gICAgICB9O1xyXG4gICAgICAvLyBtZXRhZGF0YVxyXG4gICAgICBpZiAoaW5mb0RhdGFJdGVtcy5sZW5ndGgpIHtcclxuICAgICAgICBpdGVtLm1ldGFkYXRhLnB1c2goe1xyXG4gICAgICAgICAgY2xhc3NlczogJ2F3LWl0ZW0tcHJldmlld19tZXRhZGF0YScsXHJcbiAgICAgICAgICBpdGVtczogaW5mb0RhdGFJdGVtcy5tYXAoKGluZm9ESXRlbSkgPT4gKHtcclxuICAgICAgICAgICAgbGFiZWw6IGhlbHBlcnMucHJldHRpZnlTbmFrZUNhc2UoaW5mb0RJdGVtLmtleSwgbGFiZWxzW2luZm9ESXRlbS5rZXldKSxcclxuICAgICAgICAgICAgdmFsdWU6IGluZm9ESXRlbS52YWx1ZSxcclxuICAgICAgICAgIH0pKSxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodG9lRGF0YSkge1xyXG4gICAgICAgIGl0ZW0ubWV0YWRhdGEucHVzaCh7XHJcbiAgICAgICAgICBjbGFzc2VzOiAnYXctaXRlbS1wcmV2aWV3LWVudGl0aWVzJyxcclxuICAgICAgICAgIGl0ZW1zOiB0b2VEYXRhLm1hcCgodG9lKSA9PiAoeyAvLyBwZXJzb25hOiA2LCBPcmdhbml6ejogMTIsIEx1b2doaTogMiwgQ29uY2V0dGk6IDMyXHJcbiAgICAgICAgICAgIHZhbHVlOiBfZ2V0KHRvZSwgcGF0aHMubWV0YWRhdGEudG9lLnZhbHVlLCB0b2UuY291bnQpLFxyXG4gICAgICAgICAgICAvLyBpY29uOiAnbjctaWNvbi1iZWxsJyAvLyBUT0RPOiBsaW5rIGljb24gdG8gY29uZmlnIGtleVxyXG4gICAgICAgICAgICBpY29uOiBrZXlzW19nZXQodG9lLCBwYXRocy5tZXRhZGF0YS50b2UuaWNvbiwgdG9lLnR5cGUpXVxyXG4gICAgICAgICAgICAgID8ga2V5c1tfZ2V0KHRvZSwgcGF0aHMubWV0YWRhdGEudG9lLmljb24sIHRvZS50eXBlKV0uaWNvblxyXG4gICAgICAgICAgICAgIDogJycsXHJcbiAgICAgICAgICAgIGNsYXNzZXM6IGBjb2xvci0ke2tleXNbX2dldCh0b2UsIHBhdGhzLm1ldGFkYXRhLnRvZS5pY29uLCB0b2UudHlwZSldWydjbGFzcy1uYW1lJ119YCxcclxuICAgICAgICAgIH0pKSxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICAvLyBicmVhZGNydW1ic1xyXG4gICAgICBpZiAoYnJlYWRjcnVtYnMpIHtcclxuICAgICAgICBpdGVtLmJyZWFkY3J1bWJzID0geyAvLyBuNy1icmVhZGNydW1icyB1c2VzIHRoaXMgYXMgaXQncyBvd24gZGF0YVxyXG4gICAgICAgICAgaXRlbXM6IF9nZXQoZWwsIHBhdGhzLm1ldGFkYXRhLmJyZWFkY3J1bWJzLmRhdGEsIGVsLml0ZW0uYnJlYWRjcnVtYnMpLm1hcCgoY3J1bWIpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBfZ2V0KGNydW1iLCBwYXRocy5tZXRhZGF0YS5icmVhZGNydW1icy5sYWJlbCwgY3J1bWIubGFiZWwpO1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgIGxhYmVsLFxyXG4gICAgICAgICAgICAgIGFuY2hvcjoge1xyXG4gICAgICAgICAgICAgICAgaHJlZjogaXRlbUhyZWYsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgIH0pLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgICAgcmVzdWx0LnB1c2goaXRlbSk7XHJcbiAgICB9KTtcclxuICAgIGlmIChjb250ZXh0ID09PSAnaG9tZScpIHtcclxuICAgICAgY29uc3QgYWN0aW9ucyA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYWJlbDogYE1vc3RyYSBUdXR0aSAoJHt0b3RhbENvdW50fSlgLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbGVuZ3RoTGltaXRcclxuICAgICAgICAgID8ge1xyXG4gICAgICAgICAgICBsYWJlbDogYE1vc3RyYSBBbHRyaSAoJHtyZXN1bHRzTGltaXR9KWAsXHJcbiAgICAgICAgICAgIGRpc2FibGVkOiBmYWxzZSxcclxuICAgICAgICAgIH0gOiBudWxsLFxyXG4gICAgICBdO1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHJlc3VsdCxcclxuICAgICAgICBhY3Rpb25zLFxyXG4gICAgICAgIGlzTG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgZmFsbGJhY2s6IGNvbmZpZy5nZXQoJ2hvbWUtbGF5b3V0JylbJ2xpbmtlZC1vYmplY3RzLWZhbGxiYWNrJ10sXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICByZXR1cm4geyBwcmV2aWV3czogcmVzdWx0IH07XHJcbiAgfVxyXG59XHJcbiJdfQ==