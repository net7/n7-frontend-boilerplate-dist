import { DataSource } from '@n7-frontend/core';
export class AwEntitaNavDS extends DataSource {
    transform(param) {
        if (!param) {
            return null;
        }
        const { data, selected } = param;
        const navigation = { items: [], payload: 'entita-nav' };
        const { hasMetadataFields, labels } = this.options;
        /* navigation.items.push({
          text: 'OVERVIEW',
          anchor: { href: `${param.basePath}/overview` },
          classes: selected === 'overview' ? 'is-selected overview-tab' : 'overview-tab',
        });
        if (hasMetadataFields) {
          navigation.items.push({
            text: 'INFORMAZIONI',
            anchor: { href: `${param.basePath}/informazioni` },
            classes: selected === 'informazioni' ? 'is-selected' : '',
          });
        } */
        navigation.items.push({
            text: 'INFORMAZIONI',
            anchor: { href: `${param.basePath}/informazioni` },
            classes: selected === 'informazioni' ? 'is-selected' : '',
        });
        if (data.relatedItems) {
            navigation.items.push({
                text: 'OGGETTI COLLEGATI',
                anchor: {
                    href: `${param.basePath}/oggetti-collegati`,
                    queryParams: {
                        page: 1,
                    },
                },
                classes: selected === 'oggetti-collegati' ? 'is-selected' : '',
            });
        }
        if (data.relatedEntities) {
            navigation.items.push({
                text: 'ENTITÀ COLLEGATE',
                anchor: { href: `${param.basePath}/entita-collegate` },
                classes: selected === 'entita-collegate' ? 'is-selected' : '',
            });
        }
        if (data.relatedLa) {
            navigation.items.push({
                text: labels['aggregazioni-logiche-collegate'],
                anchor: { href: `${param.basePath}/fondi-collegati` },
                classes: selected === 'fondi-collegati' ? 'is-selected' : '',
            });
        }
        if (data.extraTab) {
            navigation.items.push({
                text: 'MAXXI',
                anchor: { href: `${param.basePath}/maxxi` },
                classes: selected === 'maxxi' ? 'is-selected' : '',
            });
        }
        if (data.wikiTab) {
            navigation.items.push({
                text: 'WIKIPEDIA',
                anchor: { href: `${param.basePath}/wiki` },
                classes: selected === 'wiki' ? 'is-selected' : '',
            });
        }
        // one tab control
        if (navigation.items.length === 2 && !hasMetadataFields) {
            navigation.items.shift();
        }
        return navigation;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXRhLW5hdi5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvZW50aXRhLW5hdi5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFL0MsTUFBTSxPQUFPLGFBQWMsU0FBUSxVQUFVO0lBQ2pDLFNBQVMsQ0FBQyxLQUFLO1FBQ3ZCLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDVixPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsTUFBTSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsR0FBRyxLQUFLLENBQUM7UUFDakMsTUFBTSxVQUFVLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsQ0FBQztRQUN4RCxNQUFNLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUVuRDs7Ozs7Ozs7Ozs7WUFXSTtRQUNKLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1lBQ3BCLElBQUksRUFBRSxjQUFjO1lBQ3BCLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxHQUFHLEtBQUssQ0FBQyxRQUFRLGVBQWUsRUFBRTtZQUNsRCxPQUFPLEVBQUUsUUFBUSxLQUFLLGNBQWMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFO1NBQzFELENBQUMsQ0FBQztRQUNILElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztnQkFDcEIsSUFBSSxFQUFFLG1CQUFtQjtnQkFDekIsTUFBTSxFQUFFO29CQUNOLElBQUksRUFBRSxHQUFHLEtBQUssQ0FBQyxRQUFRLG9CQUFvQjtvQkFDM0MsV0FBVyxFQUFFO3dCQUNYLElBQUksRUFBRSxDQUFDO3FCQUNSO2lCQUNGO2dCQUNELE9BQU8sRUFBRSxRQUFRLEtBQUssbUJBQW1CLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRTthQUMvRCxDQUFDLENBQUM7U0FDSjtRQUNELElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN4QixVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztnQkFDcEIsSUFBSSxFQUFFLGtCQUFrQjtnQkFDeEIsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLEdBQUcsS0FBSyxDQUFDLFFBQVEsbUJBQW1CLEVBQUU7Z0JBQ3RELE9BQU8sRUFBRSxRQUFRLEtBQUssa0JBQWtCLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRTthQUM5RCxDQUFDLENBQUM7U0FDSjtRQUNELElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztnQkFDcEIsSUFBSSxFQUFFLE1BQU0sQ0FBQyxnQ0FBZ0MsQ0FBQztnQkFDOUMsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLEdBQUcsS0FBSyxDQUFDLFFBQVEsa0JBQWtCLEVBQUU7Z0JBQ3JELE9BQU8sRUFBRSxRQUFRLEtBQUssaUJBQWlCLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRTthQUM3RCxDQUFDLENBQUM7U0FDSjtRQUNELElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztnQkFDcEIsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLEdBQUcsS0FBSyxDQUFDLFFBQVEsUUFBUSxFQUFFO2dCQUMzQyxPQUFPLEVBQUUsUUFBUSxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFO2FBQ25ELENBQUMsQ0FBQztTQUNKO1FBQ0QsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO2dCQUNwQixJQUFJLEVBQUUsV0FBVztnQkFDakIsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLEdBQUcsS0FBSyxDQUFDLFFBQVEsT0FBTyxFQUFFO2dCQUMxQyxPQUFPLEVBQUUsUUFBUSxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFO2FBQ2xELENBQUMsQ0FBQztTQUNKO1FBRUQsa0JBQWtCO1FBQ2xCLElBQUksVUFBVSxDQUFDLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUU7WUFDdkQsVUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUMxQjtRQUVELE9BQU8sVUFBVSxDQUFDO0lBQ3BCLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBBd0VudGl0YU5hdkRTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0ocGFyYW0pOiBhbnkge1xuICAgIGlmICghcGFyYW0pIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCB7IGRhdGEsIHNlbGVjdGVkIH0gPSBwYXJhbTtcbiAgICBjb25zdCBuYXZpZ2F0aW9uID0geyBpdGVtczogW10sIHBheWxvYWQ6ICdlbnRpdGEtbmF2JyB9O1xuICAgIGNvbnN0IHsgaGFzTWV0YWRhdGFGaWVsZHMsIGxhYmVscyB9ID0gdGhpcy5vcHRpb25zO1xuXG4gICAgLyogbmF2aWdhdGlvbi5pdGVtcy5wdXNoKHtcbiAgICAgIHRleHQ6ICdPVkVSVklFVycsXG4gICAgICBhbmNob3I6IHsgaHJlZjogYCR7cGFyYW0uYmFzZVBhdGh9L292ZXJ2aWV3YCB9LFxuICAgICAgY2xhc3Nlczogc2VsZWN0ZWQgPT09ICdvdmVydmlldycgPyAnaXMtc2VsZWN0ZWQgb3ZlcnZpZXctdGFiJyA6ICdvdmVydmlldy10YWInLFxuICAgIH0pO1xuICAgIGlmIChoYXNNZXRhZGF0YUZpZWxkcykge1xuICAgICAgbmF2aWdhdGlvbi5pdGVtcy5wdXNoKHtcbiAgICAgICAgdGV4dDogJ0lORk9STUFaSU9OSScsXG4gICAgICAgIGFuY2hvcjogeyBocmVmOiBgJHtwYXJhbS5iYXNlUGF0aH0vaW5mb3JtYXppb25pYCB9LFxuICAgICAgICBjbGFzc2VzOiBzZWxlY3RlZCA9PT0gJ2luZm9ybWF6aW9uaScgPyAnaXMtc2VsZWN0ZWQnIDogJycsXG4gICAgICB9KTtcbiAgICB9ICovXG4gICAgbmF2aWdhdGlvbi5pdGVtcy5wdXNoKHtcbiAgICAgIHRleHQ6ICdJTkZPUk1BWklPTkknLFxuICAgICAgYW5jaG9yOiB7IGhyZWY6IGAke3BhcmFtLmJhc2VQYXRofS9pbmZvcm1hemlvbmlgIH0sXG4gICAgICBjbGFzc2VzOiBzZWxlY3RlZCA9PT0gJ2luZm9ybWF6aW9uaScgPyAnaXMtc2VsZWN0ZWQnIDogJycsXG4gICAgfSk7XG4gICAgaWYgKGRhdGEucmVsYXRlZEl0ZW1zKSB7XG4gICAgICBuYXZpZ2F0aW9uLml0ZW1zLnB1c2goe1xuICAgICAgICB0ZXh0OiAnT0dHRVRUSSBDT0xMRUdBVEknLFxuICAgICAgICBhbmNob3I6IHtcbiAgICAgICAgICBocmVmOiBgJHtwYXJhbS5iYXNlUGF0aH0vb2dnZXR0aS1jb2xsZWdhdGlgLFxuICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7XG4gICAgICAgICAgICBwYWdlOiAxLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGNsYXNzZXM6IHNlbGVjdGVkID09PSAnb2dnZXR0aS1jb2xsZWdhdGknID8gJ2lzLXNlbGVjdGVkJyA6ICcnLFxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChkYXRhLnJlbGF0ZWRFbnRpdGllcykge1xuICAgICAgbmF2aWdhdGlvbi5pdGVtcy5wdXNoKHtcbiAgICAgICAgdGV4dDogJ0VOVElUw4AgQ09MTEVHQVRFJyxcbiAgICAgICAgYW5jaG9yOiB7IGhyZWY6IGAke3BhcmFtLmJhc2VQYXRofS9lbnRpdGEtY29sbGVnYXRlYCB9LFxuICAgICAgICBjbGFzc2VzOiBzZWxlY3RlZCA9PT0gJ2VudGl0YS1jb2xsZWdhdGUnID8gJ2lzLXNlbGVjdGVkJyA6ICcnLFxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChkYXRhLnJlbGF0ZWRMYSkge1xuICAgICAgbmF2aWdhdGlvbi5pdGVtcy5wdXNoKHtcbiAgICAgICAgdGV4dDogbGFiZWxzWydhZ2dyZWdhemlvbmktbG9naWNoZS1jb2xsZWdhdGUnXSxcbiAgICAgICAgYW5jaG9yOiB7IGhyZWY6IGAke3BhcmFtLmJhc2VQYXRofS9mb25kaS1jb2xsZWdhdGlgIH0sXG4gICAgICAgIGNsYXNzZXM6IHNlbGVjdGVkID09PSAnZm9uZGktY29sbGVnYXRpJyA/ICdpcy1zZWxlY3RlZCcgOiAnJyxcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoZGF0YS5leHRyYVRhYikge1xuICAgICAgbmF2aWdhdGlvbi5pdGVtcy5wdXNoKHtcbiAgICAgICAgdGV4dDogJ01BWFhJJyxcbiAgICAgICAgYW5jaG9yOiB7IGhyZWY6IGAke3BhcmFtLmJhc2VQYXRofS9tYXh4aWAgfSxcbiAgICAgICAgY2xhc3Nlczogc2VsZWN0ZWQgPT09ICdtYXh4aScgPyAnaXMtc2VsZWN0ZWQnIDogJycsXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGRhdGEud2lraVRhYikge1xuICAgICAgbmF2aWdhdGlvbi5pdGVtcy5wdXNoKHtcbiAgICAgICAgdGV4dDogJ1dJS0lQRURJQScsXG4gICAgICAgIGFuY2hvcjogeyBocmVmOiBgJHtwYXJhbS5iYXNlUGF0aH0vd2lraWAgfSxcbiAgICAgICAgY2xhc3Nlczogc2VsZWN0ZWQgPT09ICd3aWtpJyA/ICdpcy1zZWxlY3RlZCcgOiAnJyxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIG9uZSB0YWIgY29udHJvbFxuICAgIGlmIChuYXZpZ2F0aW9uLml0ZW1zLmxlbmd0aCA9PT0gMiAmJiAhaGFzTWV0YWRhdGFGaWVsZHMpIHtcbiAgICAgIG5hdmlnYXRpb24uaXRlbXMuc2hpZnQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmF2aWdhdGlvbjtcbiAgfVxufVxuIl19