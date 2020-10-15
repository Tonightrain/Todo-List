<template>
  <div class="todo-list">
    <li @click="handleClick">{{content}}</li>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({})
export default class Todolist extends Vue {
  @Prop() private index: undefined;
  @Prop() private content!:string;

  handleClick() {
    this.$emit('delete',this.index)
  }
}
</script>

<style scoped>

</style>
