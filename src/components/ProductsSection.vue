<template>
  <div>
    <h2 class="text-xl font-semibold mb-4">Produkty</h2>

    <!-- Product addition options -->
    <div class="mb-4">
      <Card class=" mb-2" :class="{ '!bg-green-50': productAdditionMethod === 'ai' }">
        <template #content>
          <div class="flex justify-between items-center">
            <div>
              <RadioButton v-model="productAdditionMethod" inputId="aiProducts" name="productMethod" value="ai" />
              <label for="aiProducts" class="ml-2 cursor-pointer">
                Dodaj przykładowe produkty za pomocą AI
              </label>
            </div>
            <Button icon="pi pi-sparkles" text severity="help" class="p-button-text ml-2" @click="editAIProducts" />
          </div>
        </template>
      </Card>
      <Card class=" mb-2" :class="{ '!bg-green-50': productAdditionMethod === 'custom' }">
        <template #content>
          <div class="flex items-center gap-1">
            <RadioButton v-model="productAdditionMethod" inputId="customProducts" name="productMethod" value="custom" />
            <label for="customProducts" class="ml-2 cursor-pointer">
              Dodaj własne produkty
            </label>
          </div>
          <!-- Products list section -->
          <Divider v-if="productAdditionMethod === 'custom'" />
          <div v-if="productAdditionMethod === 'custom'" class="py-4 pt-0 bg-green-50 rounded-md mb-4">
            <div class="flex justify-between items-center mb-4">
              <h3 class="font-medium">Lista produktów</h3>
              <Button label="Dodaj produkt" icon="pi pi-sort-down" severity="success" iconPos="right" @click="openAddProductMenu" />
              <Menu ref="addProductMenu" :model="addProductMenuItems" :popup="true">
                <template #item="{ item }">
                  <div class="flex items-center gap-2 cursor-pointer py-3 pl-5 hover:bg-green-100 bg">
                    <span class="">{{ item.label }}</span>
                  </div>
                </template>
              </Menu>
            </div>

            <DataTable :value="products" responsiveLayout="scroll" class="mb-3" :pt="{
        column: {
          headerCell: {
            class: ['text-white !bg-gray-200 !py-3'],
          },
        },
      }">
              <Column field="image" header="Produkt">
                <template #body="slotProps">
                  <img :src="slotProps.data.image" :alt="slotProps.data.name"
                    class="w-12 h-12 object-cover rounded-md" />
                </template>
              </Column>
              <Column field="name" header="Nazwa" />
              <Column field="price" header="Cena">
                <template #body="slotProps">
                  {{ slotProps.data.price }} PLN
                </template>
              </Column>
              <Column field="actions" header="Akcja">
                <template #body="slotProps">
                  <Menu ref="rowMenu" :model="actionMenuItems" :popup="true" />
                  <Button icon="pi pi-ellipsis-h" text rounded severity="secondary"
                    @click="(event) => openRowMenu(event, slotProps.data)" />
                </template>
              </Column>
            </DataTable>

            <div class="flex items-center gap-2 text-sm">
              <Button severity="secondary" size="small" @click="downloadCsv">produkty.csv</Button>
              <Button icon="pi pi-trash" severity="contrast" text size="small" @click="downloadCsv" />
            </div>
          </div>
        </template>
      </Card>
    </div>
  </div>
  <Button 
        icon="pi pi-bolt" 
        label="Wygeneruj sklep" 
        class="!float-right"
        severity="help"
        size="large"
        @click="generateStore" 
      />
</template>
  
  <script setup>
  import { Card } from 'primevue';
  import { ref } from 'vue';
  
  const productAdditionMethod = ref('custom');
  const addProductMenu = ref();
  const rowMenu = ref();
  const selectedProduct = ref(null);

  const addProductMenuItems = ref([
    { 
      label: 'Ręcznie', 
      icon: 'pi pi-pencil',
      command: () => addProductManually()
    },
    { 
      label: 'Wgraj plik CSV', 
      icon: 'pi pi-file',
      command: () => uploadCsv()
    }
  ]);

  const actionMenuItems = ref([
    { label: 'Edytuj produkt', icon: 'pi pi-pencil' },
    { label: 'Usuń produkt', icon: 'pi pi-trash', severity: 'danger' }
  ]);

  const openRowMenu = (event, data) => {
    selectedProduct.value = data;
    rowMenu.value.toggle(event);
  };

  const products = ref([
    { 
      id: 1, 
      name: 'Stolik kawowy', 
      price: 449, 
      image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQpTCp4JNQw_bq7-q5zLoItOqMJXTd1cLHdVkLrPehxzxDW69wcxawI2vNNqqqKIsAVLgL33I-j3wtzxsadNjJ53n6vzVYeALcs0BlFRMOyPMPuszcAMYvxKnEkT_VpDL-M-UD8PRsg&usqp=CAc' 
    },
    { 
      id: 2, 
      name: 'Krzesło', 
      price: 99, 
      image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR3d4mfELbSuMams8DaM6nhzzSNQpFzX2Jd99SKSKgmKMUV1PpRIAoRXrqsSTWyAZ0mdD2qGFK7njDUwry4PsRnvcqEu8qUF0vBbejLZInZ9Pb5U4OccH819CzvdzubEZL1psPyv_IS2Q4&usqp=CAc' 
    },
    { 
      id: 3, 
      name: 'Fotel', 
      price: 569, 
      image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSY30BEEztJ-1JsTWahQvC7ga8Oamb7JA0lzPO6HOc9TgNr6HSTBiWLHYjBv-B_E0qkrNmoJv46usvKFCgArU9j8UKSN1ru0EPC33CDcfLyR4_Jdc2_EUJflNJ9DFKq2p6Vs-LXDWk&usqp=CAc' 
    }
  ]);
  
  const editAIProducts = () => {
    console.log('Editing AI-generated products');
  };
  
  const addProductManually = () => {
    console.log('Otwieranie formularza ręcznego dodawania produktu');
  };

  const uploadCsv = () => {
    console.log('Otwieranie okna wgrywania pliku CSV');
  };
  
  const downloadCsv = () => {
    console.log('Downloading products CSV');
  };

  const openAddProductMenu = (event) => {
    addProductMenu.value.toggle(event);
  };

  const generateStore = () => {
    // Logic to generate the online store
    console.log('Generating store');
  };
  </script>