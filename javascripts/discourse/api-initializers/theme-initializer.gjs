import { apiInitializer } from "discourse/lib/api";

export default apiInitializer((api) => {
  api.onPageChange(() => {
  let attempt = 0;

  function bindClose() {
    const btn = document.querySelector('#banner .close');
    const banner = document.getElementById('banner');

    if (!btn || !banner) {
      if (++attempt < 10) {
        return setTimeout(bindClose, 100);
      }
      return;
    }

    if (btn.dataset.bound) return;
    btn.dataset.bound = "true";

    if (localStorage.getItem("bannerDismissed") === "true") {
      banner.remove();
      return;
    }

    btn.addEventListener('click', () => {
      console.log("Clicked from theme JS");
      banner.remove();
      localStorage.setItem("bannerDismissed", "true");
    });
  }

  bindClose();
});

});

