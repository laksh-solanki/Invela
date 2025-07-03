<template>
  <nav class="navbar navbar-expand-lg sticky-top shadow-sm">
    <div class="container">
      <div class="navbar-brand logo animate__animated animate__backInLeft">
        <i class="fas fa-cube"></i>
        <router-link to="/" class="main-logo">My-App</router-link>
      </div>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-center align-items-center" id="navbarNavDropdown">
        <ul class="navbar-nav w-100 ms-lg-5 justify-content-center align-items-center gap-4">
          <li class="nav-item">
            <router-link to="/" exact-active-class="nav-link active-link" class="nav-link fw-medium">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/services" exact-active-class="active-link nav-link"
              class="nav-link fw-medium">Services</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" exact-active-class="active-link nav-link"
              class="nav-link fw-medium">About</router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link fw-medium dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              Contact
            </a>
            <ul class="dropdown-menu text-lg-start p-2">
              <li>
                <router-link to="/signin" class="dropdown-item rounded-2">SignIn</router-link>
              </li>
              <li>
                <router-link to="/contact" class="dropdown-item rounded-2 mt-1">Contact</router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item ms-lg-auto">
            <div class="hero-buttons">
              <button class="btn btn-outline">
                <i class="fas fa-play-circle"></i>
                <router-link to="/Login" class="dropdown-item">Login</router-link>
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
/* Change background color of toggler icon */
.navbar-toggler-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='blue' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
  color: 3px solid var(--primary);
}

.navbar {
  animation: slideDown 0.7s ease forwards;
  background-color: rgba(0, 0, 0, 0.838);

  & .navbar-nav {
    font-size: 1.13rem;

    & .nav-item>.nav-link {
      color: rgb(72, 48, 251) !important;
    }
  }
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
  gap: 10px;
}

.dropdown-menu {
  margin-top: 5px !important;
  border-radius: var(--radius);
}

@media (max-width: 991.98px) {
  .btn {
    padding: 10px 90px;
    margin-top: -3px;
  }

  .navbar-nav {
    flex-direction: row !important;
    flex-wrap: wrap;
    gap: 1.8rem !important;
    width: 100%;
    align-items: stretch !important;
  }

  .hero-buttons {
    justify-content: center;
    width: 100%;
  }
}

.active-link {
  color: #000000;
  border-bottom: 2px solid #000000;
}

.logo {
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--primary);
  display: flex;
  align-items: center;
  gap: 10px;

  & i {
    color: var(--accent);
  }

  & .main-logo {
    color: var(--primary);
    text-decoration: none;
  }
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
