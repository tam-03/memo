<template>
  <div class="memo">
    <template>{{ getBody(memos, id) }}</template>
    <textarea
      class="textarea-primary"
      cols="30"
      rows="10"
      v-model="memo.body"
    ></textarea>
    <div class="btn-column">
      <button class="edit-btn btn--blue" @click="editMemo">編集</button>
      <router-link class="delete-link" to="/"
        ><button class="delete-btn btn--blue" @click="deleteMemo">
          削除
        </button></router-link
      >
    </div>
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
      getBody(memos, id) {
        memos.map((memo) => {
          if (memo.id === Number(id)) {
            this.memo = memo;
          }
        });
      },
      editMemo() {
        return this.$emit("edit-memo");
      },
      deleteMemo() {
        return this.$emit("delete-memo", this.memo.id);
      },
    },
  };
</script>

<style lang="css">
  .delete-btn {
    width: 30%;
    float: left;
    box-shadow: 0px 0px 5px silver;
  }
  .edit-btn {
    width: 70%;
    margin-right: 10px;
    box-shadow: 0px 0px 5px silver;
  }
  .btn-column {
    display: flex;
    width: 100%;
  }
  .delete-link {
    display: contents;
  }
</style>
