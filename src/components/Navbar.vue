<template>
  <nav class="navbar navbar-expand-lg bg-">
    <div class="container-fluid">
      <router-link
        to="/"
        class="navbar-brand animate__animated animate__backInLeft ms-3 ff"
        >my-app</router-link
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse justify-content-end me-5"
        id="navbarNavDropdown"
      >
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link
              to="/"
              exact-active-class="active-link"
              class="nav-link fw-medium"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              to="/services"
              exact-active-class="active-link"
              class="nav-link fw-medium"
              >Services</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              to="/about"
              exact-active-class="active-link"
              class="nav-link fw-medium"
              >About</router-link
            >
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link fw-medium dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Contact
            </a>
            <ul class="dropdown-menu">
              <li><router-link
                  to="/signin"
                  exact-active-class="active-link"
                  class="dropdown-item"
                  >signIn</router-link
                ></li>
              <li>
                <router-link
                  to="/contact"
                  exact-active-class="active-link"
                  class="dropdown-item"
                  >Contact</router-link
                >
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.active-link {
  color: #000000;
  border-bottom: 2px solid #000000;
}
.ff {
  font-weight: bolder;
  font-size: x-large;
  letter-spacing: 0.20em;
}
</style>
