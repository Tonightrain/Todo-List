<template>
  <div id="app">
    <h1 class="title">todos</h1>
    <div class="todo-list">
      <input class="todo" v-model="inputValue" placeholder="What needs to be done?" @keyup.enter="handleSubmit">
      <ul class="lists">
        <Todolist
            v-for="(item,index) of list"
            :key="index"
            :content="item"
            :index="index"
            @delete="handleDelete"
        >
        </Todolist>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import Todolist from "@/components/Todolist.vue";

@Component({
  components: {
    Todolist,
  }
})
export default class App extends Vue {
  inputValue: string =  ''
  list: string[] =  []

  handleSubmit(): void {
    if (this.inputValue != ''){
      this.list.push(this.inputValue)
      this.inputValue = ''
    }
  }

  handleDelete(index: number): void {
    this.list.splice(index, 1)
  }

}
</script>

<style scoped>
#app{
  background: #f5f5f5;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title{
  font-size: 100px;
  font-weight: 100;
  text-align: center;
  color: rgba(175, 47, 47, 0.15);
}

.todo{
  outline: none;
  display: block;
  box-shadow: inset 0 -1px 0px #c1bfbf;
  padding: 10px 10px 10px 50px;
  border: none;
  width: 600px;
  height: 50px;
  margin-top:-50px;
}

input::-webkit-input-placeholder{
  color: #e8e7e7;
}

.todo, .edit {
  font-size: 30px;
  font-family: inherit;
  font-weight: lighter;
  font-style: italic;
}

.lists{
  list-style: none;
  padding-left: 0px;
  margin: 0px;
  background: white;
}
</style>
