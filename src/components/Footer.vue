<template>
  <div class="footer">
    <span class="count">{{ count }} item left</span>
    <div class="filter-button">
      <button class="all">All</button>
      <button>Active</button>
      <button>Completed</button>
    </div>
    <button class="clear">Clear Completed</button>
  </div>
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator';

@Component({})

export default class Footer extends Vue{
  @Prop() private count!:number
}

</script>

<style scoped>
.footer{
  height: 50px;
  width: 660px;
  font-size: 15px;
  font-weight: lighter;
  color: #797878;
  background: white;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2),
  0 8px 0 -3px #f6f6f6, 0 9px 1px -3px rgba(0, 0, 0, 0.2),
  0 16px 0 -6px #f6f6f6, 0 17px 2px -6px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.count{
margin-left: 20px;
}

.clear{
  margin-right: 20px;
}

button{
  font-size: 15px;
  color: #797878;
  background: white;
  border: none;
  font-family: inherit;
  font-weight: unset;
}

.clear:hover{
  text-decoration: underline;
}

</style>
