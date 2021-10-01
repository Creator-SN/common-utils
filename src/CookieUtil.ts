class CookieUtil {
    /**
     * 编码，转换分隔符=和;
     * @param key 原始值
     * @returns 编码后的值
     */
    private static encode(key: string): string {
        return key.replace(/#/g, '#3').replace(/;/g, '#1').replace(/=/g, '#2');
    }
    /**
     * 解码，将=和;恢复为原始值
     * @param key 编码后的值
     * @returns 编码前的值
     */
    private static decode(key: string): string {
        return key.replace(/#2/g, '=').replace(/#1/g, ';').replace(/#3/g, '#');
    }
    /**
     * 设置cookie
     * @param key 键
     * @param value 值
     * @param expired 过期时间
     */
    public static set(key: string, value: any, expired?: Date) {
        // 由于cookie使用了等号做间隔以及;做间隔
        // 因此需要对=和；进行转码
        key = CookieUtil.encode(key);
        value = CookieUtil.encode(JSON.stringify(value));
        let cookie = `${key}=${value};`;
        if (expired != undefined) {
            cookie += `expires=${expired.toUTCString()}`;
        }
        document.cookie = cookie;
    }
    /**
     * 获取已存取的值，如果不存在，则返回undefined 
     * @param key 键
     * @returns 值
     */
    public static get(key: string): any | undefined {
        key = CookieUtil.encode(key);
        let cookies = document.cookie.split('; ');
        for (let cookie of cookies) {
            if (cookie.startsWith(`${key}=`)) {
                return JSON.parse(CookieUtil.decode(cookie.substr(`${key}=`.length)));
            }
        }
        return undefined;
    }
}

export default CookieUtil;
export { CookieUtil };
