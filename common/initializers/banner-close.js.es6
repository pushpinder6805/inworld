api.onPageChange(() => {
  requestAnimationFrame(() => {
    const banner = document.getElementById("banner");

    // Hide if already dismissed
    if (localStorage.getItem("bannerDismissed") === "true" && banner) {
      banner.style.display = "none";
      return;
    }

    // Bind close button
    const btn = banner?.querySelector(".close");
    if (btn && !btn.dataset.bound) {
      btn.dataset.bound = "true";
      btn.addEventListener("click", () => {
        banner.style.display = "none";
        localStorage.setItem("bannerDismissed", "true");
      });
    }
  });
});

