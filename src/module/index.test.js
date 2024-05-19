import { addLinkedInPJPWidget } from './index';

describe('addLinkedInPJPWidget', () => {
  const apiKey = 'test-api'
  const htmlElementToAttachWidget = document.createElement('div');
  const onJobPosterConfirmed = jest.fn();

  it('adds the LinkedIn PJP widget to the page and returns the scripts element', () => {
    const scripts = addLinkedInPJPWidget({
      apiKey,
      htmlElementToAttachWidget,
      onJobPosterConfirmed,
    });

    expect(document.head.querySelector('script[src="https://platform.linkedin.com/xdoor/scripts/in.js"]')).toBe(scripts.linkedInScript);
    expect(htmlElementToAttachWidget.querySelector('script[type="IN/UJPWidget"]')).toBe(scripts.widgetScript);
  });

  describe('when calling the confirmJobPoster function', () => {
    beforeEach(() => {
      addLinkedInPJPWidget({
        apiKey,
        htmlElementToAttachWidget,
        onJobPosterConfirmed,
      });
    });

    it('emits the event with the data', () => {
      const data = [{
        integrationContext: 'urn:li:contract:430400943',
        integrationType: 'PREMIUM_JOB_POSTING',
        onboardingStatus: 'REQUESTED',
        tenantType: 'JOBS',
      }];

      window.confirmJobPoster(data);

      expect(onJobPosterConfirmed).toHaveBeenCalledWith(data);
    });
  });
});
