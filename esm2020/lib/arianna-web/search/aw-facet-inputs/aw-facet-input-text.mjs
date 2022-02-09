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
            inputPayload: {
                ...payload,
                trigger: 'input',
            },
            enterPayload: {
                ...payload,
                trigger: 'enter',
            },
            iconPayload: {
                ...payload,
                trigger: 'icon',
            },
            _meta: { facetId },
        };
    }
    setActive(facetValue) {
        this.output.value = helpers.unescapeQuotes(facetValue) || null;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXctZmFjZXQtaW5wdXQtdGV4dC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL243LWJvaWxlcnBsYXRlLWxpYi9zcmMvbGliL2FyaWFubmEtd2ViL3NlYXJjaC9hdy1mYWNldC1pbnB1dHMvYXctZmFjZXQtaW5wdXQtdGV4dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDaEQsT0FBTyxPQUFPLE1BQU0seUJBQXlCLENBQUM7QUFFOUMsTUFBTSxPQUFPLGdCQUFpQixTQUFRLFlBQVk7SUFDdEMsU0FBUztRQUNqQixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEMsTUFBTSxPQUFPLEdBQUc7WUFDZCxPQUFPO1lBQ1AsTUFBTSxFQUFFLFlBQVk7U0FDckIsQ0FBQztRQUVGLE9BQU87WUFDTCxJQUFJLEVBQUUsTUFBTTtZQUNaLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2hCLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7WUFDeEIsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUTtZQUM5QixXQUFXLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXO1lBQ3BDLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUk7WUFDdEIsWUFBWSxFQUFFO2dCQUNaLEdBQUcsT0FBTztnQkFDVixPQUFPLEVBQUUsT0FBTzthQUNqQjtZQUNELFlBQVksRUFBRTtnQkFDWixHQUFHLE9BQU87Z0JBQ1YsT0FBTyxFQUFFLE9BQU87YUFDakI7WUFDRCxXQUFXLEVBQUU7Z0JBQ1gsR0FBRyxPQUFPO2dCQUNWLE9BQU8sRUFBRSxNQUFNO2FBQ2hCO1lBQ0QsS0FBSyxFQUFFLEVBQUUsT0FBTyxFQUFFO1NBQ25CLENBQUM7SUFDSixDQUFDO0lBRU0sU0FBUyxDQUFDLFVBQVU7UUFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsSUFBSSxJQUFJLENBQUM7SUFDakUsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXdGYWNldElucHV0IH0gZnJvbSAnLi9hdy1mYWNldC1pbnB1dCc7XHJcbmltcG9ydCBoZWxwZXJzIGZyb20gJy4uLy4uLy4uL2NvbW1vbi9oZWxwZXJzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBBd0ZhY2V0SW5wdXRUZXh0IGV4dGVuZHMgQXdGYWNldElucHV0IHtcclxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKCkge1xyXG4gICAgY29uc3QgZmFjZXRJZCA9IHRoaXMuZ2V0RmFjZXRJZCgpO1xyXG4gICAgY29uc3QgcGF5bG9hZCA9IHtcclxuICAgICAgZmFjZXRJZCxcclxuICAgICAgc291cmNlOiAnaW5wdXQtdGV4dCcsXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHR5cGU6ICd0ZXh0JyxcclxuICAgICAgaWQ6IHRoaXMuZ2V0SWQoKSxcclxuICAgICAgbGFiZWw6IHRoaXMuY29uZmlnLmxhYmVsLFxyXG4gICAgICBkaXNhYmxlZDogdGhpcy5jb25maWcuZGlzYWJsZWQsXHJcbiAgICAgIHBsYWNlaG9sZGVyOiB0aGlzLmNvbmZpZy5wbGFjZWhvbGRlcixcclxuICAgICAgaWNvbjogdGhpcy5jb25maWcuaWNvbixcclxuICAgICAgaW5wdXRQYXlsb2FkOiB7XHJcbiAgICAgICAgLi4ucGF5bG9hZCxcclxuICAgICAgICB0cmlnZ2VyOiAnaW5wdXQnLFxyXG4gICAgICB9LFxyXG4gICAgICBlbnRlclBheWxvYWQ6IHtcclxuICAgICAgICAuLi5wYXlsb2FkLFxyXG4gICAgICAgIHRyaWdnZXI6ICdlbnRlcicsXHJcbiAgICAgIH0sXHJcbiAgICAgIGljb25QYXlsb2FkOiB7XHJcbiAgICAgICAgLi4ucGF5bG9hZCxcclxuICAgICAgICB0cmlnZ2VyOiAnaWNvbicsXHJcbiAgICAgIH0sXHJcbiAgICAgIF9tZXRhOiB7IGZhY2V0SWQgfSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0QWN0aXZlKGZhY2V0VmFsdWUpIHtcclxuICAgIHRoaXMub3V0cHV0LnZhbHVlID0gaGVscGVycy51bmVzY2FwZVF1b3RlcyhmYWNldFZhbHVlKSB8fCBudWxsO1xyXG4gIH1cclxufVxyXG4iXX0=