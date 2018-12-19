<template>
	<div class="z-f-group-container">
		<div id='list' class="mui-indexed-list">
			<div class="mui-indexed-list-search mui-input-row mui-search mui-none">
				<input type="search" v-model.trim='search' class="mui-indexed-list-search-input" @input='input' @keyup.13='entry' :placeholder="opt.placeholder">
			</div>
			<div class="mui-indexed-list-bar" v-show='opt.showbar'>
				<a v-for='(item, ind) in opt.barList' :key='ind'>{{item}}</a>
			</div>
			<div class="mui-indexed-list-alert"></div>

			<div class="mui-indexed-list-inner">
				<div class="mui-indexed-list-empty-alert" v-show='!opt.list.length'>没有数据</div>

				<div class="mui-table-view mb50">
					<div v-for='(item, ind) in opt.list' :key='ind'>
						<div :data-group="item.group" class="mui-table-view-divider mui-indexed-list-group">{{item.group}}</div>
						<div class="mui-table-view-cell mui-media mui-indexed-list-item" v-for='(i, id) in item.child' @tap='onCell(i)' :key='id'>
							<a href="javascript:;">
	              <img class="mui-media-object mui-pull-left radius50" :src="i.image" v-if='i.image'>
	              <span class="fi-name mui-pull-left size22 mr10" v-if='!i.image'>{{i.name.charAt(0)}}</span>
	              <div class="mui-media-body">
	                {{i.name}}
	                <p class="mui-ellipsis">{{i.des}}</p>
	              </div>
	            </a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		options: {
			type: Object,
			default() {
				return {}
			}
		}
	},
	computed: {
		opt() {
			let opt = {
				barList: ['#','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
				list: [],
				placeholder: '我要找...',
				showbar: true,
			}
			return mui.extend({}, opt, this.options)
		}
	},
	data() {
		return {
			search: '',
		}
	},
	methods: {
		onCell(obj) {
			this.$emit('onCell', obj)
		},
		input() {
			this.$emit('onInput', this.search)
		},
		entry() {
			this.$emit('onEntry', this.search)
		}
	},
	mounted() {
		let list = document.querySelector("#list")
		window.indexedList = new mui.IndexedList(list)
	}
}
</script>

<style lang="scss">
@import 'static/common/scss/_variable.scss';
html, body, .z-f-group-container, .mui-indexed-list{
	height: 100%;
}
.z-f-group-container {
	.fi-name{
		display: inline-block;
		width: 42px;
		height: 42px;
		line-height: 42px;
		text-align: center;
		border-radius: 50%;
		background-color: $baseColor;
		color: #fff;
	}
}
</style>