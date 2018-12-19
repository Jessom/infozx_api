import nothingCom from '../components/NothingComponent.vue'

export default function(Vue, options) {
	const VueNothing = Vue.extend(nothingCom);
	let nothing = null;

	function $nothing(ops = {}) {
		return new Promise((resolve, reject) => {
			if(!nothing) {
				nothing = new VueNothing();
				nothing.$mount();
				document.querySelector(options.container || 'body').appendChild(nothing.$el);
				nothing.open();
				nothing.msg = ops.msg;
				resolve();
			}
		})
	};
	$nothing.close = () => {
		return new Promise((resolve, reject) => {
			if(!nothing || !nothing.show) {
				resolve();
				return;
			}
			nothing.close();
		})
	}
	return $nothing;
}