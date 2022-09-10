<template>
  <InputText type="text" v-model="value" />
</template>

<script setup>
import {ref} from 'vue'
import InputText from 'primevue/inputtext'
const value = ref('bla')
</script>

<style></style>
