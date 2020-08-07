<template>
  <div>
    <Preloader />
    <Topbar />
    <div v-scroll-spy="{ offset: 0, allowNoActive: true }">
      <section>
        <Home />
      </section>
      <!-- <section>
        <AboutSplit />
      </section> -->
      <section>
        <About />
      </section>
      <section>
        <Portfolio />
      </section>
      <section>
        <Wallpapers />
      </section>
    </div>
    <WebsiteFooter />
  </div>
</template>

<script>
import Topbar from "../components/topbar/Topbar";
import Home from "../components/home/HomeWallpaper";
import About from "../components/about/About";
import AboutSplit from "../components/aboutSplit/About";
import Portfolio from "../components/portfolio/Portfolio";
import Wallpapers from "@/components/wallpapers/Wallpapers";
import WebsiteFooter from "../components/footer/WebsiteFooter";
import Preloader from "@/components/preloader/Preloader";

export default {
  components: {
    Topbar,
    Home,
    About,
    AboutSplit,
    Portfolio,
    Wallpapers,
    WebsiteFooter,
    Preloader
  },
  mounted() {
    setTimeout(() => {
      const preloader = document.getElementById("preloader");
      preloader.classList.toggle("loaded");
    }, 500);
  }
};
</script>

<style></style>
