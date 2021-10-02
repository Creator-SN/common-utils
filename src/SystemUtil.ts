type SystemTheme = 'light' | 'dark';

class SystemUtil {
    /**
     * 获取系统的主题，判断是light还是dark
     * @returns 系统的主题
     */
    public static getTheme(): SystemTheme {
        if (window == undefined) {
            throw new Error('window undefined!');
        }
        const media = window.matchMedia('(prefers-color-scheme: dark)');
        if (media.matches) {
            return 'dark';
        }
        return 'light';
    }
    /**
     * 当系统主题改变时，触发事件
     * @param handler 句柄函数
     */
    public static onThemeChange(handler: (evt?: MediaQueryListEvent) => any) {
        const media = window.matchMedia('(prefers-color-scheme: dark)');
        media.addEventListener('change', handler);
    }

    /**
     * 取消移出某个之前设置过的事件，注意必须是同一个函数
     * @param handler 句柄函数
     */
    public static removeThemeChange(handler: (evt?: MediaQueryListEvent) => any) {
        const media = window.matchMedia('(prefers-color-scheme: dark)');
        media.removeEventListener('change', handler);
    }

    /**
     * 获取用户系统语言
     * @returns 系统的语言
     */
    public static getLanguage(): string {
        if (navigator == undefined) {
            throw new Error('navigator undefined!');
        }
        return navigator.language;
    }
}

export default SystemUtil;
export { SystemUtil };
