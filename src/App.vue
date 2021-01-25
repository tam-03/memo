<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<style lang="css">
	#app {
		display: flex;
		justify-content: center;
		align-items: center;
		font-family: "メイリオ";
		max-width: 600px;
		margin: auto;
	}
	button {
		background-color: transparent;
		border: none;
		cursor: pointer;
		outline: none;
		padding: 0;
		appearance: none;
	}
</style>
