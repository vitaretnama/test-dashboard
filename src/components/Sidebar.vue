<script setup>
import { useStore } from 'vuex'
import router from '../router'
const store = useStore()
</script>

<template>
  <div class="h-screen w-[300px] bg-gray-800">
    <div class="bg-gray-700 h-[50px]">
      <div
        class="text-xl font-bold text-center flex items-center justify-center text-white h-full"
      >
        Office Dashboard
      </div>
      <div>
        <div
          class="flex flex-col justify-between h-[calc(100vh-3rem)] bg-gray-900"
        >
          <div class="menu-profile text-left px-2 whitespace-nowrap">
            <div
              class="profile flex justify-center items-center text-center p-5"
            >
              <div class="text-center">
                <img
                  src="https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80"
                  alt="Profile Picture"
                  class="p-1 w-24 h-24 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 mb-4"
                />
                <h5 class="text-xl font-medium leading-tight mb-2 text-white">
                  Profile
                </h5>
                <p class="text-gray-500">Admin</p>
              </div>
            </div>
            <div
              class="py-3 rounded-sm cursor-pointer text-gray-300 hover:text-white"
            >
              <router-link to="/masteruser" class="px-10 flex space-x-4"
                ><span class="pi pi-user"></span><span>Master User</span></router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
