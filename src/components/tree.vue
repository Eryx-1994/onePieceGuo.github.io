<template>
  <div onkeyup="this.re">s12</div>
</template>
<script>
export default {
  data() {
    return {
      value: "123",
    }
  },
  mounted() {
    // function setTreeData(source) {
    //   let cloneData = JSON.parse(JSON.stringify(source)) // 对源数据深度克隆
    //   return cloneData.filter((father) => {
    //     // 循环所有项，并添加children属性
    //     let branchArr = cloneData.filter((child) => father.id == child.parentId) // 返回每一项的子级数组
    //     console.log(branchArr)

    //     branchArr.length > 0 ? (father.children = branchArr) : "" //给父级添加一个children属性，并赋值
    //     return father.parentId == 0 //返回第一层
    //   })
    // }
  },
  computed: {

  },
  created() {},
  updated() {},
  beforeCreate() {},
  beforeDestroy() {},
}
</script>
