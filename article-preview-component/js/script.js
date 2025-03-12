//console.log("Scripting is running");

const shareIconBtn = document.querySelector(".share-icon");
const socialLinks = document.querySelector(".social-links");

shareIconBtn.addEventListener("click", () => {
  socialLinks.classList.toggle("active");

  if (socialLinks.classList.contains("share-active")) {
    shareIconBtn.classList.remove("share-active", "share-active-image");
  } else {
    shareIconBtn.classList.add("share-active", "share-active-image");
  }
});
