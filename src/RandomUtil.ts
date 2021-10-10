class RandomUtil {
    /**
     * 生成全局唯一标识，使用了URL.createObjectURL方法
     * @returns 32位随机码
     */
    public static uuid(): string {
        let temp_url = URL.createObjectURL(new Blob());
        let uuid: string | undefined = temp_url.toString();
        URL.revokeObjectURL(temp_url);
        uuid = uuid.split(/[:/]/g).pop();
        if (uuid != undefined) {
            return uuid;
        }
        return '00000000-0000-0000-0000-000000000000';
    }

    /**
     * 生成随机密码
     * @param length 密码的长度
     * @returns 返回一个包含大小写数字以及特殊符号的密码
     */
    public static password(length?: number): string {
        if (length === undefined) {
            length = 16;
        }
        const seed = '1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM!@_';
        let password: Array<string> = [];
        for (let i = 0; i < length; ++i) {
            password.push(seed[Math.floor(Math.random() * seed.length)]);
        }
        return password.join('');
    }
}

export { RandomUtil };
export default { RandomUtil };
