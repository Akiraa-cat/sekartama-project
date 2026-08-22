<template>
  <main class="page">
    <!-- ambient forge sparks drifting up the page -->
    <div class="particles" aria-hidden="true">
      <span
        v-for="p in particles"
        :key="p.id"
        class="particle"
        :style="{
          left: p.left + '%',
          '--delay': p.delay + 's',
          '--duration': p.duration + 's',
          '--size': p.size + 'px',
          '--drift': p.drift + 'px'
        }"
      />
    </div>

    <div class="glow" aria-hidden="true" />

    <section class="hero">

      <p class="eyebrow">SEMANGAT KARANG TARUNA MONGGANG</p>
      <h1 class="wordmark">SEKARTAMA</h1>

      <h2 class="headline">Situs kami sedang dalam tahap pembuatan</h2>
      <p class="subtext">
        Terima kasih atas kunjungan Anda. Kami sedang bekerja keras untuk menghadirkan pengalaman terbaik bagi Anda.
      </p>

      <div class="progress" aria-label="Sedang membangun situs">
        <div class="progress-track">
          <div class="progress-fill" />
        </div>
        <span class="progress-label">Sedang dibangun</span>
      </div>

      <a
        class="ig-link"
        href="https://www.instagram.com/karangtaruna_sekartama?igsi=MWZsa2F2bzZwM3ozMA=="
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg class="ig-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" stroke="currentColor" stroke-width="1.6" />
          <circle cx="12" cy="12" r="4.6" stroke="currentColor" stroke-width="1.6" />
          <circle cx="17.4" cy="6.6" r="1.15" fill="currentColor" />
        </svg>
        <span>Jangan lupa untuk mengikuti kami di instagram yaa!</span>
      </a>
    </section>

    <footer class="footer">© 2026 SEKARTAMA. Segera hadir.</footer>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const reducedMotion = ref(false)

// generated once per mount — ambient gold sparks
const particles = Array.from({ length: 26 }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  delay: Math.random() * 9,
  duration: 7 + Math.random() * 7,
  size: 2 + Math.random() * 3,
  drift: (Math.random() - 0.5) * 70
}))

onMounted(() => {
  reducedMotion.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Anton&family=Jost:wght@300;400;500&display=swap');

.page {
  --bg: #070706;
  --bg-elevated: #121110;
  --gold: #cf9d34;
  --gold-bright: #f2c465;
  --gold-dim: #6e5722;
  --ink: #f5efe0;
  --ink-muted: #9d9484;

  position: relative;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: clamp(1.5rem, 5vw, 3rem);
  background: var(--bg);
  color: var(--ink);
  font-family: 'Jost', sans-serif;
  overflow: hidden;
  text-align: center;
}

.glow {
  position: absolute;
  top: 12%;
  left: 50%;
  width: min(70vw, 640px);
  height: min(70vw, 640px);
  transform: translateX(-50%);
  background: radial-gradient(circle, rgba(207, 157, 52, 0.16) 0%, rgba(207, 157, 52, 0) 65%);
  pointer-events: none;
}

.particles {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.particle {
  position: absolute;
  bottom: -10px;
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  background: radial-gradient(circle, var(--gold-bright), var(--gold) 60%, transparent 75%);
  opacity: 0;
  animation: floatUp var(--duration) linear var(--delay) infinite;
}

@keyframes floatUp {
  0% { transform: translate(0, 0); opacity: 0; }
  8% { opacity: 0.85; }
  92% { opacity: 0.35; }
  100% { transform: translate(var(--drift), -112vh); opacity: 0; }
}

.hero {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 34rem;
}

.crest-wrap {
  perspective: 600px;
  transform-style: preserve-3d;
  transition: transform 0.25s ease-out;
  color: var(--gold);
  width: clamp(6.5rem, 20vw, 9rem);
  margin-bottom: 1.25rem;
}

.crest {
  width: 100%;
  height: auto;
  animation: crestGlow 4.5s ease-in-out 2.6s infinite;
}

.crest-line {
  fill: none;
  stroke-dasharray: 1;
  stroke-dashoffset: 1;
  animation-fill-mode: forwards;
  animation-timing-function: ease-out;
}

.crest-crown { animation-name: draw; animation-duration: 0.9s; animation-delay: 0.1s; }
.crest-shield { animation-name: draw; animation-duration: 1.1s; animation-delay: 0.5s; }
.crest-s { animation-name: draw; animation-duration: 0.9s; animation-delay: 1.3s; }

@keyframes draw {
  to { stroke-dashoffset: 0; }
}

@keyframes crestGlow {
  0%, 100% { filter: drop-shadow(0 0 5px rgba(207, 157, 52, 0.3)); }
  50% { filter: drop-shadow(0 0 16px rgba(242, 196, 101, 0.6)); }
}

.eyebrow {
  margin: 0 0 0.35rem;
  font-size: 0.7rem;
  letter-spacing: 0.4em;
  text-transform: uppercase;
  color: var(--gold-dim);
}

.wordmark {
  margin: 0 0 1.1rem;
  font-family: 'Anton', sans-serif;
  font-weight: 400;
  font-size: clamp(2.2rem, 8vw, 3.6rem);
  letter-spacing: 0.12em;
  line-height: 1;
  color: var(--gold-bright);
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.6), 0 0 22px rgba(207, 157, 52, 0.25);
}

.headline {
  margin: 0 0 0.6rem;
  font-weight: 500;
  font-size: clamp(1.05rem, 3.4vw, 1.35rem);
  color: var(--ink);
}

.subtext {
  margin: 0 0 2rem;
  max-width: 30rem;
  font-weight: 300;
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--ink-muted);
}

.progress {
  width: min(100%, 18rem);
  margin-bottom: 2.25rem;
}

.progress-track {
  position: relative;
  height: 2px;
  border-radius: 2px;
  background: rgba(207, 157, 52, 0.18);
  overflow: hidden;
}

.progress-fill {
  position: absolute;
  inset: 0;
  width: 35%;
  background: linear-gradient(90deg, transparent, var(--gold-bright), transparent);
  animation: shimmer 1.9s ease-in-out infinite;
}

@keyframes shimmer {
  0% { transform: translateX(-130%); }
  100% { transform: translateX(330%); }
}

.progress-label {
  display: block;
  margin-top: 0.6rem;
  font-size: 0.68rem;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--ink-muted);
}

.ig-link {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.75rem 1.3rem;
  border: 1px solid var(--gold-dim);
  border-radius: 999px;
  color: var(--gold-bright);
  text-decoration: none;
  font-size: 0.85rem;
  letter-spacing: 0.02em;
  transition: border-color 0.2s ease, background 0.2s ease, transform 0.2s ease;
}

.ig-link:hover {
  border-color: var(--gold);
  background: rgba(207, 157, 52, 0.08);
  transform: translateY(-1px);
}

.ig-link:focus-visible {
  outline: 2px solid var(--gold-bright);
  outline-offset: 3px;
}

.ig-icon {
  width: 1.1rem;
  height: 1.1rem;
  flex-shrink: 0;
}

.footer {
  position: relative;
  z-index: 1;
  margin-top: 2.5rem;
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  color: var(--gold-dim);
}

@media (prefers-reduced-motion: reduce) {
  .particle,
  .progress-fill,
  .crest {
    animation: none !important;
  }
  .crest-line {
    stroke-dashoffset: 0 !important;
    animation: none !important;
  }
  .crest-wrap {
    transition: none !important;
  }
  .particles {
    display: none;
  }
}

@media (max-width: 420px) {
  .ig-link span {
    font-size: 0.78rem;
  }
}
</style>