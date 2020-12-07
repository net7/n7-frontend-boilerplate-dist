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
var getRepeater = function (fields, labels, metadataToShow, type, parentLabel) {
    var html = [];
    fields
        .filter(function (_a) {
        var subFields = _a.fields;
        return subFields;
    })
        .forEach(function (_a) {
        var subFields = _a.fields;
        var subHtml = [];
        subFields
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
            subHtml.push("<div>");
            subHtml.push("<dt>" + label + "</dt>");
            subHtml.push("<dd>" + value + "</dd>");
            subHtml.push("</div>");
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
                            value: getRepeater(fields, labels, metadataToShow, type, label)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0YWRhdGEuaGVscGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2hlbHBlcnMvbWV0YWRhdGEuaGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sT0FBTyxNQUFNLHNCQUFzQixDQUFDO0FBRTNDLElBQU0sZUFBZSxHQUFHLFVBQUMsS0FBSyxJQUFLLE9BQUEsQ0FBQyxDQUFDLEtBQUssSUFBSSxLQUFLLEtBQUssTUFBTSxDQUFDLEVBQTVCLENBQTRCLENBQUM7O0FBRWhFLElBQU0sTUFBTSxHQUFHLFVBQUMsTUFBYSxJQUFLLE9BQUEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBQyxFQUFPO1FBQUwsWUFBRztJQUFPLE9BQUEsR0FBRyxLQUFLLFFBQVE7QUFBaEIsQ0FBZ0IsQ0FBQyxDQUFDLE1BQU0sRUFBckQsQ0FBcUQsQ0FBQzs7QUFFeEYsSUFBTSxVQUFVLEdBQUcsVUFBQyxNQUFhLElBQUssT0FBQSxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFyQixDQUFxQixDQUFDOztBQUU1RCxJQUFNLE9BQU8sR0FBRyxVQUFDLE1BQWEsRUFBRSxLQUFLO0lBQ25DLElBQU0sV0FBVyxHQUFHLENBQUMsbUJBQW1CLEVBQUUscUJBQXFCLENBQUMsQ0FBQztJQUNqRSxJQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQUMsRUFBTztZQUFMLFlBQUc7UUFBTyxPQUFBLEdBQUcsS0FBSyxPQUFPO0lBQWYsQ0FBZSxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQzlELElBQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEMsSUFBTSxFQUFFLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFDLEVBQU87WUFBTCxZQUFHO1FBQU8sT0FBQSxHQUFHLEtBQUssSUFB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LEtBQUssRUFBRSxPQUFPLENBQUMsaUJBQWlCLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBSSxJQUFJLFNBQUksR0FBSyxDQUFDLENBQUM7YUFDaEUsQ0FBQztRQUx1QixDQUt2QixDQUFDO2FBQ0YsSUFBSSxDQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSyxPQUFBLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBakIsQ0FBaUIsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGhlbHBlcnMgZnJvbSAnLi4vLi4vY29tbW9uL2hlbHBlcnMnO1xyXG5cclxuY29uc3QgbWV0YWRhdGFJc0VtcHR5ID0gKHZhbHVlKSA9PiAoIXZhbHVlIHx8IHZhbHVlID09PSAnbnVsbCcpO1xyXG5cclxuY29uc3QgaXNMaW5rID0gKGZpZWxkczogYW55W10pID0+ICEhZmllbGRzLmZpbHRlcigoeyBrZXkgfSkgPT4ga2V5ID09PSAnaXNMaW5rJykubGVuZ3RoO1xyXG5cclxuY29uc3QgaXNSZXBlYXRlciA9IChmaWVsZHM6IGFueVtdKSA9PiBBcnJheS5pc0FycmF5KGZpZWxkcyk7XHJcblxyXG5jb25zdCBnZXRMaW5rID0gKGZpZWxkczogYW55W10sIHBhdGhzKSA9PiB7XHJcbiAgY29uc3Qgc2NoZWRhVHlwZXMgPSBbJ29nZ2V0dG8tY3VsdHVyYWxlJywgJ2FnZ3JlZ2F6aW9uZS1sb2dpY2EnXTtcclxuICBjb25zdCBsYWJlbCA9IGZpZWxkcy5maW5kKCh7IGtleSB9KSA9PiBrZXkgPT09ICdsYWJlbCcpLnZhbHVlO1xyXG4gIGNvbnN0IHNsdWcgPSBoZWxwZXJzLnNsdWdpZnkobGFiZWwpO1xyXG4gIGNvbnN0IGlkID0gZmllbGRzLmZpbmQoKHsga2V5IH0pID0+IGtleSA9PT0gJ2lkJykudmFsdWU7XHJcbiAgY29uc3QgdHlwZSA9IGZpZWxkcy5maW5kKCh7IGtleSB9KSA9PiBrZXkgPT09ICd0eXBlJykudmFsdWU7XHJcbiAgbGV0IGJhc2VQYXRoID0gcGF0aHMuZW50aXRhQmFzZVBhdGg7XHJcbiAgaWYgKHNjaGVkYVR5cGVzLmluY2x1ZGVzKHR5cGUpKSB7XHJcbiAgICBiYXNlUGF0aCA9IHBhdGhzLnNjaGVkYUJhc2VQYXRoO1xyXG4gIH1cclxuICByZXR1cm4gYDxhIGhyZWY9XCIke2Jhc2VQYXRofSR7aWR9LyR7c2x1Z31cIj4ke2xhYmVsfTwvYT5gO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0UmVwZWF0ZXIgPSAoZmllbGRzOiBhbnlbXSwgbGFiZWxzLCBtZXRhZGF0YVRvU2hvdywgdHlwZSwgcGFyZW50TGFiZWwpID0+IHtcclxuICBjb25zdCBodG1sID0gW107XHJcbiAgZmllbGRzXHJcbiAgICAuZmlsdGVyKCh7IGZpZWxkczogc3ViRmllbGRzIH0pID0+IHN1YkZpZWxkcylcclxuICAgIC5mb3JFYWNoKCh7IGZpZWxkczogc3ViRmllbGRzIH0pID0+IHtcclxuICAgICAgY29uc3Qgc3ViSHRtbCA9IFtdO1xyXG4gICAgICBzdWJGaWVsZHNcclxuICAgICAgICAuZmlsdGVyKCh7IGtleSwgdmFsdWUgfSkgPT4gbWV0YWRhdGFUb1Nob3cuaW5jbHVkZXMoYCR7cGFyZW50TGFiZWx9LiR7a2V5fWApICYmICFtZXRhZGF0YUlzRW1wdHkodmFsdWUpKVxyXG4gICAgICAgIC5tYXAoKHsga2V5LCB2YWx1ZSB9KSA9PiAoe1xyXG4gICAgICAgICAga2V5LFxyXG4gICAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgICBvcmRlcjogbWV0YWRhdGFUb1Nob3cuaW5kZXhPZihgJHtwYXJlbnRMYWJlbH0uJHtrZXl9YCksXHJcbiAgICAgICAgICBsYWJlbDogaGVscGVycy5wcmV0dGlmeVNuYWtlQ2FzZShrZXksIGxhYmVsc1tgJHt0eXBlfS4ke3BhcmVudExhYmVsfS4ke2tleX1gXSlcclxuICAgICAgICB9KSlcclxuICAgICAgICAuc29ydCgoYSwgYikgPT4gYS5vcmRlciAtIGIub3JkZXIpXHJcbiAgICAgICAgLmZvckVhY2goKHsgbGFiZWwsIHZhbHVlIH0pID0+IHtcclxuICAgICAgICAgIHN1Ykh0bWwucHVzaChgPGRpdj5gKTtcclxuICAgICAgICAgIHN1Ykh0bWwucHVzaChgPGR0PiR7bGFiZWx9PC9kdD5gKTtcclxuICAgICAgICAgIHN1Ykh0bWwucHVzaChgPGRkPiR7dmFsdWV9PC9kZD5gKTtcclxuICAgICAgICAgIHN1Ykh0bWwucHVzaChgPC9kaXY+YCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIGlmIChzdWJIdG1sLmxlbmd0aCkge1xyXG4gICAgICAgIGh0bWwucHVzaChgPGRsPiR7c3ViSHRtbC5qb2luKCcnKX08L2RsPmApO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICByZXR1cm4gaHRtbC5sZW5ndGggPyBodG1sLmpvaW4oJycpIDogbnVsbDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBub3JtYWxpemU6ICh7XHJcbiAgICBmaWVsZHM6IGRhdGEsXHJcbiAgICBwYXRocyxcclxuICAgIGxhYmVscyxcclxuICAgIG1ldGFkYXRhVG9TaG93LFxyXG4gICAgdHlwZVxyXG4gIH0pID0+IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcclxuICAgICAgZGF0YS5mb3JFYWNoKCh7XHJcbiAgICAgICAga2V5LCB2YWx1ZSwgbGFiZWwsIGZpZWxkc1xyXG4gICAgICB9KSA9PiB7XHJcbiAgICAgICAgLy8gbGluayAmIHJlcGVhdGVyIGNvbnRyb2xcclxuICAgICAgICBpZiAoZmllbGRzICYmIEFycmF5LmlzQXJyYXkoZmllbGRzKSkge1xyXG4gICAgICAgICAgaWYgKGlzTGluayhmaWVsZHMpKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHsga2V5OiBsYWJlbCwgdmFsdWU6IGdldExpbmsoZmllbGRzLCBwYXRocykgfSk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGlzUmVwZWF0ZXIoZmllbGRzKSkge1xyXG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XHJcbiAgICAgICAgICAgICAga2V5OiBsYWJlbCxcclxuICAgICAgICAgICAgICB2YWx1ZTogZ2V0UmVwZWF0ZXIoZmllbGRzLCBsYWJlbHMsIG1ldGFkYXRhVG9TaG93LCB0eXBlLCBsYWJlbClcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAvLyBkZWZhdWx0XHJcbiAgICAgICAgfSBlbHNlIGlmIChtZXRhZGF0YVRvU2hvdy5pbmNsdWRlcyhrZXkpKSB7XHJcbiAgICAgICAgICByZXN1bHQucHVzaCh7IGtleSwgdmFsdWUgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHRcclxuICAgICAgLmZpbHRlcigoeyB2YWx1ZSB9KSA9PiAhbWV0YWRhdGFJc0VtcHR5KHZhbHVlKSlcclxuICAgICAgLm1hcCgoeyBrZXksIHZhbHVlIH0pID0+ICh7XHJcbiAgICAgICAga2V5LFxyXG4gICAgICAgIHZhbHVlLFxyXG4gICAgICAgIG9yZGVyOiBtZXRhZGF0YVRvU2hvdy5pbmRleE9mKGtleSksXHJcbiAgICAgICAgbGFiZWw6IGhlbHBlcnMucHJldHRpZnlTbmFrZUNhc2Uoa2V5LCBsYWJlbHNbYCR7dHlwZX0uJHtrZXl9YF0pLFxyXG4gICAgICB9KSlcclxuICAgICAgLnNvcnQoKGEsIGIpID0+IGEub3JkZXIgLSBiLm9yZGVyKTtcclxuICB9XHJcbn07XHJcbiJdfQ==