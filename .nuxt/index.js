import Vue from 'vue'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from './components/nuxt-error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'

/* Plugins */

import nuxt_plugin_templatesplugin12c46eed_5c5de106 from 'nuxt_plugin_templatesplugin12c46eed_5c5de106' // Source: ./templates.plugin.12c46eed.js (mode: 'all')
import nuxt_plugin_vue2scrollspy_88c5e0b8 from 'nuxt_plugin_vue2scrollspy_88c5e0b8' // Source: ../plugins/vue2-scrollspy (mode: 'client')
import nuxt_plugin_vuecarousel_6c010c3d from 'nuxt_plugin_vuecarousel_6c010c3d' // Source: ../plugins/vue-carousel (mode: 'client')
import nuxt_plugin_fontawesome_b8db358e from 'nuxt_plugin_fontawesome_b8db358e' // Source: ../plugins/fontawesome.js (mode: 'all')
import nuxt_plugin_vueanimatescroll_72d731e1 from 'nuxt_plugin_vueanimatescroll_72d731e1' // Source: ../plugins/vue-animate-scroll.js (mode: 'all')
import nuxt_plugin_vuescrollto_44ce9a1c from 'nuxt_plugin_vuescrollto_44ce9a1c' // Source: ../plugins/vue-scrollto.js (mode: 'all')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext)

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":"Frontend Joe | Personal Website Of Joe Harrison","bodyAttrs":{"data-spy":"scroll"},"meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":"Official Website Of @frontendjoe"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Fimages\u002Ffavicon.png"},{"rel":"stylesheet","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Poppins:400,600,800,900&display=swap"},{"rel":"stylesheet","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Material+Icons|Material+Icons+Outlined"},{"rel":"stylesheet","href":"https:\u002F\u002Funpkg.com\u002Fvue2-animate\u002Fdist\u002Fvue2-animate.min.css"}],"style":[],"script":[]},

    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_templatesplugin12c46eed_5c5de106 === 'function') {
    await nuxt_plugin_templatesplugin12c46eed_5c5de106(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vue2scrollspy_88c5e0b8 === 'function') {
    await nuxt_plugin_vue2scrollspy_88c5e0b8(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vuecarousel_6c010c3d === 'function') {
    await nuxt_plugin_vuecarousel_6c010c3d(app.context, inject)
  }

  if (typeof nuxt_plugin_fontawesome_b8db358e === 'function') {
    await nuxt_plugin_fontawesome_b8db358e(app.context, inject)
  }

  if (typeof nuxt_plugin_vueanimatescroll_72d731e1 === 'function') {
    await nuxt_plugin_vueanimatescroll_72d731e1(app.context, inject)
  }

  if (typeof nuxt_plugin_vuescrollto_44ce9a1c === 'function') {
    await nuxt_plugin_vuescrollto_44ce9a1c(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // If server-side, wait for async component to be resolved first
  if (process.server && ssrContext && ssrContext.url) {
    await new Promise((resolve, reject) => {
      router.push(ssrContext.url, resolve, () => {
        // navigated to a different route in router guard
        const unregister = router.afterEach(async (to, from, next) => {
          ssrContext.url = to.fullPath
          app.context.route = await getRouteData(to)
          app.context.params = to.params || {}
          app.context.query = to.query || {}
          unregister()
          resolve()
        })
      })
    })
  }

  return {
    app,
    router
  }
}

export { createApp, NuxtError }
