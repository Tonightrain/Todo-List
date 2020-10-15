<template>
  <li class="item" @click="handleClick">
<!--    <span class="content">{{content}}</span>-->
    {{content}}
  </li>
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
.item{
  padding: 10px 50px 10px 50px;
  border: 1px solid white;
  border-bottom: 1px solid #e1dfdf;
  height: 45px;
  font-size: 30px;
  font-weight: lighter;
  color: #4d4d4d;
}

</style>
