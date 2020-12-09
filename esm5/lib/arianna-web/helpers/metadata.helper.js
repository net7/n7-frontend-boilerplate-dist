import helpers from '../../common/helpers';
var metadataIsEmpty = function (value) { return (!value || value === 'null'); };
var ɵ0 = metadataIsEmpty;
var isLink = function (fields) { return !!fields.filter(function (_a) {
    var key = _a.key;
    return key === 'isLink';
}).length; };
var ɵ1 = isLink;
var isRepeater = function (fields) { return Array.isArray(fields); };
var ɵ2 = isRepeater;
var getLink = function (fields, paths) {
    var schedaTypes = ['oggetto-culturale', 'aggregazione-logica'];
    var label = fields.find(function (_a) {
        var key = _a.key;
        return key === 'label';
    }).value;
    var slug = helpers.slugify(label);
    var id = fields.find(function (_a) {
        var key = _a.key;
        return key === 'id';
    }).value;
    var type = fields.find(function (_a) {
        var key = _a.key;
        return key === 'type';
    }).value;
    var basePath = paths.entitaBasePath;
    if (schedaTypes.includes(type)) {
        basePath = paths.schedaBasePath;
    }
    return "<a href=\"" + basePath + id + "/" + slug + "\">" + label + "</a>";
};
var ɵ3 = getLink;
var getRepeater = function (fields, labels, metadataToShow, type, parentLabel, paths) {
    var html = [];
    fields
        .filter(function (_a) {
        var subFields = _a.fields;
        return subFields;
    })
        .forEach(function (_a) {
        var subFields = _a.fields;
        var subHtml = [];
        if (isLink(subFields)) {
            subHtml.push('<div>');
            subHtml.push("<dd>" + getLink(subFields, paths) + "</dd>");
            subHtml.push('</div>');
        }
        subFields
            .filter(function (_a) {
            var key = _a.key;
            if (isLink(subFields)) {
                return !(['label', 'id', 'type', 'isLink'].includes(key));
            }
            return true;
        })
            .filter(function (_a) {
            var key = _a.key, value = _a.value;
            return metadataToShow.includes(parentLabel + "." + key) && !metadataIsEmpty(value);
        })
            .map(function (_a) {
            var key = _a.key, value = _a.value;
            return ({
                key: key,
                value: value,
                order: metadataToShow.indexOf(parentLabel + "." + key),
                label: helpers.prettifySnakeCase(key, labels[type + "." + parentLabel + "." + key])
            });
        })
            .sort(function (a, b) { return a.order - b.order; })
            .forEach(function (_a) {
            var label = _a.label, value = _a.value;
            subHtml.push('<div>');
            subHtml.push("<dt>" + label + "</dt>");
            subHtml.push("<dd>" + value + "</dd>");
            subHtml.push('</div>');
        });
        if (subHtml.length) {
            html.push("<dl>" + subHtml.join('') + "</dl>");
        }
    });
    return html.length ? html.join('') : null;
};
var ɵ4 = getRepeater;
export default {
    normalize: function (_a) {
        var data = _a.fields, paths = _a.paths, labels = _a.labels, metadataToShow = _a.metadataToShow, type = _a.type;
        var result = [];
        if (Array.isArray(data)) {
            data.forEach(function (_a) {
                var key = _a.key, value = _a.value, label = _a.label, fields = _a.fields;
                // link & repeater control
                if (fields && Array.isArray(fields)) {
                    if (isLink(fields)) {
                        result.push({ key: label, value: getLink(fields, paths) });
                    }
                    else if (isRepeater(fields)) {
                        result.push({
                            key: label,
                            value: getRepeater(fields, labels, metadataToShow, type, label, paths)
                        });
                    }
                    // default
                }
                else if (metadataToShow.includes(key)) {
                    result.push({ key: key, value: value });
                }
            });
        }
        return result
            .filter(function (_a) {
            var value = _a.value;
            return !metadataIsEmpty(value);
        })
            .map(function (_a) {
            var key = _a.key, value = _a.value;
            return ({
                key: key,
                value: value,
                order: metadataToShow.indexOf(key),
                label: helpers.prettifySnakeCase(key, labels[type + "." + key]),
            });
        })
            .sort(function (a, b) { return a.order - b.order; });
    }
};
export { ɵ0, ɵ1, ɵ2, ɵ3, ɵ4 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0YWRhdGEuaGVscGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2hlbHBlcnMvbWV0YWRhdGEuaGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sT0FBTyxNQUFNLHNCQUFzQixDQUFDO0FBRTNDLElBQU0sZUFBZSxHQUFHLFVBQUMsS0FBSyxJQUFLLE9BQUEsQ0FBQyxDQUFDLEtBQUssSUFBSSxLQUFLLEtBQUssTUFBTSxDQUFDLEVBQTVCLENBQTRCLENBQUM7O0FBRWhFLElBQU0sTUFBTSxHQUFHLFVBQUMsTUFBYSxJQUFLLE9BQUEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBQyxFQUFPO1FBQUwsWUFBRztJQUFPLE9BQUEsR0FBRyxLQUFLLFFBQVE7QUFBaEIsQ0FBZ0IsQ0FBQyxDQUFDLE1BQU0sRUFBckQsQ0FBcUQsQ0FBQzs7QUFFeEYsSUFBTSxVQUFVLEdBQUcsVUFBQyxNQUFhLElBQUssT0FBQSxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFyQixDQUFxQixDQUFDOztBQUU1RCxJQUFNLE9BQU8sR0FBRyxVQUFDLE1BQWEsRUFBRSxLQUFLO0lBQ25DLElBQU0sV0FBVyxHQUFHLENBQUMsbUJBQW1CLEVBQUUscUJBQXFCLENBQUMsQ0FBQztJQUNqRSxJQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQUMsRUFBTztZQUFMLFlBQUc7UUFBTyxPQUFBLEdBQUcsS0FBSyxPQUFPO0lBQWYsQ0FBZSxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQzlELElBQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEMsSUFBTSxFQUFFLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFDLEVBQU87WUFBTCxZQUFHO1FBQU8sT0FBQSxHQUFHLEtBQUssSUFBSTtJQUFaLENBQVksQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUN4RCxJQUFNLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQUMsRUFBTztZQUFMLFlBQUc7UUFBTyxPQUFBLEdBQUcsS0FBSyxNQUFNO0lBQWQsQ0FBYyxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQzVELElBQUksUUFBUSxHQUFHLEtBQUssQ0FBQyxjQUFjLENBQUM7SUFDcEMsSUFBSSxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQzlCLFFBQVEsR0FBRyxLQUFLLENBQUMsY0FBYyxDQUFDO0tBQ2pDO0lBQ0QsT0FBTyxlQUFZLFFBQVEsR0FBRyxFQUFFLFNBQUksSUFBSSxXQUFLLEtBQUssU0FBTSxDQUFDO0FBQzNELENBQUMsQ0FBQzs7QUFFRixJQUFNLFdBQVcsR0FBRyxVQUFDLE1BQWEsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsS0FBSztJQUNsRixJQUFNLElBQUksR0FBRyxFQUFFLENBQUM7SUFDaEIsTUFBTTtTQUNILE1BQU0sQ0FBQyxVQUFDLEVBQXFCO1lBQW5CLHFCQUFpQjtRQUFPLE9BQUEsU0FBUztJQUFULENBQVMsQ0FBQztTQUM1QyxPQUFPLENBQUMsVUFBQyxFQUFxQjtZQUFuQixxQkFBaUI7UUFDM0IsSUFBTSxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ25CLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ3JCLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDdEIsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFPLE9BQU8sQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLFVBQU8sQ0FBQyxDQUFDO1lBQ3RELE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDeEI7UUFDRCxTQUFTO2FBQ04sTUFBTSxDQUFDLFVBQUMsRUFBTztnQkFBTCxZQUFHO1lBQ1osSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUU7Z0JBQ3JCLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDM0Q7WUFDRCxPQUFPLElBQUksQ0FBQztRQUNkLENBQUMsQ0FBQzthQUNELE1BQU0sQ0FBQyxVQUFDLEVBQWM7Z0JBQVosWUFBRyxFQUFFLGdCQUFLO1lBQU8sT0FBQSxjQUFjLENBQUMsUUFBUSxDQUFJLFdBQVcsU0FBSSxHQUFLLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUM7UUFBM0UsQ0FBMkUsQ0FBQzthQUN2RyxHQUFHLENBQUMsVUFBQyxFQUFjO2dCQUFaLFlBQUcsRUFBRSxnQkFBSztZQUFPLE9BQUEsQ0FBQztnQkFDeEIsR0FBRyxLQUFBO2dCQUNILEtBQUssT0FBQTtnQkFDTCxLQUFLLEVBQUUsY0FBYyxDQUFDLE9BQU8sQ0FBSSxXQUFXLFNBQUksR0FBSyxDQUFDO2dCQUN0RCxLQUFLLEVBQUUsT0FBTyxDQUFDLGlCQUFpQixDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUksSUFBSSxTQUFJLFdBQVcsU0FBSSxHQUFLLENBQUMsQ0FBQzthQUMvRSxDQUFDO1FBTHVCLENBS3ZCLENBQUM7YUFDRixJQUFJLENBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFqQixDQUFpQixDQUFDO2FBQ2pDLE9BQU8sQ0FBQyxVQUFDLEVBQWdCO2dCQUFkLGdCQUFLLEVBQUUsZ0JBQUs7WUFDdEIsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN0QixPQUFPLENBQUMsSUFBSSxDQUFDLFNBQU8sS0FBSyxVQUFPLENBQUMsQ0FBQztZQUNsQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQU8sS0FBSyxVQUFPLENBQUMsQ0FBQztZQUNsQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3pCLENBQUMsQ0FBQyxDQUFDO1FBRUwsSUFBSSxPQUFPLENBQUMsTUFBTSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFPLENBQUMsQ0FBQztTQUMzQztJQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7QUFDNUMsQ0FBQyxDQUFDOztBQUVGLGVBQWU7SUFDYixTQUFTLEVBQUUsVUFBQyxFQU1YO1lBTEMsZ0JBQVksRUFDWixnQkFBSyxFQUNMLGtCQUFNLEVBQ04sa0NBQWMsRUFDZCxjQUFJO1FBRUosSUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN2QixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQUMsRUFFYjtvQkFEQyxZQUFHLEVBQUUsZ0JBQUssRUFBRSxnQkFBSyxFQUFFLGtCQUFNO2dCQUV6QiwwQkFBMEI7Z0JBQzFCLElBQUksTUFBTSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUU7b0JBQ25DLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFO3dCQUNsQixNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7cUJBQzVEO3lCQUFNLElBQUksVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO3dCQUM3QixNQUFNLENBQUMsSUFBSSxDQUFDOzRCQUNWLEdBQUcsRUFBRSxLQUFLOzRCQUNWLEtBQUssRUFBRSxXQUFXLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUM7eUJBQ3ZFLENBQUMsQ0FBQztxQkFDSjtvQkFDRCxVQUFVO2lCQUNYO3FCQUFNLElBQUksY0FBYyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRTtvQkFDdkMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsS0FBQSxFQUFFLEtBQUssT0FBQSxFQUFFLENBQUMsQ0FBQztpQkFDN0I7WUFDSCxDQUFDLENBQUMsQ0FBQztTQUNKO1FBQ0QsT0FBTyxNQUFNO2FBQ1YsTUFBTSxDQUFDLFVBQUMsRUFBUztnQkFBUCxnQkFBSztZQUFPLE9BQUEsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDO1FBQXZCLENBQXVCLENBQUM7YUFDOUMsR0FBRyxDQUFDLFVBQUMsRUFBYztnQkFBWixZQUFHLEVBQUUsZ0JBQUs7WUFBTyxPQUFBLENBQUM7Z0JBQ3hCLEdBQUcsS0FBQTtnQkFDSCxLQUFLLE9BQUE7Z0JBQ0wsS0FBSyxFQUFFLGNBQWMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO2dCQUNsQyxLQUFLLEVBQUUsT0FBTyxDQUFDLGlCQUFpQixDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUksSUFBSSxTQUFJLEdBQUssQ0FBQyxDQUFDO2FBQ2hFLENBQUM7UUFMdUIsQ0FLdkIsQ0FBQzthQUNGLElBQUksQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDLElBQUssT0FBQSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQWpCLENBQWlCLENBQUMsQ0FBQztJQUN2QyxDQUFDO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBoZWxwZXJzIGZyb20gJy4uLy4uL2NvbW1vbi9oZWxwZXJzJztcblxuY29uc3QgbWV0YWRhdGFJc0VtcHR5ID0gKHZhbHVlKSA9PiAoIXZhbHVlIHx8IHZhbHVlID09PSAnbnVsbCcpO1xuXG5jb25zdCBpc0xpbmsgPSAoZmllbGRzOiBhbnlbXSkgPT4gISFmaWVsZHMuZmlsdGVyKCh7IGtleSB9KSA9PiBrZXkgPT09ICdpc0xpbmsnKS5sZW5ndGg7XG5cbmNvbnN0IGlzUmVwZWF0ZXIgPSAoZmllbGRzOiBhbnlbXSkgPT4gQXJyYXkuaXNBcnJheShmaWVsZHMpO1xuXG5jb25zdCBnZXRMaW5rID0gKGZpZWxkczogYW55W10sIHBhdGhzKSA9PiB7XG4gIGNvbnN0IHNjaGVkYVR5cGVzID0gWydvZ2dldHRvLWN1bHR1cmFsZScsICdhZ2dyZWdhemlvbmUtbG9naWNhJ107XG4gIGNvbnN0IGxhYmVsID0gZmllbGRzLmZpbmQoKHsga2V5IH0pID0+IGtleSA9PT0gJ2xhYmVsJykudmFsdWU7XG4gIGNvbnN0IHNsdWcgPSBoZWxwZXJzLnNsdWdpZnkobGFiZWwpO1xuICBjb25zdCBpZCA9IGZpZWxkcy5maW5kKCh7IGtleSB9KSA9PiBrZXkgPT09ICdpZCcpLnZhbHVlO1xuICBjb25zdCB0eXBlID0gZmllbGRzLmZpbmQoKHsga2V5IH0pID0+IGtleSA9PT0gJ3R5cGUnKS52YWx1ZTtcbiAgbGV0IGJhc2VQYXRoID0gcGF0aHMuZW50aXRhQmFzZVBhdGg7XG4gIGlmIChzY2hlZGFUeXBlcy5pbmNsdWRlcyh0eXBlKSkge1xuICAgIGJhc2VQYXRoID0gcGF0aHMuc2NoZWRhQmFzZVBhdGg7XG4gIH1cbiAgcmV0dXJuIGA8YSBocmVmPVwiJHtiYXNlUGF0aH0ke2lkfS8ke3NsdWd9XCI+JHtsYWJlbH08L2E+YDtcbn07XG5cbmNvbnN0IGdldFJlcGVhdGVyID0gKGZpZWxkczogYW55W10sIGxhYmVscywgbWV0YWRhdGFUb1Nob3csIHR5cGUsIHBhcmVudExhYmVsLCBwYXRocykgPT4ge1xuICBjb25zdCBodG1sID0gW107XG4gIGZpZWxkc1xuICAgIC5maWx0ZXIoKHsgZmllbGRzOiBzdWJGaWVsZHMgfSkgPT4gc3ViRmllbGRzKVxuICAgIC5mb3JFYWNoKCh7IGZpZWxkczogc3ViRmllbGRzIH0pID0+IHtcbiAgICAgIGNvbnN0IHN1Ykh0bWwgPSBbXTtcbiAgICAgIGlmIChpc0xpbmsoc3ViRmllbGRzKSkge1xuICAgICAgICBzdWJIdG1sLnB1c2goJzxkaXY+Jyk7XG4gICAgICAgIHN1Ykh0bWwucHVzaChgPGRkPiR7Z2V0TGluayhzdWJGaWVsZHMsIHBhdGhzKX08L2RkPmApO1xuICAgICAgICBzdWJIdG1sLnB1c2goJzwvZGl2PicpO1xuICAgICAgfVxuICAgICAgc3ViRmllbGRzXG4gICAgICAgIC5maWx0ZXIoKHsga2V5IH0pID0+IHtcbiAgICAgICAgICBpZiAoaXNMaW5rKHN1YkZpZWxkcykpIHtcbiAgICAgICAgICAgIHJldHVybiAhKFsnbGFiZWwnLCAnaWQnLCAndHlwZScsICdpc0xpbmsnXS5pbmNsdWRlcyhrZXkpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0pXG4gICAgICAgIC5maWx0ZXIoKHsga2V5LCB2YWx1ZSB9KSA9PiBtZXRhZGF0YVRvU2hvdy5pbmNsdWRlcyhgJHtwYXJlbnRMYWJlbH0uJHtrZXl9YCkgJiYgIW1ldGFkYXRhSXNFbXB0eSh2YWx1ZSkpXG4gICAgICAgIC5tYXAoKHsga2V5LCB2YWx1ZSB9KSA9PiAoe1xuICAgICAgICAgIGtleSxcbiAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICBvcmRlcjogbWV0YWRhdGFUb1Nob3cuaW5kZXhPZihgJHtwYXJlbnRMYWJlbH0uJHtrZXl9YCksXG4gICAgICAgICAgbGFiZWw6IGhlbHBlcnMucHJldHRpZnlTbmFrZUNhc2Uoa2V5LCBsYWJlbHNbYCR7dHlwZX0uJHtwYXJlbnRMYWJlbH0uJHtrZXl9YF0pXG4gICAgICAgIH0pKVxuICAgICAgICAuc29ydCgoYSwgYikgPT4gYS5vcmRlciAtIGIub3JkZXIpXG4gICAgICAgIC5mb3JFYWNoKCh7IGxhYmVsLCB2YWx1ZSB9KSA9PiB7XG4gICAgICAgICAgc3ViSHRtbC5wdXNoKCc8ZGl2PicpO1xuICAgICAgICAgIHN1Ykh0bWwucHVzaChgPGR0PiR7bGFiZWx9PC9kdD5gKTtcbiAgICAgICAgICBzdWJIdG1sLnB1c2goYDxkZD4ke3ZhbHVlfTwvZGQ+YCk7XG4gICAgICAgICAgc3ViSHRtbC5wdXNoKCc8L2Rpdj4nKTtcbiAgICAgICAgfSk7XG5cbiAgICAgIGlmIChzdWJIdG1sLmxlbmd0aCkge1xuICAgICAgICBodG1sLnB1c2goYDxkbD4ke3N1Ykh0bWwuam9pbignJyl9PC9kbD5gKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgcmV0dXJuIGh0bWwubGVuZ3RoID8gaHRtbC5qb2luKCcnKSA6IG51bGw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5vcm1hbGl6ZTogKHtcbiAgICBmaWVsZHM6IGRhdGEsXG4gICAgcGF0aHMsXG4gICAgbGFiZWxzLFxuICAgIG1ldGFkYXRhVG9TaG93LFxuICAgIHR5cGVcbiAgfSkgPT4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICBkYXRhLmZvckVhY2goKHtcbiAgICAgICAga2V5LCB2YWx1ZSwgbGFiZWwsIGZpZWxkc1xuICAgICAgfSkgPT4ge1xuICAgICAgICAvLyBsaW5rICYgcmVwZWF0ZXIgY29udHJvbFxuICAgICAgICBpZiAoZmllbGRzICYmIEFycmF5LmlzQXJyYXkoZmllbGRzKSkge1xuICAgICAgICAgIGlmIChpc0xpbmsoZmllbGRzKSkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goeyBrZXk6IGxhYmVsLCB2YWx1ZTogZ2V0TGluayhmaWVsZHMsIHBhdGhzKSB9KTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGlzUmVwZWF0ZXIoZmllbGRzKSkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICBrZXk6IGxhYmVsLFxuICAgICAgICAgICAgICB2YWx1ZTogZ2V0UmVwZWF0ZXIoZmllbGRzLCBsYWJlbHMsIG1ldGFkYXRhVG9TaG93LCB0eXBlLCBsYWJlbCwgcGF0aHMpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gZGVmYXVsdFxuICAgICAgICB9IGVsc2UgaWYgKG1ldGFkYXRhVG9TaG93LmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgICByZXN1bHQucHVzaCh7IGtleSwgdmFsdWUgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gICAgICAuZmlsdGVyKCh7IHZhbHVlIH0pID0+ICFtZXRhZGF0YUlzRW1wdHkodmFsdWUpKVxuICAgICAgLm1hcCgoeyBrZXksIHZhbHVlIH0pID0+ICh7XG4gICAgICAgIGtleSxcbiAgICAgICAgdmFsdWUsXG4gICAgICAgIG9yZGVyOiBtZXRhZGF0YVRvU2hvdy5pbmRleE9mKGtleSksXG4gICAgICAgIGxhYmVsOiBoZWxwZXJzLnByZXR0aWZ5U25ha2VDYXNlKGtleSwgbGFiZWxzW2Ake3R5cGV9LiR7a2V5fWBdKSxcbiAgICAgIH0pKVxuICAgICAgLnNvcnQoKGEsIGIpID0+IGEub3JkZXIgLSBiLm9yZGVyKTtcbiAgfVxufTtcbiJdfQ==