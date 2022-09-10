<template>
 <Header></Header>
  <main class="p-8 pt-0">
    <Constructor v-if="activeTab === 1"></Constructor>
    <MiniConstructor v-if="activeTab === 2"></MiniConstructor>
    <Puzzle v-if="activeTab === 3"></Puzzle>
    <Other v-if="activeTab === 4"></Other>
  </main>
</template>

<script setup>
import {computed} from "vue";
import Header from "@/components/Header";
import {useStore} from "@/store";
import Constructor from "@/components/Constructor";
import MiniConstructor from "@/components/MiniConstructor";
import Puzzle from "@/components/Puzzle";
import Other from "@/components/Other";

const store = useStore()

const activeTab = computed(() => store.state.tabs.activeTab)



</script>

<style></style>
