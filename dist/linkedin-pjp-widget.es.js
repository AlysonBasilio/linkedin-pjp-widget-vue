import { defineComponent as s, ref as c, onBeforeUnmount as p, onMounted as a, openBlock as l, createElementBlock as m } from "vue";
function f({
  apiKey: n,
  htmlElementToAttachWidget: o,
  onJobPosterConfirmed: i
}) {
  const t = document.createElement("script");
  t.type = "text/javascript", t.src = "https://platform.linkedin.com/xdoor/scripts/in.js", t.innerHTML = `
    api_key: ${n}
    extensions: UJPWidget@https://platform.linkedin.com/rsc/extensions/ujp-onboarding-widget
  `, document.head.appendChild(t);
  const e = document.createElement("script");
  return e.type = "IN/UJPWidget", e.setAttribute("data-onconfirmjobposter", "confirmJobPoster"), e.setAttribute("data-width", "100%"), o.appendChild(e), window.confirmJobPoster = (r) => {
    i(r);
  }, { linkedInScript: t, widgetScript: e };
}
const u = /* @__PURE__ */ s({
  __name: "LinkedInPJPWidget",
  props: {
    apiKey: {}
  },
  emits: ["linkedin-pjp-confirmed"],
  setup(n, { emit: o }) {
    const i = n, t = o;
    let e = c([]), r = c(null);
    return p(() => {
      e.value.forEach((d) => {
        d.remove();
      });
    }), a(() => {
      if (!r.value)
        throw new Error("linkedinWidget is not defined");
      e.value = Object.values(f({
        apiKey: i.apiKey,
        htmlElementToAttachWidget: r.value,
        onJobPosterConfirmed: (d) => {
          t("linkedin-pjp-confirmed", d);
        }
      }));
    }), (d, g) => (l(), m("div", {
      ref_key: "linkedinWidget",
      ref: r,
      class: "linkedin-widget"
    }, null, 512));
  }
}), k = (n, o) => {
  const i = n.__vccOpts || n;
  for (const [t, e] of o)
    i[t] = e;
  return i;
}, h = /* @__PURE__ */ k(u, [["__scopeId", "data-v-db4014bc"]]);
export {
  h as default
};
