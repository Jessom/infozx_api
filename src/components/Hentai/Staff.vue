<!-- 选人 -->
<template>
	<div class="z-staff-wrap mui-clearfix">
		<!-- 左边 -->
		<div class="mui-pull-left z-staff-left">
			<div class="mui-scroll-wrapper z-hentai-scroll">
				<div class="mui-scroll">
					<ul class="mui-table-view">
						<li class="mui-table-view-cell">
							<a class="mui-navigate-right">安得装饰</a>
						</li>
						<li class="mui-table-view-cell" v-for='item in 15' :key='item'>
							<a class="mui-navigate-right">中系科技</a>
						</li>
					</ul>
				</div>
			</div>
		</div>

		<!-- 右边 -->
		<div class="mui-pull-left z-staff-right">
			<div class="mui-scroll-wrapper z-hentai-scroll">
				<div class="mui-scroll">
					<div class="mui-table-view">
						<div class="mui-table-view-cell">
							<span>是否选择子成员</span>
							<div
								class="mui-switch mui-switch-mini"
								:class='{"mui-active": include}'>
								<div class="mui-switch-handle" @tap='include = !include'></div>
							</div>
						</div>
					</div>
					<div class="mui-input-group">
						<div class="mui-input-row mui-checkbox mui-left">
							<label>
								<img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1390546864,3017401199&fm=15&gp=0.jpg" class="avatar">
								<div class="desc-body">
									涼風青葉
									<p class="mui-ellipsis">凉风青叶身材娇小，双马尾发型又有着娃娃脸，经常被误认成小孩子。</p>
								</div>
							</label>
							<input name="checkbox" value="Item 1" type="checkbox" >
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			include: false,			// 是否包含子成员
		}
	},
	mounted() {
		mui('.z-hentai-scroll').scroll();
	}
}
</script>

<style lang='scss'>
$avatar: 42px;
.z-staff-wrap {
	height: 100%;
	.z-staff-left, .z-staff-right {
		height: 100%;
	}

	.z-staff-left {
		width: 35%; border-right: 1px solid #eee;
	}

	.z-staff-right { width: 65%; }

	.mui-table-view-cell>a:not(.mui-btn) {
		margin: -11px -20px;
	}
	.mui-navigate-right:after, .mui-push-right:after { right: 5px; }
	.mui-table-view-cell:after { left: 0; }

	.mui-input-group {
		.mui-checkbox.mui-left label { padding-left: 50px; }
		.mui-input-row { height: auto; }
		.avatar { width: $avatar; height: $avatar; border-radius: 50%; float: left; margin-right: 8px; }
		.desc-body { overflow: hidden; height: $avatar; padding: 5px 0; }
		p.mui-ellipsis { margin-bottom: 0; font-size: 10px; margin-top: 5px; }
		.mui-checkbox input[type=checkbox]:before { top: 20px; }
	}
}
</style>
