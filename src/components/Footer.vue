<template>
  <footer class="footer-modern">
    <div class="footer-modern-container">
      <div class="footer-brand logo">
        <i class="fas fa-cube"></i>
        <span class="footer-title">My-App</span>
      </div>
      <div class="footer-social">
        <a href="#" aria-label="Twitter" class="footer-social-link">
          <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M22.46 5.92c-.8.36-1.67.6-2.58.71a4.48 4.48 0 0 0 1.97-2.48 8.94 8.94 0 0 1-2.83 1.08A4.48 4.48 0 0 0 16.11 4c-2.48 0-4.49 2.01-4.49 4.49 0 .35.04.7.11 1.03-3.73-.19-7.04-1.97-9.25-4.68a4.49 4.49 0 0 0-.61 2.26c0 1.56.8 2.94 2.01 3.75a4.48 4.48 0 0 1-2.03-.56v.06c0 2.18 1.55 4 3.6 4.41-.38.1-.78.16-1.19.16-.29 0-.57-.03-.85-.08.57 1.77 2.23 3.06 4.2 3.09A8.98 8.98 0 0 1 2 19.54a12.7 12.7 0 0 0 6.88 2.02c8.26 0 12.78-6.84 12.78-12.78 0-.19 0-.37-.01-.56.88-.64 1.65-1.43 2.26-2.34z" />
          </svg>
        </a>
        <a href="#" aria-label="GitHub" class="footer-social-link">
          <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M12 2C6.48 2 2 6.58 2 12.26c0 4.49 2.87 8.3 6.84 9.64.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.48 9.48 0 0 1 12 6.84c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2z" />
          </svg>
        </a>
        <a href="#" aria-label="LinkedIn" class="footer-social-link">
          <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.88v1.23h.04c.4-.75 1.37-1.54 2.82-1.54 3.01 0 3.57 1.98 3.57 4.56v4.75z" />
          </svg>
        </a>
      </div>
    </div>
    <div class="footer-modern-bottom">
      <span>© {{ new Date().getFullYear() }} MY-APP. All rights reserved.</span>
    </div>
  </footer>
</template>

<script setup>
// No script needed
</script>

<style scoped>
.logo {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--primary);
  display: flex;
  align-items: center;
  gap: 10px;

  & i {
    color: var(--accent);
  }
}

.footer-modern {
  width: 100%;
  background: linear-gradient(90deg, #232526 0%, #414345 100%);
  color: #f3f4f6;
  padding: 2rem 0 1rem 0;
  font-family: "Segoe UI", Arial, sans-serif;
  border-top: 1px solid #27272a;
  box-shadow: 0 -2px 12px 0 rgba(0, 0, 0, 0.08);
}

.footer-modern-container {
  max-width: 950px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding: 0 1.5rem;
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: 12px;
}

.footer-logo {
  width: 42px;
  height: 42px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.footer-title {
  font-size: 1.25em;
  font-weight: 700;
  letter-spacing: 1px;
  color: #fbbf24;
}

.footer-social {
  display: flex;
  align-items: center;
  gap: 18px;
}

.footer-social-link {
  color: #f3f4f6;
  opacity: 0.8;
  transition: color 0.18s, opacity 0.18s, transform 0.18s;
  font-size: 1.2em;
}

.footer-social-link:hover {
  color: #fbbf24;
  opacity: 1;
  transform: translateY(-2px) scale(1.08);
}

.footer-modern-bottom {
  text-align: center;
  font-size: 1em;
  color: #d1d5db;
  margin-top: 1.5rem;
  letter-spacing: 0.2px;
  padding: 0.2rem 0 0 0;
}

@media (max-width: 700px) {
  .footer-modern-container {
    flex-direction: column;
    align-items: stretch;
    text-align: center;
    gap: 18px;
    padding: 0 1rem;
  }

  .footer-social {
    justify-content: center;
  }
}
</style>
