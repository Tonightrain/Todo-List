<template>
  <div id="app">
    <h1 class="title">todos</h1>
    <div class="todo-list">
      <a-icon
          :class="this.list.length == 0 ? 'hide' :
          this.list.find((item) => item.checked == false) == undefined ?
          'changeAll2':'changeAll'"
          type="down"
          @click="handleChangeAll"
      />
      <input
          class="todo"
          v-model="inputValue"
          placeholder="What needs to be done?"
          @keyup.enter="handleSubmit"
      >
      <ul class="lists">
        <Todolist
            v-for="(item,index) of list"
            :key="`${item}-${index}`"
            :content="item.content"
            :checked="item.checked"
            :index="index"
            @delete="handleDelete"
            @change="handleStateChange"
        ></Todolist>
      </ul>
    </div>
    <Footer
        :list="list"
        :change="handleStateChange"
        @clear="handleClear"
        :class="this.list.length == 0 && 'hide'"
    ></Footer>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import Todolist from "@/components/Todolist.vue";
import Footer from "@/components/Footer.vue";

interface todoListObj {
  content: string,
  checked: boolean
}

@Component({
  components: {
    Todolist,
    Footer,
  }
})

export default class App extends Vue {

  inputValue: string = ''

  list:todoListObj[] = []

  // currentRoute: window.location.pathname

  // activeList:todoListObj[] | undefined= this.list?.filter((item) => {
  //   return item.checked === false
  // })

  handleSubmit(): void {
    if (this.inputValue != '') {
      let thing:todoListObj = {
        content: this.inputValue,
        checked: false
      }
      this.list.push(thing)
      this.inputValue = ''
    }
    console.log(this.list)
  }

  handleDelete(index: number): void {
    this.list.splice(index, 1)
    console.log(this.list)
  }

  handleStateChange(index: number): void {
    this.list[index].checked = !this.list[index].checked
    console.log(this.list)
  }

  handleClear():void {
    this.list = this.list.filter((item) => item.checked ==false)
}

  handleChangeAll():void {
    this.list.find((item) => item.checked == false) != undefined ?
        this.list.map((item) => item.checked = true) :
        this.list.map((item) => item.checked =false)
  }

  // isListNull():boolean {
  //   return this.list.length == 0
  // }
  //
  // isExistTodo():boolean {
  //   return this.list.find((item) => item.checked == false) == undefined
  // }




}
</script>

<style scoped>
#app {
  background: #f5f5f5;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  font-size: 100px;
  font-weight: 100;
  text-align: center;
  color: rgba(175, 47, 47, 0.15);
}

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
  font-style:italic;
}

.todo, .edit {
  font-size: 30px;
  font-family: inherit;
  font-weight: lighter;
  font-style: normal;
  color: #4d4d4d;
}

.lists {
  list-style: none;
  padding-left: 0px;
  margin: 0px;
  background: white;
}

.hide{
  display: none;
}

.changeAll{
  margin-left: 20px;
  color:#e6e6e6;
  outline: none;

}

.changeAll2{
  margin-left: 20px;
  color: #545252;
  outline: none;
}

</style>
