declare const _default: import("vue").DefineComponent<__VLS_TypePropsToOption<{
    apiKey: string;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "linkedin-pjp-confirmed": (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToOption<{
    apiKey: string;
}>>> & {
    "onLinkedin-pjp-confirmed"?: ((...args: any[]) => any) | undefined;
}, {}, {}>;
export default _default;

type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToOption<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
