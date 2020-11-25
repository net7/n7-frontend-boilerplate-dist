import { __extends } from "tslib";
import { EventHandler } from '@n7-frontend/core';
var MrCollectionEH = /** @class */ (function (_super) {
    __extends(MrCollectionEH, _super);
    function MrCollectionEH() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MrCollectionEH.prototype.listen = function () {
        // this.innerEvents$.subscribe(({ type, payload }) => {
        //   switch (type) {
        //     case `${this.dataSource.id}.<event-type>`:
        //       // TODO
        //       break;
        //     default:
        //       break;
        //   }
        // });
    };
    return MrCollectionEH;
}(EventHandler));
export { MrCollectionEH };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGVjdGlvbi5laC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvZXZlbnQtaGFuZGxlcnMvY29sbGVjdGlvbi5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWpEO0lBQW9DLGtDQUFZO0lBQWhEOztJQVlBLENBQUM7SUFYUSwrQkFBTSxHQUFiO1FBQ0UsdURBQXVEO1FBQ3ZELG9CQUFvQjtRQUNwQixpREFBaUQ7UUFDakQsZ0JBQWdCO1FBQ2hCLGVBQWU7UUFDZixlQUFlO1FBQ2YsZUFBZTtRQUNmLE1BQU07UUFDTixNQUFNO0lBQ1IsQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQyxBQVpELENBQW9DLFlBQVksR0FZL0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgTXJDb2xsZWN0aW9uRUggZXh0ZW5kcyBFdmVudEhhbmRsZXIge1xyXG4gIHB1YmxpYyBsaXN0ZW4oKSB7XHJcbiAgICAvLyB0aGlzLmlubmVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XHJcbiAgICAvLyAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgLy8gICAgIGNhc2UgYCR7dGhpcy5kYXRhU291cmNlLmlkfS48ZXZlbnQtdHlwZT5gOlxyXG4gICAgLy8gICAgICAgLy8gVE9ET1xyXG4gICAgLy8gICAgICAgYnJlYWs7XHJcbiAgICAvLyAgICAgZGVmYXVsdDpcclxuICAgIC8vICAgICAgIGJyZWFrO1xyXG4gICAgLy8gICB9XHJcbiAgICAvLyB9KTtcclxuICB9XHJcbn1cclxuIl19