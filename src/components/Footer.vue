<template>
  <div class="footer">
    <span class="count">{{count()}} item left</span>
    <div class="filter">
      <a class="link" href="/All">All</a>
      <a class="link" href="/Active">Active</a>
      <a class="link" href="/Completed">Completed</a>
    </div>
    <button
        :class="isHasCompleted() ? 'hide': 'clear'"
        @click="handleClear">
      Clear Completed
    </button>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator';

interface todoListObj {
  content: string,
  checked: boolean
}

@Component({
})

export default class Footer extends Vue{
  @Prop() private list:todoListObj[] | undefined
  @Prop() private change:any

  count():number | undefined{
    return this.list?.filter((item) => item.checked === false).length
  }

  handleClear() :void{
    this.$emit('clear')
  }

  isHasCompleted():boolean{
    return this.list?.filter((item) => item.checked === true).length == 0
  }

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
  justify-content: flex-start;
  align-items: center;
}

.count{
  margin-left: 20px;
}

.clear{
  margin-left: 100px;
}

.filter{
  margin-left: 140px;
}

.filter button{
  margin-left: 15px;
  padding: 3px;
}

.filter button:hover{
  border: rgba(186, 56, 56, 0.2) solid 1px;
  border-radius: 3px;
}

button{
  font-size: 15px;
  color: #797878;
  background: #ffffff;
  border: none;
  font-family: inherit;
  font-weight: unset;
  outline: none;
}

.clear:hover{
  text-decoration: underline;
}

.hide{
  display: none;
}




.filter .link{
  margin-left: 20px;
  padding: 2px 2px;
  text-decoration: none;
  color:#797878 ;
}

.filter .link:hover{
  border: rgba(186, 56, 56, 0.2) solid 1px;
  border-radius: 3px;
}

.filter .link:active{
  border: rgba(74, 12, 12, 0.2) solid 1px;
  border-radius: 3px;
}

</style>
