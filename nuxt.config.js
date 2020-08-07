export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: "Frontend Joe | Personal Website Of Joe Harrison",
    bodyAttrs: {
      "data-spy": "scroll"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/images/favicon.png" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Poppins:400,600,800,900&display=swap"
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined"
      },
      {
        rel: "stylesheet",
        href: "https://unpkg.com/vue2-animate/dist/vue2-animate.min.css"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [
    "static/css/bootstrap.css",
    "@fortawesome/fontawesome-svg-core/styles.css"
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: "~/plugins/vue2-scrollspy", mode: "client", ssr: false },
    { src: "~/plugins/vue-carousel", mode: "client", ssr: false },
    { src: "~/plugins/fontawesome.js" },
    { src: "~/plugins/vue-animate-scroll.js" },
    { src: "~/plugins/vue-scrollto.js" }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    "nuxt-fontawesome"
    //OR like this
    //[
    // "nuxt-fontawesome",
    // ["vue-scrollto/nuxt", { duration: 300 }]
    // {
    //   component: "fa",
    //   imports: [
    //     //import whole set
    //     {
    //       set: "@fortawesome/free-solid-svg-icons",
    //       icons: ["fas"]
    //     },
    //     //import 2 icons from set
    //     // please note this is PRO set in this example,
    //     // you must have it in your node_modules to actually import
    //     {
    //       set: "@fortawesome/pro-regular-svg-icons",
    //       icons: ["faAdjust", "faArchive"]
    //     }
    //   ]
    // }
    //]
  ],
  /*
   ** Build configuration
   */
  build: {
    transpile: ["vue-carousel"],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
