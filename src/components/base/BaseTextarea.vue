<template>
  <div class="relative">
    <Textarea
      v-bind="$attrs"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="w-full asdasdasd"
      :maxlength="maxLength"
    />
    <div v-if="maxLength" class="text-right text-sm text-gray-600 mt-1">
      {{ modelValue?.length || 0 }}/{{ maxLength }} znaków
    </div>
  </div>
</template>

<script setup>
import Textarea from 'primevue/textarea';

defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  maxLength: {
    type: Number,
    default: null
  }
});

defineEmits(['update:modelValue']);
</script> 