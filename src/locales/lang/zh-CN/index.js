
import zhLocale from 'iview/src/locale/lang/zh-CN';
import pay from './pay';


// console.info(zhLocale);

const zhLang = {
	pay,
	desc:'基于vue和iview的项目模板',
	user: {
		login: {
			passwordError:'密码错误!',
			account:'账号不能为空!'
		}
    },
    admin: {
    	aa:'vv',
    	bb:'bb'
    }
}

const mergeZH = Object.assign(zhLocale, zhLang);


console.info(mergeZH);

export default mergeZH;