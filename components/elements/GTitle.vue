<template>
	<div class="g-title">
		<h2 >{{text}}</h2>
		<span></span>
	</div>
</template>
<script>
	export default {
		name: 'title',
		props: ['text']
	}
</script>
<style lang='scss'>
	.g-title {
		color: $white;
		font-size: 35px;
		text-align: center;
		position: relative;
		&::before {
			content: '';
			position: absolute;
			width: 30px;
			height: 1px;
			left: calc(50% - 46px);
			bottom: -19px;
			background-color: $accent;
		}
		&::after {
			content: '';
			position: absolute;
			width: 30px;
			height: 1px;
			right: calc(50% - 46px);
			bottom: -19px;
			background-color:$accent;
		}
		span {
			position: absolute;
			width: 35px;
			height: 17px;
			left: calc(50% - 17px);
			margin-top: 10px;
			&::before, &::after {
				content: '';
				position: absolute;
				width: 16px;
				height: 16px;
				top: 0;
				left: 0;
				border: 2px solid $white;
				-webkit-border-radius: 50px 50px 0;
				border-radius: 50px 50px 0 50px;
				-webkit-transform: rotate(-45deg);
				transform: rotate(-45deg);
			}
			&::before {
				border: 2px solid $accent;
			}
			&::after {
				left: auto;
				right: 0;
				-webkit-border-radius: 50px 50px 50px 0;
				border-radius: 50px 50px 50px 0;
				-webkit-transform: rotate(45deg);
				transform: rotate(45deg);
				border: 2px solid $accent;
			}
		}
	}
</style>