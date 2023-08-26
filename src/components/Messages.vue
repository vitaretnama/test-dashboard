<script setup>
import { defineProps } from "vue";
import Message from "primevue/message";

defineProps({
  danger: Boolean,
  dangerMsg: String,
  warning: Boolean,
  warningMsg: String,
  info: Boolean,
  infoMsg: String,
  success: Boolean,
  successMsg: String,
});
</script>

<template>
  <div class="fixed md:top-70 md:right-[-100px] md:w-1/2 bottom-30 md:flex md:flex-col">
    <Message severity="success" v-if="success">{{
      successMsg || "Success Message Content"
    }}</Message>
    <Message severity="info" v-if="info">{{
      infoMsg || "Info Message Content"
    }}</Message>
    <Message severity="warn" v-if="warning">{{
      warningMsg || "Warning Message Content"
    }}</Message>
    <Message severity="error" v-if="danger">{{
      dangerMsg || "Danger Message Content"
    }}</Message>
  </div>
</template>
