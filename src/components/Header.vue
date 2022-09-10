<template>
  <div class="flex pt-4 px-8 pb-8 justify-between items-center">
    <img
      class="flex-grow-0"
      src="../assets/icons/logo.svg"
      width="120"
      height="120"
      alt="logo"
    />
    <div class="flex-grow pl-8">
      <div class="flex justify-end gap-5 mb-5">
        <div class="menu-item">+375 (33) 601-69-27</div>
        <div class="menu-item">О нас</div>
        <div class="menu-item">Kонтакты</div>
      </div>
      <div class="flex justify-start gap-5 text-xl border-t-sea-500 border-t-2 border-b-sea-500 border-b-2 py-4">
        <div v-for="tab of tabs" :key="tab.id" :class="{underline: activeTab === tab.id}" class="menu-item" @click="setActiveTab(tab.id)">
          {{ tab.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "@/store";
import {computed} from "vue";

const store = useStore();
const activeTab = computed(() => store.state.tabs.activeTab)
const tabs = [
  { id: 1, name: "Конструктор" },
  { id: 2, name: "Мини-конструктор" },
  { id: 3, name: "Мозайка" },
  { id: 4, name: "Разное" },
];

const setActiveTab = (id) => {
  store.commit("tabs/setActiveTab", id);
};
</script>

<style>
.menu-item {
  @apply font-bold hover:underline hover:cursor-pointer;
}
</style>
