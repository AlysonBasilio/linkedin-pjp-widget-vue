# linkedin-pjp-widget-vue

A vue component to implement [LinkedIn PJP Widget](https://learn.microsoft.com/en-us/linkedin/talent/job-postings/api/job-posting-customer-configuration) in vue projects.

## Installation

```
npm install linkedin-pjp-widget-vue
```

or

```
yarn add linkedin-pjp-widget-vue
```

## Basic Usage

```
<template>
  <LinkedInPJPWidget
    :api-key="apiKey"
    @linkedin-pjp-confirmed="onLinkedInPJPConfirmed"
  />
</template>
<script>
import LinkedInPJPWidget from "linkedin-pjp-widget-vue";

export default {
  components: {
    LinkedInPJPWidget
  },
  data() {
    return {
      apiKey: ''
    }
  },
  methods: {
    onLinkedInPJPConfirmed(integrations) {
      /*
        Example of integrations:
        integrations: [{
          integrationContext: "urn:li:contract:430400943",
          integrationType: "PREMIUM_JOB_POSTING",
          onboardingStatus: "REQUESTED",
          tenantType: "JOBS",
        }]
      */
    }
  }
}
</script>
```

## Development

```
npm run dev
```
