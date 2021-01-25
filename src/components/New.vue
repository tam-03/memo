<template>
	<div class="memo">
		<textarea
			class="textarea-primary"
			cols="30"
			rows="10"
			placeholder="入力して下さい"
			v-model="memo"
		></textarea>
		<router-link class="edit-link" to="/"
			><button class="btn--blue edit-btn" @click="addMemo">
				編集
			</button></router-link
		>
	</div>
</template>

<script>
	export default {
		props: ["memos", "id"],
		data() {
			return {
				memo: "",
			};
		},
		methods: {
			addMemo() {
				return this.$emit("add-memo", this.memo);
			},
		},
	};
</script>

<style lang="css">
	.memo {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		margin-left: 20px;
		margin-top: 20px;
	}
	.edit-btn {
		width: 100%;
	}
	.btn--blue,
	a.btn--blue {
		color: #fff;
		background-color: #0099e4;
		border-radius: 10px;
		display: block;
		text-decoration: none;
		margin-top: 20px;
	}
	.btn--blue:hover,
	a.btn--blue:hover {
		color: #fff;
		opacity: 0.5;
		transition: all 0.5s;
	}
	.textarea-primary {
		display: inline-block;
		vertical-align: top;
		width: 100%;
		max-height: 250px;
		padding: 8px;
		box-sizing: border-box;
		border-radius: 5px;
		border: 1px solid #e5e5e5;
		font-size: 14px;
		outline: none;
		line-height: 1.6;
		resize: vertical;
		box-shadow: 0px 0px 5px silver;
	}
	.edit-link {
		display: contents;
	}
</style>
