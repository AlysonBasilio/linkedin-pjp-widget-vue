<template>
  <input type="text" v-model="apiKey" @input="load" />
  <LinkedInPJPWidget :api-key="apiKey" v-if="!loading" />
</template>

<script setup lang="ts">
// 78opeb626jbzq7
import { ref } from 'vue';
import LinkedInPJPWidget from './components/LinkedInPJPWidget.vue'

const apiKey = ref('')
const loading = ref(false)

const load = () => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 500)
}
</script>

<style scoped>
</style>
