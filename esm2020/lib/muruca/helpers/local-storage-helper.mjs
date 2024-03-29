export default {
    set(key, value) {
        localStorage.setItem(key, value);
    },
    get(key) {
        return localStorage.getItem(key);
    },
    remove(key) {
        localStorage.removeItem(key);
    },
    toggle(key, value) {
        if (!this.get(key)) {
            this.set(key, value);
        }
        else {
            this.remove(key);
        }
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtc3RvcmFnZS1oZWxwZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uNy1ib2lsZXJwbGF0ZS1saWIvc3JjL2xpYi9tdXJ1Y2EvaGVscGVycy9sb2NhbC1zdG9yYWdlLWhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxlQUFlO0lBQ2IsR0FBRyxDQUFDLEdBQVcsRUFBRSxLQUFVO1FBQ3pCLFlBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFDRCxHQUFHLENBQUMsR0FBVztRQUNiLE9BQU8sWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBQ0QsTUFBTSxDQUFDLEdBQVc7UUFDaEIsWUFBWSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBQ0QsTUFBTSxDQUFDLEdBQVcsRUFBRSxLQUFVO1FBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ3RCO2FBQU07WUFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2xCO0lBQ0gsQ0FBQztDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XHJcbiAgc2V0KGtleTogc3RyaW5nLCB2YWx1ZTogYW55KTogdm9pZCB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIHZhbHVlKTtcclxuICB9LFxyXG4gIGdldChrZXk6IHN0cmluZyk6IGFueSB7XHJcbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcclxuICB9LFxyXG4gIHJlbW92ZShrZXk6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcclxuICB9LFxyXG4gIHRvZ2dsZShrZXk6IHN0cmluZywgdmFsdWU6IGFueSk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmdldChrZXkpKSB7XHJcbiAgICAgIHRoaXMuc2V0KGtleSwgdmFsdWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5yZW1vdmUoa2V5KTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcbiJdfQ==