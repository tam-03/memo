<template>
	<div id="home">
		<router-link to="/"><h1>メモアプリ</h1></router-link>
		<div class="column">
			<ul class="memos">
				<router-link class="new-memo" to="/memo/new">＋</router-link>
				<li v-for="memo in memos" :key="memo.id">
					<router-link class="memo-list" :to="'/memo/' + memo.id">{{
						memo.title
					}}</router-link>
				</li>
			</ul>
			<router-view
				:memos="memos"
				@add-memo="addMemo"
				@edit-memo="editMemo"
				@delete-memo="deleteMemo"
			></router-view>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				memos: [],
			};
		},
		methods: {
			addMemo(memo) {
				this.memos.push({
					id: this.memos.length,
					title: memo.split("\n")[0],
					body: memo,
				});
				this.saveMemo();
			},
			editMemo() {
				this.saveMemo();
			},
			deleteMemo(id) {
				this.memos.splice(id, 1);
				this.Memo();
			},
			Memo() {
				this.memos.forEach((memo, index) => {
					console.log((memo.id = index));
				});
				this.saveMemo();
			},
			saveMemo() {
				const parse = JSON.stringify(this.memos);
				localStorage.setItem("memo", parse);
			},
		},
		created() {
			if (localStorage.getItem("memo")) {
				try {
					this.memos = JSON.parse(localStorage.getItem("memo"));
					this.Memo();
				} catch (err) {
					console.log(err.message);
				}
			}
		},
	};
</script>

<style lang="css">
	#home {
		text-align: center;
		width: 100%;
	}
	.column {
		display: flex;
		justify-content: space-around;
		width: 100%;
		align-items: center;
	}
	.memos {
		width: 30%;
		text-align: left;
	}
	.new-memo {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 20px;
		background-color: #0099e4;
		color: #fff;
		border-radius: 50%;
		text-align: center;
		width: 30px;
		height: 30px;
	}
	.new-memo:hover {
		color: #fff;
		opacity: 0.5;
		transition: all 0.5s;
	}
	.memo-list {
		padding: 10px;
		margin-bottom: 10px;
		display: block;
		font-size: 18px;
		border-bottom: solid lightblue 2px;
	}
	.memo-list:hover {
		box-shadow: 0px 0px 5px silver;
		transition: all 0.2s;
	}
	a {
		text-decoration: none;
		color: black;
	}
	li {
		list-style-type: none !important;
	}
	h1 {
		letter-spacing: 5px;
		color: white;
		background-color: #0099e4;
		border-radius: 10px;
	}
</style>
