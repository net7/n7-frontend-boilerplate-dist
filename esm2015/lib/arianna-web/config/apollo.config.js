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
const ɵ0 = getTreeBranches;
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
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBvbGxvLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9jb25maWcvYXBvbGxvLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLGVBQWUsR0FBRyxDQUFDLEtBQUssRUFBRSxRQUFRLEdBQUcsSUFBSSxFQUFFLEVBQUU7SUFDakQsSUFBSSxZQUFZLEdBQUc7Ozs7O0dBS2xCLENBQUM7SUFDRixJQUFJLFFBQVEsRUFBRTtRQUNaLFlBQVksR0FBRzs7Ozs7O0tBTWQsQ0FBQztLQUNIO0lBQ0QsTUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDO0lBQ2xCLElBQUksQ0FBQyxDQUFDO0lBQ04sSUFBSSxDQUFDLENBQUM7SUFDTixjQUFjO0lBQ2QsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUM3QixNQUFNLENBQUMsSUFBSSxDQUNULENBQUMsS0FBSyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLFlBQVk7WUFDZCxDQUFDLENBQUMsYUFBYSxZQUFZLEVBQUUsQ0FDaEMsQ0FBQztLQUNIO0lBQ0QsZUFBZTtJQUNmLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDN0IsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ2pDO0lBRUQsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3pCLENBQUMsQ0FBQzs7QUFFRixlQUFlLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzdCLFlBQVksRUFBRTtRQUNaLFNBQVMsRUFBRSxjQUFjO1FBQ3pCLFNBQVMsRUFBRTs7Ozs7OztPQU9SO0tBQ0o7SUFDRCxTQUFTLEVBQUU7UUFDVCxTQUFTLEVBQUUsV0FBVztRQUN0QixTQUFTLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7TUFnQlQ7S0FDSDtJQUNELFdBQVcsRUFBRTtRQUNYLFNBQVMsRUFBRSxnQkFBZ0I7UUFDM0IsU0FBUyxFQUFFOzs7WUFHSCxlQUFlLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQzs7O09BR3RDO0tBQ0o7SUFDRCxPQUFPLEVBQUU7UUFDUCxTQUFTLEVBQUUsZ0JBQWdCO1FBQzNCLFNBQVMsRUFBRTs7O1lBR0gsZUFBZSxDQUFDLFNBQVMsQ0FBQzs7O09BRy9CO0tBQ0o7SUFDRCxZQUFZLEVBQUU7UUFDWixTQUFTLEVBQUUsY0FBYztRQUN6QixTQUFTLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUF3Q0w7S0FDUDtJQUNELHFCQUFxQixFQUFFO1FBQ3JCLFNBQVMsRUFBRSxjQUFjO1FBQ3pCLFNBQVMsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUE2Qkw7S0FDUDtJQUNELGdCQUFnQixFQUFFO1FBQ2hCLFNBQVMsRUFBRSxXQUFXO1FBQ3RCLFNBQVMsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BdUZSO0tBQ0o7SUFDRCxPQUFPLEVBQUU7UUFDUCxTQUFTLEVBQUUsU0FBUztRQUNwQixTQUFTLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQW1EUDtLQUNMO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsU0FBUyxFQUFFLFNBQVM7UUFDcEIsU0FBUyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBcUlQO0tBQ0w7SUFDRCxZQUFZLEVBQUU7UUFDWixTQUFTLEVBQUUsY0FBYztRQUN6QixTQUFTLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQW1EUDtLQUNMO0lBQ0QsTUFBTSxFQUFFO1FBQ04sU0FBUyxFQUFFLFFBQVE7UUFDbkIsU0FBUyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BZ0hUO0tBQ0g7SUFDRCxNQUFNLEVBQUU7UUFDTixTQUFTLEVBQUUsUUFBUTtRQUNuQixTQUFTLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01Bb0JUO0tBQ0g7SUFDRCxnQkFBZ0IsRUFBRTtRQUNoQixTQUFTLEVBQUUsV0FBVztRQUN0QixTQUFTLEVBQUU7Ozs7OztRQU1QO0tBQ0w7SUFDRCxhQUFhLEVBQUU7UUFDYixTQUFTLEVBQUUsZUFBZTtRQUMxQixTQUFTLEVBQUU7Ozs7Ozs7Ozs7Ozs7OztNQWVUO0tBQ0g7SUFDRCxlQUFlLEVBQUU7UUFDZixTQUFTLEVBQUUsaUJBQWlCO1FBQzVCLFNBQVMsRUFBRTs7Ozs7Ozs7Ozs7OztNQWFUO0tBQ0g7SUFDRCxhQUFhLEVBQUU7UUFDYixTQUFTLEVBQUUsZUFBZTtRQUMxQixTQUFTLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7TUFnQlQ7S0FDSDtDQUNGLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGdldFRyZWVCcmFuY2hlcyA9IChkZXB0aCwgaGFzSW1hZ2UgPSB0cnVlKSA9PiB7XHJcbiAgbGV0IGJyYW5jaENvbmZpZyA9IGBcclxuICAgIGxhYmVsXHJcbiAgICBpZFxyXG4gICAgZG9jdW1lbnRfdHlwZVxyXG4gICAgZG9jdW1lbnRfY2xhc3NpZmljYXRpb25cclxuICBgO1xyXG4gIGlmIChoYXNJbWFnZSkge1xyXG4gICAgYnJhbmNoQ29uZmlnID0gYFxyXG4gICAgICBsYWJlbFxyXG4gICAgICBpZFxyXG4gICAgICBpbWdcclxuICAgICAgZG9jdW1lbnRfdHlwZVxyXG4gICAgICBkb2N1bWVudF9jbGFzc2lmaWNhdGlvblxyXG4gICAgYDtcclxuICB9XHJcbiAgY29uc3Qgb3V0cHV0ID0gW107XHJcbiAgbGV0IGk7XHJcbiAgbGV0IGo7XHJcbiAgLy8gb3BlbiBjb25maWdcclxuICBmb3IgKGkgPSAwOyBpIDwgZGVwdGg7IGkgKz0gMSkge1xyXG4gICAgb3V0cHV0LnB1c2goXHJcbiAgICAgIGkgPT09IDBcclxuICAgICAgICA/IGJyYW5jaENvbmZpZ1xyXG4gICAgICAgIDogYGJyYW5jaGVzIHske2JyYW5jaENvbmZpZ31gXHJcbiAgICApO1xyXG4gIH1cclxuICAvLyBjbG9zZSBjb25maWdcclxuICBmb3IgKGogPSAwOyBqIDwgZGVwdGg7IGogKz0gMSkge1xyXG4gICAgb3V0cHV0LnB1c2goaiA9PT0gMCA/ICcnIDogJ30nKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBvdXRwdXQuam9pbignJyk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCAodHJlZURlcHRoKSA9PiAoe1xyXG4gIGdldExhc3RQb3N0czoge1xyXG4gICAgcXVlcnlOYW1lOiAnZ2V0TGFzdFBvc3RzJyxcclxuICAgIHF1ZXJ5Qm9keTogYFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGdldExhc3RQb3N0cyhfX1BBUkFNU19fKSB7XHJcbiAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgIHRpdGxlXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBgLFxyXG4gIH0sXHJcbiAgZ2V0U2xpZGVyOiB7XHJcbiAgICBxdWVyeU5hbWU6ICdnZXRTbGlkZXInLFxyXG4gICAgcXVlcnlCb2R5OiBgIHtcclxuICAgICAgZ2V0U2xpZGVyKF9fUEFSQU1TX18pIHtcclxuICAgICAgICBwcmV0ZXh0XHJcbiAgICAgICAgdGl0bGVcclxuICAgICAgICB0ZXh0XHJcbiAgICAgICAgYmFja2dyb3VuZCB7XHJcbiAgICAgICAgICAgIHR5cGVcclxuICAgICAgICAgICAgdmFsdWVcclxuICAgICAgICB9XHJcbiAgICAgICAgY3RhTGFiZWxcclxuICAgICAgICBjdGFQYXlsb2FkXHJcbiAgICAgICAgbWV0YWRhdGEge1xyXG4gICAgICAgICAgICBrZXlcclxuICAgICAgICAgICAgdmFsdWVcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1gXHJcbiAgfSxcclxuICBnZXRUcmVlTGl0ZToge1xyXG4gICAgcXVlcnlOYW1lOiAnZ2V0VHJlZU9mSXRlbXMnLFxyXG4gICAgcXVlcnlCb2R5OiBgXHJcbiAgICAgIHtcclxuICAgICAgICBnZXRUcmVlT2ZJdGVtc3tcclxuICAgICAgICAgICR7Z2V0VHJlZUJyYW5jaGVzKHRyZWVEZXB0aCwgZmFsc2UpfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBgLFxyXG4gIH0sXHJcbiAgZ2V0VHJlZToge1xyXG4gICAgcXVlcnlOYW1lOiAnZ2V0VHJlZU9mSXRlbXMnLFxyXG4gICAgcXVlcnlCb2R5OiBgXHJcbiAgICAgIHtcclxuICAgICAgICBnZXRUcmVlT2ZJdGVtc3tcclxuICAgICAgICAgICR7Z2V0VHJlZUJyYW5jaGVzKHRyZWVEZXB0aCl9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGAsXHJcbiAgfSxcclxuICBnbG9iYWxGaWx0ZXI6IHtcclxuICAgIHF1ZXJ5TmFtZTogJ2dsb2JhbEZpbHRlcicsXHJcbiAgICBxdWVyeUJvZHk6IGB7XHJcbiAgICAgICAgZ2xvYmFsRmlsdGVyKF9fUEFSQU1TX18pe1xyXG4gICAgICAgICAgZW50aXRpZXNEYXRhIHtcclxuICAgICAgICAgICAgZW50aXR5IHtcclxuICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICBsYWJlbFxyXG4gICAgICAgICAgICAgICAgdHlwZU9mRW50aXR5XHJcbiAgICAgICAgICAgIH0gY291bnRcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHR5cGVPZkVudGl0eURhdGEge1xyXG4gICAgICAgICAgICB0eXBlXHJcbiAgICAgICAgICAgIGNvdW50XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpdGVtc1BhZ2luYXRpb24ge1xyXG4gICAgICAgICAgICB0b3RhbENvdW50XHJcbiAgICAgICAgICAgIGl0ZW1zIHtcclxuICAgICAgICAgICAgICB0aHVtYm5haWxcclxuICAgICAgICAgICAgICBpdGVtIHtcclxuICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICBsYWJlbFxyXG4gICAgICAgICAgICAgICAgZmllbGRzXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIC4uLlxyXG4gICAgICAgICAgICAgICAgICBvbiBLZXlWYWx1ZUZpZWxkIHtcclxuICAgICAgICAgICAgICAgICAgICBrZXlcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhZGNydW1icyB7XHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgIGxpbmtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJlbGF0ZWRUeXBlc09mRW50aXR5IHtcclxuICAgICAgICAgICAgICAgICAgdHlwZVxyXG4gICAgICAgICAgICAgICAgICBjb3VudFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB9YCxcclxuICB9LFxyXG4gIGdldEVudGl0eVJlbGF0ZWRJdGVtczoge1xyXG4gICAgcXVlcnlOYW1lOiAnZ2xvYmFsRmlsdGVyJyxcclxuICAgIHF1ZXJ5Qm9keTogYHtcclxuICAgICAgICBnbG9iYWxGaWx0ZXIoX19QQVJBTVNfXyl7XHJcbiAgICAgICAgICBpdGVtc1BhZ2luYXRpb24ge1xyXG4gICAgICAgICAgICB0b3RhbENvdW50XHJcbiAgICAgICAgICAgIGl0ZW1zIHtcclxuICAgICAgICAgICAgICB0aHVtYm5haWxcclxuICAgICAgICAgICAgICBpdGVtIHtcclxuICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICBsYWJlbFxyXG4gICAgICAgICAgICAgICAgZmllbGRzXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIC4uLlxyXG4gICAgICAgICAgICAgICAgICBvbiBLZXlWYWx1ZUZpZWxkIHtcclxuICAgICAgICAgICAgICAgICAgICBrZXlcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhZGNydW1icyB7XHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgIGxpbmtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJlbGF0ZWRUeXBlc09mRW50aXR5IHtcclxuICAgICAgICAgICAgICAgICAgdHlwZVxyXG4gICAgICAgICAgICAgICAgICBjb3VudFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB9YCxcclxuICB9LFxyXG4gIGdldEVudGl0eURldGFpbHM6IHtcclxuICAgIHF1ZXJ5TmFtZTogJ2dldEVudGl0eScsXHJcbiAgICBxdWVyeUJvZHk6IGB7XHJcbiAgICAgICAgZ2V0RW50aXR5KF9fUEFSQU1TX18pe1xyXG4gICAgICAgICAgcmVsYXRlZEl0ZW1zVG90YWxDb3VudCxcclxuICAgICAgICAgIHJlbGF0ZWRMYVRvdGFsQ291bnQ6IHJlbGF0ZWRBbFRvdGFsQ291bnQsXHJcbiAgICAgICAgICBvdmVydmlld1RhYlxyXG4gICAgICAgICAgbGFiZWxcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgICB0eXBlT2ZFbnRpdHlcclxuICAgICAgICAgIHJlbGF0ZWRMYTogcmVsYXRlZEFsIHtcclxuICAgICAgICAgICAgdGh1bWJuYWlsXHJcbiAgICAgICAgICAgIHJlbGF0aW9uICAgICAgICAgIFxyXG4gICAgICAgICAgICBpdGVtIHtcclxuICAgICAgICAgICAgICBsYWJlbFxyXG4gICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgZmllbGRzIHtcclxuICAgICAgICAgICAgICAgIC4uLlxyXG4gICAgICAgICAgICAgICAgb24gS2V5VmFsdWVGaWVsZCB7XHJcbiAgICAgICAgICAgICAgICAgIGtleVxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZmllbGRzIHtcclxuICAgICAgICAgICAgLi4uIG9uIEtleVZhbHVlRmllbGQge1xyXG4gICAgICAgICAgICAgIGtleVxyXG4gICAgICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLi4uIG9uIEtleVZhbHVlRmllbGRHcm91cCB7XHJcbiAgICAgICAgICAgICAgbGFiZWxcclxuICAgICAgICAgICAgICBmaWVsZHMge1xyXG4gICAgICAgICAgICAgICAgLi4uIG9uIEtleVZhbHVlRmllbGQge1xyXG4gICAgICAgICAgICAgICAgICBrZXlcclxuICAgICAgICAgICAgICAgICAgdmFsdWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC4uLiBvbiBLZXlWYWx1ZUZpZWxkR3JvdXAge1xyXG4gICAgICAgICAgICAgICAgICBsYWJlbFxyXG4gICAgICAgICAgICAgICAgICBmaWVsZHMge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLiBvbiBLZXlWYWx1ZUZpZWxkIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGtleVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGV4dHJhVGFiXHJcbiAgICAgICAgICB3aWtpVGFiIHtcclxuICAgICAgICAgICAgdGV4dFxyXG4gICAgICAgICAgICB1cmxcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJlbGF0ZWRJdGVtcyB7XHJcbiAgICAgICAgICAgIHRodW1ibmFpbFxyXG4gICAgICAgICAgICByZWxhdGlvblxyXG4gICAgICAgICAgICBpdGVtIHtcclxuICAgICAgICAgICAgICBsYWJlbFxyXG4gICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgZmllbGRzXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLi4uXHJcbiAgICAgICAgICAgICAgICBvbiBLZXlWYWx1ZUZpZWxkIHtcclxuICAgICAgICAgICAgICAgICAga2V5XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGJyZWFkY3J1bWJzIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsXHJcbiAgICAgICAgICAgICAgICBsaW5rXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlbGF0ZWRUeXBlc09mRW50aXR5IHtcclxuICAgICAgICAgICAgICB0eXBlXHJcbiAgICAgICAgICAgICAgY291bnRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmVsYXRlZEVudGl0aWVzIHtcclxuICAgICAgICAgICAgZW50aXR5IHtcclxuICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICBsYWJlbFxyXG4gICAgICAgICAgICAgICAgdHlwZU9mRW50aXR5XHJcbiAgICAgICAgICAgICAgICByZWxhdGlvblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvdW50XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGAsXHJcbiAgfSxcclxuICBnZXRJdGVtOiB7XHJcbiAgICBxdWVyeU5hbWU6ICdnZXRJdGVtJyxcclxuICAgIHF1ZXJ5Qm9keTogYHtcclxuICAgICAgICBnZXRJdGVtKF9fUEFSQU1TX18pIHtcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgICBsYWJlbFxyXG4gICAgICAgICAgaWNvblxyXG4gICAgICAgICAgdGl0bGVcclxuICAgICAgICAgIHN1YlRpdGxlXHJcbiAgICAgICAgICBpbWFnZVxyXG4gICAgICAgICAgdGV4dFxyXG4gICAgICAgICAgZmllbGRzIHtcclxuICAgICAgICAgICAgLi4uXHJcbiAgICAgICAgICAgIG9uIEtleVZhbHVlRmllbGQge1xyXG4gICAgICAgICAgICAgIGtleVxyXG4gICAgICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLi4uIG9uIEtleVZhbHVlRmllbGRHcm91cCB7XHJcbiAgICAgICAgICAgICAgbGFiZWxcclxuICAgICAgICAgICAgICBmaWVsZHMge1xyXG4gICAgICAgICAgICAgICAgLi4uXHJcbiAgICAgICAgICAgICAgICBvbiBLZXlWYWx1ZUZpZWxkIHtcclxuICAgICAgICAgICAgICAgICAga2V5XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZWxhdGVkRW50aXRpZXMge1xyXG4gICAgICAgICAgICBjb3VudFxyXG4gICAgICAgICAgICBlbnRpdHl7XHJcbiAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICBsYWJlbFxyXG4gICAgICAgICAgICAgIHR5cGVPZkVudGl0eVxyXG4gICAgICAgICAgICAgIHJlbGF0aW9uXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJlbGF0ZWRJdGVtcyB7XHJcbiAgICAgICAgICAgIHRodW1ibmFpbFxyXG4gICAgICAgICAgICBpdGVtIHtcclxuICAgICAgICAgICAgICBsYWJlbFxyXG4gICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgcmVsYXRlZFR5cGVzT2ZFbnRpdHkge1xyXG4gICAgICAgICAgICAgICAgdHlwZVxyXG4gICAgICAgICAgICAgICAgY291bnRcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFkY3J1bWJzIHtcclxuICAgICAgICAgICAgbGFiZWxcclxuICAgICAgICAgICAgbGlua1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfWAsXHJcbiAgfSxcclxuICBnZXROb2RlOiB7XHJcbiAgICBxdWVyeU5hbWU6ICdnZXROb2RlJyxcclxuICAgIHF1ZXJ5Qm9keTogYHtcclxuICAgICAgICBnZXROb2RlKF9fUEFSQU1TX18pIHtcclxuICAgICAgICAgIC4uLiBvbiBJdGVtIHtcclxuICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgbGFiZWxcclxuICAgICAgICAgICAgdGl0bGVcclxuICAgICAgICAgICAgc3ViVGl0bGVcclxuICAgICAgICAgICAgaW1hZ2VcclxuICAgICAgICAgICAgZGlnaXRhbE9iamVjdHMge1xyXG4gICAgICAgICAgICAgIGxhYmVsXHJcbiAgICAgICAgICAgICAgdHlwZVxyXG4gICAgICAgICAgICAgIHVybFxyXG4gICAgICAgICAgICAgIG9yZGVyXHJcbiAgICAgICAgICAgICAgaXRlbXMgeyAgICAgIFxyXG4gICAgICAgICAgICAgICAgb3JkZXIgICAgICBcclxuICAgICAgICAgICAgICAgIGxhYmVsXHJcbiAgICAgICAgICAgICAgICB1cmwgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0ZXh0XHJcbiAgICAgICAgICAgIGRvY3VtZW50X3R5cGVcclxuICAgICAgICAgICAgZG9jdW1lbnRfY2xhc3NpZmljYXRpb25cclxuICAgICAgICAgICAgZmllbGRzIHtcclxuICAgICAgICAgICAgICAuLi4gb24gS2V5VmFsdWVGaWVsZCB7XHJcbiAgICAgICAgICAgICAgICBrZXlcclxuICAgICAgICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC4uLiBvbiBLZXlWYWx1ZUZpZWxkR3JvdXAge1xyXG4gICAgICAgICAgICAgICAgbGFiZWxcclxuICAgICAgICAgICAgICAgIGZpZWxkcyB7XHJcbiAgICAgICAgICAgICAgICAgIC4uLiBvbiBLZXlWYWx1ZUZpZWxkIHtcclxuICAgICAgICAgICAgICAgICAgICBrZXlcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIC4uLiBvbiBLZXlWYWx1ZUZpZWxkR3JvdXAge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGRzIHtcclxuICAgICAgICAgICAgICAgICAgICAgIC4uLiBvbiBLZXlWYWx1ZUZpZWxkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlbGF0ZWRFbnRpdGllcyB7XHJcbiAgICAgICAgICAgICAgICBjb3VudFxyXG4gICAgICAgICAgICAgICAgZW50aXR5e1xyXG4gICAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgICBsYWJlbFxyXG4gICAgICAgICAgICAgICAgICB0eXBlT2ZFbnRpdHlcclxuICAgICAgICAgICAgICAgICAgcmVsYXRpb25cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZWxhdGVkSXRlbXMge1xyXG4gICAgICAgICAgICAgIHRodW1ibmFpbFxyXG4gICAgICAgICAgICAgIGl0ZW0ge1xyXG4gICAgICAgICAgICAgICAgbGFiZWxcclxuICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICBmaWVsZHMge1xyXG4gICAgICAgICAgICAgICAgICAuLi5cclxuICAgICAgICAgICAgICAgICAgb24gS2V5VmFsdWVGaWVsZCB7XHJcbiAgICAgICAgICAgICAgICAgICAga2V5XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAuLi4gb24gS2V5VmFsdWVGaWVsZEdyb3VwIHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAuLi5cclxuICAgICAgICAgICAgICAgICAgICAgIG9uIEtleVZhbHVlRmllbGQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJlbGF0ZWRUeXBlc09mRW50aXR5IHtcclxuICAgICAgICAgICAgICAgICAgdHlwZVxyXG4gICAgICAgICAgICAgICAgICBjb3VudFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhZGNydW1icyB7XHJcbiAgICAgICAgICAgICAgbGFiZWxcclxuICAgICAgICAgICAgICBsaW5rXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC4uLiBvbiBOb2RlIHtcclxuICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgbGFiZWxcclxuICAgICAgICAgICAgaW1nXHJcbiAgICAgICAgICAgIGRvY3VtZW50X3R5cGVcclxuICAgICAgICAgICAgZG9jdW1lbnRfY2xhc3NpZmljYXRpb25cclxuICAgICAgICAgICAgZmllbGRzIHtcclxuICAgICAgICAgICAgICAuLi4gb24gS2V5VmFsdWVGaWVsZCB7XHJcbiAgICAgICAgICAgICAgICBrZXlcclxuICAgICAgICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC4uLiBvbiBLZXlWYWx1ZUZpZWxkR3JvdXAge1xyXG4gICAgICAgICAgICAgICAgbGFiZWxcclxuICAgICAgICAgICAgICAgIGZpZWxkcyB7XHJcbiAgICAgICAgICAgICAgICAgIC4uLiBvbiBLZXlWYWx1ZUZpZWxkIHtcclxuICAgICAgICAgICAgICAgICAgICBrZXlcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIC4uLiBvbiBLZXlWYWx1ZUZpZWxkR3JvdXAge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGRzIHtcclxuICAgICAgICAgICAgICAgICAgICAgIC4uLiBvbiBLZXlWYWx1ZUZpZWxkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlbGF0ZWRFbnRpdGllcyB7XHJcbiAgICAgICAgICAgICAgY291bnRcclxuICAgICAgICAgICAgICBlbnRpdHkge1xyXG4gICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICAgIGxhYmVsXHJcbiAgICAgICAgICAgICAgICB0eXBlT2ZFbnRpdHlcclxuICAgICAgICAgICAgICAgIHJlbGF0aW9uXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFkY3J1bWJzIHtcclxuICAgICAgICAgICAgICBsYWJlbFxyXG4gICAgICAgICAgICAgIGxpbmtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfWAsXHJcbiAgfSxcclxuICBhdXRvQ29tcGxldGU6IHtcclxuICAgIHF1ZXJ5TmFtZTogJ2F1dG9Db21wbGV0ZScsXHJcbiAgICBxdWVyeUJvZHk6IGB7XHJcbiAgICAgICAgYXV0b0NvbXBsZXRlKF9fUEFSQU1TX18pe1xyXG4gICAgICAgICAgdG90YWxDb3VudFxyXG4gICAgICAgICAgcmVzdWx0cyB7XHJcbiAgICAgICAgICAgIC4uLiBvbiBFbnRpdHlDb3VudERhdGEge1xyXG4gICAgICAgICAgICAgIGNvdW50XHJcbiAgICAgICAgICAgICAgZW50aXR5IHtcclxuICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICBsYWJlbFxyXG4gICAgICAgICAgICAgICAgdHlwZU9mRW50aXR5XHJcbiAgICAgICAgICAgICAgICBmaWVsZHMge1xyXG4gICAgICAgICAgICAgICAgICAuLi4gb24gS2V5VmFsdWVGaWVsZCB7XHJcbiAgICAgICAgICAgICAgICAgICAga2V5XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAuLi4gb24gS2V5VmFsdWVGaWVsZEdyb3VwIHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAuLi4gb24gS2V5VmFsdWVGaWVsZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuLi4gb24gSXRlbUxpc3Rpbmcge1xyXG4gICAgICAgICAgICAgIGl0ZW0ge1xyXG4gICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICAgIGxhYmVsXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudF90eXBlXHJcbiAgICAgICAgICAgICAgICBmaWVsZHMge1xyXG4gICAgICAgICAgICAgICAgICAuLi4gb24gS2V5VmFsdWVGaWVsZCB7XHJcbiAgICAgICAgICAgICAgICAgICAga2V5XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAuLi4gb24gS2V5VmFsdWVGaWVsZEdyb3VwIHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAuLi4gb24gS2V5VmFsdWVGaWVsZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfWAsXHJcbiAgfSxcclxuICBzZWFyY2g6IHtcclxuICAgIHF1ZXJ5TmFtZTogJ3NlYXJjaCcsXHJcbiAgICBxdWVyeUJvZHk6IGB7XHJcbiAgICAgIHNlYXJjaChfX1BBUkFNU19fKXtcclxuICAgICAgICB0b3RhbENvdW50XHJcbiAgICAgICAgcmVzdWx0cyB7XHJcbiAgICAgICAgICBvcmRlcntcclxuICAgICAgICAgICAgdHlwZVxyXG4gICAgICAgICAgICBrZXlcclxuICAgICAgICAgICAgZGlyZWN0aW9uXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBmaWVsZHNcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgaGlnaGxpZ2h0XHJcbiAgICAgICAgICAgIGxpbWl0XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpdGVtcyB7XHJcbiAgICAgICAgICAgIC4uLiBvbiBFbnRpdHkge1xyXG4gICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgbGFiZWxcclxuICAgICAgICAgICAgICB0eXBlT2ZFbnRpdHlcclxuICAgICAgICAgICAgICBmaWVsZHMge1xyXG4gICAgICAgICAgICAgICAgLi4uXHJcbiAgICAgICAgICAgICAgICBvbiBLZXlWYWx1ZUZpZWxkIHtcclxuICAgICAgICAgICAgICAgICAga2V5XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuLi4gb24gS2V5VmFsdWVGaWVsZEdyb3VwIHtcclxuICAgICAgICAgICAgICAgICAgbGFiZWxcclxuICAgICAgICAgICAgICAgICAgZmllbGRzIHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5cclxuICAgICAgICAgICAgICAgICAgICBvbiBLZXlWYWx1ZUZpZWxkIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGtleVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgcmVsYXRlZEVudGl0aWVzIHtcclxuICAgICAgICAgICAgICAgICAgY291bnRcclxuICAgICAgICAgICAgICAgICAgZW50aXR5e1xyXG4gICAgICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlT2ZFbnRpdHlcclxuICAgICAgICAgICAgICAgICAgICByZWxhdGlvblxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHJlbGF0ZWRJdGVtcyB7XHJcbiAgICAgICAgICAgICAgICAgIHRodW1ibmFpbFxyXG4gICAgICAgICAgICAgICAgICBpdGVtIHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGRzIHtcclxuICAgICAgICAgICAgICAgICAgICAgIC4uLlxyXG4gICAgICAgICAgICAgICAgICAgICAgb24gS2V5VmFsdWVGaWVsZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLi4uIG9uIEtleVZhbHVlRmllbGRHcm91cCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb24gS2V5VmFsdWVGaWVsZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmVsYXRlZFR5cGVzT2ZFbnRpdHkge1xyXG4gICAgICAgICAgICAgICAgICB0eXBlXHJcbiAgICAgICAgICAgICAgICAgIGNvdW50XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC4uLiBvbiBJdGVtIHtcclxuICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgIGxhYmVsXHJcbiAgICAgICAgICAgICAgaWNvblxyXG4gICAgICAgICAgICAgIHRpdGxlXHJcbiAgICAgICAgICAgICAgc3ViVGl0bGVcclxuICAgICAgICAgICAgICBpbWFnZVxyXG4gICAgICAgICAgICAgIHRleHRcclxuICAgICAgICAgICAgICByZWxhdGVkVHlwZXNPZkVudGl0eSB7XHJcbiAgICAgICAgICAgICAgICB0eXBlXHJcbiAgICAgICAgICAgICAgICBjb3VudFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBicmVhZGNydW1icyB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbFxyXG4gICAgICAgICAgICAgICAgbGlua1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBmaWVsZHMge1xyXG4gICAgICAgICAgICAgICAgLi4uXHJcbiAgICAgICAgICAgICAgICBvbiBLZXlWYWx1ZUZpZWxkIHtcclxuICAgICAgICAgICAgICAgICAga2V5XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuLi4gb24gS2V5VmFsdWVGaWVsZEdyb3VwIHtcclxuICAgICAgICAgICAgICAgICAgbGFiZWxcclxuICAgICAgICAgICAgICAgICAgZmllbGRzIHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5cclxuICAgICAgICAgICAgICAgICAgICBvbiBLZXlWYWx1ZUZpZWxkIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGtleVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1gLFxyXG4gIH0sXHJcbiAgZmFjZXRzOiB7XHJcbiAgICBxdWVyeU5hbWU6ICdzZWFyY2gnLFxyXG4gICAgcXVlcnlCb2R5OiBge1xyXG4gICAgICBzZWFyY2goX19QQVJBTVNfXyl7XHJcbiAgICAgICAgZmFjZXRzIHtcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgICB0eXBlXHJcbiAgICAgICAgICBvcGVyYXRvclxyXG4gICAgICAgICAgbGltaXRcclxuICAgICAgICAgIG9yZGVyXHJcbiAgICAgICAgICB0b3RhbENvdW50XHJcbiAgICAgICAgICBkYXRhIHtcclxuICAgICAgICAgICAgbGFiZWxcclxuICAgICAgICAgICAgdmFsdWVcclxuICAgICAgICAgICAgY291bnRlclxyXG4gICAgICAgICAgICBzZWFyY2hEYXRhIHtcclxuICAgICAgICAgICAgICBrZXlcclxuICAgICAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9YCxcclxuICB9LFxyXG4gIGdldE1pc3NpbmdCdWJibGU6IHtcclxuICAgIHF1ZXJ5TmFtZTogJ2dldEVudGl0eScsXHJcbiAgICBxdWVyeUJvZHk6IGB7XHJcbiAgICAgICAgZ2V0RW50aXR5KF9fUEFSQU1TX18pe1xyXG4gICAgICAgICAgbGFiZWxcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgICB0eXBlT2ZFbnRpdHlcclxuICAgICAgICB9XHJcbiAgICAgIH1gLFxyXG4gIH0sXHJcbiAgZ2V0TWFwT2JqZWN0czoge1xyXG4gICAgcXVlcnlOYW1lOiAnZ2V0TWFwT2JqZWN0cycsXHJcbiAgICBxdWVyeUJvZHk6IGB7XHJcbiAgICAgIGdldE1hcE9iamVjdHN7XHJcbiAgICAgICAgbGF0XHJcbiAgICAgICAgbG9uXHJcbiAgICAgICAgaXRlbSB7XHJcbiAgICAgICAgICAuLi5vbiBJdGVtIHtcclxuICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgIGxhYmVsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuLi5vbiBFbnRpdHkge1xyXG4gICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgbGFiZWxcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1gLFxyXG4gIH0sXHJcbiAgZ2V0RXZlbnRPYmplY3RzOiB7XHJcbiAgICBxdWVyeU5hbWU6ICdnZXRFdmVudE9iamVjdHMnLFxyXG4gICAgcXVlcnlCb2R5OiBge1xyXG4gICAgICBnZXRFdmVudE9iamVjdHN7XHJcbiAgICAgICAgaWRcclxuICAgICAgICBzdGFydFxyXG4gICAgICAgIGVuZFxyXG4gICAgICAgIGxhYmVsXHJcbiAgICAgICAgaXRlbSB7XHJcbiAgICAgICAgICAuLi4gb24gRW50aXR5IHtcclxuICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgbGFiZWxcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1gLFxyXG4gIH0sXHJcbiAgZ2V0Q29sbGVjdGlvbjoge1xyXG4gICAgcXVlcnlOYW1lOiAnZ2V0Q29sbGVjdGlvbicsXHJcbiAgICBxdWVyeUJvZHk6IGB7XHJcbiAgICAgIGdldENvbGxlY3Rpb24oX19QQVJBTVNfXykge1xyXG4gICAgICAgIHRpdGxlXHJcbiAgICAgICAgdGV4dFxyXG4gICAgICAgIHRvdGFsXHJcbiAgICAgICAgaXRlbXMge1xyXG4gICAgICAgICAgdGl0bGVcclxuICAgICAgICAgIGNvbnRlbnRcclxuICAgICAgICAgIGJhY2tncm91bmRcclxuICAgICAgICAgIGltYWdlXHJcbiAgICAgICAgICB1cmxcclxuICAgICAgICAgIGE0dklkXHJcbiAgICAgICAgICB0eXBlXHJcbiAgICAgICAgICBjbGFzc2lmaWNhdGlvblxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfWBcclxuICB9XHJcbn0pO1xyXG4iXX0=