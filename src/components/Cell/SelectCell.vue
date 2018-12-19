<template>
	<div class="z-select-cell-container">
		<ul class="mui-table-view" style='margin-bottom: 60px;'>
			<li class="mui-table-view-cell mui-media" v-for='(item, ind) in list' :key='ind'>
				<a href='javascript:;' class="mui-checkbox mui-left">
					<label @tap='selectOne($event, item)'>
						<img class="mui-media-object mr10" :class='{"radius50": opt.isRadius}' :src="item.image" v-if='opt.showAvatar && item.image'>
						<div class="mui-media-object base-bg mr10" :class='{"radius50": opt.isRadius}' v-if='opt.showAvatar && !item.image'>
							{{item.title.charAt(0)}}
						</div>
						<div class="mui-media-body">
							<div class="mui-ellipsis title">{{item.title}}</div>
							<p class="mui-ellipsis desc">{{item.desc}}</p>
						</div>
					</label>
					<input name="checkbox" :checked='item.active' v-model="checkboxModel" :value='item.id' type="checkbox" @tap='selectOne($event, item)'>
				</a>
			</li>
		</ul>

		<div class="z-select-bar">
			<div class="mui-pull-left z-select-bar-left">
				<div class="mui-checkbox mui-left mui-pull-left mr10">
					<label>全选</label>
					<input name="checkbox" value="Item 1" type="checkbox" v-model='checked' @click='checkedAll'>
				</div>
				<span>已选：<span class="base-color">{{checkboxModel.length}}</span></span>
			</div>
			<div class="mui-pull-right z-select-bar-right">
				<button class="mui-btn" @tap='onSuccess'>确定</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			checked: false,					// 全选
			checkboxModel: [],			// 选中
			selects: []
		}
	},
	watch: {
		'checkboxModel': {
			handler(val, oldVal) {
				if (this.checkboxModel.length === this.list.length) {
	        this.checked = true
	      }else{
	        this.checked = false
	      }
			},
			deep: true
		},
		list(val) {
			for(let item of val) {
				if(item.active) {
					this.checkboxModel.push(item.id)
					this.selects.push(item)
				}
			}
			console.log(this.checkboxModel)
		}
	},
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
	methods: {
		checkedAll() {
	    if (this.checked) {					//实现反选
	    	this.select(false)
	      this.checkboxModel = []
	      this.selects = []
	    } else {										//实现全选
	    	this.select(true)
	      this.checkboxModel = []
	      this.selects = []
	      this.list.forEach(item => {
	      	this.checkboxModel.push(item.id)
	      	this.selects.push(item)
	      })
	    }
		},
		selectOne(e, obj) {
			obj.active = !obj.active
			if(obj.active) {				// 选中
				this.selects.push(obj)
			} else {								// 取消
				this.selects.splice(this.selects.findIndex(item => item.id === obj.id), 1)
			}
		},
		onSuccess() {
			this.$emit('onSuccess', this.selects)
		},
		select(tag) {
			this.list.forEach(item => {
				item.active = tag
			})
		}
	}
}
</script>

<style lang='scss'>
@import 'static/common/scss/_variable.scss';
.z-select-cell-container {
	.mui-checkbox.mui-left input[type=checkbox] {
		left: 15px;
		top: 50%;
		transform: translate3d(0,-50%, 0);
	}
	.mui-checkbox.mui-left label {
		padding-left: 32px;
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

	.z-select-bar {
		position: fixed;
		bottom: 0;
		z-index: 1;
		height: 50px;
		line-height: 50px;
		width: 100%;
		background-color: #fff;
		.mui-pull-right {
			width: 120px;
			height: 100%;
			.mui-btn {
				width: 100%;
				height: 100%;
				border: 0;
				background: linear-gradient(to right, lighten($baseColor,20) 0, lighten($baseColor, 5));
				border-radius: 0;
				font-size: 1.8rem;
				color: #fff;
			}
		}
		.mui-checkbox {
			line-height: 50px;
			input[type=checkbox] {
				left: 7px;
				transform: translate3d(0, -44%, 0);
			}
		}
	}
}
</style>