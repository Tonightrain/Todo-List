<template>
  <ul class="lists">
    <li class="item"
        v-for="(item,index) of listFilter"
        :key="`${item}-${index}`"
    >
      <span :class="item.checked?'item-content': ''">{{ item.content }}</span>
      <input
          type="checkbox"
          class="checkbox"
          v-model="item.checked"
          @click="handleChange($event,item.id)"
      >
      <label class="delete-icon" @click="handleDelete($event,item.id)">×</label>
    </li>
  </ul>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {Filter} from "@/viewModel/Filter";

@Component({})
export default class Todolist extends Vue {
  //
  // path = window.location.href

  handleDelete(event: Event, todoId: string) {
    this.$store.commit('deleteTodo', todoId)
  }

  handleChange(event: Event, todoId: string) {
    this.$store.commit('changeChecked', todoId)
  }


  // @Watch('$route.path')
  get listFilter() {
    const filter = this.$route.path
    switch (filter) {
      case `/${Filter.All}`:
        return this.$store.state.todoVMS
      case `/${Filter.Active}`:
        return this.$store.state.todoVMS.filter((item) => item.checked === false)
      case `/${Filter.Completed}`:
        return this.$store.state.todoVMS.filter((item) => item.checked === true)
      default:
        return this.$store.state.todoVMS
    }
  }


}
</script>

<style scoped>
.item {
  padding: 10px 0px 10px 50px;
  border: 1px solid white;
  border-bottom: 1px solid #e1dfdf;
  width: 608px;
  font-size: 30px;
  font-weight: lighter;
  color: #4d4d4d;
  word-break: break-all;
}

.item .delete-icon {
  display: none;
}

.item:hover .delete-icon {
  display: initial;
}

.delete-icon {
  float: right;
  margin-right: 30px;
  color: #eea5b2;
}

.delete-icon:hover {
  color: #c9687a;
}

.checkbox {
  outline: none;
  width: 35px;
  height: 35px;
  border: solid 1px #dddddd;
  border-radius: 50%;
  float: left;
  margin-left: -40px;
  margin-right: 10px;
  position: relative;
  -webkit-appearance: none;
}

.checkbox:checked {
  border: solid 1px #a8c5a8;
}

.checkbox:checked::after {
  content: '';
  top: 9px;
  left: 6px;
  position: absolute;
  border: #7dc57d solid 2px;
  border-top: none;
  border-right: none;
  height: 8px;
  width: 18px;
  transform: rotate(-55deg);
}

.item-content {
  text-decoration: line-through;
  color: #d9d9d9;
}


.lists {
  list-style: none;
  padding-left: 0px;
  margin: 0px;
  background: white;
}

</style>
