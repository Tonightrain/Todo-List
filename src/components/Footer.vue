<template>
  <div class="footer" v-if="isListNull()">
    <span class="count">
      {{ showTodoNums() }}
    </span>
    <div class="filter">
      <router-link
          :class="checkWhich('All')? 'allChecked':'link'"
          to="/All"
      >
        All
      </router-link>
      <router-link
          :class="checkWhich('Active')?'activeChecked':'link'"
          to="/Active"
      >
        Active
      </router-link>
      <router-link
          :class="checkWhich('Completed')?'completedChecked':'link'"
          to="/Completed"
      >
        Completed
      </router-link>
    </div>
    <button
        class="clearCompleted"
        v-if="isHasCompleted()"
        @click="handleClear">
      Clear Completed
    </button>
  </div>
</template>

<script lang="ts">
import {Component, Vue, Watch} from 'vue-property-decorator';

@Component({})

export default class Footer extends Vue {

  handleClear(): void {
    this.$store.commit('clearAllCompleted')
  }

  showTodoNums(): string {
    const num = this.$store.state.todoVMS.filter((item: any) => item.checked === false).length
    return num <= 1 ? `${num} item left` : `${num} items left`
  }

  isHasCompleted(): boolean {
    return this.$store.state.todoVMS.filter((item: any) => item.checked === true).length !== 0
  }

  isListNull(): boolean {
    return this.$store.state.todoVMS.length !== 0
  }

  @Watch('$route.path')
  checkWhich(filter: string): boolean {
    const path = this.$route.path
    return path === `/${filter}`
  }
}

</script>

<style scoped>
.footer {
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

.count {
  width: 100px;
  margin-left: 20px;
}

.clearCompleted {
  margin-left: 80px;
  width: 180px;
}

.filter {
  margin-left: 120px;
  width: 270px;
}

.filter button {
  margin-left: 15px;
  padding: 3px;
}

.filter button:hover {
  border: rgba(186, 56, 56, 0.2) solid 1px;
  border-radius: 3px;
}

button {
  font-size: 15px;
  color: #797878;
  background: #ffffff;
  border: none;
  font-family: inherit;
  font-weight: unset;
  outline: none;
}

.clearCompleted:hover {
  text-decoration: underline;
}

.hide {
  display: none;
}

.filter .link {
  margin-left: 20px;
  padding: 2px 2px;
  text-decoration: none;
  color: #797878;
}

.filter .link:hover {
  border: rgba(186, 56, 56, 0.2) solid 1px;
  border-radius: 3px;
}

.filter .link:active {
  border: rgba(74, 12, 12, 0.2) solid 1px;
  border-radius: 3px;
}

.allChecked {
  margin-left: 20px;
  padding: 2px 2px;
  text-decoration: none;
  color: #797878;
  border: rgba(113, 23, 23, 0.2) solid 1px;
  border-radius: 3px;
}

.activeChecked {
  margin-left: 20px;
  padding: 2px 2px;
  text-decoration: none;
  color: #797878;
  border: rgba(113, 23, 23, 0.2) solid 1px;
  border-radius: 3px;
}

.completedChecked {
  margin-left: 20px;
  padding: 2px 2px;
  text-decoration: none;
  color: #797878;
  border: rgba(113, 23, 23, 0.2) solid 1px;
  border-radius: 3px;
}


</style>
