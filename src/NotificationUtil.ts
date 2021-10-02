class NotificationUtil {
    /**
     * 请求权限
     * @returns 返回Promise<NotificationPermission> 对象
     */
    public static async request(): Promise<NotificationPermission> {
        if (window == undefined || window.Notification == undefined) {
            console.error('The browser does not support Notification');
        }
        return new Promise(async (resolve) => {
            if (Notification.permission === 'default') await Notification.requestPermission();
            resolve(Notification.permission);
        });
    }

    /**
     * 发送通知
     * @param title 通知的标题
     * @param options 通知选项
     * @returns 如果成功发送通知，则显示正常通知对象，否则返回undefined
     */
    public static send(title: string, options?: NotificationOptions): Notification | undefined {
        if (window == undefined || window.Notification == undefined) return undefined;
        NotificationUtil.request();
        if (Notification.permission == 'granted') {
            return new Notification(title, options);
        }
        return undefined;
    }
}

export { NotificationUtil };

export default NotificationUtil;
