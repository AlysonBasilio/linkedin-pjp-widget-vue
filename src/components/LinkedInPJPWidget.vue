<template>
  <div ref="linkedinWidget" class="linkedin-widget" />
</template>

<script setup lang="ts">
import { ref, onBeforeUnmount, onMounted } from 'vue'
import { addLinkedInPJPWidget } from './module';

const props = defineProps<{ apiKey: string }>()
const emit = defineEmits(['linkedin-pjp-confirmed'])

let scriptElements = ref<HTMLScriptElement[]>([])
let linkedinWidget = ref<HTMLElement | null>(null)

onBeforeUnmount(() => {
  scriptElements.value.forEach((scriptElement) => {
    scriptElement.remove();
  });
})

onMounted(() => {
  if (!linkedinWidget.value) {
    throw new Error('linkedinWidget is not defined')
  }
  scriptElements.value = Object.values(addLinkedInPJPWidget({
    apiKey: props.apiKey,
    htmlElementToAttachWidget: linkedinWidget.value,
    onJobPosterConfirmed: (integrations) => {
      emit('linkedin-pjp-confirmed', integrations)
    },
  }))
})
</script>

<style scoped>
.linkedin-widget {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
