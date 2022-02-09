const getTreeBranches = (depth, hasImage = true) => {
    let branchConfig = `
    label
    id
    document_type
    document_classification
  `;
    if (hasImage) {
        branchConfig = `
      label
      id
      img
      document_type
      document_classification
    `;
    }
    const output = [];
    let i;
    let j;
    // open config
    for (i = 0; i < depth; i += 1) {
        output.push(i === 0
            ? branchConfig
            : `branches {${branchConfig}`);
    }
    // close config
    for (j = 0; j < depth; j += 1) {
        output.push(j === 0 ? '' : '}');
    }
    return output.join('');
};
export default (treeDepth) => ({
    getLastPosts: {
        queryName: 'getLastPosts',
        queryBody: `
        {
          getLastPosts(__PARAMS__) {
            id
            title
          }
        }
      `,
    },
    getSlider: {
        queryName: 'getSlider',
        queryBody: ` {
      getSlider(__PARAMS__) {
        pretext
        title
        text
        background {
            type
            value
        }
        ctaLabel
        ctaPayload
        metadata {
            key
            value
        }
      }
    }`
    },
    getTreeLite: {
        queryName: 'getTreeOfItems',
        queryBody: `
      {
        getTreeOfItems{
          ${getTreeBranches(treeDepth, false)}
        }
      }
      `,
    },
    getTree: {
        queryName: 'getTreeOfItems',
        queryBody: `
      {
        getTreeOfItems{
          ${getTreeBranches(treeDepth)}
        }
      }
      `,
    },
    globalFilter: {
        queryName: 'globalFilter',
        queryBody: `{
        globalFilter(__PARAMS__){
          entitiesData {
            entity {
                id
                label
                typeOfEntity
            } count
          }
          typeOfEntityData {
            type
            count
          }
          itemsPagination {
            totalCount
            items {
              thumbnail
              item {
                id
                label
                fields
                {
                  ...
                  on KeyValueField {
                    key
                    value
                  }
                }
                breadcrumbs {
                  label
                  link
                }
                relatedTypesOfEntity {
                  type
                  count
                }
              }
            }
          }
        }
        }`,
    },
    getEntityRelatedItems: {
        queryName: 'globalFilter',
        queryBody: `{
        globalFilter(__PARAMS__){
          itemsPagination {
            totalCount
            items {
              thumbnail
              item {
                id
                label
                fields
                {
                  ...
                  on KeyValueField {
                    key
                    value
                  }
                }
                breadcrumbs {
                  label
                  link
                }
                relatedTypesOfEntity {
                  type
                  count
                }
              }
            }
          }
        }
        }`,
    },
    getEntityDetails: {
        queryName: 'getEntity',
        queryBody: `{
        getEntity(__PARAMS__){
          relatedItemsTotalCount,
          relatedLaTotalCount: relatedAlTotalCount,
          overviewTab
          label
          id
          typeOfEntity
          relatedLa: relatedAl {
            thumbnail
            relation          
            item {
              label
              id
              fields {
                ...
                on KeyValueField {
                  key
                  value
                }
              }
            }
          }
          fields {
            ... on KeyValueField {
              key
              value
            }
            ... on KeyValueFieldGroup {
              label
              fields {
                ... on KeyValueField {
                  key
                  value
                }
                ... on KeyValueFieldGroup {
                  label
                  fields {
                    ... on KeyValueField {
                      key
                      value
                    }
                  }
                }
              }
            }
          }
          extraTab
          wikiTab {
            text
            url
          }
          relatedItems {
            thumbnail
            relation
            item {
              label
              id
              fields
              {
                ...
                on KeyValueField {
                  key
                  value
                }
              }
              breadcrumbs {
                label
                link
              }
            }
            relatedTypesOfEntity {
              type
              count
            }
          }
          relatedEntities {
            entity {
                id
                label
                typeOfEntity
                relation
            }
            count
          }
        }
      }
      `,
    },
    getItem: {
        queryName: 'getItem',
        queryBody: `{
        getItem(__PARAMS__) {
          id
          label
          icon
          title
          subTitle
          image
          text
          fields {
            ...
            on KeyValueField {
              key
              value
            }
            ... on KeyValueFieldGroup {
              label
              fields {
                ...
                on KeyValueField {
                  key
                  value
                }
              }
            }
          }
          relatedEntities {
            count
            entity{
              id
              label
              typeOfEntity
              relation
            }
          }
          relatedItems {
            thumbnail
            item {
              label
              id
              relatedTypesOfEntity {
                type
                count
              }
            }
          }
          breadcrumbs {
            label
            link
          }
        }
      }`,
    },
    getNode: {
        queryName: 'getNode',
        queryBody: `{
        getNode(__PARAMS__) {
          ... on Item {
            id
            label
            title
            subTitle
            image
            digitalObjects {
              label
              type
              url
              order
              items {      
                order      
                label
                url                 
              }
            }
            text
            document_type
            document_classification
            fields {
              ... on KeyValueField {
                key
                value
              }
              ... on KeyValueFieldGroup {
                label
                fields {
                  ... on KeyValueField {
                    key
                    value
                  }
                  ... on KeyValueFieldGroup {
                    label
                    fields {
                      ... on KeyValueField {
                        key
                        value
                      }
                    }
                  }
                }
              }
            }
            relatedEntities {
                count
                entity{
                  id
                  label
                  typeOfEntity
                  relation
                }
            }
            relatedItems {
              thumbnail
              item {
                label
                id
                fields {
                  ...
                  on KeyValueField {
                    key
                    value
                  }
                  ... on KeyValueFieldGroup {
                    label
                    fields {
                      ...
                      on KeyValueField {
                        key
                        value
                      }
                    }
                  }
                }
                relatedTypesOfEntity {
                  type
                  count
                }
              }
            }
            breadcrumbs {
              label
              link
            }
          }
          ... on Node {
            id
            label
            img
            document_type
            document_classification
            fields {
              ... on KeyValueField {
                key
                value
              }
              ... on KeyValueFieldGroup {
                label
                fields {
                  ... on KeyValueField {
                    key
                    value
                  }
                  ... on KeyValueFieldGroup {
                    label
                    fields {
                      ... on KeyValueField {
                        key
                        value
                      }
                    }
                  }
                }
              }
            }
            relatedEntities {
              count
              entity {
                id
                label
                typeOfEntity
                relation
              }
            }
            breadcrumbs {
              label
              link
            }
          }
        }
      }`,
    },
    autoComplete: {
        queryName: 'autoComplete',
        queryBody: `{
        autoComplete(__PARAMS__){
          totalCount
          results {
            ... on EntityCountData {
              count
              entity {
                id
                label
                typeOfEntity
                fields {
                  ... on KeyValueField {
                    key
                    value
                  }
                  ... on KeyValueFieldGroup {
                    label
                    fields {
                      ... on KeyValueField {
                        key
                        value
                      }
                    }
                  }
                }
              }
            }
            ... on ItemListing {
              item {
                id
                label
                document_type
                fields {
                  ... on KeyValueField {
                    key
                    value
                  }
                  ... on KeyValueFieldGroup {
                    label
                    fields {
                      ... on KeyValueField {
                        key
                        value
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }`,
    },
    search: {
        queryName: 'search',
        queryBody: `{
      search(__PARAMS__){
        totalCount
        results {
          order{
            type
            key
            direction
          }
          fields
          {
            id
            highlight
            limit
          }
          items {
            ... on Entity {
              id
              label
              typeOfEntity
              fields {
                ...
                on KeyValueField {
                  key
                  value
                }
                ... on KeyValueFieldGroup {
                  label
                  fields {
                    ...
                    on KeyValueField {
                      key
                      value
                    }
                  }
                }
              }
              relatedEntities {
                  count
                  entity{
                    id
                    label
                    typeOfEntity
                    relation
                  }
              }
              relatedItems {
                  thumbnail
                  item {
                    label
                    id
                    fields {
                      ...
                      on KeyValueField {
                        key
                        value
                      }
                      ... on KeyValueFieldGroup {
                        label
                        fields {
                          ...
                          on KeyValueField {
                            key
                            value
                          }
                        }
                      }
                    }
                }
                relatedTypesOfEntity {
                  type
                  count
                }
              }
            }
            ... on Item {
              id
              label
              icon
              title
              subTitle
              image
              text
              relatedTypesOfEntity {
                type
                count
              }
              breadcrumbs {
                label
                link
              }
              fields {
                ...
                on KeyValueField {
                  key
                  value
                }
                ... on KeyValueFieldGroup {
                  label
                  fields {
                    ...
                    on KeyValueField {
                      key
                      value
                    }
                  }
                }
              }
            }
          }
        }
      }
    }`,
    },
    facets: {
        queryName: 'search',
        queryBody: `{
      search(__PARAMS__){
        facets {
          id
          type
          operator
          limit
          order
          totalCount
          data {
            label
            value
            counter
            searchData {
              key
              value
            }
          }
        }
      }
    }`,
    },
    getMissingBubble: {
        queryName: 'getEntity',
        queryBody: `{
        getEntity(__PARAMS__){
          label
          id
          typeOfEntity
        }
      }`,
    },
    getMapObjects: {
        queryName: 'getMapObjects',
        queryBody: `{
      getMapObjects{
        lat
        lon
        item {
          ...on Item {
              id
              label
          }
          ...on Entity {
              id
              label
          }
        }
      }
    }`,
    },
    getEventObjects: {
        queryName: 'getEventObjects',
        queryBody: `{
      getEventObjects{
        id
        start
        end
        label
        item {
          ... on Entity {
            id
            label
          }
        }
      }
    }`,
    },
    getCollection: {
        queryName: 'getCollection',
        queryBody: `{
      getCollection(__PARAMS__) {
        title
        text
        total
        items {
          title
          content
          background
          image
          url
          a4vId
          type
          classification
        }
      }
    }`
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBvbGxvLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL243LWJvaWxlcnBsYXRlLWxpYi9zcmMvbGliL2FyaWFubmEtd2ViL2NvbmZpZy9hcG9sbG8uY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sZUFBZSxHQUFHLENBQUMsS0FBSyxFQUFFLFFBQVEsR0FBRyxJQUFJLEVBQUUsRUFBRTtJQUNqRCxJQUFJLFlBQVksR0FBRzs7Ozs7R0FLbEIsQ0FBQztJQUNGLElBQUksUUFBUSxFQUFFO1FBQ1osWUFBWSxHQUFHOzs7Ozs7S0FNZCxDQUFDO0tBQ0g7SUFDRCxNQUFNLE1BQU0sR0FBRyxFQUFFLENBQUM7SUFDbEIsSUFBSSxDQUFDLENBQUM7SUFDTixJQUFJLENBQUMsQ0FBQztJQUNOLGNBQWM7SUFDZCxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQzdCLE1BQU0sQ0FBQyxJQUFJLENBQ1QsQ0FBQyxLQUFLLENBQUM7WUFDTCxDQUFDLENBQUMsWUFBWTtZQUNkLENBQUMsQ0FBQyxhQUFhLFlBQVksRUFBRSxDQUNoQyxDQUFDO0tBQ0g7SUFDRCxlQUFlO0lBQ2YsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUM3QixNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDakM7SUFFRCxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDekIsQ0FBQyxDQUFDO0FBRUYsZUFBZSxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUM3QixZQUFZLEVBQUU7UUFDWixTQUFTLEVBQUUsY0FBYztRQUN6QixTQUFTLEVBQUU7Ozs7Ozs7T0FPUjtLQUNKO0lBQ0QsU0FBUyxFQUFFO1FBQ1QsU0FBUyxFQUFFLFdBQVc7UUFDdEIsU0FBUyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7O01BZ0JUO0tBQ0g7SUFDRCxXQUFXLEVBQUU7UUFDWCxTQUFTLEVBQUUsZ0JBQWdCO1FBQzNCLFNBQVMsRUFBRTs7O1lBR0gsZUFBZSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUM7OztPQUd0QztLQUNKO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsU0FBUyxFQUFFLGdCQUFnQjtRQUMzQixTQUFTLEVBQUU7OztZQUdILGVBQWUsQ0FBQyxTQUFTLENBQUM7OztPQUcvQjtLQUNKO0lBQ0QsWUFBWSxFQUFFO1FBQ1osU0FBUyxFQUFFLGNBQWM7UUFDekIsU0FBUyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBd0NMO0tBQ1A7SUFDRCxxQkFBcUIsRUFBRTtRQUNyQixTQUFTLEVBQUUsY0FBYztRQUN6QixTQUFTLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBNkJMO0tBQ1A7SUFDRCxnQkFBZ0IsRUFBRTtRQUNoQixTQUFTLEVBQUUsV0FBVztRQUN0QixTQUFTLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQXVGUjtLQUNKO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsU0FBUyxFQUFFLFNBQVM7UUFDcEIsU0FBUyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFtRFA7S0FDTDtJQUNELE9BQU8sRUFBRTtRQUNQLFNBQVMsRUFBRSxTQUFTO1FBQ3BCLFNBQVMsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQXFJUDtLQUNMO0lBQ0QsWUFBWSxFQUFFO1FBQ1osU0FBUyxFQUFFLGNBQWM7UUFDekIsU0FBUyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFtRFA7S0FDTDtJQUNELE1BQU0sRUFBRTtRQUNOLFNBQVMsRUFBRSxRQUFRO1FBQ25CLFNBQVMsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQWdIVDtLQUNIO0lBQ0QsTUFBTSxFQUFFO1FBQ04sU0FBUyxFQUFFLFFBQVE7UUFDbkIsU0FBUyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQW9CVDtLQUNIO0lBQ0QsZ0JBQWdCLEVBQUU7UUFDaEIsU0FBUyxFQUFFLFdBQVc7UUFDdEIsU0FBUyxFQUFFOzs7Ozs7UUFNUDtLQUNMO0lBQ0QsYUFBYSxFQUFFO1FBQ2IsU0FBUyxFQUFFLGVBQWU7UUFDMUIsU0FBUyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7TUFlVDtLQUNIO0lBQ0QsZUFBZSxFQUFFO1FBQ2YsU0FBUyxFQUFFLGlCQUFpQjtRQUM1QixTQUFTLEVBQUU7Ozs7Ozs7Ozs7Ozs7TUFhVDtLQUNIO0lBQ0QsYUFBYSxFQUFFO1FBQ2IsU0FBUyxFQUFFLGVBQWU7UUFDMUIsU0FBUyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7O01BZ0JUO0tBQ0g7Q0FDRixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBnZXRUcmVlQnJhbmNoZXMgPSAoZGVwdGgsIGhhc0ltYWdlID0gdHJ1ZSkgPT4ge1xyXG4gIGxldCBicmFuY2hDb25maWcgPSBgXHJcbiAgICBsYWJlbFxyXG4gICAgaWRcclxuICAgIGRvY3VtZW50X3R5cGVcclxuICAgIGRvY3VtZW50X2NsYXNzaWZpY2F0aW9uXHJcbiAgYDtcclxuICBpZiAoaGFzSW1hZ2UpIHtcclxuICAgIGJyYW5jaENvbmZpZyA9IGBcclxuICAgICAgbGFiZWxcclxuICAgICAgaWRcclxuICAgICAgaW1nXHJcbiAgICAgIGRvY3VtZW50X3R5cGVcclxuICAgICAgZG9jdW1lbnRfY2xhc3NpZmljYXRpb25cclxuICAgIGA7XHJcbiAgfVxyXG4gIGNvbnN0IG91dHB1dCA9IFtdO1xyXG4gIGxldCBpO1xyXG4gIGxldCBqO1xyXG4gIC8vIG9wZW4gY29uZmlnXHJcbiAgZm9yIChpID0gMDsgaSA8IGRlcHRoOyBpICs9IDEpIHtcclxuICAgIG91dHB1dC5wdXNoKFxyXG4gICAgICBpID09PSAwXHJcbiAgICAgICAgPyBicmFuY2hDb25maWdcclxuICAgICAgICA6IGBicmFuY2hlcyB7JHticmFuY2hDb25maWd9YFxyXG4gICAgKTtcclxuICB9XHJcbiAgLy8gY2xvc2UgY29uZmlnXHJcbiAgZm9yIChqID0gMDsgaiA8IGRlcHRoOyBqICs9IDEpIHtcclxuICAgIG91dHB1dC5wdXNoKGogPT09IDAgPyAnJyA6ICd9Jyk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gb3V0cHV0LmpvaW4oJycpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHRyZWVEZXB0aCkgPT4gKHtcclxuICBnZXRMYXN0UG9zdHM6IHtcclxuICAgIHF1ZXJ5TmFtZTogJ2dldExhc3RQb3N0cycsXHJcbiAgICBxdWVyeUJvZHk6IGBcclxuICAgICAgICB7XHJcbiAgICAgICAgICBnZXRMYXN0UG9zdHMoX19QQVJBTVNfXykge1xyXG4gICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICB0aXRsZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgYCxcclxuICB9LFxyXG4gIGdldFNsaWRlcjoge1xyXG4gICAgcXVlcnlOYW1lOiAnZ2V0U2xpZGVyJyxcclxuICAgIHF1ZXJ5Qm9keTogYCB7XHJcbiAgICAgIGdldFNsaWRlcihfX1BBUkFNU19fKSB7XHJcbiAgICAgICAgcHJldGV4dFxyXG4gICAgICAgIHRpdGxlXHJcbiAgICAgICAgdGV4dFxyXG4gICAgICAgIGJhY2tncm91bmQge1xyXG4gICAgICAgICAgICB0eXBlXHJcbiAgICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGN0YUxhYmVsXHJcbiAgICAgICAgY3RhUGF5bG9hZFxyXG4gICAgICAgIG1ldGFkYXRhIHtcclxuICAgICAgICAgICAga2V5XHJcbiAgICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9YFxyXG4gIH0sXHJcbiAgZ2V0VHJlZUxpdGU6IHtcclxuICAgIHF1ZXJ5TmFtZTogJ2dldFRyZWVPZkl0ZW1zJyxcclxuICAgIHF1ZXJ5Qm9keTogYFxyXG4gICAgICB7XHJcbiAgICAgICAgZ2V0VHJlZU9mSXRlbXN7XHJcbiAgICAgICAgICAke2dldFRyZWVCcmFuY2hlcyh0cmVlRGVwdGgsIGZhbHNlKX1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgYCxcclxuICB9LFxyXG4gIGdldFRyZWU6IHtcclxuICAgIHF1ZXJ5TmFtZTogJ2dldFRyZWVPZkl0ZW1zJyxcclxuICAgIHF1ZXJ5Qm9keTogYFxyXG4gICAgICB7XHJcbiAgICAgICAgZ2V0VHJlZU9mSXRlbXN7XHJcbiAgICAgICAgICAke2dldFRyZWVCcmFuY2hlcyh0cmVlRGVwdGgpfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBgLFxyXG4gIH0sXHJcbiAgZ2xvYmFsRmlsdGVyOiB7XHJcbiAgICBxdWVyeU5hbWU6ICdnbG9iYWxGaWx0ZXInLFxyXG4gICAgcXVlcnlCb2R5OiBge1xyXG4gICAgICAgIGdsb2JhbEZpbHRlcihfX1BBUkFNU19fKXtcclxuICAgICAgICAgIGVudGl0aWVzRGF0YSB7XHJcbiAgICAgICAgICAgIGVudGl0eSB7XHJcbiAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgbGFiZWxcclxuICAgICAgICAgICAgICAgIHR5cGVPZkVudGl0eVxyXG4gICAgICAgICAgICB9IGNvdW50XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0eXBlT2ZFbnRpdHlEYXRhIHtcclxuICAgICAgICAgICAgdHlwZVxyXG4gICAgICAgICAgICBjb3VudFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaXRlbXNQYWdpbmF0aW9uIHtcclxuICAgICAgICAgICAgdG90YWxDb3VudFxyXG4gICAgICAgICAgICBpdGVtcyB7XHJcbiAgICAgICAgICAgICAgdGh1bWJuYWlsXHJcbiAgICAgICAgICAgICAgaXRlbSB7XHJcbiAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgbGFiZWxcclxuICAgICAgICAgICAgICAgIGZpZWxkc1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAuLi5cclxuICAgICAgICAgICAgICAgICAgb24gS2V5VmFsdWVGaWVsZCB7XHJcbiAgICAgICAgICAgICAgICAgICAga2V5XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWRjcnVtYnMge1xyXG4gICAgICAgICAgICAgICAgICBsYWJlbFxyXG4gICAgICAgICAgICAgICAgICBsaW5rXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZWxhdGVkVHlwZXNPZkVudGl0eSB7XHJcbiAgICAgICAgICAgICAgICAgIHR5cGVcclxuICAgICAgICAgICAgICAgICAgY291bnRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgfWAsXHJcbiAgfSxcclxuICBnZXRFbnRpdHlSZWxhdGVkSXRlbXM6IHtcclxuICAgIHF1ZXJ5TmFtZTogJ2dsb2JhbEZpbHRlcicsXHJcbiAgICBxdWVyeUJvZHk6IGB7XHJcbiAgICAgICAgZ2xvYmFsRmlsdGVyKF9fUEFSQU1TX18pe1xyXG4gICAgICAgICAgaXRlbXNQYWdpbmF0aW9uIHtcclxuICAgICAgICAgICAgdG90YWxDb3VudFxyXG4gICAgICAgICAgICBpdGVtcyB7XHJcbiAgICAgICAgICAgICAgdGh1bWJuYWlsXHJcbiAgICAgICAgICAgICAgaXRlbSB7XHJcbiAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgbGFiZWxcclxuICAgICAgICAgICAgICAgIGZpZWxkc1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAuLi5cclxuICAgICAgICAgICAgICAgICAgb24gS2V5VmFsdWVGaWVsZCB7XHJcbiAgICAgICAgICAgICAgICAgICAga2V5XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWRjcnVtYnMge1xyXG4gICAgICAgICAgICAgICAgICBsYWJlbFxyXG4gICAgICAgICAgICAgICAgICBsaW5rXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZWxhdGVkVHlwZXNPZkVudGl0eSB7XHJcbiAgICAgICAgICAgICAgICAgIHR5cGVcclxuICAgICAgICAgICAgICAgICAgY291bnRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgfWAsXHJcbiAgfSxcclxuICBnZXRFbnRpdHlEZXRhaWxzOiB7XHJcbiAgICBxdWVyeU5hbWU6ICdnZXRFbnRpdHknLFxyXG4gICAgcXVlcnlCb2R5OiBge1xyXG4gICAgICAgIGdldEVudGl0eShfX1BBUkFNU19fKXtcclxuICAgICAgICAgIHJlbGF0ZWRJdGVtc1RvdGFsQ291bnQsXHJcbiAgICAgICAgICByZWxhdGVkTGFUb3RhbENvdW50OiByZWxhdGVkQWxUb3RhbENvdW50LFxyXG4gICAgICAgICAgb3ZlcnZpZXdUYWJcclxuICAgICAgICAgIGxhYmVsXHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgdHlwZU9mRW50aXR5XHJcbiAgICAgICAgICByZWxhdGVkTGE6IHJlbGF0ZWRBbCB7XHJcbiAgICAgICAgICAgIHRodW1ibmFpbFxyXG4gICAgICAgICAgICByZWxhdGlvbiAgICAgICAgICBcclxuICAgICAgICAgICAgaXRlbSB7XHJcbiAgICAgICAgICAgICAgbGFiZWxcclxuICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgIGZpZWxkcyB7XHJcbiAgICAgICAgICAgICAgICAuLi5cclxuICAgICAgICAgICAgICAgIG9uIEtleVZhbHVlRmllbGQge1xyXG4gICAgICAgICAgICAgICAgICBrZXlcclxuICAgICAgICAgICAgICAgICAgdmFsdWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGZpZWxkcyB7XHJcbiAgICAgICAgICAgIC4uLiBvbiBLZXlWYWx1ZUZpZWxkIHtcclxuICAgICAgICAgICAgICBrZXlcclxuICAgICAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC4uLiBvbiBLZXlWYWx1ZUZpZWxkR3JvdXAge1xyXG4gICAgICAgICAgICAgIGxhYmVsXHJcbiAgICAgICAgICAgICAgZmllbGRzIHtcclxuICAgICAgICAgICAgICAgIC4uLiBvbiBLZXlWYWx1ZUZpZWxkIHtcclxuICAgICAgICAgICAgICAgICAga2V5XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuLi4gb24gS2V5VmFsdWVGaWVsZEdyb3VwIHtcclxuICAgICAgICAgICAgICAgICAgbGFiZWxcclxuICAgICAgICAgICAgICAgICAgZmllbGRzIHtcclxuICAgICAgICAgICAgICAgICAgICAuLi4gb24gS2V5VmFsdWVGaWVsZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBrZXlcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBleHRyYVRhYlxyXG4gICAgICAgICAgd2lraVRhYiB7XHJcbiAgICAgICAgICAgIHRleHRcclxuICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZWxhdGVkSXRlbXMge1xyXG4gICAgICAgICAgICB0aHVtYm5haWxcclxuICAgICAgICAgICAgcmVsYXRpb25cclxuICAgICAgICAgICAgaXRlbSB7XHJcbiAgICAgICAgICAgICAgbGFiZWxcclxuICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgIGZpZWxkc1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC4uLlxyXG4gICAgICAgICAgICAgICAgb24gS2V5VmFsdWVGaWVsZCB7XHJcbiAgICAgICAgICAgICAgICAgIGtleVxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBicmVhZGNydW1icyB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbFxyXG4gICAgICAgICAgICAgICAgbGlua1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZWxhdGVkVHlwZXNPZkVudGl0eSB7XHJcbiAgICAgICAgICAgICAgdHlwZVxyXG4gICAgICAgICAgICAgIGNvdW50XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJlbGF0ZWRFbnRpdGllcyB7XHJcbiAgICAgICAgICAgIGVudGl0eSB7XHJcbiAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgbGFiZWxcclxuICAgICAgICAgICAgICAgIHR5cGVPZkVudGl0eVxyXG4gICAgICAgICAgICAgICAgcmVsYXRpb25cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb3VudFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBgLFxyXG4gIH0sXHJcbiAgZ2V0SXRlbToge1xyXG4gICAgcXVlcnlOYW1lOiAnZ2V0SXRlbScsXHJcbiAgICBxdWVyeUJvZHk6IGB7XHJcbiAgICAgICAgZ2V0SXRlbShfX1BBUkFNU19fKSB7XHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgbGFiZWxcclxuICAgICAgICAgIGljb25cclxuICAgICAgICAgIHRpdGxlXHJcbiAgICAgICAgICBzdWJUaXRsZVxyXG4gICAgICAgICAgaW1hZ2VcclxuICAgICAgICAgIHRleHRcclxuICAgICAgICAgIGZpZWxkcyB7XHJcbiAgICAgICAgICAgIC4uLlxyXG4gICAgICAgICAgICBvbiBLZXlWYWx1ZUZpZWxkIHtcclxuICAgICAgICAgICAgICBrZXlcclxuICAgICAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC4uLiBvbiBLZXlWYWx1ZUZpZWxkR3JvdXAge1xyXG4gICAgICAgICAgICAgIGxhYmVsXHJcbiAgICAgICAgICAgICAgZmllbGRzIHtcclxuICAgICAgICAgICAgICAgIC4uLlxyXG4gICAgICAgICAgICAgICAgb24gS2V5VmFsdWVGaWVsZCB7XHJcbiAgICAgICAgICAgICAgICAgIGtleVxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmVsYXRlZEVudGl0aWVzIHtcclxuICAgICAgICAgICAgY291bnRcclxuICAgICAgICAgICAgZW50aXR5e1xyXG4gICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgbGFiZWxcclxuICAgICAgICAgICAgICB0eXBlT2ZFbnRpdHlcclxuICAgICAgICAgICAgICByZWxhdGlvblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZWxhdGVkSXRlbXMge1xyXG4gICAgICAgICAgICB0aHVtYm5haWxcclxuICAgICAgICAgICAgaXRlbSB7XHJcbiAgICAgICAgICAgICAgbGFiZWxcclxuICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgIHJlbGF0ZWRUeXBlc09mRW50aXR5IHtcclxuICAgICAgICAgICAgICAgIHR5cGVcclxuICAgICAgICAgICAgICAgIGNvdW50XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhZGNydW1icyB7XHJcbiAgICAgICAgICAgIGxhYmVsXHJcbiAgICAgICAgICAgIGxpbmtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1gLFxyXG4gIH0sXHJcbiAgZ2V0Tm9kZToge1xyXG4gICAgcXVlcnlOYW1lOiAnZ2V0Tm9kZScsXHJcbiAgICBxdWVyeUJvZHk6IGB7XHJcbiAgICAgICAgZ2V0Tm9kZShfX1BBUkFNU19fKSB7XHJcbiAgICAgICAgICAuLi4gb24gSXRlbSB7XHJcbiAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgIGxhYmVsXHJcbiAgICAgICAgICAgIHRpdGxlXHJcbiAgICAgICAgICAgIHN1YlRpdGxlXHJcbiAgICAgICAgICAgIGltYWdlXHJcbiAgICAgICAgICAgIGRpZ2l0YWxPYmplY3RzIHtcclxuICAgICAgICAgICAgICBsYWJlbFxyXG4gICAgICAgICAgICAgIHR5cGVcclxuICAgICAgICAgICAgICB1cmxcclxuICAgICAgICAgICAgICBvcmRlclxyXG4gICAgICAgICAgICAgIGl0ZW1zIHsgICAgICBcclxuICAgICAgICAgICAgICAgIG9yZGVyICAgICAgXHJcbiAgICAgICAgICAgICAgICBsYWJlbFxyXG4gICAgICAgICAgICAgICAgdXJsICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGV4dFxyXG4gICAgICAgICAgICBkb2N1bWVudF90eXBlXHJcbiAgICAgICAgICAgIGRvY3VtZW50X2NsYXNzaWZpY2F0aW9uXHJcbiAgICAgICAgICAgIGZpZWxkcyB7XHJcbiAgICAgICAgICAgICAgLi4uIG9uIEtleVZhbHVlRmllbGQge1xyXG4gICAgICAgICAgICAgICAga2V5XHJcbiAgICAgICAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAuLi4gb24gS2V5VmFsdWVGaWVsZEdyb3VwIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsXHJcbiAgICAgICAgICAgICAgICBmaWVsZHMge1xyXG4gICAgICAgICAgICAgICAgICAuLi4gb24gS2V5VmFsdWVGaWVsZCB7XHJcbiAgICAgICAgICAgICAgICAgICAga2V5XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAuLi4gb24gS2V5VmFsdWVGaWVsZEdyb3VwIHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAuLi4gb24gS2V5VmFsdWVGaWVsZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZWxhdGVkRW50aXRpZXMge1xyXG4gICAgICAgICAgICAgICAgY291bnRcclxuICAgICAgICAgICAgICAgIGVudGl0eXtcclxuICAgICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICAgICAgbGFiZWxcclxuICAgICAgICAgICAgICAgICAgdHlwZU9mRW50aXR5XHJcbiAgICAgICAgICAgICAgICAgIHJlbGF0aW9uXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVsYXRlZEl0ZW1zIHtcclxuICAgICAgICAgICAgICB0aHVtYm5haWxcclxuICAgICAgICAgICAgICBpdGVtIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsXHJcbiAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgZmllbGRzIHtcclxuICAgICAgICAgICAgICAgICAgLi4uXHJcbiAgICAgICAgICAgICAgICAgIG9uIEtleVZhbHVlRmllbGQge1xyXG4gICAgICAgICAgICAgICAgICAgIGtleVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgLi4uIG9uIEtleVZhbHVlRmllbGRHcm91cCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZHMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgLi4uXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbiBLZXlWYWx1ZUZpZWxkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZWxhdGVkVHlwZXNPZkVudGl0eSB7XHJcbiAgICAgICAgICAgICAgICAgIHR5cGVcclxuICAgICAgICAgICAgICAgICAgY291bnRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWRjcnVtYnMge1xyXG4gICAgICAgICAgICAgIGxhYmVsXHJcbiAgICAgICAgICAgICAgbGlua1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuLi4gb24gTm9kZSB7XHJcbiAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgIGxhYmVsXHJcbiAgICAgICAgICAgIGltZ1xyXG4gICAgICAgICAgICBkb2N1bWVudF90eXBlXHJcbiAgICAgICAgICAgIGRvY3VtZW50X2NsYXNzaWZpY2F0aW9uXHJcbiAgICAgICAgICAgIGZpZWxkcyB7XHJcbiAgICAgICAgICAgICAgLi4uIG9uIEtleVZhbHVlRmllbGQge1xyXG4gICAgICAgICAgICAgICAga2V5XHJcbiAgICAgICAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAuLi4gb24gS2V5VmFsdWVGaWVsZEdyb3VwIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsXHJcbiAgICAgICAgICAgICAgICBmaWVsZHMge1xyXG4gICAgICAgICAgICAgICAgICAuLi4gb24gS2V5VmFsdWVGaWVsZCB7XHJcbiAgICAgICAgICAgICAgICAgICAga2V5XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAuLi4gb24gS2V5VmFsdWVGaWVsZEdyb3VwIHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAuLi4gb24gS2V5VmFsdWVGaWVsZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZWxhdGVkRW50aXRpZXMge1xyXG4gICAgICAgICAgICAgIGNvdW50XHJcbiAgICAgICAgICAgICAgZW50aXR5IHtcclxuICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICBsYWJlbFxyXG4gICAgICAgICAgICAgICAgdHlwZU9mRW50aXR5XHJcbiAgICAgICAgICAgICAgICByZWxhdGlvblxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhZGNydW1icyB7XHJcbiAgICAgICAgICAgICAgbGFiZWxcclxuICAgICAgICAgICAgICBsaW5rXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1gLFxyXG4gIH0sXHJcbiAgYXV0b0NvbXBsZXRlOiB7XHJcbiAgICBxdWVyeU5hbWU6ICdhdXRvQ29tcGxldGUnLFxyXG4gICAgcXVlcnlCb2R5OiBge1xyXG4gICAgICAgIGF1dG9Db21wbGV0ZShfX1BBUkFNU19fKXtcclxuICAgICAgICAgIHRvdGFsQ291bnRcclxuICAgICAgICAgIHJlc3VsdHMge1xyXG4gICAgICAgICAgICAuLi4gb24gRW50aXR5Q291bnREYXRhIHtcclxuICAgICAgICAgICAgICBjb3VudFxyXG4gICAgICAgICAgICAgIGVudGl0eSB7XHJcbiAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgbGFiZWxcclxuICAgICAgICAgICAgICAgIHR5cGVPZkVudGl0eVxyXG4gICAgICAgICAgICAgICAgZmllbGRzIHtcclxuICAgICAgICAgICAgICAgICAgLi4uIG9uIEtleVZhbHVlRmllbGQge1xyXG4gICAgICAgICAgICAgICAgICAgIGtleVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgLi4uIG9uIEtleVZhbHVlRmllbGRHcm91cCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZHMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgLi4uIG9uIEtleVZhbHVlRmllbGQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLi4uIG9uIEl0ZW1MaXN0aW5nIHtcclxuICAgICAgICAgICAgICBpdGVtIHtcclxuICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICBsYWJlbFxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnRfdHlwZVxyXG4gICAgICAgICAgICAgICAgZmllbGRzIHtcclxuICAgICAgICAgICAgICAgICAgLi4uIG9uIEtleVZhbHVlRmllbGQge1xyXG4gICAgICAgICAgICAgICAgICAgIGtleVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgLi4uIG9uIEtleVZhbHVlRmllbGRHcm91cCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZHMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgLi4uIG9uIEtleVZhbHVlRmllbGQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1gLFxyXG4gIH0sXHJcbiAgc2VhcmNoOiB7XHJcbiAgICBxdWVyeU5hbWU6ICdzZWFyY2gnLFxyXG4gICAgcXVlcnlCb2R5OiBge1xyXG4gICAgICBzZWFyY2goX19QQVJBTVNfXyl7XHJcbiAgICAgICAgdG90YWxDb3VudFxyXG4gICAgICAgIHJlc3VsdHMge1xyXG4gICAgICAgICAgb3JkZXJ7XHJcbiAgICAgICAgICAgIHR5cGVcclxuICAgICAgICAgICAga2V5XHJcbiAgICAgICAgICAgIGRpcmVjdGlvblxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZmllbGRzXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgIGhpZ2hsaWdodFxyXG4gICAgICAgICAgICBsaW1pdFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaXRlbXMge1xyXG4gICAgICAgICAgICAuLi4gb24gRW50aXR5IHtcclxuICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgIGxhYmVsXHJcbiAgICAgICAgICAgICAgdHlwZU9mRW50aXR5XHJcbiAgICAgICAgICAgICAgZmllbGRzIHtcclxuICAgICAgICAgICAgICAgIC4uLlxyXG4gICAgICAgICAgICAgICAgb24gS2V5VmFsdWVGaWVsZCB7XHJcbiAgICAgICAgICAgICAgICAgIGtleVxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLi4uIG9uIEtleVZhbHVlRmllbGRHcm91cCB7XHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgIGZpZWxkcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uXHJcbiAgICAgICAgICAgICAgICAgICAgb24gS2V5VmFsdWVGaWVsZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBrZXlcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHJlbGF0ZWRFbnRpdGllcyB7XHJcbiAgICAgICAgICAgICAgICAgIGNvdW50XHJcbiAgICAgICAgICAgICAgICAgIGVudGl0eXtcclxuICAgICAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZU9mRW50aXR5XHJcbiAgICAgICAgICAgICAgICAgICAgcmVsYXRpb25cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICByZWxhdGVkSXRlbXMge1xyXG4gICAgICAgICAgICAgICAgICB0aHVtYm5haWxcclxuICAgICAgICAgICAgICAgICAgaXRlbSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxcclxuICAgICAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAuLi5cclxuICAgICAgICAgICAgICAgICAgICAgIG9uIEtleVZhbHVlRmllbGQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIC4uLiBvbiBLZXlWYWx1ZUZpZWxkR3JvdXAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZHMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC4uLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uIEtleVZhbHVlRmllbGQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJlbGF0ZWRUeXBlc09mRW50aXR5IHtcclxuICAgICAgICAgICAgICAgICAgdHlwZVxyXG4gICAgICAgICAgICAgICAgICBjb3VudFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuLi4gb24gSXRlbSB7XHJcbiAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICBsYWJlbFxyXG4gICAgICAgICAgICAgIGljb25cclxuICAgICAgICAgICAgICB0aXRsZVxyXG4gICAgICAgICAgICAgIHN1YlRpdGxlXHJcbiAgICAgICAgICAgICAgaW1hZ2VcclxuICAgICAgICAgICAgICB0ZXh0XHJcbiAgICAgICAgICAgICAgcmVsYXRlZFR5cGVzT2ZFbnRpdHkge1xyXG4gICAgICAgICAgICAgICAgdHlwZVxyXG4gICAgICAgICAgICAgICAgY291bnRcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgYnJlYWRjcnVtYnMge1xyXG4gICAgICAgICAgICAgICAgbGFiZWxcclxuICAgICAgICAgICAgICAgIGxpbmtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgZmllbGRzIHtcclxuICAgICAgICAgICAgICAgIC4uLlxyXG4gICAgICAgICAgICAgICAgb24gS2V5VmFsdWVGaWVsZCB7XHJcbiAgICAgICAgICAgICAgICAgIGtleVxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLi4uIG9uIEtleVZhbHVlRmllbGRHcm91cCB7XHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgIGZpZWxkcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uXHJcbiAgICAgICAgICAgICAgICAgICAgb24gS2V5VmFsdWVGaWVsZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBrZXlcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9YCxcclxuICB9LFxyXG4gIGZhY2V0czoge1xyXG4gICAgcXVlcnlOYW1lOiAnc2VhcmNoJyxcclxuICAgIHF1ZXJ5Qm9keTogYHtcclxuICAgICAgc2VhcmNoKF9fUEFSQU1TX18pe1xyXG4gICAgICAgIGZhY2V0cyB7XHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgdHlwZVxyXG4gICAgICAgICAgb3BlcmF0b3JcclxuICAgICAgICAgIGxpbWl0XHJcbiAgICAgICAgICBvcmRlclxyXG4gICAgICAgICAgdG90YWxDb3VudFxyXG4gICAgICAgICAgZGF0YSB7XHJcbiAgICAgICAgICAgIGxhYmVsXHJcbiAgICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgICAgIGNvdW50ZXJcclxuICAgICAgICAgICAgc2VhcmNoRGF0YSB7XHJcbiAgICAgICAgICAgICAga2V5XHJcbiAgICAgICAgICAgICAgdmFsdWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfWAsXHJcbiAgfSxcclxuICBnZXRNaXNzaW5nQnViYmxlOiB7XHJcbiAgICBxdWVyeU5hbWU6ICdnZXRFbnRpdHknLFxyXG4gICAgcXVlcnlCb2R5OiBge1xyXG4gICAgICAgIGdldEVudGl0eShfX1BBUkFNU19fKXtcclxuICAgICAgICAgIGxhYmVsXHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgdHlwZU9mRW50aXR5XHJcbiAgICAgICAgfVxyXG4gICAgICB9YCxcclxuICB9LFxyXG4gIGdldE1hcE9iamVjdHM6IHtcclxuICAgIHF1ZXJ5TmFtZTogJ2dldE1hcE9iamVjdHMnLFxyXG4gICAgcXVlcnlCb2R5OiBge1xyXG4gICAgICBnZXRNYXBPYmplY3Rze1xyXG4gICAgICAgIGxhdFxyXG4gICAgICAgIGxvblxyXG4gICAgICAgIGl0ZW0ge1xyXG4gICAgICAgICAgLi4ub24gSXRlbSB7XHJcbiAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICBsYWJlbFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLi4ub24gRW50aXR5IHtcclxuICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgIGxhYmVsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9YCxcclxuICB9LFxyXG4gIGdldEV2ZW50T2JqZWN0czoge1xyXG4gICAgcXVlcnlOYW1lOiAnZ2V0RXZlbnRPYmplY3RzJyxcclxuICAgIHF1ZXJ5Qm9keTogYHtcclxuICAgICAgZ2V0RXZlbnRPYmplY3Rze1xyXG4gICAgICAgIGlkXHJcbiAgICAgICAgc3RhcnRcclxuICAgICAgICBlbmRcclxuICAgICAgICBsYWJlbFxyXG4gICAgICAgIGl0ZW0ge1xyXG4gICAgICAgICAgLi4uIG9uIEVudGl0eSB7XHJcbiAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgIGxhYmVsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9YCxcclxuICB9LFxyXG4gIGdldENvbGxlY3Rpb246IHtcclxuICAgIHF1ZXJ5TmFtZTogJ2dldENvbGxlY3Rpb24nLFxyXG4gICAgcXVlcnlCb2R5OiBge1xyXG4gICAgICBnZXRDb2xsZWN0aW9uKF9fUEFSQU1TX18pIHtcclxuICAgICAgICB0aXRsZVxyXG4gICAgICAgIHRleHRcclxuICAgICAgICB0b3RhbFxyXG4gICAgICAgIGl0ZW1zIHtcclxuICAgICAgICAgIHRpdGxlXHJcbiAgICAgICAgICBjb250ZW50XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kXHJcbiAgICAgICAgICBpbWFnZVxyXG4gICAgICAgICAgdXJsXHJcbiAgICAgICAgICBhNHZJZFxyXG4gICAgICAgICAgdHlwZVxyXG4gICAgICAgICAgY2xhc3NpZmljYXRpb25cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1gXHJcbiAgfVxyXG59KTtcclxuIl19