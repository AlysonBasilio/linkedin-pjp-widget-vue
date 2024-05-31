import { describe, it, expect, afterEach, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import LinkedInPJPWidget from './LinkedInPJPWidget.vue';

describe('components > LinkedInPJPWidget', () => {
  let component: ReturnType<typeof mount>;

  beforeEach(() => {
    component = mount(LinkedInPJPWidget, {
      props: {
        apiKey: 'test-api',
      },
    });
  })

  afterEach(() => {
    component.unmount();
  })

  it('adds the scripts to the document', () => {
    expect(document.head.querySelector('script[src="https://platform.linkedin.com/xdoor/scripts/in.js"]')).not.toBeNull();
    const parser = new DOMParser();
    const html = parser.parseFromString(component.html(), 'text/html');
    expect(html.querySelector('script[type="IN/UJPWidget"]')).not.toBeNull();
  });

  describe('when calling the confirmJobPoster function', () => {
    it('emits the event with the data', () => {

      const data = [{
        integrationContext: 'urn:li:contract:430400943',
        integrationType: 'PREMIUM_JOB_POSTING',
        onboardingStatus: 'REQUESTED',
        tenantType: 'JOBS',
      }];

      window.confirmJobPoster(data);

      expect(component.emitted()['linkedin-pjp-confirmed']).toStrictEqual([[data]]);
    });
  });

  describe('when unmounting the component', () => {
    it('removes the scripts from the document', () => {
      component.unmount();

      expect(document.head.querySelector('script[src="https://platform.linkedin.com/xdoor/scripts/in.js"]')).toBeNull();
      expect(document.body.querySelector('script[type="IN/UJPWidget"]')).toBeNull();
    });
  });
});
