// script.js
<script>
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav-links');
  const icon = toggle.querySelector('i');

  toggle.addEventListener('click', () => {
    nav.classList.toggle('active');

    // Switch icon between hamburger and X
    if (nav.classList.contains('active')) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-times');
    } else {
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    }
  });
</script>
