<template>
	<SidePanel :options='sopt' class='z-choise-mark'>
		<basic-head :options='hopt' class='z-choise-header' />
		<!-- <div class="mui-content"> -->
			<div class="mui-scroll-wrapper z-scroll-wrap">
				<div class="mui-scroll">
					<div class="z-mark-wrap">
						<div class="z-mark-item" v-for='(item, ind) in list' :key='ind'>
							<div class="z-mark-head border-bottom">{{item.title}}</div>
							<div class="z-mark-body">
								<span
									class="z-item"
									:class='{"active": item.active==i.title || i.active}'
									:style='{width: "calc(90% / "+total+")"}'
									v-for='(i, inde) in item.list'
									:key='inde'
									@tap='onItem($event, item, i)'>
									{{i.title}}
									<i class="iconfont icon-jiaobiaoxuanzhongzhuangtai" v-if='item.active==i.title || i.active'></i>
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			<basic-button :options='bopt' @onBasic='onBasic' />
		<!-- </div> -->
	</SidePanel>
</template>

<script>
import BasicHead from '@/components/Header/BasicHead.vue'
import SidePanel from '@/components/Other/SidePanel.vue'
import BasicButton from '@/components/Buttons/BasicButton.vue'
export default {
	props: {
		total: {
			type: Number,
			default: 4
		},
		list: {				// 渲染数据
			type: Array
		},
		bhopt: {					// head组件配置
			type: Object,
			default: function() { return {} }
		},
		spopt: {					// head组件配置
			type: Object,
			default: function() { return {} }
		},
		bbopt: {					// 底部按钮配置
			type: Object,
			default: function() { return {} }
		}
	},
	methods: {
		onItem(e, p, i) {
			if(p.multi) {
				// 多选
				i.active = !i.active
			} else {
				// 单选
				if(e.currentTarget.classList.contains('active')) {
					p.active = ''
					return
				}
				p.active = i.title
			}
		},
		onBasic(obj) {
			let result = []
			for(let item of this.list) {
				if(item.multi) {
					let actives = []
					item.list.forEach(c => {
						if(c.active) {
							actives.push(c)
						}
					})
					result.push({
						choise: item,
						active: actives
					})
				} else {
					item.list.forEach(c => {
						if(c.title === item.active) {
							result.push({
								choise: item,
								active: c
							})
						}
					})
				}
			}

			// mui(`#${this.sopt.id}`).popover('toggle')
			this.$emit('onSuccess', result)
		}
	},
	mounted() {
		if(immersed > 0) {
      let header = document.querySelector('.z-choise-header #header')
      header && (header.style.height = 44 + immersed + 'px')
      header && (header.style.paddingTop = immersed + 'px')
      let content = document.querySelector('.z-mark-wrap')
      content && (content.style.paddingTop= immersed +'px')
    }

		mui('.z-scroll-wrap').scroll();
	},
	computed: {
		hopt() {
			let hopt = {
				title: '选择',
				wechat: true,
				isBack: false,
				btns: [{
					title: '取消',
					event: () => { mui(`#${this.sopt.id}`).popover('toggle') }
				}]
			}
			return mui.extend(true, {}, hopt, this.bhopt)
		},
		sopt() {
			let sopt = {
				id: 'choise-panel',
				style: 'bottom'
			}
			return mui.extend({}, sopt, this.spopt)
		},
		bopt() {
			let bopt = {
				list: [{title: '确定'}]
			}
			return mui.extend(true, {}, bopt, this.bbopt)
		}
	},
	components: {
		SidePanel,
		BasicHead,
		BasicButton
	}
}
</script>

<style lang='scss'>
@import 'static/common/scss/_variable.scss';
.z-choise-mark {
	&.z-slide-slip-container {
		top: 0;
		background-color: #efeff4;
	}
	&.mui-popover .mui-bar-nav {
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}
	.btns-wrap {
		text-align: left !important;
	}
	/* .mui-content {
		background-color: transparent;
	} */
	.z-mark-wrap {
		.z-mark-item {
			background-color: #fff;
			margin-bottom: 10px;
			.z-mark-head, .z-mark-body {
				padding: 10px 15px;
			}
			.z-item {
				display: inline-block;
				/* width: 20%; */
				width: calc(90% / 4);
				line-height: 30px;
				text-align: center;
				border: 1px solid #e6e6e6;
				border-radius: 3px;
				margin: calc(10% / 8);
				font-size: 1.2rem;
				color: #616161;
				position: relative;
				.iconfont {
					position: absolute;
					right: -1px;
					top: -8px;
				}
				&.active {
					color: $baseColor;
					border-color: $baseColor;
				}
			}
		}
	}

	.border-bottom::after {
		left: 0;
	}
	.mui-scroll-wrapper {
		top: 44px;
		padding-bottom: 50px;
	}
	.z-head {
		background-color: #fff;
		.mui-title, a { color: $baseColor; }
	}
}
</style>