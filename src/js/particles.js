const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
const maxParticles = 15; // Maximum number of particles on the screen
const spawnRate = 0.5; // Number of particles spawned per second
const spawnThreshold = canvas.height * 0.4; // Y-coordinate threshold for additional spawning

function Particle() {
  this.x = Math.random() * canvas.width;
  this.y = canvas.height * 0.9;
  this.size = 6;
  this.speed = Math.random() * 2 + 1;
  this.initialAlpha = Math.random() * 0.6 + 0.6;
  this.color = `rgba(128, 128, 128, ${this.initialAlpha})`; // Grey color for particles

  this.update = function () {
    this.y -= this.speed;

    if (this.y < spawnThreshold && Math.random() < 0.1) {
      spawnParticles();
    }

    if (this.color.includes(',')) {
      const alpha = parseFloat(this.color.split(',')[3]) - 0.005;
      this.color = `rgba(128, 128, 128, ${alpha < 0 ? 0 : alpha})`;
    }

    this.draw();
  };

  this.draw = function () {
    ctx.shadowBlur = 10;
    ctx.shadowColor = 'white'; // Set shadow color to white
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size / 2, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
    ctx.shadowBlur = 0;
  };
}

function spawnParticles() {
  if (particles.length < maxParticles) {
    particles.push(new Particle());
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  spawnParticles();

  particles.forEach((particle, index) => {
    particle.update();

    // Remove particles that have moved off-screen
    if (particle.y + particle.size < 0) {
      particles.splice(index, 1);
    }
  });

  requestAnimationFrame(animate);
}

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

setInterval(() => { spawnParticles(); }, 1000 / spawnRate); // Spawn particles every second
animate();
