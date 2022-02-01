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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBvbGxvLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL243LWJvaWxlcnBsYXRlLWxpYi9zcmMvbGliL2FyaWFubmEtd2ViL2NvbmZpZy9hcG9sbG8uY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sZUFBZSxHQUFHLENBQUMsS0FBSyxFQUFFLFFBQVEsR0FBRyxJQUFJLEVBQUUsRUFBRTtJQUNqRCxJQUFJLFlBQVksR0FBRzs7Ozs7R0FLbEIsQ0FBQztJQUNGLElBQUksUUFBUSxFQUFFO1FBQ1osWUFBWSxHQUFHOzs7Ozs7S0FNZCxDQUFDO0tBQ0g7SUFDRCxNQUFNLE1BQU0sR0FBRyxFQUFFLENBQUM7SUFDbEIsSUFBSSxDQUFDLENBQUM7SUFDTixJQUFJLENBQUMsQ0FBQztJQUNOLGNBQWM7SUFDZCxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQzdCLE1BQU0sQ0FBQyxJQUFJLENBQ1QsQ0FBQyxLQUFLLENBQUM7WUFDTCxDQUFDLENBQUMsWUFBWTtZQUNkLENBQUMsQ0FBQyxhQUFhLFlBQVksRUFBRSxDQUNoQyxDQUFDO0tBQ0g7SUFDRCxlQUFlO0lBQ2YsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUM3QixNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDakM7SUFFRCxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDekIsQ0FBQyxDQUFDO0FBRUYsZUFBZSxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUM3QixZQUFZLEVBQUU7UUFDWixTQUFTLEVBQUUsY0FBYztRQUN6QixTQUFTLEVBQUU7Ozs7Ozs7T0FPUjtLQUNKO0lBQ0QsU0FBUyxFQUFFO1FBQ1QsU0FBUyxFQUFFLFdBQVc7UUFDdEIsU0FBUyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7O01BZ0JUO0tBQ0g7SUFDRCxXQUFXLEVBQUU7UUFDWCxTQUFTLEVBQUUsZ0JBQWdCO1FBQzNCLFNBQVMsRUFBRTs7O1lBR0gsZUFBZSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUM7OztPQUd0QztLQUNKO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsU0FBUyxFQUFFLGdCQUFnQjtRQUMzQixTQUFTLEVBQUU7OztZQUdILGVBQWUsQ0FBQyxTQUFTLENBQUM7OztPQUcvQjtLQUNKO0lBQ0QsWUFBWSxFQUFFO1FBQ1osU0FBUyxFQUFFLGNBQWM7UUFDekIsU0FBUyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBd0NMO0tBQ1A7SUFDRCxxQkFBcUIsRUFBRTtRQUNyQixTQUFTLEVBQUUsY0FBYztRQUN6QixTQUFTLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBNkJMO0tBQ1A7SUFDRCxnQkFBZ0IsRUFBRTtRQUNoQixTQUFTLEVBQUUsV0FBVztRQUN0QixTQUFTLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQXVGUjtLQUNKO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsU0FBUyxFQUFFLFNBQVM7UUFDcEIsU0FBUyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFtRFA7S0FDTDtJQUNELE9BQU8sRUFBRTtRQUNQLFNBQVMsRUFBRSxTQUFTO1FBQ3BCLFNBQVMsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQXFJUDtLQUNMO0lBQ0QsWUFBWSxFQUFFO1FBQ1osU0FBUyxFQUFFLGNBQWM7UUFDekIsU0FBUyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFtRFA7S0FDTDtJQUNELE1BQU0sRUFBRTtRQUNOLFNBQVMsRUFBRSxRQUFRO1FBQ25CLFNBQVMsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQWdIVDtLQUNIO0lBQ0QsTUFBTSxFQUFFO1FBQ04sU0FBUyxFQUFFLFFBQVE7UUFDbkIsU0FBUyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQW9CVDtLQUNIO0lBQ0QsZ0JBQWdCLEVBQUU7UUFDaEIsU0FBUyxFQUFFLFdBQVc7UUFDdEIsU0FBUyxFQUFFOzs7Ozs7UUFNUDtLQUNMO0lBQ0QsYUFBYSxFQUFFO1FBQ2IsU0FBUyxFQUFFLGVBQWU7UUFDMUIsU0FBUyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7TUFlVDtLQUNIO0lBQ0QsZUFBZSxFQUFFO1FBQ2YsU0FBUyxFQUFFLGlCQUFpQjtRQUM1QixTQUFTLEVBQUU7Ozs7Ozs7Ozs7Ozs7TUFhVDtLQUNIO0lBQ0QsYUFBYSxFQUFFO1FBQ2IsU0FBUyxFQUFFLGVBQWU7UUFDMUIsU0FBUyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7O01BZ0JUO0tBQ0g7Q0FDRixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBnZXRUcmVlQnJhbmNoZXMgPSAoZGVwdGgsIGhhc0ltYWdlID0gdHJ1ZSkgPT4ge1xuICBsZXQgYnJhbmNoQ29uZmlnID0gYFxuICAgIGxhYmVsXG4gICAgaWRcbiAgICBkb2N1bWVudF90eXBlXG4gICAgZG9jdW1lbnRfY2xhc3NpZmljYXRpb25cbiAgYDtcbiAgaWYgKGhhc0ltYWdlKSB7XG4gICAgYnJhbmNoQ29uZmlnID0gYFxuICAgICAgbGFiZWxcbiAgICAgIGlkXG4gICAgICBpbWdcbiAgICAgIGRvY3VtZW50X3R5cGVcbiAgICAgIGRvY3VtZW50X2NsYXNzaWZpY2F0aW9uXG4gICAgYDtcbiAgfVxuICBjb25zdCBvdXRwdXQgPSBbXTtcbiAgbGV0IGk7XG4gIGxldCBqO1xuICAvLyBvcGVuIGNvbmZpZ1xuICBmb3IgKGkgPSAwOyBpIDwgZGVwdGg7IGkgKz0gMSkge1xuICAgIG91dHB1dC5wdXNoKFxuICAgICAgaSA9PT0gMFxuICAgICAgICA/IGJyYW5jaENvbmZpZ1xuICAgICAgICA6IGBicmFuY2hlcyB7JHticmFuY2hDb25maWd9YFxuICAgICk7XG4gIH1cbiAgLy8gY2xvc2UgY29uZmlnXG4gIGZvciAoaiA9IDA7IGogPCBkZXB0aDsgaiArPSAxKSB7XG4gICAgb3V0cHV0LnB1c2goaiA9PT0gMCA/ICcnIDogJ30nKTtcbiAgfVxuXG4gIHJldHVybiBvdXRwdXQuam9pbignJyk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCAodHJlZURlcHRoKSA9PiAoe1xuICBnZXRMYXN0UG9zdHM6IHtcbiAgICBxdWVyeU5hbWU6ICdnZXRMYXN0UG9zdHMnLFxuICAgIHF1ZXJ5Qm9keTogYFxuICAgICAgICB7XG4gICAgICAgICAgZ2V0TGFzdFBvc3RzKF9fUEFSQU1TX18pIHtcbiAgICAgICAgICAgIGlkXG4gICAgICAgICAgICB0aXRsZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYCxcbiAgfSxcbiAgZ2V0U2xpZGVyOiB7XG4gICAgcXVlcnlOYW1lOiAnZ2V0U2xpZGVyJyxcbiAgICBxdWVyeUJvZHk6IGAge1xuICAgICAgZ2V0U2xpZGVyKF9fUEFSQU1TX18pIHtcbiAgICAgICAgcHJldGV4dFxuICAgICAgICB0aXRsZVxuICAgICAgICB0ZXh0XG4gICAgICAgIGJhY2tncm91bmQge1xuICAgICAgICAgICAgdHlwZVxuICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgfVxuICAgICAgICBjdGFMYWJlbFxuICAgICAgICBjdGFQYXlsb2FkXG4gICAgICAgIG1ldGFkYXRhIHtcbiAgICAgICAgICAgIGtleVxuICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1gXG4gIH0sXG4gIGdldFRyZWVMaXRlOiB7XG4gICAgcXVlcnlOYW1lOiAnZ2V0VHJlZU9mSXRlbXMnLFxuICAgIHF1ZXJ5Qm9keTogYFxuICAgICAge1xuICAgICAgICBnZXRUcmVlT2ZJdGVtc3tcbiAgICAgICAgICAke2dldFRyZWVCcmFuY2hlcyh0cmVlRGVwdGgsIGZhbHNlKX1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYCxcbiAgfSxcbiAgZ2V0VHJlZToge1xuICAgIHF1ZXJ5TmFtZTogJ2dldFRyZWVPZkl0ZW1zJyxcbiAgICBxdWVyeUJvZHk6IGBcbiAgICAgIHtcbiAgICAgICAgZ2V0VHJlZU9mSXRlbXN7XG4gICAgICAgICAgJHtnZXRUcmVlQnJhbmNoZXModHJlZURlcHRoKX1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYCxcbiAgfSxcbiAgZ2xvYmFsRmlsdGVyOiB7XG4gICAgcXVlcnlOYW1lOiAnZ2xvYmFsRmlsdGVyJyxcbiAgICBxdWVyeUJvZHk6IGB7XG4gICAgICAgIGdsb2JhbEZpbHRlcihfX1BBUkFNU19fKXtcbiAgICAgICAgICBlbnRpdGllc0RhdGEge1xuICAgICAgICAgICAgZW50aXR5IHtcbiAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICAgICAgdHlwZU9mRW50aXR5XG4gICAgICAgICAgICB9IGNvdW50XG4gICAgICAgICAgfVxuICAgICAgICAgIHR5cGVPZkVudGl0eURhdGEge1xuICAgICAgICAgICAgdHlwZVxuICAgICAgICAgICAgY291bnRcbiAgICAgICAgICB9XG4gICAgICAgICAgaXRlbXNQYWdpbmF0aW9uIHtcbiAgICAgICAgICAgIHRvdGFsQ291bnRcbiAgICAgICAgICAgIGl0ZW1zIHtcbiAgICAgICAgICAgICAgdGh1bWJuYWlsXG4gICAgICAgICAgICAgIGl0ZW0ge1xuICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgICAgICBmaWVsZHNcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAuLi5cbiAgICAgICAgICAgICAgICAgIG9uIEtleVZhbHVlRmllbGQge1xuICAgICAgICAgICAgICAgICAgICBrZXlcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWRjcnVtYnMge1xuICAgICAgICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgICAgICAgIGxpbmtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVsYXRlZFR5cGVzT2ZFbnRpdHkge1xuICAgICAgICAgICAgICAgICAgdHlwZVxuICAgICAgICAgICAgICAgICAgY291bnRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgfWAsXG4gIH0sXG4gIGdldEVudGl0eVJlbGF0ZWRJdGVtczoge1xuICAgIHF1ZXJ5TmFtZTogJ2dsb2JhbEZpbHRlcicsXG4gICAgcXVlcnlCb2R5OiBge1xuICAgICAgICBnbG9iYWxGaWx0ZXIoX19QQVJBTVNfXyl7XG4gICAgICAgICAgaXRlbXNQYWdpbmF0aW9uIHtcbiAgICAgICAgICAgIHRvdGFsQ291bnRcbiAgICAgICAgICAgIGl0ZW1zIHtcbiAgICAgICAgICAgICAgdGh1bWJuYWlsXG4gICAgICAgICAgICAgIGl0ZW0ge1xuICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgICAgICBmaWVsZHNcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAuLi5cbiAgICAgICAgICAgICAgICAgIG9uIEtleVZhbHVlRmllbGQge1xuICAgICAgICAgICAgICAgICAgICBrZXlcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWRjcnVtYnMge1xuICAgICAgICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgICAgICAgIGxpbmtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVsYXRlZFR5cGVzT2ZFbnRpdHkge1xuICAgICAgICAgICAgICAgICAgdHlwZVxuICAgICAgICAgICAgICAgICAgY291bnRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgfWAsXG4gIH0sXG4gIGdldEVudGl0eURldGFpbHM6IHtcbiAgICBxdWVyeU5hbWU6ICdnZXRFbnRpdHknLFxuICAgIHF1ZXJ5Qm9keTogYHtcbiAgICAgICAgZ2V0RW50aXR5KF9fUEFSQU1TX18pe1xuICAgICAgICAgIHJlbGF0ZWRJdGVtc1RvdGFsQ291bnQsXG4gICAgICAgICAgcmVsYXRlZExhVG90YWxDb3VudDogcmVsYXRlZEFsVG90YWxDb3VudCxcbiAgICAgICAgICBvdmVydmlld1RhYlxuICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgaWRcbiAgICAgICAgICB0eXBlT2ZFbnRpdHlcbiAgICAgICAgICByZWxhdGVkTGE6IHJlbGF0ZWRBbCB7XG4gICAgICAgICAgICB0aHVtYm5haWxcbiAgICAgICAgICAgIHJlbGF0aW9uICAgICAgICAgIFxuICAgICAgICAgICAgaXRlbSB7XG4gICAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgIGZpZWxkcyB7XG4gICAgICAgICAgICAgICAgLi4uXG4gICAgICAgICAgICAgICAgb24gS2V5VmFsdWVGaWVsZCB7XG4gICAgICAgICAgICAgICAgICBrZXlcbiAgICAgICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGZpZWxkcyB7XG4gICAgICAgICAgICAuLi4gb24gS2V5VmFsdWVGaWVsZCB7XG4gICAgICAgICAgICAgIGtleVxuICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLi4uIG9uIEtleVZhbHVlRmllbGRHcm91cCB7XG4gICAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICAgIGZpZWxkcyB7XG4gICAgICAgICAgICAgICAgLi4uIG9uIEtleVZhbHVlRmllbGQge1xuICAgICAgICAgICAgICAgICAga2V5XG4gICAgICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuLi4gb24gS2V5VmFsdWVGaWVsZEdyb3VwIHtcbiAgICAgICAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICAgICAgICBmaWVsZHMge1xuICAgICAgICAgICAgICAgICAgICAuLi4gb24gS2V5VmFsdWVGaWVsZCB7XG4gICAgICAgICAgICAgICAgICAgICAga2V5XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBleHRyYVRhYlxuICAgICAgICAgIHdpa2lUYWIge1xuICAgICAgICAgICAgdGV4dFxuICAgICAgICAgICAgdXJsXG4gICAgICAgICAgfVxuICAgICAgICAgIHJlbGF0ZWRJdGVtcyB7XG4gICAgICAgICAgICB0aHVtYm5haWxcbiAgICAgICAgICAgIHJlbGF0aW9uXG4gICAgICAgICAgICBpdGVtIHtcbiAgICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgZmllbGRzXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAuLi5cbiAgICAgICAgICAgICAgICBvbiBLZXlWYWx1ZUZpZWxkIHtcbiAgICAgICAgICAgICAgICAgIGtleVxuICAgICAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnJlYWRjcnVtYnMge1xuICAgICAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICAgICAgbGlua1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZWxhdGVkVHlwZXNPZkVudGl0eSB7XG4gICAgICAgICAgICAgIHR5cGVcbiAgICAgICAgICAgICAgY291bnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmVsYXRlZEVudGl0aWVzIHtcbiAgICAgICAgICAgIGVudGl0eSB7XG4gICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgICAgIHR5cGVPZkVudGl0eVxuICAgICAgICAgICAgICAgIHJlbGF0aW9uXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb3VudFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYCxcbiAgfSxcbiAgZ2V0SXRlbToge1xuICAgIHF1ZXJ5TmFtZTogJ2dldEl0ZW0nLFxuICAgIHF1ZXJ5Qm9keTogYHtcbiAgICAgICAgZ2V0SXRlbShfX1BBUkFNU19fKSB7XG4gICAgICAgICAgaWRcbiAgICAgICAgICBsYWJlbFxuICAgICAgICAgIGljb25cbiAgICAgICAgICB0aXRsZVxuICAgICAgICAgIHN1YlRpdGxlXG4gICAgICAgICAgaW1hZ2VcbiAgICAgICAgICB0ZXh0XG4gICAgICAgICAgZmllbGRzIHtcbiAgICAgICAgICAgIC4uLlxuICAgICAgICAgICAgb24gS2V5VmFsdWVGaWVsZCB7XG4gICAgICAgICAgICAgIGtleVxuICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLi4uIG9uIEtleVZhbHVlRmllbGRHcm91cCB7XG4gICAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICAgIGZpZWxkcyB7XG4gICAgICAgICAgICAgICAgLi4uXG4gICAgICAgICAgICAgICAgb24gS2V5VmFsdWVGaWVsZCB7XG4gICAgICAgICAgICAgICAgICBrZXlcbiAgICAgICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJlbGF0ZWRFbnRpdGllcyB7XG4gICAgICAgICAgICBjb3VudFxuICAgICAgICAgICAgZW50aXR5e1xuICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgICB0eXBlT2ZFbnRpdHlcbiAgICAgICAgICAgICAgcmVsYXRpb25cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmVsYXRlZEl0ZW1zIHtcbiAgICAgICAgICAgIHRodW1ibmFpbFxuICAgICAgICAgICAgaXRlbSB7XG4gICAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgIHJlbGF0ZWRUeXBlc09mRW50aXR5IHtcbiAgICAgICAgICAgICAgICB0eXBlXG4gICAgICAgICAgICAgICAgY291bnRcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhZGNydW1icyB7XG4gICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgbGlua1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfWAsXG4gIH0sXG4gIGdldE5vZGU6IHtcbiAgICBxdWVyeU5hbWU6ICdnZXROb2RlJyxcbiAgICBxdWVyeUJvZHk6IGB7XG4gICAgICAgIGdldE5vZGUoX19QQVJBTVNfXykge1xuICAgICAgICAgIC4uLiBvbiBJdGVtIHtcbiAgICAgICAgICAgIGlkXG4gICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgdGl0bGVcbiAgICAgICAgICAgIHN1YlRpdGxlXG4gICAgICAgICAgICBpbWFnZVxuICAgICAgICAgICAgZGlnaXRhbE9iamVjdHMge1xuICAgICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgICB0eXBlXG4gICAgICAgICAgICAgIHVybFxuICAgICAgICAgICAgICBvcmRlclxuICAgICAgICAgICAgICBpdGVtcyB7ICAgICAgXG4gICAgICAgICAgICAgICAgb3JkZXIgICAgICBcbiAgICAgICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgICAgIHVybCAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRleHRcbiAgICAgICAgICAgIGRvY3VtZW50X3R5cGVcbiAgICAgICAgICAgIGRvY3VtZW50X2NsYXNzaWZpY2F0aW9uXG4gICAgICAgICAgICBmaWVsZHMge1xuICAgICAgICAgICAgICAuLi4gb24gS2V5VmFsdWVGaWVsZCB7XG4gICAgICAgICAgICAgICAga2V5XG4gICAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuLi4gb24gS2V5VmFsdWVGaWVsZEdyb3VwIHtcbiAgICAgICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgICAgIGZpZWxkcyB7XG4gICAgICAgICAgICAgICAgICAuLi4gb24gS2V5VmFsdWVGaWVsZCB7XG4gICAgICAgICAgICAgICAgICAgIGtleVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgLi4uIG9uIEtleVZhbHVlRmllbGRHcm91cCB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkcyB7XG4gICAgICAgICAgICAgICAgICAgICAgLi4uIG9uIEtleVZhbHVlRmllbGQge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVsYXRlZEVudGl0aWVzIHtcbiAgICAgICAgICAgICAgICBjb3VudFxuICAgICAgICAgICAgICAgIGVudGl0eXtcbiAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgICAgICAgdHlwZU9mRW50aXR5XG4gICAgICAgICAgICAgICAgICByZWxhdGlvblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlbGF0ZWRJdGVtcyB7XG4gICAgICAgICAgICAgIHRodW1ibmFpbFxuICAgICAgICAgICAgICBpdGVtIHtcbiAgICAgICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgZmllbGRzIHtcbiAgICAgICAgICAgICAgICAgIC4uLlxuICAgICAgICAgICAgICAgICAgb24gS2V5VmFsdWVGaWVsZCB7XG4gICAgICAgICAgICAgICAgICAgIGtleVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgLi4uIG9uIEtleVZhbHVlRmllbGRHcm91cCB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkcyB7XG4gICAgICAgICAgICAgICAgICAgICAgLi4uXG4gICAgICAgICAgICAgICAgICAgICAgb24gS2V5VmFsdWVGaWVsZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXlcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlbGF0ZWRUeXBlc09mRW50aXR5IHtcbiAgICAgICAgICAgICAgICAgIHR5cGVcbiAgICAgICAgICAgICAgICAgIGNvdW50XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhZGNydW1icyB7XG4gICAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICAgIGxpbmtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgLi4uIG9uIE5vZGUge1xuICAgICAgICAgICAgaWRcbiAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICBpbWdcbiAgICAgICAgICAgIGRvY3VtZW50X3R5cGVcbiAgICAgICAgICAgIGRvY3VtZW50X2NsYXNzaWZpY2F0aW9uXG4gICAgICAgICAgICBmaWVsZHMge1xuICAgICAgICAgICAgICAuLi4gb24gS2V5VmFsdWVGaWVsZCB7XG4gICAgICAgICAgICAgICAga2V5XG4gICAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuLi4gb24gS2V5VmFsdWVGaWVsZEdyb3VwIHtcbiAgICAgICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgICAgIGZpZWxkcyB7XG4gICAgICAgICAgICAgICAgICAuLi4gb24gS2V5VmFsdWVGaWVsZCB7XG4gICAgICAgICAgICAgICAgICAgIGtleVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgLi4uIG9uIEtleVZhbHVlRmllbGRHcm91cCB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkcyB7XG4gICAgICAgICAgICAgICAgICAgICAgLi4uIG9uIEtleVZhbHVlRmllbGQge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVsYXRlZEVudGl0aWVzIHtcbiAgICAgICAgICAgICAgY291bnRcbiAgICAgICAgICAgICAgZW50aXR5IHtcbiAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICAgICAgdHlwZU9mRW50aXR5XG4gICAgICAgICAgICAgICAgcmVsYXRpb25cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWRjcnVtYnMge1xuICAgICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgICBsaW5rXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9YCxcbiAgfSxcbiAgYXV0b0NvbXBsZXRlOiB7XG4gICAgcXVlcnlOYW1lOiAnYXV0b0NvbXBsZXRlJyxcbiAgICBxdWVyeUJvZHk6IGB7XG4gICAgICAgIGF1dG9Db21wbGV0ZShfX1BBUkFNU19fKXtcbiAgICAgICAgICB0b3RhbENvdW50XG4gICAgICAgICAgcmVzdWx0cyB7XG4gICAgICAgICAgICAuLi4gb24gRW50aXR5Q291bnREYXRhIHtcbiAgICAgICAgICAgICAgY291bnRcbiAgICAgICAgICAgICAgZW50aXR5IHtcbiAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICAgICAgdHlwZU9mRW50aXR5XG4gICAgICAgICAgICAgICAgZmllbGRzIHtcbiAgICAgICAgICAgICAgICAgIC4uLiBvbiBLZXlWYWx1ZUZpZWxkIHtcbiAgICAgICAgICAgICAgICAgICAga2V5XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAuLi4gb24gS2V5VmFsdWVGaWVsZEdyb3VwIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgICAgICAgICAgZmllbGRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAuLi4gb24gS2V5VmFsdWVGaWVsZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXlcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuLi4gb24gSXRlbUxpc3Rpbmcge1xuICAgICAgICAgICAgICBpdGVtIHtcbiAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICAgICAgZG9jdW1lbnRfdHlwZVxuICAgICAgICAgICAgICAgIGZpZWxkcyB7XG4gICAgICAgICAgICAgICAgICAuLi4gb24gS2V5VmFsdWVGaWVsZCB7XG4gICAgICAgICAgICAgICAgICAgIGtleVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgLi4uIG9uIEtleVZhbHVlRmllbGRHcm91cCB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkcyB7XG4gICAgICAgICAgICAgICAgICAgICAgLi4uIG9uIEtleVZhbHVlRmllbGQge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfWAsXG4gIH0sXG4gIHNlYXJjaDoge1xuICAgIHF1ZXJ5TmFtZTogJ3NlYXJjaCcsXG4gICAgcXVlcnlCb2R5OiBge1xuICAgICAgc2VhcmNoKF9fUEFSQU1TX18pe1xuICAgICAgICB0b3RhbENvdW50XG4gICAgICAgIHJlc3VsdHMge1xuICAgICAgICAgIG9yZGVye1xuICAgICAgICAgICAgdHlwZVxuICAgICAgICAgICAga2V5XG4gICAgICAgICAgICBkaXJlY3Rpb25cbiAgICAgICAgICB9XG4gICAgICAgICAgZmllbGRzXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWRcbiAgICAgICAgICAgIGhpZ2hsaWdodFxuICAgICAgICAgICAgbGltaXRcbiAgICAgICAgICB9XG4gICAgICAgICAgaXRlbXMge1xuICAgICAgICAgICAgLi4uIG9uIEVudGl0eSB7XG4gICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICAgIHR5cGVPZkVudGl0eVxuICAgICAgICAgICAgICBmaWVsZHMge1xuICAgICAgICAgICAgICAgIC4uLlxuICAgICAgICAgICAgICAgIG9uIEtleVZhbHVlRmllbGQge1xuICAgICAgICAgICAgICAgICAga2V5XG4gICAgICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuLi4gb24gS2V5VmFsdWVGaWVsZEdyb3VwIHtcbiAgICAgICAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICAgICAgICBmaWVsZHMge1xuICAgICAgICAgICAgICAgICAgICAuLi5cbiAgICAgICAgICAgICAgICAgICAgb24gS2V5VmFsdWVGaWVsZCB7XG4gICAgICAgICAgICAgICAgICAgICAga2V5XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZWxhdGVkRW50aXRpZXMge1xuICAgICAgICAgICAgICAgICAgY291bnRcbiAgICAgICAgICAgICAgICAgIGVudGl0eXtcbiAgICAgICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgICAgICAgICAgdHlwZU9mRW50aXR5XG4gICAgICAgICAgICAgICAgICAgIHJlbGF0aW9uXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmVsYXRlZEl0ZW1zIHtcbiAgICAgICAgICAgICAgICAgIHRodW1ibmFpbFxuICAgICAgICAgICAgICAgICAgaXRlbSB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkcyB7XG4gICAgICAgICAgICAgICAgICAgICAgLi4uXG4gICAgICAgICAgICAgICAgICAgICAgb24gS2V5VmFsdWVGaWVsZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXlcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIC4uLiBvbiBLZXlWYWx1ZUZpZWxkR3JvdXAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC4uLlxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbiBLZXlWYWx1ZUZpZWxkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlbGF0ZWRUeXBlc09mRW50aXR5IHtcbiAgICAgICAgICAgICAgICAgIHR5cGVcbiAgICAgICAgICAgICAgICAgIGNvdW50XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuLi4gb24gSXRlbSB7XG4gICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICAgIGljb25cbiAgICAgICAgICAgICAgdGl0bGVcbiAgICAgICAgICAgICAgc3ViVGl0bGVcbiAgICAgICAgICAgICAgaW1hZ2VcbiAgICAgICAgICAgICAgdGV4dFxuICAgICAgICAgICAgICByZWxhdGVkVHlwZXNPZkVudGl0eSB7XG4gICAgICAgICAgICAgICAgdHlwZVxuICAgICAgICAgICAgICAgIGNvdW50XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnJlYWRjcnVtYnMge1xuICAgICAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICAgICAgbGlua1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGZpZWxkcyB7XG4gICAgICAgICAgICAgICAgLi4uXG4gICAgICAgICAgICAgICAgb24gS2V5VmFsdWVGaWVsZCB7XG4gICAgICAgICAgICAgICAgICBrZXlcbiAgICAgICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC4uLiBvbiBLZXlWYWx1ZUZpZWxkR3JvdXAge1xuICAgICAgICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgICAgICAgIGZpZWxkcyB7XG4gICAgICAgICAgICAgICAgICAgIC4uLlxuICAgICAgICAgICAgICAgICAgICBvbiBLZXlWYWx1ZUZpZWxkIHtcbiAgICAgICAgICAgICAgICAgICAgICBrZXlcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfWAsXG4gIH0sXG4gIGZhY2V0czoge1xuICAgIHF1ZXJ5TmFtZTogJ3NlYXJjaCcsXG4gICAgcXVlcnlCb2R5OiBge1xuICAgICAgc2VhcmNoKF9fUEFSQU1TX18pe1xuICAgICAgICBmYWNldHMge1xuICAgICAgICAgIGlkXG4gICAgICAgICAgdHlwZVxuICAgICAgICAgIG9wZXJhdG9yXG4gICAgICAgICAgbGltaXRcbiAgICAgICAgICBvcmRlclxuICAgICAgICAgIHRvdGFsQ291bnRcbiAgICAgICAgICBkYXRhIHtcbiAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgY291bnRlclxuICAgICAgICAgICAgc2VhcmNoRGF0YSB7XG4gICAgICAgICAgICAgIGtleVxuICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1gLFxuICB9LFxuICBnZXRNaXNzaW5nQnViYmxlOiB7XG4gICAgcXVlcnlOYW1lOiAnZ2V0RW50aXR5JyxcbiAgICBxdWVyeUJvZHk6IGB7XG4gICAgICAgIGdldEVudGl0eShfX1BBUkFNU19fKXtcbiAgICAgICAgICBsYWJlbFxuICAgICAgICAgIGlkXG4gICAgICAgICAgdHlwZU9mRW50aXR5XG4gICAgICAgIH1cbiAgICAgIH1gLFxuICB9LFxuICBnZXRNYXBPYmplY3RzOiB7XG4gICAgcXVlcnlOYW1lOiAnZ2V0TWFwT2JqZWN0cycsXG4gICAgcXVlcnlCb2R5OiBge1xuICAgICAgZ2V0TWFwT2JqZWN0c3tcbiAgICAgICAgbGF0XG4gICAgICAgIGxvblxuICAgICAgICBpdGVtIHtcbiAgICAgICAgICAuLi5vbiBJdGVtIHtcbiAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICB9XG4gICAgICAgICAgLi4ub24gRW50aXR5IHtcbiAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9YCxcbiAgfSxcbiAgZ2V0RXZlbnRPYmplY3RzOiB7XG4gICAgcXVlcnlOYW1lOiAnZ2V0RXZlbnRPYmplY3RzJyxcbiAgICBxdWVyeUJvZHk6IGB7XG4gICAgICBnZXRFdmVudE9iamVjdHN7XG4gICAgICAgIGlkXG4gICAgICAgIHN0YXJ0XG4gICAgICAgIGVuZFxuICAgICAgICBsYWJlbFxuICAgICAgICBpdGVtIHtcbiAgICAgICAgICAuLi4gb24gRW50aXR5IHtcbiAgICAgICAgICAgIGlkXG4gICAgICAgICAgICBsYWJlbFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1gLFxuICB9LFxuICBnZXRDb2xsZWN0aW9uOiB7XG4gICAgcXVlcnlOYW1lOiAnZ2V0Q29sbGVjdGlvbicsXG4gICAgcXVlcnlCb2R5OiBge1xuICAgICAgZ2V0Q29sbGVjdGlvbihfX1BBUkFNU19fKSB7XG4gICAgICAgIHRpdGxlXG4gICAgICAgIHRleHRcbiAgICAgICAgdG90YWxcbiAgICAgICAgaXRlbXMge1xuICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgY29udGVudFxuICAgICAgICAgIGJhY2tncm91bmRcbiAgICAgICAgICBpbWFnZVxuICAgICAgICAgIHVybFxuICAgICAgICAgIGE0dklkXG4gICAgICAgICAgdHlwZVxuICAgICAgICAgIGNsYXNzaWZpY2F0aW9uXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9YFxuICB9XG59KTtcbiJdfQ==