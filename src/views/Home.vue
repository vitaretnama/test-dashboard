<script setup>
import Header from "../components/Header.vue";
import Sidebar from "../components/Sidebar.vue";
</script>

<template>
  <div class="w-full h-full flex">
    <Sidebar />
    <div class="w-full h-full">
      <Header />
      <div class="w-full h-[calc(100vh-50px)]">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
