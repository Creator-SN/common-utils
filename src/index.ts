import { DOMUtil } from './DOMUtil';
import { SystemUtil } from './SystemUtil';
import { CookieUtil } from './CookieUtil';

CookieUtil.set('test',"test2")
console.log(CookieUtil.get('test'))

export { DOMUtil, SystemUtil, CookieUtil };

export default {
    CookieUtil,
    DOMUtil,
    SystemUtil,
};
