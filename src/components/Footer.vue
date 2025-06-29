<template>
  <footer class="footer-modern">
    <div class="footer-modern-content">
      <div class="footer-modern-brand">
        <img
          src="../assets/logo.svg"
          alt="Logo"
          class="footer-logo"
        />
        <span class="footer-brand-name">My App</span>
      </div>
      <div class="footer-modern-links">
        <a href="#" class="footer-modern-link">
          <svg width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
            <path
              d="M6.354 5.5H4.5A2.5 2.5 0 0 0 2 8v2.5A2.5 2.5 0 0 0 4.5 13h2.5a.5.5 0 0 0 0-1H4.5A1.5 1.5 0 0 1 3 10.5V8A1.5 1.5 0 0 1 4.5 6.5h1.854l-.647.646a.5.5 0 0 0 .708.708l1.5-1.5a.5.5 0 0 0 0-.708l-1.5-1.5a.5.5 0 1 0-.708.708l.647.646z"
            />
          </svg>
          Privacy
        </a>
        <a href="#" class="footer-modern-link">
          <svg width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
            <path
              d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zm0 13A6 6 0 1 1 8 2a6 6 0 0 1 0 12zm0-7a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm0 3a2 2 0 0 1-2-2h1a1 1 0 1 0 2 0h1a2 2 0 0 1-2 2z"
            />
          </svg>
          Terms
        </a>
        <a href="#" class="footer-modern-link">
          <svg width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
            <path
              d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H4zm2 2h4v1H6V3zm0 2h4v1H6V5zm0 2h4v1H6V7zm0 2h4v1H6V9zm0 2h4v1H6v-1z"
            />
          </svg>
          Contact
        </a>
      </div>
      <div class="footer-modern-social">
        <a href="#" class="footer-modern-social-btn" title="Twitter">
          <svg width="22" height="22" fill="currentColor" viewBox="0 0 16 16">
            <path
              d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.009-.422A6.673 6.673 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.084.797A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115c-.211 0-.417-.021-.616-.061a3.293 3.293 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
            />
          </svg>
        </a>
        <a href="#" class="footer-modern-social-btn" title="Facebook">
          <svg width="22" height="22" fill="currentColor" viewBox="0 0 16 16">
            <path
              d="M8.94 8.5H10.5V7H8.94V6.25C8.94 5.84 9.13 5.5 9.75 5.5H10.5V4H9.75C8.34 4 7.94 4.84 7.94 6.25V7H7V8.5H7.94V12H8.94V8.5Z"
            />
          </svg>
        </a>
        <a href="#" class="footer-modern-social-btn" title="Instagram">
          <svg width="22" height="22" fill="currentColor" viewBox="0 0 16 16">
            <path
              d="M8 3.5A4.5 4.5 0 1 0 8 12.5A4.5 4.5 0 1 0 8 3.5ZM8 11A3 3 0 1 1 8 5A3 3 0 0 1 8 11ZM12.5 4.5A1 1 0 1 1 12.5 2.5A1 1 0 0 1 12.5 4.5Z"
            />
          </svg>
        </a>
      </div>
    </div>
    <div class="footer-modern-bottom">
      <span>Made with <span style="color: #e25555">♥</span> by MyCompany</span>
    </div>
  </footer>
</template>

<style scoped>
.footer-modern {
  background: linear-gradient(90deg, #232526 0%, #414345 100%);
  color: #fff;
  padding: 0 0 0.5rem 0;
  width: 100%;
  box-shadow: 0 -1px 8px rgba(0, 0, 0, 0.08);
  font-family: "Segoe UI", Arial, sans-serif;
}
.footer-modern-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
  padding: 1.2rem 1.5rem 0.5rem 1.5rem;
  gap: 12px;
}
.footer-modern-brand {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.1em;
  font-weight: 600;
}
.footer-logo {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
}
.footer-brand-name {
  letter-spacing: 1px;
}
.footer-modern-links {
  display: flex;
  gap: 18px;
}
.footer-modern-link {
  color: #fff;
  text-decoration: none;
  font-size: 1em;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 4px 8px;
  border-radius: 4px;
  transition: background 0.2s, color 0.2s;
}
.footer-modern-link:hover {
  background: #fff2;
  color: #ffc107;
}
.footer-modern-social {
  display: flex;
  gap: 12px;
}
.footer-modern-social-btn {
  color: #fff;
  background: #232526;
  border-radius: 50%;
  padding: 6px;
  display: flex;
  align-items: center;
  transition: background 0.2s, color 0.2s;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
}
.footer-modern-social-btn:hover {
  background: #fff;
  color: #232526;
}
.footer-modern-bottom {
  text-align: center;
  font-size: 0.98em;
  color: #bbb;
  padding: 0.5rem 0 0.2rem 0;
  border-top: 1px solid #444;
  margin-top: 0.5rem;
}
@media (max-width: 700px) {
  .footer-modern-content {
    flex-direction: column;
    align-items: stretch;
    text-align: center;
    gap: 16px;
    padding: 1.2rem 0.5rem 0.5rem 0.5rem;
  }
  .footer-modern-links,
  .footer-modern-social {
    justify-content: center;
  }
}
</style>
