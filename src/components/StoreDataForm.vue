<template>
  <Form
    v-slot="$form"
    :initialValues="{
      storeName: '',
      taxNumber: '',
    }"
    @submit="onSubmit"
    :validateOnInput="true"
    :resolver
  >
    <!-- Store data section -->
    <div class="mb-6">
      <h2 class="text-xl font-semibold mb-4">Dane sklepu</h2>

      <div class="mb-4">
        <label class="block mb-2">Nazwa sklepu *</label>
        <FormField
          v-slot="$field"
          name="storeName"
          :resolver="storeNameResolver"
        >
          <InputText
            placeholder="Wpisz nazwę sklepu"
            class="w-full"
            size="large"
          />
          <Message
            v-if="$field?.invalid"
            severity="error"
            size="small"
            variant="simple"
            >{{ $field.error?.message }}</Message
          >
        </FormField>
      </div>
    </div>

    <!-- Company data section -->
    <div class="mb-6">
      <h2 class="text-xl font-semibold mb-4">Dane firmy</h2>

      <div class="mb-4">
        <label class="block mb-2">NIP</label>
        <FormField v-slot="$field" name="taxNumber" :resolver="nipResolver">
          <InputNumber
            ref="nipInput"
            placeholder="Podaj numer NIP"
            :useGrouping="false"
            class="w-full"
            size="large"
          />
          <Message
            v-if="$field?.invalid"
            severity="error"
            size="small"
            variant="simple"
            >{{ $field.error?.message }}</Message
          >
        </FormField>
      </div>

      <div class="flex items-center gap-2">
        <Button
          label="Pobierz z GUS"
          severity="secondary"
          @click="fetchFromGUS"
          size="large"
          type="button"
        />
        <div class="text-gray-500 ml-3">lub</div>
        <Button
          label="Wpisz ręcznie"
          text
          severity="contrast"
          @click="enterManually"
          size="large"
          type="button"
        />
      </div>
    </div>
  </Form>
</template>

<script setup>
import { Form, FormField } from "@primevue/forms";
import Message from "primevue/message";
import InputNumber from "primevue/inputnumber";
import { ref } from "vue";

const nipInput = ref(null);

const storeNameResolver = ({ value }) => {
  const errors = [];
  console.log(value);
  if (!value) {
    errors.push({
      message: "Nazwa sklepu jest wymagana",
    });
  }

  return { errors };
};

const nipResolver = ({ value }) => {
  const errors = [];
  const inputToString = value.toString();
  if (inputToString.length !== 10) {
    errors.push({
      message: "NIP musi składać się z 10 cyfr",
    });
  }

  return { errors };
};

const onSubmit = (event) => {
  if (event.isValid) {
    console.log("Form submitted:", event.values);
  }
};

const fetchFromGUS = () => {
  // Logic to fetch company data from GUS database
  console.log("Fetching data from GUS");
};

const enterManually = () => {
  console.log("Switching to manual entry");
  // Ustawienie fokusu na input NIP - dostęp do właściwego elementu input
  setTimeout(() => {
    const inputElement = nipInput.value?.$el.querySelector("input");
    if (inputElement) {
      inputElement.focus();
    }
  });
};
</script>

<style scoped>
.p-error {
  color: var(--red-500);
}
</style>
