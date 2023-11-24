<template>
  <nav data-mdb-navbar-init class="navbar navbar-expand-lg navbar-light bg-body-tertiary">
    <!-- Container wrapper -->
    <div class="container-fluid">
      <!-- Toggle button -->



      <button class="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarCenteredExample"
        aria-controls="navbarCenteredExample" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fas fa-bars"></i>
      </button>

      <!-- Collapsible wrapper -->
      <div class="collapse navbar-collapse justify-content-center" id="navbarCenteredExample">
        <a class="navbar-brand me-2" href="/">
          <h1 class="text-center fs-2 text-wrap" style="max-width: 15rem;">Magical Belladone</h1>
        </a>
        <!-- Left links -->
        <ul class="navbar-nav mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Sketch</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About me</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Commission</a>
          </li>
          <!-- Navbar dropdown -->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-mdb-toggle="dropdown"
              aria-expanded="false">
              Redes
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <a class="dropdown-item" href="https://www.patreon.com/Magical_Belladone">Patreon</a>
              </li>
              <li>
                <a class="dropdown-item" href="https://ko-fi.com/belladone">Ko-fi</a>
              </li>
              <li>
                  <hr class="dropdown-divider" />
                </li>
              <li>
                <a class="dropdown-item" href="https://twitter.com/MagicaBelladone">Twitter</a>
              </li>
              <li>
                <a class="dropdown-item" href="https://www.facebook.com/MagicalBelladone">Facebook</a>
              </li>
            </ul>
          </li>
        </ul>
        <!-- Left links -->
      </div>
      <!-- Collapsible wrapper -->
    </div>
    <!-- Container wrapper -->
  </nav>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

