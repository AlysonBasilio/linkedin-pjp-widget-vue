import { render } from '@testing-library/vue';
import LinkedInPJPWidget from './LinkedInPJPWidget.vue';

describe('components > LinkedInPJPWidget', () => {
  it('adds the scripts to the document', () => {
    render(LinkedInPJPWidget, {
      props: {
        apiKey: 'test-api',
      },
    })

    // eslint-disable-next-line testing-library/no-node-access
    expect(document.head.querySelector('script[src="https://platform.linkedin.com/xdoor/scripts/in.js"]')).not.toBeNull();
    // eslint-disable-next-line testing-library/no-node-access
    expect(document.body.querySelector('script[type="IN/UJPWidget"]')).not.toBeNull();
  });

  describe('when calling the confirmJobPoster function', () => {
    it('emits the event with the data', () => {
      const component = render(LinkedInPJPWidget, {
        props: {
          apiKey: 'test-api',
        },
      })

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

  describe('when destroying the component', () => {
    it('removes the scripts from the document', () => {
      const component = render(LinkedInPJPWidget, {
        props: {
          apiKey: 'test-api',
        },
      })
      component.unmount();

      // eslint-disable-next-line testing-library/no-node-access
      expect(document.head.querySelector('script[src="https://platform.linkedin.com/xdoor/scripts/in.js"]')).toBeNull();
      // eslint-disable-next-line testing-library/no-node-access
      expect(document.body.querySelector('script[type="IN/UJPWidget"]')).toBeNull();
    });
  });
});
