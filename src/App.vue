<template>
  <div>
    <header>
      <div class="px-5">
        <div class="flex justify-between items-center">
          <img src="https://images.saasworthy.com/webwave_11098_logo_1649437081_bttqz.jpg" alt="logo" class="w-24 h-24">
          <Button icon="pi pi-times" severity="contrast" text/>
        </div>
      </div>
    </header>
    <OnlineStore class="max-w-[1200px] mx-auto" />
  </div>
</template>

<script setup>
import OnlineStore from './components/OnlineStore.vue';
</script>