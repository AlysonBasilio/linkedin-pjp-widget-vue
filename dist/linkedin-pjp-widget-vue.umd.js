(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["linkedin-pjp-widget-vue"] = factory();
	else
		root["linkedin-pjp-widget-vue"] = factory();
})((typeof self !== 'undefined' ? self : this), () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ entry_lib)
});

;// CONCATENATED MODULE: ../../../.nvm/versions/node/v20.10.0/lib/node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ const setPublicPath = (null);

;// CONCATENATED MODULE: ../../../.nvm/versions/node/v20.10.0/lib/node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../.nvm/versions/node/v20.10.0/lib/node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/LinkedInPJPWidget.vue?vue&type=template&id=66f3943c
var render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',{ref:"linkedinWidget",staticClass:"linkedin-widget"})
}
var staticRenderFns = []


;// CONCATENATED MODULE: ./src/module/index.js
function addLinkedInPJPWidget({
  apiKey,
  htmlElementToAttachWidget,
  onJobPosterConfirmed,
}) {
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

;// CONCATENATED MODULE: ../../../.nvm/versions/node/v20.10.0/lib/node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/LinkedInPJPWidget.vue?vue&type=script&lang=js



/* harmony default export */ const LinkedInPJPWidgetvue_type_script_lang_js = ({
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
});

;// CONCATENATED MODULE: ./src/LinkedInPJPWidget.vue?vue&type=script&lang=js
 /* harmony default export */ const src_LinkedInPJPWidgetvue_type_script_lang_js = (LinkedInPJPWidgetvue_type_script_lang_js); 
;// CONCATENATED MODULE: ../../../.nvm/versions/node/v20.10.0/lib/node_modules/@vue/cli-service/node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-62.use[0]!../../../.nvm/versions/node/v20.10.0/lib/node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??clonedRuleSet-62.use[1]!../../../.nvm/versions/node/v20.10.0/lib/node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!../../../.nvm/versions/node/v20.10.0/lib/node_modules/@vue/cli-service/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-62.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-62.use[3]!../../../.nvm/versions/node/v20.10.0/lib/node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/LinkedInPJPWidget.vue?vue&type=style&index=0&id=66f3943c&prod&lang=scss
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/LinkedInPJPWidget.vue?vue&type=style&index=0&id=66f3943c&prod&lang=scss

;// CONCATENATED MODULE: ../../../.nvm/versions/node/v20.10.0/lib/node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

;// CONCATENATED MODULE: ./src/LinkedInPJPWidget.vue



;


/* normalize component */

var component = normalizeComponent(
  src_LinkedInPJPWidgetvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ const LinkedInPJPWidget = (component.exports);
;// CONCATENATED MODULE: ./src/index.js


/* harmony default export */ const src_0 = (LinkedInPJPWidget);

;// CONCATENATED MODULE: ../../../.nvm/versions/node/v20.10.0/lib/node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ const entry_lib = (src_0);


__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=linkedin-pjp-widget-vue.umd.js.map