<template>
  <nav data-mdb-navbar-init class="navbar navbar-expand-lg navbar-light" style="background-color: #f8b2ca;">
    <div class="container-fluid">
      <!-- <button class="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarCenteredExample"
        aria-controls="navbarCenteredExample" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fas fa-bars"></i>
      </button> -->

      <div class="collapse navbar-collapse d-flex flex-column justify-content-center" id="navbarCenteredExample">
        <a class="navbar-brand" href="/">
          <h1 class="text-center fs-2 text-wrap" @click="selectTab('home')"
            style="max-width: 20rem; color: #7b2052; font-family:'norwester';">
            Magical Belladone</h1>
        </a>
        <div class="d-flex flex-row justify-content-center">
          <ul class="navbar-nav mb-2 mb-lg-0 me-4">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-mdb-toggle="dropdown"
                aria-expanded="false" style="color: #7b2052;">
                Commissions
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown" style="background-color: #f8b2ca;">
                <li>
                  <a class="dropdown-item" @click="selectTab('pricesAndexamples')" style="color: #7b2052;">Prices &
                    Examples</a>
                </li>
                <li>
                  <a class="dropdown-item" @click="selectTab('termsAndServices')" style="color: #7b2052;">Terms of
                    Service</a>
                </li>
                <li>
                  <a class="dropdown-item" @click="selectTab('dashboardMagical')" style="color: #7b2052;">DashBoard</a>
                </li>
                <li>
                  <a class="dropdown-item" href="https://forms.gle/XG8z9S88g3mer9Tz6" target="_blank"
                    style="color: #7b2052;">Submit</a>
                </li>
              </ul>
            </li>
          </ul>
          <ul class="navbar-nav mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="https://t.me/Magical_Belladone" target="_blank"
                style="color: #7b2052;">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    selectTab(tab) {
      this.$emit('tabClick', tab);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

