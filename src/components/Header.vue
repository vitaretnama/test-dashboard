<script setup></script>

<template>
  <div class="w-full bg-gray-200">
    <div class="flex justify-between items-center h-[50px]">
      <div class="p-4 cursor-pointer hover:bg-gray-50">
        <i class="pi pi-bars"></i>
      </div>
      <div>
        <div class="flex space-x-3 items-center justify-center px-3">
        <div class="text-md">Admin</div>
        <Avatar
          icon="pi pi-user"
          class="mr-2"
          size="large"
          style="background-color: #2196f3; color: #ffffff"
          shape="circle"
        />
        </div>
      </div>
    </div>
  </div>
</template>
