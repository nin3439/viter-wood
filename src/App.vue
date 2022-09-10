<template>
  <div class="flex ">
    <div class="bg-danger-500">bla</div>
    <InputText v-model="value" type="text" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import InputText from "primevue/inputtext";

const value = ref("bla");
</script>

<style></style>
