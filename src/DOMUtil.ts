class DOMUtil {
    public static getBoundingClientRect(element: HTMLElement): DOMRect {
        if (window == undefined) {
            throw new Error('window undefined!');
        }
        const computedStyle = getComputedStyle(element);
        // 如果当前是可见的，那直接计算边界
        if (computedStyle.display != 'none') {
            return element.getBoundingClientRect();
        }
        // 将element的位置移出到屏幕外,并令其显示
        let style: Record<string, string> = {
            display: 'block',
            transition: 'none', // 关闭所有的动画效果
            visibility: 'hidden',
        };
        for (let key in style) {
            // 备份旧的属性
            let oldStyle = element.style.getPropertyValue(key);
            element.style.setProperty(key, style[key], 'important');
            style[key] = oldStyle;
        }
        let rect = element.getBoundingClientRect();
        // 还原现场
        for (let key in style) {
            element.style.setProperty(key, style[key]);
        }
        return rect;
    }
}

export default DOMUtil;

export { DOMUtil };
