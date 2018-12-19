<template>
	<div class="z-time-container table">
		<div class="z-time-item tr" v-for='(item, ind) in list' :key='ind' @tap='onCell($event, item)'>
			<div class="td z-left">{{item.time}}<i class="iconfont icon-yuanquan1"></i></div>
			<div class="td z-right">
				<div v-if='typeof item.data=="object"'>
					<div class="text mui-clearfix" v-for='(i, inde) in item.data' :key='inde'>
						<span class="mui-pull-left">{{i.text}}</span>
						<span class="mui-pull-right tag">{{i.tag}}</span>
					</div>
				</div>
				<div class="text" v-else>
					{{item.data}}
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		list: Array
	},
	methods: {
		onCell(e, obj) {
			this.$emit('onCellClick', obj)
		}
	}
}
</script>

<style lang='scss'>
.z-time-container {
	background-color: #fff;
	.z-time-item {
		&:nth-of-type(2n) {
			background-color: #f3f3f3;
		}
	}
	.z-left, .z-right {
		padding: 10px 15px;
		height: 50px;
	}
	.z-right {
		line-height: 1.5;
		color: #535353;
		.tag {
			color: #F56C6C;
		}
	}
	.z-left {
		padding-left: 0;
		width: 130px;
		position: relative;
		text-align: right;
		color: #424242;
		i {
			position: absolute;
			top: 50%;
			right: 0px;
			transform: translate(50%, -50%);
			color: #ddd;
			font-size: 12px;
		}
		&::after {
			content: '';
			position: absolute;
			right: 0;
			top: 0;
			width: 1px;
			height: 100%;
			background-color: #c8c7cc;
			transform: scaleX(.3);
		}
	}
	&.table {
		display: table;
		.tr {
			display: table-row;
			.td {
				display: table-cell;
				vertical-align: middle;
			}
		}
	}
}
</style>
