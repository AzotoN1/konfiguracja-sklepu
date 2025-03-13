import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import RadioButton from 'primevue/radiobutton';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Aura from '@primeuix/themes/aura';
import Card from 'primevue/card';
import Divider from 'primevue/divider';
import Stepper from 'primevue/stepper';
import StepList from 'primevue/steplist';
import StepPanel from 'primevue/steppanel';
import Step from 'primevue/step';
import StepItem from 'primevue/stepitem';
import Menu from 'primevue/menu';
import BaseTextarea from './components/base/BaseTextarea.vue';
import FloatLabel from 'primevue/floatlabel';
// Import Tailwind CSS
import './assets/main.css';

const app = createApp(App);

// Register PrimeVue with PT configuration
app.use(PrimeVue, {
    ripple: true,
    theme: { preset: Aura },
    pt: {
        button: {
            root: ({ props }) => ({
                class: [
                    // Success button styles
                    {
                        ' !bg-green-700 !border-green-700 hover:!bg-green-800 hover:!border-green-800': props.severity === 'success'
                    },
                    // Size styles
                    {
                        'h-[40px]': props.size === 'medium'
                    }
                ]
            }),
            label: ({ props }) => ({
                class: [
                    // Success button styles
                    {
                        '!font-medium text-sm': props.severity === 'success'
                    }
                ]
            })
        },
        textarea: {
            root: {
                class: 'relative'
            }
        },
        
    }
});

// Register PrimeVue components globally
app.component('Button', Button);
app.component('InputText', InputText);
app.component('RadioButton', RadioButton);
app.component('DataTable', DataTable);
app.component('Column', Column);
app.component('Card', Card);
app.component('Divider', Divider);
app.component('Stepper', Stepper);
app.component('StepList', StepList);
app.component('StepPanel', StepPanel);
app.component('Step', Step);
app.component('StepItem', StepItem);
app.component('Menu', Menu);
app.component('Textarea', BaseTextarea);
app.component('FloatLabel', FloatLabel);
app.mount('#app');