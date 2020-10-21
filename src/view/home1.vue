<template>
  <div class="home">
    <h1 class="title">todos</h1>
    <div class="todo-list">
      <TodoAdd></TodoAdd>
      <Todolist></Todolist>
    </div>
    <Footer></Footer>
  </div>

</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import Todolist from "@/components/Todolist.vue";
import Footer from "@/components/Footer.vue";
import TodoAdd from "@/components/TodoAdd.vue";

@Component({
  components: {
    TodoAdd,
    Todolist,
    Footer,
  }
})

export default class Home extends Vue {

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


/*.lists {*/
/*  list-style: none;*/
/*  padding-left: 0px;*/
/*  margin: 0px;*/
/*  background: white;*/
/*}*/


</style>
