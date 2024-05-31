type Integration = {
  integrationContext: string;
  integrationType: string;
  onboardingStatus: string;
  tenantType: string;
};
type AddLinkedInPJPWidgetParams = {
  apiKey: string;
  htmlElementToAttachWidget: HTMLElement;
  onJobPosterConfirmed: (integrations: Integration[]) => void;
};
declare global {
  interface Window {
    confirmJobPoster: (integrations: Integration[]) => void;
  }
}

export function addLinkedInPJPWidget({
  apiKey,
  htmlElementToAttachWidget,
  onJobPosterConfirmed,
}: AddLinkedInPJPWidgetParams) {
  const linkedInScript = document.createElement('script');
  linkedInScript.type = 'text/javascript';
  linkedInScript.src = 'https://platform.linkedin.com/xdoor/scripts/in.js';

  linkedInScript.innerHTML = `
    api_key: ${apiKey}
    extensions: UJPWidget@https://platform.linkedin.com/rsc/extensions/ujp-onboarding-widget
  `;

  document.head.appendChild(linkedInScript);

  const widgetScript = document.createElement('script');
  widgetScript.type = 'IN/UJPWidget';
  widgetScript.setAttribute('data-onconfirmjobposter', 'confirmJobPoster');

  widgetScript.setAttribute('data-width', '100%');
  htmlElementToAttachWidget.appendChild(widgetScript);

  window.confirmJobPoster = (integrations) => {
    /*
      Example of integrations:
      integrations: [{
        integrationContext: "urn:li:contract:430400943",
        integrationType: "PREMIUM_JOB_POSTING",
        onboardingStatus: "REQUESTED",
        tenantType: "JOBS",
      }]
    */
    onJobPosterConfirmed(integrations);
  };

  return { linkedInScript, widgetScript };
}
