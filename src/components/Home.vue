<template>
  <div class="home">
    <h1 class="title">todos</h1>
    <div class="todo-list">
      <a-icon
          :class="isListNull() ? 'hide' : isExistTodo() ? 'changeAll2':'changeAll'"
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
            v-for="(item,index) of listFilter()"
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
        :class="isListNull() && 'hide'"
    ></Footer>
  </div>

</template>

<script lang="ts">
import {Component, Vue,Watch} from 'vue-property-decorator';
import Todolist from "@/components/Todolist.vue";
import Footer from "@/components/Footer.vue";

const store = {
  save(key:any, value:any) {
    window.localStorage.setItem(key, JSON.stringify(value));
  },
  fetch(key:any) {
    const data = window.localStorage.getItem(key)
    return data == null ? [] : JSON.parse(data)
  }
};

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

export default class Home extends Vue {

  inputValue: string = ''

  list:todoListObj[] = store.fetch("storeData");

  path = window.location.href

  handleSubmit(): void {
    if (this.inputValue != '') {
      let thing:todoListObj = {
        content: this.inputValue,
        checked: false
      }
      this.list.push(thing)
      this.inputValue = ''
    }
  }

  handleDelete(index: number): void {
    this.list.splice(index, 1)
  }

  handleStateChange(index: number): void {
    this.list[index].checked = !this.list[index].checked
    store.save("storeData",this.list)
  }

  handleClear():void {
    this.list = this.list.filter((item) => item.checked ===false)
  }

  handleChangeAll():void {
    this.list.find((item) => item.checked === false) !== undefined ?
        this.list.map((item) => item.checked = true) :
        this.list.map((item) => item.checked =false)
  }

  isListNull():boolean {
    return this.list.length == 0
  }

  isExistTodo():boolean {
    return this.list.find((item) => item.checked === false) === undefined
  }

  @Watch('list')
  handler(){
    store.save("storeData",this.list)
  }

  @Watch('path')
  listFilter(): todoListObj[] {
    const filter = this.path.split('/').pop()
    switch (filter) {
      case 'All' :
        return this.list;
      case 'Active' :
        return this.list.filter((item) => item.checked === false);
      case 'Completed':
        return this.list.filter((item) => item.checked === true);
      default:
        return this.list
    }
  }

}
</script>

<style scoped>
.home {
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
