const containerEl = document.querySelector(".container");
const btnEl = document.querySelector(".btn");
const popupContainerEl = document.querySelector(".popup-container");
const closeIconEl = document.querySelector(".close-icon");

btnEl.addEventListener("click", () => {
    containerEl.classList.add("active");      // blur background
    popupContainerEl.classList.add("active"); // show popup
});

closeIconEl.addEventListener("click", () => {
    containerEl.classList.remove("active");      // remove blur
    popupContainerEl.classList.remove("active"); // hide popup
});
