<template>
	<div class="z-select-cell-container">
		<div class="mui-scroll-wrapper" id='z-slide-panel'>
			<div class="mui-scroll">
				<ul class="mui-table-view mui-table-view-radio">
					<li class="mui-table-view-cell mui-media" v-for='(item, ind) in list' :key='ind'>
						<a href='javascript:;' class="mui-navigate-right" @tap='onSingle($event, item)'>
							<img class="mui-media-object mr10" :class='{"radius50": opt.isRadius}' :src="item.image" v-if='opt.showAvatar && item.image'>
							<div class="mui-media-object base-bg mr10" :class='{"radius50": opt.isRadius}' v-if='opt.showAvatar && !item.image'>
								{{item.title.charAt(0)}}
							</div>
							<div class="mui-media-body">
								<div class="mui-ellipsis title">{{item.title}}</div>
								<p class="mui-ellipsis desc">{{item.desc}}</p>
							</div>
						</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		options: {
			type: Object,
			default: function() { return {} }
		},
		list: Array
	},
	computed: {
		opt() {
			let opt = {
				showAvatar: true,
				isRadius: true,
			}
			return mui.extend(true, {}, opt, this.options)
		}
	},
	mounted () {
		mui('#z-slide-panel').scroll()

		window.addEventListener('tap', e => {
			if(e.target.className == 'mui-backdrop mui-active') {
				e.stopPropagation()
				this.clear()
				this.$emit('onPopover', e)
			}
		},true)
	},
	methods: {
    onSingle(e, item) {
			this.$emit('onSingle', item)
		},
		clear() {
			mui('.z-select-cell-container .mui-table-view-cell').each((i, c) => {
				if(c.classList.contains('mui-selected')) {
					c.classList.remove('mui-selected')
				}
			})
		}
	}
}
</script>

<style lang='scss'>
.z-select-cell-container {
	.mb50 { margin-bottom: 50px; }
	.mui-checkbox.mui-left input[type=checkbox] {
		left: 15px;
		top: 50%;
		transform: translate3d(0,-50%, 0);
	}
	.mui-checkbox.mui-left label {
		padding-left: 0;
		padding-right: 0;
	}
	.mui-table-view .mui-media-object {
		width: 42px;
		float: left;
		text-align: center;
		color: #fff;
		font-size: 2rem;
	}
	.mui-media-body {
		.title {
			font-size: 1.6rem;
		}
		.desc {
			font-size: 1.2rem;
		}
	}
}
</style>