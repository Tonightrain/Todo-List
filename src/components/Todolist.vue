<template>
  <li class="item">
    {{content}}
    <input type="checkbox" class="checkbox" v-model="checked">
    <label class="delete-icon" @click="handleClick">×</label>
  </li>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({})
export default class Todolist extends Vue {
  @Prop() private index: undefined;
  @Prop() private content!:string;

  checked:boolean = false

  handleClick() {
    this.$emit('delete',this.index)
  }
}
</script>

<style scoped>
.item{
  padding: 10px 0px 10px 50px;
  border: 1px solid white;
  border-bottom: 1px solid #e1dfdf;
  height: 45px;
  font-size: 30px;
  font-weight: lighter;
  color: #4d4d4d;
}

.item .delete-icon{
  display: none;
}

.item:hover .delete-icon{
  display: initial;
}

.delete-icon{
  float: right;
  margin-right: 30px;
  color: #eea5b2;
}

.delete-icon:hover{
  color: #c9687a;
}

.checkbox{
  outline: none;
  width:35px;
  height:35px;
  border:solid 1px #dddddd;
  border-radius:50%;
  float: left;
  margin-left: -40px;
  margin-right: 10px;
  position:relative;
  -webkit-appearance:none;
}

.checkbox:checked{
  border:solid 1px #a8c5a8;
}

.checkbox:checked::after {
  content:'';
  top:9px;
  left:6px;
  position:absolute;
  border: #7dc57d solid 2px;
  border-top:none;
  border-right:none;
  height:8px;
  width:18px;
  -webkit-transform:rotate(-45deg);
  transform:rotate(-45deg);
}

</style>
