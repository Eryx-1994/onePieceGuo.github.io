<template>
  <div class="showDiv" ref="box">{{ state.name }}</div>
  <div class="showDiv">{{state2}}</div>
  <button @click="myFn">按钮</button>
  <comp></comp>
</template>
<script>
import { readonly, isReadonly, shallowReadonly } from "vue";
export default {
  name: "HelloWorld",
  setup() {
    let state = shallowReadonly({ name: "123", detail:{age:"12"} });
    let state2 = shallowReadonly("1245");
    function myFn() {
      state.name = "456"
      state2 = "aaaa"
    }
    return { state, state2, myFn };
  },
};
</script>
<style scoped>
.showDiv {
  width: 100px;
  height: 100px;
  background: red;
  margin: auto auto;
  text-align: center;
  line-height: 100px;
  color: aliceblue;
}
button {
  width: 100px;
  height: 30px;
  margin-top: 10px;
}
</style>
