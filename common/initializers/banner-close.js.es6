// banner-dismiss.js
api.onPageChange(() => {
  const btn = document.querySelector('#banner .close');
  if (btn && !btn.dataset.bound) {
    btn.dataset.bound = "true"; // avoid double-binding
    btn.addEventListener('click', () => {
      const banner = document.getElementById('banner');
      if (banner) {
        banner.style.display = 'none';
        localStorage.setItem('bannerDismissed', 'true');
      }
    });
  }

  // check persisted state
  if (localStorage.getItem('bannerDismissed') === 'true') {
    const banner = document.getElementById('banner');
    if (banner) banner.style.display = 'none';
  }
});
