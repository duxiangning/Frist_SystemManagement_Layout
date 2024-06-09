<template>
  <div>
    <!--  <style> ---》 给导航栏设置宽度 , 并使高度可以到底&ndash;&gt;100vh - 50px-->
    <el-menu
        style="width: 200px; min-height: calc(100vh - 50px)"
        default-active="user"
        :default-openeds="[1]"
        router
        class="el-menu-vertical-demo"
    >
        <el-sub-menu index="1">
          <template #title>
            <el-icon><location/></el-icon>
            <span>系统管理</span>
          </template>
          <el-menu-item index="user">用户管理</el-menu-item>
          <el-menu-item index="book">图书管理</el-menu-item>
        </el-sub-menu>
    </el-menu>
  </div>
</template>

<script>
import {Location} from "@element-plus/icons-vue";

export default {
  name: "Aside",
  components: {Location}
}
</script>

<style scoped>

</style>