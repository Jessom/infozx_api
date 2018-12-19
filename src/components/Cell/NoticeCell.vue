<template>
	<div class="z-slide-del-container">
		<ul class="mui-table-view">
			<li
				class="mui-table-view-cell mui-media"
				v-for='(item, ind) in list'
				:key='ind'
				@tap='onCellClick($event, item)'>
				<div class="mui-slider-right mui-disabled" v-if='opt.isDel'>
					<a
						class="mui-btn"
						:class='[item.deleteBg?item.deleteBg:"mui-btn-red"]'
						@tap.stop='onDelect($event, item, i)'>{{item.deleteText?item.deleteText:"删除"}}</a>
				</div>
				<a
          href="javascript:;"
          class="mui-clearfix"
          :class='{"mui-navigate-right":opt.showRightNav, "mui-slider-handle": opt.isDel}'>
					<img
            class="mui-media-object mr10"
            :class='{"radius50": opt.isRadius}'
            :src="item.image"
            v-if='opt.showAvatar && item.image'>
					<div
						class="mui-media-object base-bg mr10 iconfont"
						:class='[opt.isRadius?"radius50":"", item.icon]'
						:style='{backgroundColor: item.background}'
						v-if='opt.showAvatar && !item.image'>
						{{item.icon?"":(item.text?item.text.charAt(0):item.title.charAt(0))}}
					</div>
          <!-- 小红点 -->
          <i class="point" v-if='!item.read' :class='{"point1":opt.isRadius, "local": !opt.showAvatar}'></i>
					<div class="mui-media-body">
						<div class="mui-ellipsis title" :class='{"size": opt.showRightNav, "local":!opt.showAvatar&&!item.read}'>{{item.title}}</div>
            <span class="time" :class='{"jr": opt.showRightNav}'>{{item.time}}</span>
						<p
							class="desc"
							:class='[opt.multi ? "mui-ellipsis-2 line15" : "mui-ellipsis"]'>{{item.desc}}</p>
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
			default: function() { return {} }
		},
		list: Array
	},
	computed: {
		opt() {
			let opt = {
				showAvatar: true,
				isRadius: true,
				showRightNav: true,
				isDel: true,
				multi: false
			}
			return mui.extend(true, {}, opt, this.options)
		}
	},
	methods: {
		onCellClick(e, obj) {
			this.$emit('onCellClick', obj)
		},
		onDelect(e, obj, i) {
			this.$emit('onDelect', {li: e.target.parentNode.parentNode, ...obj, handler: i})
		}
	}
}
</script>

<style lang='scss'>
.z-slide-del-container{
	.mui-media-body {
    position: relative;
		padding-right: 15px;
		.title {
      font-size: 1.6rem;
      width: calc(100% - 58px);
      &.size {
        width: calc(100% - 77px);
			}
			&.local {
				margin-left: 15px;
				width: calc(100% - 85px);
			}
		}
		.desc {
			font-size: 1.2rem;
    }
    .time {
      position: absolute;
      top: 0;
      right: 0;
      font-size: 1.2rem;
      color: #666;
      &.jr {
        right: 15px;
      }
    }
  }
  .point {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: red;
    position: absolute;
    top: 8px;
		left: 54px;
    &.point1 {
			left: 45px;
      top: 12px;
    }
		&.local {
			left: 15px;
			top: 16px;
		}
  }
	.mui-table-view .mui-media-object {
		width: 42px;
		float: left;
		text-align: center;
		color: #fff;
		font-size: 2rem;
	}
	.mui-table-view-cell>.mui-slider-handle.mui-navigate-right:after {
		right: 15px;
	}
}
</style>