const cursor = document.getElementById('cursor');
  document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  });

  const clickables = 'a, button, .add-project, [onclick]';
    document.querySelectorAll(clickables).forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('is-hovering'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('is-hovering'));
    });

  // Clock
  function updateClock() {
    const now = new Date();
    document.getElementById('clock').textContent =
      now.toTimeString().slice(0,8);
  }
  setInterval(updateClock, 1000);
  updateClock();

  // Skill bar animation on scroll
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.querySelectorAll('.skill-bar-fill').forEach(bar => {
          bar.style.animation = 'none';
          void bar.offsetWidth;
          bar.style.animation = 'grow 1.2s ease-out forwards';
        });
      }
    });
  }, { threshold: 0.3 });
  document.querySelectorAll('.skill-block').forEach(b => observer.observe(b));

function openModal(id) {
  document.getElementById(id).classList.add('open');
}
function closeModal(id) {
  document.getElementById(id).classList.remove('open');
}
// Close modal by clicking outside of it
document.addEventListener('click', e => {
  if (e.target.classList.contains('modal-overlay')) {
    e.target.classList.remove('open');
  }
});