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
                    else if (isRepeater(fields) && metadataToShow.includes(label)) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0YWRhdGEuaGVscGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2hlbHBlcnMvbWV0YWRhdGEuaGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sT0FBTyxNQUFNLHNCQUFzQixDQUFDO0FBRTNDLElBQU0sZUFBZSxHQUFHLFVBQUMsS0FBSyxJQUFLLE9BQUEsQ0FBQyxDQUFDLEtBQUssSUFBSSxLQUFLLEtBQUssTUFBTSxDQUFDLEVBQTVCLENBQTRCLENBQUM7O0FBRWhFLElBQU0sTUFBTSxHQUFHLFVBQUMsTUFBYSxJQUFLLE9BQUEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBQyxFQUFPO1FBQUwsWUFBRztJQUFPLE9BQUEsR0FBRyxLQUFLLFFBQVE7QUFBaEIsQ0FBZ0IsQ0FBQyxDQUFDLE1BQU0sRUFBckQsQ0FBcUQsQ0FBQzs7QUFFeEYsSUFBTSxVQUFVLEdBQUcsVUFBQyxNQUFhLElBQUssT0FBQSxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFyQixDQUFxQixDQUFDOztBQUU1RCxJQUFNLE9BQU8sR0FBRyxVQUFDLE1BQWEsRUFBRSxLQUFLO0lBQ25DLElBQU0sV0FBVyxHQUFHLENBQUMsbUJBQW1CLEVBQUUscUJBQXFCLENBQUMsQ0FBQztJQUNqRSxJQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQUMsRUFBTztZQUFMLFlBQUc7UUFBTyxPQUFBLEdBQUcsS0FBSyxPQUFPO0lBQWYsQ0FBZSxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQzlELElBQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEMsSUFBTSxFQUFFLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFDLEVBQU87WUFBTCxZQUFHO1FBQU8sT0FBQSxHQUFHLEtBQUssSUFB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LEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQzt5QkFDdkUsQ0FBQyxDQUFDO3FCQUNKO29CQUNELFVBQVU7aUJBQ1g7cUJBQU0sSUFBSSxjQUFjLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUN2QyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxLQUFBLEVBQUUsS0FBSyxPQUFBLEVBQUUsQ0FBQyxDQUFDO2lCQUM3QjtZQUNILENBQUMsQ0FBQyxDQUFDO1NBQ0o7UUFDRCxPQUFPLE1BQU07YUFDVixNQUFNLENBQUMsVUFBQyxFQUFTO2dCQUFQLGdCQUFLO1lBQU8sT0FBQSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUM7UUFBdkIsQ0FBdUIsQ0FBQzthQUM5QyxHQUFHLENBQUMsVUFBQyxFQUFjO2dCQUFaLFlBQUcsRUFBRSxnQkFBSztZQUFPLE9BQUEsQ0FBQztnQkFDeEIsR0FBRyxLQUFBO2dCQUNILEtBQUssT0FBQTtnQkFDTCxLQUFLLEVBQUUsY0FBYyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7Z0JBQ2xDLEtBQUssRUFBRSxPQUFPLENBQUMsaUJBQWlCLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBSSxJQUFJLFNBQUksR0FBSyxDQUFDLENBQUM7YUFDaEUsQ0FBQztRQUx1QixDQUt2QixDQUFDO2FBQ0YsSUFBSSxDQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSyxPQUFBLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBakIsQ0FBaUIsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGhlbHBlcnMgZnJvbSAnLi4vLi4vY29tbW9uL2hlbHBlcnMnO1xuXG5jb25zdCBtZXRhZGF0YUlzRW1wdHkgPSAodmFsdWUpID0+ICghdmFsdWUgfHwgdmFsdWUgPT09ICdudWxsJyk7XG5cbmNvbnN0IGlzTGluayA9IChmaWVsZHM6IGFueVtdKSA9PiAhIWZpZWxkcy5maWx0ZXIoKHsga2V5IH0pID0+IGtleSA9PT0gJ2lzTGluaycpLmxlbmd0aDtcblxuY29uc3QgaXNSZXBlYXRlciA9IChmaWVsZHM6IGFueVtdKSA9PiBBcnJheS5pc0FycmF5KGZpZWxkcyk7XG5cbmNvbnN0IGdldExpbmsgPSAoZmllbGRzOiBhbnlbXSwgcGF0aHMpID0+IHtcbiAgY29uc3Qgc2NoZWRhVHlwZXMgPSBbJ29nZ2V0dG8tY3VsdHVyYWxlJywgJ2FnZ3JlZ2F6aW9uZS1sb2dpY2EnXTtcbiAgY29uc3QgbGFiZWwgPSBmaWVsZHMuZmluZCgoeyBrZXkgfSkgPT4ga2V5ID09PSAnbGFiZWwnKS52YWx1ZTtcbiAgY29uc3Qgc2x1ZyA9IGhlbHBlcnMuc2x1Z2lmeShsYWJlbCk7XG4gIGNvbnN0IGlkID0gZmllbGRzLmZpbmQoKHsga2V5IH0pID0+IGtleSA9PT0gJ2lkJykudmFsdWU7XG4gIGNvbnN0IHR5cGUgPSBmaWVsZHMuZmluZCgoeyBrZXkgfSkgPT4ga2V5ID09PSAndHlwZScpLnZhbHVlO1xuICBsZXQgYmFzZVBhdGggPSBwYXRocy5lbnRpdGFCYXNlUGF0aDtcbiAgaWYgKHNjaGVkYVR5cGVzLmluY2x1ZGVzKHR5cGUpKSB7XG4gICAgYmFzZVBhdGggPSBwYXRocy5zY2hlZGFCYXNlUGF0aDtcbiAgfVxuICByZXR1cm4gYDxhIGhyZWY9XCIke2Jhc2VQYXRofSR7aWR9LyR7c2x1Z31cIj4ke2xhYmVsfTwvYT5gO1xufTtcblxuY29uc3QgZ2V0UmVwZWF0ZXIgPSAoZmllbGRzOiBhbnlbXSwgbGFiZWxzLCBtZXRhZGF0YVRvU2hvdywgdHlwZSwgcGFyZW50TGFiZWwsIHBhdGhzKSA9PiB7XG4gIGNvbnN0IGh0bWwgPSBbXTtcbiAgZmllbGRzXG4gICAgLmZpbHRlcigoeyBmaWVsZHM6IHN1YkZpZWxkcyB9KSA9PiBzdWJGaWVsZHMpXG4gICAgLmZvckVhY2goKHsgZmllbGRzOiBzdWJGaWVsZHMgfSkgPT4ge1xuICAgICAgY29uc3Qgc3ViSHRtbCA9IFtdO1xuICAgICAgaWYgKGlzTGluayhzdWJGaWVsZHMpKSB7XG4gICAgICAgIHN1Ykh0bWwucHVzaCgnPGRpdj4nKTtcbiAgICAgICAgc3ViSHRtbC5wdXNoKGA8ZGQ+JHtnZXRMaW5rKHN1YkZpZWxkcywgcGF0aHMpfTwvZGQ+YCk7XG4gICAgICAgIHN1Ykh0bWwucHVzaCgnPC9kaXY+Jyk7XG4gICAgICB9XG4gICAgICBzdWJGaWVsZHNcbiAgICAgICAgLmZpbHRlcigoeyBrZXkgfSkgPT4ge1xuICAgICAgICAgIGlmIChpc0xpbmsoc3ViRmllbGRzKSkge1xuICAgICAgICAgICAgcmV0dXJuICEoWydsYWJlbCcsICdpZCcsICd0eXBlJywgJ2lzTGluayddLmluY2x1ZGVzKGtleSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSlcbiAgICAgICAgLmZpbHRlcigoeyBrZXksIHZhbHVlIH0pID0+IG1ldGFkYXRhVG9TaG93LmluY2x1ZGVzKGAke3BhcmVudExhYmVsfS4ke2tleX1gKSAmJiAhbWV0YWRhdGFJc0VtcHR5KHZhbHVlKSlcbiAgICAgICAgLm1hcCgoeyBrZXksIHZhbHVlIH0pID0+ICh7XG4gICAgICAgICAga2V5LFxuICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgIG9yZGVyOiBtZXRhZGF0YVRvU2hvdy5pbmRleE9mKGAke3BhcmVudExhYmVsfS4ke2tleX1gKSxcbiAgICAgICAgICBsYWJlbDogaGVscGVycy5wcmV0dGlmeVNuYWtlQ2FzZShrZXksIGxhYmVsc1tgJHt0eXBlfS4ke3BhcmVudExhYmVsfS4ke2tleX1gXSlcbiAgICAgICAgfSkpXG4gICAgICAgIC5zb3J0KChhLCBiKSA9PiBhLm9yZGVyIC0gYi5vcmRlcilcbiAgICAgICAgLmZvckVhY2goKHsgbGFiZWwsIHZhbHVlIH0pID0+IHtcbiAgICAgICAgICBzdWJIdG1sLnB1c2goJzxkaXY+Jyk7XG4gICAgICAgICAgc3ViSHRtbC5wdXNoKGA8ZHQ+JHtsYWJlbH08L2R0PmApO1xuICAgICAgICAgIHN1Ykh0bWwucHVzaChgPGRkPiR7dmFsdWV9PC9kZD5gKTtcbiAgICAgICAgICBzdWJIdG1sLnB1c2goJzwvZGl2PicpO1xuICAgICAgICB9KTtcblxuICAgICAgaWYgKHN1Ykh0bWwubGVuZ3RoKSB7XG4gICAgICAgIGh0bWwucHVzaChgPGRsPiR7c3ViSHRtbC5qb2luKCcnKX08L2RsPmApO1xuICAgICAgfVxuICAgIH0pO1xuICByZXR1cm4gaHRtbC5sZW5ndGggPyBodG1sLmpvaW4oJycpIDogbnVsbDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbm9ybWFsaXplOiAoe1xuICAgIGZpZWxkczogZGF0YSxcbiAgICBwYXRocyxcbiAgICBsYWJlbHMsXG4gICAgbWV0YWRhdGFUb1Nob3csXG4gICAgdHlwZVxuICB9KSA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICAgIGRhdGEuZm9yRWFjaCgoe1xuICAgICAgICBrZXksIHZhbHVlLCBsYWJlbCwgZmllbGRzXG4gICAgICB9KSA9PiB7XG4gICAgICAgIC8vIGxpbmsgJiByZXBlYXRlciBjb250cm9sXG4gICAgICAgIGlmIChmaWVsZHMgJiYgQXJyYXkuaXNBcnJheShmaWVsZHMpKSB7XG4gICAgICAgICAgaWYgKGlzTGluayhmaWVsZHMpKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7IGtleTogbGFiZWwsIHZhbHVlOiBnZXRMaW5rKGZpZWxkcywgcGF0aHMpIH0pO1xuICAgICAgICAgIH0gZWxzZSBpZiAoaXNSZXBlYXRlcihmaWVsZHMpICYmIG1ldGFkYXRhVG9TaG93LmluY2x1ZGVzKGxhYmVsKSkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICBrZXk6IGxhYmVsLFxuICAgICAgICAgICAgICB2YWx1ZTogZ2V0UmVwZWF0ZXIoZmllbGRzLCBsYWJlbHMsIG1ldGFkYXRhVG9TaG93LCB0eXBlLCBsYWJlbCwgcGF0aHMpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gZGVmYXVsdFxuICAgICAgICB9IGVsc2UgaWYgKG1ldGFkYXRhVG9TaG93LmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgICByZXN1bHQucHVzaCh7IGtleSwgdmFsdWUgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gICAgICAuZmlsdGVyKCh7IHZhbHVlIH0pID0+ICFtZXRhZGF0YUlzRW1wdHkodmFsdWUpKVxuICAgICAgLm1hcCgoeyBrZXksIHZhbHVlIH0pID0+ICh7XG4gICAgICAgIGtleSxcbiAgICAgICAgdmFsdWUsXG4gICAgICAgIG9yZGVyOiBtZXRhZGF0YVRvU2hvdy5pbmRleE9mKGtleSksXG4gICAgICAgIGxhYmVsOiBoZWxwZXJzLnByZXR0aWZ5U25ha2VDYXNlKGtleSwgbGFiZWxzW2Ake3R5cGV9LiR7a2V5fWBdKSxcbiAgICAgIH0pKVxuICAgICAgLnNvcnQoKGEsIGIpID0+IGEub3JkZXIgLSBiLm9yZGVyKTtcbiAgfVxufTtcbiJdfQ==