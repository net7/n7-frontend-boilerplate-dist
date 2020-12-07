import { AwFacetInput } from './aw-facet-input';
import helpers from '../../../common/helpers';
export class AwFacetInputText extends AwFacetInput {
    transform() {
        const facetId = this.getFacetId();
        const payload = {
            facetId,
            source: 'input-text',
        };
        return {
            type: 'text',
            id: this.getId(),
            label: this.config.label,
            disabled: this.config.disabled,
            placeholder: this.config.placeholder,
            icon: this.config.icon,
            inputPayload: Object.assign(Object.assign({}, payload), { trigger: 'input' }),
            enterPayload: Object.assign(Object.assign({}, payload), { trigger: 'enter' }),
            iconPayload: Object.assign(Object.assign({}, payload), { trigger: 'icon' }),
            _meta: { facetId },
        };
    }
    setActive(facetValue) {
        this.output.value = helpers.unescapeQuotes(facetValue) || null;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXctZmFjZXQtaW5wdXQtdGV4dC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9zZWFyY2gvYXctZmFjZXQtaW5wdXRzL2F3LWZhY2V0LWlucHV0LXRleHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2hELE9BQU8sT0FBTyxNQUFNLHlCQUF5QixDQUFDO0FBRTlDLE1BQU0sT0FBTyxnQkFBaUIsU0FBUSxZQUFZO0lBQ3RDLFNBQVM7UUFDakIsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xDLE1BQU0sT0FBTyxHQUFHO1lBQ2QsT0FBTztZQUNQLE1BQU0sRUFBRSxZQUFZO1NBQ3JCLENBQUM7UUFFRixPQUFPO1lBQ0wsSUFBSSxFQUFFLE1BQU07WUFDWixFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNoQixLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLO1lBQ3hCLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVE7WUFDOUIsV0FBVyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVztZQUNwQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJO1lBQ3RCLFlBQVksa0NBQ1AsT0FBTyxLQUNWLE9BQU8sRUFBRSxPQUFPLEdBQ2pCO1lBQ0QsWUFBWSxrQ0FDUCxPQUFPLEtBQ1YsT0FBTyxFQUFFLE9BQU8sR0FDakI7WUFDRCxXQUFXLGtDQUNOLE9BQU8sS0FDVixPQUFPLEVBQUUsTUFBTSxHQUNoQjtZQUNELEtBQUssRUFBRSxFQUFFLE9BQU8sRUFBRTtTQUNuQixDQUFDO0lBQ0osQ0FBQztJQUVNLFNBQVMsQ0FBQyxVQUFVO1FBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLElBQUksSUFBSSxDQUFDO0lBQ2pFLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF3RmFjZXRJbnB1dCB9IGZyb20gJy4vYXctZmFjZXQtaW5wdXQnO1xuaW1wb3J0IGhlbHBlcnMgZnJvbSAnLi4vLi4vLi4vY29tbW9uL2hlbHBlcnMnO1xuXG5leHBvcnQgY2xhc3MgQXdGYWNldElucHV0VGV4dCBleHRlbmRzIEF3RmFjZXRJbnB1dCB7XG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oKSB7XG4gICAgY29uc3QgZmFjZXRJZCA9IHRoaXMuZ2V0RmFjZXRJZCgpO1xuICAgIGNvbnN0IHBheWxvYWQgPSB7XG4gICAgICBmYWNldElkLFxuICAgICAgc291cmNlOiAnaW5wdXQtdGV4dCcsXG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiAndGV4dCcsXG4gICAgICBpZDogdGhpcy5nZXRJZCgpLFxuICAgICAgbGFiZWw6IHRoaXMuY29uZmlnLmxhYmVsLFxuICAgICAgZGlzYWJsZWQ6IHRoaXMuY29uZmlnLmRpc2FibGVkLFxuICAgICAgcGxhY2Vob2xkZXI6IHRoaXMuY29uZmlnLnBsYWNlaG9sZGVyLFxuICAgICAgaWNvbjogdGhpcy5jb25maWcuaWNvbixcbiAgICAgIGlucHV0UGF5bG9hZDoge1xuICAgICAgICAuLi5wYXlsb2FkLFxuICAgICAgICB0cmlnZ2VyOiAnaW5wdXQnLFxuICAgICAgfSxcbiAgICAgIGVudGVyUGF5bG9hZDoge1xuICAgICAgICAuLi5wYXlsb2FkLFxuICAgICAgICB0cmlnZ2VyOiAnZW50ZXInLFxuICAgICAgfSxcbiAgICAgIGljb25QYXlsb2FkOiB7XG4gICAgICAgIC4uLnBheWxvYWQsXG4gICAgICAgIHRyaWdnZXI6ICdpY29uJyxcbiAgICAgIH0sXG4gICAgICBfbWV0YTogeyBmYWNldElkIH0sXG4gICAgfTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRBY3RpdmUoZmFjZXRWYWx1ZSkge1xuICAgIHRoaXMub3V0cHV0LnZhbHVlID0gaGVscGVycy51bmVzY2FwZVF1b3RlcyhmYWNldFZhbHVlKSB8fCBudWxsO1xuICB9XG59XG4iXX0=