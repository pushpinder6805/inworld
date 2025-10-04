export default {
  name: "banner-dismiss",
  initialize() {
    api.onPageChange(() => {
      let tries = 0;

      function waitForBanner() {
        const banner = document.getElementById("banner");
        if (!banner) {
          if (tries++ < 10) {
            return setTimeout(waitForBanner, 100); // wait and try again
          }
          return;
        }

        // Already dismissed
        if (localStorage.getItem("bannerDismissed") === "true") {
          banner.remove();
          return;
        }

        const btn = banner.querySelector(".close");
        if (btn && !btn.dataset.bound) {
          btn.dataset.bound = "true";
          btn.addEventListener("click", () => {
            banner.remove();
            localStorage.setItem("bannerDismissed", "true");
          });
        }
      }

      waitForBanner();
    });
  }
};

