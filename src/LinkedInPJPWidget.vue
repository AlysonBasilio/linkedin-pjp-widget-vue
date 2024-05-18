<template>
  <div ref="linkedinWidget" class="linkedin-widget" />
</template>

<script>
import { addLinkedInPJPWidget } from './module';

export default {
  name: 'LinkedInPJPWidget',
  props: {
    apiKey: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      scriptElements: null,
    };
  },
  beforeDestroy() {
    this.removeScripts();
  },
  mounted() {
    this.loadScripts();
  },
  methods: {
    loadScripts() {
      this.scriptElements = addLinkedInPJPWidget({
        apiKey: this.apiKey,
        htmlElementToAttachWidget: this.$refs.linkedinWidget,
        // an 'linkedin-pjp-confirmed' event will be emitted when the user has confirmed the widget
        // with a integrations payload
        onJobPosterConfirmed: this.onJobPosterConfirmed,
      });
    },
    onJobPosterConfirmed(integrations) {
      this.$emit('linkedin-pjp-confirmed', integrations);
    },
    removeScripts() {
       if (this.scriptElements) {
        Object.values(this.scriptElements).forEach((scriptElement) => {
          scriptElement.remove();
        });
       }
    },
  },
};
</script>

<style lang="scss">
.linkedin-widget {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
