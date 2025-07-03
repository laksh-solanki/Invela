<template>
  <div class="About">
    <div class="about-hero">
      <div class="about-hero-bg"></div>
      <div class="about-hero-content animate__animated animate__fadeInDown">
        <h1>Meet Our Team</h1>
        <p>
          We are a creative group of developers and designers passionate about
          building impactful digital experiences.
        </p>
        <button class="cta-btn">
          <i class="fa fa-rocket"></i> Join Our Mission
        </button>
      </div>
    </div>

    <section class="about-team animate__animated animate__fadeInUp">
      <h2>Our People</h2>
      <div class="team-grid-alt">
        <div class="team-card">
          <div class="team-avatar">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Alex" />
          </div>
          <div class="team-info">
            <h3>Alex Johnson</h3>
            <span>Lead Developer</span>
            <div class="team-socials">
              <a href="#"><i class="fa fa-github"></i></a>
              <a href="#"><i class="fa fa-linkedin"></i></a>
            </div>
          </div>
        </div>
        <div class="team-card">
          <div class="team-avatar">
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Sara" />
          </div>
          <div class="team-info">
            <h3>Sara Lee</h3>
            <span>UI/UX Designer</span>
            <div class="team-socials">
              <a href="#"><i class="fa fa-dribbble"></i></a>
              <a href="#"><i class="fa fa-linkedin"></i></a>
            </div>
          </div>
        </div>
        <div class="team-card">
          <div class="team-avatar">
            <img src="https://randomuser.me/api/portraits/men/65.jpg" alt="Mike" />
          </div>
          <div class="team-info">
            <h3>Mike Brown</h3>
            <span>Cloud Engineer</span>
            <div class="team-socials">
              <a href="#"><i class="fa fa-twitter"></i></a>
              <a href="#"><i class="fa fa-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="about-values animate__animated animate__fadeInUp animate__delay-1s">
      <h2>Our Values</h2>
      <div class="values-timeline">
        <div class="timeline-step">
          <div class="timeline-icon"><i class="fa fa-lightbulb-o"></i></div>
          <div class="timeline-content">
            <h4>Innovation</h4>
            <p>We embrace new ideas and technologies to deliver the best solutions.</p>
          </div>
        </div>
        <div class="timeline-step">
          <div class="timeline-icon"><i class="fa fa-users"></i></div>
          <div class="timeline-content">
            <h4>Teamwork</h4>
            <p>Collaboration and communication are at the heart of everything we do.</p>
          </div>
        </div>
        <div class="timeline-step">
          <div class="timeline-icon"><i class="fa fa-heart"></i></div>
          <div class="timeline-content">
            <h4>Passion</h4>
            <p>We love what we do and strive to make a difference for our clients.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission Statement Section -->
    <section class="about-mission animate__animated animate__fadeInUp animate__delay-1s">
      <h2>Our Mission</h2>
      <div class="mission-card">
        <i class="fa fa-bullseye"></i>
        <p>To empower businesses and individuals by creating innovative, user-centric digital solutions that make a real
          impact.</p>
      </div>
    </section>

    <!-- Fun Facts/Stats Section -->
    <section class="about-facts animate__animated animate__fadeInUp animate__delay-1s">
      <h2>Fun Facts</h2>
      <div class="facts-row">
        <div class="fact-card">
          <i class="fa fa-calendar-check-o"></i>
          <h3>10+</h3>
          <span>Years Experience</span>
        </div>
        <div class="fact-card">
          <i class="fa fa-rocket"></i>
          <h3>50+</h3>
          <span>Projects Delivered</span>
        </div>
        <div class="fact-card">
          <i class="fa fa-smile-o"></i>
          <h3>100%</h3>
          <span>Client Satisfaction</span>
        </div>
        <div class="fact-card">
          <i class="fa fa-globe"></i>
          <h3>12</h3>
          <span>Countries Served</span>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="about-testimonials animate__animated animate__fadeInUp animate__delay-2s">
      <h2>What Our Clients Say</h2>
      <div class="testimonials-grid">
        <div class="testimonial-card">
          <p>"The team exceeded our expectations and delivered a fantastic product!"</p>
          <span>- Priya S., CEO</span>
        </div>
        <div class="testimonial-card">
          <p>"Professional, creative, and always on time. Highly recommended!"</p>
          <span>- John D., Startup Founder</span>
        </div>
        <div class="testimonial-card">
          <p>"Their attention to detail and passion for their work is unmatched."</p>
          <span>- Maria G., Product Manager</span>
        </div>
      </div>
    </section>

    <!-- Tech Stack/Tools Section -->
    <section class="about-tech animate__animated animate__fadeInUp animate__delay-2s">
      <h2>Our Tech Stack</h2>
      <div class="tech-icons">
        <div class="tech-icon"><i class="fa fa-html5"></i><span>HTML5</span></div>
        <div class="tech-icon"><i class="fa fa-css3"></i><span>CSS3</span></div>
        <div class="tech-icon"><i class="fa fa-jsfiddle"></i><span>JavaScript</span></div>
        <div class="tech-icon"><i class="fa fa-vuejs"></i><span>Vue.js</span></div>
        <div class="tech-icon"><i class="fa fa-cloud"></i><span>Cloud</span></div>
        <div class="tech-icon"><i class="fa fa-database"></i><span>Database</span></div>
      </div>
    </section>

    <!-- Call to Action Section -->
    <section class="about-cta animate__animated animate__fadeInUp animate__delay-3s">
      <div class="cta-content">
        <h2>Want to work with us?</h2>
        <p>Contact us today and let's build something amazing together!</p>
        <a href="/Contact" class="cta-btn-alt"><i class="fa fa-envelope"></i> Contact Us</a>
      </div>
    </section>

    <!-- Company Timeline/History Section -->
    <section class="about-history animate__animated animate__fadeInUp animate__delay-3s">
      <h2>Our Journey</h2>
      <div class="history-timeline">
        <div class="history-event">
          <div class="event-year">2014</div>
          <div class="event-desc">Company founded with a vision to innovate.</div>
        </div>
        <div class="history-event">
          <div class="event-year">2016</div>
          <div class="event-desc">Launched our first SaaS product.</div>
        </div>
        <div class="history-event">
          <div class="event-year">2019</div>
          <div class="event-desc">Expanded globally, serving clients in 10+ countries.</div>
        </div>
        <div class="history-event">
          <div class="event-year">2023</div>
          <div class="event-desc">Reached 50+ successful projects milestone.</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// No script needed for static content
</script>

<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";
@import "https://cdn.jsdelivr.net/npm/animate.css@4.1.1/animate.min.css";

.About {
  background: #000000;
}

.about-hero {
  position: relative;
  background: linear-gradient(120deg, #3a86ff 60%, #8338ec 100%);
  color: #fff;
  padding: 3.5rem 1rem 2.5rem 1rem;
  text-align: center;
  overflow: hidden;
}

.about-hero-bg {
  background: url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80') center/cover no-repeat;
  opacity: 0.18;
  position: absolute;
  inset: 0;
  z-index: 0;
}

.about-hero-content {
  position: relative;
  z-index: 1;
}

.about-hero-content h1 {
  font-size: 2.7rem;
  font-weight: 800;
  margin-bottom: 0.7rem;
  letter-spacing: 1px;
}

.about-hero-content p {
  font-size: 1.18rem;
  max-width: 600px;
  margin: 0 auto 1.2rem auto;
  opacity: 0.97;
}

.cta-btn {
  background: #ffbe0b;
  color: #222;
  border: none;
  border-radius: 24px;
  padding: 0.7rem 2.1rem;
  font-weight: 700;
  font-size: 1.08rem;
  box-shadow: 0 4px 16px rgba(255, 190, 11, 0.13);
  cursor: pointer;
  transition: background 0.2s, color 0.2s, transform 0.2s;
  margin-top: 1rem;
}

.cta-btn:hover {
  background: #ffd60a;
  color: #3a86ff;
  transform: translateY(-2px) scale(1.04);
}

.about-team {
  max-width: 1000px;
  margin: 2.5rem auto 0 auto;
  padding: 0 1rem;
  text-align: center;
}

.about-team h2 {
  color: #3a86ff;
  font-size: 1.7rem;
  margin-bottom: 2.2rem;
  font-weight: 700;
}

.team-grid-alt {
  display: flex;
  gap: 2.5rem;
  justify-content: center;
  flex-wrap: wrap;
}

.team-card {
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(67, 97, 238, 0.08);
  padding: 2.2rem 1.2rem 1.2rem 1.2rem;
  width: 240px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.2s, box-shadow 0.2s;
  position: relative;
}

.team-card:hover {
  transform: translateY(-8px) scale(1.04);
  box-shadow: 0 8px 32px rgba(67, 97, 238, 0.15);
}

.team-avatar {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 1rem;
  border: 3px solid #3a86ff;
  box-shadow: 0 2px 8px rgba(58, 134, 255, 0.13);
}

.team-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.team-info h3 {
  margin: 0.5rem 0 0.2rem 0;
  font-size: 1.18rem;
  color: #222;
  font-weight: 700;
}

.team-info span {
  color: #3a86ff;
  font-size: 1rem;
  font-weight: 500;
}

.team-socials {
  margin-top: 0.7rem;
  display: flex;
  gap: 12px;
  justify-content: center;
}

.team-socials a {
  color: #bdbdbd;
  font-size: 1.2em;
  transition: color 0.2s;
}

.team-socials a:hover {
  color: #3a86ff;
}

.about-values {
  max-width: 900px;
  margin: 3rem auto 2rem auto;
  padding: 0 1rem;
  text-align: center;
}

.about-values h2 {
  color: #8338ec;
  font-size: 1.5rem;
  margin-bottom: 2.2rem;
  font-weight: 700;
}

.values-timeline {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2.2rem;
  margin: 0 auto;
  max-width: 420px;
  position: relative;
}

.values-timeline:before {
  content: '';
  position: absolute;
  left: 24px;
  top: 0;
  bottom: 0;
  width: 4px;
  background: linear-gradient(to bottom, #3a86ff, #8338ec);
  border-radius: 2px;
  opacity: 0.18;
}

.timeline-step {
  display: flex;
  align-items: flex-start;
  gap: 1.2rem;
  position: relative;
  z-index: 1;
}

.timeline-icon {
  width: 48px;
  height: 48px;
  background: #fff;
  border-radius: 50%;
  box-shadow: 0 2px 8px rgba(58, 134, 255, 0.10);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.7em;
  color: #3a86ff;
  margin-right: 0.5rem;
  position: relative;
  z-index: 2;
}

.timeline-content {
  text-align: left;
  flex: 1;
}

.timeline-content h4 {
  margin-bottom: 0.3rem;
  color: #3a86ff;
  font-size: 1.08rem;
  font-weight: 700;
}

.timeline-content p {
  color: #444;
  font-size: 0.98rem;
  margin: 0;
}

@media (max-width: 700px) {
  .about-hero-content h1 {
    font-size: 1.5rem;
  }

  .about-hero-content p {
    font-size: 1rem;
  }

  .team-grid-alt {
    flex-direction: column;
    gap: 1.2rem;
  }

  .team-card {
    width: 100%;
    max-width: 340px;
    margin: 0 auto;
  }

  .values-timeline {
    max-width: 100vw;
    padding-left: 0.5rem;
  }
}

.about-mission {
  max-width: 800px;
  margin: 2.5rem auto 0 auto;
  padding: 0 1rem;
  text-align: center;
}

.about-mission h2 {
  color: #ffbe0b;
  font-size: 1.5rem;
  margin-bottom: 1.2rem;
  font-weight: 700;
}

.mission-card {
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(255, 190, 11, 0.08);
  padding: 1.5rem 1.2rem;
  display: flex;
  align-items: center;
  gap: 1.2rem;
  justify-content: center;
  font-size: 1.1rem;
}

.mission-card i {
  color: #ffbe0b;
  font-size: 2.2rem;
}

.about-facts {
  max-width: 900px;
  margin: 2.5rem auto 0 auto;
  padding: 0 1rem;
  text-align: center;
}

.about-facts h2 {
  color: #3a86ff;
  font-size: 1.5rem;
  margin-bottom: 1.2rem;
  font-weight: 700;
}

.facts-row {
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
}

.fact-card {
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(67, 97, 238, 0.08);
  padding: 1.5rem 1.2rem;
  width: 170px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
}

.fact-card i {
  color: #3a86ff;
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.fact-card h3 {
  margin: 0.2rem 0 0.1rem 0;
  font-size: 1.5rem;
  color: #222;
  font-weight: 800;
}

.fact-card span {
  color: #3a86ff;
  font-size: 1rem;
  font-weight: 500;
}

.about-testimonials {
  max-width: 900px;
  margin: 2.5rem auto 0 auto;
  padding: 0 1rem;
  text-align: center;
}

.about-testimonials h2 {
  color: #8338ec;
  font-size: 1.5rem;
  margin-bottom: 1.2rem;
  font-weight: 700;
}

.testimonials-grid {
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
}

.testimonial-card {
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(131, 56, 236, 0.08);
  padding: 1.5rem 1.2rem;
  width: 260px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
  font-style: italic;
}

.testimonial-card span {
  color: #8338ec;
  font-size: 1rem;
  font-weight: 500;
  margin-top: 0.7rem;
  font-style: normal;
}

.about-tech {
  max-width: 900px;
  margin: 2.5rem auto 0 auto;
  padding: 0 1rem;
  text-align: center;
}

.about-tech h2 {
  color: #3a86ff;
  font-size: 1.5rem;
  margin-bottom: 1.2rem;
  font-weight: 700;
}

.tech-icons {
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
}

.tech-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 2.2rem;
  color: #3a86ff;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(58, 134, 255, 0.10);
  padding: 1rem 1.2rem;
  margin-bottom: 1rem;
  min-width: 90px;
}

.tech-icon span {
  font-size: 1rem;
  color: #3a86ff;
  margin-top: 0.5rem;
  font-weight: 600;
}

.about-cta {
  max-width: 700px;
  margin: 3rem auto 2rem auto;
  padding: 0 1rem;
  text-align: center;
}

.cta-content {
  background: linear-gradient(120deg, #3a86ff 60%, #8338ec 100%);
  color: #fff;
  border-radius: 18px;
  padding: 2rem 1.2rem;
  box-shadow: 0 4px 24px rgba(67, 97, 238, 0.10);
}

.cta-content h2 {
  font-size: 1.4rem;
  font-weight: 800;
  margin-bottom: 0.7rem;
}

.cta-content p {
  font-size: 1.1rem;
  margin-bottom: 1.2rem;
}

.cta-btn-alt {
  background: #ffbe0b;
  color: #222;
  border: none;
  border-radius: 24px;
  padding: 0.7rem 2.1rem;
  font-weight: 700;
  font-size: 1.08rem;
  box-shadow: 0 4px 16px rgba(255, 190, 11, 0.13);
  cursor: pointer;
  transition: background 0.2s, color 0.2s, transform 0.2s;
  text-decoration: none;
  display: inline-block;
}

.cta-btn-alt:hover {
  background: #ffd60a;
  color: #3a86ff;
  transform: translateY(-2px) scale(1.04);
}

.about-history {
  max-width: 900px;
  margin: 3rem auto 2rem auto;
  padding: 0 1rem;
  text-align: center;
}

.about-history h2 {
  color: #ffbe0b;
  font-size: 1.5rem;
  margin-bottom: 2.2rem;
  font-weight: 700;
}

.history-timeline {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2.2rem;
  margin: 0 auto;
  max-width: 420px;
  position: relative;
}

.history-event {
  display: flex;
  align-items: center;
  gap: 1.2rem;
  position: relative;
  z-index: 1;
}

.event-year {
  width: 60px;
  height: 60px;
  background: #fff;
  border-radius: 50%;
  box-shadow: 0 2px 8px rgba(255, 190, 11, 0.10);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3em;
  color: #ffbe0b;
  font-weight: 800;
  margin-right: 0.5rem;
  position: relative;
  z-index: 2;
}

.event-desc {
  text-align: left;
  flex: 1;
  color: #fff;
  background: #3a86ff;
  border-radius: 10px;
  padding: 0.7rem 1.2rem;
  font-size: 1.05rem;
  font-weight: 500;
  box-shadow: 0 2px 8px rgba(58, 134, 255, 0.10);
}

@media (max-width: 700px) {

  .facts-row,
  .testimonials-grid,
  .tech-icons {
    flex-direction: column;
    gap: 1.2rem;
  }

  .fact-card,
  .testimonial-card,
  .tech-icon {
    width: 100%;
    max-width: 340px;
    margin: 0 auto;
  }

  .about-mission,
  .about-facts,
  .about-testimonials,
  .about-tech,
  .about-cta,
  .about-history {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }

  .history-timeline {
    max-width: 100vw;
    padding-left: 0.5rem;
  }
}
</style>
