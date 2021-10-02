class DateUtil {
    /**
     * 格式化日期格式
     * @param date 要格式化的日期
     * @param format 格式化的格式，例如yyyy-MM-dd HH:mm:ss
     * @returns 返回格式化后的字符串
     */
    public static format(date: Date, format?: string): string {
        if (format == undefined) {
            // 设置默认的格式
            format = 'yyyy-MM-dd HH:mm:ss';
        }
        const options: Record<string, number> = {
            'M+': date.getMonth() + 1,
            'd+': date.getDate(),
            'H+': date.getHours(),
            'h+': date.getHours(),
            'm+': date.getMinutes(),
            's+': date.getSeconds(),
            'q+': Math.floor((date.getMonth() + 3) / 3),
            S: date.getMilliseconds(),
        };
        if (/(y+)/.test(format)) {
            format = format.replace(RegExp.$1, `${date.getFullYear()}`.substr(4 - RegExp.$1.length));
        }
        for (let key in options) {
            if (new RegExp(`(${key})`).test(format)) {
                format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? `${options[key]}` : `00${options[key]}`.substr(`${options[key]}`.length));
            }
        }
        return format;
    }
    /**
     * 是否是闰年
     * @param date 日期
     * @returns 如果是，则返回true，否则返回false
     */
    public static isLeapYear(date: Date): boolean {
        const year = date.getFullYear();
        return year % 400 == 0 || (year % 4 == 0 && year % 100 != 0);
    }
    /**
     * 日期添加天数
     * @param date 日期
     * @param day 距离的天数
     * @returns 新的日期
     */
    public static addDay(date: Date, day: number): Date {
        return new Date(date.setTime(date.getTime() + day * 24 * 60 * 60 * 1000));
    }
    /**
     * 日期添加周数
     * @param date 日期
     * @param week 周
     * @returns 新的日期
     */
    public static addWeek(date: Date, week: number): Date {
        return DateUtil.addDay(date, 7 * week);
    }

    /**
     * 添加月，边缘情况：如果新的月份日期比旧的月份日期少，则为当前月份最后一天
     * @param date 日期
     * @param month 月
     * @returns 新的日期
     */
    public static addMonth(date: Date, month: number): Date {
        let day = date.getDate();
        date.setDate(1);
        date.setMonth(date.getMonth() + month + 1);
        date = DateUtil.addDay(date, -1);
        if (date.getDate() > day) {
            date.setDate(day);
        }
        return new Date(date);
    }
    /**
     * 添加年
     * @param date 日期
     * @param year 年
     * @returns 新的日期
     */
    public static addYear(date: Date, year: number): Date {
        return new Date(date.setFullYear(date.getFullYear() + year));
    }
}

export default DateUtil;

export { DateUtil };
