<template>
  <div class="flex pt-4 px-8 pb-8 justify-between items-center">
    <img class="flex-grow-0" src="../assets/icons/logo.svg" width="120" height="120" alt="logo" />
    <div class="flex-grow pl-8">
      <div class="flex justify-end gap-5">
        <div class="menu-item">+375 (33) 601-69-27</div>
        <div class="menu-item">О нас</div>
        <div class="menu-item">Kонтакты</div>
      </div>
      <div class="flex justify-start gap-5 text-xl">
        <div class="menu-item">Конструктор</div>
        <div class="menu-item">Мини-конструктор</div>
        <div class="menu-item">Мозайка</div>
        <div class="menu-item">Разное</div>
      </div>
    </div>




  </div>
</template>

<script setup></script>

<style>
.menu-item {
  @apply font-bold hover:underline hover:cursor-pointer;
}
</style>
