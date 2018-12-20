<template>
	<div class="z-hentai-wrap">
		<!-- head -->
		<div class="mui-card-header">
			<button
				class="mui-btn mui-icon mui-icon-back"
				@tap='$emit("back")'></button>
			<span>{{ title }}</span>
			<button
				class="mui-btn mui-icon mui-icon-closeempty"
				@tap='$emit("close")'></button>
		</div>

		<!-- body -->
		<div class="mui-scroll-wrapper z-hentai-scroll" v-show='!$slots.unscroll'>
			<div class="mui-scroll">
				<slot></slot>
			</div>
		</div>

		<div class="unscroll" v-show='$slots.unscroll'>
			<slot name='unscroll'></slot>
		</div>

		<!-- foot -->
		<div class="button-wrap">
			<button
				class="mui-btn mui-btn-block base-btn"
				@tap='$emit("success")'>确定</button>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			default: '方式'
		}
	},
	mounted() {
		mui.init()
		mui('.z-hentai-scroll').scroll();
	}
}
</script>

<style lang='scss'>
@import 'static/common/scss/_variable.scss';
.z-hentai-wrap {
	background-color: #fff;
	// head
	.mui-card-header {
		padding: 0; min-height: auto; background-color: #fff;
		.mui-btn {
			border: 0; min-height: 40px; min-width: 53px; position: relative;
			&::after {
				content: ""; position: absolute; top: 6px; bottom: 6px; width: 1px; background-color: #e8e7ee;
			}
			&:first-child::after { right: 0 }
			&:last-child::after { left: 0 }
			&:active {
				background-color: transparent; color: #333;
			}
		}
	}

	.unscroll, .mui-scroll-wrapper {
		height: calc(80vh - 40px - 42px);
	}
	.mui-scroll-wrapper { margin: 0; position: relative; }

	.button-wrap { padding: 0 15px; }

	.mui-table-view { background-color: #fff; }

	.mui-table-view-cell,
	.mui-input-row {
		&:last-child:after { height: 1px; background-color: #c8c7cc; }
	}


	.mui-checkbox.mui-left .label {
		padding-left: 58px; padding-right: 15px; display: flex; width: 100%; height: inherit; align-items: center;
	}
	.mui-checkbox input[type=checkbox]:before,
	.mui-radio input[type=radio]:before {
		position: absolute; top: 5px;
	}

	.right-icon {
		font-family: Muiicons;
		&::before {
			content: "\e583"; position: absolute; right: 15px; font-size: 14px; color: #c8c7cc; top: 10px;
		}
	}	
}
</style>
