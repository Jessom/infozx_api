<template>
	<div class="avatar-head-container z-avatar">
		<head-cell
      :options='opt' 
      v-if='opt.showHead'
      @onCellMenuClick='CellMenuClick' />
		<div class="mui-table-view" @tap='onAvatarClick' :class="[(opt.theme && !isApp) ? 'theme wechat-bg' : (opt.theme?'theme':''), !opt.normal?'big':'']">
      <div class="mui-table-view-cell mui-media">
        <a href="javascript:;" :class="{'mui-navigate-right': opt.showRightNav&&opt.avatarPos=='left'}">
          <img v-if='opt.showAvatar' class="mui-media-object mui-pull-left" :class='[opt.avatarPos=="left"?"mui-pull-left":"mui-pull-right", opt.isRadius?"radius50":""]' :src="opt.data.avatar">
          <div class="mui-media-body">
          	<span class="title">{{opt.data.name}}</span>
          	<p class="mui-ellipsis">{{opt.data.desc}}</p>
          </div>
        </a>
      </div>
    </div>
	</div>
</template>

<script>
import HeadCell from './HeadCell.vue'
import { headOption } from './options'
export default {
	data() {
		return {
			isApp: mui.os.plus
		}
	},
	props: {
		options: {
			type: Object,
			default: function() {
        return {}
      }
		}
	},
	computed: {
		opt() {
			let opt = {
				isRadius: true,
				normal: true,
				showRightNav: true,
				showAvatar: true,
				showHead: false,
				data: {},
				avatarPos: 'left',
				theme: true,
			}
			return mui.extend({}, opt, this.options)
		},
		hdopt() {
      return headOption(this.opt)
    }
	},
	methods: {
		CellMenuClick(obj) {
      this.$emit('onCellMenuClick', obj)
    },
		onAvatarClick() {
			this.$emit('onAvatarClick', this.opt.data)
		}
	},
	components: {
		HeadCell
	}
}
</script>

<style lang='scss'>
@import 'static/common/scss/_variable.scss';
$avatarH: 60px;
.avatar-head-container.z-avatar {
	.mui-table-view {
		&.theme {
			background-color: $baseColor;
			.mui-media-body {
				.title {
					color: #fff;
				}
				.mui-ellipsis {
					color: rgba(255,255,255,.8);
				}
			}
			.mui-navigate-right::after {
				color: rgba(255,255,255,.8);
			}
		}
		&.big {
			padding: 12px 0;
		}
		.mui-media-object.mui-pull-left {
			max-width: $avatarH;
			height: $avatarH;
			line-height: $avatarH;
		}
		.mui-media-body {
			height: $avatarH;
			padding: 9px 0;
			.title {
				font-size: 1.8rem;
				color: #333;
			}
			.mui-ellipsis {
				font-size: 1.4rem;
				color: rgba(0,0,0,.5);
				max-width: 90%;
			}
		}
	}
	a {
		&.mui-active {
			background-color: transparent;
		}
		&::after {
			color: rgba(0,0,0,.3);
			font-size: 2.6rem;
			right: 9px;
		}
	}
}
</style>