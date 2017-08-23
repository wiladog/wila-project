import * as actions from './actions'
import * as getters from './getters'

import login from './modules/login'
import articles from './modules/articles'

// import createLogger from '../../../src/plugins/logger'


const debug = process.env.NODE_ENV !== 'production'

const StoreConstructorOptions = {
	actions,
  	getters,
  	modules: {
    	login,
    	articles
  	},
  	strict: debug,
  	plugins: []
  	// plugins: debug ? [createLogger()] : []

}

export default StoreConstructorOptions;
