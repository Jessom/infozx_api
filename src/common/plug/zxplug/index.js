import load from './js/loading'
import nothing from './js/nothing'

export default {
	install(Vue, options={}) {
		Vue.prototype.$loading = load(Vue, options)
		Vue.prototype.$nothing = nothing(Vue, options)
	}
}