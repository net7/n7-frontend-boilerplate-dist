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
        if (data.relatedLa) {
            navigation.items.push({
                text: labels['aggregazioni-logiche-collegate'],
                anchor: { href: `${param.basePath}/fondi-collegati` },
                classes: selected === 'fondi-collegati' ? 'is-selected' : '',
            });
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXRhLW5hdi5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvZW50aXRhLW5hdi5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFL0MsTUFBTSxPQUFPLGFBQWMsU0FBUSxVQUFVO0lBQ2pDLFNBQVMsQ0FBQyxLQUFLO1FBQ3ZCLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDVixPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsTUFBTSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsR0FBRyxLQUFLLENBQUM7UUFDakMsTUFBTSxVQUFVLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsQ0FBQztRQUN4RCxNQUFNLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUVuRDs7Ozs7Ozs7Ozs7WUFXSTtRQUNKLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1lBQ3BCLElBQUksRUFBRSxjQUFjO1lBQ3BCLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxHQUFHLEtBQUssQ0FBQyxRQUFRLGVBQWUsRUFBRTtZQUNsRCxPQUFPLEVBQUUsUUFBUSxLQUFLLGNBQWMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFO1NBQzFELENBQUMsQ0FBQztRQUNILElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztnQkFDcEIsSUFBSSxFQUFFLE1BQU0sQ0FBQyxnQ0FBZ0MsQ0FBQztnQkFDOUMsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLEdBQUcsS0FBSyxDQUFDLFFBQVEsa0JBQWtCLEVBQUU7Z0JBQ3JELE9BQU8sRUFBRSxRQUFRLEtBQUssaUJBQWlCLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRTthQUM3RCxDQUFDLENBQUM7U0FDSjtRQUNELElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztnQkFDcEIsSUFBSSxFQUFFLG1CQUFtQjtnQkFDekIsTUFBTSxFQUFFO29CQUNOLElBQUksRUFBRSxHQUFHLEtBQUssQ0FBQyxRQUFRLG9CQUFvQjtvQkFDM0MsV0FBVyxFQUFFO3dCQUNYLElBQUksRUFBRSxDQUFDO3FCQUNSO2lCQUNGO2dCQUNELE9BQU8sRUFBRSxRQUFRLEtBQUssbUJBQW1CLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRTthQUMvRCxDQUFDLENBQUM7U0FDSjtRQUNELElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN4QixVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztnQkFDcEIsSUFBSSxFQUFFLGtCQUFrQjtnQkFDeEIsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLEdBQUcsS0FBSyxDQUFDLFFBQVEsbUJBQW1CLEVBQUU7Z0JBQ3RELE9BQU8sRUFBRSxRQUFRLEtBQUssa0JBQWtCLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRTthQUM5RCxDQUFDLENBQUM7U0FDSjtRQUNELElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztnQkFDcEIsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLEdBQUcsS0FBSyxDQUFDLFFBQVEsUUFBUSxFQUFFO2dCQUMzQyxPQUFPLEVBQUUsUUFBUSxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFO2FBQ25ELENBQUMsQ0FBQztTQUNKO1FBQ0QsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO2dCQUNwQixJQUFJLEVBQUUsV0FBVztnQkFDakIsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLEdBQUcsS0FBSyxDQUFDLFFBQVEsT0FBTyxFQUFFO2dCQUMxQyxPQUFPLEVBQUUsUUFBUSxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFO2FBQ2xELENBQUMsQ0FBQztTQUNKO1FBRUQsa0JBQWtCO1FBQ2xCLElBQUksVUFBVSxDQUFDLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUU7WUFDdkQsVUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUMxQjtRQUVELE9BQU8sVUFBVSxDQUFDO0lBQ3BCLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgQXdFbnRpdGFOYXZEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xyXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0ocGFyYW0pOiBhbnkge1xyXG4gICAgaWYgKCFwYXJhbSkge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGNvbnN0IHsgZGF0YSwgc2VsZWN0ZWQgfSA9IHBhcmFtO1xyXG4gICAgY29uc3QgbmF2aWdhdGlvbiA9IHsgaXRlbXM6IFtdLCBwYXlsb2FkOiAnZW50aXRhLW5hdicgfTtcclxuICAgIGNvbnN0IHsgaGFzTWV0YWRhdGFGaWVsZHMsIGxhYmVscyB9ID0gdGhpcy5vcHRpb25zO1xyXG5cclxuICAgIC8qIG5hdmlnYXRpb24uaXRlbXMucHVzaCh7XHJcbiAgICAgIHRleHQ6ICdPVkVSVklFVycsXHJcbiAgICAgIGFuY2hvcjogeyBocmVmOiBgJHtwYXJhbS5iYXNlUGF0aH0vb3ZlcnZpZXdgIH0sXHJcbiAgICAgIGNsYXNzZXM6IHNlbGVjdGVkID09PSAnb3ZlcnZpZXcnID8gJ2lzLXNlbGVjdGVkIG92ZXJ2aWV3LXRhYicgOiAnb3ZlcnZpZXctdGFiJyxcclxuICAgIH0pO1xyXG4gICAgaWYgKGhhc01ldGFkYXRhRmllbGRzKSB7XHJcbiAgICAgIG5hdmlnYXRpb24uaXRlbXMucHVzaCh7XHJcbiAgICAgICAgdGV4dDogJ0lORk9STUFaSU9OSScsXHJcbiAgICAgICAgYW5jaG9yOiB7IGhyZWY6IGAke3BhcmFtLmJhc2VQYXRofS9pbmZvcm1hemlvbmlgIH0sXHJcbiAgICAgICAgY2xhc3Nlczogc2VsZWN0ZWQgPT09ICdpbmZvcm1hemlvbmknID8gJ2lzLXNlbGVjdGVkJyA6ICcnLFxyXG4gICAgICB9KTtcclxuICAgIH0gKi9cclxuICAgIG5hdmlnYXRpb24uaXRlbXMucHVzaCh7XHJcbiAgICAgIHRleHQ6ICdJTkZPUk1BWklPTkknLFxyXG4gICAgICBhbmNob3I6IHsgaHJlZjogYCR7cGFyYW0uYmFzZVBhdGh9L2luZm9ybWF6aW9uaWAgfSxcclxuICAgICAgY2xhc3Nlczogc2VsZWN0ZWQgPT09ICdpbmZvcm1hemlvbmknID8gJ2lzLXNlbGVjdGVkJyA6ICcnLFxyXG4gICAgfSk7XHJcbiAgICBpZiAoZGF0YS5yZWxhdGVkTGEpIHtcclxuICAgICAgbmF2aWdhdGlvbi5pdGVtcy5wdXNoKHtcclxuICAgICAgICB0ZXh0OiBsYWJlbHNbJ2FnZ3JlZ2F6aW9uaS1sb2dpY2hlLWNvbGxlZ2F0ZSddLFxyXG4gICAgICAgIGFuY2hvcjogeyBocmVmOiBgJHtwYXJhbS5iYXNlUGF0aH0vZm9uZGktY29sbGVnYXRpYCB9LFxyXG4gICAgICAgIGNsYXNzZXM6IHNlbGVjdGVkID09PSAnZm9uZGktY29sbGVnYXRpJyA/ICdpcy1zZWxlY3RlZCcgOiAnJyxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAoZGF0YS5yZWxhdGVkSXRlbXMpIHtcclxuICAgICAgbmF2aWdhdGlvbi5pdGVtcy5wdXNoKHtcclxuICAgICAgICB0ZXh0OiAnT0dHRVRUSSBDT0xMRUdBVEknLFxyXG4gICAgICAgIGFuY2hvcjoge1xyXG4gICAgICAgICAgaHJlZjogYCR7cGFyYW0uYmFzZVBhdGh9L29nZ2V0dGktY29sbGVnYXRpYCxcclxuICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7XHJcbiAgICAgICAgICAgIHBhZ2U6IDEsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2xhc3Nlczogc2VsZWN0ZWQgPT09ICdvZ2dldHRpLWNvbGxlZ2F0aScgPyAnaXMtc2VsZWN0ZWQnIDogJycsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKGRhdGEucmVsYXRlZEVudGl0aWVzKSB7XHJcbiAgICAgIG5hdmlnYXRpb24uaXRlbXMucHVzaCh7XHJcbiAgICAgICAgdGV4dDogJ0VOVElUw4AgQ09MTEVHQVRFJyxcclxuICAgICAgICBhbmNob3I6IHsgaHJlZjogYCR7cGFyYW0uYmFzZVBhdGh9L2VudGl0YS1jb2xsZWdhdGVgIH0sXHJcbiAgICAgICAgY2xhc3Nlczogc2VsZWN0ZWQgPT09ICdlbnRpdGEtY29sbGVnYXRlJyA/ICdpcy1zZWxlY3RlZCcgOiAnJyxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAoZGF0YS5leHRyYVRhYikge1xyXG4gICAgICBuYXZpZ2F0aW9uLml0ZW1zLnB1c2goe1xyXG4gICAgICAgIHRleHQ6ICdNQVhYSScsXHJcbiAgICAgICAgYW5jaG9yOiB7IGhyZWY6IGAke3BhcmFtLmJhc2VQYXRofS9tYXh4aWAgfSxcclxuICAgICAgICBjbGFzc2VzOiBzZWxlY3RlZCA9PT0gJ21heHhpJyA/ICdpcy1zZWxlY3RlZCcgOiAnJyxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAoZGF0YS53aWtpVGFiKSB7XHJcbiAgICAgIG5hdmlnYXRpb24uaXRlbXMucHVzaCh7XHJcbiAgICAgICAgdGV4dDogJ1dJS0lQRURJQScsXHJcbiAgICAgICAgYW5jaG9yOiB7IGhyZWY6IGAke3BhcmFtLmJhc2VQYXRofS93aWtpYCB9LFxyXG4gICAgICAgIGNsYXNzZXM6IHNlbGVjdGVkID09PSAnd2lraScgPyAnaXMtc2VsZWN0ZWQnIDogJycsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIG9uZSB0YWIgY29udHJvbFxyXG4gICAgaWYgKG5hdmlnYXRpb24uaXRlbXMubGVuZ3RoID09PSAyICYmICFoYXNNZXRhZGF0YUZpZWxkcykge1xyXG4gICAgICBuYXZpZ2F0aW9uLml0ZW1zLnNoaWZ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5hdmlnYXRpb247XHJcbiAgfVxyXG59XHJcbiJdfQ==