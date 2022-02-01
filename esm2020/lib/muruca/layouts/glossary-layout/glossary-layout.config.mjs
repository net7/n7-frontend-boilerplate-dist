import { MrGlossaryLayoutDS } from './glossary-layout.ds';
import { MrGlossaryLayoutEH } from './glossary-layout.eh';
import * as DS from '../../data-sources';
import * as EH from '../../event-handlers';
export const MrGlossaryLayoutConfig = {
    layoutId: 'n7-glossary-layout',
    widgets: [
    // {
    //   id: 'title',          ← Insert a component here.
    //   hasStaticData: true,  ← Renders the widget before this.one().update is called.
    // }
    ],
    layoutDS: MrGlossaryLayoutDS,
    layoutEH: MrGlossaryLayoutEH,
    widgetsDataSources: DS,
    widgetsEventHandlers: EH,
    layoutOptions: {}
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvc3NhcnktbGF5b3V0LmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL243LWJvaWxlcnBsYXRlLWxpYi9zcmMvbGliL211cnVjYS9sYXlvdXRzL2dsb3NzYXJ5LWxheW91dC9nbG9zc2FyeS1sYXlvdXQuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzFELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzFELE9BQU8sS0FBSyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDekMsT0FBTyxLQUFLLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUUzQyxNQUFNLENBQUMsTUFBTSxzQkFBc0IsR0FBRztJQUNwQyxRQUFRLEVBQUUsb0JBQW9CO0lBQzlCLE9BQU8sRUFBRTtJQUNQLElBQUk7SUFDSixxREFBcUQ7SUFDckQsbUZBQW1GO0lBQ25GLElBQUk7S0FDTDtJQUNELFFBQVEsRUFBRSxrQkFBa0I7SUFDNUIsUUFBUSxFQUFFLGtCQUFrQjtJQUM1QixrQkFBa0IsRUFBRSxFQUFFO0lBQ3RCLG9CQUFvQixFQUFFLEVBQUU7SUFDeEIsYUFBYSxFQUFFLEVBQUU7Q0FDbEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1yR2xvc3NhcnlMYXlvdXREUyB9IGZyb20gJy4vZ2xvc3NhcnktbGF5b3V0LmRzJztcbmltcG9ydCB7IE1yR2xvc3NhcnlMYXlvdXRFSCB9IGZyb20gJy4vZ2xvc3NhcnktbGF5b3V0LmVoJztcbmltcG9ydCAqIGFzIERTIGZyb20gJy4uLy4uL2RhdGEtc291cmNlcyc7XG5pbXBvcnQgKiBhcyBFSCBmcm9tICcuLi8uLi9ldmVudC1oYW5kbGVycyc7XG5cbmV4cG9ydCBjb25zdCBNckdsb3NzYXJ5TGF5b3V0Q29uZmlnID0ge1xuICBsYXlvdXRJZDogJ243LWdsb3NzYXJ5LWxheW91dCcsXG4gIHdpZGdldHM6IFtcbiAgICAvLyB7XG4gICAgLy8gICBpZDogJ3RpdGxlJywgICAgICAgICAg4oaQIEluc2VydCBhIGNvbXBvbmVudCBoZXJlLlxuICAgIC8vICAgaGFzU3RhdGljRGF0YTogdHJ1ZSwgIOKGkCBSZW5kZXJzIHRoZSB3aWRnZXQgYmVmb3JlIHRoaXMub25lKCkudXBkYXRlIGlzIGNhbGxlZC5cbiAgICAvLyB9XG4gIF0sXG4gIGxheW91dERTOiBNckdsb3NzYXJ5TGF5b3V0RFMsXG4gIGxheW91dEVIOiBNckdsb3NzYXJ5TGF5b3V0RUgsXG4gIHdpZGdldHNEYXRhU291cmNlczogRFMsXG4gIHdpZGdldHNFdmVudEhhbmRsZXJzOiBFSCxcbiAgbGF5b3V0T3B0aW9uczoge31cbn07XG4iXX0=