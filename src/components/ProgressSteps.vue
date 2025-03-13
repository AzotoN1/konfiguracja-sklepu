<template>
  <div class="relative !fixed bottom-8 left-8 z-40">
    <Button 
      @click="toggleSteps"
      severity="primary"
      icon="pi pi-ellipsis-h"
      class="test-bg"
      size="medium"
    >
    </Button>

    <Card v-if="isVisible" class="absolute top-auto -translate-y-[calc(100%+2.5rem)] left-0 z-50 w-80 sm:w-100 m-0 drop-shadow-lg test-border">
      <template #content>
        <Stepper class="test-bg" :value="activeStep">
          <StepItem value="1">
            <Step @click="handleStepClick('1')" class="cursor-pointer">
              <div :class="[
                isStepActive('1') ? '!text-black' : 
                isStepCompleted('1') ? '!text-green-500' : 
                '!text-gray-400'
              ]">Przedstaw wizję</div>
            </Step>
            <StepPanel>
              <div class="text-sm text-gray-500">
                Przedstaw swoją wizję sklepu
              </div>
            </StepPanel>
          </StepItem>
          
          <StepItem value="2">
            <Step @click="handleStepClick('2')" class="cursor-pointer">
              <div :class="[
                isStepActive('2') ? '!text-black' : 
                isStepCompleted('2') ? '!text-green-500' : 
                '!text-gray-400'
              ]">Wybierz zakład</div>
            </Step>
            <StepPanel>
              <div class="text-sm text-gray-500">Wybierz zakład</div>
            </StepPanel>
          </StepItem>
          
          <StepItem value="3">
            <Step @click="handleStepClick('3')" class="cursor-pointer">
              <div :class="[
                isStepActive('3') ? '!text-black' : 
                isStepCompleted('3') ? '!text-green-500' : 
                '!text-gray-400'
              ]">Zdefiniuj styl</div>
            </Step>
            <StepPanel>
              <div class="text-sm text-gray-500">Zdefiniuj styl swojego sklepu</div>
            </StepPanel>
          </StepItem>
          
          <StepItem value="4">
            <Step @click="handleStepClick('4')" class="cursor-pointer">
              <div :class="[
                isStepActive('4') ? '!text-black' : 
                isStepCompleted('4') ? '!text-green-500' : 
                '!text-gray-400'
              ]">Skonfiguruj sklep</div>
            </Step>
            <StepPanel>
              <div class="text-sm text-gray-500">
                Jesteśmy na ostatniej prostej! Czas zdefiniować nazwę, dodać swoje logo nazwę i dane oraz dodać produkty. 
                Możesz je wprowadzić ręcznie, wgrać plik CSV lub pozwolić, aby AI stworzyło dla Ciebie przykładowy asortyment.
              </div>
            </StepPanel>
          </StepItem>
        </Stepper>
      </template>
    </Card>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const activeStep = ref('4');
const isVisible = ref(false);

const toggleSteps = () => {
  isVisible.value = !isVisible.value;
};

const handleStepClick = (stepValue) => {
  activeStep.value = stepValue;
};

const isStepActive = (stepValue) => {
  return activeStep.value === stepValue;
};

const isStepCompleted = (stepValue) => {
  return parseInt(activeStep.value) > parseInt(stepValue);
};
</script>

<style scoped>
:deep(.p-stepper) {
  --stepper-header-gap: 1rem;
}
</style>