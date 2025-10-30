<script setup>
import MainLayout from "@/layout/MainLayout.vue";
import AuthLayout from "@/layout/AuthLayout.vue";
import {useRoute} from 'vue-router'
import {computed} from "vue";

const route = useRoute();
const layout = computed(() => route.meta.layout)
const currentComponent = computed(() => layout.value === 'Main' ? MainLayout : AuthLayout);

</script>

<template>
  <component :is="currentComponent"/>
</template>
