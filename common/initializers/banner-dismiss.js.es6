export default {
  name: "banner-dismiss",
  initialize() {
    api.onPageChange(() => {
      let attempt = 0;

      function bindBannerClose() {
        const btn = document.querySelector('#banner .close');
        const banner = document.getElementById('banner');

        if (!btn || !banner) {
          if (++attempt < 10) {
            return setTimeout(bindBannerClose, 100);
          }
          return;
        }

        // already bound
        if (btn.dataset.bound) return;

        btn.dataset.bound = "true";

        // hide if dismissed
        if (localStorage.getItem("bannerDismissed") === "true") {
          banner.remove();
          return;
        }

        // bind click
        btn.addEventListener('click', () => {
          banner.remove();
          localStorage.setItem("bannerDismissed", "true");
        });
      }

      bindBannerClose();
    });
  }
};

