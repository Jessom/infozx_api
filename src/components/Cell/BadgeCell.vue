<template>
	<div class="z-badge-wrap">
		<ul class="mui-table-view">
	    <li class="mui-table-view-cell mui-media" v-for='(item, ind) in opt.list' :key='ind' @tap='onBadgeClick($event, item)'>
        <a href="javascript:;" class="mui-navigate-right">
        	<img
        		class="mui-media-object mui-pull-left mr10"
        		:class='{"radius50": opt.isRadius, "right": opt.isRight}'
        		:src="item.image"
        		v-if='opt.showAvatar && item.image'>
        	<div
        		class="z-badge-text mui-pull-left"
        		v-if='opt.showAvatar && !item.image'>{{item.text}}</div>
          <div class="mui-media-body">
            <span class="title">{{item.title}}</span>
            <p class="mui-ellipsis">{{item.desc}}</p>
          </div>
          <!-- badge -->
          <div
          	class="z-badge"
          	:class='[opt.style, item.badges.length==1?"z-badge-one":""]'
          	v-if='item.badges'>
          	<span
          		class="z-badge-item iconfont"
          		:class='[i.active?"active":"", i.icon]'
          		:style='{
          			color: i.color,
          			borderColor: i.color,
          			backgroundColor: i.background
          		}'
          		@tap.stop='$emit("onBadgeItem", item)'
          		v-for='(i, index) in item.badges'
          		:key='index'>{{i.name}}</span>
          </div>
        </a>
	    </li>
	  </ul>
	</div>
</template>

<script>
export default {
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
				style: '',
				list: [],
				isRadius: true,
				showAvatar: true
			}
			return mui.extend({}, opt, this.options)
		}
	},
	methods: {
		onBadgeClick(e, obj) {
			this.$emit('onBadgeClick', obj)
		}
	}
}
</script>

<style lang='scss'>
$textS: 42px;
$badgeS: 20px;
@import 'static/common/scss/_variable.scss';
.z-badge-wrap {
	.z-badge-text {
		display: inline-block;
		text-align: center;
		color: #fff;
		width: $textS;
		height: $textS;
		line-height: $textS;
		background-color: $baseColor;
		border-radius: 50%;
		margin-right: 10px;
		font-size: 1.9rem;
	}

	.z-badge {
		position: absolute;
		right: 35px;
		top: 11px;
		.z-badge-item {
			display: inline-block;
			width: $badgeS;
			height: $badgeS;
			line-height: $badgeS;
			text-align: center;
			color: #666;
			font-size: 1.2rem;
			border-radius: 3px;
			margin: 0 2px;
			&.active {
				color: $baseColor;
			}
		}
		
		/*只有一个badge*/
		&.z-badge-one {
			/* top: 50%;
			transform: translate3d(0, -50%, 0); */
			top: 0;
			right: 10px;
	    height: 100%;
	    z-index: 2;
			.z-badge-item {
				/* width: $badgeS + 5;
				height: $badgeS + 5;
				line-height: $badgeS + 5; */
				height: 100%;
				line-height: 65px;
				width: 50px;
				font-size: 1.4rem;
				&[class*='icon-'] {
					font-size: 1.8rem;
				}
			}
		}

		/*带边框的*/
		&.border {
			.z-badge-item {
				border: 1px solid #666;
				&.active {
					color: $baseColor;
					border-color: $baseColor;
				}
			}
		}
		/*实底白字*/
		&.background {
			.z-badge-item {
				background-color: #efefef;
				color: #ababab;
				&.active {
					background-color: $baseColor;
					color: #fff;
				}
			}
		}
	}

	.title {
		font-size: 1.6rem;
	}
}
</style>