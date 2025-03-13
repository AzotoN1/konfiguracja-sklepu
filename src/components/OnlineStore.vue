<template>
    <div class="container mx-auto p-4">
      <!-- Header with back button -->
      <div class="mb-6">
        <Button class="test-bg" icon="pi pi-arrow-left" size="medium" severity="contrast" text @click="goBack" label="Wróć do wyboru stylu"/>
      </div>
  
      <!-- Main heading -->
      <h1 class="text-5xl leading-16 font-bold mb-8">
        Skonfiguruj twój sklep i zacznij <span class="italic font-light">sprzedawać</span> <br> online!
      </h1>
  
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Left column - Store and company data -->
        <div>
          <StoreDataForm />
        </div>
  
        <!-- Right column - Products -->
        <div>
          <ProductsSection />
        </div>
      </div>
  
      <!-- Bottom section with progress steps and generate button -->
      <div class="flex justify-end mt-8">
        <ProgressSteps />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import StoreDataForm from './StoreDataForm.vue';
  import ProductsSection from './ProductsSection.vue';
  import ProgressSteps from './ProgressSteps.vue';
  
  const goBack = () => {
    // Logic to navigate back
    console.log('Navigating back to style selection');
  };

  </script>