<template lang="html">
  <div class="container">
		<div class="mui-content">
			<div>
				<avatar-cell :options='lavaOptions' @onAvatarClick='onAvatarClick' />
			</div>
			<div>
				<avatar-cell :options='lavaOptions2' @onAvatarClick='onAvatarClick' />
			</div>
			<div>
				<avatar-cell :options='lavaOptions3' @onAvatarClick='onAvatarClick' />
			</div>
		</div>
	</div>
</template>

<script>
import AvatarCell from '@/components/Cell/AvatarCell.vue'
export default {
	data() {
		return {
			lavaOptions: {
				transparent: true,
				showMenu: false,
				showRightNav: true,
				showHead: true,
				data: {
					flag: 1,
					name: 'わタし',
					desc: '一个小小的sign',
					avatar: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1373411777,3992091759&fm=27&gp=0.jpg',
					title: 'normal'
				}
			},
			lavaOptions2: {
				transparent: true,
				showMenu: false,
				showRightNav: true,
				showHead: true,
				normal: false,
				avatarPos: 'right',
				data: {
					flag: 2,
					name: 'わタし',
					desc: '一个小小的sign',
					avatar: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1373411777,3992091759&fm=27&gp=0.jpg',
					title: '!normal'
				}
			},
			lavaOptions3: {
				transparent: true,
				showMenu: false,
				showRightNav: true,
				showHead: true,
				theme: false,
				isRadius: false,
				data: {
					flag: 3,
					name: 'わタし',
					desc: '一个小小的sign',
					avatar: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1373411777,3992091759&fm=27&gp=0.jpg',
					title: 'black on white'
				}
			}
		}
	},
	methods: {
		onAvatarClick(obj) {
			alert(`点击了等${obj.flag}个`)
		}
	},
	components: {
		AvatarCell
	}
}
</script>

<style lang="sass">

</style>
