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
var getRepeater = function (fields, labels, metadataToShow, type) {
    var html = [];
    fields
        .filter(function (_a) {
        var key = _a.key, value = _a.value;
        return metadataToShow.includes(key) && !metadataIsEmpty(value);
    })
        .map(function (_a) {
        var key = _a.key, value = _a.value;
        return ({
            key: key,
            value: value,
            order: metadataToShow.indexOf(key),
            label: helpers.prettifySnakeCase(key, labels[type + "." + key])
        });
    })
        .sort(function (a, b) { return a.order - b.order; })
        .forEach(function (_a) {
        var label = _a.label, value = _a.value;
        html.push("<dt>" + label + "</dt>");
        html.push("<dd>" + value + "</dd>");
    });
    return html.length
        ? "<dl>" + html.join('') + "</dl>"
        : null;
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
                        result.push({ key: label, value: getRepeater(fields, labels, metadataToShow, type) });
                    }
                    // default
                }
                else {
                    result.push({ key: key, value: value });
                }
            });
        }
        return result
            .filter(function (_a) {
            var key = _a.key, value = _a.value;
            return metadataToShow.includes(key) && !metadataIsEmpty(value);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0YWRhdGEuaGVscGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2hlbHBlcnMvbWV0YWRhdGEuaGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sT0FBTyxNQUFNLHNCQUFzQixDQUFDO0FBRTNDLElBQU0sZUFBZSxHQUFHLFVBQUMsS0FBSyxJQUFLLE9BQUEsQ0FBQyxDQUFDLEtBQUssSUFBSSxLQUFLLEtBQUssTUFBTSxDQUFDLEVBQTVCLENBQTRCLENBQUM7O0FBRWhFLElBQU0sTUFBTSxHQUFHLFVBQUMsTUFBYSxJQUFLLE9BQUEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBQyxFQUFPO1FBQUwsWUFBRztJQUFPLE9BQUEsR0FBRyxLQUFLLFFBQVE7QUFBaEIsQ0FBZ0IsQ0FBQyxDQUFDLE1BQU0sRUFBckQsQ0FBcUQsQ0FBQzs7QUFFeEYsSUFBTSxVQUFVLEdBQUcsVUFBQyxNQUFhLElBQUssT0FBQSxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFyQixDQUFxQixDQUFDOztBQUU1RCxJQUFNLE9BQU8sR0FBRyxVQUFDLE1BQWEsRUFBRSxLQUFLO0lBQ25DLElBQU0sV0FBVyxHQUFHLENBQUMsbUJBQW1CLEVBQUUscUJBQXFCLENBQUMsQ0FBQztJQUNqRSxJQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQUMsRUFBTztZQUFMLFlBQUc7UUFBTyxPQUFBLEdBQUcsS0FBSyxPQUFPO0lBQWYsQ0FBZSxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQzlELElBQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEMsSUFBTSxFQUFFLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFDLEVBQU87WUFBTCxZQUFHO1FBQU8sT0FBQSxHQUFHLEtBQUssSUFB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Q0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7cUJBQ3ZGO29CQUNELFVBQVU7aUJBQ1g7cUJBQU07b0JBQ0wsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsS0FBQSxFQUFFLEtBQUssT0FBQSxFQUFFLENBQUMsQ0FBQztpQkFDN0I7WUFDSCxDQUFDLENBQUMsQ0FBQztTQUNKO1FBQ0QsT0FBTyxNQUFNO2FBQ1YsTUFBTSxDQUFDLFVBQUMsRUFBYztnQkFBWixZQUFHLEVBQUUsZ0JBQUs7WUFBTyxPQUFBLGNBQWMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDO1FBQXZELENBQXVELENBQUM7YUFDbkYsR0FBRyxDQUFDLFVBQUMsRUFBYztnQkFBWixZQUFHLEVBQUUsZ0JBQUs7WUFBTyxPQUFBLENBQUM7Z0JBQ3hCLEdBQUcsS0FBQTtnQkFDSCxLQUFLLE9BQUE7Z0JBQ0wsS0FBSyxFQUFFLGNBQWMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO2dCQUNsQyxLQUFLLEVBQUUsT0FBTyxDQUFDLGlCQUFpQixDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUksSUFBSSxTQUFJLEdBQUssQ0FBQyxDQUFDO2FBQ2hFLENBQUM7UUFMdUIsQ0FLdkIsQ0FBQzthQUNGLElBQUksQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDLElBQUssT0FBQSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQWpCLENBQWlCLENBQUMsQ0FBQztJQUN2QyxDQUFDO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBoZWxwZXJzIGZyb20gJy4uLy4uL2NvbW1vbi9oZWxwZXJzJztcclxuXHJcbmNvbnN0IG1ldGFkYXRhSXNFbXB0eSA9ICh2YWx1ZSkgPT4gKCF2YWx1ZSB8fCB2YWx1ZSA9PT0gJ251bGwnKTtcclxuXHJcbmNvbnN0IGlzTGluayA9IChmaWVsZHM6IGFueVtdKSA9PiAhIWZpZWxkcy5maWx0ZXIoKHsga2V5IH0pID0+IGtleSA9PT0gJ2lzTGluaycpLmxlbmd0aDtcclxuXHJcbmNvbnN0IGlzUmVwZWF0ZXIgPSAoZmllbGRzOiBhbnlbXSkgPT4gQXJyYXkuaXNBcnJheShmaWVsZHMpO1xyXG5cclxuY29uc3QgZ2V0TGluayA9IChmaWVsZHM6IGFueVtdLCBwYXRocykgPT4ge1xyXG4gIGNvbnN0IHNjaGVkYVR5cGVzID0gWydvZ2dldHRvLWN1bHR1cmFsZScsICdhZ2dyZWdhemlvbmUtbG9naWNhJ107XHJcbiAgY29uc3QgbGFiZWwgPSBmaWVsZHMuZmluZCgoeyBrZXkgfSkgPT4ga2V5ID09PSAnbGFiZWwnKS52YWx1ZTtcclxuICBjb25zdCBzbHVnID0gaGVscGVycy5zbHVnaWZ5KGxhYmVsKTtcclxuICBjb25zdCBpZCA9IGZpZWxkcy5maW5kKCh7IGtleSB9KSA9PiBrZXkgPT09ICdpZCcpLnZhbHVlO1xyXG4gIGNvbnN0IHR5cGUgPSBmaWVsZHMuZmluZCgoeyBrZXkgfSkgPT4ga2V5ID09PSAndHlwZScpLnZhbHVlO1xyXG4gIGxldCBiYXNlUGF0aCA9IHBhdGhzLmVudGl0YUJhc2VQYXRoO1xyXG4gIGlmIChzY2hlZGFUeXBlcy5pbmNsdWRlcyh0eXBlKSkge1xyXG4gICAgYmFzZVBhdGggPSBwYXRocy5zY2hlZGFCYXNlUGF0aDtcclxuICB9XHJcbiAgcmV0dXJuIGA8YSBocmVmPVwiJHtiYXNlUGF0aH0ke2lkfS8ke3NsdWd9XCI+JHtsYWJlbH08L2E+YDtcclxufTtcclxuXHJcbmNvbnN0IGdldFJlcGVhdGVyID0gKGZpZWxkczogYW55W10sIGxhYmVscywgbWV0YWRhdGFUb1Nob3csIHR5cGUpID0+IHtcclxuICBjb25zdCBodG1sID0gW107XHJcbiAgZmllbGRzXHJcbiAgICAuZmlsdGVyKCh7IGtleSwgdmFsdWUgfSkgPT4gbWV0YWRhdGFUb1Nob3cuaW5jbHVkZXMoa2V5KSAmJiAhbWV0YWRhdGFJc0VtcHR5KHZhbHVlKSlcclxuICAgIC5tYXAoKHsga2V5LCB2YWx1ZSB9KSA9PiAoe1xyXG4gICAgICBrZXksXHJcbiAgICAgIHZhbHVlLFxyXG4gICAgICBvcmRlcjogbWV0YWRhdGFUb1Nob3cuaW5kZXhPZihrZXkpLFxyXG4gICAgICBsYWJlbDogaGVscGVycy5wcmV0dGlmeVNuYWtlQ2FzZShrZXksIGxhYmVsc1tgJHt0eXBlfS4ke2tleX1gXSlcclxuICAgIH0pKVxyXG4gICAgLnNvcnQoKGEsIGIpID0+IGEub3JkZXIgLSBiLm9yZGVyKVxyXG4gICAgLmZvckVhY2goKHsgbGFiZWwsIHZhbHVlIH0pID0+IHtcclxuICAgICAgaHRtbC5wdXNoKGA8ZHQ+JHtsYWJlbH08L2R0PmApO1xyXG4gICAgICBodG1sLnB1c2goYDxkZD4ke3ZhbHVlfTwvZGQ+YCk7XHJcbiAgICB9KTtcclxuICByZXR1cm4gaHRtbC5sZW5ndGhcclxuICAgID8gYDxkbD4ke2h0bWwuam9pbignJyl9PC9kbD5gXHJcbiAgICA6IG51bGw7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbm9ybWFsaXplOiAoe1xyXG4gICAgZmllbGRzOiBkYXRhLFxyXG4gICAgcGF0aHMsXHJcbiAgICBsYWJlbHMsXHJcbiAgICBtZXRhZGF0YVRvU2hvdyxcclxuICAgIHR5cGVcclxuICB9KSA9PiB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBbXTtcclxuICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XHJcbiAgICAgIGRhdGEuZm9yRWFjaCgoe1xyXG4gICAgICAgIGtleSwgdmFsdWUsIGxhYmVsLCBmaWVsZHNcclxuICAgICAgfSkgPT4ge1xyXG4gICAgICAgIC8vIGxpbmsgJiByZXBlYXRlciBjb250cm9sXHJcbiAgICAgICAgaWYgKGZpZWxkcyAmJiBBcnJheS5pc0FycmF5KGZpZWxkcykpIHtcclxuICAgICAgICAgIGlmIChpc0xpbmsoZmllbGRzKSkge1xyXG4gICAgICAgICAgICByZXN1bHQucHVzaCh7IGtleTogbGFiZWwsIHZhbHVlOiBnZXRMaW5rKGZpZWxkcywgcGF0aHMpIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChpc1JlcGVhdGVyKGZpZWxkcykpIHtcclxuICAgICAgICAgICAgcmVzdWx0LnB1c2goeyBrZXk6IGxhYmVsLCB2YWx1ZTogZ2V0UmVwZWF0ZXIoZmllbGRzLCBsYWJlbHMsIG1ldGFkYXRhVG9TaG93LCB0eXBlKSB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC8vIGRlZmF1bHRcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmVzdWx0LnB1c2goeyBrZXksIHZhbHVlIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0XHJcbiAgICAgIC5maWx0ZXIoKHsga2V5LCB2YWx1ZSB9KSA9PiBtZXRhZGF0YVRvU2hvdy5pbmNsdWRlcyhrZXkpICYmICFtZXRhZGF0YUlzRW1wdHkodmFsdWUpKVxyXG4gICAgICAubWFwKCh7IGtleSwgdmFsdWUgfSkgPT4gKHtcclxuICAgICAgICBrZXksXHJcbiAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgb3JkZXI6IG1ldGFkYXRhVG9TaG93LmluZGV4T2Yoa2V5KSxcclxuICAgICAgICBsYWJlbDogaGVscGVycy5wcmV0dGlmeVNuYWtlQ2FzZShrZXksIGxhYmVsc1tgJHt0eXBlfS4ke2tleX1gXSksXHJcbiAgICAgIH0pKVxyXG4gICAgICAuc29ydCgoYSwgYikgPT4gYS5vcmRlciAtIGIub3JkZXIpO1xyXG4gIH1cclxufTtcclxuIl19