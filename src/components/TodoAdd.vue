<template>
  <div>
    <a-icon
        :class="isListNull ? 'hide' : isExistTodo ? 'changeAll2':'changeAll'"
        type="down"
        @click="handleChangeAll"
    />
    <input
        class="todo"
        v-model="inputValue"
        placeholder="What needs to be done?"
        @keyup.enter="handleSubmit"
    >
  </div>
</template>

<script lang="ts">
import {Vue} from 'vue-property-decorator';
import {mapState} from "vuex";

export default Vue.extend({
  components: {},
  data() {
    return {
      inputValue: ''
    }
  },
  methods: {
    handleSubmit(): void {
      if (this.inputValue != '') {
        this.$store.commit('addTodo', this.inputValue)
        this.inputValue = ''
      }
    },
    handleChangeAll(): void {
      this.$store.commit('changeAllChecked')
    }
  },

  computed: {
    ...mapState(['todoVMS']),
    isListNull() {
      return this.todoVMS.length === 0
    },
    isExistTodo() {
      return this.todoVMS.find((item: any) => item.checked === false) === undefined
    }
  }
})

</script>

<style scoped>
.todo {
  outline: none;
  display: block;
  box-shadow: inset 0 -1px 0px #c1bfbf;
  padding: 10px 10px 10px 50px;
  border: none;
  width: 600px;
  height: 50px;
  margin-top: -50px;
}

input::-webkit-input-placeholder {
  color: #e8e7e7;
  font-style: italic;
}

.todo, .edit {
  font-size: 30px;
  font-family: inherit;
  font-weight: lighter;
  font-style: normal;
  color: #4d4d4d;
}

.hide {
  display: none;
}

.changeAll {
  margin-left: 20px;
  color: #e6e6e6;
  outline: none;

}

.changeAll2 {
  margin-left: 20px;
  color: #545252;
  outline: none;
}

</style>
