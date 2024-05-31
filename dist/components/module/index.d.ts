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
export declare function addLinkedInPJPWidget({ apiKey, htmlElementToAttachWidget, onJobPosterConfirmed, }: AddLinkedInPJPWidgetParams): {
    linkedInScript: HTMLScriptElement;
    widgetScript: HTMLScriptElement;
};
export {};
