import { DataSource } from '@n7-frontend/core';
import * as moment from 'moment';
export class AwTimelineDS extends DataSource {
    constructor() {
        super(...arguments);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        this.transform = (data) => ({
            containerID: 'timeline-component',
            libOptions: {
                height: '500px',
                locale: 'it_IT',
                cluster: {
                    // titleTemplate: '{count}',
                    // fitOnDoubleClick: true,
                    clusterCriteria: (f, s) => f.content.charAt(0) === s.content.charAt(0)
                },
                showTooltips: false,
                tooltip: {
                    followMouse: false,
                    template: (d, element) => `<div class="tooltip">${element.title}</div>`
                },
                template: (d) => {
                    const start = moment(d.start).format('DDMM') === '0101'
                        ? moment(d.start).format('YYYY') : moment(d.start).format('DD MMMM YYYY');
                    let end;
                    if (d.end) {
                        end = moment(d.end).format('DDMM') === '0101'
                            ? moment(d.end).format('YYYY') : moment(d.end).format('DD MMMM YYYY');
                    }
                    const endHTML = d.end ? `- ${end}` : '';
                    return (`<div class="dates"><em>${start}${endHTML}</em></div><div class="content">${d.content}</div>`);
                },
                width: '100%',
                minHeight: '350px',
                maxHeight: '800px',
                // zoomMax: 31557600000, // one year
                zoomFriction: 8
            },
            dataSet: [
                {
                    id: 1,
                    content: 'Mostra internazionale di edilizia ospedaliera, Roma (1935)',
                    start: '1935'
                },
                {
                    id: 2,
                    content: 'Mostra di edilizia ospedaliera, Fiuggi',
                    start: '1942'
                },
                {
                    id: 3,
                    content: 'I Congresso mondiale di sociologia',
                    start: '1951'
                },
                {
                    id: 4,
                    content: 'V Congresso mondiale di sociologia, Washington D.C. (1962)',
                    start: '1962',
                },
                {
                    id: 5,
                    content: 'Mostra di edilizia pubblica, Pisa',
                    start: '1967-06-16',
                    end: '1967-06-21'
                },
                {
                    id: 6,
                    content: 'Strategia della tensione',
                    start: '1975',
                    end: '1984'
                },
                {
                    id: 7,
                    content: 'XX Congresso mondiale di sociologia, Roma',
                    start: '1995'
                }
            ],
            _setInstance: (timeline) => timeline
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL3RpbWVsaW5lLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMvQyxPQUFPLEtBQUssTUFBTSxNQUFNLFFBQVEsQ0FBQztBQUVqQyxNQUFNLE9BQU8sWUFBYSxTQUFRLFVBQVU7SUFBNUM7O1FBQ0UsNkRBQTZEO1FBQ25ELGNBQVMsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztZQUMvQixXQUFXLEVBQUUsb0JBQW9CO1lBQ2pDLFVBQVUsRUFBRTtnQkFDVixNQUFNLEVBQUUsT0FBTztnQkFDZixNQUFNLEVBQUUsT0FBTztnQkFDZixPQUFPLEVBQUU7b0JBQ1AsNEJBQTRCO29CQUM1QiwwQkFBMEI7b0JBQzFCLGVBQWUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztpQkFDdkU7Z0JBQ0QsWUFBWSxFQUFFLEtBQUs7Z0JBQ25CLE9BQU8sRUFBRTtvQkFDUCxXQUFXLEVBQUUsS0FBSztvQkFDbEIsUUFBUSxFQUFFLENBQUMsQ0FBTSxFQUFFLE9BQTBCLEVBQUUsRUFBRSxDQUFDLHdCQUF3QixPQUFPLENBQUMsS0FBSyxRQUFRO2lCQUNoRztnQkFDRCxRQUFRLEVBQUUsQ0FBQyxDQUFNLEVBQUUsRUFBRTtvQkFDbkIsTUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssTUFBTTt3QkFDckQsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQztvQkFDNUUsSUFBSSxHQUFXLENBQUM7b0JBQ2hCLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRTt3QkFDVCxHQUFHLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssTUFBTTs0QkFDM0MsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQztxQkFDekU7b0JBQ0QsTUFBTSxPQUFPLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO29CQUN4QyxPQUFPLENBQUMsMEJBQTBCLEtBQUssR0FBRyxPQUFPLG1DQUFtQyxDQUFDLENBQUMsT0FBTyxRQUFRLENBQUMsQ0FBQztnQkFDekcsQ0FBQztnQkFDRCxLQUFLLEVBQUUsTUFBTTtnQkFDYixTQUFTLEVBQUUsT0FBTztnQkFDbEIsU0FBUyxFQUFFLE9BQU87Z0JBQ2xCLG9DQUFvQztnQkFDcEMsWUFBWSxFQUFFLENBQUM7YUFDaEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ1A7b0JBQ0UsRUFBRSxFQUFFLENBQUM7b0JBQ0wsT0FBTyxFQUFFLDREQUE0RDtvQkFDckUsS0FBSyxFQUFFLE1BQU07aUJBQ2Q7Z0JBQ0Q7b0JBQ0UsRUFBRSxFQUFFLENBQUM7b0JBQ0wsT0FBTyxFQUFFLHdDQUF3QztvQkFDakQsS0FBSyxFQUFFLE1BQU07aUJBQ2Q7Z0JBQ0Q7b0JBQ0UsRUFBRSxFQUFFLENBQUM7b0JBQ0wsT0FBTyxFQUFFLG9DQUFvQztvQkFDN0MsS0FBSyxFQUFFLE1BQU07aUJBQ2Q7Z0JBQ0Q7b0JBQ0UsRUFBRSxFQUFFLENBQUM7b0JBQ0wsT0FBTyxFQUFFLDREQUE0RDtvQkFDckUsS0FBSyxFQUFFLE1BQU07aUJBQ2Q7Z0JBQ0Q7b0JBQ0UsRUFBRSxFQUFFLENBQUM7b0JBQ0wsT0FBTyxFQUFFLG1DQUFtQztvQkFDNUMsS0FBSyxFQUFFLFlBQVk7b0JBQ25CLEdBQUcsRUFBRSxZQUFZO2lCQUNsQjtnQkFDRDtvQkFDRSxFQUFFLEVBQUUsQ0FBQztvQkFDTCxPQUFPLEVBQUUsMEJBQTBCO29CQUNuQyxLQUFLLEVBQUUsTUFBTTtvQkFDYixHQUFHLEVBQUUsTUFBTTtpQkFDWjtnQkFDRDtvQkFDRSxFQUFFLEVBQUUsQ0FBQztvQkFDTCxPQUFPLEVBQUUsMkNBQTJDO29CQUNwRCxLQUFLLEVBQUUsTUFBTTtpQkFDZDthQUNGO1lBQ0QsWUFBWSxFQUFFLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxRQUFRO1NBQ3JDLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50JztcblxuZXhwb3J0IGNsYXNzIEF3VGltZWxpbmVEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0gPSAoZGF0YSkgPT4gKHtcbiAgICBjb250YWluZXJJRDogJ3RpbWVsaW5lLWNvbXBvbmVudCcsXG4gICAgbGliT3B0aW9uczoge1xuICAgICAgaGVpZ2h0OiAnNTAwcHgnLFxuICAgICAgbG9jYWxlOiAnaXRfSVQnLFxuICAgICAgY2x1c3Rlcjoge1xuICAgICAgICAvLyB0aXRsZVRlbXBsYXRlOiAne2NvdW50fScsXG4gICAgICAgIC8vIGZpdE9uRG91YmxlQ2xpY2s6IHRydWUsXG4gICAgICAgIGNsdXN0ZXJDcml0ZXJpYTogKGYsIHMpID0+IGYuY29udGVudC5jaGFyQXQoMCkgPT09IHMuY29udGVudC5jaGFyQXQoMClcbiAgICAgIH0sXG4gICAgICBzaG93VG9vbHRpcHM6IGZhbHNlLFxuICAgICAgdG9vbHRpcDoge1xuICAgICAgICBmb2xsb3dNb3VzZTogZmFsc2UsXG4gICAgICAgIHRlbXBsYXRlOiAoZDogYW55LCBlbGVtZW50OiB7IHRpdGxlOiBzdHJpbmcgfSkgPT4gYDxkaXYgY2xhc3M9XCJ0b29sdGlwXCI+JHtlbGVtZW50LnRpdGxlfTwvZGl2PmBcbiAgICAgIH0sXG4gICAgICB0ZW1wbGF0ZTogKGQ6IGFueSkgPT4ge1xuICAgICAgICBjb25zdCBzdGFydCA9IG1vbWVudChkLnN0YXJ0KS5mb3JtYXQoJ0RETU0nKSA9PT0gJzAxMDEnXG4gICAgICAgICAgPyBtb21lbnQoZC5zdGFydCkuZm9ybWF0KCdZWVlZJykgOiBtb21lbnQoZC5zdGFydCkuZm9ybWF0KCdERCBNTU1NIFlZWVknKTtcbiAgICAgICAgbGV0IGVuZDogc3RyaW5nO1xuICAgICAgICBpZiAoZC5lbmQpIHtcbiAgICAgICAgICBlbmQgPSBtb21lbnQoZC5lbmQpLmZvcm1hdCgnRERNTScpID09PSAnMDEwMSdcbiAgICAgICAgICAgID8gbW9tZW50KGQuZW5kKS5mb3JtYXQoJ1lZWVknKSA6IG1vbWVudChkLmVuZCkuZm9ybWF0KCdERCBNTU1NIFlZWVknKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBlbmRIVE1MID0gZC5lbmQgPyBgLSAke2VuZH1gIDogJyc7XG4gICAgICAgIHJldHVybiAoYDxkaXYgY2xhc3M9XCJkYXRlc1wiPjxlbT4ke3N0YXJ0fSR7ZW5kSFRNTH08L2VtPjwvZGl2PjxkaXYgY2xhc3M9XCJjb250ZW50XCI+JHtkLmNvbnRlbnR9PC9kaXY+YCk7XG4gICAgICB9LFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIG1pbkhlaWdodDogJzM1MHB4JyxcbiAgICAgIG1heEhlaWdodDogJzgwMHB4JyxcbiAgICAgIC8vIHpvb21NYXg6IDMxNTU3NjAwMDAwLCAvLyBvbmUgeWVhclxuICAgICAgem9vbUZyaWN0aW9uOiA4XG4gICAgfSxcbiAgICBkYXRhU2V0OiBbXG4gICAgICB7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICBjb250ZW50OiAnTW9zdHJhIGludGVybmF6aW9uYWxlIGRpIGVkaWxpemlhIG9zcGVkYWxpZXJhLCBSb21hICgxOTM1KScsXG4gICAgICAgIHN0YXJ0OiAnMTkzNSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAyLFxuICAgICAgICBjb250ZW50OiAnTW9zdHJhIGRpIGVkaWxpemlhIG9zcGVkYWxpZXJhLCBGaXVnZ2knLFxuICAgICAgICBzdGFydDogJzE5NDInXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogMyxcbiAgICAgICAgY29udGVudDogJ0kgQ29uZ3Jlc3NvIG1vbmRpYWxlIGRpIHNvY2lvbG9naWEnLFxuICAgICAgICBzdGFydDogJzE5NTEnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogNCxcbiAgICAgICAgY29udGVudDogJ1YgQ29uZ3Jlc3NvIG1vbmRpYWxlIGRpIHNvY2lvbG9naWEsIFdhc2hpbmd0b24gRC5DLiAoMTk2MiknLFxuICAgICAgICBzdGFydDogJzE5NjInLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDUsXG4gICAgICAgIGNvbnRlbnQ6ICdNb3N0cmEgZGkgZWRpbGl6aWEgcHViYmxpY2EsIFBpc2EnLFxuICAgICAgICBzdGFydDogJzE5NjctMDYtMTYnLFxuICAgICAgICBlbmQ6ICcxOTY3LTA2LTIxJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDYsXG4gICAgICAgIGNvbnRlbnQ6ICdTdHJhdGVnaWEgZGVsbGEgdGVuc2lvbmUnLFxuICAgICAgICBzdGFydDogJzE5NzUnLFxuICAgICAgICBlbmQ6ICcxOTg0J1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDcsXG4gICAgICAgIGNvbnRlbnQ6ICdYWCBDb25ncmVzc28gbW9uZGlhbGUgZGkgc29jaW9sb2dpYSwgUm9tYScsXG4gICAgICAgIHN0YXJ0OiAnMTk5NSdcbiAgICAgIH1cbiAgICBdLFxuICAgIF9zZXRJbnN0YW5jZTogKHRpbWVsaW5lKSA9PiB0aW1lbGluZVxuICB9KTtcbn1cbiJdfQ==