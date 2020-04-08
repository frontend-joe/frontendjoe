<template>
  <div>
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
        <Contact />
      </section>
    </div>
    <WebsiteFooter />
  </div>
</template>

<script>
import Topbar from "../components/topbar/Topbar";
import Home from "../components/home/Home";
import About from "../components/about/About";
import AboutSplit from "../components/aboutSplit/About";
import Portfolio from "../components/portfolio/Portfolio";
import Contact from "../components/contact/Contact";
import WebsiteFooter from "../components/footer/WebsiteFooter";

export default {
  components: {
    Topbar,
    Home,
    About,
    AboutSplit,
    Portfolio,
    Contact,
    WebsiteFooter
  }
};
</script>

<style></style>
