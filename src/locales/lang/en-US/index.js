
import enLocale from 'iview/src/locale/lang/en-US';

const enLang = {
	desc:'Project templates based on vue and iview',
	user: {
		login: {
			passwordError:'password error!',
			account:'account is required!'
		}
    }
}

const mergeEN = Object.assign(enLocale, enLang);


// console.info(mergeEN);

export default mergeEN;