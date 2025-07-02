<template>
  <nav class="navbar navbar-expand-lg bg-body sticky-top shadow-none">
    <div class="container">
      <router-link
        to="/"
        class="navbar-brand animate__animated animate__backInLeft ff"
        >my-app</router-link
      >
      <button
        class="navbar-toggler justify-content-end"
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
        class="collapse navbar-collapse justify-content-end"
        id="navbarNavDropdown"
      >
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link
              to="/"
              exact-active-class="nav-link active-link"
              class="nav-link fw-medium"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              to="/services"
              exact-active-class="active-link nav-link"
              class="nav-link fw-medium"
              >Services</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              to="/about"
              exact-active-class="active-link nav-link"
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
              <li>
                <router-link
                  to="/signin"
                  exact-active-class="active-link"
                  class="dropdown-item"
                  >SignIn</router-link
                >
              </li>
              <li></li>
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
      <div class="hero-buttons">
        <button class="btn btn-outline">
          <i class="fas fa-play-circle"></i
          ><router-link to="/Login" class="dropdown-item">Login</router-link>
        </button>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  animation: slideDown 0.7s ease forwards;
}

.btn {
  margin: 5px 0 5px 0;
  padding: 10px 20px;
  border-radius: var(--radius);
  font-weight: 500;
  cursor: pointer;
  transition: var(--transition);
  border: none;
  font-size: 1rem;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.btn-primary {
  background: var(--primary);
  color: white;
  box-shadow: 0 4px 6px rgba(67, 97, 238, 0.3);
}

.btn-primary:hover {
  background: var(--secondary);
  transform: translateY(-3px);
  box-shadow: 0 10px 15px rgba(67, 97, 238, 0.4);
}

.btn-outline {
  background: transparent;
  border: 2px solid var(--primary);
  color: var(--primary);
}

.btn-outline:hover {
  background: var(--primary);
  color: white;
  transform: translateY(-3px);
}

.hero-buttons {
  display: flex;
  gap: 20px;
}

.active-link {
  color: #000000;
  border-bottom: 2px solid #000000;
}

.ff {
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--primary) !important;
  gap: 10px;  
}

@keyframes slideDown {
  from {
    transform: translateY(-100%);
  }

  to {
    transform: translateY(0);
  }
}
</style>
