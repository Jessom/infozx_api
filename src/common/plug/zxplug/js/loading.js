import LoadingComponent from '../components/LoadingComponent.vue'

export default function(Vue, options) {
	const VueLoading = Vue.extend(LoadingComponent);
	let loading = null;

	function $loading(ops={}) {
		return new Promise((resolve, reject) => {
			if(!loading) {
				loading = new VueLoading();
				loading.$mount();
				document.querySelector(options.container || 'body').appendChild(loading.$el);
				loading.open();
				loading.msg = ops.msg;
				loading.mask = ops.mask || false;
				loading.type = ops.type || 'circle';
				resolve();
			} else {
				loading.open();
			}
		})
	};

	$loading.close = () => {
		return new Promise((resolve, reject) => {
			if(!loading || !loading.show) {
				resolve();
				return;
			}
			loading.close();
		})
	}
	return $loading;
}